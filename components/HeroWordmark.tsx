// Server component — animation is CSS-only (globals.css). No "use client" needed.

const FAMILY =
  '"Century Gothic Pro", "Century Gothic", "Avenir Next", "Avenir", system-ui, sans-serif';

// Ellipse drawn counterclockwise via two half-arcs so pathLength="1" normalises it.
function LetterOval({ pathClass }: { pathClass: string }) {
  return (
    <svg
      style={{
        position: "absolute",
        top: "-0.2em",
        left: "-0.2em",
        right: "-0.2em",
        bottom: "-0.2em",
        overflow: "visible",
        pointerEvents: "none",
      }}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        className={pathClass}
        d="M 97 50 A 47 47 0 1 0 3 50 A 47 47 0 1 0 97 50"
        fill="none"
        stroke="#00A7E1"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength="1"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

export default function HeroWordmark() {
  return (
    <div aria-label="DJE" style={{ textAlign: "center", userSelect: "none" }}>
      {/* font-size on this container so all child em units resolve to it */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "baseline",
          gap: "0.05em",
          position: "relative",
          fontSize: "clamp(6rem, 15vw, 12rem)",
        }}
      >
        {/* D */}
        <span style={{ display: "inline-block", position: "relative" }}>
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
          <LetterOval pathClass="hero-oval-d-path" />
        </span>

        {/* J */}
        <span style={{ display: "inline-block", position: "relative" }}>
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
          <LetterOval pathClass="hero-oval-j-path" />
        </span>

        {/* E */}
        <span style={{ display: "inline-block", position: "relative" }}>
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
          <LetterOval pathClass="hero-oval-e-path" />
        </span>

        {/* Outer rectangle — em units resolve to the container font-size */}
        <div
          style={{
            position: "absolute",
            top: "-0.4em",
            left: "-0.35em",
            right: "-0.35em",
            bottom: "-0.4em",
            pointerEvents: "none",
          }}
        >
          <svg
            viewBox="0 0 400 100"
            preserveAspectRatio="none"
            style={{ width: "100%", height: "100%", overflow: "visible" }}
            aria-hidden="true"
          >
            <path
              className="hero-rect-path"
              d="M 10 10 L 390 10 L 390 90 L 10 90 Z"
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
