import type { Project } from "@/types";

export const PROJECTS: Project[] = [
  // ─────────────────────────────────────────
  // 1. TaskFlow
  // ─────────────────────────────────────────
  {
    slug: "taskflow",
    name: "TaskFlow",
    tagline: "Real-time task management with secure cloud sync",
    problem:
      "Users needed a reliable, cross-device task manager with secure authentication and real-time synchronization — without ever losing data when switching devices or going offline.",
    approach:
      "I chose Flutter for expressive, high-performance UI, Firebase for instant real-time sync without building a custom backend, and the Repository Pattern to keep business logic testable and completely decoupled from the data source.",
    solution:
      "Built a full-featured task management app with Firebase Authentication for secure login, Cloud Firestore for real-time multi-device sync, and Provider for clean, predictable state management.",

    features: [
      "Firebase Auth — email/password + Google Sign-In",
      "Real-time Cloud Firestore sync across devices",
      "Task categories — Work, Personal, Health + custom",
      "Priority system — High / Medium / Low with auto-sort",
      "Productivity stats, completion rate, and streaks",
      "Full offline support with automatic background sync",
    ],

    detailFeatures: [
      {
        icon: "Shield",
        title: "Secure Authentication",
        description:
          "Firebase Auth with email/password and Google Sign-In. Sessions persist securely across app restarts with automatic token refresh.",
      },
      {
        icon: "Cloud",
        title: "Real-time Cloud Sync",
        description:
          "Firestore stream listeners push updates instantly. All your devices stay in sync — zero manual refresh required.",
      },
      {
        icon: "Tag",
        title: "Smart Categories",
        description:
          "Organise tasks into Work, Personal, Health, and custom categories with colour-coded labels for instant visual recognition.",
      },
      {
        icon: "Bell",
        title: "Reminder Notifications",
        description:
          "Set due dates and get notified before tasks go overdue. Flutter local notifications integrate cleanly with Firestore timestamps.",
      },
      {
        icon: "BarChart2",
        title: "Productivity Stats",
        description:
          "Track completion rate, daily streaks, and task distribution across categories to understand your productivity patterns.",
      },
      {
        icon: "Zap",
        title: "Priority System",
        description:
          "Mark tasks High, Medium, or Low priority. Tasks are sorted automatically on your dashboard so the most critical work is always visible.",
      },
    ],

    tech: ["Flutter", "Dart", "Firebase Auth", "Cloud Firestore", "Provider"],
    techGroups: {
      Mobile: ["Flutter", "Dart"],
      "State Management": ["Provider"],
      "Backend & Cloud": ["Firebase Auth", "Cloud Firestore"],
      Architecture: ["Repository Pattern", "MVVM"],
    },

    github: "https://github.com/atharvajahagirdar1/taskflow",
    demo: null,
    isPlayStore: false,
    color: "from-blue-600/20 via-blue-900/20 to-zinc-900",
    accent: "#02569B",
    featured: true,
    type: "mobile",

    // Hero floating badges
    floatingCards: [
      { icon: "☁️", label: "Real-time Sync" },
      { icon: "🔒", label: "Firebase Auth" },
      { icon: "📴", label: "Offline Support" },
      { icon: "⚡", label: "60fps UI" },
      { icon: "🏗️", label: "Clean Architecture" },
    ],

    // Interactive phone screens with journey descriptions
    screens: [
      {
        id: "login",
        label: "Login",
        description:
          "The first impression. Clean authentication using Firebase Auth — users can sign in with email/password or Google. Sessions persist securely so users never log in twice.",
        type: "auth",
        header: "Welcome back",
        subtitle: "Sign in to TaskFlow",
      },
      {
        id: "home",
        label: "Dashboard",
        description:
          "The productivity command centre. Users immediately see today's task count, completion stats, and the three most urgent tasks — everything actionable without scrolling.",
        type: "dashboard",
        header: "Good morning ✨",
        subtitle: "You have 5 tasks today",
        stats: [
          { label: "Done", value: "12" },
          { label: "Active", value: "5" },
          { label: "Overdue", value: "2" },
        ],
        items: [
          { label: "Design landing page", secondary: "High · Work", done: true },
          { label: "Fix auth bug", secondary: "High · Dev", done: false },
          { label: "API integration", secondary: "Med · Dev", done: false },
        ],
      },
      {
        id: "tasks",
        label: "All Tasks",
        description:
          "The full task list — colour-coded priorities, completion checkboxes, and a FAB for instant task creation. Real-time Firestore listeners mean this list updates the moment a task changes on any device.",
        type: "list",
        header: "My Tasks",
        items: [
          { label: "Design landing page", secondary: "High Priority", done: true },
          { label: "Fix login bug", secondary: "High Priority", done: false },
          { label: "API integration", secondary: "Medium", done: false },
          { label: "Write unit tests", secondary: "Low Priority", done: false },
          { label: "Update README", secondary: "Low Priority", done: true },
        ],
        showFAB: true,
      },
      {
        id: "add",
        label: "New Task",
        description:
          "Frictionless task creation. Title, category, priority, and due date — four fields and you're done. The form validates inline and writes to Firestore optimistically for instant feedback.",
        type: "form",
        header: "New Task",
        subtitle: "Add details below",
      },
      {
        id: "profile",
        label: "Profile",
        description:
          "Personalised productivity snapshot. Task completion rate, current streak, and category distribution give users insight into their working patterns over time.",
        type: "profile",
        header: "Atharva J.",
        subtitle: "Productivity Score: 84%",
        stats: [
          { label: "Tasks Done", value: "47" },
          { label: "Streak", value: "12d" },
          { label: "Categories", value: "6" },
        ],
      },
    ],

    architecture: [
      { label: "Flutter", sublabel: "UI Framework", group: "Frontend" },
      { label: "Provider", sublabel: "State Management", group: "Frontend" },
      { label: "Repository Pattern", sublabel: "Data Abstraction", group: "Architecture" },
      { label: "Firebase Auth", sublabel: "Authentication", group: "Backend" },
      { label: "Cloud Firestore", sublabel: "Real-time Database", group: "Backend" },
    ],

    challenges: [
      {
        title: "Real-time State Synchronization",
        description:
          "Keeping UI state perfectly in sync with Firestore while maintaining smooth 60fps rendering was the core technical challenge.",
        decision:
          "Used Firestore stream listeners at the repository layer, feeding Provider's ChangeNotifier. The UI rebuilds only when its specific data slice changes — not on every Firestore event.",
        result:
          "Zero-latency updates across all devices with no visible rendering jitter or unnecessary rebuilds.",
      },
      {
        title: "Offline-first Architecture",
        description:
          "Users expected full access to their tasks even when connectivity dropped — reading, creating, and editing.",
        decision:
          "Enabled Firestore offline persistence globally. Reads serve from local cache; write operations queue automatically and sync transparently on reconnection.",
        result:
          "Fully functional offline experience. Users never notice a network interruption.",
      },
    ],

    lessons: [
      "Clean separation between UI and business logic makes feature additions dramatically faster",
      "Firebase offline persistence requires explicit planning — not all collection queries behave identically offline",
      "Provider's simplicity is a feature — overengineering state management early is a trap",
    ],

    results: [
      { value: "< 200ms", label: "Task sync latency" },
      { value: "100%", label: "Offline functionality" },
      { value: "60fps", label: "UI rendering" },
      { value: "0", label: "Data loss incidents" },
    ],
  },

  // ─────────────────────────────────────────
  // 2. Amazing Wallpapers
  // ─────────────────────────────────────────
  {
    slug: "amazing-wallpapers",
    name: "Amazing Wallpapers",
    tagline: "Discover and save stunning photography powered by Pexels",
    problem:
      "Most wallpaper apps are cluttered, slow, and ad-heavy. Users wanted a clean, fast, and distraction-free way to find and save high-quality photography without needing an account.",
    approach:
      "I built a minimal Flutter app that wraps the Pexels API cleanly. No backend, no accounts, no friction — just beautiful images with instant search, category browsing, and offline favorites via SharedPreferences.",
    solution:
      "Integrated the Pexels API with clean category browsing, debounced real-time search, full-screen preview, and local favorites using SharedPreferences for offline access — no login required.",

    features: [
      "Live search across the full Pexels library with debounced API calls",
      "Category browsing — Nature, Architecture, Abstract, Travel",
      "Full-screen immersive wallpaper preview before downloading",
      "Local favorites with SharedPreferences — no login needed",
      "Optimized image loading with Cached Network Image",
      "Adaptive masonry grid — 2 to 3 columns based on screen width",
    ],

    detailFeatures: [
      {
        icon: "Search",
        title: "Live Debounced Search",
        description:
          "Search the entire Pexels library in real-time. API calls fire only 400ms after typing stops — fast UX with minimal API usage.",
      },
      {
        icon: "Grid",
        title: "Category Browsing",
        description:
          "Curated categories — Nature, Architecture, Abstract, Travel — for when you know the mood but not the exact query.",
      },
      {
        icon: "Maximize",
        title: "Full-screen Preview",
        description:
          "Tap any wallpaper for a full-screen immersive preview with zoom support before downloading to your device.",
      },
      {
        icon: "Heart",
        title: "Offline Favorites",
        description:
          "Save wallpapers locally with SharedPreferences. Favorites persist between sessions — no account or internet needed to view them.",
      },
      {
        icon: "Download",
        title: "Optimised Image Loading",
        description:
          "Cached Network Image stores wallpapers locally after the first load. Repeat views are instant — zero extra API calls.",
      },
      {
        icon: "Smartphone",
        title: "Adaptive Masonry Grid",
        description:
          "The image grid adapts from 2 to 3 columns based on screen width, looking great on small phones and large tablets.",
      },
    ],

    tech: ["Flutter", "Dart", "Pexels API", "HTTP Package", "SharedPreferences", "Cached Network Image"],
    techGroups: {
      Mobile: ["Flutter", "Dart"],
      Networking: ["HTTP Package"],
      "Data Source": ["Pexels API"],
      Storage: ["SharedPreferences"],
      Performance: ["Cached Network Image"],
    },

    github: "https://github.com/atharvajahagirdar1/amazing-wallpapers",
    demo: null,
    isPlayStore: false,
    color: "from-violet-600/20 via-purple-900/20 to-zinc-900",
    accent: "#7C3AED",
    featured: true,
    type: "mobile",

    floatingCards: [
      { icon: "🖼️", label: "Pexels API" },
      { icon: "❤️", label: "Offline Favorites" },
      { icon: "⚡", label: "Debounced Search" },
      { icon: "🗄️", label: "Image Caching" },
      { icon: "📱", label: "No Login Required" },
    ],

    screens: [
      {
        id: "discover",
        label: "Discover",
        description:
          "The home feed. Curated category tiles — Nature, Architecture, Abstract, Travel — let users browse by mood rather than keywords. No decision fatigue on first open.",
        type: "dashboard",
        header: "Discover",
        subtitle: "Find your next wallpaper",
        items: [
          { label: "Nature", secondary: "1.2k photos", color: "#16a34a" },
          { label: "Architecture", secondary: "890 photos", color: "#7C3AED" },
          { label: "Abstract", secondary: "2.1k photos", color: "#db2777" },
          { label: "Travel", secondary: "3.4k photos", color: "#ea580c" },
        ],
      },
      {
        id: "browse",
        label: "Browse",
        description:
          "The masonry grid — lazy-loaded thumbnails from Pexels API, adapting from 2 to 3 columns based on screen width. CachedNetworkImage ensures scrolling stays smooth at 60fps.",
        type: "gallery",
        header: "Trending",
        subtitle: "Updated daily from Pexels",
      },
      {
        id: "preview",
        label: "Preview",
        description:
          "Full-screen immersive preview. The wallpaper fills the entire display before the user commits to saving or setting it. A single tap dismisses — no friction.",
        type: "detail",
        header: "Mountain Sunrise",
        subtitle: "By @alex_photo · 4K",
      },
      {
        id: "favorites",
        label: "Favorites",
        description:
          "Saved wallpapers persist locally via SharedPreferences — completely offline, no account required. The list loads instantly because it never touches the network.",
        type: "list",
        header: "My Favorites",
        subtitle: "8 wallpapers saved",
        items: [
          { label: "Mountain Sunrise", secondary: "Nature · 4K", done: false },
          { label: "City at Night", secondary: "Architecture · HD", done: false },
          { label: "Abstract Flow", secondary: "Abstract · 4K", done: false },
          { label: "Forest Path", secondary: "Nature · 4K", done: false },
        ],
      },
    ],

    architecture: [
      { label: "Flutter", sublabel: "UI Framework", group: "Frontend" },
      { label: "HTTP Package", sublabel: "Network Layer", group: "Networking" },
      { label: "Pexels API", sublabel: "Image Source", group: "External" },
      { label: "Cached Network Image", sublabel: "Performance", group: "Optimization" },
      { label: "SharedPreferences", sublabel: "Local Storage", group: "Storage" },
    ],

    challenges: [
      {
        title: "API Rate Limit Management",
        description:
          "The Pexels API has rate limits that could easily be hit by firing a request on every keystroke during active search.",
        decision:
          "Implemented debounced search — API calls fire only 400ms after the user stops typing. This cut API requests by ~80% during typical search sessions.",
        result:
          "Zero rate limit errors during normal usage while maintaining a snappy, responsive search experience.",
      },
      {
        title: "Image Performance at Scale",
        description:
          "Loading high-resolution wallpaper thumbnails in a fast-scrolling grid caused frame drops and high memory usage on mid-range devices.",
        decision:
          "Used CachedNetworkImage with dedicated memory and disk cache configuration. Grid thumbnails load at reduced resolution; full quality loads only when a wallpaper is tapped.",
        result: "Smooth 60fps scrolling even with 50+ images loaded in a single session.",
      },
    ],

    lessons: [
      "Debouncing API calls is essential for search UIs — it's both a performance and cost optimisation",
      "Image caching strategy should be designed upfront, not added as an afterthought when performance degrades",
      "SharedPreferences works perfectly for simple offline storage — SQLite is overkill for small datasets",
    ],

    results: [
      { value: "80%", label: "Reduction in API calls" },
      { value: "60fps", label: "Grid scroll performance" },
      { value: "< 1s", label: "Cached image load time" },
      { value: "0", label: "Account required" },
    ],
  },

  // ─────────────────────────────────────────
  // 3. Mood Mesh
  // ─────────────────────────────────────────
  {
    slug: "mood-mesh",
    name: "Mood Mesh",
    tagline: "An interactive Flutter game — live on the Google Play Store",
    problem:
      "I wanted to complete the full production journey from idea to public deployment — designing, building, optimising, and publishing a Flutter app through the Google Play Store review process.",
    approach:
      "Rather than an overly complex app, I chose a focused, polished game concept that would let me master the complete Flutter production pipeline: performance profiling, Play Store compliance, release builds, app signing, and store listing management.",
    solution:
      "Designed and shipped an interactive game through the complete Play Store submission workflow — including release keystore management, R8 code shrinking, content policies, and store asset creation.",

    features: [
      "Interactive touch-based gameplay with custom GestureDetector logic",
      "Local high score persistence with SharedPreferences",
      "Consistent 60fps performance on Android 8.0+ devices",
      "Adaptive layout for small and large Android screens",
      "Full production deployment — live on Google Play Store",
      "One-tap replay with smooth state reset between games",
    ],

    detailFeatures: [
      {
        icon: "Play",
        title: "Responsive Gameplay",
        description:
          "Touch-based game mechanics built with Flutter's GestureDetector. Fast, precise, and satisfying input response.",
      },
      {
        icon: "Trophy",
        title: "High Score System",
        description:
          "Local high score persistence via SharedPreferences. Beat your personal best every session without any backend.",
      },
      {
        icon: "Zap",
        title: "60fps Performance",
        description:
          "Profiled and optimised with Flutter DevTools. Consistent 60fps rendering on devices from Android 8.0 onwards.",
      },
      {
        icon: "Smartphone",
        title: "Responsive Design",
        description:
          "Adaptive layout logic that works correctly across small and large Android screens without visual breakage.",
      },
      {
        icon: "Package",
        title: "Live on Play Store",
        description:
          "Complete production deployment — app signing with release keystore, store listing, screenshots, and successful review.",
      },
      {
        icon: "Repeat",
        title: "Instant Replay",
        description:
          "One-tap restart with a smooth state reset. The game loops cleanly, encouraging back-to-back sessions.",
      },
    ],

    tech: ["Flutter", "Dart", "SharedPreferences", "Android SDK", "Google Play Store"],
    techGroups: {
      Mobile: ["Flutter", "Dart"],
      "Game Logic": ["GestureDetector", "Custom State"],
      Storage: ["SharedPreferences"],
      Distribution: ["Google Play Store"],
      Build: ["Android SDK", "App Signing", "R8"],
    },

    github: "https://github.com/atharvajahagirdar1/mood-mesh",
    demo: "https://play.google.com/store/apps/details?id=com.altronixsoftech.moodmesh",
    isPlayStore: true,
    color: "from-emerald-600/20 via-teal-900/20 to-zinc-900",
    accent: "#059669",
    featured: true,
    type: "mobile",

    floatingCards: [
      { icon: "🚀", label: "Play Store Live" },
      { icon: "🎯", label: "60fps Gameplay" },
      { icon: "🏆", label: "High Score System" },
      { icon: "📦", label: "App Signing" },
      { icon: "✅", label: "1st Try Approval" },
    ],

    screens: [
      {
        id: "menu",
        label: "Main Menu",
        description:
          "The first screen every player sees. High score is prominently displayed to motivate replay. The Play button is large and immediate — zero friction to starting a game.",
        type: "dashboard",
        header: "Mood Mesh",
        subtitle: "Test your reflexes",
        stats: [
          { label: "Best Score", value: "2,840" },
          { label: "Games", value: "47" },
          { label: "Rank", value: "#1" },
        ],
      },
      {
        id: "game",
        label: "Gameplay",
        description:
          "The core loop — a 3×3 grid of interactive tiles. GestureDetector handles all touch input. The render loop is carefully optimised to maintain 60fps even as difficulty scales.",
        type: "game",
        header: "1,240",
        subtitle: "Score",
        stats: [
          { label: "Level", value: "4" },
          { label: "Lives", value: "3" },
          { label: "Combo", value: "x2" },
        ],
      },
      {
        id: "result",
        label: "Result",
        description:
          "Post-game result screen. New high scores are celebrated with a confetti animation. Score improvement percentage gives players a sense of progression. One-tap replay keeps the loop tight.",
        type: "result",
        header: "2,840",
        subtitle: "New High Score! 🎉",
        stats: [
          { label: "Previous Best", value: "2,110" },
          { label: "Improvement", value: "+34%" },
          { label: "Rank", value: "#1" },
        ],
      },
    ],

    architecture: [
      { label: "Flutter", sublabel: "UI & Game Layer", group: "Frontend" },
      { label: "GestureDetector", sublabel: "Input Handling", group: "Interaction" },
      { label: "setState", sublabel: "Game State Machine", group: "Logic" },
      { label: "SharedPreferences", sublabel: "Score Persistence", group: "Storage" },
      { label: "Google Play Store", sublabel: "Production Distribution", group: "Deployment" },
    ],

    challenges: [
      {
        title: "Play Store Submission Compliance",
        description:
          "The Play Store review process requires specific content policies, privacy statements, target API level compliance, and technical requirements that go well beyond just uploading an APK.",
        decision:
          "Researched Play Store policies thoroughly before submission. Configured proper release keystore signing, created a hosted privacy policy, set targetSdkVersion correctly, and prepared all required store assets.",
        result: "App approved on the first submission with zero policy violations or rejections.",
      },
      {
        title: "Release Build Performance",
        description:
          "The debug build ran smoothly but the initial release build showed frame drops on mid-range devices — a common Flutter pitfall.",
        decision:
          "Profiled with Flutter DevTools to identify expensive widget rebuilds in the game loop. Reduced unnecessary setState calls, minimised rebuild scope, and enabled R8 code shrinking in release configuration.",
        result: "Consistent 60fps on all tested devices from Android 8.0 onwards.",
      },
    ],

    lessons: [
      "The journey from a working Flutter app to a live Play Store listing is significantly more involved than expected — plan for it",
      "Always profile performance in release mode — debug mode hides real performance characteristics",
      "App signing and keystore management must be set up carefully from day one — a lost keystore means losing your app permanently",
    ],

    results: [
      { value: "✓ Live", label: "On Google Play Store" },
      { value: "60fps", label: "Target performance achieved" },
      { value: "1st try", label: "Store review approval" },
      { value: "Android 8+", label: "Device compatibility" },
    ],
  },
];
