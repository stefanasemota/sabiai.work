# 🤖 Agent Governance & Engineering Standards (`AGENTS.md`)

## 1. Purpose
This repository adheres to the **[aos Vibe Coding Guardrail](https://github.com/stefanasemota/vibe-coding-guardrail)** and the **7-Phase Feature-Driven Development (FDD)** workflow. All human and AI agents operating in this workspace must follow these rules without filler or AI slop.

---

## 2. Branching & Git Strategy (STRICT)
- **Never work on `main`:** Always create a descriptive branch (`feat/<slug>`, `fix/<slug>`, `chore/<slug>`, `refactor/<slug>`) from the latest `development` or `main` branch before writing code.
- **Test on the branch:** Ensure all code builds, tests pass, and the feature works within the isolated branch.
- **Push, do not merge:** Push the verified branch to the remote repository and open a Draft Pull Request. Never merge into `main` or `development`—leave final merge/review to the human.

---

## 3. Execution Discipline
- **Verify before writing:** Read existing relevant code and run the build/test command (`npm test && npm run typecheck`) to confirm the baseline passes before making edits.
- **Look Before You Leap:** Always run a `find` or `grep` search to check if a utility function, hook, or component already exists before writing a new one from scratch.
- **Dependency Lockdown:** Never install new `npm` packages without explicit human approval first. Rely on existing dependencies whenever possible.
- **Fix your own bugs:** If a build, lint, or test command fails after your edit, iterate and fix it autonomously before declaring the task done.
- **Documentation Sync:** If a code change alters an API endpoint, CLI flag, environment variable, or setup step, update `README.md`, `dev.md`, or API docs in the same commit.
- **Zero AI Slop:** Avoid filler words, robotic transitions, or verbose boilerplate. Write concise, direct prose and self-documenting code.

---

## 4. Architectural Boundaries (Shift-Left Repository Pattern)
- **No Direct SDK Leaks in UI:** Components in `src/app/` and `src/components/` must never import `firebase-admin` or execute raw database queries directly.
- **Repository Encapsulation:** All data structures, catalog queries, and external persistence calls must live in `src/repositories/` with corresponding unit tests (`*.test.ts`).

---

## 5. Conventional Commits & Atomicity
- **Commit atomicity:** Make small, logical commits as you progress through a feature rather than one massive commit at the end.
- **Explain the Fix:** When resolving a bug (`fix`), include a concise commit body explaining *why* the bug occurred and *how* the change fixed it.
- **Required Header Format:** `<type>(<optional-scope>): <concise summary in imperative mood>`
  - Allowed `<type>` values: `feat`, `fix`, `docs`, `chore`, `refactor`, `test`, `style`, `perf`.
- **Ledger Hygiene:** Record architectural milestones at the top of `decision.md` using `[DD.MM.YYYY]` date format (newest at top).
