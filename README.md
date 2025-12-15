# SABI AI - Next.js & Firebase Project

Welcome to your project, built with Firebase Studio! This is a modern, full-stack application leveraging the power of Next.js, Firebase, and Genkit for AI-powered features.

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
*   **Backend & Database:** [Firebase](https://firebase.google.com/) (Authentication and Firestore)
*   **Generative AI:** [Genkit](https://firebase.google.com/docs/genkit)

## Project Structure

Here is a high-level overview of the key directories and files in this project:

*   `src/app/`: This directory contains all the routes and pages for the application, following the Next.js App Router convention.
    *   `layout.tsx`: The main layout for the application.
    *   `page.tsx`: The home page of the application.
    *   `globals.css`: Global styles and Tailwind CSS configuration.
*   `src/components/`: Contains reusable React components.
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
*   `package.json`: Lists the project dependencies and scripts. The `engines` field is set to `node: 20` to ensure a compatible build environment in Firebase App Hosting.

This structure is designed to be scalable and organized, making it easy to find and manage your code as the project grows.