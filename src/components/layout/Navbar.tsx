"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2, FileText } from "lucide-react";
import { NAV_LINKS, SECTION_IDS } from "@/constants/navigation";
import { PERSONAL } from "@/constants/personal";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/cn";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollDirection = useScrollDirection();
  const activeSection = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setIsOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const isHidden = scrollDirection === "down" && isScrolled;

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: isHidden ? "-120%" : "0%", opacity: isHidden ? 0 : 1 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-4 md:top-5 left-0 right-0 z-50 flex flex-col items-center px-4 pointer-events-none"
    >
      {/* ── Main pill ── */}
      <div
        className={cn(
          "pointer-events-auto flex w-full max-w-5xl items-center justify-between rounded-full border px-4 py-2.5 transition-all duration-300",
          isScrolled
            ? "border-white/10 bg-zinc-950/85 shadow-[0_4px_40px_rgba(0,0,0,0.6)] backdrop-blur-md"
            : "border-white/5 bg-zinc-950/60 backdrop-blur-sm"
        )}
      >
        {/* Logo */}
        <Link
          href="#home"
          aria-label="Go to top"
          className="flex items-center gap-2 px-1 text-zinc-100 hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md"
        >
          <Code2 className="h-5 w-5 text-accent" />
          <span className="text-sm font-bold tracking-tight">{PERSONAL.firstName[0]}{PERSONAL.name.split(" ")[1][0]}</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-0.5" aria-label="Main Navigation">
          {NAV_LINKS.map((link) => {
            const isActive = `#${activeSection}` === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                  isActive ? "text-white" : "text-zinc-400 hover:text-zinc-100"
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-white/10"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <Link
            href={PERSONAL.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 rounded-full border border-zinc-700 px-4 py-1.5 text-xs font-medium text-zinc-300 hover:border-zinc-500 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <FileText className="h-3 w-3" />
            Resume
          </Link>
          <Link
            href="#contact"
            className="hidden md:inline-flex h-8 items-center justify-center rounded-full bg-accent px-5 text-xs font-semibold text-white shadow-[0_0_15px_-3px_rgba(2,86,155,0.5)] hover:shadow-[0_0_20px_-3px_rgba(2,86,155,0.7)] hover:bg-accent/90 transition-all hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Hire Me
          </Link>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex h-8 w-8 items-center justify-center rounded-full border border-zinc-700 text-zinc-400 hover:text-zinc-100 hover:border-zinc-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* ── Mobile dropdown ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.96 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="pointer-events-auto mt-2 w-full max-w-5xl rounded-2xl border border-white/10 bg-zinc-950/95 p-4 shadow-2xl backdrop-blur-xl md:hidden"
          >
            <nav className="flex flex-col gap-1" aria-label="Mobile Navigation">
              {NAV_LINKS.map((link) => {
                const isActive = `#${activeSection}` === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "rounded-xl px-4 py-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                      isActive
                        ? "bg-white/10 text-white"
                        : "text-zinc-400 hover:bg-white/5 hover:text-zinc-100"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
            <div className="mt-3 flex gap-2 border-t border-white/5 pt-3">
              <Link
                href={PERSONAL.resumeUrl}
                target="_blank"
                className="flex-1 inline-flex items-center justify-center gap-1.5 h-10 rounded-xl border border-zinc-700 text-sm font-medium text-zinc-300 hover:text-white hover:border-zinc-500 transition-colors"
              >
                <FileText className="h-4 w-4" />
                Resume
              </Link>
              <Link
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="flex-1 inline-flex h-10 items-center justify-center rounded-xl bg-accent text-sm font-semibold text-white hover:bg-accent/90 transition-colors"
              >
                Hire Me
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
