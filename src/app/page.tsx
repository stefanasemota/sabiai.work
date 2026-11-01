import {
  MessageCircle,
  Filter,
  Handshake,
  Waves,
  Layers,
  Radio,
  ShieldCheck,
  ExternalLink,
  Lock,
  Check,
  ArrowUpRight,
  Coffee,
  Terminal,
  Compass,
} from 'lucide-react';
import { ShareButton } from '@/components/ShareButton';
import { HeroSection } from '@/components/HeroSection';
import {
  ProjectsRepository,
  type EcosystemProject,
  type PodCategory,
  type ProjectIconKey,
} from '@/repositories/projects';

function GitHubLogoSvg({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

function renderProjectIcon(iconKey: ProjectIconKey) {
  const className = 'text-[#d9b23c] h-7 w-7 shrink-0';
  switch (iconKey) {
    case 'shield-check':
      return <ShieldCheck className={className} />;
    case 'filter':
      return <Filter className={className} />;
    case 'handshake':
      return <Handshake className={className} />;
    case 'layers':
      return <Layers className={className} />;
    case 'message-circle':
      return <MessageCircle className={className} />;
    case 'radio':
      return <Radio className={className} />;
    case 'waves':
      return <Waves className={className} />;
    case 'mumu-mask':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          aria-hidden="true"
        >
          <path d="M4.2 10.2C5.4 7.2 8.4 5 12 5c3.6 0 6.6 2.2 7.8 5.2" />
          <path d="M4.5 16.5c0 3 2.5 5.5 7.5 5.5s7.5-2.5 7.5-5.5" />
          <path d="M9.5 13.5c-.2 0-.5.2-.5.5v1c0 .3.2.5.5.5h5c.2 0 .5-.2.5-.5v-1c0-.3-.2-.5-.5-.5h-5z" />
          <path d="M7.5 12.5c0-1.5 1-2.5 2-2.5h5c1 0 2 1 2 2.5" />
          <path d="M9 8a1 1 0 0 1-1-1 1 1 0 1 1 2 0 1 1 0 0 1-1 1z" />
          <path d="M15 8a1 1 0 0 1-1-1 1 1 0 1 1 2 0 1 1 0 0 1-1 1z" />
        </svg>
      );
    case 'kids-cup':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a10 10 0 0 1 8.66 5H3.34A10 10 0 0 1 12 2z" />
          <path d="M12 22a10 10 0 0 0 8.66-5H3.34A10 10 0 0 0 12 22z" />
          <path d="M17.66 7 12 12l-5.66-5" />
          <path d="M17.66 17 12 12l-5.66 5" />
          <path d="m12 2-4 10 4 10 4-10-4-10z" />
        </svg>
      );
    case 'whistle':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          aria-hidden="true"
        >
          <path d="m21.2 14.8-6-6A4.98 4.98 0 0 0 11.8 7c-2.8 0-5 2.2-5 5s2.2 5 5 5c.8 0 1.5-.2 2.2-.6l6 6c.5.5 1.4.5 1.9 0l1.1-1.1c.4-.5.4-1.3-.1-1.7z" />
          <path d="m11.8 7-3.9 3.9" />
          <path d="M17.6 17.6 14 14" />
        </svg>
      );
  }
}

function ProjectCard({ project, index }: { project: EcosystemProject; index: number }) {
  const tiltClass = index % 2 === 0 ? 'card-tilted-left' : 'card-tilted-right';

  const cardInner = (
    <>
      <div className="grunge-tape" aria-hidden="true" />
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-[#1a1815] border-2 border-[#0c0b09] shadow-[2px_2px_0_#0c0b09]">
            {renderProjectIcon(project.iconKey)}
          </div>
          <div>
            <h3 className="grunge-display text-2xl font-bold text-[#ece6d8]">
              {project.name}
            </h3>
            <p className="grunge-label text-[#a89f8a] break-all">{project.domain}</p>
          </div>
        </div>
        {project.active ? (
          <span className="badge shrink-0">
            <span>LIVE</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </span>
        ) : (
          <span className="badge badge--muted shrink-0">
            <Lock className="w-3.5 h-3.5" />
            <span>LAB // SOON</span>
          </span>
        )}
      </div>

      <p className="text-[#ece6d8] text-base leading-relaxed border-t border-dashed border-[#55503f] pt-3">
        {project.description}
      </p>

      <div className="mt-4 pt-2 flex items-center justify-between text-xs text-[#a89f8a]">
        <span className="grunge-label">{project.applicationCategory}</span>
        {project.accessNote ? (
          <span className="italic text-[#d9b23c]">{project.accessNote}</span>
        ) : project.active ? (
          <span className="grunge-label text-[#d9b23c] underline">
            OPEN APPLICATION -&gt;
          </span>
        ) : (
          <span className="grunge-label">INTERNAL BUILD</span>
        )}
      </div>
    </>
  );

  if (project.active && project.url) {
    return (
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`card card-interactive ${tiltClass} block cursor-pointer border-l-8 border-l-[#c1391f]`}
      >
        {cardInner}
      </a>
    );
  }

  return (
    <div
      className={`card ${tiltClass} block border-l-8 border-l-[#55503f] opacity-80`}
      aria-disabled="true"
    >
      {cardInner}
    </div>
  );
}

const POD_SECTIONS: { id: PodCategory; code: string; title: string; subtitle: string }[] = [
  {
    id: 'logic-productivity',
    code: 'SECTOR 01 // LOGIC',
    title: 'Logic & Productivity',
    subtitle: 'AI coding guardrails, prompt engineering & agile team facilitation.',
  },
  {
    id: 'culture-context',
    code: 'SECTOR 02 // CULTURE',
    title: 'Culture & Context',
    subtitle: 'Digitizing Lagos street intelligence, Afrobeat radio & civic heritage.',
  },
  {
    id: 'community-wellness',
    code: 'SECTOR 03 // COMMUNITY',
    title: 'Community & Wellness',
    subtitle: 'Coldwater immersion telemetry, youth sports coaching & volunteer ops.',
  },
];

export default function Home() {
  const features = ProjectsRepository.getEcosystemFeatures();
  const devProfile = ProjectsRepository.getDeveloperProfile();
  const tiers = ProjectsRepository.getEcosystemTiers();

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#1a1815] text-[#ece6d8]">
      {/* 1. GRUNGE NAVBAR */}
      <header className="sticky top-0 z-40">
        <nav className="nav max-w-6xl mx-auto mt-2 justify-between flex-wrap" aria-label="Primary Navigation">
          <a href="#" className="flex items-center gap-3 group cursor-pointer">
            <span className="bg-[#c1391f] text-white grunge-display text-2xl font-bold px-3 py-1 border-2 border-[#0c0b09] shadow-[3px_3px_0_#0c0b09] group-hover:bg-[#d9b23c] group-hover:text-black transition-colors">
              SABI // AI
            </span>
            <span className="grunge-label text-[#a89f8a] hidden sm:inline">
              ECOSYSTEM LAUNCHPAD
            </span>
          </a>

          <div className="flex flex-wrap items-center gap-4 md:gap-6">
            <a
              href="#features"
              className="grunge-label text-[#ece6d8] hover:text-[#d9b23c] transition-colors cursor-pointer"
            >
              [01. Pillars]
            </a>
            <a
              href="#projects"
              className="grunge-label text-[#ece6d8] hover:text-[#d9b23c] transition-colors cursor-pointer"
            >
              [02. Pods]
            </a>
            <a
              href="#developer"
              className="grunge-label text-[#ece6d8] hover:text-[#d9b23c] transition-colors cursor-pointer"
            >
              [03. Architect]
            </a>
            <a
              href="#tiers"
              className="grunge-label text-[#ece6d8] hover:text-[#d9b23c] transition-colors cursor-pointer"
            >
              [04. Access]
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={devProfile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn text-xs py-2 px-3"
              aria-label="Stephan Asemota GitHub Profile"
            >
              <GitHubLogoSvg className="w-4 h-4" />
              <span className="hidden md:inline">{devProfile.handle}</span>
            </a>
            <a href="#projects" className="btn btn--primary text-xs py-2 px-4">
              <span>Launch Apps</span>
            </a>
          </div>
        </nav>
      </header>

      {/* MAIN CONTENT SHELL */}
      <main className="w-full max-w-6xl mx-auto px-4 sm:px-6 space-y-24 pb-20">
        {/* 2. HERO SECTION */}
        <HeroSection />

        {/* 3. FEATURES SECTION (3 PILLAR CARDS) */}
        <section id="features" className="space-y-8 scroll-mt-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-2 border-[#55503f] pb-4">
            <div>
              <span className="badge">SYSTEM ARCHITECTURE // 3 PILLARS</span>
              <h2 className="grunge-display text-4xl md:text-5xl font-bold mt-2 text-[#ece6d8]">
                BUILT FOR SIGNAL, NOT NOISE
              </h2>
            </div>
            <p className="text-sm text-[#a89f8a] max-w-md">
              Every project under the Sabi AI umbrella is anchored in one of three
              foundational engineering and cultural pods.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feat, idx) => (
              <article
                key={feat.id}
                className={`card ${idx === 1 ? 'border-[#d9b23c] bg-[#2e2a23]' : ''}`}
              >
                <div className="grunge-tape" aria-hidden="true" />
                <div className="flex items-center justify-between mb-4">
                  <span className="badge badge--crimson">{feat.code}</span>
                  <div className="p-2 bg-[#1a1815] border-2 border-[#0c0b09]">
                    {renderProjectIcon(feat.iconKey)}
                  </div>
                </div>
                <h3 className="grunge-display text-2xl font-bold text-[#ece6d8]">
                  {feat.title}
                </h3>
                <p className="grunge-label text-[#d9b23c] mt-1 mb-3">{feat.subtitle}</p>
                <p className="text-sm text-[#ece6d8] leading-relaxed">{feat.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* 4. ECOSYSTEM PODS SHOWCASE (10 PROJECTS) */}
        <div id="projects" className="space-y-20 scroll-mt-24">
          {POD_SECTIONS.map((section) => {
            const projects = ProjectsRepository.getProjectsByPod(section.id);
            return (
              <section key={section.id} id={section.id} className="space-y-8">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b-2 border-[#0c0b09] bg-[#24211c] p-5 shadow-[4px_4px_0_#0c0b09] -rotate-1">
                  <div>
                    <span className="grunge-label text-[#d9b23c]">{section.code}</span>
                    <h2 className="grunge-display text-3xl md:text-4xl font-bold text-[#ece6d8] mt-1">
                      {section.title}
                    </h2>
                  </div>
                  <p className="text-sm text-[#a89f8a] max-w-md">{section.subtitle}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {projects.map((project, idx) => (
                    <ProjectCard key={project.id} project={project} index={idx} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {/* 5. DEVELOPER / ARCHITECT PROFILE SECTION (@stefanasemota) */}
        <section id="developer" className="scroll-mt-24">
          <div className="card bg-[#2e2a23] border-2 border-[#d9b23c] p-8 md:p-10">
            <div className="grunge-tape" aria-hidden="true" />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="badge">DEV PROFILE // ARCHITECT</span>
                  <span className="badge badge--crimson">ROOT GITHUB README LIVE</span>
                </div>

                <h2 className="grunge-display text-4xl md:text-5xl font-bold text-[#ece6d8]">
                  {devProfile.name}{' '}
                  <span className="text-[#d9b23c]">({devProfile.handle})</span>
                </h2>
                <p className="grunge-label text-[#a89f8a]">{devProfile.role}</p>
                <p className="text-base text-[#ece6d8] leading-relaxed max-w-2xl">
                  {devProfile.bio}
                </p>

                <ul className="space-y-2 pt-2">
                  {devProfile.highlights.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-[#ece6d8]">
                      <Check className="w-4 h-4 text-[#d9b23c] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-4 bg-[#1a1815] border-2 border-[#0c0b09] p-6 shadow-[4px_4px_0_#0c0b09] rotate-1">
                <div className="flex items-center gap-3 border-b border-dashed border-[#55503f] pb-4">
                  <div className="p-3 bg-[#c1391f] text-white border-2 border-[#0c0b09]">
                    <GitHubLogoSvg className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="grunge-display text-xl font-bold text-[#ece6d8]">
                      GITHUB // ROOT PROFILE
                    </p>
                    <p className="grunge-label text-[#d9b23c]">github.com/stefanasemota</p>
                  </div>
                </div>

                <p className="text-xs text-[#a89f8a]">
                  Inspect the root profile README.md, open-source repositories, and the
                  7-Phase FDD Vibe Coding Guardrail plugin directly on GitHub.
                </p>

                <a
                  href={devProfile.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary w-full justify-center"
                >
                  <GitHubLogoSvg className="w-5 h-5" />
                  <span>Visit @stefanasemota on GitHub</span>
                </a>

                <a
                  href={devProfile.guardrailUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--secondary w-full justify-center text-sm"
                >
                  <Terminal className="w-4 h-4" />
                  <span>vibe-coding-guardrail Repo</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 6. OPEN-SOURCE & ECOSYSTEM ACCESS TIERS (3 TIERS, MIDDLE HIGHLIGHTED) */}
        <section id="tiers" className="space-y-8 scroll-mt-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-2 border-[#55503f] pb-4">
            <div>
              <span className="badge">ACCESS &amp; PATRONAGE // 3 TIERS</span>
              <h2 className="grunge-display text-4xl md:text-5xl font-bold mt-2 text-[#ece6d8]">
                OPEN TOOLS. ZERO GATEKEEPING.
              </h2>
            </div>
            <p className="text-sm text-[#a89f8a] max-w-md">
              Stream live broadcasts for free, adopt the open-source AI guardrail plugin,
              or fuel the independent server infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {tiers.map((tier) => (
              <div
                key={tier.id}
                className={`card flex flex-col justify-between ${
                  tier.highlighted
                    ? 'border-4 border-[#c1391f] bg-[#2e2a23] -translate-y-1'
                    : ''
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className={tier.highlighted ? 'badge badge--crimson' : 'badge'}>
                      {tier.badge}
                    </span>
                  </div>
                  <h3 className="grunge-display text-3xl font-bold text-[#ece6d8]">
                    {tier.name}
                  </h3>
                  <div className="border-y-2 border-dashed border-[#55503f] py-3">
                    <span className="grunge-display text-4xl font-bold text-[#d9b23c]">
                      {tier.priceLabel}
                    </span>
                    <span className="block grunge-label text-[#a89f8a] mt-1">
                      {tier.cadence}
                    </span>
                  </div>
                  <p className="text-sm text-[#ece6d8]">{tier.description}</p>
                  <ul className="space-y-2.5 pt-2">
                    {tier.features.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-[#ece6d8]">
                        <Check className="w-4 h-4 text-[#d9b23c] shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-[#55503f]">
                  <a
                    href={tier.ctaHref}
                    target={tier.ctaHref.startsWith('http') ? '_blank' : undefined}
                    rel={tier.ctaHref.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`btn w-full ${
                      tier.highlighted ? 'btn--primary' : 'btn--secondary'
                    }`}
                  >
                    <span>{tier.ctaLabel}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 7. FINAL CTA */}
        <section className="card bg-[#c1391f] text-white border-4 border-[#0c0b09] p-8 md:p-12 text-center space-y-6">
          <span className="badge">SIGNAL BROADCAST // READY</span>
          <h2 className="grunge-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            TUNE IN OR BUILD WITH THE GUARDRAIL
          </h2>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-white/95">
            Jump straight into live Afrobeat streaming on Mile 2 Radio, translate Pidgin
            on NaijaSpeak, or enforce the 7-Phase FDD workflow in your repository today.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <a
              href="https://m2r.sabiai.work/dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--secondary"
            >
              <Radio className="w-5 h-5" />
              <span>Tune Into Mile 2 Radio</span>
            </a>
            <a
              href={devProfile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-[#0c0b09] text-[#ece6d8] border-[#ece6d8]"
            >
              <GitHubLogoSvg className="w-5 h-5" />
              <span>GitHub: @stefanasemota</span>
            </a>
          </div>
        </section>
      </main>

      {/* 8. M2R-ANALOGOUS MULTI-COLUMN GRUNGE FOOTER (NO RELEASE NOTES) */}
      <footer className="border-t-4 border-[#0c0b09] bg-[#24211c] text-[#ece6d8] pt-14 pb-10 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            {/* Brand & Share Column */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <span className="bg-[#c1391f] text-white grunge-display text-2xl font-bold px-3 py-1 border-2 border-[#0c0b09] shadow-[3px_3px_0_#0c0b09]">
                  SABI // AI
                </span>
                <span className="grunge-label text-[#d9b23c]">
                  KNOWLEDGE AT WORK
                </span>
              </div>
              <p className="text-sm text-[#a89f8a] max-w-sm leading-relaxed">
                &ldquo;Sabi&rdquo; /’sah-bee/ (v.) — To understand deeply. Central launchpad for
                cultural intelligence, community wellness, and deterministic AI engineering
                tools.
              </p>
              <div className="pt-1">
                <ShareButton />
              </div>
            </div>

            {/* Live Ecosystem Directory Links */}
            <div className="md:col-span-4 space-y-3">
              <h3 className="grunge-display text-lg text-[#d9b23c] tracking-wider">
                ECOSYSTEM DIRECTORY
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://m2r.sabiai.work/dashboard"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#d9b23c] transition-colors inline-flex items-center gap-1.5"
                  >
                    <Radio className="w-3.5 h-3.5 text-[#c1391f]" />
                    <span>Mile 2 Radio (M2R Live Stream)</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://naijaspeak.sabiai.work"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#d9b23c] transition-colors inline-flex items-center gap-1.5"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#d9b23c]" />
                    <span>NaijaSpeak Pidgin Engine</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://our-mumu-don-do.sabiai.work"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#d9b23c] transition-colors inline-flex items-center gap-1.5"
                  >
                    <Compass className="w-3.5 h-3.5 text-[#d9b23c]" />
                    <span>Our Mumu Don Do Heritage</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://aqualog.asemota.ch/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#d9b23c] transition-colors inline-flex items-center gap-1.5"
                  >
                    <Waves className="w-3.5 h-3.5 text-[#d9b23c]" />
                    <span>Aqualog Coldwater Tracker</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://coach.g-kicker.sabiai.work"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#d9b23c] transition-colors inline-flex items-center gap-1.5"
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-[#d9b23c]" />
                    <span>G-Kicker Youth Soccer Coach</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Developer, Governance & Legal/SEO Links */}
            <div className="md:col-span-3 space-y-3">
              <h3 className="grunge-display text-lg text-[#d9b23c] tracking-wider">
                ARCHITECT &amp; LEGAL
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://github.com/stefanasemota"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#d9b23c] transition-colors inline-flex items-center gap-2 font-bold"
                  >
                    <GitHubLogoSvg className="w-4 h-4 text-[#d9b23c]" />
                    <span>GitHub: @stefanasemota</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/stefanasemota/vibe-coding-guardrail"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#d9b23c] transition-colors inline-flex items-center gap-2"
                  >
                    <Terminal className="w-4 h-4 text-[#c1391f]" />
                    <span>vibe-coding-guardrail</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://asemota.ch/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#d9b23c] transition-colors"
                  >
                    Privacy Policy &amp; Terms of Use
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:stefan@asemota.ch"
                    className="hover:text-[#d9b23c] transition-colors"
                  >
                    Contact: stefan@asemota.ch
                  </a>
                </li>
                <li className="flex items-center gap-3 pt-1 text-xs text-[#a89f8a]">
                  <a href="/sitemap.xml" className="hover:text-[#d9b23c] underline">
                    Sitemap.xml
                  </a>
                  <span>/</span>
                  <a href="/robots.txt" className="hover:text-[#d9b23c] underline">
                    Robots.txt
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Infrastructure & Guardrail Bar (M2R Analogous, No Release Notes) */}
          <div className="border-t-2 border-dashed border-[#55503f] pt-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 text-xs text-[#a89f8a]">
            <div className="space-y-1">
              <p>
                Powered by{' '}
                <a
                  href="https://firebase.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ece6d8] hover:text-[#d9b23c] underline transition-colors"
                >
                  Firebase
                </a>{' '}
                &amp;{' '}
                <a
                  href="https://www.hostpoint.ch/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ece6d8] hover:text-[#d9b23c] underline transition-colors"
                >
                  Hostpoint
                </a>
                . © Sabi AI 2025 - 2026. All rights reserved.
              </p>
              <p>
                Powered by{' '}
                <a
                  href="https://github.com/stefanasemota/vibe-coding-guardrail"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#d9b23c] hover:underline font-semibold"
                >
                  aos Vibe Coding Guardrail
                </a>{' '}
                | Fuel the Project — Buy me a coffee:{' '}
                <a
                  href="https://buymeacoffee.com/stephanasex"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ece6d8] hover:text-[#d9b23c] underline inline-flex items-center gap-1"
                >
                  <Coffee className="w-3.5 h-3.5 text-[#d9b23c]" />
                  <span>buymeacoffee.com/stephanasex</span>
                </a>
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://github.com/stefanasemota"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Stephan Asemota on GitHub"
                className="p-2 bg-[#1a1815] border-2 border-[#0c0b09] text-[#ece6d8] hover:text-[#d9b23c] hover:border-[#d9b23c] transition-colors"
              >
                <GitHubLogoSvg className="w-5 h-5" />
              </a>
              <a
                href="https://buymeacoffee.com/stephanasex"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Buy Stephan a Coffee"
                className="p-2 bg-[#1a1815] border-2 border-[#0c0b09] text-[#ece6d8] hover:text-[#d9b23c] hover:border-[#d9b23c] transition-colors"
              >
                <Coffee className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
