"use client";

import { motion } from "framer-motion";
import { PROJECTS } from "@/constants/projects";

const floatA = {
  animate: { y: [0, -12, 0] },
  transition: { duration: 6, repeat: Infinity, ease: "easeInOut" as const },
};

const floatB = {
  animate: { y: [0, 10, 0] },
  transition: { duration: 7, repeat: Infinity, ease: "easeInOut" as const, delay: 1 },
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
});

export default function HeroVisual() {
  return (
    <div className="relative w-full flex items-center justify-center h-[480px] sm:h-[540px] lg:h-[620px]">

      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="h-80 w-80 rounded-full bg-accent/8 blur-[120px]" />
      </div>

      {/* ── Phone frame ─────────────────────────── */}
      <motion.div {...fadeUp(0.3)} className="relative z-10">
        <div className="relative w-52 h-[420px] rounded-[2.5rem] border-2 border-zinc-700/80 bg-zinc-950 shadow-[0_32px_80px_-16px_rgba(0,0,0,0.8)] overflow-hidden">
          {/* Status bar */}
          <div className="flex items-center justify-between px-5 pt-4 pb-2">
            <span className="text-[9px] text-zinc-400 font-medium">9:41</span>
            <div className="flex gap-1">
              <div className="w-3 h-1.5 rounded-sm bg-zinc-600" />
              <div className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
            </div>
          </div>

          {/* App header */}
          <div className="px-4 pb-3 border-b border-zinc-800">
            <div className="h-2.5 w-20 rounded-full bg-accent/60 mb-1.5" />
            <div className="h-2 w-28 rounded-full bg-zinc-700" />
          </div>

          {/* App content */}
          <div className="px-4 pt-4 flex flex-col gap-3">
            {/* Card 1 — active task */}
            <div className="rounded-xl bg-accent/10 border border-accent/20 p-3">
              <div className="h-2 w-16 rounded-full bg-accent/50 mb-2" />
              <div className="h-2 w-24 rounded-full bg-zinc-700 mb-1" />
              <div className="h-2 w-20 rounded-full bg-zinc-700" />
              <div className="mt-2.5 flex items-center gap-1.5">
                <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                <div className="h-1.5 w-10 rounded-full bg-zinc-700" />
              </div>
            </div>

            {/* Card 2 */}
            <div className="rounded-xl bg-zinc-900 border border-zinc-800 p-3">
              <div className="h-2 w-12 rounded-full bg-zinc-600 mb-2" />
              <div className="h-2 w-full rounded-full bg-zinc-800 mb-1" />
              <div className="h-2 w-3/4 rounded-full bg-zinc-800" />
            </div>

            {/* Card 3 */}
            <div className="rounded-xl bg-zinc-900 border border-zinc-800 p-3">
              <div className="h-2 w-12 rounded-full bg-zinc-600 mb-2" />
              <div className="h-2 w-full rounded-full bg-zinc-800 mb-1" />
              <div className="h-2 w-2/3 rounded-full bg-zinc-800" />
            </div>
          </div>

          {/* Bottom nav bar */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-around items-center px-4 py-3 border-t border-zinc-800 bg-zinc-950">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className={`h-5 w-5 rounded-md ${i === 0 ? "bg-accent/70" : "bg-zinc-800"}`}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* ── Floating card: Play Store ─── */}
      <motion.div
        {...fadeUp(0.7)}
        animate={floatA.animate}
        transition={floatA.transition}
        className="absolute top-12 -right-2 sm:right-4 z-20"
      >
        <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-zinc-900/80 px-4 py-3 shadow-xl backdrop-blur-md">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/15">
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-emerald-400">
              <path d="M3.18 23.8a1 1 0 0 0 1.38.35l11.54-6.67-2.75-2.75-10.17 9.07zm16.17-11.73L15.8 9.55l-4.14 4.14 4.14 4.14 3.56-2.53a1.5 1.5 0 0 0-.01-2.23zM3.18.2a1 1 0 0 0-.18.59v22.42a1 1 0 0 0 .18.59l.09.09 12.56-12.56v-.15L3.27.11.18.2zm11.44 11.93L3.06 1.57A1 1 0 0 0 3 1.57l11.62 10.56z" />
            </svg>
          </div>
          <div>
            <p className="text-xs font-semibold text-zinc-100">Live on Play Store</p>
            <p className="text-[10px] text-zinc-500">Mood Mesh</p>
          </div>
        </div>
      </motion.div>

      {/* ── Floating card: Tech stack ─── */}
      <motion.div
        {...fadeUp(0.9)}
        animate={floatB.animate}
        transition={floatB.transition}
        className="absolute bottom-20 -left-2 sm:left-0 z-20"
      >
        <div className="flex flex-col gap-2.5 rounded-2xl border border-white/10 bg-zinc-900/80 px-4 py-3.5 shadow-xl backdrop-blur-md min-w-[160px]">
          <p className="text-[10px] font-semibold text-zinc-500 uppercase tracking-wider">Tech Stack</p>
          {["Flutter", "Firebase", "Dart"].map((tech) => (
            <div key={tech} className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span className="text-xs font-medium text-zinc-300">{tech}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── Floating card: Projects count ─── */}
      <motion.div
        {...fadeUp(1.1)}
        className="absolute top-[40%] -right-4 sm:right-0 z-20 hidden sm:block"
      >
        <div className="flex items-center gap-2.5 rounded-2xl border border-white/10 bg-zinc-900/80 px-4 py-3 shadow-xl backdrop-blur-md">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent/15">
            <span className="text-base font-bold text-accent">{PROJECTS.length}</span>
          </div>
          <div>
            <p className="text-xs font-semibold text-zinc-100">Projects</p>
            <p className="text-[10px] text-zinc-500">Built & shipped</p>
          </div>
        </div>
      </motion.div>

    </div>
  );
}
