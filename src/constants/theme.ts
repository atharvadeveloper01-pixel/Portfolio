/**
 * Centralized Design System Tokens
 * Use these constants to maintain consistency across the application.
 */

export const colors = {
  background: "#09090b", // Deep zinc/black
  surface: "#18181b", // Zinc 900
  surfaceHover: "#27272a", // Zinc 800
  primary: "#ffffff",
  primaryHover: "#e4e4e7", // Zinc 200
  secondaryAccent: "#3b82f6", // Blue 500 for subtle accents
  text: {
    primary: "#ffffff",
    secondary: "#a1a1aa", // Zinc 400
    muted: "#71717a", // Zinc 500
  },
  status: {
    success: "#22c55e",
    warning: "#eab308",
    error: "#ef4444",
  },
  border: "#27272a", // Zinc 800
};

export const typography = {
  heroTitle: "text-5xl md:text-7xl font-extrabold tracking-tight",
  heroSubtitle: "text-xl md:text-2xl text-zinc-400 font-medium",
  sectionTitle: "text-3xl md:text-4xl font-bold tracking-tight",
  sectionSubtitle: "text-lg text-zinc-400",
  bodyLarge: "text-lg leading-relaxed",
  body: "text-base leading-relaxed text-zinc-300",
  caption: "text-sm text-zinc-500",
  buttonText: "text-sm font-semibold tracking-wide",
};

export const spacing = {
  section: {
    desktop: "py-32",
    tablet: "py-24",
    mobile: "py-16",
  },
  container: "px-6 md:px-12 lg:px-24",
  gap: {
    sm: "gap-2",
    md: "gap-4",
    lg: "gap-8",
    xl: "gap-12",
  },
};

export const radii = {
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-xl",
  full: "rounded-full",
};

export const shadows = {
  subtle: "shadow-sm",
  medium: "shadow-md shadow-black/20",
  large: "shadow-xl shadow-black/40",
  glow: "shadow-[0_0_30px_-5px_rgba(255,255,255,0.1)]",
};

export const gradients = {
  primary: "bg-gradient-to-r from-zinc-800 to-zinc-900",
  accent: "bg-gradient-to-r from-blue-500 to-cyan-400",
  fade: "bg-gradient-to-b from-transparent to-background",
};

export const zIndex = {
  hide: "-z-10",
  base: "z-0",
  dropdown: "z-10",
  sticky: "z-20",
  modal: "z-50",
  toast: "z-100",
};

export const transitions = {
  fast: "transition-all duration-150 ease-in-out",
  default: "transition-all duration-300 ease-in-out",
  slow: "transition-all duration-500 ease-in-out",
};
