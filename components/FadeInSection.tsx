"use client";

import { useEffect, useRef, type ReactNode, type CSSProperties } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export default function FadeInSection({ children, className, style }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Inline style wins over all CSS — section is invisible immediately
    el.style.opacity = "0";

    let rafId = 0;
    let active = true;

    function tick() {
      rafId = 0;
      if (!active) return;

      const rect = el!.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 when section top is at/below viewport bottom
      // 1 when section top is 50vh above the viewport bottom
      const progress = Math.min(Math.max((vh - rect.top) / (vh * 0.5), 0), 1);
      el!.style.opacity = String(progress);

      if (progress >= 1) {
        active = false;
        window.removeEventListener("scroll", onScroll);
        // opacity is already "1" from String(1) — no need to reset
      }
    }

    function onScroll() {
      if (!rafId) rafId = requestAnimationFrame(tick);
    }

    // Defer the first read to the next paint frame.
    // Calling getBoundingClientRect() synchronously in useEffect can return
    // a stale value if the sticky-container layout hasn't fully settled after
    // hydration, causing progress to snap to 1 and the fade to never play.
    rafId = requestAnimationFrame(tick);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      active = false;
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section ref={ref} className={className} style={style}>
      {children}
    </section>
  );
}
