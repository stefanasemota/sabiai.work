'use client';

import Link from 'next/link';
import { ArrowDownRight, ShieldCheck, Radio, Sparkles } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative py-12 md:py-20 border-b-2 border-[#55503f]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: Chaotic Overlapping Type & Dual CTAs */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <div className="flex flex-wrap items-center gap-3">
            <span className="badge">ZINE // ISSUE 2026.11</span>
            <span className="badge badge--crimson">KNOWLEDGE AT WORK</span>
            <span className="grunge-label text-[#a89f8a]">
              [RAY GUN // BRUTALIST EDITION]
            </span>
          </div>

          <div className="relative">
            <p className="grunge-label text-[#d9b23c] mb-1 tracking-widest">
              SABI /’SAH-BEE/ (V.) — TO UNDERSTAND DEEPLY
            </p>
            <h1 className="grunge-display text-5xl sm:text-6xl md:text-7xl font-bold text-[#ece6d8] tracking-tight">
              THE SABI{' '}
              <span className="inline-block bg-[#c1391f] text-white px-3 py-0.5 -rotate-1 shadow-[4px_4px_0_#0c0b09] border-2 border-[#0c0b09]">
                ECOSYSTEM
              </span>
              <span className="block text-3xl sm:text-4xl md:text-5xl text-[#d9b23c] mt-2 rotate-1">
                LAUNCHPAD // RAW CULTURAL &amp; AI TOOLS
              </span>
            </h1>
          </div>

          <p className="text-base md:text-lg text-[#ece6d8] max-w-2xl border-l-4 border-[#c1391f] pl-4 bg-[#24211c]/80 py-2">
            We build and broadcast projects that celebrate local identity on a
            global scale. From open-source AI coding guardrails and prompt
            engineering to live Lagos Afrobeat radio and coldwater telemetry —
            engineered without corporate polish.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link href="#projects" className="btn btn--primary">
              <span>Explore Ecosystem Pods</span>
              <ArrowDownRight className="w-5 h-5" />
            </Link>
            <a
              href="https://github.com/stefanasemota/vibe-coding-guardrail"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--secondary"
            >
              <ShieldCheck className="w-5 h-5" />
              <span>Vibe Coding Guardrail</span>
            </a>
          </div>
        </div>

        {/* Right Column: 3D/Abstract Photocopied Zine Collage Visual Element */}
        <div className="lg:col-span-5 grunge-collage-stage">
          <div className="card grunge-collage-plate bg-[#2e2a23] border-2 border-[#ece6d8] p-6 relative">
            <div className="grunge-tape" aria-hidden="true" />

            {/* Decorative SVG distress crosshair & splatter lines */}
            <div className="flex items-center justify-between border-b-2 border-dashed border-[#55503f] pb-3 mb-4">
              <span className="grunge-label text-[#d9b23c]">
                SIGNAL MATRIX // VERIFIED
              </span>
              <svg
                className="w-6 h-6 text-[#c1391f]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="9" />
                <line x1="12" y1="1" x2="12" y2="23" />
                <line x1="1" y1="12" x2="23" y2="12" />
              </svg>
            </div>

            <div className="space-y-4">
              <div className="bg-[#1a1815] border-2 border-[#0c0b09] p-3 shadow-[3px_3px_0_#0c0b09] -rotate-1">
                <div className="flex items-center justify-between">
                  <span className="grunge-label text-[#a89f8a]">01 // LOGIC &amp; AI</span>
                  <Sparkles className="w-4 h-4 text-[#d9b23c]" />
                </div>
                <p className="grunge-display text-xl text-[#ece6d8] mt-1">
                  7-PHASE FDD GUARDRAIL + REFINE
                </p>
              </div>

              <div className="bg-[#c1391f] text-white border-2 border-[#0c0b09] p-3 shadow-[3px_3px_0_#0c0b09] rotate-1">
                <div className="flex items-center justify-between">
                  <span className="grunge-label text-white/90">02 // ON AIR NOW</span>
                  <Radio className="w-4 h-4 text-white" />
                </div>
                <p className="grunge-display text-xl mt-1">
                  MILE 2 RADIO + NAIJASPEAK + MUMU DON DO
                </p>
              </div>

              <div className="bg-[#24211c] border-2 border-[#55503f] p-3 shadow-[3px_3px_0_#0c0b09] -rotate-1">
                <div className="flex items-center justify-between">
                  <span className="grunge-label text-[#d9b23c]">03 // FIELD &amp; SPORT</span>
                  <span className="badge">LIVE</span>
                </div>
                <p className="grunge-display text-xl text-[#ece6d8] mt-1">
                  AQUALOG + G-KICKER + KIDS CUP
                </p>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t-2 border-[#0c0b09] flex items-center justify-between text-xs text-[#a89f8a]">
              <span>NODES: 10 REGISTERED // 7 ACTIVE</span>
              <span className="text-[#d9b23c] font-bold">EST. 2025–2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
