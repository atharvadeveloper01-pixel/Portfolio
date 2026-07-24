import type { Skill } from "@/types";

export const SKILLS: Skill[] = [
  // ── Mobile ──────────────────────────────────────
  { name: "Flutter", category: "Mobile", level: "Advanced", featured: true },
  { name: "Dart", category: "Mobile", level: "Advanced", featured: true },

  // ── Backend & Cloud ──────────────────────────────
  { name: "Firebase Auth", category: "Backend & Cloud", level: "Advanced", featured: true },
  { name: "Cloud Firestore", category: "Backend & Cloud", level: "Advanced", featured: true },
  { name: "REST API Integration", category: "Backend & Cloud", level: "Advanced", featured: true },
  { name: "Node.js", category: "Backend & Cloud", level: "Beginner" },

  // ── State & Architecture ─────────────────────────
  { name: "Provider", category: "State & Architecture", level: "Intermediate" },
  { name: "MVVM", category: "State & Architecture", level: "Intermediate" },
  { name: "Clean Architecture", category: "State & Architecture", level: "Beginner" },
  { name: "AI-assisted Dev", category: "State & Architecture", level: "Advanced" },

  // ── Languages ────────────────────────────────────
  { name: "Java", category: "Languages", level: "Intermediate" },
  { name: "C++", category: "Languages", level: "Intermediate" },
  { name: "HTML", category: "Languages", level: "Intermediate" },
  { name: "CSS", category: "Languages", level: "Intermediate" },
  { name: "JavaScript", category: "Languages", level: "Beginner" },
  { name: "JSON", category: "Languages", level: "Advanced" },

  // ── Tools ────────────────────────────────────────
  { name: "Android Studio", category: "Tools", level: "Advanced" },
  { name: "VS Code", category: "Tools", level: "Advanced" },
  { name: "Git", category: "Tools", level: "Intermediate" },
  { name: "GitHub", category: "Tools", level: "Intermediate" },
  { name: "Postman", category: "Tools", level: "Intermediate" },
  { name: "Figma", category: "Tools", level: "Beginner" },
  { name: "FlutterFlow", category: "Tools", level: "Intermediate" },
];

/** Items shown in the auto-scrolling trust strip */
export const TRUST_STRIP_ITEMS = [
  "Flutter", "Dart", "Firebase", "Cloud Firestore",
  "REST APIs", "Provider", "Android Studio", "Git & GitHub",
  "Figma", "Java", "JSON", "Postman", "MVVM", "FlutterFlow", "VS Code",
];
