import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Background from "@/components/layout/Background";
import Navbar from "@/components/layout/Navbar";
import { cn } from "@/lib/cn";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Atharva Jahagirdar — Flutter Developer",
    template: "%s | Atharva Jahagirdar",
  },
  description:
    "Flutter Developer building fast, scalable, and production-ready mobile applications. Open to internships and freelance Flutter projects. Based in Indore, India.",
  keywords: [
    "Flutter Developer",
    "Mobile App Developer",
    "Dart Developer",
    "Firebase",
    "Flutter Internship",
    "Cross-platform App",
    "Indore",
    "India",
    "Atharva Jahagirdar",
  ],
  authors: [{ name: "Atharva Jahagirdar", url: "https://github.com/atharvajahagirdar1" }],
  creator: "Atharva Jahagirdar",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://atharvajahagirdar.vercel.app",
    siteName: "Atharva Jahagirdar — Flutter Developer",
    title: "Atharva Jahagirdar — Flutter Developer",
    description:
      "Flutter Developer building fast, scalable, and production-ready mobile applications.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Atharva Jahagirdar — Flutter Developer",
    description:
      "Flutter Developer building fast, scalable, and production-ready mobile applications.",
    creator: "@atharvajahagirdar",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={cn(inter.variable, "dark scroll-smooth")}>
      <body className="bg-background text-foreground font-sans min-h-[100dvh] flex flex-col overflow-x-hidden antialiased">
        <Background />
        <Navbar />
        <main id="main-content" className="flex-1 flex flex-col w-full relative z-0">
          {children}
        </main>
        {/* Footer rendered per-page for layout flexibility */}
      </body>
    </html>
  );
}
