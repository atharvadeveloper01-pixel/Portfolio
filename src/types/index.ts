// ─────────────────────────────────────────────
// Global portfolio types
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

// ─────────────────────────────────────────────
// Project Experience Framework — Core Types
// ─────────────────────────────────────────────

/** Which experience template to render */
export type ProjectType = "mobile" | "web" | "dashboard";

/** Abstract app screen types rendered inside the interactive phone */
export type AppScreenType =
  | "auth"
  | "dashboard"
  | "list"
  | "form"
  | "profile"
  | "gallery"
  | "detail"
  | "game"
  | "result";

export interface AppScreenItem {
  label: string;
  secondary?: string;
  done?: boolean;
  color?: string;
}

export interface AppScreenStat {
  label: string;
  value: string;
}

/** A floating badge shown around the hero phone */
export interface FloatingCard {
  label: string;
  icon: string; // emoji or short text
}

/** A single screen in the interactive phone simulator */
export interface AppScreen {
  id: string;
  /** Shown in dot-indicator and screen header */
  label: string;
  /** Why this screen exists — shown in App Journey section */
  description?: string;
  type: AppScreenType;
  header?: string;
  subtitle?: string;
  items?: AppScreenItem[];
  stats?: AppScreenStat[];
  showFAB?: boolean;
}

/** One node in the visual architecture flow diagram */
export interface ArchitectureNode {
  label: string;
  sublabel: string;
  group: string;
}

/** Rich feature card for the experience page (vs plain string list on project card) */
export interface ProjectFeature {
  /** Lucide icon name */
  icon: string;
  title: string;
  description: string;
}

/** A challenge → decision → result story entry */
export interface ProjectChallenge {
  title: string;
  description: string;
  decision: string;
  result: string;
}

/** A metric result shown in the outcomes section */
export interface ProjectResult {
  value: string;
  label: string;
}

// ─────────────────────────────────────────────
// Project — Full interface (cards + experience)
// ─────────────────────────────────────────────

export interface Project {
  slug: string;
  name: string;
  tagline: string;

  // Narrative
  problem: string;
  approach: string;
  solution: string;

  // Features — short list for card; rich list for experience
  features: string[];
  detailFeatures: ProjectFeature[];

  // Tech — flat list for card; grouped for experience
  tech: string[];
  techGroups: Record<string, string[]>;

  // Links
  github: string | null;
  demo: string | null;
  isPlayStore?: boolean;

  // Visual
  color: string;   // Tailwind gradient for project card background
  accent: string;  // Hex color for interactive phone & experience highlights

  featured: boolean;

  // Experience framework
  type: ProjectType;
  screens: AppScreen[];
  floatingCards: FloatingCard[]; // shown floating around hero phone
  architecture: ArchitectureNode[];
  challenges: ProjectChallenge[];
  lessons: string[];
  results: ProjectResult[];
}

// ─────────────────────────────────────────────
// Other portfolio data types
// ─────────────────────────────────────────────

export interface Service {
  icon: string;
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
