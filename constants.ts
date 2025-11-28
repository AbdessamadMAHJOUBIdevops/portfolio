import { Experience, Project, SkillCategory, Education, Certification } from './types';
import { 
  Cloud, 
  Server, 
  Code, 
  Activity, 
  Cpu, 
  ShieldCheck 
} from 'lucide-react';

export const PERSONAL_INFO = {
  name: "MAHJOUBI Abdessamad",
  role: "Ingénieur DevOps & Cloud (SRE)",
  email: "abdessamad.mahjoubi2001@gmail.com",
  phone: "+33 601 44 68 85",
  location: "Paris, France",
  linkedin: "https://linkedin.com/in/abdessamadmahjoubi",
  github: "https://github.com/AbdessamadMAHJOUBIdevops",
  summary: "Ingénieur en informatique spécialisé en Cloud, DevOps et SRE, diplômé d’un Master de l’Université Sorbonne Paris Nord et de l’École Mohammadia d’Ingénieurs. Passionné par la résilience des systèmes, l’automatisation et la culture SRE (Kubernetes, Terraform, AWS/Azure, AI/RAG)."
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "DevOps & Cloud",
    iconName: "Cloud",
    skills: ["Kubernetes", "Docker", "Terraform", "Ansible", "Helm", "ArgoCD", "Jenkins", "GitLab CI/CD", "AWS", "Azure (AKS, ACR)"]
  },
  {
    title: "Monitoring & Observability",
    iconName: "Activity",
    skills: ["Prometheus", "Grafana", "Elasticsearch", "Graylog", "Loki"]
  },
  {
    title: "Langages & Frameworks",
    iconName: "Code",
    skills: ["Python (FastAPI)", "Java (Spring Boot)", "Bash Scripting", "Go (Basics)"]
  },
  {
    title: "IA Générative & RAG",
    iconName: "Cpu",
    skills: ["LangChain", "Weaviate", "Ollama", "LLaMA3", "Mistral", "RAG Pipelines"]
  },
  {
    title: "Systèmes & Admin",
    iconName: "Server",
    skills: ["Linux (Debian/Ubuntu)", "PowerShell", "Backup Management", "Automation Scripts"]
  },
  {
    title: "Sécurité (DevSecOps)",
    iconName: "ShieldCheck",
    skills: ["HashiCorp Vault", "SonarQube", "Vulnerability Scanning", "Security in CI/CD"]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Etixway",
    role: "Ingénieur DevOps / IA (Stage de fin d’études)",
    location: "Noisy-le-Grand, France",
    period: "Avril 2025 – Septembre 2025",
    description: [
      "Conception et déploiement d’une application de Retrieval-Augmented Generation (RAG) pour le traitement d’appels d’offres.",
      "Intégration d’un modèle LLM open-source avec une base de données vectorielle Weaviate et un backend FastAPI.",
      "Mise en œuvre d’un pipeline de déploiement complet sur un cluster Kubernetes automatisé avec Terraform et Ansible.",
      "Amélioration de la fiabilité et de la traçabilité du système via une architecture modulaire."
    ],
    techStack: ["Kubernetes", "Terraform", "Ansible", "FastAPI", "Weaviate", "LLM"]
  },
  {
    company: "Deloitte",
    role: "Ingénieur Cloud / DevOps (Stage de fin d’études)",
    location: "Casablanca, Maroc",
    period: "Février 2024 – Juin 2024",
    description: [
      "Migration d’une solution de monitoring Graylog de la v3 à la v5 (OVH vers Azure AKS, > 5To données).",
      "Automatisation du déploiement via Helm Charts, Terraform et Rancher pour la gestion multi-clusters.",
      "Mise en place d’un pipeline GitLab CI/CD assurant la restauration et la validation des versions migrées.",
      "Contribution à la définition de l’architecture cible de la plateforme Cloud Management System (CMS)."
    ],
    techStack: ["Azure AKS", "Helm", "Terraform", "Rancher", "Graylog", "GitLab CI"]
  },
  {
    company: "Sofrecom Maroc",
    role: "Développeur Spring Boot / Cloud (Stage)",
    location: "Rabat, Maroc",
    period: "Juillet 2023 – Septembre 2023",
    description: [
      "Conception et développement d’une application microservices cloud-native avec Spring Boot.",
      "Construction de pipelines de tests automatisés et d’analyse de code avec SonarQube (-40% temps déploiement).",
      "Participation à la migration de services cloud et à la mise en place de l’intégration continue avec Jenkins."
    ],
    techStack: ["Spring Boot", "Jenkins", "SonarQube", "Microservices"]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Full DevOps Microservices",
    description: "Architecture microservices complète intégrant les meilleures pratiques DevOps. Inclus la configuration de l'infrastructure, l'orchestration des conteneurs et les pipelines automatisés.",
    technologies: ["Spring Boot", "Docker", "Kubernetes", "Jenkins", "Ansible"],
    repoUrl: "https://github.com/AbdessamadMAHJOUBIdevops/microservices-full-DevOps",
    imageUrl: "https://picsum.photos/seed/micro/600/400"
  },
  {
    title: "Java App CI/CD Pipeline",
    description: "Construction d’un pipeline CI/CD de bout en bout (build, test, déploiement) pour une application Java critique utilisant Jenkins et un déploiement sur Azure Cloud.",
    technologies: ["Java", "Jenkins", "Azure", "Docker", "Maven"],
    repoUrl: "https://github.com/AbdessamadMAHJOUBIdevops/my-java-app",
    imageUrl: "https://picsum.photos/seed/jenkins/600/400"
  }
];

export const EDUCATION: Education[] = [
  {
    institution: "Université Sorbonne Paris Nord",
    degree: "Master – Programmation, Sûreté & Sécurité",
    location: "Paris, France",
    period: "2024 – 2025"
  },
  {
    institution: "École Mohammadia d’Ingénieurs",
    degree: "Diplôme d’Ingénieur en Informatique",
    location: "Rabat, Maroc",
    period: "2021 – 2024"
  },
  {
    institution: "Lycée Moulay Idriss",
    degree: "Classes Préparatoires (PCSI/PSI)",
    location: "Fès, Maroc",
    period: "2019 – 2021"
  }
];

export const CERTIFICATIONS: Certification[] = [
  { name: "AWS Certified Cloud Practitioner", date: "21/10/2024", status: "Completed" },
  { name: "CKA (Certified Kubernetes Administrator)", status: "In Progress" }
];