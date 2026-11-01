# 🎸 Feature Plan: Grunge Design Single-Page Redesign (`feat/grunge-redesign`)

## Engine Profile (`profile-antigravity`)
- **`engine_name`**: `antigravity`
- **`execution_mode`**: `parallel-subagents`
- **`max_patch_size`**: `50`
- **`patch_strategy`**: `surgical-unified-diff`
- **`type_safety`**: `strict`
- **`gate_behavior`**: `explicit-pause-and-wait`
- **`review_depth`**: `multi-aspect-audit`

---

## 7-Phase FDD Checklist

- [x] **Phase 1: Discovery & FDD Decomposition**
  - FDD-1: Configure Grunge Design CSS tokens, noise filters, and torn-edge clip-paths for the global theme (`src/app/globals.css`, `tailwind.config.ts`).
  - FDD-2: Expand catalog and section data in the Shift-Left repository for the Grunge landing page (`src/repositories/projects.ts`, `src/repositories/projects.test.ts`).
  - FDD-3: Build the Grunge navigation shell and anti-grid Hero section with CSS 3D/collage visual elements for the launchpad (`src/components/HeroSection.tsx` / `src/components/Navbar.tsx`).
  - FDD-4: Render the Ecosystem Pods, Features (3 cards), Testimonials (3 cards), Pricing/Support Tiers (3 tiers), Developer Profile card (`https://github.com/stefanasemota` with GitHub SVG logo), and Final CTA in the Grunge layout (`src/app/page.tsx`).
  - FDD-5: Implement the M2R-analogous Grunge Footer (without release notes) including Powered by Firebase & Hostpoint,aos Vibe Coding Guardrail, Buy Me a Coffee, GitHub profile link, legal/SEO links, and Copyright 2026 (`src/components/Footer.tsx`).
- [x] **Phase 2: Targeted Codebase Exploration**
  - Inspected `src/app/globals.css`, `tailwind.config.ts`, `src/app/layout.tsx`, `src/app/page.tsx`, `src/components/HeroSection.tsx`, `src/components/ShareButton.tsx`, `src/repositories/projects.ts`, and `src/repositories/projects.test.ts`.
- [x] **Phase 3: Clarifying Questions & Spec Freeze (MANDATORY GATE)**
  - Keep 3 Ecosystem Pods (10 projects) as core showcase + Grunge Navbar, 3 Pod Feature Cards, Dev Profile Spotlight, 3 Community/Support Tiers, and Final CTA.
  - Dedicated Creator & Architect Grunge section + GitHub badge in Navbar & Footer (`https://github.com/stefanasemota`).
  - Multi-column M2R-style footer (Brand + ShareButton, Ecosystem & Legal/SEO links, GitHub/Social icons, Firebase/Hostpoint/Guardrail/BuyMeACoffee credits, no release notes).
- [x] **Phase 4: Architecture & Trade-Offs Matrix (MANDATORY GATE)**
  - Selected **Approach C (Pragmatic Balance)** and logged ADR `[01.11.2026]` at the top of `decision.md`.
- [x] **Phase 5: Incremental FDD Implementation (`aos-vibecode`)**
  - Completed FDD-1 through FDD-5 (`src/app/globals.css`, `tailwind.config.ts`, `src/app/layout.tsx`, `src/repositories/projects.ts`, `src/repositories/projects.test.ts`, `src/components/HeroSection.tsx`, `src/components/ShareButton.tsx`, `src/app/page.tsx`).
- [x] **Phase 6: Automated Quality & Security Review (`aos-verify` & `aos-check-for-security-issues` — MANDATORY GATE)**
  - Unit tests (`4/4` passing), `tsc --noEmit` (`0` errors), and production `next build` (`7/7` static pages, `/` at `7.22 kB`) passed.
  - Security scan (`aos-check-for-security-issues`): zero hardcoded secrets, zero client-side Admin SDK leaks, external links protected with `rel="noopener noreferrer"`.
- [x] **Phase 7: Delivery, Decision Logging & Draft PR + Planning Board Sync**
  - Committed on `feat/grunge-redesign`, pushed to `origin`, opened Draft PR, and synced to Sabi Ecosystem Planning Board (#1).
