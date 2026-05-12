"use client";

import { useEffect, useState } from "react";

// Century Gothic Pro → Century Gothic (system) → Avenir Next → system-ui
const FAMILY =
  '"Century Gothic Pro", "Century Gothic", "Avenir Next", "Avenir", system-ui, sans-serif';

// Steps: 0=hidden  1=D  2=+J  3=+E  4=tighten  5=+ADVISORS
type Step = 0 | 1 | 2 | 3 | 4 | 5;

export default function HeroWordmark() {
  const [step, setStep] = useState<Step>(0);

  useEffect(() => {
    // Respect reduced-motion — jump to final state immediately
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStep(5);
      return;
    }
    setStep(1);
    const timers = [
      setTimeout(() => setStep(2), 380),   // J slides in
      setTimeout(() => setStep(3), 680),   // E slides in
      setTimeout(() => setStep(4), 960),   // DJE tightens
      setTimeout(() => setStep(5), 1350),  // ADVISORS fades up
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const sz = "clamp(2.5rem, 7vw, 5rem)";
  const base: React.CSSProperties = {
    fontFamily: FAMILY,
    fontWeight: 400,
    fontSize: sz,
    color: "#1D1D1B",
    lineHeight: 1,
    display: "inline-block",
  };

  // J and E slide in from the right
  const slide = (show: boolean): React.CSSProperties => ({
    opacity: show ? 1 : 0,
    transform: show ? "translateX(0)" : "translateX(28px)",
    transition:
      "opacity 0.35s ease, transform 0.42s cubic-bezier(0.34, 1.56, 0.64, 1)",
  });

  return (
    <div
      aria-label="DJE ADVISORS"
      style={{ textAlign: "center", userSelect: "none" }}
    >
      {/* D J E — gap tightens on step 4 */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "baseline",
          gap: step >= 4 ? "0.01em" : "0.11em",
          transition: "gap 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {/* D — fades in first */}
        <span
          style={{
            ...base,
            opacity: step >= 1 ? 1 : 0,
            transition: "opacity 0.4s ease",
          }}
        >
          D
        </span>

        {/* J — slides in from right */}
        <span style={{ ...base, ...slide(step >= 2) }}>J</span>

        {/* E — slides in from right */}
        <span style={{ ...base, ...slide(step >= 3) }}>E</span>
      </div>

      {/* ADVISORS — fades up after DJE settles */}
      <div
        style={{
          fontFamily: FAMILY,
          fontWeight: 400,
          color: "#1D1D1B",
          letterSpacing: "0.28em",
          fontSize: "clamp(0.75rem, 2vw, 1.1rem)",
          marginTop: "0.45rem",
          opacity: step >= 5 ? 1 : 0,
          transform: step >= 5 ? "translateY(0)" : "translateY(10px)",
          transition: "opacity 0.5s ease, transform 0.5s ease",
        }}
      >
        ADVISORS
      </div>
    </div>
  );
}
