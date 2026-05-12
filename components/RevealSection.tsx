"use client";

import { useEffect, useRef, type ReactNode, type CSSProperties } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

// Wraps a section in a 200vh sticky container so it pins in place while
// fading in from black — mirroring the hero's sticky scroll-jack approach.
// Progress (0→1) over the first 50vh of the 100vh scroll budget fades
// content in; the remaining 50vh holds at full opacity ("landing" time).
export default function RevealSection({ children, className, style }: Props) {
  const outerRef    = useRef<HTMLDivElement>(null);
  const overlayRef  = useRef<HTMLDivElement>(null);
  const contentRef  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const outer   = outerRef.current;
    const overlay = overlayRef.current;
    const content = contentRef.current;
    if (!outer || !overlay || !content) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Start state: black overlay fully opaque, content invisible
    overlay.style.opacity = "1";
    content.style.opacity = "0";

    let rafId = 0;
    let active = true;

    function tick() {
      rafId = 0;
      if (!active) return;

      const rect     = outer!.getBoundingClientRect();
      const vh       = window.innerHeight;
      const scrollableRange = outer!.offsetHeight - vh; // = 100vh (200 - 100)

      // scrolledIn: how far the user has scrolled past the container's top edge
      // negative means we haven't reached this container yet
      const scrolledIn = -rect.top;

      if (scrolledIn <= 0) {
        overlay!.style.opacity = "1";
        content!.style.opacity = "0";
        return;
      }

      // Fade plays over the first half of the scrollable range (50vh)
      // Second half (50–100vh) holds at full opacity — user "lands" here
      const fadeRange = scrollableRange * 0.5;
      const p = Math.min(scrolledIn / fadeRange, 1);

      overlay!.style.opacity = String(1 - p);
      content!.style.opacity = String(p);

      // Clean up once container has fully scrolled through
      if (scrolledIn >= scrollableRange) {
        active = false;
        window.removeEventListener("scroll", onScroll);
      }
    }

    function onScroll() {
      if (!rafId) rafId = requestAnimationFrame(tick);
    }

    rafId = requestAnimationFrame(tick); // deferred first read
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      active = false;
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div ref={outerRef} className="reveal-outer">
      <section
        className={["reveal-sticky", className].filter(Boolean).join(" ")}
        style={style}
      >
        {/* Black overlay fades OUT as the section reveals */}
        <div
          ref={overlayRef}
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "#000000",
            zIndex: 1,
            pointerEvents: "none",
          }}
        />
        {/* Content fades IN */}
        <div
          ref={contentRef}
          style={{ position: "relative", zIndex: 2, width: "100%" }}
        >
          {children}
        </div>
      </section>
    </div>
  );
}
