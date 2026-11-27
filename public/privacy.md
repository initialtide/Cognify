# Cognify Privacy Policy

> Effective Date: 2026-11-27. Cognify is designed as a local-first, privacy-respecting educational web application with zero third-party ad networks, zero behavioural tracking cookies, and no mandatory cloud registration.

## 1. Local-First Data Architecture

When you create a student profile, enroll in GCSE, IGCSE, or A-Level courses, complete lessons, answer quiz questions, review flashcards, or track daily XP and streaks, all progress is stored locally inside your own browser using standard `localStorage` and `IndexedDB` storage. Account credentials created through Cognify's built-in sign-up flow are salted and hashed locally on your device using the Web Crypto API and are never transmitted to an Initialtide backend server.

Because your learning history stays on your device, you hold complete ownership and control. You can export a portable JSON backup of your study data or permanently delete your profile at any time from Account Settings or by clearing site data in your browser.

## 2. Third-Party Embeds & Optional Services

- **Privacy-Enhanced Lesson Videos:** Lesson and revision-note videos load behind a lightweight preview facade with zero external player scripts requested until you click Play. When played, videos embed via `www.youtube-nocookie.com` (YouTube Privacy-Enhanced Mode).
- **Optional Examiner AI Marking (Bring Your Own Key):** Out of the box, Cognify grades short-answer and exam-style practice questions completely offline against detailed mark-scheme rubrics. If you optionally supply your own Gemini or OpenAI API key in Account Preferences, that key remains in your browser and is sent directly from your browser to the chosen provider only when you request AI examiner feedback.
- **Static Hosting Infrastructure:** Cognify is hosted as a static site on GitHub Pages. Standard technical request logs (such as IP address and User-Agent) are processed by GitHub in accordance with the GitHub Privacy Statement to serve pages reliably and prevent abuse.

## 3. Children's Privacy, Your Rights & Contact

Cognify is built for secondary and sixth-form students, including learners under 16. Because no personal profiles, grades, or contact details are collected on remote Cognify servers, learners can study safely without creating an online personal-data footprint. Under UK GDPR and equivalent international privacy regulations, you have full rights to access, export, rectify, and erase your data immediately on-device.

For privacy or data protection questions, email **privacy@cognify.initialtide.org**, write to **71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom**, or inspect our open-source codebase at [https://github.com/initialtide/Cognify](https://github.com/initialtide/Cognify).
