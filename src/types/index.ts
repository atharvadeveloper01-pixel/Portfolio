// ─────────────────────────────────────────────
// Shared TypeScript interfaces for the portfolio
// ─────────────────────────────────────────────

export interface NavLink {
  label: string;
  href: string;
}

export type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";

export type SkillCategory =
  | "Mobile"
  | "Backend & Cloud"
  | "State & Architecture"
  | "Languages"
  | "Tools";

export interface Skill {
  name: string;
  category: SkillCategory;
  level: SkillLevel;
  featured?: boolean;
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  problem: string;
  solution: string;
  features: string[];
  tech: string[];
  github: string | null;
  demo: string | null;
  isPlayStore?: boolean;
  color: string;
  featured: boolean;
}

export interface Service {
  icon: string; // Lucide icon component name
  title: string;
  description: string;
  benefits: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface Stat {
  value: string;
  label: string;
}
