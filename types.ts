export interface Project {
  title: string;
  description: string;
  technologies: string[];
  repoUrl?: string;
  demoUrl?: string;
  imageUrl: string;
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  description: string[];
  techStack: string[];
}

export interface Education {
  institution: string;
  degree: string;
  location: string;
  period: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
  iconName: string;
}

export interface Certification {
  name: string;
  date?: string;
  status: 'Completed' | 'In Progress';
}
