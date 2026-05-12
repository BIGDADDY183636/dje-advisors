// Server component — animation is CSS-only (globals.css).
// No "use client" needed; no JavaScript state.

const FAMILY =
  '"Century Gothic Pro", "Century Gothic", "Avenir Next", "Avenir", system-ui, sans-serif';

export default function HeroWordmark() {
  return (
    <div aria-label="DJE ADVISORS" style={{ textAlign: "center", userSelect: "none" }}>
      {/* D J E — letters drop in sequentially */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "baseline",
          gap: "0.01em",
          position: "relative",
        }}
      >
        <span
          className="hero-letter-d"
          style={{
            fontFamily: FAMILY,
            fontWeight: 400,
            fontSize: "clamp(4rem, 11vw, 8rem)",
            color: "#ffffff",
            lineHeight: 1,
            display: "inline-block",
          }}
        >
          D
        </span>
        <span
          className="hero-letter-j"
          style={{
            fontFamily: FAMILY,
            fontWeight: 400,
            fontSize: "clamp(4rem, 11vw, 8rem)",
            color: "#ffffff",
            lineHeight: 1,
            display: "inline-block",
          }}
        >
          J
        </span>
        <span
          className="hero-letter-e"
          style={{
            fontFamily: FAMILY,
            fontWeight: 400,
            fontSize: "clamp(4rem, 11vw, 8rem)",
            color: "#ffffff",
            lineHeight: 1,
            display: "inline-block",
          }}
        >
          E
        </span>

        {/* Wavy cyan line — draws left-to-right after letters land */}
        <div
          className="hero-line-draw"
          style={{
            position: "absolute",
            top: "32%",
            left: 0,
            right: 0,
            pointerEvents: "none",
          }}
        >
          <svg
            viewBox="0 0 800 28"
            preserveAspectRatio="none"
            style={{ width: "100%", height: "28px", display: "block" }}
            aria-hidden="true"
          >
            <path
              d="M 0 14 C 67 4, 133 24, 200 14 C 267 4, 333 24, 400 14 C 467 4, 533 24, 600 14 C 667 4, 733 24, 800 14"
              fill="none"
              stroke="#00A7E1"
              strokeWidth="4"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>
      </div>

      {/* ADVISORS — fades up after DJE assembles */}
      <div
        className="hero-advisors"
        style={{
          fontFamily: FAMILY,
          fontWeight: 400,
          color: "#ffffff",
          letterSpacing: "0.28em",
          fontSize: "clamp(0.75rem, 2vw, 1.1rem)",
          marginTop: "0.45rem",
        }}
      >
        ADVISORS
      </div>
    </div>
  );
}
