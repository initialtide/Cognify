import {
  ExamQuestionItem,
  FlashcardItem,
  NoteLesson,
  QuizQuestion,
  TopicDefinition,
} from '../../../types/curriculum';

export const ALEVEL_CS_UNITS_5_6_TOPICS: TopicDefinition[] = [
  {
    number: 5,
    title: 'Security, Cryptography & Relational Databases (AS + A2)',
    subtopics: [
      {
        id: 'al-cs-5-1',
        code: '5.1',
        slug: '5.1-security-cryptography-digital-signatures-tls-quantum',
        title: 'Security, Integrity, Digital Signatures, Certificates, TLS/SSL & Quantum Cryptography',
        readingMinutes: 13,
        hasDeepContent: true,
      },
      {
        id: 'al-cs-5-2',
        code: '5.2',
        slug: '5.2-relational-databases-erd-normalisation-3nf-sql-ddl-dml',
        title: 'Relational Databases, ERDs, Normalisation (1NF → 2NF → 3NF) & SQL (DDL & DML)',
        readingMinutes: 13,
        hasDeepContent: true,
      },
    ],
  },
  {
    number: 6,
    title: 'Software Development & Algorithm Complexity (AS + A2)',
    subtopics: [
      {
        id: 'al-cs-6-1',
        code: '6.1',
        slug: '6.1-sdlc-waterfall-iterative-rad-agile-testing-maintenance',
        title: 'SDLC Models (Waterfall, Iterative, RAD, Agile/XP), Testing & Software Maintenance',
        readingMinutes: 12,
        hasDeepContent: true,
      },
      {
        id: 'al-cs-6-2',
        code: '6.2',
        slug: '6.2-computational-thinking-structure-charts-big-o-complexity',
        title: 'Computational Thinking, Structure Charts, State-Transition Diagrams & Big-O Complexity',
        readingMinutes: 12,
        hasDeepContent: true,
      },
    ],
  },
];

export const ALEVEL_CS_UNITS_5_6_NOTES: Record<string, NoteLesson> = {
  'al-cs-5-1': {
    subtopicId: 'al-cs-5-1',
    subtopicCode: '5.1',
    subtopicTitle: 'Security, Integrity, Digital Signatures, Certificates, TLS/SSL & Quantum Cryptography',
    readingMinutes: 13,
    videoTitle: '48. OCR A Level (H446) SLR9 - 1.3 Symmetric & asymmetric encryption',
    youtubeId: 'UYqMu0PqeCE',
    videoChannel: "Craig'n'Dave",
    videoDuration: '8:14',
    courseMatchSummary: '3 of 3 sections match Cambridge International A-Level Computer Science (9618 Paper 1 & 3)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Data Security, Privacy, Integrity & Ethics/Licensing', cardId: 'al-cs-5-1-c1' },
      { time: '2:50', seconds: 170, label: 'Digital Signatures (Hashing + Private Key) & CA Digital Certificates', cardId: 'al-cs-5-1-c2' },
      { time: '5:35', seconds: 335, label: 'TLS Handshake (Handshake + Record Layers) & Quantum Cryptography (QKD)', cardId: 'al-cs-5-1-c3' },
    ],
    cards: [
      {
        id: 'al-cs-5-1-c1',
        title: 'Data Security vs Privacy vs Integrity & Software Licensing',
        summary: 'CIE 9618 rigorously separates Security (protecting against loss/unauthorised access), Privacy (protecting personal data confidentiality), and Integrity (accuracy/consistency of stored data).',
        bullets: [
          '**3 Pillars** — **Data Security** (backups, firewalls, access rights, encryption protecting availability & confidentiality); **Data Privacy** (GDPR/legal controls ensuring personal data is collected/shared only with consent); **Data Integrity** (validation, verification, parity/checksums, referential integrity preventing corruption).',
          '**Software Licences & Ethics** — **Commercial / Proprietary** (closed source, paid licence), **Open Source** (source code openly inspectable/modifiable under GPL/MIT), **Freeware** (free binary, closed source), **Shareware** (time/feature-limited trial). Computing professionals follow codes of ethics (ACM / IEEE / BCS) covering public safety, privacy, and honest competence.',
        ],
        subsections: [
          {
            heading: 'Security vs Integrity Exam Contrast',
            bullets: [
              '**Firewalls & encryption** uphold **Security**; **range checks & foreign keys** uphold **Integrity**!',
            ],
            exampleHeading: 'Worked distinction: Hospital patient blood-type table',
            examples: [
              'Preventing outsiders from viewing records = **Security/Privacy**; ensuring blood type can only be `A/B/AB/O` = **Data Integrity**.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'data integrity', definition: 'Accuracy, completeness, and consistency of data throughout its lifecycle enforced by validation, verification, and relational constraints.' },
          { term: 'open-source licence', definition: 'Software licence releasing readable source code allowing users to study, modify, and redistribute improvements.' },
        ],
      },
      {
        id: 'al-cs-5-1-c2',
        title: 'Digital Signatures & CA-Signed Digital Certificates',
        summary: 'Digital signatures prove message authenticity, integrity, and non-repudiation by encrypting a cryptographic hash digest with the SENDER’s Private Key.',
        bullets: [
          '**Creating a Digital Signature (Sender Alice)** — (1) Pass message through a one-way **cryptographic hash function (SHA-256)** to produce a fixed-length **digest**; (2) Encrypt that digest using **Alice’s PRIVATE Key** → this encrypted digest IS the **Digital Signature**; (3) Send `Message + Signature` to Bob.',
          '**Verifying a Digital Signature (Receiver Bob)** — (1) Bob decrypts the signature using **Alice’s PUBLIC Key** to recover Digest 1; (2) Bob independently hashes the received message using SHA-256 to compute Digest 2; (3) If `Digest 1 == Digest 2`, Bob has mathematical proof of **Authentication** (only Alice holds her Private Key), **Integrity** (zero tampering in transit), and **Non-repudiation** (Alice cannot deny sending it)!',
          '**Digital Certificate** — issued by a trusted **Certificate Authority (CA)** binding an organisation’s domain/identity to its **Public Key**, expiry date, and CA’s own digital signature so browsers trust the server’s public key.',
        ],
        subsections: [
          {
            heading: 'Confidentiality vs Digital Signature Key Direction!',
            bullets: [
              '**Confidentiality (Encryption)**: Encrypt with **Recipient’s Public Key** → Decrypt with **Recipient’s Private Key**.',
              '**Authentication (Digital Signature)**: Sign hash with **Sender’s Private Key** → Verify with **Sender’s Public Key**!',
            ],
            exampleHeading: 'Worked tamper trace: Attacker changes `$100` to `$900` in signed invoice',
            examples: [
              'Receiver’s SHA-256 hash of `$900` (`4F9A...`) fails to match decrypted signature digest (`B21C...`) → forged invoice rejected instantly!',
            ],
          },
        ],
        glossaryPills: [
          { term: 'digital signature', definition: 'Message hash digest encrypted with the sender’s private key providing authentication, integrity, and non-repudiation.' },
          { term: 'Certificate Authority (CA)', definition: 'Trusted third-party organisation verifying entity identities and digitally signing X.509 Digital Certificates.' },
        ],
      },
      {
        id: 'al-cs-5-1-c3',
        title: 'TLS/SSL Protocol & Quantum Cryptography (QKD)',
        summary: 'TLS secures Internet sessions via an asymmetric Handshake Layer establishing a symmetric Record Layer session key; Quantum Key Distribution exploits photon polarisation to detect eavesdropping automatically.',
        bullets: [
          '**TLS (Transport Layer Security)** — operates in two sub-layers: (1) **Handshake Protocol** authenticates the server via its CA **Digital Certificate** and negotiates a shared **symmetric session key** (using asymmetric key exchange); (2) **Record Protocol** encrypts bulk application traffic fast using that symmetric key + MAC integrity tags.',
          '**Quantum Cryptography (QKD — e.g. BB84)** — transmits key bits encoded as **polarisation states of single photons** across fibre-optic links. Under the **Heisenberg uncertainty / no-cloning principle**, any eavesdropper measuring photons **inevitably alters their quantum states**, immediately alerting sender and receiver via rising error rates!',
          '**Limitations of QKD** — requires specialised expensive fibre-optic hardware, limited direct transmission distance (`~100–300 km` without trusted relays), and cannot broadcast to multiple recipients simultaneously.',
        ],
        subsections: [
          {
            heading: 'Why TLS Switches to Symmetric After the Handshake',
            bullets: [
              '**Best of both worlds** — asymmetric solves safe key exchange once during setup (`~5 ms`), then symmetric AES encrypts gigabytes at wire speed!',
            ],
            exampleHeading: 'Worked comparison: Classical RSA vs Quantum QKD',
            examples: [
              'RSA relies on **computational hardness** (factoring large primes — vulnerable to future Shor’s quantum algorithm); QKD relies on **laws of quantum physics** (eavesdropping disturbs photons!).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'TLS (Transport Layer Security)', definition: 'Cryptographic protocol using a Handshake Layer (certificates & key exchange) and Record Layer (fast symmetric encryption) to secure HTTPS.' },
          { term: 'quantum cryptography', definition: 'Key-exchange method encoding bits in photon polarisation states so any eavesdropper measurably disturbs the photons and reveals interception.' },
        ],
        memoryAid: 'Digital Signature = Hash + SENDER Private Key (proves Auth + Integrity + Non-Repudiation). QKD = Eavesdropping disturbs photon polarisation!',
        commonMistake: 'Saying a Digital Signature encrypts the ENTIRE message with the sender’s private key — asymmetric encryption is too slow for huge files, so a Digital Signature hashes the message first and encrypts ONLY the short digest!',
      },
    ],
    keyTerms: [
      { term: 'Digital Signature', definition: 'Cryptographic hash digest encrypted with the sender’s private key proving authenticity and integrity.' },
      { term: 'Digital Certificate & CA', definition: 'CA-signed credential binding an organisation’s identity and domain to its authentic Public Key.' },
      { term: 'TLS Handshake & Record Layers', definition: 'Certificate authentication + session key negotiation followed by fast symmetric data encryption.' },
      { term: 'Quantum Cryptography (QKD)', definition: 'Photon-polarisation key exchange where interception physically alters quantum states and alerts endpoints.' },
    ],
    checklistPoints: [
      'Distinguish Data Security, Data Privacy, and Data Integrity with concrete controls',
      'Trace creating and verifying a Digital Signature (hashing + sender keys) and explain CA Digital Certificates',
      'Explain the TLS Handshake/Record layers and evaluate Quantum Cryptography (QKD) benefits and limits',
    ],
  },

  'al-cs-5-2': {
    subtopicId: 'al-cs-5-2',
    subtopicCode: '5.2',
    subtopicTitle: 'Relational Databases, ERDs, Normalisation (1NF → 2NF → 3NF) & SQL (DDL & DML)',
    readingMinutes: 13,
    videoTitle: '52. OCR A Level (H446) SLR10 - 1.3 Normalisation to 3NF',
    youtubeId: 'UY3zc9G_YZo',
    videoChannel: "Craig'n'Dave",
    videoDuration: '8:26',
    courseMatchSummary: '3 of 3 sections match Cambridge International AS & A-Level Computer Science (9618 Paper 1)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Flat-File Flaws vs Relational DBMS, Keys, Referential Integrity & ERDs', cardId: 'al-cs-5-2-c1' },
      { time: '2:55', seconds: 175, label: 'Normalisation Step-by-Step: 1NF → 2NF → 3NF', cardId: 'al-cs-5-2-c2' },
      { time: '5:45', seconds: 345, label: 'SQL DDL (CREATE/ALTER) & DML (SELECT JOIN, INSERT, UPDATE, DELETE)', cardId: 'al-cs-5-2-c3' },
    ],
    cards: [
      {
        id: 'al-cs-5-2-c1',
        title: 'Relational Databases, Keys, Referential Integrity & ERDs',
        summary: 'Relational databases eliminate flat-file redundancy and update/delete anomalies by linking normalised entity tables with Primary Keys and Foreign Keys enforced by a DBMS.',
        diagram: 'database-normalisation-erd',
        bullets: [
          '**Why Relational beats Flat-File** — eliminates **data redundancy** (duplicate customer addresses), **update anomalies** (editing one row leaves stale copies), **insertion anomalies**, and **deletion anomalies**; DBMS enforces **referential integrity** (no Foreign Key can reference a non-existent Primary Key).',
          '**Key Types** — **Primary Key (PK)** (unique non-null row ID), **Candidate Key** (any minimal attribute set eligible as PK), **Composite Key** (PK made of 2+ attributes combined, e.g. `(StudentID, CourseID)`), **Foreign Key (FK)** (attribute in child table matching PK in parent table), **Secondary Key** (indexed attribute speeding searches e.g. `Surname`).',
          '**Entity–Relationship Diagrams (ERD)** — relationships are `1:1`, `1:M` (crow’s foot on Many side), or `M:N` (**MUST be resolved** into two `1:M` links using an intermediate **Link / Junction table**!).',
        ],
        subsections: [
          {
            heading: 'Resolving Many-to-Many (`M:N`) Relationships',
            bullets: [
              '**`Student M ↔ N Course`** resolves cleanly via `Enrolment` holding composite key `(StudentID [FK], CourseID [FK])`!',
            ],
            exampleHeading: 'Worked DBMS feature list (Paper 1)',
            examples: [
              'Data dictionary (metadata), access rights/views, query processor, developer interface, automated backup/rollback.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'referential integrity', definition: 'DBMS constraint guaranteeing every non-null Foreign Key matches an existing Primary Key in the referenced parent table.' },
          { term: 'composite primary key', definition: 'Primary key formed by combining two or more fields together to uniquely identify each record in a link table.' },
        ],
      },
      {
        id: 'al-cs-5-2-c2',
        title: 'Normalisation: 1NF → 2NF → 3NF',
        summary: 'Normalisation systematically removes repeating groups (1NF), partial key dependencies (2NF), and transitive non-key dependencies (3NF) so every attribute depends on "the key, the whole key, and nothing but the key".',
        bullets: [
          '**1NF (First Normal Form)** — every field holds **atomic (single indivisible)** values, **zero repeating groups/columns**, and every table has a defined **Primary Key**.',
          '**2NF (Second Normal Form)** — already in 1NF **AND zero partial dependencies**: every non-key attribute MUST depend on the **ENTIRE composite primary key** (not just one half of it!). (Note: a 1NF table with a single-attribute PK is automatically in 2NF!)',
          '**3NF (Third Normal Form)** — already in 2NF **AND zero transitive (non-key → non-key) dependencies**: no non-key attribute may determine another non-key attribute (e.g. `StudentID → TutorID → TutorRoom` splits `Tutor(TutorID [PK], TutorRoom)` into its own table!).',
        ],
        subsections: [
          {
            heading: 'Worked 1NF → 2NF → 3NF Transformation',
            bullets: [
              '**Unnormalised**: `Order(OrderID, CustID, CustCity, ProductID, ProductName, Qty)` with composite PK `(OrderID, ProductID)`.',
            ],
            exampleHeading: 'Step-by-step normalisation to 3NF',
            examples: [
              '2NF splits partial deps: `OrderLine(OrderID, ProductID, Qty)`, `Product(ProductID, ProductName)`, `Order(OrderID, CustID, CustCity)`.',
              '3NF removes transitive `CustID → CustCity`: `Order(OrderID, CustID [FK])` + `Customer(CustID [PK], CustCity)` ✓.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'partial dependency', definition: '2NF violation where a non-key field depends on only part of a composite primary key.' },
          { term: 'transitive dependency', definition: '3NF violation where a non-key field depends indirectly on the primary key via another non-key field.' },
        ],
      },
      {
        id: 'al-cs-5-2-c3',
        title: 'SQL Data Definition (DDL) & Data Manipulation (DML)',
        summary: 'CIE 9618 tests both DDL (`CREATE DATABASE`, `CREATE TABLE`, `PRIMARY KEY`, `FOREIGN KEY`, `ALTER TABLE`) and multi-table DML (`INNER JOIN`, `GROUP BY`, `INSERT`, `UPDATE`, `DELETE`).',
        bullets: [
          '**DDL (Schema Definition)** — `CREATE TABLE Course (CourseID VARCHAR(6) PRIMARY KEY, Title VARCHAR(40) NOT NULL, Credits INT);` and `ALTER TABLE Student ADD Email VARCHAR(60);` plus `FOREIGN KEY (CourseID) REFERENCES Course(CourseID)`.',
          '**DML Multi-Table `INNER JOIN` & `GROUP BY`** — joins linked tables on `PK = FK` (`SELECT Student.FullName, Course.Title FROM Student INNER JOIN Enrolment ON Student.StudentID = Enrolment.StudentID INNER JOIN Course ON Enrolment.CourseID = Course.CourseID;`) and aggregates by group (`GROUP BY DepartmentID`).',
          "**DML Modifying Rows** — `INSERT INTO Course VALUES ('CS9618', 'Computer Science', 4);`, `UPDATE Course SET Credits = 5 WHERE CourseID = 'CS9618';`, `DELETE FROM Course WHERE CourseID = 'OLD01';`.",
        ],
        subsections: [
          {
            heading: 'Danger of Omitting `WHERE` in `UPDATE` / `DELETE`',
            bullets: [
              '**Always specify `WHERE`** — running `DELETE FROM Student;` without `WHERE` wipes EVERY row in the table!',
            ],
            exampleHeading: 'Worked aggregate `GROUP BY` query',
            examples: [
              '`SELECT DepartmentID, COUNT(CourseID) FROM Course GROUP BY DepartmentID ORDER BY DepartmentID ASC;`',
            ],
          },
        ],
        glossaryPills: [
          { term: 'SQL DDL vs DML', definition: 'Data Definition Language (`CREATE`/`ALTER` schemas) vs Data Manipulation Language (`SELECT`/`INSERT`/`UPDATE`/`DELETE` records).' },
        ],
        memoryAid: '3NF Oath: "Every non-key field depends on the KEY (1NF), the WHOLE key (2NF), and NOTHING BUT the key (3NF)!"',
        commonMistake: 'Forgetting to resolve an `M:N` relationship with a Link Table in ERDs — relational databases CANNOT directly model `M:N` without a junction table holding two Foreign Keys!',
      },
    ],
    keyTerms: [
      { term: 'Referential Integrity', definition: 'DBMS rule ensuring every Foreign Key corresponds to an existing Primary Key.' },
      { term: '1NF / 2NF / 3NF', definition: 'Atomic fields/PK (1NF), no partial composite-key dependencies (2NF), no non-key transitive dependencies (3NF).' },
      { term: 'SQL DDL (CREATE / ALTER)', definition: 'SQL statements defining and modifying database schemas, data types, and key constraints.' },
      { term: 'SQL DML (JOIN / INSERT / UPDATE)', definition: 'SQL statements querying across linked tables and inserting, updating, or deleting rows.' },
    ],
    checklistPoints: [
      'Draw 3NF Entity–Relationship Diagrams resolving M:N relationships with link tables and PK/FK constraints',
      'Normalise unnormalised tables step-by-step through 1NF, 2NF, and 3NF justifying every split',
      'Write valid CIE 9618 SQL DDL (`CREATE TABLE`, `FOREIGN KEY`) and multi-table DML (`INNER JOIN`, `GROUP BY`, `UPDATE`)',
    ],
  },

  'al-cs-6-1': {
    subtopicId: 'al-cs-6-1',
    subtopicCode: '6.1',
    subtopicTitle: 'SDLC Models (Waterfall, Iterative, RAD, Agile/XP), Testing & Software Maintenance',
    readingMinutes: 12,
    videoTitle: '27. OCR A Level (H046-H446) SLR6 - 1.2 Development methodologies part 1',
    youtubeId: 'qEmrXu8d1ys',
    videoChannel: "Craig'n'Dave",
    videoDuration: '8:02',
    courseMatchSummary: '3 of 3 sections match Cambridge International AS & A-Level Computer Science (9618 Paper 2 & 3)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'SDLC Models: Waterfall vs Iterative vs RAD (Prototyping) & Agile', cardId: 'al-cs-6-1-c1' },
      { time: '2:45', seconds: 165, label: 'Testing Strategies: White-Box, Black-Box, Integration, Alpha & Beta', cardId: 'al-cs-6-1-c2' },
      { time: '5:25', seconds: 325, label: 'Three Types of Software Maintenance (Corrective, Adaptive, Perfective)', cardId: 'al-cs-6-1-c3' },
    ],
    cards: [
      {
        id: 'al-cs-6-1-c1',
        title: 'Software Development Methodologies (Waterfall, Iterative, RAD & Agile)',
        summary: 'Waterfall enforces strict linear phase sign-off suited to fixed safety-critical specs; Iterative, RAD, and Agile embrace evolving client feedback through rapid working prototypes.',
        bullets: [
          '**Waterfall Model** — sequential linear stages (`Analysis → Design → Coding → Testing → Maintenance`) with thorough documentation and milestone sign-offs. **Best for**: stable, well-understood requirements (e.g. avionics). **Drawback**: client sees no working software until the very end; costly to revise earlier specs.',
          '**Iterative / Incremental Model** — delivers a working core subset first, repeatedly cycling Analysis→Design→Code→Test to expand features each sprint; detects integration flaws early.',
          '**RAD (Rapid Application Development)** — builds quick **interactive prototypes** in tight timeboxes with heavy continuous **end-user feedback** and reusable components. **Best for**: unclear UI-heavy business apps with tight deadlines; **Drawback**: weaker documentation & scalability on complex low-level systems.',
        ],
        subsections: [
          {
            heading: 'Choosing the Right Model in CIE 9618 Essays',
            bullets: [
              '**Fixed spec + high compliance** → Waterfall; **Uncertain/evolving UI requirements + rapid user feedback** → RAD / Iterative.',
            ],
            exampleHeading: 'Worked evaluation: Startup mobile banking UI vs Missile guidance firmware',
            examples: [
              'Mobile UI → **RAD/Iterative** (rapid customer usability trials); Guidance firmware → **Waterfall** (immutable spec & formal audit docs).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Waterfall model', definition: 'Linear sequential SDLC requiring formal sign-off at each stage before progressing to the next.' },
          { term: 'RAD (Rapid Application Development)', definition: 'Prototype-driven methodology relying on rapid user feedback and reusable modules to deliver working software quickly.' },
        ],
      },
      {
        id: 'al-cs-6-1-c2',
        title: 'Comprehensive Software Testing Strategies',
        summary: 'Thorough quality assurance layers Dry-Running, Walkthroughs, White-Box path testing, Black-Box specification testing, Stub/Integration testing, and Alpha/Beta/Acceptance testing.',
        bullets: [
          '**White-Box (Glass-Box) Testing** — tester inspects internal source code/branches directly to ensure **every execution path, loop, and `IF` branch** is exercised.',
          '**Black-Box Testing** — tester treats program as an opaque box, checking outputs purely against functional requirements using Normal, Abnormal, Extreme, and Boundary inputs without viewing code.',
          '**Stub Testing & Integration Testing** — **Stubs** are dummy placeholder subroutines returning fixed test values so upper modules can be tested before lower modules are coded; **Integration testing** verifies combined modules exchange data cleanly.',
          '**Alpha, Beta & User Acceptance Testing** — **Alpha** = in-house developer/QA testing before external release; **Beta** = pre-release trial by real external volunteers to catch diverse hardware/usage bugs; **Acceptance** = client signs off live system against agreed specification.',
        ],
        subsections: [
          {
            heading: 'Syntax vs Logic vs Runtime Errors',
            bullets: [
              '**Syntax** (caught by translator); **Runtime** (crash e.g. divide by zero, index out of range); **Logic** (runs without crash but produces wrong answer — caught by White/Black-Box & trace tables!).',
            ],
            exampleHeading: 'Worked stub testing example',
            examples: [
              'Before coding `CalcShipping()`, a stub returns a fixed `5.00` so the `Checkout()` module can be fully tested today!',
            ],
          },
        ],
        glossaryPills: [
          { term: 'white-box testing', definition: 'Structural testing designing test cases from internal source code to verify every logical path and branch.' },
          { term: 'stub testing', definition: 'Using minimal placeholder subroutines returning mock values to test calling modules before dependencies exist.' },
        ],
      },
      {
        id: 'al-cs-6-1-c3',
        title: 'Three Categories of Software Maintenance (CIE 9618 Classic)',
        summary: 'Post-deployment maintenance consumes the majority of software lifecycle cost across three distinct categories: Corrective, Adaptive, and Perfective.',
        bullets: [
          '**1. Corrective Maintenance** — fixing residual **bugs, crashes, or logic errors** discovered by users after deployment (e.g. patching a leap-year calculation crash).',
          '**2. Adaptive Maintenance** — modifying software to cope with **external environmental, OS, hardware, or legal/tax changes** (e.g. updating VAT from `20%` to `22%`, supporting a new macOS/Windows API).',
          '**3. Perfective Maintenance** — enhancing **performance, usability, or adding new requested features** even when no bug or external change occurred (e.g. adding Dark Mode or optimising SQL queries to run `3×` faster).',
        ],
        subsections: [
          {
            heading: 'Mapping Scenarios to Maintenance Types',
            bullets: [
              '**Bug fix** = Corrective · **Law/OS/Hardware change** = Adaptive · **Faster/New feature** = Perfective!',
            ],
            exampleHeading: 'Worked classification check (3 marks)',
            examples: [
              'Fixing a broken checkout button = **Corrective** · Supporting new EU privacy law = **Adaptive** · Adding 1-click Apple Pay & faster search = **Perfective**.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'adaptive maintenance', definition: 'Updating deployed software in response to external changes such as new legislation, tax rates, OS upgrades, or hardware.' },
          { term: 'perfective maintenance', definition: 'Improving working software’s performance, maintainability, or adding new user-requested features.' },
        ],
        memoryAid: 'Maintenance C-A-P: Corrective = Cures bugs · Adaptive = Adjusts to external change · Perfective = Polishes speed & adds features!',
        commonMistake: 'Confusing Adaptive and Perfective maintenance — if an external law/OS change forces an update, it is ADAPTIVE; if the developer voluntarily improves speed or adds a cool new feature, it is PERFECTIVE!',
      },
    ],
    keyTerms: [
      { term: 'Waterfall vs Iterative vs RAD', definition: 'Linear sign-off SDLC vs incremental refinement cycles vs prototype-heavy rapid user-feedback builds.' },
      { term: 'White-Box vs Black-Box Testing', definition: 'Code-aware internal path testing vs specification-based input/output testing.' },
      { term: 'Stub Testing', definition: 'Substituting unfinished subroutines with mock return values to test calling modules early.' },
      { term: 'Corrective / Adaptive / Perfective', definition: 'Bug fixes (Corrective), external OS/law changes (Adaptive), and speed/feature upgrades (Perfective).' },
    ],
    checklistPoints: [
      'Compare Waterfall, Iterative, and RAD methodologies and justify optimal selection for real projects',
      'Distinguish White-Box, Black-Box, Stub, Integration, Alpha, Beta, and Acceptance testing',
      'Classify real post-release software updates accurately into Corrective, Adaptive, and Perfective maintenance',
    ],
  },

  'al-cs-6-2': {
    subtopicId: 'al-cs-6-2',
    subtopicCode: '6.2',
    subtopicTitle: 'Computational Thinking, Structure Charts, State-Transition Diagrams & Big-O Complexity',
    readingMinutes: 12,
    videoTitle: '162. OCR A Level (H446) SLR26 - 2.3 Big O notation in practice',
    youtubeId: 'IILaLg98xW0',
    videoChannel: "Craig'n'Dave",
    videoDuration: '8:18',
    courseMatchSummary: '3 of 3 sections match Cambridge International AS & A-Level Computer Science (9618 Paper 2 & 3)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Stepwise Refinement, Structure Charts (Parameters & Selection/Iteration) & State-Transition Diagrams', cardId: 'al-cs-6-2-c1' },
      { time: '2:55', seconds: 175, label: 'Big-O Asymptotic Time & Space Complexity Hierarchy', cardId: 'al-cs-6-2-c2' },
      { time: '5:40', seconds: 340, label: 'Evaluating Loop & Recursive Complexity + Practical Scalability Limits', cardId: 'al-cs-6-2-c3' },
    ],
    cards: [
      {
        id: 'al-cs-6-2-c1',
        title: 'Structure Charts & Finite State-Transition Diagrams',
        summary: 'Structure charts annotate top-down modules with exact data/flag parameter arrows, selection diamonds, and iteration arcs; state-transition diagrams model event-driven states and outputs.',
        bullets: [
          '**Structure Chart Symbols (CIE 9618 Paper 2)** — **Open-circle arrow (`○→`)** = **Data parameter** passed in/out; **Filled-circle arrow (`●→`)** = **Boolean flag** (e.g. `ValidFlag`); **Curved loop arrow** = **Iteration** (module called repeatedly); **Diamond** = **Selection** (conditional call).',
          '**State-Transition Diagrams (STD)** — circles represent discrete **States** (double circle = accepting/halting state; arrow from nowhere = start state); directed edges are labelled `Input / Output` showing how an input event triggers a state transition and optional output.',
        ],
        subsections: [
          {
            heading: 'Reading Parameter Direction on Structure Charts',
            bullets: [
              '**Downward arrow** = parameter passed INTO submodule (`BYVAL`); **Upward arrow** = value returned / passed OUT (`RETURN` or `BYREF`)!',
            ],
            exampleHeading: 'Worked State-Transition trace: Vending machine (`Locked → Unlocked`)',
            examples: [
              'State `Locked` + Input `Coin / Unlock` → transitions to `Unlocked`; `Unlocked` + `Push / Lock` → returns to `Locked`.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'state-transition diagram', definition: 'Directed graph modelling finite system states, triggering input events, transitions, and resulting outputs.' },
          { term: 'stepwise refinement', definition: 'Repeatedly breaking abstract high-level steps into finer, directly codable sub-steps.' },
        ],
      },
      {
        id: 'al-cs-6-2-c2',
        title: 'Big-O Time & Space Complexity Hierarchy',
        summary: 'Big-O notation describes the worst-case upper bound on how an algorithm’s execution time or memory scales as input size `n` grows large, dropping constants and lower-order terms.',
        bullets: [
          '**Growth order from fastest to slowest**: `O(1)` Constant < `O(log n)` Logarithmic < `O(n)` Linear < `O(n log n)` Linearithmic < `O(n²)` Quadratic < `O(2ⁿ)` Exponential!',
          '**Classic Algorithm Matches** — **`O(1)`**: array index lookup / stack `Push`/`Pop` / hash table average lookup; **`O(log n)`**: **Binary Search** (halves list each step); **`O(n)`**: **Linear Search**; **`O(n log n)`**: **Merge Sort**; **`O(n²)`**: **Bubble Sort & Insertion Sort** (nested loops); **`O(2ⁿ)`**: naive recursive Fibonacci / brute-force subset search (intractable for large `n`!).',
          '**Space Complexity** — measures extra auxiliary RAM needed: Bubble/Insertion Sort = **`O(1)` in-place**, whereas Merge Sort requires **`O(n)` auxiliary array space** and recursive DFS requires `O(depth)` call-stack space.',
        ],
        subsections: [
          {
            heading: 'Simplifying Expressions to Big-O',
            bullets: [
              '**Drop coefficients & smaller powers** — `3n² + 25n + 100` simplifies strictly to **`O(n²)`** because `n²` dominates as `n → ∞`!',
            ],
            exampleHeading: 'Worked scaling check: `n = 1,000,000` items',
            examples: [
              'Binary Search `O(log₂ n)`: max **`20` comparisons** · Linear Search `O(n)`: **`1,000,000`** comparisons · Bubble Sort `O(n²)`: **`10¹²`** operations!',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Big-O notation', definition: 'Asymptotic upper-bound classification describing how algorithm time or memory requirements grow with input size `n`.' },
          { term: 'logarithmic complexity O(log n)', definition: 'Highly scalable growth rate where each operation halves the remaining search space (e.g. Binary Search).' },
        ],
      },
      {
        id: 'al-cs-6-2-c3',
        title: 'Determining Complexity from Pseudocode Loops & Intractability',
        summary: 'Count loop nesting depth over `n` to read polynomial Big-O directly, spot halving loops as `O(log n)`, and recognise exponential `O(2ⁿ)` problems needing heuristic approximations.',
        bullets: [
          '**Single loop `1..n`** → `O(n)`; **Two nested loops `1..n` × `1..n`** → `O(n²)`; **Loop halving `n ← n DIV 2`** → `O(log n)`; **Sequential loops `O(n) + O(n²)`** → take dominant term **`O(n²)`**.',
          '**Tractable vs Intractable Problems** — polynomial-time algorithms (`O(n^k)`) are **tractable** (solvable in reasonable time); exponential algorithms (`O(2ⁿ)` / `O(n!)`, e.g. brute-force Travelling Salesperson) become **intractable** even for `n = 60`, motivating **heuristic** approaches like A* search!',
        ],
        subsections: [
          {
            heading: 'Worked Pseudocode Complexity Inspection',
            bullets: [
              '**Constant-bound loop trap**: `FOR i ← 1 TO 10` does NOT depend on `n` → **`O(1)`**, NOT `O(n)`!',
            ],
            exampleHeading: 'Worked check: Nested loop `FOR i ← 1 TO n` containing `WHILE j > 1: j ← j DIV 2`',
            examples: [
              'Outer runs `n` times × inner halves `log₂ n` times → overall time complexity = **`O(n log n)`**!',
            ],
          },
        ],
        glossaryPills: [
          { term: 'intractable problem', definition: 'Computational problem whose exact solution requires exponential/factorial time (`O(2ⁿ)`/`O(n!)`), becoming unsolvable within practical timescales for large inputs.' },
        ],
        memoryAid: 'Big-O Ladder: `O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2ⁿ)`! Structure Charts: Open circle `○` = Data, Filled circle `●` = Boolean Flag!',
        commonMistake: 'Writing `O(2n² + 5n)` as a final Big-O answer — ALWAYS drop constant multipliers and lower-order terms to write cleanly **`O(n²)`**!',
      },
    ],
    keyTerms: [
      { term: 'Structure Chart', definition: 'Modular hierarchy chart showing data arrows (`○`), Boolean flags (`●`), selection, and iteration.' },
      { term: 'State-Transition Diagram', definition: 'Event-driven graph depicting finite states, input triggers, transitions, and outputs.' },
      { term: 'Big-O Time & Space Complexity', definition: 'Worst-case asymptotic scaling rate (`O(1)`, `O(log n)`, `O(n)`, `O(n log n)`, `O(n²)`, `O(2ⁿ)`).' },
      { term: 'Tractable vs Intractable', definition: 'Polynomial-time solvable problems vs exponential/factorial problems requiring heuristic methods.' },
    ],
    checklistPoints: [
      'Interpret and draw CIE 9618 Structure Charts (data vs flag arrows, iteration, selection) and State-Transition Diagrams',
      'Rank and match core algorithms across `O(1)`, `O(log n)`, `O(n)`, `O(n log n)`, `O(n²)`, and `O(2ⁿ)`',
      'Derive Big-O time and space complexity directly from pseudocode loops and explain intractability',
    ],
  },
};

export const ALEVEL_CS_UNITS_5_6_QUIZZES: QuizQuestion[] = [
  // al-cs-5-1
  {
    id: 'al-cs-5-1-q1',
    subtopicId: 'al-cs-5-1',
    type: 'mcq',
    marks: 1,
    prompt: 'How does Sender Alice generate a DIGITAL SIGNATURE for an important contract?',
    options: [
      'Hashes the contract to create a digest and encrypts that digest using Alice’s PRIVATE key',
      'Encrypts the whole contract using Bob’s public key',
      'Hashes the contract using Bob’s private key',
      'Sends the raw password inside an HTTP cookie',
    ],
    correctIndex: 0,
    explanation: 'A digital signature encrypts the message’s cryptographic hash digest using the SENDER’s private key so anyone can verify it with the sender’s public key.',
  },
  {
    id: 'al-cs-5-1-q2',
    subtopicId: 'al-cs-5-1',
    type: 'mcq',
    marks: 1,
    prompt: 'How does Quantum Key Distribution (QKD) automatically detect an eavesdropper tapping a fibre-optic cable?',
    options: [
      'Observing polarised photons inevitably alters their quantum states, revealing interception immediately via error checks',
      'Photons move slower than copper electrons',
      'QKD broadcasts private keys in plaintext',
      'Quantum keys require no fibre-optic hardware',
    ],
    correctIndex: 0,
    explanation: 'Measuring quantum photon polarisation disturbs the states irreversibly, alerting Alice and Bob to abort the compromised key.',
  },
  {
    id: 'al-cs-5-1-q3',
    subtopicId: 'al-cs-5-1',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the TLS architecture summary.',
    segments: ['In TLS, the ', ' layer verifies the server’s CA digital certificate and negotiates a session key, while the ', ' layer encrypts bulk web traffic symmetrically.'],
    wordBank: ['Handshake', 'Record', 'Link', 'DNS'],
    answers: ['Handshake', 'Record'],
    explanation: 'TLS splits into the Handshake Protocol (auth & key exchange) and Record Protocol (fast symmetric encryption).',
  },
  {
    id: 'al-cs-5-1-q4',
    subtopicId: 'al-cs-5-1',
    type: 'multi-select',
    marks: 2,
    selectCount: 2,
    prompt: 'Select TWO guarantees mathematically proven when a receiver successfully verifies a Digital Signature.',
    options: [
      'Integrity (the message was not altered in transit)',
      'Authentication & Non-repudiation (only the holder of the sender’s private key could have signed it)',
      'The message body itself is hidden from eavesdroppers without separate encryption',
      'The file size was reduced by 50%',
    ],
    correctIndices: [0, 1],
    explanation: 'Digital signatures prove integrity, authenticity, and non-repudiation (separate encryption is still needed for confidentiality).',
  },
  {
    id: 'al-cs-5-1-q5',
    subtopicId: 'al-cs-5-1',
    type: 'short-answer',
    marks: 2,
    prompt: 'Explain the role of a Certificate Authority (CA) in HTTPS Digital Certificates. [2 marks]',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'A trusted Certificate Authority verifies an organisation’s real-world identity and digitally signs its certificate binding the domain name to its authentic public key so browsers prevent man-in-the-middle impersonation.',
      markPoints: [
        { id: 'mp1', markDescription: 'Verifies organisation/server identity and binds domain to authentic public key', requiredKeywordGroups: [['verif', 'authentic'], ['public key', 'domain', 'identity']] },
        { id: 'mp2', markDescription: 'Digitally signs certificate so browsers trust it / prevent impersonation', requiredKeywordGroups: [['sign', 'trust', 'impersonat', 'man-in-the-middle', 'browser']] },
      ],
    },
    explanation: 'CAs authenticate organisations and sign Digital Certificates binding domains to genuine public keys.',
  },

  // al-cs-5-2
  {
    id: 'al-cs-5-2-q1',
    subtopicId: 'al-cs-5-2',
    type: 'mcq',
    marks: 1,
    diagram: 'database-normalisation-erd',
    prompt: 'A 2NF table `Student(StudentID [PK], Name, TutorID, TutorOffice)` has `TutorID → TutorOffice`. Why does this violate Third Normal Form (3NF)?',
    options: [
      'It contains a transitive (non-key → non-key) dependency because TutorOffice depends on non-key TutorID',
      'It contains repeating multi-valued columns',
      'StudentID is a composite primary key',
      'It has too few SQL joins',
    ],
    correctIndex: 0,
    explanation: '3NF forbids non-key attributes depending on other non-key attributes; `Tutor(TutorID [PK], TutorOffice)` must be extracted.',
  },
  {
    id: 'al-cs-5-2-q2',
    subtopicId: 'al-cs-5-2',
    type: 'mcq',
    marks: 1,
    prompt: 'Which SQL command belongs to DDL (Data Definition Language) rather than DML (Data Manipulation Language)?',
    options: ['CREATE TABLE', 'SELECT', 'UPDATE', 'INSERT INTO'],
    correctIndex: 0,
    explanation: '`CREATE TABLE` and `ALTER TABLE` define schemas (DDL); `SELECT`, `INSERT`, `UPDATE`, `DELETE` manipulate rows (DML).',
  },
  {
    id: 'al-cs-5-2-q3',
    subtopicId: 'al-cs-5-2',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the relational database design rules.',
    segments: ['A many-to-many (`M:N`) relationship is resolved using an intermediate ', ' table, while ', ' integrity guarantees every Foreign Key matches an existing Primary Key.'],
    wordBank: ['link', 'referential', 'hash', 'flat'],
    answers: ['link', 'referential'],
    explanation: 'Link/junction tables break M:N into two 1:M links; referential integrity prevents orphan foreign keys.',
  },
  {
    id: 'al-cs-5-2-q4',
    subtopicId: 'al-cs-5-2',
    type: 'matching',
    marks: 2,
    prompt: 'Match each Normal Form requirement to its exact condition.',
    pairs: [
      { left: '1NF', right: 'Atomic fields, zero repeating groups, defined Primary Key' },
      { left: '2NF', right: 'In 1NF + zero partial dependencies on a composite key' },
      { left: '3NF', right: 'In 2NF + zero transitive non-key → non-key dependencies' },
    ],
    explanation: '1NF = atomic/PK; 2NF = full composite PK dependency; 3NF = no transitive non-key dependencies.',
  },
  {
    id: 'al-cs-5-2-q5',
    subtopicId: 'al-cs-5-2',
    type: 'short-answer',
    marks: 2,
    prompt: 'Write an SQL `INNER JOIN` query displaying `Student.FullName` and `Course.Title` by joining `Student`, `Enrolment`, and `Course` via `StudentID` and `CourseID`. [2 marks]',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'SELECT Student.FullName, Course.Title FROM Student INNER JOIN Enrolment ON Student.StudentID = Enrolment.StudentID INNER JOIN Course ON Enrolment.CourseID = Course.CourseID;',
      markPoints: [
        { id: 'mp1', markDescription: 'SELECT Student.FullName, Course.Title FROM Student', requiredKeywordGroups: [['select'], ['fullname'], ['title']] },
        { id: 'mp2', markDescription: 'Correct INNER JOIN links on StudentID and CourseID', requiredKeywordGroups: [['join'], ['studentid'], ['courseid']] },
      ],
    },
    explanation: 'Chain `INNER JOIN ... ON Parent.PK = Child.FK` across the junction table.',
  },

  // al-cs-6-1
  {
    id: 'al-cs-6-1-q1',
    subtopicId: 'al-cs-6-1',
    type: 'mcq',
    marks: 1,
    prompt: 'A payroll application is updated because the government raised national income tax bands for the new fiscal year. Which type of software maintenance is this?',
    options: ['Adaptive maintenance', 'Corrective maintenance', 'Perfective maintenance', 'Stub testing'],
    correctIndex: 0,
    explanation: 'Updating software due to external legal, tax, OS, or hardware changes is Adaptive maintenance.',
  },
  {
    id: 'al-cs-6-1-q2',
    subtopicId: 'al-cs-6-1',
    type: 'mcq',
    marks: 1,
    prompt: 'Which testing strategy inspects internal source code directly to ensure every `IF` branch and loop path is executed?',
    options: ['White-box testing', 'Black-box testing', 'Beta testing', 'Acceptance testing'],
    correctIndex: 0,
    explanation: 'White-box (glass-box) testing constructs test paths directly from internal code logic.',
  },
  {
    id: 'al-cs-6-1-q3',
    subtopicId: 'al-cs-6-1',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the testing and SDLC definitions.',
    segments: ['Replacing an unfinished subroutine with a dummy routine returning fixed values is ', ' testing, while releasing pre-final builds to external volunteers is ', ' testing.'],
    wordBank: ['stub', 'beta', 'alpha', 'waterfall'],
    answers: ['stub', 'beta'],
    explanation: 'Stubs mock incomplete modules; Beta tests expose near-final software to external users.',
  },
  {
    id: 'al-cs-6-1-q4',
    subtopicId: 'al-cs-6-1',
    type: 'matching',
    marks: 2,
    prompt: 'Match each maintenance type to its example.',
    pairs: [
      { left: 'Corrective', right: 'Patching a null-pointer crash discovered by users' },
      { left: 'Adaptive', right: 'Migrating an app to a brand-new mobile OS API' },
      { left: 'Perfective', right: 'Adding dark mode and optimising query speed by 40%' },
    ],
    explanation: 'Corrective cures bugs; Adaptive adjusts to external changes; Perfective improves features/performance.',
  },
  {
    id: 'al-cs-6-1-q5',
    subtopicId: 'al-cs-6-1',
    type: 'short-answer',
    marks: 2,
    prompt: 'Give one advantage and one drawback of Rapid Application Development (RAD) compared to the Waterfall model. [2 marks]',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'RAD produces working prototypes rapidly with continuous client feedback so changing UI requirements are met accurately, but it often produces weaker formal documentation and can struggle on large complex low-level systems.',
      markPoints: [
        { id: 'mp1', markDescription: 'Advantage: fast working prototypes / continuous user feedback / adapts to changing requirements', requiredKeywordGroups: [['prototype', 'feedback', 'fast', 'rapid', 'chang']] },
        { id: 'mp2', markDescription: 'Drawback: weaker documentation / requires constant client availability / harder to scale complex systems', requiredKeywordGroups: [['documentation', 'client availab', 'scale', 'complex', 'maintain']] },
      ],
    },
    explanation: 'RAD excels at rapid prototyping and user alignment, at the cost of lighter documentation and high client time demand.',
  },

  // al-cs-6-2
  {
    id: 'al-cs-6-2-q1',
    subtopicId: 'al-cs-6-2',
    type: 'mcq',
    marks: 1,
    prompt: 'Which ordering ranks Big-O time complexities strictly from MOST efficient (fastest growth) to LEAST efficient (slowest)?',
    options: [
      'O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2ⁿ)',
      'O(1) < O(n) < O(log n) < O(n²) < O(n log n) < O(2ⁿ)',
      'O(log n) < O(1) < O(n) < O(2ⁿ) < O(n²)',
      'O(2ⁿ) < O(n²) < O(n log n) < O(n) < O(1)',
    ],
    correctIndex: 0,
    explanation: 'Constant < Logarithmic < Linear < Linearithmic < Quadratic < Exponential.',
  },
  {
    id: 'al-cs-6-2-q2',
    subtopicId: 'al-cs-6-2',
    type: 'mcq',
    marks: 1,
    prompt: 'On a CIE 9618 Structure Chart, what is represented by a small arrow with a FILLED solid black circle (`●→`)?',
    options: ['A Boolean control flag passed between modules', 'A numeric array parameter', 'A database foreign key', 'An infinite loop'],
    correctIndex: 0,
    explanation: 'Open circle (`○→`) denotes data parameters; filled circle (`●→`) denotes a Boolean flag.',
  },
  {
    id: 'al-cs-6-2-q3',
    subtopicId: 'al-cs-6-2',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the Big-O simplification and space complexity facts.',
    segments: ['The expression `4n² + 12n + 90` simplifies in Big-O notation to ', ', while Merge Sort requires ', ' auxiliary memory space.'],
    wordBank: ['O(n²)', 'O(n)', 'O(1)', 'O(2ⁿ)'],
    answers: ['O(n²)', 'O(n)'],
    explanation: 'Drop coefficients and lower terms to get `O(n²)`; Merge Sort allocates `O(n)` temporary arrays during merging.',
  },
  {
    id: 'al-cs-6-2-q4',
    subtopicId: 'al-cs-6-2',
    type: 'matching',
    marks: 2,
    prompt: 'Match each algorithm to its worst-case Big-O time complexity.',
    pairs: [
      { left: 'Binary Search', right: 'O(log n)' },
      { left: 'Merge Sort', right: 'O(n log n)' },
      { left: 'Bubble Sort', right: 'O(n²)' },
    ],
    explanation: 'Binary Search halves each step (`O(log n)`), Merge Sort divides & merges (`O(n log n)`), Bubble Sort nests loops (`O(n²)`).',
  },
  {
    id: 'al-cs-6-2-q5',
    subtopicId: 'al-cs-6-2',
    type: 'short-answer',
    marks: 2,
    prompt: 'Explain what makes an exponential `O(2ⁿ)` algorithm intractable for large `n` and how computer scientists tackle such problems in practice. [2 marks]',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Every single increment in input size n doubles the computation time, rapidly exceeding years or centuries even for modest n; computer scientists use heuristic approximation algorithms to find near-optimal solutions in practical polynomial time.',
      markPoints: [
        { id: 'mp1', markDescription: 'Computation doubles per +1 input / grows too fast to solve in practical time', requiredKeywordGroups: [['double', 'practical', 'unreasonable', 'huge', 'exponential']] },
        { id: 'mp2', markDescription: 'Solved using heuristics / approximation algorithms for good-enough fast solutions', requiredKeywordGroups: [['heuristic', 'approximat', 'near-optimal', 'good enough']] },
      ],
    },
    explanation: 'Exponential blowup makes exact brute-force infeasible, so heuristics deliver fast near-optimal solutions.',
  },
];

export const ALEVEL_CS_UNITS_5_6_FLASHCARDS: FlashcardItem[] = [
  // al-cs-5-1
  { id: 'al-cs-5-1-fc1', subtopicId: 'al-cs-5-1', front: 'Contrast Data Security, Data Privacy, and Data Integrity.', backBullets: ['Security: protects data from loss/unauthorised access. Privacy: governs personal data consent/confidentiality.', 'Integrity: keeps data accurate, consistent, and uncorrupted via validation & constraints.'] },
  { id: 'al-cs-5-1-fc2', subtopicId: 'al-cs-5-1', front: 'Trace how a Digital Signature is created and verified.', backBullets: ['Sender hashes message (SHA-256) and encrypts digest with SENDER’s Private Key.', 'Receiver decrypts signature with SENDER’s Public Key and compares with independently recomputed hash.'] },
  { id: 'al-cs-5-1-fc3', subtopicId: 'al-cs-5-1', front: 'What 3 security properties does a Digital Signature guarantee?', backBullets: ['Authentication (true sender) and Integrity (unmodified message).', 'Non-repudiation (sender cannot later deny signing it).'] },
  { id: 'al-cs-5-1-fc4', subtopicId: 'al-cs-5-1', front: 'Describe the two protocol layers inside TLS.', backBullets: ['Handshake Layer: verifies CA Digital Certificate and exchanges symmetric session key.', 'Record Layer: encrypts bulk application traffic fast using that symmetric key.'] },
  { id: 'al-cs-5-1-fc5', subtopicId: 'al-cs-5-1', front: 'How does Quantum Key Distribution (QKD) expose eavesdroppers, and what limits it?', backBullets: ['Measuring polarised photons physically alters their quantum states, revealing any tap immediately.', 'Limits: costly dedicated fibre hardware, short direct distance (~100–300 km), point-to-point only.'] },

  // al-cs-5-2
  { id: 'al-cs-5-2-fc1', subtopicId: 'al-cs-5-2', front: 'List 3 flaws of flat-file databases solved by relational databases.', backBullets: ['Eliminates redundant duplicate storage and update/insertion/deletion anomalies.', 'Enforces referential integrity across linked tables via PK/FK constraints.'] },
  { id: 'al-cs-5-2-fc2', subtopicId: 'al-cs-5-2', front: 'Define 1NF, 2NF, and 3NF concisely.', backBullets: ['1NF: atomic values, no repeating groups, Primary Key. 2NF: 1NF + no partial composite-key dependencies.', '3NF: 2NF + no transitive (non-key → non-key) dependencies.'] },
  { id: 'al-cs-5-2-fc3', subtopicId: 'al-cs-5-2', front: 'How do you resolve an `M:N` relationship in an Entity–Relationship Diagram?', backBullets: ['Insert a Link / Junction table between the two entities.', 'Converts `A M:N B` into `A 1:M Link M:1 B` with a composite PK of both Foreign Keys.'] },
  { id: 'al-cs-5-2-fc4', subtopicId: 'al-cs-5-2', front: 'Contrast SQL DDL and DML with 2 commands each.', backBullets: ['DDL (Schema): `CREATE TABLE`, `ALTER TABLE`, `CREATE DATABASE`.', 'DML (Data): `SELECT ... INNER JOIN`, `INSERT INTO`, `UPDATE`, `DELETE`.'] },
  { id: 'al-cs-5-2-fc5', subtopicId: 'al-cs-5-2', front: 'What is Referential Integrity in a relational DBMS?', backBullets: ['Constraint requiring every non-null Foreign Key to match an existing Primary Key in the parent table.', 'Prevents orphan records when parent rows are updated or deleted.'] },

  // al-cs-6-1
  { id: 'al-cs-6-1-fc1', subtopicId: 'al-cs-6-1', front: 'Compare Waterfall, Iterative, and RAD development methodologies.', backBullets: ['Waterfall: strict linear signed-off phases (fixed specs). Iterative: repeating core-to-full cycles.', 'RAD: rapid interactive prototypes with continuous client feedback (fluid UI specs).'] },
  { id: 'al-cs-6-1-fc2', subtopicId: 'al-cs-6-1', front: 'Contrast White-Box Testing and Black-Box Testing.', backBullets: ['White-Box: inspects source code directly to test every logical branch/path.', 'Black-Box: tests external inputs/outputs against requirements without viewing source code.'] },
  { id: 'al-cs-6-1-fc3', subtopicId: 'al-cs-6-1', front: 'What is Stub Testing used for during incremental coding?', backBullets: ['Replaces uncoded lower-level subroutines with minimal dummy stubs returning fixed mock values.', 'Allows calling modules to be tested immediately in parallel.'] },
  { id: 'al-cs-6-1-fc4', subtopicId: 'al-cs-6-1', front: 'Contrast Alpha Testing and Beta Testing.', backBullets: ['Alpha: internal testing by developers/QA staff inside the company before external release.', 'Beta: pre-release trial by volunteer external end users across diverse real environments.'] },
  { id: 'al-cs-6-1-fc5', subtopicId: 'al-cs-6-1', front: 'Define Corrective, Adaptive, and Perfective software maintenance.', backBullets: ['Corrective: fixes bugs/crashes. Adaptive: responds to external law, OS, or hardware changes.', 'Perfective: enhances speed, usability, or adds new features.'] },

  // al-cs-6-2
  { id: 'al-cs-6-2-fc1', subtopicId: 'al-cs-6-2', front: 'How are data parameters, Boolean flags, iteration, and selection drawn on CIE Structure Charts?', backBullets: ['Open-circle arrow (`○→`) = data parameter; Filled-circle arrow (`●→`) = Boolean flag.', 'Curved loop arrow = iteration; Diamond = conditional selection.'] },
  { id: 'al-cs-6-2-fc2', subtopicId: 'al-cs-6-2', front: 'What do nodes, double circles, and arrow labels represent on a State-Transition Diagram?', backBullets: ['Circles = discrete states (double circle = final/accepting state).', 'Directed edge label `Input / Output` = triggering event and resulting action.'] },
  { id: 'al-cs-6-2-fc3', subtopicId: 'al-cs-6-2', front: 'Rank the 6 main Big-O growth classes from fastest to slowest.', backBullets: ['`O(1)` Constant < `O(log n)` Logarithmic < `O(n)` Linear.', '< `O(n log n)` Linearithmic < `O(n²)` Quadratic < `O(2ⁿ)` Exponential.'] },
  { id: 'al-cs-6-2-fc4', subtopicId: 'al-cs-6-2', front: 'Compare Time and Space complexity of Bubble Sort, Insertion Sort, and Merge Sort.', backBullets: ['Bubble & Insertion: `O(n²)` worst time, `O(1)` in-place space.', 'Merge Sort: `O(n log n)` guaranteed time, `O(n)` auxiliary memory space.'] },
  { id: 'al-cs-6-2-fc5', subtopicId: 'al-cs-6-2', front: 'Why are heuristic algorithms needed for intractable problems?', backBullets: ['Exact exponential `O(2ⁿ)`/`O(n!)` solutions take impossible runtimes as `n` grows.', 'Heuristics trade guaranteed perfection for fast near-optimal solutions in polynomial time.'] },
];

export const ALEVEL_CS_UNITS_5_6_EXAM_PRACTICE: ExamQuestionItem[] = [
  {
    id: 'al-cs-ex-5-1',
    subtopicId: 'al-cs-5-1',
    number: 11,
    stimulus: 'Cambridge International A-Level 9618 Paper 3: A solicitor emails an electronically signed property deed to a buyer so the buyer can prove the document came from the solicitor and was not tampered with.',
    parts: [
      {
        id: 'al-cs-ex-5-1-a',
        label: '(a)',
        prompt: 'Describe step-by-step how the solicitor creates the Digital Signature and how the buyer verifies both authenticity and integrity. [4 marks]',
        kind: 'short-answer',
        marks: 4,
        rubric: {
          maxMarks: 4,
          modelAnswer: 'The solicitor passes the deed through a cryptographic hash function to produce a digest and encrypts the digest with the solicitor’s private key to form the digital signature. The buyer decrypts the signature using the solicitor’s public key, independently hashes the received deed, and compares the two digests — a match proves authenticity and integrity.',
          markPoints: [
            { id: 'mp1', markDescription: 'Hashes document to create digest', requiredKeywordGroups: [['hash'], ['digest']] },
            { id: 'mp2', markDescription: 'Encrypts digest with sender’s PRIVATE key', requiredKeywordGroups: [['private key'], ['encrypt', 'sign']] },
            { id: 'mp3', markDescription: 'Receiver decrypts signature with sender’s PUBLIC key', requiredKeywordGroups: [['public key'], ['decrypt']] },
            { id: 'mp4', markDescription: 'Re-hashes document and compares digests to verify integrity & authenticity', requiredKeywordGroups: [['compar', 'match'], ['authenti', 'integrity']] },
          ],
        },
      },
    ],
  },
  {
    id: 'al-cs-ex-5-2',
    subtopicId: 'al-cs-5-2',
    number: 12,
    stimulus: 'Cambridge International AS 9618 Paper 1: A university stores enrolments in one unnormalised table `Enrol(StudentID, StudentName, CourseID, CourseTitle, DeptID, DeptHead)` with composite key `(StudentID, CourseID)`.',
    diagram: 'database-normalisation-erd',
    parts: [
      {
        id: 'al-cs-ex-5-2-a',
        label: '(a)',
        prompt: 'Explain the 2NF and 3NF violations in `Enrol` and list the resulting 3NF tables with their Primary Keys. [4 marks]',
        kind: 'short-answer',
        marks: 4,
        rubric: {
          maxMarks: 4,
          modelAnswer: '2NF is violated by partial dependencies: StudentName depends only on StudentID and CourseTitle depends only on CourseID. 3NF is violated by the transitive non-key dependency DeptID → DeptHead. The 3NF tables are Student(StudentID PK, StudentName), Enrolment(StudentID PK/FK, CourseID PK/FK), Course(CourseID PK, CourseTitle, DeptID FK), and Department(DeptID PK, DeptHead).',
          markPoints: [
            { id: 'mp1', markDescription: 'Identifies partial dependency violating 2NF (StudentName / CourseTitle)', requiredKeywordGroups: [['partial'], ['studentname', 'coursetitle', '2nf']] },
            { id: 'mp2', markDescription: 'Identifies transitive dependency violating 3NF (DeptID → DeptHead)', requiredKeywordGroups: [['transitive', 'non-key'], ['depthead', 'deptid', '3nf']] },
            { id: 'mp3', markDescription: 'Separates Student, Course, and Enrolment link table', requiredKeywordGroups: [['student'], ['enrol'], ['course']] },
            { id: 'mp4', markDescription: 'Separates Department(DeptID, DeptHead)', requiredKeywordGroups: [['department', 'deptid'], ['depthead']] },
          ],
        },
      },
    ],
  },
  {
    id: 'al-cs-ex-6-1',
    subtopicId: 'al-cs-6-1',
    number: 13,
    stimulus: 'Cambridge International AS 9618 Paper 2: After launching an e-commerce app, engineers (1) patch a crash when coupon codes are empty, (2) update checkout rules for a new national sales tax, and (3) add biometric one-tap login.',
    parts: [
      {
        id: 'al-cs-ex-6-1-a',
        label: '(a)',
        prompt: 'Classify each of the three updates into the exact CIE 9618 software maintenance category with brief justification. [3 marks]',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: '(1) Patching the empty-coupon crash is Corrective maintenance (fixing a bug); (2) Updating for new sales tax legislation is Adaptive maintenance (external change); (3) Adding biometric one-tap login is Perfective maintenance (enhancing usability/features).',
          markPoints: [
            { id: 'mp1', markDescription: '(1) Corrective maintenance (fixes bug/crash)', requiredKeywordGroups: [['corrective'], ['bug', 'crash', 'error', 'fix']] },
            { id: 'mp2', markDescription: '(2) Adaptive maintenance (external law/tax change)', requiredKeywordGroups: [['adaptive'], ['external', 'tax', 'law', 'legislat']] },
            { id: 'mp3', markDescription: '(3) Perfective maintenance (new feature / usability enhancement)', requiredKeywordGroups: [['perfective'], ['feature', 'usability', 'enhanc', 'improv']] },
          ],
        },
      },
    ],
  },
  {
    id: 'al-cs-ex-6-2',
    subtopicId: 'al-cs-6-2',
    number: 14,
    stimulus: 'Cambridge International A-Level 9618 Paper 3: Algorithm A executes `100 × log₂(n)` steps while Algorithm B executes `0.5 × n² + 4n` steps on an input list of `n` records.',
    parts: [
      {
        id: 'al-cs-ex-6-2-a',
        label: '(a)',
        prompt: 'State the Big-O time complexity of Algorithm A and Algorithm B and explain which scales far better as `n` grows toward `1,000,000`. [3 marks]',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'Algorithm A is O(log n) and Algorithm B is O(n²). As n grows to 1,000,000, logarithmic O(log n) scales vastly better (only ~20×100 = 2,000 steps) whereas quadratic O(n²) explodes to 5×10¹¹ steps.',
          markPoints: [
            { id: 'mp1', markDescription: 'Algorithm A = O(log n)', requiredKeywordGroups: [['o(log n)', 'logarithmic']] },
            { id: 'mp2', markDescription: 'Algorithm B = O(n²)', requiredKeywordGroups: [['o(n²)', 'o(n^2)', 'quadratic']] },
            { id: 'mp3', markDescription: 'O(log n) scales vastly better for large n (drops constants; quadratic explodes)', requiredKeywordGroups: [['better', 'faster', 'scales', 'explodes', 'smaller']] },
          ],
        },
      },
    ],
  },
];
