# 🤖 Agent Governance & Engineering Standards (`AGENTS.md`)

## 1. Purpose
This repository adheres to the **aos Vibe Coding Guardrail** and the **7-Phase Feature-Driven Development (FDD)** workflow. All human and AI agents operating in this workspace must follow these rules.

## 2. Conventional Commits (Mandatory)
Every Git commit message must follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:
```text
<type>(<optional-scope>): <concise summary in imperative mood>
```
Allowed `<type>` values:
- `feat`: A new feature or ecosystem application entry
- `fix`: A bug fix
- `docs`: Documentation-only changes (`README.md`, `initiative.md`, `dev.md`, `decision.md`, `aos-audit.md`)
- `chore`: Build process, dependency, or scaffolding updates
- `refactor`: Code change that neither fixes a bug nor adds a feature
- `test`: Adding or updating unit or E2E tests
- `style`: Formatting, missing semi-colons, lint fixes
- `perf`: Performance optimization

## 3. Architectural Boundaries (Shift-Left Repository Pattern)
- **No Direct SDK Leaks in UI:** Components in `src/app/` and `src/components/` must never import `firebase-admin` or execute raw database queries directly.
- **Repository Encapsulation:** All data structures, catalog queries, and external persistence calls must live in `src/repositories/` with corresponding unit tests (`*.test.ts`).

## 4. Branch & Security Hygiene
- Never commit directly to `main` during feature or audit work; always work on an isolated branch (`feat/*`, `fix/*`, `chore/*`).
- Never hardcode API keys, tokens, or service account credentials. Verify `.gitignore` blocks `.env*`, `*service-account*.json`, `*key*.json`, and `*.pem`.
- Record architectural milestones in `decision.md`.
