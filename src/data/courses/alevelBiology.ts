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

export const ALEVEL_BIOLOGY_TOPICS: TopicDefinition[] = [
  {
    "number": 1,
    "title": "Biological Molecules",
    "subtopics": [
      {
        "id": "al-bio-1-1",
        "code": "1.1",
        "slug": "1.1-carbohydrates-lipids",
        "title": "Carbohydrates & Lipids",
        "readingMinutes": 12,
        "hasDeepContent": true
      },
      {
        "id": "al-bio-1-2",
        "code": "1.2",
        "slug": "1.2-proteins-enzymes-atp-nucleic-acids",
        "title": "Proteins, Enzymes, ATP & Nucleic Acids",
        "readingMinutes": 14,
        "hasDeepContent": true
      }
    ]
  },
  {
    "number": 2,
    "title": "Cells & Immunity",
    "subtopics": [
      {
        "id": "al-bio-2-1",
        "code": "2.1",
        "slug": "2.1-eukaryotic-ultrastructure-microscopy-mitosis",
        "title": "Eukaryotic Ultrastructure, Microscopy & Mitosis",
        "readingMinutes": 13,
        "hasDeepContent": true
      },
      {
        "id": "al-bio-2-2",
        "code": "2.2",
        "slug": "2.2-membrane-transport-immunity",
        "title": "Transport Across Membranes & The Immune Response",
        "readingMinutes": 14,
        "hasDeepContent": true
      }
    ]
  },
  {
    "number": 3,
    "title": "Exchange & Mass Transport",
    "subtopics": [
      {
        "id": "al-bio-3-1",
        "code": "3.1",
        "slug": "3.1-gas-exchange-systems",
        "title": "Gas Exchange in Insects, Fish, Plants & Mammals",
        "readingMinutes": 12,
        "hasDeepContent": true
      },
      {
        "id": "al-bio-3-2",
        "code": "3.2",
        "slug": "3.2-haemoglobin-cardiac-cycle-plant-transport",
        "title": "Haemoglobin, Cardiac Cycle & Xylem/Phloem Mass Flow",
        "readingMinutes": 14,
        "hasDeepContent": true
      }
    ]
  },
  {
    "number": 4,
    "title": "Genetic Information, Variation & Biodiversity",
    "subtopics": [
      {
        "id": "al-bio-4-1",
        "code": "4.1",
        "slug": "4.1-transcription-splicing-translation",
        "title": "DNA, Transcription, Splicing & Translation",
        "readingMinutes": 12,
        "hasDeepContent": true
      },
      {
        "id": "al-bio-4-2",
        "code": "4.2",
        "slug": "4.2-meiosis-selection-biodiversity",
        "title": "Meiosis, Natural Selection & Biodiversity",
        "readingMinutes": 12,
        "hasDeepContent": true
      }
    ]
  },
  {
    "number": 5,
    "title": "Energy Transfers in and between Organisms",
    "subtopics": [
      {
        "id": "al-bio-5-1",
        "code": "5.1",
        "slug": "5.1-photosynthesis-ldr-calvin",
        "title": "Photosynthesis: Light-Dependent & Calvin Cycle",
        "readingMinutes": 13,
        "hasDeepContent": true
      },
      {
        "id": "al-bio-5-2",
        "code": "5.2",
        "slug": "5.2-respiration-glycolysis-krebs-etc",
        "title": "Respiration: Glycolysis, Link, Krebs & Oxidative Phosphorylation",
        "readingMinutes": 14,
        "hasDeepContent": true
      }
    ]
  },
  {
    "number": 6,
    "title": "Organisms Respond to Changes in Their Environments",
    "subtopics": [
      {
        "id": "al-bio-6-1",
        "code": "6.1",
        "slug": "6.1-action-potentials-synapses",
        "title": "Action Potentials, Saltatory Conduction & Synapses",
        "readingMinutes": 13,
        "hasDeepContent": true
      },
      {
        "id": "al-bio-6-2",
        "code": "6.2",
        "slug": "6.2-sliding-filament-osmoregulation",
        "title": "Sliding Filament Model & Kidney Osmoregulation",
        "readingMinutes": 14,
        "hasDeepContent": true
      }
    ]
  },
  {
    "number": 7,
    "title": "Genetics, Populations, Evolution & Ecosystems",
    "subtopics": [
      {
        "id": "al-bio-7-1",
        "code": "7.1",
        "slug": "7.1-dihybrid-epistasis-hardy-weinberg",
        "title": "Dihybrid Inheritance, Epistasis & Hardy-Weinberg",
        "readingMinutes": 13,
        "hasDeepContent": true
      },
      {
        "id": "al-bio-7-2",
        "code": "7.2",
        "slug": "7.2-speciation-populations-succession",
        "title": "Speciation, Populations & Ecological Succession",
        "readingMinutes": 12,
        "hasDeepContent": true
      }
    ]
  },
  {
    "number": 8,
    "title": "The Control of Gene Expression",
    "subtopics": [
      {
        "id": "al-bio-8-1",
        "code": "8.1",
        "slug": "8.1-mutations-stem-cells-epigenetics",
        "title": "Mutations, Stem Cells, Epigenetics & Cancer",
        "readingMinutes": 13,
        "hasDeepContent": true
      },
      {
        "id": "al-bio-8-2",
        "code": "8.2",
        "slug": "8.2-pcr-recombinant-dna-gene-tech",
        "title": "PCR, Recombinant DNA & Genetic Fingerprinting",
        "readingMinutes": 13,
        "hasDeepContent": true
      }
    ]
  }
];

export const ALEVEL_BIOLOGY_NOTES: Record<string, NoteLesson> = {
  "al-bio-1-1": {
    "subtopicId": "al-bio-1-1",
    "subtopicCode": "1.1",
    "subtopicTitle": "Carbohydrates & Lipids",
    "readingMinutes": 12,
    "videoTitle": "A-Level Biology - Carbohydrates: Monosaccharides & Disaccharides",
    "youtubeId": "1ibWOa-S4bI",
    "videoChannel": "Cognito",
    "videoDuration": "6:26",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "Introduction to Carbohydrates",
        "cardId": "al-bio-1-1-c1"
      },
      {
        "time": "2:42",
        "seconds": 162,
        "label": "What Monosaccharides Are",
        "cardId": "al-bio-1-1-c1"
      },
      {
        "time": "3:58",
        "seconds": 238,
        "label": "Key Properties of Glucose",
        "cardId": "al-bio-1-1-c2"
      },
      {
        "time": "5:35",
        "seconds": 335,
        "label": "Hydrolysis of Disaccharides",
        "cardId": "al-bio-1-1-c3"
      }
    ],
    "cards": [
      {
        "id": "al-bio-1-1-c1",
        "title": "Monosaccharides, Disaccharides & Glycosidic Bonds",
        "summary": "Alpha and beta glucose isomers, disaccharides, and how condensation forms glycosidic bonds.",
        "bullets": [
          "Glucose (C₆H₁₂O₆) is a hexose monosaccharide with two structural isomers: **α-glucose** has the –OH group below carbon-1, whereas **β-glucose** has the –OH group above carbon-1.",
          "Two monosaccharides join via a condensation reaction, eliminating a molecule of water and forming a covalent glycosidic bond (**1,4- or 1,6-glycosidic linkage**).",
          "Key disaccharides: maltose (**α-glucose** + α-glucose), sucrose (α-glucose + fructose — non-reducing), and lactose (β-galactose + glucose).",
          "**Hydrolysis** adds a water molecule across the glycosidic bond (catalysed by enzymes or dilute HCl) to regenerate the constituent monomers."
        ],
        "glossaryPills": [
          {
            "term": "condensation reaction",
            "definition": "A chemical reaction joining two molecules together with the formation of a new covalent bond and elimination of a water molecule."
          },
          {
            "term": "glycosidic bond",
            "definition": "A covalent oxygen bridge (–O–) formed between the hydroxyl groups of two monosaccharides during condensation."
          }
        ],
        "memoryAid": "ABBA for glucose C1 hydroxyl position: Alpha Below, Beta Above.",
        "subsections": [
          {
            "heading": "Starch, Glycogen & Cellulose Structure–Function Comparison",
            "bullets": [
              "**Starch (α-glucose, plants)** - **amylose** (1,4 helical, compact) + **amylopectin** (1,4 & 1,6 branched, rapid enzymatic hydrolysis); **insoluble** so does NOT affect cell water potential!",
              "**Glycogen (α-glucose, animals)** - **shorter, MORE highly branched** 1,6 chains than amylopectin → rapid glucose release for high animal metabolic rates.",
              "**Cellulose (β-glucose, plant cell walls)** - every second β-glucose flips **180°**, forming **straight unbranched chains** cross-linked by **hydrogen bonds** into strong **microfibrils**."
            ],
            "exampleHeading": "Worked check: Benedict’s test for non-reducing sugar (sucrose)",
            "examples": [
              "Negative with Benedict’s → boil with **dilute HCl** (hydrolyses glycosidic bond) → **neutralise with NaHCO₃** → reheat with Benedict’s → **brick-red Cu₂O precipitate**!"
            ]
          }
        ]
      },
      {
        "id": "al-bio-1-1-c2",
        "title": "Polysaccharides: Starch, Glycogen & Cellulose",
        "summary": "How branching and hydrogen-bonded chains adapt starch, glycogen, and cellulose to their roles.",
        "bullets": [
          "Starch (plant **α-glucose** store) consists of unbranched helical **amylose** (1,4 bonds — compact) and branched **amylopectin** (1,4 and 1,6 bonds — rapid hydrolysis). Because starch is insoluble, it has no osmotic effect on cell water potential.",
          "**Glycogen** (animal/fungal **α-glucose** store) has shorter chains and far more frequent α-1,6 branches than **amylopectin**, exposing numerous terminal ends for rapid enzyme hydrolysis to meet high mammalian metabolic demand.",
          "**Cellulose** consists of straight, unbranched **β-glucose** chains linked by **β-1,4 glycosidic bonds**; every alternate β-glucose is inverted 180° so adjacent –OH groups align.",
          "Parallel cellulose chains cross-link via thousands of **hydrogen bonds** to assemble strong microfibrils and macrofibrils that resist osmotic lysis in plant cell walls."
        ],
        "glossaryPills": [
          {
            "term": "microfibrils",
            "definition": "Bundles of parallel cellulose polymer chains held together by numerous cross-linking hydrogen bonds, imparting high tensile strength."
          }
        ],
        "commonMistake": "Examiners penalise saying \"hydrogen bonds are strong\". Always state that individual hydrogen bonds are weak, but their huge collective number across parallel cellulose chains produces high tensile strength.",
        "subsections": [
          {
            "heading": "Triglycerides vs Phospholipids & Emulsion Test",
            "bullets": [
              "**Triglycerides** - 1 glycerol + 3 fatty acids via **3 ester bonds** (3 condensation reactions); high C–H ratio → high energy yield + metabolic water + insoluble (no osmotic effect).",
              "**Phospholipids** - hydrophilic phosphate head + 2 hydrophobic fatty acid tails → form **bilayers** blocking water-soluble polar ions."
            ],
            "exampleHeading": "Concrete lab check: Emulsion test for lipids",
            "examples": [
              "Shake sample thoroughly with **ethanol** (dissolves lipid), then pour into **water** → **milky-white emulsion** confirms lipid!"
            ]
          }
        ]
      },
      {
        "id": "al-bio-1-1-c3",
        "title": "Triglycerides, Phospholipids & Biochemical Food Tests",
        "summary": "Triglyceride esterification, amphipathic phospholipid bilayers, and biochemical sugar/lipid tests.",
        "bullets": [
          "A **triglyceride** forms by condensation of one **glycerol** molecule with three fatty acids, generating three ester bonds and three water molecules. **Saturated fatty acids** lack C=C double bonds; unsaturated fatty acids have C=C kinks lowering melting point.",
          "Triglycerides have a high ratio of C–H bonds to carbon atoms (energy-dense respiratory substrate), a high H:O ratio (release metabolic water on oxidation), and are non-polar/insoluble (no osmotic impact).",
          "**Phospholipids** substitute one fatty acid with a hydrophilic, negatively charged phosphate group, making them amphipathic so they spontaneously self-assemble into bilayers with a hydrophobic core.",
          "**Non-reducing sugar test** (e.g., sucrose): confirm negative Benedict’s result first, boil with dilute HCl to hydrolyse glycosidic bonds, neutralise with sodium hydrogencarbonate (NaHCO₃), then reheat with Benedict’s reagent to obtain a brick-red precipitate."
        ],
        "glossaryPills": [
          {
            "term": "ester bonds",
            "definition": "Covalent –COO– linkages formed between the hydroxyl groups of glycerol and the carboxyl groups of fatty acids."
          },
          {
            "term": "amphipathic",
            "definition": "Describing a molecule such as a phospholipid that possesses both a polar hydrophilic region and a non-polar hydrophobic region."
          }
        ],
        "memoryAid": "In the emulsion test for lipids: Ethanol first (dissolves lipid), then Water (milky white emulsion forms as insoluble lipid droplets precipitate)."
      }
    ],
    "keyTerms": [
      {
        "term": "Isomer",
        "definition": "Molecules with the same molecular formula (e.g. C₆H₁₂O₆) but different spatial arrangement of atoms (α- vs β-glucose)."
      },
      {
        "term": "Glycosidic bond",
        "definition": "Covalent bond linking two monosaccharides via an oxygen atom formed by condensation."
      },
      {
        "term": "Amylopectin",
        "definition": "Branched α-glucose polymer in starch containing both 1,4- and 1,6-glycosidic bonds."
      },
      {
        "term": "Microfibril",
        "definition": "Rope-like bundle of parallel β-glucose cellulose chains stabilised by numerous hydrogen bonds."
      },
      {
        "term": "Ester bond",
        "definition": "Covalent bond formed between glycerol and a fatty acid carboxyl group by condensation."
      },
      {
        "term": "Phospholipid",
        "definition": "Amphipathic lipid made of glycerol, two fatty acid tails, and a polar phosphate head."
      }
    ],
    "checklistPoints": [
      "Draw α- and β-glucose accurately and explain how 1,4 and 1,6 glycosidic bonds form by condensation.",
      "Relate the structures of amylose, amylopectin, glycogen, and cellulose directly to their biological roles.",
      "Compare triglyceride and phospholipid molecular architecture and explain why triglycerides are non-polymers.",
      "Describe step-by-step protocols for reducing sugar, non-reducing sugar, iodine, and emulsion tests."
    ]
  },
  "al-bio-1-2": {
    "subtopicId": "al-bio-1-2",
    "subtopicCode": "1.2",
    "subtopicTitle": "Proteins, Enzymes, ATP & Nucleic Acids",
    "readingMinutes": 14,
    "videoTitle": "A-Level Biology - Proteins: Structures - 4 Main Levels | Bonds",
    "youtubeId": "KcMFFzDn2FE",
    "videoChannel": "Cognito",
    "videoDuration": "4:26",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "Introduction to Protein Structure",
        "cardId": "al-bio-1-2-c1"
      },
      {
        "time": "0:55",
        "seconds": 55,
        "label": "Primary Structure & Peptide Bonds",
        "cardId": "al-bio-1-2-c1"
      },
      {
        "time": "1:17",
        "seconds": 77,
        "label": "Secondary Structure: Alpha-Helix & Beta-Pleated Sheet",
        "cardId": "al-bio-1-2-c1"
      },
      {
        "time": "3:02",
        "seconds": 182,
        "label": "Quaternary Structure & Prosthetic Groups",
        "cardId": "al-bio-1-2-c2"
      }
    ],
    "cards": [
      {
        "id": "al-bio-1-2-c1",
        "title": "Four Levels of Protein Structure",
        "summary": "Peptide bonds and the four levels of protein folding from primary sequence to quaternary complexes.",
        "bullets": [
          "Amino acids share an amine group (–NH₂), a carboxyl group (–COOH), a central α-carbon, a hydrogen atom, and a variable R-group; condensation joins them via **peptide bonds** (–CONH–).",
          "**Primary structure**: the exact linear sequence of amino acids in a polypeptide chain (determined by the DNA base sequence).",
          "**Secondary structure**: regular local folding into α-helices or β-pleated sheets stabilised solely by **hydrogen bonds** between –C=O and –NH groups of the peptide backbone.",
          "**Tertiary structure**: specific 3D folding driven by R-group interactions — **hydrogen bonds**, ionic bonds (sensitive to pH), hydrophobic interactions, and covalent disulphide bridges between cysteine residues.",
          "**Quaternary structure**: assembly of two or more polypeptide chains (e.g., haemoglobin has 4 subunits + 4 haem prosthetic groups) into a functional protein complex."
        ],
        "subsections": [
          {
            "heading": "Bond Types Across the Four Structural Levels",
            "bullets": [
              "**Primary → Secondary**: peptide bonds link the backbone, while **hydrogen bonds** between –C=O and –NH coil the chain into α-helices or fold it into β-pleated sheets.",
              "**Tertiary → Quaternary**: R-group **ionic bonds**, **hydrogen bonds**, **hydrophobic interactions**, and covalent **disulphide bridges** (between cysteine R-groups) lock the exact 3D shape; multiple subunits combine in quaternary proteins like haemoglobin."
            ],
            "exampleHeading": "Worked comparison: Globular (Haemoglobin) vs Fibrous (Collagen)",
            "examples": [
              "**Haemoglobin**: soluble, compact spherical quaternary protein (2 α + 2 β chains + 4 Fe²⁺ haem groups) suited to reversible O₂ transport; **Collagen**: insoluble triple-helix fibrous protein with cross-linked fibrils providing high tensile strength in tendons and artery walls."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "disulphide bridges",
            "definition": "Strong covalent S–S bonds formed between the sulphur-containing R-groups of two cysteine amino acids, stabilising tertiary structure."
          },
          {
            "term": "prosthetic groups",
            "definition": "Non-protein inorganic or organic components (such as iron-containing haem in haemoglobin) permanently bound to a quaternary protein."
          }
        ],
        "commonMistake": "Always specify that altering pH disrupts IONIC and hydrogen bonds between R-groups in the tertiary structure (not peptide bonds!), altering the active site shape."
      },
      {
        "id": "al-bio-1-2-c2",
        "title": "Induced-Fit Enzyme Catalysis & Inhibition",
        "summary": "Induced-fit catalysis and how competitive versus non-competitive inhibitors affect Vmax.",
        "diagram": "enzyme-lock-key",
        "bullets": [
          "Enzymes lower activation energy (Eₐ) by providing an alternative reaction pathway. In the **induced-fit model**, the active site is not initially completely complementary; substrate binding induces a conformational change that strains substrate bonds.",
          "**Competitive inhibitors** share a similar tertiary shape to the substrate and compete for the active site. Increasing substrate concentration outcompetes the inhibitor, allowing the reaction to reach the same Vmax.",
          "**Non-competitive inhibitors** bind to an allosteric site away from the active site, distorting the enzyme’s tertiary structure and active site shape. Increasing substrate concentration cannot restore Vmax."
        ],
        "subsections": [
          {
            "heading": "Competitive vs Non-Competitive Enzyme Inhibition",
            "bullets": [
              "**Competitive inhibitor** - similar shape to substrate, competes for **active site**; effect **CAN be overcome** by raising **[substrate]** (same V_max reached at higher [S]!).",
              "**Non-competitive inhibitor** - binds to an **allosteric site** away from active site, distorting the enzyme’s tertiary structure so the active site no longer fits substrate; **CANNOT be overcome** by adding more substrate (V_max permanently lowered!)."
            ],
            "exampleHeading": "Worked check: ATP as an immediate energy currency",
            "examples": [
              "Hydrolysed in a **single step** (ATP → ADP + P_i, catalysed by ATP hydrolase) releasing small, manageable energy packets; P_i **phosphorylates** other molecules to make them more reactive!"
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "allosteric site",
            "definition": "A binding region on an enzyme distinct from the active site where regulatory molecules or non-competitive inhibitors attach."
          }
        ],
        "memoryAid": "Competitive = Crowds the active site (can be beaten by adding more substrate). Non-competitive = Never reaches original Vmax."
      },
      {
        "id": "al-bio-1-2-c3",
        "title": "ATP, DNA/RNA Structure & Semi-Conservative Replication",
        "summary": "ATP phosphorylation, antiparallel DNA strands, and Meselson-Stahl semi-conservative replication.",
        "bullets": [
          "ATP (adenosine triphosphate) is a phosphorylated nucleotide (adenine + ribose + 3 phosphate groups). **ATP hydrolase** catalyses ATP + H₂O → ADP + Pᵢ in a single step, releasing small manageable packets of energy; Pᵢ can phosphorylate other molecules to make them more reactive.",
          "DNA consists of two **antiparallel** polynucleotide strands (5′→3′ and 3′→5′) linked by phosphodiester bonds along the sugar-phosphate backbone and complementary base pairing (A=T with 2 H-bonds; C≡G with 3 H-bonds).",
          "Semi-conservative replication: **DNA helicase** breaks **hydrogen bonds** to unwind the helix; free phosphorylated DNA nucleotides pair with exposed template bases; **DNA polymerase** catalyses phosphodiester bond condensation only in the 5′→3′ direction (leading continuous, lagging Okazaki fragments).",
          "**Meselson and Stahl** grew *E. coli* in heavy ¹⁵N then transferred to light ¹⁴N medium: Generation 1 gave one hybrid intermediate density band (disproving conservative replication), and Generation 2 gave 50% hybrid + 50% light bands (confirming semi-conservative replication)."
        ],
        "subsections": [
          {
            "heading": "Meselson & Stahl (1958) Density-Gradient Band Predictions",
            "bullets": [
              "**Generation 0 (100% ¹⁵N)**: 100% heavy DNA band at the bottom of the CsCl gradient.",
              "**Generation 1 (1 round in ¹⁴N)**: 100% intermediate hybrid (¹⁵N/¹⁴N) band — immediately rules out conservative replication!",
              "**Generation 2 (2 rounds in ¹⁴N)**: 50% intermediate hybrid (¹⁵N/¹⁴N) + 50% light (¹⁴N/¹⁴N) bands; **Generation 3**: 25% hybrid + 75% light."
            ],
            "exampleHeading": "Worked check: Base-percentage exam calculation",
            "examples": [
              "If a double-stranded DNA sample contains **22% Adenine (A)**, complementary pairing gives **22% Thymine (T)** (44% A+T total), leaving 56% shared equally between **28% Cytosine (C)** and **28% Guanine (G)**."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "phosphodiester bonds",
            "definition": "Covalent ester linkages connecting the 3′ carbon of one pentose sugar to the 5′ phosphate group of the next nucleotide in a nucleic acid strand."
          }
        ],
        "commonMistake": "DNA polymerase forms phosphodiester bonds between adjacent nucleotides — it does NOT form hydrogen bonds between complementary base pairs (those form spontaneously)."
      }
    ],
    "keyTerms": [
      {
        "term": "Induced-fit model",
        "definition": "Enzyme catalysis model where binding of substrate causes a conformational change in the active site, straining substrate bonds to lower activation energy."
      },
      {
        "term": "Non-competitive inhibitor",
        "definition": "Molecule binding to an allosteric site, changing active site tertiary structure so fewer enzyme-substrate complexes form regardless of substrate concentration."
      },
      {
        "term": "Phosphorylation",
        "definition": "Addition of an inorganic phosphate group (Pᵢ) from ATP hydrolysis to a molecule, raising its reactivity or altering protein shape."
      },
      {
        "term": "Phosphodiester bond",
        "definition": "Strong covalent linkage forming the sugar-phosphate backbone of DNA and RNA polynucleotides."
      },
      {
        "term": "Semi-conservative replication",
        "definition": "DNA replication mechanism where each daughter double helix retains one original parent strand and one newly synthesised strand."
      }
    ],
    "checklistPoints": [
      "Distinguish primary, secondary, tertiary, and quaternary protein structures and the exact bonds stabilising each level.",
      "Explain induced-fit catalysis and contrast competitive vs non-competitive inhibition on rate-substrate graphs.",
      "Explain why ATP is a better immediate energy currency than glucose and how ATP synthase resynthesises it.",
      "Describe DNA helicase and DNA polymerase action (5′→3′ directionality) and explain Meselson & Stahl’s density gradient evidence."
    ]
  },
  "al-bio-2-1": {
    "subtopicId": "al-bio-2-1",
    "subtopicCode": "2.1",
    "subtopicTitle": "Eukaryotic Ultrastructure, Microscopy & Mitosis",
    "readingMinutes": 13,
    "videoTitle": "A-Level Biology - Electron Microscopes: TEM & SEM",
    "youtubeId": "ZqBvRgYXKEA",
    "videoChannel": "Cognito",
    "videoDuration": "6:35",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "Introduction to Microscopes",
        "cardId": "al-bio-2-1-c2"
      },
      {
        "time": "1:40",
        "seconds": 100,
        "label": "Disadvantages of Electron Microscopes",
        "cardId": "al-bio-2-1-c2"
      },
      {
        "time": "2:11",
        "seconds": 131,
        "label": "Transmission Electron Microscopes (TEM)",
        "cardId": "al-bio-2-1-c2"
      },
      {
        "time": "4:19",
        "seconds": 259,
        "label": "Comparison of Light, TEM, and SEM Microscopes",
        "cardId": "al-bio-2-1-c2"
      }
    ],
    "cards": [
      {
        "id": "al-bio-2-1-c1",
        "title": "Eukaryotic Ultrastructure & Secretory Pathway",
        "summary": "Nucleus, RER, Golgi secretory pathway, and how eukaryotes contrast with prokaryotes and viruses.",
        "diagram": "eukaryotic-vs-prokaryotic",
        "bullets": [
          "Nucleus: double-membrane nuclear envelope perforated by nuclear pores; contains chromatin (DNA bound to histones) and a dense nucleolus that synthesises rRNA and assembles 80S ribosome subunits.",
          "**Rough Endoplasmic Reticulum (RER)**: flattened cisternae studded with **80S ribosomes** that fold and transport newly synthesised polypeptides; **Smooth ER (SER)** synthesises and processes lipids and steroids.",
          "**Golgi apparatus**: stack of curved cisternae that modifies proteins (e.g., glycosylation to form glycoproteins), packages them into secretory vesicles for exocytosis, and buds off lysosomes containing hydrolytic lysozymes.",
          "Prokaryotes lack membrane-bound organelles, possess smaller **70S ribosomes**, circular naked DNA (no histones), a murein (peptidoglycan) cell wall, and optional plasmids or slime capsule; viruses are acellular with nucleic acid, capsid, and attachment proteins."
        ],
        "subsections": [
          {
            "heading": "Prokaryotic cells & acellular viruses",
            "bullets": [
              "Prokaryotes have **no membrane-bound organelles**, smaller **70S ribosomes**, a circular naked DNA loop, and a **murein (peptidoglycan)** cell wall.",
              "Viruses are **acellular and non-living**, consisting of nucleic acid (DNA or RNA) inside a protein **capsid** studded with host-specific **attachment proteins**."
            ],
            "diagram": "bacterial-cell",
            "exampleHeading": "Key A-Level examples:",
            "examples": [
              "***Escherichia coli*** — Model Gram-negative prokaryote used in Meselson-Stahl replication and plasmid cloning",
              "**HIV retrovirus** — Enveloped RNA virus carrying reverse transcriptase and gp120 attachment proteins"
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "cisternae",
            "definition": "Flattened, fluid-filled membrane-bound sacs forming the rough/smooth endoplasmic reticulum and the Golgi apparatus."
          },
          {
            "term": "lysozymes",
            "definition": "Hydrolytic enzymes contained within lysosomes that break down worn-out organelles or engulfed pathogens."
          }
        ],
        "memoryAid": "Secretory route: Nucleus (mRNA) → RER (polypeptide folding) → Transport Vesicle → Golgi (modification) → Secretory Vesicle → Exocytosis."
      },
      {
        "id": "al-bio-2-1-c2",
        "title": "Optical, TEM & SEM Microscopy + Cell Fractionation",
        "summary": "Comparing optical, TEM, and SEM resolution alongside cold, isotonic, buffered cell fractionation.",
        "diagram": "microscope",
        "bullets": [
          "**Optical (light) microscopes** have low resolution (~200 nm) because visible light has a relatively long wavelength, limiting useful magnification to ~×1,500, though living coloured specimens can be observed.",
          "**Transmission Electron Microscopes (TEM)** pass an electron beam (very short de Broglie wavelength) through an ultrathin stained specimen in a vacuum, giving the highest resolution (~0.1 nm) and 2D internal ultrastructure images.",
          "**Scanning Electron Microscopes (SEM)** scan an electron beam across a heavy-metal-coated surface and detect scattered/secondary electrons, producing 3D topographical images with lower resolution (~20 nm) than TEM.",
          "**Cell fractionation** homogenises tissue in a Cold (reduces enzyme activity that could digest organelles), Isotonic (same water potential to prevent osmotic lysis/shrinking), Buffered (constant pH to prevent protein denaturation) solution, followed by differential ultracentrifugation pelleting organelles by density: Nuclei → Chloroplasts/Mitochondria → Lysosomes → ER → Ribosomes."
        ],
        "glossaryPills": [
          {
            "term": "ultracentrifugation",
            "definition": "Spinning filtered cell homogenate at progressively higher speeds to separate organelles into pellets according to their relative density."
          }
        ],
        "commonMistake": "Remember the exact order of pelleting in differential centrifugation: heaviest first (Nuclei), then Chloroplasts/Mitochondria, then Lysosomes, and lightest last (Ribosomes).",
        "subsections": [
          {
            "heading": "Cell Fractionation & Ultracentrifugation Protocol",
            "bullets": [
              "**Homogenisation buffer (3 essential conditions!)** - **Cold** (reduces enzyme activity that would digest organelles); **Isotonic** (prevents organelles bursting/shrinking by osmosis); **Buffered** (keeps pH constant to prevent enzyme/protein denaturation!).",
              "**Centrifugation order (heaviest pellet first)** - **Nuclei → Chloroplasts → Mitochondria → Lysosomes → ER → Ribosomes** (smallest/lightest!)."
            ],
            "exampleHeading": "Worked example: Mitotic Index calculation",
            "examples": [
              "If 24 cells out of 200 in a root-tip squash show visible chromosomes, Mitotic Index = 24 / 200 = **0.12** (or 12%)."
            ]
          }
        ]
      },
      {
        "id": "al-bio-2-1-c3",
        "title": "The Cell Cycle, Mitosis & Mitotic Index",
        "summary": "Interphase, PMAT mitotic stages, cytokinesis, and calculating the mitotic index.",
        "diagram": "mitosis-cycle",
        "bullets": [
          "**Interphase** occupies ~90% of the cell cycle: G₁ (growth & protein/organelle synthesis), S phase (semi-conservative DNA replication), and G₂ (checkpoint prep for division).",
          "**Prophase**: chromosomes condense into visible pairs of sister chromatids joined at a centromere; centrioles migrate to opposite poles forming spindle fibres; nuclear envelope breaks down.",
          "**Metaphase**: chromosomes align along the cell equator as spindle fibres attach to centromeres. **Anaphase**: centromeres divide and spindle fibres shorten, pulling sister chromatids (V-shaped) to opposite poles (requires ATP).",
          "**Telophase** & Cytokinesis: chromatids decondense, nuclear envelopes reform, cytoplasm divides. **Mitotic index** = (Number of cells with visible chromosomes ÷ Total cells observed) × 100 (or as a decimal ratio)."
        ],
        "glossaryPills": [
          {
            "term": "centromere",
            "definition": "The constricted region of a replicated chromosome linking two identical sister chromatids and serving as the spindle fibre attachment point."
          }
        ],
        "memoryAid": "PMAT: Prophase (Pack up), Metaphase (Middle), Anaphase (Apart), Telophase (Two nuclei)."
      }
    ],
    "keyTerms": [
      {
        "term": "Nucleolus",
        "definition": "Dense region inside the nucleus responsible for synthesising ribosomal RNA (rRNA) and assembling ribosomes."
      },
      {
        "term": "TEM",
        "definition": "Transmission Electron Microscope passing electrons through ultrathin sections for maximum (~0.1 nm) 2D resolution."
      },
      {
        "term": "SEM",
        "definition": "Scanning Electron Microscope bouncing electrons off a specimen surface to produce 3D images."
      },
      {
        "term": "Cell fractionation",
        "definition": "Homogenisation in cold, isotonic, buffered solution followed by differential centrifugation to isolate pure organelles."
      },
      {
        "term": "Mitotic index",
        "definition": "The proportion of cells in a tissue sample undergoing mitosis, used to assess growth rate or tumour proliferation."
      }
    ],
    "checklistPoints": [
      "Trace the synthesis, modification, and secretion of a glycoprotein from nucleus to cell-surface membrane.",
      "Compare optical, TEM, and SEM microscopes in terms of wavelength, resolution, magnification, 2D/3D output, and specimen preparation.",
      "Justify why cell fractionation medium must be cold, isotonic, and buffered, and recall organelle sedimentation order.",
      "Identify PMAT stages from root-tip squash micrographs and calculate the mitotic index accurately."
    ]
  },
  "al-bio-2-2": {
    "subtopicId": "al-bio-2-2",
    "subtopicCode": "2.2",
    "subtopicTitle": "Transport Across Membranes & The Immune Response",
    "readingMinutes": 14,
    "videoTitle": "A-Level Biology - Monoclonal Antibodies | ELISA Test | Hybridoma Method",
    "youtubeId": "TH8wSzfKz5M",
    "videoChannel": "Cognito",
    "videoDuration": "7:34",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "What are Monoclonal Antibodies?",
        "cardId": "al-bio-2-2-c3"
      },
      {
        "time": "1:13",
        "seconds": 73,
        "label": "Diagnostic and Therapeutic Uses",
        "cardId": "al-bio-2-2-c3"
      },
      {
        "time": "2:49",
        "seconds": 169,
        "label": "The ELISA Test Explained",
        "cardId": "al-bio-2-2-c3"
      },
      {
        "time": "5:25",
        "seconds": 325,
        "label": "The Hybridoma Method",
        "cardId": "al-bio-2-2-c2"
      }
    ],
    "cards": [
      {
        "id": "al-bio-2-2-c1",
        "title": "Fluid Mosaic Model, Water Potential & Co-Transport",
        "summary": "Fluid mosaic membranes, water potential in kPa, and ileum sodium-glucose co-transport.",
        "diagram": "osmosis-membrane",
        "bullets": [
          "The plasma membrane is a **fluid mosaic** of mobile phospholipids interspersed with intrinsic channel/carrier proteins, extrinsic glycoproteins/glycolipids (cell recognition/receptors), and **cholesterol** (reduces lateral phospholipid movement at high temperatures and prevents crystallisation at low temperatures).",
          "Water potential (Ψ, measured in kPa) is the tendency of water molecules to diffuse out of a solution. Pure water has the highest water potential (Ψ = 0 kPa); adding solutes lowers Ψ to more negative values. Osmosis always proceeds from higher (less negative) to lower (more negative) water potential.",
          "Ileum sodium-glucose co-transport: (1) **Na⁺/K⁺ ATPase** actively pumps Na⁺ out of the epithelial cell into the blood, maintaining a low intracellular [Na⁺]; (2) Na⁺ diffuses down its electrochemical gradient from the ileum lumen through a co-transport carrier protein, dragging glucose against its concentration gradient; (3) glucose exits into the capillary by facilitated diffusion."
        ],
        "glossaryPills": [
          {
            "term": "water potential",
            "definition": "The potential energy of water per unit volume relative to pure water (0 kPa), determining the net direction of osmosis."
          },
          {
            "term": "co-transport",
            "definition": "Coupled transport in which the downhill diffusion of one ion (e.g. Na⁺) drives the uphill transport of another molecule (e.g. glucose) through the same carrier protein."
          }
        ],
        "commonMistake": "Always write \"more negative\" / \"less negative\" (or higher/lower water potential) — NEVER say \"higher concentration of water\" in an A-Level osmosis answer.",
        "subsections": [
          {
            "heading": "Sodium–Glucose Co-Transport in the Ileum (Classic 5-Marker!)",
            "bullets": [
              "**Step 1** - **Na⁺/K⁺ pump** actively transports Na⁺ OUT of the epithelial cell into the blood, keeping intracellular [Na⁺] LOW.",
              "**Step 2** - Na⁺ diffuses down its concentration gradient from the gut lumen into the cell via a **co-transporter protein**, carrying **glucose AGAINST its concentration gradient** into the cell!",
              "**Step 3** - Glucose diffuses down its gradient from the epithelial cell into the blood via **facilitated diffusion** (GLUT carrier)."
            ],
            "exampleHeading": "Worked check: Water potential definition",
            "examples": [
              "Pure water has **ψ = 0 kPa**; adding solutes makes ψ **MORE NEGATIVE**; water moves by osmosis from **higher (less negative) ψ to lower (more negative) ψ**!"
            ]
          }
        ]
      },
      {
        "id": "al-bio-2-2-c2",
        "title": "Phagocytosis, Cell-Mediated & Humoral Immunity",
        "summary": "Phagocytosis, antigen presentation, T-cell cellular immunity, and B-cell humoral antibodies.",
        "bullets": [
          "**Phagocytosis**: phagocyte recognises foreign antigens on a pathogen, engulfs it by endocytosis into a phagosome, which fuses with a lysosome; lysozymes hydrolyse the pathogen and antigens are displayed on the cell-surface membrane (antigen-presenting cell, APC).",
          "**Cell-mediated immunity** (T-lymphocytes): T-helper (Tʜ) cells with complementary receptors bind APCs and clone via mitosis, releasing cytokines that activate cytotoxic T cells (secreting perforin to punch holes in infected cells), stimulate phagocytes, and activate B cells.",
          "**Humoral immunity** (B-lymphocytes): a B cell with a complementary surface antibody endocytoses and presents the antigen; Tʜ cell binding triggers clonal selection and clonal expansion into plasma cells (secreting millions of monoclonal antibodies) and long-lived memory B cells.",
          "Antibodies are quaternary proteins (2 heavy + 2 light chains linked by disulphide bridges) with two variable antigen-binding sites enabling agglutination (clumping pathogens for efficient phagocytosis)."
        ],
        "glossaryPills": [
          {
            "term": "clonal selection",
            "definition": "The specific activation of only those B or T lymphocytes whose surface receptors are complementary to a presenting foreign antigen."
          },
          {
            "term": "agglutination",
            "definition": "Cross-linking of multiple pathogens into large clumps by bivalent antibodies, making engulfment by phagocytes far easier."
          }
        ],
        "memoryAid": "T-cells = Target whole body cells (Cell-mediated); B-cells = Blood/humour antibodies (Humoral).",
        "subsections": [
          {
            "heading": "Humoral (B-Cell) vs Cell-Mediated (T-Cell) Immunity & ELISA",
            "bullets": [
              "**Cell-mediated** - phagocyte presents antigen (APC) → activates complementary **T-helper cells** → stimulate **cytotoxic T-cells** (release **perforin** to punch holes in infected cells) and activate B-cells.",
              "**Humoral** - B-cell presents antigen, binds T-helper → clonal expansion into **plasma cells** (secrete monoclonal **antibodies** that cause **agglutination**) and **memory B-cells** (rapid, stronger **secondary response**!)."
            ],
            "exampleHeading": "Concrete check: Indirect ELISA test (e.g. HIV antibody detection)",
            "examples": [
              "Fix HIV antigen to well → add patient serum → wash → add enzyme-linked secondary antibody → wash → add substrate → **colour change confirms specific antibodies present**!"
            ]
          }
        ]
      },
      {
        "id": "al-bio-2-2-c3",
        "title": "Monoclonal Antibodies, ELISA & HIV",
        "summary": "Monoclonal antibody therapy, step-by-step indirect ELISA assays, and HIV replication.",
        "diagram": "virus-particle",
        "bullets": [
          "**Monoclonal antibodies** are identical antibodies produced from a single cloned B-plasma cell line (hybridoma), targeted to one specific antigen epitope (e.g., HER2 on breast cancer cells for targeted drug delivery or pregnancy tests).",
          "**Indirect ELISA test**: target antigen is immobilised in a well → patient serum added (primary antibodies bind if present) → washed to remove unbound antibody → enzyme-linked secondary antibody binds primary antibody → washed again → colourless substrate added, producing a colour change proportional to antibody concentration.",
          "**HIV** is a retrovirus containing RNA and reverse transcriptase enclosed in a capsid and lipid envelope studded with gp120 attachment proteins. It infects and destroys Tʜ cells; once Tʜ count falls critically low, the patient develops AIDS and succumbs to opportunistic infections."
        ],
        "glossaryPills": [
          {
            "term": "reverse transcriptase",
            "definition": "Viral enzyme used by retroviruses like HIV to synthesise complementary DNA (cDNA) from an RNA template."
          }
        ],
        "commonMistake": "In an ELISA mark scheme, never omit the WASHING steps! Washing removes unbound antibodies so false-positive colour changes cannot occur."
      }
    ],
    "keyTerms": [
      {
        "term": "Fluid mosaic model",
        "definition": "Membrane architecture comprising a mobile phospholipid bilayer interspersed with embedded proteins, glycoproteins, and cholesterol."
      },
      {
        "term": "Water potential (Ψ)",
        "definition": "Measure of the free energy of water in kPa (pure water = 0 kPa; solutes make Ψ more negative)."
      },
      {
        "term": "Antigen-presenting cell",
        "definition": "A phagocyte or B cell displaying processed foreign antigens on its plasma membrane to activate complementary T-helper cells."
      },
      {
        "term": "Monoclonal antibody",
        "definition": "Antibodies with identical tertiary variable regions derived from a single clone of plasma cells specific to one antigen."
      },
      {
        "term": "ELISA",
        "definition": "Enzyme-Linked Immunosorbent Assay using antibody-bound enzymes to detect and quantify specific antigens or antibodies."
      }
    ],
    "checklistPoints": [
      "Explain the roles of phospholipids, cholesterol, channel/carrier proteins, and glycoproteins in plasma membranes.",
      "Detail all three steps of sodium-glucose co-transport across the mammalian ileum epithelium.",
      "Contrast primary and secondary immune responses and distinguish cell-mediated (T-cell) from humoral (B-cell) immunity.",
      "Outline an indirect ELISA assay (including washing steps and control wells) and explain how HIV causes AIDS."
    ]
  },
  "al-bio-3-1": {
    "subtopicId": "al-bio-3-1",
    "subtopicCode": "3.1",
    "subtopicTitle": "Gas Exchange in Insects, Fish, Plants & Mammals",
    "readingMinutes": 12,
    "videoTitle": "A-Level Biology - Gas Exchange in Fish | Countercurrent Exchange",
    "youtubeId": "rBthb6EM5Qc",
    "videoChannel": "Cognito",
    "videoDuration": "7:10",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "Introduction to Gas Exchange in Fish",
        "cardId": "al-bio-3-1-c2"
      },
      {
        "time": "0:27",
        "seconds": 27,
        "label": "Specialised Gas Exchange Surfaces",
        "cardId": "al-bio-3-1-c1"
      },
      {
        "time": "2:50",
        "seconds": 170,
        "label": "The Countercurrent Exchange System",
        "cardId": "al-bio-3-1-c2"
      },
      {
        "time": "5:25",
        "seconds": 325,
        "label": "How Fish Ventilate Their Gills",
        "cardId": "al-bio-3-1-c2"
      }
    ],
    "cards": [
      {
        "id": "al-bio-3-1-c1",
        "title": "SA:V Ratio, Fick’s Law & Insect Gas Exchange",
        "summary": "SA:V constraints, Fick’s Law, and insect tracheal gas exchange while limiting water loss.",
        "bullets": [
          "As organism size increases, surface area to volume (SA:V) ratio decreases rapidly, meaning simple diffusion across the outer surface is too slow to supply metabolically active internal tissues — requiring specialised exchange surfaces and mass transport.",
          "**Fick’s Law**: Rate of diffusion ∝ (Surface area × Concentration difference) ÷ Length of diffusion pathway.",
          "Insects exchange gases via **spiracles** (valved pores that close to conserve water) opening into chitin-lined **tracheae** that branch into thin-walled, fluid-tipped tracheoles reaching individual respiring muscle fibres.",
          "During intense flight, anaerobic **lactate** lowers muscle cell water potential, drawing tracheal fluid out of tracheole tips by osmosis — exposing a larger gas-phase surface area and shortening the diffusion path."
        ],
        "glossaryPills": [
          {
            "term": "tracheoles",
            "definition": "Microscopic, highly branched gas-exchange tubules in insects with thin permeable walls delivering oxygen directly to respiring tissues."
          }
        ],
        "memoryAid": "Insects conserve water using 3 layers: Waxy waterproof cuticle + Spiracle valves + Tiny SA:V of internalised tracheae.",
        "subsections": [
          {
            "heading": "Countercurrent Flow in Fish Gills (Exam Classic!)",
            "bullets": [
              "**Blood and water flow in OPPOSITE directions** across gill lamellae → **blood always meets water with a HIGHER oxygen concentration**!",
              "**Result** - a favourable **diffusion gradient is maintained across the ENTIRE length of the gill lamella** (reaching ~80% O₂ saturation instead of plateauing at 50% in parallel flow!)."
            ],
            "exampleHeading": "Worked check: Fick’s Law of Diffusion",
            "examples": [
              "Rate of diffusion ∝ **(Surface Area × Concentration Difference) / Diffusion Distance** — every gas-exchange organ maximises numerator and minimises denominator!"
            ]
          }
        ]
      },
      {
        "id": "al-bio-3-1-c2",
        "title": "Fish Gills & Countercurrent Exchange",
        "summary": "Gill lamellae structure and how countercurrent flow sustains an O₂ gradient along the entire gill.",
        "bullets": [
          "Bony fish gills consist of four gill arches bearing stacks of gill filaments covered in perpendicular **gill lamellae**, giving an immense surface area and a short diffusion distance across squamous epithelium and capillary endothelium.",
          "In countercurrent flow, oxygenated water flows over the **gill lamellae** in the OPPOSITE direction to deoxygenated blood flowing inside the lamella capillaries.",
          "Countercurrent flow maintains a steep oxygen concentration gradient across the ENTIRE length of the gill lamella — allowing blood to reach ~80% oxygen saturation rather than stalling at 50% equilibrium (as would happen in parallel/concurrent flow)."
        ],
        "glossaryPills": [
          {
            "term": "countercurrent flow",
            "definition": "Arrangement in fish gills where blood and water flow in opposite directions, preserving a favourable diffusion gradient along the full length of the lamella."
          }
        ],
        "commonMistake": "Always state that countercurrent exchange maintains a diffusion gradient across the ENTIRE length of the gill lamella (equilibrium is never reached).",
        "subsections": [
          {
            "heading": "Insect Tracheal System & Xerophytic Plant Adaptations",
            "bullets": [
              "**Insects** - air enters **spiracles** → **tracheae** → **tracheoles** directly delivering O₂ to muscle cells; during flight, **lactate** lowers muscle water potential so tracheole fluid is drawn into cells by osmosis, **shortening gas diffusion distance**!",
              "**Xerophytes (marram grass)** - sunken stomata in pits, rolled leaves, dense hairs (trap humid air → lower water-potential gradient!), thick waxy cuticle, reduced SA:V spines."
            ],
            "exampleHeading": "Worked example: Pulmonary Ventilation Rate (PVR)",
            "examples": [
              "PVR = **Tidal Volume × Breathing Rate** (e.g. 0.50 dm³ × 14 min⁻¹ = **7.0 dm³ min⁻¹**)."
            ]
          }
        ]
      },
      {
        "id": "al-bio-3-1-c3",
        "title": "Xerophytic Plants & Mammalian Ventilation",
        "summary": "Xerophytic leaf adaptations, alveolar ventilation mechanics, and lung disease effects.",
        "bullets": [
          "Dicotyledonous leaves balance CO₂ uptake against transpiration loss via spongy mesophyll air spaces and stomata; xerophytes (e.g., marram grass) reduce water potential gradient using rolled leaves, sunken stomata in humid pits, trichome hairs trapping moist air, thick waxy cuticles, and reduced needle-like surface area.",
          "Mammalian inspiration (active): external intercostal muscles contract pulling ribs up and out, diaphragm contracts and flattens, thoracic volume increases, pressure drops below atmospheric pressure so air is forced in.",
          "**Pulmonary Ventilation Rate** (dm³ min⁻¹) = Tidal Volume (dm³) × Breathing Rate (min⁻¹). Alveolar fibrosis thickens the epithelium (longer diffusion pathway) and reduces elasticity (lower tidal volume); emphysema destroys alveolar elastin, reducing surface area."
        ],
        "glossaryPills": [
          {
            "term": "xerophytes",
            "definition": "Plants adapted to arid environments with structural and physiological features that minimise water vapour loss by transpiration."
          }
        ],
        "memoryAid": "Trapped humid air reduces the water potential gradient between the stomatal air space and outside air — that is the exact A-Level phrase examiners want!"
      }
    ],
    "keyTerms": [
      {
        "term": "Spiracle",
        "definition": "Controllable pore along an insect’s abdomen/thorax permitting gas entry while limiting evaporation."
      },
      {
        "term": "Countercurrent exchange",
        "definition": "Opposite-direction flow of blood and water across fish gill lamellae maintaining an O₂ diffusion gradient along the whole length."
      },
      {
        "term": "Xerophyte",
        "definition": "Plant adapted to dry habitats by reducing stomatal water potential gradient and surface area."
      },
      {
        "term": "Pulmonary ventilation rate",
        "definition": "Total volume of air moved into the lungs per minute (Tidal volume × Breathing rate)."
      }
    ],
    "checklistPoints": [
      "Apply Fick’s Law to justify adaptations in insect tracheoles, fish gill lamellae, plant leaves, and mammalian alveoli.",
      "Sketch and explain countercurrent vs parallel oxygen saturation graphs in fish gills.",
      "Explain how xerophytic features lower the water potential gradient around stomata.",
      "Calculate pulmonary ventilation rate and explain how asthma, fibrosis, and emphysema affect FEV₁ and FVC."
    ]
  },
  "al-bio-3-2": {
    "subtopicId": "al-bio-3-2",
    "subtopicCode": "3.2",
    "subtopicTitle": "Haemoglobin, Cardiac Cycle & Xylem/Phloem Mass Flow",
    "readingMinutes": 14,
    "videoTitle": "A-Level Biology - Haemoglobin - Oxygen Dissociation Curve | Bohr Effect",
    "youtubeId": "_d7wBrrnGN0",
    "videoChannel": "Cognito",
    "videoDuration": "9:44",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "Introduction",
        "cardId": "al-bio-3-2-c1"
      },
      {
        "time": "2:02",
        "seconds": 122,
        "label": "Oxygen Dissociation Curve",
        "cardId": "al-bio-3-2-c1"
      },
      {
        "time": "4:33",
        "seconds": 273,
        "label": "Adaptations to Altitude",
        "cardId": "al-bio-3-2-c1"
      },
      {
        "time": "8:38",
        "seconds": 518,
        "label": "Chloride Shift",
        "cardId": "al-bio-3-2-c1"
      }
    ],
    "cards": [
      {
        "id": "al-bio-3-2-c1",
        "title": "Haemoglobin, Cooperative Binding & The Bohr Effect",
        "summary": "Haemoglobin cooperative binding, the rightward Bohr shift, and high-affinity altitude/foetal adaptations.",
        "bullets": [
          "**Haemoglobin** is a quaternary protein of four polypeptide chains (2α, 2β), each bound to an Fe²⁺-containing haem group capable of reversibly binding one O₂ molecule (4 O₂ per haemoglobin).",
          "Sigmoidal (S-shaped) oxyhaemoglobin dissociation curve arises from positive cooperative binding: binding the first O₂ alters haemoglobin’s tertiary/quaternary shape, exposing the remaining haem sites so the 2nd and 3rd O₂ bind much more readily.",
          "The Bohr effect: high partial pressure of CO₂ (from actively respiring tissues) dissolves to form carbonic acid, lowering blood pH and altering haemoglobin’s tertiary structure so it has a LOWER affinity for O₂ — shifting the dissociation curve to the RIGHT and unloading more O₂ to active muscle.",
          "Organisms in low-O₂ habitats (llamas, lugworms, human foetus) possess haemoglobin with a curve shifted to the LEFT (higher O₂ affinity), enabling loading at lower pO₂."
        ],
        "glossaryPills": [
          {
            "term": "cooperative binding",
            "definition": "Conformational change triggered when the first oxygen molecule binds to haemoglobin, increasing the affinity of the remaining haem groups for oxygen."
          },
          {
            "term": "Bohr effect",
            "definition": "Rightward shift of the oxyhaemoglobin dissociation curve at high pCO₂ / low pH, lowering haemoglobin’s O₂ affinity so more oxygen is unloaded to respiring tissues."
          }
        ],
        "memoryAid": "Left = Loads easily (high affinity — Llama/Foetus); Right = Releases readily (low affinity — Respiring muscle / Bohr shift).",
        "subsections": [
          {
            "heading": "Oxygen Dissociation Curve & The Bohr Effect",
            "bullets": [
              "**Cooperative binding (S-shape)** - binding the 1st O₂ alters haemoglobin’s quaternary shape, making the 2nd and 3rd O₂ bind **much more easily**!",
              "**Bohr shift (RIGHT at high CO₂)** - active respiring tissues release CO₂ → lowers blood pH → changes haemoglobin’s tertiary shape → **LOWERS affinity for O₂** → **more O₂ UNLOADED** to respiring muscles!",
              "**Left-shifted curves** (foetal Hb, lugworm, llama) = **HIGHER affinity for O₂** to load oxygen in low-pO₂ environments!"
            ],
            "exampleHeading": "Worked check: Tissue fluid formation at a capillary bed",
            "examples": [
              "**Arteriole end**: high **hydrostatic pressure** forces water/solutes OUT (ultrafiltration); **Venule end**: hydrostatic pressure drops below **oncotic potential** of plasma proteins → water returns by **osmosis** (excess drains via lymph!)."
            ]
          }
        ]
      },
      {
        "id": "al-bio-3-2-c2",
        "title": "The Cardiac Cycle, Myogenic Control & Tissue Fluid",
        "summary": "Myogenic SAN-AVN-Purkyne conduction, valve pressure control, and capillary tissue fluid exchange.",
        "bullets": [
          "Cardiac muscle is myogenic: the **sinoatrial node (SAN)** initiates a wave of depolarisation across both atria (atrial systole). Non-conducting fibrous tissue at the septum prevents direct ventricular excitation, routing the impulse through the **atrioventricular node (AVN)** after a brief delay so atria empty completely.",
          "The AVN passes the impulse down the **Bundle of His** to the apex and up the **Purkyne fibres**, triggering ventricular systole from the bottom upwards. **Cardiac Output** (CO) = Heart Rate × Stroke Volume.",
          "Valves open and close passively in response to pressure gradients: atrioventricular (bicuspid/tricuspid) valves slam shut when ventricular pressure exceeds atrial pressure (\"lub\"); semilunar valves shut when aortic/pulmonary pressure exceeds ventricular pressure (\"dub\").",
          "At the arteriole end of capillaries, high **hydrostatic pressure** exceeds the inward osmotic pull of plasma proteins, forcing water and small solutes out via ultrafiltration to form tissue fluid; at the venule end, lower hydrostatic pressure allows most water to return by osmosis, with excess drained via lymphatics."
        ],
        "glossaryPills": [
          {
            "term": "myogenic",
            "definition": "Capable of contracting and relaxing rhythmically without external nervous stimulation, initiated intrinsically by the sinoatrial node."
          }
        ],
        "commonMistake": "Never say valves \"open to pump blood\" — valves are passive flaps that open whenever pressure behind them exceeds pressure in front of them.",
        "subsections": [
          {
            "heading": "Cohesion–Tension (Xylem) vs Mass Flow Hypothesis (Phloem)",
            "bullets": [
              "**Xylem cohesion–tension** - evaporation through stomata pulls water up under **negative pressure (tension)**; H-bonds provide **cohesion** (continuous column) and **adhesion** to xylem walls; proven by tree trunks narrowing slightly at midday!",
              "**Phloem mass flow** - companion cells **actively load sucrose** into sieve tubes at the **source** → ψ drops → water enters from xylem by osmosis → **high hydrostatic pressure** pushes sap toward the **sink** where sucrose is unloaded!"
            ],
            "exampleHeading": "Worked example: Cardiac Output = Heart Rate × Stroke Volume",
            "examples": [
              "HR = 75 beats min⁻¹ (cycle = 0.80 s), SV = 70 cm³ → CO = 75 × 70 = **5250 cm³ min⁻¹** (5.25 dm³ min⁻¹)."
            ]
          }
        ]
      },
      {
        "id": "al-bio-3-2-c3",
        "title": "Xylem Cohesion-Tension & Phloem Mass Flow",
        "summary": "Cohesion-tension in lignified xylem and Münch mass flow sucrose translocation in phloem.",
        "bullets": [
          "Cohesion-tension theory: water evaporates from spongy mesophyll cell walls and diffuses out through stomata, lowering mesophyll water potential and pulling water up continuous columns in dead, lignified xylem vessels via cohesion (**hydrogen bonds** between water molecules) and adhesion to hydrophilic xylem walls, creating negative pressure (tension).",
          "**Münch mass flow hypothesis** in phloem sieve tube elements (supported by companion cells): (1) at the source (leaf), sucrose is actively co-transported with H⁺ into sieve tubes, making Ψ more negative; (2) water enters from adjacent xylem by osmosis, generating high **hydrostatic pressure**; (3) at the sink (root/fruit), sucrose is unloaded for respiration/starch storage, raising Ψ so water leaves and hydrostatic pressure drops; (4) sap flows down the hydrostatic pressure gradient.",
          "Evidence: ringing experiments cause swelling and sugar accumulation above the removed bark ring; ¹⁴CO₂ radioisotope autoradiography and aphid stylet sap analysis confirm sucrose moves rapidly down pressure gradients."
        ],
        "glossaryPills": [
          {
            "term": "cohesion-tension",
            "definition": "Mechanism pulling continuous columns of water up xylem under negative pressure generated by transpiration and stabilised by hydrogen bonding between water molecules."
          }
        ],
        "commonMistake": "When describing phloem loading, clearly state that sucrose lowers the WATER POTENTIAL in the sieve tube, causing water to enter by OSMOSIS, which creates high HYDROSTATIC PRESSURE."
      }
    ],
    "keyTerms": [
      {
        "term": "Bohr shift",
        "definition": "Rightward shift of the haemoglobin dissociation curve caused by increased CO₂ concentration lowering blood pH."
      },
      {
        "term": "Sinoatrial node (SAN)",
        "definition": "Natural pacemaker in the right atrium wall that initiates rhythmic waves of cardiac excitation."
      },
      {
        "term": "Hydrostatic pressure",
        "definition": "Outward fluid pressure generated by ventricular contraction in capillaries or osmotic water influx in phloem sieve tubes."
      },
      {
        "term": "Translocation",
        "definition": "Bidirectional mass transport of organic assimilates (mainly sucrose and amino acids) from sources to sinks in phloem."
      }
    ],
    "checklistPoints": [
      "Interpret left- and right-shifted oxyhaemoglobin dissociation curves in terms of O₂ affinity and unloading.",
      "Read pressure changes, valve opening/closing instants, and SAN→AVN→Bundle of His→Purkyne timing on a cardiac cycle graph.",
      "Explain capillary tissue fluid formation and reabsorption using hydrostatic pressure vs oncotic water potential.",
      "Contrast xylem cohesion-tension with phloem Münch mass flow and evaluate ringing/aphid/¹⁴C tracer evidence."
    ]
  },
  "al-bio-4-1": {
    "subtopicId": "al-bio-4-1",
    "subtopicCode": "4.1",
    "subtopicTitle": "DNA, Transcription, Splicing & Translation",
    "readingMinutes": 12,
    "videoTitle": "A-Level Biology - Transcription | Sense & Antisense Strands",
    "youtubeId": "DEpFYP1twU8",
    "videoChannel": "Cognito",
    "videoDuration": "5:26",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "Introduction",
        "cardId": "al-bio-4-1-c1"
      },
      {
        "time": "0:21",
        "seconds": 21,
        "label": "What is Transcription?",
        "cardId": "al-bio-4-1-c2"
      },
      {
        "time": "1:04",
        "seconds": 64,
        "label": "The Key Stages of Transcription",
        "cardId": "al-bio-4-1-c2"
      },
      {
        "time": "3:48",
        "seconds": 228,
        "label": "What is Splicing?",
        "cardId": "al-bio-4-1-c2"
      }
    ],
    "cards": [
      {
        "id": "al-bio-4-1-c1",
        "title": "The Genetic Code & Genome Organisation",
        "summary": "Degenerate, non-overlapping, universal triplet code and eukaryotic vs prokaryotic genomes.",
        "bullets": [
          "A gene is a base sequence of DNA that codes for the amino acid sequence of a polypeptide or a functional RNA (such as rRNA or tRNA), located at a fixed locus on a chromosome.",
          "The genetic code is: (1) **Triplet** (3 bases = 1 codon = 1 amino acid, providing 4³ = 64 combinations); (2) Degenerate (most amino acids have multiple codons, buffering silent mutations); (3) **Non-overlapping** (each base is read once); (4) **Universal** (same codons specify the same amino acids across almost all species).",
          "Eukaryotic DNA is linear, associated with histone proteins to form chromosomes, and contains non-coding introns inside genes plus multiple non-coding repeats between genes; prokaryotic DNA is short, circular, naked (no histones), and lacks introns."
        ],
        "glossaryPills": [
          {
            "term": "degenerate",
            "definition": "Property of the genetic code whereby more than one triplet codon can specify the same amino acid."
          },
          {
            "term": "introns",
            "definition": "Non-coding nucleotide sequences within eukaryotic genes that are transcribed into pre-mRNA and excised during splicing."
          }
        ],
        "memoryAid": "Remember Exons are Expressed (kept in mature mRNA); Introns are Intervening junk (cut out in the nucleus).",
        "subsections": [
          {
            "heading": "Properties of the Genetic Code & Pre-mRNA Splicing",
            "bullets": [
              "**Three properties** - **Triplet** (3 bases = 1 amino acid), **Degenerate** (multiple codons code for the same amino acid → buffers silent mutations!), **Non-overlapping** & **Universal** across all species.",
              "**Eukaryotes vs Prokaryotes** - eukaryotic genes contain non-coding **introns** that are spliced OUT of **pre-mRNA** to join coding **exons** into mature mRNA; prokaryotes lack introns so mRNA is formed directly!"
            ],
            "exampleHeading": "Worked check: tRNA vs mRNA structure",
            "examples": [
              "**mRNA**: linear single-stranded chain with **codons**, no H-bonds; **tRNA**: clover-leaf folded by **intramolecular H-bonds**, carries a specific amino acid and complementary **anticodon**!"
            ]
          }
        ]
      },
      {
        "id": "al-bio-4-1-c2",
        "title": "Transcription & Pre-mRNA Splicing",
        "summary": "RNA polymerase transcription on the antisense strand and spliceosome excision of introns.",
        "bullets": [
          "**DNA helicase** unwinds a local gene region by breaking **hydrogen bonds** between complementary bases, exposing the antisense (template) strand.",
          "Free RNA nucleotides (A, U, C, G) align alongside complementary exposed DNA bases (A pairs with U, T with A, C with G).",
          "RNA polymerase catalyses the condensation of phosphodiester bonds between adjacent RNA nucleotides to synthesise a single-stranded pre-mRNA molecule until a stop signal is reached.",
          "In eukaryotes, **spliceosomes** excise non-coding introns from pre-mRNA and join coding **exons** together to yield mature mRNA, which exits via nuclear pores (prokaryotes transcribe directly to mRNA without splicing)."
        ],
        "glossaryPills": [
          {
            "term": "RNA polymerase",
            "definition": "Enzyme that synthesises a complementary strand of RNA by joining RNA nucleotides via phosphodiester bonds along a DNA template."
          }
        ],
        "commonMistake": "Do NOT confuse DNA polymerase with RNA polymerase: transcription uses RNA polymerase and joins RNA nucleotides containing ribose and uracil.",
        "subsections": [
          {
            "heading": "Transcription & Translation Mark-Scheme Steps",
            "bullets": [
              "**Transcription** - DNA helicase breaks H-bonds → **RNA polymerase** moves along the **antisense (template) strand**, joining complementary RNA nucleotides (U pairs with A!) via **phosphodiester bonds** → pre-mRNA → splicing removes introns.",
              "**Translation** - mRNA binds **ribosome** → tRNA anticodons pair with mRNA codons → **ATP** supplies energy to form **peptide bonds** between adjacent amino acids → polypeptide folds into tertiary structure."
            ],
            "exampleHeading": "Worked example: Base-to-amino-acid calculation",
            "examples": [
              "A polypeptide of **150 amino acids** requires a minimum of 150 × 3 = **450 coding mRNA bases** (plus a 3-base stop codon = 453 bases!)."
            ]
          }
        ]
      },
      {
        "id": "al-bio-4-1-c3",
        "title": "Translation at the Ribosome",
        "summary": "Codon-anticodon pairing on tRNA and ribosomal polypeptide assembly.",
        "bullets": [
          "Mature mRNA binds to a ribosome’s small subunit at a start codon (AUG); the ribosome encloses two mRNA codons at a time.",
          "**Transfer RNA (tRNA)** is a clover-leaf single strand stabilised by internal **hydrogen bonds**, bearing a specific amino acid binding site at one end and a 3-base anticodon at the loop.",
          "A tRNA with a complementary anticodon pairs with the first mRNA codon; a second complementary tRNA binds the adjacent codon. ATP hydrolysis provides energy to attach amino acids to tRNA and drive peptide bond formation between adjacent amino acids.",
          "The ribosome translocates one codon along the mRNA, releasing the spent first tRNA to collect another amino acid, repeating until a stop codon terminates translation and releases the finished polypeptide."
        ],
        "glossaryPills": [
          {
            "term": "anticodon",
            "definition": "A specific triplet of unpaired bases on a tRNA molecule that forms complementary hydrogen bonds with a matching mRNA codon."
          }
        ],
        "memoryAid": "Transcription = same language (nucleic acid → nucleic acid in nucleus). Translation = new language (nucleic acid → polypeptide at ribosome)."
      }
    ],
    "keyTerms": [
      {
        "term": "Codon",
        "definition": "A triplet of bases on mRNA coding for a single specific amino acid or stop signal."
      },
      {
        "term": "Exon",
        "definition": "Coding sequence of a eukaryotic gene retained in mature mRNA after splicing."
      },
      {
        "term": "Splicing",
        "definition": "Post-transcriptional removal of introns and joining of exons in eukaryotic pre-mRNA."
      },
      {
        "term": "tRNA",
        "definition": "Clover-leaf RNA adaptor carrying a specific amino acid and complementary anticodon to the ribosome."
      }
    ],
    "checklistPoints": [
      "Define triplet, degenerate, non-overlapping, and universal genetic code properties.",
      "Compare nuclear DNA in eukaryotes with circular DNA in prokaryotes, mitochondria, and chloroplasts.",
      "Describe transcription (RNA polymerase), eukaryotic splicing, and ribosomal translation step by step."
    ]
  },
  "al-bio-4-2": {
    "subtopicId": "al-bio-4-2",
    "subtopicCode": "4.2",
    "subtopicTitle": "Meiosis, Natural Selection & Biodiversity",
    "readingMinutes": 12,
    "videoTitle": "A-Level Biology - Meiosis & Genetic Variation",
    "youtubeId": "9YBJxrVHmGI",
    "videoChannel": "Cognito",
    "videoDuration": "5:59",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "Introduction to Meiosis and Genetic Variation",
        "cardId": "al-bio-4-2-c1"
      },
      {
        "time": "1:17",
        "seconds": 77,
        "label": "Genetic Variation, Alleles & Random Fertilisation",
        "cardId": "al-bio-4-2-c1"
      },
      {
        "time": "2:27",
        "seconds": 147,
        "label": "Crossing Over (Recombination)",
        "cardId": "al-bio-4-2-c1"
      },
      {
        "time": "5:02",
        "seconds": 302,
        "label": "Summary of Genetic Variation from Meiosis",
        "cardId": "al-bio-4-2-c1"
      }
    ],
    "cards": [
      {
        "id": "al-bio-4-2-c1",
        "title": "Meiosis & Sources of Genetic Variation",
        "summary": "Crossing over at chiasmata, independent segregation, and non-disjunction during meiosis.",
        "bullets": [
          "Meiosis involves two nuclear divisions (**Meiosis I** separates homologous chromosomes; **Meiosis II** separates sister chromatids) producing four genetically distinct haploid (n) gametes from one diploid (2n) parent cell.",
          "**Crossing over** (**Prophase** I): homologous chromosomes form bivalents; non-sister chromatids wrap around each other at chiasmata and swap equivalent sections of DNA, creating recombinant alleles.",
          "Independent segregation (**Metaphase** I): homologous pairs align randomly along the spindle equator, giving 2ⁿ possible gamete combinations (where n = haploid number); **random** fertilisation multiplies variation to (2ⁿ)².",
          "**Non-disjunction** (failure of homologous pairs or chromatids to separate) causes chromosome mutations such as trisomy 21 (Down’s syndrome)."
        ],
        "glossaryPills": [
          {
            "term": "chiasmata",
            "definition": "Points where non-sister chromatids of homologous chromosomes cross over and exchange genetic material during prophase I."
          },
          {
            "term": "independent segregation",
            "definition": "Random orientation of maternal and paternal homologous chromosome pairs at the equator during metaphase I, producing novel allele combinations."
          }
        ],
        "commonMistake": "Do NOT write \"mitosis halves chromosome number\" or confuse homologous chromosomes separating (Meiosis I) with sister chromatids separating (Meiosis II).",
        "subsections": [
          {
            "heading": "Two Sources of Genetic Variation in Meiosis",
            "bullets": [
              "**1. Crossing over (Prophase I)** - homologous chromosomes pair into bivalents; non-sister chromatids break and exchange alleles at **chiasmata**, creating **new allele combinations**!",
              "**2. Independent segregation (Metaphase I)** - homologous pairs line up **randomly** on the equator, giving **2ⁿ** possible gamete combinations (2²³ ≈ 8.4 million in humans, plus random fertilisation!)."
            ],
            "exampleHeading": "Worked example: Index of Diversity d = N(N − 1) / Σn(n − 1)",
            "examples": [
              "For 3 species with counts 10, 10, 10 (N = 30): d = (30 × 29) / (3 × 90) = 870 / 270 = **3.22** (higher d = richer, more evenly balanced community!)."
            ]
          }
        ]
      },
      {
        "id": "al-bio-4-2-c2",
        "title": "Directional vs Stabilising Selection & Classification",
        "summary": "Directional vs stabilising selection, phylogenetic taxonomy, and courtship behaviour.",
        "bullets": [
          "Directional selection favours individuals at ONE extreme of a phenotype distribution (e.g., antibiotic-resistant bacteria), shifting the population mean towards that extreme over generations.",
          "**Stabilising selection** favours individuals close to the MEAN phenotype and selects against both extremes (e.g., human birth weight ~3.2 kg), narrowing the standard deviation while keeping the mean constant.",
          "**Phylogenetic taxonomy** groups organisms into a nested, non-overlapping hierarchy based on evolutionary ancestry: Domain → Kingdom → Phylum → Class → Order → Family → Genus → Species (binomial Genus species).",
          "Species-specific courtship behaviour ensures organisms recognise members of the same species, identify a fertile/receptive mate, synchronise gamete release, and form a pair bond to raise offspring."
        ],
        "glossaryPills": [
          {
            "term": "directional selection",
            "definition": "Natural selection that shifts a population’s mean phenotype in one direction when environmental pressure favours an extreme allele."
          }
        ],
        "memoryAid": "Taxonomic order: Dear King Philip Came Over For Good Soup (Domain → Species).",
        "subsections": [
          {
            "heading": "Directional vs Stabilising Selection & Courtship Behaviour",
            "bullets": [
              "**Directional selection** - selects for ONE extreme phenotype (e.g. **antibiotic resistance** in bacteria) → shifts the mean toward that extreme!",
              "**Stabilising selection** - selects for the **mean** and against BOTH extremes (e.g. **human birth weight**) → narrows standard deviation while mean stays constant!",
              "**Courtship behaviour** - enables individuals to recognise **same species**, identify a **fertile mate of opposite sex**, form a pair bond, and synchronise mating."
            ],
            "exampleHeading": "Concrete check: Why modern classification uses mRNA / amino acid / DNA sequences",
            "examples": [
              "Comparing base sequences directly measures **genetic diversity** and evolutionary divergence without being misled by environmental effects on phenotype!"
            ]
          }
        ]
      },
      {
        "id": "al-bio-4-2-c3",
        "title": "Quantifying Biodiversity & Index of Diversity",
        "summary": "Calculating Simpson’s Index of Diversity and balancing farming yield with conservation.",
        "bullets": [
          "Species richness measures ONLY the number of different species in a community, ignoring population sizes; an index of diversity incorporates both species richness and relative abundance of each species.",
          "**Index of Diversity** formula: d = N(N − 1) ÷ Σn(n − 1), where N = total number of organisms of all species and n = total number of organisms of each individual species. Higher d indicates greater biodiversity.",
          "Intensive agriculture (monocultures, hedgerow removal, herbicides, pesticides) reduces plant diversity, collapsing ecological niches and insect/bird food webs. Conservation balances yield with wildflower field margins, intercropping, and hedgerow restoration.",
          "Genetic diversity within/between species is measured directly by comparing DNA base sequences, mRNA sequences, or polypeptide amino acid sequences rather than observable traits (which are confounded by environment and polygenic control)."
        ],
        "glossaryPills": [
          {
            "term": "species richness",
            "definition": "The count of the total number of distinct species present within a habitat, regardless of individual population sizes."
          }
        ],
        "commonMistake": "When calculating d = N(N − 1) / Σn(n − 1), remember to sum n(n − 1) for EVERY species BEFORE dividing N(N − 1) by that sum."
      }
    ],
    "keyTerms": [
      {
        "term": "Crossing over",
        "definition": "Exchange of DNA segments between non-sister chromatids of homologous chromosomes during Prophase I."
      },
      {
        "term": "Non-disjunction",
        "definition": "Failure of chromosomes or chromatids to separate cleanly during meiosis, resulting in aneuploid gametes."
      },
      {
        "term": "Stabilising selection",
        "definition": "Natural selection favouring intermediate phenotypes and reducing genetic variance around the mean."
      },
      {
        "term": "Phylogeny",
        "definition": "The evolutionary history and branching relationships among species or taxonomic groups."
      },
      {
        "term": "Index of Diversity (d)",
        "definition": "Quantitative biodiversity metric incorporating both species richness and individual species abundance."
      }
    ],
    "checklistPoints": [
      "Explain how crossing over, independent segregation, and random fertilisation generate immense genetic variation.",
      "Sketch and contrast directional vs stabilising selection curves with real biological examples.",
      "Calculate Simpson’s Index of Diversity d = N(N − 1) ÷ Σn(n − 1) cleanly from field sampling tables."
    ]
  },
  "al-bio-5-1": {
    "subtopicId": "al-bio-5-1",
    "subtopicCode": "5.1",
    "subtopicTitle": "Photosynthesis: Light-Dependent & Calvin Cycle",
    "readingMinutes": 13,
    "videoTitle": "Photosynthesis - Light Dependent Reaction: Photolysis, Photoionisation & Chemiosmosis",
    "youtubeId": "vLcKRiE6sHE",
    "videoChannel": "Miss Estruch Biology",
    "videoDuration": "9:09",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "Chloroplast Structure & Two Stages",
        "cardId": "al-bio-5-1-c3"
      },
      {
        "time": "1:55",
        "seconds": 115,
        "label": "Photoionisation of Chlorophyll",
        "cardId": "al-bio-5-1-c1"
      },
      {
        "time": "4:15",
        "seconds": 255,
        "label": "Electron Transport Chain & Chemiosmosis",
        "cardId": "al-bio-5-1-c1"
      },
      {
        "time": "6:50",
        "seconds": 410,
        "label": "Photolysis of Water & Reduced NADP",
        "cardId": "al-bio-5-1-c1"
      }
    ],
    "cards": [
      {
        "id": "al-bio-5-1-c1",
        "title": "Light-Dependent Reaction (Thylakoid Membranes)",
        "summary": "Thylakoid photoionisation, water photolysis, electron transport, and chemiosmotic ATP synthesis.",
        "diagram": "photosynthesis-chloroplast",
        "bullets": [
          "Photoionisation: light energy absorbed by chlorophyll in **Photosystem II (PSII)** excites pairs of electrons to a higher energy level so they leave the chlorophyll molecule (chlorophyll is oxidised).",
          "**Photolysis of water**: light splits H₂O → 2H⁺ + 2e⁻ + ½O₂. The electrons replace those lost from PSII, O₂ is released as a by-product, and H⁺ ions accumulate in the thylakoid lumen.",
          "Electron Transport Chain & Chemiosmosis: excited electrons pass along carrier proteins in a series of redox reactions, releasing energy to actively pump H⁺ from the stroma into the thylakoid lumen. Protons diffuse back down their electrochemical gradient through **ATP synthase** channels, catalysing ADP + Pᵢ → ATP (photophosphorylation).",
          "At **Photosystem I (PSI)**, electrons are re-excited and transferred with stromal H⁺ to NADP, producing reduced NADP (NADPH) needed for the Calvin cycle."
        ],
        "subsections": [
          {
            "heading": "Non-Cyclic Photophosphorylation — 4 Exam Steps on the Thylakoid",
            "bullets": [
              "**1. Photoionisation**: Light excites chlorophyll electrons in **PSII** to a higher energy level so they leave chlorophyll.",
              "**2. Photolysis**: H₂O → 2H⁺ + 2e⁻ + ½O₂ replaces the lost PSII electrons and raises thylakoid lumen [H⁺].",
              "**3. Chemiosmosis**: Electrons flow along the **electron transport chain**, releasing energy to pump H⁺ into the lumen; protons diffuse down their gradient through **ATP synthase** to form **ATP**.",
              "**4. NADP reduction**: Re-excited electrons from **PSI** combine with stromal H⁺ and NADP to form **reduced NADP (NADPH)**."
            ],
            "exampleHeading": "Worked check: Effect of an electron-carrier herbicide (e.g. DCMU) on photosynthesis",
            "examples": [
              "Blocking electron flow stops H⁺ pumping and NADP reduction → **ATP and reduced NADP production halts**, so **GP can no longer be reduced to TP** and glucose synthesis stops completely."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "photoionisation",
            "definition": "Absorption of light energy by chlorophyll that raises electrons to a higher energy level, causing them to leave the chlorophyll molecule."
          },
          {
            "term": "chemiosmosis",
            "definition": "Flow of protons down an electrochemical gradient across a membrane through ATP synthase to drive ATP synthesis."
          }
        ],
        "memoryAid": "Light-Dependent inputs/outputs: Water + Light + ADP + Pᵢ + NADP → O₂ + ATP + reduced NADP (on Thylakoid membranes)."
      },
      {
        "id": "al-bio-5-1-c2",
        "title": "Light-Independent Reaction — The Calvin Cycle (Stroma)",
        "summary": "Stromal carbon fixation by Rubisco, GP reduction to TP, and ATP-driven RuBP regeneration.",
        "bullets": [
          "**Carbon fixation**: CO₂ diffuses into the stroma and reacts with 5-carbon ribulose bisphosphate (**RuBP**), catalysed by the enzyme Rubisco, yielding an unstable 6C intermediate that immediately splits into two 3-carbon **glycerate 3-phosphate (GP)** molecules.",
          "Reduction: GP is reduced to triose phosphate (TP, 3C) using hydrogen from reduced NADP (oxidised back to NADP) and energy from ATP hydrolysis (forming ADP + Pᵢ).",
          "Regeneration & synthesis: 5 out of every 6 TP molecules are phosphorylated using further ATP to regenerate **RuBP** so the cycle continues; 1 out of 6 TP exits to synthesise hexose sugars (glucose), starch, cellulose, amino acids (with nitrates), and lipids.",
          "Six full turns of the Calvin cycle fix 6 CO₂ to yield one net 6-carbon glucose molecule (requiring 18 ATP and 12 reduced NADP)."
        ],
        "subsections": [
          {
            "heading": "Calvin Cycle (Stroma) — Fixation, Reduction & Regeneration",
            "bullets": [
              "**1. Carbon fixation** - CO₂ combines with **5C RuBP** (catalysed by **RuBisCO**) → unstable 6C splits into **two 3C GP** (glycerate 3-phosphate).",
              "**2. Reduction** - **GP → TP (triose phosphate)** using **ATP** and **reduced NADP** from the light-dependent reaction on the thylakoid membranes!",
              "**3. Regeneration** - 5 out of every 6 TP molecules regenerate **RuBP** using **ATP**; 1 out of 6 TP exits to synthesise **hexose sugars (glucose)**, amino acids, and lipids!"
            ],
            "exampleHeading": "Worked check: What happens to GP and RuBP levels when light is suddenly turned OFF?",
            "examples": [
              "No ATP/reduced NADP → **GP cannot be reduced to TP** so **[GP] RISES**, while **[RuBP] FALLS** because RuBP keeps fixing CO₂ without being regenerated from TP!"
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "Rubisco",
            "definition": "Ribulose bisphosphate carboxylase — the stromal enzyme that catalyses carbon fixation of CO₂ onto RuBP."
          }
        ],
        "commonMistake": "When CO₂ is cut off in the light, RuBP RISES (still being regenerated, not used up) while GP FALLS (not being formed). When light is turned off, GP RISES (cannot be reduced without ATP/NADPH) while RuBP FALLS (cannot be regenerated from TP)."
      },
      {
        "id": "al-bio-5-1-c3",
        "title": "Chloroplast Adaptations & Limiting Factor Management",
        "summary": "Chloroplast ultrastructure adaptations and managing limiting factors in commercial glasshouses.",
        "bullets": [
          "Stacked thylakoid membranes (grana) provide a massive surface area for chlorophyll photosystems, electron carriers, and **ATP synthase**; small thylakoid lumen allows a steep proton gradient to establish rapidly.",
          "Stroma fluid surrounds the grana so ATP and reduced NADP diffuse immediately to Calvin cycle enzymes (Rubisco), and contains **70S ribosomes** plus circular chloroplast DNA for rapid protein synthesis.",
          "Commercial glasshouses maximise net photosynthesis by optimising temperature (~25–30°C for Rubisco without excessive photorespiration), enriching CO₂ via burners, and supplementing artificial lighting while balancing profit margin against heating/lighting cost."
        ],
        "glossaryPills": [
          {
            "term": "grana",
            "definition": "Stacks of disc-like thylakoid membranes inside chloroplasts maximising light capture and photophosphorylation surface area."
          }
        ],
        "memoryAid": "Darkness spike = GP shoots up (stuck without ATP/NADPH); Zero CO₂ spike = RuBP shoots up (waiting for CO₂)."
      }
    ],
    "keyTerms": [
      {
        "term": "Photolysis",
        "definition": "Light-driven splitting of water molecules into protons (H⁺), electrons, and oxygen gas inside the thylakoid lumen."
      },
      {
        "term": "Photophosphorylation",
        "definition": "Synthesis of ATP from ADP and Pᵢ driven by light energy via an electron transport chain and chemiosmosis."
      },
      {
        "term": "RuBP",
        "definition": "Ribulose bisphosphate — the 5-carbon CO₂ acceptor molecule regenerated during the Calvin cycle."
      },
      {
        "term": "Triose phosphate (TP)",
        "definition": "3-carbon sugar produced by reduction of GP, used both to regenerate RuBP and synthesise organic compounds."
      }
    ],
    "checklistPoints": [
      "Trace electron flow from water photolysis through PSII, ETC, PSI, and onto reduced NADP.",
      "Draw the Calvin cycle with exact carbon counts (5C RuBP + 1C CO₂ → 2×3C GP → 2×3C TP) and show where ATP and reduced NADP enter.",
      "Predict how sudden darkness or CO₂ removal alters stromal concentrations of GP, TP, and RuBP."
    ]
  },
  "al-bio-5-2": {
    "subtopicId": "al-bio-5-2",
    "subtopicCode": "5.2",
    "subtopicTitle": "Respiration: Glycolysis, Link, Krebs & Oxidative Phosphorylation",
    "readingMinutes": 14,
    "videoTitle": "A-Level Biology - Oxidative Phosphorylation | ATP Yield",
    "youtubeId": "2UcH2lsd49I",
    "videoChannel": "Cognito",
    "videoDuration": "6:33",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "Introduction",
        "cardId": "al-bio-5-2-c1"
      },
      {
        "time": "0:24",
        "seconds": 24,
        "label": "What Oxidative Phosphorylation Is",
        "cardId": "al-bio-5-2-c3"
      },
      {
        "time": "2:18",
        "seconds": 138,
        "label": "Main Steps of Oxidative Phosphorylation",
        "cardId": "al-bio-5-2-c3"
      },
      {
        "time": "4:42",
        "seconds": 282,
        "label": "ATP Yield in Respiration",
        "cardId": "al-bio-5-2-c3"
      }
    ],
    "cards": [
      {
        "id": "al-bio-5-2-c1",
        "title": "Glycolysis (Cytoplasm — Aerobic & Anaerobic)",
        "summary": "Cytoplasmic phosphorylation and oxidation of glucose into pyruvate, net 2 ATP, and NADH.",
        "bullets": [
          "Phosphorylation: glucose (6C) is phosphorylated using 2 ATP to form reactive hexose bisphosphate (6C), which splits immediately into two 3-carbon **triose phosphate (TP)** molecules.",
          "Oxidation: each TP is oxidised to **pyruvate** (3C) by losing hydrogen atoms (accepted by NAD to form 2 reduced NAD / NADH), simultaneously generating 4 ATP by substrate-level phosphorylation.",
          "Net yield per glucose in glycolysis: 2 **pyruvate**, 2 net ATP (4 made − 2 invested), and 2 reduced NAD."
        ],
        "glossaryPills": [
          {
            "term": "substrate-level phosphorylation",
            "definition": "Direct enzymatic transfer of a phosphate group from a phosphorylated metabolic intermediate to ADP to form ATP without an electron transport chain."
          }
        ],
        "memoryAid": "Glycolysis happens in the CYTOPLASM and needs ZERO oxygen — it is universal to both aerobic and anaerobic pathways.",
        "subsections": [
          {
            "heading": "Four Stages of Aerobic Respiration & Exact Locations",
            "bullets": [
              "**1. Glycolysis (Cytoplasm)** - Glucose (6C) → phosphorylated (uses 2 ATP) → 2 × Triose Phosphate → oxidised to **2 × Pyruvate (3C)** + **2 net ATP** + **2 reduced NAD** (no O₂ required!).",
              "**2. Link Reaction (Mitochondrial matrix)** - Pyruvate (3C) → **Acetyl-CoA (2C)** + **CO₂** + **reduced NAD** (×2 per glucose!).",
              "**3. Krebs Cycle (Mitochondrial matrix)** - Acetyl-CoA (2C) + 4C → 6C → back to 4C, yielding **2 CO₂, 1 ATP (substrate-level), 3 reduced NAD, 1 reduced FAD** per turn (×2 per glucose!)."
            ],
            "exampleHeading": "Worked check: Why anaerobic respiration must convert pyruvate to lactate/ethanol",
            "examples": [
              "Oxidises **reduced NAD back into NAD** so **glycolysis can continue** generating a small net yield of **2 ATP per glucose**!"
            ]
          }
        ]
      },
      {
        "id": "al-bio-5-2-c2",
        "title": "The Link Reaction & Krebs Cycle (Mitochondrial Matrix)",
        "summary": "Mitochondrial matrix link reaction to acetyl CoA and decarboxylation/dehydrogenation in Krebs.",
        "bullets": [
          "Pyruvate (3C) is actively transported into the mitochondrial matrix. In the **Link Reaction**, **pyruvate** undergoes oxidative decarboxylation (loses CO₂ and 2H to NAD) to form acetate (2C), which combines with Coenzyme A → **Acetyl CoA** (2C). Per glucose (×2 turns): 2 Acetyl CoA, 2 CO₂, 2 reduced NAD.",
          "**Krebs Cycle**: **Acetyl CoA** (2C) joins oxaloacetate (4C) to form citrate (6C). Citrate undergoes decarboxylation and dehydrogenation to a 5C compound (releasing 1 CO₂ + 1 NADH), then further decarboxylation and oxidation back to 4C oxaloacetate (releasing 1 CO₂, 2 NADH, 1 FADH₂, and 1 ATP via substrate-level phosphorylation).",
          "Per glucose molecule (TWO turns of Krebs): 4 CO₂, 6 reduced NAD, 2 reduced FAD, and 2 ATP."
        ],
        "glossaryPills": [
          {
            "term": "oxidative decarboxylation",
            "definition": "Simultaneous removal of a carbon dioxide molecule and oxidation (loss of hydrogen/electrons) from an organic acid such as pyruvate."
          }
        ],
        "commonMistake": "Always check whether an exam question asks for yields per PYRUVATE (1 turn) or per GLUCOSE (2 turns of Link + Krebs)!",
        "subsections": [
          {
            "heading": "Oxidative Phosphorylation (Cristae) & Role of Oxygen",
            "bullets": [
              "**Chemiosmosis** - reduced NAD/FAD donate electrons to the **electron transport chain (ETC)** on the inner mitochondrial membrane (cristae) → energy pumps **H⁺ into the intermembrane space** → H⁺ flows back down the electrochemical gradient through **ATP synthase**, synthesising ~28–32 ATP!",
              "**Oxygen’s exact role** - **FINAL ELECTRON ACCEPTOR** at the end of the ETC (**½O₂ + 2H⁺ + 2e⁻ → H₂O**); without O₂, the ETC backs up and halts the Krebs cycle and Link reaction!"
            ],
            "exampleHeading": "Worked example: Respiratory Quotient (RQ = CO₂ produced / O₂ consumed)",
            "examples": [
              "Carbohydrates RQ = **1.0**; Lipids RQ ≈ **0.7**; Proteins RQ ≈ **0.9**; RQ > 1.0 signals **anaerobic respiration** occurring alongside aerobic!"
            ]
          }
        ]
      },
      {
        "id": "al-bio-5-2-c3",
        "title": "Oxidative Phosphorylation & Anaerobic NAD Regeneration",
        "summary": "Cristae ETC chemiosmosis with O₂ as final acceptor, plus anaerobic NAD regeneration.",
        "bullets": [
          "Reduced NAD and reduced FAD deliver hydrogen atoms to the inner mitochondrial membrane (cristae), dissociating into protons (H⁺) and electrons.",
          "Electrons cascade down the **Electron Transport Chain (ETC)**, releasing energy to pump H⁺ from the matrix into the intermembrane space, building a steep proton electrochemical gradient.",
          "Protons flow back into the matrix through **ATP synthase** stalks (chemiosmosis), synthesising ~28–32 ATP per glucose. Oxygen acts as the **TERMINAL ELECTRON ACCEPTOR**: ½O₂ + 2H⁺ + 2e⁻ → H₂O.",
          "Without oxygen, the ETC halts and NADH cannot be re-oxidised, stopping Krebs and Link. Anaerobic cells convert **pyruvate** into **lactate** (mammals) or ethanol + CO₂ (yeast/plants) solely to regenerate oxidised NAD so glycolysis can continue yielding 2 net ATP per glucose."
        ],
        "glossaryPills": [
          {
            "term": "cristae",
            "definition": "Infoldings of the inner mitochondrial membrane providing a huge surface area for electron transport chains and ATP synthase complexes."
          }
        ],
        "memoryAid": "Why do we breathe oxygen? ONLY to act as the final electron acceptor at the end of the mitochondrial ETC so H⁺ + e⁻ form H₂O!"
      }
    ],
    "keyTerms": [
      {
        "term": "Glycolysis",
        "definition": "Cytoplasmic splitting and oxidation of glucose into two pyruvate molecules with a net gain of 2 ATP and 2 NADH."
      },
      {
        "term": "Acetyl CoA",
        "definition": "2-carbon acetyl group bound to Coenzyme A entering the Krebs cycle from the link reaction or fatty acid oxidation."
      },
      {
        "term": "Oxidative phosphorylation",
        "definition": "Synthesis of ATP via chemiosmosis driven by redox reactions along the mitochondrial electron transport chain."
      },
      {
        "term": "Terminal electron acceptor",
        "definition": "Oxygen’s role at the end of the ETC, combining with electrons and protons to form water and keep electron flow moving."
      }
    ],
    "checklistPoints": [
      "State the exact cellular compartment and net inputs/outputs of glycolysis, link reaction, Krebs cycle, and oxidative phosphorylation.",
      "Explain chemiosmosis across the inner mitochondrial membrane and what happens if oxygen or ETC inhibitors (cyanide) are present.",
      "Explain why lactate or ethanol fermentation is essential to sustain glycolysis under anaerobic conditions."
    ]
  },
  "al-bio-6-1": {
    "subtopicId": "al-bio-6-1",
    "subtopicCode": "6.1",
    "subtopicTitle": "Action Potentials, Saltatory Conduction & Synapses",
    "readingMinutes": 13,
    "videoTitle": "Action Potentials: Depolarisation, Repolarisation & All-or-Nothing Principle",
    "youtubeId": "ADZoHzW9Y94",
    "videoChannel": "Miss Estruch Biology",
    "videoDuration": "9:57",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "Resting Potential & Threshold",
        "cardId": "al-bio-6-1-c1"
      },
      {
        "time": "2:25",
        "seconds": 145,
        "label": "Depolarisation: Voltage-Gated Na+ Channels",
        "cardId": "al-bio-6-1-c1"
      },
      {
        "time": "5:15",
        "seconds": 315,
        "label": "Repolarisation & Hyperpolarisation (K+ Channels)",
        "cardId": "al-bio-6-1-c1"
      },
      {
        "time": "7:40",
        "seconds": 460,
        "label": "All-or-Nothing Principle & Refractory Period",
        "cardId": "al-bio-6-1-c1"
      }
    ],
    "cards": [
      {
        "id": "al-bio-6-1-c1",
        "title": "Resting Potential & Action Potential Mechanism",
        "summary": "Maintaining −70 mV resting potential, all-or-nothing +40 mV spikes, and the refractory period.",
        "bullets": [
          "**Resting potential** (~−70 mV inside negative) is maintained by: (1) **Na⁺/K⁺ ATPase** actively pumping 3 Na⁺ OUT for every 2 K⁺ pumped IN; (2) membrane being much more permeable to K⁺ (open K⁺ leak channels allow K⁺ efflux) than to Na⁺ (closed voltage-gated Na⁺ channels).",
          "**Depolarisation**: a stimulus opens Na⁺ channels; if membrane potential reaches threshold (−55 mV), voltage-gated Na⁺ channels fly open (positive feedback), Na⁺ floods IN and reverses potential to +40 mV (**all-or-nothing principle**).",
          "**Repolarisation**: at +40 mV, voltage-gated Na⁺ channels inactivate/close and voltage-gated K⁺ channels open, allowing rapid K⁺ efflux out of the axon.",
          "**Hyperpolarisation** & Refractory Period: slow closure of K⁺ channels causes temporary overshoot (~−80 mV). During the refractory period, Na⁺ channels cannot reopen — ensuring impulses are unidirectional, discrete (separate), and capped in maximum frequency."
        ],
        "glossaryPills": [
          {
            "term": "refractory period",
            "definition": "Brief recovery interval following an action potential during which inactivated Na⁺ channels prevent a new impulse from being generated."
          }
        ],
        "commonMistake": "Stimulus intensity does NOT increase the amplitude (+40 mV) of an action potential — stronger stimuli are coded solely by a higher FREQUENCY of action potentials."
      },
      {
        "id": "al-bio-6-1-c2",
        "title": "Saltatory Conduction & Factors Affecting Speed",
        "summary": "Myelinated saltatory conduction across Nodes of Ranvier and factors altering impulse speed.",
        "bullets": [
          "Schwann cells wrap around myelinated axons forming an insulating lipid myelin sheath interrupted every ~1 mm by uninsulated **Nodes of Ranvier** rich in voltage-gated Na⁺ channels.",
          "Because ions cannot cross the myelin sheath, local electrical currents jump from node to node (saltatory conduction), dramatically increasing conduction velocity compared to continuous propagation along unmyelinated axons.",
          "Speed also increases with: (1) wider axon diameter (lower internal electrical resistance to ion flow) and (2) higher temperature (faster ion diffusion and ATPase kinetics up to protein denaturation)."
        ],
        "glossaryPills": [
          {
            "term": "saltatory conduction",
            "definition": "Rapid propagation of action potentials along myelinated axons in which depolarisation occurs only at successive Nodes of Ranvier."
          }
        ],
        "memoryAid": "Myelin = Motorway (jumps between Nodes of Ranvier); Unmyelinated = City traffic (depolarises every micron of membrane).",
        "subsections": [
          {
            "heading": "Cholinergic Synapse Transmission & Summation",
            "bullets": [
              "**7-step synaptic sequence** - Action potential arrives → **voltage-gated Ca²⁺ channels open** → Ca²⁺ enters presynaptic knob → vesicles fuse & release **ACh by exocytosis** → diffuses across cleft → binds receptors on **Na⁺ channels** on postsynaptic membrane → Na⁺ influx causes **depolarisation (EPSP)** → **acetylcholinesterase** hydrolyses ACh to stop continuous firing!",
              "**Spatial vs Temporal summation** - **Spatial** = multiple presynaptic neurones fire simultaneously to reach threshold; **Temporal** = one presynaptic neurone fires repeatedly in rapid succession."
            ],
            "exampleHeading": "Worked check: Why action potentials are UNIDIRECTIONAL",
            "examples": [
              "The **refractory period** keeps voltage-gated Na⁺ channels temporarily inactivated behind the wave, preventing backward propagation and ensuring discrete impulses!"
            ]
          }
        ]
      },
      {
        "id": "al-bio-6-1-c3",
        "title": "Cholinergic Synapses, Summation & Inhibition",
        "summary": "Presynaptic Ca²⁺ influx, ACh exocytosis, summation, inhibition, and acetylcholinesterase.",
        "diagram": "synaptic-transmission",
        "bullets": [
          "Action potential arrives at the presynaptic knob → voltage-gated Ca²⁺ channels open → Ca²⁺ diffuses in → synaptic vesicles containing **acetylcholine (ACh)** fuse with the presynaptic membrane by exocytosis.",
          "ACh diffuses across the synaptic cleft and binds to complementary receptors on ligand-gated Na⁺ channels on the postsynaptic membrane → Na⁺ influx generates an excitatory postsynaptic potential (EPSP); if threshold is reached, a new action potential fires.",
          "Acetylcholinesterase hydrolyses ACh into choline + ethanoic acid (recycled via ATP into vesicles), preventing continuous postsynaptic firing. Unidirectionality is enforced because vesicles exist only presynaptically and receptors only postsynaptically.",
          "Summation allows weak sub-threshold stimuli to combine: **spatial summation** (multiple presynaptic neurones releasing ACh simultaneously) or **temporal summation** (one presynaptic neurone firing rapidly in succession). Inhibitory synapses open Cl⁻/K⁺ channels causing hyperpolarisation (IPSP)."
        ],
        "subsections": [
          {
            "heading": "Summation & inhibitory synapses",
            "bullets": [
              "**Spatial summation**: several presynaptic neurones converge on one postsynaptic neurone and release ACh together to reach threshold.",
              "**Temporal summation**: one presynaptic neurone fires rapid successive impulses so neurotransmitter accumulates above threshold."
            ],
            "exampleHeading": "Synaptic drug mechanisms tested at A-Level:",
            "examples": [
              "**Organophosphate insecticides** — Inhibit acetylcholinesterase, causing continuous postsynaptic depolarisation and muscle spasms",
              "**GABA (inhibitory neurotransmitter)** — Opens postsynaptic Cl⁻ channels, causing hyperpolarisation (IPSP) so threshold is harder to reach"
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "acetylcholinesterase",
            "definition": "Synaptic enzyme that rapidly hydrolyses acetylcholine to terminate postsynaptic stimulation and allow neurotransmitter recycling."
          }
        ],
        "commonMistake": "Never say \"Ca²⁺ channels open on the postsynaptic membrane\" — Ca²⁺ influx occurs strictly in the PRESYNAPTIC knob to trigger vesicle exocytosis."
      }
    ],
    "keyTerms": [
      {
        "term": "Resting potential",
        "definition": "Potential difference (~−70 mV) across an unstimulated neurone membrane maintained by Na⁺/K⁺ ATPase and K⁺ efflux."
      },
      {
        "term": "All-or-nothing principle",
        "definition": "Rule that any stimulus exceeding threshold fires an identical full-size (+40 mV) action potential, while sub-threshold stimuli fire none."
      },
      {
        "term": "Node of Ranvier",
        "definition": "Unmyelinated gap between adjacent Schwann cells where voltage-gated Na⁺ channels enable saltatory conduction."
      },
      {
        "term": "Spatial summation",
        "definition": "Additive depolarisation from several presynaptic neurones simultaneously releasing neurotransmitter onto one postsynaptic neurone."
      }
    ],
    "checklistPoints": [
      "Explain ion movements and channel states across resting potential, depolarisation, repolarisation, and hyperpolarisation.",
      "State the three biological functions of the refractory period (unidirectional, discrete impulses, maximum frequency).",
      "Describe all 6 steps of cholinergic synaptic transmission including Ca²⁺, exocytosis, Na⁺ influx, and acetylcholinesterase."
    ]
  },
  "al-bio-6-2": {
    "subtopicId": "al-bio-6-2",
    "subtopicCode": "6.2",
    "subtopicTitle": "Sliding Filament Model & Kidney Osmoregulation",
    "readingMinutes": 14,
    "videoTitle": "Structure & Function of Skeletal Muscles: Sliding Filament Theory",
    "youtubeId": "FByYJG7YKyQ",
    "videoChannel": "Miss Estruch Biology",
    "videoDuration": "18:43",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "Structure of Myofibrils & Sarcomeres (A, I, H, Z)",
        "cardId": "al-bio-6-2-c1"
      },
      {
        "time": "5:00",
        "seconds": 300,
        "label": "Sliding Filament Mechanism (Actin & Myosin)",
        "cardId": "al-bio-6-2-c1"
      },
      {
        "time": "10:40",
        "seconds": 640,
        "label": "Role of Ca2+, Tropomyosin & ATP",
        "cardId": "al-bio-6-2-c1"
      },
      {
        "time": "15:00",
        "seconds": 900,
        "label": "Slow-Twitch vs Fast-Twitch Muscle Fibres",
        "cardId": "al-bio-6-2-c1"
      }
    ],
    "cards": [
      {
        "id": "al-bio-6-2-c1",
        "title": "Sarcomere Ultrastructure & Sliding Filament Theory",
        "summary": "Sarcomere band changes, Ca²⁺/troponin/tropomyosin cross-bridge cycling, and muscle fibre types.",
        "bullets": [
          "A sarcomere spans from Z-line to Z-line, containing thick myosin filaments (**A-band**) and thin actin filaments (**I-band** = actin only; **H-zone** = myosin only). During contraction, actin slides over myosin: the I-band and H-zone SHORTEN, Z-lines move closer, while the A-band stays CONSTANT.",
          "Stimulation: action potential depolarises the sarcolemma and T-tubules, causing the sarcoplasmic reticulum to release Ca²⁺ ions. Ca²⁺ binds to **troponin**, changing its shape and shifting tropomyosin away from myosin-binding sites on actin.",
          "Cross-bridge cycling: (1) myosin heads bind actin forming **actomyosin cross-bridges**; (2) ADP + Pᵢ release triggers the power stroke pulling actin inward; (3) fresh ATP binds myosin head, breaking the cross-bridge; (4) myosin ATPase (activated by Ca²⁺) hydrolyses ATP → ADP + Pᵢ to recock the myosin head.",
          "**Slow-twitch fibres** (endurance: high myoglobin, rich capillaries, many mitochondria) rely on aerobic respiration; **fast-twitch fibres** (sprinting: abundant glycogen and phosphocreatine to rapidly phosphorylate ADP → ATP anaerobically)."
        ],
        "glossaryPills": [
          {
            "term": "sarcomere",
            "definition": "The basic repeating contractile unit of a myofibril extending between two adjacent Z-lines."
          },
          {
            "term": "tropomyosin",
            "definition": "Fibrous regulatory protein wrapped around actin that blocks myosin-binding sites in a relaxed muscle until displaced by Ca²⁺-bound troponin."
          }
        ],
        "memoryAid": "A-band = Always constant length (length of myosin). I-band & H-zone shrink during contraction!",
        "subsections": [
          {
            "heading": "Sliding Filament Model (Role of Ca²⁺ & ATP)",
            "bullets": [
              "**Ca²⁺ trigger** - action potential triggers sarcoplasmic reticulum to release **Ca²⁺** → binds **troponin**, moving **tropomyosin** off **actin binding sites** → **myosin heads** form cross-bridges and perform the power stroke!",
              "**ATP’s TWO roles** - (1) ATP binds myosin to **BREAK the actin–myosin cross-bridge** (lack of ATP = rigor mortis!); (2) ATP hydrolysis **re-cocks** the myosin head back into its high-energy position.",
              "**Band changes during contraction** - **I-band & H-zone SHORTEN**, **Z-lines move CLOSER**, **A-band STAYS CONSTANT** (length of myosin filament does not change!)."
            ],
            "exampleHeading": "Worked check: Phosphocreatine in fast-twitch muscle",
            "examples": [
              "Donates a phosphate group directly to ADP (**PCr + ADP → Cr + ATP**) anaerobically to supply instant bursts of ATP during sprinting!"
            ]
          }
        ]
      },
      {
        "id": "al-bio-6-2-c2",
        "title": "Nephron Ultrafiltration & Loop of Henle Countercurrent Multiplier",
        "summary": "Glomerular ultrafiltration, PCT co-transport, and the Loop of Henle countercurrent multiplier.",
        "bullets": [
          "**Ultrafiltration** (Bowman’s capsule): wider afferent arteriole and narrower efferent arteriole build high glomerular **hydrostatic pressure**, forcing water, glucose, urea, and ions through capillary fenestrations, the collagenous basement membrane (blocks plasma proteins >69 kDa), and podocyte filtration slits.",
          "**Proximal Convoluted Tubule (PCT)**: 100% of glucose is selectively reabsorbed via Na⁺-glucose co-transport across microvilli-rich walls packed with mitochondria, followed by water via osmosis.",
          "Loop of Henle countercurrent multiplier: (1) **Ascending limb** (impermeable to water) actively pumps Na⁺ and Cl⁻ out into the medulla interstitial fluid, lowering medullary water potential; (2) **Descending limb** (permeable to water, impermeable to ions) loses water by osmosis into the hypertonic medulla, concentrating filtrate toward the hairpin turn; (3) the resulting steep medullary Ψ gradient enables concentrated urine production."
        ],
        "glossaryPills": [
          {
            "term": "countercurrent multiplier",
            "definition": "Active ion pumping by the ascending limb paired with passive water loss from the descending limb of the Loop of Henle to establish a deep medullary water potential gradient."
          }
        ],
        "commonMistake": "Make sure you clearly distinguish the limbs of the Loop of Henle: Descending = Water OUT by osmosis; Ascending = Na⁺/Cl⁻ OUT by active transport (waterproof wall).",
        "subsections": [
          {
            "heading": "Loop of Henle Countercurrent Multiplier & ADH Osmoregulation",
            "bullets": [
              "**Loop of Henle** - **ascending limb** actively pumps Na⁺/Cl⁻ OUT (impermeable to water) → lowers medulla water potential; **descending limb** is permeable to water so water leaves by osmosis, building a steep medullary ψ gradient!",
              "**ADH negative feedback** - low blood ψ (dehydration) detected by **hypothalamus osmoreceptors** → **posterior pituitary** secretes **ADH** → binds collecting-duct receptors → vesicles fuse, inserting **aquaporins** → more water reabsorbed → small volume of **concentrated urine**!"
            ],
            "exampleHeading": "Concrete check: Second-messenger model (Adrenaline / Glucagon)",
            "examples": [
              "Hormone (1st messenger) binds liver receptor → activates **adenylate cyclase** → converts ATP → **cAMP (2nd messenger)** → activates protein kinase → **glycogenolysis** (glycogen → glucose)!"
            ]
          }
        ]
      },
      {
        "id": "al-bio-6-2-c3",
        "title": "Osmoregulation, ADH & Negative Feedback",
        "summary": "Hypothalamic osmoreceptors, ADH release, and aquaporin insertion in the collecting duct.",
        "bullets": [
          "When blood water potential drops (dehydration/salty meal), **osmoreceptors** in the hypothalamus lose water by osmosis and shrink, sending nerve impulses to the posterior pituitary gland to secrete more **antidiuretic hormone (ADH)**.",
          "ADH travels in the bloodstream to collecting duct and DCT epithelial cells, binding complementary membrane receptors and activating phosphorylase enzyme cascades.",
          "This causes intracellular vesicles containing aquaporin water-channel proteins to fuse with the luminal cell-surface membrane, dramatically increasing water permeability.",
          "More water moves out of the collecting duct by osmosis into the hypertonic renal medulla and back into blood capillaries, yielding a small volume of concentrated urine and restoring blood water potential via **negative feedback**."
        ],
        "glossaryPills": [
          {
            "term": "aquaporin",
            "definition": "Channel proteins inserted into collecting duct membranes in response to ADH to greatly increase water reabsorption by osmosis."
          }
        ],
        "memoryAid": "ADH = Always Digging for H₂O (more ADH → more aquaporins → more water reabsorbed → small volume of dark, concentrated urine)."
      }
    ],
    "keyTerms": [
      {
        "term": "Actomyosin cross-bridge",
        "definition": "Temporary attachment of a myosin globular head to an exposed actin binding site driving muscle contraction."
      },
      {
        "term": "Phosphocreatine",
        "definition": "Rapid anaerobic phosphate reserve in fast-twitch muscle fibres that phosphorylates ADP straight back to ATP."
      },
      {
        "term": "Ultrafiltration",
        "definition": "Pressure-driven filtration of small solutes and water from glomerular capillaries into Bowman’s capsule."
      },
      {
        "term": "Osmoreceptor",
        "definition": "Hypothalamic sensory cell that detects changes in blood water potential and regulates ADH release."
      }
    ],
    "checklistPoints": [
      "Explain why the I-band and H-zone narrow while the A-band stays constant during sarcomere shortening.",
      "Detail the exact roles of Ca²⁺, troponin, tropomyosin, ATP binding, and ATP hydrolysis in cross-bridge cycling.",
      "Explain how the Loop of Henle builds a medullary water potential gradient and how ADH inserts aquaporins into collecting ducts."
    ]
  },
  "al-bio-7-1": {
    "subtopicId": "al-bio-7-1",
    "subtopicCode": "7.1",
    "subtopicTitle": "Dihybrid Inheritance, Epistasis & Hardy-Weinberg",
    "readingMinutes": 13,
    "videoTitle": "Hardy-Weinberg Equation - A-Level Biology",
    "youtubeId": "mpm8-pTEmJ4",
    "videoChannel": "Miss Estruch Biology",
    "videoDuration": "13:22",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "Hardy-Weinberg Equations (p+q=1, p²+2pq+q²=1)",
        "cardId": "al-bio-7-1-c3"
      },
      {
        "time": "3:20",
        "seconds": 200,
        "label": "Five Conditions for Genetic Equilibrium",
        "cardId": "al-bio-7-1-c3"
      },
      {
        "time": "7:00",
        "seconds": 420,
        "label": "Calculating Allele & Carrier Frequencies",
        "cardId": "al-bio-7-1-c3"
      },
      {
        "time": "10:30",
        "seconds": 630,
        "label": "Exam-Style Worked Problems",
        "cardId": "al-bio-7-1-c3"
      }
    ],
    "cards": [
      {
        "id": "al-bio-7-1-c1",
        "title": "Dihybrid Crosses, Autosomal Linkage & Epistasis",
        "summary": "Codominance, sex linkage, autosomal linkage, and modified dihybrid epistasis ratios.",
        "bullets": [
          "Unlinked dihybrid F₁ × F₁ cross (AaBb × AaBb) yields the classic 9:3:3:1 phenotypic ratio. **Codominance** (e.g. ABO blood groups Iᴬ, Iᴮ, Iᴼ) expresses both alleles equally in heterozygotes; **sex-linked recessive** traits (e.g. haemophilia on the X chromosome) appear far more often in XY males.",
          "Autosomal linkage occurs when two gene loci reside on the same autosome and are inherited together unless separated by crossing over — yielding many parental-type offspring and few recombinant offspring (closer loci = fewer recombinants).",
          "Epistasis occurs when alleles at one gene locus mask or modify the phenotypic expression of alleles at a second locus: recessive epistasis (aa masks B/b → 9:3:4 ratio), dominant epistasis (A_ masks B/b → 12:3:1), and complementary gene action (needs both A_ and B_ → 9:7)."
        ],
        "glossaryPills": [
          {
            "term": "epistasis",
            "definition": "Gene interaction in which the presence of a particular allele combination at one locus suppresses or alters expression of a gene at a different locus."
          },
          {
            "term": "autosomal linkage",
            "definition": "Co-inheritance of two or more genes located on the same non-sex chromosome, deviating from Mendelian independent assortment."
          }
        ],
        "memoryAid": "Always verify the total parts sum to 16 in modified dihybrid epistasis ratios: 9:3:4 (recessive), 12:3:1 (dominant), 9:7 (complementary).",
        "subsections": [
          {
            "heading": "Autosomal Linkage, Sex-Linkage & Epistasis Ratios",
            "bullets": [
              "**Expected unlinked dihybrid (AaBb × AaBb)** = **9:3:3:1**; **Epistasis modifications**: recessive epistasis (**9:3:4**), dominant epistasis (**12:3:1**), complementary genes (**9:7**).",
              "**Autosomal linkage** - two genes on the SAME non-sex chromosome stay together unless separated by **crossing over** (producing far fewer recombinant phenotypes than 9:3:3:1!).",
              "**Sex-linked recessive (X-linked, e.g. haemophilia)** - males (XY) need only **ONE recessive allele** to express the trait because the Y chromosome lacks the corresponding locus!"
            ],
            "exampleHeading": "Worked example: Hardy–Weinberg calculation (1 in 2500 has cystic fibrosis)",
            "examples": [
              "q² = 1/2500 = 0.0004 → q = √0.0004 = **0.02** → p = 1 − 0.02 = **0.98** → carrier frequency **2pq** = 2(0.98)(0.02) = **0.0392 (3.92%)**!"
            ]
          }
        ]
      },
      {
        "id": "al-bio-7-1-c2",
        "title": "Chi-Squared (χ²) Goodness-of-Fit Test",
        "summary": "Applying the chi-squared formula and evaluating significance against p = 0.05 critical values.",
        "bullets": [
          "Formula: χ² = Σ (O − E)² ÷ E, where O = observed phenotype count and E = expected count from genetic ratio.",
          "**Degrees of freedom** (df) = number of phenotypic categories (n) − 1. Compare calculated χ² against the critical value at **p = 0.05**.",
          "If χ² < critical value: accept the null hypothesis — there is NO statistically significant difference between observed and expected numbers (probability > 5% that differences are due to chance alone).",
          "If χ² ≥ critical value: reject the null hypothesis — there IS a statistically significant difference (p < 0.05 that difference is due to chance), suggesting linkage, epistasis, or differential survival."
        ],
        "glossaryPills": [
          {
            "term": "null hypothesis",
            "definition": "Statistical baseline assumption stating that there is no significant difference between observed and expected frequencies, and any deviation is due to chance."
          }
        ],
        "commonMistake": "NEVER write \"results are due to chance\" without citing the p = 0.05 probability threshold and comparing your calculated χ² value explicitly to the critical value!",
        "subsections": [
          {
            "heading": "Chi-Squared (χ²) Test in Genetics",
            "bullets": [
              "**χ² = Σ (O − E)² / E** with degrees of freedom **df = n − 1** (number of phenotype categories minus 1) at p = 0.05.",
              "**Decision rule** - if **χ² < critical value**, probability due to chance is > 5% → **ACCEPT H₀** (no significant difference from expected ratio); if **χ² ≥ critical value**, **REJECT H₀** (significant difference — e.g. linkage or epistasis!)."
            ],
            "exampleHeading": "Concrete check: Five Hardy–Weinberg assumptions",
            "examples": [
              "Large population, random mating, NO mutation, NO migration (gene flow), and NO natural selection!"
            ]
          }
        ]
      },
      {
        "id": "al-bio-7-1-c3",
        "title": "The Hardy-Weinberg Principle",
        "summary": "Solving Hardy-Weinberg allele and carrier frequencies and recalling its five assumptions.",
        "bullets": [
          "Equations: **p + q = 1** (allele frequencies: p = dominant allele A, q = recessive allele a) and **p² + 2pq + q² = 1** (genotype frequencies: p² = AA, 2pq = Aa heterozygote carriers, q² = aa).",
          "Always start a Hardy-Weinberg calculation from the homozygous recessive phenotype frequency (q²): take √(q²) to get q, then p = 1 − q, then compute 2pq for carrier frequency.",
          "Five assumptions required for constant allele frequencies: (1) large population (no genetic drift), (2) **random** mating, (3) no mutations, (4) no migration (gene flow), and (5) no natural selection."
        ],
        "glossaryPills": [
          {
            "term": "carrier frequency",
            "definition": "Proportion of heterozygous individuals (2pq) in a population who carry one recessive allele without expressing the recessive phenotype."
          }
        ],
        "memoryAid": "Start with q² (the recessive count ÷ total), square-root to get q, subtract from 1 for p, multiply 2pq for carriers!"
      }
    ],
    "keyTerms": [
      {
        "term": "Codominance",
        "definition": "Inheritance pattern where both alleles in a heterozygote are simultaneously expressed in the phenotype."
      },
      {
        "term": "Epistasis",
        "definition": "Masking or modification of one gene’s phenotypic expression by alleles at another gene locus."
      },
      {
        "term": "Chi-squared test",
        "definition": "Statistical test assessing whether deviations between observed and expected categorical counts are statistically significant."
      },
      {
        "term": "Hardy-Weinberg equilibrium",
        "definition": "Mathematical baseline predicting constant allele and genotype frequencies across generations in the absence of evolutionary forces."
      }
    ],
    "checklistPoints": [
      "Construct genetic diagrams for codominance, sex linkage, autosomal linkage, and dominant/recessive epistasis.",
      "Calculate χ², determine degrees of freedom, and interpret results rigorously against the p = 0.05 critical value.",
      "Solve Hardy-Weinberg problems accurately starting from q² and list all five equilibrium assumptions."
    ]
  },
  "al-bio-7-2": {
    "subtopicId": "al-bio-7-2",
    "subtopicCode": "7.2",
    "subtopicTitle": "Speciation, Populations & Ecological Succession",
    "readingMinutes": 12,
    "videoTitle": "Ecological Succession: Primary & Secondary Succession",
    "youtubeId": "CFGufjjfoC8",
    "videoChannel": "Miss Estruch Biology",
    "videoDuration": "13:24",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "Primary Succession & Pioneer Species",
        "cardId": "al-bio-7-2-c3"
      },
      {
        "time": "3:30",
        "seconds": 210,
        "label": "Seral Stages & Humus Formation",
        "cardId": "al-bio-7-2-c3"
      },
      {
        "time": "7:10",
        "seconds": 430,
        "label": "Climax Community & Biodiversity",
        "cardId": "al-bio-7-2-c3"
      },
      {
        "time": "10:20",
        "seconds": 620,
        "label": "Secondary Succession & Conservation Plagioclimax",
        "cardId": "al-bio-7-2-c3"
      }
    ],
    "cards": [
      {
        "id": "al-bio-7-2-c1",
        "title": "Allopatric vs Sympatric Speciation & Genetic Drift",
        "summary": "Allopatric geographical isolation vs sympatric isolation and genetic drift in small populations.",
        "bullets": [
          "**Allopatric speciation**: a physical geographical barrier (river, mountain range) splits a population, preventing gene flow. Different abiotic/biotic selection pressures act on **random** mutations in each sub-population, altering allele frequencies until reproductive isolation prevents fertile interbreeding.",
          "**Sympatric speciation**: reproductive isolation evolves WITHIN the same geographical area via polyploidy, temporal isolation (different breeding seasons), behavioural isolation (altered courtship songs), or disruptive ecological niche separation.",
          "Genetic drift: **random**, chance fluctuations in allele frequency across generations — negligible in large populations but dramatic in small, isolated founder/bottleneck populations, causing rapid divergence independent of natural selection."
        ],
        "glossaryPills": [
          {
            "term": "reproductive isolation",
            "definition": "Prevention of interbreeding and gene flow between two populations so that they evolve independently into distinct species."
          },
          {
            "term": "genetic drift",
            "definition": "Random change in allele frequencies from one generation to the next due to chance sampling, having its strongest effect in small populations."
          }
        ],
        "memoryAid": "Allopatric = Apart (geographical barrier); Sympatric = Same place (behavioural/temporal/polyploid isolation).",
        "subsections": [
          {
            "heading": "Allopatric vs Sympatric Speciation (6-Mark Blueprint!)",
            "bullets": [
              "**Allopatric speciation** - **geographical barrier** (river/mountain/island) physically splits a population → no gene flow → different environmental **selection pressures** + random mutations → allele frequencies diverge → **reproductively isolated** (can no longer interbreed to produce **fertile offspring**!).",
              "**Sympatric speciation** - occurs in the **SAME geographical area** via **behavioural** (courtship), **temporal** (different breeding seasons), **mechanical**, or **polyploidy** reproductive isolation!"
            ],
            "exampleHeading": "Worked example: Mark–Release–Recapture (Lincoln Index)",
            "examples": [
              "Population N = **(First catch S₁ × Second catch S₂) / Marked recaptured R** — e.g. (40 × 50) / 10 = **200** (assumes no migration, no birth/death, mark does not harm/increase predation!)."
            ]
          }
        ]
      },
      {
        "id": "al-bio-7-2-c2",
        "title": "Populations, Sampling & Mark-Release-Recapture",
        "summary": "Carrying capacity, competitive exclusion, quadrat/transect sampling, and Lincoln Index estimates.",
        "bullets": [
          "Carrying capacity is the maximum stable population size an ecosystem can sustain, capped by abiotic factors (light, temperature, pH) and biotic factors (intraspecific/interspecific competition, predation, disease). **Competitive exclusion** states two species cannot permanently occupy the exact same ecological niche.",
          "Sessile organisms are sampled using **random** quadrats (random coordinate generator to eliminate bias) for percentage cover/frequency, or a belt transect along an environmental gradient (e.g., rocky shore zonation).",
          "Motile animals are estimated using mark-release-recapture (**Lincoln Index**): Estimated Population = (n₁ × n₂) ÷ m, assuming marks are non-toxic/permanent, marked individuals mix randomly, and there is no immigration, emigration, births, or deaths between samples."
        ],
        "glossaryPills": [
          {
            "term": "carrying capacity",
            "definition": "The maximum population size of a species that an environment can support indefinitely given available resources."
          }
        ],
        "commonMistake": "When describing mark-release-recapture assumptions, always state that the mark must NOT increase visibility to predators or impede locomotion.",
        "subsections": [
          {
            "heading": "Primary Succession & Conservation Management",
            "bullets": [
              "**Primary succession** - bare rock colonised by **pioneer species** (lichens/moss) → die & decompose forming humus/soil → deeper soil holds water & nitrates → less hostile environment → larger plants **outcompete** pioneers → stable **climax community** (highest biodiversity!).",
              "**Managing succession for conservation** - grazing, mowing, or controlled burning **halts succession** to preserve threatened mid-seral habitats (e.g. UK chalk grasslands/heathlands)!"
            ],
            "exampleHeading": "Worked check: NPP = GPP − R (Net Primary Productivity)",
            "examples": [
              "Energy transfer between trophic levels is only ~10% because of reflection, respiratory heat loss (R), inedible parts, and egestion (faeces)!"
            ]
          }
        ]
      },
      {
        "id": "al-bio-7-2-c3",
        "title": "Primary & Secondary Succession and Conservation",
        "summary": "Pioneer species, abiotic soil development through seral stages, climax communities, and plagioclimax.",
        "bullets": [
          "**Primary succession** colonises newly exposed barren land (volcanic rock, sand dunes). Hardy **pioneer species** (lichens, marram grass) tolerate hostile abiotic conditions; when they die and decompose, they add humus and nutrients, raising soil depth and water retention.",
          "Each seral stage alters the abiotic environment to make it LESS hostile and more suitable for incoming competitor species, which outcompete earlier pioneers — increasing biomass, niche variety, and biodiversity until a stable climax community (e.g., oak woodland) forms.",
          "**Secondary succession** begins on previously colonised land where soil and a seed bank already exist (e.g., after wildfire or clearing), progressing far faster.",
          "Conservation often intentionally halts succession (creating a plagioclimax, e.g., heather moorland via controlled grazing/burning) to preserve endangered mid-seral habitats and species."
        ],
        "glossaryPills": [
          {
            "term": "climax community",
            "definition": "The stable, self-sustaining final seral stage of ecological succession in equilibrium with the local climate."
          },
          {
            "term": "plagioclimax",
            "definition": "An arrested community stage maintained artificially by human management practices such as grazing, mowing, or controlled burning."
          }
        ],
        "memoryAid": "Succession mantra: Pioneers colonise → die & decompose → improve soil/abiotic conditions → less hostile → outcompeted by larger species → climax community."
      }
    ],
    "keyTerms": [
      {
        "term": "Allopatric speciation",
        "definition": "Formation of new species following geographical separation that blocks gene flow."
      },
      {
        "term": "Sympatric speciation",
        "definition": "Formation of new species within the same habitat via behavioural, temporal, or genetic reproductive isolation."
      },
      {
        "term": "Competitive exclusion",
        "definition": "Ecological principle that when two species compete for an identical niche, the better-adapted competitor eliminates the other."
      },
      {
        "term": "Pioneer species",
        "definition": "First hardy organisms to colonise barren land, initiating soil formation in primary succession."
      }
    ],
    "checklistPoints": [
      "Compare allopatric vs sympatric speciation mechanisms and explain why genetic drift dominates in small populations.",
      "Design unbiased quadrat/transect studies and calculate population size with Lincoln Index assumptions.",
      "Explain how pioneer species drive abiotic changes through seral stages to a climax community, and why conservation creates plagioclimaxes."
    ]
  },
  "al-bio-8-1": {
    "subtopicId": "al-bio-8-1",
    "subtopicCode": "8.1",
    "subtopicTitle": "Mutations, Stem Cells, Epigenetics & Cancer",
    "readingMinutes": 13,
    "videoTitle": "Epigenetics and Gene Expression - Methylation & Acetylation",
    "youtubeId": "vO0yDhQFdAM",
    "videoChannel": "Miss Estruch Biology",
    "videoDuration": "7:27",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "What Is Epigenetics?",
        "cardId": "al-bio-8-1-c2"
      },
      {
        "time": "1:45",
        "seconds": 105,
        "label": "DNA Methylation & Transcription Inhibition",
        "cardId": "al-bio-8-1-c2"
      },
      {
        "time": "3:55",
        "seconds": 235,
        "label": "Histone Acetylation & Chromatin Packing",
        "cardId": "al-bio-8-1-c2"
      },
      {
        "time": "5:50",
        "seconds": 350,
        "label": "Epigenetics in Tumour Suppressor Genes & Cancer",
        "cardId": "al-bio-8-1-c3"
      }
    ],
    "cards": [
      {
        "id": "al-bio-8-1-c1",
        "title": "Gene Mutations & Stem Cell Potency",
        "summary": "Substitution and frameshift mutations alongside totipotent, pluripotent, multipotent, and iPS cells.",
        "bullets": [
          "**Base substitution** changes one nucleotide: may be silent (degenerate code specifies same amino acid), missense (different amino acid altering tertiary bonds/active site), or nonsense (premature stop codon). Base addition or deletion shifts the entire reading frame (frameshift), altering every downstream codon.",
          "**Totipotent** stem cells (early zygote/blastomeres) can divide into ANY body cell plus extra-embryonic placenta tissues; Pluripotent cells (embryonic inner cell mass) form any body tissue but not placenta; **Multipotent** (bone marrow) form limited lineages; Unipotent (cardiomyocytes) form one cell type.",
          "Induced Pluripotent Stem (iPS) cells are reprogrammed from adult somatic cells by introducing specific transcription factor genes — avoiding embryo destruction and immune rejection."
        ],
        "glossaryPills": [
          {
            "term": "frameshift",
            "definition": "Disruption of the triplet reading frame caused by insertion or deletion of nucleotides (not a multiple of three), scrambling all downstream codons."
          },
          {
            "term": "pluripotent",
            "definition": "Stem cells capable of differentiating into almost any body cell type, found in early embryos or generated as iPS cells."
          }
        ],
        "memoryAid": "Potency ladder: Totipotent (Total = baby + placenta) → Pluripotent (Plenty = all body cells) → Multipotent (Multiple = blood lineages) → Unipotent (Uno = one type).",
        "subsections": [
          {
            "heading": "Mutations, Stem Cell Potency & Epigenetic Control",
            "bullets": [
              "**Frameshift vs Substitution** - **insertion or deletion** (not a multiple of 3) shifts the ENTIRE reading frame downstream (catastrophic!); **substitution** may be silent (degenerate code), missense, or nonsense (premature stop).",
              "**Stem cell potency** - **Totipotent** (early embryo: ANY body + placental cell) → **Pluripotent** (embryonic: ANY body cell, NOT placenta) → **Multipotent** (bone marrow) → **Unipotent** (cardiomyocytes); **iPS cells** reprogram adult somatic cells using transcription factors without embryo ethics issues!"
            ],
            "exampleHeading": "Worked check: Epigenetic methylation & histone acetylation",
            "examples": [
              "**Increased DNA methylation** OR **decreased histone acetylation** wraps DNA TIGHTLY around histones → blocks **transcription factors / RNA polymerase** → **SWITCHES GENE OFF**!"
            ]
          }
        ]
      },
      {
        "id": "al-bio-8-1-c2",
        "title": "Transcriptional Control, RNAi (siRNA) & Epigenetics",
        "summary": "Oestrogen transcription factors, siRNA mRNA cleavage, DNA methylation, and histone acetylation.",
        "bullets": [
          "**Oestrogen** is lipid-soluble and diffuses across the plasma membrane to bind a cytoplasmic transcription factor (oestrogen receptor), releasing an inhibitor molecule and changing its tertiary shape so the complex enters the nucleus, binds a specific DNA promoter, and activates RNA polymerase.",
          "**RNA interference (RNAi)**: small interfering RNA (siRNA) binds a protein complex (RISC) and guides it to a complementary target mRNA strand, hydrolysing the mRNA into fragments before translation can occur.",
          "Epigenetics controls heritable gene expression WITHOUT altering DNA base sequences via two reversible tags: (1) Increased **DNA methylation** (–CH₃ added to CpG cytosines) blocks transcription factor binding and attracts chromatin-condensing proteins (gene OFF); (2) Decreased **histone acetylation** exposes positive histone charges that bind negative DNA phosphates tightly, condensing chromatin into inaccessible heterochromatin (gene OFF)."
        ],
        "glossaryPills": [
          {
            "term": "heterochromatin",
            "definition": "Tightly condensed DNA-histone chromatin state that physically blocks RNA polymerase and transcription factors from accessing gene promoters."
          }
        ],
        "commonMistake": "Keep the two epigenetic switches crystal clear: MORE DNA methylation = gene SILENCED; MORE histone acetylation = DNA loosens = gene ACTIVATED.",
        "subsections": [
          {
            "heading": "Proto-Oncogenes, Tumour Suppressor Genes & siRNA",
            "bullets": [
              "**Proto-oncogene** (stimulates cell division) → mutation turns it into a permanently active **oncogene** → uncontrolled mitosis!",
              "**Tumour suppressor gene** (slows division / triggers apoptosis) → **mutation OR hypermethylation** inactivates it → brakes fail → tumour develops!",
              "**RNA interference (siRNA)** - double-stranded siRNA guides an enzyme complex to bind complementary **mRNA** and **hydrolyse/cut it**, blocking **translation**!"
            ],
            "exampleHeading": "Concrete check: Benign vs Malignant tumours",
            "examples": [
              "**Benign**: slow-growing, surrounded by fibrous capsule, non-invasive; **Malignant**: rapid, unencapsulated, invades tissues and spreads via blood/lymph (**metastasis**)!"
            ]
          }
        ]
      },
      {
        "id": "al-bio-8-1-c3",
        "title": "Oncogenes, Tumour Suppressor Genes & Tumourigenesis",
        "summary": "Gain-of-function oncogenes, silenced tumour suppressor genes, and benign vs malignant tumours.",
        "bullets": [
          "**Proto-oncogenes** code for growth-factor receptors or signalling proteins that stimulate normal cell division. A gain-of-function mutation converts one into a permanently active oncogene, driving rapid uncontrolled mitosis.",
          "**Tumour suppressor genes** (e.g., TP53) code for proteins that slow cell division, repair damaged DNA, or trigger apoptosis. Inactivation by mutation OR epigenetic hypermethylation of their promoter silences the brakes, permitting malignant tumour growth.",
          "**Benign tumours** grow slowly within a fibrous capsule and do not metastasise; **malignant tumours** are poorly differentiated, invade adjacent tissues, trigger angiogenesis, and metastasise via blood/lymph to form secondary tumours."
        ],
        "glossaryPills": [
          {
            "term": "apoptosis",
            "definition": "Controlled, programmed cell death triggered when irreparable DNA damage is detected, preventing cancerous proliferation."
          }
        ],
        "memoryAid": "Proto-oncogene = Accelerator pedal (stuck down = oncogene); Tumour suppressor gene = Brake pedal (cut by mutation or hypermethylation)."
      }
    ],
    "keyTerms": [
      {
        "term": "iPS cell",
        "definition": "Adult somatic cell reprogrammed via transcription factors back into a pluripotent stem cell state."
      },
      {
        "term": "siRNA",
        "definition": "Short double-stranded RNA molecule that mediates post-transcriptional silencing by guiding enzymatic cleavage of complementary mRNA."
      },
      {
        "term": "Epigenetics",
        "definition": "Heritable regulation of gene expression through DNA methylation and histone acetylation without altering the nucleotide base sequence."
      },
      {
        "term": "Tumour suppressor gene",
        "definition": "Gene encoding proteins that restrain mitosis, repair DNA, or trigger apoptosis; loss of function promotes cancer."
      }
    ],
    "checklistPoints": [
      "Compare silent, missense, nonsense, and frameshift mutations on polypeptide tertiary structure.",
      "Explain oestrogen-mediated transcriptional activation and siRNA post-transcriptional mRNA cleavage.",
      "Explain how DNA hypermethylation and histone deacetylation silence tumour suppressor genes."
    ]
  },
  "al-bio-8-2": {
    "subtopicId": "al-bio-8-2",
    "subtopicCode": "8.2",
    "subtopicTitle": "PCR, Recombinant DNA & Genetic Fingerprinting",
    "readingMinutes": 13,
    "videoTitle": "PCR In Vitro Cloning - Polymerase Chain Reaction",
    "youtubeId": "6gABWJFxKRc",
    "videoChannel": "Miss Estruch Biology",
    "videoDuration": "7:14",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "What Is PCR (In Vitro Cloning)?",
        "cardId": "al-bio-8-2-c2"
      },
      {
        "time": "1:35",
        "seconds": 95,
        "label": "Step 1: Denaturation (95°C) & Step 2: Annealing (55°C)",
        "cardId": "al-bio-8-2-c2"
      },
      {
        "time": "3:35",
        "seconds": 215,
        "label": "Step 3: Extension (72°C) with Taq Polymerase",
        "cardId": "al-bio-8-2-c2"
      },
      {
        "time": "5:35",
        "seconds": 335,
        "label": "Exponential Amplification & Advantages",
        "cardId": "al-bio-8-2-c2"
      }
    ],
    "cards": [
      {
        "id": "al-bio-8-2-c1",
        "title": "Isolating Genes & In Vivo Recombinant DNA Cloning",
        "summary": "Gene isolation via reverse transcriptase or restriction enzymes, plasmid ligation, and marker genes.",
        "diagram": "bacterial-cell",
        "bullets": [
          "Three routes to isolate a target gene: (1) Reverse transcriptase converts mature mRNA (e.g., insulin mRNA from β-cells — intron-free!) into **cDNA**, made double-stranded by **DNA polymerase**; (2) Restriction endonucleases cut DNA at specific palindromic recognition sequences leaving staggered **sticky ends**; (3) Automated gene machine synthesises custom oligonucleotides from scratch.",
          "Inserting into a vector: the same restriction endonuclease cuts the bacterial plasmid so complementary **sticky ends** base-pair; DNA ligase seals the sugar-phosphate backbone via phosphodiester bonds, adding a promoter and terminator for prokaryotic transcription.",
          "Transformation: host bacteria are incubated with Ca²⁺ ions and heat-shocked to make membranes permeable. Replica plating or GFP fluorescence marker genes distinguish transformed bacteria containing recombinant plasmids from untransformed or empty-plasmid cells."
        ],
        "glossaryPills": [
          {
            "term": "restriction endonucleases",
            "definition": "Enzymes that hydrolyse DNA phosphodiester bonds at specific palindromic base sequences, often leaving overhanging sticky ends."
          },
          {
            "term": "DNA ligase",
            "definition": "Enzyme that catalyses the formation of phosphodiester bonds to covalently join cut DNA fragments into a vector plasmid."
          }
        ],
        "commonMistake": "Why use reverse transcriptase on mRNA when cloning human genes into bacteria? Because bacteria lack spliceosomes to remove eukaryotic introns, whereas mRNA has already been spliced!",
        "subsections": [
          {
            "heading": "PCR Thermal Cycling & Sticky-End Recombinant DNA",
            "bullets": [
              "**PCR (in vitro amplification)** - **95 °C** (breaks H-bonds, denatures strands) → **55 °C** (**primers anneal** to target ends and prevent strands re-joining) → **72 °C** (thermostable **Taq polymerase** extends complementary strands — doubles DNA every cycle: **N = N₀ × 2ⁿ**!).",
              "**In vivo cloning** - cut gene & plasmid with the **SAME restriction endonuclease** (creates complementary **sticky ends**) → **DNA ligase** forms phosphodiester bonds → transform bacteria + screen using **marker genes** (antibiotic resistance / GFP fluorescence)!"
            ],
            "exampleHeading": "Worked example: DNA copies after 10 cycles of PCR starting from 1 molecule",
            "examples": [
              "2¹⁰ = **1,024** double-stranded DNA molecules!"
            ]
          }
        ]
      },
      {
        "id": "al-bio-8-2-c2",
        "title": "Polymerase Chain Reaction (PCR — In Vitro Cloning)",
        "summary": "Exponential in vitro DNA amplification across 95°C, 55°C, and 72°C PCR cycles with Taq polymerase.",
        "bullets": [
          "PCR amplifies specific DNA fragments exponentially (2ⁿ copies after n cycles) in a thermocycler containing template DNA, free DNA nucleotides, two short single-stranded primers (defining the start/end of synthesis and preventing strand re-annealing), and thermostable Taq **DNA polymerase**.",
          "Step 1 — **Denaturation (95°C)**: high temperature breaks **hydrogen bonds** between complementary bases, separating double-stranded DNA into single template strands.",
          "Step 2 — **Annealing (55°C)**: mixture cools so complementary forward and reverse primers bind via **hydrogen bonds** to opposite ends of the target strands.",
          "Step 3 — Extension (72°C — optimum for Taq polymerase): Taq polymerase attaches to primers and synthesises new complementary strands by catalysing phosphodiester bonds."
        ],
        "glossaryPills": [
          {
            "term": "Taq polymerase",
            "definition": "Thermostable DNA polymerase extracted from Thermus aquaticus bacteria that does not denature during the 95°C PCR separation step."
          }
        ],
        "memoryAid": "PCR temperature rhythm: 95°C Split (Denature) → 55°C Stick (Anneal primers) → 72°C Stretch (Taq Extension).",
        "subsections": [
          {
            "heading": "DNA Probes, Gel Electrophoresis & VNTR Genetic Fingerprinting",
            "bullets": [
              "**Genetic fingerprinting** - extract DNA → amplify **VNTRs** (Variable Number Tandem Repeats in non-coding introns, unique to every person except identical twins!) → separate fragments by **gel electrophoresis** (shorter negatively charged fragments travel **FURTHER toward the positive anode**!) → hybridise with radioactive/fluorescent **DNA probes**!"
            ],
            "exampleHeading": "Concrete check: Why use reverse transcriptase (mRNA → cDNA) to isolate a human gene?",
            "examples": [
              "Mature mRNA has **introns already spliced out**, so bacteria (which cannot splice introns!) can immediately transcribe & translate human insulin!"
            ]
          }
        ]
      },
      {
        "id": "al-bio-8-2-c3",
        "title": "DNA Probes, Gel Electrophoresis & Genetic Fingerprinting",
        "summary": "Labelled DNA probes, agarose gel electrophoresis, and VNTR genetic fingerprinting.",
        "bullets": [
          "A **DNA probe** is a short, single-stranded DNA sequence complementary to a disease allele (e.g., BRCA1), labelled with a radioactive ³²P isotope or fluorescent tag. Sample DNA is denatured to single strands and incubated with probes (DNA hybridisation) for genetic screening and personalised medicine.",
          "Genetic fingerprinting targets **Variable Number Tandem Repeats (VNTRs)** — non-coding minisatellite base repeats whose repeat count varies uniquely between unrelated individuals (except identical twins).",
          "Steps: extract DNA → amplify VNTRs by PCR → digest with restriction endonucleases (cutting outside VNTRs) → separate negatively charged DNA fragments by size across an agarose gel electric field (smaller fragments migrate faster towards the positive anode) → Southern blot onto nylon membrane → hybridise with labelled probes → visualise banding pattern."
        ],
        "glossaryPills": [
          {
            "term": "DNA hybridisation",
            "definition": "Complementary base pairing between a labelled single-stranded DNA probe and a denatured single-stranded target DNA sequence."
          }
        ],
        "commonMistake": "In paternity testing, EVERY band in the child’s genetic fingerprint must match EITHER the mother OR the biological father (never invent new non-parental bands)."
      }
    ],
    "keyTerms": [
      {
        "term": "cDNA",
        "definition": "Complementary intron-free DNA synthesised from an mRNA template by reverse transcriptase."
      },
      {
        "term": "Sticky ends",
        "definition": "Short unpaired single-stranded overhangs created by staggered restriction enzyme cuts that anneal with complementary sequences."
      },
      {
        "term": "PCR",
        "definition": "Polymerase Chain Reaction — cyclic thermal amplification of specific DNA regions in vitro using primers and Taq polymerase."
      },
      {
        "term": "VNTR",
        "definition": "Variable Number Tandem Repeat — polymorphic non-coding DNA repeat loci used for forensic and paternity profiling."
      }
    ],
    "checklistPoints": [
      "Compare isolating genes via reverse transcriptase, restriction endonucleases, and gene machines.",
      "Explain all three PCR temperature steps (95°C, 55°C, 72°C) and the roles of primers and Taq polymerase.",
      "Trace VNTR genetic fingerprinting from DNA extraction and gel electrophoresis through probe hybridisation and banding interpretation."
    ]
  }
};

export const ALEVEL_BIOLOGY_QUIZZES: QuizQuestion[] = [
  {
    "id": "al-bio-q1",
    "subtopicId": "al-bio-1-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "Why is cellulose able to form high-tensile-strength microfibrils in plant cell walls whereas amylose forms compact helical coils?",
    "options": [
      "Cellulose is built from α-glucose monomers with 1,6-glycosidic branches",
      "Cellulose consists of inverted β-glucose chains forming unbranched parallel strands cross-linked by thousands of hydrogen bonds",
      "Cellulose contains ester bonds between adjacent glucose rings",
      "Cellulose is soluble in water and increases cell turgor directly"
    ],
    "correctIndex": 1,
    "explanation": "Every alternate β-glucose in cellulose is rotated 180° to form straight β-1,4 chains that cross-link via vast numbers of collective hydrogen bonds into rigid microfibrils."
  },
  {
    "id": "al-bio-q2",
    "subtopicId": "al-bio-1-1",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the protocol for the non-reducing sugar test on sucrose.",
    "segments": [
      "After confirming a negative Benedict’s test, boil the sample with dilute ",
      " to hydrolyse glycosidic bonds, then neutralise with ",
      " before reheating with Benedict’s reagent."
    ],
    "wordBank": [
      "hydrochloric acid",
      "sodium hydrogencarbonate",
      "ethanol",
      "biuret reagent",
      "iodine"
    ],
    "answers": [
      "hydrochloric acid",
      "sodium hydrogencarbonate"
    ],
    "explanation": "Dilute HCl hydrolyses sucrose into reducing monosaccharides (glucose and fructose), and alkaline NaHCO₃ neutralises the acid because Benedict’s requires alkaline conditions."
  },
  {
    "id": "al-bio-q3",
    "subtopicId": "al-bio-1-2",
    "type": "multi-select",
    "marks": 2,
    "selectCount": 2,
    "prompt": "Which TWO statements accurately describe non-competitive enzyme inhibition?",
    "options": [
      "The inhibitor binds to an allosteric site away from the active site",
      "Increasing substrate concentration completely restores Vmax",
      "Binding alters the enzyme’s tertiary structure and active site shape",
      "The inhibitor has an identical shape to the substrate"
    ],
    "correctIndices": [
      0,
      2
    ],
    "explanation": "Non-competitive inhibitors bind an allosteric site, distorting the active site tertiary structure so Vmax is permanently lowered regardless of excess substrate."
  },
  {
    "id": "al-bio-q4",
    "subtopicId": "al-bio-1-2",
    "type": "short-answer",
    "marks": 3,
    "prompt": "Explain how Meselson and Stahl’s centrifugation experiment with ¹⁵N and ¹⁴N proved DNA replication is semi-conservative rather than conservative.",
    "rubric": {
      "maxMarks": 3,
      "modelAnswer": "After one generation in ¹⁴N medium, all DNA formed a single intermediate-density hybrid band (one ¹⁵N strand + one ¹⁴N strand), ruling out conservative replication which would produce separate heavy and light bands. After two generations, 50% hybrid and 50% light bands formed.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Generation 1 produced one intermediate/hybrid band (half ¹⁵N, half ¹⁴N)",
          "requiredKeywordGroups": [
            [
              "hybrid",
              "intermediate"
            ],
            [
              "band",
              "density",
              "14n",
              "15n"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "Disproves conservative replication (which would yield two bands: heavy + light)",
          "requiredKeywordGroups": [
            [
              "conservative"
            ],
            [
              "disprov",
              "rule",
              "two band",
              "heavy and light"
            ]
          ]
        },
        {
          "id": "mp3",
          "markDescription": "Generation 2 produced both a hybrid band and a light (¹⁴N) band",
          "requiredKeywordGroups": [
            [
              "second",
              "generation 2",
              "50%"
            ],
            [
              "light",
              "14n"
            ]
          ]
        }
      ]
    },
    "explanation": "The single hybrid band in Gen 1 ruled out conservative replication, and the 1:1 hybrid:light ratio in Gen 2 confirmed semi-conservative replication."
  },
  {
    "id": "al-bio-q5",
    "subtopicId": "al-bio-2-1",
    "type": "matching",
    "marks": 3,
    "prompt": "Match each cell fractionation buffer property to its exact experimental purpose.",
    "pairs": [
      {
        "left": "Cold (ice-cold)",
        "right": "Reduces enzyme activity to prevent organelle autolysis"
      },
      {
        "left": "Isotonic (same Ψ)",
        "right": "Prevents organelles bursting or shrivelling by osmosis"
      },
      {
        "left": "Buffered (constant pH)",
        "right": "Prevents fluctuations in pH from denaturing organelle proteins"
      }
    ],
    "explanation": "Homogenisation buffer must be cold, isotonic, and buffered to preserve intact, functional organelles during differential centrifugation."
  },
  {
    "id": "al-bio-q6",
    "subtopicId": "al-bio-2-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "In an onion root-tip squash, a student counts 160 cells in total, of which 24 show condensed chromosomes. Calculate the mitotic index as a percentage.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "Mitotic index = (24 ÷ 160) × 100 = 15%.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Correct formula 24 ÷ 160",
          "requiredKeywordGroups": [
            [
              "24"
            ],
            [
              "160"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "Final answer 15%",
          "numericMatch": {
            "value": 15,
            "tolerance": 0.1
          }
        }
      ]
    },
    "explanation": "Mitotic index = (24 / 160) × 100 = 15%."
  },
  {
    "id": "al-bio-q7",
    "subtopicId": "al-bio-2-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "During an indirect ELISA test, why must the plate be washed thoroughly after adding the enzyme-linked secondary antibody?",
    "options": [
      "To denature any remaining primary antibodies",
      "To remove unbound enzyme-linked antibodies that would otherwise hydrolyse substrate and produce a false-positive colour change",
      "To make the wells isotonic for red blood cells",
      "To activate reverse transcriptase inside the well"
    ],
    "correctIndex": 1,
    "explanation": "Any unbound enzyme-linked antibody left in the well would convert the colourless substrate into a coloured product, creating a false positive."
  },
  {
    "id": "al-bio-q8",
    "subtopicId": "al-bio-3-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "How does countercurrent blood and water flow maximise oxygen uptake across fish gill lamellae?",
    "options": [
      "Blood and water reach 50% oxygen equilibrium halfway along the lamella",
      "Water with higher oxygen concentration constantly meets blood with lower oxygen concentration, maintaining a diffusion gradient along the entire length of the lamella",
      "It actively pumps oxygen molecules against a concentration gradient using ATP",
      "It thickens the gill epithelium to prevent water loss by osmosis"
    ],
    "correctIndex": 1,
    "explanation": "Opposite flow directions ensure pO₂ in water always exceeds pO₂ in blood across the full length of every gill lamella."
  },
  {
    "id": "al-bio-q9",
    "subtopicId": "al-bio-3-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "During vigorous exercise, elevated blood CO₂ shifts the oxyhaemoglobin dissociation curve to the right (the Bohr effect). What is the physiological advantage?",
    "options": [
      "Haemoglobin increases its affinity for oxygen, retaining more O₂ in red blood cells",
      "Haemoglobin’s affinity for oxygen decreases at a given pO₂, unloading more oxygen to actively respiring skeletal muscle",
      "Carbon dioxide binds covalently to Fe²⁺ haem groups permanently",
      "Left ventricular stroke volume immediately drops to zero"
    ],
    "correctIndex": 1,
    "explanation": "Lower pH from carbonic acid alters haemoglobin tertiary shape, lowering O₂ affinity so oxygen dissociates more readily at respiring muscles."
  },
  {
    "id": "al-bio-q10",
    "subtopicId": "al-bio-3-2",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the Münch mass flow explanation of sucrose loading into phloem.",
    "segments": [
      "Active loading of sucrose into sieve tube elements makes their water potential more ",
      ", causing water to enter from adjacent xylem by osmosis and increasing ",
      " pressure."
    ],
    "wordBank": [
      "negative",
      "hydrostatic",
      "positive",
      "atmospheric",
      "oncotic"
    ],
    "answers": [
      "negative",
      "hydrostatic"
    ],
    "explanation": "High sucrose lowers water potential (more negative), drawing water in osmotically and creating high hydrostatic pressure at the source."
  },
  {
    "id": "al-bio-q11",
    "subtopicId": "al-bio-4-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "Why is pre-mRNA splicing required in eukaryotic cells but NOT in prokaryotic cells?",
    "options": [
      "Prokaryotes lack RNA polymerase",
      "Eukaryotic genes contain non-coding introns that must be excised so exons can be joined into mature mRNA, whereas prokaryotic DNA lacks introns",
      "Prokaryotes translate DNA directly without mRNA",
      "Eukaryotic ribosomes only read 2-base codons"
    ],
    "correctIndex": 1,
    "explanation": "Eukaryotic pre-mRNA contains non-coding introns that spliceosomes remove before export through nuclear pores; prokaryotes lack introns."
  },
  {
    "id": "al-bio-q12",
    "subtopicId": "al-bio-4-2",
    "type": "short-answer",
    "marks": 2,
    "prompt": "A meadow quadrat survey finds 3 insect species with counts n = 10, 5, and 5 (total N = 20). Calculate Simpson’s Index of Diversity d = N(N − 1) ÷ Σn(n − 1) to 2 decimal places.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "N(N−1) = 20 × 19 = 380. Σn(n−1) = (10×9) + (5×4) + (5×4) = 90 + 20 + 20 = 130. d = 380 ÷ 130 = 2.92.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Numerator 380 and denominator 130",
          "requiredKeywordGroups": [
            [
              "380"
            ],
            [
              "130"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "Correct value 2.92",
          "numericMatch": {
            "value": 2.92,
            "tolerance": 0.02
          }
        }
      ]
    },
    "explanation": "d = (20 × 19) / (90 + 20 + 20) = 380 / 130 = 2.92."
  },
  {
    "id": "al-bio-q13",
    "subtopicId": "al-bio-5-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "In an illuminated chloroplast suspension, the CO₂ supply is suddenly switched off. What happens immediately to the stromal concentrations of RuBP and GP?",
    "options": [
      "RuBP increases while GP decreases",
      "RuBP decreases while GP increases",
      "Both RuBP and GP immediately rise to infinity",
      "Both RuBP and GP remain completely unchanged"
    ],
    "correctIndex": 0,
    "explanation": "Without CO₂, RuBP cannot be carboxylated by Rubisco so it accumulates (still regenerated from TP), while GP stops being formed and continues to be reduced to TP."
  },
  {
    "id": "al-bio-q14",
    "subtopicId": "al-bio-5-2",
    "type": "matching",
    "marks": 3,
    "prompt": "Match each stage of aerobic respiration to its exact cellular location.",
    "pairs": [
      {
        "left": "Glycolysis",
        "right": "Cytoplasm"
      },
      {
        "left": "Link reaction & Krebs cycle",
        "right": "Mitochondrial matrix"
      },
      {
        "left": "Oxidative phosphorylation (ETC)",
        "right": "Inner mitochondrial membrane (cristae)"
      }
    ],
    "explanation": "Glycolysis is cytoplasmic; Link and Krebs take place in the matrix; ETC and ATP synthase sit on the inner cristae."
  },
  {
    "id": "al-bio-q15",
    "subtopicId": "al-bio-5-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "Why is the conversion of pyruvate to lactate essential during anaerobic respiration in mammalian muscle?",
    "options": [
      "It generates 32 molecules of ATP directly from lactate",
      "It oxidises reduced NAD (NADH) back to NAD so glycolysis can continue yielding 2 net ATP per glucose",
      "It supplies oxygen to the mitochondrial electron transport chain",
      "It activates Rubisco in the cytoplasm"
    ],
    "correctIndex": 1,
    "explanation": "Without oxygen the ETC stops, so pyruvate must accept hydrogen from NADH to regenerate oxidised NAD needed for glycolysis."
  },
  {
    "id": "al-bio-q16",
    "subtopicId": "al-bio-6-1",
    "type": "multi-select",
    "marks": 2,
    "selectCount": 2,
    "prompt": "Select TWO direct physiological consequences of the refractory period in a neurone.",
    "options": [
      "Ensures action potentials propagate unidirectionally along the axon",
      "Doubles the peak voltage of each impulse to +80 mV",
      "Ensures action potentials remain discrete, separate impulses and limits maximum firing frequency",
      "Eliminates the need for myelin sheaths"
    ],
    "correctIndices": [
      0,
      2
    ],
    "explanation": "Inactivated voltage-gated Na⁺ channels prevent backward depolarisation (unidirectional) and keep adjacent impulses separate with a finite maximum frequency."
  },
  {
    "id": "al-bio-q17",
    "subtopicId": "al-bio-6-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "During skeletal muscle sarcomere contraction, how do the widths of the A-band, I-band, and H-zone change?",
    "options": [
      "A-band shortens; I-band and H-zone stay constant",
      "A-band stays constant; I-band and H-zone both shorten",
      "All three bands lengthen as actin pushes myosin outward",
      "Only the A-band disappears completely"
    ],
    "correctIndex": 1,
    "explanation": "Thick myosin filaments do not change length (A-band constant), while actin slides inward, shrinking the actin-only I-band and myosin-only H-zone."
  },
  {
    "id": "al-bio-q18",
    "subtopicId": "al-bio-6-2",
    "type": "short-answer",
    "marks": 3,
    "prompt": "Explain how antidiuretic hormone (ADH) acts on the collecting duct to restore blood water potential during dehydration.",
    "rubric": {
      "maxMarks": 3,
      "modelAnswer": "ADH binds complementary receptors on collecting duct cells, activating enzyme cascades so vesicles containing aquaporins fuse with the luminal membrane. This increases water permeability so more water leaves the filtrate by osmosis into the hypertonic medulla and enters blood capillaries.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "ADH binds receptors triggering vesicles with aquaporins to fuse with cell membrane",
          "requiredKeywordGroups": [
            [
              "aquaporin",
              "vesicle"
            ],
            [
              "fuse",
              "insert",
              "membrane"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "Increases permeability of collecting duct wall to water",
          "requiredKeywordGroups": [
            [
              "permeab"
            ],
            [
              "water"
            ]
          ]
        },
        {
          "id": "mp3",
          "markDescription": "More water reabsorbed by osmosis down water potential gradient into medulla/blood",
          "requiredKeywordGroups": [
            [
              "osmosis"
            ],
            [
              "medulla",
              "blood",
              "reabsorb"
            ]
          ]
        }
      ]
    },
    "explanation": "ADH increases aquaporin density in collecting duct membranes, allowing greater osmotic water reabsorption into the hypertonic medulla."
  },
  {
    "id": "al-bio-q19",
    "subtopicId": "al-bio-7-1",
    "type": "short-answer",
    "marks": 3,
    "prompt": "An autosomal recessive disorder affects 1 in 2,500 births (q² = 0.0004) in a population at Hardy-Weinberg equilibrium. Calculate the percentage of heterozygous carriers (2pq).",
    "rubric": {
      "maxMarks": 3,
      "modelAnswer": "q = √0.0004 = 0.02. p = 1 − 0.02 = 0.98. Carrier frequency 2pq = 2 × 0.98 × 0.02 = 0.0392 = 3.92%.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "q = 0.02 and p = 0.98",
          "requiredKeywordGroups": [
            [
              "0.02"
            ],
            [
              "0.98"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "2pq = 0.0392",
          "requiredKeywordGroups": [
            [
              "0.0392",
              "3.92"
            ]
          ]
        },
        {
          "id": "mp3",
          "markDescription": "Percentage 3.92%",
          "numericMatch": {
            "value": 3.92,
            "tolerance": 0.05
          }
        }
      ]
    },
    "explanation": "q = 0.02, p = 0.98, so 2pq = 2(0.98)(0.02) = 0.0392, or 3.92% carriers."
  },
  {
    "id": "al-bio-q20",
    "subtopicId": "al-bio-7-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "Which mechanism drives sympatric speciation rather than allopatric speciation?",
    "options": [
      "A mountain range physically divides one continuous habitat into two isolated valleys",
      "Polyploidy or altered courtship timing creates reproductive isolation within the same geographical area",
      "Continental drift separates island populations across an ocean",
      "Complete habitat destruction eliminates all alleles simultaneously"
    ],
    "correctIndex": 1,
    "explanation": "Sympatric speciation occurs without a geographical barrier, relying on genetic (polyploidy), temporal, or behavioural reproductive isolation."
  },
  {
    "id": "al-bio-q21",
    "subtopicId": "al-bio-8-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "How does hypermethylation of a tumour suppressor gene’s promoter region lead to tumour development?",
    "options": [
      "It increases histone acetylation so the gene is transcribed faster",
      "It prevents transcription factors and RNA polymerase binding, silencing the tumour suppressor protein so uncontrolled mitosis proceeds",
      "It mutates the ribosome so no proteins are made anywhere in the cell",
      "It converts benign cells into stem cells automatically"
    ],
    "correctIndex": 1,
    "explanation": "Excessive CpG methylation condenses chromatin and blocks transcription factor binding, switching off tumour suppressor brakes."
  },
  {
    "id": "al-bio-q22",
    "subtopicId": "al-bio-8-2",
    "type": "fill-blank",
    "marks": 3,
    "prompt": "Complete the three thermal stages of one PCR amplification cycle.",
    "segments": [
      "DNA strands separate at ",
      " °C, primers anneal at ",
      " °C, and thermostable Taq polymerase extends new strands at ",
      " °C."
    ],
    "wordBank": [
      "95",
      "55",
      "72",
      "37",
      "120"
    ],
    "answers": [
      "95",
      "55",
      "72"
    ],
    "explanation": "Denaturation (~95°C) breaks H-bonds, primer annealing (~55°C) pairs primers, and extension (~72°C) matches Taq polymerase’s optimum temperature."
  },
  {
    "id": "al-bio-q23",
    "subtopicId": "al-bio-1-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "Why do triglycerides have no osmotic effect on the water potential of cells where they are stored?",
    "options": [
      "They are large, non-polar molecules that are insoluble in water",
      "They form hydrogen bonds with every water molecule in the cytoplasm",
      "They dissociate into free glycerol ions at neutral pH",
      "They have a lower C–H bond density than carbohydrates"
    ],
    "correctIndex": 0,
    "explanation": "Triglycerides are non-polar and hydrophobic (insoluble in water), so they do not dissolve or lower cellular water potential."
  },
  {
    "id": "al-bio-q24",
    "subtopicId": "al-bio-2-2",
    "type": "short-answer",
    "marks": 3,
    "prompt": "Explain how sodium-glucose co-transport moves glucose from the ileum lumen into an epithelial cell against its concentration gradient.",
    "rubric": {
      "maxMarks": 3,
      "modelAnswer": "Na⁺/K⁺ ATPase actively pumps Na⁺ out of the epithelial cell into the blood, maintaining a low intracellular Na⁺ concentration. Na⁺ diffuses down its concentration gradient from the ileum lumen into the cell via a co-transporter protein, carrying glucose into the cell against its concentration gradient.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Na⁺ actively transported out of epithelial cell into blood using ATP",
          "requiredKeywordGroups": [
            [
              "na",
              "sodium"
            ],
            [
              "active",
              "atp",
              "pump"
            ],
            [
              "blood"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "Creates a Na⁺ concentration gradient between lumen and epithelial cell",
          "requiredKeywordGroups": [
            [
              "gradient",
              "low concentration"
            ]
          ]
        },
        {
          "id": "mp3",
          "markDescription": "Na⁺ diffuses in via co-transporter protein carrying glucose against its gradient",
          "requiredKeywordGroups": [
            [
              "co-transport",
              "cotransport",
              "carrier"
            ],
            [
              "glucose"
            ]
          ]
        }
      ]
    },
    "explanation": "Active Na⁺ extrusion creates an inward Na⁺ electrochemical gradient that powers secondary active uptake of glucose."
  },
  {
    "id": "al-bio-q25",
    "subtopicId": "al-bio-3-1",
    "type": "multi-select",
    "marks": 2,
    "selectCount": 2,
    "prompt": "Select TWO structural adaptations of xerophytic leaves (such as marram grass) that reduce the water potential gradient outside the stomata.",
    "options": [
      "Rolled leaves and sunken stomata in pits that trap moist humid air",
      "Dense epidermal trichome hairs that reduce air movement across the leaf surface",
      "Placing all stomata on the exposed upper epidermis",
      "Removing the waxy cuticle entirely to boost evaporation"
    ],
    "correctIndices": [
      0,
      1
    ],
    "explanation": "Rolled leaves, sunken stomatal pits, and epidermal hairs trap a boundary layer of humid water vapour, reducing the water potential gradient."
  },
  {
    "id": "al-bio-q26",
    "subtopicId": "al-bio-4-1",
    "type": "matching",
    "marks": 3,
    "prompt": "Match each nucleic acid or protein synthesis component to its exact role.",
    "pairs": [
      {
        "left": "RNA polymerase",
        "right": "Joins free RNA nucleotides via phosphodiester bonds along the DNA template strand"
      },
      {
        "left": "Spliceosome",
        "right": "Excises non-coding introns from eukaryotic pre-mRNA to form mature mRNA"
      },
      {
        "left": "tRNA anticodon",
        "right": "Pairs complementarily with an mRNA codon to deliver a specific amino acid"
      }
    ],
    "explanation": "RNA polymerase synthesises pre-mRNA, spliceosomes remove introns in eukaryotes, and tRNA anticodons translate codons at the ribosome."
  },
  {
    "id": "al-bio-q27",
    "subtopicId": "al-bio-4-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "Human birth weight stays tightly clustered around 3.2 kg because babies with very low or very high birth weights have higher mortality. Which type of natural selection is this?",
    "options": [
      "Directional selection",
      "Stabilising selection",
      "Disruptive selection",
      "Artificial selection"
    ],
    "correctIndex": 1,
    "explanation": "Stabilising selection selects against both extremes and favours intermediate phenotypes around the population mean."
  },
  {
    "id": "al-bio-q28",
    "subtopicId": "al-bio-5-1",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the carbon fixation step of the Calvin cycle.",
    "segments": [
      "In the chloroplast stroma, the enzyme ",
      " catalyses the reaction of carbon dioxide with 5-carbon ",
      " to form two molecules of 3-carbon GP."
    ],
    "wordBank": [
      "Rubisco",
      "RuBP",
      "ATP synthase",
      "pyruvate",
      "oxaloacetate"
    ],
    "answers": [
      "Rubisco",
      "RuBP"
    ],
    "explanation": "Rubisco fixes CO₂ onto 5C ribulose bisphosphate (RuBP), forming two 3C glycerate 3-phosphate (GP) molecules."
  },
  {
    "id": "al-bio-q29",
    "subtopicId": "al-bio-6-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "What is the immediate trigger causing synaptic vesicles containing acetylcholine to fuse with the presynaptic membrane?",
    "options": [
      "Influx of Na⁺ ions through postsynaptic ligand-gated channels",
      "Influx of Ca²⁺ ions through presynaptic voltage-gated calcium channels",
      "Hydrolysis of ACh by acetylcholinesterase in the synaptic cleft",
      "Efflux of K⁺ ions at the Nodes of Ranvier"
    ],
    "correctIndex": 1,
    "explanation": "Arrival of an action potential depolarises the presynaptic knob, opening voltage-gated Ca²⁺ channels; Ca²⁺ influx triggers vesicle exocytosis."
  },
  {
    "id": "al-bio-q30",
    "subtopicId": "al-bio-7-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "A chi-squared test on a dihybrid cross with 4 phenotypic classes (df = 3) yields χ² = 2.14. The critical value at p = 0.05 is 7.82. What is the valid conclusion?",
    "options": [
      "Reject the null hypothesis; there is a significant difference due to autosomal linkage",
      "Accept the null hypothesis; there is no significant difference between observed and expected results (>5% probability deviations are due to chance)",
      "The genes must be sex-linked on the Y chromosome",
      "The sample size was infinite"
    ],
    "correctIndex": 1,
    "explanation": "Because 2.14 < 7.82, p > 0.05; we accept the null hypothesis that deviations from the expected ratio are due to chance alone."
  },
  {
    "id": "al-bio-q31",
    "subtopicId": "al-bio-7-2",
    "type": "short-answer",
    "marks": 2,
    "prompt": "In a mark-release-recapture survey of woodlice, 40 were captured, marked, and released on Day 1. On Day 2, 35 were captured, of which 7 were marked. Calculate the estimated population size.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "Population N = (n₁ × n₂) ÷ m = (40 × 35) ÷ 7 = 1400 ÷ 7 = 200 woodlice.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Correct Lincoln Index substitution (40 × 35) ÷ 7",
          "requiredKeywordGroups": [
            [
              "40"
            ],
            [
              "35"
            ],
            [
              "7"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "Estimated population = 200",
          "numericMatch": {
            "value": 200,
            "tolerance": 0.5
          }
        }
      ]
    },
    "explanation": "N = (40 × 35) / 7 = 200."
  },
  {
    "id": "al-bio-q32",
    "subtopicId": "al-bio-8-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "How does small interfering RNA (siRNA) prevent the expression of a target eukaryotic gene?",
    "options": [
      "It methylates histone tails directly inside the nucleolus",
      "It binds an enzyme complex (RISC) and pairs complementarily with target mRNA, cleaving the mRNA before translation can occur",
      "It blocks DNA helicase during S phase of interphase",
      "It destroys 80S ribosomes permanently"
    ],
    "correctIndex": 1,
    "explanation": "Single-stranded siRNA guides the RISC endonuclease complex to complementary mRNA sequences and hydrolyses them post-transcriptionally."
  },
  {
    "id": "al-bio-q-1-1-4",
    "subtopicId": "al-bio-1-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "Explain TWO ways the molecular structure of cellulose is adapted for tensile strength in plant cell walls.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "Alternate β-glucose monomers rotate 180° to form straight unbranched chains; numerous hydrogen bonds form between parallel chains, bundling them into high-tensile-strength microfibrils.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "β-glucose inverted 180° forming straight unbranched chains",
          "requiredKeywordGroups": [
            [
              "straight",
              "unbranched",
              "180",
              "invert"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "Hydrogen bonds cross-link chains into microfibrils",
          "requiredKeywordGroups": [
            [
              "hydrogen bond"
            ],
            [
              "microfibril",
              "fibril",
              "cross-link"
            ]
          ]
        }
      ]
    },
    "explanation": "Straight β-glucose chains + dense inter-chain H-bonds ⇒ strong microfibrils."
  },
  {
    "id": "al-bio-q-1-1-5",
    "subtopicId": "al-bio-1-1",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the non-reducing sugar test:",
    "segments": [
      "To test for sucrose, first boil with dilute ",
      " to hydrolyse glycosidic bonds, then neutralise with ",
      " before adding Benedict’s reagent."
    ],
    "wordBank": [
      "HCl",
      "NaHCO₃",
      "ethanol",
      "NaCl"
    ],
    "answers": [
      "HCl",
      "NaHCO₃"
    ],
    "explanation": "Acid hydrolyses sucrose into glucose + fructose; Benedict’s requires alkaline conditions."
  },
  {
    "id": "al-bio-q-1-2-3",
    "subtopicId": "al-bio-1-2",
    "type": "short-answer",
    "marks": 2,
    "prompt": "Explain why increasing substrate concentration overcomes COMPETITIVE inhibition but does NOT overcome NON-COMPETITIVE inhibition.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "Competitive inhibitors compete directly for the active site, so high substrate concentration increases the probability of substrate binding instead. Non-competitive inhibitors bind at an allosteric site and alter the shape of the active site permanently/independently of [S], so substrate cannot bind even at high concentration.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Competitive competes for active site (high [S] outcompetes)",
          "requiredKeywordGroups": [
            [
              "active site"
            ],
            [
              "outcompete",
              "chance",
              "probability",
              "more substrate"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "Non-competitive binds allosteric site and changes active site shape",
          "requiredKeywordGroups": [
            [
              "allosteric",
              "away from",
              "different site"
            ],
            [
              "shape",
              "tertiary"
            ]
          ]
        }
      ]
    },
    "explanation": "Competitive = same site (reversible by high [S]); Non-competitive = allosteric site (lowers V_max)."
  },
  {
    "id": "al-bio-q-1-2-4",
    "subtopicId": "al-bio-1-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "In the Meselson–Stahl experiment proving semi-conservative DNA replication, what band pattern appeared after ONE generation in light ¹⁴N medium?",
    "options": [
      "One heavy ¹⁵N band and one light ¹⁴N band",
      "A single intermediate hybrid (¹⁵N/¹⁴N) band",
      "Only a light ¹⁴N band",
      "Three separate bands"
    ],
    "correctIndex": 1,
    "explanation": "Every daughter DNA duplex contained one original ¹⁵N template strand and one new ¹⁴N strand."
  },
  {
    "id": "al-bio-q-1-2-5",
    "subtopicId": "al-bio-1-2",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the induced-fit & DNA replication enzyme roles:",
    "segments": [
      "DNA ",
      " breaks hydrogen bonds to unzip the double helix, while DNA ",
      " catalyses phosphodiester bond formation in the 5′→3′ direction."
    ],
    "wordBank": [
      "helicase",
      "polymerase",
      "ligase",
      "hydrolase"
    ],
    "answers": [
      "helicase",
      "polymerase"
    ],
    "explanation": "Helicase unzips H-bonds; DNA polymerase joins free nucleotides via phosphodiester bonds."
  },
  {
    "id": "al-bio-q-2-1-3",
    "subtopicId": "al-bio-2-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "Explain why tissue homogenisation during cell fractionation is carried out in a COLD, ISOTONIC, BUFFERED solution.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "Cold reduces enzyme activity that could break down organelles; isotonic prevents osmosis so organelles do not burst or shrivel; buffered maintains constant pH so proteins/enzymes do not denature.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Cold reduces enzyme activity AND isotonic prevents osmotic bursting/shrinking",
          "requiredKeywordGroups": [
            [
              "enzyme"
            ],
            [
              "osmosis",
              "burst",
              "water potential"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "Buffered prevents pH changes / protein denaturation",
          "requiredKeywordGroups": [
            [
              "ph",
              "denatur"
            ]
          ]
        }
      ]
    },
    "explanation": "Cold = slow autolysis; Isotonic = no osmotic lysis; Buffered = stable pH."
  },
  {
    "id": "al-bio-q-2-1-4",
    "subtopicId": "al-bio-2-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "Which organelle is pelleted FIRST at the LOWEST centrifugal speed during differential centrifugation of an animal liver homogenate?",
    "options": [
      "Ribosomes",
      "Mitochondria",
      "Nuclei",
      "Lysosomes"
    ],
    "correctIndex": 2,
    "explanation": "Nuclei are the largest and densest organelles, so they sediment first at low g-force."
  },
  {
    "id": "al-bio-q-2-1-5",
    "subtopicId": "al-bio-2-1",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the electron microscope comparison:",
    "segments": [
      "A ",
      " electron microscope produces 2D ultra-high-resolution images of thin internal sections, whereas a ",
      " electron microscope creates 3D surface images."
    ],
    "wordBank": [
      "transmission",
      "scanning",
      "optical",
      "laser"
    ],
    "answers": [
      "transmission",
      "scanning"
    ],
    "explanation": "TEM = thin 2D highest resolution; SEM = 3D surface topography."
  },
  {
    "id": "al-bio-q-2-2-3",
    "subtopicId": "al-bio-2-2",
    "type": "short-answer",
    "marks": 2,
    "prompt": "Explain why a secondary immune response prevents disease symptoms upon re-infection by the same pathogen.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "Memory B-cells recognise the antigen immediately and divide rapidly by mitosis into plasma cells, producing a much larger concentration of antibodies much faster than in the primary response, destroying the pathogen before symptoms develop.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Memory cells divide rapidly into plasma cells",
          "requiredKeywordGroups": [
            [
              "memory"
            ],
            [
              "plasma",
              "divide",
              "mitosis"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "More antibodies produced faster before symptoms occur",
          "requiredKeywordGroups": [
            [
              "faster",
              "quicker",
              "rapid"
            ],
            [
              "more antibod",
              "higher concentration",
              "greater"
            ]
          ]
        }
      ]
    },
    "explanation": "Memory B-cells trigger faster, larger antibody production."
  },
  {
    "id": "al-bio-q-2-2-4",
    "subtopicId": "al-bio-2-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "During co-transport of glucose in the small intestine, where is ATP directly hydrolysed?",
    "options": [
      "At the Na⁺/glucose co-transporter on the lumen membrane",
      "At the Na⁺/K⁺ pump on the blood-facing membrane actively pumping Na⁺ into the blood",
      "At the facilitated diffusion channel for glucose",
      "During osmosis of water across the membrane"
    ],
    "correctIndex": 1,
    "explanation": "ATP directly powers the Na⁺/K⁺ pump to maintain the steep Na⁺ concentration gradient."
  },
  {
    "id": "al-bio-q-2-2-5",
    "subtopicId": "al-bio-2-2",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the HIV & active/passive immunity facts:",
    "segments": [
      "HIV uses the enzyme ",
      " transcriptase to make DNA from its viral RNA inside ",
      " T-cells."
    ],
    "wordBank": [
      "reverse",
      "helper",
      "DNA",
      "memory"
    ],
    "answers": [
      "reverse",
      "helper"
    ],
    "explanation": "HIV is a retrovirus targeting CD4⁺ T-helper cells via reverse transcriptase."
  },
  {
    "id": "al-bio-q-3-1-3",
    "subtopicId": "al-bio-3-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "Explain how countercurrent flow in fish gills maximises oxygen uptake compared to parallel (concurrent) flow.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "Blood flows in the opposite direction to water across the gill lamellae, so blood always meets water with a higher oxygen concentration, maintaining a steep diffusion gradient across the entire length of the lamella.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Blood and water flow in opposite directions",
          "requiredKeywordGroups": [
            [
              "opposite direction"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "Maintains concentration/diffusion gradient across entire length of lamella",
          "requiredKeywordGroups": [
            [
              "gradient"
            ],
            [
              "entire",
              "whole",
              "all along",
              "full length"
            ]
          ]
        }
      ]
    },
    "explanation": "Opposite flow maintains an O₂ gradient across 100% of the lamella."
  },
  {
    "id": "al-bio-q-3-1-4",
    "subtopicId": "al-bio-3-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "How do sunken stomata and leaf hairs reduce transpiration in xerophytic plants like marram grass?",
    "options": [
      "They increase wind speed over the stomata",
      "They trap a layer of humid air, reducing the water-potential gradient out of the leaf",
      "They stop photosynthesis completely",
      "They pump water vapour back into the xylem"
    ],
    "correctIndex": 1,
    "explanation": "Trapped moist air raises external ψ, reducing the steepness of the water-potential gradient."
  },
  {
    "id": "al-bio-q-3-1-5",
    "subtopicId": "al-bio-3-1",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the mammalian inspiration mechanics:",
    "segments": [
      "During active inhalation, the diaphragm contracts and ",
      ", and external intercostal muscles contract, increasing thoracic ",
      " and lowering pressure below atmospheric."
    ],
    "wordBank": [
      "flattens",
      "volume",
      "domes",
      "resistance"
    ],
    "answers": [
      "flattens",
      "volume"
    ],
    "explanation": "Larger thoracic volume ⇒ lower alveolar pressure ⇒ air rushes in."
  },
  {
    "id": "al-bio-q-3-2-3",
    "subtopicId": "al-bio-3-2",
    "type": "short-answer",
    "marks": 2,
    "prompt": "Explain the physiological advantage of the Bohr shift (rightward shift of the oxygen dissociation curve) during strenuous exercise.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "Respiring muscles release more CO₂, lowering blood pH and reducing haemoglobin’s affinity for oxygen (shifting the curve right); haemoglobin therefore unloads more oxygen at the same pO₂ to sustain aerobic respiration.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "High CO₂ / lower pH lowers haemoglobin affinity for O₂",
          "requiredKeywordGroups": [
            [
              "co2",
              "ph",
              "acid"
            ],
            [
              "affinity"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "More O₂ unloaded/dissociated to respiring muscles",
          "requiredKeywordGroups": [
            [
              "unload",
              "release",
              "dissociat"
            ],
            [
              "respir",
              "muscle",
              "tissue"
            ]
          ]
        }
      ]
    },
    "explanation": "Rightward Bohr shift = lower O₂ affinity = faster O₂ unloading to active muscles."
  },
  {
    "id": "al-bio-q-3-2-4",
    "subtopicId": "al-bio-3-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "During which stage of the cardiac cycle do the ATRIOVENTRICULAR (AV) valves snap shut (producing the first heart sound)?",
    "options": [
      "Atrial systole",
      "Start of ventricular systole (when ventricular pressure exceeds atrial pressure)",
      "Ventricular diastole",
      "When aortic pressure exceeds ventricular pressure"
    ],
    "correctIndex": 1,
    "explanation": "Rising ventricular pressure exceeds atrial pressure, snapping the AV valves shut to prevent backflow."
  },
  {
    "id": "al-bio-q-3-2-5",
    "subtopicId": "al-bio-3-2",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the phloem translocation mechanism:",
    "segments": [
      "Active loading of sucrose into sieve-tube elements at the source ",
      " the water potential, causing water to enter by osmosis and generating high ",
      " pressure."
    ],
    "wordBank": [
      "lowers",
      "hydrostatic",
      "raises",
      "negative"
    ],
    "answers": [
      "lowers",
      "hydrostatic"
    ],
    "explanation": "Lower ψ draws water in from xylem, creating positive hydrostatic pressure driving mass flow."
  },
  {
    "id": "al-bio-q-4-1-3",
    "subtopicId": "al-bio-4-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "Explain what is meant by a DEGENERATE genetic code and why it reduces the harmful impact of some base-substitution mutations.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "More than one triplet/codon can code for the exact same amino acid; therefore a single base substitution may still produce a codon for the same amino acid (silent mutation), leaving the protein’s primary and tertiary structure unchanged.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "More than one codon codes for the same amino acid",
          "requiredKeywordGroups": [
            [
              "more than one",
              "multiple",
              "several"
            ],
            [
              "same amino acid"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "Substitution may not change amino acid sequence / silent mutation",
          "requiredKeywordGroups": [
            [
              "unchanged",
              "same amino acid",
              "silent",
              "primary structure"
            ]
          ]
        }
      ]
    },
    "explanation": "Degeneracy allows silent mutations where the amino acid sequence stays identical."
  },
  {
    "id": "al-bio-q-4-1-4",
    "subtopicId": "al-bio-4-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "Why does pre-mRNA splicing occur in eukaryotic cells but NOT in prokaryotic cells?",
    "options": [
      "Prokaryotes do not use ribosomes",
      "Prokaryotic DNA does not contain non-coding introns",
      "Prokaryotes lack RNA polymerase",
      "Eukaryotes have no exons"
    ],
    "correctIndex": 1,
    "explanation": "Prokaryotic genes lack introns, so transcription directly yields mature mRNA."
  },
  {
    "id": "al-bio-q-4-1-5",
    "subtopicId": "al-bio-4-1",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the splicing & translation terms:",
    "segments": [
      "During splicing, non-coding ",
      " are removed and coding ",
      " are joined together to form mature mRNA."
    ],
    "wordBank": [
      "introns",
      "exons",
      "codons",
      "anticodons"
    ],
    "answers": [
      "introns",
      "exons"
    ],
    "explanation": "Introns stay IN the nucleus (removed); Exons EXIT to be expressed!"
  },
  {
    "id": "al-bio-q-4-2-3",
    "subtopicId": "al-bio-4-2",
    "type": "short-answer",
    "marks": 2,
    "prompt": "Explain why an Index of Diversity (d) is a better measure of community biodiversity than species richness alone.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "Species richness only counts the number of different species present, whereas the Index of Diversity also accounts for the number of individuals (abundance/evenness) of each species in the habitat.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Species richness only counts number of different species",
          "requiredKeywordGroups": [
            [
              "number of species",
              "only count",
              "different species"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "Index of diversity also includes population size / abundance of each species",
          "requiredKeywordGroups": [
            [
              "abundance",
              "number of individuals",
              "population size",
              "evenness"
            ]
          ]
        }
      ]
    },
    "explanation": "Index of diversity combines species richness AND species abundance."
  },
  {
    "id": "al-bio-q-4-2-4",
    "subtopicId": "al-bio-4-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "Human birth weight stays tightly clustered around ~3.3 kg because both very small and very large babies have higher mortality. Which type of natural selection is this?",
    "options": [
      "Directional selection",
      "Stabilising selection",
      "Disruptive selection",
      "Artificial selection"
    ],
    "correctIndex": 1,
    "explanation": "Selecting against both extremes and favouring the modal mean is stabilising selection."
  },
  {
    "id": "al-bio-q-4-2-5",
    "subtopicId": "al-bio-4-2",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the meiosis variation sources:",
    "segments": [
      "During Prophase I, exchange of alleles between homologous chromosomes is called ",
      "; random alignment of homologous pairs at Metaphase I is ",
      " segregation."
    ],
    "wordBank": [
      "crossing over",
      "independent",
      "non-disjunction",
      "binary"
    ],
    "answers": [
      "crossing over",
      "independent"
    ],
    "explanation": "Crossing over + independent segregation generate massive gamete diversity."
  },
  {
    "id": "al-bio-q-5-1-3",
    "subtopicId": "al-bio-5-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "Explain what happens to the concentrations of GP and RuBP immediately after the CO₂ supply to a photosynthesising plant is cut off (in constant light).",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "Without CO₂, RuBP cannot be fixed into GP, so [RuBP] rises (still regenerated from TP) while [GP] falls (existing GP continues to be reduced to TP using ATP and reduced NADP).",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "[RuBP] increases (not used up by CO₂ fixation)",
          "requiredKeywordGroups": [
            [
              "rubp"
            ],
            [
              "increase",
              "rise",
              "higher"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "[GP] decreases (no new GP made; still converted to TP)",
          "requiredKeywordGroups": [
            [
              "gp"
            ],
            [
              "decrease",
              "fall",
              "drop",
              "lower"
            ]
          ]
        }
      ]
    },
    "explanation": "No CO₂ ⇒ RuBP accumulates; GP drains away into TP."
  },
  {
    "id": "al-bio-q-5-1-4",
    "subtopicId": "al-bio-5-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "Where inside the chloroplast does the light-dependent reaction (chemiosmosis & photolysis) take place?",
    "options": [
      "Stroma",
      "Thylakoid membranes (grana)",
      "Outer chloroplast envelope",
      "Cytoplasm"
    ],
    "correctIndex": 1,
    "explanation": "Photosystems, electron carriers, and ATP synthase are embedded in thylakoid membranes."
  },
  {
    "id": "al-bio-q-5-1-5",
    "subtopicId": "al-bio-5-1",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the photolysis & Calvin cycle products:",
    "segments": [
      "Photolysis of water produces protons (H⁺), electrons, and ",
      " gas; the enzyme ",
      " catalyses CO₂ fixation with RuBP."
    ],
    "wordBank": [
      "oxygen",
      "RuBisCO",
      "carbon dioxide",
      "ATP synthase"
    ],
    "answers": [
      "oxygen",
      "RuBisCO"
    ],
    "explanation": "H₂O → 2H⁺ + 2e⁻ + ½O₂; RuBisCO fixes CO₂ to RuBP."
  },
  {
    "id": "al-bio-q-5-2-3",
    "subtopicId": "al-bio-5-2",
    "type": "short-answer",
    "marks": 2,
    "prompt": "Explain the exact role of OXYGEN in aerobic respiration and why cyanide (an ETC inhibitor) stops the Krebs cycle even though the Krebs cycle does not directly use oxygen.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "Oxygen acts as the terminal/final electron acceptor at the end of the electron transport chain (combining with H⁺ and e⁻ to form water). If the ETC is blocked, reduced NAD and reduced FAD cannot be re-oxidised back to NAD/FAD, so the Krebs cycle runs out of coenzymes and halts.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Oxygen is the final/terminal electron acceptor forming water",
          "requiredKeywordGroups": [
            [
              "final",
              "terminal"
            ],
            [
              "electron acceptor"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "Reduced NAD/FAD cannot be re-oxidised back to NAD/FAD for Krebs",
          "requiredKeywordGroups": [
            [
              "nad",
              "fad"
            ],
            [
              "oxidised",
              "regenerat",
              "coenzyme"
            ]
          ]
        }
      ]
    },
    "explanation": "No terminal acceptor ⇒ no NAD/FAD regeneration ⇒ Krebs & Link grind to a halt."
  },
  {
    "id": "al-bio-q-5-2-4",
    "subtopicId": "al-bio-5-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "Where inside the cell does GLYCOLYSIS occur?",
    "options": [
      "Mitochondrial matrix",
      "Cristae (inner mitochondrial membrane)",
      "Cytoplasm",
      "Intermembrane space"
    ],
    "correctIndex": 2,
    "explanation": "Glycolysis takes place in the cytoplasm and does not require mitochondria or oxygen."
  },
  {
    "id": "al-bio-q-5-2-5",
    "subtopicId": "al-bio-5-2",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the chemiosmosis mechanism:",
    "segments": [
      "Energy from electrons passing along the ETC pumps ",
      " ions into the intermembrane space; they diffuse back through ",
      " to synthesise ATP."
    ],
    "wordBank": [
      "H⁺",
      "ATP synthase",
      "Na⁺",
      "RuBisCO"
    ],
    "answers": [
      "H⁺",
      "ATP synthase"
    ],
    "explanation": "Proton motive force across the inner mitochondrial membrane drives ATP synthase."
  },
  {
    "id": "al-bio-q-6-1-3",
    "subtopicId": "al-bio-6-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "Explain the role of acetylcholinesterase at a cholinergic synapse and predict the effect of a drug that inhibits it.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "Acetylcholinesterase hydrolyses ACh into acetate and choline so Na⁺ channels close and the postsynaptic neurone can repolarise. Inhibiting it leaves ACh bound to receptors, causing continuous Na⁺ influx and repeated firing/muscle spasms.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Hydrolyses / breaks down ACh so Na⁺ channels close",
          "requiredKeywordGroups": [
            [
              "hydrolys",
              "break down"
            ],
            [
              "ach",
              "acetylcholine"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "Inhibition causes continuous depolarisation / firing",
          "requiredKeywordGroups": [
            [
              "continuous",
              "repeated",
              "spasm",
              "cannot repolarise"
            ]
          ]
        }
      ]
    },
    "explanation": "Without ACh breakdown, postsynaptic Na⁺ channels stay locked open."
  },
  {
    "id": "al-bio-q-6-1-4",
    "subtopicId": "al-bio-6-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "Which ion enters the PRESYNAPTIC knob to trigger synaptic vesicles to fuse with the membrane and release neurotransmitter?",
    "options": [
      "Na⁺",
      "K⁺",
      "Ca²⁺",
      "Cl⁻"
    ],
    "correctIndex": 2,
    "explanation": "Depolarisation opens voltage-gated Ca²⁺ channels, triggering exocytosis of vesicles."
  },
  {
    "id": "al-bio-q-6-1-5",
    "subtopicId": "al-bio-6-1",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the myelinated axon conduction rule:",
    "segments": [
      "In myelinated axons, action potentials jump between ",
      " of Ranvier in a fast process called ",
      " conduction."
    ],
    "wordBank": [
      "nodes",
      "saltatory",
      "synapses",
      "inhibitory"
    ],
    "answers": [
      "nodes",
      "saltatory"
    ],
    "explanation": "Myelin insulates internodes so depolarisation jumps node-to-node (saltatory)."
  },
  {
    "id": "al-bio-q-6-2-3",
    "subtopicId": "al-bio-6-2",
    "type": "short-answer",
    "marks": 2,
    "prompt": "Describe the exact role of Ca²⁺ ions in initiating skeletal muscle contraction.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "Ca²⁺ released from the sarcoplasmic reticulum binds to troponin, causing a shape change that moves tropomyosin away from the myosin-binding sites on actin so actin–myosin cross-bridges can form.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Ca²⁺ binds to troponin",
          "requiredKeywordGroups": [
            [
              "troponin"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "Moves tropomyosin to expose actin binding sites for myosin",
          "requiredKeywordGroups": [
            [
              "tropomyosin"
            ],
            [
              "binding site",
              "actin",
              "cross-bridge"
            ]
          ]
        }
      ]
    },
    "explanation": "Ca²⁺ → troponin → shifts tropomyosin → exposes actin sites."
  },
  {
    "id": "al-bio-q-6-2-4",
    "subtopicId": "al-bio-6-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "During sarcomere contraction, which band REMAINS THE EXACT SAME LENGTH?",
    "options": [
      "I-band",
      "H-zone",
      "A-band",
      "Distance between Z-lines"
    ],
    "correctIndex": 2,
    "explanation": "The A-band equals the full length of the myosin filaments, which do not shorten."
  },
  {
    "id": "al-bio-q-6-2-5",
    "subtopicId": "al-bio-6-2",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the ADH osmoregulation pathway:",
    "segments": [
      "ADH increases water permeability of the collecting duct by causing vesicles containing ",
      " water channels to fuse with the membrane, producing more ",
      " urine."
    ],
    "wordBank": [
      "aquaporin",
      "concentrated",
      "sodium",
      "dilute"
    ],
    "answers": [
      "aquaporin",
      "concentrated"
    ],
    "explanation": "More aquaporins ⇒ more water reabsorbed ⇒ small volume of concentrated urine."
  },
  {
    "id": "al-bio-q-7-1-3",
    "subtopicId": "al-bio-7-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "In a population in Hardy–Weinberg equilibrium, 9% of individuals show a recessive phenotype. Calculate the frequency of the recessive allele (q) and the percentage of heterozygous carriers (2pq).",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "q² = 0.09 → q = 0.30 → p = 0.70 → 2pq = 2 × 0.70 × 0.30 = 0.42 (42%).",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "q = 0.3 (and p = 0.7)",
          "numericMatch": {
            "value": 0.3,
            "tolerance": 0.01
          }
        },
        {
          "id": "mp2",
          "markDescription": "Carriers = 42% (0.42)",
          "requiredKeywordGroups": [
            [
              "42",
              "0.42"
            ]
          ]
        }
      ]
    },
    "explanation": "q = √0.09 = 0.3; p = 0.7; 2pq = 0.42 (42%)."
  },
  {
    "id": "al-bio-q-7-1-4",
    "subtopicId": "al-bio-7-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "A cross between two doubly heterozygous individuals (AaBb × AaBb) produces a 9:3:4 phenotypic ratio instead of 9:3:3:1. What genetic interaction explains this?",
    "options": [
      "Codominance",
      "Recessive epistasis",
      "Sex linkage",
      "Mutation"
    ],
    "correctIndex": 1,
    "explanation": "9:3:4 is the signature ratio of recessive epistasis (homozygous recessive at one locus masks the second locus)."
  },
  {
    "id": "al-bio-q-7-1-5",
    "subtopicId": "al-bio-7-1",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the chi-squared conclusion rule:",
    "segments": [
      "If calculated χ² is ",
      " than the critical value at p = 0.05, there is NO significant difference and we ",
      " the null hypothesis."
    ],
    "wordBank": [
      "less",
      "accept",
      "greater",
      "reject"
    ],
    "answers": [
      "less",
      "accept"
    ],
    "explanation": "χ² < critical value ⇒ differences are due to chance (p > 0.05) ⇒ accept H₀."
  },
  {
    "id": "al-bio-q-7-2-3",
    "subtopicId": "al-bio-7-2",
    "type": "short-answer",
    "marks": 2,
    "prompt": "A biologist catches and marks 60 beetles, releases them, and later catches 50 beetles of which 12 are marked. Estimate the population size and state ONE key assumption of this method.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "N = (60 × 50) / 12 = 250 beetles. Assumptions: marks do not rub off or increase predation; no immigration/emigration or births/deaths; marked beetles mix randomly back into the population.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "N = 250",
          "numericMatch": {
            "value": 250,
            "tolerance": 2
          }
        },
        {
          "id": "mp2",
          "markDescription": "Valid assumption (no migration / mark harmless / random mixing / no births-deaths)",
          "requiredKeywordGroups": [
            [
              "migrat",
              "predat",
              "rub off",
              "random",
              "birth",
              "death",
              "harm"
            ]
          ]
        }
      ]
    },
    "explanation": "Lincoln Index N = (S₁ × S₂) / R = 3000 / 12 = 250."
  },
  {
    "id": "al-bio-q-7-2-4",
    "subtopicId": "al-bio-7-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "How does SYMPATRIC speciation differ from ALLOPATRIC speciation?",
    "options": [
      "Sympatric requires a mountain or ocean barrier",
      "Sympatric occurs in the SAME habitat without geographical separation",
      "Sympatric does not involve reproductive isolation",
      "Sympatric happens only in bacteria"
    ],
    "correctIndex": 1,
    "explanation": "Sympatric = same location (e.g. seasonal/behavioural isolation); Allopatric = geographical barrier."
  },
  {
    "id": "al-bio-q-7-2-5",
    "subtopicId": "al-bio-7-2",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the succession & productivity equations:",
    "segments": [
      "Net primary productivity equals GPP minus ",
      " losses; pioneer species modify the abiotic environment making it less ",
      " for later colonisers."
    ],
    "wordBank": [
      "respiratory",
      "hostile",
      "light",
      "acidic"
    ],
    "answers": [
      "respiratory",
      "hostile"
    ],
    "explanation": "NPP = GPP − R; pioneers build soil/humus, making conditions less hostile."
  },
  {
    "id": "al-bio-q-8-1-3",
    "subtopicId": "al-bio-8-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "Explain how HYPERMETHYLATION of a tumour suppressor gene can lead to the development of a cancerous tumour.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "Extra methyl groups attach to CpG sites in the promoter region, preventing transcription factors and RNA polymerase from binding so the tumour suppressor gene is not transcribed; without its protein to slow cell division or trigger apoptosis, cells divide uncontrollably by mitosis.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Prevents transcription factors / RNA polymerase binding (stops transcription)",
          "requiredKeywordGroups": [
            [
              "transcription"
            ],
            [
              "prevent",
              "block",
              "stop",
              "cannot bind"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "Loss of cell-cycle control ⇒ uncontrolled mitosis / tumour",
          "requiredKeywordGroups": [
            [
              "uncontrolled",
              "mitosis",
              "cell division"
            ]
          ]
        }
      ]
    },
    "explanation": "Hypermethylation silences the tumour-suppressor \"brakes\", causing uncontrolled mitosis."
  },
  {
    "id": "al-bio-q-8-1-4",
    "subtopicId": "al-bio-8-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "Which type of stem cell can differentiate into ANY body cell type EXCEPT extra-embryonic (placental) cells?",
    "options": [
      "Totipotent",
      "Pluripotent",
      "Multipotent",
      "Unipotent"
    ],
    "correctIndex": 1,
    "explanation": "Totipotent = body + placenta; Pluripotent = any body cell only."
  },
  {
    "id": "al-bio-q-8-1-5",
    "subtopicId": "al-bio-8-1",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the histone acetylation & oestrogen rules:",
    "segments": [
      "INCREASED acetylation of histones loosens chromatin and ",
      " transcription; oestrogen diffuses through the membrane and activates a ",
      " factor in the cytoplasm."
    ],
    "wordBank": [
      "increases",
      "transcription",
      "blocks",
      "ribosome"
    ],
    "answers": [
      "increases",
      "transcription"
    ],
    "explanation": "Acetylation opens chromatin (+transcription); oestrogen–receptor complex acts as a transcription factor."
  },
  {
    "id": "al-bio-q-8-2-2",
    "subtopicId": "al-bio-8-2",
    "type": "short-answer",
    "marks": 2,
    "prompt": "Explain the purpose of the THREE temperatures (95 °C, 55 °C, and 72 °C) used in each cycle of the Polymerase Chain Reaction (PCR).",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "95 °C breaks hydrogen bonds to separate the two DNA strands; 55 °C allows short DNA primers to anneal to complementary ends; 72 °C is the optimum temperature for thermostable Taq DNA polymerase to synthesise new complementary strands.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "95 °C separates strands (breaks H-bonds) AND 55 °C anneals primers",
          "requiredKeywordGroups": [
            [
              "95",
              "hydrogen bond",
              "separate"
            ],
            [
              "55",
              "primer",
              "anneal"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "72 °C optimum for Taq DNA polymerase",
          "requiredKeywordGroups": [
            [
              "72",
              "taq",
              "polymerase"
            ]
          ]
        }
      ]
    },
    "explanation": "Denature (95 °C) → Anneal primers (55 °C) → Extend with Taq polymerase (72 °C)."
  },
  {
    "id": "al-bio-q-8-2-3",
    "subtopicId": "al-bio-8-2",
    "type": "short-answer",
    "marks": 2,
    "prompt": "Explain why the SAME restriction endonuclease must be used to cut both the desired human gene and the bacterial plasmid vector.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "Cutting with the same restriction endonuclease produces complementary sticky ends (exposed unpaired bases) on both the gene and plasmid, allowing hydrogen bonding between bases before DNA ligase seals the sugar–phosphate backbone.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Produces complementary sticky ends",
          "requiredKeywordGroups": [
            [
              "complementary"
            ],
            [
              "sticky end"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "Bases pair via H-bonds so DNA ligase can join them",
          "requiredKeywordGroups": [
            [
              "ligase",
              "base pair",
              "hydrogen bond"
            ]
          ]
        }
      ]
    },
    "explanation": "Same recognition sequence ⇒ matching sticky ends ⇒ clean ligation."
  },
  {
    "id": "al-bio-q-8-2-4",
    "subtopicId": "al-bio-8-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "During gel electrophoresis of DNA fragments, which fragments travel the FURTHEST toward the positive anode?",
    "options": [
      "The longest fragments",
      "The shortest fragments",
      "Only positively charged fragments",
      "Fragments with the highest GC content"
    ],
    "correctIndex": 1,
    "explanation": "Negatively charged DNA phosphate groups move toward the + anode; shorter fragments encounter less gel resistance and move furthest."
  },
  {
    "id": "al-bio-q-8-2-5",
    "subtopicId": "al-bio-8-2",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the genetic fingerprinting & cDNA facts:",
    "segments": [
      "Genetic fingerprinting compares non-coding ",
      " repeat regions; ",
      " transcriptase converts mature mRNA into intron-free cDNA."
    ],
    "wordBank": [
      "VNTR",
      "reverse",
      "exon",
      "Taq"
    ],
    "answers": [
      "VNTR",
      "reverse"
    ],
    "explanation": "VNTR repeat lengths differ uniquely between individuals; reverse transcriptase yields intron-free cDNA."
  }
];

export const ALEVEL_BIOLOGY_FLASHCARDS: FlashcardItem[] = [
  {
    "id": "al-bio-fc-1",
    "subtopicId": "al-bio-1-1",
    "front": "How do α-glucose and β-glucose differ structurally?",
    "backBullets": [
      "On carbon-1, α-glucose has the –OH group BELOW the ring",
      "β-glucose has the –OH group ABOVE the ring",
      "This flips alternate monomers in cellulose into straight chains"
    ]
  },
  {
    "id": "al-bio-fc-2",
    "subtopicId": "al-bio-1-1",
    "front": "Why is glycogen more heavily branched than amylopectin?",
    "backBullets": [
      "Animals have higher metabolic rates than plants",
      "More α-1,6 branches expose more terminal ends simultaneously",
      "Enables faster enzymatic hydrolysis to α-glucose for respiration"
    ]
  },
  {
    "id": "al-bio-fc-3",
    "subtopicId": "al-bio-1-2",
    "front": "State the four bonds/interactions stabilising protein tertiary structure.",
    "backBullets": [
      "Hydrogen bonds",
      "Ionic bonds (between oppositely charged R-groups, sensitive to pH)",
      "Covalent disulphide bridges (between cysteine residues)",
      "Hydrophobic/hydrophilic R-group interactions"
    ]
  },
  {
    "id": "al-bio-fc-4",
    "subtopicId": "al-bio-1-2",
    "front": "Contrast competitive and non-competitive enzyme inhibitors.",
    "backBullets": [
      "Competitive: complementary to active site; overcome by high [substrate] (Vmax unchanged)",
      "Non-competitive: binds allosteric site; alters active site shape; Vmax permanently reduced"
    ]
  },
  {
    "id": "al-bio-fc-5",
    "subtopicId": "al-bio-2-1",
    "front": "Why must cell fractionation solution be cold, isotonic, and buffered?",
    "backBullets": [
      "Cold: inhibits hydrolytic enzymes that could digest organelles",
      "Isotonic: prevents osmotic bursting or shrinking of organelles",
      "Buffered: maintains constant pH to prevent protein denaturation"
    ]
  },
  {
    "id": "al-bio-fc-6",
    "subtopicId": "al-bio-2-1",
    "front": "List the order in which eukaryotic organelles pellet during differential centrifugation (slowest → fastest).",
    "backBullets": [
      "1. Nuclei (heaviest)",
      "2. Chloroplasts / Mitochondria",
      "3. Lysosomes",
      "4. Endoplasmic reticulum",
      "5. Ribosomes (lightest)"
    ]
  },
  {
    "id": "al-bio-fc-7",
    "subtopicId": "al-bio-2-2",
    "front": "Outline the 3 steps of sodium-glucose co-transport in the mammalian ileum.",
    "backBullets": [
      "1. Na⁺/K⁺ pump actively exports Na⁺ from epithelial cell to blood",
      "2. Na⁺ diffuses down gradient from lumen via co-transporter, pulling glucose up its gradient",
      "3. Glucose exits into blood capillary via facilitated diffusion"
    ]
  },
  {
    "id": "al-bio-fc-8",
    "subtopicId": "al-bio-2-2",
    "front": "Distinguish T-lymphocyte (cell-mediated) and B-lymphocyte (humoral) immunity.",
    "backBullets": [
      "T-cells respond to body APCs: T-helper secretes cytokines; T-cytotoxic releases perforin",
      "B-cells differentiate into plasma cells secreting monoclonal antibodies + memory B cells"
    ]
  },
  {
    "id": "al-bio-fc-9",
    "subtopicId": "al-bio-3-1",
    "front": "Why does fish gill countercurrent exchange outperform parallel flow?",
    "backBullets": [
      "Blood and water flow in opposite directions",
      "Maintains a diffusion gradient along the ENTIRE gill lamella length",
      "Equilibrium is avoided, saturating blood to ~80% rather than stopping at 50%"
    ]
  },
  {
    "id": "al-bio-fc-10",
    "subtopicId": "al-bio-3-2",
    "front": "What does a rightward Bohr shift on the haemoglobin dissociation curve mean?",
    "backBullets": [
      "Triggered by high pCO₂ / low pH in respiring tissues",
      "Haemoglobin has LOWER affinity for O₂",
      "Unloads MORE O₂ at the same partial pressure to fuel aerobic respiration"
    ]
  },
  {
    "id": "al-bio-fc-11",
    "subtopicId": "al-bio-3-2",
    "front": "Trace the myogenic electrical conduction pathway through the mammalian heart.",
    "backBullets": [
      "SAN (right atrium) → atrial systole → AVN (brief delay for ventricular filling)",
      "→ Bundle of His (down septum to apex) → Purkyne fibres → ventricular systole upwards"
    ]
  },
  {
    "id": "al-bio-fc-12",
    "subtopicId": "al-bio-4-1",
    "front": "State the three key properties of the genetic code.",
    "backBullets": [
      "Degenerate: multiple codons can encode the same amino acid",
      "Non-overlapping: each base belongs to only one triplet codon",
      "Universal: virtually identical across all living organisms"
    ]
  },
  {
    "id": "al-bio-fc-13",
    "subtopicId": "al-bio-4-2",
    "front": "How does meiosis generate genetic variation?",
    "backBullets": [
      "Crossing over between non-sister chromatids at chiasmata (Prophase I)",
      "Independent segregation of homologous pairs (Metaphase I → 2ⁿ combinations)",
      "Combined with random fertilisation → (2ⁿ)² combinations"
    ]
  },
  {
    "id": "al-bio-fc-14",
    "subtopicId": "al-bio-5-1",
    "front": "What are the products of the light-dependent reaction used in the Calvin cycle?",
    "backBullets": [
      "ATP (hydrolysed to phosphorylate GP → TP and regenerate RuBP)",
      "Reduced NADP / NADPH (reduces GP to TP)",
      "(O₂ is released as a waste by-product of water photolysis)"
    ]
  },
  {
    "id": "al-bio-fc-15",
    "subtopicId": "al-bio-5-2",
    "front": "What is the exact role of oxygen in aerobic respiration?",
    "backBullets": [
      "Acts as the terminal electron acceptor at the end of the mitochondrial ETC",
      "Combines with electrons and protons (½O₂ + 2H⁺ + 2e⁻ → H₂O)",
      "Keeps ETC flowing so NADH/FADH₂ can be re-oxidised"
    ]
  },
  {
    "id": "al-bio-fc-16",
    "subtopicId": "al-bio-6-1",
    "front": "How is the −70 mV resting potential of an axon maintained?",
    "backBullets": [
      "Na⁺/K⁺ ATPase pumps 3 Na⁺ OUT for every 2 K⁺ pumped IN",
      "Membrane has open K⁺ leak channels (K⁺ diffuses out) while voltage-gated Na⁺ channels stay closed",
      "Inside becomes electrically negative relative to outside"
    ]
  },
  {
    "id": "al-bio-fc-17",
    "subtopicId": "al-bio-6-2",
    "front": "What are the exact roles of Ca²⁺ and ATP in the sliding filament model?",
    "backBullets": [
      "Ca²⁺ binds troponin → moves tropomyosin off actin binding sites + activates myosin ATPase",
      "ATP binding breaks the actomyosin cross-bridge; ATP hydrolysis recocks the myosin head"
    ]
  },
  {
    "id": "al-bio-fc-18",
    "subtopicId": "al-bio-6-2",
    "front": "How do the descending and ascending limbs of the Loop of Henle differ in permeability?",
    "backBullets": [
      "Descending limb: thin, permeable to water (exits by osmosis), impermeable to Na⁺/Cl⁻",
      "Ascending limb: thick, waterproof, actively pumps Na⁺ and Cl⁻ out to lower medullary Ψ"
    ]
  },
  {
    "id": "al-bio-fc-19",
    "subtopicId": "al-bio-7-1",
    "front": "State the two Hardy-Weinberg equations and the 5 conditions required.",
    "backBullets": [
      "p + q = 1 and p² + 2pq + q² = 1",
      "Conditions: Large population, random mating, no mutation, no migration, no natural selection"
    ]
  },
  {
    "id": "al-bio-fc-20",
    "subtopicId": "al-bio-8-1",
    "front": "How do DNA methylation and histone acetylation regulate transcription epigenetically?",
    "backBullets": [
      "Hypermethylation of CpG sites silences genes (blocks transcription factors)",
      "Histone deacetylation condenses chromatin tightly (silences genes); acetylation loosens chromatin (activates genes)"
    ]
  },
  {
    "id": "al-bio-fc-21",
    "subtopicId": "al-bio-8-2",
    "front": "Why is reverse transcriptase preferred over restriction enzymes for cloning human genes into bacteria?",
    "backBullets": [
      "Starts from mature mRNA which has already had introns spliced out",
      "Bacteria lack spliceosomes to excise eukaryotic introns from genomic DNA"
    ]
  },
  {
    "id": "al-bio-fc-22",
    "subtopicId": "al-bio-3-1",
    "front": "How do active insect muscle fibres increase oxygen delivery through tracheoles during flight?",
    "backBullets": [
      "Anaerobic respiration produces lactate, lowering muscle cell water potential",
      "Tracheal fluid moves out of tracheole tips into muscle cells by osmosis",
      "Exposes larger gas-phase surface area and shortens diffusion pathway for O₂"
    ]
  },
  {
    "id": "al-bio-fc-23",
    "subtopicId": "al-bio-4-1",
    "front": "Compare nuclear DNA in eukaryotes with DNA in prokaryotes.",
    "backBullets": [
      "Eukaryotic DNA: long, linear, associated with histone proteins, contains non-coding introns",
      "Prokaryotic DNA: short, circular, naked (not associated with histones), lacks introns"
    ]
  },
  {
    "id": "al-bio-fc-24",
    "subtopicId": "al-bio-4-2",
    "front": "How does Simpson’s Index of Diversity (d) improve upon species richness?",
    "backBullets": [
      "Species richness only counts the number of different species present",
      "d = N(N − 1) ÷ Σn(n − 1) accounts for BOTH species richness and population size (abundance) of each species"
    ]
  },
  {
    "id": "al-bio-fc-25",
    "subtopicId": "al-bio-5-1",
    "front": "Outline the three stages of the Calvin cycle in the chloroplast stroma.",
    "backBullets": [
      "1. Carbon fixation: Rubisco joins CO₂ + RuBP (5C) → 2 × GP (3C)",
      "2. Reduction: GP reduced to TP (3C) using ATP hydrolysis and H from reduced NADP",
      "3. Regeneration: 5 of 6 TP regenerate RuBP using ATP; 1 of 6 TP forms hexose sugars"
    ]
  },
  {
    "id": "al-bio-fc-26",
    "subtopicId": "al-bio-5-2",
    "front": "State the net products per glucose molecule for Glycolysis, the Link reaction (×2), and Krebs cycle (×2).",
    "backBullets": [
      "Glycolysis (cytoplasm): 2 pyruvate, 2 net ATP, 2 reduced NAD",
      "Link reaction ×2 (matrix): 2 Acetyl CoA, 2 CO₂, 2 reduced NAD",
      "Krebs cycle ×2 (matrix): 4 CO₂, 6 reduced NAD, 2 reduced FAD, 2 ATP"
    ]
  },
  {
    "id": "al-bio-fc-27",
    "subtopicId": "al-bio-6-1",
    "front": "Distinguish spatial summation from temporal summation at a synapse.",
    "backBullets": [
      "Spatial summation: multiple presynaptic neurones release neurotransmitter simultaneously onto one postsynaptic neurone",
      "Temporal summation: a single presynaptic neurone fires multiple action potentials in rapid succession"
    ]
  },
  {
    "id": "al-bio-fc-28",
    "subtopicId": "al-bio-7-1",
    "front": "What causes dominant and recessive epistasis ratios (12:3:1 and 9:3:4) in dihybrid crosses?",
    "backBullets": [
      "Epistasis occurs when an allele at one gene locus masks expression of alleles at a second locus",
      "Homozygous recessive (aa) blocking B/b expression gives 9:3:4",
      "Dominant allele (A_) masking B/b expression gives 12:3:1"
    ]
  },
  {
    "id": "al-bio-fc-29",
    "subtopicId": "al-bio-7-2",
    "front": "Outline how pioneer species drive primary ecological succession to a climax community.",
    "backBullets": [
      "Pioneer species colonise hostile bare rock/sand",
      "When they die and decompose, they add humus/nitrates and retain moisture",
      "Abiotic conditions become less hostile, allowing larger competitor species to succeed them up to a stable climax community"
    ]
  },
  {
    "id": "al-bio-fc-30",
    "subtopicId": "al-bio-8-1",
    "front": "Contrast proto-oncogenes and tumour suppressor genes in cancer development.",
    "backBullets": [
      "Proto-oncogenes stimulate mitosis; gain-of-function mutation creates permanently active oncogene (stuck accelerator)",
      "Tumour suppressor genes inhibit mitosis / trigger apoptosis; dual loss-of-function mutation or hypermethylation removes the brakes"
    ]
  },
  {
    "id": "al-bio-fc-31",
    "subtopicId": "al-bio-8-2",
    "front": "How doesVNTR genetic fingerprinting separate and visualise DNA fragments?",
    "backBullets": [
      "Restriction enzymes cut intact VNTR regions; negatively charged DNA loaded into agarose gel",
      "Voltage applied: smaller fragments migrate faster towards the positive anode",
      "Southern blot onto nylon membrane + hybridisation with radioactive/fluorescent DNA probes"
    ]
  },
  {
    "id": "al-bio-fc-1-1-3",
    "subtopicId": "al-bio-1-1",
    "front": "Why does starch NOT alter the water potential of a plant cell?",
    "backBullets": [
      "It is large and insoluble in water, so it has no osmotic effect."
    ]
  },
  {
    "id": "al-bio-fc-1-1-4",
    "subtopicId": "al-bio-1-1",
    "front": "Structural difference between α-glucose and β-glucose?",
    "backBullets": [
      "On carbon-1, α-glucose has –OH BELOW the ring; β-glucose has –OH ABOVE the ring."
    ]
  },
  {
    "id": "al-bio-fc-1-1-5",
    "subtopicId": "al-bio-1-1",
    "front": "Why is glycogen more branched than amylopectin?",
    "backBullets": [
      "More terminal ends allow faster simultaneous enzymatic hydrolysis to supply glucose for rapid animal respiration."
    ]
  },
  {
    "id": "al-bio-fc-1-2-3",
    "subtopicId": "al-bio-1-2",
    "front": "Three bonds stabilising a protein’s tertiary structure?",
    "backBullets": [
      "Hydrogen bonds, ionic bonds (between charged R-groups), and strong covalent disulfide bridges (between cysteine R-groups)."
    ]
  },
  {
    "id": "al-bio-fc-1-2-4",
    "subtopicId": "al-bio-1-2",
    "front": "How does the induced-fit model improve on the lock-and-key model?",
    "backBullets": [
      "Active site is initially NOT fully complementary; binding induces a conformational change that moulds tightly around the substrate, straining its bonds to lower Ea."
    ]
  },
  {
    "id": "al-bio-fc-1-2-5",
    "subtopicId": "al-bio-1-2",
    "front": "Why is DNA polymerase only able to synthesise DNA in one direction (5′ → 3′)?",
    "backBullets": [
      "Its active site is strictly complementary ONLY to the 3′ hydroxyl end of the growing DNA strand."
    ]
  },
  {
    "id": "al-bio-fc-2-1-3",
    "subtopicId": "al-bio-2-1",
    "front": "Why does a Transmission Electron Microscope (TEM) have far higher resolution than a light microscope?",
    "backBullets": [
      "Electrons have a much shorter de Broglie wavelength than visible light, allowing two closer points to be resolved as separate."
    ]
  },
  {
    "id": "al-bio-fc-2-1-4",
    "subtopicId": "al-bio-2-1",
    "front": "Three differences between prokaryotic cells and eukaryotic cells?",
    "backBullets": [
      "Prokaryotes have no membrane-bound organelles/nucleus, circular naked DNA (no histones), and smaller 70S ribosomes (vs 80S)."
    ]
  },
  {
    "id": "al-bio-fc-2-1-5",
    "subtopicId": "al-bio-2-1",
    "front": "What happens during Anaphase of mitosis?",
    "backBullets": [
      "Centromeres divide and spindle fibres shorten, pulling sister chromatids apart to opposite poles of the cell."
    ]
  },
  {
    "id": "al-bio-fc-2-2-3",
    "subtopicId": "al-bio-2-2",
    "front": "Difference between active immunity and passive immunity?",
    "backBullets": [
      "Active = body makes its own antibodies + memory cells (slow onset, long-term); Passive = ready-made antibodies received (immediate, short-term, no memory cells)."
    ]
  },
  {
    "id": "al-bio-fc-2-2-4",
    "subtopicId": "al-bio-2-2",
    "front": "Why are antibiotics completely ineffective against viruses like HIV?",
    "backBullets": [
      "Antibiotics target bacterial murein cell walls or 70S ribosomes; viruses lack cell walls and hijack host cell machinery."
    ]
  },
  {
    "id": "al-bio-fc-2-2-5",
    "subtopicId": "al-bio-2-2",
    "front": "How does cholesterol regulate fluid-mosaic membrane stability?",
    "backBullets": [
      "Restricts lateral movement of phospholipids at high temperatures (reduces fluidity) and prevents tight packing/crystallisation at low temperatures."
    ]
  },
  {
    "id": "al-bio-fc-3-1-3",
    "subtopicId": "al-bio-3-1",
    "front": "How does anaerobic respiration in insect flight muscles speed up O₂ delivery in tracheoles?",
    "backBullets": [
      "Lactate builds up in muscle cells, lowering ψ; tracheole fluid moves into cells by osmosis, increasing gas-filled surface area and speeding diffusion in air."
    ]
  },
  {
    "id": "al-bio-fc-3-1-4",
    "subtopicId": "al-bio-3-1",
    "front": "Three adaptations of insects to limit water loss while exchanging gases?",
    "backBullets": [
      "Waxy waterproof cuticle, spiracles that can close via valves, and tiny hairs around spiracles trapping humid air."
    ]
  },
  {
    "id": "al-bio-fc-3-1-5",
    "subtopicId": "al-bio-3-1",
    "front": "Why do single-celled organisms not need a specialised gas-exchange system?",
    "backBullets": [
      "They have a very large surface-area-to-volume (SA:V) ratio and a very short diffusion pathway across their cell membrane."
    ]
  },
  {
    "id": "al-bio-fc-3-2-3",
    "subtopicId": "al-bio-3-2",
    "front": "Why does the AVN delay the electrical impulse before sending it down the Bundle of His?",
    "backBullets": [
      "To allow the atria to finish contracting and empty blood completely into the ventricles before ventricular systole starts from the apex upwards."
    ]
  },
  {
    "id": "al-bio-fc-3-2-4",
    "subtopicId": "al-bio-3-2",
    "front": "Two pieces of experimental evidence supporting the Mass Flow Hypothesis in phloem?",
    "backBullets": [
      "Ringing experiments cause swelling/sugar accumulation ABOVE the cut; ¹⁴CO₂ radioactive tracer autoradiography tracks sucrose moving from leaves to sinks."
    ]
  },
  {
    "id": "al-bio-fc-3-2-5",
    "subtopicId": "al-bio-3-2",
    "front": "Why does a mammal with a very small body (e.g. shrew) have haemoglobin shifted to the RIGHT?",
    "backBullets": [
      "High SA:V ratio ⇒ rapid heat loss ⇒ high metabolic rate ⇒ needs lower O₂ affinity to unload O₂ rapidly to respiring cells!"
    ]
  },
  {
    "id": "al-bio-fc-4-1-3",
    "subtopicId": "al-bio-4-1",
    "front": "Three structural differences between mRNA and tRNA?",
    "backBullets": [
      "mRNA is linear with no H-bonds and contains codons; tRNA is clover-leaf shaped with intramolecular H-bonds, an anticodon, and an amino acid binding site."
    ]
  },
  {
    "id": "al-bio-fc-4-1-4",
    "subtopicId": "al-bio-4-1",
    "front": "Role of ATP during translation at the ribosome?",
    "backBullets": [
      "Provides energy to attach specific amino acids to their tRNA molecules and to form peptide bonds / move the ribosome along mRNA."
    ]
  },
  {
    "id": "al-bio-fc-4-1-5",
    "subtopicId": "al-bio-4-1",
    "front": "What is a genome vs a proteome?",
    "backBullets": [
      "Genome = complete set of genes in a cell; Proteome = full range of proteins a cell is able to produce."
    ]
  },
  {
    "id": "al-bio-fc-4-2-3",
    "subtopicId": "al-bio-4-2",
    "front": "How does non-disjunction during meiosis cause Down’s syndrome?",
    "backBullets": [
      "Homologous chromosomes (or sister chromatids) fail to separate cleanly, leaving a gamete with an extra copy of chromosome 21 (trisomy 21)."
    ]
  },
  {
    "id": "al-bio-fc-4-2-4",
    "subtopicId": "al-bio-4-2",
    "front": "How does intensive monoculture farming reduce biodiversity?",
    "backBullets": [
      "Removing hedgerows, applying herbicides/pesticides, and growing one crop destroy microhabitats and food sources, lowering both plant and animal species diversity."
    ]
  },
  {
    "id": "al-bio-fc-4-2-5",
    "subtopicId": "al-bio-4-2",
    "front": "What is a phylogenetic hierarchy of taxonomic groups (largest to smallest)?",
    "backBullets": [
      "Domain → Kingdom → Phylum → Class → Order → Family → Genus → Species (no overlap between groups!)."
    ]
  },
  {
    "id": "al-bio-fc-5-1-3",
    "subtopicId": "al-bio-5-1",
    "front": "Exact roles of ATP and reduced NADP in the Calvin Cycle?",
    "backBullets": [
      "ATP supplies energy for GP → TP reduction AND RuBP regeneration; reduced NADP supplies hydrogen/electrons to reduce GP to TP."
    ]
  },
  {
    "id": "al-bio-fc-5-1-4",
    "subtopicId": "al-bio-5-1",
    "front": "What is the role of electrons released by photolysis of water in PSII?",
    "backBullets": [
      "They replace the high-energy electrons lost from chlorophyll in Photosystem II during photoionisation."
    ]
  },
  {
    "id": "al-bio-fc-5-1-5",
    "subtopicId": "al-bio-5-1",
    "front": "Why do farmers heat greenhouses AND burn propane/pump CO₂?",
    "backBullets": [
      "Higher temperature speeds RuBisCO enzyme kinetics (up to optimum) and elevated CO₂ removes CO₂ as the limiting factor for GP production."
    ]
  },
  {
    "id": "al-bio-fc-5-2-3",
    "subtopicId": "al-bio-5-2",
    "front": "Products of ONE turn of the Krebs cycle (from one Acetyl-CoA)?",
    "backBullets": [
      "2 CO₂, 3 reduced NAD, 1 reduced FAD, and 1 ATP (via substrate-level phosphorylation)."
    ]
  },
  {
    "id": "al-bio-fc-5-2-4",
    "subtopicId": "al-bio-5-2",
    "front": "Why does anaerobic respiration yield far less ATP than aerobic respiration?",
    "backBullets": [
      "Glucose is only partially broken down in glycolysis (net 2 ATP); oxidative phosphorylation on the ETC cannot proceed without O₂."
    ]
  },
  {
    "id": "al-bio-fc-5-2-5",
    "subtopicId": "al-bio-5-2",
    "front": "Purpose of soda lime / KOH in a respirometer measuring O₂ uptake?",
    "backBullets": [
      "Absorbs CO₂ released by the respiring organisms so any pressure/volume decrease is due purely to O₂ consumed."
    ]
  },
  {
    "id": "al-bio-fc-6-1-3",
    "subtopicId": "al-bio-6-1",
    "front": "How does an inhibitory neurotransmitter (e.g. GABA) prevent an action potential?",
    "backBullets": [
      "Opens Cl⁻ (influx) or K⁺ (efflux) channels, hyperpolarising the postsynaptic membrane (more negative than −70 mV) so threshold is harder to reach."
    ]
  },
  {
    "id": "al-bio-fc-6-1-4",
    "subtopicId": "al-bio-6-1",
    "front": "Three factors that increase the speed of nerve impulse conduction?",
    "backBullets": [
      "Myelination (saltatory conduction), wider axon diameter (less electrical resistance), and higher temperature (up to optimum, faster ion diffusion)."
    ]
  },
  {
    "id": "al-bio-fc-6-1-5",
    "subtopicId": "al-bio-6-1",
    "front": "What maintains the resting potential (−70 mV) of a neurone?",
    "backBullets": [
      "Na⁺/K⁺ pump actively pumps 3 Na⁺ out for every 2 K⁺ in, and the membrane is far more permeable to K⁺ diffusing out than Na⁺ diffusing in."
    ]
  },
  {
    "id": "al-bio-fc-6-2-3",
    "subtopicId": "al-bio-6-2",
    "front": "Why do muscles become stiff after death (rigor mortis)?",
    "backBullets": [
      "ATP is required to DETACH myosin heads from actin; without ATP, cross-bridges remain locked in place."
    ]
  },
  {
    "id": "al-bio-fc-6-2-4",
    "subtopicId": "al-bio-6-2",
    "front": "Contrast fast-twitch and slow-twitch muscle fibres.",
    "backBullets": [
      "Slow-twitch = abundant myoglobin, mitochondria & capillaries (aerobic endurance); Fast-twitch = thick myosin, high glycogen & phosphocreatine (short anaerobic bursts)."
    ]
  },
  {
    "id": "al-bio-fc-6-2-5",
    "subtopicId": "al-bio-6-2",
    "front": "Why do desert animals like kangaroo rats have exceptionally long Loops of Henle?",
    "backBullets": [
      "A longer loop creates a steeper medullary Na⁺/ψ gradient, allowing far more water to be reabsorbed from the collecting duct."
    ]
  },
  {
    "id": "al-bio-fc-7-1-3",
    "subtopicId": "al-bio-7-1",
    "front": "How can you spot an X-linked recessive trait in a pedigree chart?",
    "backBullets": [
      "An affected mother ALWAYS has affected sons, and an unaffected father CANNOT have an affected daughter!"
    ]
  },
  {
    "id": "al-bio-fc-7-1-4",
    "subtopicId": "al-bio-7-1",
    "front": "Degrees of freedom formula for a genetics chi-squared test?",
    "backBullets": [
      "df = (number of phenotypic categories) − 1."
    ]
  },
  {
    "id": "al-bio-fc-7-1-5",
    "subtopicId": "al-bio-7-1",
    "front": "What does epistatic gene interaction mean?",
    "backBullets": [
      "The allele of one gene masks or modifies the phenotypic expression of a second gene at a different locus."
    ]
  },
  {
    "id": "al-bio-fc-7-2-2",
    "subtopicId": "al-bio-7-2",
    "front": "Distinguish intraspecific competition from interspecific competition.",
    "backBullets": [
      "Intraspecific = between members of the SAME species; Interspecific = between members of DIFFERENT species (competitive exclusion principle)."
    ]
  },
  {
    "id": "al-bio-fc-7-2-3",
    "subtopicId": "al-bio-7-2",
    "front": "Why does genetic drift have a much bigger impact on SMALL populations?",
    "backBullets": [
      "Chance events (which individuals survive/reproduce) cause large random swings in allele frequencies when few alleles exist."
    ]
  },
  {
    "id": "al-bio-fc-7-2-4",
    "subtopicId": "al-bio-7-2",
    "front": "How do saprobionts and mycorrhizae support the nitrogen and phosphorus cycles?",
    "backBullets": [
      "Saprobionts secrete extracellular enzymes to break down organic matter (ammonification); mycorrhizal fungi increase root surface area for water and phosphate uptake."
    ]
  },
  {
    "id": "al-bio-fc-7-2-5",
    "subtopicId": "al-bio-7-2",
    "front": "Why do conservationists deliberately graze or burn moorlands?",
    "backBullets": [
      "To deflect/halt ecological succession so trees do not outcompete specialised heather/grassland species."
    ]
  },
  {
    "id": "al-bio-fc-8-1-3",
    "subtopicId": "al-bio-8-1",
    "front": "How does siRNA silence a specific gene post-transcriptionally?",
    "backBullets": [
      "Single-stranded siRNA binds complementary mRNA via base pairing, guiding an enzyme to cleave the mRNA so it cannot be translated into protein."
    ]
  },
  {
    "id": "al-bio-fc-8-1-4",
    "subtopicId": "al-bio-8-1",
    "front": "Advantage of induced pluripotent stem cells (iPS) over embryonic stem cells?",
    "backBullets": [
      "Made from a patient’s own adult somatic cells, avoiding ethical destruction of embryos AND preventing immune rejection!"
    ]
  },
  {
    "id": "al-bio-fc-8-1-5",
    "subtopicId": "al-bio-8-1",
    "front": "Contrast mutations in proto-oncogenes vs tumour suppressor genes.",
    "backBullets": [
      "Proto-oncogene mutation = gain-of-function (permanently ON accelerator); Tumour suppressor mutation = loss-of-function (broken brakes)."
    ]
  },
  {
    "id": "al-bio-fc-8-2-3",
    "subtopicId": "al-bio-8-2",
    "front": "Why are primers essential in PCR?",
    "backBullets": [
      "DNA polymerase can only add nucleotides to an existing 3′ OH end; primers also specify the exact region to copy and stop separated strands re-annealing."
    ]
  },
  {
    "id": "al-bio-fc-8-2-4",
    "subtopicId": "al-bio-8-2",
    "front": "Why is Taq polymerase used instead of human DNA polymerase in PCR?",
    "backBullets": [
      "Taq polymerase is thermostable (from Thermus aquaticus) and does NOT denature at the 95 °C strand-separation step!"
    ]
  },
  {
    "id": "al-bio-fc-8-2-5",
    "subtopicId": "al-bio-8-2",
    "front": "How does a labelled DNA probe detect a specific mutant allele in genetic screening?",
    "backBullets": [
      "Single-stranded probe has a base sequence complementary to the mutant allele, hybridising to it and revealing its presence via fluorescence or radioactivity."
    ]
  }
];

export const ALEVEL_BIOLOGY_CHEAT_SHEETS: CheatSheetItem[] = [
  {
    "id": "cs-al-bio-molecules",
    "slug": "biological-molecules-and-dna",
    "title": "Biological Molecules, Enzymes & DNA",
    "topicNumber": 1,
    "topicName": "Biological Molecules",
    "summary": "α/β-glucose polysaccharides, protein structure bonds, enzyme inhibition kinetics, ATP, and Meselson-Stahl.",
    "accentColor": "#16a34a",
    "sections": [
      {
        "heading": "Polysaccharides & Bonds",
        "points": [
          "Starch (amylose 1,4-helical + amylopectin 1,4/1,6 branched) and Glycogen (highly 1,6-branched α-glucose): insoluble → no osmotic effect.",
          "Cellulose: inverted β-1,4 straight chains + collective H-bonds → high-tensile-strength microfibrils.",
          "Triglycerides: 1 glycerol + 3 fatty acids (3 ester bonds); Phospholipids: amphipathic bilayer."
        ]
      },
      {
        "heading": "DNA Replication & Protein Folding",
        "points": [
          "Tertiary structure: H-bonds, ionic bonds, hydrophobic interactions, covalent disulphide bridges.",
          "Semi-conservative replication: DNA helicase breaks H-bonds; DNA polymerase synthesises 5′→3′ phosphodiester bonds."
        ]
      }
    ]
  },
  {
    "id": "cs-al-bio-cells-immunity",
    "slug": "cells-microscopy-and-immunity",
    "title": "Ultrastructure, Transport & Immunity",
    "topicNumber": 2,
    "topicName": "Cells & Immunity",
    "summary": "TEM vs SEM, cell fractionation order, sodium-glucose co-transport, T/B immunity, and ELISA steps.",
    "accentColor": "#0d9488",
    "sections": [
      {
        "heading": "Microscopy & Fractionation",
        "formula": "M = I ÷ A   |   Mitotic Index = Mitotic cells ÷ Total cells",
        "points": [
          "TEM: highest resolution (~0.1 nm), 2D ultrathin slice; SEM: 3D surface (~20 nm); Optical: ~200 nm, living cells.",
          "Buffer: Cold (stop enzymes), Isotonic (prevent lysis), Buffered (stop denaturation). Pellet order: Nuclei → Mito/Chloro → Lysosomes → ER → Ribosomes."
        ]
      },
      {
        "heading": "Specific Immunity & ELISA",
        "points": [
          "T-helper cytokines activate T-cytotoxic (perforin) and B-cell clonal expansion into plasma cells + memory cells.",
          "Indirect ELISA: Immobilise antigen → add patient antibody → WASH → add enzyme-linked 2° antibody → WASH → add substrate → colour change."
        ]
      }
    ]
  },
  {
    "id": "cs-al-bio-exchange-transport",
    "slug": "exchange-haemoglobin-and-mass-flow",
    "title": "Gas Exchange, Haemoglobin & Mass Flow",
    "topicNumber": 3,
    "topicName": "Exchange & Mass Transport",
    "summary": "Countercurrent gill exchange, Bohr shift, cardiac cycle conduction, cohesion-tension, and Münch mass flow.",
    "accentColor": "#0284c7",
    "sections": [
      {
        "heading": "Haemoglobin & Cardiac Output",
        "formula": "CO = HR × SV   |   PVR = Tidal Volume × Breathing Rate",
        "points": [
          "Bohr effect: high pCO₂ lowers pH → shifts dissociation curve RIGHT → lowers O₂ affinity → unloads O₂ to respiring muscle.",
          "Conduction: SAN → atria contract → AVN (delay) → Bundle of His → Purkyne fibres → ventricles contract from apex upwards."
        ]
      },
      {
        "heading": "Plant Mass Transport",
        "points": [
          "Xylem cohesion-tension: transpiration lowers mesophyll Ψ, pulling cohesive H-bonded water under tension.",
          "Phloem mass flow: active sucrose loading lowers sieve-tube Ψ → osmotic water influx → high hydrostatic pressure drives flow to sinks."
        ]
      }
    ]
  },
  {
    "id": "cs-al-bio-genetic-info",
    "slug": "transcription-translation-meiosis-and-diversity",
    "title": "Transcription, Translation, Meiosis & Biodiversity",
    "topicNumber": 4,
    "topicName": "Genetic Information, Variation & Biodiversity",
    "summary": "Triplet genetic code, RNA polymerase & splicing, tRNA translation, meiosis variation, and Simpson’s Index of Diversity.",
    "accentColor": "#2563eb",
    "sections": [
      {
        "heading": "Protein Synthesis & Splicing",
        "formula": "DNA Antisense → pre-mRNA → (Splicing removes Introns) → Mature mRNA → Polypeptide",
        "points": [
          "Genetic code is triplet, degenerate (multiple codons per amino acid), non-overlapping, and universal.",
          "RNA polymerase forms phosphodiester bonds in transcription; tRNA anticodons pair with mRNA codons at the ribosome using ATP."
        ]
      },
      {
        "heading": "Meiosis, Selection & Biodiversity",
        "formula": "d = N(N − 1) ÷ Σn(n − 1)   |   Gamete combinations = 2ⁿ",
        "points": [
          "Meiosis I: crossing over at chiasmata (Prophase I) + independent segregation of homologous pairs (Metaphase I).",
          "Directional selection shifts the mean towards one extreme; stabilising selection narrows variance around the mean."
        ]
      }
    ]
  },
  {
    "id": "cs-al-bio-bioenergetics",
    "slug": "photosynthesis-and-respiration-pathways",
    "title": "Photosynthesis & Cellular Respiration",
    "topicNumber": 5,
    "topicName": "Energy Transfers in and between Organisms",
    "summary": "Complete compartment map, carbon accounting, chemiosmosis, and anaerobic NAD regeneration.",
    "accentColor": "#15803d",
    "sections": [
      {
        "heading": "Photosynthesis (Chloroplast)",
        "formula": "LDR (Thylakoid): H₂O → ½O₂ + 2H⁺ + 2e⁻  |  Calvin (Stroma): RuBP(5C) + CO₂ → 2 GP(3C) → 2 TP(3C)",
        "points": [
          "Light-Dependent: photoionisation → ETC H⁺ pumping → chemiosmosis via ATP synthase → ATP + reduced NADP.",
          "Calvin cycle: Rubisco fixes CO₂; 5/6 TP regenerates RuBP, 1/6 forms glucose/organic molecules."
        ]
      },
      {
        "heading": "Aerobic Respiration (Per Glucose)",
        "points": [
          "Glycolysis (Cytoplasm): 2 pyruvate, 2 net ATP, 2 NADH.",
          "Link ×2 (Matrix): 2 Acetyl CoA, 2 CO₂, 2 NADH. Krebs ×2 (Matrix): 4 CO₂, 6 NADH, 2 FADH₂, 2 ATP.",
          "Oxidative phosphorylation (Cristae): O₂ is terminal electron acceptor (→ H₂O); yields ~28–32 ATP."
        ]
      }
    ]
  },
  {
    "id": "cs-al-bio-nerves-kidney",
    "slug": "nerves-muscles-and-osmoregulation",
    "title": "Nerves, Sliding Filament & Kidneys",
    "topicNumber": 6,
    "topicName": "Organisms Respond to Changes in Their Environments",
    "summary": "Action potential voltages, cholinergic synapses, sarcomere mechanics, Loop of Henle, and ADH aquaporins.",
    "accentColor": "#7c3aed",
    "sections": [
      {
        "heading": "Action Potentials & Synapses",
        "formula": "Resting: −70 mV  →  Threshold: −55 mV  →  Peak: +40 mV  →  Hyperpolarised: −80 mV",
        "points": [
          "Saltatory conduction jumps between Nodes of Ranvier along myelinated axons.",
          "Synapse: presynaptic Ca²⁺ influx → ACh exocytosis → postsynaptic Na⁺ influx → acetylcholinesterase breakdown."
        ]
      },
      {
        "heading": "Muscle & Kidney Osmoregulation",
        "points": [
          "Sliding filament: Ca²⁺ binds troponin → moves tropomyosin; A-band constant, I-band & H-zone shrink.",
          "Loop of Henle: ascending limb actively exports Na⁺/Cl⁻; descending loses water. ADH inserts aquaporins into collecting duct."
        ]
      }
    ]
  },
  {
    "id": "cs-al-bio-populations-ecosystems",
    "slug": "inheritance-hardy-weinberg-speciation-and-succession",
    "title": "Inheritance, Hardy-Weinberg, Speciation & Succession",
    "topicNumber": 7,
    "topicName": "Genetics, Populations, Evolution & Ecosystems",
    "summary": "Dihybrid epistasis ratios, chi-squared test, Hardy-Weinberg equations, speciation, Lincoln Index, and ecological succession.",
    "accentColor": "#ea580c",
    "sections": [
      {
        "heading": "Inheritance, Epistasis & Hardy-Weinberg",
        "formula": "p + q = 1   |   p² + 2pq + q² = 1   |   χ² = Σ(O − E)² ÷ E",
        "points": [
          "Unlinked dihybrid = 9:3:3:1; Recessive epistasis = 9:3:4; Dominant epistasis = 12:3:1; Complementary = 9:7.",
          "Start Hardy-Weinberg from recessive phenotype frequency q², take √(q²) for q, then calculate 2pq for heterozygous carriers."
        ]
      },
      {
        "heading": "Speciation, Sampling & Succession",
        "formula": "Lincoln Index: N = (n₁ × n₂) ÷ m",
        "points": [
          "Allopatric speciation = geographical barrier; Sympatric speciation = reproductive isolation in same habitat.",
          "Primary succession: pioneer species improve soil humus/moisture → less hostile → climax community (conservation manages plagioclimax)."
        ]
      }
    ]
  },
  {
    "id": "cs-al-bio-genetics-tech",
    "slug": "mutations-epigenetics-and-gene-tech",
    "title": "Mutations, Epigenetics, Cancer & PCR Gene Tech",
    "topicNumber": 8,
    "topicName": "The Control of Gene Expression",
    "summary": "Stem cell potency, oestrogen & siRNA, epigenetic switches, oncogenes, PCR thermal cycling, and VNTR fingerprinting.",
    "accentColor": "#db2777",
    "sections": [
      {
        "heading": "Epigenetics, Stem Cells & Cancer",
        "points": [
          "Potency: Totipotent → Pluripotent (embryonic / iPS cells) → Multipotent → Unipotent.",
          "DNA hypermethylation & histone deacetylation condense chromatin (gene OFF); silencing tumour suppressor genes or mutating proto-oncogenes into oncogenes drives tumour growth."
        ]
      },
      {
        "heading": "Recombinant DNA, PCR & Fingerprinting",
        "formula": "PCR: 95°C Denature → 55°C Anneal → 72°C Extend (2ⁿ copies)",
        "points": [
          "Isolate genes via reverse transcriptase (intron-free cDNA), restriction endonucleases (sticky ends), or gene machines.",
          "VNTR profiling uses restriction digest, agarose gel electrophoresis (small fragments move fastest), and labelled DNA probes."
        ]
      }
    ]
  }
];

export const ALEVEL_BIOLOGY_EXAM_PRACTICE: ExamQuestionItem[] = [
  {
    "id": "al-bio-exam-1",
    "subtopicId": "al-bio-1-2",
    "number": 1,
    "stimulus": "An investigation measured the initial rate of an enzyme-catalysed reaction across increasing substrate concentrations in the absence of an inhibitor, with inhibitor X, and with inhibitor Y.",
    "diagram": "enzyme-lock-key",
    "parts": [
      {
        "id": "al-bio-exam-1a",
        "label": "a)",
        "prompt": "Which model of enzyme action proposes that the active site undergoes a conformational change upon substrate binding?",
        "kind": "mcq",
        "marks": 1,
        "options": [
          "Lock and key model",
          "Induced-fit model",
          "Fluid mosaic model",
          "Semi-conservative model"
        ],
        "correctIndex": 1
      },
      {
        "id": "al-bio-exam-1b",
        "label": "b)",
        "prompt": "Inhibitor X reduces the initial rate at low substrate concentrations, but Vmax is still reached at high substrate concentrations. Explain how inhibitor X works.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Inhibitor X is a competitive inhibitor with a similar tertiary shape to the substrate, so it binds to the active site and blocks enzyme-substrate complexes. At high substrate concentrations, substrate molecules outcompete the inhibitor for active sites so Vmax is reached.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Competitive inhibitor with similar shape to substrate",
              "requiredKeywordGroups": [
                [
                  "competitive",
                  "similar shape"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "Binds to the active site preventing substrate binding",
              "requiredKeywordGroups": [
                [
                  "active site"
                ],
                [
                  "block",
                  "compete",
                  "bind"
                ]
              ]
            },
            {
              "id": "mp3",
              "markDescription": "High substrate concentration outcompetes inhibitor to reach same Vmax",
              "requiredKeywordGroups": [
                [
                  "outcompet",
                  "more substrate",
                  "vmax"
                ]
              ]
            }
          ]
        }
      },
      {
        "id": "al-bio-exam-1c",
        "label": "c)",
        "prompt": "Explain why increasing substrate concentration cannot restore Vmax when non-competitive inhibitor Y is present.",
        "kind": "short-answer",
        "marks": 2,
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "Inhibitor Y binds to an allosteric site away from the active site, altering the enzyme’s tertiary structure so the active site is no longer complementary to the substrate regardless of substrate concentration.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Binds to allosteric site / site other than active site",
              "requiredKeywordGroups": [
                [
                  "allosteric",
                  "away from",
                  "other than"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "Changes tertiary structure / active site shape so substrate cannot form ES complexes",
              "requiredKeywordGroups": [
                [
                  "tertiary",
                  "shape"
                ],
                [
                  "active site",
                  "complementary"
                ]
              ]
            }
          ]
        }
      }
    ]
  },
  {
    "id": "al-bio-exam-2",
    "subtopicId": "al-bio-2-1",
    "number": 2,
    "stimulus": "A biochemist homogenised liver tissue in an ice-cold, isotonic, buffered solution and performed differential ultracentrifugation before examining the first two pellets under an electron microscope.",
    "diagram": "eukaryotic-vs-prokaryotic",
    "parts": [
      {
        "id": "al-bio-exam-2a",
        "label": "a)",
        "prompt": "Which organelle is found in the very first (lowest-speed) centrifugation pellet?",
        "kind": "mcq",
        "marks": 1,
        "options": [
          "Ribosomes",
          "Nuclei",
          "Lysosomes",
          "Rough endoplasmic reticulum"
        ],
        "correctIndex": 1
      },
      {
        "id": "al-bio-exam-2b",
        "label": "b)",
        "prompt": "Explain why the homogenisation solution had to be ice-cold, isotonic, and buffered.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Ice-cold reduces hydrolytic enzyme activity that could digest organelles; isotonic has the same water potential as organelles to prevent osmotic bursting or shrinking; buffered maintains a constant pH to prevent denaturation of organelle proteins.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Cold: reduces enzyme activity to prevent organelle self-digestion",
              "requiredKeywordGroups": [
                [
                  "cold"
                ],
                [
                  "enzyme"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "Isotonic: equal water potential prevents osmotic lysis or shrinking",
              "requiredKeywordGroups": [
                [
                  "isotonic",
                  "water potential",
                  "osmosis"
                ],
                [
                  "burst",
                  "shrink",
                  "lysis"
                ]
              ]
            },
            {
              "id": "mp3",
              "markDescription": "Buffered: constant pH prevents protein/enzyme denaturation",
              "requiredKeywordGroups": [
                [
                  "buffer",
                  "ph"
                ],
                [
                  "denatur"
                ]
              ]
            }
          ]
        }
      },
      {
        "id": "al-bio-exam-2c",
        "label": "c)",
        "prompt": "Give two reasons why a Transmission Electron Microscope (TEM) provides more detailed internal organelle images than an optical microscope.",
        "kind": "short-answer",
        "marks": 2,
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "Electrons have a much shorter wavelength than visible light, giving TEM a much higher resolution (~0.1 nm vs 200 nm) and allowing higher useful magnification of internal ultrastructure.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Electrons have a much shorter wavelength than visible light",
              "requiredKeywordGroups": [
                [
                  "wavelength"
                ],
                [
                  "shorter",
                  "electron"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "Much higher resolution / resolving power",
              "requiredKeywordGroups": [
                [
                  "resolution",
                  "resolving"
                ]
              ]
            }
          ]
        }
      }
    ]
  },
  {
    "id": "al-bio-exam-3",
    "subtopicId": "al-bio-3-2",
    "number": 3,
    "stimulus": "During intense sprinting, skeletal muscle fibres respire rapidly and release high concentrations of carbon dioxide into surrounding capillaries. The oxyhaemoglobin dissociation curve shifts to the right.",
    "parts": [
      {
        "id": "al-bio-exam-3a",
        "label": "a)",
        "prompt": "What is the name of the rightward shift of the oxyhaemoglobin dissociation curve at high partial pressures of CO₂?",
        "kind": "mcq",
        "marks": 1,
        "options": [
          "The Chloride shift",
          "The Bohr effect",
          "The Münch effect",
          "The Haldane equilibrium"
        ],
        "correctIndex": 1
      },
      {
        "id": "al-bio-exam-3b",
        "label": "b)",
        "prompt": "Explain the S-shaped (sigmoidal) curve of haemoglobin oxygen saturation in terms of quaternary structure.",
        "kind": "short-answer",
        "marks": 2,
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "Binding of the first O₂ molecule causes a conformational change in haemoglobin’s quaternary/tertiary structure, making it easier for the second and third O₂ molecules to bind (positive cooperative binding).",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Binding of first O₂ changes tertiary/quaternary shape",
              "requiredKeywordGroups": [
                [
                  "first"
                ],
                [
                  "shape",
                  "conformation",
                  "tertiary",
                  "quaternary"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "Increases affinity / makes subsequent O₂ bind more easily (cooperative binding)",
              "requiredKeywordGroups": [
                [
                  "cooperat",
                  "easier",
                  "affinity"
                ]
              ]
            }
          ]
        }
      },
      {
        "id": "al-bio-exam-3c",
        "label": "c)",
        "prompt": "Explain how increased respiration in muscle tissue causes the Bohr effect and why this benefits contracting muscle.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "More CO₂ dissolves to form carbonic acid, lowering blood pH. Lower pH alters haemoglobin’s tertiary structure so it has a lower affinity for oxygen, releasing more O₂ to muscles for aerobic respiration and ATP synthesis.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Higher CO₂ lowers blood pH (more acidic)",
              "requiredKeywordGroups": [
                [
                  "co2",
                  "carbon dioxide"
                ],
                [
                  "ph",
                  "acid"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "Alters haemoglobin shape lowering affinity for oxygen",
              "requiredKeywordGroups": [
                [
                  "affinity"
                ],
                [
                  "lower",
                  "decreas",
                  "reduc"
                ]
              ]
            },
            {
              "id": "mp3",
              "markDescription": "More oxygen unloaded for aerobic respiration / ATP production",
              "requiredKeywordGroups": [
                [
                  "unload",
                  "releas",
                  "dissociat"
                ],
                [
                  "respirat",
                  "atp"
                ]
              ]
            }
          ]
        }
      }
    ]
  },
  {
    "id": "al-bio-exam-4",
    "subtopicId": "al-bio-4-1",
    "number": 4,
    "stimulus": "In eukaryotic cells, transcription of a gene produces pre-mRNA in the nucleus, which is then processed into mature mRNA before translation at a ribosome.",
    "parts": [
      {
        "id": "al-bio-exam-4a",
        "label": "a)",
        "prompt": "Which enzyme catalyses the formation of phosphodiester bonds along the growing pre-mRNA strand during transcription?",
        "kind": "mcq",
        "marks": 1,
        "options": [
          "DNA polymerase",
          "RNA polymerase",
          "DNA helicase",
          "Reverse transcriptase"
        ],
        "correctIndex": 1
      },
      {
        "id": "al-bio-exam-4b",
        "label": "b)",
        "prompt": "Describe how pre-mRNA is modified to form mature mRNA in a eukaryotic nucleus and explain why this step is unnecessary in prokaryotes.",
        "kind": "short-answer",
        "marks": 2,
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "Non-coding introns are removed (spliced out) and coding exons are joined together by spliceosomes. Prokaryotic DNA does not contain introns so prokaryotic mRNA requires no splicing.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Introns removed and exons joined together (splicing)",
              "requiredKeywordGroups": [
                [
                  "intron"
                ],
                [
                  "exon",
                  "splic"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "Prokaryotic DNA lacks introns",
              "requiredKeywordGroups": [
                [
                  "prokaryot",
                  "bacteria"
                ],
                [
                  "no intron",
                  "lack intron"
                ]
              ]
            }
          ]
        }
      },
      {
        "id": "al-bio-exam-4c",
        "label": "c)",
        "prompt": "Describe the roles of tRNA, ribosomes, and ATP during the translation of mature mRNA into a polypeptide.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Each tRNA carries a specific amino acid and a complementary anticodon that base-pairs with an mRNA codon inside the ribosome. The ribosome holds two tRNAs simultaneously while peptide bonds form between adjacent amino acids using energy from ATP.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "tRNA anticodon binds complementary mRNA codon bringing specific amino acid",
              "requiredKeywordGroups": [
                [
                  "anticodon"
                ],
                [
                  "codon"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "Peptide bond forms between adjacent amino acids at the ribosome",
              "requiredKeywordGroups": [
                [
                  "peptide bond"
                ],
                [
                  "amino acid"
                ]
              ]
            },
            {
              "id": "mp3",
              "markDescription": "ATP supplies energy for amino acid activation / peptide bond synthesis",
              "requiredKeywordGroups": [
                [
                  "atp",
                  "energy"
                ]
              ]
            }
          ]
        }
      }
    ]
  },
  {
    "id": "al-bio-exam-5",
    "subtopicId": "al-bio-5-1",
    "number": 5,
    "stimulus": "Researchers grew unicellular green algae in a lollipop flask supplied with ¹⁴CO₂ under constant bright light, then suddenly turned off the lamp while sampling stromal intermediates every 5 seconds.",
    "diagram": "photosynthesis-chloroplast",
    "parts": [
      {
        "id": "al-bio-exam-5a",
        "label": "a)",
        "prompt": "Name the enzyme that fixes CO₂ onto RuBP in the chloroplast stroma.",
        "kind": "mcq",
        "marks": 1,
        "options": [
          "ATP synthase",
          "Rubisco",
          "RNA polymerase",
          "Acetylcholinesterase"
        ],
        "correctIndex": 1
      },
      {
        "id": "al-bio-exam-5b",
        "label": "b)",
        "prompt": "Explain how protons (H⁺) and ATP synthase generate ATP on the thylakoid membrane during the light-dependent reaction.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Photoexcited electrons pass down the thylakoid electron transport chain, releasing energy to pump H⁺ from the stroma into the thylakoid lumen. Protons diffuse back down their electrochemical gradient through ATP synthase (chemiosmosis), driving ADP + Pᵢ → ATP.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Electrons pass along ETC releasing energy to pump H⁺ into thylakoid space",
              "requiredKeywordGroups": [
                [
                  "electron",
                  "etc"
                ],
                [
                  "pump",
                  "h+",
                  "proton"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "Creates a proton electrochemical gradient across thylakoid membrane",
              "requiredKeywordGroups": [
                [
                  "gradient"
                ],
                [
                  "thylakoid",
                  "proton",
                  "h+"
                ]
              ]
            },
            {
              "id": "mp3",
              "markDescription": "Protons diffuse through ATP synthase (chemiosmosis) to phosphorylate ADP + Pᵢ",
              "requiredKeywordGroups": [
                [
                  "atp synthase",
                  "chemiosmosis"
                ]
              ]
            }
          ]
        }
      },
      {
        "id": "al-bio-exam-5c",
        "label": "c)",
        "prompt": "Explain why GP concentration immediately rises while RuBP concentration falls once the lamp is switched off.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Without light, the light-dependent reaction stops producing ATP and reduced NADP. Therefore GP can no longer be reduced to TP so GP accumulates, while RuBP continues to be fixed with CO₂ but cannot be regenerated from TP without ATP, causing RuBP to fall.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Light-dependent reaction stops; no ATP or reduced NADP produced",
              "requiredKeywordGroups": [
                [
                  "atp"
                ],
                [
                  "nadp",
                  "nadph"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "GP cannot be reduced to TP so GP accumulates/rises",
              "requiredKeywordGroups": [
                [
                  "gp"
                ],
                [
                  "reduc",
                  "tp",
                  "accumulat",
                  "ris"
                ]
              ]
            },
            {
              "id": "mp3",
              "markDescription": "RuBP still combines with CO₂ but cannot be regenerated from TP",
              "requiredKeywordGroups": [
                [
                  "rubp"
                ],
                [
                  "regenerat",
                  "fall",
                  "decreas"
                ]
              ]
            }
          ]
        }
      }
    ]
  },
  {
    "id": "al-bio-exam-6",
    "subtopicId": "al-bio-6-1",
    "number": 6,
    "stimulus": "Local anaesthetics such as lidocaine bind irreversibly to the intracellular pore of voltage-gated Na⁺ channels in sensory pain neurones.",
    "diagram": "synaptic-transmission",
    "parts": [
      {
        "id": "al-bio-exam-6a",
        "label": "a)",
        "prompt": "What is the typical resting membrane potential of an unstimulated mammalian sensory axon?",
        "kind": "mcq",
        "marks": 1,
        "options": [
          "+40 mV",
          "0 mV",
          "−70 mV",
          "−120 mV"
        ],
        "correctIndex": 2
      },
      {
        "id": "al-bio-exam-6b",
        "label": "b)",
        "prompt": "Explain how lidocaine prevents pain impulses from reaching the central nervous system.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Blocking voltage-gated Na⁺ channels prevents Na⁺ ions from diffusing rapidly into the axon when stimulated. The membrane cannot depolarise to threshold (−55 mV) or +40 mV, so no action potential is generated or propagated to the brain.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Prevents Na⁺ influx / diffusion into axon",
              "requiredKeywordGroups": [
                [
                  "na",
                  "sodium"
                ],
                [
                  "prevent",
                  "block",
                  "cannot enter",
                  "stop"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "Membrane cannot depolarise / reach threshold",
              "requiredKeywordGroups": [
                [
                  "depolaris",
                  "threshold"
                ]
              ]
            },
            {
              "id": "mp3",
              "markDescription": "No action potential generated or transmitted to CNS/brain",
              "requiredKeywordGroups": [
                [
                  "action potential",
                  "impulse"
                ],
                [
                  "no",
                  "not",
                  "prevent"
                ]
              ]
            }
          ]
        }
      },
      {
        "id": "al-bio-exam-6c",
        "label": "c)",
        "prompt": "State why myelinated sensory neurones transmit impulses significantly faster than unmyelinated neurones of the same diameter.",
        "kind": "short-answer",
        "marks": 2,
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "Myelin acts as an electrical insulator so depolarisation only occurs at Nodes of Ranvier, allowing action potentials to jump rapidly from node to node by saltatory conduction.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Myelin insulates axon; depolarisation occurs only at Nodes of Ranvier",
              "requiredKeywordGroups": [
                [
                  "node",
                  "ranvier",
                  "insulat"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "Saltatory conduction (impulses jump from node to node)",
              "requiredKeywordGroups": [
                [
                  "saltatory",
                  "jump"
                ]
              ]
            }
          ]
        }
      }
    ]
  },
  {
    "id": "al-bio-exam-7",
    "subtopicId": "al-bio-7-1",
    "number": 7,
    "stimulus": "Cystic fibrosis is caused by an autosomal recessive allele (f). In a large isolated population at Hardy-Weinberg equilibrium, 1 in 1,600 babies is born with cystic fibrosis (q² = 0.000625).",
    "parts": [
      {
        "id": "al-bio-exam-7a",
        "label": "a)",
        "prompt": "Which equation represents genotype frequencies in a population at Hardy-Weinberg equilibrium?",
        "kind": "mcq",
        "marks": 1,
        "options": [
          "p + q = 1",
          "p² + 2pq + q² = 1",
          "p² + q² = 1",
          "2p + 2q = 1"
        ],
        "correctIndex": 1
      },
      {
        "id": "al-bio-exam-7b",
        "label": "b)",
        "prompt": "Calculate the percentage of heterozygous carriers (2pq) in this population to 2 decimal places.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "q = √0.000625 = 0.025. p = 1 − 0.025 = 0.975. Carrier frequency 2pq = 2 × 0.975 × 0.025 = 0.04875 = 4.88%.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "q = 0.025 and p = 0.975",
              "requiredKeywordGroups": [
                [
                  "0.025"
                ],
                [
                  "0.975"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "2pq = 0.04875",
              "requiredKeywordGroups": [
                [
                  "0.048",
                  "4.88",
                  "4.875"
                ]
              ]
            },
            {
              "id": "mp3",
              "markDescription": "4.88%",
              "numericMatch": {
                "value": 4.88,
                "tolerance": 0.05
              }
            }
          ]
        }
      },
      {
        "id": "al-bio-exam-7c",
        "label": "c)",
        "prompt": "State two biological assumptions that must hold for the Hardy-Weinberg principle to remain valid across generations.",
        "kind": "short-answer",
        "marks": 2,
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "Any two from: large population size (no genetic drift), random mating, no mutations, no migration (isolation), and no natural selection.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "No natural selection / no mutation / no migration",
              "requiredKeywordGroups": [
                [
                  "selection",
                  "mutation",
                  "migration",
                  "gene flow",
                  "isolated"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "Random mating / large population size",
              "requiredKeywordGroups": [
                [
                  "random mating",
                  "large population",
                  "no genetic drift"
                ]
              ]
            }
          ]
        }
      }
    ]
  },
  {
    "id": "al-bio-exam-8",
    "subtopicId": "al-bio-8-2",
    "number": 8,
    "stimulus": "A forensics lab isolates a tiny trace of DNA from a crime scene and amplifies a specific VNTR region using 20 cycles of PCR before performing agarose gel electrophoresis.",
    "diagram": "bacterial-cell",
    "parts": [
      {
        "id": "al-bio-exam-8a",
        "label": "a)",
        "prompt": "At what temperature does the denaturation (strand-separation) stage of PCR take place?",
        "kind": "mcq",
        "marks": 1,
        "options": [
          "37 °C",
          "55 °C",
          "72 °C",
          "95 °C"
        ],
        "correctIndex": 3
      },
      {
        "id": "al-bio-exam-8b",
        "label": "b)",
        "prompt": "Explain why Taq polymerase is used in PCR instead of human DNA polymerase, and state the role of primers.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Taq polymerase is thermostable so it does not denature during the 95°C strand-separation stage. Short single-stranded primers anneal to complementary flanking sequences to provide a starting point for Taq polymerase and prevent template strands re-annealing.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Taq polymerase is thermostable / does not denature at 95°C",
              "requiredKeywordGroups": [
                [
                  "thermostable",
                  "denature",
                  "95"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "Primers provide a complementary binding / starting point for DNA polymerase",
              "requiredKeywordGroups": [
                [
                  "primer"
                ],
                [
                  "start",
                  "attach",
                  "bind",
                  "polymerase"
                ]
              ]
            },
            {
              "id": "mp3",
              "markDescription": "Primers prevent single DNA strands from re-joining / specify target region",
              "requiredKeywordGroups": [
                [
                  "re-anneal",
                  "rejoin",
                  "target",
                  "specific"
                ]
              ]
            }
          ]
        }
      },
      {
        "id": "al-bio-exam-8c",
        "label": "c)",
        "prompt": "Explain how agarose gel electrophoresis and labelled DNA probes produce a visible VNTR banding pattern.",
        "kind": "short-answer",
        "marks": 2,
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "Negatively charged DNA fragments migrate towards the positive anode through the agarose gel, with smaller VNTR fragments moving faster and further. Single-stranded radioactive or fluorescent DNA probes hybridise complementarily to the transferred VNTR bands to reveal the profile.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Negatively charged DNA moves to positive anode; smaller fragments travel faster",
              "requiredKeywordGroups": [
                [
                  "smaller",
                  "shorter",
                  "positive",
                  "anode"
                ],
                [
                  "faster",
                  "further"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "Labelled single-stranded DNA probes hybridise complementarily to VNTR sequences",
              "requiredKeywordGroups": [
                [
                  "probe"
                ],
                [
                  "hybridis",
                  "complementary",
                  "fluorescent",
                  "radioactive"
                ]
              ]
            }
          ]
        }
      }
    ]
  },
  {
    "id": "al-bio-ex-1-1",
    "subtopicId": "al-bio-1-1",
    "number": 9,
    "stimulus": "[AQA 7402 / OCR H420 Style] Both starch and cellulose are polysaccharides made exclusively of glucose monomers, yet they serve completely different biological roles.",
    "parts": [
      {
        "id": "p1",
        "label": "(a)",
        "prompt": "Compare the monomer, bonding, and 3D structure of starch (amylose) and cellulose, linking each feature to its function.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Starch is made of α-glucose joined by 1,4 (and 1,6) glycosidic bonds forming a coiled helix (compact energy store) with branches for rapid hydrolysis. Cellulose is made of β-glucose with alternate monomers inverted 180° forming straight chains held by hydrogen bonds into strong microfibrils for cell wall support.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Starch = α-glucose (coiled/helical/compact)",
              "requiredKeywordGroups": [
                [
                  "alpha",
                  "α-glucose"
                ],
                [
                  "helix",
                  "helical",
                  "coil",
                  "compact"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "Cellulose = β-glucose (straight/unbranched chains)",
              "requiredKeywordGroups": [
                [
                  "beta",
                  "β-glucose"
                ],
                [
                  "straight",
                  "unbranched",
                  "180"
                ]
              ]
            },
            {
              "id": "mp3",
              "markDescription": "Hydrogen bonds form cellulose microfibrils for strength",
              "requiredKeywordGroups": [
                [
                  "hydrogen bond"
                ],
                [
                  "microfibril",
                  "strength",
                  "support"
                ]
              ]
            }
          ]
        }
      }
    ]
  },
  {
    "id": "al-bio-ex-2-2",
    "subtopicId": "al-bio-2-2",
    "number": 10,
    "stimulus": "[AQA 7402 / OCR H420 Style] Glucose is absorbed from the lumen of the ileum into epithelial cells even when the glucose concentration inside the cell exceeds that in the gut lumen.",
    "parts": [
      {
        "id": "p1",
        "label": "(a)",
        "prompt": "Describe the three-step co-transport mechanism that moves glucose from the ileum lumen into the blood capillary.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "1. Na⁺ ions are actively transported out of the epithelial cell into the blood by a Na⁺/K⁺ pump, lowering intracellular [Na⁺]. 2. Na⁺ ions diffuse down their concentration gradient from the lumen into the cell via a co-transporter protein, carrying glucose against its gradient. 3. Glucose moves from the epithelial cell into the blood by facilitated diffusion.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Active transport of Na⁺ out of epithelial cell into blood",
              "requiredKeywordGroups": [
                [
                  "active transport",
                  "pump"
                ],
                [
                  "na+",
                  "sodium"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "Na⁺ and glucose enter cell together via co-transporter down Na⁺ gradient",
              "requiredKeywordGroups": [
                [
                  "co-transport",
                  "cotransport"
                ],
                [
                  "gradient"
                ]
              ]
            },
            {
              "id": "mp3",
              "markDescription": "Glucose exits cell into blood by facilitated diffusion",
              "requiredKeywordGroups": [
                [
                  "facilitated diffusion"
                ]
              ]
            }
          ]
        }
      }
    ]
  },
  {
    "id": "al-bio-ex-3-1",
    "subtopicId": "al-bio-3-1",
    "number": 11,
    "stimulus": "[AQA 7402 / OCR H420 Style] Emphysema destroys elastic tissue in alveolar walls and causes alveoli to merge into larger air spaces.",
    "parts": [
      {
        "id": "p1",
        "label": "(a)",
        "prompt": "Explain how BOTH reduced surface area and loss of elastic recoil reduce oxygen uptake into the blood in a patient with emphysema.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Merged alveoli dramatically reduce total surface area for diffusion (lowering Fick’s law rate). Loss of elastic tissue prevents alveoli recoiling fully during exhalation, leaving stale air in the lungs and reducing the O₂ concentration gradient between alveoli and capillary blood.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Smaller surface area reduces rate of diffusion",
              "requiredKeywordGroups": [
                [
                  "surface area"
                ],
                [
                  "diffusion"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "Reduced elastic recoil impairs exhalation / traps stale air",
              "requiredKeywordGroups": [
                [
                  "recoil",
                  "exhal",
                  "expel",
                  "ventilation"
                ]
              ]
            },
            {
              "id": "mp3",
              "markDescription": "Shallower O₂ concentration gradient across alveolar epithelium",
              "requiredKeywordGroups": [
                [
                  "gradient"
                ]
              ]
            }
          ]
        }
      }
    ]
  },
  {
    "id": "al-bio-ex-4-2",
    "subtopicId": "al-bio-4-2",
    "number": 12,
    "stimulus": "[AQA 7402 / OCR H420 Style] A bacterial population is exposed repeatedly to the antibiotic penicillin over several weeks, and eventually most surviving bacteria are penicillin-resistant.",
    "parts": [
      {
        "id": "p1",
        "label": "(a)",
        "prompt": "Explain how penicillin resistance evolves in the bacterial population using the principles of directional natural selection.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "A random mutation in a bacterium creates an allele conferring penicillin resistance (pre-existing variation). Penicillin acts as a selection pressure: resistant bacteria survive and reproduce by binary fission while non-resistant die, passing the resistant allele to offspring so its allele frequency increases over generations.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Random mutation creates resistant allele (NOT caused by antibiotic)",
              "requiredKeywordGroups": [
                [
                  "mutation"
                ],
                [
                  "allele",
                  "gene"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "Resistant bacteria survive selection pressure and reproduce",
              "requiredKeywordGroups": [
                [
                  "survive"
                ],
                [
                  "reproduce",
                  "divide",
                  "binary fission"
                ]
              ]
            },
            {
              "id": "mp3",
              "markDescription": "Pass resistant allele to offspring → allele frequency increases",
              "requiredKeywordGroups": [
                [
                  "allele frequency",
                  "frequency"
                ],
                [
                  "increase",
                  "higher",
                  "more common"
                ]
              ]
            }
          ]
        }
      }
    ]
  },
  {
    "id": "al-bio-ex-5-2",
    "subtopicId": "al-bio-5-2",
    "number": 13,
    "stimulus": "[AQA 7402 / OCR H420 Style] DNP (2,4-dinitrophenol) makes the inner mitochondrial membrane leaky to protons (H⁺ ions).",
    "parts": [
      {
        "id": "p1",
        "label": "(a)",
        "prompt": "Explain how DNP affects ATP production during oxidative phosphorylation and why a person exposed to DNP experiences dangerously high body temperature.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "H⁺ ions leak back into the matrix across the membrane without passing through ATP synthase, collapsing the proton gradient so far less ATP is synthesised. Because energy from the electron transport chain is not captured in ATP, it is dissipated as heat (and respiration speeds up trying to replace ATP), raising body temperature.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "H⁺ leaks back bypassing ATP synthase / collapses proton gradient",
              "requiredKeywordGroups": [
                [
                  "proton gradient",
                  "h+ gradient",
                  "electrochemical gradient",
                  "bypass"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "Less ATP synthesised by ATP synthase",
              "requiredKeywordGroups": [
                [
                  "less atp",
                  "atp synthase",
                  "reduced atp"
                ]
              ]
            },
            {
              "id": "mp3",
              "markDescription": "Energy released as heat raises body temperature",
              "requiredKeywordGroups": [
                [
                  "heat",
                  "thermal"
                ]
              ]
            }
          ]
        }
      }
    ]
  },
  {
    "id": "al-bio-ex-6-2",
    "subtopicId": "al-bio-6-2",
    "number": 14,
    "stimulus": "[AQA 7402 / OCR H420 Style] After running a marathon in hot weather without drinking enough water, a runner’s blood water potential falls.",
    "parts": [
      {
        "id": "p1",
        "label": "(a)",
        "prompt": "Explain how the hypothalamus, posterior pituitary, and collecting duct restore the runner’s blood water potential.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Osmoreceptors in the hypothalamus lose water by osmosis and shrink, stimulating neurosecretory cells so the posterior pituitary releases more ADH into the blood. ADH binds receptors on collecting duct cells, stimulating fusion of vesicles carrying aquaporins into the luminal membrane, increasing water reabsorption by osmosis into the blood.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Hypothalamus osmoreceptors detect low blood ψ",
              "requiredKeywordGroups": [
                [
                  "osmoreceptor"
                ],
                [
                  "hypothalamus"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "Posterior pituitary releases more ADH",
              "requiredKeywordGroups": [
                [
                  "pituitary"
                ],
                [
                  "adh"
                ]
              ]
            },
            {
              "id": "mp3",
              "markDescription": "Aquaporins inserted into collecting duct → more water reabsorbed by osmosis",
              "requiredKeywordGroups": [
                [
                  "aquaporin",
                  "permeability"
                ],
                [
                  "osmosis",
                  "reabsorb"
                ]
              ]
            }
          ]
        }
      }
    ]
  },
  {
    "id": "al-bio-ex-7-2",
    "subtopicId": "al-bio-7-2",
    "number": 15,
    "stimulus": "[AQA 7402 / OCR H420 Style] Rising sea levels split a single island population of lizards into two separate islands with very different vegetation and predators.",
    "parts": [
      {
        "id": "p1",
        "label": "(a)",
        "prompt": "Explain how allopatric speciation could eventually produce two distinct lizard species.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "The sea forms a geographical barrier preventing gene flow (interbreeding) between the two islands. Different mutations arise and different selection pressures favour different advantageous alleles on each island, causing allele frequencies to diverge until the two populations become reproductively isolated and can no longer interbreed to produce fertile offspring.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Geographical isolation prevents gene flow / interbreeding",
              "requiredKeywordGroups": [
                [
                  "geographical",
                  "barrier"
                ],
                [
                  "gene flow",
                  "interbreed"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "Different mutations and selection pressures change allele frequencies",
              "requiredKeywordGroups": [
                [
                  "selection pressure"
                ],
                [
                  "allele frequency",
                  "alleles"
                ]
              ]
            },
            {
              "id": "mp3",
              "markDescription": "Reproductively isolated — cannot produce fertile offspring",
              "requiredKeywordGroups": [
                [
                  "fertile offspring",
                  "reproductive"
                ]
              ]
            }
          ]
        }
      }
    ]
  },
  {
    "id": "al-bio-ex-8-1",
    "subtopicId": "al-bio-8-1",
    "number": 16,
    "stimulus": "[AQA 7402 / OCR H420 Style] Oestrogen is a lipid-soluble steroid hormone linked to certain breast cancers.",
    "parts": [
      {
        "id": "p1",
        "label": "(a)",
        "prompt": "Explain how oestrogen stimulates transcription of target genes inside a cell.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Being lipid-soluble, oestrogen diffuses across the phospholipid bilayer and binds to a complementary receptor on a transcriptional factor, changing its shape and releasing an inhibitor molecule. The oestrogen–receptor complex enters the nucleus and binds to a specific promoter region on DNA, stimulating RNA polymerase to transcribe the target gene.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Diffuses through membrane and binds complementary receptor",
              "requiredKeywordGroups": [
                [
                  "diffuse",
                  "lipid"
                ],
                [
                  "receptor"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "Changes shape / releases inhibitor to activate transcription factor",
              "requiredKeywordGroups": [
                [
                  "transcription factor",
                  "inhibitor",
                  "shape"
                ]
              ]
            },
            {
              "id": "mp3",
              "markDescription": "Enters nucleus, binds promoter on DNA, stimulates RNA polymerase",
              "requiredKeywordGroups": [
                [
                  "promoter",
                  "dna"
                ],
                [
                  "rna polymerase",
                  "transcrib"
                ]
              ]
            }
          ]
        }
      }
    ]
  }
];

export const ALEVEL_BIOLOGY_PAST_PAPERS: PastPaperDoc[] = [
  {
    "id": "al-bio-pp-2024-p1",
    "specEra": "new-9-1",
    "year": "2024",
    "title": "A-Level Paper 1 — Topics 1–4 (7402/1)",
    "tier": "A-Level",
    "series": "June 2024",
    "paperCode": "7402/1",
    "durationMinutes": 120,
    "totalMarks": 91,
    "insertNote": "Assesses Topics 1–4 (Biological Molecules, Cells, Exchange & Genetic Information) plus Required Practicals 1–6.",
    "sampleQuestions": [
      {
        "number": "01.1",
        "question": "Relate the structure of cellulose to its function as a major component of plant cell walls.",
        "marks": 3,
        "markScheme": [
          "Long straight unbranched chains of β-glucose linked by β-1,4 glycosidic bonds; alternate monomers inverted 180°; chains cross-linked by numerous hydrogen bonds forming high-tensile-strength microfibrils preventing osmotic lysis."
        ]
      },
      {
        "number": "02.2",
        "question": "Explain how the countercurrent exchange mechanism maintains efficient gas exchange across fish gill lamellae.",
        "marks": 3,
        "markScheme": [
          "Water and blood flow in opposite directions; blood always meets water with a higher oxygen concentration; maintains a concentration/diffusion gradient across the entire length of the gill lamella."
        ]
      },
      {
        "number": "03.4",
        "question": "Describe how an indirect ELISA test detects antibodies to HIV in a patient’s serum.",
        "marks": 4,
        "markScheme": [
          "HIV antigen bound to well floor; patient serum added so specific antibodies bind; wash to remove unbound antibody; add enzyme-linked secondary antibody and wash again; add colourless substrate which turns coloured if HIV antibodies are present."
        ]
      },
      {
        "number": "04.2",
        "question": "Calculate Simpson’s Index of Diversity d = N(N − 1) ÷ Σn(n − 1) for a woodland plot with 3 species of counts 12, 8, and 5.",
        "marks": 2,
        "markScheme": [
          "N = 25, N(N−1) = 600; Σn(n−1) = 132 + 56 + 20 = 208; d = 600 ÷ 208 = 2.88."
        ]
      }
    ]
  },
  {
    "id": "al-bio-pp-2024-p2",
    "specEra": "new-9-1",
    "year": "2024",
    "title": "A-Level Paper 2 — Topics 5–8 (7402/2)",
    "tier": "A-Level",
    "series": "June 2024",
    "paperCode": "7402/2",
    "durationMinutes": 120,
    "totalMarks": 91,
    "insertNote": "Assesses Topics 5–8 (Energy Transfers, Homeostasis, Genetics/Ecosystems & Gene Expression) + statistical tables (χ², t-test, Spearman).",
    "sampleQuestions": [
      {
        "number": "01.2",
        "question": "Explain how photoionisation and chemiosmosis generate ATP on the thylakoid membrane.",
        "marks": 4,
        "markScheme": [
          "Light excites electrons in chlorophyll (photoionisation); electrons pass down ETC releasing energy to pump H⁺ into thylakoid lumen; proton gradient drives H⁺ diffusion through ATP synthase (chemiosmosis) forming ATP from ADP + Pᵢ."
        ]
      },
      {
        "number": "03.1",
        "question": "Describe the role of the Loop of Henle in maintaining a water potential gradient in the renal medulla.",
        "marks": 4,
        "markScheme": [
          "Ascending limb actively transports Na⁺ and Cl⁻ out into medulla (impermeable to water); lowers water potential of medulla interstitial fluid; water leaves permeable descending limb by osmosis concentrating filtrate toward apex; countercurrent multiplier deepens gradient down medulla."
        ]
      },
      {
        "number": "05.3",
        "question": "Explain how hypermethylation of a tumour suppressor gene can cause malignant tumour formation.",
        "marks": 3,
        "markScheme": [
          "Methyl groups added to CpG cytosine bases in promoter; prevents transcription factors/RNA polymerase binding; gene silenced so tumour suppressor protein not made, removing inhibition of mitosis."
        ]
      },
      {
        "number": "06.2",
        "question": "Explain why conversion of pyruvate to lactate is necessary for glycolysis to continue under anaerobic conditions.",
        "marks": 2,
        "markScheme": [
          "Pyruvate accepts hydrogen from reduced NAD; regenerates oxidised NAD required for triose phosphate oxidation in glycolysis."
        ]
      }
    ]
  },
  {
    "id": "al-bio-pp-2024-p3",
    "specEra": "new-9-1",
    "year": "2024",
    "title": "A-Level Paper 3 — Synoptic Data & Essay (7402/3)",
    "tier": "A-Level",
    "series": "June 2024",
    "paperCode": "7402/3",
    "durationMinutes": 120,
    "totalMarks": 78,
    "insertNote": "Critical analysis of experimental data (38 marks), structured synoptic questions across Topics 1–8 (15 marks), and 25-mark synoptic essay.",
    "sampleQuestions": [
      {
        "number": "01.3",
        "question": "Explain why the student used a logarithmic scale when plotting bacterial cell counts over 48 hours.",
        "marks": 2,
        "markScheme": [
          "Numbers span several orders of magnitude; logarithmic scale allows small initial numbers and huge final numbers to be plotted clearly on the same axes."
        ]
      },
      {
        "number": "03.2",
        "question": "Evaluate the conclusion that Drug Z significantly lowers blood pressure using the error bars (+/- 2 SD) shown in Figure 2.",
        "marks": 3,
        "markScheme": [
          "Standard deviation error bars overlap between 0 and 4 weeks (difference not significant); no overlap at 8 weeks showing statistically significant reduction; sample size (n = 12) is small and lacks a placebo control group."
        ]
      },
      {
        "number": "05.1",
        "question": "Explain how cardiac output is increased during exercise by autonomic nervous control.",
        "marks": 3,
        "markScheme": [
          "Chemoreceptors detect lower blood pH from high CO₂; medulla cardioacceleratory centre sends more impulses along sympathetic nerve to SAN; SAN increases firing rate raising heart rate."
        ]
      },
      {
        "number": "07.1",
        "question": "Synoptic Essay (25 marks): The importance of hydrogen bonds in living organisms.",
        "marks": 25,
        "markScheme": [
          "Links cellulose microfibrils, water cohesion-tension in xylem, protein secondary/tertiary folding, DNA double helix stability & semi-conservative unwinding, tRNA cloverleaf & codon-anticodon pairing, and PCR thermal denaturation."
        ]
      }
    ]
  },
  {
    "id": "al-bio-pp-2023-p1",
    "specEra": "new-9-1",
    "year": "2023",
    "title": "A-Level Paper 1 — Topics 1–4 (7402/1)",
    "tier": "A-Level",
    "series": "June 2023",
    "paperCode": "7402/1",
    "durationMinutes": 120,
    "totalMarks": 91,
    "insertNote": "Assesses Topics 1–4 with graticule magnification insert and enzyme kinetics data table.",
    "sampleQuestions": [
      {
        "number": "01.2",
        "question": "Describe how you would test a liquid food sample for the presence of a non-reducing sugar such as sucrose.",
        "marks": 3,
        "markScheme": [
          "Confirm negative brick-red result with initial Benedict’s heating; boil new sample with dilute HCl to hydrolyse glycosidic bonds, then neutralise with sodium hydrogencarbonate; reheat with Benedict’s solution to observe brick-red precipitate."
        ]
      },
      {
        "number": "02.3",
        "question": "Explain how Meselson and Stahl’s density-gradient centrifugation after one generation disproved conservative DNA replication.",
        "marks": 2,
        "markScheme": [
          "Produced a single intermediate hybrid density band (¹⁵N/¹⁴N); conservative replication would have produced two separate bands (one heavy ¹⁵N and one light ¹⁴N)."
        ]
      },
      {
        "number": "04.1",
        "question": "Describe how sodium-glucose co-transport absorbs glucose from the ileum lumen into blood capillaries.",
        "marks": 4,
        "markScheme": [
          "Na⁺ actively pumped out of epithelial cell into blood by Na⁺/K⁺ ATPase; establishes low intracellular [Na⁺]; Na⁺ diffuses down gradient from lumen via co-transporter dragging glucose against its gradient; glucose enters capillary by facilitated diffusion."
        ]
      },
      {
        "number": "06.1",
        "question": "Explain how crossing over and independent segregation during meiosis produce genetically distinct gametes.",
        "marks": 3,
        "markScheme": [
          "Crossing over exchanges alleles between non-sister chromatids at chiasmata in Prophase I; independent segregation randomly aligns maternal and paternal homologous chromosomes at Metaphase I (2ⁿ combinations)."
        ]
      }
    ]
  },
  {
    "id": "al-bio-pp-2023-p2",
    "specEra": "new-9-1",
    "year": "2023",
    "title": "A-Level Paper 2 — Topics 5–8 (7402/2)",
    "tier": "A-Level",
    "series": "June 2023",
    "paperCode": "7402/2",
    "durationMinutes": 120,
    "totalMarks": 91,
    "insertNote": "Assesses Topics 5–8 with chi-squared critical values table and respirometer practical diagram.",
    "sampleQuestions": [
      {
        "number": "02.1",
        "question": "Explain the role of potassium hydroxide solution in a respirometer measuring oxygen uptake by germinating seeds.",
        "marks": 2,
        "markScheme": [
          "Absorbs carbon dioxide released by aerobic respiration; ensures decrease in gas volume/pressure is caused solely by oxygen consumption."
        ]
      },
      {
        "number": "03.3",
        "question": "Explain how calcium ions and ATP cause myofibril contraction according to the sliding filament model.",
        "marks": 4,
        "markScheme": [
          "Ca²⁺ binds troponin causing tropomyosin to move and expose myosin-binding sites on actin; myosin heads bind forming cross-bridges and perform power stroke releasing ADP + Pᵢ; ATP binds myosin head to break cross-bridge and hydrolyses to recock head."
        ]
      },
      {
        "number": "05.2",
        "question": "Explain how allopatric speciation leads to the evolution of two distinct species from one ancestral population.",
        "marks": 4,
        "markScheme": [
          "Geographical barrier separates population preventing gene flow; different environmental selection pressures in each habitat; different advantageous mutations selected altering allele frequencies; reproductive isolation prevents fertile interbreeding."
        ]
      },
      {
        "number": "07.1",
        "question": "Explain why cDNA synthesised using reverse transcriptase is preferred over genomic DNA when cloning human insulin into bacteria.",
        "marks": 2,
        "markScheme": [
          "Mature mRNA has already had introns removed by splicing; bacteria lack spliceosomes to excise eukaryotic introns from genomic DNA."
        ]
      }
    ]
  },
  {
    "id": "al-bio-pp-2023-p3",
    "specEra": "new-9-1",
    "year": "2023",
    "title": "A-Level Paper 3 — Synoptic Data & Essay (7402/3)",
    "tier": "A-Level",
    "series": "June 2023",
    "paperCode": "7402/3",
    "durationMinutes": 120,
    "totalMarks": 78,
    "insertNote": "Includes Required Practical 12 ecology transect analysis and 25-mark synoptic essay.",
    "sampleQuestions": [
      {
        "number": "02.1",
        "question": "Describe how a student would use a belt transect to investigate plant succession across a sand dune system.",
        "marks": 3,
        "markScheme": [
          "Lay tape measure in a straight line perpendicular to shoreline across dune seral stages; place quadrats at regular intervals along tape; record percentage cover or frequency of each plant species and abiotic soil moisture/pH."
        ]
      },
      {
        "number": "04.2",
        "question": "Explain how oestrogen stimulates transcription of a target gene inside a human breast tissue cell.",
        "marks": 3,
        "markScheme": [
          "Lipid-soluble oestrogen diffuses through phospholipid bilayer; binds complementary receptor on cytoplasmic transcription factor altering its tertiary shape; complex enters nucleus and binds DNA promoter, stimulating RNA polymerase."
        ]
      },
      {
        "number": "05.3",
        "question": "Explain why the refractory period ensures action potentials travel in one direction only along an axon.",
        "marks": 2,
        "markScheme": [
          "Voltage-gated Na⁺ channels in the region just behind the impulse are inactivated; local currents can only depolarise the resting membrane ahead of the impulse to threshold."
        ]
      },
      {
        "number": "07.1",
        "question": "Synoptic Essay (25 marks): The importance of diffusion and active transport in organisms.",
        "marks": 25,
        "markScheme": [
          "Links alveolar/gill gas exchange, ileum sodium-glucose co-transport, phloem mass-flow active loading, chemiosmotic proton pumping in chloroplasts/mitochondria, action potential Na⁺/K⁺ pumps, and Loop of Henle countercurrent multiplier."
        ]
      }
    ]
  },
  {
    "id": "al-bio-pp-2022-p1",
    "specEra": "new-9-1",
    "year": "2022",
    "title": "A-Level Paper 1 — Topics 1–4 (7402/1)",
    "tier": "A-Level",
    "series": "June 2022",
    "paperCode": "7402/1",
    "durationMinutes": 120,
    "totalMarks": 91,
    "insertNote": "Assesses Topics 1–4 including water potential calibration curve and cardiac cycle pressure trace.",
    "sampleQuestions": [
      {
        "number": "01.3",
        "question": "Explain how a change in the primary structure of an enzyme can prevent it from catalysing its reaction.",
        "marks": 3,
        "markScheme": [
          "Altered amino acid sequence changes positions of R-groups; hydrogen, ionic, and disulphide bonds form in different places altering 3D tertiary structure; active site changes shape so substrate is no longer complementary (no ES complexes)."
        ]
      },
      {
        "number": "03.1",
        "question": "Use the cardiac cycle pressure graph to explain when and why the semilunar valve opens and closes.",
        "marks": 2,
        "markScheme": [
          "Opens when ventricular pressure rises above aortic pressure during ventricular systole; closes when ventricular pressure falls below aortic pressure at start of diastole."
        ]
      },
      {
        "number": "04.3",
        "question": "Explain how tissue fluid is formed at the arteriole end of a capillary bed and reabsorbed at the venule end.",
        "marks": 4,
        "markScheme": [
          "High hydrostatic pressure at arteriole end forces water and small solutes out through capillary fenestrations; large plasma proteins remain in blood lowering its water potential; at venule end hydrostatic pressure falls so water returns by osmosis down water potential gradient."
        ]
      },
      {
        "number": "05.2",
        "question": "Explain how the Münch mass flow hypothesis accounts for translocation of sucrose from leaves to roots.",
        "marks": 4,
        "markScheme": [
          "Sucrose actively loaded into sieve tubes at source using H⁺ co-transport; lowers sieve tube water potential so water enters from xylem by osmosis; creates high hydrostatic pressure forcing sap towards sink where sucrose is unloaded for respiration/starch synthesis."
        ]
      }
    ]
  },
  {
    "id": "al-bio-pp-2022-p2",
    "specEra": "new-9-1",
    "year": "2022",
    "title": "A-Level Paper 2 — Topics 5–8 (7402/2)",
    "tier": "A-Level",
    "series": "June 2022",
    "paperCode": "7402/2",
    "durationMinutes": 120,
    "totalMarks": 91,
    "insertNote": "Assesses Topics 5–8 with epistasis pedigree analysis and PCR electrophoresis gel.",
    "sampleQuestions": [
      {
        "number": "01.4",
        "question": "Explain why the net ATP yield from aerobic respiration is rarely the theoretical maximum of 38 ATP per glucose.",
        "marks": 2,
        "markScheme": [
          "Some protons leak across the inner mitochondrial membrane bypassing ATP synthase; ATP is consumed actively transporting pyruvate and ADP into the mitochondria."
        ]
      },
      {
        "number": "03.2",
        "question": "Describe how ADH restores normal blood water potential after heavy sweating.",
        "marks": 4,
        "markScheme": [
          "Hypothalamic osmoreceptors shrink and stimulate posterior pituitary to release more ADH; ADH binds collecting duct receptors triggering fusion of aquaporin-containing vesicles with cell membrane; more water reabsorbed by osmosis into hypertonic medulla and blood."
        ]
      },
      {
        "number": "05.1",
        "question": "In sweet peas, flower colour is controlled by two genes showing complementary epistasis (9 purple : 7 white). Explain how a 9:7 ratio arises from an AaBb × AaBb cross.",
        "marks": 3,
        "markScheme": [
          "Both dominant alleles A and B are required in a two-step biochemical pathway to synthesise purple anthocyanin pigment; any genotype homozygous recessive for either aa or bb lacks a functional enzyme and remains white (9 A_B_ : 7 others)."
        ]
      },
      {
        "number": "06.3",
        "question": "Explain why primers are essential in the Polymerase Chain Reaction (PCR).",
        "marks": 2,
        "markScheme": [
          "DNA polymerase can only attach nucleotides to an existing 3′-OH end; primers flank the target sequence and prevent single template strands from re-annealing together."
        ]
      }
    ]
  },
  {
    "id": "al-bio-pp-2022-p3",
    "specEra": "new-9-1",
    "year": "2022",
    "title": "A-Level Paper 3 — Synoptic Data & Essay (7402/3)",
    "tier": "A-Level",
    "series": "June 2022",
    "paperCode": "7402/3",
    "durationMinutes": 120,
    "totalMarks": 78,
    "insertNote": "Synoptic data interpretation, practical evaluation, and 25-mark synoptic essay.",
    "sampleQuestions": [
      {
        "number": "01.2",
        "question": "Explain why a colorimeter fitted with a red filter is used when measuring Benedict’s test calibration standards.",
        "marks": 2,
        "markScheme": [
          "Blue copper(II) sulfate absorbs red light most strongly; absorbance of red light is directly proportional to remaining blue Cu²⁺ concentration."
        ]
      },
      {
        "number": "03.1",
        "question": "Explain how induced pluripotent stem (iPS) cells are produced and give one ethical advantage over embryonic stem cells.",
        "marks": 2,
        "markScheme": [
          "Adult somatic cells are reprogrammed by introducing specific transcription factor genes; avoids destruction of human embryos and allows autologous transplantation without rejection."
        ]
      },
      {
        "number": "04.3",
        "question": "Explain how conservation grazing maintains high biodiversity on chalk grassland.",
        "marks": 2,
        "markScheme": [
          "Arrests ecological succession (maintains plagioclimax) by preventing shrub and tree saplings outcompeting low-growing wildflower species."
        ]
      },
      {
        "number": "07.1",
        "question": "Synoptic Essay (25 marks): The importance of receptors in living organisms.",
        "marks": 25,
        "markScheme": [
          "Links Pacinian corpuscles, osmoreceptors & ADH receptors, postsynaptic ACh receptors, insulin/glucagon receptors, T-helper/B-cell antigen receptors, and intracellular oestrogen transcription factor receptors."
        ]
      }
    ]
  },
  {
    "id": "al-bio-pp-cie-9700",
    "specEra": "new-9-1",
    "year": "2024",
    "title": "CIE International A-Level Paper 4 (9700/42)",
    "tier": "A-Level",
    "series": "May/June 2024",
    "paperCode": "9700/42",
    "durationMinutes": 120,
    "totalMarks": 100,
    "insertNote": "Cambridge International A-Level structured questions covering Respiration, Photosynthesis, Homeostasis, Inheritance & Gene Technology.",
    "sampleQuestions": [
      {
        "number": "01.1",
        "question": "Outline the mechanism of oxidative phosphorylation on the inner mitochondrial membrane.",
        "marks": 5,
        "markScheme": [
          "NADH/FADH₂ oxidised releasing H atoms splitting into H⁺ and e⁻; electrons pass along ETC releasing energy; energy pumps H⁺ into intermembrane space creating proton electrochemical gradient; H⁺ diffuses back through ATP synthase (chemiosmosis) forming ATP; O₂ acts as terminal electron acceptor forming H₂O."
        ]
      },
      {
        "number": "03.2",
        "question": "Explain how gibberellin and DELLA proteins regulate amylase synthesis in germinating barley seeds.",
        "marks": 3,
        "markScheme": [
          "Gibberellin binds receptor promoting breakdown of inhibitory DELLA proteins; releases PIF transcription factor to bind amylase gene promoter and activate transcription."
        ]
      },
      {
        "number": "05.1",
        "question": "Explain how recombinant human insulin is synthesised in genetically modified Escherichia coli.",
        "marks": 4,
        "markScheme": [
          "mRNA isolated from pancreatic β-cells converted to cDNA via reverse transcriptase; cut plasmid and insert with restriction endonuclease and join with DNA ligase; transform bacteria using Ca²⁺ heat-shock and identify recombinants using marker genes."
        ]
      },
      {
        "number": "07.2",
        "question": "Compare the roles of the sarcoplasmic reticulum and T-tubules in skeletal muscle contraction.",
        "marks": 2,
        "markScheme": [
          "T-tubules conduct action potential depolarisation deep into muscle fibre; triggers voltage-gated Ca²⁺ channels in sarcoplasmic reticulum to release Ca²⁺ into sarcoplasm."
        ]
      }
    ]
  },
  {
    "id": "al-bio-pp-2019-old",
    "specEra": "old",
    "year": "2019",
    "title": "Legacy Unit BIOL1 & BIOL4 Combined Archive (2410)",
    "tier": "A-Level",
    "series": "June 2019",
    "paperCode": "2410/BIOL",
    "durationMinutes": 105,
    "totalMarks": 85,
    "insertNote": "Legacy specification archive paper useful for drilling foundational A-Level biochemistry, immunology, and bioenergetics.",
    "sampleQuestions": [
      {
        "number": "01.1",
        "question": "Explain why starch and glycogen are well suited as energy storage polysaccharides in plant and animal cells.",
        "marks": 4,
        "markScheme": [
          "Insoluble so do not lower cell water potential; coiled helical chains make them compact; branched (amylopectin/glycogen) providing many terminal ends for rapid hydrolysis to α-glucose."
        ]
      },
      {
        "number": "02.2",
        "question": "Explain how vaccination produces long-term active immunity against a viral pathogen.",
        "marks": 4,
        "markScheme": [
          "Antigens presented by APCs activate specific T-helper and B-lymphocytes; B-cells undergo clonal selection and mitosis; memory B and T cells persist in blood; rapid secondary antibody response destroys pathogen before symptoms develop."
        ]
      },
      {
        "number": "04.1",
        "question": "Explain why applying nitrogen fertiliser above an optimum concentration can cause crop wilting.",
        "marks": 2,
        "markScheme": [
          "Excess soluble nitrate ions make soil water potential more negative than root hair cell cytoplasm; water moves out of root cells by osmosis causing plasmolysis."
        ]
      },
      {
        "number": "05.2",
        "question": "Describe the role of acetylcholinesterase at a cholinergic synapse.",
        "marks": 2,
        "markScheme": [
          "Hydrolyses acetylcholine into choline and ethanoic acid in synaptic cleft; stops continuous generation of postsynaptic action potentials and allows recycling."
        ]
      }
    ]
  }
];

export const ALEVEL_BIOLOGY_KEY_TERMS: KeyTermEntry[] = [
  {
    "id": "al-bio-kt-1",
    "term": "Acetyl CoA",
    "definition": "2-carbon acetyl group attached to Coenzyme A formed in the link reaction and fed into the Krebs cycle.",
    "topicNumber": 5,
    "subtopicId": "al-bio-5-2",
    "subtopicCode": "5.2"
  },
  {
    "id": "al-bio-kt-2",
    "term": "Acetylcholinesterase",
    "definition": "Synaptic enzyme that hydrolyses acetylcholine into choline and ethanoic acid to terminate stimulation.",
    "topicNumber": 6,
    "subtopicId": "al-bio-6-1",
    "subtopicCode": "6.1"
  },
  {
    "id": "al-bio-kt-3",
    "term": "Allopatric speciation",
    "definition": "Evolution of new species following geographical separation that blocks gene flow.",
    "topicNumber": 7,
    "subtopicId": "al-bio-7-2",
    "subtopicCode": "7.2"
  },
  {
    "id": "al-bio-kt-4",
    "term": "Allosteric site",
    "definition": "Regulatory binding region on an enzyme separate from the active site where non-competitive inhibitors bind.",
    "topicNumber": 1,
    "subtopicId": "al-bio-1-2",
    "subtopicCode": "1.2"
  },
  {
    "id": "al-bio-kt-5",
    "term": "Aquaporin",
    "definition": "Water-channel protein inserted into collecting duct membranes under ADH stimulation to boost osmosis.",
    "topicNumber": 6,
    "subtopicId": "al-bio-6-2",
    "subtopicCode": "6.2"
  },
  {
    "id": "al-bio-kt-6",
    "term": "Autosomal linkage",
    "definition": "Co-inheritance of genes located on the same non-sex chromosome unless separated by crossing over.",
    "topicNumber": 7,
    "subtopicId": "al-bio-7-1",
    "subtopicCode": "7.1"
  },
  {
    "id": "al-bio-kt-7",
    "term": "Bohr effect",
    "definition": "Rightward shift of the oxyhaemoglobin dissociation curve at elevated pCO₂/low pH, promoting O₂ unloading.",
    "topicNumber": 3,
    "subtopicId": "al-bio-3-2",
    "subtopicCode": "3.2"
  },
  {
    "id": "al-bio-kt-8",
    "term": "Cell fractionation",
    "definition": "Isolation of organelles by homogenisation in cold, isotonic, buffered solution and differential ultracentrifugation.",
    "topicNumber": 2,
    "subtopicId": "al-bio-2-1",
    "subtopicCode": "2.1"
  },
  {
    "id": "al-bio-kt-9",
    "term": "Chemiosmosis",
    "definition": "ATP synthesis driven by proton diffusion down an electrochemical gradient through ATP synthase.",
    "topicNumber": 5,
    "subtopicId": "al-bio-5-1",
    "subtopicCode": "5.1"
  },
  {
    "id": "al-bio-kt-10",
    "term": "Chiasmata",
    "definition": "Sites where non-sister chromatids cross over and exchange allele segments during Prophase I of meiosis.",
    "topicNumber": 4,
    "subtopicId": "al-bio-4-2",
    "subtopicCode": "4.2"
  },
  {
    "id": "al-bio-kt-11",
    "term": "Clonal selection",
    "definition": "Specific activation of B or T lymphocytes whose complementary receptors bind a presented antigen.",
    "topicNumber": 2,
    "subtopicId": "al-bio-2-2",
    "subtopicCode": "2.2"
  },
  {
    "id": "al-bio-kt-12",
    "term": "Cohesion-tension",
    "definition": "Transpiration-driven pulling of continuous H-bonded water columns upward through xylem under negative pressure.",
    "topicNumber": 3,
    "subtopicId": "al-bio-3-2",
    "subtopicCode": "3.2"
  },
  {
    "id": "al-bio-kt-13",
    "term": "Countercurrent exchange",
    "definition": "Opposite-direction flow of water and blood across fish gill lamellae maintaining an O₂ gradient along the entire length.",
    "topicNumber": 3,
    "subtopicId": "al-bio-3-1",
    "subtopicCode": "3.1"
  },
  {
    "id": "al-bio-kt-14",
    "term": "Degenerate code",
    "definition": "Feature of the triplet genetic code in which multiple codons encode the same amino acid.",
    "topicNumber": 4,
    "subtopicId": "al-bio-4-1",
    "subtopicCode": "4.1"
  },
  {
    "id": "al-bio-kt-15",
    "term": "Disulphide bridge",
    "definition": "Strong covalent S–S bond between cysteine R-groups stabilising protein tertiary structure.",
    "topicNumber": 1,
    "subtopicId": "al-bio-1-2",
    "subtopicCode": "1.2"
  },
  {
    "id": "al-bio-kt-16",
    "term": "ELISA",
    "definition": "Enzyme-Linked Immunosorbent Assay using antibody-bound enzymes to detect target antigens or antibodies.",
    "topicNumber": 2,
    "subtopicId": "al-bio-2-2",
    "subtopicCode": "2.2"
  },
  {
    "id": "al-bio-kt-17",
    "term": "Epigenetics",
    "definition": "Heritable control of gene transcription via DNA methylation and histone acetylation without changing base sequence.",
    "topicNumber": 8,
    "subtopicId": "al-bio-8-1",
    "subtopicCode": "8.1"
  },
  {
    "id": "al-bio-kt-18",
    "term": "Epistasis",
    "definition": "Interaction where alleles at one locus mask or modify phenotypic expression at a separate locus.",
    "topicNumber": 7,
    "subtopicId": "al-bio-7-1",
    "subtopicCode": "7.1"
  },
  {
    "id": "al-bio-kt-19",
    "term": "Glycosidic bond",
    "definition": "Covalent oxygen linkage joining monosaccharides formed via a condensation reaction.",
    "topicNumber": 1,
    "subtopicId": "al-bio-1-1",
    "subtopicCode": "1.1"
  },
  {
    "id": "al-bio-kt-20",
    "term": "Hardy-Weinberg principle",
    "definition": "Mathematical model (p+q=1, p²+2pq+q²=1) predicting constant allele frequencies in non-evolving populations.",
    "topicNumber": 7,
    "subtopicId": "al-bio-7-1",
    "subtopicCode": "7.1"
  },
  {
    "id": "al-bio-kt-21",
    "term": "Induced-fit model",
    "definition": "Enzyme mechanism where substrate binding induces an active site shape change straining substrate bonds.",
    "topicNumber": 1,
    "subtopicId": "al-bio-1-2",
    "subtopicCode": "1.2"
  },
  {
    "id": "al-bio-kt-22",
    "term": "Intron",
    "definition": "Non-coding nucleotide sequence within eukaryotic pre-mRNA removed by spliceosomes.",
    "topicNumber": 4,
    "subtopicId": "al-bio-4-1",
    "subtopicCode": "4.1"
  },
  {
    "id": "al-bio-kt-23",
    "term": "Microfibril",
    "definition": "High-tensile-strength bundle of parallel β-glucose cellulose chains cross-linked by collective H-bonds.",
    "topicNumber": 1,
    "subtopicId": "al-bio-1-1",
    "subtopicCode": "1.1"
  },
  {
    "id": "al-bio-kt-24",
    "term": "Oxidative phosphorylation",
    "definition": "Mitochondrial ATP production on cristae coupling ETC redox reactions to chemiosmosis with O₂ as final acceptor.",
    "topicNumber": 5,
    "subtopicId": "al-bio-5-2",
    "subtopicCode": "5.2"
  },
  {
    "id": "al-bio-kt-25",
    "term": "PCR",
    "definition": "Polymerase Chain Reaction — in vitro exponential DNA amplification via 95°C/55°C/72°C thermal cycling.",
    "topicNumber": 8,
    "subtopicId": "al-bio-8-2",
    "subtopicCode": "8.2"
  },
  {
    "id": "al-bio-kt-26",
    "term": "Phosphodiester bond",
    "definition": "Covalent bond linking adjacent nucleotides along the sugar-phosphate backbone of DNA and RNA.",
    "topicNumber": 1,
    "subtopicId": "al-bio-1-2",
    "subtopicCode": "1.2"
  },
  {
    "id": "al-bio-kt-27",
    "term": "Plagioclimax",
    "definition": "Arrested ecological succession stage intentionally maintained by grazing, mowing, or controlled burning.",
    "topicNumber": 7,
    "subtopicId": "al-bio-7-2",
    "subtopicCode": "7.2"
  },
  {
    "id": "al-bio-kt-28",
    "term": "Refractory period",
    "definition": "Brief interval after an action potential when Na⁺ channels remain inactivated, ensuring unidirectional discrete impulses.",
    "topicNumber": 6,
    "subtopicId": "al-bio-6-1",
    "subtopicCode": "6.1"
  },
  {
    "id": "al-bio-kt-29",
    "term": "Rubisco",
    "definition": "Chloroplast stromal enzyme catalysing carbon fixation of CO₂ onto 5C RuBP in the Calvin cycle.",
    "topicNumber": 5,
    "subtopicId": "al-bio-5-1",
    "subtopicCode": "5.1"
  },
  {
    "id": "al-bio-kt-30",
    "term": "Saltatory conduction",
    "definition": "High-speed propagation of action potentials jumping between Nodes of Ranvier along myelinated axons.",
    "topicNumber": 6,
    "subtopicId": "al-bio-6-1",
    "subtopicCode": "6.1"
  },
  {
    "id": "al-bio-kt-31",
    "term": "Sarcomere",
    "definition": "Contractile unit between two Z-lines where actin slides over myosin, shortening I-band and H-zone.",
    "topicNumber": 6,
    "subtopicId": "al-bio-6-2",
    "subtopicCode": "6.2"
  },
  {
    "id": "al-bio-kt-32",
    "term": "siRNA",
    "definition": "Small interfering RNA guiding enzymatic cleavage of complementary target mRNA to block translation.",
    "topicNumber": 8,
    "subtopicId": "al-bio-8-1",
    "subtopicCode": "8.1"
  },
  {
    "id": "al-bio-kt-33",
    "term": "VNTR",
    "definition": "Variable Number Tandem Repeat — unique polymorphic minisatellite DNA repeats profiled in genetic fingerprinting.",
    "topicNumber": 8,
    "subtopicId": "al-bio-8-2",
    "subtopicCode": "8.2"
  },
  {
    "id": "al-bio-kt-34",
    "term": "Water potential (Ψ)",
    "definition": "Tendency of water to diffuse out of a solution in kPa (pure water = 0 kPa; solutes make Ψ more negative).",
    "topicNumber": 2,
    "subtopicId": "al-bio-2-2",
    "subtopicCode": "2.2"
  }
];
