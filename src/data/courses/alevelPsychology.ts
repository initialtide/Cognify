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

export const ALEVEL_PSYCHOLOGY_TOPICS: TopicDefinition[] = [
  {
    "number": 1,
    "title": "Research Methods",
    "subtopics": [
      {
        "id": "al-psy-1-1",
        "code": "1.1",
        "slug": "1.1-experiments-variables-controls",
        "title": "Experiments, Variables & Experimental Designs",
        "readingMinutes": 10,
        "hasDeepContent": true
      },
      {
        "id": "al-psy-1-2",
        "code": "1.2",
        "slug": "1.2-observations-self-reports-correlations",
        "title": "Observations, Self-Reports, Case Studies & Correlations",
        "readingMinutes": 10,
        "hasDeepContent": true
      },
      {
        "id": "al-psy-1-3",
        "code": "1.3",
        "slug": "1.3-ethics-validity-reliability-data",
        "title": "Ethics, Validity, Reliability & Data Analysis",
        "readingMinutes": 11,
        "hasDeepContent": true
      }
    ]
  },
  {
    "number": 2,
    "title": "Cognitive Approach",
    "subtopics": [
      {
        "id": "al-psy-2-1",
        "code": "2.1",
        "slug": "2.1-msm-working-memory-model",
        "title": "Multi-Store Model & Working Memory Model",
        "readingMinutes": 11,
        "hasDeepContent": true
      },
      {
        "id": "al-psy-2-2",
        "code": "2.2",
        "slug": "2.2-andrade-baron-cohen",
        "title": "Andrade (2010) Doodling & Baron-Cohen et al. (2001) Eyes Test",
        "readingMinutes": 12,
        "hasDeepContent": true
      },
      {
        "id": "al-psy-2-3",
        "code": "2.3",
        "slug": "2.3-eyewitness-testimony-pozzulo",
        "title": "Eyewitness Testimony (Loftus & Palmer) & Pozzulo et al. (2010)",
        "readingMinutes": 11,
        "hasDeepContent": true
      }
    ]
  },
  {
    "number": 3,
    "title": "Biological Approach",
    "subtopics": [
      {
        "id": "al-psy-3-1",
        "code": "3.1",
        "slug": "3.1-dement-kleitman-sleep-dreams",
        "title": "Dement & Kleitman (1957) Sleep & Dreams",
        "readingMinutes": 11,
        "hasDeepContent": true
      },
      {
        "id": "al-psy-3-2",
        "code": "3.2",
        "slug": "3.2-holzel-mindfulness-brain-structure",
        "title": "Hölzel et al. (2011) Mindfulness & Brain Structure",
        "readingMinutes": 10,
        "hasDeepContent": true
      },
      {
        "id": "al-psy-3-3",
        "code": "3.3",
        "slug": "3.3-biopsychology-localisation-synapses",
        "title": "Biopsychology — Localisation, Synaptic Transmission & Fight-or-Flight",
        "readingMinutes": 12,
        "hasDeepContent": true
      }
    ]
  },
  {
    "number": 4,
    "title": "Learning Approach",
    "subtopics": [
      {
        "id": "al-psy-4-1",
        "code": "4.1",
        "slug": "4.1-classical-operant-conditioning",
        "title": "Classical & Operant Conditioning (Pavlov & Skinner)",
        "readingMinutes": 10,
        "hasDeepContent": true
      },
      {
        "id": "al-psy-4-2",
        "code": "4.2",
        "slug": "4.2-bandura-social-learning",
        "title": "Bandura et al. (1961) Bobo Doll & Social Learning Theory",
        "readingMinutes": 11,
        "hasDeepContent": true
      },
      {
        "id": "al-psy-4-3",
        "code": "4.3",
        "slug": "4.3-saavedra-silverman-fagen",
        "title": "Saavedra & Silverman (2002) Button Phobia & Fagen et al. (2014)",
        "readingMinutes": 11,
        "hasDeepContent": true
      }
    ]
  },
  {
    "number": 5,
    "title": "Social Approach",
    "subtopics": [
      {
        "id": "al-psy-5-1",
        "code": "5.1",
        "slug": "5.1-milgram-obedience-agency",
        "title": "Milgram (1963) Obedience & Agency Theory",
        "readingMinutes": 12,
        "hasDeepContent": true
      },
      {
        "id": "al-psy-5-2",
        "code": "5.2",
        "slug": "5.2-conformity-asch-zimbardo",
        "title": "Conformity — Asch (1951) & Zimbardo (1973) Stanford Prison",
        "readingMinutes": 11,
        "hasDeepContent": true
      },
      {
        "id": "al-psy-5-3",
        "code": "5.3",
        "slug": "5.3-piliavin-perry-prosocial-space",
        "title": "Piliavin et al. (1969) Subway Samaritan & Perry et al. (2015)",
        "readingMinutes": 11,
        "hasDeepContent": true
      }
    ]
  },
  {
    "number": 6,
    "title": "Clinical Psychology",
    "subtopics": [
      {
        "id": "al-psy-6-1",
        "code": "6.1",
        "slug": "6.1-schizophrenia-diagnosis-explanations",
        "title": "Schizophrenia — Diagnosis, Biological & Psychological Explanations",
        "readingMinutes": 12,
        "hasDeepContent": true
      },
      {
        "id": "al-psy-6-2",
        "code": "6.2",
        "slug": "6.2-depression-cbt",
        "title": "Mood Disorders — Depression (Beck, Ellis) & CBT",
        "readingMinutes": 11,
        "hasDeepContent": true
      },
      {
        "id": "al-psy-6-3",
        "code": "6.3",
        "slug": "6.3-anxiety-ocd-treatments",
        "title": "Anxiety Disorders, Phobias, OCD & Treatment Evaluation",
        "readingMinutes": 11,
        "hasDeepContent": true
      }
    ]
  }
];

export const ALEVEL_PSYCHOLOGY_NOTES: Record<string, NoteLesson> = {
  "al-psy-1-1": {
    "subtopicId": "al-psy-1-1",
    "subtopicCode": "1.1",
    "subtopicTitle": "Experiments, Variables & Experimental Designs",
    "readingMinutes": 10,
    "videoTitle": "Types of Experiment - Research Methods [A-Level Psychology]",
    "youtubeId": "Fo7zq8WeVpc",
    "videoChannel": "Psych Boost",
    "videoDuration": "8:21",
    "courseMatchSummary": "All sections match Cambridge CIE 9990 & AQA A-Level Psychology",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "Intro & Laboratory Experiments",
        "cardId": "al-psy-1-1-c1"
      },
      {
        "time": "2:00",
        "seconds": 120,
        "label": "Field Experiment",
        "cardId": "al-psy-1-1-c2"
      },
      {
        "time": "4:31",
        "seconds": 271,
        "label": "Natural Experiment & Designs",
        "cardId": "al-psy-1-1-c3"
      },
      {
        "time": "7:19",
        "seconds": 439,
        "label": "Exam Questions & Summary",
        "cardId": "al-psy-1-1-c4"
      }
    ],
    "cards": [
      {
        "id": "al-psy-1-1-c1",
        "title": "Types of Experiment (Lab, Field, Natural & Quasi)",
        "summary": "Comparing laboratory, field, natural, and quasi-experiments on control and realism.",
        "bullets": [
          "**Laboratory experiment**: Conducted in a tightly controlled, artificial setting where the researcher directly manipulates the independent variable (IV) and measures the dependent variable (DV). High internal validity and replicability, but lower mundane realism and ecological validity.",
          "**Field experiment**: The researcher manipulates the IV in a natural, real-world setting (e.g., Piliavin et al., 1969 on the New York subway). Higher ecological validity and fewer demand characteristics, but extraneous variables are harder to control and informed consent is often impractical.",
          "**Natural experiment**: The IV changes naturally without researcher intervention (e.g., institutionalisation or an earthquake) — the researcher compares existing groups. Allows study of unethical or impossible manipulations, though random allocation is impossible so causality cannot be firmly established.",
          "**Quasi-experiment**: The IV is a pre-existing trait of participants (e.g., clinical diagnosis of autism in Baron-Cohen et al., 2001, or biological sex) that cannot be randomly assigned."
        ],
        "subsections": [
          {
            "heading": "Examples from core studies",
            "bullets": [
              "Each experimental type balances **internal validity** against **real-world realism** differently."
            ],
            "exampleHeading": "Landmark exam examples:",
            "examples": [
              "**Laboratory experiment** — *Andrade (2010)* doodling voicemail test under strict lab control",
              "**Field experiment** — *Piliavin et al. (1969)* staged collapse on the New York City express subway",
              "**Quasi-experiment** — *Baron-Cohen et al. (2001)* comparing AS/HFA adults against IQ-matched controls"
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "mundane realism",
            "definition": "The extent to which an experimental task resembles everyday real-life activities."
          },
          {
            "term": "ecological validity",
            "definition": "The degree to which findings from a study generalise to real-world environments."
          }
        ],
        "memoryAid": "LFNQ — Lab (researcher controls setting + IV), Field (natural setting + researcher IV), Natural (natural IV), Quasi (IV is a participant trait)."
      },
      {
        "id": "al-psy-1-1-c2",
        "title": "Variables, Operationalisation & Hypotheses",
        "summary": "Defining IVs, DVs, operationalisation, and directional vs null hypotheses.",
        "bullets": [
          "**Independent Variable (IV)**: The factor deliberately manipulated (or naturally varying) to test its effect across conditions (e.g., doodling vs non-doodling in Andrade, 2010).",
          "**Dependent Variable (DV)**: The measurable outcome affected by the IV (e.g., number of correctly recalled names and places out of 16).",
          "**Operationalisation**: Defining variables in precise, measurable, testable terms so another researcher can replicate the exact procedure.",
          "Directional (one-tailed) hypothesis predicts the specific direction of the effect (used when prior research exists); non-directional (two-tailed) predicts a difference/relationship without specifying direction; null hypothesis (H₀) states any difference is due to chance alone."
        ],
        "commonMistake": "Writing \"Participants will do better in Condition A\" is too vague for A-Level marks. Always operationalise both IV and DV (e.g., \"Participants who drink 200 mg of caffeine will score higher on a 20-word free-recall test than participants who drink decaffeinated water\").",
        "subsections": [
          {
            "heading": "Experimental Designs: Strengths & Controls",
            "bullets": [
              "**Independent groups** - zero order effects, needs random allocation to reduce participant variables.",
              "**Repeated measures** - eliminates participant variables, uses **counterbalancing (ABBA)** to control practice/fatigue order effects!",
              "**Matched pairs** - avoids order effects AND reduces participant variables, but time-consuming to match accurately."
            ],
            "exampleHeading": "Concrete check: Directional vs Non-Directional Hypotheses",
            "examples": [
              "**One-tailed (directional)**: \"Participants drinking 200 mg caffeine will recall SIGNIFICANTLY MORE words than placebo.\" **Two-tailed**: \"There will be a significant DIFFERENCE in words recalled.\""
            ]
          }
        ]
      },
      {
        "id": "al-psy-1-1-c3",
        "title": "Experimental Designs & Controlling Bias",
        "summary": "Choosing independent, repeated, or matched designs and controlling bias.",
        "bullets": [
          "**Independent measures design**: Different participants take part in each condition. Eliminates order effects (practice, fatigue, boredom) and lowers demand characteristics, but risks participant variables — mitigated via random allocation.",
          "**Repeated measures design**: Every participant completes all conditions. Eliminates participant variables and halves sample size needed, but introduces order effects — controlled using counterbalancing (ABBA or AB/BA).",
          "**Matched pairs design**: Participants are paired on key relevant characteristics (e.g., baseline aggression in Bandura, 1961) and one member of each pair is randomly assigned to each condition. Reduces both participant variables and order effects, though matching is time-consuming and never exact.",
          "**Controlling bias**: Standardised instructions and procedures minimise situational variables and investigator effects; single-blind (participants unaware of condition) controls demand characteristics; double-blind (neither participant nor experimenter knows condition) also prevents experimenter expectancy bias."
        ],
        "glossaryPills": [
          {
            "term": "counterbalancing",
            "definition": "Varying the order of conditions across participants (e.g., half do A then B, half do B then A) so order effects balance out."
          },
          {
            "term": "confounding variable",
            "definition": "An uncontrolled extraneous variable that varies systematically with the IV, making it impossible to separate its effect on the DV."
          }
        ]
      },
      {
        "id": "al-psy-1-1-c4",
        "title": "Evaluation: Strengths & Limitations of Experimental Research",
        "summary": "Evaluating internal validity, demand characteristics, and WEIRD samples.",
        "bullets": [
          "**Strength — Cause and effect**: Direct manipulation of the IV under standardised conditions with random allocation allows strong causal inference (high internal validity).",
          "**Strength — Replication & objectivity**: Operationalised DVs yield quantitative data that independent teams can verify for reliability.",
          "Limitation — Demand characteristics & screw-you effect: Participants in lab settings often infer the study aim and alter their natural behaviour (Orne, 1962).",
          "**Limitation — Sampling bias**: Reliance on opportunity samples of university students (WEIRD samples: Western, Educated, Industrialised, Rich, Democratic) restricts population validity."
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "Operationalisation",
        "definition": "Clearly defining the IV and DV in concrete, measurable terms to enable replication."
      },
      {
        "term": "Counterbalancing",
        "definition": "Systematically varying the order in which conditions are presented (e.g., AB/BA) to control order effects in repeated measures designs."
      },
      {
        "term": "Demand characteristics",
        "definition": "Cues in the experimental setting that reveal the study’s hypothesis to participants, causing them to alter their behaviour."
      },
      {
        "term": "Random allocation",
        "definition": "Assigning participants to experimental conditions purely by chance so participant variables are distributed evenly."
      }
    ],
    "checklistPoints": [
      "Distinguish laboratory, field, natural, and quasi-experiments by who manipulates the IV and how controlled the setting is.",
      "Write fully operationalised directional, non-directional, and null hypotheses.",
      "Compare independent measures, repeated measures, and matched pairs designs and pair each with its key control (random allocation vs counterbalancing).",
      "Explain how single-blind, double-blind, and standardised procedures protect internal validity."
    ]
  },
  "al-psy-1-2": {
    "subtopicId": "al-psy-1-2",
    "subtopicCode": "1.2",
    "subtopicTitle": "Observations, Self-Reports, Case Studies & Correlations",
    "readingMinutes": 10,
    "videoTitle": "Variables - Research Methods [A-Level Psychology]",
    "youtubeId": "ueBn0HZ-tUo",
    "videoChannel": "Psych Boost",
    "videoDuration": "10:42",
    "courseMatchSummary": "All sections match Cambridge CIE 9990 & AQA A-Level Psychology",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "Intro & Research Design Overview",
        "cardId": "al-psy-1-2-c1"
      },
      {
        "time": "0:45",
        "seconds": 45,
        "label": "Variables (IV, DV, Extraneous & Confounding)",
        "cardId": "al-psy-1-2-c2"
      },
      {
        "time": "7:55",
        "seconds": 475,
        "label": "Peer Review & Correlational Checks",
        "cardId": "al-psy-1-2-c3"
      },
      {
        "time": "9:30",
        "seconds": 570,
        "label": "Summary & Sampling Recap",
        "cardId": "al-psy-1-2-c4"
      }
    ],
    "cards": [
      {
        "id": "al-psy-1-2-c1",
        "title": "Observational Techniques & Sampling Methods",
        "summary": "Classifying observation types, behavioural categories, and event vs time sampling.",
        "bullets": [
          "**Naturalistic vs controlled observation**: Naturalistic observations record behaviour in an untouched everyday setting (high ecological validity, low control); controlled observations structure the environment (e.g., Bandura’s Bobo Doll room) to trigger specific behaviours.",
          "**Covert vs overt & participant vs non-participant**: Covert observers conceal their presence to prevent observer effects (Hawthorne effect) at the cost of informed consent; participant observers join the group for rich insight but risk losing objectivity (\"going native\").",
          "Structured observations use a behavioural checklist of mutually exclusive, observable behavioural categories (e.g., \"strikes doll with mallet\") so multiple observers achieve high inter-observer reliability (target correlation ≥ +0.80).",
          "Event sampling tallies every occurrence of a target behaviour (ideal for rare events, risks missing rapid bursts); time sampling records behaviour at fixed intervals (e.g., every 5 seconds in Bandura, 1961 — manageable for continuous behaviour, may miss unrepresentative events between ticks)."
        ],
        "glossaryPills": [
          {
            "term": "inter-observer reliability",
            "definition": "Consistency between two or more independent observers using the same behavioural coding schedule, checked by correlating their scores."
          },
          {
            "term": "observer effect",
            "definition": "Changes in participants’ natural behaviour because they know they are being watched."
          }
        ],
        "subsections": [
          {
            "heading": "Observational Methods & Sampling Behaviours",
            "bullets": [
              "**Covert vs Overt** - covert reduces **observer effects / social desirability** (higher validity) but raises **informed consent/privacy** issues.",
              "**Event vs Time sampling** - **event sampling** tallies every instance of target behaviour (good for rare acts); **time sampling** records at fixed intervals e.g. every 30 s (manageable for dense behaviour, may miss events between ticks)."
            ],
            "exampleHeading": "Concrete check: Inter-observer reliability rule",
            "examples": [
              "Two trained observers independently code the same video using identical behavioural categories; correlation **r ≥ +0.80** confirms high inter-observer reliability!"
            ]
          }
        ]
      },
      {
        "id": "al-psy-1-2-c2",
        "title": "Self-Reports: Questionnaires & Interviews",
        "summary": "Designing questionnaires and interviews while avoiding social desirability bias.",
        "bullets": [
          "Questionnaires use closed questions (fixed choices/Likert scales producing easy-to-analyse quantitative data) and open questions (free-text responses yielding rich qualitative detail that is harder to code objectively).",
          "Structured interviews follow a fixed script (high replicability, easy comparison across interviewees); unstructured interviews flow conversationally (rich insight into complex feelings, lower reliability); semi-structured combine core questions with flexible follow-up probes.",
          "**Key threats to self-report validity**: Social desirability bias (giving socially acceptable answers rather than truthful ones), acquiescence bias (tendency to agree with items), leading questions, and interviewer effects (age, gender, or tone influencing disclosures).",
          "Designing good self-report items requires avoiding double-barrelled questions, jargon, emotive phrasing, and ambiguous frequency labels (use \"times per week\" instead of \"often\")."
        ],
        "commonMistake": "Do not confuse \"structured interview\" with \"questionnaire\" — a structured interview is delivered verbally face-to-face or by phone, so interviewer effects still apply even when questions are standardised.",
        "subsections": [
          {
            "heading": "Correlations vs Experiments & Case Studies",
            "bullets": [
              "**Correlation coefficient (r)** - ranges from **−1.0** (perfect negative) through **0** (none) to **+1.0** (perfect positive); **NEVER proves causation** because of directionality or an unmeasured **third (intervening) variable**!",
              "**Case studies (e.g. HM, Phineas Gage)** - rich qualitative depth on unique/rare cases, but low **population validity** (cannot generalise from n = 1!)."
            ],
            "exampleHeading": "Worked check: Structured vs Unstructured Interviews",
            "examples": [
              "**Structured** = standardised fixed questions (easy to replicate/compare); **Unstructured** = open follow-up probing (richer detail, higher interviewer bias)."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "social desirability bias",
            "definition": "Tendency of respondents in self-reports to give answers that present them favourably rather than truthfully."
          }
        ]
      },
      {
        "id": "al-psy-1-2-c3",
        "title": "Correlations & Case Studies",
        "summary": "Interpreting correlation coefficients vs causation and idiographic case studies.",
        "bullets": [
          "Correlations measure the strength and direction of the linear relationship between two measured co-variables (no IV is manipulated). Correlation coefficient r ranges from −1.0 (perfect negative) through 0 (no linear relationship) to +1.0 (perfect positive).",
          "**Crucial limitation**: Correlation NEVER proves causation — a relationship may be caused by an unmeasured third variable (intervening variable) or reverse causality. However, correlations are vital for identifying patterns when experimental manipulation is unethical (e.g., stress and illness).",
          "Case studies conduct an in-depth longitudinal investigation of a single individual, group, or rare clinical case (e.g., Saavedra & Silverman, 2002 on button phobia, or Patient HM in memory research), triangulating interviews, observations, and psychometric tests.",
          "Case studies produce rich qualitative and quantitative data and can challenge universal theories (idiographic insight), yet their uniqueness means low generalisability and high risk of researcher bias."
        ],
        "memoryAid": "Co-variables = Correlation (never write IV and DV in a correlational hypothesis — always write \"positive/negative correlation between co-variable A and co-variable B\")."
      },
      {
        "id": "al-psy-1-2-c4",
        "title": "Sampling Techniques for Selecting Participants",
        "summary": "Comparing random, stratified, opportunity, and volunteer sampling trade-offs.",
        "bullets": [
          "**Random sampling**: Every member of the target population has an equal chance of selection (unbiased, but requires a full population list and participants may still refuse).",
          "**Stratified sampling**: Subgroups (strata) in the sample mirror their exact proportions in the target population (highly representative, time-consuming to construct).",
          "**Opportunity sampling**: Recruiting whoever is available and willing at the time (fast and cheap, prone to researcher selection bias and unrepresentative samples).",
          "**Volunteer (self-selected) sampling**: Participants respond to advertisements (ethical and convenient, suffers from volunteer bias because volunteers tend to be more motivated, educated, or curious)."
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "Co-variables",
        "definition": "The two measured variables investigated for a relationship in a correlational study (neither is manipulated)."
      },
      {
        "term": "Event sampling",
        "definition": "Observational recording method where every instance of a specified behaviour is tallied during the observation period."
      },
      {
        "term": "Time sampling",
        "definition": "Observational recording method where behaviour is logged only at predetermined time intervals (e.g., every 10 seconds)."
      },
      {
        "term": "Social desirability bias",
        "definition": "Tendency of respondents to distort self-report answers to present themselves favourably."
      }
    ],
    "checklistPoints": [
      "Classify observations along four dimensions: naturalistic/controlled, overt/covert, participant/non-participant, structured/unstructured.",
      "Contrast event sampling with time sampling and explain how to establish inter-observer reliability.",
      "Explain why correlations use co-variables and cannot establish cause and effect.",
      "Evaluate random, stratified, systematic, opportunity, and volunteer sampling methods."
    ]
  },
  "al-psy-1-3": {
    "subtopicId": "al-psy-1-3",
    "subtopicCode": "1.3",
    "subtopicTitle": "Ethics, Validity, Reliability & Data Analysis",
    "readingMinutes": 11,
    "videoTitle": "Ethics - Research Methods",
    "youtubeId": "iSD4ta9gaGU",
    "videoChannel": "Psych Boost",
    "videoDuration": "6:54",
    "courseMatchSummary": "All sections match Cambridge CIE 9990 & AQA A-Level Psychology",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "Intro to Psychological Ethics",
        "cardId": "al-psy-1-3-c1"
      },
      {
        "time": "1:17",
        "seconds": 77,
        "label": "Ethical Issues & BPS Safeguards",
        "cardId": "al-psy-1-3-c2"
      },
      {
        "time": "2:35",
        "seconds": 155,
        "label": "Ethical Issues Applied to Milgram",
        "cardId": "al-psy-1-3-c3"
      },
      {
        "time": "5:49",
        "seconds": 349,
        "label": "Summary & Evaluation",
        "cardId": "al-psy-1-3-c4"
      }
    ],
    "cards": [
      {
        "id": "al-psy-1-3-c1",
        "title": "Ethical Guidelines in Human & Animal Research",
        "summary": "Applying BPS human ethical safeguards and the 3Rs animal research framework.",
        "bullets": [
          "**Core human guidelines (BPS / APA)**: Informed consent (full aims and procedures explained beforehand, or parental consent for under-16s), deception (avoided unless justified by scientific value and approved by an ethics committee), protection from physical and psychological harm, right to withdraw (including data withdrawal), privacy, and confidentiality (anonymised IDs/initials).",
          "**Managing ethical issues**: When deception is unavoidable (e.g., Andrade, 2010; Milgram, 1963), researchers use presumptive consent, prior general consent, and a thorough post-study debrief revealing the true aim, checking wellbeing, and offering counselling if distressed.",
          "**Animal ethics (Bateson’s Cube & Russell and Burch’s 3Rs)**: Replacement (use non-animal alternatives where possible), Reduction (minimum animals needed for valid statistical power), and Refinement (housing, analgesia, positive reinforcement as in Fagen et al., 2014).",
          "Animal research also considers species choice, pain/distress minimisation, caging/social environment, and whether deprivation is scientifically justified."
        ],
        "memoryAid": "Human ethics DR. PIPC: Deception, Right to withdraw, Protection from harm, Informed consent, Privacy, Confidentiality. Animal ethics: 3Rs (Replace, Reduce, Refine).",
        "subsections": [
          {
            "heading": "BPS Ethical Guidelines & Dealing with Breaches",
            "bullets": [
              "**Five core BPS principles** - **Informed consent** (presumptive/prior general/retrospective consent when deception is unavoidable), **Deception** (only if essential + full **debriefing**), **Protection from harm**, **Right to withdraw** (including data!), **Confidentiality** (use ID numbers/pseudonyms!)."
            ],
            "exampleHeading": "Concrete check: Type I vs Type II Errors",
            "examples": [
              "**Type I error (false positive)** = rejecting a true H₀ (more likely if α is too lenient, e.g. p < 0.10); **Type II error (false negative)** = accepting a false H₀ (more likely if α is too strict, e.g. p < 0.01)!"
            ]
          }
        ]
      },
      {
        "id": "al-psy-1-3-c2",
        "title": "Reliability & Validity",
        "summary": "Checking test–retest/inter-rater reliability and internal, ecological, and construct validity.",
        "bullets": [
          "Reliability = consistency of a measurement. Checked via test–retest (repeating the test with the same sample later and correlating scores ≥ +0.80), split-half (correlating odd vs even items for internal consistency), and inter-rater/inter-observer reliability.",
          "**Internal validity**: Whether the observed change in the DV was genuinely caused by the IV rather than confounding variables, demand characteristics, or investigator effects.",
          "**External validity**: Generalisability beyond the study — includes ecological validity (real-world settings), population validity (wider target population), and temporal/historical validity (across eras).",
          "**Measurement validity**: Face validity (looks right on the surface), concurrent validity (correlates with an established benchmark test), and construct validity (truly captures the theoretical construct, e.g., Baron-Cohen’s Eyes Test measuring Theory of Mind)."
        ],
        "glossaryPills": [
          {
            "term": "test–retest reliability",
            "definition": "Assessing consistency by administering the same test to the same participants on two occasions and correlating the scores."
          },
          {
            "term": "concurrent validity",
            "definition": "Checking a new psychometric test by correlating its scores with an already validated test of the same construct."
          },
          {
            "term": "informed consent",
            "definition": "Ensuring participants understand the aims, procedures, and rights of a study before voluntarily agreeing to take part."
          },
          {
            "term": "Type I error",
            "definition": "A false positive statistical error where a researcher mistakenly rejects a true null hypothesis (more likely when alpha is too lenient)."
          }
        ],
        "subsections": [
          {
            "heading": "Descriptive Statistics, Skew & Choosing Statistical Tests",
            "bullets": [
              "**Measures of central tendency** - **Mean** (sensitive to outliers, interval/ratio data), **Median** (robust to extreme skew, ordinal data), **Mode** (nominal categories).",
              "**Standard deviation vs Range** - SD uses EVERY score (more accurate measure of dispersion); Range is distorted by a single extreme outlier.",
              "**Sign Test (p ≤ 0.05)** - count **S** = smaller number of + or − signs (ignoring ties!), compare with critical table value for N; **S MUST be ≤ critical value** to reject H₀!"
            ],
            "exampleHeading": "Worked example: Sign Test with 10 improvements (+), 2 declines (−), 1 tie",
            "examples": [
              "N = 12 (ignore tie), **S = 2**; critical value for N = 12 (two-tailed, p ≤ 0.05) is **2** → 2 ≤ 2 ⇒ **statistically significant (reject H₀)**!"
            ]
          }
        ]
      },
      {
        "id": "al-psy-1-3-c3",
        "title": "Descriptive Statistics: Central Tendency, Dispersion & Distributions",
        "summary": "Selecting central tendency, standard deviation, skew, and NOIR data levels.",
        "bullets": [
          "**Measures of central tendency**: Mean (uses all values, sensitive to outliers, interval/ratio data only), Median (middle value, unaffected by extreme scores, ordinal+), Mode (most frequent category, usable on nominal data).",
          "**Measures of dispersion**: Range (highest − lowest + 1 in some texts; distorted by anomalies) and Standard Deviation (average spread of scores around the mean — precise measure of consistency; small SD means scores cluster tightly around the mean).",
          "Normal distribution is symmetrical (mean = median = mode). Positive skew has a long right tail caused by high outliers (mode < median < mean); negative skew has a long left tail caused by low outliers (mean < median < mode).",
          "**Levels of measurement (NOIR)**: Nominal (named categories), Ordinal (ranked scores without equal intervals), Interval (equal numerical units without true zero, e.g., °C), Ratio (equal units plus true zero, e.g., reaction time in ms)."
        ],
        "commonMistake": "In a positively skewed distribution the tail points RIGHT (towards positive numbers), NOT left! Think of the skew direction as the direction the long tail is pulled."
      },
      {
        "id": "al-psy-1-3-c4",
        "title": "Inferential Testing, Significance Levels & Type I / Type II Errors",
        "summary": "Using p ≤ 0.05 significance testing and balancing Type I vs Type II errors.",
        "bullets": [
          "Psychology conventionally sets the significance level at p ≤ 0.05 (a ≤ 5% probability that the observed result occurred by chance if H₀ were true). Stricter p ≤ 0.01 is used for high-stakes medical/drug trials.",
          "**Choosing a statistical test depends on three factors**: (1) Test of difference vs correlation, (2) Experimental design (related/repeated vs unrelated/independent), and (3) Level of measurement (nominal, ordinal, interval). Examples: Sign Test / Wilcoxon (related, ordinal), Mann–Whitney U (unrelated, ordinal), Chi-Squared (nominal), Spearman’s rho (ordinal correlation), Pearson’s r (interval correlation), t-tests (parametric interval difference).",
          "Type I error (false positive): Rejecting a true null hypothesis (claiming a real effect when it was just chance) — more likely when p is too lenient (e.g., p ≤ 0.10).",
          "Type II error (false negative): Accepting a false null hypothesis (missing a genuine effect) — more likely when p is overly strict (e.g., p ≤ 0.01) or sample size is too small."
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "Standard deviation",
        "definition": "A measure of dispersion indicating the average amount by which individual scores deviate from the mean."
      },
      {
        "term": "Type I error",
        "definition": "A false positive: rejecting the null hypothesis when it is actually true."
      },
      {
        "term": "Type II error",
        "definition": "A false negative: failing to reject the null hypothesis when a genuine effect exists."
      },
      {
        "term": "Debriefing",
        "definition": "Post-study discussion informing participants of the study’s true purpose, reversing any deception, and safeguarding wellbeing."
      }
    ],
    "checklistPoints": [
      "Apply BPS/APA human guidelines and the 3Rs animal framework to novel research scenarios.",
      "Distinguish test–retest, split-half, and inter-rater reliability, plus internal, ecological, concurrent, and construct validity.",
      "Select appropriate measures of central tendency and dispersion given data level and outliers/skew.",
      "Interpret p ≤ 0.05 and explain the trade-off between Type I and Type II errors."
    ]
  },
  "al-psy-2-1": {
    "subtopicId": "al-psy-2-1",
    "subtopicCode": "2.1",
    "subtopicTitle": "Multi-Store Model & Working Memory Model",
    "readingMinutes": 11,
    "videoTitle": "The Multi-Store Model of Memory [AQA A-Level]",
    "youtubeId": "yw3CFPHFJTk",
    "videoChannel": "Psych Boost",
    "videoDuration": "15:28",
    "courseMatchSummary": "All sections match Cambridge CIE 9990 & AQA A-Level Psychology",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "Atkinson & Shiffrin (1968) Multi-Store Model",
        "cardId": "al-psy-2-1-c1"
      },
      {
        "time": "3:50",
        "seconds": 230,
        "label": "Sensory Register, STM & LTM (Coding, Capacity, Duration)",
        "cardId": "al-psy-2-1-c2"
      },
      {
        "time": "8:30",
        "seconds": 510,
        "label": "Supporting Research (Baddeley, Peterson & Peterson, HM)",
        "cardId": "al-psy-2-1-c3"
      },
      {
        "time": "12:20",
        "seconds": 740,
        "label": "Evaluation: Strengths & Limitations of MSM",
        "cardId": "al-psy-2-1-c4"
      }
    ],
    "cards": [
      {
        "id": "al-psy-2-1-c1",
        "title": "Atkinson & Shiffrin (1968) Multi-Store Model (MSM)",
        "summary": "Sensory register, STM, and LTM coding, capacity, duration, and control processes.",
        "diagram": "multi-store-memory",
        "bullets": [
          "Linear, structural information-processing model proposing three unitary memory stores connected by control processes (attention, rehearsal, retrieval).",
          "**Sensory Register (SR)**: Modality-specific coding (iconic = visual, echoic = auditory), very large capacity, duration < 0.5 s (Sperling, 1960). Paying attention transfers selected input to STM; unattended data decays rapidly.",
          "**Short-Term Memory (STM)**: Primarily acoustic coding (Baddeley, 1966), limited capacity of 7 ± 2 chunks (Miller, 1956; Cowan later estimated ~4), duration 18–30 seconds without rehearsal (Peterson & Peterson, 1959). Maintenance rehearsal retains items in STM and, according to MSM, transfers them to LTM.",
          "**Long-Term Memory (LTM)**: Primarily semantic coding (Baddeley, 1966), potentially unlimited capacity and lifetime duration (Bahrick et al., 1975 found ~90% recognition of high-school classmates after 15 years). Retrieval brings memories back into STM."
        ],
        "subsections": [
          {
            "heading": "Control processes connecting the three stores",
            "bullets": [
              "**Attention** selects sensory input for Short-Term Memory; unattended data decays within milliseconds.",
              "**Maintenance rehearsal** holds items in STM and transfers them into Long-Term Memory; **retrieval** brings LTM traces back into STM."
            ],
            "exampleHeading": "Key capacity & duration benchmarks:",
            "examples": [
              "**Sensory Register** — Iconic/echoic coding, high capacity, duration < 0.5 s (*Sperling, 1960*)",
              "**Short-Term Memory** — Acoustic coding, 7 ± 2 chunks (*Miller, 1956*), 18–30 s without rehearsal (*Peterson & Peterson, 1959*)",
              "**Long-Term Memory** — Semantic coding (*Baddeley, 1966*), unlimited capacity & lifetime duration (*Bahrick et al., 1975*)"
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "chunking",
            "definition": "Grouping individual units of information into larger meaningful blocks to expand STM capacity beyond 7 ± 2 raw digits."
          },
          {
            "term": "maintenance rehearsal",
            "definition": "Repeating information over and over verbally to keep it active in STM."
          }
        ],
        "memoryAid": "MSM stores = S-S-L (Sensory, Short-term, Long-term) linked by A-R-R (Attention, Rehearsal, Retrieval)."
      },
      {
        "id": "al-psy-2-1-c2",
        "title": "Evaluating the Multi-Store Model",
        "summary": "Weighing Patient HM and Murdock against Patient KF and elaborative rehearsal.",
        "bullets": [
          "**Strength — Neuropsychological support**: Patient HM (Scoville & Milner, 1957) had his hippocampi removed to treat epilepsy; his STM digit span remained intact, yet he could not form new episodic/semantic LTMs (anterograde amnesia), proving STM and LTM are distinct neurological systems.",
          "**Strength — Serial position effect**: Murdock (1962) showed superior recall for early words (primacy effect — rehearsed into LTM) and final words (recency effect — still in STM), supporting two separate stores.",
          "**Limitation — Oversimplifies STM as a single unitary store**: Patient KF (Shallice & Warrington, 1970) suffered impaired verbal STM after brain damage yet had intact visual STM — impossible if STM were one undivided box.",
          "**Limitation — Overemphasises rote maintenance rehearsal**: Craik & Watkins (1973) showed elaborative rehearsal (linking to meaning) transfers memories to LTM far better than mere repetition, and LTM itself splits into episodic, semantic, and procedural stores (Tulving)."
        ],
        "subsections": [
          {
            "heading": "Clinical Case Evidence: Patient HM vs Patient KF",
            "bullets": [
              "**Patient HM (Scoville & Milner, 1957)** - bilateral hippocampus removal destroyed ability to form new **LTM**, yet **STM** stayed intact → supports MSM’s separate STM & LTM stores (though HM COULD learn procedural mirror-drawing, proving LTM isn’t unitary!).",
              "**Patient KF (Shallice & Warrington, 1970)** - brain injury impaired **verbal/auditory STM** (phonological loop) while **visual STM** (visuo-spatial sketchpad) remained intact → **refutes MSM’s single STM** and **supports Baddeley & Hitch’s Working Memory Model**!"
            ],
            "exampleHeading": "Concrete check: Dual-Task Interference (Baddeley et al., 1975)",
            "examples": [
              "Performing TWO visual tasks simultaneously (tracking a moving light + visualising a letter F) impairs performance badly, whereas doing ONE visual + ONE verbal task shows minimal interference — proving separate **VSS** and **PL** slave systems!"
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "episodic buffer",
            "definition": "Component added by Baddeley (2000) to the Working Memory Model that integrates visual, auditory, and LTM information into coherent chronological episodes."
          }
        ]
      },
      {
        "id": "al-psy-2-1-c3",
        "title": "Baddeley & Hitch (1974) Working Memory Model (WMM)",
        "summary": "Central Executive, Phonological Loop, Visuo-Spatial Sketchpad, and Episodic Buffer.",
        "bullets": [
          "Replaces MSM’s passive unitary STM with an active, multi-component workspace for manipulating information during complex cognitive tasks.",
          "**Central Executive (CE)**: Modality-free attentional controller that allocates cognitive resources to slave systems and switches focus; has very limited processing capacity and does not store data itself.",
          "**Phonological Loop (PL)**: Processes auditory/verbal information in temporal order. Divided into the Phonological Store (\"inner ear\", holds heard words for ~1.5–2 s) and Articulatory Control Process (\"inner voice\", subvocal rehearsal loop).",
          "**Visuo-Spatial Sketchpad (VSS)**: \"Inner eye\" processing visual appearance (Logie’s visual cache) and spatial layout/movement (inner scribe); capacity ~3–4 objects.",
          "**Episodic Buffer (added by Baddeley, 2000)**: Modality-free temporary backup store (~4 chunks) that integrates visual, auditory, and spatial info into chronological episodes and interfaces with LTM."
        ],
        "commonMistake": "Students often forget that the Episodic Buffer was added in 2000 (not 1974) and mistakenly claim the Central Executive stores memories — the CE allocates attention, while the slave systems and episodic buffer hold temporary information."
      },
      {
        "id": "al-psy-2-1-c4",
        "title": "Evidence & Evaluation of the Working Memory Model",
        "summary": "Dual-task studies, word-length effects, and limitations of the Central Executive.",
        "bullets": [
          "**Strength — Dual-task studies**: Baddeley et al. (1975) showed participants performed poorly when doing two visual tasks simultaneously (tracking a light + describing the letter F), because both competed for the VSS, whereas combining a visual task with a verbal task succeeded cleanly — confirming separate slave systems.",
          "**Strength — Word-length & articulatory suppression effects**: Longer words take longer to rehearse in the articulatory loop, reducing recall span; repeating \"the-the-the\" blocks subvocal rehearsal and eliminates the phonological similarity effect for visually presented words.",
          "**Strength — Clinical & neuroimaging evidence**: Patient KF’s selective impairment of auditory STM vs intact visual STM directly validates the separation of the PL and VSS; PET/fMRI scans show distinct prefrontal (CE) and left-hemisphere Broca/Wernicke (PL) activation.",
          "Limitation — Vague Central Executive: Critics (e.g., Eslinger & Damasio’s case EVR) argue the CE is a \"homunculus\" catch-all that likely comprises multiple distinct executive sub-processes rather than a single controller; WMM also says little about LTM."
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "Central Executive",
        "definition": "The supervisory component of Working Memory that directs attention and coordinates the slave systems."
      },
      {
        "term": "Phonological Loop",
        "definition": "Working Memory slave system dealing with auditory and verbal information via the phonological store and articulatory process."
      },
      {
        "term": "Visuo-Spatial Sketchpad",
        "definition": "Working Memory slave system responsible for visual imagery and spatial navigation."
      },
      {
        "term": "Episodic Buffer",
        "definition": "Temporary multimodal store added in 2000 to bind information from slave systems and LTM into coherent sequences."
      }
    ],
    "checklistPoints": [
      "State the coding, capacity, and duration of Sensory Register, STM, and LTM with supporting classic studies.",
      "Explain how Patient HM and Patient KF respectively support MSM and challenge MSM in favour of WMM.",
      "Describe all four components of the Working Memory Model including subdivisions of the Phonological Loop and VSS.",
      "Use dual-task performance evidence to justify why verbal and visuo-spatial processing rely on independent slave systems."
    ]
  },
  "al-psy-2-2": {
    "subtopicId": "al-psy-2-2",
    "subtopicCode": "2.2",
    "subtopicTitle": "Andrade (2010) Doodling & Baron-Cohen et al. (2001) Eyes Test",
    "readingMinutes": 12,
    "videoTitle": "Andrade 2010 Doodling Study Psychology 9990 Full Study",
    "youtubeId": "s5jwuqKQiPg",
    "videoChannel": "AICE Psychology",
    "videoDuration": "8:56",
    "courseMatchSummary": "All sections match Cambridge CIE 9990 & AQA A-Level Psychology",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "Andrade (2010) Aim, Background & Sample",
        "cardId": "al-psy-2-2-c1"
      },
      {
        "time": "2:15",
        "seconds": 135,
        "label": "Procedure: Doodling vs Control Conditions",
        "cardId": "al-psy-2-2-c2"
      },
      {
        "time": "4:50",
        "seconds": 290,
        "label": "Results: Monitoring & Surprise Recall Scores",
        "cardId": "al-psy-2-2-c3"
      },
      {
        "time": "7:00",
        "seconds": 420,
        "label": "Conclusions & Methodological Evaluation",
        "cardId": "al-psy-2-2-c4"
      }
    ],
    "cards": [
      {
        "id": "al-psy-2-2-c1",
        "title": "Andrade (2010): What Does Doodling Do?",
        "summary": "How shading shapes boosted monitored and incidental voicemail recall by 29%.",
        "bullets": [
          "**Background & Aim**: Daydreaming during boring tasks drains central executive resources and impairs memory. Andrade tested whether a simple concurrent visuo-spatial task (doodling) helps concentration and recall during a monotonous auditory message.",
          "**Sample & Design**: 40 adult members of the MRC Applied Psychology Unit panel (ages 18–55), recruited right after finishing another study so they were naturally bored/tired. Independent measures lab experiment (20 doodling, 20 control).",
          "**Procedure**: All listened to a dull 2.5-minute mock telephone message containing 8 party attendees’ names, 8 place names, and 3 non-attendees (plausible distractors). Both groups wrote down the names of people attending the party. The doodling group was also given an A4 sheet with alternating rows of 10 squares and circles and instructed to shade them in while listening. Afterwards, participants completed a surprise recall test for both monitored info (party names) and incidental info (places).",
          "**Results**: Doodlers recalled significantly more total information (mean 7.5 vs 5.8 — a 29% advantage!), scoring higher on both monitored names (mean 5.1 vs 4.0) and incidental places (mean 2.4 vs 1.8), while making fewer monitoring errors."
        ],
        "glossaryPills": [
          {
            "term": "incidental recall",
            "definition": "Remembering details that participants were not explicitly instructed to pay attention to or memorise."
          },
          {
            "term": "daydreaming",
            "definition": "Task-unrelated thought that consumes central executive attention and degrades processing of the primary task."
          }
        ],
        "memoryAid": "Andrade numbers: 40 participants, 2.5-minute tape, 8 names + 8 places, 7.5 vs 5.8 recalled = 29% boost!",
        "subsections": [
          {
            "heading": "Andrade (2010): Doodling & Dual-Task Attention",
            "bullets": [
              "**Design** - 40 participants listened to a dull 2.5-minute mock telephone message naming party attendees and places; half shaded printed shapes (**doodling group**), half did not (**control**).",
              "**Key finding** - Doodlers recalled **29% more** information (mean **7.5** vs **5.8** items) because light shading prevented **daydreaming** without overloading central-executive/verbal resources!"
            ],
            "exampleHeading": "Concrete evaluation: Strengths & Limitations of Andrade (2010)",
            "examples": [
              "**Strength**: highly standardised taped recording (high reliability); **Limitation**: artificial boring tape + participants came straight from another study (low ecological validity / volunteer fatigue)."
            ]
          }
        ]
      },
      {
        "id": "al-psy-2-2-c2",
        "title": "Evaluating Andrade (2010)",
        "summary": "Standardisation strengths vs artificial shading and unmeasured daydreaming.",
        "bullets": [
          "**Strength — High control & standardisation**: Recorded message played at a comfortable uniform volume in a quiet lab with identical scoring criteria (correct minus false alarms), maximising internal validity and replicability.",
          "**Strength — Surprise memory test**: Prevented deliberate memorisation strategies, isolating the true attentional effect of doodling on passive listening.",
          "**Limitation — Low mundane realism**: Instructed shading of printed geometric shapes differs from spontaneous free-form doodling, and listening to a synthetic voicemail without interacting lacks everyday realism.",
          "**Limitation — Unverified mechanism & baseline**: Andrade did not directly measure daydreaming (e.g., via thought probes or brain scans), so we cannot be certain whether doodling reduced daydreaming or boosted physiological arousal; also no baseline memory test was run before random allocation."
        ],
        "subsections": [
          {
            "heading": "Baron-Cohen et al. (2001): Revised Eyes Test & Theory of Mind",
            "bullets": [
              "**4 groups tested** - 15 adults with **AS/HFA** (mean **21.9/36**) scored significantly LOWER than 122 general-population adults (**26.2**), 103 Cambridge students (**28.0**), and 14 IQ-matched controls (**30.9**)!",
              "**Improvements over 1997 original** - expanded from 25 to **36 eye photos**, 4 complex emotion choices instead of 2 (lower chance level 25%), plus a **glossary** to control vocabulary!"
            ],
            "exampleHeading": "Concrete evaluation: AQ correlation & Gender Difference",
            "examples": [
              "Strong negative correlation (**r = −0.53**) between Eyes Test score and Autism-Spectrum Quotient (AQ); females scored slightly higher than males in neurotypical groups (weakly supporting Extreme Male Brain theory)."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "theory of mind",
            "definition": "Cognitive ability to attribute mental states, beliefs, and complex emotions to oneself and other people."
          }
        ]
      },
      {
        "id": "al-psy-2-2-c3",
        "title": "Baron-Cohen et al. (2001): Reading the Mind in the Eyes Test",
        "summary": "Measuring Theory of Mind with the 36-item Eyes Test and AQ across four groups.",
        "bullets": [
          "**Background & Aim**: Theory of Mind (ToM) is the ability to attribute mental states (beliefs, intentions, emotions) to others. The original 1997 Eyes Test had ceiling effects and binary choices. Baron-Cohen et al. revised it into a 36-item, 4-choice test to measure subtle social-cognitive deficits in high-functioning adults with Asperger Syndrome / High-Functioning Autism (AS/HFA) and test correlations with the Autism Spectrum Quotient (AQ).",
          "**Sample & Design**: Quasi-experiment across 4 groups — Group 1: 15 adult males with AS/HFA (mean IQ 115); Group 2: 122 general-population adults (libraries/community); Group 3: 103 Cambridge University undergraduates; Group 4: 14 IQ-matched male controls (mean IQ 116).",
          "**Procedure**: Participants viewed 36 black-and-white photographs of the eye region (15 cm × 6 cm) surrounded by 4 complex mental-state adjectives (1 target + 3 foils, e.g., \"preoccupied\", \"panicked\") and selected the best match, with a printed glossary available. Groups 1, 3, and 4 also completed the 50-item AQ questionnaire.",
          "**Results**: AS/HFA group scored significantly lower on the Eyes Test (mean 21.9/36) than general adults (26.2), students (28.0), and IQ-matched controls (30.9), and scored far higher on the AQ (34.4 vs 18.3 students / 18.9 IQ controls). Across participants, Eyes Test and AQ scores correlated negatively (r = −0.53), and neurotypical females slightly outperformed males (non-significant trend)."
        ],
        "commonMistake": "Never claim the AS/HFA group had lower intelligence — Baron-Cohen specifically included Group 4 (IQ-matched controls, mean IQ 116 vs 115) to prove the Eyes Test deficit is specific to Theory of Mind, NOT general IQ."
      },
      {
        "id": "al-psy-2-2-c4",
        "title": "Evaluating Baron-Cohen et al. (2001)",
        "summary": "IQ-matched controls and concurrent validity vs static photos and small male sample.",
        "bullets": [
          "**Strength — Improved psychometric validity**: Expanding to 36 items with 4 choices eliminated ceiling effects, removed easy basic emotions, added a word glossary (controlling vocabulary differences), and balanced target eye gaze/gender.",
          "**Strength — IQ-matched control group**: Directly ruled out intelligence as a confounding variable; strong negative correlation with AQ (r = −0.53) supports concurrent validity.",
          "**Limitation — Low ecological validity**: Real-world emotion reading relies on dynamic facial expressions, posture, vocal tone, and social context — not static cropped black-and-white photos of strangers’ eyes.",
          "**Limitation — Small, all-male clinical sample**: Only 15 males formed the AS/HFA group, limiting generalisability to autistic women and broader neurodivergent populations; quasi-experimental design precludes pure causal claims."
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "Theory of Mind (ToM)",
        "definition": "Cognitive ability to infer and understand the mental states, beliefs, desires, and emotions of oneself and others."
      },
      {
        "term": "Autism Spectrum Quotient (AQ)",
        "definition": "50-item self-report questionnaire measuring the degree of autistic traits in adults with normal intelligence."
      },
      {
        "term": "Ceiling effect",
        "definition": "Measurement flaw where a test is too easy, causing most participants to cluster near the maximum possible score so group differences are obscured."
      },
      {
        "term": "Monitored vs incidental information",
        "definition": "Target information participants are told to track versus background details recalled unexpectedly."
      }
    ],
    "checklistPoints": [
      "Recall the exact design, sample, task, and numerical findings of Andrade (2010).",
      "Explain why doodling may aid auditory attention without overloading the phonological loop.",
      "Detail all four participant groups, the 36-item revisions, and key scores in Baron-Cohen et al. (2001).",
      "Evaluate both studies on ecological validity, sample representativeness, controls, and practical applications."
    ]
  },
  "al-psy-2-3": {
    "subtopicId": "al-psy-2-3",
    "subtopicCode": "2.3",
    "subtopicTitle": "Eyewitness Testimony (Loftus & Palmer) & Pozzulo et al. (2010)",
    "readingMinutes": 11,
    "videoTitle": "Psychology - Eyewitness Testimony",
    "youtubeId": "m6aY9Wr-xjI",
    "videoChannel": "Cognito",
    "videoDuration": "7:56",
    "courseMatchSummary": "All sections match Cambridge CIE 9990 & AQA A-Level Psychology",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "Introduction to Eyewitness Testimony",
        "cardId": "al-psy-2-3-c1"
      },
      {
        "time": "2:11",
        "seconds": 131,
        "label": "How Leading Questions Distort Memory",
        "cardId": "al-psy-2-3-c2"
      },
      {
        "time": "4:13",
        "seconds": 253,
        "label": "Post-Event Information & Misinformation Effect",
        "cardId": "al-psy-2-3-c3"
      },
      {
        "time": "5:48",
        "seconds": 348,
        "label": "Johnson & Scott (1976) Weapon Focus Study",
        "cardId": "al-psy-2-3-c4"
      }
    ],
    "cards": [
      {
        "id": "al-psy-2-3-c1",
        "title": "Loftus & Palmer (1974): Leading Questions & Reconstructive Memory",
        "summary": "How leading verbs distort speed estimates and implant false broken-glass memories.",
        "bullets": [
          "Memory is reconstructive rather than a video recording (Bartlett, 1932): schemas and post-event information can distort recall.",
          "**Experiment 1**: 45 US university students watched 7 short clips of car accidents and answered: \"About how fast were the cars going when they ___ each other?\" with 5 verb conditions (independent measures). Mean estimates varied sharply by verb: smashed (40.5 mph), collided (39.3 mph), bumped (38.1 mph), hit (34.0 mph), contacted (31.8 mph).",
          "**Experiment 2 (150 students)**: Tested whether the verb altered the actual memory trace (substitution) or merely biased response estimates. After hearing \"smashed\", \"hit\", or no speed question, participants returned 1 week later and were asked \"Did you see any broken glass?\" (none existed). 32% of the \"smashed\" group falsely reported broken glass vs 14% (\"hit\") and 12% (control).",
          "**Conclusion**: Leading post-event questions integrate with the original event schema, creating genuine false memories (misinformation effect)."
        ],
        "glossaryPills": [
          {
            "term": "leading question",
            "definition": "A question phrased in a way that suggests or presupposes a particular answer."
          },
          {
            "term": "post-event discussion",
            "definition": "Co-witnesses talking after an event, leading to memory conformity (Gabbert et al., 2003 found 71% recalled items they never saw)."
          }
        ],
        "memoryAid": "Loftus verbs from fastest to slowest: S-C-B-H-C — Smashed (40.5), Collided (39.3), Bumped (38.1), Hit (34.0), Contacted (31.8).",
        "subsections": [
          {
            "heading": "Loftus & Palmer (1974): Leading Questions & Reconstructive Memory",
            "bullets": [
              "**Experiment 1 (45 students, 7 crash clips)** - Verb in \"About how fast were the cars going when they ___ each other?\" shifted mean speed estimates from **31.8 mph (\"contacted\")** up to **40.8 mph (\"smashed\")**!",
              "**Experiment 2 (150 students, 1 week later)** - **32%** of the \"smashed\" group falsely reported seeing **broken glass** (there was NONE!) vs 14% (\"hit\") and 12% (control) → proves **post-event information alters the memory trace itself (substitution/reconstructive memory)**!"
            ],
            "exampleHeading": "Concrete check: Weapon Focus & Yerkes–Dodson Anxiety Curve",
            "examples": [
              "**Johnson & Scott (1976)**: witnesses seeing a bloody knife identified the culprit only **33%** vs **49%** holding a pen (**weapon focus**); **Yuille & Cutshall (1986)**: real gun-shop shooting witnesses were remarkably accurate months later (high real-world anxiety ≠ lab clips!)."
            ]
          }
        ]
      },
      {
        "id": "al-psy-2-3-c2",
        "title": "Pozzulo et al. (2010): Child vs Adult Lineup Identification (CIE 9990)",
        "summary": "Why children make higher false-positive errors on target-absent human lineups.",
        "bullets": [
          "**Aim**: Investigate whether children (ages 4–7) show higher false-positive identification rates than adults (ages 18–30) on target-absent lineups, and whether familiarity/cartoon faces reduce social pressure effects.",
          "**Sample & Design**: 59 children (4–7 years, Canadian schools) and 53 university undergraduates (18–30 years). Repeated measures for target type (2 human faces vs 2 famous cartoon characters — e.g., Dora, Goofy — and 2 unfamiliar cartoon characters) and target-present vs target-absent simultaneous photographic lineups.",
          "**Procedure**: Participants watched brief video clips (3–6 s) of four target figures, completed a filler task, and then viewed 4 simultaneous 4-photo lineups (containing an extra silhouette card labelled \"not here\" to reduce guessing pressure). They indicated whether the target was present or absent.",
          "**Results**: On target-present lineups, children and adults performed similarly well on cartoons, though adults slightly outperformed children on human faces (98% vs 89%). On target-absent lineups, children made far more false-positive identifications than adults for human faces (correct rejection: adults 79% vs children 41%) — even with a \"not here\" silhouette! Children performed much better rejecting target-absent cartoon lineups, indicating cognitive and social factors (greater familiarity + reduced social demand with cartoons) shape child witness reliability."
        ],
        "commonMistake": "In Pozzulo et al. (2010), children were NOT poor at every lineup — they had high hit rates on target-present lineups! The key deficit was false-positive errors on TARGET-ABSENT human lineups.",
        "subsections": [
          {
            "heading": "Cognitive Interview (Fisher & Geiselman) & Pozzulo et al. (2010)",
            "bullets": [
              "**Four Cognitive Interview techniques** - (1) **Report everything**; (2) **Reinstate the context** (mental/environmental cues); (3) **Reverse the order** (disrupts schemas); (4) **Change perspective** (reduces schema-driven assumptions).",
              "**Pozzulo et al. (2010)** - children vs adults identifying cartoon vs human faces in target-present vs target-absent lineups: children had **higher false-positive rates in target-absent lineups** (social pressure to pick someone!), even for familiar cartoons."
            ],
            "exampleHeading": "Concrete evaluation: Police time cost vs Köhnken meta-analysis",
            "examples": [
              "**Köhnken et al. (1999)** meta-analysis showed Cognitive Interview yields **~41% more correct details** than standard interviews, though it also slightly increases minor incorrect details and takes longer to train/run."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "target-absent lineup",
            "definition": "An identification array that does not contain the actual perpetrator, testing whether witnesses correctly reject rather than making a false-positive pick."
          },
          {
            "term": "Cognitive Interview",
            "definition": "Fisher & Geiselman’s four-part forensic interview technique (report everything, context reinstatement, reverse order, change perspective) designed to boost accurate recall."
          }
        ]
      },
      {
        "id": "al-psy-2-3-c3",
        "title": "Anxiety, Weapon Focus & The Cognitive Interview",
        "summary": "Weapon focus, real-world anxiety, and Fisher & Geiselman’s Cognitive Interview.",
        "bullets": [
          "**Weapon Focus Effect (Johnson & Scott, 1976)**: Participants hearing an argument saw a man exit holding either a pen (low anxiety) or a bloody paper knife (high anxiety). Identification accuracy dropped from 49% (pen) to 33% (knife) as attention narrowed onto the threat.",
          "**Real-life high anxiety can sometimes ENHANCE central detail recall**: Yuille & Cutshall (1986) interviewed 13 witnesses of an actual Canadian gun-shop shooting 4–5 months later and found ~80% accuracy even with misleading questions, supporting the Yerkes–Dodson inverted-U curve (Deffenbacher et al., 2004).",
          "The Cognitive Interview (Fisher & Geiselman, 1992) improves police witness recall using four principles: (1) Report Everything (even trivial fragments), (2) Reinstate the Context (mentally recreate weather, emotions, environment), (3) Reverse the Order (disrupts schema-driven expectations), and (4) Change Perspective (recall from another bystander’s viewpoint).",
          "Meta-analysis (Köhnken et al., 1999) shows the Cognitive Interview yields ~41% more accurate details than standard police interviews, though it requires extensive officer training and can slightly increase inaccurate details."
        ]
      },
      {
        "id": "al-psy-2-3-c4",
        "title": "Evaluation & Forensic Applications",
        "summary": "Forensic impact of eyewitness research versus lab video artificiality.",
        "bullets": [
          "**Real-world impact**: Research by Loftus, Pozzulo, and Geiselman transformed legal procedures — police now prohibit leading questions, separate co-witnesses, instruct witnesses that the culprit \"may or may not be present\", and adapt lineup protocols for child witnesses.",
          "**Artificiality of lab studies**: Watching short accident clips (Loftus) or 5-second video snippets (Pozzulo) lacks the emotional stakes and consequences of testifying in a real criminal trial (Foster et al., 1994 showed witnesses told their choice affects an arrest make fewer false identifications).",
          "**Developmental insight**: Pozzulo’s inclusion of cartoon stimuli cleverly separated memory-encoding deficits from social compliance pressures in young children, though the small 4-photo lineup differs from real 6-to-9-person police arrays."
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "Misinformation effect",
        "definition": "Distortion of an eyewitness’s memory after exposure to inaccurate post-event information."
      },
      {
        "term": "Target-absent lineup",
        "definition": "An identification array that does not contain the actual perpetrator, testing a witness’s ability to make a correct rejection."
      },
      {
        "term": "Cognitive Interview",
        "definition": "Evidence-based police interviewing protocol using context reinstatement, reporting everything, reverse order, and perspective shifts."
      },
      {
        "term": "Weapon focus effect",
        "definition": "Tunnel-vision attention on a threatening weapon that reduces memory for the perpetrator’s facial features."
      }
    ],
    "checklistPoints": [
      "Compare Loftus & Palmer (1974) Experiment 1 and Experiment 2 and explain what the broken-glass finding proves.",
      "Summarise Pozzulo et al. (2010) procedure, target-present vs target-absent results, and why children showed more false positives on human faces.",
      "Contrast negative (Johnson & Scott) and positive (Yuille & Cutshall) effects of anxiety using the Yerkes–Dodson law.",
      "Describe and evaluate all four techniques of Fisher & Geiselman’s Cognitive Interview."
    ]
  },
  "al-psy-3-1": {
    "subtopicId": "al-psy-3-1",
    "subtopicCode": "3.1",
    "subtopicTitle": "Dement & Kleitman (1957) Sleep & Dreams",
    "readingMinutes": 11,
    "videoTitle": "Dement and Kleitman (1957) - Sleep and Dreams | CIE A-Level Psychology",
    "youtubeId": "0lp1i2QpP-A",
    "videoChannel": "Mr. Luis",
    "videoDuration": "7:41",
    "courseMatchSummary": "All sections match Cambridge CIE 9990 & AQA A-Level Psychology",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "Dement & Kleitman (1957) Aim & EEG/EOG Method",
        "cardId": "al-psy-3-1-c1"
      },
      {
        "time": "2:00",
        "seconds": 120,
        "label": "REM vs nREM Dream Recall Results",
        "cardId": "al-psy-3-1-c2"
      },
      {
        "time": "4:10",
        "seconds": 250,
        "label": "Dream Duration & Eye Movement Direction",
        "cardId": "al-psy-3-1-c3"
      },
      {
        "time": "6:05",
        "seconds": 365,
        "label": "Strengths, Limitations & Biological Links",
        "cardId": "al-psy-3-1-c4"
      }
    ],
    "cards": [
      {
        "id": "al-psy-3-1-c1",
        "title": "Biological Background: Sleep Architecture & Electrophysiology",
        "summary": "90-minute ultradian sleep cycles, EEG/EOG traces, and REM vs NREM physiology.",
        "bullets": [
          "Human sleep cycles approximately every 90 minutes (ultradian rhythm) through Non-Rapid Eye Movement (NREM) stages 1–4 and Rapid Eye Movement (REM) sleep.",
          "Electroencephalogram (EEG) records brainwave electrical activity via scalp electrodes: Stage 1–2 show slower theta waves and sleep spindles; Stages 3–4 (slow-wave deep sleep) show high-amplitude delta waves; REM shows fast, low-voltage sawtooth waves closely resembling waking consciousness despite muscle atonia (paralysis).",
          "Electrooculogram (EOG) uses electrodes positioned near the eyes to detect horizontal and vertical eye movements during REM sleep.",
          "**Dement & Kleitman (1957) tested three specific hypotheses**: (1) Does dream recall occur significantly more often from REM than NREM sleep? (2) Is subjective dream duration positively correlated with REM episode length? (3) Do REM eye movement directions match the visual content of the dream (scanning hypothesis)?"
        ],
        "glossaryPills": [
          {
            "term": "ultradian rhythm",
            "definition": "A biological cycle occurring more than once every 24 hours, such as the ~90-minute human sleep cycle."
          },
          {
            "term": "EEG (electroencephalogram)",
            "definition": "Non-invasive recording of electrical voltage fluctuations across the scalp reflecting neural activity."
          }
        ],
        "subsections": [
          {
            "heading": "Dement & Kleitman (1957): Three Research Questions & Findings",
            "bullets": [
              "**1. REM vs NREM dream recall** - woken during **REM**: **79.6% (152/191)** dream recall vs only **6.9% (11/160)** during **NREM** → dreams occur overwhelmingly in REM!",
              "**2. Dream duration estimation** - woken after **5 min vs 15 min** of REM: **88% accuracy** (45/51 for 5 min, 47/60 for 15 min) + strong positive correlation between REM duration and dream narrative word count!",
              "**3. Eye-movement direction** - EOG horizontal/vertical patterns matched dream content (e.g. watching two people throw tomatoes → horizontal eye movements!)."
            ],
            "exampleHeading": "Concrete evaluation: Objective EEG/EOG vs Small Sample",
            "examples": [
              "**Strength**: objective quantitative EEG/EOG measurements in a controlled lab; **Limitation**: tiny sample of **9 adults** (only 5 studied intensively) + artificial hospital sleep lab with electrodes!"
            ]
          }
        ]
      },
      {
        "id": "al-psy-3-1-c2",
        "title": "Dement & Kleitman (1957): Sample & Laboratory Procedure",
        "summary": "Dement & Kleitman’s 9-adult lab setup testing recall, duration, and eye tracking.",
        "bullets": [
          "**Sample**: 9 US adult participants (7 males, 2 females) — 5 studied intensively across 6–17 nights (61 nights total) and 4 studied for 1–2 nights to confirm findings.",
          "**Controls**: Participants ate normally but abstained from caffeine and alcohol on test days; slept in a quiet, dark lab room with EEG and EOG electrodes attached; awakened by a loud doorbell next to their bed and spoke into a voice recorder without the experimenter entering (minimising leading cues).",
          "**Testing Hypothesis 1 (REM vs NREM)**: Awakened at varied times during REM or NREM using different schedules (random, alternating, researcher choice, or 3 REM / 3 NREM blocks). Dreams were only counted if detailed narrative content was reported.",
          "**Testing Hypothesis 2 (Duration)**: Participants awakened after either 5 minutes or 15 minutes of REM and asked to judge which duration had passed; word counts of dream narratives were also correlated with REM minutes.",
          "**Testing Hypothesis 3 (Eye-movement direction)**: Participants woken immediately after ≥ 1 minute of predominantly vertical, horizontal, mixed, or minimal eye movements and asked to describe what they were visually watching."
        ],
        "memoryAid": "Dement & Kleitman 3 Aims = R-D-E: REM vs NREM recall, Duration (5 vs 15 mins), Eye-movement direction.",
        "subsections": [
          {
            "heading": "Ultradian 90-Minute Sleep Cycle & Sleep Stages",
            "bullets": [
              "**Stages 1–2 (light NREM)** - alpha → theta waves + sleep spindles/K-complexes.",
              "**Stages 3–4 (deep SWS)** - slow, high-amplitude **delta waves** (physical restoration & growth hormone).",
              "**Stage 5 (REM)** - fast desynchronised **beta-like EEG** + rapid eye movements + **muscle atonia (paralysis)** so we don’t act out dreams (~5 cycles/night, REM lengthens toward morning)."
            ],
            "exampleHeading": "Concrete check: Why Dement & Kleitman used a doorbell instead of entering the room",
            "examples": [
              "Prevented experimenter cues or waking the sleeper softly, ensuring standardised sudden awakening before dream memories decayed!"
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "EOG (electrooculogram)",
            "definition": "Electrophysiological recording using electrodes near the eyes to measure horizontal and vertical eye movements during REM sleep."
          },
          {
            "term": "muscle atonia",
            "definition": "Temporary inhibition of voluntary skeletal muscles during REM sleep that prevents sleepers from physically acting out vivid dreams."
          }
        ]
      },
      {
        "id": "al-psy-3-1-c3",
        "title": "Key Findings of Dement & Kleitman (1957)",
        "summary": "79.6% REM vs 6.9% NREM recall, 83% duration accuracy, and EOG dream matches.",
        "bullets": [
          "**Hypothesis 1 (REM vs NREM)**: Dreams were recalled on 152 of 191 REM awakenings (79.6%) versus only 11 of 160 NREM awakenings (6.9%). NREM recall rose slightly if woken within 8 minutes of a prior REM period, suggesting memory residue of the previous REM dream.",
          "**Hypothesis 2 (Dream Duration)**: Participants accurately distinguished 5-minute vs 15-minute REM periods on 88% of trials (45/51 for 5 min; 47/60 for 15 min — 92/111 overall, 83% combined). Significant positive correlations (r = +0.40 to +0.71) emerged between REM length and narrative word count.",
          "**Hypothesis 3 (Eye-Movement Direction)**: Strong correspondence between EOG patterns and dream imagery — e.g., 3 vertical-movement dreams involved climbing ladders, throwing basketballs, or operating a hoist; 1 horizontal-movement dream involved watching two people throw tomatoes at each other; minimal movement matched staring at a fixed object.",
          "**Additional finding**: Everyone experienced regular REM bursts averaging ~20 minutes every ~92 minutes (lengthening toward morning), even participants who believed they rarely dreamed."
        ],
        "commonMistake": "Do NOT write that dreams occur EXCLUSIVELY in REM sleep. Dement & Kleitman found 6.9% dream recall in NREM sleep (and ~20% of REM awakenings produced no recall), so REM is strongly associated with vivid dreaming, not 100% exclusive."
      },
      {
        "id": "al-psy-3-1-c4",
        "title": "Evaluation of Dement & Kleitman (1957)",
        "summary": "Objective EEG/EOG rigour vs tiny sample size and lab first-night effect.",
        "bullets": [
          "**Strength — Objective physiological measurement**: EEG and EOG recordings provided reliable, quantitative, falsifiable biological data alongside standardised doorbell awakenings and tape-recorded self-reports.",
          "**Strength — High internal validity**: Banning alcohol/caffeine controlled physiological confounds, and having participants speak into a tape recorder reduced experimenter bias.",
          "**Limitation — Tiny, unrepresentative sample**: Only 9 adults (5 intensive, mostly male) restricts generalisability to children, older adults, or people with sleep disorders.",
          "**Limitation — Low ecological validity & self-report flaws**: Sleeping wired to scalp/face electrodes in an unfamiliar lab with repeated doorbell awakenings alters natural sleep architecture (\"first-night effect\"), and narrative word count is affected by verbal fluency and rapid post-waking forgetting."
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "REM sleep",
        "definition": "Sleep stage marked by rapid eye movements, desynchronised fast EEG waves, muscle atonia, and vivid narrative dreaming."
      },
      {
        "term": "EOG (electrooculogram)",
        "definition": "Device measuring electrical potentials generated by eye movements via electrodes placed around the orbits."
      },
      {
        "term": "Scanning hypothesis",
        "definition": "Proposal that rapid eye movements during REM sleep correspond directly to looking around at visual scenes inside a dream."
      },
      {
        "term": "Muscle atonia",
        "definition": "Temporary inhibition of voluntary skeletal muscle tone during REM sleep, preventing sleepers from physically acting out dreams."
      }
    ],
    "checklistPoints": [
      "Explain how EEG and EOG differentiate NREM and REM sleep stages.",
      "State all three hypotheses, procedure controls, and exact percentage/correlation results from Dement & Kleitman (1957).",
      "Give concrete examples of vertical vs horizontal EOG dream reports supporting the scanning hypothesis.",
      "Evaluate the study on scientific objectivity, sample size, ecological validity, and reliance on verbal recall."
    ]
  },
  "al-psy-3-2": {
    "subtopicId": "al-psy-3-2",
    "subtopicCode": "3.2",
    "subtopicTitle": "Hölzel et al. (2011) Mindfulness & Brain Structure",
    "readingMinutes": 10,
    "videoTitle": "Holzel et al. (2011) - Mindfulness and Brain Structure",
    "youtubeId": "DmZCHB7aYyk",
    "videoChannel": "Mr. Luis",
    "videoDuration": "4:29",
    "courseMatchSummary": "All sections match Cambridge CIE 9990 & AQA A-Level Psychology",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "Holzel et al. (2011) Aim & MBSR 8-Week Programme",
        "cardId": "al-psy-3-2-c1"
      },
      {
        "time": "1:10",
        "seconds": 70,
        "label": "MRI Scanning Procedure & Control Group",
        "cardId": "al-psy-3-2-c2"
      },
      {
        "time": "2:25",
        "seconds": 145,
        "label": "Findings: Hippocampus Grey Matter Increase",
        "cardId": "al-psy-3-2-c3"
      },
      {
        "time": "3:30",
        "seconds": 210,
        "label": "Evaluation: Neuroplasticity & Sample Limits",
        "cardId": "al-psy-3-2-c4"
      }
    ],
    "cards": [
      {
        "id": "al-psy-3-2-c1",
        "title": "Background: Neuroplasticity & MBSR",
        "summary": "How lifelong neuroplasticity and 8-week MBSR training reshape cortical grey matter.",
        "bullets": [
          "Neuroplasticity is the brain’s lifelong capacity to reorganise neural pathways and alter grey matter volume/density in response to learning, experience, or environmental demands (e.g., Maguire et al., 2000 on London taxi drivers’ posterior hippocampi).",
          "Mindfulness-Based Stress Reduction (MBSR, Jon Kabat-Zinn) is a structured 8-week secular programme cultivating non-judgmental, present-moment awareness through body scan, mindful yoga, and sitting meditation.",
          "Prior cross-sectional studies showed long-term meditators had thicker cortical regions, but could not rule out pre-existing brain differences. Hölzel et al. (2011) conducted a longitudinal MRI study to test whether an 8-week MBSR course directly increases regional grey matter concentration in meditation-naïve adults."
        ],
        "glossaryPills": [
          {
            "term": "grey matter",
            "definition": "Brain tissue densely packed with neuronal cell bodies, dendrites, and synapses responsible for information processing."
          },
          {
            "term": "voxel-based morphometry (VBM)",
            "definition": "Automated MRI analysis technique comparing regional concentrations of grey matter across the whole brain."
          }
        ],
        "subsections": [
          {
            "heading": "Hölzel et al. (2011): 8-Week MBSR & Grey Matter Neuroplasticity",
            "bullets": [
              "**Sample & design** - 16 healthy meditation-naive adults completed an **8-week Mindfulness-Based Stress Reduction (MBSR)** course (~27 min/day practice) vs 17 wait-list controls; **MRI voxel-based morphometry** scanned brains BEFORE and AFTER!",
              "**Key brain changes** - significant **INCREASE in grey matter concentration** in the **left hippocampus** (learning, memory, emotion regulation), **posterior cingulate cortex (PCC)**, **temporo-parietal junction (TPJ)** (empathy/perspective-taking), and **cerebellum**!"
            ],
            "exampleHeading": "Concrete check: Five Facet Mindfulness Questionnaire (FFMQ)",
            "examples": [
              "MBSR participants also showed significant improvements on 3 of 5 FFMQ mindfulness scales (**acting with awareness, observing, non-judging**), linking subjective wellbeing directly to structural neuroplasticity!"
            ]
          }
        ]
      },
      {
        "id": "al-psy-3-2-c2",
        "title": "Hölzel et al. (2011): Sample, Design & Procedure",
        "summary": "Longitudinal MRI, VBM, FFMQ, and wait-list control design in Hölzel et al.",
        "bullets": [
          "**Sample**: 33 right-handed, healthy, meditation-naïve US adults (aged 25–55) enrolled in MBSR courses at UMass Center for Mindfulness — 16 in the MBSR experimental group (6 males, 10 females; mean age 38) and 17 in a wait-list control group (11 males, 6 females; mean age 39). Screened to exclude psychiatric medication, neurological disorders, and MRI contraindications.",
          "**Design**: Longitudinal quasi-experiment / natural allocation (participants self-selected course dates; wait-list controls waited to take MBSR later) with pre- and post-intervention repeated measures.",
          "**Intervention**: Eight weekly 2.5-hour MBSR group classes, one 6.5-hour silent retreat in Week 6, plus daily 45-minute guided home-practice audio recordings (participants logged daily minutes; mean total home practice = 22.6 hours, ~27 min/day).",
          "**Measures**: High-resolution structural MRI scans taken ~2 weeks before and ~2 weeks after the 8-week period (analysed via VBM on pre-specified Regions of Interest — bilateral hippocampus & insula — plus whole-brain exploratory analysis), alongside the 39-item Five Facet Mindfulness Questionnaire (FFMQ)."
        ],
        "memoryAid": "Hölzel numbers: 16 MBSR vs 17 wait-list controls, 8 weeks, 2.5 h/week + 6.5 h retreat, ~27 min/day home practice, 5-facet FFMQ.",
        "subsections": [
          {
            "heading": "Strengths, Limitations & Neuroplasticity Significance",
            "bullets": [
              "**Strengths** - objective **structural MRI** scans (cannot be faked by social desirability!), longitudinal pre/post comparison with a wait-list control group.",
              "**Limitations** - **no random allocation** (participants self-selected/opted into MBSR → participant variables!), small sample (n = 16 MBSR), and **confounding variables** (social group support/relaxation in MBSR classes, not strictly meditation alone!)."
            ],
            "exampleHeading": "Concrete check: Maguire et al. (2000) London Taxi Drivers parallel",
            "examples": [
              "Both Hölzel (2011) and Maguire (2000) prove **adult brain plasticity** — sustained mental training physically grows hippocampal grey matter!"
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "neuroplasticity",
            "definition": "The brain’s lifelong capacity to reorganise synaptic connections and alter grey-matter density in response to learning, experience, or recovery."
          }
        ]
      },
      {
        "id": "al-psy-3-2-c3",
        "title": "Key Findings of Hölzel et al. (2011)",
        "summary": "Grey matter growth in left hippocampus, PCC, TPJ, and cerebellum (not insula).",
        "bullets": [
          "**Behavioural (FFMQ)**: The MBSR group showed statistically significant increases on 3 of the 5 mindfulness facets — Acting with Awareness, Observing, and Non-Judging — whereas wait-list controls showed no significant changes.",
          "**Region of Interest (ROI) MRI result**: Significant increase in grey matter concentration in the LEFT HIPPOCAMPUS (linked to learning, memory consolidation, and emotion regulation) in the MBSR group compared with controls. Contrary to prediction, no significant change occurred in the insula.",
          "**Whole-brain VBM results**: Significant grey matter increases also emerged in three additional areas: the Posterior Cingulate Cortex (PCC — self-referential processing & mind-wandering), the Temporo-Parietal Junction (TPJ — perspective-taking, empathy & compassion), and the Cerebellum (emotion/cognitive regulation) plus parts of the brainstem (pons/raphe nuclei, linked to serotonin production).",
          "**Dose–response check**: Surprisingly, grey matter changes did NOT correlate significantly with total home-practice hours, suggesting even moderate consistent practice triggered structural plasticity."
        ],
        "commonMistake": "Students often claim Hölzel et al. found insula grey matter growth or amygdala shrinkage — in THIS 2011 paper, the insula showed NO significant change (amygdala reduction was reported in an earlier 2010 Hölzel paper). The four confirmed growth areas are Left Hippocampus, PCC, TPJ, and Cerebellum."
      },
      {
        "id": "al-psy-3-2-c4",
        "title": "Evaluation of Hölzel et al. (2011)",
        "summary": "Objective structural MRI strengths vs wait-list confounds and self-selected sample.",
        "bullets": [
          "**Strength — Objective neuroimaging & longitudinal control**: Structural MRI + automated VBM eliminates subjective researcher bias and demand characteristics on brain scans, while pre/post measurement with a wait-list control strengthens causal inference over cross-sectional studies.",
          "**Strength — High real-world clinical usefulness**: Demonstrates that a brief, non-pharmacological, 8-week accessible course induces measurable neuroplasticity in stress- and empathy-related brain networks.",
          "**Limitation — Lack of active control group & random allocation**: Wait-list controls received no social interaction, group support, gentle yoga exercise, or instructor attention — so these confounding lifestyle elements of MBSR (not solely meditation) may explain part of the neural change.",
          "**Limitation — Small, self-selected sample**: Only 16 MBSR participants (all voluntarily seeking stress reduction, right-handed, educated US adults) limits population validity; FFMQ relies on subjective self-report vulnerable to social desirability."
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "Neuroplasticity",
        "definition": "The brain’s ability to modify its physical structure and functional neural connections throughout life in response to experience."
      },
      {
        "term": "Hippocampus",
        "definition": "Limbic-system structure essential for memory consolidation, spatial navigation, and regulating stress hormones."
      },
      {
        "term": "MBSR",
        "definition": "Mindfulness-Based Stress Reduction — an 8-week secular training programme combining meditation, body scanning, and mindful yoga."
      },
      {
        "term": "Temporo-Parietal Junction (TPJ)",
        "definition": "Cortical region implicated in perspective-taking, social cognition, and empathy."
      }
    ],
    "checklistPoints": [
      "Explain why a longitudinal pre/post MRI design improves upon earlier cross-sectional meditation studies.",
      "State the sample sizes, MBSR schedule, FFMQ outcomes, and four brain regions showing grey matter increases in Hölzel et al. (2011).",
      "Note that insula grey matter did NOT change significantly and home-practice duration did not correlate with brain change.",
      "Evaluate the limitation of using a wait-list control instead of an active control group."
    ]
  },
  "al-psy-3-3": {
    "subtopicId": "al-psy-3-3",
    "subtopicCode": "3.3",
    "subtopicTitle": "Biopsychology — Localisation, Synaptic Transmission & Fight-or-Flight",
    "readingMinutes": 12,
    "videoTitle": "Psychology - Brain Structure & Localisation of Function",
    "youtubeId": "MSaY3K-vSJA",
    "videoChannel": "Cognito",
    "videoDuration": "5:43",
    "courseMatchSummary": "All sections match Cambridge CIE 9990 & AQA A-Level Psychology",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "Introduction to Brain Structure & Localisation",
        "cardId": "al-psy-3-3-c1"
      },
      {
        "time": "0:41",
        "seconds": 41,
        "label": "The Four Main Lobes of the Human Brain",
        "cardId": "al-psy-3-3-c2"
      },
      {
        "time": "3:04",
        "seconds": 184,
        "label": "Evidence Supporting Localisation of Function",
        "cardId": "al-psy-3-3-c3"
      },
      {
        "time": "4:31",
        "seconds": 271,
        "label": "Broca’s Area Case Study (Tan / Leborgne)",
        "cardId": "al-psy-3-3-c4"
      }
    ],
    "cards": [
      {
        "id": "al-psy-3-3-c1",
        "title": "Nervous System Divisions & the Fight-or-Flight Response",
        "summary": "CNS/PNS/ANS organisation and the SAM adrenaline fight-or-flight stress pathway.",
        "diagram": "reflex-arc",
        "bullets": [
          "**The Nervous System divides into the Central Nervous System (CNS**: brain and spinal cord) and Peripheral Nervous System (PNS), which splits into the Somatic NS (voluntary skeletal muscles) and Autonomic NS (ANS: involuntary vital functions).",
          "The ANS comprises the Sympathetic branch (arouses the body for action) and Parasympathetic branch (\"rest and digest\", restores baseline homeostasis after threat passes).",
          "**Acute stress pathway (SAM axis — Sympathomedullary pathway)**: Amygdala detects threat → signals Hypothalamus → activates Sympathetic NS → stimulates Adrenal Medulla to release Adrenaline (epinephrine) and Noradrenaline into the bloodstream.",
          "**Physiological effects**: Increased heart rate, dilated bronchioles and pupils, diverted blood flow to skeletal muscles, glycogenolysis (glucose release), and inhibited digestion/salivation. Chronic stress additionally activates the HPA axis (Hypothalamus → Pituitary ACTH → Adrenal Cortex releasing Cortisol)."
        ],
        "subsections": [
          {
            "heading": "Acute Stress (SAM Axis) vs Parasympathetic Recovery",
            "bullets": [
              "**SAM Acute Pathway**: Amygdala detects stressor → Hypothalamus activates **Sympathetic NS** → **Adrenal Medulla** releases **adrenaline** into bloodstream → heart rate, breathing, and blood glucose surge for fight or flight.",
              "**Parasympathetic Recovery**: Once the threat passes, the parasympathetic branch slows heart rate, constricts bronchioles, and restarts digestion to restore homeostasis."
            ],
            "exampleHeading": "Concrete check: Acute (SAM) vs Chronic (HPA) stress pathways",
            "examples": [
              "**Acute threat (seconds)**: Sympathomedullary (SAM) axis → **adrenaline** from adrenal medulla; **Chronic stress (days/weeks)**: Hypothalamic-Pituitary-Adrenal (HPA) axis → ACTH → **cortisol** from adrenal cortex (suppresses immunity over time)."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "adrenaline",
            "definition": "Hormone secreted by the adrenal medulla that rapidly prepares the body for vigorous physical action during acute threat."
          },
          {
            "term": "parasympathetic nervous system",
            "definition": "Autonomic branch that conserves energy and restores heart rate, breathing, and digestion to resting levels."
          }
        ],
        "memoryAid": "Sympathetic = Stress/Speed up; Parasympathetic = Peace/Parachute (slows you back down)."
      },
      {
        "id": "al-psy-3-3-c2",
        "title": "Neurones & Synaptic Transmission",
        "summary": "Electrical action potentials and chemical synaptic transmission via EPSPs and IPSPs.",
        "diagram": "synaptic-transmission",
        "bullets": [
          "**Three neurone classes**: Sensory neurones (long dendrites, short axon — receptors to CNS), Relay neurones (short dendrites and axons inside CNS), Motor neurones (short dendrites, long myelinated axon — CNS to effectors).",
          "**Action potential**: Resting potential (~ −70 mV) depolarises rapidly to +40 mV as Na⁺ channels open, travelling unidirectionally along the axon via saltatory conduction (jumping between Nodes of Ranvier along the myelin sheath).",
          "**Synaptic transmission**: (1) Impulse reaches presynaptic terminal; (2) Ca²⁺ influx causes synaptic vesicles to fuse with the presynaptic membrane and release neurotransmitters by exocytosis across the synaptic cleft; (3) Neurotransmitters bind to complementary receptors on the postsynaptic membrane; (4) Signal terminates via reuptake transporters or enzymatic breakdown.",
          "**Summation**: Excitatory neurotransmitters (e.g., acetylcholine, glutamate) cause EPSPs (depolarisation — more likely to fire); inhibitory neurotransmitters (e.g., GABA, serotonin) cause IPSPs (hyperpolarisation — less likely to fire). The postsynaptic neurone fires only if the summed net charge crosses threshold."
        ],
        "subsections": [
          {
            "heading": "Localisation of Function vs Holistic Theory & Split-Brain (Sperry)",
            "bullets": [
              "**Broca’s area (left frontal lobe)** - speech **production** (damage → slow, halting Broca’s aphasia); **Wernicke’s area (left temporal lobe)** - language **comprehension** (damage → fluent nonsense Wernicke’s aphasia).",
              "**Sperry (1968) split-brain studies** - severing the corpus callosum stops hemispheres sharing info: object shown to **RVF (left hemisphere)** → patient can **NAME it**; shown to **LVF (right hemisphere)** → patient **cannot name it**, yet can **PICK IT UP with their left hand**!"
            ],
            "exampleHeading": "Concrete check: Brain scanning techniques trade-off",
            "examples": [
              "**fMRI**: high **spatial** resolution (1–2 mm), poor temporal (~5 s lag); **EEG/ERP**: superb **temporal** resolution (~1 ms), poor spatial resolution (surface scalp only)!"
            ]
          }
        ],
        "commonMistake": "Transmission WITHIN a neurone is electrical (action potential), whereas transmission ACROSS the synaptic cleft between neurones is CHEMICAL (neurotransmitters). Never write \"electrical impulses jump across the synapse\"!",
        "glossaryPills": [
          {
            "term": "hemispheric lateralisation",
            "definition": "Specialisation of certain mental functions (e.g. language in the left hemisphere, visuo-spatial processing in the right) to one side of the brain."
          }
        ]
      },
      {
        "id": "al-psy-3-3-c3",
        "title": "Localisation of Function, Hemispheric Lateralisation & Sperry (1968)",
        "summary": "Cortical localisation, Broca’s/Wernicke’s areas, and Sperry’s split-brain studies.",
        "bullets": [
          "**Localisation theory**: Specific cognitive/motor functions map onto discrete cortical regions — Motor cortex (rear frontal lobe, contralateral movement), Somatosensory cortex (front parietal lobe), Visual cortex (occipital lobe), Auditory cortex (temporal lobe), Broca’s area (left frontal lobe — speech production; damage causes non-fluent Broca’s aphasia), Wernicke’s area (left temporal lobe — language comprehension; damage causes fluent but meaningless Wernicke’s aphasia).",
          "**Hemispheric lateralisation**: Language is predominantly left-lateralised in ~95% of right-handers, while the right hemisphere excels in visuo-spatial synthesis and facial recognition. Both hemispheres normally communicate via the corpus callosum.",
          "**Sperry (1968) split-brain studies**: Tested 11 commissurotomy patients (corpus callosum severed for severe epilepsy) by flashing stimuli briefly (~0.1 s) to either the Right Visual Field (processed by Left Hemisphere) or Left Visual Field (Right Hemisphere). Words shown to RVF were spoken aloud easily; words shown to LVF could NOT be named, yet the left hand (controlled by RH) could accurately pick up the matching object behind a screen!",
          "**Challenge to strict localisation**: Lashley’s (1950) equipotentiality theory (rat maze memory depended on percentage of cortex removed, not location) and functional recovery after stroke show brain networks operate holistically and plastically."
        ],
        "subsections": [
          {
            "heading": "Evaluating Strict Localisation vs Neuroplasticity",
            "bullets": [
              "**Supporting evidence**: Case studies such as **Phineas Gage** (prefrontal cortex → personality change), Broca’s patient **Tan** (speech production), and Petersen et al. (1988) brain scans showing Wernicke’s active during listening and Broca’s during reading.",
              "**Challenging evidence**: **Lashley (1950)** showed higher cognitive learning is distributed holistically, and post-stroke functional recovery demonstrates **neural plasticity** (axonal sprouting and recruitment of homologous areas)."
            ],
            "exampleHeading": "Concrete check: Contralateral wiring in split-brain exam questions",
            "examples": [
              "**Right Visual Field (RVF) → Left Hemisphere → Speech output** (can say the word aloud); **Left Visual Field (LVF) → Right Hemisphere → Left Hand motor control** (cannot name it, CAN select or draw it with the left hand)."
            ]
          }
        ]
      },
      {
        "id": "al-psy-3-3-c4",
        "title": "Comparing Brain Investigation Methods (fMRI, EEG, ERP, Post-Mortem)",
        "summary": "Comparing spatial and temporal resolution of fMRI, EEG, ERPs, and post-mortems.",
        "bullets": [
          "**fMRI (Functional MRI)**: Measures Blood Oxygen Level Dependent (BOLD) haemodynamic response. High spatial resolution (~1–2 mm) and non-invasive (no radiation), but expensive with poor temporal resolution (~5 s lag).",
          "**EEG**: Records overall scalp electrical patterns across sleep/epilepsy. Excellent temporal resolution (~1 ms) and cheaper than fMRI, but poor spatial resolution (cannot pinpoint deep subcortical structures).",
          "**ERPs (Event-Related Potentials)**: Averages dozens of EEG trials time-locked to a specific stimulus to filter out background noise and isolate sensory/cognitive waves (e.g., P300). High temporal resolution, requires many artificial repetitive trials.",
          "**Post-mortem examinations**: Detailed anatomical dissection after death (e.g., Broca’s patient \"Tan\"). Allows inspection of deep tissue/microscopic lesions impossible with live scans, but cannot measure active cognition and suffers from causation/confounding issues (age, drugs, post-mortem decay)."
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "Synaptic transmission",
        "definition": "Chemical signalling across the synaptic cleft via neurotransmitter exocytosis and postsynaptic receptor binding."
      },
      {
        "term": "Summation",
        "definition": "The algebraic addition of excitatory (EPSP) and inhibitory (IPSP) inputs at the postsynaptic neurone determining whether an action potential fires."
      },
      {
        "term": "Broca’s area",
        "definition": "Region in the left posterior inferior frontal gyrus responsible for speech production."
      },
      {
        "term": "Hemispheric lateralisation",
        "definition": "Dominance of one cerebral hemisphere over the other for particular psychological functions such as language."
      }
    ],
    "checklistPoints": [
      "Trace both the SAM (adrenaline) acute stress pathway and the parasympathetic recovery response.",
      "Explain synaptic transmission step-by-step including EPSPs, IPSPs, summation, and reuptake.",
      "Locate key cortical regions (motor, somatosensory, visual, auditory, Broca’s, Wernicke’s) and evaluate localisation vs holistic/plasticity evidence.",
      "Compare spatial resolution, temporal resolution, and limitations of fMRI, EEG, ERP, and post-mortem examinations."
    ]
  },
  "al-psy-4-1": {
    "subtopicId": "al-psy-4-1",
    "subtopicCode": "4.1",
    "subtopicTitle": "Classical & Operant Conditioning (Pavlov & Skinner)",
    "readingMinutes": 10,
    "videoTitle": "Psychology - Classical Conditioning",
    "youtubeId": "eUsVH8NogSo",
    "videoChannel": "Cognito",
    "videoDuration": "6:31",
    "courseMatchSummary": "All sections match Cambridge CIE 9990 & AQA A-Level Psychology",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "Introduction to Classical Conditioning",
        "cardId": "al-psy-4-1-c1"
      },
      {
        "time": "1:25",
        "seconds": 85,
        "label": "Key Terms (UCS, UCR, NS, CS, CR)",
        "cardId": "al-psy-4-1-c2"
      },
      {
        "time": "2:48",
        "seconds": 168,
        "label": "Three Key Processes in Conditioning",
        "cardId": "al-psy-4-1-c3"
      },
      {
        "time": "5:20",
        "seconds": 320,
        "label": "The Little Albert Experiment (Watson & Rayner)",
        "cardId": "al-psy-4-1-c4"
      }
    ],
    "cards": [
      {
        "id": "al-psy-4-1-c1",
        "title": "Classical Conditioning: Learning by Association (Pavlov, 1927)",
        "summary": "Pavlovian stimulus association, extinction, spontaneous recovery, and generalisation.",
        "bullets": [
          "**Core behaviourist premise**: Humans are born a blank slate (tabula rasa); psychology should study objective, observable stimulus–response (S–R) behaviour, and basic learning laws generalise across species.",
          "**Pavlov’s dogs**: Before conditioning, Food (Unconditioned Stimulus, UCS) naturally triggers Salivation (Unconditioned Response, UCR), while a Bell is a Neutral Stimulus (NS). During conditioning, the Bell (NS) is repeatedly paired just before Food (UCS) → UCR. After conditioning, the Bell alone becomes a Conditioned Stimulus (CS) eliciting Salivation as a Conditioned Response (CR).",
          "**Key phenomena**: Extinction (repeatedly presenting CS without UCS weakens the CR), Spontaneous Recovery (sudden reappearance of an extinguished CR after a rest interval), Stimulus Generalisation (responding to similar stimuli, e.g., Watson & Rayner’s 1920 Little Albert fearing white rats AND furry masks), and Stimulus Discrimination (responding only to the exact CS)."
        ],
        "glossaryPills": [
          {
            "term": "extinction",
            "definition": "Gradual weakening and disappearance of a conditioned response when the CS is repeatedly presented without the UCS."
          },
          {
            "term": "stimulus generalisation",
            "definition": "Tendency for stimuli similar to the original conditioned stimulus to evoke the same conditioned response."
          }
        ],
        "memoryAid": "Classical Conditioning = involuntary Reflexes paired by Association (UCS → UCR; NS + UCS → UCR; CS → CR).",
        "subsections": [
          {
            "heading": "Pavlov’s Classical Conditioning & Extinction/Spontaneous Recovery",
            "bullets": [
              "**Acquisition** - neutral stimulus (bell) repeatedly paired immediately BEFORE unconditioned stimulus (food → salivation) becomes a **conditioned stimulus (CS)** triggering a **conditioned response (CR)**!",
              "**Key phenomena** - **Extinction** (presenting CS repeatedly without UCS weakens CR); **Spontaneous recovery** (CR briefly reappears after rest); **Generalisation** (similar tones trigger CR) vs **Discrimination** (only exact pitch triggers CR)."
            ],
            "exampleHeading": "Concrete check: Little Albert (Watson & Rayner, 1920)",
            "examples": [
              "White rat (NS) + loud steel bar bang (UCS → fear) → rat became CS eliciting conditioned fear, which **generalised** to fur coats and Santa masks!"
            ]
          }
        ]
      },
      {
        "id": "al-psy-4-1-c2",
        "title": "Operant Conditioning: Learning by Consequences (Skinner, 1938)",
        "summary": "Skinner’s positive/negative reinforcement, punishment, and variable-ratio schedules.",
        "bullets": [
          "Voluntary behaviour is shaped by its consequences inside Skinner boxes (rats pressing levers for food pellets or escaping mild electric floor grids).",
          "**Positive reinforcement**: Adding a pleasant stimulus after a behaviour (e.g., food pellet or praise) to INCREASE the likelihood of that behaviour recurring.",
          "**Negative reinforcement**: REMOVING an unpleasant/aversive stimulus after a behaviour (e.g., pressing a lever switches off a shock, or taking aspirin removes a headache) to INCREASE the likelihood of that behaviour.",
          "**Punishment**: Adding an unpleasant consequence (positive punishment) or removing a rewarding one (negative punishment, e.g., losing privileges) to DECREASE the likelihood of a behaviour.",
          "**Reinforcement schedules**: Continuous reinforcement produces fast acquisition; Variable-Ratio schedules (reward after an unpredictable number of responses, like slot machines) produce the highest response rate and greatest resistance to extinction."
        ],
        "commonMistake": "Negative reinforcement is NOT punishment! Reinforcement ALWAYS increases a behaviour (\"negative\" simply means subtracting something aversive). Punishment decreases a behaviour.",
        "subsections": [
          {
            "heading": "Skinner’s Operant Conditioning & Reinforcement Schedules",
            "bullets": [
              "**Positive reinforcement** = ADD pleasant reward → increases behaviour; **Negative reinforcement** = REMOVE unpleasant stimulus (e.g. turning off shock/nagging!) → **INCREASES** behaviour; **Punishment** = unpleasant consequence → **DECREASES** behaviour!",
              "**Schedules** - **Variable-ratio** (e.g. slot machines) produces the **HIGHEST, most extinction-resistant** response rate!"
            ],
            "exampleHeading": "Concrete application: Token Economy in Psychiatric Wards",
            "examples": [
              "Patients earn **secondary reinforcers (tokens)** immediately for adaptive behaviours and exchange them for **primary/valued privileges**!"
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "negative reinforcement",
            "definition": "Strengthening a behaviour by removing or avoiding an unpleasant stimulus (NOT punishment!)."
          }
        ]
      },
      {
        "id": "al-psy-4-1-c3",
        "title": "Primary vs Secondary Reinforcers & Shaping",
        "summary": "Primary vs secondary reinforcers, shaping successive approximations, and token economies.",
        "bullets": [
          "Primary reinforcers satisfy innate biological survival needs directly (food, water, warmth, relief from pain).",
          "Secondary (conditioned) reinforcers acquire rewarding value through classical association with primary reinforcers (e.g., money, clicker sound in animal training, school merit tokens).",
          "**Shaping (successive approximations)**: Reinforcing progressively closer steps toward a complex target behaviour that an organism would never perform spontaneously by chance (e.g., Fagen et al., 2014 training elephants for trunk washes).",
          "Token economies in clinical wards and schools combine secondary reinforcers (tokens) exchanged for backup primary/valued rewards to modify maladaptive behaviours."
        ]
      },
      {
        "id": "al-psy-4-1-c4",
        "title": "Evaluating the Behaviourist / Conditioning Approach",
        "summary": "Empirical credibility and therapy value vs environmental determinism and animal limits.",
        "bullets": [
          "**Strength — Scientific credibility & control**: Relied on replicable lab experiments with objective quantitative measures (saliva drops, lever-press rates), establishing psychology as an empirical science.",
          "**Strength — Practical real-world applications**: Underpins systematic desensitisation for phobias, token economies in psychiatric units, classroom management, and humane positive-reinforcement animal care.",
          "**Limitation — Environmental determinism & reductionism**: Reduces complex human cognition, emotion, and free will to mechanical S–R chains, ignoring internal mental mediational processes and biological preparedness (Seligman, 1971 showed organisms fear evolutionary threats like snakes far more readily than flowers).",
          "**Limitation — Extrapolation & animal ethics**: Rats and pigeons lack human language, moral reasoning, and metacognition; Skinner-box deprivation and electric shocks raise ethical concerns."
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "Positive reinforcement",
        "definition": "Increasing the probability of a behaviour by delivering a pleasant reward immediately after it."
      },
      {
        "term": "Negative reinforcement",
        "definition": "Increasing the probability of a behaviour by terminating or avoiding an aversive stimulus."
      },
      {
        "term": "Secondary reinforcer",
        "definition": "A neutral stimulus (e.g., clicker or token) that becomes rewarding via learned association with a primary reinforcer."
      },
      {
        "term": "Shaping",
        "definition": "Reinforcing successive approximations until a complex novel target behaviour is reliably performed."
      }
    ],
    "checklistPoints": [
      "Diagram classical conditioning clearly using UCS, UCR, NS, CS, and CR.",
      "Differentiate positive reinforcement, negative reinforcement, and punishment with original examples.",
      "Explain shaping, primary vs secondary reinforcers, and why variable-ratio schedules resist extinction.",
      "Evaluate behaviourism on scientific rigour, real-world therapies, animal extrapolation, and environmental determinism."
    ]
  },
  "al-psy-4-2": {
    "subtopicId": "al-psy-4-2",
    "subtopicCode": "4.2",
    "subtopicTitle": "Bandura et al. (1961) Bobo Doll & Social Learning Theory",
    "readingMinutes": 11,
    "videoTitle": "Social Learning Theory - Approaches [A-Level Psychology]",
    "youtubeId": "OLhPDVAlosk",
    "videoChannel": "Psych Boost",
    "videoDuration": "10:36",
    "courseMatchSummary": "All sections match Cambridge CIE 9990 & AQA A-Level Psychology",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "Intro to Social Learning Theory",
        "cardId": "al-psy-4-2-c1"
      },
      {
        "time": "2:48",
        "seconds": 168,
        "label": "The Role of Mediational Processes",
        "cardId": "al-psy-4-2-c2"
      },
      {
        "time": "5:56",
        "seconds": 356,
        "label": "Bandura’s Research (Bobo Doll)",
        "cardId": "al-psy-4-2-c3"
      },
      {
        "time": "10:01",
        "seconds": 601,
        "label": "Summary & Evaluation",
        "cardId": "al-psy-4-2-c4"
      }
    ],
    "cards": [
      {
        "id": "al-psy-4-2-c1",
        "title": "Social Learning Theory (SLT) & Mediational Processes",
        "summary": "Observational learning, identification, vicarious reinforcement, and ARRM steps.",
        "bullets": [
          "Bandura bridged behaviourism and cognitive psychology by proposing that people learn socially via observation and imitation of role models without needing direct personal reinforcement.",
          "Vicarious reinforcement: Observing a model rewarded for a behaviour increases imitation, whereas seeing a model punished decreases performance (demonstrated in Bandura & Walters, 1963).",
          "**Identification**: Observers are more likely to imitate models they identify with — typically warm, high-status, powerful, or same-sex models.",
          "Four cognitive mediational processes (ARRM): Attention (noticing the model’s behaviour), Retention (storing a mental representation in memory), Reproduction (having the motor/physical capability to copy it), and Motivation (expecting rewards to outweigh costs)."
        ],
        "glossaryPills": [
          {
            "term": "vicarious reinforcement",
            "definition": "Indirect reinforcement occurring when an observer sees a role model rewarded for a behaviour."
          },
          {
            "term": "mediational processes",
            "definition": "Internal cognitive factors (attention, retention, reproduction, motivation) operating between observing a stimulus and producing a response."
          }
        ],
        "memoryAid": "Bandura’s 4 mediational steps = ARRM: Attention, Retention, Reproduction, Motivation.",
        "subsections": [
          {
            "heading": "Bandura, Ross & Ross (1961): Bobo Doll Findings",
            "bullets": [
              "**72 Stanford nursery children** (36 boys, 36 girls, matched on baseline aggression) split into **aggressive model**, **non-aggressive model**, and **control** (also crossed with same-sex vs opposite-sex adult model!).",
              "**Key findings** - children observing an aggressive model imitated BOTH specific **physical** (mallet/kicking) and **verbal** (\"Pow!\") acts far more than non-aggressive/control groups; **boys were more physically aggressive** than girls, and children imitated **same-sex models** more strongly!"
            ],
            "exampleHeading": "Concrete check: Four Mediational Processes in Social Learning Theory",
            "examples": [
              "**A-R-M-M**: **A**ttention (notice behaviour) → **R**etention (remember it) → **M**otor Reproduction (ability to perform it) → **M**otivation (expecting **vicarious reinforcement**)!"
            ]
          }
        ]
      },
      {
        "id": "al-psy-4-2-c2",
        "title": "Bandura, Ross & Ross (1961): Transmission of Aggression (Bobo Doll)",
        "summary": "Bandura’s 72-child matched-pairs Bobo Doll three-stage aggression procedure.",
        "bullets": [
          "**Aim**: Test whether young children imitate novel aggressive acts modelled by an adult even in a new setting with the model absent, and whether model gender affects imitation.",
          "**Sample & Design**: 72 Stanford University nursery children (36 boys, 36 girls, aged 37–69 months, mean 52 months). Matched-pairs design: children were pre-rated on 4 five-point aggression scales by two independent observers (inter-rater reliability r = +0.89) and matched into triplets across 3 conditions: Aggressive model (24), Non-aggressive model (24), and Control/no model (24), subdivided by same-sex vs opposite-sex adult model (6 per cell).",
          "**Stage 1 (Modelling, 10 min)**: Child played with potato prints while model either quietly assembled Tinkertoys or attacked a 5-foot inflatable Bobo doll with distinctive physical acts (sitting on it, punching nose, striking with mallet, tossing in air) and scripted verbal phrases (\"Sock him in the nose!\", \"Pow!\").",
          "**Stage 2 (Mild Aggression Arousal, 2 min)**: Child entered a room with attractive toys, then was told these best toys were reserved for other children to induce mild frustration.",
          "**Stage 3 (Delayed Imitation Test, 20 min)**: Child placed alone in a room containing aggressive toys (Bobo doll, mallet, dart guns) and non-aggressive toys (tea set, crayons, bears). Two observers behind a one-way mirror scored behaviour every 5 seconds (240 intervals; inter-rater r > +0.90)."
        ],
        "subsections": [
          {
            "heading": "Strengths & Limitations of Bandura (1961) & SLT",
            "bullets": [
              "**Strengths** - matched-pairs design controlled baseline aggression; bridges behaviourism and cognitive psychology via mediational processes; huge real-world impact (age ratings/watershed on violent media).",
              "**Limitations** - **Bobo doll is designed to be hit** (novelty/demand characteristics — Cumberbatch found kids who hadn’t played with one were 5× more likely to hit it!); underestimates **biological factors** (testosterone in boys’ higher physical aggression!)."
            ],
            "exampleHeading": "Concrete check: Bandura (1965) Vicarious Reinforcement follow-up",
            "examples": [
              "Kids who saw the aggressive model **REWARDED** imitated most; those who saw the model **PUNISHED** imitated least — until offered stickers themselves, proving **learning ≠ performance**!"
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "identification",
            "definition": "Cognitive process where an observer associates themselves with a role model (e.g. same-sex or high-status adult) and desires to adopt their behaviours."
          },
          {
            "term": "matched-pairs design",
            "definition": "Experimental design pairing participants on a key variable (baseline aggression in Bandura, 1961) before allocating them across conditions to control participant variables."
          }
        ]
      },
      {
        "id": "al-psy-4-2-c3",
        "title": "Key Results of Bandura et al. (1961)",
        "summary": "Imitative vs non-imitative aggression and same-sex physical modelling effects.",
        "bullets": [
          "**Imitative aggression**: Children exposed to the aggressive model displayed FAR more exact physical and verbal imitative aggression than children in the non-aggressive or control conditions (which showed almost zero imitative aggression).",
          "**Non-imitative aggression**: Aggressive-model children also exhibited higher levels of novel, non-imitative aggression (e.g., aiming toy guns), showing disinhibition of aggressive impulses.",
          "**Gender differences**: Boys displayed significantly more physical aggression overall than girls (e.g., mean 25.8 imitative physical acts after male aggressive model vs girls’ 5.5), whereas verbal aggression levels were nearly equal across sexes.",
          "**Same-sex modelling effect**: Both boys and girls imitated same-sex models more strongly — boys showed markedly more physical aggression after watching a male aggressive model than a female aggressive model."
        ],
        "commonMistake": "Do not confuse Bandura (1961) with Bandura (1963/1965)! In the 1961 core study, the adult model was LIVE and was NEVER rewarded or punished — vicarious reinforcement was tested in Bandura’s follow-up 1965 study."
      },
      {
        "id": "al-psy-4-2-c4",
        "title": "Evaluation of Bandura et al. (1961) & SLT",
        "summary": "Matching controls and reliability vs toy artificiality, ethics, and biology.",
        "bullets": [
          "**Strength — Rigorous experimental control**: Matching children on baseline aggression (r = +0.89), scripted model actions, identical room setup, and high inter-observer reliability (r > +0.90) give very strong internal validity.",
          "**Limitation — Artificiality & demand characteristics**: A Bobo doll is explicitly designed to bounce back when hit; Cumberbatch (1990) found children unfamiliar with a Bobo doll were 5× more likely to hit it, and one child reportedly remarked \"Look Mommy, there’s the doll we have to hit\" — questioning whether hitting a plastic toy reflects genuine interpersonal aggression.",
          "**Limitation — Ethical concerns & snapshot nature**: Deliberately exposing 3-to-5-year-olds to adult violence and frustration risked psychological distress or lasting learned aggression without long-term follow-up.",
          "**Limitation — Underestimates biological factors**: Boys’ consistently higher physical aggression across ALL conditions suggests hormonal/biological influences (e.g., testosterone) interact with social modelling."
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "Modelling",
        "definition": "Demonstrating a specific behaviour by a live or symbolic role model that an observer may later imitate."
      },
      {
        "term": "Identification",
        "definition": "Psychological process where an observer adopts the behaviours or attitudes of a model perceived as similar or desirable."
      },
      {
        "term": "Matched pairs (aggression)",
        "definition": "Grouping participants with equal pre-rated baseline scores and randomly assigning one to each experimental condition."
      },
      {
        "term": "Imitative aggression",
        "definition": "Reproducing the exact physical or verbal hostile actions demonstrated by the model."
      }
    ],
    "checklistPoints": [
      "Explain SLT principles: observation, imitation, identification, vicarious reinforcement, and ARRM mediational processes.",
      "Recall the 3-stage procedure, sample (72 children), matching reliability (r = 0.89), and 5-second time-sampling method of Bandura (1961).",
      "Distinguish imitative vs non-imitative aggression and explain the gender and same-sex model findings.",
      "Evaluate Bandura (1961) on demand characteristics, artificiality of a Bobo doll, ethics, and biological explanations."
    ]
  },
  "al-psy-4-3": {
    "subtopicId": "al-psy-4-3",
    "subtopicCode": "4.3",
    "subtopicTitle": "Saavedra & Silverman (2002) Button Phobia & Fagen et al. (2014)",
    "readingMinutes": 11,
    "videoTitle": "Button Phobia 9990 Psychology Cambridge",
    "youtubeId": "2snXgyaY1mI",
    "videoChannel": "EY",
    "videoDuration": "7:19",
    "courseMatchSummary": "All sections match Cambridge CIE 9990 & AQA A-Level Psychology",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "Saavedra & Silverman (2002) Case Study Background",
        "cardId": "al-psy-4-3-c1"
      },
      {
        "time": "1:55",
        "seconds": 115,
        "label": "Feelings Thermometer, Exposure & Disgust Imagery",
        "cardId": "al-psy-4-3-c2"
      },
      {
        "time": "4:05",
        "seconds": 245,
        "label": "Results: Button Phobia Reduction & Follow-Up",
        "cardId": "al-psy-4-3-c3"
      },
      {
        "time": "5:50",
        "seconds": 350,
        "label": "Evaluation: Case Study Generalisability & Ethics",
        "cardId": "al-psy-4-3-c4"
      }
    ],
    "cards": [
      {
        "id": "al-psy-4-3-c1",
        "title": "Saavedra & Silverman (2002): Disgust-Based Button Phobia Case Study",
        "summary": "Treating a 9-year-old’s disgust-driven button phobia via exposure and imagery.",
        "bullets": [
          "**Background & Aim**: Examine the role of classical conditioning and disgust (rather than solely fear) in maintaining a specific childhood phobia, and compare behavioural contingency management with disgust-focused imagery exposure.",
          "**Participant**: A 9-year-old Hispanic-American boy who developed a severe phobia of buttons at age 5 after a bowl of buttons spilled onto him in class (classical conditioning trauma). He avoided buttoning his school uniform, touching anyone wearing buttons, and rated buttons as disgusting/gross rather than dangerous.",
          "**Procedure (10 sessions)**: Assessed using a 9-point Feelings Thermometer (0 = no distress, 8 = extreme distress) across an 11-item fear/disgust hierarchy (from large denim buttons = 2 up to small clear plastic buttons = 8). Sessions 1–4 used In Vivo Exposure + Contingency Management (gradual physical button handling rewarded with mother’s positive reinforcement). Sessions 5–10 added Imagery Exposure & Cognitive Self-Control (visualising hundreds of buttons pouring over him, describing how they looked/felt/smelled until disgust habituated).",
          "**Results**: During contingency management (Sessions 1–4), he successfully handled more buttons behaviourally, YET his subjective distress ratings actually INCREASED (e.g., hugging mum in buttons rose from 7 to 8)! Once disgust-focused imagery exposure started (Session 5+), subjective distress plummeted dramatically to 0–3, and at 6- and 12-month follow-ups he wore buttoned shirts daily and no longer met DSM-IV phobia criteria."
        ],
        "glossaryPills": [
          {
            "term": "contingency management",
            "definition": "Operant conditioning therapy where positive reinforcement is given strictly contingent upon performing target non-avoidant behaviours."
          },
          {
            "term": "evaluative learning",
            "definition": "A form of classical conditioning in which a neutral stimulus acquires a persistent negative affective appraisal such as disgust."
          }
        ],
        "memoryAid": "Saavedra & Silverman twist: Behavioural rewards alone increased button handling BUT raised distress — Imagery Exposure targeting DISGUST dropped distress to near-zero!",
        "subsections": [
          {
            "heading": "Saavedra & Silverman (2002): Button Phobia & Disgust Imagery",
            "bullets": [
              "**Case study** - 9-year-old Hispanic American boy developed severe button phobia (started age 5 when a bowl of buttons spilled on him in class); scored max **8/8** on Feelings Thermometer for small clear plastic buttons!",
              "**Two interventions** - (1) **Contingency management** (positive reinforcement from mother for handling buttons) reduced behavioural avoidance, YET **subjective disgust ratings INCREASED**! (2) **Disgust-focused cognitive imagery/self-control** slashed subjective fear/disgust to **0–3**, maintained at **6- and 12-month follow-ups**!"
            ],
            "exampleHeading": "Concrete takeaway: Disgust vs Fear in Specific Phobias",
            "examples": [
              "Proves some phobias are driven primarily by **evaluative conditioning of DISGUST**, so cognitive imagery targeting disgust is needed alongside behavioural reinforcement!"
            ]
          }
        ]
      },
      {
        "id": "al-psy-4-3-c2",
        "title": "Fagen et al. (2014): Secondary Positive Reinforcement (SPR) in Elephants",
        "summary": "Training Nepalese elephants voluntarily for TB trunk washes using whistle + banana.",
        "bullets": [
          "**Background & Aim**: Captive elephants in Nepal require regular veterinary trunk washes to test for tuberculosis (TB), traditionally managed with aversive control (ankus/bullhooks). Fagen et al. tested whether juvenile/adult female Asian elephants could voluntarily learn a 5-step trunk-wash procedure using purely Secondary Positive Reinforcement (SPR / clicker training).",
          "**Sample**: 5 captive female Asian elephants at a Nepalese stable (4 juveniles aged 5–7 years, 1 adult aged ~50 years) with zero prior SPR training; their mahouts (handlers) remained present for safety but did not issue punishment or commands.",
          "**Procedure**: Trainers first paired a whistle blow (Secondary Reinforcer, SR) with chopped banana pieces (Primary Reinforcer, PR). Using shaping, luring, and capturing across 10–15 minute sessions, elephants learned 5 component behaviours chained together: (1) trunk here, (2) bucket, (3) blow into bucket, (4) steady hold while saline instilled, (5) trunk up — culminating in full voluntary trunk washes tested against a ≥ 80% success criterion.",
          "**Results**: All 4 juvenile elephants passed the full trunk-wash test reliably within 25–35 training sessions (mean ~258 minutes total training time; >80% pass rate on final trials). The 50-year-old elephant did not pass within the study window (slower progress due to possible visual impairment, entrenched traditional habits, and distraction by her calf)."
        ],
        "commonMistake": "In Fagen et al. (2014), the whistle is the SECONDARY reinforcer (paired with banana) and chopped banana is the PRIMARY reinforcer — never reverse them! Also remember only 4 of the 5 elephants passed (the older adult did not).",
        "subsections": [
          {
            "heading": "Fagen et al. (2014): Positive Reinforcement Trunk-Wash Training in Elephants",
            "bullets": [
              "**Sample & method** - 5 captive female Asian elephants in Nepal trained via **secondary positive reinforcement (whistle clicker)** paired with **chopped banana (primary reinforcer)** using **shaping** and **behavioural chaining** for voluntary TB trunk-wash testing.",
              "**Findings** - 4 of 5 elephants (all 4 juveniles!) mastered the full multi-step trunk wash in **25–35 sessions** with **>80% pass rate** and ZERO punishment — improving animal welfare over traditional cruel restraint!"
            ],
            "exampleHeading": "Concrete evaluation: Ethical Animal Welfare & Generalisation",
            "examples": [
              "**Strength**: humane, non-coercive training with high real-world veterinary utility; **Limitation**: small captive sample (n = 5; oldest elephant had poor eyesight/mood and failed to complete)."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "behavioural chaining",
            "definition": "Linking a sequence of individually shaped behaviours together in order so that completing the entire chain earns reinforcement."
          }
        ]
      },
      {
        "id": "al-psy-4-3-c3",
        "title": "Evaluating Saavedra & Silverman (2002)",
        "summary": "Longitudinal therapeutic insight vs N = 1 generalisability and demand bias.",
        "bullets": [
          "**Strength — Deep idiographic & longitudinal insight**: Combining quantitative Feelings Thermometer hierarchies with rich qualitative interviews and 6- and 12-month follow-ups demonstrated lasting therapeutic recovery and uncovered the unique role of disgust.",
          "**Strength — Strong ethical care**: Parental informed consent plus child assent obtained, gradual pacing respected the boy’s comfort, and therapy delivered substantial life-improving benefits.",
          "Limitation — Low population generalisability (N = 1): Findings from one 9-year-old boy with a highly unusual button phobia cannot automatically generalise to adult or fear-driven phobias (e.g., heights or spiders).",
          "**Limitation — Self-report & demand bias**: The boy’s 0–8 Feelings Thermometer ratings may have been influenced by wanting to please his mother or therapists, and researchers had a close clinical relationship with the family."
        ]
      },
      {
        "id": "al-psy-4-3-c4",
        "title": "Evaluating Fagen et al. (2014)",
        "summary": "Welfare Refinement and objective ≥80% mastery vs small sample and outdoor confounds.",
        "bullets": [
          "**Strength — High ethical & practical welfare impact**: Embodies Russell & Burch’s Refinement principle by replacing aversive traditional handling with humane, voluntary positive reinforcement for critical TB screening.",
          "**Strength — Objective operationalised behavioural criteria**: Clear 5-component behavioural checklist and strict ≥ 80% mastery threshold ensured high reliability across sessions.",
          "**Limitation — Small, homogeneous sample & situational confounds**: Only 5 female elephants from one Nepalese stable (no males; only 1 older adult), and outdoor training was disrupted by heat, insects, noisy crowds, and mahout presence.",
          "**Limitation — Generalisability across age & species**: Failure of the 50-year-old elephant suggests SPR may take substantially longer with older animals conditioned for decades under traditional aversive management."
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "Feelings Thermometer",
        "definition": "A 9-point subjective distress rating scale (0–8) used by Saavedra & Silverman to measure the boy’s disgust toward buttons."
      },
      {
        "term": "Behavioural chaining",
        "definition": "Linking a sequence of individually shaped simple behaviours together so each step cues the next until a complex routine is completed."
      },
      {
        "term": "Secondary Positive Reinforcement (SPR)",
        "definition": "Training method (such as whistle/clicker training) that marks correct behaviour instantly with a learned cue linked to a primary food reward."
      },
      {
        "term": "Imagery exposure",
        "definition": "Therapeutic technique in which a client vividly imagines feared or disgusting stimuli repeatedly until emotional arousal habituates."
      }
    ],
    "checklistPoints": [
      "Contrast the outcomes of contingency management (Sessions 1–4) vs disgust-focused imagery exposure (Sessions 5–10) in Saavedra & Silverman (2002).",
      "Explain how evaluative learning (disgust) differs from classic fear-based phobias.",
      "Detail how Fagen et al. (2014) used whistle-banana pairing, shaping, and chaining to train voluntary elephant trunk washes.",
      "Evaluate both learning studies on ethics, generalisability, controls, and real-world applications."
    ]
  },
  "al-psy-5-1": {
    "subtopicId": "al-psy-5-1",
    "subtopicCode": "5.1",
    "subtopicTitle": "Milgram (1963) Obedience & Agency Theory",
    "readingMinutes": 12,
    "videoTitle": "Psychology - Obedience",
    "youtubeId": "kSp0624MCe0",
    "videoChannel": "Cognito",
    "videoDuration": "5:55",
    "courseMatchSummary": "All sections match Cambridge CIE 9990 & AQA A-Level Psychology",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "Introduction to Obedience",
        "cardId": "al-psy-5-1-c1"
      },
      {
        "time": "0:42",
        "seconds": 42,
        "label": "Differences Between Obedience and Conformity",
        "cardId": "al-psy-5-1-c2"
      },
      {
        "time": "3:53",
        "seconds": 233,
        "label": "Agentic State Explanation for Obedience",
        "cardId": "al-psy-5-1-c3"
      },
      {
        "time": "4:39",
        "seconds": 279,
        "label": "Situational Factors Affecting Obedience",
        "cardId": "al-psy-5-1-c4"
      }
    ],
    "cards": [
      {
        "id": "al-psy-5-1-c1",
        "title": "Milgram (1963): Behavioral Study of Obedience",
        "summary": "Milgram’s rigged Yale shock study: 100% to 300 V, 65% to 450 V, and intense distress.",
        "bullets": [
          "**Aim**: Inspired by the Nuremberg trials (\"just following orders\"), Milgram tested whether ordinary Americans would obey an authority figure instructing them to deliver potentially lethal electric shocks to an innocent stranger.",
          "**Sample**: 40 male volunteers aged 20–50 from New Haven, Connecticut (diverse jobs: postal clerks, teachers, engineers, labourers), recruited via newspaper ad and paid $4.50 simply for attending.",
          "**Procedure (Controlled Observation at Yale University)**: A rigged slip draw always assigned the real participant as \"Teacher\" and a mild-mannered 47-year-old confederate (\"Mr Wallace\") as \"Learner\". Teacher read word-pairs; every mistake required administering an escalating shock on a realistic generator from 15 V (\"Slight Shock\") in 15 V steps up to 450 V (\"XXX\"). No real shocks were given (Teacher received a genuine 45 V sample). At 300 V the Learner pounded the wall and went silent after 315 V. If the Teacher hesitated, the lab-coated Experimenter delivered 4 standardised verbal prods (\"Please continue\" up to \"You have no other choice, you must go on\").",
          "**Results**: Psychiatrists predicted < 0.1% would reach 450 V. In reality, 100% went to at least 300 V, and 65% (26/40) obeyed all the way to 450 V! Qualitative data revealed extreme nervous tension — sweating, trembling, stuttering, groaning, digging fingernails into flesh, and 3 uncontrollable nervous seizures."
        ],
        "glossaryPills": [
          {
            "term": "obedience",
            "definition": "A form of social influence where an individual follows a direct order from a perceived legitimate authority figure."
          },
          {
            "term": "confederate",
            "definition": "An actor working secretly with the researcher who plays a scripted role in the experiment."
          }
        ],
        "memoryAid": "Milgram baseline numbers: 40 men, $4.50, 15 V to 450 V (30 switches), 100% to 300 V, 65% to 450 V, 4 prods.",
        "subsections": [
          {
            "heading": "Milgram (1963) Baseline vs Situational Variations",
            "bullets": [
              "**Baseline (Yale lab, 40 men)** - **100%** went to 300 V; **65%** obeyed all the way to the lethal **450 V** despite severe sweating, trembling, and 3 seizures!",
              "**Three situational drops** - **Proximity**: teacher & learner in same room → **40%**; touch-proximity (forcing hand onto plate) → **30%**; **Location**: run-down Bridgeport office → **47.5%**; **Uniform**: experimenter replaced by ordinary man in street clothes → **20%**!"
            ],
            "exampleHeading": "Concrete check: Agency Theory & Legitimacy of Authority",
            "examples": [
              "People shift from an **autonomous state** (personally responsible) into an **agentic state** (acting as an agent for a legitimate authority figure), buffered from guilt by **binding factors**!"
            ]
          }
        ]
      },
      {
        "id": "al-psy-5-1-c2",
        "title": "Situational Variables (Milgram’s Variations)",
        "summary": "How proximity, location, uniform, and defiant peers dramatically reduce obedience.",
        "bullets": [
          "**Proximity**: Moving Teacher and Learner into the SAME room dropped 450 V obedience from 65% to 40%; Touch-Proximity (forcing Learner’s hand onto a shock plate) dropped obedience to 30%; Experimenter giving orders by telephone dropped obedience to 20.5% (some lied about shock levels).",
          "**Location (Institutional Legitimacy)**: Relocating the study from prestigious Yale University to a rundown commercial office building in Bridgeport reduced obedience from 65% to 47.5%.",
          "**Uniform**: Replacing the grey lab-coated experimenter with an \"ordinary member of the public\" in everyday clothes slashed obedience to 20% (supported in the field by Bickman, 1974: 38% obeyed a security guard uniform vs 19% civilian).",
          "**Social support**: Adding two defiant confederate \"co-teachers\" reduced obedience to just 10%, demonstrating how allies unlock resistance to destructive authority."
        ],
        "subsections": [
          {
            "heading": "Dispositional Explanation (Authoritarian Personality) & Evaluation",
            "bullets": [
              "**Adorno et al. (1950)** - harsh, strict parenting produces an **Authoritarian Personality** (measured via the **F-scale**): extreme respect for authority, rigid black-and-white thinking, contempt for \"inferiors\" (Elms & Milgram 1966 found obedient participants scored higher on the F-scale!).",
              "**Orne & Holland (1968) critique** - argued participants guessed shocks were fake (low internal validity), YET **Sheridan & King (1972)** using REAL shocks on a puppy got 54% (men) and 100% (women) obedience, and **Hofling (1966)** found 21/22 real hospital nurses obeyed an unknown doctor’s dangerous overdose order!"
            ],
            "exampleHeading": "Concrete check: Burger (2009) ethical partial replication",
            "examples": [
              "Stopped at 150 V (the point where 79% of Milgram’s obeyers went on to 450 V) and STILL found **70%** obedience — showing Milgram’s effect was NOT just a 1960s artefact!"
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "agentic shift",
            "definition": "Mental transition from an autonomous state (feeling personally responsible) to an agentic state (viewing oneself as carrying out an authority figure’s orders)."
          }
        ]
      },
      {
        "id": "al-psy-5-1-c3",
        "title": "Explanations of Obedience: Agentic State, Legitimacy & Authoritarian Personality",
        "summary": "Agentic state, legitimacy of authority, and Adorno’s Authoritarian Personality.",
        "bullets": [
          "**Agentic State Theory (Milgram, 1974)**: People shift from an autonomous state (feeling personally responsible for actions) into an agentic state (viewing themselves as mere instruments executing an authority’s wishes). Binding factors (e.g., gradual foot-in-the-door escalation from 15 V, politeness norms, anxiety about breaking contract) keep people locked in the agentic shift despite moral strain.",
          "**Legitimacy of Authority**: Societies organise hierarchically; we are socialised from childhood (parents, teachers, police) to accept institutional authority figures who carry visible symbols of power (uniforms, titles, institutions). Destructive obedience arises when legitimate authority is misused.",
          "Dispositional explanation — Authoritarian Personality (Adorno et al., 1950): Measured via the F-scale questionnaire; stems from harsh, strict parenting causing displaced hostility onto lower-status out-groups and slavish submission to superiors. Elms & Milgram (1966) found obedient participants scored higher on the F-scale than defiant ones, though dispositional accounts struggle to explain why millions obeyed across entire societies."
        ],
        "commonMistake": "Do NOT write that Milgram’s participants obeyed because they were sadistic or cruel — their extreme physical distress (sweating, trembling, seizures) proves they experienced intense moral strain while trapped in the agentic state."
      },
      {
        "id": "al-psy-5-1-c4",
        "title": "Evaluation of Milgram (1963)",
        "summary": "Ethics, debriefing, internal validity debates, and modern replications (Burger, 2009).",
        "bullets": [
          "**Limitation — Severe ethical breaches**: Deception (fake shocks, rigged draw, \"memory study\"), compromised right to withdraw (Prod 4: \"You have no other choice\"), and acute psychological distress. However, Milgram conducted a full debrief, reconciled Teacher and Learner, and follow-up surveys showed 84% were glad to have participated (1.3% sorry).",
          "**Limitation — Internal validity debate**: Orne & Holland (1968) argued participants guessed the shocks were fake (demand characteristics); Perry (2012) found archive evidence that some expressed scepticism. Conversely, Sheridan & King (1972) used REAL shocks on a live puppy and still got 54% male and 100% female full obedience, and Burger (2009) replicated Milgram ethically up to 150 V with 70% obedience (vs 82.5% in 1963).",
          "**Limitation — Androcentric & ethnocentric baseline**: Only American men were tested in 1963, though Milgram’s Variation 8 with women also yielded exactly 65% obedience, and cross-cultural replications (e.g., Meeus & Raaijmakers, 1986 in the Netherlands) confirmed high obedience."
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "Agentic state",
        "definition": "Mental state in which individuals see themselves as agents executing an authority figure’s directives rather than acting autonomously."
      },
      {
        "term": "Binding factors",
        "definition": "Situational pressures (such as incremental escalation and social etiquette) that keep a person in the agentic state despite distress."
      },
      {
        "term": "Legitimacy of authority",
        "definition": "Shared societal agreement that an authority figure holds the rightful power to issue commands."
      },
      {
        "term": "Authoritarian personality",
        "definition": "Dispositional trait profile marked by rigid conventionalism, deference to authority, and hostility toward lower-status groups."
      }
    ],
    "checklistPoints": [
      "Detail Milgram’s (1963) sample, rigged draw, shock generator, verbal prods, and both quantitative (65%) and qualitative results.",
      "Quote exact obedience rates for Proximity (40% / 30%), Location (47.5%), Uniform (20%), and Defiant Allies (10%).",
      "Compare situational explanations (agentic state, legitimacy) with Adorno’s dispositional Authoritarian Personality.",
      "Evaluate Milgram’s ethical violations, debriefing safeguards, and modern replications (Burger, 2009)."
    ]
  },
  "al-psy-5-2": {
    "subtopicId": "al-psy-5-2",
    "subtopicCode": "5.2",
    "subtopicTitle": "Conformity — Asch (1951) & Zimbardo (1973) Stanford Prison",
    "readingMinutes": 11,
    "videoTitle": "Psychology - Conformity",
    "youtubeId": "-I0K8Kenl2k",
    "videoChannel": "Cognito",
    "videoDuration": "5:38",
    "courseMatchSummary": "All sections match Cambridge CIE 9990 & AQA A-Level Psychology",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "Introduction to Conformity",
        "cardId": "al-psy-5-2-c1"
      },
      {
        "time": "0:42",
        "seconds": 42,
        "label": "Normative and Informational Social Influence",
        "cardId": "al-psy-5-2-c2"
      },
      {
        "time": "1:24",
        "seconds": 84,
        "label": "Three Types of Conformity (Kelman 1958)",
        "cardId": "al-psy-5-2-c3"
      },
      {
        "time": "4:15",
        "seconds": 255,
        "label": "Sherif’s Study on Conformity (1935)",
        "cardId": "al-psy-5-2-c4"
      }
    ],
    "cards": [
      {
        "id": "al-psy-5-2-c1",
        "title": "Types & Explanations of Conformity (Kelman; Deutsch & Gerard)",
        "summary": "Kelman’s three types of conformity, NSI vs ISI, and resistance via locus of control.",
        "bullets": [
          "**Kelman (1958) identified three depths of conformity**: Compliance (shallow, temporary public agreement while disagreeing privately to avoid rejection), Identification (public + temporary private conformity to fit a valued social role/group), and Internalisation (deep, permanent private and public conversion because the group is believed correct).",
          "Normative Social Influence (NSI): Emotional need to be liked, accepted, and avoid ridicule — typically drives compliance even when answers are unambiguous (e.g., Asch, 1951).",
          "Informational Social Influence (ISI): Cognitive desire to be right in ambiguous, unfamiliar, or crisis situations by looking to experts/majorities for truth — typically drives internalisation (e.g., Sherif, 1935 autokinetic effect; Jenness, 1932 jelly-bean jar).",
          "**Real-world resistance**: Social support (breaking group unanimity) and an internal Locus of Control (Rotter, 1966 — believing outcomes stem from personal choices rather than fate/luck) boost independence."
        ],
        "glossaryPills": [
          {
            "term": "Normative Social Influence (NSI)",
            "definition": "Conforming to group norms to gain social approval and avoid rejection or ridicule."
          },
          {
            "term": "Informational Social Influence (ISI)",
            "definition": "Conforming because we believe the group possesses superior knowledge in an uncertain situation."
          }
        ],
        "memoryAid": "NSI = Need to be liked (Normal/fits in → Compliance); ISI = Information to be Right (→ Internalisation).",
        "subsections": [
          {
            "heading": "Asch (1951) Conformity Variations & ISI vs NSI",
            "bullets": [
              "**Baseline (123 US male students, 12/18 critical trials)** - **36.8%** conformity on critical trials; **75%** conformed at least once; **25%** never conformed (control error rate < 1%!).",
              "**Three Asch variations** - **Group size**: rises up to **3 confederates (~32%)** then plateaus; **Unanimity**: ONE dissenting ally drops conformity to **5.5%**! **Task difficulty**: closer line lengths **INCREASE** conformity (triggers **Informational Social Influence**!).",
              "**Two explanations (Deutsch & Gerard)** - **NSI** (desire to be **liked/fit in** → temporary **compliance**); **ISI** (desire to be **right** in ambiguous tasks → deeper **internalisation**)."
            ],
            "exampleHeading": "Concrete check: Perrin & Spencer (1980) historical validity critique",
            "examples": [
              "Replicated Asch in 1980s UK engineering students and found only **1 conformist out of 396 trials** — suggesting Asch’s 1951 McCarthy-era results were a \"child of their time\" (low temporal validity)!"
            ]
          }
        ]
      },
      {
        "id": "al-psy-5-2-c2",
        "title": "Asch (1951, 1956): Majority Influence Line Study",
        "summary": "Asch’s line study (36.8% conformity) and group size, unanimity, and difficulty effects.",
        "bullets": [
          "**Procedure**: 123 US male undergraduates tested in groups of 7–9 (1 genuine participant placed second-to-last + 6–8 confederates). Shown a standard line alongside 3 comparison lines (A, B, C) across 18 trials; on 12 \"critical trials\" all confederates unanimously gave the SAME blatantly wrong answer.",
          "**Baseline results**: Overall conformity rate was 36.8% on critical trials (32% in his initial 1951 report); 75% conformed at least once, while 25% remained completely independent (control group answering alone erred on < 1% of trials).",
          "**Key situational variations**: (1) Group size — conformity peaked at 3 confederates (~31.8%) with little increase beyond 3; (2) Unanimity — introducing just ONE dissenting confederate slashed conformity to 5.5% (even if the dissenter gave a different wrong answer, conformity fell to 9%); (3) Task difficulty — making comparison lines closer in length increased conformity via ISI.",
          "**Evaluation**: High lab control, yet low ecological/temporal validity — Perrin & Spencer (1980) replicated Asch with UK engineering students and found only 1 conformist out of 396 trials (\"child of its time\" during 1950s McCarthyism), and collectivist cultures show higher conformity than individualist cultures (Bond & Smith, 1996)."
        ],
        "subsections": [
          {
            "heading": "Zimbardo (1973) Stanford Prison Experiment vs Reicher & Haslam (2006)",
            "bullets": [
              "**Zimbardo’s situational conclusion** - 24 screened emotionally stable male students randomly assigned as guards/prisoners quickly conformed to brutal/passive **social roles**; halted after **6 days** (instead of 14).",
              "**Major critiques** - **Demand characteristics** (Banuazizi & Movahedi: guards admitted \"acting\" from prison movies; Zimbardo acted as Superintendent instructing guards to create boredom/fear!); **Reicher & Haslam (2006) BBC Prison Study** showed guards did NOT automatically turn cruel — tyranny emerged only when groups actively identified with a shared social identity!"
            ],
            "exampleHeading": "Concrete check: Resisting Social Influence (Social Support & Locus of Control)",
            "examples": [
              "Having **ONE ally** breaks unanimity (Asch: 32% → 5.5%; Milgram: 65% → 10%); people with an **Internal Locus of Control** (Rotter, 1966) resist conformity and obedience far more than Externals!"
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "normative social influence",
            "definition": "Conforming publicly to a majority out of a desire to be liked, accepted, and avoid social rejection (usually leading to compliance)."
          }
        ]
      },
      {
        "id": "al-psy-5-2-c3",
        "title": "Zimbardo et al. (1973): Conformity to Social Roles (Stanford Prison)",
        "summary": "Zimbardo’s 6-day Stanford Prison role conformity and deindividuation findings.",
        "bullets": [
          "**Aim**: Test whether prison brutality arises from dispositional personality traits of guards/prisoners OR situational conformity to institutional social roles.",
          "**Sample & Setup**: 24 emotionally stable male US college students screened via interviews/tests and randomly assigned by coin toss to \"Guards\" (khaki uniforms, mirrored sunglasses, whistles, batons — promoting deindividuation) or \"Prisoners\" (arrested unexpectedly at home by Palo Alto police, deloused, smocks with ID numbers, ankle chains) in a mock basement prison at Stanford University for a planned 14 days.",
          "**Results**: Guards rapidly escalated verbal harassment, sleep deprivation, push-ups, and humiliating toilet punishments. Prisoners staged a rebellion on Day 2 that guards crushed with fire extinguishers; prisoners then became passive, depressed, and psychologically distressed (5 released early). Following Christina Maslach’s ethical protest, Zimbardo terminated the study after just 6 DAYS.",
          "**Conclusion**: Zimbardo argued ordinary, healthy men rapidly internalised situational social roles without needing sadistic dispositions."
        ],
        "commonMistake": "Do NOT assume all guards acted identically in Zimbardo’s study! Only roughly one-third became genuinely sadistic, while others tried to remain fair or do small favours — showing individual agency still mattered."
      },
      {
        "id": "al-psy-5-2-c4",
        "title": "Modern Critique of Zimbardo (1973)",
        "summary": "Demand characteristics, archival coaching evidence, ethics, and BBC Prison Study.",
        "bullets": [
          "**Demand characteristics & experimenter coaching**: Banuazizi & Movahedi (1975) argued participants merely play-acted Hollywood prison stereotypes; recent archival audio (Le Texier, 2019) revealed Zimbardo and his warden directly coached guards to be tough and create feelings of powerlessness, undermining pure situational conclusions.",
          "**Failed replication (Reicher & Haslam, 2006 — BBC Prison Study)**: Guards failed to unite around an authoritative identity, prisoners formed a cohesive group and overturned the hierarchy, proving brutality is NOT an automatic consequence of assigning roles — rather, Social Identity Theory explains that people conform only when they actively identify with a role.",
          "**Severe ethical failings**: Real home arrests compromised informed consent, intense psychological trauma occurred, and Zimbardo blurred the dual role of lead investigator and \"Prison Superintendent\", delaying termination."
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "Compliance",
        "definition": "Superficial public conformity to a group while privately retaining one’s own original beliefs."
      },
      {
        "term": "Internalisation",
        "definition": "Genuine private and public adoption of group attitudes or beliefs as one’s own."
      },
      {
        "term": "Deindividuation",
        "definition": "Loss of personal identity and self-restraint when wearing uniforms or immersed in an anonymous group."
      },
      {
        "term": "Social role",
        "definition": "Expected patterns of behaviour, norms, and duties attached to a specific social position (e.g., guard or prisoner)."
      }
    ],
    "checklistPoints": [
      "Distinguish compliance, identification, and internalisation, and link each to NSI vs ISI.",
      "Recall Asch’s baseline conformity rate (36.8% / 75% at least once) and how group size, unanimity, and task difficulty shifted conformity.",
      "Summarise Zimbardo’s Stanford Prison procedure, random allocation, deindividuation cues, and 6-day termination.",
      "Critique Zimbardo using demand characteristics, archival evidence of coaching, ethics, and Reicher & Haslam’s (2006) BBC Prison Study."
    ]
  },
  "al-psy-5-3": {
    "subtopicId": "al-psy-5-3",
    "subtopicCode": "5.3",
    "subtopicTitle": "Piliavin et al. (1969) Subway Samaritan & Perry et al. (2015)",
    "readingMinutes": 11,
    "videoTitle": "Psychology - The Bystander Effect",
    "youtubeId": "PnvZ39gvDxo",
    "videoChannel": "Cognito",
    "videoDuration": "5:27",
    "courseMatchSummary": "All sections match Cambridge CIE 9990 & AQA A-Level Psychology",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "Introduction to the Bystander Effect",
        "cardId": "al-psy-5-3-c1"
      },
      {
        "time": "0:37",
        "seconds": 37,
        "label": "What is the Bystander Effect?",
        "cardId": "al-psy-5-3-c2"
      },
      {
        "time": "1:44",
        "seconds": 104,
        "label": "Latané & Darley (1968) Smoky Room Study",
        "cardId": "al-psy-5-3-c3"
      },
      {
        "time": "3:43",
        "seconds": 223,
        "label": "Piliavin (1969) Subway Study",
        "cardId": "al-psy-5-3-c4"
      }
    ],
    "cards": [
      {
        "id": "al-psy-5-3-c1",
        "title": "Piliavin, Rodin & Piliavin (1969): Good Samaritanism on the Subway",
        "summary": "NYC subway field study: 95% helped Cane vs 50% Drunk and Arousal–Cost–Reward.",
        "bullets": [
          "**Background & Aim**: Earlier lab studies (Darley & Latané, 1968) found \"diffusion of responsibility\" lowered helping in larger crowds. Piliavin et al. tested bystander helping in an inescapable real-world setting (New York City express subway), varying victim type (ill/cane vs drunk), victim race (Black vs White), model help timing (70 s vs 150 s), and group size.",
          "**Sample & Design**: Field experiment with ~4,450 unsuspecting subway commuters across 103 trials on an 8-minute non-stop express run (Harlem to Bronx). Four teams of 4 Columbia students: 1 male victim (3 White, 1 Black), 1 White male model, and 2 female covert observers recording latency, helper demographics, and comments.",
          "**Procedure**: 70 seconds into the ride, the victim collapsed cleanly onto the floor in the \"critical area\" — either holding a black cane (65 trials: 38 Ill, 27? Specifically 65 Cane trials + 38 Drunk trials = 103 total) or smelling of alcohol carrying a liquor bottle wrapped in a brown paper bag (Drunk). If nobody helped by 70 s (early) or 150 s (late), the model stepped in.",
          "**Results**: Spontaneous helping was vastly higher for the Cane victim (95% helped; median 5 seconds) than the Drunk victim (50% helped; median 109 seconds). 90% of first helpers were male. No clear \"diffusion of responsibility\" emerged (larger groups helped at least as fast!). Same-race helping bias appeared ONLY in the Drunk condition (higher cost), NOT the Cane condition. On 21% of Drunk trials passengers physically left the critical area vs very rarely on Cane trials."
        ],
        "glossaryPills": [
          {
            "term": "Arousal–Cost–Reward model",
            "definition": "Piliavin’s explanation that witnessing an emergency causes unpleasant physiological arousal, and bystanders choose whichever action (helping or fleeing) reduces arousal at the lowest net personal cost."
          },
          {
            "term": "diffusion of responsibility",
            "definition": "Tendency for individuals in a crowd to feel less personally accountable to intervene because others are present."
          }
        ],
        "memoryAid": "Piliavin numbers: 4,450 commuters, 103 trials (65 cane / 38 drunk), 95% helped Cane (5 s) vs 50% helped Drunk (109 s), 90% male helpers.",
        "subsections": [
          {
            "heading": "Piliavin, Rodin & Piliavin (1969): Subway Samaritan & Arousal Cost–Reward",
            "bullets": [
              "**Field experiment** - ~4,450 unwitting New York subway commuters over 103 trials watched a confederate collapse either carrying a **cane (ill)** or smelling of alcohol (**drunk**); Black or White victim!",
              "**Key findings** - **Ill victim** helped spontaneously **95%** of the time vs **drunk victim 50%**; **NO diffusion of responsibility** observed (faster help in larger groups!); **90%** of helpers were **men**; slight same-race helping preference ONLY for the drunk victim!",
              "**Arousal Cost–Reward Model** - seeing an emergency causes unpleasant arousal → bystanders weigh **cost of helping** (danger/embarrassment) vs **cost of NOT helping** (guilt/blame) — helping an ill victim is low-cost & high-guilt-if-ignored!"
            ],
            "exampleHeading": "Concrete evaluation: High Ecological Validity vs Ethics",
            "examples": [
              "**Strength**: real commuters unaware they were tested (zero demand characteristics!); **Limitation**: zero informed consent, impossible to debrief, potential distress watching a collapse on a moving train!"
            ]
          }
        ]
      },
      {
        "id": "al-psy-5-3-c2",
        "title": "Perry et al. (2015): Oxytocin, Empathy & Interpersonal Distance (CIE 9990)",
        "summary": "Double-blind crossover study showing oxytocin × empathy interaction on personal space.",
        "bullets": [
          "**Background & Aim**: Oxytocin (OT) is often popularly labelled the \"love hormone\", yet social salience theory proposes OT does not universally promote closeness — instead it amplifies social cues according to individual traits! Perry et al. tested how intranasal oxytocin affects preferred personal space depending on participants’ baseline empathy.",
          "**Sample & Design**: 54 Israeli male university students (aged 19–32, screened for health/psychiatric conditions). Double-blind, placebo-controlled, repeated-measures crossover lab experiment (two sessions spaced 1 week apart: 24 IU intranasal oxytocin spray vs saline placebo, counterbalanced).",
          "**Procedure**: Participants completed the Interpersonal Reactivity Index (IRI) to split into High-Empathy vs Low-Empathy groups. Experiment 1 used the computerised Comfortable Interpersonal Distance (CID) paradigm — imagining standing in a circular room as a Stranger, Friend, Authority figure, or Close Romantic Partner approached, pressing a key when distance felt uncomfortable. Experiment 2 asked participants to arrange two real chairs in a room for a future conversation about an intimate topic (checking preferred physical chair distance and angle).",
          "**Results**: Significant interaction between Oxytocin and Empathy! Among HIGH-empathy participants, oxytocin DECREASED preferred distance (wanted to stand/sit closer to strangers and friends). Among LOW-empathy participants, oxytocin paradoxically INCREASED preferred interpersonal distance (kept strangers farther away!). Confirms oxytocin amplifies pre-existing social orientation rather than uniformly increasing sociability."
        ],
        "commonMistake": "Never write that oxytocin simply makes everyone want to stand closer! Perry et al. (2015) specifically proved an INTERACTION: OT decreased preferred distance ONLY in high-empathy men, and INCREASED distance in low-empathy men.",
        "subsections": [
          {
            "heading": "Perry et al. (2015): Oxytocin, Empathy & Personal Space",
            "bullets": [
              "**Double-blind placebo crossover** - 54 male Israeli students sniffed **oxytocin** or **placebo** nasal spray and chose preferred interpersonal distance (CID task) from a friend, stranger, authority figure, or ball — split into **High vs Low Empathy** groups!",
              "**Crucial interaction** - **Oxytocin is NOT a universal \"love hormone\"!** In **High-Empathy** men, oxytocin **REDUCED** preferred distance to strangers (closer); in **Low-Empathy** men, oxytocin **INCREASED** preferred distance (further away)!"
            ],
            "exampleHeading": "Concrete check: Why Perry et al. (2015) matters for Reductionism vs Interactionism",
            "examples": [
              "Proves biological hormones (oxytocin) **interact with individual personality traits (empathy)** — biological reductionism alone cannot predict social behaviour!"
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "social salience theory",
            "definition": "Model proposing that oxytocin amplifies sensitivity to social cues according to an individual’s existing personality traits rather than uniformly boosting friendliness."
          },
          {
            "term": "double-blind crossover",
            "definition": "Repeated-measures experimental design where neither participant nor researcher knows whether active drug or placebo is administered in each counterbalanced session."
          }
        ]
      },
      {
        "id": "al-psy-5-3-c3",
        "title": "Evaluating Piliavin et al. (1969)",
        "summary": "High subway ecological validity vs missing consent and uneven trial counts.",
        "bullets": [
          "Strength — Exceptional ecological validity & zero demand characteristics: Real commuters had no idea they were in an experiment, capturing genuine spontaneous emergency behaviour across 4,450 diverse riders.",
          "**Strength — Rich quantitative & qualitative data**: Recording exact latencies, demographics, movement out of the car, and overheard comments illuminated real cost–reward reasoning (e.g., women feeling physically unable to lift a fallen man).",
          "**Limitation — Ethical compromises**: Impossible to obtain informed consent, right to withdraw, or debriefing; witnessing a sudden collapse on a locked moving express train could cause acute distress or guilt for bystanders.",
          "**Limitation — Confounding variables & uneven trials**: Fewer Drunk trials (38 vs 65 Cane) and Black victim conducted fewer trials than White victims; uncontrollable subway noise, crowding, and passenger familiarity varied across rides."
        ]
      },
      {
        "id": "al-psy-5-3-c4",
        "title": "Evaluating Perry et al. (2015)",
        "summary": "Placebo crossover rigour vs all-male Israeli sample and artificial virtual CID task.",
        "bullets": [
          "**Strength — Gold-standard experimental rigour**: Double-blind placebo crossover design with counterbalancing eliminated participant variables, experimenter expectancy bias, and placebo effects; combining virtual CID (Exp 1) with real chair placement (Exp 2) strengthened construct validity.",
          "**Strength — Clinical & theoretical relevance**: Challenges simplistic \"oxytocin = empathy cure\" claims for autism or social anxiety, showing hormone therapies must be personalised to baseline traits.",
          "**Limitation — Low population validity (androcentric & ethnocentric)**: Tested ONLY 54 young Israeli male undergraduates (women excluded due to menstrual hormonal fluctuations; Middle Eastern cultural norms for personal space differ from Northern Europe or East Asia).",
          "**Limitation — Artificiality of CID task**: Clicking a button while watching a 2D stick figure move toward the centre of a circle on a computer screen lacks the subtle eye contact, posture, and emotional realism of face-to-face personal space."
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "Interpersonal distance",
        "definition": "The physical space individuals maintain between themselves and others during social interactions."
      },
      {
        "term": "Oxytocin (OT)",
        "definition": "Hypothalamic neuropeptide hormone implicated in social bonding, trust, and amplifying sensitivity to social cues."
      },
      {
        "term": "Social salience hypothesis",
        "definition": "Theory that oxytocin heightens attention to social cues rather than uniformly increasing prosocial behaviour."
      },
      {
        "term": "Double-blind placebo crossover",
        "definition": "Experimental design where every participant receives both active treatment and placebo in counterbalanced order while neither researcher nor participant knows which is given."
      }
    ],
    "checklistPoints": [
      "Recall Piliavin et al.’s (1969) IVs, sample (~4,450), Cane (95%) vs Drunk (50%) findings, and the Arousal–Cost–Reward model.",
      "Explain why diffusion of responsibility did NOT appear on the NYC subway.",
      "Summarise Perry et al.’s (2015) double-blind crossover design, CID & chair tasks, and the critical Oxytocin × Empathy interaction.",
      "Compare the methodological trade-offs between Piliavin’s real-world field study and Perry’s tightly controlled lab study."
    ]
  },
  "al-psy-6-1": {
    "subtopicId": "al-psy-6-1",
    "subtopicCode": "6.1",
    "subtopicTitle": "Schizophrenia — Diagnosis, Biological & Psychological Explanations",
    "readingMinutes": 12,
    "videoTitle": "Biological Explanations for Schizophrenia [AQA A-Level]",
    "youtubeId": "XwaSwNCONMQ",
    "videoChannel": "Psych Boost",
    "videoDuration": "9:06",
    "courseMatchSummary": "All sections match Cambridge CIE 9990 & AQA A-Level Psychology",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "Genetic Basis of Schizophrenia (Twin & Family Studies)",
        "cardId": "al-psy-6-1-c1"
      },
      {
        "time": "2:30",
        "seconds": 150,
        "label": "The Dopamine Hypothesis",
        "cardId": "al-psy-6-1-c2"
      },
      {
        "time": "5:10",
        "seconds": 310,
        "label": "Neural Correlates (Enlarged Ventricles & Ventral Striatum)",
        "cardId": "al-psy-6-1-c3"
      },
      {
        "time": "7:20",
        "seconds": 440,
        "label": "Evaluation: Diathesis-Stress & Causation Issues",
        "cardId": "al-psy-6-1-c4"
      }
    ],
    "cards": [
      {
        "id": "al-psy-6-1-c1",
        "title": "Classification, Symptoms & Diagnostic Issues",
        "summary": "Positive vs negative symptoms and reliability, co-morbidity, and cultural bias.",
        "bullets": [
          "Schizophrenia is a severe psychotic disorder (~1% lifetime prevalence) diagnosed using DSM-5 (requires ≥ 2 symptoms for ≥ 1 month, at least one being delusions, hallucinations, or disorganised speech, with 6 months total disturbance) or ICD-11.",
          "Positive symptoms (additions to typical functioning): Hallucinations (usually auditory voices) and Delusions (fixed false beliefs of persecution, grandeur, or thought insertion).",
          "Negative symptoms (losses of typical functioning): Avolition (severe loss of goal-directed motivation), Speech Poverty / Alogia (reduced fluency and content), and Flat Affect (blunted emotional expression).",
          "**Diagnostic challenges**: Inter-rater reliability (Cheniaux et al., 2009 found poor concordance between DSM and ICD criteria), Symptom Overlap (bipolar disorder and severe depression share delusions/avolition), Co-morbidity (Buckley et al., 2009: ~50% co-morbid depression, ~47% substance abuse), and Cultural/Gender Bias (Afro-Caribbean individuals in the UK are diagnosed at far higher rates despite similar rates in the Caribbean, pointing to clinician cultural misinterpretation)."
        ],
        "glossaryPills": [
          {
            "term": "positive symptoms",
            "definition": "Excess or distorted psychological experiences added to normal functioning, such as hallucinations and delusions."
          },
          {
            "term": "negative symptoms",
            "definition": "Diminution or absence of normal behavioural and emotional functioning, such as avolition and speech poverty."
          }
        ],
        "memoryAid": "Positive = Plus (added experiences like hallucinations/delusions); Negative = Minus (missing normal functions like motivation/speech).",
        "subsections": [
          {
            "heading": "Diagnosis Reliability/Validity & Revised Dopamine Hypothesis",
            "bullets": [
              "**Positive vs Negative symptoms** - **Positive** (added experiences: **hallucinations, delusions**); **Negative** (loss of normal function: **avolition, speech poverty/alogia**); diagnostic challenges include **co-morbidity** (depression/substance abuse), **symptom overlap** (bipolar), **gender bias**, and **culture bias**!",
              "**Revised Dopamine Hypothesis (Davis et al., 1991)** - **HYPERdopaminergia** (excess dopamine in subcortical **mesolimbic** pathway) → **positive** symptoms; **HYPOdopaminergia** (too little dopamine in **prefrontal cortex**) → **negative** symptoms!"
            ],
            "exampleHeading": "Concrete check: Gottesman (1991) Twin Study vs Interactionism",
            "examples": [
              "MZ concordance **48%** vs DZ **17%** proves strong **polygenic** heritability, yet 48% ≠ 100% — confirming the **Diathesis–Stress Model** (genetic vulnerability + environmental triggers like childhood trauma or cannabis)!"
            ]
          }
        ]
      },
      {
        "id": "al-psy-6-1-c2",
        "title": "Biological Explanations: Genetics & the Revised Dopamine Hypothesis",
        "summary": "Twin concordance, polygenic GWAS risk, and the Revised Dopamine Hypothesis.",
        "diagram": "synaptic-transmission",
        "bullets": [
          "**Genetic vulnerability**: Family and twin studies (Gottesman, 1991) show concordance scales with genetic relatedness: monozygotic (MZ) twins ~48%, dizygotic (DZ) twins ~17%, siblings ~9%, general population ~1%. Ripke et al. (2014) GWAS of 37,000 patients identified 108 independent genetic loci (polygenic & aetiologically heterogeneous — no single \"schizophrenia gene\").",
          "**Original Dopamine Hypothesis**: Excess dopamine (hyperdopaminergia) in subcortical pathways (especially the mesolimbic pathway from VTA to nucleus accumbens) drives positive symptoms. Supported by amphetamines (dopamine agonists) inducing psychosis and D2 receptor antagonists (antipsychotics) relieving hallucinations.",
          "**Revised Dopamine Hypothesis (Howes & Kapur, 2009)**: Incorporates BOTH subcortical hyperdopaminergia (D2 overactivity → positive symptoms) AND prefrontal hypodopaminergia (low D1 dopamine in the prefrontal cortex → negative symptoms and cognitive deficits), alongside glutamate dysregulation.",
          "**Evaluation**: Strong biological support, yet MZ concordance is ~48% rather than 100%, proving genes create vulnerability rather than certainty — environmental stressors are essential (diathesis–stress)."
        ],
        "subsections": [
          {
            "heading": "Psychological Explanations & Typical vs Atypical Antipsychotics",
            "bullets": [
              "**Family dysfunction** - **Schizophrenogenic mother** (Fromm-Reichmann — outdated/mother-blaming), **Double-bind theory** (Bateson — contradictory messages), **High Expressed Emotion (EE)** (hostility, criticism, emotional over-involvement → strong predictor of **relapse**!).",
              "**Cognitive (Frith, 1992)** - deficits in **metarepresentation** (cannot recognise own thoughts as internal → auditory hallucinations) & **central control** (derailed speech).",
              "**Antipsychotics** - **Typical (chlorpromazine)**: strong D₂ antagonist (reduces positive symptoms, causes **tardive dyskinesia**); **Atypical (clozapine/risperidone)**: temporary D₂ + **serotonin** receptor binding (treats positive AND negative symptoms, lower motor side effects; clozapine risks **agranulocytosis**!)."
            ],
            "exampleHeading": "Concrete check: Interactionist Treatment (Tarrier et al., 2004)",
            "examples": [
              "Combining **antipsychotic medication + CBTp / Family Therapy** yields significantly lower relapse rates than drugs alone!"
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "expressed emotion",
            "definition": "Level of hostility, critical comments, and emotional over-involvement directed by family members toward a schizophrenia patient — a major trigger for relapse."
          }
        ]
      },
      {
        "id": "al-psy-6-1-c3",
        "title": "Psychological Explanations: Cognitive Dysfunction & Family Factors",
        "summary": "Frith’s metarepresentation/central control deficits and Expressed Emotion relapse.",
        "bullets": [
          "**Frith et al. (1992) Cognitive Dysfunction**: Identifies two core deficits — (1) Metarepresentation dysfunction: inability to recognise one’s own inner speech/thoughts as self-generated, leading patients to attribute internal thoughts to external voices (auditory hallucinations) or alien control (delusions of thought insertion); (2) Central Control dysfunction: inability to suppress automatic thoughts/associations, causing derailment and disorganised speech (evidenced by slow Stroop test interference, Stirling et al., 2006).",
          "**Expressed Emotion (EE)**: High levels of family hostility, critical comments, and emotional over-involvement act as severe chronic stressors that significantly predict RELAPSE (relapse rate ~4× higher in high-EE homes) rather than initial causation.",
          "Double-bind theory (Bateson et al., 1956) and schizophrenogenic mother (Fromm-Reichmann, 1948) are largely discredited historically for blaming mothers without empirical proof, though childhood trauma and urban stress do elevate vulnerability (Read et al., 2005)."
        ],
        "commonMistake": "Do NOT write that Expressed Emotion causes schizophrenia from scratch — modern research (and the Diathesis–Stress model) treats high EE primarily as a trigger for RELAPSE in individuals already biologically vulnerable."
      },
      {
        "id": "al-psy-6-1-c4",
        "title": "Treatments & the Interactionist (Diathesis–Stress) Approach",
        "summary": "Typical vs atypical antipsychotics, CBTp, family therapy, and diathesis–stress.",
        "bullets": [
          "**Typical (first-generation) antipsychotics (e.g., Chlorpromazine)**: Block postsynaptic D2 dopamine receptors to reduce positive symptoms. Effective (Thornley et al., 2003 meta-analysis showed lower relapse vs placebo), but carry severe extrapyramidal side effects including tardive dyskinesia (~30%) and neuroleptic malignant syndrome.",
          "Atypical (second-generation) antipsychotics (e.g., Clozapine, Risperidone): Bind transiently to D2 receptors AND target serotonin (5-HT2A) and glutamate receptors, treating BOTH positive and negative symptoms with lower tardive dyskinesia risk (though Clozapine requires weekly blood monitoring for agranulocytosis).",
          "**Psychological therapies**: CBT for Psychosis (CBTp — normalises symptoms and reality-tests delusional beliefs; Jauhar et al., 2014 found small-to-moderate symptom gains) and Family Therapy (reduces EE and cuts relapse rates by ~50%, Pharoah et al., 2010).",
          "Interactionist (Diathesis–Stress) model (Meehl; Tienari et al., 2004 Finnish adoption study): Adopted children with biological schizophrenia risk developed the disorder at much higher rates ONLY when raised in high-conflict adoptive families (5.8% healthy vs 36.8% dysfunctional). Consequently, combining antipsychotic medication + CBTp/family therapy yields superior outcomes over either alone (Tarrier et al., 2004)."
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "Avolition",
        "definition": "Negative symptom of schizophrenia characterised by profound loss of drive to initiate or sustain purposeful activities."
      },
      {
        "term": "Metarepresentation",
        "definition": "Cognitive ability to reflect on one’s own thoughts and recognise them as self-generated rather than externally inserted."
      },
      {
        "term": "Atypical antipsychotics",
        "definition": "Second-generation drugs (e.g., clozapine, risperidone) targeting dopamine and serotonin receptors to alleviate both positive and negative symptoms."
      },
      {
        "term": "Diathesis–stress model",
        "definition": "Interactionist framework proposing that mental disorders arise when underlying biological or early trauma vulnerability interacts with environmental stressors."
      }
    ],
    "checklistPoints": [
      "Distinguish positive vs negative symptoms and critique diagnosis via reliability, co-morbidity, symptom overlap, and cultural bias.",
      "Explain polygenic risk (Gottesman, Ripke) and the Revised Dopamine Hypothesis (mesolimbic hyper- vs prefrontal hypo-dopaminergia).",
      "Apply Frith’s metarepresentation and central control deficits to hallucinations and speech disorganisation.",
      "Compare typical antipsychotics, atypical antipsychotics, CBTp, and Family Therapy within the interactionist model (Tienari et al., 2004)."
    ]
  },
  "al-psy-6-2": {
    "subtopicId": "al-psy-6-2",
    "subtopicCode": "6.2",
    "subtopicTitle": "Mood Disorders — Depression (Beck, Ellis) & CBT",
    "readingMinutes": 11,
    "videoTitle": "Psychology - Depression",
    "youtubeId": "KZlLiPR7ll4",
    "videoChannel": "Cognito",
    "videoDuration": "6:12",
    "courseMatchSummary": "All sections match Cambridge CIE 9990 & AQA A-Level Psychology",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "Introduction to Depression",
        "cardId": "al-psy-6-2-c1"
      },
      {
        "time": "2:01",
        "seconds": 121,
        "label": "Diathesis-Stress Model",
        "cardId": "al-psy-6-2-c2"
      },
      {
        "time": "3:46",
        "seconds": 226,
        "label": "Cognitive Explanation for Depression",
        "cardId": "al-psy-6-2-c3"
      },
      {
        "time": "5:24",
        "seconds": 324,
        "label": "Combined Treatment Approach",
        "cardId": "al-psy-6-2-c4"
      }
    ],
    "cards": [
      {
        "id": "al-psy-6-2-c1",
        "title": "Characteristics of Depression & Biological Explanations",
        "summary": "DSM-5 depressive features, twin heritability, 5-HTT stress links, and SSRIs.",
        "bullets": [
          "DSM-5 Major Depressive Disorder requires ≥ 5 symptoms persisting for at least 2 weeks (including depressed mood or anhedonia — loss of pleasure), spanning emotional (sadness, worthlessness), behavioural (insomnia/hypersomnia, psychomotor retardation, social withdrawal), and cognitive (poor concentration, absolutist negative thoughts) domains. Bipolar disorder alternates depressive episodes with manic/hypomanic phases.",
          "**Genetic factors**: Twin studies (McGuffin et al., 1996) show ~46% MZ vs ~20% DZ concordance for unipolar depression (and ~65–70% MZ for bipolar), pointing to moderate polygenic heritability interacting with life stress (Caspi et al., 2003 found the short 5-HTT serotonin transporter allele raised depression risk mainly after severe stressful life events).",
          "**Monoamine / Neurotransmitter hypothesis**: Low functional synaptic activity of serotonin and noradrenaline alters mood regulation, sleep, and reward circuits. Supported by Selective Serotonin Reuptake Inhibitors (SSRIs, e.g., fluoxetine) blocking presynaptic reuptake transporters to elevate synaptic serotonin — though SSRIs lift synaptic serotonin within hours while clinical mood takes 2–4 weeks to improve (suggesting downstream neuroplasticity/BDNF adaptation)."
        ],
        "glossaryPills": [
          {
            "term": "anhedonia",
            "definition": "Markedly diminished ability to experience pleasure or interest in previously enjoyable activities."
          },
          {
            "term": "SSRI",
            "definition": "Selective Serotonin Reuptake Inhibitor — antidepressant drug that blocks presynaptic reabsorption of serotonin to increase synaptic availability."
          }
        ],
        "subsections": [
          {
            "heading": "Beck’s Negative Triad vs Ellis’s ABC Model of Depression",
            "bullets": [
              "**Beck’s Cognitive Theory (1967)** - **faulty information processing** + **negative self-schemas** produce the **Negative Triad**: negative view of the **Self**, the **World**, and the **Future**!",
              "**Ellis’s ABC Model (1962)** - **A**ctivating event → **B**elief (irrational \"musturbation\" e.g. \"I must always succeed\") → **C**onsequence (depression/emotional distress) — extended to **D**ispute and **E**ffect in REBT!"
            ],
            "exampleHeading": "Concrete check: Strengths & Limitations of Cognitive Explanations",
            "examples": [
              "**Strength**: Clark & Beck (1999) confirmed cognitive vulnerabilities predict later depression + led to effective **CBT**; **Limitation**: does not explain **endogenous** depression with no activating event, or biological/genetic links (low serotonin, twin concordance)!"
            ]
          }
        ]
      },
      {
        "id": "al-psy-6-2-c2",
        "title": "Cognitive Explanations: Beck’s Negative Triad & Ellis’s ABC Model",
        "summary": "Beck’s Negative Triad, cognitive biases, and Ellis’s ABC irrational-belief model.",
        "bullets": [
          "**Beck’s (1967) Cognitive Theory of Depression**: Negative self-schemas formed through early criticism/loss combine with faulty information processing (catastrophising, overgeneralisation, selective abstraction — attending only to failures) to trap individuals in the Negative Triad: (1) Negative view of the SELF (\"I am useless\"), (2) Negative view of the WORLD (\"Everyone is hostile/unfair\"), and (3) Negative view of the FUTURE (\"Nothing will ever improve\").",
          "**Ellis’s (1962) ABC Model**: Depression stems from irrational beliefs rather than external events alone — A (Activating Event, e.g., failing an exam), B (Beliefs — rational vs irrational \"musturbation\" such as \"I MUST succeed at everything or I am worthless\"), leading to C (Consequences — healthy disappointment vs clinical depression).",
          "**Supporting evidence**: Clark & Beck (1999) reviewed longitudinal evidence confirming cognitive vulnerabilities precede depressive onset; Alloy et al. (1999) tracked US freshmen for 6 years and found students with high negative cognitive styles were far more likely to develop first-onset depression (17% vs 1%).",
          "**Critique**: Cognitive models explain reactive depression well but struggle with severe endogenous/postnatal/bipolar depressions or hallucinations, and risk blaming the patient’s thoughts while neglecting poverty, discrimination, or biochemistry."
        ],
        "memoryAid": "Beck’s Negative Triad = S-W-F (Self, World, Future). Ellis’s Model = A-B-C (Activating event → Belief → Consequence), expanded in REBT to D-E (Dispute → Effect).",
        "subsections": [
          {
            "heading": "CBT vs REBT & March et al. (2007) Treatment Effectiveness",
            "bullets": [
              "**Beck’s CBT** - collaborative **thought catching** + testing negative automatic thoughts as a \"patient as scientist\" via **homework** & behavioural activation.",
              "**Ellis’s REBT** - vigorous **empirical** (where’s the proof?) and **logical** (does it make sense?) **disputing** of irrational beliefs.",
              "**March et al. (2007)** - 327 depressed adolescents: after 36 weeks, **81%** improved with CBT alone, **81%** with antidepressants alone, and **86%** with **combined CBT + SSRIs**!"
            ],
            "exampleHeading": "Concrete evaluation: CBT limitations for severe depression",
            "examples": [
              "Requires high **motivation and cognitive engagement** — severely depressed patients may struggle initially until antidepressants lift mood enough to engage in CBT!"
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "negative triad",
            "definition": "Beck’s cognitive model of three automatic negative views maintained by depressed individuals: negative views of the Self, the World, and the Future."
          }
        ]
      },
      {
        "id": "al-psy-6-2-c3",
        "title": "Cognitive Behavioural Therapy (CBT) & REBT",
        "summary": "Beck’s behavioural activation/homework, Ellis’s REBT (ABCDE), and TADS outcomes.",
        "bullets": [
          "**Beck’s Cognitive Therapy**: Collaborative, structured 6–20 session therapy acting as \"patient as scientist\". Therapist and client identify automatic negative thoughts, reality-test them through behavioural experiments and homework diaries, and schedule behavioural activation (engaging in rewarding daily activities to counter withdrawal).",
          "**Ellis’s Rational Emotive Behaviour Therapy (REBT)**: Extends ABC to ABCDE — D (Disputing irrational beliefs via logical disputing \"Does that follow?\", empirical disputing \"Where is the proof?\", and pragmatic disputing \"Is this belief helping?\") → E (Effective new rational belief and healthier emotional consequence).",
          "**Outcome evidence**: March et al. (2007) TADS trial of 327 depressed adolescents found 81% significantly improved with CBT alone, 81% with SSRIs alone, and 86% with COMBINED CBT + SSRIs after 36 weeks — proving CBT matches drug efficacy while building lifelong relapse-prevention skills."
        ],
        "commonMistake": "Do not assume CBT is purely \"talking/cognitive\" — the \"B\" (Behavioural) component is equally vital: homework assignments, reality-testing experiments, and behavioural activation directly disconfirm negative schemas."
      },
      {
        "id": "al-psy-6-2-c4",
        "title": "Evaluating Treatments for Depression (CBT vs Medication)",
        "summary": "Comparing CBT relapse prevention and motivational limits against SSRI therapy.",
        "bullets": [
          "**Strength of CBT — Empowers clients & lowers relapse**: Equips patients with coping skills that persist after therapy ends (lower relapse than discontinuing SSRIs) with zero physiological drug side effects.",
          "**Limitation of CBT — Motivational & severity barriers**: Severe depression causes extreme avolition and fatigue, making weekly homework and cognitive challenging overwhelming — in acute/severe cases, SSRIs may be needed first to lift mood enough to engage in CBT.",
          "**Limitation — Focus on present thoughts**: Critics note CBT may ignore deep childhood trauma or real external stressors (e.g., chronic bereavement or financial hardship) that cannot simply be \"thought away\".",
          "**Pharmacotherapy trade-off**: SSRIs are cost-effective, require minimal daily effort, and help severe/bipolar patients (with mood stabilisers like lithium for bipolar), yet carry side effects (nausea, insomnia, withdrawal symptoms) and treat symptoms rather than underlying cognitive schemas."
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "Negative Triad",
        "definition": "Beck’s model of three mutually reinforcing dysfunctional views held in depression: negative views of the self, world, and future."
      },
      {
        "term": "ABC Model",
        "definition": "Ellis’s framework proposing that irrational Beliefs (B) about an Activating event (A) drive unhealthy emotional Consequences (C)."
      },
      {
        "term": "Cognitive Behavioural Therapy (CBT)",
        "definition": "Structured psychological therapy challenging maladaptive thoughts and replacing avoidant behaviours through reality-testing homework."
      },
      {
        "term": "Behavioural activation",
        "definition": "CBT component scheduling achievable, rewarding everyday activities to counteract depressive withdrawal and anhedonia."
      }
    ],
    "checklistPoints": [
      "Outline emotional, behavioural, and cognitive features of depression and evaluate genetic/serotonin evidence.",
      "Contrast Beck’s Negative Triad + cognitive biases with Ellis’s ABC/ABCDE model.",
      "Explain how CBT reality-testing, behavioural activation, and REBT disputing alleviate depression.",
      "Evaluate CBT versus SSRIs using March et al. (2007) and discuss motivation, relapse rates, and combined treatment."
    ]
  },
  "al-psy-6-3": {
    "subtopicId": "al-psy-6-3",
    "subtopicCode": "6.3",
    "subtopicTitle": "Anxiety Disorders, Phobias, OCD & Treatment Evaluation",
    "readingMinutes": 11,
    "videoTitle": "OCD: Explaining and Treating (Biological Approach) [A-Level Psychology]",
    "youtubeId": "EiD24HSCGnM",
    "videoChannel": "Psych Boost",
    "videoDuration": "13:26",
    "courseMatchSummary": "All sections match Cambridge CIE 9990 & AQA A-Level Psychology",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "Intro to Anxiety Disorders & OCD",
        "cardId": "al-psy-6-3-c1"
      },
      {
        "time": "2:17",
        "seconds": 137,
        "label": "Biological Explanation of OCD (Genetics & Serotonin)",
        "cardId": "al-psy-6-3-c2"
      },
      {
        "time": "9:00",
        "seconds": 540,
        "label": "Biological Treatment of OCD (SSRIs / Drug Therapy)",
        "cardId": "al-psy-6-3-c3"
      },
      {
        "time": "12:45",
        "seconds": 765,
        "label": "Summary & Treatment Comparison",
        "cardId": "al-psy-6-3-c4"
      }
    ],
    "cards": [
      {
        "id": "al-psy-6-3-c1",
        "title": "Phobias: Mowrer’s (1960) Two-Process Model",
        "summary": "Mowrer’s Two-Process Model (classical onset + negative reinforcement) and critique.",
        "bullets": [
          "Phobias involve irrational, disproportionate fear (emotional), panic/avoidance/endurance (behavioural), and selective attention/irrational beliefs (cognitive) toward a specific object, social situation, or open space.",
          "**Process 1 — Acquisition via Classical Conditioning**: A neutral stimulus (e.g., white rat in Watson & Rayner’s 1920 Little Albert study, or spilling buttons in Saavedra & Silverman, 2002) is paired with an unconditioned fear stimulus (loud steel-bar noise → UCR fear), becoming a conditioned stimulus triggering conditioned anxiety.",
          "Process 2 — Maintenance via Operant Conditioning (Negative Reinforcement): Avoiding the phobic stimulus immediately reduces unpleasant anxiety, negatively reinforcing avoidance so the phobia never undergoes extinction.",
          "**Evaluation**: Explains both onset and persistence and inspired highly effective exposure therapies, yet fails to explain why many trauma survivors never develop phobias (Di Nardo et al., 1988 on dog bites) and why phobias cluster around evolutionary dangers like snakes/heights rather than electrical sockets (Seligman’s biological preparedness)."
        ],
        "glossaryPills": [
          {
            "term": "biological preparedness",
            "definition": "Seligman’s evolutionary concept that humans are genetically predisposed to acquire fears of ancient survival threats rapidly."
          },
          {
            "term": "reciprocal inhibition",
            "definition": "Principle that two opposing emotional states (deep muscular relaxation and acute anxiety) cannot coexist simultaneously."
          }
        ],
        "subsections": [
          {
            "heading": "Systematic Desensitisation vs Flooding (Phobias)",
            "bullets": [
              "**Systematic Desensitisation (Wolpe, 1958)** - counterconditioning via **reciprocal inhibition** (cannot feel anxious and deeply relaxed simultaneously!): (1) **anxiety hierarchy**, (2) **relaxation training**, (3) **gradual exposure** step-by-step (Gilroy et al., 2003: spider-phobia gains lasted 33 months!).",
              "**Flooding** - **immediate maximum exposure** with no escape until adrenaline exhausts and fear extinguishes! **Faster & cheaper**, yet **highly traumatic** with high dropout rates — unsuitable for social phobia or vulnerable patients!"
            ],
            "exampleHeading": "Concrete check: Why biological preparedness challenges Mowrer’s Two-Process Model",
            "examples": [
              "**Seligman (1971)** noted phobias cluster around ancient threats (**snakes, heights, spiders**) rather than modern dangers (**cars, electrical sockets**) — showing evolutionary genetic preparedness interacts with conditioning!"
            ]
          }
        ]
      },
      {
        "id": "al-psy-6-3-c2",
        "title": "Behavioural Treatments for Phobias: Systematic Desensitisation vs Flooding",
        "summary": "Comparing Systematic Desensitisation (3 steps) with Flooding on speed and ethics.",
        "bullets": [
          "**Systematic Desensitisation (Wolpe, 1958)**: Counterconditioning therapy using reciprocal inhibition across three steps — (1) Anxiety Hierarchy (client ranks phobic situations from mildest to most terrifying), (2) Relaxation Training (progressive muscle relaxation & slow breathing), and (3) Gradual Exposure (working step-by-step up the hierarchy while staying deeply relaxed, moving on only when anxiety reaches zero).",
          "**Flooding**: Immediate, prolonged, inescapable exposure to the most feared stimulus at the top of the hierarchy with zero escape allowed. Anxiety peaks rapidly then exhausts itself biologically (extinction — adrenaline cannot stay elevated indefinitely), teaching that the stimulus is harmless.",
          "**Comparison & Evidence**: Gilroy et al. (2003) found spider-phobic patients treated with SD were still markedly less fearful at 33 months than relaxation-only controls. SD has low attrition and suits children/learning disabilities, whereas Flooding is faster and cheaper (often 1–3 sessions) but ethically traumatic with high dropout rates and contraindicated for cardiac/severe anxiety patients."
        ],
        "memoryAid": "SD = Slow & Steady (3 steps: Hierarchy + Relaxation + Gradual exposure via Reciprocal Inhibition); Flooding = Fast Extinction (immediate full exposure).",
        "subsections": [
          {
            "heading": "Biological Explanations & SSRI Treatment of OCD",
            "bullets": [
              "**Genetic (polygenic & candidate genes)** - **COMT** (regulates dopamine) & **SERT** (serotonin transporter); **Nestadt et al. (2010)** twin review: **68% MZ vs 31% DZ** concordance!",
              "**Neural (Worry Circuit)** - hyperactivity in the **orbitofrontal cortex (OFC)** → **caudate nucleus** fails to filter minor worry signals → **thalamus** loops compulsive alarm; low **serotonin** impairs mood/worry regulation!",
              "**SSRIs (e.g. fluoxetine)** - block presynaptic **serotonin reuptake**, increasing serotonin in the synaptic cleft to normalise worry-circuit firing (**Soomro et al., 2009**: 17 trials showed SSRIs beat placebo; fastest gains when paired with **CBT**!)."
            ],
            "exampleHeading": "Concrete evaluation: Drug side effects & publication bias",
            "examples": [
              "SSRIs are cheap and require minimal effort, YET cause side effects (nausea, insomnia, sexual dysfunction), **relapse** once stopped, and **Goldacre (2013)** warned pharmaceutical companies suppress negative drug trials!"
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "systematic desensitisation",
            "definition": "Wolpe’s behavioural therapy for phobias pairing an anxiety hierarchy with progressive relaxation training via reciprocal inhibition."
          },
          {
            "term": "orbitofrontal cortex (OFC)",
            "definition": "Prefrontal brain region involved in error detection and worry signalling that shows hyperactivity in the OCD worry circuit."
          }
        ]
      },
      {
        "id": "al-psy-6-3-c3",
        "title": "Obsessive-Compulsive Disorder (OCD): Biological Explanations",
        "summary": "OCD obsessions vs compulsions, COMT/SERT genes, and the OFC–caudate worry circuit.",
        "bullets": [
          "**Clinical features**: Obsessions (intrusive, recurrent distressing thoughts — cognitive), Compulsions (repetitive ritualistic behaviours like handwashing or checking performed to neutralise anxiety — behavioural), accompanied by severe anxiety/disgust (emotional).",
          "**Genetic basis**: Nestadt et al. (2010) meta-analysis found 68% MZ twin concordance vs 31% DZ twins. Candidate genes include COMT (regulates dopamine breakdown — low-activity allele leaves excess dopamine) and SERT / 5-HTT (serotonin transporter gene — lowers synaptic serotonin). Polygenic (Taylor, 2013 estimated up to 230 genes) and aetiologically heterogeneous.",
          "**Neural explanations**: Low serotonin disrupts mood/impulse inhibition, while structural/functional scans reveal hyperactivity in the \"worry circuit\" — Orbitofrontal Cortex (OFC, sends hyperactive \"something is wrong\" worry signals), Caudate Nucleus (normally filters minor worries, fails to suppress OFC signals), and Thalamus (relays persistent threat alerts back to OFC), alongside overactive parahippocampal gyrus (unpleasant emotion processing)."
        ],
        "commonMistake": "Obsessions are THOUGHTS (cognitive) and Compulsions are ACTIONS/RITUALS (behavioural) — never swap them! Also remember MZ twin concordance is 68% (not 100%), showing environmental triggers remain crucial."
      },
      {
        "id": "al-psy-6-3-c4",
        "title": "Treating OCD: Drug Therapy (SSRIs) vs Exposure & Response Prevention (ERP)",
        "summary": "Evaluating SSRIs versus Exposure & Response Prevention (ERP) and combined NICE care.",
        "bullets": [
          "SSRIs (e.g., fluoxetine, sertraline, often at higher doses than for depression) inhibit presynaptic serotonin reuptake, normalising OFC–caudate circuit activity; alternatives include tricyclics (clomipramine — stronger side effects) or SNRIs.",
          "**Drug evidence**: Soomro et al. (2009) reviewed 17 randomised controlled trials (3,097 patients) and found SSRIs significantly outperformed placebos in reducing OCD symptoms (~70% show symptom relief), though relapse is common upon stopping and side effects (indigestion, blurred vision, sexual dysfunction) lower adherence.",
          "**Exposure and Response Prevention (ERP / CBT for OCD)**: Psychological gold-standard treatment where clients deliberately face obsession triggers (e.g., touching a doorknob) while actively refraining from performing the neutralising compulsion until anxiety naturally habituates, breaking negative reinforcement.",
          "**Clinical synthesis (NICE guidelines)**: Mild-to-moderate OCD starts with CBT/ERP; severe OCD combines SSRIs + ERP because medication dampens baseline distress enough for clients to tolerate ERP challenges (Skapinakis et al., 2016 network meta-analysis confirmed ERP/CBT achieves even larger effect sizes than SSRIs alone, with combined therapy strongest)."
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "Two-Process Model",
        "definition": "Mowrer’s theory that phobias are acquired through classical conditioning and maintained via negative reinforcement in operant conditioning."
      },
      {
        "term": "Systematic desensitisation",
        "definition": "Gradual counterconditioning phobia therapy pairing an anxiety hierarchy with deep relaxation (reciprocal inhibition)."
      },
      {
        "term": "Orbitofrontal Cortex (OFC)",
        "definition": "Frontal lobe region that detects potential hazards and is hyperactive in the OCD worry circuit."
      },
      {
        "term": "Exposure & Response Prevention (ERP)",
        "definition": "Evidence-based CBT method for OCD exposing patients to anxiety triggers while blocking compulsive rituals."
      }
    ],
    "checklistPoints": [
      "Explain how classical and operant conditioning interact in Mowrer’s Two-Process Model and critique it using biological preparedness.",
      "Compare Systematic Desensitisation (3 steps) with Flooding on mechanism, speed, ethics, and dropout rates.",
      "Detail genetic (Nestadt; COMT, SERT) and neural (serotonin, OFC–caudate–thalamus worry circuit) explanations of OCD.",
      "Evaluate SSRIs vs CBT/ERP for OCD using clinical trial evidence (Soomro et al., 2009)."
    ]
  }
};

export const ALEVEL_PSYCHOLOGY_QUIZZES: QuizQuestion[] = [
  {
    "id": "al-psy-q1",
    "subtopicId": "al-psy-1-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "A researcher uses a repeated measures design to test memory with and without background music. Which technique controls order effects?",
    "options": [
      "Random allocation",
      "Counterbalancing (AB/BA)",
      "Stratified sampling",
      "Event sampling"
    ],
    "correctIndex": 1,
    "explanation": "Counterbalancing (half complete A then B, half B then A) balances practice and fatigue effects across conditions in a repeated measures design."
  },
  {
    "id": "al-psy-q2",
    "subtopicId": "al-psy-1-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "A correlation coefficient of r = −0.82 is found between daily hours of sleep and stress ratings. What does this indicate?",
    "options": [
      "Weak positive correlation showing sleep causes lower stress",
      "Strong negative correlation where higher sleep is associated with lower stress, without proving causation",
      "Strong positive correlation proving stress causes insomnia",
      "No statistically meaningful relationship between co-variables"
    ],
    "correctIndex": 1,
    "explanation": "r = −0.82 is close to −1.0 (strong negative correlation), and correlations NEVER establish cause and effect."
  },
  {
    "id": "al-psy-q3",
    "subtopicId": "al-psy-1-3",
    "type": "mcq",
    "marks": 1,
    "prompt": "A psychologist sets the significance level at p ≤ 0.10 instead of p ≤ 0.05. Which statistical error becomes MORE likely?",
    "options": [
      "Type I error (false positive — rejecting a true null hypothesis)",
      "Type II error (false negative — accepting a false null hypothesis)",
      "Ceiling effect",
      "Inter-observer drift"
    ],
    "correctIndex": 0,
    "explanation": "A lenient significance threshold (p ≤ 0.10) increases the risk of falsely claiming a result is significant when it occurred by chance (Type I error)."
  },
  {
    "id": "al-psy-q4",
    "subtopicId": "al-psy-2-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "Why did the clinical case of Patient KF (Shallice & Warrington, 1970) challenge the Multi-Store Model in favour of the Working Memory Model?",
    "options": [
      "KF had intact LTM but zero sensory memory",
      "KF had severely impaired verbal STM yet intact visual STM, proving STM is not a single unitary store",
      "KF could not form any new semantic or episodic LTMs after hippocampal surgery",
      "KF showed improved recall only after semantic elaborative rehearsal"
    ],
    "correctIndex": 1,
    "explanation": "KF’s selective deficit in auditory/verbal STM alongside preserved visual STM proves separate slave systems (Phonological Loop vs Visuo-Spatial Sketchpad)."
  },
  {
    "id": "al-psy-q5",
    "subtopicId": "al-psy-2-2",
    "type": "short-answer",
    "marks": 3,
    "prompt": "In Andrade (2010), explain the difference between monitored and incidental information and state the overall recall advantage of the doodling group.",
    "rubric": {
      "maxMarks": 3,
      "modelAnswer": "Monitored information was the 8 names of people attending the party that participants were instructed to write down. Incidental information was the 8 place names mentioned in the call that they were NOT told to track. Overall, doodlers recalled 29% more information (mean 7.5 vs 5.8).",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Monitored info = party attendees’ names (instructed to write down)",
          "requiredKeywordGroups": [
            [
              "name",
              "party",
              "attend"
            ],
            [
              "write",
              "instruct",
              "monitor"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "Incidental info = place names (not told to remember/track)",
          "requiredKeywordGroups": [
            [
              "place"
            ],
            [
              "not told",
              "uninstruct",
              "surprise",
              "incidental"
            ]
          ]
        },
        {
          "id": "mp3",
          "markDescription": "Doodlers recalled 29% more (7.5 vs 5.8)",
          "requiredKeywordGroups": [
            [
              "29%",
              "7.5",
              "5.8",
              "more"
            ]
          ]
        }
      ]
    },
    "explanation": "Doodlers outperformed controls on both monitored party names (5.1 vs 4.0) and incidental place names (2.4 vs 1.8), averaging 7.5 vs 5.8 (+29%)."
  },
  {
    "id": "al-psy-q6",
    "subtopicId": "al-psy-2-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "Why did Baron-Cohen et al. (2001) include Group 4 (14 IQ-matched male controls) alongside the AS/HFA group?",
    "options": [
      "To test gender differences in Theory of Mind",
      "To confirm that lower Eyes Test scores in AS/HFA reflect Theory of Mind differences rather than lower general IQ",
      "To check test–retest reliability over 6 months",
      "To eliminate demand characteristics using a double-blind design"
    ],
    "correctIndex": 1,
    "explanation": "Both groups averaged ~115–116 IQ yet AS/HFA scored 21.9/36 vs 30.9/36 for IQ-matched controls, ruling out intelligence as a confound."
  },
  {
    "id": "al-psy-q7",
    "subtopicId": "al-psy-2-3",
    "type": "mcq",
    "marks": 1,
    "prompt": "In Pozzulo et al. (2010), on which lineup condition did young children (ages 4–7) show the sharpest accuracy gap compared with adults?",
    "options": [
      "Target-present familiar cartoon lineups",
      "Target-absent human face lineups (high false-positive identifications)",
      "Target-present human face lineups (zero hits)",
      "Target-absent cartoon lineups only"
    ],
    "correctIndex": 1,
    "explanation": "Children correctly rejected only 41% of target-absent human lineups vs 79% for adults, making far more false-positive picks."
  },
  {
    "id": "al-psy-q8",
    "subtopicId": "al-psy-3-1",
    "type": "fill-blank",
    "marks": 3,
    "prompt": "Complete the findings from Dement & Kleitman (1957):",
    "segments": [
      "Participants recalled dreams on ",
      " of REM awakenings compared with only ",
      " of NREM awakenings, and correctly judged 5 vs 15 minute REM durations on ",
      " of combined trials."
    ],
    "wordBank": [
      "79.6%",
      "6.9%",
      "83%",
      "100%",
      "25%",
      "50%"
    ],
    "answers": [
      "79.6%",
      "6.9%",
      "83%"
    ],
    "explanation": "Dement & Kleitman recorded 152/191 (79.6%) REM dream recalls, 11/160 (6.9%) NREM dream recalls, and 92/111 (83%) correct duration estimates."
  },
  {
    "id": "al-psy-q9",
    "subtopicId": "al-psy-3-2",
    "type": "multi-select",
    "marks": 2,
    "selectCount": 3,
    "prompt": "Select THREE brain regions where Hölzel et al. (2011) found statistically significant grey matter increases after 8 weeks of MBSR.",
    "options": [
      "Left hippocampus",
      "Posterior cingulate cortex (PCC)",
      "Insula",
      "Temporo-parietal junction (TPJ)",
      "Primary visual cortex (V1)"
    ],
    "correctIndices": [
      0,
      1,
      3
    ],
    "explanation": "Hölzel et al. (2011) found grey matter growth in the left hippocampus, PCC, TPJ, and cerebellum — contrary to prediction, the insula showed no significant change."
  },
  {
    "id": "al-psy-q10",
    "subtopicId": "al-psy-3-3",
    "type": "mcq",
    "marks": 1,
    "prompt": "In Sperry’s (1968) split-brain research, a picture of a key is flashed exclusively to a patient’s LEFT visual field. What happens?",
    "options": [
      "The patient immediately says \"key\" aloud because the left visual field connects to the left hemisphere",
      "The patient cannot verbally name the key, but can pick up a key from behind a screen using their left hand",
      "The patient cannot see or touch the key with either hand",
      "The patient writes the word \"key\" with their right hand"
    ],
    "correctIndex": 1,
    "explanation": "The Left Visual Field projects to the Right Hemisphere (non-verbal, controls left hand). With the corpus callosum severed, the left-hemisphere speech centre receives no signal, yet the left hand selects the object accurately."
  },
  {
    "id": "al-psy-q11",
    "subtopicId": "al-psy-4-1",
    "type": "matching",
    "marks": 4,
    "prompt": "Match each conditioning concept with its exact behavioural example.",
    "pairs": [
      {
        "left": "Positive reinforcement",
        "right": "Giving a rat a food pellet after pressing a lever"
      },
      {
        "left": "Negative reinforcement",
        "right": "Switching off an unpleasant alarm by pressing a button"
      },
      {
        "left": "Classical conditioning",
        "right": "Dog salivating upon hearing a bell previously paired with food"
      },
      {
        "left": "Shaping",
        "right": "Rewarding successive approximations toward a full trunk wash"
      }
    ],
    "explanation": "Reinforcement always strengthens behaviour (positive adds a reward; negative removes something aversive), classical conditioning pairs stimuli, and shaping builds complex actions step-by-step."
  },
  {
    "id": "al-psy-q12",
    "subtopicId": "al-psy-4-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "In Bandura, Ross & Ross (1961), which experimental control ensured baseline child aggressiveness did not confound results across the three groups?",
    "options": [
      "Double-blind administration",
      "Matched pairs based on pre-rated aggression scores (inter-rater r = +0.89)",
      "Repeated measures with counterbalancing",
      "Stratified random sampling across all US states"
    ],
    "correctIndex": 1,
    "explanation": "Two observers pre-rated all 72 nursery children on four 5-point aggression scales (r = +0.89) and matched triplets across the aggressive, non-aggressive, and control conditions."
  },
  {
    "id": "al-psy-q13",
    "subtopicId": "al-psy-4-3",
    "type": "mcq",
    "marks": 1,
    "prompt": "What unexpected finding emerged during Sessions 1–4 (contingency management alone) in Saavedra & Silverman (2002)?",
    "options": [
      "The boy completely cured his phobia in two sessions",
      "Although he handled more buttons behaviourally, his subjective Feelings Thermometer distress ratings actually increased",
      "The mother refused to give positive reinforcement",
      "He generalised his phobia to zippers and shoelaces"
    ],
    "correctIndex": 1,
    "explanation": "Behavioural rewards increased contact with buttons, but subjective disgust/distress rose until disgust-focused imagery exposure began in Session 5."
  },
  {
    "id": "al-psy-q14",
    "subtopicId": "al-psy-5-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "In Milgram’s situational variations, which change reduced 450 V obedience to the LOWEST rate (10%)?",
    "options": [
      "Moving from Yale University to a rundown Bridgeport office (47.5%)",
      "Placing Teacher and Learner in the same room (40%)",
      "Replacing the lab-coated experimenter with an ordinary member of the public (20%)",
      "Adding two defiant confederate co-teachers who refused to continue (10%)"
    ],
    "correctIndex": 3,
    "explanation": "Social support from two defiant peers broke the experimenter’s authority and dropped full obedience to just 10%."
  },
  {
    "id": "al-psy-q15",
    "subtopicId": "al-psy-5-3",
    "type": "short-answer",
    "marks": 3,
    "prompt": "Describe the interaction between intranasal oxytocin and baseline empathy found by Perry et al. (2015) on preferred interpersonal distance.",
    "rubric": {
      "maxMarks": 3,
      "modelAnswer": "Among high-empathy participants, oxytocin decreased preferred interpersonal distance (they chose to stand/sit closer to others). Among low-empathy participants, oxytocin increased preferred distance (they kept strangers further away). This supports the social salience hypothesis.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "High-empathy group: oxytocin decreased preferred distance / closer",
          "requiredKeywordGroups": [
            [
              "high"
            ],
            [
              "decreas",
              "closer",
              "smaller",
              "less"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "Low-empathy group: oxytocin increased preferred distance / further away",
          "requiredKeywordGroups": [
            [
              "low"
            ],
            [
              "increas",
              "further",
              "farther",
              "greater",
              "more"
            ]
          ]
        },
        {
          "id": "mp3",
          "markDescription": "Supports social salience (amplifies existing traits rather than universal closeness)",
          "requiredKeywordGroups": [
            [
              "salience",
              "interaction",
              "amplif",
              "baseline",
              "trait"
            ]
          ]
        }
      ]
    },
    "explanation": "Perry et al. (2015) refuted the universal \"love hormone\" myth by showing opposing effects of oxytocin in high- vs low-empathy individuals."
  },
  {
    "id": "al-psy-q16",
    "subtopicId": "al-psy-6-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "According to the Revised Dopamine Hypothesis of schizophrenia (Howes & Kapur, 2009), how do dopamine abnormalities link to symptoms?",
    "options": [
      "Uniform excess dopamine across the entire cortex causes both positive and negative symptoms",
      "Subcortical (mesolimbic) hyperdopaminergia drives positive symptoms, whereas prefrontal hypodopaminergia drives negative and cognitive symptoms",
      "Dopamine plays no role; only serotonin deficiency causes hallucinations",
      "High dopamine in the cerebellum causes avolition"
    ],
    "correctIndex": 1,
    "explanation": "The revised hypothesis explains both symptom clusters: D2 overactivity in subcortical pathways (positive) + D1 underactivity in prefrontal cortex (negative)."
  },
  {
    "id": "al-psy-q17",
    "subtopicId": "al-psy-6-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "In Ellis’s ABCDE model of Rational Emotive Behaviour Therapy (REBT), what does the letter \"D\" represent?",
    "options": [
      "Depressive schema activation",
      "Disputing irrational beliefs (logical, empirical, and pragmatic)",
      "Dopamine antagonism",
      "Diagnostic reliability check"
    ],
    "correctIndex": 1,
    "explanation": "REBT extends ABC to D (Disputing irrational beliefs) and E (Effective new rational beliefs and healthier emotional outcomes)."
  },
  {
    "id": "al-psy-q18",
    "subtopicId": "al-psy-6-3",
    "type": "mcq",
    "marks": 1,
    "prompt": "According to Mowrer’s (1960) Two-Process Model, how is a phobia MAINTAINED over time once acquired?",
    "options": [
      "By positive punishment when facing the feared object",
      "By negative reinforcement: avoiding the phobic stimulus relieves anxiety, strengthening avoidance",
      "By vicarious reinforcement from watching calm role models",
      "By spontaneous recovery during REM sleep"
    ],
    "correctIndex": 1,
    "explanation": "Phobias are acquired via classical conditioning and maintained via operant negative reinforcement because avoidance removes unpleasant anxiety."
  },
  {
    "id": "al-psy-q19",
    "subtopicId": "al-psy-1-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "Which experimental method studies an independent variable that varies naturally in the real world without researcher manipulation (e.g., before and after a hospital policy change)?",
    "options": [
      "Laboratory experiment",
      "Field experiment",
      "Natural experiment",
      "Controlled observation"
    ],
    "correctIndex": 2,
    "explanation": "In a natural experiment the IV is not manipulated by the researcher; the researcher measures the DV across naturally occurring conditions."
  },
  {
    "id": "al-psy-q20",
    "subtopicId": "al-psy-1-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "In an observational study, recording behaviour at fixed 5-second intervals (as in Bandura, 1961) is an example of:",
    "options": [
      "Event sampling",
      "Time sampling",
      "Stratified sampling",
      "Snowball sampling"
    ],
    "correctIndex": 1,
    "explanation": "Time sampling logs whatever behaviour occurs at predetermined time ticks (e.g., every 5 seconds)."
  },
  {
    "id": "al-psy-q21",
    "subtopicId": "al-psy-1-3",
    "type": "mcq",
    "marks": 1,
    "prompt": "Which trio represents Russell and Burch’s (1959) \"3Rs\" guiding ethical animal research in psychology?",
    "options": [
      "Recall, Recognition, Relearning",
      "Replacement, Reduction, Refinement",
      "Reliability, Replicability, Realism",
      "Reinforcement, Response, Recovery"
    ],
    "correctIndex": 1,
    "explanation": "The 3Rs require Replacing animals where possible, Reducing the number of animals used, and Refining housing/procedures to minimise distress."
  },
  {
    "id": "al-psy-q22",
    "subtopicId": "al-psy-2-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "Which component was added to the Working Memory Model by Baddeley in 2000 to integrate visual, spatial, and verbal information with Long-Term Memory?",
    "options": [
      "Phonological Store",
      "Articulatory Loop",
      "Episodic Buffer",
      "Sensory Register"
    ],
    "correctIndex": 2,
    "explanation": "Baddeley (2000) added the modality-free Episodic Buffer (~4 chunks) to bind multimodal inputs into chronological episodes."
  },
  {
    "id": "al-psy-q23",
    "subtopicId": "al-psy-2-3",
    "type": "mcq",
    "marks": 1,
    "prompt": "In Loftus & Palmer (1974) Experiment 1, which verb produced the highest mean speed estimate (40.5 mph)?",
    "options": [
      "Contacted",
      "Hit",
      "Collided",
      "Smashed"
    ],
    "correctIndex": 3,
    "explanation": "\"Smashed\" yielded a mean estimate of 40.5 mph compared with 31.8 mph for \"contacted\"."
  },
  {
    "id": "al-psy-q24",
    "subtopicId": "al-psy-3-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "Why did Dement & Kleitman (1957) require participants to abstain from alcohol and caffeine on test days?",
    "options": [
      "To induce artificial insomnia",
      "To control physiological confounding variables that alter REM sleep duration and brainwave patterns",
      "To test classical conditioning of thirst",
      "To prevent participant attrition"
    ],
    "correctIndex": 1,
    "explanation": "Alcohol and caffeine alter sleep architecture and REM cycles, so banning them protected internal validity."
  },
  {
    "id": "al-psy-q25",
    "subtopicId": "al-psy-3-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "Which automated neuroimaging technique did Hölzel et al. (2011) use to measure regional grey matter concentration from structural MRI scans?",
    "options": [
      "Electrooculography (EOG)",
      "Voxel-Based Morphometry (VBM)",
      "Positron Emission Tomography (PET)",
      "Post-mortem dissection"
    ],
    "correctIndex": 1,
    "explanation": "Voxel-Based Morphometry (VBM) objectively quantifies regional grey matter concentration across 3D MRI voxels."
  },
  {
    "id": "al-psy-q26",
    "subtopicId": "al-psy-3-3",
    "type": "mcq",
    "marks": 1,
    "prompt": "What effect does an inhibitory neurotransmitter (such as GABA) have on the postsynaptic membrane?",
    "options": [
      "Triggers an EPSP that depolarises the neurone toward threshold",
      "Triggers an IPSP (hyperpolarisation), making the postsynaptic neurone less likely to fire",
      "Destroys the myelin sheath along the axon",
      "Directly releases adrenaline from the adrenal medulla"
    ],
    "correctIndex": 1,
    "explanation": "Inhibitory neurotransmitters cause Inhibitory Postsynaptic Potentials (IPSPs), hyperpolarising the membrane."
  },
  {
    "id": "al-psy-q27",
    "subtopicId": "al-psy-4-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "Which reinforcement schedule produces the highest response rate and greatest resistance to extinction?",
    "options": [
      "Continuous reinforcement",
      "Fixed-interval",
      "Variable-ratio",
      "Fixed-ratio"
    ],
    "correctIndex": 2,
    "explanation": "Variable-ratio schedules (rewarding after an unpredictable number of responses, like slot machines) resist extinction most strongly."
  },
  {
    "id": "al-psy-q28",
    "subtopicId": "al-psy-4-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "Why was Stage 2 (Mild Aggression Arousal) included in Bandura, Ross & Ross (1961)?",
    "options": [
      "To debrief the children before testing",
      "To ensure all three groups experienced equal baseline frustration before entering the test room",
      "To punish children who imitated the adult model",
      "To measure baseline IQ"
    ],
    "correctIndex": 1,
    "explanation": "Letting children play briefly with attractive toys before taking them away equalised mild frustration across all conditions."
  },
  {
    "id": "al-psy-q29",
    "subtopicId": "al-psy-4-3",
    "type": "mcq",
    "marks": 1,
    "prompt": "In Fagen et al. (2014), what acted as the secondary reinforcer (conditioned marker) during elephant trunk-wash training?",
    "options": [
      "Chopped bananas",
      "A whistle blow",
      "Verbal praise from the mahout",
      "A bell ring"
    ],
    "correctIndex": 1,
    "explanation": "A short whistle blow served as the secondary reinforcer paired with chopped banana (primary reinforcer)."
  },
  {
    "id": "al-psy-q30",
    "subtopicId": "al-psy-5-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "According to Milgram’s Agency Theory, what term describes the situational pressures (such as politeness and incremental commitment) that keep a person in the agentic state?",
    "options": [
      "Autonomous triggers",
      "Binding factors",
      "Deindividuation cues",
      "Dispositional traits"
    ],
    "correctIndex": 1,
    "explanation": "Binding factors are psychological barriers that bind the participant into continued obedience despite moral strain."
  },
  {
    "id": "al-psy-q31",
    "subtopicId": "al-psy-5-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "In Asch’s (1951) baseline line-judgement study, what percentage of responses across the 12 critical trials conformed to the unanimous wrong majority?",
    "options": [
      "10.0%",
      "36.8% (about one-third)",
      "65.0%",
      "95.0%"
    ],
    "correctIndex": 1,
    "explanation": "Participants conformed on 36.8% of critical trials (and 75% conformed at least once)."
  },
  {
    "id": "al-psy-q32",
    "subtopicId": "al-psy-5-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "After how many days did Zimbardo (1973) terminate the planned 14-day Stanford Prison Experiment due to severe emotional distress?",
    "options": [
      "2 days",
      "6 days",
      "10 days",
      "14 days"
    ],
    "correctIndex": 1,
    "explanation": "Following escalating guard brutality, prisoner breakdowns, and Christina Maslach’s ethical challenge, Zimbardo ended the study after 6 days."
  },
  {
    "id": "al-psy-q33",
    "subtopicId": "al-psy-5-3",
    "type": "mcq",
    "marks": 1,
    "prompt": "In Piliavin et al. (1969), what percentage of trials with the cane (ill) victim received spontaneous bystander help before the model intervened?",
    "options": [
      "32%",
      "50%",
      "75%",
      "95%"
    ],
    "correctIndex": 3,
    "explanation": "The cane victim received spontaneous help on 95% of trials (median latency 5 s), compared with 50% for the drunk victim (median 109 s)."
  },
  {
    "id": "al-psy-q34",
    "subtopicId": "al-psy-6-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "According to Frith (1992), which cognitive deficit explains why patients with schizophrenia experience auditory hallucinations as external voices rather than their own inner speech?",
    "options": [
      "Metarepresentation dysfunction",
      "Visuo-spatial sketchpad overload",
      "Reciprocal inhibition",
      "Evaluative conditioning"
    ],
    "correctIndex": 0,
    "explanation": "Impaired metarepresentation prevents patients from recognising self-generated inner speech as their own."
  },
  {
    "id": "al-psy-q35",
    "subtopicId": "al-psy-6-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "What are the three components of Beck’s (1967) Negative Triad in depression?",
    "options": [
      "Id, Ego, and Superego",
      "Negative views of the Self, the World, and the Future",
      "Activating event, Belief, and Consequence",
      "Sensory, Short-Term, and Long-Term schemas"
    ],
    "correctIndex": 1,
    "explanation": "Beck’s Negative Triad comprises dysfunctional negative views of the Self, the World/experiences, and the Future."
  },
  {
    "id": "al-psy-q36",
    "subtopicId": "al-psy-6-3",
    "type": "mcq",
    "marks": 1,
    "prompt": "Which candidate genes are most frequently linked to genetic vulnerability for Obsessive-Compulsive Disorder (OCD)?",
    "options": [
      "FOXP2 and BRCA1",
      "COMT (dopamine regulation) and SERT / 5-HTT (serotonin transport)",
      "APOE4 and HTT",
      "SRY and HBB"
    ],
    "correctIndex": 1,
    "explanation": "Low-activity COMT variants (elevated dopamine) and SERT/5-HTT mutations (reduced synaptic serotonin) are key polygenic candidates in OCD."
  },
  {
    "id": "al-psy-q-1-1-3",
    "subtopicId": "al-psy-1-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "Explain ONE disadvantage of a repeated measures experimental design and name the specific control technique used to address it.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "Order effects (practice, boredom, or fatigue) can confound results in the second condition; researchers control this using counterbalancing (e.g. ABBA — half do A then B, half do B then A).",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Order effects (practice / fatigue / boredom / demand characteristics)",
          "requiredKeywordGroups": [
            [
              "order effect",
              "fatigue",
              "practice",
              "boredom",
              "demand"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "Counterbalancing (ABBA)",
          "requiredKeywordGroups": [
            [
              "counterbalanc",
              "abba"
            ]
          ]
        }
      ]
    },
    "explanation": "Counterbalancing balances out order effects across conditions."
  },
  {
    "id": "al-psy-q-1-1-4",
    "subtopicId": "al-psy-1-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "In which type of experiment is the independent variable NOT manipulated by the researcher because it occurs naturally (e.g. comparing earthquake survivors vs non-survivors)?",
    "options": [
      "Laboratory experiment",
      "Field experiment",
      "Natural experiment",
      "Matched-pairs experiment"
    ],
    "correctIndex": 2,
    "explanation": "Natural experiments study a naturally occurring IV that would be impossible or unethical to manipulate."
  },
  {
    "id": "al-psy-q-1-1-5",
    "subtopicId": "al-psy-1-1",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the experimental control terms:",
    "segments": [
      "An uncontrolled factor that varies systematically with the IV and messes up cause-and-effect is a ",
      " variable; defining variables precisely so they can be measured is called ",
      "."
    ],
    "wordBank": [
      "confounding",
      "operationalisation",
      "dependent",
      "triangulation"
    ],
    "answers": [
      "confounding",
      "operationalisation"
    ],
    "explanation": "Confounding variables ruin internal validity; operationalisation makes variables measurable."
  },
  {
    "id": "al-psy-q-1-2-3",
    "subtopicId": "al-psy-1-2",
    "type": "short-answer",
    "marks": 2,
    "prompt": "Explain why a strong positive correlation (r = +0.85) between daily screen time and anxiety scores CANNOT prove that screen time causes anxiety.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "Correlations do not manipulate an IV or control extraneous variables, so there may be reverse causality (anxious people use screens more) or an unmeasured third/intervening variable (e.g. poor sleep or loneliness) causing both.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "No IV manipulation / reverse causality possible",
          "requiredKeywordGroups": [
            [
              "no iv",
              "manipulat",
              "reverse",
              "cause",
              "direction"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "Third / intervening / extraneous variable may explain both",
          "requiredKeywordGroups": [
            [
              "third variable",
              "intervening",
              "extraneous",
              "other factor"
            ]
          ]
        }
      ]
    },
    "explanation": "Correlation ≠ causation (directionality + third-variable problem)."
  },
  {
    "id": "al-psy-q-1-2-4",
    "subtopicId": "al-psy-1-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "Which sampling technique divides a population into subgroups (e.g. age brackets) and randomly selects participants in exact proportion to each subgroup’s size?",
    "options": [
      "Opportunity sampling",
      "Volunteer sampling",
      "Stratified sampling",
      "Systematic sampling"
    ],
    "correctIndex": 2,
    "explanation": "Stratified sampling guarantees proportional representation of key strata."
  },
  {
    "id": "al-psy-q-1-2-5",
    "subtopicId": "al-psy-1-2",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the observational design concepts:",
    "segments": [
      "Recording behaviour every 30 seconds is called ",
      " sampling; confirming two raters achieve r ≥ 0.80 establishes ",
      "-observer reliability."
    ],
    "wordBank": [
      "time",
      "inter",
      "event",
      "split"
    ],
    "answers": [
      "time",
      "inter"
    ],
    "explanation": "Fixed intervals = time sampling; agreement between raters = inter-observer reliability."
  },
  {
    "id": "al-psy-q-1-3-3",
    "subtopicId": "al-psy-1-3",
    "type": "short-answer",
    "marks": 2,
    "prompt": "Distinguish between a Type I error and a Type II error, and explain why psychologists usually choose p ≤ 0.05 as their significance level.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "A Type I error (false positive) rejects a true null hypothesis; a Type II error (false negative) accepts a false null hypothesis. p ≤ 0.05 (5% risk) strikes a balanced compromise between avoiding both errors.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Type I = false positive / rejects true H₀; Type II = false negative / accepts false H₀",
          "requiredKeywordGroups": [
            [
              "false positive",
              "reject"
            ],
            [
              "false negative",
              "accept"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "p ≤ 0.05 balances risk of both errors",
          "requiredKeywordGroups": [
            [
              "balance",
              "compromise",
              "5%",
              "0.05"
            ]
          ]
        }
      ]
    },
    "explanation": "0.05 balances Type I (lenient α) and Type II (strict α) risk."
  },
  {
    "id": "al-psy-q-1-3-4",
    "subtopicId": "al-psy-1-3",
    "type": "mcq",
    "marks": 1,
    "prompt": "Which measure of central tendency is MOST appropriate for a heavily positively skewed distribution of household incomes?",
    "options": [
      "Mean",
      "Median",
      "Range",
      "Standard deviation"
    ],
    "correctIndex": 1,
    "explanation": "The median is unaffected by extreme high-income outliers, unlike the mean."
  },
  {
    "id": "al-psy-q-1-3-5",
    "subtopicId": "al-psy-1-3",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the reliability & peer-review concepts:",
    "segments": [
      "Administering the exact same questionnaire to the same group two weeks apart tests ",
      "-retest reliability; independent expert scrutiny before journal publication is called ",
      " review."
    ],
    "wordBank": [
      "test",
      "peer",
      "split",
      "meta"
    ],
    "answers": [
      "test",
      "peer"
    ],
    "explanation": "Test-retest checks temporal stability; peer review checks quality/validity before publication."
  },
  {
    "id": "al-psy-q-2-1-3",
    "subtopicId": "al-psy-2-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "Explain how clinical evidence from Patient KF challenges the Multi-Store Model (MSM) and supports the Working Memory Model (WMM).",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "Patient KF had severely impaired auditory/verbal short-term memory yet intact visual short-term memory. This contradicts MSM’s assumption of a single unitary STM store and supports WMM’s separate phonological loop and visuo-spatial sketchpad.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "KF had impaired auditory/verbal STM but intact visual STM",
          "requiredKeywordGroups": [
            [
              "verbal",
              "auditory"
            ],
            [
              "visual"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "Refutes unitary STM (MSM) and supports separate WMM slave systems",
          "requiredKeywordGroups": [
            [
              "unitary",
              "single",
              "phonological loop",
              "visuo-spatial",
              "separate"
            ]
          ]
        }
      ]
    },
    "explanation": "Double dissociation in KF proves STM has separate verbal & visual subsystems."
  },
  {
    "id": "al-psy-q-2-1-4",
    "subtopicId": "al-psy-2-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "According to Baddeley (1966), how is information primarily coded in Short-Term Memory vs Long-Term Memory?",
    "options": [
      "STM = semantic, LTM = acoustic",
      "STM = acoustic, LTM = semantic",
      "Both STM and LTM = visual only",
      "STM = procedural, LTM = episodic"
    ],
    "correctIndex": 1,
    "explanation": "Baddeley (1966) found immediate recall suffered with acoustically similar words (STM), while delayed recall suffered with semantically similar words (LTM)."
  },
  {
    "id": "al-psy-q-2-1-5",
    "subtopicId": "al-psy-2-1",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the Working Memory Model components:",
    "segments": [
      "The ",
      " executive allocates attention to slave systems; the ",
      " loop holds verbal speech-based information via the inner voice."
    ],
    "wordBank": [
      "central",
      "phonological",
      "episodic",
      "sensory"
    ],
    "answers": [
      "central",
      "phonological"
    ],
    "explanation": "Central executive supervises the phonological loop, visuo-spatial sketchpad, and episodic buffer."
  },
  {
    "id": "al-psy-q-2-2-3",
    "subtopicId": "al-psy-2-2",
    "type": "short-answer",
    "marks": 2,
    "prompt": "Explain the cognitive mechanism Andrade (2010) proposed for why doodling IMPROVED recall of the telephone message.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "Doodling uses just enough cognitive/visuo-spatial resources to keep arousal up and prevent daydreaming (mind-wandering), without overloading the verbal/central-executive resources needed to process the spoken message.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Prevents daydreaming / maintains arousal",
          "requiredKeywordGroups": [
            [
              "daydream",
              "arousal",
              "mind-wander",
              "concentrat"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "Does not overload verbal / central executive processing of the message",
          "requiredKeywordGroups": [
            [
              "overload",
              "resource",
              "central executive",
              "verbal",
              "cognitive"
            ]
          ]
        }
      ]
    },
    "explanation": "Doodling suppresses daydreaming while sparing verbal working memory."
  },
  {
    "id": "al-psy-q-2-2-4",
    "subtopicId": "al-psy-2-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "In Baron-Cohen et al. (2001), why was a GLOSSARY of emotion words provided to participants taking the Revised Eyes Test?",
    "options": [
      "To make the test take longer",
      "To ensure poor scores reflected Theory of Mind deficits rather than lack of vocabulary",
      "To test participants’ reading speed",
      "To reveal the correct answers"
    ],
    "correctIndex": 1,
    "explanation": "Controlling vocabulary isolates social-cognitive emotion recognition (validity!)."
  },
  {
    "id": "al-psy-q-2-2-5",
    "subtopicId": "al-psy-2-2",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the key results of Andrade (2010) & Baron-Cohen (2001):",
    "segments": [
      "In Andrade (2010), doodlers recalled ",
      "% more details than controls; in Baron-Cohen et al. (2001), AS/HFA adults scored significantly ",
      " on the Eyes Test than IQ-matched controls."
    ],
    "wordBank": [
      "29",
      "lower",
      "75",
      "higher"
    ],
    "answers": [
      "29",
      "lower"
    ],
    "explanation": "Doodlers recalled 29% more (7.5 vs 5.8); AS/HFA averaged 21.9 vs 30.9."
  },
  {
    "id": "al-psy-q-2-3-3",
    "subtopicId": "al-psy-2-3",
    "type": "short-answer",
    "marks": 2,
    "prompt": "Explain what Experiment 2 of Loftus & Palmer (1974) (the broken glass question a week later) proved that Experiment 1 alone could NOT prove.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "Experiment 1 could have been explained by response bias (students guessing a higher speed to match the verb). Experiment 2 showed participants falsely remembered broken glass a week later, proving the leading verb genuinely altered/distorted their actual memory trace (reconstructive memory).",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Experiment 1 could be mere response bias",
          "requiredKeywordGroups": [
            [
              "response bias",
              "demand",
              "guess"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "Experiment 2 showed false memory of broken glass ⇒ memory trace altered",
          "requiredKeywordGroups": [
            [
              "broken glass",
              "false memory",
              "alter",
              "reconstruct",
              "substitut"
            ]
          ]
        }
      ]
    },
    "explanation": "False broken-glass recall confirms memory distortion, not just demand bias."
  },
  {
    "id": "al-psy-q-2-3-4",
    "subtopicId": "al-psy-2-3",
    "type": "mcq",
    "marks": 1,
    "prompt": "Which of the following is NOT one of the four core techniques of Fisher & Geiselman’s Cognitive Interview?",
    "options": [
      "Mental reinstatement of context",
      "Recall in reverse chronological order",
      "Use of leading questions to jog memory",
      "Recall from a changed perspective"
    ],
    "correctIndex": 2,
    "explanation": "Leading questions distort memory and are strictly avoided in the Cognitive Interview!"
  },
  {
    "id": "al-psy-q-2-3-5",
    "subtopicId": "al-psy-2-3",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the eyewitness accuracy findings:",
    "segments": [
      "In Gabbert et al. (2003), ",
      "% of co-witnesses who discussed a crime mistakenly recalled details they had never seen due to memory ",
      "."
    ],
    "wordBank": [
      "71",
      "conformity",
      "12",
      "decay"
    ],
    "answers": [
      "71",
      "conformity"
    ],
    "explanation": "71% fell prey to post-event discussion / memory conformity vs 0% in the control group!"
  },
  {
    "id": "al-psy-q-3-1-3",
    "subtopicId": "al-psy-3-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "State TWO key findings of Dement & Kleitman (1957) regarding REM sleep and dreaming.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "1. Dreams were recalled far more frequently when woken in REM (~80%) than NREM (~7%). 2. Participants accurately judged whether they had been dreaming for 5 or 15 minutes (~88% accuracy), and EOG eye-movement directions matched dream content.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Much higher dream recall in REM (~80%) vs NREM (~7%)",
          "requiredKeywordGroups": [
            [
              "rem"
            ],
            [
              "nrem",
              "80",
              "79",
              "7%",
              "more"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "Accurate 5 vs 15 min duration estimates OR EOG eye-movement direction match",
          "requiredKeywordGroups": [
            [
              "5",
              "15",
              "duration",
              "eye movement",
              "direction",
              "word count"
            ]
          ]
        }
      ]
    },
    "explanation": "REM ≈ 80% recall vs NREM ≈ 7%, plus 88% duration accuracy and EOG-content match."
  },
  {
    "id": "al-psy-q-3-1-4",
    "subtopicId": "al-psy-3-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "What physiological tool did Dement & Kleitman attach near the outer corners of participants’ eyes to detect rapid eye movements?",
    "options": [
      "fMRI scanner",
      "Electrooculograph (EOG)",
      "PET scan",
      "Galvanic skin sensor"
    ],
    "correctIndex": 1,
    "explanation": "EEG measured brain waves on the scalp; EOG measured electrical activity of eye muscles."
  },
  {
    "id": "al-psy-q-3-1-5",
    "subtopicId": "al-psy-3-1",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the sleep-cycle facts:",
    "segments": [
      "The 90-minute human sleep cycle is an example of an ",
      " rhythm; deep slow-wave sleep (Stages 3–4) is characterised by slow ",
      " brain waves."
    ],
    "wordBank": [
      "ultradian",
      "delta",
      "circadian",
      "beta"
    ],
    "answers": [
      "ultradian",
      "delta"
    ],
    "explanation": "<24 h = ultradian; deep NREM Stages 3–4 display high-amplitude delta waves."
  },
  {
    "id": "al-psy-q-3-2-3",
    "subtopicId": "al-psy-3-2",
    "type": "short-answer",
    "marks": 2,
    "prompt": "Name TWO brain regions that showed significantly increased grey matter concentration after 8 weeks of MBSR in Hölzel et al. (2011), and state ONE function of the hippocampus.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "Left hippocampus, posterior cingulate cortex (PCC), temporo-parietal junction (TPJ), or cerebellum. The hippocampus plays a key role in learning, memory consolidation, and emotion regulation.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Names two regions (left hippocampus / PCC / TPJ / cerebellum)",
          "requiredKeywordGroups": [
            [
              "hippocampus"
            ],
            [
              "cingulate",
              "pcc",
              "tpj",
              "temporo",
              "cerebellum"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "Hippocampus function (memory / learning / emotion regulation)",
          "requiredKeywordGroups": [
            [
              "memory",
              "learning",
              "emotion"
            ]
          ]
        }
      ]
    },
    "explanation": "Left hippocampus + PCC + TPJ + cerebellum all gained grey matter density."
  },
  {
    "id": "al-psy-q-3-2-4",
    "subtopicId": "al-psy-3-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "Why is the LACK OF RANDOM ALLOCATION between the MBSR group and wait-list controls a methodological limitation in Hölzel et al. (2011)?",
    "options": [
      "MRI scanners cannot scan wait-list controls",
      "Participants who chose MBSR might differ in motivation or baseline stress (participant variables)",
      "It prevented any grey-matter measurement",
      "Controls meditated more than the MBSR group"
    ],
    "correctIndex": 1,
    "explanation": "Without random allocation, self-selection participant variables may confound group differences."
  },
  {
    "id": "al-psy-q-3-2-5",
    "subtopicId": "al-psy-3-2",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the Hölzel et al. (2011) study details:",
    "segments": [
      "Hölzel et al. used structural ",
      " brain scans before and after an ",
      "-week MBSR mindfulness programme."
    ],
    "wordBank": [
      "MRI",
      "8",
      "EEG",
      "2"
    ],
    "answers": [
      "MRI",
      "8"
    ],
    "explanation": "Structural MRI voxel-based morphometry measured grey matter over 8 weeks."
  },
  {
    "id": "al-psy-q-3-3-3",
    "subtopicId": "al-psy-3-3",
    "type": "short-answer",
    "marks": 2,
    "prompt": "Distinguish between the symptoms of Broca’s aphasia and Wernicke’s aphasia, naming the brain lobe where each area is located.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "Broca’s area (left frontal lobe) controls speech production, so damage causes slow, laborious, non-fluent speech with intact comprehension. Wernicke’s area (left temporal lobe) controls language comprehension, so damage produces fluent but meaningless speech (neologisms) and poor comprehension.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Broca’s = left frontal lobe, impaired speech production / slow halting",
          "requiredKeywordGroups": [
            [
              "frontal"
            ],
            [
              "production",
              "slow",
              "halting",
              "fluent"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "Wernicke’s = left temporal lobe, impaired comprehension / meaningless fluent speech",
          "requiredKeywordGroups": [
            [
              "temporal"
            ],
            [
              "comprehension",
              "understand",
              "meaningless",
              "nonsense"
            ]
          ]
        }
      ]
    },
    "explanation": "Broca = Frontal = Broken production; Wernicke = Temporal = Word-salad comprehension."
  },
  {
    "id": "al-psy-q-3-3-4",
    "subtopicId": "al-psy-3-3",
    "type": "mcq",
    "marks": 1,
    "prompt": "In Sperry’s (1968) split-brain experiments, a picture of a key is flashed exclusively to the LEFT visual field. What can the patient do?",
    "options": [
      "Verbally say \"key\" immediately",
      "Cannot name it verbally, but can select a matching key by touch with their LEFT hand",
      "Draw it with their right hand and name it",
      "Neither name it nor recognise it with either hand"
    ],
    "correctIndex": 1,
    "explanation": "LVF goes to the right hemisphere (no speech centre, controls left hand)."
  },
  {
    "id": "al-psy-q-3-3-5",
    "subtopicId": "al-psy-3-3",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the brain-scanning & autonomic terms:",
    "segments": [
      "fMRI has high ",
      " resolution (mm precision) whereas EEG/ERP has high ",
      " resolution (millisecond timing)."
    ],
    "wordBank": [
      "spatial",
      "temporal",
      "chemical",
      "hormonal"
    ],
    "answers": [
      "spatial",
      "temporal"
    ],
    "explanation": "fMRI shows WHERE (spatial); EEG/ERP shows WHEN (temporal)."
  },
  {
    "id": "al-psy-q-4-1-3",
    "subtopicId": "al-psy-4-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "Clearly distinguish between NEGATIVE REINFORCEMENT and PUNISHMENT in operant conditioning, giving one everyday example of negative reinforcement.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "Negative reinforcement INCREASES the likelihood of a behaviour by removing an unpleasant stimulus (e.g. fastening a seatbelt to stop an annoying car chime, or taking aspirin to remove a headache), whereas punishment DECREASES the likelihood of a behaviour.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Negative reinforcement increases behaviour by removing unpleasant stimulus (vs punishment decreases)",
          "requiredKeywordGroups": [
            [
              "remove",
              "avoid",
              "stop"
            ],
            [
              "increase",
              "strengthen",
              "decrease"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "Valid concrete example of negative reinforcement",
          "requiredKeywordGroups": [
            [
              "seatbelt",
              "alarm",
              "headache",
              "painkiller",
              "aspirin",
              "chore",
              "umbrella",
              "shock",
              "nag"
            ]
          ]
        }
      ]
    },
    "explanation": "Negative reinforcement = relief (↑ behaviour); Punishment = penalty (↓ behaviour)."
  },
  {
    "id": "al-psy-q-4-1-4",
    "subtopicId": "al-psy-4-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "Which schedule of reinforcement produces the HIGHEST response rate and is MOST resistant to extinction (as seen in slot machines)?",
    "options": [
      "Continuous reinforcement",
      "Fixed-interval",
      "Variable-ratio",
      "Fixed-ratio"
    ],
    "correctIndex": 2,
    "explanation": "Unpredictable reward per number of responses (variable-ratio) keeps responding maximally persistent."
  },
  {
    "id": "al-psy-q-4-1-5",
    "subtopicId": "al-psy-4-1",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the conditioning concepts:",
    "segments": [
      "In classical conditioning, presenting the CS repeatedly without the UCS causes ",
      "; rewarding successive approximations toward a complex behaviour is called ",
      "."
    ],
    "wordBank": [
      "extinction",
      "shaping",
      "generalisation",
      "imitation"
    ],
    "answers": [
      "extinction",
      "shaping"
    ],
    "explanation": "No UCS ⇒ extinction; step-by-step reinforcement ⇒ shaping."
  },
  {
    "id": "al-psy-q-4-2-3",
    "subtopicId": "al-psy-4-2",
    "type": "short-answer",
    "marks": 2,
    "prompt": "Name the FOUR mediational (cognitive) processes in Bandura’s Social Learning Theory and state which two govern LEARNING vs PERFORMANCE.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "Attention, Retention, Motor Reproduction, and Motivation. Attention and Retention govern LEARNING (acquisition) of the behaviour, while Motor Reproduction and Motivation govern PERFORMANCE.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Names all four: Attention, Retention, Motor reproduction, Motivation",
          "requiredKeywordGroups": [
            [
              "attention"
            ],
            [
              "retention"
            ],
            [
              "reproduction"
            ],
            [
              "motivation"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "Links Attention/Retention to learning and Reproduction/Motivation to performance",
          "requiredKeywordGroups": [
            [
              "learning",
              "performance"
            ]
          ]
        }
      ]
    },
    "explanation": "A-R = learning; M-M = performance."
  },
  {
    "id": "al-psy-q-4-2-4",
    "subtopicId": "al-psy-4-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "In Bandura et al. (1961), how did researchers control for individual differences in children’s pre-existing aggressiveness before allocating them to conditions?",
    "options": [
      "Used only girls",
      "Matched participants across conditions using pre-study aggression ratings by teachers/experimenter",
      "Let children choose their own group",
      "Ran a repeated measures design"
    ],
    "correctIndex": 1,
    "explanation": "Matched-pairs allocation based on baseline aggression ratings controlled participant variables."
  },
  {
    "id": "al-psy-q-4-2-5",
    "subtopicId": "al-psy-4-2",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the Social Learning Theory mechanisms:",
    "segments": [
      "Observers are most likely to imitate a role model they admire or share traits with, a process called ",
      "; seeing a model rewarded provides ",
      " reinforcement."
    ],
    "wordBank": [
      "identification",
      "vicarious",
      "extinction",
      "classical"
    ],
    "answers": [
      "identification",
      "vicarious"
    ],
    "explanation": "Identification + vicarious reinforcement drive imitation."
  },
  {
    "id": "al-psy-q-4-3-3",
    "subtopicId": "al-psy-4-3",
    "type": "short-answer",
    "marks": 2,
    "prompt": "Explain the unexpected result of contingency management alone in Saavedra & Silverman (2002) and how the therapists resolved it.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "Positive reinforcement (contingency management) improved the boy’s outward ability to handle buttons, but his subjective feelings of disgust actually worsened/increased; therapists then introduced disgust-focused imagery and cognitive self-control, which successfully eliminated both avoidance and subjective distress.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Behaviour improved yet subjective disgust/distress increased",
          "requiredKeywordGroups": [
            [
              "disgust",
              "distress",
              "rating"
            ],
            [
              "increas",
              "worse",
              "high"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "Resolved with imagery / cognitive self-control therapy",
          "requiredKeywordGroups": [
            [
              "imagery",
              "cognitive",
              "self-control"
            ]
          ]
        }
      ]
    },
    "explanation": "Behavioural exposure alone did not fix disgust; cognitive imagery did."
  },
  {
    "id": "al-psy-q-4-3-4",
    "subtopicId": "al-psy-4-3",
    "type": "mcq",
    "marks": 1,
    "prompt": "In Fagen et al. (2014), what role did the WHISTLE serve when training Nepalese elephants to perform a trunk wash?",
    "options": [
      "Unconditioned stimulus",
      "Secondary reinforcer (marker paired with banana)",
      "Punishment cue",
      "Negative reinforcer"
    ],
    "correctIndex": 1,
    "explanation": "The whistle was paired with chopped banana (primary reinforcer) to become a precise secondary reinforcer."
  },
  {
    "id": "al-psy-q-4-3-5",
    "subtopicId": "al-psy-4-3",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the Saavedra & Silverman (2002) and Fagen (2014) details:",
    "segments": [
      "Saavedra & Silverman measured the boy’s distress using the ",
      " Thermometer; Fagen et al. trained elephants using strictly ",
      " reinforcement (shaping & chaining)."
    ],
    "wordBank": [
      "Feelings",
      "positive",
      "Beck",
      "negative"
    ],
    "answers": [
      "Feelings",
      "positive"
    ],
    "explanation": "Feelings Thermometer (0–8) tracked subjective fear/disgust; Fagen used zero-punishment SPR."
  },
  {
    "id": "al-psy-q-5-1-3",
    "subtopicId": "al-psy-5-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "Describe how TWO situational variables tested in Milgram’s variations (proximity, location, or uniform) affected obedience rates to 450 V.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "Moving from Yale to a run-down Bridgeport office lowered obedience from 65% to 47.5% (reduced legitimacy). Replacing the grey lab coat with ordinary clothes dropped obedience to 20%. Placing learner in the same room dropped obedience to 40% (30% in touch-proximity).",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Correct first situational variable and drop in obedience",
          "requiredKeywordGroups": [
            [
              "proximity",
              "location",
              "bridgeport",
              "uniform",
              "lab coat",
              "same room"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "Correct second variable OR accurate percentage figures (47.5% / 40% / 30% / 20%)",
          "requiredKeywordGroups": [
            [
              "47.5",
              "48",
              "40",
              "30",
              "20",
              "drop",
              "lower",
              "decreas"
            ]
          ]
        }
      ]
    },
    "explanation": "Yale 65% → Bridgeport 47.5% → Same room 40% → Touch 30% → Ordinary clothes 20%."
  },
  {
    "id": "al-psy-q-5-1-4",
    "subtopicId": "al-psy-5-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "Which real-world field study by Hofling et al. (1966) supports Milgram’s obedience findings with high ecological validity?",
    "options": [
      "21 out of 22 hospital nurses obeyed an unknown doctor’s phone order to give double the maximum safe drug dose",
      "Subway passengers helped a collapsing man",
      "Students conformed to wrong line lengths",
      "Guards abused mock prisoners"
    ],
    "correctIndex": 0,
    "explanation": "Hofling’s nurses obeyed an illegitimate telephone order (95%), confirming real-world obedience."
  },
  {
    "id": "al-psy-q-5-1-5",
    "subtopicId": "al-psy-5-1",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the obedience theory terms:",
    "segments": [
      "Adorno measured the Authoritarian Personality using the ",
      "-scale; feelings of moral tension that keep people obeying once started are called ",
      " factors."
    ],
    "wordBank": [
      "F",
      "binding",
      "IQ",
      "social"
    ],
    "answers": [
      "F",
      "binding"
    ],
    "explanation": "F-scale (Fascism scale) measures authoritarianism; binding factors reduce moral strain."
  },
  {
    "id": "al-psy-q-5-2-3",
    "subtopicId": "al-psy-5-2",
    "type": "short-answer",
    "marks": 2,
    "prompt": "Distinguish between Normative Social Influence (NSI) and Informational Social Influence (ISI), linking each to either compliance or internalisation.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "NSI is conforming to fit in / be liked and avoid rejection, usually producing temporary public compliance without private belief change. ISI is conforming because we believe others know better in an ambiguous task (desire to be right), usually producing deeper internalisation.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "NSI = desire to be liked/fit in → compliance",
          "requiredKeywordGroups": [
            [
              "liked",
              "fit in",
              "reject",
              "accept"
            ],
            [
              "compliance"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "ISI = desire to be right/ambiguous → internalisation",
          "requiredKeywordGroups": [
            [
              "right",
              "correct",
              "ambiguous",
              "uncertain"
            ],
            [
              "internalis"
            ]
          ]
        }
      ]
    },
    "explanation": "NSI = emotional (liked → compliance); ISI = cognitive (right → internalisation)."
  },
  {
    "id": "al-psy-q-5-2-4",
    "subtopicId": "al-psy-5-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "In Asch’s (1951) line-judgement variations, what happened to conformity when just ONE confederate broke unanimity by giving a different answer?",
    "options": [
      "Conformity rose to 75%",
      "Conformity dropped dramatically (down to ~5.5%)",
      "Conformity stayed unchanged at 36.8%",
      "All participants walked out"
    ],
    "correctIndex": 1,
    "explanation": "Social support from even a single dissenter shatters majority unanimity."
  },
  {
    "id": "al-psy-q-5-2-5",
    "subtopicId": "al-psy-5-2",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the Zimbardo & resistance concepts:",
    "segments": [
      "Zimbardo’s Stanford Prison Experiment was halted after ",
      " days due to prisoner distress; individuals who believe they control their own fate have an ",
      " locus of control."
    ],
    "wordBank": [
      "6",
      "internal",
      "14",
      "external"
    ],
    "answers": [
      "6",
      "internal"
    ],
    "explanation": "SPE stopped after 6 days; Internal LoC strongly aids resistance to social influence."
  },
  {
    "id": "al-psy-q-5-3-3",
    "subtopicId": "al-psy-5-3",
    "type": "short-answer",
    "marks": 2,
    "prompt": "Use Piliavin’s Arousal Cost–Reward Model to explain why subway passengers helped the ILL (cane) victim 95% of the time compared to 50% for the DRUNK victim.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "Helping a drunk victim carries higher perceived personal costs (risk of aggression, vomit, or embarrassment) and lower cost of not helping (less guilt because they are seen as responsible for their state), whereas helping an ill victim carries low cost and high guilt if ignored.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Higher cost of helping drunk (danger/aggression/embarrassment)",
          "requiredKeywordGroups": [
            [
              "cost of helping",
              "danger",
              "aggress",
              "embarrass",
              "unpredictable"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "Lower cost of not helping drunk / higher guilt for ignoring ill victim",
          "requiredKeywordGroups": [
            [
              "guilt",
              "blame",
              "responsible",
              "cost of not helping"
            ]
          ]
        }
      ]
    },
    "explanation": "Ill = low cost to help + high guilt if ignored; Drunk = high cost to help + low guilt."
  },
  {
    "id": "al-psy-q-5-3-4",
    "subtopicId": "al-psy-5-3",
    "type": "mcq",
    "marks": 1,
    "prompt": "In Perry et al. (2015), how did oxytocin nasal spray affect preferred interpersonal distance from a stranger in LOW-EMPATHY participants?",
    "options": [
      "Made them stand closer",
      "Increased their preferred distance (they stayed further away)",
      "Had zero measurable effect",
      "Made them prefer standing next to an authority figure only"
    ],
    "correctIndex": 1,
    "explanation": "Oxytocin decreased distance for High-Empathy men but INCREASED distance for Low-Empathy men."
  },
  {
    "id": "al-psy-q-5-3-5",
    "subtopicId": "al-psy-5-3",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the Piliavin (1969) & Perry (2015) findings:",
    "segments": [
      "Surprisingly, Piliavin et al. found NO evidence of ",
      " of responsibility on the subway; Perry et al. showed oxytocin effects depend on baseline ",
      "."
    ],
    "wordBank": [
      "diffusion",
      "empathy",
      "conformity",
      "intelligence"
    ],
    "answers": [
      "diffusion",
      "empathy"
    ],
    "explanation": "Larger subway crowds actually helped slightly faster; empathy moderated oxytocin."
  },
  {
    "id": "al-psy-q-6-1-3",
    "subtopicId": "al-psy-6-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "Distinguish between the roles of dopamine in the REVISED Dopamine Hypothesis for POSITIVE vs NEGATIVE symptoms of schizophrenia.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "Hyperdopaminergia (excess dopamine activity) in subcortical/mesolimbic pathways (e.g. Broca’s area) is linked to positive symptoms such as hallucinations, whereas hypodopaminergia (low dopamine activity) in the prefrontal cortex is linked to negative symptoms such as avolition.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Hyperdopaminergia / excess dopamine in subcortical/mesolimbic → positive symptoms",
          "requiredKeywordGroups": [
            [
              "hyper",
              "high",
              "excess"
            ],
            [
              "positive",
              "hallucination",
              "subcortical",
              "mesolimbic"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "Hypodopaminergia / low dopamine in prefrontal cortex → negative symptoms",
          "requiredKeywordGroups": [
            [
              "hypo",
              "low",
              "underactive"
            ],
            [
              "negative",
              "prefrontal",
              "cortex"
            ]
          ]
        }
      ]
    },
    "explanation": "Subcortical excess = positive; Prefrontal deficit = negative."
  },
  {
    "id": "al-psy-q-6-1-4",
    "subtopicId": "al-psy-6-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "Which of the following is a NEGATIVE symptom of schizophrenia?",
    "options": [
      "Auditory hallucinations",
      "Delusions of grandeur",
      "Avolition (severe loss of motivation and goal-directed activity)",
      "Persecutory delusions"
    ],
    "correctIndex": 2,
    "explanation": "Negative symptoms reflect a loss/reduction of normal functioning (avolition, speech poverty)."
  },
  {
    "id": "al-psy-q-6-1-5",
    "subtopicId": "al-psy-6-1",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the schizophrenia models & drug actions:",
    "segments": [
      "Typical antipsychotics like chlorpromazine act as ",
      " receptor antagonists; Gottesman’s 48% MZ concordance supports the ",
      "-stress interactionist model."
    ],
    "wordBank": [
      "dopamine",
      "diathesis",
      "serotonin",
      "behavioural"
    ],
    "answers": [
      "dopamine",
      "diathesis"
    ],
    "explanation": "Chlorpromazine blocks D₂ receptors; 48% MZ concordance requires both diathesis + stress."
  },
  {
    "id": "al-psy-q-6-2-3",
    "subtopicId": "al-psy-6-2",
    "type": "short-answer",
    "marks": 2,
    "prompt": "Identify the THREE components of Beck’s Negative Triad and explain what Ellis’s letters A, B, and C stand for.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "Beck’s Negative Triad: negative view of the Self, the World, and the Future. Ellis’s ABC: A = Activating event, B = Beliefs (rational or irrational), C = Consequences (emotional/behavioural outcome).",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Negative view of Self, World, and Future",
          "requiredKeywordGroups": [
            [
              "self"
            ],
            [
              "world"
            ],
            [
              "future"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "Activating event, Beliefs, Consequences",
          "requiredKeywordGroups": [
            [
              "activating"
            ],
            [
              "belief"
            ],
            [
              "consequence"
            ]
          ]
        }
      ]
    },
    "explanation": "Beck = Self/World/Future; Ellis = Activating event → Belief → Consequence."
  },
  {
    "id": "al-psy-q-6-2-4",
    "subtopicId": "al-psy-6-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "In March et al.’s (2007) large clinical trial on 327 depressed adolescents, which treatment yielded the HIGHEST improvement rate (86%)?",
    "options": [
      "CBT alone",
      "Antidepressant medication alone",
      "Combined CBT plus antidepressant medication",
      "Psychoanalysis"
    ],
    "correctIndex": 2,
    "explanation": "CBT alone = 81%, Drugs alone = 81%, Combined = 86%."
  },
  {
    "id": "al-psy-q-6-2-5",
    "subtopicId": "al-psy-6-2",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the REBT & CBT concepts:",
    "segments": [
      "Ellis extended ABC to ABCDE, where D stands for ",
      " irrational beliefs; Beck’s CBT uses patient ",
      " assignments to test negative thoughts like a scientist."
    ],
    "wordBank": [
      "disputing",
      "homework",
      "dreaming",
      "medication"
    ],
    "answers": [
      "disputing",
      "homework"
    ],
    "explanation": "REBT disputes irrational beliefs; CBT uses real-world homework behavioural experiments."
  },
  {
    "id": "al-psy-q-6-3-3",
    "subtopicId": "al-psy-6-3",
    "type": "short-answer",
    "marks": 2,
    "prompt": "Explain the role of the anxiety hierarchy and reciprocal inhibition in Systematic Desensitisation (SD) for treating a phobia.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "The patient and therapist build a ranked anxiety hierarchy from least to most feared phobic triggers. Using reciprocal inhibition (anxiety and deep relaxation cannot coexist), the patient practises relaxation at each step until calm before moving up the hierarchy, counterconditioning fear into relaxation.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Anxiety hierarchy ranks phobic triggers from least to most feared",
          "requiredKeywordGroups": [
            [
              "hierarchy",
              "rank",
              "least",
              "gradual"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "Reciprocal inhibition: relaxation and anxiety cannot coexist (counterconditioning)",
          "requiredKeywordGroups": [
            [
              "relax"
            ],
            [
              "cannot coexist",
              "opposite",
              "countercondition",
              "replace"
            ]
          ]
        }
      ]
    },
    "explanation": "Ranked exposure + deep relaxation replaces fear via reciprocal inhibition."
  },
  {
    "id": "al-psy-q-6-3-4",
    "subtopicId": "al-psy-6-3",
    "type": "mcq",
    "marks": 1,
    "prompt": "How do SSRIs (such as fluoxetine) increase serotonin neurotransmission in patients with OCD?",
    "options": [
      "Destroy postsynaptic serotonin receptors",
      "Block reuptake of serotonin by the presynaptic neurone, leaving more in the synaptic cleft",
      "Directly convert dopamine into adrenaline",
      "Disable the orbitofrontal cortex permanently"
    ],
    "correctIndex": 1,
    "explanation": "Selective Serotonin Reuptake Inhibitors block presynaptic transporter reuptake."
  },
  {
    "id": "al-psy-q-6-3-5",
    "subtopicId": "al-psy-6-3",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the OCD biological explanation:",
    "segments": [
      "In Nestadt et al.’s (2010) twin review, OCD concordance was ",
      "% for MZ twins vs 31% for DZ twins; an overactive ",
      " cortex (OFC) drives intrusive worry signals."
    ],
    "wordBank": [
      "68",
      "orbitofrontal",
      "100",
      "occipital"
    ],
    "answers": [
      "68",
      "orbitofrontal"
    ],
    "explanation": "68% MZ vs 31% DZ shows strong (not 100%) genetics; OFC generates worry signals."
  }
];

export const ALEVEL_PSYCHOLOGY_FLASHCARDS: FlashcardItem[] = [
  {
    "id": "al-psy-fc-1",
    "subtopicId": "al-psy-1-1",
    "front": "Contrast independent measures, repeated measures, and matched pairs designs.",
    "backBullets": [
      "Independent: different participants per condition (no order effects; risk of participant variables → use random allocation).",
      "Repeated: same participants in all conditions (no participant variables; risk of order effects → use counterbalancing).",
      "Matched pairs: paired on key traits then randomly split (reduces both, time-consuming)."
    ]
  },
  {
    "id": "al-psy-fc-2",
    "subtopicId": "al-psy-1-1",
    "front": "How do single-blind and double-blind procedures protect internal validity?",
    "backBullets": [
      "Single-blind: participants do not know which condition they are in, reducing demand characteristics.",
      "Double-blind: neither participant nor researcher knows the condition (e.g., Perry et al., 2015), eliminating both demand characteristics and investigator expectancy effects."
    ]
  },
  {
    "id": "al-psy-fc-3",
    "subtopicId": "al-psy-1-2",
    "front": "Why can a correlation NEVER prove cause and effect?",
    "backBullets": [
      "No IV is manipulated — both are measured co-variables.",
      "Direction of causality is ambiguous (reverse causality).",
      "An unmeasured third (intervening) variable may drive both co-variables."
    ]
  },
  {
    "id": "al-psy-fc-4",
    "subtopicId": "al-psy-1-2",
    "front": "Compare event sampling and time sampling in observational research.",
    "backBullets": [
      "Event sampling: counts every occurrence of a target behaviour (best for infrequent events; can overwhelm observer if behaviour is rapid).",
      "Time sampling: records behaviour at fixed intervals, e.g., every 5 s in Bandura (1961) (manageable for frequent actions; may miss behaviours between ticks)."
    ]
  },
  {
    "id": "al-psy-fc-5",
    "subtopicId": "al-psy-1-3",
    "front": "Distinguish Type I and Type II statistical errors.",
    "backBullets": [
      "Type I (false positive): Rejecting a true null hypothesis (more likely at lenient p ≤ 0.10).",
      "Type II (false negative): Accepting a false null hypothesis (more likely at overly strict p ≤ 0.01)."
    ]
  },
  {
    "id": "al-psy-fc-6",
    "subtopicId": "al-psy-1-3",
    "front": "What are the 3Rs in animal research ethics (Russell & Burch, 1959)?",
    "backBullets": [
      "Replacement: use non-animal simulations or tissue cultures where viable.",
      "Reduction: use the minimum number of animals required for statistical power.",
      "Refinement: enrich housing and use humane positive reinforcement (e.g., Fagen et al., 2014)."
    ]
  },
  {
    "id": "al-psy-fc-7",
    "subtopicId": "al-psy-2-1",
    "front": "Name the four components of Baddeley & Hitch’s Working Memory Model (updated 2000).",
    "backBullets": [
      "Central Executive (attentional allocator, modality-free, no storage)",
      "Phonological Loop (Phonological Store + Articulatory Control Process)",
      "Visuo-Spatial Sketchpad (Visual Cache + Inner Scribe)",
      "Episodic Buffer (added 2000; multimodal integrator linking to LTM)"
    ]
  },
  {
    "id": "al-psy-fc-8",
    "subtopicId": "al-psy-2-1",
    "front": "Contrast the coding, capacity, and duration of STM and LTM in the Multi-Store Model.",
    "backBullets": [
      "STM: Acoustic coding (Baddeley, 1966), 7 ± 2 chunks (Miller, 1956), 18–30 s duration (Peterson & Peterson, 1959).",
      "LTM: Semantic coding, potentially unlimited capacity, lifetime duration (Bahrick et al., 1975)."
    ]
  },
  {
    "id": "al-psy-fc-9",
    "subtopicId": "al-psy-2-2",
    "front": "Summarise the sample, task, and main result of Andrade (2010).",
    "backBullets": [
      "40 adults (20 doodling, 20 control) listened to a dull 2.5-min voicemail with 8 party names + 8 places.",
      "Doodlers shaded squares/circles while monitoring names; surprise recall followed.",
      "Doodlers recalled 29% more total details (mean 7.5 vs 5.8)."
    ]
  },
  {
    "id": "al-psy-fc-10",
    "subtopicId": "al-psy-2-2",
    "front": "What were the key Eyes Test and AQ findings in Baron-Cohen et al. (2001)?",
    "backBullets": [
      "AS/HFA group (n=15) scored significantly lower on Eyes Test (21.9/36) than general adults (26.2), students (28.0), and IQ-matched controls (30.9).",
      "AS/HFA scored much higher on AQ (34.4 vs 18.9 IQ controls).",
      "Negative correlation between Eyes Test and AQ (r = −0.53)."
    ]
  },
  {
    "id": "al-psy-fc-11",
    "subtopicId": "al-psy-2-3",
    "front": "What did Pozzulo et al. (2010) discover about child vs adult eyewitness lineups?",
    "backBullets": [
      "Children (4–7 yrs) matched adults well on target-present cartoons and near-matched on target-present humans (89% vs 98%).",
      "On TARGET-ABSENT human lineups, children made far more false positives (41% correct rejection vs 79% adults), despite a \"not here\" silhouette card."
    ]
  },
  {
    "id": "al-psy-fc-12",
    "subtopicId": "al-psy-2-3",
    "front": "Name the four principles of Fisher & Geiselman’s (1992) Cognitive Interview.",
    "backBullets": [
      "1. Report Everything (even partial or trivial details)",
      "2. Reinstate the Context (mentally recreate weather, feelings, room cues)",
      "3. Reverse the Order (disrupts schema-based guessing)",
      "4. Change Perspective (recall from another witness’s viewpoint)"
    ]
  },
  {
    "id": "al-psy-fc-13",
    "subtopicId": "al-psy-3-1",
    "front": "State the three key quantitative results of Dement & Kleitman (1957).",
    "backBullets": [
      "REM dream recall: 79.6% (152/191) vs NREM: 6.9% (11/160).",
      "Duration accuracy (5 vs 15 min REM): 83% combined (92/111); positive correlation with word count (r = +0.40 to +0.71).",
      "EOG eye-movement direction matched reported visual dream content (e.g., vertical = ladder/basketball)."
    ]
  },
  {
    "id": "al-psy-fc-14",
    "subtopicId": "al-psy-3-1",
    "front": "Give one strength and one limitation of Dement & Kleitman (1957).",
    "backBullets": [
      "Strength: Objective EEG and EOG recordings + standardised doorbell awakenings give high internal validity and replicability.",
      "Limitation: Tiny sample (9 adults, 5 intensive) and artificial sleep lab electrodes lower population and ecological validity."
    ]
  },
  {
    "id": "al-psy-fc-15",
    "subtopicId": "al-psy-3-2",
    "front": "Which four brain areas gained grey matter in Hölzel et al. (2011), and which predicted area did NOT?",
    "backBullets": [
      "Increased: Left Hippocampus, Posterior Cingulate Cortex (PCC), Temporo-Parietal Junction (TPJ), and Cerebellum.",
      "Did NOT change significantly: Insula."
    ]
  },
  {
    "id": "al-psy-fc-16",
    "subtopicId": "al-psy-3-2",
    "front": "What was the main methodological limitation of Hölzel et al.’s (2011) wait-list control group?",
    "backBullets": [
      "Wait-list controls received no group social support, instructor contact, or gentle yoga exercise.",
      "Therefore non-meditation lifestyle factors in the 8-week MBSR course could have contributed to grey matter increases."
    ]
  },
  {
    "id": "al-psy-fc-17",
    "subtopicId": "al-psy-3-3",
    "front": "Outline the four steps of chemical synaptic transmission.",
    "backBullets": [
      "1. Action potential reaches presynaptic terminal; Ca²⁺ triggers vesicles to fuse.",
      "2. Neurotransmitters released into synaptic cleft by exocytosis.",
      "3. Neurotransmitters bind to complementary postsynaptic receptors (EPSP or IPSP).",
      "4. Summation decides firing; neurotransmitters cleared by reuptake or enzymes."
    ]
  },
  {
    "id": "al-psy-fc-18",
    "subtopicId": "al-psy-3-3",
    "front": "Compare fMRI and EEG on spatial and temporal resolution.",
    "backBullets": [
      "fMRI: High spatial resolution (~1–2 mm, pinpoints deep structures via BOLD blood flow), poor temporal resolution (~5 s lag).",
      "EEG / ERP: High temporal resolution (~1 ms, tracks real-time electrical spikes), poor spatial resolution (scalp surface only)."
    ]
  },
  {
    "id": "al-psy-fc-19",
    "subtopicId": "al-psy-4-1",
    "front": "Contrast positive reinforcement, negative reinforcement, and punishment.",
    "backBullets": [
      "Positive reinforcement: adds a reward to INCREASE behaviour.",
      "Negative reinforcement: removes an aversive stimulus to INCREASE behaviour.",
      "Punishment: adds an aversive stimulus or removes a privilege to DECREASE behaviour."
    ]
  },
  {
    "id": "al-psy-fc-20",
    "subtopicId": "al-psy-4-1",
    "front": "Define extinction, spontaneous recovery, and stimulus generalisation in classical conditioning.",
    "backBullets": [
      "Extinction: CR fades when CS is repeatedly presented without UCS.",
      "Spontaneous recovery: sudden return of an extinguished CR after a rest period.",
      "Stimulus generalisation: stimuli similar to the CS trigger the CR (e.g., Little Albert fearing white rabbits and furry masks)."
    ]
  },
  {
    "id": "al-psy-fc-21",
    "subtopicId": "al-psy-4-2",
    "front": "What are Bandura’s four mediational processes (ARRM) in Social Learning Theory?",
    "backBullets": [
      "Attention — noticing the model’s behaviour",
      "Retention — storing a mental representation",
      "Reproduction — physical ability to perform the action",
      "Motivation — expecting rewards (direct or vicarious) to outweigh costs"
    ]
  },
  {
    "id": "al-psy-fc-22",
    "subtopicId": "al-psy-4-2",
    "front": "Summarise the gender and same-sex model findings of Bandura et al. (1961).",
    "backBullets": [
      "Boys exhibited significantly more physical aggression than girls across conditions, while verbal aggression was similar.",
      "Both boys and girls imitated same-sex aggressive models more strongly than opposite-sex models."
    ]
  },
  {
    "id": "al-psy-fc-23",
    "subtopicId": "al-psy-4-3",
    "front": "How did Fagen et al. (2014) train elephants using Secondary Positive Reinforcement?",
    "backBullets": [
      "Paired a whistle (secondary reinforcer) with chopped banana (primary reinforcer).",
      "Used shaping and chaining across 5 trunk-wash steps without punishment.",
      "All 4 juvenile elephants reached ≥ 80% mastery in 25–35 sessions; the 50-year-old adult did not pass in time."
    ]
  },
  {
    "id": "al-psy-fc-24",
    "subtopicId": "al-psy-4-3",
    "front": "Why did Saavedra & Silverman (2002) switch from contingency management to imagery exposure in Session 5?",
    "backBullets": [
      "During Sessions 1–4 (contingency management), the boy handled more buttons but his subjective Feelings Thermometer disgust ratings actually rose.",
      "Disgust-focused imagery exposure (Sessions 5–10) targeted evaluative learning directly, dropping distress ratings to near zero."
    ]
  },
  {
    "id": "al-psy-fc-25",
    "subtopicId": "al-psy-5-1",
    "front": "Recall Milgram’s baseline obedience rate and three major situational variations.",
    "backBullets": [
      "Baseline (Yale): 65% to 450 V (100% to 300 V).",
      "Location (Bridgeport office): 47.5%; Same-room proximity: 40%; Touch proximity: 30%.",
      "Ordinary clothes (no uniform): 20%; Two defiant peers (social support): 10%."
    ]
  },
  {
    "id": "al-psy-fc-26",
    "subtopicId": "al-psy-5-1",
    "front": "Contrast Agentic State Theory with Adorno’s Authoritarian Personality.",
    "backBullets": [
      "Agentic State (situational): individuals shift from autonomous self-direction to acting as an agent of legitimate authority, held by binding factors.",
      "Authoritarian Personality (dispositional): harsh upbringing produces rigid F-scale obedience to superiors and hostility to subordinates."
    ]
  },
  {
    "id": "al-psy-fc-27",
    "subtopicId": "al-psy-5-2",
    "front": "Distinguish Normative Social Influence (NSI) and Informational Social Influence (ISI).",
    "backBullets": [
      "NSI: conforming to be liked and avoid social rejection (emotional need → leads to temporary public compliance).",
      "ISI: conforming to be right in ambiguous or difficult tasks (cognitive need → leads to lasting private internalisation)."
    ]
  },
  {
    "id": "al-psy-fc-28",
    "subtopicId": "al-psy-5-2",
    "front": "How did group size, unanimity, and task difficulty affect conformity in Asch’s variations?",
    "backBullets": [
      "Group size: conformity plateaued at 3 confederates (~31.8%).",
      "Unanimity: adding just one dissenting ally dropped conformity from 36.8% to 5.5%.",
      "Task difficulty: making line lengths closer increased conformity via ISI."
    ]
  },
  {
    "id": "al-psy-fc-29",
    "subtopicId": "al-psy-5-3",
    "front": "Compare the Cane vs Drunk helping rates in Piliavin et al. (1969).",
    "backBullets": [
      "Cane (ill) victim: 95% spontaneous helping, median latency 5 seconds, no race bias.",
      "Drunk victim: 50% spontaneous helping, median latency 109 seconds, same-race bias and 21% fled the area.",
      "Explained by the Arousal–Cost–Reward model rather than diffusion of responsibility."
    ]
  },
  {
    "id": "al-psy-fc-30",
    "subtopicId": "al-psy-5-3",
    "front": "What were the two experimental tasks and main finding of Perry et al. (2015)?",
    "backBullets": [
      "Task 1: Computerised Comfortable Interpersonal Distance (CID); Task 2: Arranging real chairs in a room.",
      "Intranasal oxytocin decreased preferred distance in high-empathy men but increased distance in low-empathy men (social salience)."
    ]
  },
  {
    "id": "al-psy-fc-31",
    "subtopicId": "al-psy-6-1",
    "front": "Contrast typical and atypical antipsychotics for schizophrenia.",
    "backBullets": [
      "Typical (e.g., chlorpromazine): D2 antagonists; treat positive symptoms; high risk of tardive dyskinesia.",
      "Atypical (e.g., clozapine, risperidone): transient D2 + serotonin (5-HT2A) action; treat both positive & negative symptoms; lower motor side effects (clozapine needs blood monitoring for agranulocytosis)."
    ]
  },
  {
    "id": "al-psy-fc-32",
    "subtopicId": "al-psy-6-1",
    "front": "What did Tienari et al. (2004) show about the interactionist model of schizophrenia?",
    "backBullets": [
      "Finnish adoption study tracking biological offspring of mothers with schizophrenia.",
      "High genetic-risk adoptees developed schizophrenia at 36.8% in high-conflict adoptive families versus only 5.8% in healthy supportive families — confirming diathesis–stress."
    ]
  },
  {
    "id": "al-psy-fc-33",
    "subtopicId": "al-psy-6-2",
    "front": "Compare Beck’s Negative Triad and Ellis’s ABCDE Model of depression.",
    "backBullets": [
      "Beck: negative childhood schemas + cognitive biases fuel negative views of Self, World, and Future.",
      "Ellis: Activating events (A) trigger irrational musturbatory Beliefs (B) causing depressive Consequences (C), treated in REBT by Disputing (D) for Effective beliefs (E)."
    ]
  },
  {
    "id": "al-psy-fc-34",
    "subtopicId": "al-psy-6-2",
    "front": "What did March et al. (2007) find when comparing CBT, SSRIs, and combined therapy for depression?",
    "backBullets": [
      "327 adolescents across 36 weeks: 81% improved with CBT alone, 81% with SSRIs (fluoxetine) alone, and 86% with combined CBT + SSRIs.",
      "Shows CBT is as effective as medication while teaching long-term relapse prevention."
    ]
  },
  {
    "id": "al-psy-fc-35",
    "subtopicId": "al-psy-6-3",
    "front": "Describe the neural \"worry circuit\" implicated in OCD.",
    "backBullets": [
      "Hyperactive Orbitofrontal Cortex (OFC) generates excess threat/worry signals.",
      "Impaired Caudate Nucleus fails to filter minor worries.",
      "Thalamus relays persistent signals back to the OFC, sustaining obsessions and compulsive checking."
    ]
  },
  {
    "id": "al-psy-fc-36",
    "subtopicId": "al-psy-6-3",
    "front": "Contrast Systematic Desensitisation and Flooding for treating phobias.",
    "backBullets": [
      "Systematic Desensitisation: gradual 3-step exposure up an anxiety hierarchy paired with relaxation (reciprocal inhibition); low attrition.",
      "Flooding: immediate prolonged full exposure until anxiety habituates/extinguishes; fast (1–3 sessions) but traumatic with higher dropout."
    ]
  },
  {
    "id": "al-psy-fc-1-1-3",
    "subtopicId": "al-psy-1-1",
    "front": "Difference between an extraneous variable and a confounding variable?",
    "backBullets": [
      "Extraneous = nuisance variable that MIGHT affect DV if uncontrolled; Confounding = variable that ACTUALLY varied systematically with the IV, ruining validity."
    ]
  },
  {
    "id": "al-psy-fc-1-1-4",
    "subtopicId": "al-psy-1-1",
    "front": "How do single-blind and double-blind procedures protect validity?",
    "backBullets": [
      "Single-blind hides condition from participants (reduces demand characteristics); Double-blind hides it from BOTH participant and researcher (removes investigator effects too)."
    ]
  },
  {
    "id": "al-psy-fc-1-1-5",
    "subtopicId": "al-psy-1-1",
    "front": "Strength vs limitation of a field experiment compared to a lab experiment?",
    "backBullets": [
      "Higher mundane realism / ecological validity, but lower control over extraneous variables and harder informed consent."
    ]
  },
  {
    "id": "al-psy-fc-1-2-3",
    "subtopicId": "al-psy-1-2",
    "front": "Main limitation of questionnaires and interviews?",
    "backBullets": [
      "Social desirability bias (answering to look good) and demand characteristics reduce internal validity."
    ]
  },
  {
    "id": "al-psy-fc-1-2-4",
    "subtopicId": "al-psy-1-2",
    "front": "Strength and limitation of a longitudinal case study like Patient HM?",
    "backBullets": [
      "Provides rich, detailed insight into rare phenomena impossible to create experimentally, but n = 1 limits generalisability."
    ]
  },
  {
    "id": "al-psy-fc-1-2-5",
    "subtopicId": "al-psy-1-2",
    "front": "How does volunteer (self-selected) sampling introduce bias?",
    "backBullets": [
      "Volunteer bias — volunteers tend to be more motivated, curious, or outspoken than the general population."
    ]
  },
  {
    "id": "al-psy-fc-1-3-3",
    "subtopicId": "al-psy-1-3",
    "front": "Three purposes of peer review in psychological science?",
    "backBullets": [
      "Allocate research funding fairly, validate research quality/methodology before publication, and suggest improvements/spot fraud."
    ]
  },
  {
    "id": "al-psy-fc-1-3-4",
    "subtopicId": "al-psy-1-3",
    "front": "Positive skew vs Negative skew (order of Mean, Median, Mode)?",
    "backBullets": [
      "Positive skew (tail right): Mode < Median < Mean; Negative skew (tail left): Mean < Median < Mode."
    ]
  },
  {
    "id": "al-psy-fc-1-3-5",
    "subtopicId": "al-psy-1-3",
    "front": "Three conditions required to choose the Sign Test?",
    "backBullets": [
      "Test of difference, repeated measures (related) design, and nominal data (count of + vs − signs)."
    ]
  },
  {
    "id": "al-psy-fc-2-1-3",
    "subtopicId": "al-psy-2-1",
    "front": "Capacity, duration, and coding of STM vs LTM (Jacobs, Peterson & Peterson, Bahrick, Baddeley)?",
    "backBullets": [
      "STM: 7±2 items (chunking), ~18–30 s without rehearsal, acoustic. LTM: unlimited, up to lifetime, semantic."
    ]
  },
  {
    "id": "al-psy-fc-2-1-4",
    "subtopicId": "al-psy-2-1",
    "front": "Three types of Long-Term Memory (Tulving, 1972) that challenge MSM’s unitary LTM?",
    "backBullets": [
      "Episodic (personal life events), Semantic (general facts/knowledge), Procedural (motor skills like cycling — unconscious!)."
    ]
  },
  {
    "id": "al-psy-fc-2-1-5",
    "subtopicId": "al-psy-2-1",
    "front": "Major criticism of the Central Executive in the Working Memory Model?",
    "backBullets": [
      "Vague and untestable (\"homunculus\" problem) — Liebermann/Baddeley noted it is poorly defined and probably comprises multiple sub-processes."
    ]
  },
  {
    "id": "al-psy-fc-2-2-3",
    "subtopicId": "al-psy-2-2",
    "front": "Why did Andrade (2010) include a surprise recall test for PLACES as well as monitored names?",
    "backBullets": [
      "To test incidental memory (unmonitored details) alongside monitored information — doodlers outperformed controls on both!"
    ]
  },
  {
    "id": "al-psy-fc-2-2-4",
    "subtopicId": "al-psy-2-2",
    "front": "How did Baron-Cohen et al. (2001) improve validity compared to the 1997 Eyes Test?",
    "backBullets": [
      "Increased to 36 photos, 4 complex emotion choices (reducing guessing), added a glossary, and included an IQ-matched control group."
    ]
  },
  {
    "id": "al-psy-fc-2-2-5",
    "subtopicId": "al-psy-2-2",
    "front": "Ecological validity limitation of the Eyes Test?",
    "backBullets": [
      "Static black-and-white cropped eye photos lack real-life dynamic facial movement, voice tone, and social context."
    ]
  },
  {
    "id": "al-psy-fc-2-3-3",
    "subtopicId": "al-psy-2-3",
    "front": "Why did Yuille & Cutshall (1986) challenge Loftus & Palmer’s lab findings?",
    "backBullets": [
      "Real-life witnesses to an armed robbery resisted misleading questions and gave ~80%+ accurate accounts 5 months later — lab videos lack real emotional salience!"
    ]
  },
  {
    "id": "al-psy-fc-2-3-4",
    "subtopicId": "al-psy-2-3",
    "front": "Four core techniques of the Cognitive Interview?",
    "backBullets": [
      "Report everything, Reinstate the context, Reverse the order, and Change perspective."
    ]
  },
  {
    "id": "al-psy-fc-2-3-5",
    "subtopicId": "al-psy-2-3",
    "front": "Key finding of Pozzulo et al. (2010) on child eyewitness lineups?",
    "backBullets": [
      "Children made far more false-positive identifications than adults on target-ABSENT lineups due to social pressure to choose someone."
    ]
  },
  {
    "id": "al-psy-fc-3-1-3",
    "subtopicId": "al-psy-3-1",
    "front": "Why is REM sleep called \"paradoxical sleep\"?",
    "backBullets": [
      "The brain displays fast, awake-like EEG activity while the body’s voluntary muscles are paralysed (muscle atonia)."
    ]
  },
  {
    "id": "al-psy-fc-3-1-4",
    "subtopicId": "al-psy-3-1",
    "front": "Two controls Dement & Kleitman used before participants arrived at the sleep lab?",
    "backBullets": [
      "Participants abstained from caffeine and alcohol on experiment days so normal sleep architecture was not disrupted."
    ]
  },
  {
    "id": "al-psy-fc-3-1-5",
    "subtopicId": "al-psy-3-1",
    "front": "Major sample-size limitation of Dement & Kleitman (1957)?",
    "backBullets": [
      "Only 9 adult participants total (7 male, 2 female; only 5 studied extensively), limiting generalisability across age and gender."
    ]
  },
  {
    "id": "al-psy-fc-3-2-3",
    "subtopicId": "al-psy-3-2",
    "front": "Average daily home mindfulness practice logged by MBSR participants in Hölzel et al. (2011)?",
    "backBullets": [
      "Average of 27 minutes per day across the 8-week programme."
    ]
  },
  {
    "id": "al-psy-fc-3-2-4",
    "subtopicId": "al-psy-3-2",
    "front": "Why did Hölzel et al. NOT observe significant structural shrinkage in the amygdala despite prior stress findings?",
    "backBullets": [
      "Likely because participants were healthy community adults with moderate baseline stress rather than clinically stressed individuals."
    ]
  },
  {
    "id": "al-psy-fc-3-2-5",
    "subtopicId": "al-psy-3-2",
    "front": "How does Hölzel et al. (2011) contribute to the Nature vs Nurture debate?",
    "backBullets": [
      "Demonstrates nurture shaping biology — environmental behavioural practice (mindfulness) directly alters physical brain structure (neuroplasticity)."
    ]
  },
  {
    "id": "al-psy-fc-3-3-3",
    "subtopicId": "al-psy-3-3",
    "front": "Fight-or-flight pathway from hypothalamus to physiological arousal?",
    "backBullets": [
      "Hypothalamus activates sympathetic branch of ANS → stimulates adrenal medulla → releases adrenaline → increases heart rate, dilates pupils/bronchioles, inhibits digestion."
    ]
  },
  {
    "id": "al-psy-fc-3-3-4",
    "subtopicId": "al-psy-3-3",
    "front": "Excitatory (EPSP) vs Inhibitory (IPSP) neurotransmitters at a synapse?",
    "backBullets": [
      "Excitatory (e.g. adrenaline/glutamate) makes postsynaptic neurone MORE positively charged (more likely to fire); Inhibitory (e.g. serotonin/GABA) makes it MORE negative (less likely to fire)."
    ]
  },
  {
    "id": "al-psy-fc-3-3-5",
    "subtopicId": "al-psy-3-3",
    "front": "Key limitation of Sperry’s (1968) split-brain sample?",
    "backBullets": [
      "Small sample (11 patients) all suffering severe epilepsy and heavy medication, so findings may not generalise cleanly to typical intact brains."
    ]
  },
  {
    "id": "al-psy-fc-4-1-3",
    "subtopicId": "al-psy-4-1",
    "front": "Classical conditioning vs Operant conditioning (passive vs active)?",
    "backBullets": [
      "Classical = learning by ASSOCIATION of stimuli (involuntary/passive reflex); Operant = learning by CONSEQUENCES (voluntary/active behaviour)."
    ]
  },
  {
    "id": "al-psy-fc-4-1-4",
    "subtopicId": "al-psy-4-1",
    "front": "Major ethical & extrapolation criticism of Skinner’s box experiments?",
    "backBullets": [
      "Animals faced hunger/electric shocks (harm), and extrapolating from rats/pigeons to complex human cognition ignores free will and thought processes."
    ]
  },
  {
    "id": "al-psy-fc-4-1-5",
    "subtopicId": "al-psy-4-1",
    "front": "Primary reinforcer vs Secondary reinforcer?",
    "backBullets": [
      "Primary satisfies a biological need directly (food/water); Secondary gains value through association with primary reinforcers (money/tokens)."
    ]
  },
  {
    "id": "al-psy-fc-4-2-3",
    "subtopicId": "al-psy-4-2",
    "front": "Why did boys show more physical aggression than girls across ALL conditions in Bandura (1961)?",
    "backBullets": [
      "Suggests biological influences (e.g. testosterone) and prior gender socialisation also contribute alongside SLT modelling."
    ]
  },
  {
    "id": "al-psy-fc-4-2-4",
    "subtopicId": "al-psy-4-2",
    "front": "What is the \"novelty/demand characteristic\" criticism of the Bobo doll?",
    "backBullets": [
      "A Bobo doll is a weighted inflatable toy specifically designed to bounce back when punched — hitting it may reflect play/expected behaviour rather than genuine interpersonal aggression."
    ]
  },
  {
    "id": "al-psy-fc-4-2-5",
    "subtopicId": "al-psy-4-2",
    "front": "How does Social Learning Theory differ from strict Skinnerian behaviourism?",
    "backBullets": [
      "SLT recognises internal cognitive mediational processes (attention, retention, reproduction, motivation) and indirect vicarious learning without direct reward."
    ]
  },
  {
    "id": "al-psy-fc-4-3-3",
    "subtopicId": "al-psy-4-3",
    "front": "Why did the 5th elephant in Fagen et al. (2014) fail to pass the trunk-wash test?",
    "backBullets": [
      "She was much older (~50 years), had visual impairment, and showed lower motivation/attention than the 4 younger juvenile elephants."
    ]
  },
  {
    "id": "al-psy-fc-4-3-4",
    "subtopicId": "al-psy-4-3",
    "front": "Why is Saavedra & Silverman (2002) low in population validity?",
    "backBullets": [
      "It is a single case study (n = 1) of a 9-year-old boy with an unusually rare button phobia, so findings may not generalise to all phobias."
    ]
  },
  {
    "id": "al-psy-fc-4-3-5",
    "subtopicId": "al-psy-4-3",
    "front": "What is \"capture\" vs \"lure\" in Fagen et al.’s elephant shaping protocol?",
    "backBullets": [
      "Capture = rewarding a natural behaviour as it happens spontaneously; Lure = guiding the elephant’s trunk into position with a banana/target before fading the lure."
    ]
  },
  {
    "id": "al-psy-fc-5-1-3",
    "subtopicId": "al-psy-5-1",
    "front": "Milgram’s exact obedience rates: Baseline, Bridgeport, Same Room, Touch Proximity, Ordinary Clothes?",
    "backBullets": [
      "Baseline 65%; Bridgeport 47.5%; Same room 40%; Touch proximity 30%; Ordinary clothes 20%."
    ]
  },
  {
    "id": "al-psy-fc-5-1-4",
    "subtopicId": "al-psy-5-1",
    "front": "Two major ethical breaches in Milgram (1963) and how he defended them?",
    "backBullets": [
      "Deception, psychological harm (seizures/trembling), and impeded right to withdraw (\"You have no other choice\"). Defence: full debriefing, met unharmed learner, 84% glad they took part."
    ]
  },
  {
    "id": "al-psy-fc-5-1-5",
    "subtopicId": "al-psy-5-1",
    "front": "Why can’t the Authoritarian Personality explain the obedience of an entire nation like Nazi Germany?",
    "backBullets": [
      "It is statistically impossible for millions of people to all share the same harsh-parenting personality trait; situational/social identity factors are far better explanations."
    ]
  },
  {
    "id": "al-psy-fc-5-2-3",
    "subtopicId": "al-psy-5-2",
    "front": "How did the BBC Prison Study (Reicher & Haslam, 2006) challenge Zimbardo’s Stanford Prison Experiment?",
    "backBullets": [
      "Guards did NOT automatically conform to brutal roles — prisoners actually formed a cohesive group and overthrew weak guards, disproving Zimbardo’s automatic role-conformity claim."
    ]
  },
  {
    "id": "al-psy-fc-5-2-4",
    "subtopicId": "al-psy-5-2",
    "front": "Three Kelman (1958) types of conformity from shallowest to deepest?",
    "backBullets": [
      "Compliance (public only, temporary) → Identification (public & private while in group) → Internalisation (deep, permanent public & private belief change)."
    ]
  },
  {
    "id": "al-psy-fc-5-2-5",
    "subtopicId": "al-psy-5-2",
    "front": "Three behavioural styles needed for Minority Influence to spark social change (Moscovici, 1969)?",
    "backBullets": [
      "Consistency (synchronic & diachronic), Commitment (augmentation principle), and Flexibility (not dogmatic)."
    ]
  },
  {
    "id": "al-psy-fc-5-3-3",
    "subtopicId": "al-psy-5-3",
    "front": "Why might Piliavin et al. (1969) have found NO diffusion of responsibility unlike Darley & Latané’s lab studies?",
    "backBullets": [
      "Subway riders were trapped in a moving carriage for 7.5 minutes with an unambiguous physical collapse — they could NOT physically escape the unpleasant arousal without helping!"
    ]
  },
  {
    "id": "al-psy-fc-5-3-4",
    "subtopicId": "al-psy-5-3",
    "front": "Two limitations of Perry et al. (2015)?",
    "backBullets": [
      "Androcentric all-male student sample (n = 54) in Israel (low generalisability to women/other cultures) AND artificial computerised CID task (low mundane realism)."
    ]
  },
  {
    "id": "al-psy-fc-5-3-5",
    "subtopicId": "al-psy-5-3",
    "front": "Why was a double-blind placebo design used in Perry et al. (2015)?",
    "backBullets": [
      "Neither participants nor researchers knew who got oxytocin vs saline, preventing both placebo/demand characteristics and investigator bias."
    ]
  },
  {
    "id": "al-psy-fc-6-1-3",
    "subtopicId": "al-psy-6-1",
    "front": "Contrast typical (chlorpromazine) vs atypical (clozapine) antipsychotics.",
    "backBullets": [
      "Typical blocks D₂ strongly (positive symptoms only, tardive dyskinesia risk); Atypical binds D₂ briefly + serotonin (helps positive & negative symptoms, fewer motor side effects, clozapine needs blood tests for agranulocytosis)."
    ]
  },
  {
    "id": "al-psy-fc-6-1-4",
    "subtopicId": "al-psy-6-1",
    "front": "Two cognitive deficits proposed by Frith et al. (1992) to explain schizophrenia symptoms?",
    "backBullets": [
      "Metarepresentation dysfunction (mistakes own inner thoughts for alien voices) and Central Control dysfunction (unable to suppress automatic derailment of speech)."
    ]
  },
  {
    "id": "al-psy-fc-6-1-5",
    "subtopicId": "al-psy-6-1",
    "front": "How does Family Therapy reduce relapse rates in schizophrenia?",
    "backBullets": [
      "Lowers High Expressed Emotion (criticism/hostility), improves communication/compromise, and reduces carer burden (Pharoah et al. meta-analysis)."
    ]
  },
  {
    "id": "al-psy-fc-6-2-3",
    "subtopicId": "al-psy-6-2",
    "front": "Empirical disputing vs Logical disputing in Ellis’s REBT?",
    "backBullets": [
      "Empirical = \"Where is the actual evidence that your belief is true?\"; Logical = \"Does your catastrophic conclusion actually follow from the facts?\""
    ]
  },
  {
    "id": "al-psy-fc-6-2-4",
    "subtopicId": "al-psy-6-2",
    "front": "Why might Ellis’s ABC model be criticised as \"partial explanation\" for depression?",
    "backBullets": [
      "It explains REACTIVE depression triggered by an activating event well, but struggles to explain ENDOGENOUS depression that arises without any obvious external trigger."
    ]
  },
  {
    "id": "al-psy-fc-6-2-5",
    "subtopicId": "al-psy-6-2",
    "front": "What is \"cognitive primacy\" criticism of CBT?",
    "backBullets": [
      "Critics argue irrational thoughts may be a SYMPTOM rather than the root CAUSE of depression (which can stem from genetics, neurotransmitters, or real-life poverty/abuse)."
    ]
  },
  {
    "id": "al-psy-fc-6-3-3",
    "subtopicId": "al-psy-6-3",
    "front": "Systematic Desensitisation vs Flooding: key clinical trade-off?",
    "backBullets": [
      "SD is gradual, ethical, and preferred by patients (lower dropout), whereas Flooding is faster/cost-effective in 1–2 sessions yet highly distressing with high attrition."
    ]
  },
  {
    "id": "al-psy-fc-6-3-4",
    "subtopicId": "al-psy-6-3",
    "front": "Role of the caudate nucleus in the OCD neural worry circuit?",
    "backBullets": [
      "Acts as a filter suppressing minor worry signals from the OFC; if damaged/underactive, minor worries flood through to the thalamus causing obsessions/compulsions."
    ]
  },
  {
    "id": "al-psy-fc-6-3-5",
    "subtopicId": "al-psy-6-3",
    "front": "Two candidate genes linked to OCD (Taylor, 2013 noted up to 230 genes — polygenic!)?",
    "backBullets": [
      "COMT (regulates dopamine levels) and SERT / 5-HT1-D beta (regulates serotonin transport)."
    ]
  }
];

export const ALEVEL_PSYCHOLOGY_CHEAT_SHEETS: CheatSheetItem[] = [
  {
    "id": "cs-al-psy-1-methods",
    "slug": "research-methods-and-stats",
    "title": "Topic 1: Research Methods, Ethics & Stats Selector",
    "topicNumber": 1,
    "topicName": "Research Methods",
    "summary": "Experimental designs, sampling trade-offs, BPS/3Rs ethics, reliability/validity checks, and significance testing.",
    "accentColor": "#7c3aed",
    "sections": [
      {
        "heading": "Designs, Observations & Self-Reports",
        "points": [
          "Independent measures → Random allocation; Repeated measures → Counterbalancing AB/BA; Matched pairs → Pre-test matching (Bandura r = +0.89).",
          "Observations: Event sampling (every occurrence) vs Time sampling (fixed intervals); Inter-observer reliability target r ≥ +0.80.",
          "Correlations measure co-variables (−1 ≤ r ≤ +1) and NEVER establish causation due to third variables."
        ]
      },
      {
        "heading": "Ethics, Validity & Statistical Errors",
        "formula": "Standard significance level: p ≤ 0.05  |  3Rs: Replace, Reduce, Refine",
        "points": [
          "BPS Ethics (DR. PIPC): Deception, Right to withdraw, Protection from harm, Informed consent, Privacy, Confidentiality + Debriefing.",
          "Type I error (false positive, rejects true H₀ — lenient p = 0.10); Type II error (false negative, accepts false H₀ — strict p = 0.01).",
          "Positive skew: long right tail (mode < median < mean); Negative skew: long left tail (mean < median < mode)."
        ]
      }
    ]
  },
  {
    "id": "cs-al-psy-2-cognitive",
    "slug": "cognitive-approach-memory-and-core-studies",
    "title": "Topic 2: Cognitive Approach — MSM, WMM & Core Studies",
    "topicNumber": 2,
    "topicName": "Cognitive Approach",
    "summary": "Multi-Store & Working Memory Models, Andrade (2010), Baron-Cohen (2001), Loftus & Palmer, and Pozzulo (2010).",
    "accentColor": "#2563eb",
    "sections": [
      {
        "heading": "Memory Models (MSM vs WMM)",
        "formula": "MSM: Sensory (<0.5 s) →[Attention]→ STM (7±2, 18–30 s, acoustic) →[Rehearsal]→ LTM (semantic)",
        "points": [
          "Working Memory (Baddeley & Hitch, 1974/2000): Central Executive + Phonological Loop + Visuo-Spatial Sketchpad + Episodic Buffer.",
          "Patient HM supports separate STM/LTM stores; Patient KF and dual-task studies prove separate verbal and visual STM slave systems."
        ]
      },
      {
        "heading": "Cognitive Core Studies & Eyewitness Testimony",
        "points": [
          "Andrade (2010): 40 adults; doodling while listening boosted recall by 29% (mean 7.5 vs 5.8 across names & places).",
          "Baron-Cohen et al. (2001): 36-item Eyes Test; AS/HFA scored 21.9/36 vs 30.9 IQ-matched controls; Eyes vs AQ r = −0.53.",
          "Loftus & Palmer (1974): \"Smashed\" 40.5 mph vs \"Contacted\" 31.8 mph; 32% false broken glass. Cognitive Interview (4 techniques) boosts recall by ~41%.",
          "Pozzulo et al. (2010): 59 children (4–7 yrs) vs 53 adults; target-absent human lineup correct rejection 41% vs 79%."
        ]
      }
    ]
  },
  {
    "id": "cs-al-psy-3-biological",
    "slug": "biological-approach-sleep-plasticity-biopsychology",
    "title": "Topic 3: Biological Approach — Sleep, Mindfulness & Biopsychology",
    "topicNumber": 3,
    "topicName": "Biological Approach",
    "summary": "Dement & Kleitman (1957), Hölzel et al. (2011), synaptic transmission, localisation, split-brain, and brain scans.",
    "accentColor": "#0891b2",
    "sections": [
      {
        "heading": "Biological Core Studies (CIE 9990)",
        "points": [
          "Dement & Kleitman (1957): 9 adults with EEG/EOG; 79.6% REM dream recall vs 6.9% NREM; 83% 5/15 min accuracy; EOG matched visual dream action.",
          "Hölzel et al. (2011): 16 MBSR vs 17 wait-list controls (8 weeks); VBM MRI showed grey matter ↑ in Left Hippocampus, PCC, TPJ & Cerebellum (NOT insula)."
        ]
      },
      {
        "heading": "Synapses, Localisation & Neuroimaging",
        "formula": "SAM Stress Pathway: Hypothalamus → Sympathetic NS → Adrenal Medulla → Adrenaline",
        "points": [
          "Synaptic transmission: Ca²⁺ influx → vesicle exocytosis → postsynaptic receptor binding → summation of EPSPs & IPSPs → reuptake.",
          "Localisation & Sperry (1968): Left hemisphere (Broca’s/Wernicke’s speech, RVF); Right hemisphere (visuo-spatial, LVF, left hand).",
          "fMRI (high spatial ~1 mm, slow ~5 s BOLD) vs EEG/ERP (high temporal ~1 ms, low spatial resolution)."
        ]
      }
    ]
  },
  {
    "id": "cs-al-psy-4-learning",
    "slug": "learning-approach-conditioning-slt-core-studies",
    "title": "Topic 4: Learning Approach — Conditioning, SLT & Core Studies",
    "topicNumber": 4,
    "topicName": "Learning Approach",
    "summary": "Pavlovian & Skinnerian conditioning, Bandura (1961), Saavedra & Silverman (2002), and Fagen et al. (2014).",
    "accentColor": "#d97706",
    "sections": [
      {
        "heading": "Classical, Operant & Social Learning Theory",
        "formula": "SLT Mediational Processes: Attention → Retention → Reproduction → Motivation (ARRM)",
        "points": [
          "Classical (Pavlov): UCS → UCR; NS + UCS → UCR; CS → CR (extinction, spontaneous recovery, generalisation).",
          "Operant (Skinner): Positive reinforcement (+reward) & Negative reinforcement (−aversive) BOTH increase behaviour; variable-ratio resists extinction best."
        ]
      },
      {
        "heading": "Learning Core Studies",
        "points": [
          "Bandura et al. (1961): 72 nursery children matched on baseline aggression (r = +0.89); aggressive model triggered high imitative & non-imitative aggression; boys > girls physically.",
          "Saavedra & Silverman (2002): 9-yr-old Hispanic boy with disgust-based button phobia; contingency management increased distress, whereas disgust imagery exposure dropped ratings to 0–3.",
          "Fagen et al. (2014): 5 female elephants in Nepal; whistle (secondary reinforcer) + banana (primary); 4/4 juveniles passed voluntary 5-step TB trunk wash (≥ 80%)."
        ]
      }
    ]
  },
  {
    "id": "cs-al-psy-5-social",
    "slug": "social-approach-obedience-conformity-bystander",
    "title": "Topic 5: Social Approach — Obedience, Conformity & Prosocial Studies",
    "topicNumber": 5,
    "topicName": "Social Approach",
    "summary": "Milgram (1963), Asch (1951), Zimbardo (1973), Piliavin et al. (1969), and Perry et al. (2015).",
    "accentColor": "#e11d48",
    "sections": [
      {
        "heading": "Oedience & Conformity",
        "formula": "Milgram 450 V Obedience: Baseline 65% | Bridgeport 47.5% | Same Room 40% | Touch 30% | No Uniform 20% | Defiant Peers 10%",
        "points": [
          "Milgram (1963): 40 men; 100% reached 300 V, 65% reached 450 V; explained via Agentic State, Binding Factors & Legitimacy vs Adorno’s F-Scale.",
          "Asch (1951): 123 men; 36.8% conformity on critical trials (drops to 5.5% with 1 dissenter); NSI → Compliance vs ISI → Internalisation.",
          "Zimbardo (1973): 24 men randomly assigned to guards/prisoners; stopped after 6 days (critiqued by Reicher & Haslam’s BBC Prison Study)."
        ]
      },
      {
        "heading": "Social Core Studies: Piliavin (1969) & Perry (2015)",
        "points": [
          "Piliavin et al. (1969): ~4,450 NYC subway riders across 103 trials; 95% helped Cane victim (median 5 s) vs 50% Drunk victim (median 109 s); Arousal–Cost–Reward model.",
          "Perry et al. (2015): 54 Israeli men in double-blind crossover (24 IU oxytocin vs placebo); oxytocin ↓ preferred distance in high-empathy men but ↑ distance in low-empathy men."
        ]
      }
    ]
  },
  {
    "id": "cs-al-psy-6-clinical",
    "slug": "clinical-psychology-disorders-treatments",
    "title": "Topic 6: Clinical Psychology — Disorders & Evidence-Based Treatments",
    "topicNumber": 6,
    "topicName": "Clinical Psychology",
    "summary": "Side-by-side summary of Schizophrenia, Depression, Phobias, and OCD explanations & therapies.",
    "accentColor": "#059669",
    "sections": [
      {
        "heading": "Biological & Psychological Explanations",
        "points": [
          "Schizophrenia: Polygenic (MZ ~48%, Gottesman), Revised Dopamine Hypothesis (mesolimbic D2 hyper- + prefrontal D1 hypo-dopaminergia), Frith cognitive deficits, high EE relapse.",
          "Depression: Beck’s Negative Triad (Self, World, Future), Ellis’s ABC irrational beliefs, serotonin/5-HTT gene × life stress interaction.",
          "Phobias & OCD: Mowrer’s Two-Process Model (classical acquisition + negative reinforcement maintenance); OCD COMT/SERT genes + OFC–caudate–thalamus worry circuit."
        ]
      },
      {
        "heading": "Clinical Treatments & Interactionist Synthesis",
        "points": [
          "Schizophrenia: Typical (chlorpromazine) vs Atypical (clozapine/risperidone) antipsychotics + CBTp + Family Therapy (Tienari et al., 2004 interactionist support).",
          "Depression: CBT / REBT (ABCDE disputing + behavioural activation) & SSRIs (March et al., 2007: 81% CBT, 81% SSRI, 86% combined).",
          "Phobias & OCD: Systematic Desensitisation vs Flooding; OCD SSRIs (Soomro et al., 2009) + Exposure & Response Prevention (ERP)."
        ]
      }
    ]
  }
];

export const ALEVEL_PSYCHOLOGY_EXAM_PRACTICE: ExamQuestionItem[] = [
  {
    "id": "al-psy-exam-1",
    "subtopicId": "al-psy-1-1",
    "number": 1,
    "stimulus": "A cognitive psychologist designs a laboratory experiment to test whether drinking 200 mg of caffeine improves reaction times on a computerised hazard-detection task compared with drinking decaffeinated water. She recruits 30 university students and tests every student in both conditions.",
    "parts": [
      {
        "id": "al-psy-exam-1a",
        "label": "a)",
        "prompt": "Identify the experimental design used by the psychologist.",
        "kind": "mcq",
        "marks": 1,
        "options": [
          "Independent measures design",
          "Repeated measures design",
          "Matched pairs design",
          "Natural quasi-experimental design"
        ],
        "correctIndex": 1
      },
      {
        "id": "al-psy-exam-1b",
        "label": "b)",
        "prompt": "Write a fully operationalised directional (one-tailed) hypothesis for this experiment.",
        "kind": "short-answer",
        "marks": 2,
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "Participants will record a significantly faster mean reaction time (in milliseconds) on the computerised hazard-detection task after drinking 200 mg of caffeine than after drinking decaffeinated water.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Operationalised IV (200 mg caffeine vs decaffeinated water)",
              "requiredKeywordGroups": [
                [
                  "caffeine",
                  "200"
                ],
                [
                  "decaf",
                  "water",
                  "without"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "Operationalised DV with clear directional prediction (faster/lower reaction time in ms)",
              "requiredKeywordGroups": [
                [
                  "faster",
                  "shorter",
                  "lower",
                  "quicker"
                ],
                [
                  "reaction time",
                  "ms",
                  "millisecond",
                  "hazard"
                ]
              ]
            }
          ]
        }
      },
      {
        "id": "al-psy-exam-1c",
        "label": "c)",
        "prompt": "Explain how the psychologist should use counterbalancing and a double-blind procedure to improve the internal validity of this study.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Counterbalancing (AB/BA) splits the 30 students so 15 complete the caffeine condition first and 15 complete the decaf condition first, balancing out practice and fatigue order effects. A double-blind procedure ensures neither the student nor the researcher administering the task knows which cup contains caffeine, eliminating demand characteristics and investigator expectancy bias.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Counterbalancing (15 caffeine first, 15 decaf first / AB-BA) controls order effects (practice/fatigue)",
              "requiredKeywordGroups": [
                [
                  "half",
                  "15",
                  "ab",
                  "order",
                  "practice",
                  "fatigue"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "Double-blind means neither participant nor experimenter knows which drink is given",
              "requiredKeywordGroups": [
                [
                  "neither",
                  "both"
                ],
                [
                  "participant",
                  "researcher",
                  "experimenter"
                ]
              ]
            },
            {
              "id": "mp3",
              "markDescription": "Eliminates demand characteristics / placebo effect and investigator expectancy bias",
              "requiredKeywordGroups": [
                [
                  "demand",
                  "placebo",
                  "expectancy",
                  "investigator"
                ]
              ]
            }
          ]
        }
      }
    ]
  },
  {
    "id": "al-psy-exam-2",
    "subtopicId": "al-psy-2-1",
    "number": 2,
    "stimulus": "The diagram below illustrates Atkinson & Shiffrin’s (1968) Multi-Store Model of Memory. In a follow-up cognitive study, Andrade (2010) investigated whether shading shapes (doodling) aided recall of a monotonous telephone message.",
    "diagram": "multi-store-memory",
    "parts": [
      {
        "id": "al-psy-exam-2a",
        "label": "a)",
        "prompt": "Which clinical case study challenged the Multi-Store Model’s claim that Short-Term Memory is a single unitary store?",
        "kind": "mcq",
        "marks": 1,
        "options": [
          "Patient HM (Scoville & Milner, 1957)",
          "Patient KF (Shallice & Warrington, 1970)",
          "Little Albert (Watson & Rayner, 1920)",
          "Phineas Gage (Harlow, 1848)"
        ],
        "correctIndex": 1
      },
      {
        "id": "al-psy-exam-2b",
        "label": "b)",
        "prompt": "Using Baddeley & Hitch’s Working Memory Model, explain why participants in Andrade (2010) could doodle while listening to the voicemail without overloading verbal memory.",
        "kind": "short-answer",
        "marks": 2,
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "Listening to the verbal telephone message relies on the Phonological Loop, whereas shading geometric shapes uses the Visuo-Spatial Sketchpad. Because these are two independent slave systems, doodling reduced daydreaming (stabilising Central Executive arousal) without competing for verbal Phonological Loop capacity.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Verbal message uses Phonological Loop while shading shapes uses Visuo-Spatial Sketchpad (separate slave systems)",
              "requiredKeywordGroups": [
                [
                  "phonological"
                ],
                [
                  "visuo-spatial",
                  "sketchpad",
                  "separate"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "Doodling prevents daydreaming / reduces Central Executive drain without verbal interference",
              "requiredKeywordGroups": [
                [
                  "daydream",
                  "central executive",
                  "arousal",
                  "interference"
                ]
              ]
            }
          ]
        }
      },
      {
        "id": "al-psy-exam-2c",
        "label": "c)",
        "prompt": "Explain ONE methodological strength and ONE limitation of Andrade’s (2010) doodling study.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Strength: High standardisation and control — all 40 participants heard the identical 2.5-minute recorded message and completed a surprise memory test, preventing intentional rehearsal and ensuring high internal validity. Limitation: Low mundane realism — being instructed to shade printed squares and circles differs from spontaneous everyday doodling.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Strength: standardised 2.5-min recording or surprise recall test preventing deliberate rehearsal",
              "requiredKeywordGroups": [
                [
                  "standard",
                  "surprise",
                  "2.5",
                  "recorded",
                  "internal validity"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "Limitation: low mundane realism / ecological validity or unmeasured daydreaming",
              "requiredKeywordGroups": [
                [
                  "mundane",
                  "ecological",
                  "artificial",
                  "daydream"
                ]
              ]
            },
            {
              "id": "mp3",
              "markDescription": "Specific detail linking limitation to shading printed shapes vs spontaneous doodling",
              "requiredKeywordGroups": [
                [
                  "shape",
                  "shade",
                  "square",
                  "circle",
                  "spontaneous"
                ]
              ]
            }
          ]
        }
      }
    ]
  },
  {
    "id": "al-psy-exam-3",
    "subtopicId": "al-psy-3-3",
    "number": 3,
    "stimulus": "The diagram below shows chemical synaptic transmission between a presynaptic neurone and a postsynaptic neurone. Biopsychologists also use EEG, EOG, and structural MRI (as in Dement & Kleitman, 1957 and Hölzel et al., 2011) to study brain activity and plasticity.",
    "diagram": "synaptic-transmission",
    "parts": [
      {
        "id": "al-psy-exam-3a",
        "label": "a)",
        "prompt": "What triggers synaptic vesicles in the presynaptic terminal to fuse with the presynaptic membrane and release neurotransmitters by exocytosis?",
        "kind": "mcq",
        "marks": 1,
        "options": [
          "An influx of calcium ions (Ca²⁺) into the presynaptic terminal",
          "Reuptake of serotonin by postsynaptic receptors",
          "Hyperpolarisation of the myelin sheath",
          "Release of cortisol from the adrenal cortex"
        ],
        "correctIndex": 0
      },
      {
        "id": "al-psy-exam-3b",
        "label": "b)",
        "prompt": "Explain the role of spatial and temporal summation in determining whether the postsynaptic neurone fires an action potential.",
        "kind": "short-answer",
        "marks": 2,
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "Excitatory neurotransmitters generate depolarising EPSPs while inhibitory neurotransmitters generate hyperpolarising IPSPs. Summation adds all incoming EPSPs and IPSPs together at the axon hillock; the postsynaptic neurone fires an action potential only if the net excitatory charge exceeds the threshold potential.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Distinguishes excitatory (EPSP) vs inhibitory (IPSP) postsynaptic potentials",
              "requiredKeywordGroups": [
                [
                  "epsp",
                  "excitatory"
                ],
                [
                  "ipsp",
                  "inhibitory"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "Net algebraic sum must cross threshold potential to trigger an action potential",
              "requiredKeywordGroups": [
                [
                  "sum",
                  "net",
                  "combine"
                ],
                [
                  "threshold",
                  "fire",
                  "action potential"
                ]
              ]
            }
          ]
        }
      },
      {
        "id": "al-psy-exam-3c",
        "label": "c)",
        "prompt": "From Hölzel et al. (2011), name TWO brain regions where grey matter concentration increased after 8 weeks of MBSR and state ONE reason why objective MRI/VBM scanning improves validity.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Grey matter concentration significantly increased in the left hippocampus and the temporo-parietal junction (also posterior cingulate cortex and cerebellum). Automated VBM structural MRI provides objective quantitative brain data that cannot be faked by participant demand characteristics or social desirability bias.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "First valid brain region (left hippocampus / PCC / TPJ / cerebellum)",
              "requiredKeywordGroups": [
                [
                  "hippocampus",
                  "cingulate",
                  "pcc",
                  "tpj",
                  "temporo",
                  "cerebellum"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "Second distinct valid brain region (and not insula)",
              "requiredKeywordGroups": [
                [
                  "hippocampus",
                  "cingulate",
                  "pcc",
                  "tpj",
                  "temporo",
                  "cerebellum"
                ]
              ]
            },
            {
              "id": "mp3",
              "markDescription": "Objective VBM/MRI eliminates demand characteristics or subjective researcher bias",
              "requiredKeywordGroups": [
                [
                  "objective",
                  "quantitative",
                  "demand",
                  "social desirability",
                  "bias"
                ]
              ]
            }
          ]
        }
      }
    ]
  },
  {
    "id": "al-psy-exam-4",
    "subtopicId": "al-psy-4-2",
    "number": 4,
    "stimulus": "In Bandura, Ross & Ross (1961), 72 nursery children observed either an aggressive adult model, a non-aggressive adult model, or no model before being observed in a playroom for 20 minutes. Later learning research by Fagen et al. (2014) trained captive elephants in Nepal to perform voluntary trunk washes.",
    "parts": [
      {
        "id": "al-psy-exam-4a",
        "label": "a)",
        "prompt": "Which four cognitive mediational processes (ARRM) operate between observing a model and imitating their behaviour in Social Learning Theory?",
        "kind": "mcq",
        "marks": 1,
        "options": [
          "Acquisition, Rehearsal, Retrieval, Maintenance",
          "Attention, Retention, Reproduction, Motivation",
          "Association, Reinforcement, Response, Modelling",
          "Arousal, Reciprocity, Reduction, Mastery"
        ],
        "correctIndex": 1
      },
      {
        "id": "al-psy-exam-4b",
        "label": "b)",
        "prompt": "Explain how Bandura et al. (1961) ensured high inter-observer reliability during Stage 3 and state ONE key gender finding from the study.",
        "kind": "short-answer",
        "marks": 2,
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "Two independent observers watched through a one-way mirror using predefined behavioural categories every 5 seconds (240 time samples), achieving an inter-rater reliability correlation above r = +0.90. Boys displayed significantly more physical aggression than girls overall, and children imitated same-sex models more strongly.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Two independent observers used 5-second time sampling / operationalised categories (r > +0.90)",
              "requiredKeywordGroups": [
                [
                  "two",
                  "independent",
                  "5 second",
                  "0.9",
                  "categories",
                  "time sampling"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "Boys showed more physical aggression than girls (or stronger same-sex model imitation)",
              "requiredKeywordGroups": [
                [
                  "boys",
                  "physical",
                  "same-sex",
                  "gender"
                ]
              ]
            }
          ]
        }
      },
      {
        "id": "al-psy-exam-4c",
        "label": "c)",
        "prompt": "Explain how Fagen et al. (2014) used primary and secondary positive reinforcement, shaping, and behavioural chaining to train the elephants.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Trainers paired a whistle blow (secondary reinforcer) with chopped banana pieces (primary reinforcer). They used shaping (rewarding successive approximations) to teach 5 component trunk actions, and then used behavioural chaining to link the 5 steps in sequence into a complete voluntary trunk wash.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Distinguishes whistle (secondary reinforcer) and chopped banana (primary reinforcer)",
              "requiredKeywordGroups": [
                [
                  "whistle"
                ],
                [
                  "banana"
                ],
                [
                  "secondary",
                  "primary"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "Shaping rewarded successive approximations toward individual trunk positions",
              "requiredKeywordGroups": [
                [
                  "shaping",
                  "approximation"
                ]
              ]
            },
            {
              "id": "mp3",
              "markDescription": "Chaining linked the 5 separate steps into one continuous trunk-wash routine",
              "requiredKeywordGroups": [
                [
                  "chain",
                  "5",
                  "sequence",
                  "five"
                ]
              ]
            }
          ]
        }
      }
    ]
  },
  {
    "id": "al-psy-exam-5",
    "subtopicId": "al-psy-5-1",
    "number": 5,
    "stimulus": "In Milgram’s (1963) baseline obedience study at Yale University, 65% of participants administered the maximum 450 V electric shock. In Piliavin et al.’s (1969) subway field experiment, commuters witnessed a confederate collapse holding either a black cane or a bottle in a brown paper bag.",
    "parts": [
      {
        "id": "al-psy-exam-5a",
        "label": "a)",
        "prompt": "What happened to the 450 V obedience rate when Milgram moved the experiment from Yale University to a rundown office building in Bridgeport?",
        "kind": "mcq",
        "marks": 1,
        "options": [
          "It rose to 85%",
          "It remained identical at 65%",
          "It dropped to 47.5%",
          "It dropped to 0%"
        ],
        "correctIndex": 2
      },
      {
        "id": "al-psy-exam-5b",
        "label": "b)",
        "prompt": "Using Piliavin et al.’s Arousal–Cost–Reward model, explain why spontaneous helping was much higher for the cane victim (95%) than for the drunk victim (50%).",
        "kind": "short-answer",
        "marks": 2,
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "Witnessing the collapse caused unpleasant physiological arousal. The cane victim had low costs of helping (safe, not blamed for his illness) and high costs of not helping (public shame/guilt), whereas the drunk victim carried high costs of helping (unpredictable/disgust) and lower guilt for not helping because he was perceived as responsible for his condition.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Emergency creates unpleasant arousal that bystanders seek to reduce via cost–reward calculation",
              "requiredKeywordGroups": [
                [
                  "arousal"
                ],
                [
                  "cost",
                  "reward"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "Drunk victim had higher cost of helping (danger/disgust/blame) and lower cost of not helping than ill cane victim",
              "requiredKeywordGroups": [
                [
                  "drunk",
                  "cane"
                ],
                [
                  "blame",
                  "fault",
                  "danger",
                  "guilt",
                  "disgust"
                ]
              ]
            }
          ]
        }
      },
      {
        "id": "al-psy-exam-5c",
        "label": "c)",
        "prompt": "Compare the ecological validity and ethical issues of Milgram (1963) and Piliavin et al. (1969).",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Piliavin’s field experiment on an actual NYC express subway had much higher ecological validity and zero demand characteristics compared with Milgram’s artificial Yale laboratory shock task. Ethically, both studies lacked fully informed consent and caused psychological distress, though Milgram thoroughly debriefed his 40 participants afterwards whereas Piliavin could not obtain consent, allow withdrawal from the moving train, or debrief the 4,450 commuters.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Piliavin had higher ecological validity / natural subway setting vs Milgram’s artificial lab generator",
              "requiredKeywordGroups": [
                [
                  "ecological",
                  "natural",
                  "subway"
                ],
                [
                  "artificial",
                  "lab",
                  "yale"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "Both involved deception / lack of full informed consent / psychological stress",
              "requiredKeywordGroups": [
                [
                  "deception",
                  "consent",
                  "distress",
                  "stress",
                  "harm"
                ]
              ]
            },
            {
              "id": "mp3",
              "markDescription": "Milgram debriefed participants afterwards whereas Piliavin could not debrief or offer right to withdraw on the moving train",
              "requiredKeywordGroups": [
                [
                  "debrief"
                ],
                [
                  "withdraw",
                  "commuters",
                  "train"
                ]
              ]
            }
          ]
        }
      }
    ]
  },
  {
    "id": "al-psy-exam-6",
    "subtopicId": "al-psy-6-1",
    "number": 6,
    "stimulus": "Liam, aged 22, has experienced auditory hallucinations commenting on his actions for 3 months and has stopped attending university or washing regularly. His family argue frequently about his lack of effort.",
    "parts": [
      {
        "id": "al-psy-exam-6a",
        "label": "a)",
        "prompt": "Which mechanism best describes how atypical antipsychotics such as clozapine reduce both positive and negative symptoms of schizophrenia?",
        "kind": "mcq",
        "marks": 1,
        "options": [
          "Permanent irreversible blockade of all cortical GABA receptors",
          "Transient D2 dopamine receptor antagonism combined with serotonin (5-HT2A) receptor action",
          "Increasing adrenaline release in the sympathomedullary pathway",
          "Inhibiting acetylcholine breakdown at neuromuscular junctions"
        ],
        "correctIndex": 1
      },
      {
        "id": "al-psy-exam-6b",
        "label": "b)",
        "prompt": "Identify ONE positive symptom and ONE negative symptom shown by Liam.",
        "kind": "short-answer",
        "marks": 2,
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "Positive symptom: Auditory hallucinations (hearing voices commenting on his actions). Negative symptom: Avolition (stopping university attendance and personal hygiene / loss of motivation).",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Positive symptom: auditory hallucinations",
              "requiredKeywordGroups": [
                [
                  "hallucination",
                  "voices"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "Negative symptom: avolition / loss of motivation",
              "requiredKeywordGroups": [
                [
                  "avolition",
                  "motivation",
                  "hygiene",
                  "washing",
                  "stopped"
                ]
              ]
            }
          ]
        }
      },
      {
        "id": "al-psy-exam-6c",
        "label": "c)",
        "prompt": "Using the interactionist (diathesis–stress) model, explain how biological and family factors could be combined in treating Liam.",
        "kind": "short-answer",
        "marks": 4,
        "rubric": {
          "maxMarks": 4,
          "modelAnswer": "An interactionist treatment pairs atypical antipsychotics (such as risperidone or clozapine, targeting dopamine and serotonin to relieve both hallucinations and avolition) with Family Therapy to reduce high Expressed Emotion (critical comments/hostility at home) and lower relapse risk, plus CBTp to help Liam reality-test his auditory hallucinations.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Biological treatment: atypical antipsychotics targeting dopamine/serotonin",
              "requiredKeywordGroups": [
                [
                  "antipsychotic",
                  "clozapine",
                  "risperidone",
                  "dopamine"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "Addresses both positive (hallucinations) and negative (avolition) symptoms",
              "requiredKeywordGroups": [
                [
                  "positive",
                  "negative",
                  "hallucination",
                  "avolition"
                ]
              ]
            },
            {
              "id": "mp3",
              "markDescription": "Family Therapy to reduce high Expressed Emotion / family arguments",
              "requiredKeywordGroups": [
                [
                  "family therapy",
                  "expressed emotion",
                  "ee",
                  "criticism",
                  "arguments"
                ]
              ]
            },
            {
              "id": "mp4",
              "markDescription": "Interactionist rationale (combining drugs + psychological therapy lowers relapse better than either alone)",
              "requiredKeywordGroups": [
                [
                  "relapse",
                  "combin",
                  "interaction",
                  "diathesis",
                  "cbt"
                ]
              ]
            }
          ]
        }
      }
    ]
  },
  {
    "id": "al-psy-ex-1-2",
    "subtopicId": "al-psy-1-2",
    "number": 7,
    "stimulus": "[AQA 7182 / CIE 9990 Style] A psychologist conducts a covert naturalistic observation of helping behaviour in a train station using two independent observers.",
    "parts": [
      {
        "id": "p1",
        "label": "(a)",
        "prompt": "Explain ONE strength of covert naturalistic observation, ONE ethical concern it raises, and how the psychologist should check inter-observer reliability.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Strength: passengers do not know they are watched, eliminating observer effects/social desirability and giving high ecological validity. Ethical concern: lack of informed consent / invasion of privacy. Reliability check: have both observers independently code the same sample using operationalised behavioural categories and correlate their tallies (aiming for r ≥ +0.80).",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "High ecological validity / no observer effects",
              "requiredKeywordGroups": [
                [
                  "ecological validity",
                  "natural",
                  "observer effect",
                  "demand"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "Lack of informed consent or privacy issue",
              "requiredKeywordGroups": [
                [
                  "consent",
                  "privacy"
                ]
              ]
            },
            {
              "id": "mp3",
              "markDescription": "Correlate independent observer tallies (r ≥ 0.80)",
              "requiredKeywordGroups": [
                [
                  "correlat",
                  "compare",
                  "0.8",
                  "agreement"
                ]
              ]
            }
          ]
        }
      }
    ]
  },
  {
    "id": "al-psy-ex-1-3",
    "subtopicId": "al-psy-1-3",
    "number": 8,
    "stimulus": "[AQA 7182 / CIE 9990 Style] A researcher tests a new sleep-hygiene app with 10 insomniacs. 8 sleep longer (+), 1 sleeps less (−), and 1 shows no change. Critical value of S for N = 9 (two-tailed, p ≤ 0.05) is 1.",
    "parts": [
      {
        "id": "p1",
        "label": "(a)",
        "prompt": "State the calculated value of S, explain why N = 9 rather than 10, and state whether the result is significant at p ≤ 0.05.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "S = 1 (the less frequent sign). N = 9 because the 1 participant with no change (tie) is omitted from the sign test. Since calculated S (1) ≤ critical value (1), the result IS statistically significant at p ≤ 0.05, so reject the null hypothesis.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "S = 1",
              "numericMatch": {
                "value": 1,
                "tolerance": 0.01
              }
            },
            {
              "id": "mp2",
              "markDescription": "Participant with no change/tie is omitted",
              "requiredKeywordGroups": [
                [
                  "tie",
                  "no change",
                  "omit",
                  "exclude",
                  "ignore"
                ]
              ]
            },
            {
              "id": "mp3",
              "markDescription": "Significant because S (1) ≤ critical value (1) ⇒ reject H₀",
              "requiredKeywordGroups": [
                [
                  "significant"
                ],
                [
                  "reject"
                ]
              ]
            }
          ]
        }
      }
    ]
  },
  {
    "id": "al-psy-ex-2-2",
    "subtopicId": "al-psy-2-2",
    "number": 9,
    "stimulus": "[CIE 9990 / AQA 7182 Style] Baron-Cohen et al. (2001) revised the Reading the Mind in the Eyes Test to assess Theory of Mind in adults with Asperger Syndrome / High-Functioning Autism (AS/HFA).",
    "parts": [
      {
        "id": "p1",
        "label": "(a)",
        "prompt": "Outline the main finding comparing the AS/HFA group with IQ-matched controls, and evaluate ONE strength and ONE limitation of the study’s methodology.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Finding: AS/HFA participants scored significantly lower (mean 21.9/36) than IQ-matched controls (30.9/36), confirming impaired Theory of Mind independent of IQ. Strength: high internal validity/standardisation (glossary controlled vocabulary, 4 choices reduced guessing). Limitation: low ecological validity (static cropped black-and-white eye photos lack real-life movement/vocal cues) or small AS/HFA sample (n = 15, all male).",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "AS/HFA scored significantly lower than IQ-matched controls (~21.9 vs 30.9)",
              "requiredKeywordGroups": [
                [
                  "lower",
                  "21.9",
                  "30.9",
                  "impaired"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "Methodological strength (glossary / standardised / IQ-matched / 4 choices)",
              "requiredKeywordGroups": [
                [
                  "glossary",
                  "standardis",
                  "iq",
                  "control",
                  "reliab"
                ]
              ]
            },
            {
              "id": "mp3",
              "markDescription": "Methodological limitation (static photos / ecological validity / small all-male sample)",
              "requiredKeywordGroups": [
                [
                  "static",
                  "ecological",
                  "real life",
                  "small sample",
                  "male"
                ]
              ]
            }
          ]
        }
      }
    ]
  },
  {
    "id": "al-psy-ex-2-3",
    "subtopicId": "al-psy-2-3",
    "number": 10,
    "stimulus": "[AQA 7182 / CIE 9990 Style] Police interview an eyewitness to a street robbery using the Cognitive Interview rather than a standard police interview.",
    "parts": [
      {
        "id": "p1",
        "label": "(a)",
        "prompt": "Describe TWO techniques of the Cognitive Interview and explain how each improves eyewitness recall accuracy.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "1. Context reinstatement: witness mentally recreates the environment and their emotions at the scene, providing context-dependent retrieval cues. 2. Reverse order: recalling events backwards disrupts schema-based expectations and prevents witnesses filling gaps with assumptions (also acceptable: report everything / change perspective).",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Names two valid CI techniques (context reinstatement / reverse order / report everything / change perspective)",
              "requiredKeywordGroups": [
                [
                  "context",
                  "reverse",
                  "report everything",
                  "perspective"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "Explains retrieval cues / unlocking details for technique 1",
              "requiredKeywordGroups": [
                [
                  "cue",
                  "trigger",
                  "detail",
                  "environment"
                ]
              ]
            },
            {
              "id": "mp3",
              "markDescription": "Explains disrupting schemas / assumptions for technique 2",
              "requiredKeywordGroups": [
                [
                  "schema",
                  "assumption",
                  "expectation",
                  "honest",
                  "detail"
                ]
              ]
            }
          ]
        }
      }
    ]
  },
  {
    "id": "al-psy-ex-3-1",
    "subtopicId": "al-psy-3-1",
    "number": 11,
    "stimulus": "[CIE 9990 / AQA 7182 Style] Dement & Kleitman (1957) monitored sleeping participants overnight using EEG and EOG electrodes in a university sleep laboratory.",
    "parts": [
      {
        "id": "p1",
        "label": "(a)",
        "prompt": "Evaluate ONE strength and TWO limitations of Dement & Kleitman’s (1957) methodology.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Strength: Objective scientific EEG/EOG measurements and strict controls (no caffeine/alcohol, doorbell waking) give high reliability and internal validity. Limitation 1: Low ecological validity — sleeping wired to electrodes in an unfamiliar lab may distort normal sleep/dreams. Limitation 2: Tiny unrepresentative sample (n = 9, mostly male) limits population validity (also: subjective self-report dream recall may suffer forgetting/embarrassment).",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Strength: objective EEG/EOG / controlled / high reliability",
              "requiredKeywordGroups": [
                [
                  "objective",
                  "eeg",
                  "eog",
                  "control",
                  "reliab"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "Limitation 1: artificial sleep lab / low ecological validity",
              "requiredKeywordGroups": [
                [
                  "ecological",
                  "artificial",
                  "electrode",
                  "lab"
                ]
              ]
            },
            {
              "id": "mp3",
              "markDescription": "Limitation 2: tiny sample (n = 9) OR subjective dream self-report",
              "requiredKeywordGroups": [
                [
                  "sample",
                  "9",
                  "generalis",
                  "self-report",
                  "subjective"
                ]
              ]
            }
          ]
        }
      }
    ]
  },
  {
    "id": "al-psy-ex-3-2",
    "subtopicId": "al-psy-3-2",
    "number": 12,
    "stimulus": "[CIE 9990 / AQA 7182 Style] Hölzel et al. (2011) scanned 16 adults before and after an 8-week Mindfulness-Based Stress Reduction (MBSR) course and compared them with 17 wait-list controls.",
    "parts": [
      {
        "id": "p1",
        "label": "(a)",
        "prompt": "Explain how Hölzel et al. (2011) provides evidence for neuroplasticity, and evaluate ONE strength and ONE limitation of their research design.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Neuroplasticity: structural MRI showed significant increases in grey matter concentration in the left hippocampus, PCC, TPJ, and cerebellum after just 8 weeks of mental training. Strength: objective quantitative MRI measures cannot be biased by demand characteristics (plus pre/post control comparison). Limitation: small sample (n = 16 MBSR) and no active control group / random allocation, so group social support or participant motivation could confound results.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Increased grey matter in hippocampus/PCC/TPJ/cerebellum shows brain adapts structurally",
              "requiredKeywordGroups": [
                [
                  "grey matter",
                  "gray matter"
                ],
                [
                  "hippocampus",
                  "pcc",
                  "tpj",
                  "cerebellum"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "Strength: objective MRI / pre-post control group",
              "requiredKeywordGroups": [
                [
                  "mri",
                  "objective",
                  "control group",
                  "pre"
                ]
              ]
            },
            {
              "id": "mp3",
              "markDescription": "Limitation: small sample / no random allocation / social-group confound",
              "requiredKeywordGroups": [
                [
                  "small sample",
                  "random",
                  "social",
                  "confound",
                  "self-select"
                ]
              ]
            }
          ]
        }
      }
    ]
  },
  {
    "id": "al-psy-ex-4-1",
    "subtopicId": "al-psy-4-1",
    "number": 13,
    "stimulus": "[AQA 7182 / CIE 9990 Style] Mowrer’s (1960) two-process model uses both classical and operant conditioning to explain how phobias are acquired and maintained.",
    "parts": [
      {
        "id": "p1",
        "label": "(a)",
        "prompt": "Using the example of a dog phobia, explain how a phobia is ACQUIRED via classical conditioning and MAINTAINED via operant conditioning.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Acquisition (classical): a neutral stimulus (dog) is paired with an unconditioned stimulus (painful bite causing unconditioned fear), so the dog becomes a conditioned stimulus eliciting conditioned fear. Maintenance (operant): avoiding dogs removes the unpleasant anxiety (negative reinforcement), strengthening avoidance so the phobia persists.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Neutral stimulus (dog) paired with UCS (bite/pain) → CS triggers fear",
              "requiredKeywordGroups": [
                [
                  "neutral",
                  "ns"
                ],
                [
                  "ucs",
                  "bite",
                  "pain",
                  "cs"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "Avoidance of dogs reduces/removes anxiety",
              "requiredKeywordGroups": [
                [
                  "avoid"
                ],
                [
                  "anxiety",
                  "fear",
                  "unpleasant"
                ]
              ]
            },
            {
              "id": "mp3",
              "markDescription": "Identifies negative reinforcement maintaining the phobia",
              "requiredKeywordGroups": [
                [
                  "negative reinforcement"
                ]
              ]
            }
          ]
        }
      }
    ]
  },
  {
    "id": "al-psy-ex-4-3",
    "subtopicId": "al-psy-4-3",
    "number": 14,
    "stimulus": "[CIE 9990 Style] Fagen et al. (2014) used Secondary Positive Reinforcement (SPR) to train 5 captive Asian elephants in Nepal to participate voluntarily in a veterinary trunk wash for tuberculosis screening.",
    "parts": [
      {
        "id": "p1",
        "label": "(a)",
        "prompt": "Explain how shaping, primary reinforcement, and secondary reinforcement worked together in Fagen et al. (2014), and state ONE ethical strength of the study.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Chopped banana served as the primary reinforcer paired with a whistle (secondary reinforcer) to mark exact desired movements. Shaping rewarded successive small steps (trunk up, bucket, blow) until chained into the full wash. Ethical strength: completely avoided physical punishment/chains (mahout ankus), improving captive elephant welfare.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Banana = primary reinforcer AND whistle = secondary reinforcer",
              "requiredKeywordGroups": [
                [
                  "banana",
                  "food"
                ],
                [
                  "whistle"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "Shaping rewarded successive approximations / steps chained together",
              "requiredKeywordGroups": [
                [
                  "shap",
                  "step",
                  "approximation",
                  "chain"
                ]
              ]
            },
            {
              "id": "mp3",
              "markDescription": "Ethical strength: zero punishment / voluntary / improved welfare",
              "requiredKeywordGroups": [
                [
                  "no punishment",
                  "welfare",
                  "voluntary",
                  "humane",
                  "harm"
                ]
              ]
            }
          ]
        }
      }
    ]
  },
  {
    "id": "al-psy-ex-5-2",
    "subtopicId": "al-psy-5-2",
    "number": 15,
    "stimulus": "[AQA 7182 Style] Asch (1951) asked naive students to judge line lengths aloud after unanimous confederates deliberately gave wrong answers.",
    "parts": [
      {
        "id": "p1",
        "label": "(a)",
        "prompt": "State Asch’s baseline conformity rate and evaluate TWO limitations of Asch’s (1951) research.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Baseline: 36.8% conformity on critical trials (75% conformed at least once). Limitation 1: Low ecological validity / artificial trivial line-judgement task with strangers (high mundane unrealism). Limitation 2: Low temporal & cultural/population validity — 1950s US male students only (Perrin & Spencer 1980 found minimal conformity in UK students; Bond & Smith showed higher conformity in collectivist cultures).",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "36.8% (or ~32–37%) conformity on critical trials / 75% at least once",
              "requiredKeywordGroups": [
                [
                  "36.8",
                  "37",
                  "32",
                  "75"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "Limitation 1: artificial task / low ecological validity",
              "requiredKeywordGroups": [
                [
                  "artificial",
                  "trivial",
                  "ecological",
                  "mundane"
                ]
              ]
            },
            {
              "id": "mp3",
              "markDescription": "Limitation 2: child of its time / androcentric all-male US sample / cultural bias",
              "requiredKeywordGroups": [
                [
                  "1950",
                  "time",
                  "perrin",
                  "male",
                  "androcentric",
                  "us",
                  "culture"
                ]
              ]
            }
          ]
        }
      }
    ]
  },
  {
    "id": "al-psy-ex-5-3",
    "subtopicId": "al-psy-5-3",
    "number": 16,
    "stimulus": "[CIE 9990 Style] Piliavin, Rodin & Piliavin (1969) staged emergency collapses on New York City subway trains to test bystander helping behaviour.",
    "parts": [
      {
        "id": "p1",
        "label": "(a)",
        "prompt": "Outline TWO main findings from Piliavin et al. (1969) and discuss ONE ethical issue raised by their field experiment.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Findings: (1) Ill victims carrying a cane received far more spontaneous help (95%) than drunk victims (50%); (2) 90% of first helpers were male, and NO diffusion of responsibility occurred in larger crowds. Ethical issue: unwitting passengers could not give informed consent, were deceived, could not withdraw from a moving train, and were not debriefed (risk of psychological distress/guilt).",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Ill helped much more than drunk (95% vs 50%)",
              "requiredKeywordGroups": [
                [
                  "95",
                  "50",
                  "ill",
                  "cane",
                  "drunk"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "Second finding (no diffusion of responsibility / 90% male helpers / same-race drunk)",
              "requiredKeywordGroups": [
                [
                  "diffusion",
                  "male",
                  "90%",
                  "men",
                  "race",
                  "faster"
                ]
              ]
            },
            {
              "id": "mp3",
              "markDescription": "Ethical issue (no consent / deception / no debrief / distress on moving train)",
              "requiredKeywordGroups": [
                [
                  "consent",
                  "deception",
                  "debrief",
                  "distress",
                  "withdraw"
                ]
              ]
            }
          ]
        }
      }
    ]
  },
  {
    "id": "al-psy-ex-6-2",
    "subtopicId": "al-psy-6-2",
    "number": 17,
    "stimulus": "[AQA 7182 / CIE 9990 Style] After failing one driving test, Maya thinks \"I am completely useless, nothing ever goes right for me, and I will never pass anything.\" Her GP recommends CBT.",
    "parts": [
      {
        "id": "p1",
        "label": "(a)",
        "prompt": "Apply Beck’s Negative Triad to Maya’s thoughts and evaluate ONE strength and ONE limitation of CBT as a treatment for depression.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Application: \"I am completely useless\" = negative view of Self; \"nothing ever goes right\" = negative view of World; \"I will never pass anything\" = negative view of Future. Strength: strong empirical effectiveness (March et al. 2007 found 81% improved with CBT, matching drugs without side effects, and equips lifelong coping skills). Limitation: requires high patient motivation/effort (hard in severe depression) and may minimise genuine real-world stressors.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Maps Maya’s exact quotes to Self, World, and Future",
              "requiredKeywordGroups": [
                [
                  "self"
                ],
                [
                  "world"
                ],
                [
                  "future"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "Strength of CBT (March et al. 81% / no drug side effects / long-term skills)",
              "requiredKeywordGroups": [
                [
                  "march",
                  "81",
                  "effective",
                  "side effect",
                  "skill",
                  "long-term"
                ]
              ]
            },
            {
              "id": "mp3",
              "markDescription": "Limitation of CBT (requires motivation / severe depression / ignores real-life causes)",
              "requiredKeywordGroups": [
                [
                  "motivation",
                  "severe",
                  "effort",
                  "time",
                  "real-life",
                  "stress"
                ]
              ]
            }
          ]
        }
      }
    ]
  },
  {
    "id": "al-psy-ex-6-3",
    "subtopicId": "al-psy-6-3",
    "number": 18,
    "stimulus": "[AQA 7182 Style] Liam has severe OCD involving 3 hours of handwashing daily. His psychiatrist prescribes an SSRI (fluoxetine) alongside CBT.",
    "parts": [
      {
        "id": "p1",
        "label": "(a)",
        "prompt": "Explain how an SSRI works at the synapse to reduce Liam’s OCD symptoms, and evaluate ONE strength and ONE limitation of drug therapy for OCD.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Mechanism: SSRIs prevent reabsorption (reuptake) of serotonin into the presynaptic neurone, increasing serotonin concentration in the synaptic cleft so it continues stimulating the postsynaptic neurone and regulates mood/worry circuits. Strength: clear evidence of effectiveness (Soomro et al. 2009 showed SSRIs beat placebo across 17 trials) and cost-effective/low patient effort. Limitation: side effects (nausea, insomnia, sexual dysfunction), treats symptoms rather than root cause (relapse if stopped), or publication bias.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Blocks presynaptic reuptake → increases serotonin in synaptic cleft",
              "requiredKeywordGroups": [
                [
                  "reuptake",
                  "reabsorb"
                ],
                [
                  "serotonin",
                  "cleft"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "Strength (Soomro et al. effective vs placebo / cheap / low effort)",
              "requiredKeywordGroups": [
                [
                  "soomro",
                  "effective",
                  "placebo",
                  "cheap",
                  "cost",
                  "effort"
                ]
              ]
            },
            {
              "id": "mp3",
              "markDescription": "Limitation (side effects / relapse / symptom-only / publication bias)",
              "requiredKeywordGroups": [
                [
                  "side effect",
                  "relapse",
                  "nausea",
                  "symptom",
                  "bias"
                ]
              ]
            }
          ]
        }
      }
    ]
  }
];

export const ALEVEL_PSYCHOLOGY_PAST_PAPERS: PastPaperDoc[] = [
  {
    "id": "al-psy-pp-2024-p1",
    "specEra": "new-9-1",
    "year": "2024",
    "title": "CIE 9990 Paper 1: Approaches, Issues & Debates (9990/12)",
    "tier": "AS / A-Level",
    "series": "June 2024",
    "paperCode": "9990/12",
    "durationMinutes": 90,
    "totalMarks": 60,
    "insertNote": "Covers Cognitive, Biological, Learning, and Social Core Studies (Andrade, Baron-Cohen, Pozzulo, Dement & Kleitman, Hölzel, Bandura, Saavedra & Silverman, Fagen, Milgram, Piliavin, Perry).",
    "sampleQuestions": [
      {
        "number": "1",
        "question": "From Andrade (2010), state the mean total recall score of the doodling group versus the control group and explain why participants were recruited immediately after another study.",
        "marks": 4,
        "markScheme": [
          "Doodling group mean total recall = 7.5 vs control group = 5.8 (a 29% improvement) (2 marks).",
          "Recruiting after another study ensured participants were naturally fatigued/bored and prone to daydreaming during a monotonous message (2 marks)."
        ]
      },
      {
        "number": "2",
        "question": "From Hölzel et al. (2011), name two brain regions where grey matter concentration significantly increased after MBSR and explain why a wait-list control group was a limitation.",
        "marks": 4,
        "markScheme": [
          "Any two of: left hippocampus, posterior cingulate cortex (PCC), temporo-parietal junction (TPJ), cerebellum (2 marks).",
          "Wait-list controls did not receive equivalent group social interaction, instructor support, or gentle yoga, so non-meditation factors could confound grey matter changes (2 marks)."
        ]
      },
      {
        "number": "3",
        "question": "From Pozzulo et al. (2010), compare child (4–7 years) and adult correct rejection rates on target-absent human lineups and explain why cartoon stimuli were included.",
        "marks": 6,
        "markScheme": [
          "Children correctly rejected only 41% of target-absent human lineups compared with 79% for adults (high child false-positive rate) (3 marks).",
          "Familiar cartoons tested whether child errors stemmed from poor memory encoding or social pressure to pick someone — higher cartoon accuracy showed social demand drives false alarms (3 marks)."
        ]
      },
      {
        "number": "4",
        "question": "Evaluate Perry et al. (2015) with reference to two methodological strengths and two weaknesses.",
        "marks": 10,
        "markScheme": [
          "Strengths: Double-blind placebo crossover design controls participant variables and expectancy bias; two convergent tasks (computerised CID + real chair placement) boost construct validity (5 marks).",
          "Weaknesses: All-male Israeli university sample (N=54) restricts generalisability across sex/culture; 2D computerised CID stick-figure task lacks everyday ecological realism (5 marks)."
        ]
      }
    ]
  },
  {
    "id": "al-psy-pp-2024-p2",
    "specEra": "new-9-1",
    "year": "2024",
    "title": "CIE 9990 Paper 2: Research Methods (9990/22)",
    "tier": "AS / A-Level",
    "series": "June 2024",
    "paperCode": "9990/22",
    "durationMinutes": 90,
    "totalMarks": 60,
    "insertNote": "Includes Research Scenarios & Statistical Interpretation Tables Insert.",
    "sampleQuestions": [
      {
        "number": "1",
        "question": "Explain the difference between a correlation and an experiment, and state why a correlation coefficient of r = +0.74 between screen time and anxiety cannot prove causation.",
        "marks": 4,
        "markScheme": [
          "An experiment manipulates an IV to measure its causal effect on a DV, whereas a correlation measures the linear relationship between two co-variables without manipulation (2 marks).",
          "Cannot prove causation due to reverse causality (anxiety may drive screen use) or an unmeasured third intervening variable (e.g., sleep deprivation) (2 marks)."
        ]
      },
      {
        "number": "2",
        "question": "A psychologist observes playground aggression using time sampling every 10 seconds. Explain how inter-observer reliability should be established.",
        "marks": 4,
        "markScheme": [
          "Two independent observers watch the same playground session simultaneously using an identical operationalised behavioural checklist (2 marks).",
          "Correlate their tallies using Spearman’s rho / Pearson’s r and ensure the correlation reaches at least r ≥ +0.80 (2 marks)."
        ]
      },
      {
        "number": "3",
        "question": "Distinguish between a Type I and a Type II statistical error with reference to the significance level p ≤ 0.05.",
        "marks": 4,
        "markScheme": [
          "Type I error (false positive): Rejecting a true null hypothesis — more likely when p is set too leniently (e.g., p ≤ 0.10) (2 marks).",
          "Type II error (false negative): Accepting a false null hypothesis — more likely when p is overly strict (e.g., p ≤ 0.01) (2 marks)."
        ]
      },
      {
        "number": "4",
        "question": "Design a laboratory experiment to test whether listening to classical music affects accuracy on a proofreading task. Include experimental design, operationalised variables, controls, and ethical safeguards.",
        "marks": 10,
        "markScheme": [
          "Appropriate design justified (e.g., repeated measures with AB/BA counterbalancing or independent measures with random allocation) (3 marks).",
          "Operationalised IV (classical music at 60 dB vs silence) and DV (number of spelling errors detected out of 30 in 5 minutes) (3 marks).",
          "Controls (equally difficult passages, quiet room) + BPS ethics (informed consent, right to withdraw, full debriefing) (4 marks)."
        ]
      }
    ]
  },
  {
    "id": "al-psy-pp-2024-p3",
    "specEra": "new-9-1",
    "year": "2024",
    "title": "CIE 9990 / AQA 7182 Paper 3: Clinical Psychology & Issues (9990/32)",
    "tier": "A-Level",
    "series": "June 2024",
    "paperCode": "9990/32",
    "durationMinutes": 120,
    "totalMarks": 96,
    "insertNote": "Includes Clinical Case Vignettes (Schizophrenia, Mood Disorders, Phobias & OCD).",
    "sampleQuestions": [
      {
        "number": "01",
        "question": "Outline and evaluate biological explanations for schizophrenia, including genetics and the revised dopamine hypothesis.",
        "marks": 16,
        "markScheme": [
          "AO1 (6 marks): Gottesman (1991) twin concordance (48% MZ vs 17% DZ), polygenic GWAS (Ripke et al., 2014 — 108 loci), mesolimbic hyperdopaminergia (D2 → positive symptoms) and prefrontal hypodopaminergia (D1 → negative symptoms).",
          "AO3 (10 marks): Support from amphetamine agonists and antipsychotic D2 blockade, PET neuroimaging, glutamate role, and diathesis–stress adoption evidence (Tienari et al., 2004) proving environment interacts with genes."
        ]
      },
      {
        "number": "02",
        "question": "Compare Cognitive Behavioural Therapy (CBT) and SSRIs as treatments for Major Depressive Disorder.",
        "marks": 12,
        "markScheme": [
          "CBT challenges Beck’s Negative Triad and Ellis’s irrational beliefs via disputing and behavioural activation; equips clients with relapse-prevention skills without physical side effects (4 marks).",
          "SSRIs block presynaptic serotonin reuptake to raise synaptic 5-HT; low effort for severely demotivated patients but carry nausea/insomnia side effects and higher post-discontinuation relapse (4 marks).",
          "March et al. (2007) TADS trial showed 81% improvement for CBT alone, 81% for SSRIs alone, and 86% for combined therapy (4 marks)."
        ]
      },
      {
        "number": "03",
        "question": "Explain how Mowrer’s (1960) Two-Process Model accounts for both the acquisition and maintenance of phobias.",
        "marks": 6,
        "markScheme": [
          "Acquisition via classical conditioning: neutral stimulus paired with painful/frightening UCS becomes a CS eliciting conditioned fear (CR) (3 marks).",
          "Maintenance via operant conditioning: avoiding the phobic CS removes unpleasant anxiety (negative reinforcement), preventing extinction (3 marks)."
        ]
      },
      {
        "number": "04",
        "question": "Outline neural explanations of Obsessive-Compulsive Disorder (OCD) and explain how Exposure and Response Prevention (ERP) breaks the compulsive cycle.",
        "marks": 8,
        "markScheme": [
          "Hyperactive Orbitofrontal Cortex (OFC) sends persistent worry signals that an impaired Caudate Nucleus fails to suppress, looping through the Thalamus alongside low serotonin (4 marks).",
          "ERP exposes patients to obsession triggers while blocking the neutralising compulsion until anxiety naturally habituates, extinguishing negative reinforcement (4 marks)."
        ]
      }
    ]
  },
  {
    "id": "al-psy-pp-2023-p1",
    "specEra": "new-9-1",
    "year": "2023",
    "title": "AQA 7182 Paper 1: Introductory Topics in Psychology (7182/1)",
    "tier": "A-Level",
    "series": "June 2023",
    "paperCode": "7182/1",
    "durationMinutes": 120,
    "totalMarks": 96,
    "insertNote": "Covers Social Influence, Memory, Attachment & Psychopathology.",
    "sampleQuestions": [
      {
        "number": "01",
        "question": "Discuss the Working Memory Model. Refer to evidence from dual-task performance and clinical case studies in your answer.",
        "marks": 16,
        "markScheme": [
          "AO1 (6 marks): Central Executive, Phonological Loop (phonological store + articulatory control), Visuo-Spatial Sketchpad (visual cache + inner scribe), and Episodic Buffer (2000).",
          "AO3 (10 marks): Dual-task support (Baddeley et al., 1975), Patient KF double dissociation (Shallice & Warrington, 1970), vagueness of Central Executive, lack of LTM detail."
        ]
      },
      {
        "number": "02",
        "question": "Outline and evaluate situational explanations for obedience (proximity, location, uniform, agentic state, and legitimacy of authority).",
        "marks": 16,
        "markScheme": [
          "AO1 (6 marks): Milgram’s situational variations, shift from autonomous to agentic state, binding factors, and societal socialisation of legitimate authority.",
          "AO3 (10 marks): Milgram variation statistics (40%, 30%, 47.5%, 20%), Bickman (1974) field support, Orne & Holland internal validity critique, and dispositional Authoritarian Personality counterpoint."
        ]
      },
      {
        "number": "03",
        "question": "Evaluate the Cognitive Interview as a method for improving the accuracy of eyewitness testimony.",
        "marks": 8,
        "markScheme": [
          "Describes the 4 components: report everything, context reinstatement, reverse order, change perspective (4 marks).",
          "Köhnken et al. (1999) meta-analysis found 41% increase in correct details, though slight rise in inaccurate details and time-intensive police training required (4 marks)."
        ]
      },
      {
        "number": "04",
        "question": "Compare Systematic Desensitisation and Flooding as behavioural therapies for specific phobias.",
        "marks": 8,
        "markScheme": [
          "SD uses anxiety hierarchy, relaxation training, and gradual counterconditioning (reciprocal inhibition); gentle with low dropout (Gilroy et al., 2003) (4 marks).",
          "Flooding uses immediate inescapable exposure until physiological anxiety exhausts; cost-effective in 1–3 sessions but traumatic with higher attrition (4 marks)."
        ]
      }
    ]
  },
  {
    "id": "al-psy-pp-2023-p2",
    "specEra": "new-9-1",
    "year": "2023",
    "title": "AQA 7182 Paper 2: Psychology in Context (Approaches, Biopsychology & Methods)",
    "tier": "A-Level",
    "series": "June 2023",
    "paperCode": "7182/2",
    "durationMinutes": 120,
    "totalMarks": 96,
    "insertNote": "Includes Statistical Critical Values Table & Research Design Stimulus.",
    "sampleQuestions": [
      {
        "number": "01",
        "question": "Discuss Social Learning Theory, referring to Bandura’s Bobo Doll research and mediational processes.",
        "marks": 16,
        "markScheme": [
          "AO1 (6 marks): Observation, imitation, identification, vicarious reinforcement, and ARRM mediational processes (Attention, Retention, Reproduction, Motivation).",
          "AO3 (10 marks): Bandura et al. (1961/1965) controlled evidence, cultural/media utility vs lab artificiality (Cumberbatch, 1990), demand characteristics, and underestimating biological/hormonal factors in boys’ higher physical aggression."
        ]
      },
      {
        "number": "02",
        "question": "Describe and evaluate Sperry’s (1968) split-brain research into hemispheric lateralisation.",
        "marks": 12,
        "markScheme": [
          "11 commissurotomy patients tested with 0.1 s tachistoscope flashes to RVF (spoken aloud by left hemisphere) vs LVF (cannot be named, but identified by left hand via right hemisphere) (6 marks).",
          "High experimental control and landmark proof of left-hemisphere language dominance, but small clinical sample confounded by prior epilepsy severity and drug history (6 marks)."
        ]
      },
      {
        "number": "03",
        "question": "Compare fMRI, EEG, Event-Related Potentials (ERPs), and post-mortem examinations as methods of investigating the brain.",
        "marks": 12,
        "markScheme": [
          "fMRI: 1–2 mm spatial resolution via BOLD haemodynamic response, ~5 s temporal lag (3 marks).",
          "EEG & ERPs: ~1 ms temporal resolution (ERPs time-lock and average out background EEG noise), limited deep-brain spatial precision (5 marks).",
          "Post-mortem: detailed cellular/anatomical inspection (e.g., Broca’s Tan), but retrospective with no live cognitive tracking and post-mortem confounds (4 marks)."
        ]
      },
      {
        "number": "04",
        "question": "A researcher tests whether a mindfulness app reduces exam anxiety scores (ordinal scale) in the same group of 20 students before and after 4 weeks. Identify and justify the appropriate non-parametric inferential statistical test.",
        "marks": 4,
        "markScheme": [
          "Wilcoxon Signed-Ranks Test (or Sign Test) (1 mark).",
          "Justified by: test of difference (1 mark), related / repeated-measures design on the same 20 students (1 mark), and ordinal level data (1 mark)."
        ]
      }
    ]
  },
  {
    "id": "al-psy-pp-2022-p1",
    "specEra": "new-9-1",
    "year": "2022",
    "title": "CIE 9990 Paper 1: Core Studies in Psychology (9990/12)",
    "tier": "AS / A-Level",
    "series": "June 2022",
    "paperCode": "9990/12-22",
    "durationMinutes": 90,
    "totalMarks": 60,
    "insertNote": "Covers Biological, Cognitive, Learning, and Social Core Studies.",
    "sampleQuestions": [
      {
        "number": "1",
        "question": "From Dement & Kleitman (1957), describe two pieces of evidence supporting the relationship between REM sleep and dreaming.",
        "marks": 4,
        "markScheme": [
          "79.6% (152/191) of REM awakenings produced vivid dream recall versus only 6.9% (11/160) of NREM awakenings (2 marks).",
          "Participants distinguished 5 vs 15 minutes of REM sleep with 83% accuracy (92/111), and EOG eye-movement directions matched visual dream action (2 marks)."
        ]
      },
      {
        "number": "2",
        "question": "From Baron-Cohen et al. (2001), explain two improvements made to the Revised Reading the Mind in the Eyes Test over the original 1997 version.",
        "marks": 4,
        "markScheme": [
          "Increased from 25 to 36 items and expanded from 2 forced choices to 4 complex mental-state options, eliminating ceiling effects (2 marks).",
          "Balanced male/female eye photos and provided a vocabulary glossary so language ability did not confound Theory of Mind scores (2 marks)."
        ]
      },
      {
        "number": "3",
        "question": "From Saavedra & Silverman (2002), explain why the boy’s button phobia was conceptualised around disgust (evaluative learning) rather than pure fear.",
        "marks": 6,
        "markScheme": [
          "The boy rated buttons as gross/disgusting rather than physically dangerous after a bowl of buttons spilled on him at age 5 (2 marks).",
          "In vivo contingency management (Sessions 1–4) increased button handling but worsened subjective Feelings Thermometer ratings (2 marks).",
          "Disgust-targeted imagery exposure (Sessions 5–10) habituated evaluative disgust, reducing distress ratings to 0–3 at 6- and 12-month follow-ups (2 marks)."
        ]
      },
      {
        "number": "4",
        "question": "Discuss the strengths and weaknesses of conducting field experiments in social psychology, using Piliavin et al. (1969) as an example.",
        "marks": 10,
        "markScheme": [
          "Strengths: High ecological validity on the NYC express subway; 4,450 naïve commuters displayed authentic spontaneous helping without demand characteristics (5 marks).",
          "Weaknesses: Lack of control over extraneous variables (crowding, noise, uneven drunk vs cane trials) and ethical breaches (no informed consent, right to withdraw, or debriefing) (5 marks)."
        ]
      }
    ]
  },
  {
    "id": "al-psy-pp-2022-p2",
    "specEra": "new-9-1",
    "year": "2022",
    "title": "CIE 9990 Paper 2: Research Methods & Design (9990/22)",
    "tier": "AS / A-Level",
    "series": "June 2022",
    "paperCode": "9990/22-22",
    "durationMinutes": 90,
    "totalMarks": 60,
    "insertNote": "Includes Experimental Vignettes & Ethical Review Extracts.",
    "sampleQuestions": [
      {
        "number": "1",
        "question": "Compare random sampling, stratified sampling, and opportunity sampling on representativeness and practical feasibility.",
        "marks": 6,
        "markScheme": [
          "Random sampling gives every target-population member an equal chance (unbiased, requires complete sampling frame) (2 marks).",
          "Stratified sampling mirrors exact population subgroup proportions (most representative, time-consuming to stratify) (2 marks).",
          "Opportunity sampling recruits available willing people (fast and cheap, suffers from researcher selection bias and WEIRD samples) (2 marks)."
        ]
      },
      {
        "number": "2",
        "question": "Explain why a researcher might use open questions AND closed questions within the same psychological questionnaire.",
        "marks": 4,
        "markScheme": [
          "Closed questions (e.g., Likert scales) generate standardised quantitative data that is reliable and easy to analyse statistically (2 marks).",
          "Open questions allow respondents to elaborate in their own words, yielding rich qualitative insight and higher validity (2 marks)."
        ]
      },
      {
        "number": "3",
        "question": "Explain how test–retest reliability is assessed for a new psychometric personality questionnaire.",
        "marks": 4,
        "markScheme": [
          "Administer the same questionnaire to the same group of participants on two separate occasions (e.g., 2–4 weeks apart) (2 marks).",
          "Correlate the two sets of scores; a correlation coefficient of r ≥ +0.80 confirms high external test–retest reliability (2 marks)."
        ]
      },
      {
        "number": "4",
        "question": "Design a structured naturalistic observation to investigate whether people walk faster when alone than when in groups. Include behavioural categories, sampling method, and observer configuration.",
        "marks": 10,
        "markScheme": [
          "Clear operationalised measurement (e.g., time in seconds to cross a marked 20 m pavement strip alone vs in groups of 2+) (3 marks).",
          "Covert non-participant observation from an unobtrusive vantage point to prevent Hawthorne observer effects (3 marks).",
          "Event/time sampling protocol, two independent observers checking inter-observer reliability (r ≥ +0.80), and public-space privacy ethics (4 marks)."
        ]
      }
    ]
  },
  {
    "id": "al-psy-pp-2019-p1",
    "specEra": "old",
    "year": "2019",
    "title": "Legacy CIE 9990 / AQA Paper 1: Core Studies & Approaches (2019 Series)",
    "tier": "A-Level",
    "series": "June 2019 (Legacy Series)",
    "paperCode": "9990/11-19",
    "durationMinutes": 90,
    "totalMarks": 60,
    "insertNote": "Legacy Specification Archive Paper with Full Examiner Mark Scheme.",
    "sampleQuestions": [
      {
        "number": "1",
        "question": "Outline the procedure of Milgram’s (1963) obedience study, including the shock generator and the four standardised verbal prods.",
        "marks": 6,
        "markScheme": [
          "Rigged draw assigned participant as Teacher and confederate (Mr Wallace) as Learner strapped to chair in adjacent room; generator had 30 switches from 15 V to 450 V in 15 V steps (3 marks).",
          "Four escalating prods delivered by lab-coated Experimenter: (1) \"Please continue\", (2) \"The experiment requires that you continue\", (3) \"It is absolutely essential that you continue\", (4) \"You have no other choice, you must go on\" (3 marks)."
        ]
      },
      {
        "number": "2",
        "question": "Explain why Fagen et al. (2014) concluded that Secondary Positive Reinforcement (SPR) improves captive elephant welfare.",
        "marks": 4,
        "markScheme": [
          "Elephants participated voluntarily without chains, bullhooks (ankus), or aversive punishment, meeting the Refinement principle (2 marks).",
          "4 of 5 elephants (all 4 juveniles) mastered the 5-step veterinary TB trunk wash to ≥ 80% accuracy within 35 sessions (2 marks)."
        ]
      },
      {
        "number": "3",
        "question": "Contrast the behaviourist approach (Pavlov, Skinner) with the biological approach in explaining human behaviour.",
        "marks": 6,
        "markScheme": [
          "Behaviourism assumes tabula rasa (blank slate) where behaviour is environmentally determined by stimulus–response conditioning and reinforcement (3 marks).",
          "Biological approach attributes behaviour to polygenic inheritance, neurochemistry (dopamine/serotonin), neuroanatomy, and evolutionary adaptation (3 marks)."
        ]
      },
      {
        "number": "4",
        "question": "Evaluate the use of children in psychological research with reference to Bandura et al. (1961) and Pozzulo et al. (2010).",
        "marks": 8,
        "markScheme": [
          "Theoretical necessity: reveals developmental differences in social imitation (Bandura) and target-absent lineup false positives (Pozzulo) that adult samples cannot show (4 marks).",
          "Ethical & methodological challenges: requires parental proxy consent + child assent, heightened vulnerability to distress/aggression modelling, and greater susceptibility to social demand characteristics (4 marks)."
        ]
      }
    ]
  },
  {
    "id": "al-psy-pp-2019-p2",
    "specEra": "old",
    "year": "2019",
    "title": "Legacy CIE 9990 / AQA Paper 2: Clinical & Applied Psychology (2019 Series)",
    "tier": "A-Level",
    "series": "June 2019 (Legacy Series)",
    "paperCode": "9990/21-19",
    "durationMinutes": 90,
    "totalMarks": 60,
    "insertNote": "Legacy Specification Archive Paper — Clinical & Research Methods.",
    "sampleQuestions": [
      {
        "number": "1",
        "question": "Describe two diagnostic issues that reduce the reliability and validity of diagnosing schizophrenia.",
        "marks": 4,
        "markScheme": [
          "Symptom overlap with bipolar disorder / depression and high co-morbidity (~50% depression, ~47% substance abuse, Buckley et al., 2009) blur diagnostic boundaries (2 marks).",
          "Low inter-rater reliability across DSM and ICD systems (Cheniaux et al., 2009) and clinician cultural bias over-diagnosing Afro-Caribbean patients (2 marks)."
        ]
      },
      {
        "number": "2",
        "question": "Explain how Ellis’s Rational Emotive Behaviour Therapy (REBT) uses empirical and logical disputing to treat depression.",
        "marks": 4,
        "markScheme": [
          "Empirical disputing challenges the client to provide objective factual evidence supporting their irrational \"musturbatory\" belief (2 marks).",
          "Logical disputing questions whether a catastrophic conclusion logically follows from an unfortunate activating event (2 marks)."
        ]
      },
      {
        "number": "3",
        "question": "Outline the procedure and findings of Loftus & Palmer (1974) Experiment 2 (the broken glass study).",
        "marks": 6,
        "markScheme": [
          "150 students watched a crash clip, estimated speed with \"smashed\", \"hit\", or no question, and returned 1 week later to answer \"Did you see any broken glass?\" (none existed) (3 marks).",
          "32% of \"smashed\" group falsely reported broken glass vs 14% (\"hit\") and 12% (control), proving leading post-event language alters the underlying memory trace (3 marks)."
        ]
      },
      {
        "number": "4",
        "question": "Discuss the nature versus nurture debate across the Cognitive, Biological, Learning, and Social approaches in psychology.",
        "marks": 10,
        "markScheme": [
          "Nature pole: Biological approach (genetics, neuroanatomy, innate REM cycles) and innate cognitive architecture (Theory of Mind deficit in Baron-Cohen) (4 marks).",
          "Nurture pole: Learning approach (Pavlovian/Skinnerian conditioning, Bandura role modelling, Saavedra button trauma) and social situational forces (Milgram, Piliavin) (4 marks).",
          "Modern interactionist synthesis: Neuroplasticity (Hölzel MBSR reshaping grey matter), oxytocin × trait empathy (Perry), and diathesis–stress in clinical disorders (2 marks)."
        ]
      }
    ]
  }
];

export const ALEVEL_PSYCHOLOGY_KEY_TERMS: KeyTermEntry[] = [
  {
    "id": "al-psy-kt-1",
    "term": "Agentic state",
    "definition": "Mental state in which people see themselves as instruments carrying out an authority figure’s commands rather than autonomous decision-makers.",
    "topicNumber": 5,
    "subtopicId": "al-psy-5-1",
    "subtopicCode": "5.1"
  },
  {
    "id": "al-psy-kt-2",
    "term": "Anhedonia",
    "definition": "Core symptom of depression involving a marked loss of ability to feel pleasure in formerly enjoyable activities.",
    "topicNumber": 6,
    "subtopicId": "al-psy-6-2",
    "subtopicCode": "6.2"
  },
  {
    "id": "al-psy-kt-3",
    "term": "Arousal–Cost–Reward model",
    "definition": "Piliavin’s bystander framework proposing helpers weigh physiological distress against the costs and rewards of intervening versus fleeing.",
    "topicNumber": 5,
    "subtopicId": "al-psy-5-3",
    "subtopicCode": "5.3"
  },
  {
    "id": "al-psy-kt-4",
    "term": "Avolition",
    "definition": "Negative symptom of schizophrenia involving severe apathy and inability to initiate goal-directed behaviour.",
    "topicNumber": 6,
    "subtopicId": "al-psy-6-1",
    "subtopicCode": "6.1"
  },
  {
    "id": "al-psy-kt-5",
    "term": "Central Executive",
    "definition": "Modality-free attentional controller of Working Memory that allocates resources to slave systems without storing memories itself.",
    "topicNumber": 2,
    "subtopicId": "al-psy-2-1",
    "subtopicCode": "2.1"
  },
  {
    "id": "al-psy-kt-6",
    "term": "Cognitive Interview",
    "definition": "Four-technique police interviewing protocol (context reinstatement, report everything, reverse order, change perspective) that boosts witness recall.",
    "topicNumber": 2,
    "subtopicId": "al-psy-2-3",
    "subtopicCode": "2.3"
  },
  {
    "id": "al-psy-kt-7",
    "term": "Counterbalancing",
    "definition": "Varying condition order across participants (e.g., AB/BA) so practice and fatigue balance out in repeated measures designs.",
    "topicNumber": 1,
    "subtopicId": "al-psy-1-1",
    "subtopicCode": "1.1"
  },
  {
    "id": "al-psy-kt-8",
    "term": "Diathesis–stress model",
    "definition": "Interactionist model explaining mental disorders as the joint outcome of underlying vulnerability (genetic/neurological) and environmental stress.",
    "topicNumber": 6,
    "subtopicId": "al-psy-6-1",
    "subtopicCode": "6.1"
  },
  {
    "id": "al-psy-kt-9",
    "term": "Ecological validity",
    "definition": "The extent to which research findings generalise to natural everyday real-world settings.",
    "topicNumber": 1,
    "subtopicId": "al-psy-1-1",
    "subtopicCode": "1.1"
  },
  {
    "id": "al-psy-kt-10",
    "term": "Exposure & Response Prevention (ERP)",
    "definition": "Gold-standard psychological therapy for OCD confronting obsessive triggers while preventing neutralising compulsive rituals.",
    "topicNumber": 6,
    "subtopicId": "al-psy-6-3",
    "subtopicCode": "6.3"
  },
  {
    "id": "al-psy-kt-11",
    "term": "Inter-observer reliability",
    "definition": "Degree of consistency between two or more independent observers scoring the same behaviour (target r ≥ +0.80).",
    "topicNumber": 1,
    "subtopicId": "al-psy-1-2",
    "subtopicCode": "1.2"
  },
  {
    "id": "al-psy-kt-12",
    "term": "Mediational processes",
    "definition": "Internal cognitive steps (Attention, Retention, Reproduction, Motivation) operating between observation and imitation in SLT.",
    "topicNumber": 4,
    "subtopicId": "al-psy-4-2",
    "subtopicCode": "4.2"
  },
  {
    "id": "al-psy-kt-13",
    "term": "Metarepresentation",
    "definition": "Cognitive capacity to monitor one’s own thoughts as self-generated; its breakdown is linked to auditory hallucinations in schizophrenia.",
    "topicNumber": 6,
    "subtopicId": "al-psy-6-1",
    "subtopicCode": "6.1"
  },
  {
    "id": "al-psy-kt-14",
    "term": "Negative reinforcement",
    "definition": "Strengthening a behaviour by removing or avoiding an aversive stimulus (e.g., escaping fear maintains phobias).",
    "topicNumber": 4,
    "subtopicId": "al-psy-4-1",
    "subtopicCode": "4.1"
  },
  {
    "id": "al-psy-kt-15",
    "term": "Negative Triad",
    "definition": "Beck’s cognitive model of depression linking dysfunctional negative beliefs about the self, the world, and the future.",
    "topicNumber": 6,
    "subtopicId": "al-psy-6-2",
    "subtopicCode": "6.2"
  },
  {
    "id": "al-psy-kt-16",
    "term": "Neuroplasticity",
    "definition": "The brain’s lifelong capacity to reorganise synapses and increase regional grey matter in response to learning or practice.",
    "topicNumber": 3,
    "subtopicId": "al-psy-3-2",
    "subtopicCode": "3.2"
  },
  {
    "id": "al-psy-kt-17",
    "term": "Normative Social Influence (NSI)",
    "definition": "Conforming to group behaviour to gain social acceptance and avoid ridicule, typically resulting in compliance.",
    "topicNumber": 5,
    "subtopicId": "al-psy-5-2",
    "subtopicCode": "5.2"
  },
  {
    "id": "al-psy-kt-18",
    "term": "Operationalisation",
    "definition": "Specifying variables in concrete, measurable terms so studies can be tested objectively and replicated.",
    "topicNumber": 1,
    "subtopicId": "al-psy-1-1",
    "subtopicCode": "1.1"
  },
  {
    "id": "al-psy-kt-19",
    "term": "Reciprocal inhibition",
    "definition": "Therapeutic principle in systematic desensitisation stating that deep relaxation and anxiety cannot coexist simultaneously.",
    "topicNumber": 6,
    "subtopicId": "al-psy-6-3",
    "subtopicCode": "6.3"
  },
  {
    "id": "al-psy-kt-20",
    "term": "REM sleep",
    "definition": "Sleep stage marked by rapid eye movements, fast desynchronised EEG waves, muscle atonia, and high dream recall.",
    "topicNumber": 3,
    "subtopicId": "al-psy-3-1",
    "subtopicCode": "3.1"
  },
  {
    "id": "al-psy-kt-21",
    "term": "Secondary Positive Reinforcement",
    "definition": "Animal and behavioural training pairing a learned marker (e.g., whistle) with a primary reward (food) to shape complex skills.",
    "topicNumber": 4,
    "subtopicId": "al-psy-4-3",
    "subtopicCode": "4.3"
  },
  {
    "id": "al-psy-kt-22",
    "term": "Social salience hypothesis",
    "definition": "Model proposing oxytocin amplifies attention to social cues based on individual empathy rather than uniformly boosting closeness.",
    "topicNumber": 5,
    "subtopicId": "al-psy-5-3",
    "subtopicCode": "5.3"
  },
  {
    "id": "al-psy-kt-23",
    "term": "Synaptic summation",
    "definition": "Integration of excitatory (EPSP) and inhibitory (IPSP) postsynaptic potentials determining whether a neurone fires.",
    "topicNumber": 3,
    "subtopicId": "al-psy-3-3",
    "subtopicCode": "3.3"
  },
  {
    "id": "al-psy-kt-24",
    "term": "Theory of Mind (ToM)",
    "definition": "Cognitive capacity to infer and understand the mental states, beliefs, and emotions of other people.",
    "topicNumber": 2,
    "subtopicId": "al-psy-2-2",
    "subtopicCode": "2.2"
  },
  {
    "id": "al-psy-kt-25",
    "term": "Type I error",
    "definition": "False positive statistical error: rejecting a true null hypothesis (more likely when significance threshold is too lenient).",
    "topicNumber": 1,
    "subtopicId": "al-psy-1-3",
    "subtopicCode": "1.3"
  }
];
