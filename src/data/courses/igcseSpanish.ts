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

export const IGCSE_SPANISH_TOPICS: TopicDefinition[] = [
  {
    number: 1,
    title: 'Everyday Activities & Education',
    subtopics: [
      {
        id: 'iges-1-1',
        code: '1.1',
        slug: '1.1-daily-routine-school-life-uniform',
        title: 'Daily Routine, School Life & Uniform',
        readingMinutes: 10,
        hasDeepContent: true,
      },
      {
        id: 'iges-1-2',
        code: '1.2',
        slug: '1.2-food-drink-healthy-lifestyle-ordering-out',
        title: 'Food, Drink, Healthy Lifestyle & Ordering Out',
        readingMinutes: 10,
        hasDeepContent: true,
      },
    ],
  },
  {
    number: 2,
    title: 'Personal Life & Travel',
    subtopics: [
      {
        id: 'iges-2-1',
        code: '2.1',
        slug: '2.1-family-relationships-free-time-media',
        title: 'Family, Relationships, Free Time & Media',
        readingMinutes: 10,
        hasDeepContent: true,
      },
      {
        id: 'iges-2-2',
        code: '2.2',
        slug: '2.2-holidays-tourism-local-area-environment',
        title: 'Holidays, Tourism, Local Area & Environment',
        readingMinutes: 10,
        hasDeepContent: true,
      },
    ],
  },
  {
    number: 3,
    title: 'Core Spanish Grammar & Verbs',
    subtopics: [
      {
        id: 'iges-3-1',
        code: '3.1',
        slug: '3.1-ser-vs-estar-por-vs-para-reflexives',
        title: 'Ser vs Estar, Por vs Para & Reflexive Verbs',
        readingMinutes: 11,
        hasDeepContent: true,
      },
      {
        id: 'iges-3-2',
        code: '3.2',
        slug: '3.2-present-preterite-imperfect-near-future',
        title: 'Present, Preterite, Imperfect & Near Future Tenses',
        readingMinutes: 11,
        hasDeepContent: true,
      },
    ],
  },
  {
    number: 4,
    title: 'High-Grade Structures & Exam Mastery',
    subtopics: [
      {
        id: 'iges-4-1',
        code: '4.1',
        slug: '4.1-complex-opinions-connectives-subjunctive-triggers',
        title: 'Complex Opinions, Connectives & Subjunctive Triggers',
        readingMinutes: 11,
        hasDeepContent: true,
      },
      {
        id: 'iges-4-2',
        code: '4.2',
        slug: '4.2-paper-2-reading-paper-4-writing-speaking-role-play',
        title: 'Paper 2 Reading, Paper 4 Writing & Speaking Role-Play',
        readingMinutes: 11,
        hasDeepContent: true,
      },
    ],
  },
];

export const IGCSE_SPANISH_NOTES: Record<string, NoteLesson> = {
  'iges-1-1': {
    subtopicId: 'iges-1-1',
    subtopicCode: '1.1',
    subtopicTitle: 'Daily Routine, School Life & Uniform',
    readingMinutes: 10,
    videoTitle: 'Daily Routine, School Life & Uniform in Spanish',
    youtubeId: 'VSuFrFPNbzA',
    videoChannel: 'Butterfly Spanish',
    videoDuration: '8:20',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Spanish (0530) Topic Area A — Everyday Activities & Education',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Stem-Changing Reflexive Verbs & Telling the Time', cardId: 'iges-1-1-c1' },
      { time: '2:45', seconds: 165, label: 'School Subjects, Teachers & Facilities (Instalaciones)', cardId: 'iges-1-1-c2' },
      { time: '5:30', seconds: 330, label: 'School Uniform, Rules & Justified Opinions', cardId: 'iges-1-1-c3' },
    ],
    cards: [
      {
        id: 'iges-1-1-c1',
        title: 'Daily Routine: Reflexive Verbs & Telling Time',
        summary: 'Narrate your morning and evening smoothly using reflexive pronouns (me/te/se/nos/os/se), stem-changing verbs, and exact clock times.',
        bullets: [
          '**High-frequency routine reflexives** - `despertarse (e→ie)` (`me despierto` — I wake up), `levantarse` (`me levanto` — I get up), `ducharse` (shower), `vestirse (e→i)` (`me visto` — I get dressed), `cepillarse los dientes` (brush teeth), `acostarse (o→ue)` (`me acuesto` — I go to bed).',
          '**Telling time (`a la / a las`)** - use **`a la una`** (at 1:00) and **`a las + number`** (`a las siete y cuarto` 7:15, `a las siete y media` 7:30, `a las ocho menos cuarto` 7:45).',
          '**Sequencing phrases** - `primero` (first), `luego / después` (then/afterwards), `antes de desayunar` (before having breakfast), `después de cenar` (after having dinner).',
        ],
        subsections: [
          {
            heading: 'Infinitive + Attached Reflexive Upgrade',
            bullets: [
              '**After `antes de` / `después de`** - Spanish ALWAYS uses the **infinitive** with the matching pronoun attached: `antes de acostarme` (before going to bed), `después de ducharme` (after showering)!',
            ],
            exampleHeading: 'Model Cambridge 0530 daily-routine sentences',
            examples: [
              '« Entre semana, me despierto a las seis y media, me ducho rápidamente y salgo de casa a las siete y cuarto. » (On weekdays, I wake up at 6:30, shower quickly, and leave home at 7:15.)',
              '« Antes de acostarme, suelo leer un poco en lugar de mirar el móvil. » (Before going to bed, I usually read a little instead of looking at my phone.)',
            ],
          },
        ],
        glossaryPills: [
          { term: 'verbo reflexivo', definition: 'Verb whose action reflects back on the subject (me levanto, se acuesta), pairing a reflexive pronoun with the conjugated verb.' },
          { term: 'soler + infinitivo', definition: 'Idiomatic verb meaning "to usually do" (suelo estudiar por la tarde — I usually study in the afternoon).' },
        ],
      },
      {
        id: 'iges-1-1-c2',
        title: 'School Subjects, Teachers & Facilities (`Las Instalaciones`)',
        summary: 'Go beyond basic subject lists by evaluating teachers, describing facilities (la biblioteca, los laboratorios), and talking about exam goals.',
        bullets: [
          '**Subjects (`las asignaturas`)** - `las matemáticas`, `las ciencias`, `la historia`, `la geografía`, `la informática`, `el español`, `la educación física`, `el arte dramático`. Note plural agreement with `gustar`: **`Me gustan las matemáticas`** (plural!), **`Me encanta la biología`** (singular!).',
          '**Facilities & school life** - `mi instituto` (secondary school), `las instalaciones deportivas` (sports facilities), `el comedor` (canteen), `el patio` (playground), `la biblioteca`, `el gimnasio`, `sacar buenas notas` (get good grades), `aprobar / suspender un examen` (pass/fail an exam).',
          '**Describing teachers** - `estricto/a` (strict), `paciente`, `trabajador(a)`, `apasionado/a`, `nos explica todo con claridad` (explains everything clearly).',
        ],
        subsections: [
          {
            heading: 'Comparing Primary vs Secondary School (Imperfect Upgrade)',
            bullets: [
              '**Easy past-tense boost** - contrast your old primary school (`Cuando estaba en la escuela primaria, tenía menos deberes...`) with now (`Ahora tengo que estudiar mucho más`).',
            ],
            exampleHeading: 'Model school-life sentences',
            examples: [
              '« Mi asignatura favorita es el español porque es fascinante y útil para mi futuro; además, mi profesora siempre nos apoya mucho. » (My favourite subject is Spanish because it is fascinating and useful for my future; moreover, my teacher always supports us a lot.)',
              '« Mi instituto es bastante moderno y cuenta con laboratorios bien equipados, aunque el comedor es demasiado pequeño. » (My school is quite modern and has well-equipped labs, although the canteen is too small.)',
            ],
          },
        ],
        glossaryPills: [
          { term: 'las asignaturas', definition: 'School subjects (note: el colegio = primary/private school; el instituto = state secondary school).' },
        ],
      },
      {
        id: 'iges-1-1-c3',
        title: 'School Uniform & Rules (`Las Normas Escolares`)',
        summary: 'State rules cleanly with hay que / se debe / está prohibido + infinitive, and write a balanced two-sided argument on school uniform.',
        bullets: [
          '**Rule structures (+ infinitive)** - `Hay que + inf` (one must), `Se debe + inf` (you should), `No se debe + inf` (you mustn’t), `Está prohibido + inf` (it is forbidden to), `No está permitido + inf` (it is not allowed to).',
          '**Common school rules** - `llevar uniforme` (wear uniform), `ser puntual` (be punctual), `respetar a los profesores`, `comer chicle` (chew gum), `usar el móvil en clase` (use mobile phones in class), `correr por los pasillos` (run in corridors).',
          '**Balanced uniform argument** - **Pros**: `fomenta la igualdad` (promotes equality), `ahorra tiempo por la mañana` (saves time in the morning), `da buena imagen`. **Cons**: `es caro e incómodo` (expensive and uncomfortable), `limita la individualidad` (limits individuality).',
        ],
        subsections: [
          {
            heading: 'Idiomatic Opinions on Rules',
            bullets: [
              '**Evaluate every rule you mention** - `Lo que me parece justo es...` (What seems fair to me is...), `Sin embargo, me parece una tontería que...` (However, it seems silly to me that...).',
            ],
            exampleHeading: 'Model uniform & school-rules sentences',
            examples: [
              '« En mi instituto está estrictamente prohibido usar el móvil en clase, lo cual me parece lógico para evitar distracciones. » (In my school it is strictly forbidden to use mobile phones in class, which seems logical to me to avoid distractions.)',
              '« Por un lado, el uniforme escolar fomenta la igualdad entre los alumnos; por otro lado, resulta bastante caro e incómodo en verano. » (On the one hand, school uniform promotes equality among students; on the other hand, it turns out quite expensive and uncomfortable in summer.)',
            ],
          },
        ],
        glossaryPills: [
          { term: 'las normas escolares', definition: 'School rules and regulations, paired with impersonal expressions like hay que and está prohibido.' },
        ],
        memoryAid: 'Watch "gustar" agreement with subjects: Me gustA la historia (singular), Me gustAN las matemáticas / las ciencias (plural)!',
        commonMistake: 'NEVER write "a las una" ❌ or "después de me ducho" ❌ — 1:00 is singular "a la una" ✓, and prepositions (antes de / después de) ALWAYS take the infinitive: "después de ducharme" ✓!',
      },
    ],
    keyTerms: [
      { term: 'Despertarse / Acostarse', definition: 'Stem-changing reflexive verbs: me despierto (wake up) and me acuesto (go to bed).' },
      { term: 'Las asignaturas', definition: 'School subjects.' },
      { term: 'Está prohibido + inf', definition: 'Impersonal rule expression meaning "it is forbidden to...".' },
      { term: 'Sacar buenas notas', definition: 'To get good grades.' },
    ],
    checklistPoints: [
      'Conjugate regular and stem-changing reflexive verbs accurately with clock times and antes de / después de + inf',
      'Describe school subjects, teachers, and facilities using accurate gustar singular/plural agreement',
      'State school rules and weigh pros and cons of school uniform with balanced connectives',
    ],
  },

  'iges-1-2': {
    subtopicId: 'iges-1-2',
    subtopicCode: '1.2',
    subtopicTitle: 'Food, Drink, Healthy Lifestyle & Ordering Out',
    readingMinutes: 10,
    videoTitle: 'Spanish Food, Ordering in Restaurants & Healthy Living',
    youtubeId: 'MPC2j6tZz-U',
    videoChannel: 'Butterfly Spanish',
    videoDuration: '8:35',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Spanish (0530) Topic Area A — Food, Drink & Health',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Meals, Tapas & Describing Food Flavours', cardId: 'iges-1-2-c1' },
      { time: '2:50', seconds: 170, label: 'Ordering Out, Polite Requests & Restaurant Problems', cardId: 'iges-1-2-c2' },
      { time: '5:40', seconds: 340, label: 'Healthy Lifestyle & Expressing Pain (Me Duele / Duelen)', cardId: 'iges-1-2-c3' },
    ],
    cards: [
      {
        id: 'iges-1-2-c1',
        title: 'Meals, Hispanic Food & Describing Flavours',
        summary: 'Spanish uses dedicated verbs for meals (desayunar, almorzar, cenar) — combine them with vivid taste adjectives and ser vs estar.',
        bullets: [
          '**Meal verbs (faster & more authentic than "comer el...")** - `desayunar` (have breakfast), `almorzar (o→ue)` / `comer` (have lunch — main meal in Spain around 2 pm), `merendar (e→ie)` (have an afternoon snack), `cenar` (have dinner — often 9–10 pm in Spain).',
          '**Hispanic specialities** - `la paella`, `la tortilla española`, `el gazpacho` (cold tomato soup), `los churros con chocolate`, `las tapas`, `el pescado a la plancha` (grilled fish), `las verduras frescas`.',
          '**Describing food (`ser` = general nature vs `estar` = current taste/temperature)** - `La fruta es saludable y nutritiva` (general fact → `ser`); **`¡Esta paella está riquísima!`** (tastes delicious right now → `estar`), `La sopa está fría / salada / picante` (current state → `estar`).',
        ],
        subsections: [
          {
            heading: 'Dietary Preferences & Useful Adjectives',
            bullets: [
              '**Vocabulary** - `soy vegetariano/a`, `soy alérgico/a a los frutos secos` (allergic to nuts), `dulce` (sweet), `salado` (salty), `picante` (spicy), `casero/a` (homemade), `grasiento/a` (greasy).',
            ],
            exampleHeading: 'Model food & meal-habits sentences',
            examples: [
              '« Normalmente desayuno tostadas con aceite de oliva y fruta fresca, y ceno pescado con ensalada porque es muy sano. » (Normally I have toast with olive oil and fresh fruit for breakfast, and for dinner I have fish with salad because it is very healthy.)',
              '« Anoche probé la paella valenciana en un restaurante local y estaba deliciosa, aunque un poco salada. » (Last night I tried Valencian paella at a local restaurant and it was delicious, although a bit salty.)',
            ],
          },
        ],
        glossaryPills: [
          { term: 'estar rico / delicioso', definition: 'Using estar (NOT ser) to express how a specific dish tastes at that moment ("¡Está riquísimo!").' },
          { term: 'la comida casera', definition: 'Homemade food — great contrast against la comida basura (junk food).' },
        ],
      },
      {
        id: 'iges-1-2-c2',
        title: 'Eating Out: Ordering Politely & Handling Restaurant Complaints',
        summary: 'Master usted politeness, ordering courses (de primero / de segundo / de postre), asking for the bill (la cuenta), and resolving problems in Speaking Role-Plays.',
        bullets: [
          '**Ordering politely** - `Quisiera / Me gustaría reservar una mesa para tres personas`, `De primer plato, voy a tomar la ensalada mixta`, `De segundo plato, el pollo asado con patatas`, `De postre, un flan casero`, `Para beber, agua sin gas`, `¿Nos trae la cuenta, por favor?` (Could you bring us the bill, please?).',
          '**Waiter prompts to recognise** - `¿Qué desean tomar?` (What would you like?), `¿Algo más?` (Anything else?), `¿Todo bien?`, `¿Pagan en efectivo o con tarjeta?` (Cash or card?).',
          '**Polite restaurant complaints** - `Perdone, falta un cuchillo / un tenedor` (Excuse me, a knife/fork is missing), `Este plato está frío` (This dish is cold), `El vaso está sucio` (The glass is dirty), `Esto no es lo que pedí` (This isn’t what I ordered).',
        ],
        subsections: [
          {
            heading: 'Quick Role-Play Tip: Formal `Usted`',
            bullets: [
              '**Use `usted` with waiters/staff** - `Perdone` (Excuse me), `¿Puede traerme...?` (Can you bring me...?), `¿Cuánto cuesta el menú del día?` (How much is the set menu?).',
            ],
            exampleHeading: 'Model café/restaurant exchanges',
            examples: [
              '« Buenas tardes, quisiera el menú del día: de primero la sopa de verduras y de segundo merluza a la plancha, por favor. » (Good afternoon, I would like the set menu: vegetable soup for starter and grilled hake for main, please.)',
              '« Perdone señor, mi café está frío y falta una cuchara ; ¿podría cambiarlo, por favor? » (Excuse me sir, my coffee is cold and a spoon is missing; could you change it, please?)',
            ],
          },
        ],
        glossaryPills: [
          { term: 'la cuenta', definition: 'The bill/check in a Spanish restaurant (« La cuenta, por favor »).' },
        ],
      },
      {
        id: 'iges-1-2-c3',
        title: 'Healthy Lifestyle (`Una Vida Sana`) & Expressing Pain (`Me Duele`)',
        summary: 'Use me duele (singular) vs me duelen (plural) accurately at the doctor/pharmacy, and give strong lifestyle advice using para mantenerse en forma and dejar de.',
        bullets: [
          '**Healthy living habits** - `llevar una dieta equilibrada` (follow a balanced diet), `hacer ejercicio con regularidad`, `beber dos litros de agua al día`, `dormir ocho horas cada noche`, `evitar la comida basura / las bebidas azucaradas`.',
          '**Breaking bad habits (`dejar de + inf`)** - `Hay que dejar de fumar porque daña los pulmones` (One must stop smoking because it damages the lungs), `Deberíamos reducir el estrés.`',
          '**Expressing pain (`doler`, works like `gustar`!)** - **Singular body part**: **`Me duele`** (`Me duele la cabeza / la garganta / el estómago / la espalda`); **Plural body parts**: **`Me duelen`** (`Me duelen las muelas / los pies / los oídos`). Also: `Tengo fiebre / tos / gripe / un resfriado` (fever / cough / flu / cold), `Me siento mal` (I feel unwell).',
        ],
        subsections: [
          {
            heading: 'Using `Desde hace` for Illness Duration',
            bullets: [
              '**Doctor role-play classic** - `Me duele la garganta desde hace tres días` (My throat has been hurting for three days — present tense + `desde hace`!).',
            ],
            exampleHeading: 'Model healthy-lifestyle & health-advice sentences',
            examples: [
              '« Para llevar una vida sana, intento entrenar tres veces por semana y apenas como comida rápida. » (To lead a healthy life, I try to train three times a week and I hardly eat fast food.)',
              '« Antes comía demasiados dulces, pero ahora prefiero la fruta porque me da más energía para estudiar. » (Before I used to eat too many sweets, but now I prefer fruit because it gives me more energy to study.)',
            ],
          },
        ],
        glossaryPills: [
          { term: 'doler (me duele / me duelen)', definition: 'Gustar-type verb for pain agreeing with the hurting body part(s): singular me duele la cabeza, plural me duelen los pies.' },
        ],
        memoryAid: 'Pain check: 1 body part = Me duELE (la cabeza); 2+ body parts = Me duELEN (los pies, las muelas)!',
        commonMistake: 'NEVER write "Me duele los pies" ❌ or "La sopa es fría" (when complaining it arrived cold at a restaurant) — plural pain takes "me duelen" ✓ and served food temperature ALWAYS takes "está fría" ✓!',
      },
    ],
    keyTerms: [
      { term: 'Desayunar / Cenar', definition: 'Verbs meaning to have breakfast / to have dinner.' },
      { term: 'La cuenta', definition: 'The restaurant bill.' },
      { term: 'Me duele / Me duelen', definition: 'Singular vs plural pain expressions matching the body part.' },
      { term: 'Dejar de + infinitivo', definition: 'Idiomatic structure meaning "to give up / stop doing something" (dejar de fumar).' },
    ],
    checklistPoints: [
      'Use meal verbs, food vocabulary, and ser vs estar accurately to describe dishes and taste',
      'Order a set menu politely with usted and report a restaurant complaint naturally',
      'Discuss healthy vs unhealthy habits and use me duele / me duelen + desde hace cleanly',
    ],
  },

  'iges-2-1': {
    subtopicId: 'iges-2-1',
    subtopicCode: '2.1',
    subtopicTitle: 'Family, Relationships, Free Time & Media',
    readingMinutes: 10,
    videoTitle: 'Family, Relationships, Hobbies & Media in Spanish',
    youtubeId: 'hoo0jyZ4amU',
    videoChannel: 'Butterfly Spanish',
    videoDuration: '8:30',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Spanish (0530) Topic Area B — Personal & Social Life',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Family Descriptions, Gender Agreement & Llevarse Bien', cardId: 'iges-2-1-c1' },
      { time: '2:50', seconds: 170, label: 'Hobbies, Sports (Jugar al vs Hacer) & Gustar-Type Verbs', cardId: 'iges-2-1-c2' },
      { time: '5:35', seconds: 335, label: 'Technology, Social Media, Cinema & Pros/Cons', cardId: 'iges-2-1-c3' },
    ],
    cards: [
      {
        id: 'iges-2-1-c1',
        title: 'Family, Appearance & Personal Relationships',
        summary: 'Describe family members with accurate gender/plural agreement and reflexive relationship verbs (llevarse bien/mal con, apoyarse, discutir).',
        bullets: [
          '**Family & relationships** - `Me llevo muy bien con mi hermana mayor` (I get on very well with my older sister), `a veces discutimos por tonterías` (sometimes we argue over silly things), `siempre me apoya` (always supports me), `me hace reír` (makes me laugh), `tenemos mucho en común` (we have a lot in common).',
          '**Physical & personality adjectives** - `tiene el pelo castaño y rizado` (brown curly hair), `tiene los ojos verdes`, `lleva gafas` (wears glasses); personality: `cariñoso/a` (affectionate), `comprensivo/a` (understanding), `gracioso/a` (funny), `fiel` (loyal), `egoísta` (selfish), `trabajador(a)` (hardworking).',
          '**Watch `tener` for age & appearance** - `Mi hermano tiene dieciséis años` (**tener**, NEVER `ser` for age!).',
        ],
        subsections: [
          {
            heading: 'What Makes an Ideal Friend? (Frequent Exam Question)',
            bullets: [
              '**High-band traits** - `Un buen amigo debe ser sincero, leal, digno de confianza y capaz de guardar secretos.`',
            ],
            exampleHeading: 'Model family & friendship sentences',
            examples: [
              '« Me llevo fenomenal con mi madre porque es muy comprensiva y siempre me da buenos consejos cuando tengo problemas. » (I get on brilliantly with my mum because she is very understanding and always gives me good advice when I have problems.)',
              '« Aunque a veces discuto con mi hermano menor porque es un poco molesto, en el fondo lo quiero muchísimo. » (Although I sometimes argue with my younger brother because he is a bit annoying, deep down I love him very much.)',
            ],
          },
        ],
        glossaryPills: [
          { term: 'llevarse bien / mal con', definition: 'Reflexive phrase meaning to get on well / badly with someone.' },
          { term: 'digno de confianza', definition: 'High-band adjective phrase meaning "trustworthy".' },
        ],
      },
      {
        id: 'iges-2-1-c2',
        title: 'Free Time, Sports (`Jugar al` vs `Hacer`) & `Gustar`-Type Verbs',
        summary: 'Upgrading basic me gusta to me apasiona / me chifla / me aburre and pairing sports correctly with jugar a or hacer elevates Speaking and Writing immediately.',
        bullets: [
          '**`Jugar a` (ball/team/board games)** - note `u→ue` stem change (`juego`) and `a + el = al` contraction: `juego al fútbol`, `al baloncesto`, `al tenis`, `al ajedrez`, `a los videojuegos`.',
          '**`Hacer` (individual sports & hobbies)** - `hago natación` (swimming), `hago ciclismo` (cycling), `hago equitación` (horse riding), `hago atletismo`, `hago senderismo` (hiking). For musical instruments use **`tocar`**: `toco la guitarra / el piano`.',
          '**Upgraded `gustar`-family verbs** - `me encanta(n)` (love), `me apasiona(n)` (am passionate about), `me interesa(n)` (interest), `me aburre(n)` (bore), `me molesta(n)` (annoy), `no aguanto` (I can’t stand — normal verb!).',
        ],
        subsections: [
          {
            heading: 'Ongoing Hobbies with `Desde hace` + Present',
            bullets: [
              '**Present tense duration rule** - `Toco el violín desde hace cinco años` (I have been playing violin for five years) — OR **`Llevo cinco años tocando el violín`** (Band-1 idiom!).',
            ],
            exampleHeading: 'Model hobbies & free-time sentences',
            examples: [
              '« En mi tiempo libre me apasiona hacer ciclismo porque me ayuda a desconectar del estrés escolar y mantenerme activo. » (In my free time I am passionate about cycling because it helps me switch off from school stress and stay active.)',
              '« Llevo cuatro años tocando la guitarra y el sábado pasado fui a un concierto increíble con mis amigos. » (I have been playing the guitar for four years and last Saturday I went to an incredible concert with my friends.)',
            ],
          },
        ],
        glossaryPills: [
          { term: 'tocar (un instrumento)', definition: 'Spanish verb for playing a musical instrument (toco la guitarra) — NEVER use jugar for instruments!' },
        ],
      },
      {
        id: 'iges-2-1-c3',
        title: 'Technology, Social Media & Cinema/TV Debates',
        summary: 'Weigh the benefits and risks of smartphones and social networks fluently using por un lado... por otro lado... and sin embargo.',
        bullets: [
          '**Media & tech vocabulary** - `el móvil` (mobile phone), `las redes sociales` (social media), `descargar aplicaciones`, `subir fotos` (upload photos), `chatear con amigos`, `ver series en línea`, `el ciberacoso` (cyberbullying), `estar enganchado/a a la pantalla` (hooked on the screen), `la privacidad`.',
          '**Cinema & music opinions** - `las películas de ciencia ficción / acción / terror`, `los efectos especiales`, `la banda sonora` (soundtrack), `la letra` (song lyrics), `prefiero ver películas en versión original con subtítulos`.',
        ],
        subsections: [
          {
            heading: 'Balanced Pros & Cons Template',
            bullets: [
              '**Two-sided structure** - `Por un lado, Internet es imprescindible para investigar y comunicarse... Sin embargo, por otro lado, pasar demasiadas horas conectado afecta negativamente al sueño.`',
            ],
            exampleHeading: 'Model technology & media sentences',
            examples: [
              '« Uso las redes sociales a diario para mantenerme en contacto con mi familia, sin embargo intento no estar enganchado al móvil por la noche. » (I use social media daily to stay in touch with my family; however, I try not to be hooked on my phone at night.)',
              '« A pesar de las ventajas de la tecnología, el ciberacoso y la falta de privacidad son riesgos graves para los jóvenes. » (Despite the advantages of technology, cyberbullying and lack of privacy are serious risks for young people.)',
            ],
          },
        ],
        glossaryPills: [
          { term: 'estar enganchado/a a', definition: 'Colloquial Band-1 expression meaning "to be hooked on / addicted to" (e.g. estar enganchado a las redes sociales).' },
        ],
        memoryAid: 'Play sport = JUGAR AL (al tenis); Play instrument = TOCAR (el piano); Do individual sport = HACER (natación)!',
        commonMistake: 'NEVER translate "I play the guitar" as "Juego a la guitarra" ❌ or "I am 15 years old" as "Soy quince años" ❌ — always write "Toco la guitarra" ✓ and "Tengo quince años" ✓!',
      },
    ],
    keyTerms: [
      { term: 'Llevarse bien con', definition: 'To get along well with someone.' },
      { term: 'Jugar al / Tocar / Hacer', definition: 'Play ball sports (jugar al), play musical instruments (tocar), do individual sports (hacer).' },
      { term: 'El ciberacoso', definition: 'Cyberbullying.' },
      { term: 'Llevar + gerundio', definition: 'Band-1 idiom for ongoing duration (Llevo tres años estudiando español).' },
    ],
    checklistPoints: [
      'Describe family, physical traits, and relationships using tener, llevarse bien, and adjective agreement',
      'Distinguish jugar al, tocar, and hacer, and upgrade opinions beyond me gusta',
      'Debate social media and technology pros/cons fluently with balancing connectives',
    ],
  },

  'iges-2-2': {
    subtopicId: 'iges-2-2',
    subtopicCode: '2.2',
    subtopicTitle: 'Holidays, Tourism, Local Area & Environment',
    readingMinutes: 10,
    videoTitle: 'Holidays, Local Area & Environment in Spanish',
    youtubeId: '2v1BnjusSrI',
    videoChannel: 'Butterfly Spanish',
    videoDuration: '8:50',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Spanish (0530) Topic Areas C & E — Holidays, Town & Environment',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Past Holidays, Transport & Hotel Problems', cardId: 'iges-2-2-c1' },
      { time: '2:55', seconds: 175, label: 'Describing Your Town, Directions & Ideal Area', cardId: 'iges-2-2-c2' },
      { time: '5:50', seconds: 350, label: 'Environmental Problems & Practical Green Solutions', cardId: 'iges-2-2-c3' },
    ],
    cards: [
      {
        id: 'iges-2-2-c1',
        title: 'Holidays, Tourism & Past Travel Narratives',
        summary: 'Combine Preterite events (fui, me alojé, visité, lo pasé bomba) with Imperfect scenery/weather (hacía sol, el hotel era cómodo) to tell vibrant holiday stories.',
        bullets: [
          '**Destinations & transport** - `el verano pasado fui a España / a la costa / a la montaña`, `viajamos en avión / en tren / en barco / en coche` (Spanish uses **`en`** for vehicles and **`a pie`** for on foot!), `nos alojamos en un hotel de cuatro estrellas / un camping / un albergue juvenil`.',
          '**Activities & reactions** - `tomar el sol` (sunbathe), `hacer turismo` (go sightseeing), `comprar recuerdos` (buy souvenirs), `probar la gastronomía local`, **`lo pasé bomba / fenomenal`** (I had a blast), `fue unas vacaciones inolvidables`.',
          '**Hotel issues** - `el aire acondicionado no funcionaba`, `no había agua caliente`, `la habitación era demasiado ruidosa`, `perdí mi maleta` (I lost my suitcase), `hubo un retraso` (there was a delay).',
        ],
        subsections: [
          {
            heading: 'Pairing Preterite + Imperfect on Holiday',
            bullets: [
              '**Golden formula** - use **Preterite** for what you **did** (`fui, nadé, compré`) and **Imperfect** for **weather & descriptions** (`hacía mucho calor, el hotel estaba cerca de la playa, la gente era amable`).',
            ],
            exampleHeading: 'Model holiday narrative sentences',
            examples: [
              '« El año pasado fui a Málaga en avión con mi familia y nos alojamos en un hotel moderno que estaba enfrente de la playa. » (Last year I went to Málaga by plane with my family and we stayed in a modern hotel opposite the beach.)',
              '« Como hacía sol casi todos los días, nadé en el mar, probé tapas riquísimas y lo pasé bomba. » (As it was sunny almost every day, I swam in the sea, tried delicious tapas, and had a blast.)',
            ],
          },
        ],
        glossaryPills: [
          { term: 'alojarse', definition: 'Reflexive verb meaning "to stay (at accommodation)" — Preterite: me alojé / nos alojamos.' },
          { term: 'pasarlo bomba', definition: 'Authentic Spanish idiom meaning "to have an amazing time" (Lo pasé bomba).' },
        ],
      },
      {
        id: 'iges-2-2-c2',
        title: 'Home Town, Local Area & Directions',
        summary: 'Always use ESTAR for geographic location (Mi ciudad está en el sur ✓), describe amenities with hay / se puede + infinitive, and compare city vs rural life.',
        bullets: [
          '**Location (`estar`, NEVER `ser`!)** - `Mi ciudad está situada en el norte / sur / este / oeste del país`, `en la costa`, `en las afueras` (suburbs), `en el campo` (countryside), `es un pueblo tranquilo y pintoresco` vs `una ciudad bulliciosa y cosmopolita`.',
          '**Facilities & activities (`se puede + infinitive`)** - `Hay un centro comercial, una piscina municipal, muchos espacios verdes y un polideportivo`, `Se puede pasear por el casco antiguo` (old town), `Sin embargo, hay demasiado tráfico y contaminación acústica.`',
          '**Directions** - `Siga todo recto` (Go straight ahead), `Gire / Doble a la izquierda / derecha` (Turn left/right), `Tome la primera calle a la derecha`, `Está enfrente del banco / al lado de la estación / cerca de la plaza`.',
        ],
        subsections: [
          {
            heading: 'Improving Your Area (Conditional Upgrade)',
            bullets: [
              '**High-grade wish** - `Si pudiera cambiar algo en mi ciudad, construiría más carriles bici y reduciría el precio del transporte público.`',
            ],
            exampleHeading: 'Model local-area sentences',
            examples: [
              '« Vivo en un pueblo pequeño situado cerca de las montañas ; aunque es muy tranquilo y seguro, no hay suficientes actividades para los jóvenes. » (I live in a small town located near the mountains; although it is very quiet and safe, there are not enough activities for young people.)',
              '« Para llegar al museo, siga todo recto hasta la rotonda y gire a la izquierda ; está justo al lado del parque. » (To reach the museum, go straight ahead to the roundabout and turn left; it is right next to the park.)',
            ],
          },
        ],
        glossaryPills: [
          { term: 'el casco antiguo', definition: 'The historic old town centre of a Spanish city or village.' },
        ],
      },
      {
        id: 'iges-2-2-c3',
        title: 'Environment & Global Issues (`El Medio Ambiente`)',
        summary: 'Discuss climate change, plastic pollution, and green habits fluently using deberíamos, hay que, and concrete eco-actions.',
        bullets: [
          '**Global challenges** - `el cambio climático` (climate change), `el calentamiento global`, `la contaminación del aire y de los mares`, `la deforestación`, `los residuos plásticos`, `la sequía` (drought), `las inundaciones` (floods), `los animales en peligro de extinción`.',
          '**Green habits (`acciones ecológicas`)** - `reciclar vidrio, papel y plástico`, `ahorrar agua y electricidad` (save water and electricity), `apagar las luces` (turn off lights), `ducharse en vez de bañarse`, `ir en transporte público o en bici`, `usar energías renovables` (solar/wind energy), `malgastar menos comida` (waste less food).',
          '**Responsibility structures** - `Me preocupa mucho el cambio climático`, `Deberíamos proteger el planeta`, `Es imprescindible que reciclemos más` (subjunctive bonus!).',
        ],
        subsections: [
          {
            heading: 'Linking Personal Action + Future Commitment',
            bullets: [
              '**Three-tense eco-paragraph** - what you do **now** (`En casa reciclamos...`), what you did **recently** (`El mes pasado participé en una limpieza de playa`), and what you **will do** (`En el futuro compraré menos plástico`).',
            ],
            exampleHeading: 'Model environmental sentences',
            examples: [
              '« Lo que más me preocupa es el cambio climático ; por eso en mi casa separamos la basura, apagamos las luces y ahorramos agua cada día. » (What worries me most is climate change; therefore at home we separate rubbish, switch off lights, and save water every day.)',
              '« En mi opinión, los gobiernos deberían invertir más en energías renovables y prohibir los plásticos de un solo uso. » (In my opinion, governments should invest more in renewable energy and ban single-use plastics.)',
            ],
          },
        ],
        glossaryPills: [
          { term: 'ahorrar (agua / energía)', definition: 'Verb meaning "to save / conserve" (essential for environment essays, opposite of malgastar — to waste).' },
        ],
        memoryAid: 'Location = ALWAYS ESTAR ("Madrid está en el centro" ✓, NEVER "es en el centro" ❌)!',
        commonMistake: 'NEVER write "Mi pueblo es en el norte" ❌ or confuse "estar aburrido" (bored) with "ser aburrido" (boring) when describing your town — always write "está en el norte" ✓ and "mi pueblo es aburrido" ✓!',
      },
    ],
    keyTerms: [
      { term: 'Alojarse', definition: 'To stay in holiday accommodation (me alojé en un hotel).' },
      { term: 'Pasarlo bomba', definition: 'Idiom meaning to have a fantastic time.' },
      { term: 'El casco antiguo', definition: 'Historic old town centre.' },
      { term: 'El cambio climático / Ahorrar', definition: 'Climate change / to save (water, energy, money).' },
    ],
    checklistPoints: [
      'Narrate past holidays blending Preterite actions with Imperfect weather and descriptions',
      'Describe local area location (estar), amenities, directions, and conditional improvements',
      'Explain environmental threats and practical green solutions using deberíamos and ahorrar/reciclar',
    ],
  },

  'iges-3-1': {
    subtopicId: 'iges-3-1',
    subtopicCode: '3.1',
    subtopicTitle: 'Ser vs Estar, Por vs Para & Reflexive Verbs',
    readingMinutes: 11,
    videoTitle: 'Mastering Ser vs Estar, Por vs Para & Reflexives in Spanish',
    youtubeId: 'BFmmvdANZl0',
    videoChannel: 'Butterfly Spanish',
    videoDuration: '9:20',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Spanish (0530) Core Grammar Accuracy',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Ser (DOCTOR) vs Estar (PLACE) & Meaning Changers', cardId: 'iges-3-1-c1' },
      { time: '3:05', seconds: 185, label: 'Por vs Para: Exact Rules & Must-Know Fixed Idioms', cardId: 'iges-3-1-c2' },
      { time: '6:15', seconds: 375, label: 'Reflexive Verbs & Pronoun Placement Options', cardId: 'iges-3-1-c3' },
    ],
    cards: [
      {
        id: 'iges-3-1-c1',
        title: 'Ser (DOCTOR) vs Estar (PLACE) + Meaning-Changing Adjectives',
        summary: 'Both verbs mean "to be", yet choosing the wrong one completely alters meaning — anchor Ser with DOCTOR and Estar with PLACE.',
        bullets: [
          '**`SER` = DOCTOR** - **D**ate/Time (`Son las tres`, `Hoy es lunes`), **O**ccupation (`Mi madre es médica` — no `un/una`!), **C**haracteristic (`Es alto y simpático`), **T**ime/Event location (`La fiesta es en mi casa`), **O**rigin/Material (`Soy de México`, `Es de madera`), **R**elationship/Possession (`Es mi primo`).',
          '**`ESTAR` = PLACE** - **P**osition (`El libro está encima de la mesa`), **L**ocation of people/places (`Barcelona está en Cataluña` — even permanent geography!), **A**ction/Present Continuous (`Estoy estudiando`), **C**ondition (`La sopa está fría`, `La puerta está abierta`), **E**motion (`Estoy contento / cansado`).',
          '**Adjectives that CHANGE meaning with Ser vs Estar!** - `ser aburrido` (to be boring) vs `estar aburrido` (to be bored); `ser listo` (to be clever) vs `estar listo` (to be ready); `ser rico` (to be wealthy) vs `estar rico` (to taste delicious); `ser verde` (green colour) vs `estar verde` (unripe).',
        ],
        subsections: [
          {
            heading: 'Why Geography Uses ESTAR (Not SER)',
            bullets: [
              '**Golden exception to "permanent vs temporary"** - NEVER think of ser/estar ONLY as permanent vs temporary! A mountain or city is permanent, yet its **physical location ALWAYS uses `estar`** (`Los Pirineos están en el norte`).',
            ],
            exampleHeading: 'Worked side-by-side contrasts',
            examples: [
              '« La clase es aburrida, por eso los alumnos están aburridos. » (The lesson is boring, so the students are bored.)',
              '« Mi hermano es muy listo, pero todavía no está listo para salir. » (My brother is very clever, but he is still not ready to leave.)',
            ],
          },
        ],
        glossaryPills: [
          { term: 'DOCTOR (Ser)', definition: 'Mnemonic for Ser uses: Date, Occupation, Characteristic, Time, Origin, Relationship.' },
          { term: 'PLACE (Estar)', definition: 'Mnemonic for Estar uses: Position, Location, Action (-ando/-iendo), Condition, Emotion.' },
        ],
      },
      {
        id: 'iges-3-1-c2',
        title: 'Por vs Para: Cause & Journey vs Goal & Recipient',
        summary: 'Both often translate as "for", but para points forward to a goal, deadline, destination, or recipient, while por explains cause, exchange, duration, and movement through.',
        bullets: [
          '**`PARA` = Forward Arrow (PROD-O)** - **P**urpose (`Estudio para aprobar` — in order to), **R**ecipient (`Este regalo es para ti`), **O**pinion (`Para mí, es justo`), **D**eadline/Destination (`Para el lunes`, `El tren sale para Madrid`), **O**ccupation/Employer (`Trabajo para una empresa`).',
          '**`POR` = Cause, Route, Swap & Time** - **Cause/Reason** (`Gracias por tu ayuda`, `Llegué tarde por el tráfico`), **Exchange/Price** (`Pagué veinte euros por la camiseta`), **Duration / Time of day** (`Estudié por dos horas`, `por la mañana / tarde / noche`), **Movement through/along** (`Paseamos por el parque`), **Means/Passive agent** (`Hablamos por teléfono`, `Escrito por Cervantes`).',
          '**Must-know `por` idioms** - `por supuesto` (of course), `por lo menos` (at least), `por ejemplo`, `por fin` (at last), `por lo tanto` (therefore), `por favor`.',
        ],
        subsections: [
          {
            heading: 'Quick Decision Test: `Por` or `Para`?',
            bullets: [
              '**Substitute "in order to" or "intended for"** → use **`para`**; **Substitute "because of", "in exchange for", or "through/during"** → use **`por`**.',
            ],
            exampleHeading: 'Minimal-pair contrasts that examiners test',
            examples: [
              '« Compré flores **para** mi madre **por** diez euros. » (Recipient = para; Price/exchange = por.)',
              '« Salgo **para** el aeropuerto **por** la mañana **para** coger mi vuelo. » (Destination = para; Time of day = por; Purpose = para.)',
            ],
          },
        ],
        glossaryPills: [
          { term: 'por vs para', definition: 'Key preposition pair: para marks destination, deadline, recipient, and purpose ("in order to"); por marks cause, exchange, route, and time of day.' },
        ],
      },
      {
        id: 'iges-3-1-c3',
        title: 'Reflexive Verbs & Flexible Pronoun Placement',
        summary: 'Place reflexive pronouns (me, te, se, nos, os, se) immediately BEFORE a conjugated verb, or attach them directly onto the end of an infinitive or gerund.',
        bullets: [
          '**Pronoun set** - `yo → me`, `tú → te`, `él/ella/usted → se`, `nosotros → nos`, `vosotros → os`, `ellos/ellas/ustedes → se`.',
          '**Rule 1 (Single conjugated verb)** - pronoun sits directly **BEFORE** the verb (`Me ducho`, `No me levanto temprano` — `no` ALWAYS comes BEFORE `me`!).',
          '**Rule 2 (Infinitive / Two-verb / Gerund)** - you have TWO valid positions with a two-verb structure: **`Voy a ducharme`** OR **`Me voy a duchar`** (both 100% correct!). After a preposition (`antes de`, `para`), ALWAYS attach to the infinitive: **`antes de acostarme`**.',
          '**Reciprocal ("each other")** - `Nos ayudamos` (We help each other), `Nos vemos mañana` (See you tomorrow!).',
        ],
        subsections: [
          {
            heading: 'Non-Routine Reflexives That Boost Band-1 Range',
            bullets: [
              '**Beyond daily routine** - `divertirse (e→ie)` (have fun: `Me divierto`), `relajarse` (relax), `quejarse de` (complain about), `preocuparse por` (worry about), `darse cuenta de` (realise).',
            ],
            exampleHeading: 'Worked placement examples',
            examples: [
              '« Esta noche voy a acostarme temprano » = « Esta noche me voy a acostar temprano. » (Tonight I’m going to go to bed early — both equally correct!)',
              '« Nos divertimos mucho en la fiesta, pero no me acuerdo del nombre del restaurante. » (We had a lot of fun at the party, but I don’t remember the name of the restaurant.)',
            ],
          },
        ],
        glossaryPills: [
          { term: 'verbo recíproco', definition: 'Plural reflexive construction expressing mutual action ("each other"), such as nos ayudamos or se escriben.' },
        ],
        memoryAid: 'Ser = DOCTOR (Date, Occupation, Characteristic, Time, Origin, Relationship); Estar = PLACE (Position, Location, Action, Condition, Emotion)!',
        commonMistake: 'NEVER translate "Thank you for helping" as "Gracias para ayudar" ❌ or put "no" between pronoun and verb ("Me no levanto" ❌) — always write "Gracias por ayudar" ✓ and "No me levanto" ✓!',
      },
    ],
    keyTerms: [
      { term: 'Ser (DOCTOR)', definition: 'Used for dates, occupations, inherent traits, time, origin, and relationships.' },
      { term: 'Estar (PLACE)', definition: 'Used for position, geographic location, progressive actions, conditions, and emotions.' },
      { term: 'Por vs Para', definition: 'Cause/exchange/route/time-of-day (por) vs purpose/recipient/deadline/destination (para).' },
      { term: 'Pronoun placement', definition: 'Reflexive pronouns go before conjugated verbs (no me levanto) or attached to infinitives (voy a levantarme).' },
    ],
    checklistPoints: [
      'Choose accurately between ser and estar including geographic location and meaning-changing adjectives',
      'Distinguish por and para across cause, exchange, purpose, deadline, recipient, and fixed idioms',
      'Position reflexive pronouns cleanly in negative, two-verb, and preposition + infinitive structures',
    ],
  },

  'iges-3-2': {
    subtopicId: 'iges-3-2',
    subtopicCode: '3.2',
    subtopicTitle: 'Present, Preterite, Imperfect & Near Future Tenses',
    readingMinutes: 11,
    videoTitle: 'Spanish Tenses: Present, Preterite, Imperfect & Future',
    youtubeId: 'v9G32Y1Aa9E',
    videoChannel: 'Butterfly Spanish',
    videoDuration: '9:30',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Spanish (0530) Multi-Tense Grammar Mastery',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Present Tense, Boot Verbs & Yo-Go Verbs', cardId: 'iges-3-2-c1' },
      { time: '3:10', seconds: 190, label: 'Preterite (Completed Past) vs Imperfect (Background/Habits)', cardId: 'iges-3-2-c2' },
      { time: '6:20', seconds: 380, label: 'Near Future (ir a + inf), Simple Future & Conditional', cardId: 'iges-3-2-c3' },
    ],
    cards: [
      {
        id: 'iges-3-2-c1',
        title: 'Present Tense: Regulars, Boot Verbs & Yo-Go Verbs',
        summary: 'Master regular -ar/-er/-ir endings plus the essential stem-changers (boot verbs) and -go first-person irregulars.',
        bullets: [
          '**Regular present endings** - **`-ar`** (`hablar`): `-o, -as, -a, -amos, -áis, -an`; **`-er`** (`comer`): `-o, -es, -e, -emos, -éis, -en`; **`-ir`** (`vivir`): `-o, -es, -e, -imos, -ís, -en`.',
          '**Boot / Stem-changing verbs (change everywhere EXCEPT `nosotros` & `vosotros`!)** - `e→ie`: `querer → quiero (queremos)`, `preferir → prefiero`, `empezar → empiezo`; `o→ue`: `poder → puedo (podemos)`, `dormir → duermo`, `volver → vuelvo`; `u→ue`: `jugar → juego (jugamos)`; `e→i`: `pedir → pido`.',
          '**Yo-Go verbs** - `tener → tengo`, `hacer → hago`, `salir → salgo`, `poner → pongo`, `venir → vengo`, `decir → digo`. Crucial irregulars: `ir` (`voy, vas, va, vamos, vais, van`), `ser`, `estar`, `saber → sé`.',
        ],
        subsections: [
          {
            heading: 'Present Continuous (`Estar` + Gerund)',
            bullets: [
              '**Actions happening right now** - `estar` + `-ando` (`hablando`) or `-iendo` (`comiendo`, `viviendo`; irregular: `leyendo`, `durmiendo`): `Estoy preparando mis exámenes.`',
            ],
            exampleHeading: 'Model present-tense accuracy examples',
            examples: [
              '« Siempre quiero estudiar más, pero mis amigos y yo preferimos jugar al baloncesto después de clase. » (Notice nosotros "preferimos" does NOT stem-change!)',
              '« Salgo de casa a las ocho y hago los deberes en la biblioteca. » (Yo-go irregulars: salgo, hago.)',
            ],
          },
        ],
        glossaryPills: [
          { term: 'verbo con cambio radical (boot verb)', definition: 'Spanish verb whose stem vowel changes (e→ie, o→ue, e→i) in all present-tense persons EXCEPT nosotros and vosotros.' },
        ],
      },
      {
        id: 'iges-3-2-c2',
        title: 'Preterite vs Imperfect: Controlling Both Spanish Past Tenses',
        summary: 'Preterite reports completed past actions at a specific time (ayer, el año pasado); Imperfect describes habits ("used to"), ongoing actions ("was doing"), age, weather, and scenery.',
        bullets: [
          '**Preterite (`pretérito indefinido`) endings** - **`-ar`**: **`-é, -aste, -ó, -amos, -asteis, -aron`** (`hablé, habló`); **`-er/-ir`**: **`-í, -iste, -ió, -imos, -isteis, -ieron`** (`comí, vivió`). **Accents on yo & él/ella are ESSENTIAL** (`hablo` = I speak vs `habló` = he/she spoke!).',
          '**Must-know Preterite irregulars** - `ir / ser` (identical!): **`fui, fuiste, fue, fuimos, fuisteis, fueron`**; `hacer`: `hice, hizo`; `tener`: `tuve`; `estar`: `estuve`; `poder`: `pude`; `ver`: `vi, vio`; `dar`: `di, dio`; `-car/-gar/-zar` yo spelling: `saqué, jugué, empecé`.',
          '**Imperfect (`pretérito imperfecto`) — only 3 irregulars in the ENTIRE language!** - **`-ar`**: `-aba, -abas, -aba, -ábamos, -abais, -aban`; **`-er/-ir`**: `-ía, -ías, -ía, -íamos, -íais, -ían`. **Only 3 irregulars**: **`ser → era`**, **`ir → iba`**, **`ver → veía`**!',
        ],
        subsections: [
          {
            heading: 'When to Use Preterite vs Imperfect Together',
            bullets: [
              '**Interrupted scene** - `Mientras paseábamos por la playa (imperfect), empezó a llover (preterite)!` (While we were walking on the beach, it started to rain!)',
            ],
            exampleHeading: 'Worked side-by-side past-tense examples',
            examples: [
              '« Cuando era niño, iba todos los veranos al pueblo de mis abuelos (imperfect: repeated habit). El verano pasado fui a Valencia y visité el Oceanogràfic (preterite: one completed event). »',
              '« Ayer tuve mucho trabajo porque hice tres exámenes, pero el hotel donde estuvimos el mes pasado era precioso. »',
            ],
          },
        ],
        glossaryPills: [
          { term: 'pretérito indefinido (preterite)', definition: 'Spanish past tense for completed single actions or sequences of events with clear start/end points.' },
          { term: 'pretérito imperfecto', definition: 'Spanish past tense for habits ("used to"), ongoing background actions ("was doing"), weather, age, and descriptions (only 3 irregulars: era, iba, veía).' },
        ],
      },
      {
        id: 'iges-3-2-c3',
        title: 'Near Future, Simple Future & Conditional Mood',
        summary: 'Use ir a + infinitive for definite upcoming plans, Simple Future (-é/-ás/-á/-emos/-éis/-án) for "will", and Conditional (-ía) for "would" and ambitious aspirations.',
        bullets: [
          '**Near future (`futuro próximo`)** - `voy / vas / va / vamos / vais / van + a + infinitive`: `Este fin de semana voy a visitar a mis abuelos.`',
          '**Simple future (`futuro simple` — "will")** - keep the **FULL infinitive** (`-ar/-er/-ir` ALL share the same endings!) + **`-é, -ás, -á, -emos, -éis, -án`**: `hablaré, comeremos, vivirán`. Key irregular stems: `tener → tendr-`, `hacer → har-`, `poder → podr-`, `salir → saldr-`, `querer → querr-`, `saber → sabr-`, `haber → habr-` (`habrá` = there will be).',
          '**Conditional (`el condicional` — "would")** - SAME infinitive/irregular stems + **`-ía, -ías, -ía, -íamos, -íais, -ían`**: `Me gustaría viajar`, `Sería fantástico`, `Tendría más tiempo`, `Haría voluntariado`.',
        ],
        subsections: [
          {
            heading: 'Mixing All Three Future/Conditional Forms in One Essay',
            bullets: [
              '**Examiner gold** - combine near future (`voy a...`), simple future (`estudiaré...`), and conditional (`me encantaría...`) across one closing paragraph to showcase full Band-1 verb range!',
            ],
            exampleHeading: 'Model future & conditional paragraph',
            examples: [
              '« Después de mis exámenes, voy a descansar una semana con mis amigos. En el futuro, estudiaré medicina en la universidad y me encantaría trabajar en un hospital internacional. »',
              '« Si pudiera, viviría cerca del mar porque el clima sería mucho más agradable. » (If I could, I would live near the sea because the climate would be much nicer.)',
            ],
          },
        ],
        glossaryPills: [
          { term: 'futuro simple', definition: 'Spanish future tense ("will") adding -é, -ás, -á, -emos, -éis, -án directly onto the infinitive (or irregular stem like tendr-/har-/podr-).' },
        ],
        memoryAid: 'Imperfect has ONLY 3 irregulars in all of Spanish — think "I Saw It": Ir (iba), Ser (era), Ver (veía)!',
        commonMistake: 'NEVER forget the Preterite accent mark on yo (-é/-í) and él/ella (-ó/-ió) — "hablo" means "I speak" (present), whereas "habló" means "he/she spoke" (past), completely changing the meaning!',
      },
    ],
    keyTerms: [
      { term: 'Boot verbs', definition: 'Stem-changing present verbs (querer → quiero, poder → puedo) keeping regular nosotros/vosotros stems.' },
      { term: 'Pretérito indefinido', definition: 'Preterite tense for specific completed past actions (fui, hice, tuve, hablé).' },
      { term: 'Pretérito imperfecto', definition: 'Imperfect tense for past habits, descriptions, and ongoing background (era, iba, veía).' },
      { term: 'Futuro próximo / simple', definition: 'Near future (voy a + inf) vs simple future (infinitive + -é/-ás/-á/-emos/-éis/-án).' },
    ],
    checklistPoints: [
      'Conjugate regular, boot, and yo-go present-tense verbs plus present continuous accurately',
      'Form and contrast Preterite (with key irregulars and accents) vs Imperfect (era, iba, veía)',
      'Express future plans and wishes using ir a + infinitive, simple future, and conditional',
    ],
  },

  'iges-4-1': {
    subtopicId: 'iges-4-1',
    subtopicCode: '4.1',
    subtopicTitle: 'Complex Opinions, Connectives & Subjunctive Triggers',
    readingMinutes: 11,
    videoTitle: 'High-Grade Spanish Structures, Idioms & Subjunctive Triggers',
    youtubeId: 'TnFLuQPPoYg',
    videoChannel: 'Butterfly Spanish',
    videoDuration: '9:05',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Spanish (0530) Band-1 Range & Complexity',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Upgrading Basic Opinions & Sophisticated Connectives', cardId: 'iges-4-1-c1' },
      { time: '3:05', seconds: 185, label: 'Band-1 Idioms: Acabar de, Llevar + Gerund, Lo Bueno Es Que', cardId: 'iges-4-1-c2' },
      { time: '6:10', seconds: 370, label: 'Present Subjunctive Essentials (WEIRDO & Cuando + Future)', cardId: 'iges-4-1-c3' },
    ],
    cards: [
      {
        id: 'iges-4-1-c1',
        title: 'Upgrading Opinions & Complex Discourse Connectives',
        summary: 'Replacing repetitive "me gusta / pienso que / porque / pero" with varied Band-1 opinion stems and connectives immediately transforms essay quality.',
        bullets: [
          '**High-grade opinion starters** - `A mi parecer` (In my view), `Desde mi punto de vista` (From my point of view), `Diría que` (I would say that), `No cabe duda de que` (There is no doubt that), `Lo bueno / lo malo / lo mejor es que` (The good/bad/best thing is that), `Cuanto más..., más...` (The more..., the more...).',
          '**Sophisticated connectives** - **Addition**: `además` (moreover), `asimismo` (likewise); **Contrast**: `sin embargo / no obstante` (however), `aunque` (although), `a pesar de que` (despite the fact that), `mientras que` (whereas); **Cause/Effect**: `ya que / dado que` (since/given that), `por lo tanto / por consiguiente` (therefore).',
          '**Justifying with `lo cual` ("which")** - `Reciclamos cada día, **lo cual** ayuda a proteger el medio ambiente.` (We recycle every day, which helps protect the environment.)',
        ],
        subsections: [
          {
            heading: 'Before & After Essay Sentence Upgrade',
            bullets: [
              '**Notice how small structural swaps boost Range marks** without sacrificing accuracy.',
            ],
            exampleHeading: 'Worked Grade C → Grade A* upgrade',
            examples: [
              'Basic: « Me gusta aprender español porque es útil pero a veces es difícil. »',
              'Grade A*: « Desde mi punto de vista, aprender español vale mucho la pena ya que abre puertas laborales, aunque a veces la gramática resulta exigente. »',
            ],
          },
        ],
        glossaryPills: [
          { term: 'lo cual', definition: 'Relative pronoun referring back to an entire preceding clause ("..., which..."), an effortless Band-1 complexity marker.' },
          { term: 'ya que / dado que', definition: 'Elevated causal connectives meaning "since / given that", replacing repetitive porque.' },
        ],
      },
      {
        id: 'iges-4-1-c2',
        title: 'Five High-Impact Idiomatic Structures That Work in Every Topic',
        summary: 'Memorise five versatile Spanish idioms that drop naturally into school, holidays, hobbies, technology, and environment essays.',
        bullets: [
          '**1. `Acabar de + infinitive` ("have just done")** - `Acabo de volver de Madrid` (I have just returned from Madrid); `Acabamos de terminar los exámenes.`',
          '**2. `Llevar + time + gerund` ("have been doing for...")** - `Llevo tres años estudiando español` (I have been studying Spanish for 3 years).',
          '**3. `Soler + infinitive` ("usually do" / "used to do")** - Present: `Suelo cenar a las ocho`; Imperfect: `Solía jugar en el parque.`',
          '**4. `Antes de / Después de / Al + infinitive`** - `Al llegar al hotel, nos dimos cuenta de que...` (Upon arriving at the hotel, we realised that...).',
          '**5. `Valer la pena` ("to be worth it") & `Tener ganas de` ("to look forward to / feel like")** - `Tengo muchas ganas de visitar Sevilla porque realmente vale la pena.`',
        ],
        subsections: [
          {
            heading: 'How to Deploy Idioms Without Over-Stuffing',
            bullets: [
              '**Natural placement** - weaving 2–3 accurate idioms cleanly into a 130–140 word Paper 4 essay scores higher than cramming 8 unnatural phrases with spelling errors.',
            ],
            exampleHeading: 'Model multi-topic idiomatic sentences',
            examples: [
              '« Acabo de hacer unas prácticas en una clínica y ahora tengo muchas ganas de estudiar biología en la universidad. » (I have just done work experience in a clinic and now I’m really looking forward to studying biology at university.)',
              '« Al ver tanta contaminación en la playa, decidimos organizar una campaña ecológica que valió muchísimo la pena. » (Upon seeing so much pollution on the beach, we decided to organise an eco-campaign that was really worth it.)',
            ],
          },
        ],
        glossaryPills: [
          { term: 'acabar de + infinitivo', definition: 'Idiom expressing a just-completed action ("to have just done something").' },
        ],
      },
      {
        id: 'iges-4-1-c3',
        title: 'Present Subjunctive Essentials (WEIRDO & `Cuando` + Future)',
        summary: 'Using even 2–3 accurate present subjunctive clauses (cuando sea mayor, espero que tengas, es importante que reciclemos) signals top-band IGCSE Spanish mastery.',
        bullets: [
          '**How to form Present Subjunctive (3 easy steps)** - (1) Take the `yo` present form (`hablo`, `tengo`, `salgo`); (2) Drop `-o`; (3) Add **OPPOSITE endings**: **`-ar` takes `-e, -es, -e, -emos, -éis, -en`** (`hable, reciclemos`); **`-er/-ir` takes `-a, -as, -a, -amos, -áis, -an`** (`tenga, viva, salgamos`).',
          '**Top irregular subjunctives (DISHES)** - `Dar → dé`, `Ir → vaya`, `Ser → sea`, `Haber → haya`, `Estar → esté`, `Saber → sepa`.',
          '**Four safest IGCSE triggers** - (1) **`Cuando` + future event**: **`Cuando sea mayor, viviré en España`** (When I am older, I will live in Spain — NEVER `cuando soy` for future!); (2) **Wishes / Hopes**: `Espero que lo pases bien`, `Quiero que vengas`; (3) **Impersonal importance**: `Es importante / necesario que reciclemos más`; (4) **`Ojalá (que)`**: `Ojalá haga buen tiempo mañana` (Hopefully the weather is nice tomorrow!).',
        ],
        subsections: [
          {
            heading: 'When NOT to Use the Subjunctive',
            bullets: [
              '**Same subject = Infinitive!** - If both halves share the SAME subject, skip `que` + subjunctive and use a plain infinitive: `Espero **aprobar**` (I hope to pass ✓) vs `Espero **que apruebes**` (I hope that YOU pass — two different subjects → subjunctive ✓!).',
            ],
            exampleHeading: 'Model exam-ready subjunctive sentences',
            examples: [
              '« Cuando termine mis estudios, me gustaría viajar por Latinoamérica para practicar español. » (When I finish my studies, I would like to travel across Latin America to practise Spanish.)',
              '« Es fundamental que todos ahorremos agua y que el gobierno proteja los bosques. » (It is vital that we all save water and that the government protects forests.)',
            ],
          },
        ],
        glossaryPills: [
          { term: 'modo subjuntivo', definition: 'Spanish mood expressing wishes, doubts, impersonal judgements, or future-oriented cuando clauses, formed using opposite vowel endings.' },
        ],
        memoryAid: 'Subjunctive formation = Yo → Drop O → Swap Vowels (-ar gets E, -er/-ir gets A)! Plus DISHES irregulars (dé, vaya, sea, haya, esté, sepa)!',
        commonMistake: 'NEVER write "Cuando soy mayor, seré médico" ❌ — whenever "cuando" refers to the FUTURE, Spanish REQUIRES the present subjunctive: "Cuando sea mayor, seré médico" ✓!',
      },
    ],
    keyTerms: [
      { term: 'Lo cual', definition: 'Relative clause connector ("..., which...") linking a comment to a whole preceding idea.' },
      { term: 'Acabar de + infinitivo', definition: 'Idiom for "to have just done something".' },
      { term: 'Present Subjunctive', definition: 'Mood formed with opposite endings (yo minus -o + e/a) triggered by wishes, impersonal necessity, ojalá, and future cuando.' },
      { term: 'DISHES irregulars', definition: 'Six key irregular subjunctives: dar (dé), ir (vaya), ser (sea), haber (haya), estar (esté), saber (sepa).' },
    ],
    checklistPoints: [
      'Replace repetitive basics with Band-1 opinion stems, lo cual, and varied discourse connectives',
      'Weave acabar de, llevar + gerund, soler, al + infinitive, and valer la pena naturally into writing',
      'Form and trigger the present subjunctive cleanly for cuando + future, wishes, ojalá, and impersonal necessity',
    ],
  },

  'iges-4-2': {
    subtopicId: 'iges-4-2',
    subtopicCode: '4.2',
    subtopicTitle: 'Paper 2 Reading, Paper 4 Writing & Speaking Role-Play',
    readingMinutes: 11,
    videoTitle: 'Cambridge IGCSE Spanish 0530 Reading, Writing & Speaking Mastery',
    youtubeId: '8Ink9kZz3Ws',
    videoChannel: 'Butterfly Spanish',
    videoDuration: '9:10',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Spanish (0530) Papers 1, 2, 3 & 4 Exam Strategy',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Paper 1 & 2 Comprehension: Synonyms, Negatives & False Friends', cardId: 'iges-4-2-c1' },
      { time: '3:05', seconds: 185, label: 'Paper 4 Writing: Q1 Form, Q2 (80–90) & Q3 (130–140 Words)', cardId: 'iges-4-2-c2' },
      { time: '6:10', seconds: 370, label: 'Paper 3 Speaking: Role-Play Questions & Extended Answers', cardId: 'iges-4-2-c3' },
    ],
    cards: [
      {
        id: 'iges-4-2-c1',
        title: 'Paper 1 Listening & Paper 2 Reading: Beating Traps & False Friends',
        summary: 'Cambridge Reading and Listening questions paraphrase text ideas using synonyms, double negatives, and tense clues — decode meaning rather than word-matching blindly.',
        bullets: [
          '**Watch Spanish double negatives** - `no... nunca` (never), `no... nada` (nothing), `no... nadie` (nobody), `ni... ni...` (neither... nor...), `tampoco` (neither / not either), `apenas` (hardly), `ya no` (no longer — `Ya no vivo en Madrid` = I no longer live in Madrid!).',
          '**Synonym matching (Cambridge’s #1 reading tool)** - the text says `es gratuito`, the question says `no cuesta nada`; text says `mis padres trabajan mucho`, question says `están muy ocupados`; text says `está a dos minutos a pie`, question says `está muy cerca`.',
          '**Top Spanish False Friends (`falsos amigos`)** - `embarazada` = **pregnant** (NOT embarrassed — embarrassed is `avergonzado/a`!); `éxito` = **success** (NOT exit — exit is `salida`); `carpeta` = **folder** (NOT carpet); `asistir a` = **to attend**; `actualmente` = **currently**; `sensible` = **sensitive**; `soportar` = **to tolerate/put up with**; `recordar` = **to remember**.',
        ],
        subsections: [
          {
            heading: 'Answering Paper 2 Open Questions in Spanish',
            bullets: [
              '**Be concise and change pronouns if needed** - if the question asks *"¿Por qué está contenta Sofía?"* and Sofía’s blog says *"Estoy feliz porque aprobé"*, answer: `Porque aprobó (sus exámenes)` — don’t blindly copy a 30-word paragraph containing contradictory extras!',
            ],
            exampleHeading: 'Worked false-friend & negative traps',
            examples: [
              'Reading extract: « Actualmente ya no juego al tenis, pero ayer asistí a un partido que fue un gran éxito. » → Means: **Currently** they **no longer** play tennis, but yesterday they **attended** a match that was a great **success**.',
              'Distractor check: « Pensaba ir en tren, sin embargo había huelga, así que al final cogí el autobús. » → Transport actually used = **el autobús** (bus), NOT train!',
            ],
          },
        ],
        glossaryPills: [
          { term: 'falso amigo', definition: 'A Spanish word visually similar to an English word with a totally different meaning (e.g. éxito = success, embarazada = pregnant).' },
          { term: 'ya no', definition: 'High-frequency negative time phrase meaning "no longer / not anymore" — a favourite exam distractor.' },
        ],
      },
      {
        id: 'iges-4-2-c2',
        title: 'Paper 4 Writing: Acing Q1, Q2 (80–90 Words) & Q3 (130–140 Words)',
        summary: 'Paper 4 rewards total bullet completion, authentic Spanish register, 3+ controlled timeframes, complex idioms, and disciplined final proofreading.',
        bullets: [
          '**Q1 Form Filling (5 marks)** - write crisp, accurately spelled single words/phrases matching each field (check gender/plural!).',
          '**Q2 Directed Writing (80–90 words, 12 marks)** - answer **EVERY bullet clearly** (usually 4–5 bullets) with clean verb accuracy and varied connectives; avoid writing 200 words (more errors, no extra credit!).',
          '**Q3 Extended Choice Essay (130–140 words, 28 marks: 10 Task + 10 Range + 8 Accuracy)** - choose **email/letter** OR **article/blog**; tick off EVERY bullet; ensure **3+ timeframes** (Present, Preterite + Imperfect, Future/Conditional + 1 Subjunctive trigger); include **justified opinions** and **2–3 idioms** (`lo pasé bomba`, `acabo de`, `vale la pena`).',
          '**Final 5-Minute Proofread** - check: (1) Preterite accents (`hablé, visitó, comí`); (2) Noun-adjective gender/plural agreement (`las asignaturas divertidas`); (3) `ser` vs `estar` & `por` vs `para`; (4) `me gusta` vs `me gustan`; (5) `¿...?` and `¡...!` inverted punctuation!',
        ],
        subsections: [
          {
            heading: 'Formatting Letter/Email vs Article Cleanly',
            bullets: [
              '**Informal email/letter** - `¡Hola Elena! ¿Qué tal estás? Gracias por tu correo...` → close with `¡Escríbeme pronto! Un abrazo, ...`',
              '**Article/blog** - add a punchy title (`¡Protejamos nuestro planeta!`), engage readers directly (`¿Alguna vez has pensado en...?`), and end with a summary verdict.',
            ],
            exampleHeading: 'Model Q3 opening & closing sentences',
            examples: [
              'Email opener: « ¡Hola Carlos! Acabo de volver de mis vacaciones en Asturias y tengo muchas ganas de contártelo todo. »',
              'Article closer: « En conclusión, aunque los cambios pequeños parecen sencillos, es fundamental que todos reciclemos hoy para cuidar el futuro. »',
            ],
          },
        ],
        glossaryPills: [
          { term: 'signos de apertura (¿ ¡)', definition: 'Spanish inverted question and exclamation marks placed at the start of questions and exclamations, rewarded under writing accuracy.' },
        ],
      },
      {
        id: 'iges-4-2-c3',
        title: 'Paper 3 Speaking: Role-Play & Topic Conversations',
        summary: 'In the 10-minute prep period, prepare clear Role-Play answers (including your required question and correct tú/usted register); in Conversations, always extend using O-R-E-T.',
        bullets: [
          '**Role-Play (5 tasks, ~2 minutes)** - check whether you speak to a **friend (`tú`)** or an **adult/staff member (`usted`)**. Answer each bullet directly and concisely! Know core question starters: `¿Cuánto cuesta...?`, `¿A qué hora abre / cierra...?`, `¿Dónde está...?`, `¿Hay...?`, `¿Puedo pagar con tarjeta?`',
          '**Topic Conversations 1 & 2 (4 minutes each)** - NEVER stop at *"Sí, me gusta"*! Use **O-R-E-T**: **O**pinion + **R**eason (`porque / ya que`) + **E**xample (`por ejemplo`) + **T**imeframe shift (`el año pasado...` / `en el futuro...`).',
          '**Spontaneous Spanish fillers & rescue phrases** - `Bueno...`, `Pues...`, `A ver...`, `Es una buena pregunta...`, `La verdad es que...`; if unsure of a question, say calmly: `Perdone, ¿puede repetir la pregunta, por favor?`',
        ],
        subsections: [
          {
            heading: 'Spanish Pronunciation Quick Wins',
            bullets: [
              '**100% phonetic rules** - **`h`** is ALWAYS silent (`hola, hotel, hacer`); **`ll`** sounds like `y` (`calle, paella`); **`j` / `ge` / `gi`** is a throaty English `h` (`jugar, gente`); **`ñ`** sounds like `ny` (`español, año`); stress the second-to-last syllable unless an accent mark tells you otherwise!',
            ],
            exampleHeading: 'Model O-R-E-T extended speaking answer & Role-Play question',
            examples: [
              'Examiner: « ¿Qué te gusta hacer en tu tiempo libre? » → Student: « Pues, la verdad es que me apasiona la natación porque me ayuda a relajarme después del instituto. Por ejemplo, entreno tres veces a la semana, y el mes pasado participé en una competición regional donde lo pasé genial. »',
              'Role-Play question task ("Ask how much a return ticket costs"): « Perdone, ¿cuánto cuesta un billete de ida y vuelta, por favor? »',
            ],
          },
        ],
        glossaryPills: [
          { term: 'billete de ida y vuelta', definition: 'A return (round-trip) ticket in Spanish — essential for train/bus station Role-Plays.' },
        ],
        memoryAid: 'Speaking Conversations = O-R-E-T: Opinion + Reason (ya que) + Example (por ejemplo) + Tense shift (past/future)!',
        commonMistake: 'In Paper 3 Speaking, NEVER pronounce Spanish "h" ("hotel" = "o-TEL", NEVER "ho-tel") and NEVER leave a Paper 4 Q3 bullet unanswered — missing even one bullet severely caps Task Completion marks!',
      },
    ],
    keyTerms: [
      { term: 'Falso amigo', definition: 'Spanish word looking like an English word with a different true meaning (éxito = success, carpeta = folder).' },
      { term: 'Ya no / Tampoco', definition: 'Key reading/listening negative traps meaning "no longer" and "neither / not either".' },
      { term: 'Signos de apertura (¿ ¡)', definition: 'Inverted opening question and exclamation marks required in accurate written Spanish.' },
      { term: 'Billete de ida y vuelta', definition: 'Return travel ticket (opposite of billete sencillo — single ticket).' },
    ],
    checklistPoints: [
      'Decode Paper 1/2 distractors, synonyms, double negatives (ya no / ni... ni), and Spanish false friends',
      'Plan, write, and proofread Paper 4 Q2 (80–90 words) and Q3 (130–140 words) hitting every bullet and 3+ tenses',
      'Form concise Role-Play questions with tú/usted and expand Topic Conversation answers using O-R-E-T',
    ],
  },
};

export const IGCSE_SPANISH_QUIZZES: QuizQuestion[] = [
  // 1.1 (5)
  {
    id: 'iges-q-1-1-1',
    subtopicId: 'iges-1-1',
    type: 'mcq',
    marks: 1,
    prompt: 'Which Spanish sentence correctly expresses "I wake up at 7:30 and before going to bed I read"?',
    options: [
      'Me desperto a las siete y media y antes de me acuesto leo.',
      'Me despierto a las siete y media y antes de acostarme leo.',
      'Despierto a la siete y media y antes de acostar leo.',
      'Me despierto a las siete y cuarto y después de acostarme leo.',
    ],
    correctIndex: 1,
    explanation: 'despertarse is e→ie (me despierto), 7:30 is las siete y media, and antes de takes an infinitive + attached pronoun (acostarme).',
  },
  {
    id: 'iges-q-1-1-2',
    subtopicId: 'iges-1-1',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the school opinions and rules sentence accurately:',
    segments: ['Me ', ' las ciencias porque son interesantes, y en mi instituto está ', ' usar el móvil en clase.'],
    wordBank: ['gustan', 'prohibido', 'gusta', 'necesito'],
    answers: ['gustan', 'prohibido'],
    explanation: 'las ciencias is plural → me gustan; está prohibido + infinitive = it is forbidden to.',
  },
  {
    id: 'iges-q-1-1-3',
    subtopicId: 'iges-1-1',
    type: 'short-answer',
    marks: 2,
    prompt: 'Write ONE sentence in Spanish giving a justified opinion on a school subject OR school uniform.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'En mi opinión, el uniforme escolar es práctico porque fomenta la igualdad entre los alumnos.',
      markPoints: [
        { id: 'mp1', markDescription: 'Names school subject or uniform with opinion verb/phrase', requiredKeywordGroups: [['uniforme', 'matemáticas', 'matematicas', 'español', 'espanol', 'ciencias', 'historia', 'geografía', 'geografia', 'biología', 'biologia', 'física', 'fisica', 'química', 'quimica', 'informática', 'informatica', 'inglés', 'ingles', 'asignatura', 'educación', 'educacion']] },
        { id: 'mp2', markDescription: 'Gives justification with porque / ya que / puesto que + adjective/reason', requiredKeywordGroups: [['porque', 'ya que', 'puesto que', 'dado que'], ['útil', 'util', 'interesante', 'práctico', 'practico', 'igualdad', 'caro', 'incómodo', 'incomodo', 'aburrido', 'divertido', 'fácil', 'facil', 'difícil', 'dificil', 'fascinante', 'importante', 'profesor', 'profesora']] },
      ],
    },
    explanation: 'Always back every school opinion with porque / ya que and a specific agreed adjective or reason.',
  },
  {
    id: 'iges-q-1-1-4',
    subtopicId: 'iges-1-1',
    type: 'mcq',
    marks: 1,
    prompt: 'How do you say "at 1:00 pm" in Spanish?',
    options: ['A las una de la tarde', 'A la una de la tarde', 'En la una de la tarde', 'A las unos de la tarde'],
    correctIndex: 1,
    explanation: '1:00 is singular in Spanish → a la una; all other hours (2:00–12:00) use plural a las.',
  },
  {
    id: 'iges-q-1-1-5',
    subtopicId: 'iges-1-1',
    type: 'matching',
    marks: 2,
    prompt: 'Match each Spanish school phrase to its English meaning:',
    pairs: [
      { left: 'sacar buenas notas', right: 'to get good grades' },
      { left: 'aprobar un examen', right: 'to pass an exam' },
      { left: 'el comedor', right: 'the school canteen' },
      { left: 'las instalaciones', right: 'the facilities' },
    ],
    explanation: 'These phrases appear repeatedly in Cambridge 0530 education reading and writing tasks.',
  },

  // 1.2 (5)
  {
    id: 'iges-q-1-2-1',
    subtopicId: 'iges-1-2',
    type: 'mcq',
    marks: 1,
    prompt: 'Which Spanish sentence correctly expresses "My feet hurt and this soup is cold"?',
    options: [
      'Me duele los pies y esta sopa es fría.',
      'Me duelen los pies y esta sopa está fría.',
      'Me duelen los pies y esta sopa es fría.',
      'Tengo dolor los pies y esta sopa está fría.',
    ],
    correctIndex: 1,
    explanation: 'Plural body parts require me duelen (los pies); current food temperature requires estar (está fría).',
  },
  {
    id: 'iges-q-1-2-2',
    subtopicId: 'iges-1-2',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the healthy-living and restaurant phrases:',
    segments: ['Hay que ', ' de fumar para cuidar los pulmones, y al final de la cena pedimos ', ' al camarero.'],
    wordBank: ['dejar', 'la cuenta', 'empezar', 'la carpeta'],
    answers: ['dejar', 'la cuenta'],
    explanation: 'dejar de + infinitive = to give up / stop; la cuenta = the restaurant bill.',
  },
  {
    id: 'iges-q-1-2-3',
    subtopicId: 'iges-1-2',
    type: 'short-answer',
    marks: 2,
    prompt: 'Write ONE polite sentence in Spanish ordering food/drink in a restaurant OR complaining that a dish is cold/missing cutlery.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Buenas tardes, quisiera la sopa de verduras y agua sin gas, por favor.',
      markPoints: [
        { id: 'mp1', markDescription: 'Polite request/complaint frame (quisiera / me gustaría / voy a tomar / perdone / por favor)', requiredKeywordGroups: [['quisiera', 'gustaría', 'gustaria', 'tomar', 'perdone', 'por favor', 'traiga', 'trae', 'falta']] },
        { id: 'mp2', markDescription: 'Food, drink, or cutlery/temperature complaint vocabulary', requiredKeywordGroups: [['sopa', 'ensalada', 'paella', 'pollo', 'pescado', 'agua', 'zumo', 'café', 'cafe', 'menú', 'menu', 'cuenta', 'frío', 'frio', 'fría', 'fria', 'sucio', 'cuchillo', 'tenedor', 'cuchara', 'plato']] },
      ],
    },
    explanation: 'Use quisiera / me gustaría / Perdone... por favor for authentic formal restaurant Spanish.',
  },
  {
    id: 'iges-q-1-2-4',
    subtopicId: 'iges-1-2',
    type: 'mcq',
    marks: 1,
    prompt: 'Why do Spanish speakers say « ¡Esta tortilla está riquísima! » instead of « es riquísima »?',
    options: [
      'Because estar is used for how food tastes right now',
      'Because tortilla is masculine',
      'Because ser is never used with food',
      'Because rico only means expensive',
    ],
    correctIndex: 0,
    explanation: 'Estar + rico/bueno/delicioso expresses how a specific dish tastes in the moment; ser rico means wealthy.',
  },
  {
    id: 'iges-q-1-2-5',
    subtopicId: 'iges-1-2',
    type: 'multi-select',
    marks: 2,
    selectCount: 2,
    prompt: 'Select TWO Spanish sentences describing HEALTHY habits:',
    options: [
      'Llevo una dieta equilibrada con mucha fruta y verdura.',
      'Hago ejercicio tres veces por semana y duermo ocho horas.',
      'Como comida basura grasienta todos los días.',
      'Bebo demasiadas bebidas azucaradas cada noche.',
    ],
    correctIndices: [0, 1],
    explanation: 'Balanced diet, fruit/veg, regular exercise, and 8 hours of sleep define una vida sana.',
  },

  // 2.1 (5)
  {
    id: 'iges-q-2-1-1',
    subtopicId: 'iges-2-1',
    type: 'mcq',
    marks: 1,
    prompt: 'Which Spanish sentence uses the RIGHT verbs for playing tennis, playing guitar, and age?',
    options: [
      'Soy quince años, toco al tenis y juego la guitarra.',
      'Tengo quince años, juego al tenis y toco la guitarra.',
      'Tengo quince años, hago al tenis y juego la guitarra.',
      'Estoy quince años, juego el tenis y toco guitarra.',
    ],
    correctIndex: 1,
    explanation: 'Age uses tener (tengo 15 años), ball sports use jugar al (juego al tenis), and musical instruments use tocar (toco la guitarra).',
  },
  {
    id: 'iges-q-2-1-2',
    subtopicId: 'iges-2-1',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the family relationship and Band-1 duration sentence:',
    segments: ['Me ', ' muy bien con mi hermano mayor, y ', ' cinco años tocando el piano juntos.'],
    wordBank: ['llevo', 'llevamos', 'soy', 'jugamos'],
    answers: ['llevo', 'llevamos'],
    explanation: 'llevarse bien con = get on well with; llevar + time + gerund = have been doing for...',
  },
  {
    id: 'iges-q-2-1-3',
    subtopicId: 'iges-2-1',
    type: 'short-answer',
    marks: 2,
    prompt: 'Write ONE Spanish sentence explaining either an advantage OR a risk of social media (las redes sociales).',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Por un lado, las redes sociales son útiles para comunicarse con amigos, pero el ciberacoso es un peligro grave.',
      markPoints: [
        { id: 'mp1', markDescription: 'References social media / phone / Internet in Spanish', requiredKeywordGroups: [['redes sociales', 'móvil', 'movil', 'internet', 'tecnología', 'tecnologia', 'pantalla', 'aplicacion']] },
        { id: 'mp2', markDescription: 'Clear advantage or risk vocabulary (útil, contacto, amigos, ciberacoso, enganchado, privacidad, sueño, peligro)', requiredKeywordGroups: [['útil', 'util', 'contacto', 'comunic', 'amigos', 'inform', 'ciberacoso', 'enganchad', 'privacidad', 'sueño', 'sueno', 'peligro', 'riesgo', 'adicci', 'tiempo']] },
      ],
    },
    explanation: 'Pair las redes sociales with specific benefits or risks such as ciberacoso or privacidad.',
  },
  {
    id: 'iges-q-2-1-4',
    subtopicId: 'iges-2-1',
    type: 'mcq',
    marks: 1,
    prompt: 'What does « estar enganchado a las redes sociales » mean?',
    options: ['To delete all apps', 'To be hooked on / addicted to social media', 'To write a film review', 'To argue with parents'],
    correctIndex: 1,
    explanation: 'Estar enganchado/a a is an idiomatic Band-1 expression for being hooked/addicted to screens or social media.',
  },
  {
    id: 'iges-q-2-1-5',
    subtopicId: 'iges-2-1',
    type: 'mcq',
    marks: 1,
    prompt: 'Which adjective accurately completes « Mi hermana es muy ___ » (hardworking)?',
    options: ['trabajador', 'trabajadora', 'trabajadores', 'trabajar'],
    correctIndex: 1,
    explanation: 'Adjectives ending in -or add -a for feminine singular: trabajador → trabajadora.',
  },

  // 2.2 (5)
  {
    id: 'iges-q-2-2-1',
    subtopicId: 'iges-2-2',
    type: 'mcq',
    marks: 1,
    prompt: 'Which Spanish sentence states geographic location CORRECTLY?',
    options: [
      'Valencia es situada en el este de España.',
      'Valencia está situada en el este de España.',
      'Valencia tiene situada en el este de España.',
      'Valencia hay en el este de España.',
    ],
    correctIndex: 1,
    explanation: 'Geographic location ALWAYS uses estar (está en / está situada en), never ser!',
  },
  {
    id: 'iges-q-2-2-2',
    subtopicId: 'iges-2-2',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the past holiday narrative using Preterite and Imperfect:',
    segments: ['El verano pasado ', ' a Andalucía con mi familia y ', ' sol todos los días.'],
    wordBank: ['fui', 'hacía', 'iba', 'hizo'],
    answers: ['fui', 'hacía'],
    explanation: 'Specific completed trip = Preterite (fui); continuous background weather = Imperfect (hacía sol).',
  },
  {
    id: 'iges-q-2-2-3',
    subtopicId: 'iges-2-2',
    type: 'short-answer',
    marks: 2,
    prompt: 'Write ONE sentence in Spanish describing TWO concrete actions we should take to protect the environment.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Para proteger el medio ambiente, deberíamos reciclar el plástico y ahorrar agua y electricidad.',
      markPoints: [
        { id: 'mp1', markDescription: 'Eco-action 1 (reciclar, separar basura, ahorrar agua/energía, apagar luces)', requiredKeywordGroups: [['recicl', 'separar', 'ahorrar', 'apagar', 'duchar']] },
        { id: 'mp2', markDescription: 'Eco-action 2 or modal frame (deberíamos / hay que / transporte público / bici / renovables / plástico / agua / luz)', requiredKeywordGroups: [['deberíamos', 'deberiamos', 'hay que', 'transporte', 'bici', 'renovable', 'plástico', 'plastico', 'agua', 'electricidad', 'energía', 'energia', 'luces', 'árbol', 'arbol']] },
      ],
    },
    explanation: 'Combine deberíamos / hay que with crisp green infinitives like reciclar, ahorrar, and apagar.',
  },
  {
    id: 'iges-q-2-2-4',
    subtopicId: 'iges-2-2',
    type: 'matching',
    marks: 2,
    prompt: 'Match each Spanish travel or environment phrase to its English meaning:',
    pairs: [
      { left: 'alojarse en un albergue', right: 'to stay in a youth hostel' },
      { left: 'lo pasé bomba', right: 'I had a blast' },
      { left: 'el casco antiguo', right: 'the historic old town' },
      { left: 'ahorrar energía', right: 'to save energy' },
    ],
    explanation: 'Core high-scoring vocabulary spanning Topic Areas C and E.',
  },
  {
    id: 'iges-q-2-2-5',
    subtopicId: 'iges-2-2',
    type: 'mcq',
    marks: 1,
    prompt: 'What does « Siga todo recto y gire a la izquierda » instruct you to do?',
    options: ['Go back and turn right', 'Go straight ahead and turn left', 'Cross the bridge and stop', 'Take the second exit right'],
    correctIndex: 1,
    explanation: 'Siga todo recto = go straight ahead; gire a la izquierda = turn left (derecha = right).',
  },

  // 3.1 (5)
  {
    id: 'iges-q-3-1-1',
    subtopicId: 'iges-3-1',
    type: 'mcq',
    marks: 1,
    prompt: 'What is the difference between « Carlos es listo » and « Carlos está listo »?',
    options: [
      'Both mean Carlos is tired',
      'es listo = Carlos is clever; está listo = Carlos is ready',
      'es listo = Carlos is ready; está listo = Carlos is clever',
      'es listo = Carlos is boring; está listo = Carlos is bored',
    ],
    correctIndex: 1,
    explanation: 'Listo changes meaning completely: ser listo = clever/smart; estar listo = ready.',
  },
  {
    id: 'iges-q-3-1-2',
    subtopicId: 'iges-3-1',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Choose por or para correctly in this sentence:',
    segments: ['Estudio mucho ', ' aprobar mis exámenes, y gracias ', ' tu ayuda hoy.'],
    wordBank: ['para', 'por', 'de', 'con'],
    answers: ['para', 'por'],
    explanation: 'Purpose ("in order to pass") = para; cause/gratitude ("thanks for") = por.',
  },
  {
    id: 'iges-q-3-1-3',
    subtopicId: 'iges-3-1',
    type: 'short-answer',
    marks: 2,
    prompt: 'Explain the difference between « por » and « para » by giving ONE clear rule and Spanish example for EACH.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Para expresses purpose, recipient, destination, or deadline (e.g. Estudio para aprobar / Este regalo es para ti). Por expresses cause/reason, price/exchange, duration, or movement through (e.g. Gracias por tu ayuda / Pagué diez euros por el libro).',
      markPoints: [
        { id: 'mp1', markDescription: 'Correct rule + example for para (purpose/recipient/deadline/destination)', requiredKeywordGroups: [['para'], ['purpose', 'in order to', 'recipient', 'deadline', 'destination', 'opinion', 'aprobar', 'ti', 'madrid', 'lunes']] },
        { id: 'mp2', markDescription: 'Correct rule + example for por (cause/exchange/price/duration/through/time of day)', requiredKeywordGroups: [['por'], ['cause', 'reason', 'thanks', 'gracias', 'price', 'exchange', 'euros', 'through', 'duration', 'morning', 'mañana', 'manana']] },
      ],
    },
    explanation: 'Para points forward (goal, recipient, deadline); por looks at cause, exchange, route, or time of day.',
  },
  {
    id: 'iges-q-3-1-4',
    subtopicId: 'iges-3-1',
    type: 'multi-select',
    marks: 2,
    selectCount: 2,
    prompt: 'Select TWO grammatically CORRECT ways to say "I am going to take a shower":',
    options: ['Voy a ducharme.', 'Me voy a duchar.', 'Voy me a duchar.', 'A duchar me voy.'],
    correctIndices: [0, 1],
    explanation: 'With two-verb chains, the reflexive pronoun may go before the conjugated verb (Me voy a duchar) OR attached to the infinitive (Voy a ducharme).',
  },
  {
    id: 'iges-q-3-1-5',
    subtopicId: 'iges-3-1',
    type: 'mcq',
    marks: 1,
    prompt: 'Which preposition completes « Compré esta chaqueta ___ treinta euros » (price/exchange)?',
    options: ['para', 'por', 'hacia', 'según'],
    correctIndex: 1,
    explanation: 'Money paid in exchange for an item ALWAYS uses por.',
  },

  // 3.2 (5)
  {
    id: 'iges-q-3-2-1',
    subtopicId: 'iges-3-2',
    type: 'mcq',
    marks: 1,
    prompt: 'Which three verbs are the ONLY irregulars in the Spanish Imperfect tense?',
    options: [
      'tener, hacer, poder',
      'ser (era), ir (iba), ver (veía)',
      'estar, dar, saber',
      'hablar, comer, vivir',
    ],
    correctIndex: 1,
    explanation: 'Imperfect is almost 100% regular — only ser (era), ir (iba), and ver (veía) are irregular!',
  },
  {
    id: 'iges-q-3-2-2',
    subtopicId: 'iges-3-2',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the irregular Preterite and Simple Future verbs:',
    segments: ['Ayer ', ' todos mis deberes temprano, y el año que viene ', ' más tiempo libre.'],
    wordBank: ['hice', 'tendré', 'hacía', 'tengo'],
    answers: ['hice', 'tendré'],
    explanation: 'hacer preterite yo = hice; tener simple future yo = tendré (stem tendr- + -é).',
  },
  {
    id: 'iges-q-3-2-3',
    subtopicId: 'iges-3-2',
    type: 'short-answer',
    marks: 2,
    prompt: 'Explain the difference in meaning between « hablo » and « habló », AND state which tense each belongs to.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Hablo (no accent) is Present tense meaning "I speak", whereas habló (accent on ó) is Preterite tense meaning "he/she/usted spoke".',
      markPoints: [
        { id: 'mp1', markDescription: 'hablo = Present tense, "I speak"', requiredKeywordGroups: [['hablo'], ['present', 'i speak']] },
        { id: 'mp2', markDescription: 'habló = Preterite/past tense, "he/she spoke"', requiredKeywordGroups: [['habló', 'hablo'], ['preterite', 'past', 'he spoke', 'she spoke', 'spoke']] },
      ],
    },
    explanation: 'Missing one accent mark on Preterite yo/él changes person and tense completely!',
  },
  {
    id: 'iges-q-3-2-4',
    subtopicId: 'iges-3-2',
    type: 'matching',
    marks: 2,
    prompt: 'Match each verb to its irregular Simple Future / Conditional stem:',
    pairs: [
      { left: 'tener', right: 'tendr-' },
      { left: 'hacer', right: 'har-' },
      { left: 'poder', right: 'podr-' },
      { left: 'salir', right: 'saldr-' },
    ],
    explanation: 'These stems work identically for BOTH Simple Future (-é/-ás/-á) and Conditional (-ía/-ías/-ía).',
  },
  {
    id: 'iges-q-3-2-5',
    subtopicId: 'iges-3-2',
    type: 'mcq',
    marks: 1,
    prompt: 'Why is « nosotros preferimos » spelled WITHOUT `-ie-` even though `preferir` is an `e→ie` boot verb?',
    options: [
      'Because preferir is irregular only in the past',
      'Because nosotros and vosotros sit outside the "boot" and never stem-change in the present tense',
      'Because -ir verbs never stem-change',
      'Because it is in the future tense',
    ],
    correctIndex: 1,
    explanation: 'Stem changes apply only inside the boot (yo, tú, él/ella, ellos/ellas), NOT nosotros/vosotros.',
  },

  // 4.1 (5)
  {
    id: 'iges-q-4-1-1',
    subtopicId: 'iges-4-1',
    type: 'mcq',
    marks: 1,
    prompt: 'Which Spanish sentence correctly translates "When I am older, I will study medicine"?',
    options: [
      'Cuando soy mayor, estudiaré medicina.',
      'Cuando sea mayor, estudiaré medicina.',
      'Cuando era mayor, estudiaré medicina.',
      'Cuando seré mayor, estudiaré medicina.',
    ],
    correctIndex: 1,
    explanation: 'Cuando referring to a future event ALWAYS triggers the Present Subjunctive (ser → sea)!',
  },
  {
    id: 'iges-q-4-1-2',
    subtopicId: 'iges-4-1',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the two Band-1 idiomatic structures:',
    segments: [' ', ' de volver de Barcelona, y es fundamental que todos ', ' más plástico.'],
    wordBank: ['Acabo', 'reciclemos', 'Acabar', 'reciclamos'],
    answers: ['Acabo', 'reciclemos'],
    explanation: 'Acabo de + inf = I have just...; Es fundamental que triggers present subjunctive (-ar → -emos: reciclemos).',
  },
  {
    id: 'iges-q-4-1-3',
    subtopicId: 'iges-4-1',
    type: 'short-answer',
    marks: 2,
    prompt: 'Write ONE Spanish sentence using a Present Subjunctive trigger (e.g. cuando + future, espero que, es importante que, or ojalá).',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Cuando termine mis exámenes, viajaré por España con mis amigos.',
      markPoints: [
        { id: 'mp1', markDescription: 'Valid subjunctive trigger (cuando / espero que / quiero que / es importante que / es necesario que / es fundamental que / ojalá)', requiredKeywordGroups: [['cuando', 'espero que', 'quiero que', 'importante que', 'necesario que', 'fundamental que', 'ojalá', 'ojala']] },
        { id: 'mp2', markDescription: 'Correct present subjunctive verb form (sea, tenga, haga, vaya, haya, termine, reciclemos, ahorremos, proteja, pases, estudie, apruebe)', requiredKeywordGroups: [['sea', 'tenga', 'tengas', 'haga', 'vaya', 'haya', 'esté', 'este', 'termine', 'recicle', 'ahorre', 'proteja', 'pases', 'vengas', 'estudie', 'apruebe', 'viva', 'salga', 'podamos', 'hagamos', 'seamos']] },
      ],
    },
    explanation: 'Trigger + opposite-ending subjunctive (or DISHES irregular like sea/vaya/haga) unlocks top Range marks.',
  },
  {
    id: 'iges-q-4-1-4',
    subtopicId: 'iges-4-1',
    type: 'mcq',
    marks: 1,
    prompt: 'Why does « Espero aprobar el examen » use the INFINITIVE (`aprobar`) instead of the subjunctive?',
    options: [
      'Because esperar never takes the subjunctive',
      'Because both verbs share the SAME subject ("I hope that I pass"), so Spanish uses que + subjunctive only when the subject changes',
      'Because aprobar has no subjunctive form',
      'Because exams are in the past',
    ],
    correctIndex: 1,
    explanation: 'Same subject = infinitive (Espero aprobar); two different subjects = que + subjunctive (Espero que apruebes).',
  },
  {
    id: 'iges-q-4-1-5',
    subtopicId: 'iges-4-1',
    type: 'mcq',
    marks: 1,
    prompt: 'What does « Reciclamos mucho, lo cual protege el planeta » use to create a Band-1 complex clause?',
    options: ['A false friend', 'The clause-level relative pronoun "lo cual" ("..., which...")', 'A double negative', 'An imperative command'],
    correctIndex: 1,
    explanation: 'Lo cual smoothly links an evaluation back to an entire preceding clause.',
  },

  // 4.2 (5)
  {
    id: 'iges-q-4-2-1',
    subtopicId: 'iges-4-2',
    type: 'matching',
    marks: 2,
    prompt: 'Match each dangerous Spanish false friend (falso amigo) to its TRUE English meaning:',
    pairs: [
      { left: 'éxito', right: 'success' },
      { left: 'carpeta', right: 'folder' },
      { left: 'embarazada', right: 'pregnant' },
      { left: 'asistir a', right: 'to attend' },
    ],
    explanation: 'Spotting these classic falsos amigos prevents costly comprehension mistakes on Papers 1 and 2.',
  },
  {
    id: 'iges-q-4-2-2',
    subtopicId: 'iges-4-2',
    type: 'mcq',
    marks: 1,
    prompt: 'In a Paper 2 text, Mateo writes: « Antes jugaba al fútbol, pero ya no tengo tiempo; tampoco me interesa el rugby, así que ahora hago natación. » Which sport does Mateo do NOW?',
    options: ['Football', 'Rugby', 'Swimming (natación)', 'Tennis'],
    correctIndex: 2,
    explanation: 'ya no (no longer) eliminates football; tampoco (neither) eliminates rugby; ahora points directly to natación.',
  },
  {
    id: 'iges-q-4-2-3',
    subtopicId: 'iges-4-2',
    type: 'short-answer',
    marks: 2,
    prompt: 'Give TWO specific accuracy items you must check during a 5-minute proofread of Cambridge 0530 Paper 4 Question 3.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Check Preterite verb accent marks (e.g. hablé, visitó), noun-adjective gender and plural agreement, ser vs estar, por vs para, me gusta vs me gustan, and inverted ¿ ¡ punctuation.',
      markPoints: [
        { id: 'mp1', markDescription: 'Accuracy check 1 (accents / verb endings / gender-plural agreement)', requiredKeywordGroups: [['accent', 'preterite', 'verb', 'tense', 'gender', 'plural', 'agreement']] },
        { id: 'mp2', markDescription: 'Accuracy check 2 (ser vs estar / por vs para / gustar / inverted punctuation ¿ ¡ / bullets)', requiredKeywordGroups: [['ser', 'estar', 'por', 'para', 'gustar', 'punctuation', 'question mark', 'bullet', 'spelling', 'accent', 'agreement']] },
      ],
    },
    explanation: 'A targeted 5-minute proofread easily recovers 3–5 accuracy marks on Paper 4.',
  },
  {
    id: 'iges-q-4-2-4',
    subtopicId: 'iges-4-2',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the Paper 3 Spanish Speaking rules:',
    segments: ['In Spanish pronunciation the letter ', ' is always silent, and in Topic Conversations you should extend answers using Opinion, Reason, Example, and a different ', '.'],
    wordBank: ['h', 'tense', 'r', 'language'],
    answers: ['h', 'tense'],
    explanation: 'Silent h (hotel, hacer, hablar) + O-R-E-T extended answers lift both Pronunciation and Communication marks.',
  },
  {
    id: 'iges-q-4-2-5',
    subtopicId: 'iges-4-2',
    type: 'mcq',
    marks: 1,
    prompt: 'What does « un billete de ida y vuelta » mean in a train-station Role-Play?',
    options: ['A single one-way ticket', 'A return (round-trip) ticket', 'A delayed train', 'A window seat'],
    correctIndex: 1,
    explanation: 'Ida y vuelta = outward and return (round-trip ticket); sencillo / solo ida = single.',
  },
];

export const IGCSE_SPANISH_FLASHCARDS: FlashcardItem[] = [
  // 1.1
  { id: 'iges-fc-1-1-1', subtopicId: 'iges-1-1', front: 'Conjugate "despertarse" (e→ie) and "acostarse" (o→ue) for yo & nosotros.', backBullets: ['yo: me despierto / me acuesto.', 'nosotros: nos despertamos / nos acostamos (NO stem change in nosotros!).'] },
  { id: 'iges-fc-1-1-2', subtopicId: 'iges-1-1', front: 'Rule for reflexive verbs after antes de / después de?', backBullets: ['Use infinitive + attached pronoun: antes de acostarme (before going to bed), después de ducharme (after showering).'] },
  { id: 'iges-fc-1-1-3', subtopicId: 'iges-1-1', front: 'How do you say 1:00, 7:15, 7:30, and 7:45 in Spanish?', backBullets: ['1:00 = a la una; 7:15 = a las siete y cuarto; 7:30 = a las siete y media; 7:45 = a las ocho menos cuarto.'] },
  { id: 'iges-fc-1-1-4', subtopicId: 'iges-1-1', front: 'Give 3 structures for stating school rules (+ infinitive).', backBullets: ['Hay que + inf (must); Se debe / No se debe + inf (should/mustn’t); Está prohibido + inf (forbidden).'] },
  { id: 'iges-fc-1-1-5', subtopicId: 'iges-1-1', front: 'Give 1 pro and 1 con of school uniform in Spanish.', backBullets: ['Pro: Fomenta la igualdad y ahorra tiempo por la mañana.', 'Con: Es caro, incómodo y limita la individualidad.'] },

  // 1.2
  { id: 'iges-fc-1-2-1', subtopicId: 'iges-1-2', front: 'Four Spanish meal verbs instead of "comer el..."?', backBullets: ['desayunar (breakfast), almorzar (lunch), merendar (afternoon snack), cenar (dinner).'] },
  { id: 'iges-fc-1-2-2', subtopicId: 'iges-1-2', front: 'Why use estar (NOT ser) in « ¡Esta paella está deliciosa! »?', backBullets: ['Estar expresses immediate taste/temperature of a specific dish right now (ser expresses general qualities like healthy/nutritious).'] },
  { id: 'iges-fc-1-2-3', subtopicId: 'iges-1-2', front: 'Give 3 essential restaurant ordering/complaint phrases (usted).', backBullets: ['Quisiera el menú del día / ¿Nos trae la cuenta, por favor?', 'Perdone, este plato está frío / falta un tenedor / el vaso está sucio.'] },
  { id: 'iges-fc-1-2-4', subtopicId: 'iges-1-2', front: 'Singular vs plural pain rule with "doler"?', backBullets: ['Singular: Me duele la cabeza / la garganta; Plural: Me duelen los pies / las muelas.'] },
  { id: 'iges-fc-1-2-5', subtopicId: 'iges-1-2', front: 'Translate: "You must stop smoking and lead a healthy life."', backBullets: ['Hay que dejar de fumar y llevar una vida sana.'] },

  // 2.1
  { id: 'iges-fc-2-1-1', subtopicId: 'iges-2-1', front: 'Translate: "I get on well with my sister because she supports me."', backBullets: ['Me llevo bien con mi hermana porque siempre me apoya.'] },
  { id: 'iges-fc-2-1-2', subtopicId: 'iges-2-1', front: 'Distinguish jugar al, tocar, and hacer for hobbies.', backBullets: ['jugar al = ball/team games (al fútbol); tocar = instruments (la guitarra); hacer = individual sports (natación, ciclismo).'] },
  { id: 'iges-fc-2-1-3', subtopicId: 'iges-2-1', front: 'Give 4 upgraded alternatives to "me gusta".', backBullets: ['Me encanta(n), me apasiona(n), me interesa(n), me chifla(n), me aburre(n), no aguanto.'] },
  { id: 'iges-fc-2-1-4', subtopicId: 'iges-2-1', front: 'Translate: "I have been playing piano for 4 years" using llevar.', backBullets: ['Llevo cuatro años tocando el piano (or Toco el piano desde hace cuatro años).'] },
  { id: 'iges-fc-2-1-5', subtopicId: 'iges-2-1', front: 'Translate: cyberbullying, hooked on screens, privacy.', backBullets: ['el ciberacoso, estar enganchado/a a las pantallas, la privacidad.'] },

  // 2.2
  { id: 'iges-fc-2-2-1', subtopicId: 'iges-2-2', front: 'Translate: "Last year I went to Spain, stayed in a hotel, and had a blast."', backBullets: ['El año pasado fui a España, me alojé en un hotel y lo pasé bomba.'] },
  { id: 'iges-fc-2-2-2', subtopicId: 'iges-2-2', front: 'Which verb MUST be used for geographic location in Spanish?', backBullets: ['ESTAR — NEVER ser! (« Mi ciudad está situada en el sur de España » ✓).'] },
  { id: 'iges-fc-2-2-3', subtopicId: 'iges-2-2', front: 'Give 3 polite direction commands (usted) in Spanish.', backBullets: ['Siga todo recto (go straight), Gire a la izquierda/derecha (turn left/right), Tome la primera calle.'] },
  { id: 'iges-fc-2-2-4', subtopicId: 'iges-2-2', front: 'Give 4 key Spanish environmental actions.', backBullets: ['reciclar vidrio/plástico, ahorrar agua y energía, apagar las luces, usar energías renovables / transporte público.'] },
  { id: 'iges-fc-2-2-5', subtopicId: 'iges-2-2', front: 'What does « el casco antiguo » mean?', backBullets: ['The historic old town centre of a city or village.'] },

  // 3.1
  { id: 'iges-fc-3-1-1', subtopicId: 'iges-3-1', front: 'What do DOCTOR (Ser) and PLACE (Estar) stand for?', backBullets: ['DOCTOR: Date, Occupation, Characteristic, Time, Origin, Relationship.', 'PLACE: Position, Location, Action, Condition, Emotion.'] },
  { id: 'iges-fc-3-1-2', subtopicId: 'iges-3-1', front: 'Meaning shifts with ser vs estar for: aburrido, listo, rico?', backBullets: ['ser/estar aburrido = boring / bored; listo = clever / ready; rico = wealthy / delicious.'] },
  { id: 'iges-fc-3-1-3', subtopicId: 'iges-3-1', front: 'Main uses of PARA vs POR?', backBullets: ['PARA: purpose (in order to), recipient, opinion, deadline, destination.', 'POR: cause/thanks, price/exchange, duration/time of day, through/along, means.'] },
  { id: 'iges-fc-3-1-4', subtopicId: 'iges-3-1', front: 'Give 4 fixed Spanish idioms using POR.', backBullets: ['por supuesto (of course), por lo tanto (therefore), por ejemplo, por fin (at last), por lo menos (at least).'] },
  { id: 'iges-fc-3-1-5', subtopicId: 'iges-3-1', front: 'Where can a reflexive pronoun sit in a two-verb chain like "voy a duchar..."?', backBullets: ['Either BEFORE the conjugated verb (Me voy a duchar) OR attached to the infinitive (Voy a ducharme).'] },

  // 3.2
  { id: 'iges-fc-3-2-1', subtopicId: 'iges-3-2', front: 'Name the 4 main Yo-Go irregular present verbs.', backBullets: ['tener → tengo, hacer → hago, salir → salgo, poner → pongo (also venir → vengo, decir → digo).'] },
  { id: 'iges-fc-3-2-2', subtopicId: 'iges-3-2', front: 'Give the Preterite (yo) of: ir/ser, hacer, tener, estar, poder.', backBullets: ['fui, hice, tuve, estuve, pude.'] },
  { id: 'iges-fc-3-2-3', subtopicId: 'iges-3-2', front: 'What are the ONLY 3 irregular Imperfect verbs in Spanish?', backBullets: ['ser → era, ir → iba, ver → veía.'] },
  { id: 'iges-fc-3-2-4', subtopicId: 'iges-3-2', front: 'How do you form Simple Future and Conditional on regular verbs?', backBullets: ['Future: full infinitive + -é, -ás, -á, -emos, -éis, -án.', 'Conditional: full infinitive + -ía, -ías, -ía, -íamos, -íais, -ían.'] },
  { id: 'iges-fc-3-2-5', subtopicId: 'iges-3-2', front: 'Why are Preterite accent marks on yo and él/ella vital?', backBullets: ['They distinguish tense and subject: hablo ("I speak") vs habló ("he/she spoke")!'] },

  // 4.1
  { id: 'iges-fc-4-1-1', subtopicId: 'iges-4-1', front: 'Give 3 elevated alternatives to "pienso que" and 3 to "pero / porque".', backBullets: ['Opinions: A mi parecer, Desde mi punto de vista, Diría que.', 'Connectives: sin embargo / no obstante (however), ya que / dado que (since), por lo tanto (therefore).'] },
  { id: 'iges-fc-4-1-2', subtopicId: 'iges-4-1', front: 'Translate: acabar de + inf, valer la pena, tener ganas de.', backBullets: ['to have just done; to be worth it; to look forward to / feel like.'] },
  { id: 'iges-fc-4-1-3', subtopicId: 'iges-4-1', front: '3-step rule to form the Present Subjunctive?', backBullets: ['1. Take yo present (tengo, hablo). 2. Drop -o. 3. Add opposite vowel endings (-ar → -e/-es/-e/-emos/-en; -er/-ir → -a/-as/-a/-amos/-an).'] },
  { id: 'iges-fc-4-1-4', subtopicId: 'iges-4-1', front: 'List the 6 DISHES irregular Present Subjunctives.', backBullets: ['Dar → dé, Ir → vaya, Ser → sea, Haber → haya, Estar → esté, Saber → sepa.'] },
  { id: 'iges-fc-4-1-5', subtopicId: 'iges-4-1', front: 'Translate: "When I am older, I will live in Spain" (subjunctive rule!).', backBullets: ['Cuando sea mayor, viviré en España (cuando + future ALWAYS triggers subjunctive!).'] },

  // 4.2
  { id: 'iges-fc-4-2-1', subtopicId: 'iges-4-2', front: 'True meanings of: éxito, carpeta, embarazada, asistir a, actualmente?', backBullets: ['success, folder, pregnant, to attend, currently.'] },
  { id: 'iges-fc-4-2-2', subtopicId: 'iges-4-2', front: 'Translate key negative exam traps: ya no, tampoco, apenas, ni... ni...', backBullets: ['no longer, neither/not either, hardly, neither... nor...'] },
  { id: 'iges-fc-4-2-3', subtopicId: 'iges-4-2', front: 'Word limits and top-band ingredients for Paper 4 Q2 and Q3?', backBullets: ['Q2 = 80–90 words; Q3 = 130–140 words. Hit EVERY bullet, 3+ tenses, justified opinions, idioms, 1–2 subjunctives, and proofread ¿ ¡ & accents.'] },
  { id: 'iges-fc-4-2-4', subtopicId: 'iges-4-2', front: 'What does O-R-E-T stand for in Paper 3 Speaking Conversations?', backBullets: ['Opinion + Reason (ya que/porque) + Example (por ejemplo) + Tense shift (past/future).'] },
  { id: 'iges-fc-4-2-5', subtopicId: 'iges-4-2', front: 'Key Spanish pronunciation rules for h, ll, j, and ñ?', backBullets: ['h = ALWAYS silent; ll = y; j = throaty h; ñ = ny.'] },
];

export const IGCSE_SPANISH_CHEAT_SHEETS: CheatSheetItem[] = [
  {
    id: 'iges-cs-1',
    slug: 'topic-1-everyday-education-food',
    title: '1. Routine, School, Food & Health Cheat Sheet',
    topicNumber: 1,
    topicName: 'Everyday Activities & Education',
    summary: 'Reflexives, time, school rules, uniform debate, meal verbs, ordering out, and me duele/duelen.',
    accentColor: '#DC2626',
    sections: [
      {
        heading: 'Daily Routine, School & Uniform',
        points: [
          'Reflexives: me despierto (e→ie), me acuesto (o→ue); after antes de / después de attach to infinitive (antes de acostarme)',
          'Time: a la una (singular) vs a las dos/siete y media; Gustar: me gusta la historia vs me gustan las matemáticas',
          'Rules (+ inf): hay que, se debe, está prohibido | Uniform: fomenta la igualdad vs caro e incómodo',
        ],
      },
      {
        heading: 'Food, Restaurants & Health',
        points: [
          'Meal verbs: desayunar, almorzar, merendar, cenar | Taste/temp right now = ESTAR (¡Está riquísimo / está fría!)',
          'Restaurant (usted): Quisiera..., ¿Nos trae la cuenta?, Perdone, falta un tenedor',
          'Health: Me duele (singular) vs Me duelen (plural); dejar de fumar; llevar una vida sana',
        ],
      },
    ],
  },
  {
    id: 'iges-cs-2',
    slug: 'topic-2-personal-travel-environment',
    title: '2. Family, Hobbies, Holidays, Town & Eco Cheat Sheet',
    topicNumber: 2,
    topicName: 'Personal Life & Travel',
    summary: 'Llevarse bien, jugar/tocar/hacer, past holidays, town location (estar), and eco-solutions.',
    accentColor: '#DC2626',
    sections: [
      {
        heading: 'Relationships, Free Time & Media',
        points: [
          'Age = tener (Tengo 16 años); Get on well = llevarse bien con; Support = apoyar',
          'Sports/Music: jugar al (fútbol), tocar (la guitarra), hacer (natación) | Ongoing: llevar + time + gerund',
          'Tech balance: Por un lado... por otro lado..., sin embargo, el ciberacoso, estar enganchado/a',
        ],
      },
      {
        heading: 'Holidays, Town & Environment',
        points: [
          'Past holidays: Preterite events (fui, me alojé, lo pasé bomba) + Imperfect background (hacía sol, el hotel era cómodo)',
          'Location ALWAYS ESTAR (está en el sur); Directions: Siga todo recto, Gire a la izquierda/derecha',
          'Environment: el cambio climático, reciclar, ahorrar agua/energía, apagar las luces, deberíamos + inf',
        ],
      },
    ],
  },
  {
    id: 'iges-cs-3',
    slug: 'topic-3-core-spanish-grammar',
    title: '3. Ser/Estar, Por/Para & Core Tenses Cheat Sheet',
    topicNumber: 3,
    topicName: 'Core Spanish Grammar & Verbs',
    summary: 'DOCTOR vs PLACE, por vs para, pronoun placement, and Present/Preterite/Imperfect/Future.',
    accentColor: '#DC2626',
    sections: [
      {
        heading: 'Ser vs Estar & Por vs Para',
        points: [
          'SER = DOCTOR (Date, Occupation, Characteristic, Time, Origin, Relationship) | ESTAR = PLACE (Position, Location, Action, Condition, Emotion)',
          'Meaning shifts: ser/estar aburrido (boring/bored), listo (clever/ready), rico (rich/tasty)',
          'PARA = goal/in order to, recipient, deadline, destination | POR = cause/thanks, price, duration, through, time of day',
        ],
      },
      {
        heading: 'Core Verb Tenses Quick Reference',
        points: [
          'Present boot verbs (e→ie, o→ue, e→i) stay regular in nosotros/vosotros; Yo-Go: tengo, hago, salgo, pongo',
          'Preterite (completed): -é/-aste/-ó & -í/-iste/-ió (ALWAYS check accents!); irregulars: fui, hice, tuve, estuve, pude',
          'Imperfect (habits/scene): -aba / -ía; ONLY 3 irregulars: era, iba, veía',
          'Future (inf + -é/-ás/-á/-emos/-éis/-án) & Conditional (inf + -ía); stems: tendr-, har-, podr-, saldr-',
        ],
      },
    ],
  },
  {
    id: 'iges-cs-4',
    slug: 'topic-4-band-1-structures-exam-skills',
    title: '4. Band-1 Structures, Subjunctive & 0530 Exam Cheat Sheet',
    topicNumber: 4,
    topicName: 'High-Grade Structures & Exam Mastery',
    summary: 'Idioms, Present Subjunctive triggers, false friends, Paper 4 checklist, and Paper 3 Speaking.',
    accentColor: '#DC2626',
    sections: [
      {
        heading: 'Band-1 Idioms & Present Subjunctive',
        points: [
          'Opinions & links: Desde mi punto de vista, lo cual, ya que, sin embargo, a pesar de que, por lo tanto',
          'Idioms: acabar de + inf, llevar + gerund, soler + inf, al + inf, valer la pena, tener ganas de',
          'Subjunctive = yo minus -o + opposite endings (-ar→e, -er/-ir→a) + DISHES (dé, vaya, sea, haya, esté, sepa)',
          'Top triggers: cuando + future (Cuando sea mayor...), espero que..., es importante que..., ojalá...',
        ],
      },
      {
        heading: '0530 Papers 1–4 Exam Strategy',
        points: [
          'Reading/Listening: spot ya no, tampoco, ni... ni, synonyms, and falsos amigos (éxito, carpeta, embarazada, asistir a)',
          'Writing Q3 (130–140 words): ALL bullets + 3+ tenses + subjunctive + idioms + proofread accents & ¿ ¡',
          'Speaking: Role-Play tú/usted + crisp questions; Conversations extend with O-R-E-T; h is ALWAYS silent!',
        ],
      },
    ],
  },
];

export const IGCSE_SPANISH_EXAM_PRACTICE: ExamQuestionItem[] = [
  {
    id: 'iges-ex-1-1',
    subtopicId: 'iges-1-1',
    number: 1,
    stimulus: '[Cambridge IGCSE Spanish 0530 Paper 2 & Paper 4 Style] Read Lucía’s post: « Entre semana me levanto a las seis y media. Me encantan las ciencias, pero odio llevar uniforme porque me parece muy incómodo en verano. »',
    parts: [
      {
        id: 'p1',
        label: '(a)',
        prompt: 'What time does Lucía get up, and why does she dislike school uniform? Answer in English.',
        kind: 'short-answer',
        marks: 2,
        rubric: {
          maxMarks: 2,
          modelAnswer: 'She gets up at 6:30 (half past six) and dislikes school uniform because she finds it very uncomfortable in summer.',
          markPoints: [
            { id: 'mp1', markDescription: 'Gets up at 6:30 / half past six', requiredKeywordGroups: [['6:30', '6.30', 'half past six', 'six thirty']] },
            { id: 'mp2', markDescription: 'Finds uniform uncomfortable (in summer)', requiredKeywordGroups: [['uncomfortable', 'not comfortable']] },
          ],
        },
      },
      {
        id: 'p2',
        label: '(b)',
        prompt: 'In Spanish, write 2 sentences describing ONE rule in your school and giving a balanced opinion on school uniform.',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'En mi instituto está prohibido usar el móvil en clase. Por un lado, el uniforme fomenta la igualdad, pero por otro lado es bastante caro.',
          markPoints: [
            { id: 'mp1', markDescription: 'Valid school rule structure (hay que / se debe / está prohibido / no se debe)', requiredKeywordGroups: [['hay que', 'se debe', 'prohibido', 'permitido']] },
            { id: 'mp2', markDescription: 'Uniform pro OR con reason in Spanish', requiredKeywordGroups: [['igualdad', 'práctico', 'practico', 'tiempo', 'imagen', 'caro', 'incómodo', 'incomodo', 'feo', 'individualidad', 'aburrido']] },
            { id: 'mp3', markDescription: 'Balancing contrast connective (pero, sin embargo, aunque, por otro lado)', requiredKeywordGroups: [['pero', 'sin embargo', 'aunque', 'otro lado', 'no obstante']] },
          ],
        },
      },
    ],
  },
  {
    id: 'iges-ex-1-2',
    subtopicId: 'iges-1-2',
    number: 2,
    stimulus: '[Cambridge IGCSE Spanish 0530 Paper 3 & Paper 4 Style] You are advising a friend on healthy eating and dealing with a restaurant issue during a trip to Madrid.',
    parts: [
      {
        id: 'p1',
        label: '(a)',
        prompt: 'Which option correctly translates "My stomach hurts and I have had a fever for two days"?',
        kind: 'mcq',
        marks: 1,
        options: [
          'Me duelen el estómago y soy fiebre para dos días.',
          'Me duele el estómago y tengo fiebre desde hace dos días.',
          'Me duele el estómago y estoy fiebre desde hace dos días.',
          'Me duelen el estómago y tengo fiebre por dos días.',
        ],
        correctIndex: 1,
      },
      {
        id: 'p2',
        label: '(b)',
        prompt: 'Write 2 sentences in Spanish: (1) explain what you eat or do to keep healthy, and (2) politely tell a waiter that your soup is cold and ask for the bill.',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'Para llevar una vida sana, como mucha fruta y verdura y hago deporte tres veces por semana. Perdone señor, mi sopa está fría y ¿nos trae la cuenta, por favor?',
          markPoints: [
            { id: 'mp1', markDescription: 'Healthy eating/exercise habit in Spanish', requiredKeywordGroups: [['fruta', 'verdura', 'ensalada', 'agua', 'sana', 'equilibrada', 'deporte', 'ejercicio', 'dormir', 'evito']] },
            { id: 'mp2', markDescription: 'Reports cold soup using estar (está fría)', requiredKeywordGroups: [['sopa'], ['está fría', 'esta fria']] },
            { id: 'mp3', markDescription: 'Polite request for the bill (la cuenta + por favor / trae)', requiredKeywordGroups: [['cuenta'], ['por favor', 'trae', 'traiga', 'perdone', 'quisiera']] },
          ],
        },
      },
    ],
  },
  {
    id: 'iges-ex-2-1',
    subtopicId: 'iges-2-1',
    number: 3,
    stimulus: '[Cambridge IGCSE Spanish 0530 Paper 4 Style] Your Spanish penfriend asks about your family relationships, hobbies, and views on technology.',
    parts: [
      {
        id: 'p1',
        label: '(a)',
        prompt: 'Write ONE Spanish sentence saying how you get on with a family member or friend and why.',
        kind: 'short-answer',
        marks: 2,
        rubric: {
          maxMarks: 2,
          modelAnswer: 'Me llevo muy bien con mi hermana porque es comprensiva y siempre me hace reír.',
          markPoints: [
            { id: 'mp1', markDescription: 'Uses llevarse bien/mal con + family/friend', requiredKeywordGroups: [['llevo'], ['hermano', 'hermana', 'madre', 'padre', 'padres', 'amigo', 'amiga', 'primo', 'prima', 'abuelo', 'abuela', 'familia']] },
            { id: 'mp2', markDescription: 'Reason connective + trait/behaviour', requiredKeywordGroups: [['porque', 'ya que', 'puesto que'], ['comprensiv', 'cariños', 'carinos', 'gracios', 'divertid', 'fiel', 'leal', 'amable', 'apoya', 'reír', 'reir', 'simpátic', 'simpatic', 'generos', 'paciente', 'discut']] },
          ],
        },
      },
      {
        id: 'p2',
        label: '(b)',
        prompt: 'Write ONE Spanish sentence describing a hobby you have done for several years (using llevar + gerund OR desde hace) and giving an upgraded opinion.',
        kind: 'short-answer',
        marks: 2,
        rubric: {
          maxMarks: 2,
          modelAnswer: 'Llevo cinco años tocando la guitarra y me apasiona porque me ayuda a relajarme.',
          markPoints: [
            { id: 'mp1', markDescription: 'Uses llevar + gerund OR present + desde hace', requiredKeywordGroups: [['llevo', 'desde hace']] },
            { id: 'mp2', markDescription: 'Hobby/sport/instrument + opinion (me encanta, me apasiona, me interesa, me relaja, divertido)', requiredKeywordGroups: [['guitarra', 'piano', 'fútbol', 'futbol', 'tenis', 'baloncesto', 'natación', 'natacion', 'ciclismo', 'leer', 'música', 'musica', 'baile', 'dibujar', 'deporte', 'correr', 'nadar'], ['apasiona', 'encanta', 'interesa', 'chifla', 'gusta', 'relaja', 'divertido', 'fascinante', 'genial']] },
          ],
        },
      },
    ],
  },
  {
    id: 'iges-ex-2-2',
    subtopicId: 'iges-2-2',
    number: 4,
    stimulus: '[Cambridge IGCSE Spanish 0530 Paper 4 Q3 Style] Write about a memorable holiday in the past and what people should do to protect the environment in your local area.',
    parts: [
      {
        id: 'p1',
        label: '(a)',
        prompt: 'Write 2 sentences in Spanish about a past holiday combining at least ONE Preterite verb and ONE Imperfect description/weather verb.',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'El verano pasado fui a Sevilla con mi familia y nos alojamos en un hotel cerca del centro. Hacía mucho calor pero visitamos monumentos preciosos y lo pasé bomba.',
          markPoints: [
            { id: 'mp1', markDescription: 'Valid Preterite holiday action (fui, fuimos, me alojé, nos alojamos, visité, visitamos, nadé, comí, pasé)', requiredKeywordGroups: [['fui', 'fuimos', 'alojé', 'aloje', 'alojamos', 'visité', 'visite', 'visitamos', 'nadé', 'nade', 'comí', 'comi', 'pasé', 'pase', 'viajé', 'viaje', 'viajamos']] },
            { id: 'mp2', markDescription: 'Valid Imperfect weather/description (hacía, era, estaba, había, llovía)', requiredKeywordGroups: [['hacía', 'hacia', 'era', 'eran', 'estaba', 'había', 'habia', 'llovía', 'llovia']] },
            { id: 'mp3', markDescription: 'Holiday destination/activity vocabulary', requiredKeywordGroups: [['playa', 'hotel', 'camping', 'mar', 'montaña', 'montana', 'avión', 'avion', 'tren', 'españa', 'espana', 'sevilla', 'madrid', 'barcelona', 'málaga', 'malaga', 'vacaciones', 'turismo', 'monumento', 'sol', 'calor']] },
          ],
        },
      },
      {
        id: 'p2',
        label: '(b)',
        prompt: 'Write ONE sentence in Spanish describing where your town is located (using estar) and ONE environmental measure your area needs.',
        kind: 'short-answer',
        marks: 2,
        rubric: {
          maxMarks: 2,
          modelAnswer: 'Mi ciudad está en el norte del país y deberíamos construir más carriles bici y reciclar más plástico.',
          markPoints: [
            { id: 'mp1', markDescription: 'Uses estar for geographic location (está en / está situada)', requiredKeywordGroups: [['está', 'esta'], ['norte', 'sur', 'este', 'oeste', 'costa', 'centro', 'afueras', 'campo', 'cerca', 'montaña', 'montana', 'país', 'pais']] },
            { id: 'mp2', markDescription: 'Environmental measure (reciclar, carriles bici, transporte público, ahorrar, renovables, árboles, plástico, contaminación)', requiredKeywordGroups: [['recicl', 'carril', 'bici', 'transporte', 'ahorrar', 'renovable', 'árbol', 'arbol', 'plástico', 'plastico', 'contaminación', 'contaminacion', 'basura', 'verde']] },
          ],
        },
      },
    ],
  },
  {
    id: 'iges-ex-3-1',
    subtopicId: 'iges-3-1',
    number: 5,
    stimulus: '[Cambridge IGCSE Spanish 0530 Grammar Precision Drill] Distinguish ser/estar and por/para accurately to eliminate the most common IGCSE accuracy mistakes.',
    parts: [
      {
        id: 'p1',
        label: '(a)',
        prompt: 'Correct ALL THREE errors in this draft sentence: « Mi pueblo es en el sur, estudio español por aprobar, y gracias para tu regalo. »',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'Mi pueblo está en el sur, estudio español para aprobar, y gracias por tu regalo.',
          markPoints: [
            { id: 'mp1', markDescription: 'Changes es → está for geographic location', requiredKeywordGroups: [['está en', 'esta en']] },
            { id: 'mp2', markDescription: 'Changes por aprobar → para aprobar (purpose)', requiredKeywordGroups: [['para aprobar']] },
            { id: 'mp3', markDescription: 'Changes gracias para → gracias por (cause/gratitude)', requiredKeywordGroups: [['gracias por']] },
          ],
        },
      },
      {
        id: 'p2',
        label: '(b)',
        prompt: 'Which Spanish sentence means "My cousin is clever, so he is ready for the exam"?',
        kind: 'mcq',
        marks: 1,
        options: [
          'Mi primo está listo, así que es listo para el examen.',
          'Mi primo es listo, así que está listo para el examen.',
          'Mi primo es listo, así que es listo para el examen.',
          'Mi primo está listo, así que está listo por el examen.',
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    id: 'iges-ex-3-2',
    subtopicId: 'iges-3-2',
    number: 6,
    stimulus: '[Cambridge IGCSE Spanish 0530 Multi-Tense Control] Top-band Paper 4 writing moves smoothly across past, present, and future/conditional timeframes.',
    parts: [
      {
        id: 'p1',
        label: '(a)',
        prompt: 'Write ONE Spanish sentence contrasting a childhood habit (Imperfect) with a specific event you did last weekend (Preterite).',
        kind: 'short-answer',
        marks: 2,
        rubric: {
          maxMarks: 2,
          modelAnswer: 'Cuando era pequeño, jugaba al fútbol cada sábado, pero el fin de semana pasado fui al cine con mis amigos.',
          markPoints: [
            { id: 'mp1', markDescription: 'Valid Imperfect verb (era, iba, veía, jugaba, vivía, comía, tenía, solía)', requiredKeywordGroups: [['era', 'iba', 'veía', 'veia', 'jugaba', 'vivía', 'vivia', 'comía', 'comia', 'tenía', 'tenia', 'solía', 'solia', 'estudiaba', 'hacía', 'hacia']] },
            { id: 'mp2', markDescription: 'Valid Preterite verb (fui, hice, jugué, visité, vi, comí, salí, tuve, compré)', requiredKeywordGroups: [['fui', 'hice', 'jugué', 'jugue', 'visité', 'visite', 'vi', 'comí', 'comi', 'salí', 'sali', 'tuve', 'compré', 'compre', 'nadé', 'nade', 'hablé', 'hable']] },
          ],
        },
      },
      {
        id: 'p2',
        label: '(b)',
        prompt: 'Write ONE Spanish sentence about your future plans combining either Simple Future OR Conditional with a clear reason.',
        kind: 'short-answer',
        marks: 2,
        rubric: {
          maxMarks: 2,
          modelAnswer: 'En el futuro estudiaré ingeniería y me gustaría trabajar en el extranjero porque quiero aprender otras culturas.',
          markPoints: [
            { id: 'mp1', markDescription: 'Valid Simple Future or Conditional verb', requiredKeywordGroups: [['estudiaré', 'estudiare', 'iré', 'ire', 'trabajaré', 'trabajare', 'viviré', 'vivire', 'seré', 'sere', 'tendré', 'tendre', 'haré', 'hare', 'viajaré', 'viajare', 'gustaría', 'gustaria', 'encantaría', 'encantaria', 'sería', 'seria', 'viviría', 'viviria', 'trabajaría', 'trabajaria']] },
            { id: 'mp2', markDescription: 'Connective + reason (porque / ya que / para)', requiredKeywordGroups: [['porque', 'ya que', 'para', 'puesto que']] },
          ],
        },
      },
    ],
  },
  {
    id: 'iges-ex-4-1',
    subtopicId: 'iges-4-1',
    number: 7,
    stimulus: '[Cambridge IGCSE Spanish 0530 Band-1 Range Upgrade] A student wrote: « Me gusta el español porque es bueno. Cuando soy mayor, viajaré a México. »',
    parts: [
      {
        id: 'p1',
        label: '(a)',
        prompt: 'Rewrite BOTH sentences in higher-band Spanish: upgrade the opinion/connective AND fix the `cuando` subjunctive error.',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'Desde mi punto de vista, el español vale mucho la pena ya que es sumamente útil, lo cual abre puertas. Cuando sea mayor, viajaré a México.',
          markPoints: [
            { id: 'mp1', markDescription: 'Upgraded opinion/idiom (desde mi punto de vista / a mi parecer / me apasiona / vale la pena / lo bueno es que)', requiredKeywordGroups: [['punto de vista', 'parecer', 'diría que', 'diria que', 'apasiona', 'vale la pena', 'lo bueno', 'lo mejor', 'cabe duda']] },
            { id: 'mp2', markDescription: 'Elevated connective (ya que / dado que / puesto que / además / lo cual / sin embargo)', requiredKeywordGroups: [['ya que', 'dado que', 'puesto que', 'lo cual', 'además', 'ademas', 'sin embargo', 'por lo tanto']] },
            { id: 'mp3', markDescription: 'Fixes future cuando error to Present Subjunctive: cuando sea mayor', requiredKeywordGroups: [['cuando sea']] },
          ],
        },
      },
      {
        id: 'p2',
        label: '(b)',
        prompt: 'Which Spanish idiom translates "I have just finished my homework"?',
        kind: 'mcq',
        marks: 1,
        options: [
          'Llevo terminar mis deberes.',
          'Acabo de terminar mis deberes.',
          'Suelo terminar mis deberes.',
          'Antes de terminar mis deberes.',
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    id: 'iges-ex-4-2',
    subtopicId: 'iges-4-2',
    number: 8,
    stimulus: '[Cambridge IGCSE Spanish 0530 Paper 2 & Paper 3 Style] Read this short Reading passage: « Actualmente ya no vivo en Madrid, pero la semana pasada asistí a una exposición cultural allí que fue un éxito enorme. »',
    parts: [
      {
        id: 'p1',
        label: '(a)',
        prompt: 'Decode the three key Reading traps: does the speaker still live in Madrid, what did they do last week, and how did the exhibition go? Answer in English.',
        kind: 'short-answer',
        marks: 2,
        rubric: {
          maxMarks: 2,
          modelAnswer: 'No, they currently no longer live in Madrid; last week they attended a cultural exhibition there and it was a huge success.',
          markPoints: [
            { id: 'mp1', markDescription: 'Decodes actualmente + ya no (currently no longer lives in Madrid)', requiredKeywordGroups: [['no longer', 'not live', 'doesn\'t live', 'does not live', 'no,']] },
            { id: 'mp2', markDescription: 'Decodes asistí (attended) + éxito (success)', requiredKeywordGroups: [['attend', 'went to'], ['success']] },
          ],
        },
      },
      {
        id: 'p2',
        label: '(b)',
        prompt: 'For a Paper 3 Speaking Role-Play at a train station, write ONE polite question in Spanish (using usted) asking for the price of a return ticket OR what time the train leaves.',
        kind: 'short-answer',
        marks: 2,
        rubric: {
          maxMarks: 2,
          modelAnswer: 'Perdone, ¿cuánto cuesta un billete de ida y vuelta para Barcelona y a qué hora sale el tren, por favor?',
          markPoints: [
            { id: 'mp1', markDescription: 'Accurate question word (cuánto cuesta / a qué hora)', requiredKeywordGroups: [['cuánto cuesta', 'cuanto cuesta', 'qué hora', 'que hora']] },
            { id: 'mp2', markDescription: 'Return ticket or train departure vocabulary (billete, ida y vuelta, tren, sale)', requiredKeywordGroups: [['ida y vuelta', 'billete', 'tren', 'sale', 'llega']] },
          ],
        },
      },
    ],
  },
];

export const IGCSE_SPANISH_PAST_PAPERS: PastPaperDoc[] = [];

export const IGCSE_SPANISH_KEY_TERMS: KeyTermEntry[] = [
  { id: 'iges-kt-1', term: 'Verbo reflexivo', definition: 'Verb with matching pronoun (me/te/se/nos/os/se) such as me despierto and me acuesto.', topicNumber: 1, subtopicId: 'iges-1-1', subtopicCode: '1.1' },
  { id: 'iges-kt-2', term: 'Las normas escolares', definition: 'School rules paired with impersonal infinitive triggers (hay que, se debe, está prohibido).', topicNumber: 1, subtopicId: 'iges-1-1', subtopicCode: '1.1' },
  { id: 'iges-kt-3', term: 'Me duele / Me duelen', definition: 'Gustar-type pain expression agreeing with singular (la cabeza) or plural (los pies) body parts.', topicNumber: 1, subtopicId: 'iges-1-2', subtopicCode: '1.2' },
  { id: 'iges-kt-4', term: 'La cuenta', definition: 'The restaurant bill (« ¿Nos trae la cuenta, por favor? »).', topicNumber: 1, subtopicId: 'iges-1-2', subtopicCode: '1.2' },
  { id: 'iges-kt-5', term: 'Llevarse bien con', definition: 'Reflexive phrase meaning to get on well with someone.', topicNumber: 2, subtopicId: 'iges-2-1', subtopicCode: '2.1' },
  { id: 'iges-kt-6', term: 'Jugar al / Tocar / Hacer', definition: 'Play ball sports (jugar al), play musical instruments (tocar), and do individual sports (hacer).', topicNumber: 2, subtopicId: 'iges-2-1', subtopicCode: '2.1' },
  { id: 'iges-kt-7', term: 'Pasarlo bomba', definition: 'Authentic Spanish idiom meaning to have an amazing time (Lo pasé bomba).', topicNumber: 2, subtopicId: 'iges-2-2', subtopicCode: '2.2' },
  { id: 'iges-kt-8', term: 'El cambio climático', definition: 'Climate change — core Topic Area E concept paired with reciclar and ahorrar.', topicNumber: 2, subtopicId: 'iges-2-2', subtopicCode: '2.2' },
  { id: 'iges-kt-9', term: 'Ser (DOCTOR) vs Estar (PLACE)', definition: 'Core distinction for "to be": traits/origin/time (ser) vs location/emotions/conditions (estar).', topicNumber: 3, subtopicId: 'iges-3-1', subtopicCode: '3.1' },
  { id: 'iges-kt-10', term: 'Por vs Para', definition: 'Cause/exchange/route/time-of-day (por) vs purpose/recipient/deadline/destination (para).', topicNumber: 3, subtopicId: 'iges-3-1', subtopicCode: '3.1' },
  { id: 'iges-kt-11', term: 'Pretérito indefinido', definition: 'Preterite past tense for completed single actions (fui, hice, tuve, visité).', topicNumber: 3, subtopicId: 'iges-3-2', subtopicCode: '3.2' },
  { id: 'iges-kt-12', term: 'Pretérito imperfecto', definition: 'Imperfect past tense for habits, weather, and descriptions (only 3 irregulars: era, iba, veía).', topicNumber: 3, subtopicId: 'iges-3-2', subtopicCode: '3.2' },
  { id: 'iges-kt-13', term: 'Acabar de + infinitivo', definition: 'High-band idiom expressing "to have just done something".', topicNumber: 4, subtopicId: 'iges-4-1', subtopicCode: '4.1' },
  { id: 'iges-kt-14', term: 'Modo subjuntivo', definition: 'Mood formed with opposite endings triggered by wishes, impersonal necessity, ojalá, and future cuando.', topicNumber: 4, subtopicId: 'iges-4-1', subtopicCode: '4.1' },
  { id: 'iges-kt-15', term: 'Falso amigo', definition: 'Spanish word looking like an English word with a different true meaning (éxito = success, carpeta = folder).', topicNumber: 4, subtopicId: 'iges-4-2', subtopicCode: '4.2' },
  { id: 'iges-kt-16', term: 'Billete de ida y vuelta', definition: 'Return (round-trip) ticket — essential for Paper 3 transport Role-Plays.', topicNumber: 4, subtopicId: 'iges-4-2', subtopicCode: '4.2' },
];
