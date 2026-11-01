# 🏛️ Architectural Decision Records (`decision.md`)

Reverse-chronological ledger of architectural decisions, governance milestones, and structural updates for `sabiai.work` (**newest at top, oldest at bottom**, `[DD.MM.YYYY]` format).

---

## [01.11.2026] Grunge Design Single-Page Redesign Architecture (`feat/grunge-redesign`)
- **Origin:** Human Request / Phase 4 Architecture Gate (`vibe-coder`)
- **Context:** Redesigning the Sabi Ecosystem Launchpad single-page experience using the 1990s Ray Gun / David Carson **Grunge Design** visual system (`#1a1815` bg, `#24211c` surface, `#c1391f` primary crimson, `#d9b23c` mustard accent, `#ece6d8` distressed paper text, `Oswald` display & `Courier New`/`Special Elite` mono typography, fractal noise grain overlay, and torn-paper `clip-path`), while adding a dedicated Developer Profile (`https://github.com/stefanasemota`) and an M2R-analogous multi-column footer (without release notes).
- **Decision:** Adopted **Approach C (Pragmatic Balance)**:
  1. Centralize Grunge CSS custom properties, fractal-noise grain overlay (`--grain-svg`), and jagged torn-edge clip-paths (`--torn-clip`) in `src/app/globals.css`, paired with Google Fonts (`Oswald` and `Special Elite`) in `src/app/layout.tsx`.
  2. Expand `ProjectsRepository` (`src/repositories/projects.ts` + `src/repositories/projects.test.ts`) to expose typed ecosystem pillar features, developer profile metadata (`@stefanasemota`), and community/open-source tiers alongside the 10 ecosystem projects.
  3. Re-organize `src/components/HeroSection.tsx`, `src/components/ShareButton.tsx`, and `src/app/page.tsx` into a cohesive Grunge shell with Navbar, Anti-Grid Hero with 3D/Collage CSS element, 3 Ecosystem Pillar Feature cards, 3 Ecosystem Pods (10 apps), Creator & Architect Spotlight (`https://github.com/stefanasemota` with GitHub SVG icon), 3 Community & Open-Source Support Tiers, Final CTA, and the M2R-style Footer (no release notes).
- **Impact:** `src/app/globals.css`, `src/app/layout.tsx`, `src/repositories/projects.ts`, `src/repositories/projects.test.ts`, `src/components/HeroSection.tsx`, `src/components/ShareButton.tsx`, `src/app/page.tsx`.

---

## [01.11.2026] Latest AOS Audit Migration & `vibe-coding-guardrail` Showcase (`chore/aos-project-audit`)
- **Origin:** `aos-audit-project` Compliance Audit & Ecosystem Expansion
- **Context:** Audited the repository against the latest `aos-audit-project` Architectural Summary, which requires the 5-Badge Header Row in `README.md`, reverse-chronological `[DD.MM.YYYY]` dates in `decision.md` and `aos-audit.md`, `ai-rules.json` governance metadata, and showcasing the public library & plugin **[vibe-coding-guardrail](https://github.com/stefanasemota/vibe-coding-guardrail)**.
- **Decision:**
  1. Switched to isolated branch `chore/aos-project-audit`.
  2. Migrated all dates in `decision.md` and `aos-audit.md` from `YYYY-MM-DD` to `DD.MM.YYYY` and reordered `decision.md` newest-first.
  3. Added the 5-Badge Header Row and dedicated **[vibe-coding-guardrail](https://github.com/stefanasemota/vibe-coding-guardrail)** public library & plugin documentation section to `README.md` and `initiative.md`.
  4. Added `vibe-coding-guardrail` to `ProjectsRepository` (`src/repositories/projects.ts`) and updated `src/repositories/projects.test.ts` and `src/app/page.tsx` (`ShieldCheck` icon) so it renders live on the Launchpad UI and in SEO JSON-LD structured data.
  5. Added `ai-rules.json` and synced `AGENTS.md` with the latest Execution Discipline and Draft PR rules.
- **Impact:** Achieves full compliance with the latest `vibe-coding-guardrail` specification and surfaces the open-source guardrail plugin directly on the Sabi Ecosystem Launchpad.

---

## [31.10.2026] Shift-Left UI Wiring & Repository Cleanliness (`refactor/repository-wiring`)
- **Origin:** Follow-up `aos-audit-project` Deep Inspection
- **Context:** While `ProjectsRepository` existed in `src/repositories/projects.ts`, `src/app/page.tsx` and the JSON-LD `ItemList` in `src/app/layout.tsx` still contained inline hardcoded project lists, and the repository root held two legacy stray files (`static-home.html` and `.modified`).
- **Decision:**
  1. Switched to isolated branch `refactor/repository-wiring`.
  2. Expanded `ProjectsRepository` to cover all launchpad applications and wired both `src/app/page.tsx` and `src/app/layout.tsx` to consume `ProjectsRepository` as the single source of truth.
  3. Removed legacy `static-home.html` and `.modified` from the repository root.
- **Impact:** Eliminates data duplication between UI cards and SEO Schema.org structured data while enforcing strict Shift-Left repository boundaries.

---

## [31.10.2026] AOS Vibe-Coding Guardrail Compliance Audit (`aos-audit-project`)
- **Origin:** `aos-audit-project` Audit Execution
- **Context:** Audited repository structure against the `vibe-coder` Architectural Summary expectations (Core Documentation, `package.json` schema, Git & Governance hygiene, Shift-Left Repository pattern, and unit test separation).
- **Decision:** Applied all recommended compliance optimizations on branch `chore/aos-audit-compliance`:
  1. Appended the mandatory `aos Vibe Coding Guardrail` footer to `README.md`.
  2. Created `initiative.md`, `dev.md`, `decision.md`, `AGENTS.md`, `.nvmrc`, and `aos-audit.md`.
  3. Standardized `package.json` metadata (`name`, `version`, `description`, `author`, `keywords`, `repository`, `engines.node = 22`) and test scripts (`test`, `test:unit`, `test:e2e`).
  4. Hardened `.gitignore` with `/dist`, `*service-account*.json`, and `*key*.json`.
  5. Scaffolded `src/repositories/projects.ts` and `src/repositories/projects.test.ts` to enforce the Shift-Left Repository pattern.
- **Impact:** Repository achieves **14 / 14 (100%)** compliance with the `aos Vibe Coding Guardrail` standard.

---

## [09.10.2026] AI Search Crawler SEO & Ecosystem Pod Expansion
- **Origin:** User Request / Launchpad Ecosystem Update
- **Context:** New Sabi AI ecosystem applications (`Mile 2 Radio` and `Our Mumu Don Do`) went live and needed visibility on the central launchpad as well as discoverability by AI search crawlers (`GPTBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`).
- **Decision:** Activated both apps under the **Culture & Context** pod in `src/app/page.tsx`, added dynamic `src/app/robots.ts` and `src/app/sitemap.ts`, and embedded Schema.org JSON-LD (`WebSite` and `ItemList`) in `src/app/layout.tsx`.
- **Impact:** Improved organic and AI-agent indexing across all Sabi Ecosystem applications.
