import type { Project } from "@/types";

export const PROJECTS: Project[] = [
  {
    slug: "taskflow",
    name: "TaskFlow",
    tagline: "A productivity app with secure real-time cloud sync",
    problem:
      "Users needed a reliable, cross-device task manager with secure authentication and real-time synchronization — without losing data when switching devices.",
    solution:
      "Built a full-featured task management app with Firebase Authentication for secure login, Cloud Firestore for real-time multi-device sync, and Provider for clean, predictable state management.",
    features: [
      "Secure Firebase Authentication (Email & Password)",
      "Real-time Cloud Firestore synchronization",
      "Full CRUD — create, update, delete tasks",
      "Task categories and priority management",
      "Reminder notifications",
      "Responsive Material You UI",
    ],
    tech: ["Flutter", "Dart", "Firebase Auth", "Cloud Firestore", "Provider"],
    github: "https://github.com/atharvajahagirdar1", // TODO: replace with exact repo URL
    demo: null,
    isPlayStore: false,
    color: "from-blue-600/20 via-blue-900/20 to-zinc-900",
    featured: true,
  },
  {
    slug: "amazing-wallpapers",
    name: "Amazing Wallpapers",
    tagline: "Discover and save stunning wallpapers powered by Pexels API",
    problem:
      "Most wallpaper apps are bloated, ad-heavy, and hard to navigate. Users wanted a clean, fast, and beautiful way to browse and save high-quality photos.",
    solution:
      "Integrated the Pexels API with intuitive category browsing, real-time search, full-screen preview, and local favorites stored via SharedPreferences for offline access.",
    features: [
      "Pexels API integration with live search",
      "Browse by curated categories",
      "Full-screen wallpaper preview",
      "Save to local favorites",
      "SharedPreferences offline storage",
      "Optimized image loading with cache",
    ],
    tech: ["Flutter", "Dart", "REST API", "HTTP", "SharedPreferences"],
    github: "https://github.com/atharvajahagirdar1", // TODO: replace with exact repo URL
    demo: null,
    isPlayStore: false,
    color: "from-violet-600/20 via-purple-900/20 to-zinc-900",
    featured: true,
  },
  {
    slug: "mood-mesh",
    name: "Mood Mesh",
    tagline: "An interactive Flutter game — live on the Google Play Store",
    problem:
      "I wanted to complete the entire journey from idea to production — designing, building, testing, and publishing a Flutter app on the Google Play Store.",
    solution:
      "Designed and shipped an interactive mood-based game app through the full Play Store submission process, achieving a production-deployed Flutter application with real users.",
    features: [
      "Interactive gameplay with score tracking",
      "Smooth animations and transitions",
      "Responsive UI across Android devices",
      "Performance-optimized rendering",
      "Published & live on Google Play Store",
    ],
    tech: ["Flutter", "Dart"],
    github: "https://github.com/atharvajahagirdar1", // TODO: replace with exact repo URL
    demo: "https://play.google.com/store/apps/details?id=com.altronixsoftech.moodmesh",
    isPlayStore: true,
    color: "from-emerald-600/20 via-teal-900/20 to-zinc-900",
    featured: true,
  },
];
