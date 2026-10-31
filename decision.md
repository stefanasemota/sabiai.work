# 🏛️ Architectural Decision Records (`decision.md`)

Chronological ledger of architectural decisions, governance milestones, and structural updates for `sabiai.work`.

---

## [2026-10-09] AI Search Crawler SEO & Ecosystem Pod Expansion
- **Origin:** User Request / Launchpad Ecosystem Update
- **Context:** New Sabi AI ecosystem applications (`Mile 2 Radio` and `Our Mumu Don Do`) went live and needed visibility on the central launchpad as well as discoverability by AI search crawlers (`GPTBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`).
- **Decision:** Activated both apps under the **Culture & Context** pod in `src/app/page.tsx`, added dynamic `src/app/robots.ts` and `src/app/sitemap.ts`, and embedded Schema.org JSON-LD (`WebSite` and `ItemList`) in `src/app/layout.tsx`.
- **Impact:** Improved organic and AI-agent indexing across all Sabi Ecosystem applications.

---

## [2026-10-31] AOS Vibe-Coding Guardrail Compliance Audit (`aos-audit-project`)
- **Origin:** `aos-audit-project` Audit Execution
- **Context:** Audited repository structure against the `vibe-coder` Architectural Summary expectations (Core Documentation, `package.json` schema, Git & Governance hygiene, Shift-Left Repository pattern, and unit test separation).
- **Decision:** Applied all recommended compliance optimizations on branch `chore/aos-audit-compliance`:
  1. Appended the mandatory `aos Vibe Coding Guardrail` footer to `README.md`.
  2. Created `initiative.md`, `dev.md`, `decision.md`, `AGENTS.md`, `.nvmrc`, and `aos-audit.md`.
  3. Standardized `package.json` metadata (`name`, `version`, `description`, `author`, `keywords`, `repository`, `engines.node = 22`) and test scripts (`test`, `test:unit`, `test:e2e`).
  4. Hardened `.gitignore` with `/dist`, `*service-account*.json`, and `*key*.json`.
  5. Scaffolded `src/repositories/projects.ts` and `src/repositories/projects.test.ts` to enforce the Shift-Left Repository pattern.
- **Impact:** Repository achieves **14 / 14 (100%)** compliance with the `aos Vibe Coding Guardrail` standard.
