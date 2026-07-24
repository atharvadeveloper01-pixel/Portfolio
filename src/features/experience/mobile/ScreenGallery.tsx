"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { AppScreen } from "@/types";
import AppScreenRenderer from "./AppScreen";
import Container from "@/components/layout/Container";

interface ScreenGalleryProps {
  screens: AppScreen[];
  accent: string;
}

export default function ScreenGallery({ screens, accent }: ScreenGalleryProps) {
  const [fullscreenIndex, setFullscreenIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Keyboard navigation in fullscreen
  useEffect(() => {
    if (fullscreenIndex === null) return;
    function handleKey(e: KeyboardEvent) {
      if (fullscreenIndex === null) return;
      if (e.key === "ArrowRight") setFullscreenIndex((i) => Math.min(screens.length - 1, (i ?? 0) + 1));
      if (e.key === "ArrowLeft") setFullscreenIndex((i) => Math.max(0, (i ?? 0) - 1));
      if (e.key === "Escape") setFullscreenIndex(null);
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [fullscreenIndex, screens.length]);

  // Lock body scroll when fullscreen is open
  useEffect(() => {
    document.body.style.overflow = fullscreenIndex !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [fullscreenIndex]);

  return (
    <section id="gallery" className="w-full py-20 lg:py-28 border-t border-zinc-800/60 overflow-hidden">
      <Container>
        <div className="mb-12">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-zinc-600">
            Screen Gallery
          </p>
          <h2 className="text-3xl font-bold text-zinc-100">
            Every screen, up close.
          </h2>
          <p className="mt-3 text-sm text-zinc-500">
            Click any screen to view it in fullscreen. Use arrow keys or swipe to navigate.
          </p>
        </div>
      </Container>

      {/* Full-bleed scrollable phone row */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-10 pt-2 px-6 lg:px-12 scrollbar-none snap-x snap-mandatory"
        style={{ scrollPaddingLeft: "48px" }}
      >
        {screens.map((screen, i) => (
          <motion.div
            key={screen.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="shrink-0 snap-center flex flex-col items-center gap-3 cursor-pointer group"
            onClick={() => setFullscreenIndex(i)}
          >
            {/* Mini phone */}
            <div
              className="w-[168px] h-[348px] rounded-[2rem] border-2 border-zinc-800 bg-zinc-900 overflow-hidden relative transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_24px_48px_-8px_rgba(0,0,0,0.6)]"
              style={{ borderColor: `${accent}20` }}
            >
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10 h-4 w-14 rounded-b-xl bg-zinc-900 border-b border-x border-zinc-800" />
              <div className="absolute inset-0">
                <AppScreenRenderer screen={screen} accent={accent} />
              </div>
              {/* Hover overlay */}
              <div
                className="absolute inset-0 rounded-[1.9rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                style={{ backgroundColor: `${accent}15` }}
              >
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-full text-white text-lg shadow-lg"
                  style={{ backgroundColor: accent }}
                >
                  ⤢
                </div>
              </div>
            </div>

            {/* Label */}
            <p className="text-xs font-medium text-zinc-500 group-hover:text-zinc-300 transition-colors">
              {screen.label}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Fullscreen lightbox */}
      <AnimatePresence>
        {fullscreenIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 backdrop-blur-2xl"
            onClick={() => setFullscreenIndex(null)}
          >
            {/* Close */}
            <button
              className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 text-zinc-300 hover:text-white transition-colors z-10"
              onClick={() => setFullscreenIndex(null)}
              aria-label="Close fullscreen"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Prev */}
            <button
              className="absolute left-6 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 text-zinc-300 hover:text-white transition-all hover:-translate-x-1 disabled:opacity-30 disabled:cursor-not-allowed z-10"
              onClick={(e) => { e.stopPropagation(); setFullscreenIndex((i) => Math.max(0, (i ?? 0) - 1)); }}
              disabled={fullscreenIndex === 0}
              aria-label="Previous screen"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            {/* Next */}
            <button
              className="absolute right-6 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 text-zinc-300 hover:text-white transition-all hover:translate-x-1 disabled:opacity-30 disabled:cursor-not-allowed z-10"
              onClick={(e) => { e.stopPropagation(); setFullscreenIndex((i) => Math.min(screens.length - 1, (i ?? 0) + 1)); }}
              disabled={fullscreenIndex === screens.length - 1}
              aria-label="Next screen"
            >
              <ChevronRight className="h-4 w-4" />
            </button>

            {/* Large phone */}
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={fullscreenIndex}
                initial={{ opacity: 0, scale: 0.92, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0, transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }}
                exit={{ opacity: 0, scale: 0.94, transition: { duration: 0.15 } }}
                onClick={(e) => e.stopPropagation()}
                className="flex flex-col items-center gap-5"
              >
                {/* Glow */}
                <div
                  className="absolute rounded-full blur-3xl opacity-20 pointer-events-none w-80 h-80"
                  style={{ backgroundColor: accent }}
                />

                <div
                  className="relative z-10 w-[300px] h-[624px] rounded-[3rem] border-2 border-zinc-700 bg-zinc-900 overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.9)]"
                  style={{ borderColor: `${accent}40` }}
                >
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 h-7 w-24 rounded-b-2xl bg-zinc-900 border-b-2 border-x-2 border-zinc-800 flex items-center justify-center gap-1.5">
                    <div className="h-1.5 w-1.5 rounded-full bg-zinc-700" />
                    <div className="h-1 w-7 rounded-full bg-zinc-800" />
                  </div>
                  <AppScreenRenderer screen={screens[fullscreenIndex]} accent={accent} />
                  <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 h-1 w-24 rounded-full bg-zinc-700" />
                </div>

                {/* Screen label + description */}
                <div className="text-center max-w-xs">
                  <p className="font-semibold text-zinc-100 mb-1">
                    {screens[fullscreenIndex].label}
                  </p>
                  {screens[fullscreenIndex].description && (
                    <p className="text-xs text-zinc-500 leading-relaxed">
                      {screens[fullscreenIndex].description}
                    </p>
                  )}
                </div>

                {/* Dot indicators */}
                <div className="flex items-center gap-2">
                  {screens.map((_, i) => (
                    <button
                      key={i}
                      onClick={(e) => { e.stopPropagation(); setFullscreenIndex(i); }}
                      className="rounded-full transition-all duration-300"
                      style={{
                        width: i === fullscreenIndex ? "20px" : "6px",
                        height: "6px",
                        backgroundColor: i === fullscreenIndex ? accent : "#3f3f46",
                      }}
                      aria-label={`Go to screen ${i + 1}`}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
