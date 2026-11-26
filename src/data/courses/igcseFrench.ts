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

export const IGCSE_FRENCH_TOPICS: TopicDefinition[] = [
  {
    number: 1,
    title: 'Everyday Activities & School',
    subtopics: [
      {
        id: 'igfr-1-1',
        code: '1.1',
        slug: '1.1-daily-routine-home-life-school-subjects',
        title: 'Daily Routine, Home Life & School Subjects',
        readingMinutes: 10,
        hasDeepContent: true,
      },
      {
        id: 'igfr-1-2',
        code: '1.2',
        slug: '1.2-food-healthy-living-eating-out-french',
        title: 'Food, Healthy Living & Eating Out in French',
        readingMinutes: 10,
        hasDeepContent: true,
      },
    ],
  },
  {
    number: 2,
    title: 'Personal & Social Life',
    subtopics: [
      {
        id: 'igfr-2-1',
        code: '2.1',
        slug: '2.1-family-friendships-hobbies-technology',
        title: 'Family, Friendships, Hobbies & Technology',
        readingMinutes: 10,
        hasDeepContent: true,
      },
      {
        id: 'igfr-2-2',
        code: '2.2',
        slug: '2.2-holidays-accommodation-past-travel-narratives',
        title: 'Holidays, Accommodation & Past Travel Narratives',
        readingMinutes: 10,
        hasDeepContent: true,
      },
    ],
  },
  {
    number: 3,
    title: 'The World Around Us',
    subtopics: [
      {
        id: 'igfr-3-1',
        code: '3.1',
        slug: '3.1-home-town-local-area-transport-directions',
        title: 'Home Town, Local Area, Transport & Directions',
        readingMinutes: 10,
        hasDeepContent: true,
      },
      {
        id: 'igfr-3-2',
        code: '3.2',
        slug: '3.2-environment-global-issues-future-careers',
        title: 'Environment, Global Issues & Future Careers',
        readingMinutes: 10,
        hasDeepContent: true,
      },
    ],
  },
  {
    number: 4,
    title: 'French Grammar, Tenses & Exam Skills',
    subtopics: [
      {
        id: 'igfr-4-1',
        code: '4.1',
        slug: '4.1-key-tenses-present-passe-compose-imparfait-future',
        title: 'Key Tenses: Present, Passé Composé, Imparfait & Future',
        readingMinutes: 11,
        hasDeepContent: true,
      },
      {
        id: 'igfr-4-2',
        code: '4.2',
        slug: '4.2-reading-listening-writing-speaking-role-play',
        title: 'Reading, Listening, Extended Writing & Speaking Role-Play',
        readingMinutes: 11,
        hasDeepContent: true,
      },
    ],
  },
];

export const IGCSE_FRENCH_NOTES: Record<string, NoteLesson> = {
  'igfr-1-1': {
    subtopicId: 'igfr-1-1',
    subtopicCode: '1.1',
    subtopicTitle: 'Daily Routine, Home Life & School Subjects',
    readingMinutes: 10,
    videoTitle: 'Daily Routine, Home Life & School Subjects in French',
    youtubeId: 'S2EClHJYX-k',
    videoChannel: 'Learn French with Alexa',
    videoDuration: '8:10',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE French (0520) Topic Area A — Everyday Activities',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Reflexive Verbs & Telling Time for Daily Routine', cardId: 'igfr-1-1-c1' },
      { time: '2:40', seconds: 160, label: 'Home Life, Rooms & Household Chores', cardId: 'igfr-1-1-c2' },
      { time: '5:20', seconds: 320, label: 'School Subjects, Rules, Uniform & Opinions', cardId: 'igfr-1-1-c3' },
    ],
    cards: [
      {
        id: 'igfr-1-1-c1',
        title: 'Daily Routine: Reflexive Verbs & Telling the Time',
        summary: 'Most French daily-routine verbs are reflexive (se réveiller, se lever, se coucher) — pair the matching pronoun (me/te/se/nous/vous/se) with precise clock times.',
        bullets: [
          '**Reflexive pronouns** - `je me`, `tu te`, `il/elle/on se`, `nous nous`, `vous vous`, `ils/elles se`. Essential routine verbs: `se réveiller` (wake up), `se lever` (get up), `se doucher` (shower), `s’habiller` (get dressed), `se brosser les dents` (brush teeth), `se coucher` (go to bed).',
          '**Telling time** - use `à` for "at": `à sept heures` (at 7:00), `à sept heures et quart` (7:15), `à sept heures et demie` (7:30), `à huit heures moins le quart` (7:45), `à midi / à minuit` (noon / midnight).',
          '**Sequencing connectives** - `d’abord` (first), `ensuite / puis` (then), `après avoir pris mon petit déjeuner` (after having breakfast), `finalement` (finally).',
        ],
        subsections: [
          {
            heading: 'Negative & Past-Tense Reflexive Trap',
            bullets: [
              '**Negatives wrap pronoun + verb** - `Je ne me lève pas tôt` (I don’t get up early).',
              '**Passé composé ALWAYS takes `être`** - `Je me suis réveillé(e) à six heures` (I woke up at 6:00).',
            ],
            exampleHeading: 'Model Cambridge 0520 daily-routine sentences',
            examples: [
              '« En semaine, je me réveille à six heures et demie, puis je me douche et je m’habille vite. » (On weekdays, I wake up at 6:30, then I shower and get dressed quickly.)',
              '« Hier soir, je me suis couché(e) tard parce que j’avais beaucoup de devoirs. » (Last night, I went to bed late because I had lots of homework.)',
            ],
          },
        ],
        glossaryPills: [
          { term: 'verbe pronominal (reflexive verb)', definition: 'A verb whose subject performs the action upon itself (e.g. se laver — to wash oneself), requiring a reflexive pronoun and using être in the passé composé.' },
          { term: 'en semaine', definition: 'Idiomatic phrase meaning "on weekdays / during the week", contrasting neatly with le week-end.' },
        ],
      },
      {
        id: 'igfr-1-1-c2',
        title: 'Home Life, Rooms & Helping Around the House',
        summary: 'Describe your home with il y a + rooms/adjectives and earn strong communicative marks by discussing chores and who does what.',
        bullets: [
          '**Describing your house** - `une maison individuelle` (detached house), `un appartement moderne` (modern flat), `au rez-de-chaussée` (ground floor), `au premier étage` (first floor), `la cuisine`, `le salon`, `la salle de bains`, `ma chambre`.',
          '**Household chores (`les tâches ménagères`)** - `faire la vaisselle` (wash the dishes), `ranger ma chambre` (tidy my room), `passer l’aspirateur` (vacuum), `mettre la table` (set the table), `sortir les poubelles` (take out the bins), `tondre la pelouse` (mow the lawn).',
          '**Pocket money link** - `Pour gagner mon argent de poche, j’aide mes parents à la maison.` (To earn my pocket money, I help my parents at home.)',
        ],
        subsections: [
          {
            heading: 'Upgrading Room Descriptions with Prepositions',
            bullets: [
              '**Use `où` (where) & prepositions** - `en face de`, `à côté de`, `donne sur le jardin` (overlooks the garden) to elevate simple lists into Band-1 prose.',
            ],
            exampleHeading: 'Model home & chores sentences',
            examples: [
              '« J’habite dans une maison jumelée en banlieue ; ma chambre donne sur le jardin et c’est ma pièce préférée. » (I live in a semi-detached house in the suburbs; my room overlooks the garden and it is my favourite room.)',
              '« Tous les samedis, je range ma chambre et je passe l’aspirateur, même si je trouve cela ennuyeux. » (Every Saturday, I tidy my room and vacuum, even though I find that boring.)',
            ],
          },
        ],
        glossaryPills: [
          { term: 'les tâches ménagères', definition: 'Household chores such as washing up (faire la vaisselle), tidying (ranger), or vacuuming (passer l’aspirateur).' },
        ],
      },
      {
        id: 'igfr-1-1-c3',
        title: 'School Subjects, Rules, Uniform & Justified Opinions',
        summary: 'Combine school vocabulary (les matières, l’uniforme) with modal expressions (il faut / il est interdit de) and justified opinions using car, parce que, or puisque.',
        bullets: [
          '**Subjects & opinions** - `les maths`, `les sciences`, `l’histoire`, `la géographie`, `l’informatique`, `le français`, `l’EPS (le sport)`. Always justify: `J’adore la biologie car le prof est passionnant et la matière est utile pour mon avenir.`',
          '**School rules (`le règlement scolaire`)** - `Il faut + infinitive` (you must), `On doit + infinitive` (one must), `Il est interdit de + infinitive` (it is forbidden to), `On n’a pas le droit de + infinitive` (you are not allowed to).',
          '**Uniform debate** - `L’uniforme est pratique et réduit les différences sociales, cependant je le trouve inconfortable et démodé.`',
        ],
        subsections: [
          {
            heading: 'School System & False Friends Watch-Out',
            bullets: [
              '**Key French school terms** - `le collège` (secondary school ages 11–15), `le lycée` (sixth form / high school ages 15–18), `la cantine`, `la cour de récréation`, `les cours commencent à huit heures`.',
            ],
            exampleHeading: 'Model school rules & balanced opinion sentences',
            examples: [
              '« Dans mon collège, il est strictement interdit d’utiliser son portable en classe, ce que je trouve juste pour mieux se concentrer. » (In my school, it is strictly forbidden to use one’s phone in class, which I find fair for concentrating better.)',
              '« Bien que les maths soient difficiles, je travaille dur afin de réussir mes examens. » (Although maths is difficult, I work hard in order to pass my exams.)',
            ],
          },
        ],
        glossaryPills: [
          { term: 'le règlement scolaire', definition: 'The school code of conduct/rules, commonly paired with il faut and il est interdit de.' },
        ],
        memoryAid: 'Reflexive Past = ÊTRE + Agreement! Always double-check "je me suis levé(e)" (NEVER "j’ai me levé" ❌)!',
        commonMistake: 'NEVER translate "I go to college (university)" as "je vais au collège" — in French, le collège is secondary school (ages 11–15), whereas university is l’université (la fac)!',
      },
    ],
    keyTerms: [
      { term: 'Se réveiller / Se lever', definition: 'Reflexive verbs meaning to wake up / to get up.' },
      { term: 'Les tâches ménagères', definition: 'Household chores done to help at home.' },
      { term: 'Il est interdit de', definition: 'Impersonal rule structure meaning "it is forbidden to" (+ infinitive).' },
      { term: 'Le collège / Le lycée', definition: 'French lower secondary school (11–15) and upper secondary school (15–18).' },
    ],
    checklistPoints: [
      'Conjugate reflexive daily-routine verbs cleanly in present and passé composé with clock times',
      'Describe your house, favourite room, and weekly household chores using connectives',
      'Give justified opinions on school subjects, uniform, and school rules using modal structures',
    ],
  },

  'igfr-1-2': {
    subtopicId: 'igfr-1-2',
    subtopicCode: '1.2',
    subtopicTitle: 'Food, Healthy Living & Eating Out in French',
    readingMinutes: 10,
    videoTitle: 'Food, Healthy Living & Restaurant French (Partitive Articles)',
    youtubeId: 'fZLDYHM5_ak',
    videoChannel: 'Learn French with Alexa',
    videoDuration: '8:25',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE French (0520) Topic Area A — Food, Health & Eating Out',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Partitive Articles (du/de la/de l’/des) & Negative "de"', cardId: 'igfr-1-2-c1' },
      { time: '2:45', seconds: 165, label: 'Ordering in a Restaurant & Handling Complaints', cardId: 'igfr-1-2-c2' },
      { time: '5:30', seconds: 330, label: 'Healthy Lifestyle, Fitness & Avoir Mal à', cardId: 'igfr-1-2-c3' },
    ],
    cards: [
      {
        id: 'igfr-1-2-c1',
        title: 'Partitive Articles ("Some") & Meals of the Day',
        summary: 'Use du, de la, de l’, or des for unspecified quantities of food ("some"), switching strictly to de / d’ after negatives and expressions of quantity.',
        bullets: [
          '**The 4 partitive articles** - masculine singular: `du` (`du pain`, `du fromage`); feminine singular: `de la` (`de la viande`, `de la confiture`); before vowel/silent h: `de l’` (`de l’eau`, `de l’huile`); plural: `des` (`des légumes`, `des céréales`).',
          '**Golden `de` / `d’` reduction rule** - after **negatives** (`Je ne mange pas de viande`, `Je ne bois jamais d’alcool`) AND **quantities** (`beaucoup de fruits`, `un kilo de pommes`, `un verre d’eau`, `trop de sucre`), `du / de la / des` ALWAYS shrink to **`de` / `d’`**!',
          '**Opinion verb exception** - with `aimer, adorer, préférer, détester`, ALWAYS use the **definite article** (`le, la, l’, les`): `J’aime le chocolat` (general preference), NOT `J’aime du chocolat` ❌.',
        ],
        subsections: [
          {
            heading: 'Four French Meals (`Les Repas`)',
            bullets: [
              '**Daily meals** - `le petit déjeuner` (breakfast), `le déjeuner` (lunch), `le goûter` (afternoon snack), `le dîner` (dinner). Use `prendre` (`Je prends du thé`) or `boire` (`Je bois du jus d’orange`).',
            ],
            exampleHeading: 'Worked contrast: Partitive vs Negative vs Preference',
            examples: [
              'Affirmative partitive: « Au petit déjeuner, je mange du pain grillé avec de la confiture et je bois de l’eau. » (At breakfast, I eat toast with jam and I drink water.)',
              'Negative & preference: « Je déteste les escargots et je ne mange jamais de viande rouge parce que je suis végétarien(ne). » (I hate snails and I never eat red meat because I am vegetarian.)',
            ],
          },
        ],
        glossaryPills: [
          { term: 'article partitif', definition: 'French articles (du, de la, de l’, des) expressing an unspecified amount ("some" / "any") of an uncountable or plural food item.' },
          { term: 'le goûter', definition: 'Traditional French late-afternoon snack (around 4 pm), often bread with chocolate or fruit.' },
        ],
      },
      {
        id: 'igfr-1-2-c2',
        title: 'Eating Out: Ordering Politely & Resolving Restaurant Problems',
        summary: 'Paper 3 Speaking Role-Plays frequently take place in a café or restaurant — master polite conditional requests (je voudrais) and polite complaint phrases.',
        bullets: [
          '**Polite ordering** - `Je voudrais réserver une table pour quatre personnes`, `Comme entrée, je vais prendre la soupe à l’oignon`, `Comme plat principal, le poulet rôti`, `Comme dessert, une tarte aux pommes`, `L’addition, s’il vous plaît.`',
          '**Waiter prompts you must recognise** - `Vous avez choisi ?` (Have you chosen?), `Et comme boisson ?` (And to drink?), `Tout s’est bien passé ?` (Was everything okay?), `Vous payez par carte ou en espèces ?` (Card or cash?).',
          '**Making a polite complaint (Role-Play `!` favourite!)** - `Excusez-moi, ma soupe est froide` (My soup is cold), `Il manque une fourchette` (A fork is missing), `Ce n’est pas ce que j’ai commandé` (This isn’t what I ordered), `Je suis allergique aux noix` (I’m allergic to nuts).',
        ],
        subsections: [
          {
            heading: 'Role-Play Ready Mini-Dialogue',
            bullets: [
              '**Keep answers concise, polite (`vous`), and natural** - always include `s’il vous plaît` and `merci beaucoup`.',
            ],
            exampleHeading: 'Model café/restaurant exchanges',
            examples: [
              '« Bonjour monsieur, je voudrais un jus de pomme et un croque-monsieur, s’il vous plaît. C’est combien ? » (Hello sir, I would like an apple juice and a toasted ham-and-cheese sandwich, please. How much is it?)',
              '« Pardon madame, le plat est trop salé et mon verre est sale ; pourriez-vous le changer ? » (Excuse me madam, the dish is too salty and my glass is dirty; could you change it?)',
            ],
          },
        ],
        glossaryPills: [
          { term: 'l’addition', definition: 'The bill/check at a French café or restaurant ("L’addition, s’il vous plaît").' },
        ],
      },
      {
        id: 'igfr-1-2-c3',
        title: 'Healthy Living, Fitness & Expressing Pain (`Avoir mal à`)',
        summary: 'Score top marks on health topics by contrasting balanced habits with bad habits, giving advice (il faudrait / on devrait), and using avoir mal + au/à la/à l’/aux.',
        bullets: [
          '**Healthy habits (`une vie saine`)** - `manger équilibré` (eat a balanced diet), `cinq fruits et légumes par jour`, `boire beaucoup d’eau`, `faire de l’exercice régulièrement`, `dormir huit heures par nuit`, `éviter la restauration rapide (le fast-food)`.',
          '**Unhealthy habits & advice** - `fumer est dangereux pour les poumons` (smoking harms the lungs), `Il faudrait réduire le stress et arrêter de manger trop de matières grasses.`',
          '**Expressing pain (`avoir mal à`)** - remember **`à` contractions**: masculine `au` (`J’ai mal au dos / au ventre`), feminine `à la` (`J’ai mal à la tête / à la gorge`), vowel `à l’` (`J’ai mal à l’estomac`), plural `aux` (`J’ai mal aux dents / aux pieds`).',
        ],
        subsections: [
          {
            heading: 'Pharmacy & Doctor Vocabulary',
            bullets: [
              '**Key phrases** - `Je me sens mal` (I feel unwell), `J’ai de la fièvre` (I have a fever), `Je tousse depuis trois jours` (I’ve been coughing for 3 days), `Prenez ces comprimés deux fois par jour` (Take these tablets twice daily).',
            ],
            exampleHeading: 'Model healthy-lifestyle & advice sentences',
            examples: [
              '« Pour rester en forme, j’essaie de faire de la natation trois fois par semaine et j’évite les boissons gazeuses. » (To stay fit, I try to swim three times a week and I avoid fizzy drinks.)',
              '« Avant, je mangeais trop de sucreries, mais maintenant je préfère les plats faits maison. » (Before, I used to eat too many sweets, but now I prefer home-cooked dishes.)',
            ],
          },
        ],
        glossaryPills: [
          { term: 'avoir mal à', definition: 'French idiom using avoir (NOT être) to say something hurts, contracting à with gender/number (au, à la, à l’, aux).' },
        ],
        memoryAid: 'Partitives: Positive = du/de la/de l’/des; Negative or Quantity (beaucoup/trop/peu) = ALWAYS plain DE/D’!',
        commonMistake: 'NEVER write "Je ne mange pas du fromage" ❌ or "beaucoup des fruits" ❌ — negatives and quantity words ALWAYS collapse du/de la/des into plain DE ("pas de fromage", "beaucoup de fruits")!',
      },
    ],
    keyTerms: [
      { term: 'Article partitif', definition: 'du / de la / de l’ / des used for unspecified quantities ("some"), reducing to de/d’ in negatives.' },
      { term: 'L’addition', definition: 'The restaurant bill.' },
      { term: 'Manger équilibré', definition: 'To eat a balanced, nutritious diet.' },
      { term: 'Avoir mal à', definition: 'Idiomatic expression for aches and pains (J’ai mal à la tête).' },
    ],
    checklistPoints: [
      'Apply du/de la/de l’/des accurately and reduce them to de/d’ after negatives and quantities',
      'Order a three-course meal, ask prices, and handle a polite complaint in a restaurant role-play',
      'Discuss healthy vs unhealthy lifestyles and use avoir mal au/à la/à l’/aux cleanly',
    ],
  },

  'igfr-2-1': {
    subtopicId: 'igfr-2-1',
    subtopicCode: '2.1',
    subtopicTitle: 'Family, Friendships, Hobbies & Technology',
    readingMinutes: 10,
    videoTitle: 'Family, Friends, Hobbies & Technology in French',
    youtubeId: 'bg4XDq1_j4s',
    videoChannel: 'Learn French with Alexa',
    videoDuration: '8:30',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE French (0520) Topic Area B — Personal & Social Life',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Family Descriptions, Adjective Agreement & Relationships', cardId: 'igfr-2-1-c1' },
      { time: '2:50', seconds: 170, label: 'Free Time, Sports (jouer à/de vs faire de) & Music', cardId: 'igfr-2-1-c2' },
      { time: '5:35', seconds: 335, label: 'Technology, Social Media & Balanced Pros/Cons', cardId: 'igfr-2-1-c3' },
    ],
    cards: [
      {
        id: 'igfr-2-1-c1',
        title: 'Family, Relationships & Adjective Agreement (BAGS Rule)',
        summary: 'Describe personality and appearance accurately with gender/number adjective agreement and reflexive relationship verbs (s’entendre bien avec, se disputer).',
        bullets: [
          '**Relationship verbs** - `je m’entends bien avec ma sœur` (I get on well with my sister), `je me dispute rarement avec mes parents` (I rarely argue with my parents), `il/elle me fait rire` (makes me laugh), `on peut compter sur lui/elle` (you can count on him/her).',
          '**Adjective agreement** - adjectives match the noun’s gender & number: `généreux → généreuse`, `sportif → sportive`, `gentil → gentille`, `travailleur → travailleuse`, `bavard → bavarde`, `drôle` (invariable for gender).',
          '**Adjective placement (BAGS rule)** - most adjectives go **AFTER** the noun (`une fille intelligente`, `des yeux bleus`), EXCEPT **B**eauty (`beau/joli`), **A**ge (`jeune/vieux/nouveau`), **G**oodness (`bon/mauvais/gentil`), and **S**ize (`grand/petit/gros`), which go **BEFORE** (`un grand frère`).',
        ],
        subsections: [
          {
            heading: 'What Makes a Good Friend? (Common Speaking/Writing Prompt)',
            bullets: [
              '**High-band traits** - `loyal(e)`, `compréhensif/compréhensive` (understanding), `honnête`, `digne de confiance` (trustworthy), `qui garde mes secrets` (who keeps my secrets).',
            ],
            exampleHeading: 'Model family & friendship sentences',
            examples: [
              '« Je m’entends très bien avec mon frère aîné parce qu’il est patient, généreux et nous partageons les mêmes passions. » (I get on very well with my older brother because he is patient, generous and we share the same passions.)',
              '« Un vrai ami doit être sincère et soutenir ses proches dans les moments difficiles. » (A true friend must be sincere and support their close ones in difficult times.)',
            ],
          },
        ],
        glossaryPills: [
          { term: 's’entendre bien avec', definition: 'Reflexive verb phrase meaning "to get along well with someone".' },
          { term: 'BAGS adjectives', definition: 'Categories of French adjectives placed BEFORE the noun: Beauty, Age, Goodness, and Size.' },
        ],
      },
      {
        id: 'igfr-2-1-c2',
        title: 'Hobbies, Sports (`Jouer à / de` vs `Faire de`) & Frequency',
        summary: 'Examiners check closely whether you pair sports with jouer à (ball/team games), instruments with jouer de, and individual activities with faire de.',
        bullets: [
          '**`Jouer à` (sports/games with rules/ball)** - `je joue au foot`, `au tennis`, `à la pétanque`, `aux échecs` (chess), `aux jeux vidéo`.',
          '**`Jouer de` (musical instruments)** - `je joue du piano`, `de la guitare`, `de l’accordéon`, `de la batterie` (drums).',
          '**`Faire de` (individual sports & hobbies)** - `je fais du vélo` (cycling), `de la natation` (swimming), `de l’équitation` (horse riding), `de l’escalade` (climbing), `des randonnées` (hiking). Remember negative `de`: `Je ne fais pas de ski.`',
          '**Frequency & `depuis`** - `deux fois par semaine`, `de temps en temps`, `Je joue du violon depuis cinq ans` (**present tense + `depuis`** = "have been playing for 5 years"!).',
        ],
        subsections: [
          {
            heading: 'Mastering `Depuis` + Present Tense',
            bullets: [
              '**Major grammar upgrade** - English says "I have been swimming for 4 years", while French uses **PRESENT TENSE + `depuis`**: `Je fais de la natation depuis quatre ans.`',
            ],
            exampleHeading: 'Model hobbies & free-time sentences',
            examples: [
              '« Pendant mon temps libre, je fais de l’athlétisme et je joue de la guitare depuis trois ans, ce qui me détend énormément. » (In my free time, I do athletics and I have been playing guitar for three years, which relaxes me enormously.)',
              '« Le week-end dernier, je suis allé(e) au cinéma avec mes amis pour voir une comédie passionnante. » (Last weekend, I went to the cinema with my friends to see an exciting comedy.)',
            ],
          },
        ],
        glossaryPills: [
          { term: 'depuis + présent', definition: 'French tense construction expressing an ongoing action that started in the past and continues now ("for / since").' },
        ],
      },
      {
        id: 'igfr-2-1-c3',
        title: 'Technology, Social Media & Weighing Pros and Cons',
        summary: 'Demonstrate mature IGCSE writing by contrasting the benefits and dangers of smartphones and social networks using d’un côté... d’un autre côté... and pourtant.',
        bullets: [
          '**Tech vocabulary** - `un portable / un smartphone`, `les réseaux sociaux` (social media), `télécharger une appli` (download an app), `envoyer des textos`, `faire des recherches` (do research), `partager des photos`, `le cyberharcèlement` (cyberbullying), `accro aux écrans` (addicted to screens).',
          '**Balancing advantages & risks** - `D’un côté, Internet est pratique pour rester en contact avec sa famille et réviser ses cours. D’un autre côté, passer trop de temps devant l’écran nuit au sommeil et présente des dangers pour la vie privée.`',
        ],
        subsections: [
          {
            heading: 'Useful Balancing Connectors for Band-1 Essays',
            bullets: [
              '**Contrast phrases** - `d’une part... d’autre part...` (on the one hand... on the other hand...), `cependant / pourtant / toutefois` (however/yet), `malgré les risques` (despite the risks).',
            ],
            exampleHeading: 'Model balanced technology sentences',
            examples: [
              '« J’utilise mon portable tous les jours pour écouter de la musique et discuter avec mes copains, pourtant j’essaie de limiter mon temps d’écran avant de dormir. » (I use my phone every day to listen to music and chat with my friends, yet I try to limit my screen time before sleeping.)',
              '« Bien que les réseaux sociaux soient utiles pour s’informer, il faut protéger ses données personnelles. » (Although social networks are useful for keeping informed, one must protect one’s personal data.)',
            ],
          },
        ],
        glossaryPills: [
          { term: 'les réseaux sociaux', definition: 'Social media networks, frequently paired with vocabulary on screen time (temps d’écran) and privacy (vie privée).' },
        ],
        memoryAid: 'Games = jouer À (au foot); Instruments = jouer DE (du piano); Individual sports = faire DE (de la natation)!',
        commonMistake: 'NEVER translate "I have played tennis for 3 years" with the passé composé ("J’ai joué au tennis depuis 3 ans" ❌) — for an action STILL happening now, French ALWAYS uses PRESENT + depuis ("Je joue au tennis depuis 3 ans" ✓)!',
      },
    ],
    keyTerms: [
      { term: 'S’entendre bien avec', definition: 'To get on well with someone.' },
      { term: 'Jouer à / Jouer de', definition: 'Play a sport/game (à) vs play a musical instrument (de).' },
      { term: 'Depuis + présent', definition: 'Used for actions that began in the past and are still continuing now.' },
      { term: 'Le cyberharcèlement', definition: 'Online bullying / cyberbullying.' },
    ],
    checklistPoints: [
      'Apply feminine/plural adjective agreement and the BAGS placement rule to family descriptions',
      'Distinguish jouer à, jouer de, and faire de cleanly and use present tense + depuis',
      'Weigh benefits and drawbacks of smartphones and social media using balanced connectives',
    ],
  },

  'igfr-2-2': {
    subtopicId: 'igfr-2-2',
    subtopicCode: '2.2',
    subtopicTitle: 'Holidays, Accommodation & Past Travel Narratives',
    readingMinutes: 10,
    videoTitle: 'Holidays, Countries, Accommodation & Travel Stories in French',
    youtubeId: 'BFjAUG6zc_g',
    videoChannel: 'Learn French with Alexa',
    videoDuration: '8:40',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE French (0520) Topic Area C — Holidays & Travel',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Countries (en/au/aux), Cities (à) & Transport', cardId: 'igfr-2-2-c1' },
      { time: '2:50', seconds: 170, label: 'Accommodation, Booking & Solving Hotel Problems', cardId: 'igfr-2-2-c2' },
      { time: '5:40', seconds: 340, label: 'Combining Passé Composé & Imparfait for Holiday Narratives', cardId: 'igfr-2-2-c3' },
    ],
    cards: [
      {
        id: 'igfr-2-2-c1',
        title: 'Countries, Prepositions (`en / au / aux / à`) & Transport',
        summary: 'Use en for feminine or vowel-initial countries, au for masculine countries, aux for plural countries, and à for cities; use en for enclosed vehicles and à for open/foot travel.',
        bullets: [
          '**Countries & cities ("to / in")** - **Feminine countries** (mostly ending in `-e`) or **starting with a vowel**: `en` (`en France`, `en Espagne`, `en Italie`, `en Iran`); **Masculine consonant countries**: `au` (`au Maroc`, `au Japon`, `au Canada`, `au Portugal`); **Plural countries**: `aux` (`aux États-Unis`, `aux Pays-Bas`); **All cities**: `à` (`à Paris`, `à Lyon`, `à Nice`).',
          '**Transport prepositions** - inside a vehicle = **`en`** (`en avion`, `en train`, `en voiture`, `en bateau`, `en car`); astride or on foot = **`à`** (`à pied`, `à vélo`, `à cheval`, `à moto`).',
          '**Holiday destinations** - `au bord de la mer` (by the sea), `à la montagne` (in the mountains), `à la campagne` (in the countryside), `à l’étranger` (abroad).',
        ],
        subsections: [
          {
            heading: 'Expressing Why You Travel & Preferences',
            bullets: [
              '**High-grade reasons** - `pour me reposer` (to rest), `découvrir une nouvelle culture` (discover a new culture), `goûter la cuisine locale` (taste local cuisine), `profiter du soleil` (enjoy the sun).',
            ],
            exampleHeading: 'Model destination & transport sentences',
            examples: [
              '« L’été dernier, je suis allé(e) en Espagne en avion avec ma famille pour profiter des plages et de la cuisine locale. » (Last summer, I went to Spain by plane with my family to enjoy the beaches and local food.)',
              '« L’année prochaine, nous voudrions voyager au Japon en train à grande vitesse (TGV / Shinkansen). » (Next year, we would like to travel to Japan by high-speed train.)',
            ],
          },
        ],
        glossaryPills: [
          { term: 'à l’étranger', definition: 'Idiomatic phrase meaning "abroad / overseas" (e.g. partir en vacances à l’étranger).' },
          { term: 'au bord de la mer', definition: 'At the seaside / by the sea.' },
        ],
      },
      {
        id: 'igfr-2-2-c2',
        title: 'Accommodation, Booking & Solving Hotel Problems',
        summary: 'Be prepared for both writing tasks and Speaking Role-Plays at a hotel reception or campsite: state dates, room features, and specific complaints clearly.',
        bullets: [
          '**Types of accommodation (`l’hébergement`)** - `un hôtel trois étoiles`, `un camping`, `une auberge de jeunesse` (youth hostel), `un gîte` (holiday cottage), `une chambre avec vue sur la mer / salle de bains privée`, `en demi-pension` (half-board).',
          '**Booking essentials** - `J’ai réservé une chambre pour deux nuits`, `Est-ce que le petit déjeuner est compris ?` (Is breakfast included?), `Y a-t-il le Wi-Fi gratuit ?`, `À quelle heure faut-il libérer la chambre ?` (What time is check-out?).',
          '**Reporting problems** - `La climatisation ne marche pas` (The air-conditioning doesn’t work), `Il n’y a pas d’eau chaude` (There is no hot water), `La chambre est trop bruyante` (too noisy), `Il manque des serviettes` (towels are missing).',
        ],
        subsections: [
          {
            heading: 'Describing a Disaster Holiday (Favourite 0520 Essay Prompt)',
            bullets: [
              '**Story arc** - expected calm (`Je pensais que...`) → disaster struck (`Malheureusement, nous avons raté le train / j’ai perdu mon passeport / il a plu toute la semaine`) → silver lining (`Heureusement, les gens étaient très aimables`).',
            ],
            exampleHeading: 'Model accommodation & problem-solving sentences',
            examples: [
              '« Nous avons logé dans un camping bien équipé près de la plage, mais malheureusement la douche ne marchait pas le premier soir. » (We stayed at a well-equipped campsite near the beach, but unfortunately the shower didn’t work on the first night.)',
              '« Excusez-moi, j’ai réservé une chambre calme avec balcon ; serait-il possible de changer de chambre ? » (Excuse me, I booked a quiet room with a balcony; would it be possible to change rooms?)',
            ],
          },
        ],
        glossaryPills: [
          { term: 'en demi-pension', definition: 'Half-board hotel arrangement including breakfast and one main meal (usually dinner).' },
        ],
      },
      {
        id: 'igfr-2-2-c3',
        title: 'Weaving Passé Composé + Imparfait in Travel Narratives',
        summary: 'The fastest way to unlock top grammar marks on Paper 4 holiday essays is pairing imparfait (weather, scenery, feelings) with passé composé (specific completed events).',
        bullets: [
          '**`Imparfait` = Scene-setting & weather** - `Il faisait beau / chaud / mauvais`, `Le soleil brillait`, `L’hôtel était confortable`, `C’était inoubliable`, `J’étais ravi(e)`.',
          '**`Passé composé` = Specific completed actions** - `Nous avons visité le musée`, `J’ai fait de la plongée` (I went diving), `Nous sommes allés au marché`, `J’ai acheté des souvenirs`.',
          '**Interrupting action pattern** - `Pendant que nous nous promenions sur la plage (imparfait), il a commencé à pleuvoir (passé composé)!` (While we were walking on the beach, it started to rain!)',
        ],
        subsections: [
          {
            heading: 'Top-Band 3-Timeframe Holiday Blueprint',
            bullets: [
              '**Hit Past + Present + Future/Conditional** - (1) What you normally do (`D’habitude...`); (2) Where you went last year (`L’été dernier...`); (3) Your dream holiday (`À l’avenir, j’aimerais visiter...`).',
            ],
            exampleHeading: 'Model Band-1 narrative combining both past tenses',
            examples: [
              '« Comme il faisait très chaud et que la mer était calme, nous sommes allés à la plage où j’ai nagé pendant une heure. » (As it was very hot and the sea was calm, we went to the beach where I swam for an hour.)',
              '« Bien que le voyage en car ait été fatigant, le séjour était merveilleux et j’y retournerai sans hésiter ! » (Although the coach trip was tiring, the stay was wonderful and I will go back without hesitation!)',
            ],
          },
        ],
        glossaryPills: [
          { term: 'un séjour', definition: 'A stay or holiday trip (e.g. un séjour linguistique — a language stay).' },
        ],
        memoryAid: 'Countries: Fem/Vowel = EN (en France, en Iran); Masc = AU (au Maroc); Plural = AUX (aux États-Unis); City = À (à Paris)!',
        commonMistake: 'NEVER write "Je suis allé à France" ❌ or "Je suis allé en train à pied" — countries use en/au/aux ("en France" ✓), cities use à ("à Paris" ✓), and on foot is always "à pied" ✓!',
      },
    ],
    keyTerms: [
      { term: 'En / Au / Aux / À', definition: 'Country and city prepositions matching feminine/vowel, masculine, plural, and city rules.' },
      { term: 'L’hébergement', definition: 'Holiday accommodation (hotel, campsite, gîte, youth hostel).' },
      { term: 'En demi-pension', definition: 'Half-board accommodation package.' },
      { term: 'Un séjour', definition: 'A holiday stay or trip.' },
    ],
    checklistPoints: [
      'Select en, au, aux, or à accurately for countries, cities, and transport modes',
      'Book accommodation and politely report hotel problems in speaking and writing tasks',
      'Combine imparfait descriptions/weather with passé composé events in holiday narratives',
    ],
  },

  'igfr-3-1': {
    subtopicId: 'igfr-3-1',
    subtopicCode: '3.1',
    subtopicTitle: 'Home Town, Local Area, Transport & Directions',
    readingMinutes: 10,
    videoTitle: 'Home Town, Local Area, Transport & Directions in French',
    youtubeId: 'ejthT_RABNk',
    videoChannel: 'Learn French with Alexa',
    videoDuration: '8:15',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE French (0520) Topic Area C — The World Around Us',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Town Facilities, Countryside & "On Peut + Infinitive"', cardId: 'igfr-3-1-c1' },
      { time: '2:45', seconds: 165, label: 'Directions, Imperative Verbs & Prepositions of Place', cardId: 'igfr-3-1-c2' },
      { time: '5:25', seconds: 325, label: 'Public Transport, Shopping & Comparatives', cardId: 'igfr-3-1-c3' },
    ],
    cards: [
      {
        id: 'igfr-3-1-c1',
        title: 'Describing Your Town, Region & What There Is to Do',
        summary: 'Pair geographical location (situé dans le sud de...) with town facilities (il y a / il n’y a pas de) and activities using on peut + infinitive.',
        bullets: [
          '**Location & atmosphere** - `Ma ville est située dans le nord / sud / est / ouest du pays`, `au centre-ville`, `en banlieue` (suburbs), `à la campagne` (countryside), `animé(e)` (lively), `paisible / calme` (peaceful), `historique`, `industriel(le)`.',
          '**Town facilities (`les équipements`)** - `un centre commercial`, `une bibliothèque`, `une piscine municipale`, `une patinoire` (ice rink), `un stade`, `la mairie` (town hall), `la poste`, `les espaces verts` (green spaces). Remember negative **`de`**: `Il n’y a pas de cinéma.`',
          '**Things to do (`on peut + infinitive`)** - `On peut faire du shopping, visiter le château médiéval ou se promener dans le parc.`',
        ],
        subsections: [
          {
            heading: 'What Would You Improve in Your Town? (Common Question)',
            bullets: [
              '**Conditional upgrade** - `Si j’étais maire, je construirais plus de pistes cyclables et un centre pour les jeunes.` (If I were mayor, I would build more cycle lanes and a youth centre.)',
            ],
            exampleHeading: 'Model home-town description sentences',
            examples: [
              '« J’habite dans une petite ville côtière dans le sud ; c’est très pittoresque mais il n’y a pas assez d’activités pour les adolescents. » (I live in a small coastal town in the south; it is very picturesque but there are not enough activities for teenagers.)',
              '« Ce que j’aime dans ma région, c’est qu’on peut aller à la plage ou faire de la randonnée facilement. » (What I like about my region is that you can go to the beach or go hiking easily.)',
            ],
          },
        ],
        glossaryPills: [
          { term: 'les pistes cyclables', definition: 'Dedicated bicycle lanes — great high-band vocabulary for both town and environment essays.' },
          { term: 'la mairie', definition: 'The town hall / municipal council building in a French town or village.' },
        ],
      },
      {
        id: 'igfr-3-1-c2',
        title: 'Asking & Giving Directions + Prepositions of Place',
        summary: 'Directions appear heavily in Paper 1 Listening maps and Paper 3 Role-Plays — master the polite vous imperative and prepositions taking de (du / de la / des).',
        bullets: [
          '**Asking politely** - `Excusez-moi, pour aller à la gare, s’il vous plaît ?` / `Où se trouve l’office de tourisme ?`',
          '**Giving directions (`impératif vous`)** - `Allez tout droit` (Go straight ahead), `Tournez à gauche / à droite` (Turn left/right), `Prenez la première rue à droite` (Take the 1st street on the right), `Traversez la place / le pont` (Cross the square/bridge), `Continuez jusqu’au feu rouge / rond-point` (Continue to the traffic lights/roundabout).',
          '**Prepositions of place + `de` contractions** - `en face de` (opposite), `à côté de` (next to), `près de` (near), `loin de` (far from), `entre ... et ...` (between), `devant` (in front of), `derrière` (behind). Contract `de + le = du` and `de + les = des`: `en face du parc`, `à côté de la pharmacie`.',
        ],
        subsections: [
          {
            heading: 'Listening Map-Task Traps',
            bullets: [
              '**Watch sequential turns** - speakers often say *"passez devant la banque, puis tournez au deuxième carrefour"* — track `premier / deuxième / troisième` and `à gauche / à droite` carefully!',
            ],
            exampleHeading: 'Model direction & location exchanges',
            examples: [
              '« Pour aller à la gare, allez tout droit jusqu’au rond-point, prenez la deuxième rue à gauche et la gare est en face du supermarché. » (To get to the station, go straight ahead to the roundabout, take the second street on the left and the station is opposite the supermarket.)',
              '« La boulangerie se trouve juste entre la poste et la librairie, à cinq minutes à pied d’ici. » (The bakery is located right between the post office and the bookshop, five minutes on foot from here.)',
            ],
          },
        ],
        glossaryPills: [
          { term: 'la librairie', definition: 'A bookshop (NOT a library! A library is une bibliothèque — a classic IGCSE false friend).' },
        ],
      },
      {
        id: 'igfr-3-1-c3',
        title: 'Public Transport, Shopping & Town vs Countryside Comparatives',
        summary: 'Buy tickets confidently (un aller-retour, le quai), navigate shop transactions, and compare city vs rural life using plus... que, moins... que, and aussi... que.',
        bullets: [
          '**Station & transport phrases** - `Je voudrais un aller simple / un aller-retour pour Marseille`, `Le train part de quel quai ?` (Which platform?), `À quelle heure arrive-t-il ?`, `Il y a un retard de vingt minutes`, `les embouteillages` (traffic jams), `les transports en commun` (public transport).',
          '**Comparatives (`plus / moins / aussi + adj + que`)** - remember adjective agreement! `La ville est plus animée que la campagne` (feminine `animée`), `La campagne est moins polluée et moins bruyante que la ville.` Irregular comparative: `bon → meilleur(e)` (better — NEVER `plus bon` ❌!).',
          '**Superlatives** - `le/la/les plus + adj` (`Le métro est le moyen de transport le plus rapide`).',
        ],
        subsections: [
          {
            heading: 'Weighing Town vs Countryside (Essay Favourite)',
            bullets: [
              '**Town**: jobs, shops, public transport, culture vs noise, pollution, high rent (`loyer cher`). **Countryside**: fresh air, space, safety vs isolation, poor bus links, boredom.',
            ],
            exampleHeading: 'Model comparative & transport sentences',
            examples: [
              '« À mon avis, la qualité de vie à la campagne est meilleure qu’en ville parce que l’air est plus pur et il y a moins de circulation. » (In my opinion, quality of life in the countryside is better than in town because the air is cleaner and there is less traffic.)',
              '« Je prends le bus tous les matins car c’est moins cher et plus écologique que la voiture. » (I take the bus every morning because it is cheaper and greener than the car.)',
            ],
          },
        ],
        glossaryPills: [
          { term: 'les transports en commun', definition: 'Public transport (buses, trains, trams, metro).' },
        ],
        memoryAid: 'False-friend shield: la librairie = bookshop, la bibliothèque = library, un magasin = shop (NOT magazine!), un quai = platform!',
        commonMistake: 'NEVER write "plus bon" ❌ for "better" — the comparative of bon is ALWAYS meilleur(e) ("La vie est meilleure ici" ✓), and the comparative of bien is mieux!',
      },
    ],
    keyTerms: [
      { term: 'Les transports en commun', definition: 'Public transport networks such as buses, trams, and trains.' },
      { term: 'Un aller-retour', definition: 'A return (round-trip) travel ticket.' },
      { term: 'La bibliothèque / La librairie', definition: 'Library (bibliothèque) vs bookshop (librairie).' },
      { term: 'Meilleur(e)', definition: 'Irregular comparative of bon ("better"), replacing incorrect "plus bon".' },
    ],
    checklistPoints: [
      'Describe your town’s location, amenities, pros/cons, and hypothetical improvements (si j’étais maire...)',
      'Give and follow multi-step directions using vous imperatives and contracted prepositions (en face du...)',
      'Buy transport tickets and compare town vs countryside using comparatives and meilleur(e)',
    ],
  },

  'igfr-3-2': {
    subtopicId: 'igfr-3-2',
    subtopicCode: '3.2',
    subtopicTitle: 'Environment, Global Issues & Future Careers',
    readingMinutes: 10,
    videoTitle: 'Environment, Global Issues & Future Careers in French',
    youtubeId: 'xROOAwT6JEA',
    videoChannel: 'Learn French with Alexa',
    videoDuration: '8:50',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE French (0520) Topic Areas D & E — World of Work & International World',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Environmental Threats & Concrete Solutions', cardId: 'igfr-3-2-c1' },
      { time: '2:55', seconds: 175, label: 'Social Issues, Poverty & Volunteering (Bénévolat)', cardId: 'igfr-3-2-c2' },
      { time: '5:50', seconds: 350, label: 'Jobs, Work Experience (Stage) & Future Plans', cardId: 'igfr-3-2-c3' },
    ],
    cards: [
      {
        id: 'igfr-3-2-c1',
        title: 'Environmental Threats & Green Solutions',
        summary: 'Topic Area E rewards precise vocabulary on climate change paired with modal action verbs (on devrait, il faudrait, il est essentiel de).',
        bullets: [
          '**Major threats** - `le réchauffement climatique` (global warming), `la pollution de l’air / des océans`, `la déforestation`, `les déchets plastiques` (plastic waste), `les espèces menacées` (endangered species), `les inondations et les sécheresses` (floods and droughts).',
          '**Everyday eco-actions (`les gestes écologiques`)** - `trier et recycler les déchets` (sort and recycle waste), `éteindre les lumières` (turn off lights), `économiser l’eau et l’énergie`, `prendre une douche au lieu d’un bain`, `utiliser les énergies renouvelables` (renewable energy), `éviter le gaspillage alimentaire` (food waste).',
          '**Call-to-action structures** - `Il faudrait + infinitive` (We ought to), `On devrait + infinitive` (We should), `Il faut protéger notre planète avant qu’il ne soit trop tard.`',
        ],
        subsections: [
          {
            heading: 'Individual vs Government Responsibility (Band-1 Argument)',
            bullets: [
              '**Two-level solution** - explain what **you personally do** at home (`Chez moi, nous recyclons...`) AND what **governments should fund** (`Le gouvernement devrait investir dans les transports en commun`).',
            ],
            exampleHeading: 'Model environmental sentences',
            examples: [
              '« À mon avis, le plus grand problème environnemental est le réchauffement climatique ; c’est pourquoi j’essaie d’économiser l’électricité et d’aller au collège à vélo. » (In my opinion, the biggest environmental problem is global warming; that is why I try to save electricity and cycle to school.)',
              '« Il faudrait interdire les plastiques à usage unique et encourager l’énergie solaire pour réduire les émissions de carbone. » (We ought to ban single-use plastics and encourage solar energy to reduce carbon emissions.)',
            ],
          },
        ],
        glossaryPills: [
          { term: 'le réchauffement climatique', definition: 'Global warming / climate warming, central to Topic Area E.' },
          { term: 'le gaspillage', definition: 'Waste / squandering (e.g. le gaspillage d’eau ou de nourriture).' },
        ],
      },
      {
        id: 'igfr-3-2-c2',
        title: 'Social Issues, Charity & Volunteering (`Le Bénévolat`)',
        summary: 'Discuss poverty, homelessness, and helping the community with empathetic, accurate French phrases and reasons why charity matters.',
        bullets: [
          '**Social issues** - `la pauvreté` (poverty), `le chômage` (unemployment), `les sans-abri / les SDF` (homeless people), `la faim dans le monde` (world hunger), `les inégalités` (inequalities).',
          '**Charity & volunteering** - `une association caritative` (charity), `faire du bénévolat` (do volunteering), `collecter des fonds` (raise funds), `donner des vêtements / de la nourriture` (donate clothes/food), `aider les personnes âgées` (help elderly people).',
          '**Justifying why volunteering helps both sides** - `Le bénévolat aide les plus démunis et permet aux jeunes de développer la confiance en soi et l’esprit d’équipe.`',
        ],
        subsections: [
          {
            heading: 'Combining Past Charity Experience + Future Intentions',
            bullets: [
              '**Three-tense opportunity** - mention a school fundraiser last year (`L’année dernière, nous avons organisé une course caritative`) and future plans (`Cet été, je vais faire du bénévolat`).',
            ],
            exampleHeading: 'Model social-issues & volunteering sentences',
            examples: [
              '« L’hiver dernier, j’ai fait du bénévolat dans une banque alimentaire pour aider les sans-abri ; c’était une expérience très enrichissante. » (Last winter, I volunteered at a food bank to help homeless people; it was a very rewarding experience.)',
              '« Je pense qu’il est important de soutenir les associations caritatives parce que tout le monde mérite un toit et un repas chaud. » (I think it is important to support charities because everyone deserves a roof and a hot meal.)',
            ],
          },
        ],
        glossaryPills: [
          { term: 'faire du bénévolat', definition: 'To do unpaid voluntary work for a charity or community organisation.' },
        ],
      },
      {
        id: 'igfr-3-2-c3',
        title: 'Jobs, Work Experience (`Mon Stage`) & Future Ambitions',
        summary: 'Never put un/une directly after être before a job title (Je veux devenir médecin ✓), and use future/conditional tenses cleanly for career plans.',
        bullets: [
          '**Zero-article profession rule** - say **`Je voudrais être ingénieur / médecin / avocat(e) / professeur`** (NO `un/une`!) — only add `un/une` if an adjective is attached (`un bon médecin` ✓).',
          '**Work experience (`un stage`)** - `J’ai fait un stage d’une semaine dans une école primaire / un cabinet vétérinaire / un bureau`, `Mes collègues étaient accueillants`, `J’ai appris beaucoup de compétences utiles`, `Cependant, les horaires étaient longs.`',
          '**Future plans (`l’avenir`)** - `Après mes examens`, `aller à l’université`, `faire un apprentissage` (apprenticeship), `prendre une année sabbatique` (gap year), `travailler à l’étranger`, `gagner bien sa vie` (earn a good living), `un métier bien payé et gratifiant` (well-paid and rewarding career).',
        ],
        subsections: [
          {
            heading: 'Why Learn Foreign Languages for Your Career?',
            bullets: [
              '**Frequent 0520 prompt** - `Parler plusieurs langues ouvre des portes sur le marché du travail, facilite les voyages et permet de travailler dans des entreprises internationales.`',
            ],
            exampleHeading: 'Model work-experience & future-plans sentences',
            examples: [
              '« Plus tard, je voudrais devenir médecin parce que j’aime les sciences et je veux aider les malades, même si les études sont longues. » (Later, I would like to become a doctor because I love sciences and want to help sick people, even though the studies are long.)',
              '« Si j’obtiens de bonnes notes, j’irai à l’université pour étudier l’informatique et travailler à l’étranger. » (If I get good grades, I will go to university to study computer science and work abroad.)',
            ],
          },
        ],
        glossaryPills: [
          { term: 'un stage', definition: 'Work experience placement or internship (faire un stage en entreprise).' },
        ],
        memoryAid: 'Professions after être/devenir = NO article! "Mon père est architecte" ✓, "Je veux devenir journaliste" ✓ (add un/une ONLY with an adjective: "un excellent journaliste")!',
        commonMistake: 'NEVER write "Je voudrais être un médecin" ❌ or translate "stage" as theatre stage — in IGCSE work topics, un stage means a work experience placement!',
      },
    ],
    keyTerms: [
      { term: 'Le réchauffement climatique', definition: 'Global warming.' },
      { term: 'Trier les déchets', definition: 'To sort household waste for recycling.' },
      { term: 'Faire du bénévolat', definition: 'To do voluntary charity work.' },
      { term: 'Un stage', definition: 'Work experience placement / internship.' },
    ],
    checklistPoints: [
      'Discuss environmental threats and personal/government solutions using il faudrait and on devrait',
      'Describe social issues and charity/volunteering experiences across multiple timeframes',
      'Talk about work experience (mon stage) and career goals omitting un/une after être/devenir',
    ],
  },

  'igfr-4-1': {
    subtopicId: 'igfr-4-1',
    subtopicCode: '4.1',
    subtopicTitle: 'Key Tenses: Present, Passé Composé, Imparfait & Future',
    readingMinutes: 11,
    videoTitle: 'Mastering Core French Tenses: Present, Past & Future',
    youtubeId: 'FfYB88V4_Zw',
    videoChannel: 'Learn French with Alexa',
    videoDuration: '9:15',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE French (0520) Core Grammar & Paper 4 Accuracy',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Present Tense Regulars, Key Irregulars & Negatives', cardId: 'igfr-4-1-c1' },
      { time: '3:05', seconds: 185, label: 'Passé Composé (avoir vs être) vs Imparfait', cardId: 'igfr-4-1-c2' },
      { time: '6:15', seconds: 375, label: 'Near Future, Simple Future & Conditional Wishes', cardId: 'igfr-4-1-c3' },
    ],
    cards: [
      {
        id: 'igfr-4-1-c1',
        title: 'Present Tense & Negative Sandwiches',
        summary: 'Master regular -er/-ir/-re endings, the Big 4 irregulars (être, avoir, aller, faire), and high-scoring negatives beyond ne... pas.',
        bullets: [
          '**Regular present endings** - **`-er`** (`parler`): `-e, -es, -e, -ons, -ez, -ent`; **`-ir`** (`finir`): `-is, -is, -it, -issons, -issez, -issent`; **`-re`** (`vendre`): `-s, -s, —, -ons, -ez, -ent`.',
          '**The Big 4 irregulars (memorise cold!)** - `être`: `suis, es, est, sommes, êtes, sont`; `avoir`: `ai, as, a, avons, avez, ont`; `aller`: `vais, vas, va, allons, allez, vont`; `faire`: `fais, fais, fait, faisons, faites, font`.',
          '**Upgraded negatives (wrap the conjugated verb!)** - `ne... pas` (not), `ne... jamais` (never), `ne... plus` (no longer), `ne... rien` (nothing), `ne... personne` (nobody), `ne... que` (only — `Je ne mange que des légumes`).',
        ],
        subsections: [
          {
            heading: 'Negative Placement in Two-Verb & Past Structures',
            bullets: [
              '**Wrap ONLY the first/auxiliary verb** - `Je n’ai jamais visité Paris` ✓ (`ne` + auxiliary `ai` + `jamais` + participle); `Je ne veux plus fumer` ✓ (exception: `personne` goes AFTER the participle: `Je n’ai vu personne`).',
            ],
            exampleHeading: 'Model present & negative accuracy examples',
            examples: [
              '« Nous finissons les cours à seize heures, puis nous faisons nos devoirs avant de dîner. » (We finish lessons at 4 pm, then we do our homework before dinner.)',
              '« Je ne bois plus de café et je ne regarde jamais la télé le matin. » (I no longer drink coffee and I never watch TV in the morning.)',
            ],
          },
        ],
        glossaryPills: [
          { term: 'ne... que', definition: 'Restrictive negative structure meaning "only" (e.g. Je n’ai que deux frères — I only have two brothers).' },
        ],
      },
      {
        id: 'igfr-4-1-c2',
        title: 'Passé Composé vs Imparfait: Choosing & Forming Both Cleanly',
        summary: 'Passé composé narrates completed single events (auxiliary + past participle); imparfait describes ongoing states, habits, weather, and background scenery.',
        bullets: [
          '**`Passé composé` formation** - Present of **`avoir`** (most verbs) or **`être`** (17 `DR & MRS VANDERTRAMP` motion/state verbs + ALL reflexives) + **past participle** (`-er → -é`, `-ir → -i`, `-re → -u`; key irregulars: `fait, vu, pris, bu, lu, eu, été, dit, écrit, mis`).',
          '**`Être` agreement rule** - past participles with `être` MUST agree with the subject (`Elle est allée`, `Nous sommes partis`, `Elles se sont levées`)!',
          '**`Imparfait` formation (almost 100% regular!)** - take the **`nous` present form**, drop `-ons`, add **`-ais, -ais, -ait, -ions, -iez, -aient`** (`nous finissons → je finissais`; `nous faisons → il faisait`). Only ONE irregular stem: **`être → ét-`** (`j’étais, c’était`).',
        ],
        subsections: [
          {
            heading: 'When to Choose Passé Composé vs Imparfait',
            bullets: [
              '**Passé composé (Camera snapshot)** - one-off completed action (`Hier, j’ai acheté un cadeau`, `Soudain, il est tombé`).',
              '**Imparfait (Video background)** - used to / was doing / description / weather (`Quand j’étais petit, j’habitais à Nice`, `Il pleuvait`).',
            ],
            exampleHeading: 'Worked side-by-side comparison',
            examples: [
              '« Quand j’avais dix ans, j’allais chez mes grands-parents tous les étés (imparfait: habit). L’été dernier, nous sommes allés en Italie (passé composé: specific trip). »',
              '« Pendant que Marie lisait dans le jardin (imparfait: ongoing), son téléphone a sonné (passé composé: sudden event). »',
            ],
          },
        ],
        glossaryPills: [
          { term: 'DR & MRS VANDERTRAMP', definition: 'Mnemonic for the 17 motion/change-of-state verbs taking être in the passé composé (Devenir, Revenir, Monter, Rester, Sortir, Venir, Aller, Naître, Descendre, Entrer, Rentrer, Tomber, Retourner, Arriver, Mourir, Partir, Passer).' },
          { term: 'imparfait', definition: 'Past tense describing habitual actions ("used to"), ongoing actions ("was doing"), weather, feelings, and background scenery.' },
        ],
      },
      {
        id: 'igfr-4-1-c3',
        title: 'Near Future, Simple Future & Conditional Mood',
        summary: 'Use near future (aller + infinitive) for definite plans, simple future (-ai/-as/-a/-ons/-ez/-ont) for distant "will" predictions, and conditional (-ais) for polite wishes and "si" clauses.',
        bullets: [
          '**Near future (`futur proche`)** - present of `aller` + infinitive: `Ce soir, je vais regarder un film` (Tonight, I’m going to watch a film).',
          '**Simple future (`futur simple` — "will")** - full infinitive (drop final `-e` on `-re` verbs: `vendr-`) + **`-ai, -as, -a, -ons, -ez, -ont`**. Key irregular stems: `aller → ir-`, `être → ser-`, `avoir → aur-`, `faire → fer-`, `pouvoir → pourr-`, `vouloir → voudr-`, `voir → verr-`.',
          '**Conditional (`le conditionnel` — "would")** - SAME future stem + **imparfait endings (`-ais, -ais, -ait, -ions, -iez, -aient`)**: `J’aimerais` (I would like), `Je voudrais`, `Ce serait génial` (It would be great).',
          '**Top-band `Si` clause** - **`Si` + imparfait → conditionnel**: `Si j’avais assez d’argent, je voyagerais autour du monde.` (If I had enough money, I would travel around the world.)',
        ],
        subsections: [
          {
            heading: 'Future Time Trigger (`Quand` + Simple Future!)',
            bullets: [
              '**Notice French vs English** - English says "When I **am** older, I will...", whereas French uses **SIMPLE FUTURE in BOTH halves**: `Quand je serai plus âgé(e), j’habiterai à Lyon.` ✓',
            ],
            exampleHeading: 'Model future & conditional grade-boosters',
            examples: [
              '« Demain, nous allons visiter le musée, et l’année prochaine nous irons au Canada. » (Tomorrow we are going to visit the museum, and next year we will go to Canada.)',
              '« Si je gagnais à la loterie, j’achèterais une maison au bord de la mer et je donnerais de l’argent aux associations. » (If I won the lottery, I would buy a house by the sea and give money to charities.)',
            ],
          },
        ],
        glossaryPills: [
          { term: 'futur simple', definition: 'French future tense ("will") built from the infinitive (or irregular stem like ir-/ser-/aur-/fer-) plus avoir-style endings (-ai, -as, -a, -ons, -ez, -ont).' },
        ],
        memoryAid: 'Future Stem + Imparfait Endings = Conditional! (ir- + -ais = j’irais "I would go"; ser- + -ait = ce serait "it would be")!',
        commonMistake: 'NEVER put the conditional directly after "si" ("Si j’aurais..." ❌ — "Si" hates "-rais"!) — ALWAYS write "Si + imparfait, conditionnel" ("Si j’avais..., j’irais..." ✓)!',
      },
    ],
    keyTerms: [
      { term: 'Passé composé', definition: 'Compound past tense (avoir/être + past participle) for completed events.' },
      { term: 'Imparfait', definition: 'Past tense for habits, ongoing background actions, weather, and descriptions.' },
      { term: 'Futur simple', definition: 'Simple future tense ("will") using infinitive/irregular stems + -ai/-as/-a/-ons/-ez/-ont.' },
      { term: 'Conditionnel', definition: 'Mood expressing "would" (future stem + imparfait endings), used for polite requests and si clauses.' },
    ],
    checklistPoints: [
      'Conjugate regular and key irregular present-tense verbs plus upgraded negatives accurately',
      'Form passé composé (including être agreement) and imparfait, choosing the right past tense in context',
      'Deploy near future, simple future (including quand + future), and si + imparfait → conditional sentences',
    ],
  },

  'igfr-4-2': {
    subtopicId: 'igfr-4-2',
    subtopicCode: '4.2',
    subtopicTitle: 'Reading, Listening, Extended Writing & Speaking Role-Play',
    readingMinutes: 11,
    videoTitle: 'Cambridge IGCSE French 0520 Exam Technique Across All 4 Papers',
    youtubeId: 'ZNcmYwjskU0',
    videoChannel: 'Learn French with Alexa',
    videoDuration: '9:00',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE French (0520) Papers 1, 2, 3 & 4 Assessment Objectives',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Paper 1 Listening & Paper 2 Reading Trap-Busting', cardId: 'igfr-4-2-c1' },
      { time: '3:05', seconds: 185, label: 'Paper 4 Writing: 80–90 Word & 130–140 Word Mastery', cardId: 'igfr-4-2-c2' },
      { time: '6:10', seconds: 370, label: 'Paper 3 Speaking: Role-Play & Topic Conversations', cardId: 'igfr-4-2-c3' },
    ],
    cards: [
      {
        id: 'igfr-4-2-c1',
        title: 'Paper 1 Listening & Paper 2 Reading: Spotting Distractors & False Friends',
        summary: 'Cambridge examiners embed distractors (changed minds, hidden negatives, tense shifts, and false friends) — always listen/read to the VERY END of a sentence.',
        bullets: [
          '**Classic distractors** - a speaker mentions Option A first, then reverses with **`mais / cependant / malheureusement / finalement / par contre`** (`Je voulais aller à la piscine, mais elle était fermée, donc je suis allé au parc` → answer is **park**, NOT pool!).',
          '**Hidden negatives & time traps** - watch `ne... plus` (no longer), `ne... jamais` (never), `sans` (without), `sauf` (except), `avant` (used to) vs `maintenant` (now) vs `bientôt` (soon).',
          '**Top IGCSE French False Friends (`faux amis`)** - `actuellement` = **currently** (NOT actually); `assister à` = **to attend** (NOT assist); `attendre` = **to wait for**; `blesser` = **to injure**; `sensible` = **sensitive**; `sympathique` = **friendly/nice**; `car` = **coach / because**; `location` = **rental/hiring**; `monnaie` = **loose change/currency**.',
        ],
        subsections: [
          {
            heading: 'Paper 2 Comprehension Questions in French',
            bullets: [
              '**Avoid blind full-sentence copying** - lift ONLY the precise words answering the question word (`Qui ?`, `Quand ?`, `Où ?`, `Pourquoi ?`, `Combien ?`), adjusting pronouns (`je → il/elle`) when needed.',
            ],
            exampleHeading: 'Worked distractor decoding example',
            examples: [
              'Audio script: « D’habitude je prends le bus, hier mon père m’a emmené en voiture, mais demain je vais y aller à vélo. » Question: How will he travel TOMORROW? → Answer: **à vélo** (by bike), ignoring bus (habit) and car (yesterday)!',
              'False-friend trap: « J’ai assisté à un concert formidable » means "I **attended** a fantastic concert" — NOT "I helped at a concert".',
            ],
          },
        ],
        glossaryPills: [
          { term: 'faux ami (false friend)', definition: 'A French word resembling an English word visually but carrying a completely different meaning (e.g. actuellement = currently, not actually).' },
          { term: 'distracteur', definition: 'An attractive wrong option deliberately mentioned in an exam recording or text before being negated or changed.' },
        ],
      },
      {
        id: 'igfr-4-2-c2',
        title: 'Paper 4 Writing Mastery: Form, 80–90 Words & 130–140 Words',
        summary: 'Cambridge 0520 Paper 4 (45 marks) tests Form Filling (Q1), Directed Writing 80–90 words (Q2), and Extended Choice Essay 130–140 words (Q3) — hitting every bullet point and 3+ tenses unlocks top bands.',
        bullets: [
          '**Q2 (80–90 words, 12 marks)** - cover **ALL 4–5 bullet points clearly**, stay close to 85–95 words, and write accurate, well-connected French in the required register (usually email/letter).',
          '**Q3 (130–140 words, 28 marks = 10 Task Completion + 10 Range + 8 Accuracy)** - choose between an **email/letter** or **article/blog**. You MUST hit **every bullet** (usually testing **past + present + future/conditional**) and showcase: (1) **3+ distinct tenses**; (2) **Justified opinions**; (3) **Complex connectives** (`cependant, bien que, afin de, ce qui`); (4) **Idioms** (`ça vaut la peine`, `je m’amuse comme un fou`, `avoir hâte de`).',
          '**5-Minute Proofread Checklist (saves 4–6 accuracy marks!)** - check: (1) Verb endings (`nous -ons`, `ils -ent`); (2) `être` past-participle agreement; (3) Adjective gender/plural agreement; (4) Accents (`é` on past participles, `à` vs `a`, `où` vs `ou`); (5) `pas de` negative rule.',
        ],
        subsections: [
          {
            heading: 'High-Band French Structures That Impress Examiners',
            bullets: [
              '**Infinitive upgrade** - `après avoir mangé` (after having eaten), `avant de partir` (before leaving), `au lieu de rester` (instead of staying), `afin de réussir` (in order to succeed).',
              '**Easy Subjunctive trophy** - `Bien que ce soit cher...` (Although it is expensive...), `Il faut que j’aille...` (I must go...).',
            ],
            exampleHeading: 'Model Q3 opening & complex sentence upgrades',
            examples: [
              'Basic: « Je suis allé à Paris. C’était bien. Je vais retourner. » (Low Band)',
              'Grade A*: « L’été dernier, après avoir fini mes examens, je suis allé(e) à Paris où il faisait un temps magnifique ; bien que la ville soit chère, j’ai hâte d’y retourner l’année prochaine ! » (Top Band)',
            ],
          },
        ],
        glossaryPills: [
          { term: 'avoir hâte de + infinitif', definition: 'High-grade idiom meaning "to look forward eagerly to doing something" (J’ai hâte de te revoir !).' },
        ],
      },
      {
        id: 'igfr-4-2-c3',
        title: 'Paper 3 Speaking: Role-Play & Topic Conversation Strategy',
        summary: 'In the 10-minute prep time, script short, crisp Role-Play answers (including any question you must ask); in the Topic Conversations, extend every reply with Reason + Example + Different Timeframe.',
        bullets: [
          '**Role-Play (5 tasks, ~2 minutes)** - read the **scenario** and check **`tu` vs `vous`**! Give **direct, relevant answers** (no need for giant speeches — clarity beats rambling!). Be ready to **ask a question** (`Est-ce que...?`, `À quelle heure...?`, `Combien coûte...?`) and handle **1–2 unprepared prompts** calmly.',
          '**Topic Conversations 1 & 2 (4 minutes each)** - NEVER answer with a one-word *"Oui"*! Use the **A-R-E-T formula**: **A**nswer clearly + **R**eason (`parce que / car`) + **E**xample (`par exemple`) + **T**imeframe shift (`l’année dernière...` / `à l’avenir...`).',
          '**Natural French hesitation fillers & rescue phrases** - `Eh bien...`, `En fait...`, `C’est une bonne question...`, `Voyons...`; if you miss a question, politely ask: `Pourriez-vous répéter la question, s’il vous plaît ?` (zero penalty if used occasionally!).',
        ],
        subsections: [
          {
            heading: 'Pronunciation Quick Wins',
            bullets: [
              '**Silent final letters** - drop final `-s, -t, -d, -x, -ent` on verbs (`ils parlent` sounds like `il parle`!); pronounce final `-é` cleanly (`j’ai mangé` vs `je mange`).',
            ],
            exampleHeading: 'Model A-R-E-T extended speaking answer',
            examples: [
              'Examiner: « Tu aimes faire du sport ? » → Student: « Oui, j’adore le sport, surtout le basket, parce que cela me permet de garder la forme et de voir mes amis. Par exemple, je m’entraîne deux fois par semaine, et samedi dernier notre équipe a gagné un match important ! »',
              'Role-Play question task ("Ask what time the museum closes"): « Excusez-moi, à quelle heure ferme le musée, s’il vous plaît ? »',
            ],
          },
        ],
        glossaryPills: [
          { term: 'registre (tu vs vous)', definition: 'Social formality choice in French: use tu with friends/family/peers and vous with strangers, waiters, receptionists, and teachers.' },
        ],
        memoryAid: 'Speaking Extension = A-R-E-T: Answer + Reason (car) + Example (par exemple) + Tense shift (past/future)!',
        commonMistake: 'In Paper 4 Q3 (130–140 words), NEVER skip a bullet point to write a long story on just two bullets — leaving out ONE required bullet caps your Task Completion marks sharply!',
      },
    ],
    keyTerms: [
      { term: 'Faux ami', definition: 'French word that looks like an English word but has a different meaning (e.g. actuellement = currently).' },
      { term: 'Distracteur', definition: 'Trap option mentioned in listening/reading before being corrected by mais/finalement.' },
      { term: 'Avoir hâte de', definition: 'Idiomatic phrase meaning "to look forward to" (+ infinitive).' },
      { term: 'Tu vs Vous', definition: 'Informal vs formal address, crucial in Paper 3 Speaking Role-Plays and Paper 4 letters.' },
    ],
    checklistPoints: [
      'Spot listening/reading distractors, hidden negatives, tense shifts, and key faux amis',
      'Plan, write, and 5-minute proofread Paper 4 Q2 (80–90 words) and Q3 (130–140 words) with 3+ tenses',
      'Prepare concise Role-Play answers/questions and extend Topic Conversation replies using A-R-E-T',
    ],
  },
};

export const IGCSE_FRENCH_QUIZZES: QuizQuestion[] = [
  // 1.1 (5)
  {
    id: 'igfr-q-1-1-1',
    subtopicId: 'igfr-1-1',
    type: 'mcq',
    marks: 1,
    prompt: 'How do you say "I woke up at 7:30 yesterday" accurately in French?',
    options: [
      'J’ai me réveillé à sept heures et demie hier.',
      'Je me suis réveillé(e) à sept heures et demie hier.',
      'Je me réveille à sept heures et quart hier.',
      'Je suis réveiller à sept heures et demie hier.',
    ],
    correctIndex: 1,
    explanation: 'All reflexive verbs use être in the passé composé: je me suis réveillé(e); 7:30 is sept heures et demie.',
  },
  {
    id: 'igfr-q-1-1-2',
    subtopicId: 'igfr-1-1',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete this sentence about school rules and household chores:',
    segments: ['Au collège, il est ', ' d’utiliser son portable en classe, et chez moi je fais la ', ' après le dîner.'],
    wordBank: ['interdit', 'vaisselle', 'content', 'chambre'],
    answers: ['interdit', 'vaisselle'],
    explanation: 'il est interdit de = it is forbidden to; faire la vaisselle = to wash the dishes.',
  },
  {
    id: 'igfr-q-1-1-3',
    subtopicId: 'igfr-1-1',
    type: 'short-answer',
    marks: 2,
    prompt: 'Write ONE sentence in French saying what time you get up on weekdays AND giving one chore you do at home.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'En semaine, je me lève à sept heures et je range ma chambre.',
      markPoints: [
        { id: 'mp1', markDescription: 'Correct reflexive routine verb + time (je me lève / réveille + heure)', requiredKeywordGroups: [['me lève', 'me leve', 'me réveille', 'me reveille'], ['heure', 'heures', '7h', '6h', '8h']] },
        { id: 'mp2', markDescription: 'Valid household chore in French', requiredKeywordGroups: [['vaisselle', 'range', 'aspirateur', 'table', 'poubelles', 'pelouse', 'cuisine', 'ménage', 'menage', 'lit']] },
      ],
    },
    explanation: 'Combine reflexive je me lève + à ... heures with a household chore such as ranger ma chambre or faire la vaisselle.',
  },
  {
    id: 'igfr-q-1-1-4',
    subtopicId: 'igfr-1-1',
    type: 'mcq',
    marks: 1,
    prompt: 'What does « le collège » mean in France?',
    options: ['University', 'Lower secondary school (ages 11–15)', 'Primary school', 'A school uniform'],
    correctIndex: 1,
    explanation: 'Le collège is lower secondary school (11–15), le lycée is 15–18, and university is l’université.',
  },
  {
    id: 'igfr-q-1-1-5',
    subtopicId: 'igfr-1-1',
    type: 'matching',
    marks: 2,
    prompt: 'Match each French chore or rule phrase to its English meaning:',
    pairs: [
      { left: 'passer l’aspirateur', right: 'to do the vacuuming' },
      { left: 'sortir les poubelles', right: 'to take out the bins' },
      { left: 'il faut porter l’uniforme', right: 'you must wear uniform' },
      { left: 'se brosser les dents', right: 'to brush one’s teeth' },
    ],
    explanation: 'Accurate daily-life and school-rule phrases are core Topic Area A vocabulary.',
  },

  // 1.2 (5)
  {
    id: 'igfr-q-1-2-1',
    subtopicId: 'igfr-1-2',
    type: 'mcq',
    marks: 1,
    prompt: 'Which sentence uses the negative partitive article CORRECTLY?',
    options: [
      'Je ne mange pas du fromage.',
      'Je ne mange pas de fromage.',
      'Je ne mange pas des fromage.',
      'Je ne mange pas le fromage.',
    ],
    correctIndex: 1,
    explanation: 'After a negative (ne... pas / jamais / plus), du / de la / des ALWAYS reduce to plain de (or d’).',
  },
  {
    id: 'igfr-q-1-2-2',
    subtopicId: 'igfr-1-2',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Fill in the correct articles for food and pain:',
    segments: ['Au déjeuner, je bois ', ' eau minérale, et hier soir j’ai eu mal ', ' tête.'],
    wordBank: ['de l’', 'à la', 'du', 'aux'],
    answers: ['de l’', 'à la'],
    explanation: 'eau begins with a vowel → de l’eau; tête is feminine singular → avoir mal à la tête.',
  },
  {
    id: 'igfr-q-1-2-3',
    subtopicId: 'igfr-1-2',
    type: 'short-answer',
    marks: 2,
    prompt: 'Write a polite sentence in French to order a drink and a main course in a restaurant, OR politely complain that your soup is cold.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Bonjour monsieur, je voudrais un jus d’orange et le poulet rôti, s’il vous plaît.',
      markPoints: [
        { id: 'mp1', markDescription: 'Polite French opener/conditional (je voudrais / je vais prendre / excusez-moi / s’il vous plaît)', requiredKeywordGroups: [['voudrais', 'prends', 'prendre', 'excusez', 'pardon', 'plait', 'plaît']] },
        { id: 'mp2', markDescription: 'Food/drink vocabulary or cold soup complaint', requiredKeywordGroups: [['jus', 'eau', 'café', 'cafe', 'thé', 'the', 'poulet', 'poisson', 'salade', 'soupe', 'froide', 'plat', 'pizza', 'pâtes', 'pates']] },
      ],
    },
    explanation: 'Use vous politeness (je voudrais..., s’il vous plaît or Excusez-moi, ma soupe est froide).',
  },
  {
    id: 'igfr-q-1-2-4',
    subtopicId: 'igfr-1-2',
    type: 'mcq',
    marks: 1,
    prompt: 'How do you say "I have toothache" (plural teeth: les dents) in French?',
    options: ['Je suis mal aux dents.', 'J’ai mal au dents.', 'J’ai mal aux dents.', 'J’ai mal de les dents.'],
    correctIndex: 2,
    explanation: 'French uses avoir mal à + contracted article: à + les = aux → J’ai mal aux dents.',
  },
  {
    id: 'igfr-q-1-2-5',
    subtopicId: 'igfr-1-2',
    type: 'multi-select',
    marks: 2,
    selectCount: 2,
    prompt: 'Select TWO French phrases that describe HEALTHY lifestyle habits:',
    options: [
      'Manger cinq fruits et légumes par jour',
      'Éviter la restauration rapide et dormir huit heures',
      'Boire trop de boissons gazeuses sucrées',
      'Fumer un paquet de cigarettes chaque jour',
    ],
    correctIndices: [0, 1],
    explanation: 'Eating fruit/veg, avoiding fast food, and sleeping well define une vie saine.',
  },

  // 2.1 (5)
  {
    id: 'igfr-q-2-1-1',
    subtopicId: 'igfr-2-1',
    type: 'mcq',
    marks: 1,
    prompt: 'Which sentence correctly distinguishes sports and musical instruments in French?',
    options: [
      'Je joue du tennis et je joue au piano.',
      'Je joue au tennis et je joue du piano.',
      'Je fais au tennis et je joue de la piano.',
      'Je joue le tennis et je fais du piano.',
    ],
    correctIndex: 1,
    explanation: 'Use jouer à for sports/games (au tennis) and jouer de for instruments (du piano).',
  },
  {
    id: 'igfr-q-2-1-2',
    subtopicId: 'igfr-2-1',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the sentence using the right tense with depuis and feminine adjective agreement:',
    segments: ['Ma sœur est très ', ' et elle ', ' de la natation depuis quatre ans.'],
    wordBank: ['sportive', 'fait', 'sportif', 'a fait'],
    answers: ['sportive', 'fait'],
    explanation: 'Feminine of sportif is sportive; actions still continuing use present tense + depuis (fait).',
  },
  {
    id: 'igfr-q-2-1-3',
    subtopicId: 'igfr-2-1',
    type: 'short-answer',
    marks: 2,
    prompt: 'Write ONE French sentence saying how you get on with a family member or friend AND giving a justified personality reason.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Je m’entends bien avec ma sœur parce qu’elle est généreuse et drôle.',
      markPoints: [
        { id: 'mp1', markDescription: 'Relationship verb + person (m’entends / dispute / aime + family/friend)', requiredKeywordGroups: [['entends', 'dispute', 'adore', 'aime'], ['sœur', 'soeur', 'frère', 'frere', 'mère', 'mere', 'père', 'pere', 'parents', 'ami', 'amie', 'copain', 'copine']] },
        { id: 'mp2', markDescription: 'Justification connective + personality adjective', requiredKeywordGroups: [['parce', 'car', 'puisque'], ['généreu', 'genereu', 'gentil', 'drôle', 'drole', 'sympa', 'patient', 'loyal', 'amusant', 'compréhens', 'comprehens', 'intelligent', 'honnete', 'honnête']] },
      ],
    },
    explanation: 'Pair s’entendre bien avec with car/parce que and an agreed personality adjective.',
  },
  {
    id: 'igfr-q-2-1-4',
    subtopicId: 'igfr-2-1',
    type: 'mcq',
    marks: 1,
    prompt: 'According to the BAGS placement rule, which phrase puts the adjective in the CORRECT position?',
    options: ['Une maison grande', 'Une grande maison', 'Un chat noir petit', 'Une voiture rouge nouvelle'],
    correctIndex: 1,
    explanation: 'Size adjectives (grand/petit) belong to BAGS (Beauty, Age, Goodness, Size) and precede the noun.',
  },
  {
    id: 'igfr-q-2-1-5',
    subtopicId: 'igfr-2-1',
    type: 'mcq',
    marks: 1,
    prompt: 'What does « le cyberharcèlement » mean in French technology texts?',
    options: ['Downloading music', 'Cyberbullying', 'Fast Wi-Fi', 'Online shopping'],
    correctIndex: 1,
    explanation: 'Le cyberharcèlement = cyberbullying; la vie privée = privacy.',
  },

  // 2.2 (5)
  {
    id: 'igfr-q-2-2-1',
    subtopicId: 'igfr-2-2',
    type: 'matching',
    marks: 2,
    prompt: 'Match each destination to the correct French preposition (en / au / aux / à):',
    pairs: [
      { left: 'France / Italie', right: 'en' },
      { left: 'Maroc / Japon', right: 'au' },
      { left: 'États-Unis / Pays-Bas', right: 'aux' },
      { left: 'Paris / Nice', right: 'à' },
    ],
    explanation: 'Feminine/vowel country = en; masculine country = au; plural country = aux; all cities = à.',
  },
  {
    id: 'igfr-q-2-2-2',
    subtopicId: 'igfr-2-2',
    type: 'mcq',
    marks: 1,
    prompt: 'Which sentence correctly combines imparfait (weather) and passé composé (completed event)?',
    options: [
      'Il a fait beau, donc nous allions à la plage.',
      'Comme il faisait beau, nous sommes allés à la plage.',
      'Comme il fait beau, nous sommes allé à la plage.',
      'Il faisait beau, donc nous avons allés à la plage.',
    ],
    correctIndex: 1,
    explanation: 'Weather description uses imparfait (il faisait beau); specific completed trip uses être + agreement (nous sommes allés).',
  },
  {
    id: 'igfr-q-2-2-3',
    subtopicId: 'igfr-2-2',
    type: 'short-answer',
    marks: 2,
    prompt: 'Write ONE sentence in French for a hotel reception role-play reporting a problem in your room.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Excusez-moi, il n’y a pas d’eau chaude dans ma chambre et la climatisation ne marche pas.',
      markPoints: [
        { id: 'mp1', markDescription: 'Names hotel room / facility (chambre, douche, eau chaude, climatisation, Wi-Fi, serviettes)', requiredKeywordGroups: [['chambre', 'douche', 'eau', 'climatisation', 'wifi', 'wi-fi', 'serviette', 'chauffage', 'lit', 'fenêtre', 'fenetre', 'bruit', 'bruyant']] },
        { id: 'mp2', markDescription: 'Clear problem verb/phrase (ne marche pas / il manque / il n’y a pas / sale / cassé)', requiredKeywordGroups: [['marche pas', 'manque', 'pas d', 'sale', 'cassé', 'casse', 'froid', 'bruyant', 'problème', 'probleme']] },
      ],
    },
    explanation: 'Useful hotel complaint patterns: ne marche pas, il n’y a pas de..., il manque..., est sale/bruyante.',
  },
  {
    id: 'igfr-q-2-2-4',
    subtopicId: 'igfr-2-2',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the transport prepositions:',
    segments: ['Nous voyageons souvent ', ' train pour aller à la mer, puis nous explorons le village ', ' pied.'],
    wordBank: ['en', 'à', 'au', 'dans'],
    answers: ['en', 'à'],
    explanation: 'Enclosed vehicles take en (en train, en avion); open/foot transport takes à (à pied, à vélo).',
  },
  {
    id: 'igfr-q-2-2-5',
    subtopicId: 'igfr-2-2',
    type: 'mcq',
    marks: 1,
    prompt: 'What does « en demi-pension » mean when booking a French hotel?',
    options: ['Room only with no meals', 'Half-board (breakfast plus one main meal)', 'Half-price discount for students', 'A campsite pitch'],
    correctIndex: 1,
    explanation: 'Demi-pension = half-board; pension complète = full-board.',
  },

  // 3.1 (5)
  {
    id: 'igfr-q-3-1-1',
    subtopicId: 'igfr-3-1',
    type: 'mcq',
    marks: 1,
    prompt: 'Which French comparative sentence is grammatically CORRECT?',
    options: [
      'La vie à la campagne est plus bonne qu’en ville.',
      'La vie à la campagne est meilleure qu’en ville.',
      'La vie à la campagne est meilleur que en ville.',
      'La vie à la campagne est mieux bonne qu’en ville.',
    ],
    correctIndex: 1,
    explanation: 'The comparative of bon is meilleur(e) — here feminine meilleure agreeing with la vie, plus qu’ before a vowel.',
  },
  {
    id: 'igfr-q-3-1-2',
    subtopicId: 'igfr-3-1',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the directions using polite imperative and contracted preposition:',
    segments: ['Allez tout ', ' jusqu’au rond-point ; la gare se trouve en face ', ' parc.'],
    wordBank: ['droit', 'du', 'gauche', 'de le'],
    answers: ['droit', 'du'],
    explanation: 'Allez tout droit = go straight ahead; de + le ALWAYS contracts to du (en face du parc).',
  },
  {
    id: 'igfr-q-3-1-3',
    subtopicId: 'igfr-3-1',
    type: 'short-answer',
    marks: 2,
    prompt: 'Write ONE sentence in French describing an advantage OR disadvantage of your home town using "il y a" or "on peut".',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Dans ma ville, on peut visiter de beaux parcs, mais malheureusement il y a trop de circulation.',
      markPoints: [
        { id: 'mp1', markDescription: 'Uses il y a / il n’y a pas / on peut structure', requiredKeywordGroups: [['il y a', 'n’y a pas', 'ny a pas', 'on peut']] },
        { id: 'mp2', markDescription: 'Relevant town feature/activity (parc, cinéma, magasins, circulation, transports, bruit, pollution)', requiredKeywordGroups: [['parc', 'cinéma', 'cinema', 'magasin', 'piscine', 'stade', 'transport', 'circulation', 'embouteillage', 'bruit', 'pollution', 'plage', 'musée', 'musee', 'activité', 'activite', 'shopping', 'château', 'chateau']] },
      ],
    },
    explanation: 'Pair il y a / on peut with town amenities or drawbacks to build natural Paper 4 sentences.',
  },
  {
    id: 'igfr-q-3-1-4',
    subtopicId: 'igfr-3-1',
    type: 'mcq',
    marks: 1,
    prompt: 'Where do you go in France if you want to BORROW books for free (rather than buy them)?',
    options: ['À la librairie', 'À la bibliothèque', 'À la boulangerie', 'À la mairie'],
    correctIndex: 1,
    explanation: 'La bibliothèque = library; la librairie = bookshop (classic false friend!).',
  },
  {
    id: 'igfr-q-3-1-5',
    subtopicId: 'igfr-3-1',
    type: 'mcq',
    marks: 1,
    prompt: 'What ticket are you asking for if you say « Je voudrais un aller-retour pour Lyon »?',
    options: ['A single one-way ticket', 'A return (round-trip) ticket', 'A platform change', 'A half-price child pass'],
    correctIndex: 1,
    explanation: 'Un aller simple = single; un aller-retour = return ticket.',
  },

  // 3.2 (5)
  {
    id: 'igfr-q-3-2-1',
    subtopicId: 'igfr-3-2',
    type: 'mcq',
    marks: 1,
    prompt: 'Which French sentence expresses a future profession WITHOUT an article error?',
    options: [
      'Plus tard, je voudrais devenir un avocat.',
      'Plus tard, je voudrais devenir avocat.',
      'Plus tard, je voudrais être une médecin.',
      'Plus tard, je suis un ingénieur.',
    ],
    correctIndex: 1,
    explanation: 'Omit un/une directly after être or devenir before a bare profession title (devenir avocat).',
  },
  {
    id: 'igfr-q-3-2-2',
    subtopicId: 'igfr-3-2',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the green action sentence:',
    segments: ['Pour lutter contre le réchauffement climatique, il faudrait ', ' les déchets et ', ' l’énergie.'],
    wordBank: ['recycler', 'économiser', 'gaspiller', 'polluer'],
    answers: ['recycler', 'économiser'],
    explanation: 'recycler les déchets (recycle waste) and économiser l’énergie (save energy) pair with il faudrait + infinitive.',
  },
  {
    id: 'igfr-q-3-2-3',
    subtopicId: 'igfr-3-2',
    type: 'short-answer',
    marks: 2,
    prompt: 'Write ONE sentence in French explaining a concrete action we should take to protect the environment.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Pour protéger la planète, on devrait recycler le plastique et utiliser les transports en commun.',
      markPoints: [
        { id: 'mp1', markDescription: 'Uses modal action structure (il faut / il faudrait / on devrait / nous devons)', requiredKeywordGroups: [['faut', 'faudrait', 'devrait', 'devons', 'essaye', 'essaie']] },
        { id: 'mp2', markDescription: 'Concrete eco-action (recycler, trier, économiser, vélo, transports en commun, éteindre, renouvelable)', requiredKeywordGroups: [['recycl', 'trier', 'économis', 'economis', 'vélo', 'velo', 'transport', 'éteindre', 'eteindre', 'plastique', 'renouvelable', 'solaire', 'eau', 'arbre']] },
      ],
    },
    explanation: 'Combine il faudrait / on devrait with clear environmental infinitives like recycler or économiser.',
  },
  {
    id: 'igfr-q-3-2-4',
    subtopicId: 'igfr-3-2',
    type: 'matching',
    marks: 2,
    prompt: 'Match each global-issue or work term to its English meaning:',
    pairs: [
      { left: 'le chômage', right: 'unemployment' },
      { left: 'les sans-abri', right: 'homeless people' },
      { left: 'faire du bénévolat', right: 'to do volunteering' },
      { left: 'faire un stage', right: 'to do work experience' },
    ],
    explanation: 'Essential vocabulary for Topic Areas D (Work) and E (International World).',
  },
  {
    id: 'igfr-q-3-2-5',
    subtopicId: 'igfr-3-2',
    type: 'mcq',
    marks: 1,
    prompt: 'What does « éviter le gaspillage alimentaire » mean?',
    options: ['Eating more fast food', 'Avoiding food waste', 'Buying imported snacks', 'Cooking spicy meals'],
    correctIndex: 1,
    explanation: 'Le gaspillage = waste; alimentaire = relating to food.',
  },

  // 4.1 (5)
  {
    id: 'igfr-q-4-1-1',
    subtopicId: 'igfr-4-1',
    type: 'mcq',
    marks: 1,
    prompt: 'Which French "si" clause is grammatically CORRECT ("If I had time, I would travel")?',
    options: [
      'Si j’aurais le temps, je voyagerais.',
      'Si j’avais le temps, je voyagerais.',
      'Si j’ai le temps, je voyagerais.',
      'Si j’avais le temps, je voyagerai.',
    ],
    correctIndex: 1,
    explanation: 'Remember the golden rule: Si + imparfait (j’avais) → conditionnel (je voyagerais); NEVER put -rais after si!',
  },
  {
    id: 'igfr-q-4-1-2',
    subtopicId: 'igfr-4-1',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the irregular simple future sentence (using quand + future):',
    segments: ['Quand je ', ' plus âgé(e), j’', ' travailler à l’étranger.'],
    wordBank: ['serai', 'irai', 'suis', 'allais'],
    answers: ['serai', 'irai'],
    explanation: 'être future stem = ser- (serai); aller future stem = ir- (irai); French uses future after quand for future meaning.',
  },
  {
    id: 'igfr-q-4-1-3',
    subtopicId: 'igfr-4-1',
    type: 'short-answer',
    marks: 2,
    prompt: 'Explain HOW to form the imparfait of regular/most verbs AND give the ONE irregular imparfait stem in French.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Take the nous present-tense form, drop -ons, and add -ais, -ais, -ait, -ions, -iez, -aient. The only irregular stem is être, which uses ét- (e.g. j’étais, c’était).',
      markPoints: [
        { id: 'mp1', markDescription: 'Nous present stem minus -ons + imparfait endings (-ais/-ait/-ions/-aient)', requiredKeywordGroups: [['nous'], ['ons', 'ais', 'ait', 'aient']] },
        { id: 'mp2', markDescription: 'Identifies être → ét- as the sole irregular stem', requiredKeywordGroups: [['être', 'etre'], ['ét', 'etais', 'etait', 'étais', 'était']] },
      ],
    },
    explanation: 'The nous-minus-ons rule covers almost every French verb except être (ét-).',
  },
  {
    id: 'igfr-q-4-1-4',
    subtopicId: 'igfr-4-1',
    type: 'multi-select',
    marks: 2,
    selectCount: 2,
    prompt: 'Select TWO verbs that take ÊTRE as their auxiliary in the passé composé:',
    options: ['aller (to go)', 'se lever (to get up)', 'manger (to eat)', 'regarder (to watch)'],
    correctIndices: [0, 1],
    explanation: 'DR & MRS VANDERTRAMP verbs (like aller) and ALL reflexive verbs (like se lever) take être.',
  },
  {
    id: 'igfr-q-4-1-5',
    subtopicId: 'igfr-4-1',
    type: 'mcq',
    marks: 1,
    prompt: 'What does « Je ne mange que des fruits le matin » mean?',
    options: ['I never eat fruit in the morning', 'I only eat fruit in the morning', 'I no longer eat fruit in the morning', 'I eat nothing in the morning'],
    correctIndex: 1,
    explanation: 'ne... que means "only" — a great Band-1 restrictive structure to recognise and use.',
  },

  // 4.2 (5)
  {
    id: 'igfr-q-4-2-1',
    subtopicId: 'igfr-4-2',
    type: 'matching',
    marks: 2,
    prompt: 'Match each tricky French false friend (faux ami) to its TRUE English meaning:',
    pairs: [
      { left: 'actuellement', right: 'currently / at the moment' },
      { left: 'assister à', right: 'to attend (an event)' },
      { left: 'sensible', right: 'sensitive' },
      { left: 'blesser', right: 'to injure / hurt' },
    ],
    explanation: 'Knowing high-frequency faux amis prevents easy mark losses in Papers 1 and 2.',
  },
  {
    id: 'igfr-q-4-2-2',
    subtopicId: 'igfr-4-2',
    type: 'mcq',
    marks: 1,
    prompt: 'In a Paper 1 Listening clip, Clara says: « Avant j’adorais le tennis, maintenant je préfère la natation, mais l’an prochain je vais essayer l’escalade. » Which sport does Clara prefer NOW?',
    options: ['Tennis', 'Swimming (la natation)', 'Climbing (l’escalade)', 'Football'],
    correctIndex: 1,
    explanation: 'Time markers filter distractors: avant (past = tennis), maintenant (now = natation), l’an prochain (future = escalade).',
  },
  {
    id: 'igfr-q-4-2-3',
    subtopicId: 'igfr-4-2',
    type: 'short-answer',
    marks: 2,
    prompt: 'State TWO essential things you must include to score top marks on Cambridge 0520 Paper 4 Question 3 (130–140 words).',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Cover every bullet point in the prompt, use at least three distinct timeframes/tenses (past, present, future/conditional) accurately, and include justified opinions, complex connectives, and idioms.',
      markPoints: [
        { id: 'mp1', markDescription: 'Cover all bullet points OR use 3+ distinct tenses/timeframes', requiredKeywordGroups: [['bullet', 'all points', 'tense', 'timeframe', 'past', 'future', 'conditional']] },
        { id: 'mp2', markDescription: 'Justified opinions / complex connectives / idioms / 5-min accuracy proofread', requiredKeywordGroups: [['opinion', 'justif', 'connective', 'idiom', 'complex', 'proofread', 'accuracy', 'agreement']] },
      ],
    },
    explanation: 'Q3 is marked across Task Completion (all bullets), Range (tenses, connectives, idioms), and Accuracy.',
  },
  {
    id: 'igfr-q-4-2-4',
    subtopicId: 'igfr-4-2',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the Paper 3 Speaking strategy:',
    segments: ['In a hotel or shop Role-Play use the polite form ', ', and extend Topic Conversation answers with a reason, example, and different ', '.'],
    wordBank: ['vous', 'tense', 'tu', 'whisper'],
    answers: ['vous', 'tense'],
    explanation: 'Use vous with strangers/staff in Role-Plays, and A-R-E-T (Answer, Reason, Example, Tense) in Conversations.',
  },
  {
    id: 'igfr-q-4-2-5',
    subtopicId: 'igfr-4-2',
    type: 'mcq',
    marks: 1,
    prompt: 'What should you say politely in a Paper 3 Speaking exam if you did not catch the examiner’s question?',
    options: ['Silence for 30 seconds', 'Pourriez-vous répéter la question, s’il vous plaît ?', 'Je ne sais rien.', 'Au revoir !'],
    correctIndex: 1,
    explanation: 'Politely asking the examiner to repeat in authentic French keeps communication flowing smoothly.',
  },
];

export const IGCSE_FRENCH_FLASHCARDS: FlashcardItem[] = [
  // 1.1
  { id: 'igfr-fc-1-1-1', subtopicId: 'igfr-1-1', front: 'Conjugate "se lever" (to get up) in present tense & passé composé (je).', backBullets: ['Present: je me lève (tu te lèves, il se lève, nous nous levons, vous vous levez, ils se lèvent).', 'Passé composé: je me suis levé(e) (ALWAYS être!).'] },
  { id: 'igfr-fc-1-1-2', subtopicId: 'igfr-1-1', front: 'How do you say 7:15, 7:30, and 7:45 in French?', backBullets: ['7:15 = sept heures et quart.', '7:30 = sept heures et demie.', '7:45 = huit heures moins le quart.'] },
  { id: 'igfr-fc-1-1-3', subtopicId: 'igfr-1-1', front: 'Give 4 essential French household chore phrases.', backBullets: ['faire la vaisselle (wash dishes), ranger ma chambre (tidy room), passer l’aspirateur (vacuum), sortir les poubelles (take out bins).'] },
  { id: 'igfr-fc-1-1-4', subtopicId: 'igfr-1-1', front: 'Two structures for stating school rules (+ infinitive)?', backBullets: ['Il faut / On doit + infinitive (must).', 'Il est interdit de / On n’a pas le droit de + infinitive (forbidden).'] },
  { id: 'igfr-fc-1-1-5', subtopicId: 'igfr-1-1', front: 'Distinguish le collège, le lycée, and l’université.', backBullets: ['le collège = secondary (11–15); le lycée = sixth form/high school (15–18); l’université = university.'] },

  // 1.2
  { id: 'igfr-fc-1-2-1', subtopicId: 'igfr-1-2', front: 'When do du / de la / de l’ / des shrink to plain de / d’?', backBullets: ['After ANY negative (Je ne mange pas de viande) AND after expressions of quantity (beaucoup de fruits, un kilo de pommes, trop de sucre).'] },
  { id: 'igfr-fc-1-2-2', subtopicId: 'igfr-1-2', front: 'Which articles follow aimer, adorer, préférer, and détester?', backBullets: ['Definite articles le / la / l’ / les (J’adore le fromage, Je déteste les champignons) — NEVER du/des!'] },
  { id: 'igfr-fc-1-2-3', subtopicId: 'igfr-1-2', front: 'Give 3 polite phrases for ordering or complaining in a French restaurant.', backBullets: ['Je voudrais... / Comme plat principal, je vais prendre...', 'L’addition, s’il vous plaît.', 'Excusez-moi, ma soupe est froide / il manque une fourchette.'] },
  { id: 'igfr-fc-1-2-4', subtopicId: 'igfr-1-2', front: 'How does "avoir mal à" change with gender and number?', backBullets: ['Masc: au (au dos/ventre); Fem: à la (à la tête/gorge); Vowel: à l’ (à l’estomac); Plural: aux (aux dents/pieds).'] },
  { id: 'igfr-fc-1-2-5', subtopicId: 'igfr-1-2', front: 'Translate: "To stay fit, I eat a balanced diet and avoid fast food."', backBullets: ['Pour rester en forme, je mange équilibré et j’évite la restauration rapide (le fast-food).'] },

  // 2.1
  { id: 'igfr-fc-2-1-1', subtopicId: 'igfr-2-1', front: 'What does the BAGS rule tell you about French adjectives?', backBullets: ['Adjectives of Beauty, Age, Goodness, and Size (beau, jeune, bon, grand, petit) go BEFORE the noun; almost all others go AFTER.'] },
  { id: 'igfr-fc-2-1-2', subtopicId: 'igfr-2-1', front: 'Translate: "I get on well with my sister because she is understanding."', backBullets: ['Je m’entends bien avec ma sœur parce qu’elle est compréhensive.'] },
  { id: 'igfr-fc-2-1-3', subtopicId: 'igfr-2-1', front: 'Distinguish jouer à, jouer de, and faire de.', backBullets: ['jouer à = sports/games (au foot); jouer de = instruments (de la guitare); faire de = individual sports/activities (de la natation).'] },
  { id: 'igfr-fc-2-1-4', subtopicId: 'igfr-2-1', front: 'How do you translate "I have been playing piano for 5 years" into French?', backBullets: ['Present tense + depuis: « Je joue du piano depuis cinq ans. »'] },
  { id: 'igfr-fc-2-1-5', subtopicId: 'igfr-2-1', front: 'Give 2 balancing connectives for a social media pros-and-cons paragraph.', backBullets: ['D’un côté... d’un autre côté... (On one hand... on the other...); cependant / pourtant (however/yet); bien que... (although).'] },

  // 2.2
  { id: 'igfr-fc-2-2-1', subtopicId: 'igfr-2-2', front: 'Rules for en, au, aux, and à with countries and cities?', backBullets: ['en = feminine/vowel countries (en France, en Espagne); au = masc countries (au Maroc); aux = plural (aux États-Unis); à = all cities (à Paris).'] },
  { id: 'igfr-fc-2-2-2', subtopicId: 'igfr-2-2', front: 'When do transport modes use en vs à?', backBullets: ['Inside vehicle = en (en train, en avion, en voiture); open/foot = à (à pied, à vélo, à cheval).'] },
  { id: 'igfr-fc-2-2-3', subtopicId: 'igfr-2-2', front: 'Give 3 phrases for reporting a hotel problem in French.', backBullets: ['La climatisation ne marche pas; Il n’y a pas d’eau chaude; Il manque des serviettes / La chambre est trop bruyante.'] },
  { id: 'igfr-fc-2-2-4', subtopicId: 'igfr-2-2', front: 'How do imparfait and passé composé work together in a holiday story?', backBullets: ['Imparfait sets weather/scene/feelings (Il faisait chaud, l’hôtel était beau); Passé composé narrates completed events (Nous avons visité...).'] },
  { id: 'igfr-fc-2-2-5', subtopicId: 'igfr-2-2', front: 'Translate: "Is breakfast included?" and "half-board".', backBullets: ['Est-ce que le petit déjeuner est compris ? | en demi-pension.'] },

  // 3.1
  { id: 'igfr-fc-3-1-1', subtopicId: 'igfr-3-1', front: 'Translate 4 key direction commands (vous imperative).', backBullets: ['Allez tout droit (go straight); Tournez à gauche/droite (turn left/right); Traversez le pont (cross the bridge); Prenez la première rue à droite.'] },
  { id: 'igfr-fc-3-1-2', subtopicId: 'igfr-3-1', front: 'How do en face de / à côté de contract before le and les?', backBullets: ['de + le → du (en face du parc); de + les → des (à côté des magasins).'] },
  { id: 'igfr-fc-3-1-3', subtopicId: 'igfr-3-1', front: 'False friend check: la librairie vs la bibliothèque?', backBullets: ['la librairie = bookshop; la bibliothèque = library.'] },
  { id: 'igfr-fc-3-1-4', subtopicId: 'igfr-3-1', front: 'What is the comparative of bon (good) and bien (well)?', backBullets: ['bon → meilleur(e) (NEVER plus bon!); bien → mieux.'] },
  { id: 'igfr-fc-3-1-5', subtopicId: 'igfr-3-1', front: 'Translate: "If I were mayor, I would build more cycle lanes."', backBullets: ['Si j’étais maire, je construirais plus de pistes cyclables.'] },

  // 3.2
  { id: 'igfr-fc-3-2-1', subtopicId: 'igfr-3-2', front: 'Give 4 key French environmental vocabulary items.', backBullets: ['le réchauffement climatique (global warming), trier/recycler les déchets (sort/recycle waste), économiser l’énergie (save energy), les énergies renouvelables.'] },
  { id: 'igfr-fc-3-2-2', subtopicId: 'igfr-3-2', front: 'Translate: "We ought to ban single-use plastics."', backBullets: ['Il faudrait interdire les plastiques à usage unique.'] },
  { id: 'igfr-fc-3-2-3', subtopicId: 'igfr-3-2', front: 'Translate: "I did voluntary work to help homeless people."', backBullets: ['J’ai fait du bénévolat pour aider les sans-abri (les SDF).'] },
  { id: 'igfr-fc-3-2-4', subtopicId: 'igfr-3-2', front: 'Article rule for professions after être or devenir?', backBullets: ['Drop un/une! Say « Je veux devenir médecin » / « Elle est ingénieur » (only add un/une with an adjective: « un bon médecin »).'] },
  { id: 'igfr-fc-3-2-5', subtopicId: 'igfr-3-2', front: 'What does « faire un stage » mean?', backBullets: ['To do a work experience placement / internship.'] },

  // 4.1
  { id: 'igfr-fc-4-1-1', subtopicId: 'igfr-4-1', front: 'Which verbs take être in the passé composé, and what extra rule applies?', backBullets: ['DR & MRS VANDERTRAMP (17 verbs) + ALL reflexives. Past participle MUST agree in gender & number with the subject (Elle est allée).'] },
  { id: 'igfr-fc-4-1-2', subtopicId: 'igfr-4-1', front: 'How is the imparfait formed, and what is the ONLY irregular stem?', backBullets: ['Nous present form minus -ons + -ais, -ais, -ait, -ions, -iez, -aient. Only irregular stem: être → ét- (j’étais).'] },
  { id: 'igfr-fc-4-1-3', subtopicId: 'igfr-4-1', front: 'Give the irregular future/conditional stems for être, avoir, aller, faire, pouvoir.', backBullets: ['être → ser-, avoir → aur-, aller → ir-, faire → fer-, pouvoir → pourr-.'] },
  { id: 'igfr-fc-4-1-4', subtopicId: 'igfr-4-1', front: 'What tense sequence is mandatory in a hypothetical French "si" clause?', backBullets: ['Si + imparfait → conditionnel (« Si j’avais le temps, j’irais en France »). NEVER put -rais after si!'] },
  { id: 'igfr-fc-4-1-5', subtopicId: 'igfr-4-1', front: 'Translate: ne... jamais, ne... plus, ne... rien, ne... que.', backBullets: ['never, no longer, nothing, only.'] },

  // 4.2
  { id: 'igfr-fc-4-2-1', subtopicId: 'igfr-4-2', front: 'Translate 4 classic French false friends: actuellement, assister à, attendre, blesser.', backBullets: ['actuellement = currently; assister à = to attend; attendre = to wait for; blesser = to injure.'] },
  { id: 'igfr-fc-4-2-2', subtopicId: 'igfr-4-2', front: 'How do you beat distractors in Paper 1 Listening?', backBullets: ['Listen past the first option for reversal words (mais, cependant, finalement) and check tense markers (avant vs maintenant vs demain).'] },
  { id: 'igfr-fc-4-2-3', subtopicId: 'igfr-4-2', front: 'Word targets and key ingredients for Paper 4 Q2 and Q3?', backBullets: ['Q2 = 80–90 words; Q3 = 130–140 words. Hit EVERY bullet, include 3+ tenses, justified opinions, complex connectives, and idioms.'] },
  { id: 'igfr-fc-4-2-4', subtopicId: 'igfr-4-2', front: 'What does A-R-E-T stand for in Paper 3 Speaking Conversations?', backBullets: ['Answer + Reason (car/parce que) + Example (par exemple) + Tense shift (past/future).'] },
  { id: 'igfr-fc-4-2-5', subtopicId: 'igfr-4-2', front: 'Give 3 high-band French idioms/structures to include in Q3 writing.', backBullets: ['avoir hâte de + inf (look forward to), après avoir + pp (after having done), bien que ce soit... (although it is...).'] },
];

export const IGCSE_FRENCH_CHEAT_SHEETS: CheatSheetItem[] = [
  {
    id: 'igfr-cs-1',
    slug: 'topic-1-everyday-food-school',
    title: '1. Everyday Life, School & Food Cheat Sheet',
    topicNumber: 1,
    topicName: 'Everyday Activities & School',
    summary: 'Reflexives, time, chores, school rules, partitive articles, ordering out, and health.',
    accentColor: '#2563EB',
    sections: [
      {
        heading: 'Routine, Home & School Rules',
        points: [
          'Reflexives: je me lève / je me suis levé(e) (ALWAYS être in passé composé!)',
          'Chores: faire la vaisselle, ranger ma chambre, passer l’aspirateur, sortir les poubelles',
          'Rules (+ infinitive): il faut / on doit / il est interdit de / on n’a pas le droit de',
        ],
      },
      {
        heading: 'Food, Partitives & Health',
        points: [
          'Partitives: du / de la / de l’ / des → ALWAYS shrink to de/d’ after negatives (pas de) & quantities (beaucoup de)',
          'Preferences (aimer/détester) take definite le/la/l’/les (J’aime le pain)',
          'Restaurant: Je voudrais..., L’addition s’il vous plaît, Ma soupe est froide | Pain: avoir mal au/à la/à l’/aux',
        ],
      },
    ],
  },
  {
    id: 'igfr-cs-2',
    slug: 'topic-2-personal-hobbies-holidays',
    title: '2. Family, Hobbies, Tech & Holidays Cheat Sheet',
    topicNumber: 2,
    topicName: 'Personal & Social Life',
    summary: 'BAGS adjectives, jouer/faire, depuis + present, country prepositions, and past holiday stories.',
    accentColor: '#2563EB',
    sections: [
      {
        heading: 'Relationships, Sports & Tech',
        points: [
          'BAGS adjectives (Beauty, Age, Goodness, Size) precede the noun; agree gender/plural (sportif → sportive)',
          'Sports/Music: jouer à (au foot), jouer de (du piano), faire de (de la natation) | Ongoing duration: present + depuis',
          'Tech balance: d’un côté... d’un autre côté..., cependant, les réseaux sociaux, le cyberharcèlement',
        ],
      },
      {
        heading: 'Holidays & Travel Narratives',
        points: [
          'Destinations: en (fem/vowel country), au (masc country), aux (plural), à (city) | Transport: en train vs à pied/vélo',
          'Hotel problems: ne marche pas, il n’y a pas d’eau chaude, il manque des serviettes, en demi-pension',
          'Narrative gold: Imparfait (Il faisait chaud, c’était beau) + Passé composé (Nous sommes allés, j’ai visité)',
        ],
      },
    ],
  },
  {
    id: 'igfr-cs-3',
    slug: 'topic-3-town-environment-careers',
    title: '3. Town, Environment & Careers Cheat Sheet',
    topicNumber: 3,
    topicName: 'The World Around Us',
    summary: 'Directions, comparatives, eco-actions, volunteering, work experience, and career goals.',
    accentColor: '#2563EB',
    sections: [
      {
        heading: 'Town, Directions & Comparatives',
        points: [
          'Directions: Allez tout droit, Tournez à gauche/droite, en face du parc (de+le=du), la bibliothèque (library) ≠ la librairie (bookshop)',
          'Comparatives: plus/moins/aussi + adj + que; bon → meilleur(e) (NEVER plus bon!); bien → mieux',
          'Improvement: Si j’étais maire, je construirais plus de pistes cyclables',
        ],
      },
      {
        heading: 'Environment, Volunteering & Careers',
        points: [
          'Eco-actions: il faudrait / on devrait + recycler les déchets, économiser l’énergie, éviter le gaspillage',
          'Social: faire du bénévolat, les sans-abri, une association caritative',
          'Careers: NO un/une after être/devenir (Je voudrais devenir médecin ✓); un stage = work experience',
        ],
      },
    ],
  },
  {
    id: 'igfr-cs-4',
    slug: 'topic-4-grammar-exam-mastery',
    title: '4. Core Tenses & 0520 Exam Technique Cheat Sheet',
    topicNumber: 4,
    topicName: 'French Grammar, Tenses & Exam Skills',
    summary: 'All core tenses, si clauses, false friends, Paper 4 Q3 checklist, and Paper 3 Speaking A-R-E-T.',
    accentColor: '#2563EB',
    sections: [
      {
        heading: 'Tense Formation Quick Reference',
        points: [
          'Passé composé: avoir/être (DR & MRS VANDERTRAMP + reflexives + agreement!) + past participle',
          'Imparfait: nous present minus -ons + -ais/-ais/-ait/-ions/-iez/-aient (only irregular: être → ét-)',
          'Futur simple: inf/irregular stem (ser-/aur-/ir-/fer-/pourr-) + -ai/-as/-a/-ons/-ez/-ont (use after quand!)',
          'Conditionnel: future stem + imparfait endings | Golden Si clause: Si + imparfait → conditionnel',
        ],
      },
      {
        heading: '0520 Exam Technique Across Papers 1–4',
        points: [
          'Listening/Reading: watch mais/finalement distractors, ne... plus/que, and faux amis (actuellement, assister à, attendre)',
          'Writing Q3 (130–140 words): ALL bullets + 3+ tenses + opinions + idioms (avoir hâte de, bien que ce soit) + 5-min proofread',
          'Speaking: Role-Play crisp + vous; Conversations extend with A-R-E-T (Answer, Reason, Example, Tense)',
        ],
      },
    ],
  },
];

export const IGCSE_FRENCH_EXAM_PRACTICE: ExamQuestionItem[] = [
  {
    id: 'igfr-ex-1-1',
    subtopicId: 'igfr-1-1',
    number: 1,
    stimulus: '[Cambridge IGCSE French 0520 Paper 2 & Paper 4 Style] Read Marc’s note: « En semaine, je me lève à 6h45. Au collège, il est interdit de manger en classe, mais j’adore les sciences parce que notre prof est très patient. »',
    parts: [
      {
        id: 'p1',
        label: '(a)',
        prompt: 'What time does Marc get up and what is forbidden in class? Answer in English.',
        kind: 'short-answer',
        marks: 2,
        rubric: {
          maxMarks: 2,
          modelAnswer: 'He gets up at 6:45 (quarter to seven) and eating in class is forbidden.',
          markPoints: [
            { id: 'mp1', markDescription: 'Gets up at 6:45 / quarter to seven', requiredKeywordGroups: [['6:45', '6.45', '6h45', 'quarter to seven', 'six forty']] },
            { id: 'mp2', markDescription: 'Eating in class is forbidden', requiredKeywordGroups: [['eat', 'food'], ['class', 'lesson', 'forbidden', 'not allowed', 'banned']] },
          ],
        },
      },
      {
        id: 'p2',
        label: '(b)',
        prompt: 'In French, write 1–2 sentences giving your own favourite school subject with a reason AND mentioning one school rule.',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'Ma matière préférée est le français car c’est utile pour voyager. Dans mon collège, il faut porter un uniforme.',
          markPoints: [
            { id: 'mp1', markDescription: 'Names a school subject in French with opinion', requiredKeywordGroups: [['maths', 'sciences', 'français', 'francais', 'histoire', 'géographie', 'geographie', 'biologie', 'chimie', 'physique', 'sport', 'eps', 'informatique', 'anglais', 'espagnol', 'musique', 'art']] },
            { id: 'mp2', markDescription: 'Justifies opinion with car / parce que / puisque + reason', requiredKeywordGroups: [['car', 'parce', 'puisque']] },
            { id: 'mp3', markDescription: 'States a school rule using il faut / on doit / interdit / droit', requiredKeywordGroups: [['il faut', 'on doit', 'interdit', 'pas le droit']] },
          ],
        },
      },
    ],
  },
  {
    id: 'igfr-ex-1-2',
    subtopicId: 'igfr-1-2',
    number: 2,
    stimulus: '[Cambridge IGCSE French 0520 Paper 3 & Paper 4 Style] You are writing a short blog post about healthy eating and dining out.',
    parts: [
      {
        id: 'p1',
        label: '(a)',
        prompt: 'Which option accurately translates "I never eat fast food and I drink lots of water"?',
        kind: 'mcq',
        marks: 1,
        options: [
          'Je ne mange jamais du fast-food et je bois beaucoup d’eau.',
          'Je ne mange jamais de fast-food et je bois beaucoup d’eau.',
          'Je ne mange jamais de fast-food et je bois beaucoup de l’eau.',
          'Je mange jamais de fast-food et je bois beaucoup des eaux.',
        ],
        correctIndex: 1,
      },
      {
        id: 'p2',
        label: '(b)',
        prompt: 'Write 2 sentences in French: (1) describe what you eat/drink to stay healthy, and (2) give one piece of advice using "il faudrait" or "on devrait".',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'Pour rester en forme, je mange beaucoup de fruits et de légumes et je bois de l’eau. À mon avis, on devrait faire du sport régulièrement et éviter trop de sucre.',
          markPoints: [
            { id: 'mp1', markDescription: 'Healthy food/drink vocabulary in French', requiredKeywordGroups: [['fruits', 'légumes', 'legumes', 'eau', 'salade', 'équilibré', 'equilibre', 'poisson', 'saine', 'forme']] },
            { id: 'mp2', markDescription: 'Uses advice modal (il faudrait / on devrait / il faut)', requiredKeywordGroups: [['faudrait', 'devrait', 'il faut', 'on doit']] },
            { id: 'mp3', markDescription: 'Concrete healthy-living advice infinitive', requiredKeywordGroups: [['faire', 'manger', 'boire', 'dormir', 'éviter', 'eviter', 'arrêter', 'arreter', 'réduire', 'reduire', 'sport', 'exercice']] },
          ],
        },
      },
    ],
  },
  {
    id: 'igfr-ex-2-1',
    subtopicId: 'igfr-2-1',
    number: 3,
    stimulus: '[Cambridge IGCSE French 0520 Paper 4 Style] Your penfriend asks about your hobbies and your opinion on social media.',
    parts: [
      {
        id: 'p1',
        label: '(a)',
        prompt: 'Write ONE French sentence saying what sport or instrument you have been doing for a period of time (using present tense + depuis).',
        kind: 'short-answer',
        marks: 2,
        rubric: {
          maxMarks: 2,
          modelAnswer: 'Je joue de la guitare depuis quatre ans.',
          markPoints: [
            { id: 'mp1', markDescription: 'Correct present verb + sport/instrument (joue au/de la / fais du/de la)', requiredKeywordGroups: [['joue', 'fais'], ['foot', 'tennis', 'basket', 'piano', 'guitare', 'violon', 'natation', 'vélo', 'velo', 'danse', 'escalade', 'sport', 'musique', 'rugby']] },
            { id: 'mp2', markDescription: 'Uses depuis + duration', requiredKeywordGroups: [['depuis'], ['an', 'ans', 'mois', 'semaine', 'toujours', 'enfance']] },
          ],
        },
      },
      {
        id: 'p2',
        label: '(b)',
        prompt: 'Write 2 balanced sentences in French weighing ONE advantage and ONE disadvantage of social media (les réseaux sociaux).',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'D’un côté, les réseaux sociaux sont utiles pour rester en contact avec ses amis. Cependant, d’un autre côté, il y a le danger du cyberharcèlement et on passe trop de temps devant l’écran.',
          markPoints: [
            { id: 'mp1', markDescription: 'States a clear advantage in French (contact, amis, utile, pratique, information)', requiredKeywordGroups: [['utile', 'pratique', 'contact', 'amis', 'copains', 'communiquer', 'partager', 'informer', 'avantage']] },
            { id: 'mp2', markDescription: 'Contrast connective (mais, cependant, pourtant, d’un autre côté, par contre)', requiredKeywordGroups: [['mais', 'cependant', 'pourtant', 'autre côté', 'autre cote', 'par contre', 'toutefois', 'bien que']] },
            { id: 'mp3', markDescription: 'States a clear drawback in French (cyberharcèlement, écran, sommeil, vie privée, accro, danger)', requiredKeywordGroups: [['cyberharc', 'écran', 'ecran', 'sommeil', 'privée', 'privee', 'accro', 'danger', 'perte de temps', 'addict', 'risque']] },
          ],
        },
      },
    ],
  },
  {
    id: 'igfr-ex-2-2',
    subtopicId: 'igfr-2-2',
    number: 4,
    stimulus: '[Cambridge IGCSE French 0520 Paper 4 Q3 Style] Write about a memorable past holiday and a future destination you would like to visit.',
    parts: [
      {
        id: 'p1',
        label: '(a)',
        prompt: 'Write 2 sentences in French about a past holiday combining at least ONE passé composé verb and ONE imparfait weather/description verb.',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'L’été dernier, je suis allé(e) en Espagne en avion avec ma famille. Il faisait très chaud et nous avons visité des plages magnifiques.',
          markPoints: [
            { id: 'mp1', markDescription: 'Valid passé composé travel/activity verb (suis allé / sommes allés / avons visité / j’ai nagé / mangé)', requiredKeywordGroups: [['suis allé', 'suis alle', 'sommes allé', 'sommes alle', 'avons visité', 'avons visite', 'ai visité', 'ai visite', 'ai nagé', 'ai nage', 'ai mangé', 'ai mange', 'ai fait', 'sommes partis', 'ai logé', 'ai loge']] },
            { id: 'mp2', markDescription: 'Valid imparfait weather/description (il faisait / était / étaient / brillait)', requiredKeywordGroups: [['faisait', 'était', 'etait', 'étaient', 'etaient', 'brillait', 'pleuvait', 'avait']] },
            { id: 'mp3', markDescription: 'Accurate destination/holiday vocabulary', requiredKeywordGroups: [['en france', 'en espagne', 'en italie', 'au maroc', 'au japon', 'au portugal', 'à paris', 'a paris', 'plage', 'mer', 'montagne', 'hôtel', 'hotel', 'camping', 'vacances', 'avion', 'train']] },
          ],
        },
      },
      {
        id: 'p2',
        label: '(b)',
        prompt: 'Write ONE sentence in French stating where you would like to go next year and why (using conditional or future).',
        kind: 'short-answer',
        marks: 2,
        rubric: {
          maxMarks: 2,
          modelAnswer: 'L’année prochaine, je voudrais aller au Japon parce que je veux découvrir la culture et la cuisine locale.',
          markPoints: [
            { id: 'mp1', markDescription: 'Future or conditional verb (voudrais, aimerais, irai, vais aller, visiterai)', requiredKeywordGroups: [['voudrais', 'aimerais', 'irai', 'irons', 'vais aller', 'allons aller', 'visiterai', 'voyagerai']] },
            { id: 'mp2', markDescription: 'Destination + reason (parce que / car / pour)', requiredKeywordGroups: [['parce', 'car', 'pour'], ['culture', 'cuisine', 'soleil', 'plage', 'langue', 'paysage', 'montagne', 'reposer', 'découvrir', 'decouvrir', 'intéressant', 'interessant', 'beau', 'belle']] },
          ],
        },
      },
    ],
  },
  {
    id: 'igfr-ex-3-1',
    subtopicId: 'igfr-3-1',
    number: 5,
    stimulus: '[Cambridge IGCSE French 0520 Paper 3 Role-Play & Writing Style] A French tourist asks you for directions to the station and your view on living in the town vs countryside.',
    parts: [
      {
        id: 'p1',
        label: '(a)',
        prompt: 'In French, give TWO clear direction steps (e.g. go straight ahead, turn left/right, opposite the park).',
        kind: 'short-answer',
        marks: 2,
        rubric: {
          maxMarks: 2,
          modelAnswer: 'Allez tout droit jusqu’au rond-point, puis tournez à gauche ; la gare est en face du parc.',
          markPoints: [
            { id: 'mp1', markDescription: 'Direction command 1 (allez tout droit / tournez / prenez / traversez)', requiredKeywordGroups: [['tout droit', 'tournez', 'prenez', 'traversez', 'continuez']] },
            { id: 'mp2', markDescription: 'Direction command 2 or place preposition (à gauche, à droite, en face, à côté, près)', requiredKeywordGroups: [['gauche', 'droite', 'en face', 'à côté', 'a cote', 'près', 'pres', 'entre', 'rond-point', 'feu']] },
          ],
        },
      },
      {
        id: 'p2',
        label: '(b)',
        prompt: 'Write ONE French comparative sentence comparing life in the town and the countryside (using plus... que, moins... que, or meilleur(e)).',
        kind: 'short-answer',
        marks: 2,
        rubric: {
          maxMarks: 2,
          modelAnswer: 'La campagne est moins polluée et plus calme que la ville, mais la ville est plus animée.',
          markPoints: [
            { id: 'mp1', markDescription: 'Valid comparative structure (plus/moins/aussi ... que OR meilleur(e) que)', requiredKeywordGroups: [['plus', 'moins', 'aussi', 'meilleur'], ['que', 'qu']] },
            { id: 'mp2', markDescription: 'Compares ville and campagne cleanly', requiredKeywordGroups: [['ville'], ['campagne']] },
          ],
        },
      },
    ],
  },
  {
    id: 'igfr-ex-3-2',
    subtopicId: 'igfr-3-2',
    number: 6,
    stimulus: '[Cambridge IGCSE French 0520 Paper 4 Style] Write a short contribution for a school magazine about protecting the planet and your future career plans.',
    parts: [
      {
        id: 'p1',
        label: '(a)',
        prompt: 'Which French phrase correctly means "I want to become an engineer"?',
        kind: 'mcq',
        marks: 1,
        options: [
          'Je veux devenir un ingénieur.',
          'Je veux devenir ingénieur.',
          'Je veux faire un stage ingénieur.',
          'Je voudrais être une ingénieur.',
        ],
        correctIndex: 1,
      },
      {
        id: 'p2',
        label: '(b)',
        prompt: 'Write 2 sentences in French: (1) state what you personally do to help the environment, and (2) state your future career or university ambition with a reason.',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'Chez moi, je trie les déchets et j’éteins les lumières pour économiser l’énergie. Plus tard, je voudrais aller à l’université et devenir médecin parce que j’aime aider les autres.',
          markPoints: [
            { id: 'mp1', markDescription: 'Personal eco-action in French', requiredKeywordGroups: [['recycl', 'trie', 'éteins', 'eteins', 'économis', 'economis', 'vélo', 'velo', 'bus', 'transport', 'plastique', 'douche', 'eau']] },
            { id: 'mp2', markDescription: 'Future career or study plan (université / devenir / travailler / métier / examen)', requiredKeywordGroups: [['université', 'universite', 'devenir', 'travailler', 'métier', 'metier', 'médecin', 'medecin', 'ingénieur', 'ingenieur', 'professeur', 'avocat', 'journaliste', 'scientifique', 'études', 'etudes', 'apprentissage']] },
            { id: 'mp3', markDescription: 'Reason connective (parce que / car / pour / afin de)', requiredKeywordGroups: [['parce', 'car', 'pour', 'afin de']] },
          ],
        },
      },
    ],
  },
  {
    id: 'igfr-ex-4-1',
    subtopicId: 'igfr-4-1',
    number: 7,
    stimulus: '[Cambridge IGCSE French 0520 Grammar Accuracy Drill] Upgrading sentences with accurate past, future, and conditional forms is the key to Band-1 Language marks.',
    parts: [
      {
        id: 'p1',
        label: '(a)',
        prompt: 'Correct BOTH grammar errors in: « Hier, Marie a allé au cinéma et elle ne regarde pas des films tristes. »',
        kind: 'short-answer',
        marks: 2,
        rubric: {
          maxMarks: 2,
          modelAnswer: 'Hier, Marie est allée au cinéma et elle ne regarde pas de films tristes.',
          markPoints: [
            { id: 'mp1', markDescription: 'Fixes auxiliary & feminine agreement: est allée', requiredKeywordGroups: [['est allée', 'est allee']] },
            { id: 'mp2', markDescription: 'Fixes negative partitive: pas de films', requiredKeywordGroups: [['pas de film', 'pas de films']] },
          ],
        },
      },
      {
        id: 'p2',
        label: '(b)',
        prompt: 'Write ONE grammatically accurate French hypothetical sentence using « Si + imparfait → conditionnel ».',
        kind: 'short-answer',
        marks: 2,
        rubric: {
          maxMarks: 2,
          modelAnswer: 'Si j’avais beaucoup d’argent, je voyagerais autour du monde.',
          markPoints: [
            { id: 'mp1', markDescription: 'Uses Si + valid imparfait (avais, étais, pouvais, gagnais, habitais)', requiredKeywordGroups: [['si'], ['avais', 'étais', 'etais', 'pouvais', 'gagnais', 'habitais', 'faisais', 'allais', 'voulais']] },
            { id: 'mp2', markDescription: 'Uses valid conditional verb (-rais / -rait / -rions)', requiredKeywordGroups: [['voyagerais', 'irais', 'achèterais', 'acheterais', 'ferais', 'serait', 'donnerais', 'construirais', 'habiterais', 'visiterais', 'aiderais', 'prendrais', 'voudrais', 'aimerais']] },
          ],
        },
      },
    ],
  },
  {
    id: 'igfr-ex-4-2',
    subtopicId: 'igfr-4-2',
    number: 8,
    stimulus: '[Cambridge IGCSE French 0520 Paper 2 & Paper 3 Style] Read this exam extract: « Actuellement, je travaille dans une librairie, mais l’année dernière j’ai assisté à un stage dans un hôtel. Malheureusement, il n’y avait plus de place pour moi cet été. »',
    parts: [
      {
        id: 'p1',
        label: '(a)',
        prompt: 'Translate the underlined traps accurately: where does the narrator work CURRENTLY, and why can they not work at the hotel this summer? Answer in English.',
        kind: 'short-answer',
        marks: 2,
        rubric: {
          maxMarks: 2,
          modelAnswer: 'Currently they work in a bookshop (NOT a library), and there is no longer any room/place/vacancy for them at the hotel this summer.',
          markPoints: [
            { id: 'mp1', markDescription: 'Identifies currently + bookshop (not library)', requiredKeywordGroups: [['bookshop', 'book shop', 'bookstore']] },
            { id: 'mp2', markDescription: 'Identifies ne... plus = no longer any place/space/vacancy', requiredKeywordGroups: [['no longer', 'no more', 'not any', 'no space', 'no place', 'no room', 'full']] },
          ],
        },
      },
      {
        id: 'p2',
        label: '(b)',
        prompt: 'For a Paper 3 Speaking Role-Play at a tourist office, write ONE polite question in French asking what time the castle opens OR how much a ticket costs.',
        kind: 'short-answer',
        marks: 2,
        rubric: {
          maxMarks: 2,
          modelAnswer: 'Excusez-moi, à quelle heure ouvre le château et combien coûte un billet, s’il vous plaît ?',
          markPoints: [
            { id: 'mp1', markDescription: 'Accurate French question phrase (à quelle heure / combien coûte / c’est combien / est-ce que)', requiredKeywordGroups: [['quelle heure', 'combien', 'est-ce que', 'est ce que']] },
            { id: 'mp2', markDescription: 'Relevant opening/cost vocabulary (ouvre, château, billet, entrée, ticket, coûte, prix)', requiredKeywordGroups: [['ouvre', 'ferme', 'château', 'chateau', 'billet', 'ticket', 'entrée', 'entree', 'coûte', 'coute', 'prix']] },
          ],
        },
      },
    ],
  },
];

export const IGCSE_FRENCH_PAST_PAPERS: PastPaperDoc[] = [];

export const IGCSE_FRENCH_KEY_TERMS: KeyTermEntry[] = [
  { id: 'igfr-kt-1', term: 'Verbe pronominal', definition: 'Reflexive verb (se réveiller, se lever) requiring me/te/se/nous/vous/se and taking être in the passé composé.', topicNumber: 1, subtopicId: 'igfr-1-1', subtopicCode: '1.1' },
  { id: 'igfr-kt-2', term: 'Les tâches ménagères', definition: 'Household chores such as faire la vaisselle, ranger ma chambre, and passer l’aspirateur.', topicNumber: 1, subtopicId: 'igfr-1-1', subtopicCode: '1.1' },
  { id: 'igfr-kt-3', term: 'Article partitif', definition: 'du / de la / de l’ / des ("some"), shrinking to plain de / d’ after negatives and quantities.', topicNumber: 1, subtopicId: 'igfr-1-2', subtopicCode: '1.2' },
  { id: 'igfr-kt-4', term: 'Avoir mal à', definition: 'Idiom expressing pain, contracting à to au / à la / à l’ / aux according to gender and number.', topicNumber: 1, subtopicId: 'igfr-1-2', subtopicCode: '1.2' },
  { id: 'igfr-kt-5', term: 'BAGS Adjectives', definition: 'Adjectives of Beauty, Age, Goodness, and Size placed before the French noun.', topicNumber: 2, subtopicId: 'igfr-2-1', subtopicCode: '2.1' },
  { id: 'igfr-kt-6', term: 'Depuis + présent', definition: 'Present tense with depuis used for actions started in the past and still continuing now.', topicNumber: 2, subtopicId: 'igfr-2-1', subtopicCode: '2.1' },
  { id: 'igfr-kt-7', term: 'En / Au / Aux / À', definition: 'Destination prepositions for feminine/vowel countries (en), masculine countries (au), plural countries (aux), and cities (à).', topicNumber: 2, subtopicId: 'igfr-2-2', subtopicCode: '2.2' },
  { id: 'igfr-kt-8', term: 'En demi-pension', definition: 'Half-board holiday accommodation (breakfast plus one main meal).', topicNumber: 2, subtopicId: 'igfr-2-2', subtopicCode: '2.2' },
  { id: 'igfr-kt-9', term: 'La bibliothèque vs La librairie', definition: 'Library (bibliothèque) vs bookshop (librairie) — classic IGCSE false-friend pair.', topicNumber: 3, subtopicId: 'igfr-3-1', subtopicCode: '3.1' },
  { id: 'igfr-kt-10', term: 'Meilleur(e)', definition: 'Irregular comparative of bon ("better"), replacing incorrect "plus bon".', topicNumber: 3, subtopicId: 'igfr-3-1', subtopicCode: '3.1' },
  { id: 'igfr-kt-11', term: 'Le réchauffement climatique', definition: 'Global warming — central environmental concept in Topic Area E.', topicNumber: 3, subtopicId: 'igfr-3-2', subtopicCode: '3.2' },
  { id: 'igfr-kt-12', term: 'Un stage', definition: 'Work experience placement or internship (faire un stage).', topicNumber: 3, subtopicId: 'igfr-3-2', subtopicCode: '3.2' },
  { id: 'igfr-kt-13', term: 'DR & MRS VANDERTRAMP', definition: 'Mnemonic for the 17 verbs taking être (with subject agreement) in the passé composé.', topicNumber: 4, subtopicId: 'igfr-4-1', subtopicCode: '4.1' },
  { id: 'igfr-kt-14', term: 'Si + imparfait → conditionnel', definition: 'Hypothetical conditional sentence structure ("If X were..., Y would...").', topicNumber: 4, subtopicId: 'igfr-4-1', subtopicCode: '4.1' },
  { id: 'igfr-kt-15', term: 'Faux ami', definition: 'French word resembling an English word with a different true meaning (e.g. actuellement = currently).', topicNumber: 4, subtopicId: 'igfr-4-2', subtopicCode: '4.2' },
  { id: 'igfr-kt-16', term: 'Avoir hâte de', definition: 'High-grade idiom meaning "to look forward eagerly to" (+ infinitive).', topicNumber: 4, subtopicId: 'igfr-4-2', subtopicCode: '4.2' },
];
