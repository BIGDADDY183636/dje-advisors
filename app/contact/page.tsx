import type { Metadata } from "next";
import type { ReactNode, CSSProperties } from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact — DJE Advisors",
  description:
    "Get in touch with DJE Advisors. We respond within one business day.",
};

const DISPLAY =
  '"Century Gothic Pro", "Century Gothic", "Avenir Next", "Avenir", system-ui, sans-serif';
const SANS = '"Helvetica Neue", Helvetica, Arial, sans-serif';

function PhotoSection({
  photoUrl,
  overlayColor,
  className = "",
  style,
  children,
}: {
  photoUrl: string;
  overlayColor: string;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}) {
  return (
    <section className={className} style={{ position: "relative", ...style }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url('${photoUrl}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: overlayColor,
          zIndex: 1,
          pointerEvents: "none",
        }}
      />
      <div style={{ position: "relative", zIndex: 2 }}>{children}</div>
    </section>
  );
}

const inputStyle: CSSProperties = {
  display: "block",
  width: "100%",
  fontFamily: SANS,
  fontSize: "0.9rem",
  color: "#1D1D1B",
  backgroundColor: "#ffffff",
  border: "1px solid #e5e5e3",
  borderRadius: "0.125rem",
  padding: "0.75rem 1rem",
  outline: "none",
  boxSizing: "border-box",
};

const fieldLabelStyle: CSSProperties = {
  display: "block",
  fontFamily: SANS,
  fontWeight: 500,
  fontSize: "0.7rem",
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  color: "rgba(29,29,27,0.5)",
  marginBottom: "0.4rem",
};

const infoLabelStyle: CSSProperties = {
  fontFamily: SANS,
  fontWeight: 500,
  fontSize: "0.62rem",
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  color: "#00A7E1",
  marginBottom: "0.35rem",
};

const infoValueStyle: CSSProperties = {
  fontFamily: SANS,
  fontSize: "0.9rem",
  color: "rgba(29,29,27,0.72)",
  lineHeight: 1.6,
};

export default function ContactPage() {
  return (
    <main className="pt-[72px]">

      {/* ── 1. Hero header ── */}
      <PhotoSection
        photoUrl="https://images.unsplash.com/photo-1606856110002-d0991ce78250?w=2400&q=80&auto=format&fit=crop"
        overlayColor="rgba(255,255,255,0.85)"
        className="py-24 px-6 border-b border-border"
      >
        <div className="max-w-3xl mx-auto">
          <p
            style={{
              fontFamily: DISPLAY,
              fontWeight: 700,
              fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              color: "#00A7E1",
              lineHeight: 1.1,
              marginBottom: "1.25rem",
            }}
          >
            Contact
          </p>
          <h1
            style={{
              fontFamily: DISPLAY,
              fontWeight: 700,
              fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)",
              color: "#1D1D1B",
              lineHeight: 1.12,
              marginBottom: "1.5rem",
            }}
          >
            Let&apos;s Start a Conversation
          </h1>
          <p
            style={{
              fontFamily: SANS,
              fontSize: "clamp(0.9rem, 1.6vw, 1rem)",
              color: "rgba(29,29,27,0.6)",
              lineHeight: 1.75,
              maxWidth: "520px",
            }}
          >
            Get in touch to discuss your tax, accounting, or advisory needs.
            We respond within one business day.
          </p>
        </div>
      </PhotoSection>

      {/* ── 2. Contact info + form ── */}
      <section
        className="py-20 px-6 border-b border-border"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: contact info */}
          <div>
            <h2
              style={{
                fontFamily: DISPLAY,
                fontWeight: 700,
                fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)",
                color: "#1D1D1B",
                marginBottom: "2.5rem",
              }}
            >
              Get in Touch
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>

              <div>
                <p style={infoLabelStyle}>Email</p>
                <p style={infoValueStyle}>Use the form to the right</p>
              </div>

              <div>
                <p style={infoLabelStyle}>Chicago Office</p>
                <p style={infoValueStyle}>Chicago, IL</p>
              </div>

              <div>
                <p style={infoLabelStyle}>Glenview (Satellite)</p>
                <p style={infoValueStyle}>Glenview, IL</p>
              </div>

              <div>
                <p style={infoLabelStyle}>Hours</p>
                <p style={infoValueStyle}>Monday – Friday, 9:00 AM – 5:00 PM CT</p>
              </div>

            </div>
          </div>

          {/* Right: contact form */}
          <div>
            <h2
              style={{
                fontFamily: DISPLAY,
                fontWeight: 700,
                fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)",
                color: "#1D1D1B",
                marginBottom: "2.5rem",
              }}
            >
              Send a Message
            </h2>

            {/* TODO: configure Formspree success redirect in dashboard */}
            <form
              action="https://formspree.io/f/xwvyollb"
              method="POST"
              style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
            >
              <div>
                <label htmlFor="name" style={fieldLabelStyle}>Name *</label>
                <input id="name" type="text" name="name" required style={inputStyle} />
              </div>

              <div>
                <label htmlFor="email" style={fieldLabelStyle}>Email *</label>
                <input id="email" type="email" name="email" required style={inputStyle} />
              </div>

              <div>
                <label htmlFor="phone" style={fieldLabelStyle}>Phone</label>
                <input id="phone" type="tel" name="phone" style={inputStyle} />
              </div>

              <div>
                <label htmlFor="subject" style={fieldLabelStyle}>Subject *</label>
                <input id="subject" type="text" name="subject" required style={inputStyle} />
              </div>

              <div>
                <label htmlFor="message" style={fieldLabelStyle}>Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  style={{ ...inputStyle, resize: "vertical", minHeight: "120px" }}
                />
              </div>

              <button
                type="submit"
                style={{
                  width: "100%",
                  backgroundColor: "#00A7E1",
                  color: "#ffffff",
                  fontFamily: SANS,
                  fontWeight: 600,
                  fontSize: "1rem",
                  padding: "1rem",
                  border: "none",
                  borderRadius: "0.125rem",
                  cursor: "pointer",
                  letterSpacing: "0.01em",
                }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ── 3. Office location cards ── */}
      <section
        className="py-20 px-6 border-b border-border"
        style={{ backgroundColor: "#f6f6f4" }}
      >
        <div className="max-w-5xl mx-auto">
          <h2
            style={{
              fontFamily: DISPLAY,
              fontWeight: 700,
              fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)",
              color: "#1D1D1B",
              marginBottom: "2.5rem",
            }}
          >
            Our Offices
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Chicago */}
            <div
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #e5e5e3",
                borderRadius: "0.125rem",
                padding: "2rem",
              }}
            >
              <div
                style={{
                  width: "2.5rem",
                  height: "2.5rem",
                  backgroundColor: "#00A7E1",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.25rem",
                  fontSize: "1.1rem",
                }}
                aria-hidden="true"
              >
                📍
              </div>
              <p style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: "1.05rem", color: "#1D1D1B", marginBottom: "0.5rem" }}>
                Chicago
              </p>
              <p style={{ fontFamily: SANS, fontSize: "0.88rem", color: "rgba(29,29,27,0.6)", lineHeight: 1.6 }}>
                Chicago, IL
              </p>
            </div>

            {/* Glenview */}
            <div
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #e5e5e3",
                borderRadius: "0.125rem",
                padding: "2rem",
              }}
            >
              <div
                style={{
                  width: "2.5rem",
                  height: "2.5rem",
                  backgroundColor: "#00A7E1",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.25rem",
                  fontSize: "1.1rem",
                }}
                aria-hidden="true"
              >
                📍
              </div>
              <p style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: "1.05rem", color: "#1D1D1B", marginBottom: "0.5rem" }}>
                Glenview <span style={{ fontFamily: SANS, fontWeight: 400, fontSize: "0.78rem", color: "rgba(29,29,27,0.4)" }}>(Satellite)</span>
              </p>
              <p style={{ fontFamily: SANS, fontSize: "0.88rem", color: "rgba(29,29,27,0.6)", lineHeight: 1.6 }}>
                Glenview, IL
              </p>
            </div>

          </div>
        </div>
      </section>


    </main>
  );
}
