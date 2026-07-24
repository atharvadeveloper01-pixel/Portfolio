"use client";

import { useState, useEffect } from "react";

type ScrollDirection = "up" | "down";

export function useScrollDirection(): ScrollDirection {
  const [direction, setDirection] = useState<ScrollDirection>("up");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const update = () => {
      const scrollY = window.scrollY;
      // Only register direction change after a 10px threshold to avoid jitter
      if (Math.abs(scrollY - lastScrollY) > 10) {
        setDirection(scrollY > lastScrollY ? "down" : "up");
        lastScrollY = scrollY;
      }
    };

    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return direction;
}
