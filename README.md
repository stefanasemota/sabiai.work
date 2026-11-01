# The Sabi Ecosystem Launchpad

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/stefanasemota/sabiai.work)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)](https://github.com/stefanasemota/sabiai.work)
[![Firebase](https://img.shields.io/badge/Firebase-Firestore%20%7C%20Auth%20%7C%20Hosting-FFCA28?logo=firebase&logoColor=white)](https://firebase.google.com/)
[![Gemini](https://img.shields.io/badge/Gemini-AI%20Powered-8E75B2?logo=google-gemini&logoColor=white)](https://deepmind.google/technologies/gemini/)

Welcome to the Sabi Ecosystem, a curated launchpad for projects that blend niche productivity, cultural context, and community wellness. This application serves as a central hub to showcase and provide access to the various applications developed under the Sabi AI umbrella.

"Sabi" /’sah-bee/ (v.) — To understand deeply. Our mission is to build projects that celebrate local identity on a global scale.

## Projects Showcase

This launchpad currently features applications across three main pods:

*   **Logic & Productivity:** Tools designed for professional enhancement and AI engineering governance, including **[vibe-coding-guardrail](https://github.com/stefanasemota/vibe-coding-guardrail)** (our open-source AI coding guardrail library & plugin), `Refine` for prompt engineering, `Facilitator` for agile coaching, and `Retro-Lite` for lean team retrospectives.
*   **Culture & Context:** Applications that digitize and share cultural identity, such as `NaijaSpeak` for Nigerian Pidgin translation, `Mile 2 Radio` for live Afrobeat streaming, and `Our Mumu Don Do` for Nigerian heritage & education.
*   **Community & Wellness:** Projects focused on lifestyle and community engagement, including `Aqualog` for coldwater swimmers, `Kids Cup Helpers` for volunteer management, and `G-Kicker Coach` for youth football coaching.

## Public Library & Plugin: [vibe-coding-guardrail](https://github.com/stefanasemota/vibe-coding-guardrail)

**[vibe-coding-guardrail](https://github.com/stefanasemota/vibe-coding-guardrail)** is our open-source engineering governance library and AI agent plugin designed for modern AI-assisted software development:

*   **7-Phase Feature-Driven Development (FDD) Loop:** Guides AI coding agents (`vibe-coder`, `aos-vibecode`, `aos-verify`, `aos-audit-project`, `aos-check-for-security-issues`) through structured discovery, specification, Shift-Left repository encapsulation, micro-patching, and automated verification.
*   **Engine-Neutral Architecture & Scaffolding Audits (`aos-audit-project`):** Enforces standardized documentation (`README.md`, `initiative.md`, `dev.md`, reverse-chronological `decision.md` with `DD.MM.YYYY` dates, `aos-audit.md`), strict Git branch isolation (Draft PR workflow), and zero-leak UI/data boundaries.
*   **Drop-In Plugin & Guardrail Rules:** Works seamlessly across AI coding environments via `AGENTS.md`, `ai-rules.json`, and reusable agent skills. Explore or install the library at **[github.com/stefanasemota/vibe-coding-guardrail](https://github.com/stefanasemota/vibe-coding-guardrail)**.


## Getting Started

To run the application locally, use the following command:

```bash
npm run dev
```

This will start the Next.js development server, typically on `http://localhost:9002`. The application is configured to hot-reload as you make changes to the code.

## Tech Stack

This project is built with a curated set of modern technologies to ensure a scalable, maintainable, and performant application.

*   **Framework:** [Next.js](https://nextjs.org/) (using the App Router)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **UI Library:** [React](https://react.dev/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
*   **Animations:** [Framer Motion](https://www.framer.com/motion/)
*   **Backend & Database:** [Firebase](https://firebase.google.com/) (Authentication and Firestore)
*   **Generative AI:** [Genkit](https://firebase.google.com/docs/genkit)

## Project Structure

Here is a high-level overview of the key directories and files in this project:

*   `src/app/`: This directory contains all the routes and pages for the application, following the Next.js App Router convention.
    *   `layout.tsx`: The main layout for the application.
    *   `page.tsx`: The home page of the application (the launchpad).
    *   `globals.css`: Global styles and Tailwind CSS configuration.
*   `src/components/`: Contains reusable React components, including the `HeroSection` and individual project cards.
    *   `ui/`: Houses the components from the shadcn/ui library.
*   `src/firebase/`: This directory holds all the Firebase configuration, custom hooks, and providers.
    *   `config.ts`: Your project's Firebase configuration.
    *   `provider.tsx`: The main Firebase context provider.
    *   `client-provider.tsx`: A client-side wrapper for the Firebase provider.
*   `src/ai/`: Contains all the Genkit-related code for generative AI features.
    *   `genkit.ts`: The main Genkit configuration file.
    *   `flows/`: Directory for defining AI flows.
*   `docs/backend.json`: A blueprint file that defines the data entities and Firestore structure for your application. It serves as a single source of truth for your backend schema.
*   `firestore.rules`: Contains the security rules for your Cloud Firestore database, ensuring your data is safe and accessible only by authorized users.
*   `package.json`: Lists the project dependencies and scripts. The `engines` field is set to `node: 22` to ensure a compatible build environment in Firebase App Hosting.

This structure is designed to be scalable and organized, making it easy to find and manage your code as the project grows.

---

Powered by <a href="https://github.com/stefanasemota/vibe-coding-guardrail">aos Vibe Coding Guardrail</a> | Fuel the Project - Buy me a coffee: <a href="https://buymeacoffee.com/stephanasex">https://buymeacoffee.com/stephanasex</a>

