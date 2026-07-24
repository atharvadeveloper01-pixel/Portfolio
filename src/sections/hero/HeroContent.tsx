"use client";

import { motion } from "framer-motion";
import { Mail, FileText, ArrowRight, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { PERSONAL, STATS } from "@/constants/personal";

const SOCIALS = [
  { icon: GithubIcon, href: PERSONAL.github, label: "GitHub" },
  { icon: LinkedinIcon, href: PERSONAL.linkedin, label: "LinkedIn" },
  { icon: Mail, href: `mailto:${PERSONAL.email}`, label: "Email" },
];

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

export default function HeroContent() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-start text-left w-full"
    >
      {/* Availability badge */}
      <motion.div variants={item} className="mb-6">
        <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1.5 text-xs font-semibold text-accent tracking-wide">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          {PERSONAL.availability}
        </span>
      </motion.div>

      {/* Pre-headline */}
      <motion.p variants={item} className="mb-3 text-sm font-medium text-zinc-400 tracking-widest uppercase">
        {PERSONAL.title}
      </motion.p>

      {/* Main headline */}
      <motion.h1
        variants={item}
        className="mb-5 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.08]"
      >
        <span className="text-zinc-100">Building Mobile Apps</span>
        <br />
        <span className="bg-gradient-to-r from-zinc-100 to-zinc-500 bg-clip-text text-transparent">
          That Actually Ship.
        </span>
      </motion.h1>

      {/* Description */}
      <motion.p
        variants={item}
        className="mb-8 max-w-lg text-base sm:text-lg leading-relaxed text-zinc-400"
      >
        {PERSONAL.tagline}
      </motion.p>

      {/* CTAs */}
      <motion.div variants={item} className="mb-10 flex flex-wrap items-center gap-3">
        <Link
          href="#projects"
          className="group inline-flex h-11 items-center justify-center rounded-full bg-white px-7 text-sm font-semibold text-zinc-950 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] transition-all hover:scale-[1.02] hover:shadow-[0_0_28px_-5px_rgba(255,255,255,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          View My Work
        </Link>
        <Link
          href="#contact"
          className="group inline-flex h-11 items-center justify-center gap-2 rounded-full border border-zinc-700 bg-transparent px-7 text-sm font-semibold text-zinc-100 transition-all hover:bg-zinc-800 hover:border-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Let&apos;s Talk
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </motion.div>

      {/* Social links */}
      <motion.div variants={item} className="mb-8 flex items-center gap-3">
        {SOCIALS.map(({ icon: Icon, href, label }) => (
          <Link
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            aria-label={label}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-400 transition-all hover:border-zinc-600 hover:bg-zinc-800 hover:text-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <Icon className="h-4 w-4" />
          </Link>
        ))}
        <div className="mx-1 h-5 w-px bg-zinc-800" />
        <Link
          href={PERSONAL.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-10 items-center gap-1.5 rounded-full border border-zinc-800 bg-zinc-900/50 px-4 text-xs font-medium text-zinc-400 transition-all hover:border-zinc-600 hover:bg-zinc-800 hover:text-zinc-100"
        >
          <FileText className="h-3.5 w-3.5" />
          Resume
        </Link>
      </motion.div>

      {/* Location + Stats */}
      <motion.div variants={item} className="flex flex-col gap-4 w-full">
        <div className="flex items-center gap-1.5 text-xs text-zinc-500">
          <MapPin className="h-3.5 w-3.5" />
          <span>{PERSONAL.location} · {PERSONAL.institution}</span>
        </div>

        <div className={cn("grid grid-cols-4 gap-4 max-w-sm")}>
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-0.5">
              <span className="text-xl font-bold text-zinc-100">{stat.value}</span>
              <span className="text-[11px] text-zinc-500 leading-tight">{stat.label}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
