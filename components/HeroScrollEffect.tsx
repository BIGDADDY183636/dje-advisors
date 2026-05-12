"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

// Sawyer Bengtson — Chicago with dramatic sky and clouds above the buildings
const PHOTO_URL =
  "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=2400&q=80";

export default function HeroScrollEffect() {
  const imgWrapRef = useRef<HTMLDivElement>(null);
  const blackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const imgWrap = imgWrapRef.current;
    const black = blackRef.current;
    if (!imgWrap || !black) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;

    function update() {
      const progress = Math.min(window.scrollY / window.innerHeight, 1);
      // translateY pushes image down so sky (top) comes into view — "flying up"
      // scale 1→2 zooms in simultaneously from center
      const translateY = progress * 40; // vh
      const scale = 1 + progress * 1;   // 1 → 2
      imgWrap!.style.transform = `translateY(${translateY}vh) scale(${scale})`;
      black!.style.opacity = String(progress);
      raf = 0;
    }

    function onScroll() {
      if (!raf) raf = requestAnimationFrame(update);
    }

    // Sync to current scroll position (handles page reload with non-zero scroll)
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {/* Background image — translateY + scale on scroll, transform-origin center */}
      <div
        ref={imgWrapRef}
        style={{
          position: "absolute",
          inset: 0,
          transformOrigin: "center",
          willChange: "transform",
          zIndex: 0,
        }}
      >
        <Image
          src={PHOTO_URL}
          alt=""
          fill
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center center" }}
          priority
        />
      </div>

      {/* Scroll-driven fade-to-black — sits above all hero content */}
      <div
        ref={blackRef}
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "#000000",
          opacity: 0,
          zIndex: 10,
          pointerEvents: "none",
        }}
      />
    </>
  );
}
