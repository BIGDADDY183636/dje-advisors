"use client";

import { useEffect, useRef, type ReactNode, type CSSProperties } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

// Wraps a section in a 200vh sticky container so it pins in place after the
// hero's black fade-out. A black overlay sits on TOP of the section content
// (z-index: 10) and fades from opacity 1→0 over the first 50vh of the 100vh
// scroll budget, revealing the section's real background and content together.
// The remaining 50vh of scroll holds the section fully visible before normal
// scroll resumes.
export default function RevealSection({ children, className, style }: Props) {
  const outerRef   = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const outer   = outerRef.current;
    const overlay = overlayRef.current;
    if (!outer || !overlay) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      overlay.style.display = "none"; // skip entirely, section instantly visible
      return;
    }

    let rafId = 0;
    let active = true;

    function tick() {
      rafId = 0;
      if (!active) return;

      const rect        = outer!.getBoundingClientRect();
      const vh          = window.innerHeight;
      const scrollBudget = outer!.offsetHeight - vh; // 200vh - 100vh = 100vh
      const scrolledIn  = -rect.top; // positive once container top has passed viewport top

      if (scrolledIn <= 0) {
        overlay!.style.opacity = "1";
        return;
      }

      // Fade overlay out over first half of scroll budget (50vh)
      const fadeEnd = scrollBudget * 0.5;
      const p = Math.min(scrolledIn / fadeEnd, 1);
      overlay!.style.opacity = String(1 - p);

      // Once container is fully scrolled through, remove overlay from layer tree
      if (scrolledIn >= scrollBudget) {
        active = false;
        overlay!.style.display = "none";
        window.removeEventListener("scroll", onScroll);
      }
    }

    function onScroll() {
      if (!rafId) rafId = requestAnimationFrame(tick);
    }

    rafId = requestAnimationFrame(tick); // deferred so layout is settled
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
        {/* Children render at full opacity — overlay on top blocks them initially */}
        {children}

        {/* Black overlay fades out to reveal section. Must be LAST in DOM
            so it stacks above children even without an explicit z-index war. */}
        <div
          ref={overlayRef}
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "#000000",
            zIndex: 10,
            pointerEvents: "none",
          }}
        />
      </section>
    </div>
  );
}
