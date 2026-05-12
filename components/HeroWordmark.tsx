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
        }}
      >
        <span
          className="hero-letter-d"
          style={{
            fontFamily: FAMILY,
            fontWeight: 400,
            fontSize: "clamp(2.5rem, 7vw, 5rem)",
            color: "#1D1D1B",
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
            fontSize: "clamp(2.5rem, 7vw, 5rem)",
            color: "#1D1D1B",
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
            fontSize: "clamp(2.5rem, 7vw, 5rem)",
            color: "#1D1D1B",
            lineHeight: 1,
            display: "inline-block",
          }}
        >
          E
        </span>
      </div>

      {/* ADVISORS — fades up after DJE assembles */}
      <div
        className="hero-advisors"
        style={{
          fontFamily: FAMILY,
          fontWeight: 400,
          color: "#1D1D1B",
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
