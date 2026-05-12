"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const PHOTO_URL =
  "https://images.unsplash.com/photo-1481627834876-b7833e8f5570";

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
      imgWrap!.style.transform = `scale(${1 + progress * 0.4})`;
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
      {/* Background image — scales on scroll, transform-origin top center */}
      <div
        ref={imgWrapRef}
        style={{
          position: "absolute",
          inset: 0,
          transformOrigin: "top center",
          willChange: "transform",
          zIndex: 0,
        }}
      >
        <Image
          src={PHOTO_URL}
          alt=""
          fill
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center top" }}
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
