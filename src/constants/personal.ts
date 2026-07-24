import type { Stat, TimelineItem } from "@/types";

export const PERSONAL = {
  name: "Atharva Jahagirdar",
  firstName: "Atharva",
  title: "Flutter Developer",
  titleFull: "Flutter Developer | Building Scalable Mobile Applications",
  tagline: "Building mobile applications that are fast, scalable, and designed for real-world users.",
  bio: "I'm a Computer Science & IT undergraduate at IPS Academy, Indore, passionate about building high-quality Flutter applications. I create responsive mobile apps using Flutter, Firebase, REST APIs, and clean architecture principles. I've shipped a live app to the Google Play Store and continuously take on real-world projects.",
  location: "Indore, India",
  email: "atharvajahagirdar1@gmail.com",
  github: "https://github.com/atharvajahagirdar1",
  linkedin: "https://www.linkedin.com/in/atharvajahagirdar",
  availability: "Open to Internships & Freelance",
  institution: "IPS Academy, Indore",
  degree: "CSIT Undergraduate",
  startYear: 2025,
  resumeUrl: "#", // Replace with actual resume URL when available
} as const;

export const STATS: Stat[] = [
  { value: "1+", label: "Year Flutter" },
  { value: "3", label: "Projects Built" },
  { value: "1", label: "Play Store App" },
  { value: "5+", label: "Technologies" },
];

export const TIMELINE: TimelineItem[] = [
  {
    year: "2023",
    title: "Started Computer Science",
    description:
      "Began CSIT at IPS Academy, Indore. Laid programming foundations with C++ and Java.",
  },
  {
    year: "2024",
    title: "Discovered Flutter",
    description:
      "Fell in love with Flutter's single-codebase philosophy and started building my first cross-platform apps.",
  },
  {
    year: "2025",
    title: "First Play Store Launch",
    description:
      "Published Mood Mesh on the Google Play Store — completing a full production deployment cycle for the first time.",
  },
  {
    year: "2025",
    title: "Flutter Internship",
    description:
      "Currently completing a Flutter Developer internship — building real-world apps with Firebase, REST APIs, and Provider.",
  },
];
