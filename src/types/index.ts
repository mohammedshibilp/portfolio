export interface Project {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  features: string[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  architectureDiagram?: string;
  highlights: string[];
  image: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  type: string;
  location: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  isCurrent?: boolean;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: {
    name: string;
    level: number;
    icon?: string;
    isPrimary?: boolean;
  }[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  badgeColor: string;
  icon: string;
  topics: string[];
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
  sublabel: string;
  icon: string;
}
