import type { Metadata } from "next";
import Link from "next/link";
import HeroWordmark from "@/components/HeroWordmark";
import HeroScrollEffect from "@/components/HeroScrollEffect";
import RevealSection from "@/components/RevealSection";

export const metadata: Metadata = {
  title: "DJE Advisors — Tax, Accounting & Advisory",
};

const DISPLAY =
  '"Century Gothic Pro", "Century Gothic", "Avenir Next", "Avenir", system-ui, sans-serif';

export default function Home() {
  return (
    <main>
      {/* ── 1. Hero ── */}
      <div className="hero-outer">
        <section
          className="relative hero-sticky flex flex-col items-center justify-center px-6"
          style={{ background: "#0a1929" }}
        >
          <HeroScrollEffect />

          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(135deg, rgba(10,25,41,0.72) 0%, rgba(17,42,68,0.68) 50%, rgba(15,37,64,0.72) 100%)",
              zIndex: 1,
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              position: "relative",
              zIndex: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
            }}
          >
            <HeroWordmark />

            <p
              className="hero-paragraph font-sans leading-relaxed text-center"
              style={{
                fontSize: "clamp(0.9rem, 1.6vw, 1rem)",
                color: "rgba(255,255,255,0.85)",
                maxWidth: "600px",
                marginTop: "2.5rem",
              }}
            >
              DJE Advisors is an independent tax and accounting firm serving
              business owners, individuals, and families. As an independent firm,
              we are solely an advocate for you, providing solutions that meet your
              needs in a continually changing environment.
            </p>

            <Link
              href="/contact"
              className="hero-cta-anim inline-block font-sans font-semibold bg-cyan text-white rounded-sm hover:opacity-90"
              style={{ fontSize: "1rem", letterSpacing: "0.01em", padding: "1.1rem 3rem", marginTop: "1.5rem" }}
            >
              Contact Us Today
            </Link>
          </div>
        </section>
      </div>{/* end hero-outer */}

      {/* ── 2. About Us — fades in from black via RevealSection ── */}
      <RevealSection
        className="px-6"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            textAlign: "center",
            padding: "4rem 0",
          }}
        >
          {/* Label */}
          <p
            className="font-sans font-medium"
            style={{
              fontSize: "0.68rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#00A7E1",
              marginBottom: "1.5rem",
            }}
          >
            About Us
          </p>

          {/* Headline */}
          <h2
            style={{
              fontFamily: DISPLAY,
              fontWeight: 700,
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              color: "#1D1D1B",
              lineHeight: 1.15,
              marginBottom: "2rem",
            }}
          >
            Decades of Experience,
            <br />
            Personalized Approach
          </h2>

          {/* Primary CTA */}
          <Link
            href="/about"
            className="inline-block font-sans font-semibold bg-cyan text-white rounded-sm hover:opacity-90 transition-opacity duration-150"
            style={{ fontSize: "1rem", letterSpacing: "0.01em", padding: "1rem 2.5rem" }}
          >
            Learn More
          </Link>

          {/* Body paragraph */}
          <p
            className="font-sans leading-relaxed"
            style={{
              fontSize: "clamp(0.9rem, 1.6vw, 1rem)",
              color: "rgba(29,29,27,0.6)",
              marginTop: "2.5rem",
              marginBottom: "2rem",
            }}
          >
            DJE Advisors is here to support you — whether you&apos;re a business
            owner, an individual, or managing your family&apos;s finances. As your
            advocate, we deliver personalized solutions to help you navigate an
            ever-changing financial world with care and expertise.
          </p>

          {/* Secondary CTA */}
          <Link
            href="/about"
            className="inline-block font-sans font-semibold bg-cyan text-white rounded-sm hover:opacity-90 transition-opacity duration-150"
            style={{ fontSize: "1rem", letterSpacing: "0.01em", padding: "1rem 2.5rem" }}
          >
            Learn More
          </Link>
        </div>
      </RevealSection>
    </main>
  );
}
