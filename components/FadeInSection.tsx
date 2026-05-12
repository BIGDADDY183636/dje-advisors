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

    el.style.opacity = "0";

    let raf = 0;
    let done = false;

    function update() {
      if (done) return;
      const rect = el!.getBoundingClientRect();
      // Fade from 0→1 as element's top travels from viewport bottom to 50vh above it
      const progress = Math.min(
        Math.max((window.innerHeight - rect.top) / (0.5 * window.innerHeight), 0),
        1
      );
      el!.style.opacity = String(progress);
      if (progress >= 1) {
        done = true;
        el!.style.opacity = "";
        window.removeEventListener("scroll", onScroll);
      }
      raf = 0;
    }

    function onScroll() {
      if (!raf) raf = requestAnimationFrame(update);
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section ref={ref} className={className} style={style}>
      {children}
    </section>
  );
}
