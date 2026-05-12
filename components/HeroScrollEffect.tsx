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
      // Outer container is 200vh; sticky hero pins for the first 100vh of scroll.
      // progress 0→1 maps to scrollY 0→innerHeight.
      const raw = Math.min(window.scrollY / window.innerHeight, 1);

      // Phase 1 (raw 0→0.7): zoom plays, overlay fades to 0.5
      // Phase 2 (raw 0.7→1): zoom locked at max, overlay continues to 1
      const zoomP = Math.min(raw / 0.7, 1);
      const translateY = zoomP * 40; // 0→40vh
      const scale = 1 + zoomP * 2;  // 1→3

      const overlayOpacity =
        raw <= 0.7
          ? (raw / 0.7) * 0.5
          : 0.5 + ((raw - 0.7) / 0.3) * 0.5;

      imgWrap!.style.transform = `translateY(${translateY}vh) scale(${scale})`;
      black!.style.opacity = String(overlayOpacity);
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
      {/* Background image — translateY + scale on scroll, transform-origin center top */}
      <div
        ref={imgWrapRef}
        style={{
          position: "absolute",
          inset: 0,
          transformOrigin: "center top",
          willChange: "transform",
          zIndex: 0,
        }}
      >
        <Image
          src={PHOTO_URL}
          alt=""
          fill
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center bottom" }}
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
