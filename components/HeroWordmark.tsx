// Server component — animation is CSS-only (globals.css).
// No "use client" needed; no JavaScript state.

const FAMILY =
  '"Century Gothic Pro", "Century Gothic", "Avenir Next", "Avenir", system-ui, sans-serif';

export default function HeroWordmark() {
  return (
    <div aria-label="DJE" style={{ textAlign: "center", userSelect: "none" }}>
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

        {/* Cyan line: single path — diagonal from top-right → bottom-left,
            then traces the rectangle frame around DJE.
            pathLength="1" normalises total length so dasharray/dashoffset
            can be expressed as fractions (0–1) without JS getTotalLength(). */}
        <div
          style={{
            position: "absolute",
            top: "-12px",
            left: "-24px",
            right: "-24px",
            bottom: "-12px",
            pointerEvents: "none",
          }}
        >
          <svg
            viewBox="0 0 400 100"
            preserveAspectRatio="none"
            style={{ width: "100%", height: "100%", overflow: "visible" }}
            aria-hidden="true"
          >
            {/*
              Path sequence:
              1. M 390 8     — start: top-right corner
              2. C … 10 92   — cubic bezier diagonally to bottom-left
              3. L 390 92    — bottom edge: left → right
              4. L 390 8     — right edge: bottom → top (back to start)
              5. L 10 8      — top edge: right → left
              6. L 10 92     — left edge: top → bottom (completes rectangle)
            */}
            <path
              className="hero-line-path"
              d="M 390 8 C 300 20, 100 80, 10 92 L 390 92 L 390 8 L 10 8 L 10 92"
              fill="none"
              stroke="#00A7E1"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              pathLength="1"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
