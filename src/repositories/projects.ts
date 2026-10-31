export type PodCategory = 'logic-productivity' | 'culture-context' | 'community-wellness';

export interface EcosystemProject {
  id: string;
  name: string;
  domain: string;
  url?: string;
  description: string;
  pod: PodCategory;
  active: boolean;
}

const ECOSYSTEM_PROJECTS: EcosystemProject[] = [
  {
    id: 'refine',
    name: 'Refine',
    domain: 'refine.sabiai.work',
    description: 'AI Toolkit for Prompt Engineers.',
    pod: 'logic-productivity',
    active: false,
  },
  {
    id: 'facilitator',
    name: 'Facilitator',
    domain: 'facilitator.sabiai.work',
    description: 'Agile coaching & team-building.',
    pod: 'logic-productivity',
    active: false,
  },
  {
    id: 'retro-lite',
    name: 'Retro-Lite',
    domain: 'retro.sabiai.work',
    description: 'Lean & Agile Retrospectives. Focused Drill-Downs for high-performing teams.',
    pod: 'logic-productivity',
    active: false,
  },
  {
    id: 'naijaspeak',
    name: 'NaijaSpeak',
    domain: 'naijaspeak.sabiai.work',
    url: 'https://naijaspeak.sabiai.work',
    description: 'The heartbeat of Lagos, digitized. High-fidelity radio and Pidgin translation for the global community.',
    pod: 'culture-context',
    active: true,
  },
  {
    id: 'mile-2-radio',
    name: 'Mile 2 Radio',
    domain: 'm2r.sabiai.work',
    url: 'https://m2r.sabiai.work/dashboard',
    description: 'Live Afrobeat radio & synchronized streaming.',
    pod: 'culture-context',
    active: true,
  },
  {
    id: 'our-mumu-don-do',
    name: 'Our Mumu Don Do',
    domain: 'our-mumu-don-do.sabiai.work',
    url: 'https://our-mumu-don-do.sabiai.work',
    description: 'Interactive Nigerian heritage, critical thinking, and civic storytelling.',
    pod: 'culture-context',
    active: true,
  },
  {
    id: 'aqualog',
    name: 'Aqualog',
    domain: 'aqualog.sabiai.work',
    description: 'Coldwater swimming tracker and wellness log.',
    pod: 'community-wellness',
    active: false,
  },
  {
    id: 'g-kicker-coach',
    name: 'G-Kicker Coach',
    domain: 'coach.g-kicker.sabiai.work',
    url: 'https://coach.g-kicker.sabiai.work',
    description: 'SFV-compliant G-Junioren football training planner powered by generative AI.',
    pod: 'community-wellness',
    active: true,
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
