import type { Metadata } from "next";
import Link from "next/link";
import HeroWordmark from "@/components/HeroWordmark";
import HeroScrollEffect from "@/components/HeroScrollEffect";
import RevealSection from "@/components/RevealSection";

export const metadata: Metadata = {
  title: { absolute: "DJE Advisors — Tax, Accounting & Advisory" },
};

const DISPLAY =
  '"Century Gothic Pro", "Century Gothic", "Avenir Next", "Avenir", system-ui, sans-serif';
const SANS = '"Helvetica Neue", Helvetica, Arial, sans-serif';

const testimonials = [
  {
    quote:
      "David’s professionalism and domain expertise have been invaluable. I rely on him for all of my business and personal real estate tax needs.",
    name: "E.P.",
    role: "Real Estate Executive",
  },
  {
    quote:
      "After partnering with David for over a decade I can say with extreme confidence that our business wouldn’t be where it is without his counsel. Whether we’re brainstorming strategic tax planning ideas, obtaining general business and accounting guidance, or filing our annual returns, David and his team have always been one of the critical pillars that has helped us to continually grow our market share year over year.",
    name: "S.M.",
    role: "Business Founder",
  },
  {
    quote:
      "We cannot say enough wonderful things about DJE Advisors! David and Andy advocate for us in all areas of business, and have ensured personalized attention to our needs. Their hands-on approach feels like an extension of our team, and the value they provide is pronounced. No getting lost in the shuffle of a ‘big’ firm with DJE!",
    name: "J.K. & K.S.",
    role: "Marketing Partners",
  },
];

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

      {/* ── 3. Testimonials ── */}
      <section
        style={{
          background: "linear-gradient(135deg, #00A7E1 0%, #ffffff 100%)",
          padding: "6rem 1.5rem",
        }}
      >
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          {/* Label */}
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
            What Clients Say
          </p>

          {/* Headline */}
          <h2
            style={{
              fontFamily: DISPLAY,
              fontWeight: 700,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "#1D1D1B",
              lineHeight: 1.15,
              marginBottom: "3.5rem",
              maxWidth: "22ch",
            }}
          >
            Trusted by Industry Leaders &amp; Professionals
          </h2>

          {/* Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 20rem), 1fr))",
              gap: "1.75rem",
            }}
          >
            {testimonials.map(({ quote, name, role }) => (
              <div
                key={name}
                style={{
                  backgroundColor: "#1D1D1B",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "0.125rem",
                  padding: "2.25rem 2rem",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Opening quote mark */}
                <div
                  style={{
                    fontFamily: DISPLAY,
                    fontSize: "3.5rem",
                    color: "#00A7E1",
                    lineHeight: 1,
                    marginBottom: "1rem",
                    userSelect: "none",
                  }}
                  aria-hidden="true"
                >
                  &ldquo;
                </div>

                {/* Quote text */}
                <p
                  style={{
                    fontFamily: SANS,
                    fontSize: "0.9rem",
                    color: "rgba(255,255,255,0.95)",
                    lineHeight: 1.8,
                    flex: 1,
                    marginBottom: "2rem",
                  }}
                >
                  {quote}
                </p>

                {/* Cyan accent line */}
                <div
                  style={{
                    width: "2rem",
                    height: "2px",
                    backgroundColor: "#00A7E1",
                    marginBottom: "0.875rem",
                  }}
                />

                {/* Name */}
                <p
                  style={{
                    fontFamily: DISPLAY,
                    fontWeight: 700,
                    fontSize: "0.72rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#ffffff",
                    marginBottom: "0.25rem",
                  }}
                >
                  {name}
                </p>

                {/* Role */}
                <p
                  style={{
                    fontFamily: SANS,
                    fontSize: "0.75rem",
                    color: "rgba(255,255,255,0.6)",
                    lineHeight: 1.4,
                  }}
                >
                  {role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
