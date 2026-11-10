"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function PageBackground() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const heroEl = document.getElementById("top");
          const heroHeight = heroEl ? heroEl.offsetHeight : 600;
          const scrollY = window.scrollY;

          // Start fading out after the top 80px, fully reaching low opacity by the end of the hero section
          const fadeStart = 80;
          const fadeDistance = Math.max(heroHeight - fadeStart, 200);
          const progress = Math.min(Math.max((scrollY - fadeStart) / fadeDistance, 0), 1);

          setScrollProgress(progress);
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div
        className="relative h-full w-full transition-opacity duration-300 ease-out"
        style={{
          opacity: `calc(var(--bg-opacity-high, 0.60) - ${scrollProgress} * (var(--bg-opacity-high, 0.60) - var(--bg-opacity-low, 0.20)))`,
        }}
      >
        <Image
          src="/images/hero.svg"
          alt=""
          fill
          priority
          unoptimized
          className="object-cover object-center select-none"
        />
      </div>
    </div>
  );
}
