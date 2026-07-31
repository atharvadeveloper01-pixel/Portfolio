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

    images: {
      cover: "cover.webp",
      thumbnail: "thumbnail.webp",
      hero: "hero.webp",
      screens: [
        {
          title: "Login",
          description:
            "The first impression. Clean authentication using Firebase Auth — users can sign in with email/password or Google. Sessions persist securely so users never log in twice.",
          image: "login.webp",
        },
        {
          title: "Dashboard",
          description:
            "The productivity command centre. Users immediately see today's task count, completion stats, and the three most urgent tasks — everything actionable without scrolling.",
          image: "dashboard.webp",
        },
        {
          title: "All Tasks",
          description:
            "The full task list — colour-coded priorities, completion checkboxes, and a FAB for instant task creation. Real-time Firestore listeners mean this list updates the moment a task changes on any device.",
          image: "tasks.webp",
        },
        {
          title: "New Task",
          description:
            "Frictionless task creation. Title, category, priority, and due date — four fields and you're done. The form validates inline and writes to Firestore optimistically for instant feedback.",
          image: "add.webp",
        },
        {
          title: "Profile",
          description:
            "Personalised productivity snapshot. Task completion rate, current streak, and category distribution give users insight into their working patterns over time.",
          image: "profile.webp",
        },
      ],
      gallery: [
        "01.webp",
        "02.webp",
        "03.webp",
        "04.webp",
      ],
    },

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

    images: {
      cover: "cover.webp",
      thumbnail: "thumbnail.webp",
      hero: "hero.webp",
      screens: [
        {
          title: "Discover",
          description:
            "The home feed. Curated category tiles — Nature, Architecture, Abstract, Travel — let users browse by mood rather than keywords. No decision fatigue on first open.",
          image: "home_screen.webp",
        },
        {
          title: "Browse",
          description:
            "The masonry grid — lazy-loaded thumbnails from Pexels API, adapting from 2 to 3 columns based on screen width. CachedNetworkImage ensures scrolling stays smooth at 60fps.",
          image: "home_screen1.webp",
        },
        {
          title: "Preview",
          description:
            "Full-screen immersive preview. The wallpaper fills the entire display before the user commits to saving or setting it. A single tap dismisses — no friction.",
          image: "set_wallpaper_screen.webp",
        },
        {
          title: "Favorites",
          description:
            "Saved wallpapers persist locally via SharedPreferences — completely offline, no account required. The list loads instantly because it never touches the network.",
          image: "favorite_screen.webp",
        },
      ],
    },

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

    images: {
      cover: "cover.webp",
      thumbnail: "thumbnail.webp",
      hero: "hero.webp",
      screens: [
        {
          title: "Main Menu",
          description:
            "The first screen every player sees. High score is prominently displayed to motivate replay. The Play button is large and immediate — zero friction to starting a game.",
          image: "menu.webp",
        },
        {
          title: "Gameplay",
          description:
            "The core loop — a 3×3 grid of interactive tiles. GestureDetector handles all touch input. The render loop is carefully optimised to maintain 60fps even as difficulty scales.",
          image: "game.webp",
        },
        {
          title: "Result",
          description:
            "Post-game result screen. New high scores are celebrated with a confetti animation. Score improvement percentage gives players a sense of progression. One-tap replay keeps the loop tight.",
          image: "result.webp",
        },
      ],
      gallery: [
        "01.webp",
        "02.webp",
        "03.webp",
        "04.webp",
      ],
    },

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
  {
    slug: "novastore",
    featured: true,
    type: "mobile",
    name: "NovaStore",
    tagline: "Premium E-commerce, Reimagined.",
    description:
      "NovaStore is a modern, high-end e-commerce mobile application built entirely in Flutter. It provides users with a frictionless and aesthetically pleasing shopping experience, from discovering trending products to managing their cart and completing checkout. Designed with a strict focus on premium UI/UX, the app features immersive image transitions, custom interactive components, and skeleton loading states to ensure a polished, luxury feel on every screen.",
    problem: "Standard e-commerce apps often feel clunky and lack the premium, buttery-smooth interactions expected by high-end brands.",
    approach: "Focus entirely on the user interface and interactions. Implement 60fps animations, custom page transitions, and a rigorous design system.",
    solution: "A highly polished, luxury e-commerce application that feels like a flagship native experience, utilizing Flutter's powerful animation engine.",
    accent: "#6366f1",
    color: "from-indigo-600/20 to-indigo-900/20",
    tech: ["Flutter", "Dart", "Material 3", "cached_network_image", "shimmer"],
    techGroups: {
      "UI / UX": ["Flutter", "Material 3", "shimmer"],
      "Performance": ["cached_network_image", "Dart isolates"],
    },
    github: "",
    demo: "",
    isPlayStore: false,

    features: [
      "Immersive Product Discovery with staggered grids and carousels",
      "Seamless Hero Transitions with 60fps animations",
      "Interactive Cart & Checkout with swipe-to-delete",
      "Graceful Loading States via custom Shimmer skeletons",
    ],

    detailFeatures: [
      {
        icon: "✨",
        title: "Immersive Product Discovery",
        description:
          "Beautiful staggered grid layouts and horizontal scrolling carousels allow for intuitive and visually engaging browsing.",
      },
      {
        icon: "🚀",
        title: "Seamless Hero Transitions",
        description:
          "Fluid, 60fps animations that seamlessly expand product images from the feed directly into the full-screen details view.",
      },
      {
        icon: "🛒",
        title: "Interactive Cart & Checkout",
        description:
          "A fully interactive UI for adjusting item quantities, gesture-based swipe-to-delete interactions, and a clean payment selection flow.",
      },
      {
        icon: "⏳",
        title: "Graceful Loading States",
        description:
          "Custom Shimmer skeleton screens that provide visual feedback during simulated data fetching, preventing jarring empty screens.",
      },
    ],

    floatingCards: [
      { icon: "👗", label: "Premium Fashion" },
      { icon: "✨", label: "60fps Animations" },
      { icon: "🛒", label: "Interactive Cart" },
      { icon: "🖼️", label: "Hero Transitions" },
      { icon: "⏳", label: "Shimmer Loading" },
    ],

    images: {
      cover: "cover.webp",
      thumbnail: "thumbnail.webp",
      hero: "screens/splash_screen.webp",
      screens: [
        {
          title: "Home Feed",
          description: "Staggered grids, categories, custom bottom nav",
          image: "home_screen1.webp",
        },
        {
          title: "Wishlist",
          description: "Premium curated product collections",
          image: "wishlist_screen.webp",
        },
        {
          title: "Search & Categories",
          description: "Trending items, Shimmer loading skeletons",
          image: "search_screen.webp",
        },
        {
          title: "Shopping Cart",
          description: "Quantity controls, swipe-to-delete gestures",
          image: "shopping_cart_screen.webp",
        },
        {
          title: "Checkout & Success",
          description: "Order summary, payment methods",
          image: "checkout_screen.webp",
        },
        {
          title: "User Profile",
          description: "Premium user dashboard and Wishlist grid",
          image: "profile_screen.webp",
        },
      ],
    },

    architecture: [
      { label: "Flutter", sublabel: "UI Framework", group: "Frontend" },
      { label: "cached_network_image", sublabel: "Image Optimization", group: "Performance" },
      { label: "shimmer", sublabel: "Loading States", group: "UX" },
    ],

    challenges: [
      {
        title: "Complex Hero Animations & Performance",
        description:
          "Implementing context-aware Hero animations across multiple navigation stacks without causing tag collisions, while maintaining a smooth 60fps frame rate during high-resolution image rendering.",
        decision:
          "Implemented dynamic, unique Hero tags passed through routes. Replaced static assets with cached_network_image to asynchronously fetch, cache, and decode high-res imagery off the main UI thread.",
        result:
          "Achieved butter-smooth UI transitions with zero frame drops, significantly reduced initial memory load, and prevented layout jank and crash errors.",
      },
    ],

    lessons: [
      "Optimizing heavy image assets is critical for maintaining 60fps on mobile devices.",
      "Custom Hero tags require careful management across navigation stacks.",
      "Skeleton screens drastically improve perceived performance and user experience.",
    ],

    results: [
      { value: "60fps", label: "Fluid UI Transitions" },
      { value: "0", label: "Frame Drops" },
      { value: "100%", label: "Premium Feel" },
    ],
  },
  {
    slug: "foodie",
    featured: true,
    type: "mobile",
    name: "Foodie",
    tagline: "Hot, authentic meals at your doorstep in minutes.",
    description:
      "Foodie is a high-fidelity, interactive food delivery mobile application designed to provide a premium, seamless ordering experience. Built with a localized Indian context in mind, the app allows hungry users to discover local restaurants, heavily customize their orders with add-ons, manage a real-time shopping cart, and track their delivery. It solves the problem of clunky food ordering by prioritizing a buttery-smooth, visually stunning user experience.",
    problem: "Food delivery apps often suffer from complex state management issues when users customize orders deeply, leading to UI bugs or slow performance.",
    approach: "Decouple the heavy business logic of cart calculations and customizations from the UI using the Provider pattern, and optimize flexible layouts.",
    solution: "A reactive, scalable food delivery application that maintains 60fps and instant state updates across all screens without RenderFlex errors.",
    accent: "#f97316",
    color: "from-orange-500/20 to-orange-900/20",
    tech: ["Flutter", "Dart", "Provider", "Google Fonts", "Pollinations AI"],
    techGroups: {
      "Frontend": ["Flutter", "Dart"],
      "State": ["Provider"],
      "Assets": ["Google Fonts", "Pollinations AI"],
    },
    github: "",
    demo: "",
    isPlayStore: false,

    features: [
      "Seamless Hero Animations bridging home feed to details",
      "Dynamic Cart & State Management powered by Provider",
      "Customizable Food Orders with add-ons",
      "Order Tracking Simulation with static map layout",
    ],

    detailFeatures: [
      {
        icon: "🚀",
        title: "Seamless Hero Animations",
        description:
          "Buttery-smooth zoom transitions (Hero widgets) that bridge the home feed directly into restaurant and food details, maintaining visual context for the user.",
      },
      {
        icon: "🛒",
        title: "Dynamic Cart & State Management",
        description:
          "A fully functional, reactive shopping cart powered by Provider that instantly calculates item totals, delivery fees, and taxes across the app.",
      },
      {
        icon: "🍔",
        title: "Customizable Food Orders",
        description:
          "A rich food details screen that allows users to seamlessly increment quantities and select price-modifying add-ons (e.g., Extra Raita, Gulab Jamun) before adding to the cart.",
      },
      {
        icon: "📍",
        title: "Order Tracking Simulation",
        description:
          "A highly polished post-checkout experience featuring a beautifully mocked static map layout and a dedicated driver profile view.",
      },
    ],

    floatingCards: [
      { icon: "🍕", label: "Food Delivery" },
      { icon: "🛒", label: "Reactive Cart" },
      { icon: "📍", label: "Order Tracking" },
      { icon: "⚡", label: "60fps Animations" },
      { icon: "🧠", label: "Provider State" },
    ],

    images: {
      cover: "cover.webp",
      thumbnail: "thumbnail.webp",
      hero: "screens/splash_screen.webp",
      screens: [
        {
          title: "Splash Screen",
          description: "App launch and animated branding.",
          image: "splash_screen.webp",
        },
        {
          title: "Home Feed",
          description: "Categories, local restaurants, and personalized recommendations.",
          image: "home_screen1.webp",
        },
        {
          title: "Discover & Search",
          description: "Find your favorite meals instantly.",
          image: "search_screen.webp",
        },
        {
          title: "Food Details",
          description: "Detailed views for selecting add-ons and customizing orders.",
          image: "food_details_screen.webp",
        },
        {
          title: "Shopping Cart",
          description: "Real-time pricing, taxes, and cart management.",
          image: "cart_screen.webp",
        },
        {
          title: "Checkout & Billing",
          description: "Address selection and payment processing.",
          image: "billing_screen.webp",
        },
        {
          title: "Order Placed",
          description: "Order confirmation and estimated preparation time.",
          image: "order_screen.webp",
        },
        {
          title: "Live Tracking",
          description: "Real-time delivery partner tracking with map view.",
          image: "tracking_screen.webp",
        },
        {
          title: "User Profile",
          description: "Account settings and saved addresses.",
          image: "profile_screen.webp",
        },
        {
          title: "Order History",
          description: "Quick re-ordering from past deliveries.",
          image: "previous_order_screen.webp",
        },
      ],
    },

    architecture: [
      { label: "Flutter", sublabel: "UI Framework", group: "Frontend" },
      { label: "Provider", sublabel: "State Management", group: "State" },
      { label: "Generative AI", sublabel: "Pollinations", group: "Assets" },
    ],

    challenges: [
      {
        title: "Reactive State & Layout Overflow",
        description:
          "Managing reactive state across heavily nested UI components (cart badges, add-on selectors) while avoiding tightly coupled code and UI layout overflow crashes (RenderFlex errors).",
        decision:
          "Implemented ChangeNotifier/Provider pattern to decouple cart logic from UI layer. Refactored strict-width rows to utilize Expanded wrappers and TextOverflow.ellipsis for flexible adaptation.",
        result:
          "Achieved a fluid, crash-free 60FPS UI. Cart state propagates instantly and predictably across all active tabs without expensive global rebuilds, scaling beautifully across devices.",
      },
    ],

    lessons: [
      "Decoupling business logic from UI using Provider is essential for scalable Flutter apps.",
      "Properly handling flexible layouts prevents common RenderFlex overflows on varied screen sizes.",
      "Hero animations greatly enhance the perceived quality and flow of the application.",
    ],

    results: [
      { value: "60fps", label: "Fluid UI" },
      { value: "Instant", label: "State Updates" },
      { value: "0", label: "RenderFlex Errors" },
    ],
  },
];
