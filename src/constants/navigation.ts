import type { NavLink } from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

/** IDs used by useActiveSection to track scroll position */
export const SECTION_IDS = ["home", "about", "projects", "skills", "services", "contact"] as const;
