# 🛠️ Development Guide (`dev.md`)

## 1. Prerequisites & Runtime
- **Node.js:** `v22` (pinned via `.nvmrc` and `package.json#engines`)
- **Package Manager:** `npm`
- **Framework:** Next.js 15 (App Router, Turbopack) + TypeScript 5 + Tailwind CSS

## 2. Local Development Setup
```bash
# 1. Use pinned Node version
nvm use

# 2. Install dependencies
npm install

# 3. Start local development server (runs on http://localhost:9002)
npm run dev
```

## 3. Environment Variables
Create a `.env.local` file in the root directory if testing Firebase or Genkit flows locally:
```ini
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
GEMINI_API_KEY=your_gemini_api_key
```

## 4. Verification & Quality Gate Scripts
Before committing or opening a pull request, run the verification suite:
```bash
# Typecheck TypeScript types
npm run typecheck

# Run ESLint
npm run lint

# Run Unit Tests (Shift-Left Repository suite)
npm run test:unit

# Verify Production Build
npm run build
```

## 5. Antigravity & Vibe-Coder Workflow
- Follow the **7-Phase Feature-Driven Development (FDD)** workflow.
- Encapsulate all data queries and project catalog lookups inside `src/repositories/`.
- Record every significant architectural decision in `decision.md`.
- Enforce Conventional Commits as documented in `AGENTS.md`.
