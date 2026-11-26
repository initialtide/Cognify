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

export const IGCSE_HISTORY_TOPICS: TopicDefinition[] = [
  {
    number: 1,
    title: 'Peace Treaties & The League of Nations',
    subtopics: [
      {
        id: 'ighist-1-1',
        code: '1.1',
        slug: '1.1-treaty-of-versailles-peace-settlements',
        title: 'The Treaty of Versailles & Post-WWI Peace Settlements',
        readingMinutes: 10,
        hasDeepContent: true,
      },
      {
        id: 'ighist-1-2',
        code: '1.2',
        slug: '1.2-league-of-nations-successes-failures-collapse',
        title: 'The League of Nations: Successes, Failures & Collapse',
        readingMinutes: 10,
        hasDeepContent: true,
      },
    ],
  },
  {
    number: 2,
    title: 'Collapse of International Peace 1933–39',
    subtopics: [
      {
        id: 'ighist-2-1',
        code: '2.1',
        slug: '2.1-hitlers-foreign-policy-rearmament-anschluss',
        title: "Hitler's Foreign Policy, Rearmament & Anschluss",
        readingMinutes: 10,
        hasDeepContent: true,
      },
      {
        id: 'ighist-2-2',
        code: '2.2',
        slug: '2.2-appeasement-munich-nazi-soviet-pact',
        title: 'Appeasement, Munich Agreement & The Nazi-Soviet Pact',
        readingMinutes: 10,
        hasDeepContent: true,
      },
    ],
  },
  {
    number: 3,
    title: 'The Cold War 1945–1975',
    subtopics: [
      {
        id: 'ighist-3-1',
        code: '3.1',
        slug: '3.1-origins-cold-war-yalta-potsdam-truman-marshall',
        title: 'Origins of the Cold War: Yalta, Potsdam, Truman & Marshall',
        readingMinutes: 10,
        hasDeepContent: true,
      },
      {
        id: 'ighist-3-2',
        code: '3.2',
        slug: '3.2-cold-war-crises-berlin-cuba-vietnam',
        title: 'Cold War Crises: Berlin Blockade, Cuba 1962 & Vietnam',
        readingMinutes: 11,
        hasDeepContent: true,
      },
    ],
  },
  {
    number: 4,
    title: 'Germany Depth Study 1918–45 & Source Skills',
    subtopics: [
      {
        id: 'ighist-4-1',
        code: '4.1',
        slug: '4.1-weimar-republic-crisis-stresemann-hitler',
        title: 'Weimar Republic: Crisis, Stresemann & Rise of Hitler',
        readingMinutes: 11,
        hasDeepContent: true,
      },
      {
        id: 'ighist-4-2',
        code: '4.2',
        slug: '4.2-nazi-dictatorship-control-paper-2-sources',
        title: 'Nazi Dictatorship, Control & Paper 2 Source Evaluation',
        readingMinutes: 11,
        hasDeepContent: true,
      },
    ],
  },
];

export const IGCSE_HISTORY_NOTES: Record<string, NoteLesson> = {
  'ighist-1-1': {
    subtopicId: 'ighist-1-1',
    subtopicCode: '1.1',
    subtopicTitle: 'The Treaty of Versailles & Post-WWI Peace Settlements',
    readingMinutes: 10,
    videoTitle: 'The Treaty of Versailles & The Paris Peace Conference (1919)',
    youtubeId: 'QFrzGhlRAkw',
    videoChannel: 'History Matters',
    videoDuration: '7:10',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE History (0470) Core Option B — Key Question 1',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Aims & Clashes of the Big Three at Paris', cardId: 'ighist-1-1-c1' },
      { time: '2:25', seconds: 145, label: 'Terms of Versailles (GARGLE) & Sister Treaties', cardId: 'ighist-1-1-c2' },
      { time: '4:50', seconds: 290, label: 'German Reactions & Evaluating Whether Peace Was Fair', cardId: 'ighist-1-1-c3' },
    ],
    cards: [
      {
        id: 'ighist-1-1-c1',
        title: 'The Big Three & Their Conflicting Aims (Paris, 1919)',
        summary: 'Georges Clemenceau wanted security and revenge, Woodrow Wilson wanted a fair Fourteen-Point peace, and David Lloyd George sought a middle ground that protected British trade and empire.',
        bullets: [
          '**Georges Clemenceau (France, "The Tiger")** - France suffered 1.4 million dead and devastated north-eastern farmland/industry; he demanded permanent weakening of Germany (breaking up Germany, stripping the Rhineland, massive reparations).',
          '**Woodrow Wilson (USA)** - America entered late (1917) with zero homeland damage; he championed his **Fourteen Points**: **self-determination**, disarmament, free trade, and a **League of Nations** to prevent future wars.',
          '**David Lloyd George (Britain)** - caught between a British public shouting "Make Germany pay" and his fear that crushing Germany would wreck British exports and invite **communism** like the 1917 Russian Revolution; wanted German colonies and naval dominance.',
        ],
        subsections: [
          {
            heading: 'Where the Big Three Clashed Most Sharply',
            bullets: [
              '**Rhineland & Reparations** - Clemenceau wanted an independent Rhineland state; Wilson and Lloyd George refused, compromising on a **demilitarised Rhineland** with a 15-year Allied occupation.',
              '**Empires & Naval Power** - Wilson’s self-determination threatened the British and French empires, while Britain rejected Wilson’s "freedom of the seas".',
            ],
            exampleHeading: 'Worked Cambridge 0470 6-mark explanation: Why did Clemenceau and Wilson disagree?',
            examples: [
              'Point 1 (Different war experiences): France fought on its own soil for four years and had been invaded by Germany twice since 1870, so Clemenceau prioritised security and crippling Germany; the USA fought for only 18 months with no invasion, letting Wilson push idealistic reconciliation.',
              'Point 2 (Long-term peace vision): Wilson feared a harsh treaty would provoke a German war of revenge, whereas Clemenceau believed only removing Germany’s military and economic strength could guarantee French survival.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'self-determination', definition: 'Woodrow Wilson’s principle that nationalities should rule themselves rather than live inside foreign empires.' },
          { term: 'Fourteen Points', definition: 'Wilson’s January 1918 blueprint for a just peace, including disarmament, open diplomacy, and a League of Nations.' },
        ],
      },
      {
        id: 'ighist-1-1-c2',
        title: 'Terms of Versailles (GARGLE) & The Other Peace Treaties',
        summary: 'Signed on 28 June 1919, Versailles stripped Germany of 10% of its land, all colonies, most of its military, and imposed £6.6 billion in reparations under Article 231.',
        bullets: [
          '**G — Guilt (Article 231)** - Germany had to accept sole legal responsibility for causing WWI, creating the legal basis for reparations.',
          '**A — Armed Forces** - army capped at **100,000 volunteers** (no conscription); **no tanks, submarines, or air force (Luftwaffe)**; navy cut to 6 battleships; **Rhineland demilitarised**.',
          '**R — Reparations** - set at **£6.6 billion (132 billion gold marks)** in 1921, paid in cash and raw materials like coal.',
          '**G — German Territory** - lost **Alsace-Lorraine** to France, **West Prussia & Posen (the Polish Corridor)** splitting East Prussia from Germany, **Danzig** became a Free City under the League, **Saar coalfields** ran under League control for 15 years, **Anschluss** (union with Austria) forbidden, and **all overseas colonies** transferred as League mandates.',
          '**L — League of Nations** - established to uphold peace, but Germany was barred from joining initially.',
        ],
        subsections: [
          {
            heading: 'The Other Post-WWI Treaties (1919–23)',
            bullets: [
              '**St Germain (Austria, 1919) & Trianon (Hungary, 1920)** - dissolved the Austro-Hungarian Empire, creating Czechoslovakia and Yugoslavia; Hungary lost 70% of its territory and 3 million ethnic Hungarians.',
              '**Neuilly (Bulgaria, 1919)** - lost Aegean coastline access to Greece and army cut to 20,000.',
              '**Sèvres (Turkey, 1920) → Lausanne (1923)** - Ottoman Empire broken into Arab mandates; Turkish nationalists under Mustafa Kemal (Atatürk) rejected Sèvres by force and won fairer terms at Lausanne.',
            ],
            exampleHeading: 'Concrete evidence for 4-mark "Describe" questions',
            examples: [
              'Territorial losses at Versailles: Germany lost 13% of its European population, 16% of its coalfields, and 48% of its iron industry, severely weakening its ability to pay reparations.',
              'Mandates: German East Africa went to Britain and German Cameroon to France under League of Nations supervision.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'reparations', definition: 'Financial and material compensation demanded from defeated powers to pay for Allied war damages (£6.6 billion for Germany).' },
          { term: 'Polish Corridor', definition: 'Strip of former German territory given to Poland to grant access to the Baltic Sea, physically cutting East Prussia off from the rest of Germany.' },
        ],
      },
      {
        id: 'ighist-1-1-c3',
        title: 'German Outrage ("Diktat") & Was the Treaty Justified?',
        summary: 'Germans hated Versailles as a dictated humiliation ("Diktat"), yet historians debate whether it was genuinely too harsh compared with Germany’s own 1918 Treaty of Brest-Litovsk.',
        bullets: [
          '**Why Germans raged** - Germany was excluded from negotiations (**Diktat**); soldiers felt betrayed by politicians (**Dolchstoss / "stab in the back"** myth, calling signatories the **"November Criminals"**); Article 231 ignored the alliance web that sparked 1914; self-determination applied to Poles and Czechs but **not** to Germans in the Sudetenland or Austria.',
          '**Case that Versailles was UNFAIR** - starved Weimar of legitimacy from birth, crippled German economic recovery, and left resentful German minorities inside Poland and Czechoslovakia that Hitler later exploited.',
          '**Case that Versailles was JUSTIFIED at the time** - Germany’s own **Treaty of Brest-Litovsk (March 1918)** stripped Russia of 34% of its population and 54% of its industry; northern France was ruined; Germany stayed intact as Europe’s largest industrial state and recovered fast by 1928.',
        ],
        subsections: [
          {
            heading: 'Scoring 10/10 on 0470 "How Far Do You Agree?" Essays',
            bullets: [
              '**Balanced evaluation** - argue BOTH sides with named treaty clauses, then deliver a **sustained clinching judgement** comparing short-term fairness (1919 context) against long-term wisdom (future stability).',
            ],
            exampleHeading: 'Model 10-mark clinching conclusion',
            examples: [
              'Judgement: In the immediate emotional aftermath of 1918, Versailles was arguably no harsher than Germany’s Brest-Litovsk settlement; however, as a blueprint for lasting peace it was fatally flawed because it was harsh enough to breed bitter German resentment yet mild enough to leave Germany strong enough to rearm.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Diktat', definition: 'A dictated peace settlement imposed without allowing the defeated country to negotiate its terms.' },
        ],
        memoryAid: 'GARGLE for Versailles terms: Guilt (231), Armed forces (100k), Reparations (£6.6bn), German territory (10%), League of Nations, Extra clauses (No Anschluss)!',
        commonMistake: 'NEVER claim "Germany lost ALL its land" or confuse the Saar (League-run for 15 years) with the Rhineland (still German territory, only demilitarised)!',
      },
    ],
    keyTerms: [
      { term: 'Article 231 (War Guilt)', definition: 'Clause forcing Germany to accept sole responsibility for starting WWI.' },
      { term: 'Diktat', definition: 'German term condemning Versailles as a forced, non-negotiated treaty.' },
      { term: 'Self-determination', definition: 'Principle that peoples should govern themselves in independent nation-states.' },
      { term: 'Reparations', definition: '£6.6 billion war-damage payments imposed on Germany.' },
    ],
    checklistPoints: [
      'Contrast the differing aims of Clemenceau, Lloyd George, and Wilson at Paris in 1919',
      'Recall specific military, territorial, and financial terms of Versailles and the sister treaties',
      'Evaluate both sides of whether the Treaty of Versailles could be justified at the time',
    ],
  },

  'ighist-1-2': {
    subtopicId: 'ighist-1-2',
    subtopicCode: '1.2',
    subtopicTitle: 'The League of Nations: Successes, Failures & Collapse',
    readingMinutes: 10,
    videoTitle: 'Why Did the League of Nations Fail?',
    youtubeId: '_W91vYZETPM',
    videoChannel: 'History Matters',
    videoDuration: '7:45',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE History (0470) Core Option B — Key Question 2',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'League Aims, Structure & Membership Weaknesses', cardId: 'ighist-1-2-c1' },
      { time: '2:30', seconds: 150, label: '1920s Successes, Early Failures & Humanitarian Agencies', cardId: 'ighist-1-2-c2' },
      { time: '5:05', seconds: 305, label: '1930s Collapse: Great Depression, Manchuria & Abyssinia', cardId: 'ighist-1-2-c3' },
    ],
    cards: [
      {
        id: 'ighist-1-2-c1',
        title: 'Aims, Structure & Structural Flaws of the League (1920)',
        summary: 'Founded in Geneva to keep peace via collective security, the League was handicapped from day one by US absence, unanimous voting, and having no standing army.',
        bullets: [
          '**Four main aims (SIDE)** - **S**top aggression (collective security), **I**mprove living/working conditions, **D**isarmament, **E**nforce the Treaty of Versailles.',
          '**Key organs** - **Assembly** (all members, met once a year, required **unanimous** decisions), **Council** (permanent powers Britain, France, Italy, Japan — each held a **veto**), **Permanent Court of International Justice** (The Hague), **Secretariat** (civil service).',
          '**Three enforcement tools** - (1) Moral condemnation; (2) Economic/trade sanctions; (3) Military force (members had to volunteer troops — the League had **no army of its own**).',
          '**Missing great powers** - the **USA never joined** (Senate voted for isolationism in 1920), stripping the League of economic clout; **Germany** barred until 1926 (left 1933); **USSR** excluded until 1934.',
        ],
        subsections: [
          {
            heading: 'Why US Absence Was Devastating',
            bullets: [
              '**Sanctions toothless** - any aggressor sanctioned by Britain and France could still buy oil, steel, and weapons from the world’s richest economy, the United States.',
            ],
            exampleHeading: 'Worked 0470 explanation: How did unanimity weaken the League?',
            examples: [
              'Because Assembly votes had to be unanimous and Council permanent members held a veto, decisive action was painfully slow and a single self-interested power could block sanctions.',
              'Britain and France were exhausted after WWI and prioritised their own empires over enforcing distant borders.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'collective security', definition: 'System in which nations unite to deter or punish any aggressor through joint diplomatic, economic, or military action.' },
          { term: 'isolationism', definition: 'US foreign policy of avoiding entanglements in European political and military disputes after WWI.' },
        ],
      },
      {
        id: 'ighist-1-2-c2',
        title: 'The 1920s: Genuine Successes vs Early Warning Signs',
        summary: 'The League resolved disputes between smaller states and transformed global humanitarian work, but struggled whenever major powers defied it.',
        bullets: [
          '**Political successes** - **Åland Islands (1921)** awarded to Finland with Swedish minority rights protected (Sweden accepted); **Upper Silesia (1921)** partitioned peacefully after a plebiscite between Germany and Poland; **Bulgaria (1925)** Greece ordered to withdraw and pay compensation after invading Bulgaria.',
          '**Humanitarian agency triumphs** - **Refugees Committee** (Fridtjof Nansen) returned 400,000+ POWs and invented the Nansen Passport; **Health Committee** fought leprosy/malaria; **Slavery Commission** freed 200,000 enslaved people in Sierra Leone; **ILO** capped child labour and promoted 48-hour working weeks.',
          '**1920s failures** - **Vilna (1920)** Poland seized Lithuania’s capital and the League did nothing (France saw Poland as an ally against Germany); **Corfu (1923)** Mussolini bombarded Greek Corfu and bypassed the League via the Conference of Ambassadors, forcing Greece to pay.',
        ],
        subsections: [
          {
            heading: 'International Agreements Outside the League',
            bullets: [
              '**Locarno Treaties (1925)** & **Kellogg-Briand Pact (1928)** - Germany accepted its western borders and 65 nations renounced war, yet both were signed **outside** League machinery, quietly undermining its authority.',
            ],
            exampleHeading: 'Pattern examiners reward in 6-mark and 10-mark essays',
            examples: [
              'Success pattern: When two small powers (Sweden/Finland or Greece/Bulgaria) disputed territory and Britain/France agreed, the League succeeded cleanly.',
              'Failure pattern: When a permanent Council member (Italy at Corfu 1923) or a French ally (Poland at Vilna 1920) used force, Britain and France put national self-interest above the Covenant.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'plebiscite', definition: 'A direct vote by the inhabitants of a territory to decide which country they wish to belong to.' },
        ],
      },
      {
        id: 'ighist-1-2-c3',
        title: '1930s Collapse: Great Depression, Manchuria & Abyssinia',
        summary: 'The 1929 Wall Street Crash fuelled aggressive dictatorships and destroyed Britain and France’s willingness to impose costly sanctions, killing the League in Manchuria (1931) and Abyssinia (1935).',
        bullets: [
          '**Impact of the Great Depression (1929+)** - global trade collapsed; Japan sought raw materials by empire; Britain and France refused to risk jobs or naval war with expensive sanctions.',
          '**Manchurian Crisis (1931–33)** - Japan staged the **Mukden Incident**, invaded Chinese Manchuria, and created puppet state **Manchukuo**. The League sent **Lord Lytton’s Commission**, which took **a full year** to report Japan as the aggressor; Japan simply **walked out of the League (1933)** with zero sanctions imposed.',
          '**Abyssinian Crisis (1935–36)** - Mussolini invaded Abyssinia (Ethiopia) to avenge Adowa (1896). The League banned arms and rubber sales but **excluded oil and coal** and **kept the Suez Canal open** to Italian warships! Secretly, Britain and France plotted the **Hoare-Laval Pact** to hand Mussolini two-thirds of Abyssinia — leaking this destroyed the League’s moral credibility forever.',
        ],
        subsections: [
          {
            heading: 'Why Abyssinia Was the Fatal Blow',
            bullets: [
              '**Right on Europe’s doorstep** - unlike distant Manchuria, Britain and France had huge naval forces in the Mediterranean and controlled Suez, proving they had **chosen** not to stop aggression because they wanted Mussolini in the **Stresa Front** against Hitler.',
            ],
            exampleHeading: 'Direct consequence for WWII (1936)',
            examples: [
              'Watching Britain and France refuse to stop Mussolini in Abyssinia convinced Hitler he could remilitarise the Rhineland in March 1936 unopposed.',
              'Mussolini angrily left the Stresa Front and signed the Rome-Berlin Axis (1936) with Hitler.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Hoare-Laval Pact', definition: 'Secret December 1935 Anglo-French plan offering Mussolini most of Abyssinia to end the war, whose leak fatally discredited the League.' },
        ],
        memoryAid: 'Abyssinia = No OIL ban + SUEZ stayed open + HOARE-LAVAL betrayal = Death of collective security!',
        commonMistake: 'NEVER claim the League imposed NO sanctions on Italy in 1935 — it DID impose partial sanctions (arms, loans, rubber), but critically left out OIL and COAL and kept the Suez Canal open!',
      },
    ],
    keyTerms: [
      { term: 'Collective security', definition: 'Joint international response to deter or stop aggression.' },
      { term: 'Lytton Report', definition: 'Delayed 1932 League investigation condemning Japan’s invasion of Manchuria.' },
      { term: 'Hoare-Laval Pact', definition: 'Secret 1935 Anglo-French scheme to cede two-thirds of Abyssinia to Mussolini.' },
      { term: 'Disarmament Conference', definition: '1932–34 Geneva summit that collapsed after France refused parity with Germany and Hitler walked out.' },
    ],
    checklistPoints: [
      'Explain how US absence, unanimity, and lack of an army structurally weakened the League',
      'Balance 1920s political and humanitarian successes against Vilna and Corfu',
      'Analyse why the Depression, Manchuria (1931–33), and Abyssinia (1935–36) fatally destroyed the League',
    ],
  },

  'ighist-2-1': {
    subtopicId: 'ighist-2-1',
    subtopicCode: '2.1',
    subtopicTitle: "Hitler's Foreign Policy, Rearmament & Anschluss",
    readingMinutes: 10,
    videoTitle: "Hitler's Foreign Policy & Road to Expansion (1933–38)",
    youtubeId: 'YuYDi5dh_70',
    videoChannel: 'History Matters',
    videoDuration: '7:20',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE History (0470) Core Option B — Key Question 3',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Hitler’s Core Aims: Versailles, Lebensraum & Volksdeutsche', cardId: 'ighist-2-1-c1' },
      { time: '2:25', seconds: 145, label: 'Rearmament, Saar, Rhineland & Spanish Civil War (1933–37)', cardId: 'ighist-2-1-c2' },
      { time: '4:50', seconds: 290, label: 'The Anschluss with Austria (March 1938)', cardId: 'ighist-2-1-c3' },
    ],
    cards: [
      {
        id: 'ighist-2-1-c1',
        title: "Hitler's Four Interlinked Foreign Policy Aims",
        summary: 'Set out in Mein Kampf (1925), Hitler sought to smash Versailles, unite all ethnic Germans, conquer Lebensraum in Eastern Europe, and destroy Soviet communism.',
        bullets: [
          '**Abolish the Treaty of Versailles** - reverse military limits, regain lost land (Saar, Polish Corridor, Danzig), and restore German pride.',
          '**Unite all German-speaking peoples (Volksdeutsche)** - build a **Grossdeutschland** incorporating Austria (Anschluss) and 3 million Germans in Czechoslovakia’s Sudetenland.',
          '**Conquer Lebensraum ("living space")** - expand eastward into Poland and the USSR for farmland, oil, and raw materials, enslaving Slavic peoples under Nazi racial ideology.',
          '**Destroy Communism (Bolshevism)** - Hitler viewed the Soviet Union as Germany’s ultimate ideological enemy, a stance that initially misled some British conservatives into viewing him as a useful buffer against Stalin.',
        ],
        subsections: [
          {
            heading: 'Planner vs Opportunist Debate',
            bullets: [
              '**Intentionalist view** - Hitler systematically followed a blueprint laid out in *Mein Kampf* and the 1937 **Hossbach Memorandum**.',
              '**Opportunist view (A.J.P. Taylor)** - Hitler improvised aggressively whenever Britain and France showed weakness.',
            ],
            exampleHeading: 'Concrete evidence linking ideology to action',
            examples: [
              '1936 Four-Year Plan: Hermann Göring ordered the German economy to be ready for war within four years — confirming systematic preparation.',
              'Opportunism in 1936: Hitler timed the Rhineland march precisely while Britain and France were distracted by the Abyssinian crisis.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Lebensraum', definition: 'Nazi expansionist goal of seizing "living space" and resources in Eastern Europe and the Soviet Union.' },
          { term: 'Volksdeutsche', definition: 'Ethnic German populations living outside Germany’s 1919 borders (e.g. in Austria, the Sudetenland, and Poland).' },
        ],
      },
      {
        id: 'ighist-2-1-c2',
        title: 'Dismantling Versailles Step by Step (1933–37)',
        summary: 'Between 1933 and 1937 Hitler tested Allied resolve through rearmament, the Saar plebiscite, the 1936 Rhineland gamble, and testing weapons in Spain.',
        bullets: [
          '**Rearmament (1933–35)** - quit the Disarmament Conference and League (Oct 1933); secret rearmament went public in **March 1935** with **conscription** (army jumped toward 550,000) and a new **Luftwaffe**; Britain undermined Versailles by signing the **Anglo-German Naval Agreement (June 1935)** allowing Germany a navy 35% the size of Britain’s.',
          '**Saar Plebiscite (Jan 1935)** - 90% voted legally to rejoin Germany, handing Hitler vital coal mines and a huge propaganda triumph.',
          '**Remilitarisation of the Rhineland (7 March 1936)** - 22,000 German troops marched into the demilitarised buffer zone with secret orders to retreat if France resisted! France (facing elections, politically divided, awaiting Britain) and Britain ("merely walking into their own backyard") did NOTHING.',
          '**Spanish Civil War (1936–39) & Alliances** - Hitler’s **Condor Legion** tested **Blitzkrieg** dive-bombing (e.g. **Guernica, 1937**), cementing the **Rome-Berlin Axis (1936)** and **Anti-Comintern Pact** with Japan (1936) and Italy (1937).',
        ],
        subsections: [
          {
            heading: 'Why the Rhineland Was Hitler’s Biggest Gamble',
            bullets: [
              '**Military inferiority** - in March 1936 the French army alone vastly outnumbered German troops; stopping Hitler here could have ended his dictatorship before Germany was ready for war.',
            ],
            exampleHeading: 'Worked 0470 6-mark explanation: Why did Britain and France not stop the Rhineland march?',
            examples: [
              'Reason 1 (British sympathy & Abyssinia): Many Britons believed Versailles had been unfair to forbid German troops on German soil, while British ships were tied down in the Mediterranean over Abyssinia.',
              'Reason 2 (French political paralysis): France was weeks from a general election, relied defensively on the Maginot Line, overestimated German troop numbers, and refused to act without British military backing.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'remilitarisation', definition: 'Moving armed forces back into a zone (the Rhineland) that a treaty had legally required to remain free of troops and fortifications.' },
        ],
      },
      {
        id: 'ighist-2-1-c3',
        title: 'The Anschluss with Austria (March 1938)',
        summary: 'After failing in 1934 when Mussolini blocked him, Hitler exploited the Rome-Berlin Axis and Austrian Nazi pressure to annex Austria bloodlessly in March 1938.',
        bullets: [
          '**1934 failure vs 1938 success** - in July 1934 Austrian Nazis murdered Chancellor Dollfuss, but **Mussolini marched Italian troops to the Brenner Pass**, forcing Hitler to back down. By 1938 Italy was Hitler’s ally and did not object.',
          '**Bullying Schuschnigg (Feb–Mar 1938)** - Austrian Nazis caused riots; Hitler forced Chancellor Kurt Schuschnigg to appoint Nazi **Arthur Seyss-Inquart** as Interior Minister. When Schuschnigg called a snap **plebiscite** on Austrian independence, Hitler massed troops on the border and forced his resignation.',
          '**Annexation & rigged plebiscite** - German troops marched in on **12 March 1938** to cheering crowds (while opponents were arrested by the Gestapo); a Nazi-supervised April plebiscite returned **99.75%** "Yes".',
          '**Strategic consequences** - added 7 million people, Austria’s gold reserves, iron ore, and 100,000 soldiers to the Reich, and **surrounded Czechoslovakia on three sides**.',
        ],
        subsections: [
          {
            heading: 'Why Britain and France Accepted the Anschluss',
            bullets: [
              '**Self-determination argument** - Austria was German-speaking and crowds appeared to welcome German soldiers; Britain’s **Lord Halifax** had already hinted Britain would not fight over Central Europe.',
            ],
            exampleHeading: 'Comparing 1934 vs 1938 for top-band exam analysis',
            examples: [
              'Key turning point: The vital difference between 1934 and 1938 was Italy — once the Abyssinian Crisis pushed Mussolini into the Rome-Berlin Axis (1936), Austria lost its only military protector.',
              'Immediate knock-on impact: Czechoslovakia was now geopolitically encircled, setting up the Sudetenland crisis within weeks.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Anschluss', definition: 'The political union of Germany and Austria, explicitly forbidden by Versailles (Article 80) and achieved by Hitler in March 1938.' },
        ],
        memoryAid: 'Hitler’s Stepping Stones = SCRAP! Saar (1935), Conscription/Rearmament (1935), Rhineland (1936), Anschluss (1938), Poland/Prague (1939)!',
        commonMistake: 'NEVER claim the Saar Plebiscite (1935) broke the Treaty of Versailles — Versailles itself scheduled the 15-year vote, so the Saar return was 100% LEGAL!',
      },
    ],
    keyTerms: [
      { term: 'Lebensraum', definition: 'Living space Hitler planned to conquer in Eastern Europe.' },
      { term: 'Anglo-German Naval Agreement', definition: '1935 bilateral treaty letting Germany build a fleet up to 35% of Britain’s, undermining Versailles.' },
      { term: 'Rhineland', definition: 'Demilitarised German border zone remilitarised by Hitler in March 1936.' },
      { term: 'Anschluss', definition: 'March 1938 annexation of Austria into Nazi Germany.' },
    ],
    checklistPoints: [
      'Identify Hitler’s four core foreign policy goals and link them to concrete 1933–38 actions',
      'Explain why Britain and France failed to oppose German rearmament and the 1936 Rhineland gamble',
      'Compare why Anschluss failed in 1934 yet succeeded bloodlessly in March 1938',
    ],
  },

  'ighist-2-2': {
    subtopicId: 'ighist-2-2',
    subtopicCode: '2.2',
    subtopicTitle: 'Appeasement, Munich Agreement & The Nazi-Soviet Pact',
    readingMinutes: 10,
    videoTitle: 'Appeasement, Munich & The Nazi-Soviet Pact (1938–39)',
    youtubeId: 'b_H7jLFKJuU',
    videoChannel: 'History Matters',
    videoDuration: '8:05',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE History (0470) Core Option B — Key Question 3',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Appeasement: Why Chamberlain Followed It & Criticisms', cardId: 'ighist-2-2-c1' },
      { time: '2:40', seconds: 160, label: 'Sudetenland Crisis, Munich Agreement & Prague (1938–39)', cardId: 'ighist-2-2-c2' },
      { time: '5:15', seconds: 315, label: 'The Nazi-Soviet Pact & Outbreak of WWII (Aug–Sep 1939)', cardId: 'ighist-2-2-c3' },
    ],
    cards: [
      {
        id: 'ighist-2-2-c1',
        title: 'The Policy of Appeasement: Rational Strategy or Fatal Blunder?',
        summary: 'Associated with British PM Neville Chamberlain (1937–40), appeasement meant making concessions to Hitler to avoid another catastrophic world war and buy time to rearm.',
        bullets: [
          '**Arguments FOR appeasement (1937–38 context)** - (1) **Buying time to rearm**: Britain’s RAF lacked modern Spitfires and radar in 1938; (2) **Dread of WWI horrors**: bombing of civilians at Guernica terrified voters; (3) **Versailles guilt**: many believed uniting German speakers was reasonable; (4) **Fear of Communism**: some saw Nazi Germany as a shield against Stalin; (5) **Empire & US isolationism**: Dominions (Canada, Australia) did not want war in 1938 and the USA would not fight.',
          '**Arguments AGAINST appeasement** - (1) **Encouraged Hitler’s appetite** ("the more you give a bully, the more he demands"); (2) **Betrayed democratic allies** like Czechoslovakia with its modern army and Skoda arms works; (3) **Alienated Stalin**, convincing the USSR that Britain and France would not stand up to Hitler; (4) **Gave Germany time to rearm faster** than Britain.',
        ],
        subsections: [
          {
            heading: 'Evaluating Chamberlain Historically',
            bullets: [
              '**1940s "Guilty Men" view** - Churchill argued appeasement was cowardly and made an avoidable war inevitable.',
              '**Revisionist view (1960s+)** - opened Cabinet archives showed Chamberlain had almost no military alternative in 1938 and used the extra year to build RAF Fighter Command and radar.',
            ],
            exampleHeading: 'Worked 0470 balanced evaluation paragraph',
            examples: [
              'Defence: British military chiefs explicitly warned Chamberlain in September 1938 that Britain could not defend London from Luftwaffe bombers or save Czechoslovakia militarily.',
              'Critique: Yet appeasement rested on a fatal misreading of Hitler’s character — Chamberlain mistook an ideological expansionist for a rational traditional statesman.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'appeasement', definition: 'British and French 1930s policy of granting limited territorial and military concessions to Hitler to preserve European peace.' },
        ],
      },
      {
        id: 'ighist-2-2-c2',
        title: 'The Sudetenland Crisis, Munich (1938) & End of Appeasement',
        summary: 'At Munich in September 1938, Britain, France, Italy, and Germany carved up Czechoslovakia without inviting the Czechs or the USSR; Hitler broke his promise five months later.',
        bullets: [
          '**The Sudetenland Crisis** - 3 million ethnic Germans lived in Czechoslovakia’s fortified borderlands; Konrad Henlein’s Sudeten Nazis demanded union with Germany. Czech leader Edvard Beneš prepared to fight with French and Soviet treaty promises.',
          '**Munich Agreement (29–30 September 1938)** - Chamberlain, Daladier (France), Mussolini, and Hitler met — **excluding Czechoslovakia and the USSR**! Hitler was handed the entire Sudetenland in return for signing a promise of **"peace for our time"**.',
          '**Invasion of the rest of Czechoslovakia (15 March 1939)** - Hitler marched into Prague, seizing Czech gold and the massive **Skoda arms factories**. For the first time, Hitler had conquered **non-German land** — proving appeasement was dead.',
          '**Anglo-French Guarantee to Poland (31 March 1939)** - Chamberlain promised Britain and France would declare war if Hitler invaded Poland.',
        ],
        subsections: [
          {
            heading: 'Immediate Impact of Munich on Stalin',
            bullets: [
              '**Soviet humiliation** - Stalin had a mutual defence treaty with Czechoslovakia and had not even been invited to Munich, deepening his suspicion that Britain and France wanted Hitler to expand **eastward** into the USSR.',
            ],
            exampleHeading: 'Concrete cause-and-effect chain (Munich → March 1939)',
            examples: [
              'Military loss: Surrendering the Sudetenland cost the Allies Czechoslovakia’s 36 modern divisions, mountain fortifications, and the Skoda munitions plants (which later built a third of German tanks in 1940).',
              'Political turning point: Prague (March 1939) shattered the Versailles-grievance excuse, forcing Britain to introduce peacetime conscription and guarantee Poland.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Munich Agreement', definition: 'September 1938 four-power settlement transferring the Czechoslovak Sudetenland to Nazi Germany to avert immediate war.' },
          { term: 'Sudetenland', definition: 'Mountainous, heavily fortified western border region of Czechoslovakia inhabited by roughly 3 million ethnic Germans.' },
        ],
      },
      {
        id: 'ighist-2-2-c3',
        title: 'The Nazi-Soviet Pact (23 August 1939) & Outbreak of War',
        summary: 'Ideological archenemies Hitler and Stalin shocked the world with a non-aggression pact that secretly partitioned Poland and cleared Hitler’s path to invade on 1 September 1939.',
        bullets: [
          '**Public terms** - 10-year non-aggression treaty between Germany (Ribbentrop) and the USSR (Molotov).',
          '**Secret Protocol** - agreed to **divide Poland** between Germany and the USSR, and gave Stalin a Soviet sphere of influence over the Baltic States (Estonia, Latvia, Lithuania) and Bessarabia.',
          '**Why Stalin signed** - (1) Distrusted Britain and France after Munich and their slow, low-ranking summer 1939 delegation (sent by slow boat!); (2) Poland refused to let Red Army troops cross Polish soil; (3) Needed **time to rebuild the Red Army** after Stalin’s 1937–38 officer purges; (4) Gained a **buffer zone** in eastern Poland.',
          '**Why Hitler signed** - avoided fighting a **two-front war** (Germany’s fatal WWI mistake) and assumed Britain and France would back down over Poland without Soviet help. Instead, when Germany invaded Poland on **1 September 1939**, Britain and France declared war on **3 September 1939**.',
        ],
        subsections: [
          {
            heading: 'Weighing Causes of WWII (10-Mark Exam Synthesis)',
            bullets: [
              '**Multi-causal mastery** - link **long-term** causes (Versailles, Depression, League failure), **medium-term** causes (Hitler’s aims, appeasement), and the **immediate trigger** (Nazi-Soviet Pact removing Hitler’s last restraint).',
            ],
            exampleHeading: 'Model 0470 judgement on the Nazi-Soviet Pact',
            examples: [
              'Short-term trigger: The Nazi-Soviet Pact was the decisive immediate catalyst because Hitler would not have risked invading Poland against a joint Anglo-French-Soviet coalition.',
              'Underlying driver: However, without Hitler’s relentless expansionism and the failure of collective security/appeasement to stop him earlier, Stalin would never have felt forced into a cynical deal with Berlin.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Nazi-Soviet Pact', definition: 'August 1939 Molotov-Ribbentrop non-aggression treaty with a secret protocol partitioning Poland between Germany and the USSR.' },
        ],
        memoryAid: 'Stalin signed the Pact for B-T-M: Buffer zone (East Poland), Time to rebuild the Red Army, Mistrust of Britain/France after Munich!',
        commonMistake: 'NEVER claim Hitler and Stalin signed the Nazi-Soviet Pact because they became friends — BOTH knew war between them was coming later; it was a cold, temporary marriage of convenience!',
      },
    ],
    keyTerms: [
      { term: 'Appeasement', definition: 'Policy of granting concessions to Hitler in hopes of preventing a major European war.' },
      { term: 'Munich Agreement', definition: 'September 1938 pact ceding the Sudetenland to Germany without Czech or Soviet consent.' },
      { term: 'Molotov-Ribbentrop Pact', definition: 'Official name of the August 1939 Nazi-Soviet non-aggression pact.' },
      { term: 'Two-front war', definition: 'Simultaneous war against enemies in both West (Britain/France) and East (USSR), which Hitler sought to avoid in 1939.' },
    ],
    checklistPoints: [
      'Weigh both contemporary arguments for appeasement and major criticisms of Chamberlain’s policy',
      'Trace the sequence from the Sudetenland crisis and Munich (1938) to Prague and the Polish guarantee (1939)',
      'Explain why both Hitler and Stalin signed the August 1939 Nazi-Soviet Pact and how it triggered WWII',
    ],
  },

  'ighist-3-1': {
    subtopicId: 'ighist-3-1',
    subtopicCode: '3.1',
    subtopicTitle: 'Origins of the Cold War: Yalta, Potsdam, Truman & Marshall',
    readingMinutes: 10,
    videoTitle: 'The Origins of the Cold War: Yalta, Potsdam & Containment',
    youtubeId: '49s1EHBzmFQ',
    videoChannel: 'History Matters',
    videoDuration: '8:15',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE History (0470) Core Option B — Key Question 4',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Ideology, Yalta (Feb 1945) & Potsdam (Jul 1945)', cardId: 'ighist-3-1-c1' },
      { time: '2:45', seconds: 165, label: 'Iron Curtain, Truman Doctrine & Marshall Plan (1946–47)', cardId: 'ighist-3-1-c2' },
      { time: '5:25', seconds: 325, label: 'Cominform, Comecon & Who Was to Blame?', cardId: 'ighist-3-1-c3' },
    ],
    cards: [
      {
        id: 'ighist-3-1-c1',
        title: 'Ideological Divide & Yalta vs Potsdam (1945)',
        summary: 'Once Hitler’s defeat removed their common enemy, wartime cooperation between capitalist USA/Britain and communist USSR crumbled rapidly between Yalta (Feb 1945) and Potsdam (Jul 1945).',
        bullets: [
          '**Ideological clash** - **USA**: multi-party democracy, capitalism, private ownership, free markets; **USSR**: one-party communist state, state-planned economy, security buffer after losing **27 million citizens** in WWII.',
          '**Yalta Conference (Feb 1945 — Roosevelt, Churchill, Stalin)** - agreed to **divide Germany & Berlin into 4 zones** (US, UK, France, USSR), create the **United Nations**, bring USSR into the war against Japan, and hold **"free elections"** in Eastern Europe (though Poland’s borders and government sparked fierce tension).',
          '**Potsdam Conference (Jul–Aug 1945 — Truman, Attlee, Stalin)** - atmosphere turned icy! **Four major changes**: (1) Hardline anti-communist **Harry Truman** replaced Roosevelt; (2) **Clement Attlee** replaced Churchill mid-conference; (3) The USA secretly tested the **atomic bomb** (Trinity, July 1945), alarming Stalin; (4) Red Army troops already occupied Eastern Europe and Stalin had installed a pro-Soviet government in Poland.',
        ],
        subsections: [
          {
            heading: 'Core Disagreements at Potsdam',
            bullets: [
              '**Reparations & Germany** - Stalin wanted massive reparations to rebuild the ruined USSR; Truman feared crippling Germany would breed extremism and communism, compromising so each power took reparations mainly from its own zone.',
            ],
            exampleHeading: 'Worked 0470 comparison: Why was Potsdam more hostile than Yalta?',
            examples: [
              'End of common enemy: By July 1945 Germany had already surrendered (May 1945), removing the urgent military need for Allied unity.',
              'Nuclear distrust: Truman casually told Stalin about a "new weapon of unusual destructive force" without sharing details, convincing Stalin the USA intended nuclear blackmail.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Cold War', definition: 'State of geopolitical tension, ideological rivalry, arms race, and proxy wars between the USA and USSR (1945–91) without direct superpower combat.' },
          { term: 'Grand Alliance', definition: 'Wartime coalition of Britain, the USA, and the USSR united specifically to defeat Nazi Germany (1941–45).' },
        ],
      },
      {
        id: 'ighist-3-1-c2',
        title: 'Soviet Takeover of Eastern Europe, Truman Doctrine & Marshall Plan',
        summary: 'Between 1945 and 1948 Stalin created a buffer zone of communist satellite states ("Salami Tactics"), prompting the US policy of Containment via the Truman Doctrine and Marshall Aid.',
        bullets: [
          '**Soviet Expansion ("Salami Tactics")** - using rigged elections, coalition infiltration, and Red Army presence, communists took power across **Poland, Romania, Bulgaria, Hungary**, and finally **Czechoslovakia (Feb 1948 coup)**. In March 1946 Churchill warned an **"Iron Curtain"** had descended across Europe.',
          '**Truman Doctrine (March 1947)** - triggered when bankrupt Britain could no longer fund Greek monarchists fighting communist rebels; Truman pledged US military and economic support to **"free peoples resisting subjugation"** — launching **Containment** (stopping communism spreading, not rolling it back).',
          '**Marshall Plan / European Recovery Program (June 1947)** - **$13 billion** in US grants, machinery, and food to rebuild 16 Western European economies so poverty would not push voters toward communism (and to secure US export markets).',
        ],
        subsections: [
          {
            heading: 'Why Stalin Rejected Marshall Aid',
            bullets: [
              '**"Dollar Imperialism"** - Marshall Aid required opening economic books to US inspection; Stalin forbade Poland and Czechoslovakia from accepting it, fearing it would pull his buffer zone into the US capitalist orbit.',
            ],
            exampleHeading: 'Concrete evidence of Containment in action (1947–48)',
            examples: [
              'Greece & Turkey: $400 million in Truman Doctrine aid helped Greek royalists defeat communist guerrillas and kept Turkey aligned with the West.',
              'Western Europe: Marshall Aid sparked rapid recovery in France, Italy, and West Germany, sharply shrinking Western communist parties’ vote shares.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'containment', definition: 'US Cold War strategy announced in 1947 aimed at preventing communism from spreading into any new countries.' },
          { term: 'satellite states', definition: 'Eastern European countries formally independent after WWII but politically and militarily controlled by Moscow.' },
        ],
      },
      {
        id: 'ighist-3-1-c3',
        title: 'Soviet Counter-Measures & Who Was to Blame for the Cold War?',
        summary: 'Stalin tightened Eastern bloc control via Cominform and Comecon; historians split between blaming Soviet expansionism, US atomic/economic aggression, or mutual fear.',
        bullets: [
          '**Cominform (1947)** - Communist Information Bureau coordinating European communist parties under strict Moscow discipline (expelled independent Yugoslavia under Tito in 1948).',
          '**Comecon (1949)** - Council for Mutual Economic Assistance, Stalin’s economic reply to Marshall Aid tying Eastern European trade to the USSR.',
          '**Blaming the USSR (Traditionalist view)** - Stalin broke Yalta’s free-election pledges, crushed Czech democracy in 1948, and ran ruthless one-party regimes across Eastern Europe.',
          '**Blaming the USA (Revisionist view)** - Truman ended Lend-Lease abruptly, kept the atomic bomb secret, pushed "dollar imperialism" via Marshall Aid, and ignored legitimate Soviet fears after two German invasions in 30 years.',
          '**Mutual misperception (Post-Revisionist view)** - defensive moves on each side (Stalin’s buffer zone; US Marshall Aid) looked like aggressive encirclement to the other — a classic **security dilemma**.',
        ],
        subsections: [
          {
            heading: 'Structuring a Top-Band 10-Mark Blame Essay',
            bullets: [
              '**Avoid one-sided verdicts** - weigh USSR responsibility (Eastern Europe, Cominform), USA responsibility (atomic bomb, Truman/Marshall), AND conclude by evaluating how mutual ideological distrust locked both sides into escalation.',
            ],
            exampleHeading: 'Sample Post-Revisionist clinching judgement',
            examples: [
              'Judgement: While Stalin’s brutal imposition of one-party rule across Eastern Europe directly triggered Western alarm, the Cold War was ultimately caused by a cycle of mutual fear in which both superpowers mistook each other’s security measures for plans for global domination.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Iron Curtain', definition: 'Winston Churchill’s March 1946 metaphor describing the political and ideological barrier dividing Soviet-controlled Eastern Europe from the democratic West.' },
        ],
        memoryAid: '1945–49 Timeline = Ya-Po-I-Tru-Ma-Co! Yalta (45), Potsdam (45), Iron Curtain (46), Truman Doctrine (47), Marshall Plan (47), Cominform (47) / Comecon (49)!',
        commonMistake: 'NEVER confuse the Truman Doctrine (political/military pledge to stop communism spreading) with the Marshall Plan (the $13bn economic recovery aid package that put containment into practice)!',
      },
    ],
    keyTerms: [
      { term: 'Containment', definition: 'US strategy of blocking further communist expansion without directly invading existing communist states.' },
      { term: 'Truman Doctrine', definition: '1947 US pledge to aid nations threatened by communist takeover, starting with Greece and Turkey.' },
      { term: 'Marshall Plan', definition: '$13 billion US economic recovery programme to rebuild Western Europe and starve communism of poverty.' },
      { term: 'Cominform', definition: '1947 Soviet body enforcing Moscow’s political control over Eastern European communist parties.' },
    ],
    checklistPoints: [
      'Compare agreements and tensions between Yalta (February 1945) and Potsdam (July 1945)',
      'Explain how the Iron Curtain, Truman Doctrine, Marshall Plan, Cominform, and Comecon divided Europe',
      'Evaluate USSR, USA, and mutual-suspicion explanations for the origins of the Cold War',
    ],
  },

  'ighist-3-2': {
    subtopicId: 'ighist-3-2',
    subtopicCode: '3.2',
    subtopicTitle: 'Cold War Crises: Berlin Blockade, Cuba 1962 & Vietnam',
    readingMinutes: 11,
    videoTitle: 'Berlin Blockade, Cuban Missile Crisis & Vietnam War',
    youtubeId: 'ltZkOdmGLc4',
    videoChannel: 'History Matters',
    videoDuration: '8:50',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE History (0470) Core Option B — Key Questions 4 & 5',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Berlin Blockade, Airlift (1948–49) & NATO vs Warsaw Pact', cardId: 'ighist-3-2-c1' },
      { time: '3:00', seconds: 180, label: 'Cuban Missile Crisis (1962): Causes, Thirteen Days & Outcome', cardId: 'ighist-3-2-c2' },
      { time: '6:00', seconds: 360, label: 'Vietnam War: Containment, Guerrilla Warfare & US Failure', cardId: 'ighist-3-2-c3' },
    ],
    cards: [
      {
        id: 'ighist-3-2-c1',
        title: 'The Berlin Blockade (1948–49) & Military Blocs',
        summary: 'When the West introduced the Deutschmark in Bizonia/Trizonia, Stalin cut all land routes into West Berlin; Truman broke the siege peacefully with the 11-month Berlin Airlift.',
        bullets: [
          '**Causes** - West Berlin sat 100 miles inside the Soviet zone as a wealthy capitalist showcase. In 1947–48 the USA, Britain, and France merged their zones (**Trizonia**) and launched a new currency (**Deutschmark**) without consulting Stalin.',
          '**The Blockade & Airlift (June 1948 – May 1949)** - Stalin closed all road, rail, and canal links to starve West Berlin out. Rather than ramming tanks through (risking WWIII), Truman launched **Operation Vittles**: Allied planes landed every 90 seconds, delivering **2.3 million tonnes** of coal, food, and medicine over 318 days until Stalin backed down.',
          '**Consequences** - Germany formally split into two states in 1949 (**West Germany / FRG** and **East Germany / GDR**); the West formed **NATO (1949)**; when West Germany joined NATO in 1955, the USSR created the **Warsaw Pact (1955)**.',
        ],
        subsections: [
          {
            heading: 'Why the Airlift Was a Propaganda Triumph for the West',
            bullets: [
              '**Zero shots fired** - Truman forced Stalin into the dilemma of either shooting down unarmed food planes (starting WWIII) or humiliatingly lifting the blockade.',
            ],
            exampleHeading: 'Concrete statistics for 4-mark & 6-mark Berlin answers',
            examples: [
              'Scale of airlift: 277,000 flights supplied 2.1 million West Berliners through a bitter winter, averaging 4,000–8,000 tonnes daily.',
              'Later Berlin crisis link: Continued refugee flight from East to West Berlin (3 million by 1961) later pushed Khrushchev to build the Berlin Wall in August 1961.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'NATO', definition: 'North Atlantic Treaty Organization (1949), a Western collective defence alliance treating an attack on one member as an attack on all.' },
          { term: 'Warsaw Pact', definition: '1955 Soviet-led Eastern bloc military alliance formed in response to West Germany joining NATO.' },
        ],
      },
      {
        id: 'ighist-3-2-c2',
        title: 'The Cuban Missile Crisis (October 1962)',
        summary: 'After Castro’s revolution and the failed Bay of Pigs invasion, Khrushchev placed nuclear missiles 90 miles from Florida; Kennedy’s naval blockade forced a tense diplomatic deal that averted nuclear war.',
        bullets: [
          '**Background** - Fidel Castro overthrew US-backed dictator Batista (1959) and nationalised US businesses; Eisenhower cut Cuban sugar imports, pushing Castro toward the USSR. Kennedy’s humiliating CIA-backed **Bay of Pigs invasion (April 1961)** convinced Castro and Khrushchev a full US invasion was coming.',
          '**Why Khrushchev placed missiles** - (1) Defend communist Cuba; (2) Close the "missile gap" and counterbalance US **Jupiter missiles in Turkey**; (3) Test young President Kennedy and gain leverage over Berlin.',
          '**The Thirteen Days (16–28 Oct 1962)** - US U-2 spy planes spotted launch sites. Rejecting hawks’ calls for an airstrike/invasion, JFK imposed a **naval blockade ("quarantine")** around Cuba, buying time for secret diplomacy.',
          '**Resolution & Consequences** - Khrushchev removed Cuban missiles in exchange for (1) JFK’s **public pledge** not to invade Cuba and (2) a **secret pledge** to withdraw US Jupiter missiles from Turkey. Result: **Moscow-Washington Hotline (1963)**, **Limited Test Ban Treaty (1963)**, Kennedy hailed as a victor, while Khrushchev lost prestige and was ousted in 1964.',
        ],
        subsections: [
          {
            heading: 'Who "Won" the Cuban Missile Crisis?',
            bullets: [
              '**Nuanced 0470 verdict** - Kennedy won the public propaganda victory; Khrushchev achieved his core goals (Cuba stayed communist and US Turkey missiles were removed), though the secret nature of the Turkey deal hurt him at home; Castro kept power for decades.',
            ],
            exampleHeading: 'Worked evidence showing why blockade beat invasion',
            examples: [
              'Avoiding escalation: Had JFK bombed the missile sites, Soviet officers on Cuba already had tactical nuclear weapons and orders to defend the island, almost certainly triggering full nuclear exchange.',
              'Giving Khrushchev an exit ramp: The quarantine forced Soviet ships to pause without immediate bloodshed, enabling Robert Kennedy and Ambassador Dobrynin to broker the Turkey trade.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'brinkmanship', definition: 'Pushing a crisis right to the edge of nuclear war to force the opponent to back down first.' },
          { term: 'quarantine', definition: 'JFK’s legal label for the October 1962 US naval blockade around Cuba (avoiding the technical term "blockade", an act of war).' },
        ],
      },
      {
        id: 'ighist-3-2-c3',
        title: 'The Vietnam War (1954–75): Why US Containment Failed',
        summary: 'Driven by the Domino Theory, the USA poured over 500,000 troops and massive firepower into South Vietnam yet failed to defeat Viet Cong guerrilla tactics and lost public support at home.',
        bullets: [
          '**Origins & Escalation** - after France’s defeat at **Dien Bien Phu (1954)**, Vietnam split at the 17th Parallel (Communist North under **Ho Chi Minh**, US-backed South under corrupt **Ngo Dinh Diem**). Fear of the **Domino Theory** drew JFK (advisers) and LBJ (after the **1964 Gulf of Tonkin Resolution**) into full war.',
          '**US tactics (high-tech, alienating)** - **Operation Rolling Thunder** carpet-bombing, **Agent Orange** defoliant, **Napalm**, and **Search and Destroy** missions (burning villages, causing atrocities like the **1968 My Lai Massacre**) drove peasants straight into the arms of the Viet Cong.',
          '**Viet Cong tactics (low-tech, resilient)** - **guerrilla warfare** (ambushes, punji traps, blending with villagers, **Cu Chi tunnels**), resupplied via the **Ho Chi Minh Trail** with Soviet/Chinese weapons and fierce nationalist determination.',
          '**Turning point & Withdrawal** - the **Tet Offensive (Jan 1968)** was a military setback for the Viet Cong yet shattered US media/public confidence ("unwinnable war"). Nixon’s **Vietnamisation** led to the **1973 Paris Peace Accords**; **Saigon fell in April 1975** — containment had failed.',
        ],
        subsections: [
          {
            heading: 'Ranking Reasons for US Defeat (10-Mark Exam Focus)',
            bullets: [
              '**Combine military, political & domestic factors** - Viet Cong guerrilla mastery + nationalist motivation + corrupt unpopular South Vietnamese regimes + televised domestic anti-war protests (Kent State 1970, draft resistance) + financial cost ($150bn+).',
            ],
            exampleHeading: 'Model 0470 causal link: Tet Offensive → US exit',
            examples: [
              'Credibility gap: When Viet Cong fighters briefly entered the US Embassy compound in Saigon on live TV, Walter Cronkite declared the war a stalemate, persuading President Johnson not to seek re-election.',
              'Hearts and minds failure: US Search and Destroy body-count metrics destroyed rural villages, destroying the very political support Washington needed in South Vietnam.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Domino Theory', definition: 'US Cold War belief that if one country (like South Vietnam) fell to communism, neighbouring states across Southeast Asia would topple in sequence.' },
          { term: 'Vietnamisation', definition: 'President Nixon’s policy (1969+) of gradually withdrawing US ground troops while training and equipping South Vietnamese forces to take over fighting.' },
        ],
        memoryAid: 'Why USA lost Vietnam = G-M-P-C: Guerrilla tactics (VC), Media & anti-war protests at home, Popular nationalism of Ho Chi Minh, Corrupt South Vietnamese regimes!',
        commonMistake: 'NEVER describe the 1968 Tet Offensive as a straightforward Viet Cong MILITARY victory — the Viet Cong lost ~40,000 fighters militarily, but won a decisive PSYCHOLOGICAL and MEDIA victory inside the USA!',
      },
    ],
    keyTerms: [
      { term: 'Berlin Airlift', definition: '11-month Anglo-American air supply operation (1948–49) that defeated Stalin’s blockade of West Berlin.' },
      { term: 'Bay of Pigs', definition: 'Failed April 1961 CIA-backed Cuban exile invasion that pushed Castro closer to Moscow.' },
      { term: 'Domino Theory', definition: 'Belief that one communist takeover would trigger regional collapse across neighbouring nations.' },
      { term: 'Tet Offensive', definition: 'January 1968 coordinated Viet Cong assault across South Vietnam that turned US public opinion against the war.' },
    ],
    checklistPoints: [
      'Explain the causes, execution, and Cold War consequences of the Berlin Blockade and Airlift (1948–49)',
      'Evaluate Kennedy’s and Khrushchev’s choices and outcomes during the 1962 Cuban Missile Crisis',
      'Analyse the military, political, and domestic reasons why US containment failed in Vietnam',
    ],
  },

  'ighist-4-1': {
    subtopicId: 'ighist-4-1',
    subtopicCode: '4.1',
    subtopicTitle: 'Weimar Republic: Crisis, Stresemann & Rise of Hitler',
    readingMinutes: 11,
    videoTitle: 'The Weimar Republic & How Hitler Became Chancellor',
    youtubeId: 'I3b_Fwofa_w',
    videoChannel: 'History Matters',
    videoDuration: '8:35',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE History (0470) Depth Study B — Germany, 1918–45',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Weimar Constitution & 1919–23 Political/Economic Crises', cardId: 'ighist-4-1-c1' },
      { time: '2:55', seconds: 175, label: 'The Stresemann Era (1924–29): Real Recovery or Illusion?', cardId: 'ighist-4-1-c2' },
      { time: '5:45', seconds: 345, label: 'Great Depression & Hitler’s Appointment as Chancellor (1933)', cardId: 'ighist-4-1-c3' },
    ],
    cards: [
      {
        id: 'ighist-4-1-c1',
        title: 'Weimar Constitutional Flaws & The Crisis Years (1919–23)',
        summary: 'Born in defeat after Kaiser Wilhelm II abdicated, Weimar’s democratic constitution suffered from proportional representation and Article 48, enduring violent revolts and 1923 hyperinflation.',
        bullets: [
          '**Constitutional weaknesses** - **Proportional Representation (PR)** created tiny splinter parties and unstable short-lived coalitions; **Article 48** let the President rule by emergency decree without the Reichstag; conservative judges, army (Reichswehr), and civil servants remained secretly hostile to democracy.',
          '**Left & Right uprisings** - **Spartacist Uprising (Jan 1919)**: communists (Rosa Luxemburg, Karl Liebknecht) crushed by right-wing **Freikorps**; **Kapp Putsch (March 1920)**: Freikorps seized Berlin until a **workers’ general strike** paralysed them; **Munich (Beer Hall) Putsch (Nov 1923)**: Hitler’s failed coup landed him in Landsberg Prison, where he wrote *Mein Kampf* and vowed to win power **legally via elections**.',
          '**1923 Ruhr Crisis & Hyperinflation** - Germany missed a reparations payment; French/Belgian troops occupied the industrial **Ruhr**. Weimar backed **passive resistance** and printed endless banknotes: a loaf of bread jumped from 250 marks (Jan 1923) to **200 billion marks** (Nov 1923), wiping out middle-class life savings.',
        ],
        subsections: [
          {
            heading: 'Winners vs Losers of 1923 Hyperinflation',
            bullets: [
              '**Devastated losers** - middle-class savers and pensioners lost everything overnight, nurturing bitter lasting hatred toward the Weimar Republic.',
              '**Winners** - big industrialists and debtors repaid loans with worthless paper marks.',
            ],
            exampleHeading: 'Why the failed 1923 Munich Putsch was a long-term success for Hitler',
            examples: [
              'National publicity: Sympathetic right-wing judges let Hitler turn his 1924 treason trial into a front-page propaganda platform and gave him only 9 months in comfortable Landsberg Prison.',
              'Strategic pivot: Hitler realised armed coup failed against the army — he must reorganise the NSDAP nationwide to win votes legally.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Article 48', definition: 'Emergency clause of the Weimar Constitution allowing the President to pass laws by decree without Reichstag approval.' },
          { term: 'hyperinflation', definition: 'Extreme, out-of-control price rises (1923 Germany) caused by printing paper currency without economic backing, rendering money worthless.' },
        ],
      },
      {
        id: 'ighist-4-1-c2',
        title: 'The Stresemann Era (1924–29): "Golden Years" or Built on Sand?',
        summary: 'Gustav Stresemann ended hyperinflation, secured US loans, and restored Germany’s international standing, yet Stresemann himself warned Germany was "dancing on a volcano".',
        bullets: [
          '**Economic recovery** - introduced the **Rentenmark (Nov 1923)** backed by land/industry; negotiated the **Dawes Plan (1924)** (800 million gold marks in US loans + flexible reparations) and **Young Plan (1929)** (cut reparations by 20% and stretched payments to 1988). Industrial output surpassed 1913 levels by 1928.',
          '**Foreign policy breakthroughs** - **Locarno Treaties (1925)** guaranteed western borders, earning Germany entry to the **League of Nations (1926)** and the **Kellogg-Briand Pact (1928)**.',
          '**Cultural flowering** - vibrant Weimar cinema (*Metropolis*), Bauhaus architecture, cabaret, and greater freedom for women — though traditional rural Germans saw Berlin nightlife as moral decay.',
          '**Hidden fatal weaknesses** - prosperity depended entirely on **short-term US loans** recallable in 90 days; farmers suffered a slump from 1927; unemployment never fell below 1.3 million; Nazi seats stayed tiny (12 in 1928) ONLY while loans flowed.',
        ],
        subsections: [
          {
            heading: 'Testing the "Golden Years" Debate in Essays',
            bullets: [
              '**Balance genuine stability vs structural fragility** - cite real gains (industrial rebound, League entry, extremist votes collapsing) alongside Stresemann’s own warning that if US loans stopped, the economy would implode.',
            ],
            exampleHeading: 'Concrete evidence of both recovery and fragility',
            examples: [
              'Recovery indicator: Moderate pro-republican parties won over 75% of Reichstag seats in May 1928 while the Nazis won just 2.6% of the vote.',
              'Fragility indicator: Between 1924 and 1929 Germany still went through six unstable coalition governments and relied on 25 billion gold marks of foreign borrowing.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Dawes Plan', definition: '1924 US-brokered agreement restructuring German reparations and lending 800 million gold marks to revive the German economy.' },
        ],
      },
      {
        id: 'ighist-4-1-c3',
        title: 'Great Depression (1929) & How Hitler Became Chancellor (1933)',
        summary: 'The Wall Street Crash recalled US loans, pushing German unemployment to 6 million; combined with Nazi propaganda, fear of communism, and elite backroom scheming, Hindenburg made Hitler Chancellor on 30 January 1933.',
        bullets: [
          '**Economic meltdown** - US banks recalled loans immediately; German unemployment exploded from 1.3m (1929) to **6 million (1932)** (1 in 3 workers). Chancellor Brüning’s unpopular benefit cuts relied on **Article 48**, breaking parliamentary democracy.',
          '**Nazi electoral surge** - Nazis jumped from 12 seats (1928) to **107 (1930)** and **230 seats (July 1932, largest party at 37.3%)** — yet Hitler NEVER won an outright majority in a free election!',
          '**Why Germans voted Nazi** - tailored promises (**"Work and Bread"** for jobless, farm protection for peasants, crushing communism for big business/middle classes), **Goebbels’ modern propaganda** (posters, radio, Hitler flying to 50 cities in "Hitler Over Germany"), and **SA street violence** presenting Nazis as tough order-restorers.',
          '**Backstairs political intrigue (Jan 1933)** - even as Nazi votes dipped to 196 seats in Nov 1932, ex-Chancellor **Franz von Papen** convinced President **Hindenburg** to appoint Hitler Chancellor with Papen as Vice-Chancellor and only 2 other Nazis in Cabinet — fatally boasting *"Within two months we will have pushed Hitler so far into a corner he will squeak."* ',
        ],
        subsections: [
          {
            heading: 'Multi-Factor Explanation for 1933 (Exam Gold)',
            bullets: [
              '**Depression = Necessary trigger; Hitler/Goebbels + Elite Miscalculation = Sufficient cause** - economic misery opened the door, Nazi organisation beat rival parties, and Papen/Hindenburg’s arrogance handed Hitler the keys.',
            ],
            exampleHeading: 'Key turning-point statistic examiners love',
            examples: [
              'November 1932 dip: Nazi support actually fell by 2 million votes (230 → 196 seats) in Nov 1932, proving Hitler did NOT simply coast to an electoral majority — elite political scheming by Papen and Hindenburg was essential.',
              'Fear of KPD: The Communist Party rose to 100 seats in Nov 1932, terrifying industrialists and landowners into funding and backing Hitler.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'SA (Sturmabteilung)', definition: 'Nazi paramilitary "Brownshirts" led by Ernst Röhm who intimidated opponents, fought communists in street battles, and projected ruthless discipline.' },
        ],
        memoryAid: 'Why Hitler became Chancellor = D-P-C-I: Depression (6m jobless), Propaganda & Hitler’s speeches, Communist fear (KPD), Intrigue by Papen & Hindenburg!',
        commonMistake: 'NEVER write that "Hitler won an absolute majority in the 1932 elections" — the Nazis peaked at 37.3% (230 seats) in July 1932 and actually DROPPED to 196 seats in November 1932 before Hindenburg appointed him!',
      },
    ],
    keyTerms: [
      { term: 'Proportional Representation', definition: 'Weimar electoral system awarding seats strictly by vote share, causing fragmented unstable coalitions.' },
      { term: 'Hyperinflation', definition: '1923 collapse of the German mark during the Ruhr occupation that wiped out middle-class savings.' },
      { term: 'Dawes Plan', definition: '1924 US loan package that fuelled Weimar’s temporary economic recovery.' },
      { term: 'Backstairs intrigue', definition: 'Behind-the-scenes deal by von Papen and Hindenburg that appointed Hitler Chancellor on 30 January 1933.' },
    ],
    checklistPoints: [
      'Explain Weimar’s constitutional flaws and how it survived the 1919–23 putsches and hyperinflation',
      'Assess whether the Stresemann era (1924–29) represented genuine recovery or dangerous reliance on US loans',
      'Weigh the roles of the Great Depression, Nazi propaganda, fear of communism, and Papen/Hindenburg in 1933',
    ],
  },

  'ighist-4-2': {
    subtopicId: 'ighist-4-2',
    subtopicCode: '4.2',
    subtopicTitle: 'Nazi Dictatorship, Control & Paper 2 Source Evaluation',
    readingMinutes: 11,
    videoTitle: 'Nazi Consolidation, Control & Source Analysis',
    youtubeId: 'vO-_HXO7HwY',
    videoChannel: 'History Matters',
    videoDuration: '9:00',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE History (0470) Depth Study B & Paper 2 Source Skills',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Consolidating Dictatorship (Feb 1933 – Aug 1934)', cardId: 'ighist-4-2-c1' },
      { time: '3:05', seconds: 185, label: 'Police State, Propaganda, Youth, Women & Opposition', cardId: 'ighist-4-2-c2' },
      { time: '6:10', seconds: 370, label: 'Cambridge 0470 Paper 2 Source Evaluation Mastery', cardId: 'ighist-4-2-c3' },
    ],
    cards: [
      {
        id: 'ighist-4-2-c1',
        title: 'From Chancellor to Führer in 18 Months (1933–34)',
        summary: 'Using a rapid blend of pseudo-legal decrees and brutal terror, Hitler dismantled Weimar democracy between February 1933 and August 1934.',
        bullets: [
          '**Reichstag Fire (27 Feb 1933)** - Dutch communist Marinus van der Lubbe blamed; Hitler persuaded Hindenburg to sign the **Reichstag Fire Decree** suspending free speech, press, and arresting 4,000 communists before the March election.',
          '**Enabling Act (23 March 1933)** - with SA troopers surrounding the Kroll Opera House and communists barred, the Reichstag voted 444–94 to let **Hitler pass laws for 4 years without Parliament** — the legal death of democracy! Used to ban trade unions (May 1933) and all rival political parties (July 1933).',
          '**Night of the Long Knives (30 June 1934)** - the 3-million-strong **SA** under **Ernst Röhm** alarmed the regular army and wanted a socialist "second revolution". Hitler’s **SS** murdered Röhm and ~400 rivals (including ex-Chancellor von Schleicher), winning the **army’s gratitude**.',
          '**Death of Hindenburg (2 August 1934)** - Hitler merged Chancellor and President into **Führer**, and every German soldier swore a **personal oath of unconditional obedience to Hitler**.',
        ],
        subsections: [
          {
            heading: 'Why Each Step Mattered (Causal Chain)',
            bullets: [
              '**Eliminating every rival power centre** - Communists (Fire Decree) → Parliament & Parties (Enabling Act) → Internal SA threat (Long Knives) → Army & Presidency (Aug 1934 oath).',
            ],
            exampleHeading: 'Worked 0470 6-mark explanation: Why was the Night of the Long Knives crucial?',
            examples: [
              'Army loyalty: Regular generals hated Röhm’s demand to absorb the army into the SA; purging Röhm ensured the armed forces backed Hitler when Hindenburg died a month later.',
              'Rise of the SS: Removing SA leadership elevated Heinrich Himmler’s disciplined SS into the supreme instrument of Nazi terror.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Enabling Act', definition: 'March 1933 law granting Hitler’s cabinet full power to enact laws without Reichstag consent, establishing legal dictatorship.' },
          { term: 'Gleichschaltung', definition: 'Nazi policy of "coordination" bringing every institution — courts, unions, schools, media, churches — under total Party control.' },
        ],
      },
      {
        id: 'ighist-4-2-c2',
        title: 'Control by Carrot & Stick: Terror, Propaganda & Society',
        summary: 'The Nazi regime controlled Germans through both fear (SS, Gestapo, concentration camps) and consent (Goebbels’ propaganda, job creation, youth indoctrination), though brave minority resistance persisted.',
        bullets: [
          '**The Police State (Stick)** - **Himmler’s SS**, the **Gestapo** secret police (relied heavily on civilian informers — **Blockwardens** — creating paranoia), Nazi-controlled **People’s Courts**, and **concentration camps** (first at **Dachau, March 1933**).',
          '**Propaganda & Economic Consent (Carrot)** - **Joseph Goebbels** controlled press, film, **Nuremberg Rallies**, cheap **People’s Receivers** (radios), and the **1936 Berlin Olympics**; **RAD**, **Autobahns**, and rearmament cut official unemployment from 6m to near zero (hiding Jews and women removed from figures); **Strength Through Joy (KdF)** gave workers subsidised holidays.',
          '**Youth, Women & Persecution** - **Hitler Youth** (boys trained for war) & **BDM** (girls trained for motherhood); women guided toward **"Kinder, Küche, Kirche"** (Motherhood Cross awards), though labour shortages later pulled women back into factories. Antisemitism escalated from the 1933 boycott and **1935 Nuremberg Laws** to **Kristallnacht (Nov 1938)** and the **Holocaust (Final Solution)** during WWII.',
          '**Opposition** - youth counter-cultures (**Edelweiss Pirates**, **Swing Youth**), brave university students (**White Rose** — Hans & Sophie Scholl), churchmen (**Martin Niemöller**, **Dietrich Bonhoeffer**), and the **July 1944 Bomb Plot** (Colonel Claus von Stauffenberg).',
        ],
        subsections: [
          {
            heading: 'Debating Control: Terror vs Popular Support',
            bullets: [
              '**Nuanced view** - the Gestapo had surprisingly few full-time officers (~30,000 for 70 million people); terror worked so powerfully precisely because propaganda and early economic/foreign triumphs convinced millions to conform or inform voluntarily.',
            ],
            exampleHeading: 'Concrete examples of Nazi social policy contradictions',
            examples: [
              'Women policy reversal: Although Nazi ideology urged women out of professions in 1933, wartime rearmament shortages forced female employment up from 5.2 million (1933) to 7.1 million (1939).',
              'Youth compliance vs dissent: While 82% of youths belonged to the Hitler Youth by 1939, compulsory membership provoked working-class Edelweiss Pirates to beat up HJ patrols and shelter deserters.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Gestapo', definition: 'Nazi secret state police able to arrest citizens without trial ("protective custody") and send them to concentration camps.' },
          { term: 'Kristallnacht', definition: '"Night of Broken Glass" (9–10 Nov 1938), a state-orchestrated pogrom destroying 7,500 Jewish shops and synagogues and sending 30,000 Jewish men to camps.' },
        ],
      },
      {
        id: 'ighist-4-2-c3',
        title: 'Cambridge 0470 Paper 2 Source Evaluation Mastery',
        summary: 'Paper 2 awards top marks for unpacking sub-messages, testing provenance (Origin, Nature, Purpose), cross-referencing sources, and never dismissing a source simply as "biased".',
        bullets: [
          '**Big Message / Cartoon questions** - identify the **main argument/attitude** of the cartoonist FIRST, then back it up with **two specific visual details** from the cartoon AND brief **contextual knowledge** explaining why it was drawn in that exact year.',
          '**Purpose questions ("Why was this source published in...?")** - state the **intended action/impact on its specific audience** (e.g. "to persuade the British public in 1938 to back rearmament"), NOT merely "to inform us".',
          '**Reliability & Utility questions** - NEVER write *"it is biased so it is useless"* (0 evaluation marks!). Instead explain: (1) What makes it **unreliable** for factual events due to provenance/purpose, AND (2) What makes it **valuable/reliable as evidence of the author’s attitudes or propaganda methods** — then **cross-reference** with another source or contextual knowledge!',
          '**Final 12-mark "How far do all the sources support..." question** - group sources clearly into **Support** vs **Challenge**, quote/reference **at least 4–6 sources**, and earn the **bonus 2 evaluation marks** by questioning the reliability/provenance of at least two sources.',
        ],
        subsections: [
          {
            heading: 'The Paper 2 Evaluation Formula (M-D-C-P)',
            bullets: [
              '**M**essage (exact stance/claim) → **D**etail (quote or visual clue) → **C**ontext (precise historical date/event) → **P**rovenance/Purpose (who made it, for whom, and why right then?).',
            ],
            exampleHeading: 'Worked Paper 2 upgrade: Weak vs Top-Band reliability comment',
            examples: [
              'Weak (Level 2): "Source B is a Nazi poster from 1934 so it is biased and not useful to a historian."',
              'Top-Band (Level 5): "Although Source B’s provenance as a 1934 Goebbels propaganda poster makes it unreliable as objective evidence of real living standards, it is highly valuable for showing how the regime sought to project unity and economic optimism to win working-class loyalty."',
            ],
          },
        ],
        glossaryPills: [
          { term: 'provenance', definition: 'The origin, author, date, nature, and intended audience/purpose of a historical source, used to judge its reliability and utility.' },
        ],
        memoryAid: 'Paper 2 Mantra: NEVER say "biased = useless"! Always ask: Useful for WHAT? (Even lies reveal propaganda goals and fears!)',
        commonMistake: 'In Paper 2 "How far do the sources support..." questions, NEVER describe sources one by one without explicitly stating whether each source SUPPORTS or CHALLENGES the hypothesis!',
      },
    ],
    keyTerms: [
      { term: 'Enabling Act', definition: 'March 1933 law empowering Hitler to legislate without the Reichstag.' },
      { term: 'Night of the Long Knives', definition: 'June 1934 purge of Ernst Röhm and SA leaders securing German army loyalty to Hitler.' },
      { term: 'Nuremberg Laws', definition: '1935 racial laws stripping German Jews of citizenship and banning intermarriage.' },
      { term: 'Provenance', definition: 'Source metadata (author, date, nature, audience, purpose) evaluated in Paper 2.' },
    ],
    checklistPoints: [
      'Trace the four key steps by which Hitler became Führer between February 1933 and August 1934',
      'Balance the roles of terror, propaganda, social policies, and minority opposition in Nazi Germany',
      'Apply message, context, cross-referencing, and provenance evaluation to Cambridge 0470 Paper 2 sources',
    ],
  },
};

export const IGCSE_HISTORY_QUIZZES: QuizQuestion[] = [
  // 1.1 (5)
  {
    id: 'ighist-q-1-1-1',
    subtopicId: 'ighist-1-1',
    type: 'mcq',
    marks: 1,
    prompt: 'Which of the Big Three pushed hardest at the 1919 Paris Peace Conference to cripple Germany permanently and create an independent Rhineland?',
    options: ['Woodrow Wilson', 'Georges Clemenceau', 'David Lloyd George', 'Vittorio Orlando'],
    correctIndex: 1,
    explanation: 'France suffered immense invasion damage and 1.4m dead, so Clemenceau demanded maximum security against future German attack.',
  },
  {
    id: 'ighist-q-1-1-2',
    subtopicId: 'ighist-1-1',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the military and legal terms of the Treaty of Versailles:',
    segments: ['Under Article 231 Germany accepted ', ', and the German army was limited to ', ' volunteers with no tanks or air force.'],
    wordBank: ['war guilt', '100,000', 'self-determination', '500,000'],
    answers: ['war guilt', '100,000'],
    explanation: 'Article 231 established War Guilt (the legal pretext for £6.6bn reparations) and capped the army at 100,000 men.',
  },
  {
    id: 'ighist-q-1-1-3',
    subtopicId: 'ighist-1-1',
    type: 'short-answer',
    marks: 2,
    prompt: 'Explain TWO reasons why many Germans condemned the Treaty of Versailles as deeply unfair in 1919.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Germany was excluded from negotiations so it felt like a dictated peace (Diktat), and Article 231 unfairly blamed Germany alone for WWI while denying self-determination to German speakers in Austria and the Sudetenland.',
      markPoints: [
        { id: 'mp1', markDescription: 'Diktat / excluded from talks OR unfair sole war guilt (Article 231)', requiredKeywordGroups: [['diktat', 'dictat', 'not invited', 'excluded', 'war guilt', '231', 'sole blame']] },
        { id: 'mp2', markDescription: 'Self-determination denied / reparations / territorial or military losses', requiredKeywordGroups: [['self-determination', 'reparation', 'territory', 'land', 'corridor', '100000', '100,000', 'anschluss', 'army']] },
      ],
    },
    explanation: 'Combine specific objections: Diktat, Article 231, denied self-determination, reparations, and severe military cuts.',
  },
  {
    id: 'ighist-q-1-1-4',
    subtopicId: 'ighist-1-1',
    type: 'matching',
    marks: 2,
    prompt: 'Match each post-WWI treaty to the defeated nation it dealt with:',
    pairs: [
      { left: 'Treaty of Versailles (1919)', right: 'Germany' },
      { left: 'Treaty of St Germain (1919)', right: 'Austria' },
      { left: 'Treaty of Trianon (1920)', right: 'Hungary' },
      { left: 'Treaty of Sèvres (1920)', right: 'Ottoman Turkey' },
    ],
    explanation: 'Versailles = Germany, St Germain = Austria, Trianon = Hungary, Sèvres (later revised at Lausanne) = Turkey.',
  },
  {
    id: 'ighist-q-1-1-5',
    subtopicId: 'ighist-1-1',
    type: 'mcq',
    marks: 1,
    prompt: 'Which 1918 treaty imposed by Germany on Russia is often cited by historians to argue that Versailles was no harsher than Germany’s own peace terms?',
    options: ['Treaty of Locarno', 'Treaty of Brest-Litovsk', 'Treaty of Rapallo', 'Treaty of Neuilly'],
    correctIndex: 1,
    explanation: 'At Brest-Litovsk (March 1918) Germany stripped Russia of 34% of its population and over half its industry.',
  },

  // 1.2 (5)
  {
    id: 'ighist-q-1-2-1',
    subtopicId: 'ighist-1-2',
    type: 'multi-select',
    marks: 2,
    selectCount: 2,
    prompt: 'Select TWO major structural weaknesses built into the League of Nations from 1920:',
    options: [
      'The USA refused to join, stripping the League of major economic clout',
      'The League possessed no standing army of its own',
      'The Assembly could pass binding military laws by simple majority',
      'Germany controlled a permanent veto on the Council from 1920',
    ],
    correctIndices: [0, 1],
    explanation: 'US isolationism and the lack of an independent military force crippled collective security.',
  },
  {
    id: 'ighist-q-1-2-2',
    subtopicId: 'ighist-1-2',
    type: 'mcq',
    marks: 1,
    prompt: 'Which 1920s dispute was a clear POLITICAL SUCCESS for the League of Nations?',
    options: ['The Vilna dispute (1920)', 'The Corfu incident (1923)', 'The Åland Islands dispute (1921)', 'The Ruhr occupation (1923)'],
    correctIndex: 2,
    explanation: 'Both Sweden and Finland accepted the League’s peaceful 1921 ruling on the Åland Islands.',
  },
  {
    id: 'ighist-q-1-2-3',
    subtopicId: 'ighist-1-2',
    type: 'short-answer',
    marks: 2,
    prompt: 'Explain TWO reasons why the League of Nations failed to stop Mussolini’s invasion of Abyssinia (1935–36).',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'The League excluded vital supplies like oil and coal from its sanctions and left the Suez Canal open to Italian ships, while Britain and France secretly undermined the League through the Hoare-Laval Pact to keep Italy allied against Hitler.',
      markPoints: [
        { id: 'mp1', markDescription: 'Sanctions omitted oil/coal OR Suez Canal stayed open', requiredKeywordGroups: [['oil', 'coal', 'suez']] },
        { id: 'mp2', markDescription: 'Hoare-Laval Pact OR Britain/France feared alienating Mussolini against Hitler', requiredKeywordGroups: [['hoare', 'laval', 'stresa', 'hitler', 'self-interest', 'britain and france']] },
      ],
    },
    explanation: 'Excluding oil, leaving Suez open, and leaking the Hoare-Laval Pact exposed Anglo-French self-interest.',
  },
  {
    id: 'ighist-q-1-2-4',
    subtopicId: 'ighist-1-2',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the summary of the 1931–33 Manchurian Crisis:',
    segments: ['After staging the Mukden Incident, Japan created the puppet state of Manchukuo; the League’s ', ' Report took a full year to condemn Japan, after which Japan simply ', ' the League.'],
    wordBank: ['Lytton', 'left', 'Dawes', 'rebuilt'],
    answers: ['Lytton', 'left'],
    explanation: 'The slow Lytton Report was ignored and Japan walked out in March 1933 with zero sanctions.',
  },
  {
    id: 'ighist-q-1-2-5',
    subtopicId: 'ighist-1-2',
    type: 'mcq',
    marks: 1,
    prompt: 'Which humanitarian achievement belonged to Fridtjof Nansen’s League of Nations Refugees Committee?',
    options: ['Signing the Kellogg-Briand Pact', 'Repatriating over 400,000 prisoners of war and creating the Nansen Passport', 'Demilitarising the Rhineland', 'Managing the Dawes Plan loans'],
    correctIndex: 1,
    explanation: 'Nansen’s Refugees Committee was one of the League’s most successful non-political agencies.',
  },

  // 2.1 (5)
  {
    id: 'ighist-q-2-1-1',
    subtopicId: 'ighist-2-1',
    type: 'mcq',
    marks: 1,
    prompt: 'Which event in January 1935 was a major boost to Hitler WITHOUT breaking the Treaty of Versailles?',
    options: ['Reintroducing German conscription', 'The Saar Plebiscite (90% voted to rejoin Germany)', 'Remilitarising the Rhineland', 'Invading Austria'],
    correctIndex: 1,
    explanation: 'Versailles explicitly mandated a plebiscite after 15 years of League administration in the Saar.',
  },
  {
    id: 'ighist-q-2-1-2',
    subtopicId: 'ighist-2-1',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete Hitler’s core foreign policy concepts:',
    segments: ['Hitler sought to conquer ', ' ("living space") in Eastern Europe and unite all ethnic Germans, known as ', ', inside one Reich.'],
    wordBank: ['Lebensraum', 'Volksdeutsche', 'Gleichschaltung', 'reparations'],
    answers: ['Lebensraum', 'Volksdeutsche'],
    explanation: 'Lebensraum targeted Eastern Europe/USSR; Volksdeutsche were ethnic Germans living outside Germany.',
  },
  {
    id: 'ighist-q-2-1-3',
    subtopicId: 'ighist-2-1',
    type: 'short-answer',
    marks: 2,
    prompt: 'Explain why Hitler’s attempted Anschluss with Austria failed in 1934 yet succeeded in March 1938.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'In 1934 Mussolini moved Italian troops to the Brenner Pass to protect Austria and deter a weak Germany, whereas by 1938 Italy was allied with Hitler via the Rome-Berlin Axis and Germany had massively rearmed.',
      markPoints: [
        { id: 'mp1', markDescription: '1934: Mussolini/Italy blocked Hitler at the Brenner Pass', requiredKeywordGroups: [['mussolini', 'italy', 'italian'], ['1934', 'brenner', 'blocked', 'troops', 'stopped']] },
        { id: 'mp2', markDescription: '1938: Rome-Berlin Axis alliance / rearmed Germany / Britain & France did not intervene', requiredKeywordGroups: [['axis', 'ally', 'allied', 'rearm', 'did not intervene', 'schuschnigg']] },
      ],
    },
    explanation: 'The shift in Mussolini’s allegiance (1934 blocker → 1936 Axis ally) was decisive.',
  },
  {
    id: 'ighist-q-2-1-4',
    subtopicId: 'ighist-2-1',
    type: 'mcq',
    marks: 1,
    prompt: 'How did the June 1935 Anglo-German Naval Agreement undermine European collective resistance to Hitler?',
    options: ['It forced Germany to scrap all submarines', 'Britain unilaterally allowed Germany a fleet up to 35% of the Royal Navy without consulting France or the League', 'It invited the USSR to patrol the Baltic', 'It banned German rearmament permanently'],
    correctIndex: 1,
    explanation: 'Britain effectively condoned a breach of Versailles behind France’s back, breaking the Stresa Front.',
  },
  {
    id: 'ighist-q-2-1-5',
    subtopicId: 'ighist-2-1',
    type: 'mcq',
    marks: 1,
    prompt: 'Why was remilitarising the Rhineland in March 1936 described as Hitler’s biggest gamble?',
    options: ['German forces were still weaker than France’s and had orders to retreat if French troops resisted', 'The USA threatened immediate invasion', 'Austria had already declared war on Germany', 'Britain had mobilised its entire army'],
    correctIndex: 0,
    explanation: 'Had France marched into the Rhineland in 1936, Hitler later admitted his poorly equipped troops would have had to withdraw in humiliation.',
  },

  // 2.2 (5)
  {
    id: 'ighist-q-2-2-1',
    subtopicId: 'ighist-2-2',
    type: 'multi-select',
    marks: 2,
    selectCount: 2,
    prompt: 'Select TWO countries that were NOT invited to the September 1938 Munich Conference:',
    options: ['Czechoslovakia', 'The Soviet Union (USSR)', 'Italy', 'France'],
    correctIndices: [0, 1],
    explanation: 'Britain, France, Italy, and Germany decided Czechoslovakia’s fate without inviting either the Czechs or the USSR.',
  },
  {
    id: 'ighist-q-2-2-2',
    subtopicId: 'ighist-2-2',
    type: 'mcq',
    marks: 1,
    prompt: 'Which event in March 1939 finally ended British appeasement and led to the Anglo-French guarantee to Poland?',
    options: ['The Saar Plebiscite', 'Hitler’s invasion of the rest of non-German Czechoslovakia (Prague)', 'The Spanish Civil War ending', 'The Anglo-German Naval Agreement'],
    correctIndex: 1,
    explanation: 'Occupying Prague broke the Munich Agreement and proved Hitler wanted domination beyond uniting German speakers.',
  },
  {
    id: 'ighist-q-2-2-3',
    subtopicId: 'ighist-2-2',
    type: 'short-answer',
    marks: 2,
    prompt: 'Give TWO reasons why Stalin signed the Nazi-Soviet Pact in August 1939 despite hating fascism.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Stalin distrusted Britain and France after being excluded from Munich, wanted time to rebuild the Red Army after his purges, and gained a defensive buffer zone in eastern Poland under the secret protocol.',
      markPoints: [
        { id: 'mp1', markDescription: 'Distrust of Britain/France (Munich / slow 1939 talks)', requiredKeywordGroups: [['distrust', 'mistrust', 'munich', 'britain', 'france', 'west']] },
        { id: 'mp2', markDescription: 'Time to rearm/rebuild Red Army OR buffer zone in eastern Poland', requiredKeywordGroups: [['time', 'rearm', 'purge', 'buffer', 'poland', 'territory', 'land']] },
      ],
    },
    explanation: 'Stalin chose cold strategic survival: buying time and space when Western talks stalled.',
  },
  {
    id: 'ighist-q-2-2-4',
    subtopicId: 'ighist-2-2',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the key reason Hitler welcomed the Nazi-Soviet Pact:',
    segments: ['By agreeing to divide ', ' with Stalin, Hitler avoided fighting a ', ' war when he invaded on 1 September 1939.'],
    wordBank: ['Poland', 'two-front', 'Austria', 'colonial'],
    answers: ['Poland', 'two-front'],
    explanation: 'Neutralising the USSR spared Germany from fighting West and East simultaneously as in 1914.',
  },
  {
    id: 'ighist-q-2-2-5',
    subtopicId: 'ighist-2-2',
    type: 'mcq',
    marks: 1,
    prompt: 'Which argument is commonly used by historians to DEFEND Chamberlain’s policy of appeasement in 1938?',
    options: ['Britain had a massive surplus of modern Spitfires in 1938', 'Appeasement bought Britain a vital extra year to build RAF fighters and radar defences', 'Hitler honoured every promise made at Munich', 'The USSR urged Britain to give away the Sudetenland'],
    correctIndex: 1,
    explanation: 'Military advisers warned Britain was not ready to fight in 1938; the extra year helped win the 1940 Battle of Britain.',
  },

  // 3.1 (5)
  {
    id: 'ighist-q-3-1-1',
    subtopicId: 'ighist-3-1',
    type: 'mcq',
    marks: 1,
    prompt: 'Which development between Yalta (Feb 1945) and Potsdam (Jul 1945) sharply increased Stalin’s suspicion of the USA?',
    options: ['Roosevelt invited the USSR into NATO', 'The USA secretly tested the atomic bomb and Truman took a tougher anti-communist line', 'Germany surrendered to Japan', 'Britain adopted communism'],
    correctIndex: 1,
    explanation: 'Truman’s hardline tone and the secret US Trinity atomic test fuelled intense Soviet distrust at Potsdam.',
  },
  {
    id: 'ighist-q-3-1-2',
    subtopicId: 'ighist-3-1',
    type: 'matching',
    marks: 2,
    prompt: 'Match each early Cold War policy or organisation to its description:',
    pairs: [
      { left: 'Truman Doctrine (1947)', right: 'US political/military pledge to contain communist expansion' },
      { left: 'Marshall Plan (1947)', right: '$13 billion US economic recovery aid for Western Europe' },
      { left: 'Cominform (1947)', right: 'Soviet body enforcing political control over communist parties' },
      { left: 'Comecon (1949)', right: 'Soviet economic alliance linking Eastern bloc trade' },
    ],
    explanation: 'Keep political (Truman / Cominform) and economic (Marshall / Comecon) tools clearly distinct.',
  },
  {
    id: 'ighist-q-3-1-3',
    subtopicId: 'ighist-3-1',
    type: 'short-answer',
    marks: 2,
    prompt: 'Explain why Stalin forbade Eastern European countries like Czechoslovakia and Poland from accepting Marshall Aid.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Stalin denounced Marshall Aid as "dollar imperialism" designed to buy Western economic influence and pull his Eastern European security buffer zone away from Moscow’s control.',
      markPoints: [
        { id: 'mp1', markDescription: 'Viewed as "dollar imperialism" / spreading US economic/capitalist influence', requiredKeywordGroups: [['dollar', 'imperialism', 'capitalis', 'us influence', 'american', 'west']] },
        { id: 'mp2', markDescription: 'Feared losing control of Eastern European satellite/buffer states', requiredKeywordGroups: [['buffer', 'control', 'satellite', 'eastern europe', 'sphere', 'loyal']] },
      ],
    },
    explanation: 'Marshall Aid required transparent capitalist reforms that threatened Soviet control of its buffer zone.',
  },
  {
    id: 'ighist-q-3-1-4',
    subtopicId: 'ighist-3-1',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the 1946–47 turning points in Europe:',
    segments: ['In March 1946 Winston Churchill warned that an ', ' had descended across Europe, and in 1947 Truman launched the policy of ', ' beginning with aid to Greece and Turkey.'],
    wordBank: ['Iron Curtain', 'containment', 'appeasement', 'détente'],
    answers: ['Iron Curtain', 'containment'],
    explanation: 'Churchill’s Fulton speech named the Iron Curtain; Truman’s March 1947 speech launched containment.',
  },
  {
    id: 'ighist-q-3-1-5',
    subtopicId: 'ighist-3-1',
    type: 'mcq',
    marks: 1,
    prompt: 'What does the term "Salami Tactics" refer to in Eastern Europe (1945–48)?',
    options: ['American food shipments during the Berlin Airlift', 'Stalin’s step-by-step elimination of non-communist coalition rivals slice by slice until only communists ruled', 'A Marshall Plan farming subsidy', 'Yugoslavia’s trade deal with Britain'],
    correctIndex: 1,
    explanation: 'Hungarian communist leader Mátyás Rákosi coined the phrase for slicing away opposition parties one by one.',
  },

  // 3.2 (5)
  {
    id: 'ighist-q-3-2-1',
    subtopicId: 'ighist-3-2',
    type: 'mcq',
    marks: 1,
    prompt: 'What immediate Western action provoked Stalin to launch the Berlin Blockade in June 1948?',
    options: ['Building the Berlin Wall', 'Introducing a new currency (Deutschmark) in the merged Western zones (Trizonia)', 'Invading East Germany', 'Inviting Poland into NATO'],
    correctIndex: 1,
    explanation: 'Uniting Western zones and introducing the Deutschmark threatened to make the Soviet zone economically subordinate.',
  },
  {
    id: 'ighist-q-3-2-2',
    subtopicId: 'ighist-3-2',
    type: 'short-answer',
    marks: 2,
    prompt: 'State BOTH parts of the final October 1962 deal that ended the Cuban Missile Crisis.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Khrushchev agreed to dismantle and remove Soviet missiles from Cuba, while Kennedy publicly promised never to invade Cuba and secretly agreed to withdraw US Jupiter missiles from Turkey.',
      markPoints: [
        { id: 'mp1', markDescription: 'USSR removes missiles from Cuba + US publicly pledges not to invade Cuba', requiredKeywordGroups: [['remove', 'withdraw', 'dismantle'], ['not invade', 'no invasion', 'pledge', 'promise']] },
        { id: 'mp2', markDescription: 'Secret US agreement to withdraw Jupiter missiles from Turkey', requiredKeywordGroups: [['turkey', 'jupiter']] },
      ],
    },
    explanation: 'The secret Turkey missile swap allowed Khrushchev to claim strategic parity while JFK appeared victorious publicly.',
  },
  {
    id: 'ighist-q-3-2-3',
    subtopicId: 'ighist-3-2',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the consequences of the 1948–49 Berlin Crisis and 1962 Cuban Missile Crisis:',
    segments: ['After the Berlin Blockade the West created the military alliance ', ' in 1949; after Cuba 1962 superpowers installed a direct ', ' between Washington and Moscow.'],
    wordBank: ['NATO', 'hotline', 'Comecon', 'SEATO'],
    answers: ['NATO', 'hotline'],
    explanation: 'NATO solidified Western defence in 1949; the 1963 Hotline lowered the risk of accidental nuclear war.',
  },
  {
    id: 'ighist-q-3-2-4',
    subtopicId: 'ighist-3-2',
    type: 'mcq',
    marks: 1,
    prompt: 'Why was the January 1968 Tet Offensive a major turning point in the Vietnam War?',
    options: ['The Viet Cong permanently captured Saigon in 1968', 'Although the Viet Cong suffered heavy military losses, televised fighting inside the US Embassy shattered American public belief the war could be won', 'China declared war on the USA', 'Nixon invaded North Vietnam'],
    correctIndex: 1,
    explanation: 'Tet destroyed Johnson’s credibility at home and accelerated US moves toward withdrawal (Vietnamisation).',
  },
  {
    id: 'ighist-q-3-2-5',
    subtopicId: 'ighist-3-2',
    type: 'multi-select',
    marks: 2,
    selectCount: 2,
    prompt: 'Select TWO reasons US military tactics backfired in South Vietnam:',
    options: [
      'Search and Destroy missions and Agent Orange alienated rural villagers and boosted Viet Cong recruitment',
      'Heavy conventional firepower struggled against hidden guerrilla fighters using jungle trails and tunnel networks',
      'The USA refused to use any air power during the war',
      'South Vietnam’s Diem regime enjoyed overwhelming popularity among Buddhist peasants',
    ],
    correctIndices: [0, 1],
    explanation: 'High-tech destructive tactics alienated civilians while failing to pin down mobile Viet Cong guerrillas.',
  },

  // 4.1 (5)
  {
    id: 'ighist-q-4-1-1',
    subtopicId: 'ighist-4-1',
    type: 'mcq',
    marks: 1,
    prompt: 'How did the Weimar Republic defeat the right-wing Kapp Putsch in March 1920 when the army refused to fire on the rebels?',
    options: ['By calling in French troops', 'Berlin workers launched a paralysing general strike cutting power, water, and transport', 'Hitler intervened to arrest Kapp', 'President Ebert used Article 48 to ban the army'],
    correctIndex: 1,
    explanation: 'Within four days the general strike made governing impossible and Wolfgang Kapp fled.',
  },
  {
    id: 'ighist-q-4-1-2',
    subtopicId: 'ighist-4-1',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete Gustav Stresemann’s 1923–24 recovery measures:',
    segments: ['Stresemann stopped hyperinflation by launching a temporary currency called the ', ', and secured 800 million gold marks in US loans through the ', ' Plan.'],
    wordBank: ['Rentenmark', 'Dawes', 'Deutschmark', 'Marshall'],
    answers: ['Rentenmark', 'Dawes'],
    explanation: 'The Rentenmark restored price stability in Nov 1923 and the 1924 Dawes Plan restarted industry.',
  },
  {
    id: 'ighist-q-4-1-3',
    subtopicId: 'ighist-4-1',
    type: 'short-answer',
    marks: 2,
    prompt: 'Explain why Stresemann warned that Weimar’s 1924–29 recovery was "dancing on a volcano".',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Weimar’s economic prosperity depended heavily on short-term American loans under the Dawes Plan that could be recalled at 90 days’ notice, so any US financial crash would collapse German banks and jobs overnight.',
      markPoints: [
        { id: 'mp1', markDescription: 'Reliance on short-term US/American loans (Dawes Plan)', requiredKeywordGroups: [['loan', 'borrow', 'dawes'], ['us', 'america', 'short-term', 'foreign']] },
        { id: 'mp2', markDescription: 'Loans could be recalled rapidly / economy would collapse if USA crashed', requiredKeywordGroups: [['recall', 'crash', 'collapse', 'depression', 'withdraw', 'vulnerable']] },
      ],
    },
    explanation: 'When Wall Street crashed in October 1929, Stresemann’s exact nightmare came true within weeks.',
  },
  {
    id: 'ighist-q-4-1-4',
    subtopicId: 'ighist-4-1',
    type: 'mcq',
    marks: 1,
    prompt: 'What crucial lesson did Hitler draw from the failure of the 1923 Munich Putsch?',
    options: ['Give up politics permanently', 'Destroy Weimar from within by reorganising the Nazis to win votes legally through elections', 'Form an alliance with the Communist Party (KPD)', 'Move Nazi headquarters to France'],
    correctIndex: 1,
    explanation: 'In Landsberg Prison Hitler pivoted from armed insurrection to nationwide electoral campaigning.',
  },
  {
    id: 'ighist-q-4-1-5',
    subtopicId: 'ighist-4-1',
    type: 'mcq',
    marks: 1,
    prompt: 'Why did President Hindenburg and Franz von Papen appoint Hitler Chancellor on 30 January 1933?',
    options: ['The Nazis had won 65% of seats in the Reichstag', 'Papen believed conservative ministers could control and "box in" Hitler while using Nazi mass support to govern', 'The German army ordered Hindenburg to resign', 'The League of Nations demanded it'],
    correctIndex: 1,
    explanation: 'Conservative elites fatally underestimated Hitler, assuming 9 non-Nazis in a 12-person Cabinet could tame him.',
  },

  // 4.2 (5)
  {
    id: 'ighist-q-4-2-1',
    subtopicId: 'ighist-4-2',
    type: 'matching',
    marks: 2,
    prompt: 'Match each 1933–34 consolidation event to its impact on Hitler’s power:',
    pairs: [
      { left: 'Reichstag Fire Decree (Feb 1933)', right: 'Suspended civil liberties and allowed arrest of 4,000 communists' },
      { left: 'Enabling Act (Mar 1933)', right: 'Let Hitler pass laws without Reichstag approval' },
      { left: 'Night of the Long Knives (Jun 1934)', right: 'Purged Ernst Röhm and SA leaders, winning army loyalty' },
      { left: 'Death of Hindenburg (Aug 1934)', right: 'Hitler became Führer and troops swore personal oath to him' },
    ],
    explanation: 'These four rapid steps converted a constrained Chancellor into an absolute dictator in 18 months.',
  },
  {
    id: 'ighist-q-4-2-2',
    subtopicId: 'ighist-4-2',
    type: 'mcq',
    marks: 1,
    prompt: 'Which Nazi organisation ran the "Strength Through Joy" (KdF) programme offering workers subsidised holidays and cinema tickets?',
    options: ['The Gestapo', 'The German Labour Front (DAF)', 'The White Rose', 'The Freikorps'],
    correctIndex: 1,
    explanation: 'After banning trade unions, Robert Ley’s DAF used KdF perks to keep workers productive and compliant.',
  },
  {
    id: 'ighist-q-4-2-3',
    subtopicId: 'ighist-4-2',
    type: 'short-answer',
    marks: 2,
    prompt: 'On Cambridge 0470 Paper 2, explain why writing "Source C is biased Nazi propaganda so it is not useful" earns low marks, and state how to upgrade the evaluation.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Calling propaganda useless ignores what it reveals; a top-band answer explains that while provenance makes it unreliable for objective facts, it is very useful as evidence of Nazi aims, values, and how the regime tried to persuade the public.',
      markPoints: [
        { id: 'mp1', markDescription: 'Notes provenance limits factual reliability without dismissing it completely', requiredKeywordGroups: [['unreliable', 'fact', 'provenance', 'purpose', 'exaggerat', 'one-sided']] },
        { id: 'mp2', markDescription: 'Explains utility as evidence of Nazi attitudes, aims, or propaganda techniques', requiredKeywordGroups: [['useful', 'valuable', 'reveal', 'attitude', 'aim', 'persuade', 'propaganda', 'belief']] },
      ],
    },
    explanation: 'Every historical source is useful for SOMETHING — evaluate both its factual limits and what it reveals about its author.',
  },
  {
    id: 'ighist-q-4-2-4',
    subtopicId: 'ighist-4-2',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the timeline of Nazi antisemitic persecution before WWII:',
    segments: ['The 1935 ', ' Laws stripped German Jews of citizenship, and in November 1938 the state-led pogrom ', ' destroyed thousands of Jewish businesses and synagogues.'],
    wordBank: ['Nuremberg', 'Kristallnacht', 'Locarno', 'Gleichschaltung'],
    answers: ['Nuremberg', 'Kristallnacht'],
    explanation: 'Persecution escalated from legal exclusion (1935) to nationwide state violence (1938) and wartime genocide.',
  },
  {
    id: 'ighist-q-4-2-5',
    subtopicId: 'ighist-4-2',
    type: 'mcq',
    marks: 1,
    prompt: 'Which opposition group led by students Hans and Sophie Scholl distributed anti-Nazi leaflets at Munich University in 1942–43?',
    options: ['The Edelweiss Pirates', 'The White Rose', 'The Confessing Church', 'The Kreisau Circle'],
    correctIndex: 1,
    explanation: 'The White Rose bravely exposed Nazi atrocities via leaflets before Hans and Sophie Scholl were executed in 1943.',
  },
];

export const IGCSE_HISTORY_FLASHCARDS: FlashcardItem[] = [
  // 1.1
  { id: 'ighist-fc-1-1-1', subtopicId: 'ighist-1-1', front: 'Contrast the core 1919 aims of Clemenceau, Wilson, and Lloyd George.', backBullets: ['Clemenceau: cripple Germany for French security & revenge.', 'Wilson: Fourteen Points, self-determination & League of Nations.', 'Lloyd George: middle ground — punish Germany enough for voters yet protect British trade & empire.'] },
  { id: 'ighist-fc-1-1-2', subtopicId: 'ighist-1-1', front: 'What does GARGLE stand for in the Treaty of Versailles?', backBullets: ['Guilt (Art. 231), Armed forces (100k, no tanks/air force), Reparations (£6.6bn), German territory (10% + colonies), League of Nations, Extra (no Anschluss).'] },
  { id: 'ighist-fc-1-1-3', subtopicId: 'ighist-1-1', front: 'Distinguish the Saar and the Rhineland under Versailles.', backBullets: ['Saar: coalfields put under League of Nations control for 15 years (plebiscite 1935).', 'Rhineland: stayed German territory, but permanently demilitarised (no German troops).'] },
  { id: 'ighist-fc-1-1-4', subtopicId: 'ighist-1-1', front: 'Why did Germans call Versailles a "Diktat" and politicians "November Criminals"?', backBullets: ['Germany was barred from negotiating (dictated peace) and right-wing myths claimed the undefeated army was "stabbed in the back" (Dolchstoss).'] },
  { id: 'ighist-fc-1-1-5', subtopicId: 'ighist-1-1', front: 'Give one key argument that Versailles WAS justifiable in 1919.', backBullets: ['Germany’s own 1918 Treaty of Brest-Litovsk stripped Russia of 34% of its population and 54% of its industry, and northern France lay in ruins.'] },

  // 1.2
  { id: 'ighist-fc-1-2-1', subtopicId: 'ighist-1-2', front: 'Name THREE built-in structural weaknesses of the League of Nations.', backBullets: ['USA never joined (weakening economic sanctions).', 'No standing army of its own.', 'Unanimous Assembly votes & permanent Council vetoes caused paralysis.'] },
  { id: 'ighist-fc-1-2-2', subtopicId: 'ighist-1-2', front: 'Give TWO political successes and TWO humanitarian successes of the 1920s League.', backBullets: ['Political: Åland Islands (1921), Upper Silesia (1921), Bulgaria-Greece (1925).', 'Humanitarian: Nansen Refugees Committee (400k+ POWs), Slavery Commission (200k freed), Health Committee & ILO.'] },
  { id: 'ighist-fc-1-2-3', subtopicId: 'ighist-1-2', front: 'What happened during the Corfu Crisis (1923)?', backBullets: ['After Italian officials were killed, Mussolini bombarded Greek Corfu and bypassed the League via the Conference of Ambassadors, proving major powers could bully small states.'] },
  { id: 'ighist-fc-1-2-4', subtopicId: 'ighist-1-2', front: 'Why did the League fail in the Manchurian Crisis (1931–33)?', backBullets: ['Great Depression deterred costly sanctions; Lytton Report took a year; Japan simply walked out in 1933 with no military or economic action taken.'] },
  { id: 'ighist-fc-1-2-5', subtopicId: 'ighist-1-2', front: 'Why did the Abyssinian Crisis (1935–36) kill the League permanently?', backBullets: ['Sanctions omitted oil/coal, Britain kept the Suez Canal open, and the leaked Hoare-Laval Pact exposed Anglo-French betrayal of collective security.'] },

  // 2.1
  { id: 'ighist-fc-2-1-1', subtopicId: 'ighist-2-1', front: 'What were Hitler’s four core foreign policy goals?', backBullets: ['Abolish Versailles, unite all Volksdeutsche (Grossdeutschland), conquer Lebensraum in Eastern Europe, and destroy Communism.'] },
  { id: 'ighist-fc-2-1-2', subtopicId: 'ighist-2-1', front: 'Why did the 1935 Saar Plebiscite NOT breach Versailles?', backBullets: ['Versailles explicitly scheduled a 15-year vote; 90% legally voted to rejoin Germany, handing Hitler coal and propaganda prestige.'] },
  { id: 'ighist-fc-2-1-3', subtopicId: 'ighist-2-1', front: 'Why did Britain and France allow Hitler to remilitarise the Rhineland in March 1936?', backBullets: ['Distracted by Abyssinia, Britain sympathised ("walking into their own backyard"), and France faced elections and refused to act without British backing.'] },
  { id: 'ighist-fc-2-1-4', subtopicId: 'ighist-2-1', front: 'How did the Spanish Civil War (1936–39) help Hitler prepare for WWII?', backBullets: ['The Luftwaffe’s Condor Legion tested Blitzkrieg dive-bombing tactics (Guernica 1937) and cemented the Rome-Berlin Axis with Mussolini.'] },
  { id: 'ighist-fc-2-1-5', subtopicId: 'ighist-2-1', front: 'What changed between the failed 1934 Anschluss and the successful March 1938 Anschluss?', backBullets: ['In 1934 Mussolini blocked Hitler at the Brenner Pass; by 1938 Italy was Hitler’s Axis ally, Germany had rearmed, and Britain/France stood aside.'] },

  // 2.2
  { id: 'ighist-fc-2-2-1', subtopicId: 'ighist-2-2', front: 'Give THREE contemporary reasons Britain pursued appeasement in 1937–38.', backBullets: ['Buy time for RAF/radar rearmament; horror of WWI casualties; belief Versailles had been too harsh; fear of Soviet communism; US isolationism.'] },
  { id: 'ighist-fc-2-2-2', subtopicId: 'ighist-2-2', front: 'What was decided at the Munich Conference (Sept 1938) and who was left out?', backBullets: ['Hitler received the Czechoslovak Sudetenland in return for promising peace; BOTH Czechoslovakia and the USSR were excluded.'] },
  { id: 'ighist-fc-2-2-3', subtopicId: 'ighist-2-2', front: 'Why was Hitler’s invasion of Prague (March 1939) the turning point that ended appeasement?', backBullets: ['It seized non-German territory and broke Munich, proving Hitler sought European domination rather than self-determination — triggering the British guarantee to Poland.'] },
  { id: 'ighist-fc-2-2-4', subtopicId: 'ighist-2-2', front: 'What did the Secret Protocol of the August 1939 Nazi-Soviet Pact agree?', backBullets: ['Germany and the USSR secretly agreed to partition Poland between them and assign the Baltic States to the Soviet sphere.'] },
  { id: 'ighist-fc-2-2-5', subtopicId: 'ighist-2-2', front: 'Why did BOTH Hitler and Stalin benefit temporarily from the Nazi-Soviet Pact?', backBullets: ['Hitler avoided a two-front war in 1939; Stalin bought time to rebuild his purged Red Army and gained an eastern Polish buffer zone.'] },

  // 3.1
  { id: 'ighist-fc-3-1-1', subtopicId: 'ighist-3-1', front: 'List THREE reasons tensions worsened sharply between Yalta (Feb 1945) and Potsdam (Jul 1945).', backBullets: ['Hardline Truman replaced Roosevelt; the USA tested the atomic bomb secretly; Germany had surrendered and Soviet troops occupied Eastern Europe.'] },
  { id: 'ighist-fc-3-1-2', subtopicId: 'ighist-3-1', front: 'What was Churchill’s March 1946 "Iron Curtain" speech?', backBullets: ['Speech at Fulton, Missouri warning that Moscow had imposed an ideological and political barrier dividing Eastern Europe from the democratic West.'] },
  { id: 'ighist-fc-3-1-3', subtopicId: 'ighist-3-1', front: 'Distinguish the Truman Doctrine from the Marshall Plan (both 1947).', backBullets: ['Truman Doctrine: political/military containment pledge (Greece & Turkey).', 'Marshall Plan: $13 billion economic recovery package to rebuild Western Europe and starve communism of poverty.'] },
  { id: 'ighist-fc-3-1-4', subtopicId: 'ighist-3-1', front: 'What were Cominform (1947) and Comecon (1949)?', backBullets: ['Cominform enforced Moscow’s political orthodoxy over communist parties; Comecon coordinated Eastern bloc trade as Stalin’s alternative to Marshall Aid.'] },
  { id: 'ighist-fc-3-1-5', subtopicId: 'ighist-3-1', front: 'Summarise Traditionalist, Revisionist, and Post-Revisionist Cold War blame views.', backBullets: ['Traditionalist: Stalin’s Eastern European takeover; Revisionist: US atomic diplomacy & dollar imperialism; Post-Revisionist: mutual fear/security dilemma.'] },

  // 3.2
  { id: 'ighist-fc-3-2-1', subtopicId: 'ighist-3-2', front: 'What triggered the Berlin Blockade (1948–49) and how did Truman defeat it?', backBullets: ['Trigger: Western merger (Trizonia) and new Deutschmark.', 'Response: 11-month Berlin Airlift delivering 2.3 million tonnes of supplies without firing a shot.'] },
  { id: 'ighist-fc-3-2-2', subtopicId: 'ighist-3-2', front: 'Why did Khrushchev place nuclear missiles in Cuba in 1962?', backBullets: ['Defend Castro after the 1961 Bay of Pigs, offset US Jupiter missiles in Turkey, close the missile gap, and test JFK.'] },
  { id: 'ighist-fc-3-2-3', subtopicId: 'ighist-3-2', front: 'What were the key terms and outcomes of the Cuban Missile Crisis settlement?', backBullets: ['USSR removed Cuban missiles; USA publicly promised not to invade Cuba and secretly removed Turkey missiles → 1963 Hotline & Limited Test Ban Treaty.'] },
  { id: 'ighist-fc-3-2-4', subtopicId: 'ighist-3-2', front: 'Define the Domino Theory and the 1964 Gulf of Tonkin Resolution.', backBullets: ['Domino Theory: fear that communist victory in Vietnam would topple neighbouring Asian states.', 'Gulf of Tonkin: Congress gave LBJ sweeping powers to escalate US combat troops.'] },
  { id: 'ighist-fc-3-2-5', subtopicId: 'ighist-3-2', front: 'Why did the 1968 Tet Offensive prove decisive despite Viet Cong casualties?', backBullets: ['Televised assaults inside Saigon shattered US public belief in imminent victory, triggering anti-war pressure and Nixon’s Vietnamisation exit.'] },

  // 4.1
  { id: 'ighist-fc-4-1-1', subtopicId: 'ighist-4-1', front: 'Name TWO structural flaws in the Weimar Constitution.', backBullets: ['Proportional Representation produced fragmented unstable coalitions; Article 48 enabled presidential rule by emergency decree bypassing the Reichstag.'] },
  { id: 'ighist-fc-4-1-2', subtopicId: 'ighist-4-1', front: 'What caused Germany’s 1923 hyperinflation and who suffered worst?', backBullets: ['Ruhr occupation + printing banknotes to pay striking workers destroyed the mark; middle-class savers and pensioners lost life savings.'] },
  { id: 'ighist-fc-4-1-3', subtopicId: 'ighist-4-1', front: 'Name THREE achievements of Gustav Stresemann (1924–29).', backBullets: ['Rentenmark ended hyperinflation; Dawes (1924) & Young (1929) Plans eased reparations/brought US loans; Locarno (1925) & League entry (1926).'] },
  { id: 'ighist-fc-4-1-4', subtopicId: 'ighist-4-1', front: 'How did the 1929 Great Depression transform Nazi electoral fortunes?', backBullets: ['Unemployment hit 6 million; Nazis jumped from 12 seats (1928) to 230 seats (July 1932) via "Work and Bread" propaganda and anti-communist appeal.'] },
  { id: 'ighist-fc-4-1-5', subtopicId: 'ighist-4-1', front: 'Why was elite scheming essential to Hitler becoming Chancellor in January 1933?', backBullets: ['Nazi seats actually fell to 196 in Nov 1932; Papen persuaded Hindenburg to appoint Hitler thinking conservative ministers could control him.'] },

  // 4.2
  { id: 'ighist-fc-4-2-1', subtopicId: 'ighist-4-2', front: 'List the 4 milestones turning Hitler from Chancellor to Führer (1933–34).', backBullets: ['Reichstag Fire Decree (Feb 1933) → Enabling Act (Mar 1933) → Night of the Long Knives (Jun 1934) → Death of Hindenburg & Army Oath (Aug 1934).'] },
  { id: 'ighist-fc-4-2-2', subtopicId: 'ighist-4-2', front: 'How did the Nazis combine "Stick" (terror) and "Carrot" (propaganda/consent)?', backBullets: ['Stick: SS, Gestapo, civilian informers, Dachau camps. Carrot: Goebbels’ rallies/radio, Autobahn jobs, Strength Through Joy holidays.'] },
  { id: 'ighist-fc-4-2-3', subtopicId: 'ighist-4-2', front: 'Give TWO examples of German opposition inside Nazi Germany.', backBullets: ['Youth: Edelweiss Pirates & White Rose (Hans & Sophie Scholl). Churches/Military: Martin Niemöller, Dietrich Bonhoeffer & Stauffenberg’s July 1944 Bomb Plot.'] },
  { id: 'ighist-fc-4-2-4', subtopicId: 'ighist-4-2', front: 'How should you evaluate a "biased" propaganda source on Cambridge 0470 Paper 2?', backBullets: ['NEVER dismiss it as useless — explain why provenance limits factual reliability AND why it is highly valuable as evidence of aims, values, and persuasion methods.'] },
  { id: 'ighist-fc-4-2-5', subtopicId: 'ighist-4-2', front: 'What earns the 2 bonus evaluation marks on the Paper 2 final 12-mark question?', backBullets: ['Group sources into Support vs Challenge AND explicitly evaluate the reliability/provenance of at least two cited sources in context.'] },
];

export const IGCSE_HISTORY_CHEAT_SHEETS: CheatSheetItem[] = [
  {
    id: 'ighist-cs-1',
    slug: 'topic-1-versailles-league',
    title: '1. Peace Treaties & League of Nations Cheat Sheet',
    topicNumber: 1,
    topicName: 'Peace Treaties & The League of Nations',
    summary: 'Big Three aims, GARGLE Versailles terms, sister treaties, 1920s successes, and 1930s collapse.',
    accentColor: '#B45309',
    sections: [
      {
        heading: 'Versailles (GARGLE) & Sister Treaties',
        points: [
          'Big Three: Clemenceau (cripple Germany), Wilson (14 Points & League), Lloyd George (protect trade/empire, avoid communism)',
          'GARGLE: Guilt (Art. 231), Armed forces (100k, no tanks/Luftwaffe, Rhineland demilitarised), Reparations (£6.6bn), German territory (10%, Polish Corridor, Alsace-Lorraine, colonies), League, No Anschluss',
          'Sister Treaties: St Germain (Austria), Trianon (Hungary), Neuilly (Bulgaria), Sèvres → Lausanne (Turkey)',
        ],
      },
      {
        heading: 'League of Nations: 1920s vs 1930s',
        points: [
          'Built-in flaws: USA absent, no standing army, Assembly unanimity + Council vetoes',
          '1920s wins: Åland Islands, Upper Silesia, Bulgaria (1925), Nansen Refugees, ILO vs fails: Vilna (1920), Corfu (1923)',
          '1930s collapse: Great Depression → Manchuria (slow Lytton Report, Japan quit 1933) → Abyssinia (no oil ban, Suez open, Hoare-Laval Pact leak)',
        ],
      },
    ],
  },
  {
    id: 'ighist-cs-2',
    slug: 'topic-2-collapse-of-peace',
    title: '2. Collapse of International Peace (1933–39) Cheat Sheet',
    topicNumber: 2,
    topicName: 'Collapse of International Peace 1933–39',
    summary: 'Hitler’s aims, stepping stones 1933–38, appeasement debate, Munich, and the Nazi-Soviet Pact.',
    accentColor: '#B45309',
    sections: [
      {
        heading: 'Hitler’s Stepping Stones (1933–38)',
        points: [
          'Aims: Abolish Versailles, unite Volksdeutsche, conquer Lebensraum in East, destroy Communism',
          '1935: Saar Plebiscite (legal 90%), Conscription/Luftwaffe, Anglo-German Naval Agreement (35%)',
          '1936: Rhineland gamble (unopposed!) & Spanish Civil War (Condor Legion, Rome-Berlin Axis); 1938: Anschluss (Italy now ally)',
        ],
      },
      {
        heading: 'Appeasement, Munich & August 1939',
        points: [
          'Appeasement FOR: buy RAF/radar rearmament time, WWI horror, Versailles guilt; AGAINST: encouraged Hitler, lost Czech army, alienated Stalin',
          'Sept 1938 Munich: Sudetenland ceded (Czechs & USSR excluded) → Mar 1939 Prague invasion ended appeasement → Polish guarantee',
          'Aug 1939 Nazi-Soviet Pact: secret Polish partition; Hitler dodged two-front war, Stalin bought time & buffer → 1 Sep Poland invaded, 3 Sep WWII',
        ],
      },
    ],
  },
  {
    id: 'ighist-cs-3',
    slug: 'topic-3-cold-war',
    title: '3. The Cold War (1945–1975) Cheat Sheet',
    topicNumber: 3,
    topicName: 'The Cold War 1945–1975',
    summary: 'Yalta/Potsdam, Containment, Berlin Airlift, Cuban Missile Crisis, and Vietnam War.',
    accentColor: '#B45309',
    sections: [
      {
        heading: 'Origins & Division of Europe (1945–49)',
        points: [
          'Yalta (Feb 45) → Potsdam (Jul 45): Truman, US atomic test, Red Army in Eastern Europe broke Grand Alliance',
          'Salami Tactics & Iron Curtain (1946) → Truman Doctrine (Containment) & Marshall Plan ($13bn) (1947) ↔ Cominform (1947) & Comecon (1949)',
          'Berlin Blockade & Airlift (1948–49): 2.3m tonnes flown in → FRG/GDR split & NATO (1949) vs Warsaw Pact (1955)',
        ],
      },
      {
        heading: 'Global Crises: Cuba (1962) & Vietnam (1954–75)',
        points: [
          'Cuba: Castro (1959) → Bay of Pigs (1961) → Oct 1962 blockade → USSR withdrew Cuban missiles; US pledged no invasion + secret Turkey swap → Hotline & Test Ban',
          'Vietnam: Domino Theory & Gulf of Tonkin (1964) → Rolling Thunder/Agent Orange/My Lai vs Viet Cong guerrilla/tunnels → Tet Offensive (1968) broke US support → 1975 fall of Saigon',
        ],
      },
    ],
  },
  {
    id: 'ighist-cs-4',
    slug: 'topic-4-germany-source-skills',
    title: '4. Germany (1918–45) & Paper 2 Sources Cheat Sheet',
    topicNumber: 4,
    topicName: 'Germany Depth Study 1918–45 & Source Skills',
    summary: 'Weimar crises, Stresemann, Hitler’s rise and dictatorship, control, and Paper 2 evaluation.',
    accentColor: '#B45309',
    sections: [
      {
        heading: 'Weimar → Nazi Dictatorship (1918–45)',
        points: [
          'Weimar flaws: PR coalitions & Article 48; 1919–23 crises: Spartacists, Kapp Putsch, Ruhr/Hyperinflation, Munich Putsch',
          'Stresemann (1924–29): Rentenmark, Dawes/Young Plans, Locarno — "dancing on a volcano" until 1929 crash (6m jobless)',
          '1933–34 Dictatorship: Papen intrigue (30 Jan) → Reichstag Fire Decree → Enabling Act → Night of Long Knives → Führer (Aug 34)',
          'Control: SS/Gestapo/Dachau + Goebbels/Autobahns/KdF/Hitler Youth; Persecution: Nuremberg Laws (35), Kristallnacht (38), Holocaust',
        ],
      },
      {
        heading: 'Cambridge 0470 Paper 2 Source Golden Rules',
        points: [
          'Cartoon/Message: State BIG message first + 2 visual details + precise historical context',
          'Reliability/Utility: NEVER write "biased = useless"! Explain factual limits + utility for attitudes/propaganda + cross-reference',
          '12-mark essay: Group sources into Support vs Challenge + evaluate provenance of ≥2 sources for bonus marks',
        ],
      },
    ],
  },
];

export const IGCSE_HISTORY_EXAM_PRACTICE: ExamQuestionItem[] = [
  {
    id: 'ighist-ex-1-1',
    subtopicId: 'ighist-1-1',
    number: 1,
    stimulus: '[Cambridge IGCSE History 0470 Paper 1 Style] At the 1919 Paris Peace Conference, the Big Three clashed sharply over how harshly to treat defeated Germany.',
    parts: [
      {
        id: 'p1',
        label: '(a)',
        prompt: 'Describe TWO territorial or military restrictions imposed on Germany by the Treaty of Versailles.',
        kind: 'short-answer',
        marks: 2,
        rubric: {
          maxMarks: 2,
          modelAnswer: 'Germany’s army was capped at 100,000 volunteers with no tanks, submarines, or air force and the Rhineland was demilitarised; territorially, Germany lost Alsace-Lorraine to France, the Polish Corridor to Poland, and all overseas colonies.',
          markPoints: [
            { id: 'mp1', markDescription: 'Accurate military restriction (100,000 army / no tanks/air force / demilitarised Rhineland)', requiredKeywordGroups: [['100000', '100,000', 'rhineland', 'no air force', 'luftwaffe', 'no tanks', 'submarines', '6 battleships', 'conscription']] },
            { id: 'mp2', markDescription: 'Accurate territorial restriction (Alsace-Lorraine / Polish Corridor / colonies / Saar / no Anschluss)', requiredKeywordGroups: [['alsace', 'corridor', 'poland', 'colonies', 'saar', 'danzig', 'anschluss', '10%', '13%']] },
          ],
        },
      },
      {
        id: 'p2',
        label: '(b)',
        prompt: 'Explain why David Lloyd George sought a compromise between Clemenceau’s demands and Wilson’s idealism.',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'Lloyd George faced British voters demanding harsh punishment after war losses, yet he feared crippling Germany would destroy a major British trading partner and trigger a communist revolution in Germany like Russia in 1917; he also wanted German colonies and naval limits without handing France total European dominance.',
          markPoints: [
            { id: 'mp1', markDescription: 'Domestic voter pressure to punish Germany / protect empire & navy', requiredKeywordGroups: [['public', 'voter', 'punish', 'colonies', 'navy', 'empire']] },
            { id: 'mp2', markDescription: 'Wanted Germany strong enough as a British trading partner', requiredKeywordGroups: [['trade', 'trading', 'economy', 'export', 'recover']] },
            { id: 'mp3', markDescription: 'Feared a harsh treaty would spark communism or a future war of revenge', requiredKeywordGroups: [['communis', 'russia', 'revolution', 'revenge', 'future war']] },
          ],
        },
      },
    ],
  },
  {
    id: 'ighist-ex-1-2',
    subtopicId: 'ighist-1-2',
    number: 2,
    stimulus: '[Cambridge IGCSE History 0470 Paper 1 Style] Historians debate whether the League of Nations was doomed from birth in 1920 or destroyed mainly by the Great Depression of the 1930s.',
    parts: [
      {
        id: 'p1',
        label: '(a)',
        prompt: 'Which crisis in 1935–36 exposed Anglo-French duplicity via the leaked Hoare-Laval Pact?',
        kind: 'mcq',
        marks: 1,
        options: ['The Manchurian Crisis', 'The Abyssinian Crisis', 'The Vilna Dispute', 'The Upper Silesia Plebiscite'],
        correctIndex: 1,
      },
      {
        id: 'p2',
        label: '(b)',
        prompt: 'Explain how BOTH the 1929 Great Depression and Anglo-French self-interest caused the League to fail in the 1930s.',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'The Great Depression devastated world trade, encouraging militarist expansion by Japan in Manchuria and making Britain and France unwilling to sacrifice jobs via trade sanctions. Self-interest further crippled the League in Abyssinia because Britain and France omitted oil sanctions, kept the Suez Canal open, and hatched the Hoare-Laval Pact to keep Mussolini allied against Hitler.',
          markPoints: [
            { id: 'mp1', markDescription: 'Depression drove aggression (Japan/Manchuria) and made sanctions economically costly', requiredKeywordGroups: [['depression', 'trade', 'jobs', 'economy', 'manchuria', 'japan']] },
            { id: 'mp2', markDescription: 'Abyssinia failures: no oil sanction / Suez Canal open', requiredKeywordGroups: [['oil', 'coal', 'suez', 'abyssinia']] },
            { id: 'mp3', markDescription: 'Anglo-French self-interest / Hoare-Laval Pact to appease Mussolini against Hitler', requiredKeywordGroups: [['hoare', 'laval', 'mussolini', 'hitler', 'self-interest', 'stresa']] },
          ],
        },
      },
    ],
  },
  {
    id: 'ighist-ex-2-1',
    subtopicId: 'ighist-2-1',
    number: 3,
    stimulus: '[Cambridge IGCSE History 0470 Paper 1 Style] Between 1935 and 1938 Hitler reversed major military and territorial clauses of the Treaty of Versailles without firing a shot against Britain or France.',
    parts: [
      {
        id: 'p1',
        label: '(a)',
        prompt: 'Why was remilitarising the Rhineland in March 1936 such a pivotal triumph for Hitler?',
        kind: 'short-answer',
        marks: 2,
        rubric: {
          maxMarks: 2,
          modelAnswer: 'German forces were still outnumbered by France and had orders to retreat if opposed, so Anglo-French inaction boosted Hitler’s prestige over his generals, secured Germany’s western border, and convinced him the Allies would not stop future expansion.',
          markPoints: [
            { id: 'mp1', markDescription: 'Gamble succeeded despite military weakness / retreat orders', requiredKeywordGroups: [['gamble', 'retreat', 'weak', 'outnumber', 'unopposed', 'did nothing']] },
            { id: 'mp2', markDescription: 'Boosted Hitler’s confidence/prestige OR convinced him Allies would not resist', requiredKeywordGroups: [['confidence', 'prestige', 'generals', 'western border', 'encourag', 'would not stop']] },
          ],
        },
      },
      {
        id: 'p2',
        label: '(b)',
        prompt: 'Explain the strategic consequences of the March 1938 Anschluss with Austria for European peace.',
        kind: 'short-answer',
        marks: 2,
        rubric: {
          maxMarks: 2,
          modelAnswer: 'Anschluss added Austria’s 7 million people, gold reserves, iron ore, and 100,000 soldiers to Nazi Germany, broke Versailles Article 80 unopposed, and left democratic Czechoslovakia surrounded on three sides.',
          markPoints: [
            { id: 'mp1', markDescription: 'Added Austrian manpower/resources/army/gold to Germany', requiredKeywordGroups: [['resource', 'gold', 'iron', 'soldiers', 'army', 'population', '7 million', 'stronger']] },
            { id: 'mp2', markDescription: 'Surrounded/encircled Czechoslovakia on three sides', requiredKeywordGroups: [['czechoslovakia', 'czech', 'surround', 'encircl', 'sudetenland']] },
          ],
        },
      },
    ],
  },
  {
    id: 'ighist-ex-2-2',
    subtopicId: 'ighist-2-2',
    number: 4,
    stimulus: '[Cambridge IGCSE History 0470 Paper 1 Style] "The Nazi-Soviet Pact of August 1939 was more responsible than British appeasement for causing the Second World War."',
    parts: [
      {
        id: 'p1',
        label: '(a)',
        prompt: 'What happened on 15 March 1939 that destroyed the credibility of the Munich Agreement?',
        kind: 'mcq',
        marks: 1,
        options: ['Hitler invaded Austria', 'Hitler occupied the rest of non-German Czechoslovakia (Prague)', 'Japan invaded Manchuria', 'Stalin signed the Locarno Pact'],
        correctIndex: 1,
      },
      {
        id: 'p2',
        label: '(b)',
        prompt: 'Weigh BOTH sides of the claim above: explain how appeasement contributed to war AND how the Nazi-Soviet Pact acted as the immediate trigger.',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'Appeasement encouraged Hitler’s aggression, handed him Czechoslovakia’s resources at Munich, and alienated Stalin by excluding the USSR. However, the Nazi-Soviet Pact was the immediate trigger because secretly dividing Poland removed Hitler’s fear of a two-front war, directly prompting the 1 September 1939 invasion.',
          markPoints: [
            { id: 'mp1', markDescription: 'Appeasement encouraged Hitler / weakened Allies at Munich / alienated Stalin', requiredKeywordGroups: [['appeasement', 'munich'], ['encourag', 'czech', 'stalin', 'alienat', 'stronger']] },
            { id: 'mp2', markDescription: 'Nazi-Soviet Pact prevented a two-front war / secretly partitioned Poland', requiredKeywordGroups: [['two-front', 'two front', 'poland', 'divide', 'partition']] },
            { id: 'mp3', markDescription: 'Direct link to immediate trigger / Sept 1939 invasion', requiredKeywordGroups: [['trigger', 'catalyst', 'september', '1939', 'invad', 'immediate']] },
          ],
        },
      },
    ],
  },
  {
    id: 'ighist-ex-3-1',
    subtopicId: 'ighist-3-1',
    number: 5,
    stimulus: '[Cambridge IGCSE History 0470 Paper 1 Style] Between February 1945 and late 1947, wartime allies USA and USSR split Europe into two hostile ideological blocs.',
    parts: [
      {
        id: 'p1',
        label: '(a)',
        prompt: 'Describe TWO reasons why superpower relations deteriorated between the Yalta and Potsdam conferences in 1945.',
        kind: 'short-answer',
        marks: 2,
        rubric: {
          maxMarks: 2,
          modelAnswer: 'Hardline anti-communist Truman replaced Roosevelt, the USA secretly tested the atomic bomb without informing Stalin openly, Germany had surrendered removing their common enemy, and the Red Army had installed a pro-Soviet government in Poland.',
          markPoints: [
            { id: 'mp1', markDescription: 'Leadership change (Truman replaced Roosevelt) OR US atomic bomb test', requiredKeywordGroups: [['truman', 'roosevelt', 'atomic', 'nuclear', 'bomb']] },
            { id: 'mp2', markDescription: 'Red Army occupying Eastern Europe/Poland OR Germany’s defeat removing common enemy', requiredKeywordGroups: [['poland', 'eastern europe', 'red army', 'surrender', 'common enemy', 'reparations']] },
          ],
        },
      },
      {
        id: 'p2',
        label: '(b)',
        prompt: 'Explain how the Truman Doctrine and Marshall Plan together enacted US containment in 1947.',
        kind: 'short-answer',
        marks: 2,
        rubric: {
          maxMarks: 2,
          modelAnswer: 'The Truman Doctrine committed US military and financial aid to stop communism spreading to Greece and Turkey, while the $13 billion Marshall Plan rebuilt Western European economies to eliminate the poverty that attracted voters to communist parties.',
          markPoints: [
            { id: 'mp1', markDescription: 'Truman Doctrine: military/political aid to stop communism spreading (Greece/Turkey)', requiredKeywordGroups: [['truman'], ['greece', 'turkey', 'military', 'contain', 'spread']] },
            { id: 'mp2', markDescription: 'Marshall Plan: $13bn economic aid removing poverty in Western Europe', requiredKeywordGroups: [['marshall'], ['13', 'economic', 'poverty', 'rebuild', 'western europe']] },
          ],
        },
      },
    ],
  },
  {
    id: 'ighist-ex-3-2',
    subtopicId: 'ighist-3-2',
    number: 6,
    stimulus: '[Cambridge IGCSE History 0470 Paper 1 Style] During the Cold War, the USA successfully contained Soviet pressure in Berlin (1948–49) and Cuba (1962), yet suffered defeat in Vietnam (1975).',
    parts: [
      {
        id: 'p1',
        label: '(a)',
        prompt: 'Why did President Kennedy choose a naval blockade ("quarantine") rather than an immediate airstrike in October 1962?',
        kind: 'short-answer',
        marks: 2,
        rubric: {
          maxMarks: 2,
          modelAnswer: 'An airstrike or invasion risked killing Soviet personnel and provoking immediate nuclear retaliation, whereas a naval quarantine stopped further missile deliveries while buying crucial time for diplomacy with Khrushchev.',
          markPoints: [
            { id: 'mp1', markDescription: 'Avoided immediate nuclear war / killing Soviet troops / escalation', requiredKeywordGroups: [['nuclear', 'war', 'retaliat', 'escalat', 'soviet troops', 'world war']] },
            { id: 'mp2', markDescription: 'Bought time for diplomacy while halting further Soviet ships', requiredKeywordGroups: [['time', 'diplomac', 'negotiat', 'ships', 'halt', 'stop']] },
          ],
        },
      },
      {
        id: 'p2',
        label: '(b)',
        prompt: 'Explain TWO distinct reasons why US containment failed in Vietnam despite overwhelming American firepower.',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'Viet Cong fighters used mobile guerrilla tactics, jungle tunnels, and the Ho Chi Minh Trail backed by strong Vietnamese nationalism. Meanwhile, US Search and Destroy raids and Agent Orange alienated civilians, and televised images of the 1968 Tet Offensive and My Lai destroyed domestic American support.',
          markPoints: [
            { id: 'mp1', markDescription: 'Viet Cong guerrilla tactics / tunnels / Ho Chi Minh Trail / nationalism', requiredKeywordGroups: [['guerrilla', 'tunnel', 'trail', 'nationalis', 'ho chi minh']] },
            { id: 'mp2', markDescription: 'US tactics (Search & Destroy, napalm, Agent Orange, My Lai) alienated civilians', requiredKeywordGroups: [['search and destroy', 'agent orange', 'napalm', 'my lai', 'alienat', 'villager', 'peasant']] },
            { id: 'mp3', markDescription: 'Media coverage / Tet Offensive / domestic anti-war protests', requiredKeywordGroups: [['tet', 'media', 'tv', 'television', 'protest', 'public opinion', 'anti-war']] },
          ],
        },
      },
    ],
  },
  {
    id: 'ighist-ex-4-1',
    subtopicId: 'ighist-4-1',
    number: 7,
    stimulus: '[Cambridge IGCSE History 0470 Paper 1 Depth Study B Style] In May 1928 the Nazis won just 12 Reichstag seats; less than five years later Adolf Hitler was appointed Chancellor.',
    parts: [
      {
        id: 'p1',
        label: '(a)',
        prompt: 'What was the peak Nazi share of Reichstag seats in free Weimar elections (July 1932)?',
        kind: 'mcq',
        marks: 1,
        options: ['12 seats (2.6%)', '230 seats (37.3%)', '444 seats (75%)', '510 seats (90%)'],
        correctIndex: 1,
      },
      {
        id: 'p2',
        label: '(b)',
        prompt: 'Explain how the Great Depression AND Nazi propaganda/political scheming combined to bring Hitler to power in January 1933.',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'The 1929 Wall Street Crash triggered recall of US loans and 6 million unemployed, discrediting moderate Weimar parties. Goebbels’ targeted propaganda ("Work and Bread") and anti-communist appeal made the Nazis the largest party, and even after their vote dipped in Nov 1932, Franz von Papen persuaded President Hindenburg to appoint Hitler Chancellor thinking elites could control him.',
          markPoints: [
            { id: 'mp1', markDescription: 'Great Depression: US loans recalled / 6 million unemployed / Weimar discredited', requiredKeywordGroups: [['depression', 'crash', 'unemploy', '6 million', 'loans']] },
            { id: 'mp2', markDescription: 'Nazi propaganda ("Work and Bread") / Goebbels / fear of communism / SA', requiredKeywordGroups: [['propaganda', 'goebbels', 'work and bread', 'communis', 'sa']] },
            { id: 'mp3', markDescription: 'Elite intrigue: Papen & Hindenburg miscalculated they could control Hitler', requiredKeywordGroups: [['papen', 'hindenburg', 'control', 'intrigue', 'appoint']] },
          ],
        },
      },
    ],
  },
  {
    id: 'ighist-ex-4-2',
    subtopicId: 'ighist-4-2',
    number: 8,
    stimulus: '[Cambridge IGCSE History 0470 Paper 2 Source Style] Source A is a March 1933 Nazi Ministry of Propaganda poster showing joyful German workers marching toward factories with the slogan "Work and Bread under Hitler’s Leadership".',
    parts: [
      {
        id: 'p1',
        label: '(a)',
        prompt: 'Explain why Source A was published in March 1933 (purpose in historical context).',
        kind: 'short-answer',
        marks: 2,
        rubric: {
          maxMarks: 2,
          modelAnswer: 'Published right around the March 1933 Reichstag election and consolidation of power, Goebbels’ poster aimed to persuade unemployed and working-class Germans to vote Nazi and accept the new regime by promising rapid job creation and economic revival.',
          markPoints: [
            { id: 'mp1', markDescription: 'Identifies March 1933 election / consolidation context + Depression unemployment', requiredKeywordGroups: [['1933', 'election', 'consolida', 'unemploy', 'depression']] },
            { id: 'mp2', markDescription: 'States persuasive purpose on audience (win worker votes/support via job promises)', requiredKeywordGroups: [['persuade', 'convince', 'win support', 'vote', 'loyalty', 'jobs', 'workers']] },
          ],
        },
      },
      {
        id: 'p2',
        label: '(b)',
        prompt: 'How useful is Source A to a historian studying life in Nazi Germany? Give a balanced Paper 2 evaluation.',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'Source A is unreliable as objective proof of workers’ real living standards because its provenance as state propaganda under Goebbels deliberately conceals banned trade unions, wage freezes, and Gestapo repression. However, it is very useful as primary evidence of Nazi propaganda techniques and the regime’s urgent need to win working-class consent through employment promises.',
          markPoints: [
            { id: 'mp1', markDescription: 'Factual limitation linked to provenance (Nazi state propaganda / one-sided)', requiredKeywordGroups: [['provenance', 'propaganda', 'goebbels', 'unreliable', 'one-sided', 'exaggerat']] },
            { id: 'mp2', markDescription: 'Contextual cross-check of omitted reality (unions banned, low wages, terror, hidden jobless)', requiredKeywordGroups: [['union', 'wage', 'terror', 'gestapo', 'camp', 'hidden', 'jew', 'women']] },
            { id: 'mp3', markDescription: 'Positive utility (reveals Nazi propaganda aims, slogans, and targeting of workers)', requiredKeywordGroups: [['useful', 'valuable', 'reveal', 'shows how', 'aim', 'technique', 'consent', 'support']] },
          ],
        },
      },
    ],
  },
];

export const IGCSE_HISTORY_PAST_PAPERS: PastPaperDoc[] = [];

export const IGCSE_HISTORY_KEY_TERMS: KeyTermEntry[] = [
  { id: 'ighist-kt-1', term: 'Diktat', definition: 'German term condemning the 1919 Treaty of Versailles as an imposed, non-negotiated peace.', topicNumber: 1, subtopicId: 'ighist-1-1', subtopicCode: '1.1' },
  { id: 'ighist-kt-2', term: 'Article 231 (War Guilt)', definition: 'Versailles clause forcing Germany to accept sole responsibility for causing WWI, justifying £6.6bn reparations.', topicNumber: 1, subtopicId: 'ighist-1-1', subtopicCode: '1.1' },
  { id: 'ighist-kt-3', term: 'Collective Security', definition: 'League of Nations principle that members act together to deter or punish international aggression.', topicNumber: 1, subtopicId: 'ighist-1-2', subtopicCode: '1.2' },
  { id: 'ighist-kt-4', term: 'Hoare-Laval Pact', definition: 'Secret December 1935 Anglo-French scheme offering Mussolini two-thirds of Abyssinia, destroying the League’s credibility.', topicNumber: 1, subtopicId: 'ighist-1-2', subtopicCode: '1.2' },
  { id: 'ighist-kt-5', term: 'Lebensraum', definition: 'Nazi expansionist goal of conquering "living space" and resources across Eastern Europe and the USSR.', topicNumber: 2, subtopicId: 'ighist-2-1', subtopicCode: '2.1' },
  { id: 'ighist-kt-6', term: 'Anschluss', definition: 'Political union of Germany and Austria forbidden by Versailles and executed by Hitler in March 1938.', topicNumber: 2, subtopicId: 'ighist-2-1', subtopicCode: '2.1' },
  { id: 'ighist-kt-7', term: 'Appeasement', definition: '1930s Anglo-French policy of granting concessions to Hitler to preserve peace and buy rearmament time.', topicNumber: 2, subtopicId: 'ighist-2-2', subtopicCode: '2.2' },
  { id: 'ighist-kt-8', term: 'Nazi-Soviet Pact', definition: 'August 1939 Molotov-Ribbentrop non-aggression treaty with a secret protocol partitioning Poland.', topicNumber: 2, subtopicId: 'ighist-2-2', subtopicCode: '2.2' },
  { id: 'ighist-kt-9', term: 'Containment', definition: 'US Cold War doctrine launched in 1947 to stop communism spreading into new nations via political, military, and economic aid.', topicNumber: 3, subtopicId: 'ighist-3-1', subtopicCode: '3.1' },
  { id: 'ighist-kt-10', term: 'Marshall Plan', definition: '$13 billion US European Recovery Program (1947) rebuilding Western European economies to resist communism.', topicNumber: 3, subtopicId: 'ighist-3-1', subtopicCode: '3.1' },
  { id: 'ighist-kt-11', term: 'Brinkmanship', definition: 'Pushing a Cold War confrontation to the edge of nuclear war to force the rival superpower to back down.', topicNumber: 3, subtopicId: 'ighist-3-2', subtopicCode: '3.2' },
  { id: 'ighist-kt-12', term: 'Domino Theory', definition: 'US belief that a communist takeover in South Vietnam would cause neighbouring Asian states to fall sequentially.', topicNumber: 3, subtopicId: 'ighist-3-2', subtopicCode: '3.2' },
  { id: 'ighist-kt-13', term: 'Article 48', definition: 'Weimar Constitution emergency clause enabling presidential rule by decree without parliamentary consent.', topicNumber: 4, subtopicId: 'ighist-4-1', subtopicCode: '4.1' },
  { id: 'ighist-kt-14', term: 'Dawes Plan', definition: '1924 US loan and reparations restructuring deal that powered Weimar’s temporary economic recovery.', topicNumber: 4, subtopicId: 'ighist-4-1', subtopicCode: '4.1' },
  { id: 'ighist-kt-15', term: 'Enabling Act', definition: 'March 1933 law empowering Hitler’s government to pass laws without the Reichstag, establishing dictatorship.', topicNumber: 4, subtopicId: 'ighist-4-2', subtopicCode: '4.2' },
  { id: 'ighist-kt-16', term: 'Provenance', definition: 'Origin, author, date, nature, and intended purpose of a source evaluated on Cambridge 0470 Paper 2.', topicNumber: 4, subtopicId: 'ighist-4-2', subtopicCode: '4.2' },
];
