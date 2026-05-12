// Server component — animation is CSS-only (globals.css). No "use client" needed.

const FAMILY =
  '"Century Gothic Pro", "Century Gothic", "Avenir Next", "Avenir", system-ui, sans-serif';

export default function HeroWordmark() {
  return (
    <div
      style={{
        position: "relative",
        display: "inline-block",
        userSelect: "none",
      }}
    >
      {/* Rectangle SVG — drawn on via stroke-dashoffset, persists as the frame */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <svg
          viewBox="0 0 400 120"
          preserveAspectRatio="none"
          style={{ width: "100%", height: "100%", overflow: "visible" }}
          aria-hidden="true"
        >
          <path
            className="hero-rect-path"
            d="M 5 5 L 395 5 L 395 115 L 5 115 Z"
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

      {/* Content area — two layers share the same grid cell */}
      <div
        style={{
          display: "grid",
          padding: "2rem 3rem",
          minWidth: "clamp(18rem, 50vw, 44rem)",
        }}
      >
        {/* Layer 1: DJE letters — fall in, then fade out */}
        <div
          className="hero-letters-exit"
          aria-hidden="true"
          style={{
            gridArea: "1/1",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.05em",
            fontSize: "clamp(6rem, 15vw, 12rem)",
          }}
        >
          <span
            className="hero-letter-d"
            style={{
              fontFamily: FAMILY,
              fontWeight: 400,
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
              color: "#ffffff",
              lineHeight: 1,
              display: "inline-block",
            }}
          >
            E
          </span>
        </div>

        {/* Layer 2: Headline — fades in inside the rectangle after letters exit */}
        <div
          className="hero-headline"
          style={{
            gridArea: "1/1",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1
            style={{
              fontFamily: FAMILY,
              fontWeight: 400,
              fontSize: "clamp(1.5rem, 4vw, 3rem)",
              color: "#ffffff",
              lineHeight: 1.2,
              textAlign: "center",
              margin: 0,
              padding: "0 0.5em",
            }}
          >
            Trusted Partner in Tax and Accounting
          </h1>
        </div>
      </div>
    </div>
  );
}
