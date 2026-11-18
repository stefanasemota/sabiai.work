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
  Coffee,
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
            OPEN -&gt;
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
    subtitle: 'Prompt engineering, developer tooling & agile team facilitation.',
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
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#1a1815] text-[#ece6d8]">
      {/* 1. GRUNGE NAVBAR */}
      <header className="sticky top-0 z-40">
        <nav className="nav max-w-6xl mx-auto mt-2 justify-between flex-wrap" aria-label="Primary Navigation">
          <a href="#" className="flex items-center gap-3 group cursor-pointer">
            <span className="bg-[#c1391f] text-white grunge-display text-2xl font-bold px-3 py-1 border-2 border-[#0c0b09] shadow-[3px_3px_0_#0c0b09] group-hover:bg-[#d9b23c] group-hover:text-black transition-colors">
              SABI // AI
            </span>
          </a>

          <div className="flex flex-wrap items-center gap-4 md:gap-6">
            <a
              href="#logic-productivity"
              className="grunge-label text-[#ece6d8] hover:text-[#d9b23c] transition-colors cursor-pointer"
            >
              [01. Logic]
            </a>
            <a
              href="#culture-context"
              className="grunge-label text-[#ece6d8] hover:text-[#d9b23c] transition-colors cursor-pointer"
            >
              [02. Culture]
            </a>
            <a
              href="#community-wellness"
              className="grunge-label text-[#ece6d8] hover:text-[#d9b23c] transition-colors cursor-pointer"
            >
              [03. Community]
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/stefanasemota"
              target="_blank"
              rel="noopener noreferrer"
              className="btn text-xs py-2 px-3"
              aria-label="Stephan Asemota GitHub Profile"
            >
              <GitHubLogoSvg className="w-4 h-4" />
              <span className="hidden md:inline">@stefanasemota</span>
            </a>
            <a href="#projects" className="btn btn--primary text-xs py-2 px-4">
              <span>Explore</span>
            </a>
          </div>
        </nav>
      </header>

      {/* MAIN CONTENT SHELL */}
      <main className="w-full max-w-6xl mx-auto px-4 sm:px-6 space-y-24 pb-20">
        {/* 2. HERO SECTION */}
        <HeroSection />

        {/* 3. ECOSYSTEM PODS SHOWCASE (10 PROJECTS) */}
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
                &ldquo;Sabi&rdquo; /’sah-bee/ (v.) — To understand deeply. Cultural
                intelligence, community wellness, and AI engineering tools.
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

          {/* Bottom Infrastructure Bar */}
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
                . © Sabi AI 2025 - 2027. All rights reserved.
              </p>
              <p>
                Fuel the Project — Buy me a coffee:{' '}
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
