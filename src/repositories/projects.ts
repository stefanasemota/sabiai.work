export type PodCategory = 'logic-productivity' | 'culture-context' | 'community-wellness';

export type ProjectIconKey =
  | 'shield-check'
  | 'filter'
  | 'handshake'
  | 'layers'
  | 'message-circle'
  | 'radio'
  | 'mumu-mask'
  | 'waves'
  | 'kids-cup'
  | 'whistle';

export interface EcosystemProject {
  id: string;
  name: string;
  domain: string;
  url?: string;
  description: string;
  pod: PodCategory;
  active: boolean;
  borderColorClass: string;
  iconColorClass: string;
  iconKey: ProjectIconKey;
  applicationCategory: string;
  accessNote?: string;
}

const ECOSYSTEM_PROJECTS: EcosystemProject[] = [
  {
    id: 'vibe-coding-guardrail',
    name: 'Vibe Coding Guardrail',
    domain: 'github.com/stefanasemota/vibe-coding-guardrail',
    url: 'https://github.com/stefanasemota/vibe-coding-guardrail',
    description:
      'Public AI coding guardrail library & plugin enforcing the 7-Phase Feature-Driven Development (FDD) workflow, Shift-Left Repository architecture, and automated compliance audits.',
    pod: 'logic-productivity',
    active: true,
    borderColorClass: 'border-emerald-500',
    iconColorClass: 'text-emerald-400',
    iconKey: 'shield-check',
    applicationCategory: 'DeveloperApplication',
  },
  {
    id: 'refine',
    name: 'Refine',
    domain: 'refine.sabiai.work',
    description: 'AI Toolkit for Prompt Engineers.',
    pod: 'logic-productivity',
    active: false,
    borderColorClass: 'border-purple-500',
    iconColorClass: 'text-purple-400',
    iconKey: 'filter',
    applicationCategory: 'DeveloperApplication',
  },
  {
    id: 'facilitator',
    name: 'Facilitator',
    domain: 'facilitator.sabiai.work',
    description: 'Agile coaching & team-building.',
    pod: 'logic-productivity',
    active: false,
    borderColorClass: 'border-teal-500',
    iconColorClass: 'text-teal-400',
    iconKey: 'handshake',
    applicationCategory: 'BusinessApplication',
  },
  {
    id: 'retro-lite',
    name: 'Retro-Lite',
    domain: 'retro.sabiai.work',
    description: 'Lean & Agile Retrospectives. Focused Drill-Downs for high-performing teams.',
    pod: 'logic-productivity',
    active: false,
    borderColorClass: 'border-indigo-500',
    iconColorClass: 'text-indigo-400',
    iconKey: 'layers',
    applicationCategory: 'BusinessApplication',
    accessNote: 'No public access',
  },
  {
    id: 'naijaspeak',
    name: 'NaijaSpeak',
    domain: 'naijaspeak.sabiai.work',
    url: 'https://naijaspeak.sabiai.work',
    description: 'The heartbeat of Lagos, digitized. High-fidelity radio and Pidgin translation for the global community.',
    pod: 'culture-context',
    active: true,
    borderColorClass: 'border-yellow-500',
    iconColorClass: 'text-yellow-400',
    iconKey: 'message-circle',
    applicationCategory: 'EducationalApplication',
  },
  {
    id: 'mile-2-radio',
    name: 'Mile 2 Radio',
    domain: 'm2r.sabiai.work',
    url: 'https://m2r.sabiai.work/dashboard',
    description: 'Live Afrobeat radio & synchronized streaming.',
    pod: 'culture-context',
    active: true,
    borderColorClass: 'border-teal-500',
    iconColorClass: 'text-teal-400',
    iconKey: 'radio',
    applicationCategory: 'MultimediaApplication',
  },
  {
    id: 'our-mumu-don-do',
    name: 'Our Mumu don Do',
    domain: 'our-mumu-don-do.sabiai.work',
    url: 'https://our-mumu-don-do.sabiai.work',
    description: 'Nigerian heritage & education.',
    pod: 'culture-context',
    active: true,
    borderColorClass: 'border-green-500',
    iconColorClass: 'text-green-400',
    iconKey: 'mumu-mask',
    applicationCategory: 'EducationalApplication',
  },
  {
    id: 'aqualog',
    name: 'Aqualog',
    domain: 'aqualog.asemota.ch',
    url: 'https://aqualog.asemota.ch/',
    description: 'Intelligent tracking for coldwater swimmers.',
    pod: 'community-wellness',
    active: true,
    borderColorClass: 'border-blue-500',
    iconColorClass: 'text-blue-400',
    iconKey: 'waves',
    applicationCategory: 'HealthApplication',
  },
  {
    id: 'kids-cup-helpers',
    name: 'Kids Cup Helpers',
    domain: 'studio--studio-8868769584-6a914.us-central1.hosted.app',
    url: 'https://studio--studio-8868769584-6a914.us-central1.hosted.app',
    description: 'Volunteer & shift planning for the FC Gelterkinden Kids Cup.',
    pod: 'community-wellness',
    active: true,
    borderColorClass: 'border-orange-500',
    iconColorClass: 'text-orange-400',
    iconKey: 'kids-cup',
    applicationCategory: 'SportsApplication',
  },
  {
    id: 'g-kicker-coach',
    name: 'G-Kicker Coach',
    domain: 'coach.g-kicker.sabiai.work',
    url: 'https://coach.g-kicker.sabiai.work',
    description: 'Digital training plans and drill management for soccer coaches for 6-7 years old.',
    pod: 'community-wellness',
    active: true,
    borderColorClass: 'border-green-500',
    iconColorClass: 'text-green-400',
    iconKey: 'whistle',
    applicationCategory: 'SportsApplication',
  },
];

export interface EcosystemFeature {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  description: string;
  iconKey: 'layers' | 'radio' | 'waves';
}

export interface DeveloperProfile {
  name: string;
  handle: string;
  role: string;
  githubUrl: string;
  readmeRepoUrl: string;
  websiteUrl: string;
  guardrailUrl: string;
  bio: string;
  highlights: string[];
}

export interface EcosystemTier {
  id: string;
  name: string;
  badge: string;
  priceLabel: string;
  cadence: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  highlighted: boolean;
}

const ECOSYSTEM_FEATURES: EcosystemFeature[] = [
  {
    id: 'feature-logic',
    code: 'POD // 01',
    title: 'Logic & Guardrail Engineering',
    subtitle: '7-Phase FDD & Prompt Precision',
    description:
      'Deterministic AI coding guardrails, Shift-Left repository architecture, and agile facilitation tools engineered for high-velocity builders.',
    iconKey: 'layers',
  },
  {
    id: 'feature-culture',
    code: 'POD // 02',
    title: 'Cultural Context & Signal',
    subtitle: 'Lagos to Global Broadcast',
    description:
      'High-fidelity Afrobeat streaming on Mile 2 Radio, Nigerian Pidgin intelligence on NaijaSpeak, and civic storytelling on Our Mumu Don Do.',
    iconKey: 'radio',
  },
  {
    id: 'feature-community',
    code: 'POD // 03',
    title: 'Community & Field Utility',
    subtitle: 'Real-World Wellness & Sport',
    description:
      'Coldwater immersion telemetry with Aqualog, youth tournament coordination with Kids Cup Helpers, and AI soccer drills with G-Kicker Coach.',
    iconKey: 'waves',
  },
];

const DEVELOPER_PROFILE: DeveloperProfile = {
  name: 'Stephan Asemota',
  handle: '@stefanasemota',
  role: 'Principal Ecosystem Architect & Creator of Sabi AI',
  githubUrl: 'https://github.com/stefanasemota',
  readmeRepoUrl: 'https://github.com/stefanasemota/stefanasemota',
  websiteUrl: 'https://asemota.ch/',
  guardrailUrl: 'https://github.com/stefanasemota/vibe-coding-guardrail',
  bio: 'Building culturally grounded AI products, open-source engineering guardrails, and community tools from Switzerland to Lagos. Explore the root GitHub profile README and public repositories.',
  highlights: [
    'Creator of aos Vibe Coding Guardrail (7-Phase FDD Protocol)',
    'Architect of 10+ Sabi Ecosystem Web & AI Applications',
    'Open-Source Maintainer & Agile Technical Coach',
  ],
};

const ECOSYSTEM_TIERS: EcosystemTier[] = [
  {
    id: 'tier-open-access',
    name: 'Public Launchpad',
    badge: 'OPEN ACCESS',
    priceLabel: 'FREE',
    cadence: 'forever // public pods',
    description: 'Instant browser access to live Sabi Ecosystem applications and cultural broadcasts.',
    features: [
      'Live streaming on Mile 2 Radio (M2R)',
      'NaijaSpeak Pidgin translation & Our Mumu Don Do',
      'Aqualog, Kids Cup Helpers & G-Kicker Coach access',
    ],
    ctaLabel: 'Explore Live Apps',
    ctaHref: '#projects',
    highlighted: false,
  },
  {
    id: 'tier-guardrail-oss',
    name: 'Vibe Coding Guardrail',
    badge: 'RECOMMENDED // OSS PLUGIN',
    priceLabel: 'MIT OSS',
    cadence: 'github plugin & library',
    description: 'Install our public AI coding guardrail plugin & 7-Phase FDD skill suite in your own repos.',
    features: [
      'Engine-neutral 7-Phase FDD orchestrator (vibe-coder)',
      'Automated repo compliance auditor (aos-audit-project)',
      'Shift-Left Repository & security gates (aos-verify)',
    ],
    ctaLabel: 'Get the Guardrail Plugin',
    ctaHref: 'https://github.com/stefanasemota/vibe-coding-guardrail',
    highlighted: true,
  },
  {
    id: 'tier-fuel',
    name: 'Fuel the Ecosystem',
    badge: 'BACKER // PATRON',
    priceLabel: 'COFFEE',
    cadence: 'community patronage',
    description: 'Support independent hosting, radio streaming bandwidth, and open-source AI tooling.',
    features: [
      'Directly backs Firebase & Hostpoint infrastructure',
      'Supports new cultural & community pod experiments',
      'Connect with @stefanasemota on GitHub',
    ],
    ctaLabel: 'Buy Me a Coffee',
    ctaHref: 'https://buymeacoffee.com/stephanasex',
    highlighted: false,
  },
];

export class ProjectsRepository {
  static getAllProjects(): EcosystemProject[] {
    return [...ECOSYSTEM_PROJECTS];
  }

  static getActiveProjects(): EcosystemProject[] {
    return ECOSYSTEM_PROJECTS.filter((project) => project.active);
  }

  static getProjectsByPod(pod: PodCategory): EcosystemProject[] {
    return ECOSYSTEM_PROJECTS.filter((project) => project.pod === pod);
  }

  static getEcosystemFeatures(): EcosystemFeature[] {
    return [...ECOSYSTEM_FEATURES];
  }

  static getDeveloperProfile(): DeveloperProfile {
    return {
      ...DEVELOPER_PROFILE,
      highlights: [...DEVELOPER_PROFILE.highlights],
    };
  }

  static getEcosystemTiers(): EcosystemTier[] {
    return ECOSYSTEM_TIERS.map((tier) => ({
      ...tier,
      features: [...tier.features],
    }));
  }
}
