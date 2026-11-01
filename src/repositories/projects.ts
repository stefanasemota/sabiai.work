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
}
