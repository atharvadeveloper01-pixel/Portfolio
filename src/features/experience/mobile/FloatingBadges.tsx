"use client";

import { motion } from "framer-motion";
import type { FloatingCard } from "@/types";

const POSITIONS = [
  // Top-left cluster
  { top: "8%", left: "-18%", delay: 0 },
  { top: "28%", left: "-22%", delay: 0.4 },
  // Top-right
  { top: "6%", right: "-16%", delay: 0.2 },
  // Bottom-right
  { bottom: "22%", right: "-20%", delay: 0.6 },
  // Bottom-left
  { bottom: "10%", left: "-14%", delay: 0.8 },
];

const floatKeyframes = [0, -8, 0, 8, 0];

interface FloatingBadgesProps {
  cards: FloatingCard[];
  accent: string;
}

export default function FloatingBadges({ cards, accent }: FloatingBadgesProps) {
  return (
    <div className="absolute inset-0 pointer-events-none hidden lg:block z-20">
      {cards.slice(0, POSITIONS.length).map((card, i) => {
        const pos = POSITIONS[i];
        return (
          <motion.div
            key={card.label}
            className="absolute"
            style={{ ...pos }}
            animate={{ y: floatKeyframes }}
            transition={{
              duration: 4 + i * 0.5,
              delay: pos.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div
              className="flex items-center gap-2 rounded-xl border border-zinc-700/60 bg-zinc-900/80 px-3.5 py-2.5 shadow-lg backdrop-blur-md whitespace-nowrap"
              style={{ borderColor: `${accent}25` }}
            >
              <span className="text-base leading-none">{card.icon}</span>
              <span className="text-xs font-semibold text-zinc-200">{card.label}</span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
