import type { Metadata } from "next";
import type { ReactNode, CSSProperties } from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — DJE Advisors",
  description:
    "Meet the DJE Advisors team — decades of experience, personalized approach.",
};

const DISPLAY =
  '"Century Gothic Pro", "Century Gothic", "Avenir Next", "Avenir", system-ui, sans-serif';
// Names: first name + last initial only (demo build — no full names)
const partners = [
  { initials: "DE", name: "David E.",   title: "Managing Partner" },
  { initials: "JC", name: "Juan C.",    title: "Partner" },
  { initials: "KF", name: "Kathy F.",   title: "Partner at Accounting solutionZ" },
  { initials: "AZ", name: "Andy Z.",    title: "President of Accounting solutionZ" },
];

const people = [
  { initials: "MA", name: "Margaret A.", title: "Real Estate Tax Director" },
  { initials: "DA", name: "Dan A.",       title: "Senior Manager" },
  { initials: "KD", name: "Karen D.",     title: "Office Manager" },
  { initials: "AD", name: "Amber D.",     title: "Senior Manager" },
  { initials: "HH", name: "Horatiu H.",   title: "Director" },
  { initials: "NL", name: "Nick L.",      title: "Senior Associate" },
  { initials: "MP", name: "Mihir P.",     title: "Senior Manager" },
  { initials: "DR", name: "David R.",     title: "Senior Associate" },
  { initials: "BT", name: "Bibhuti T.",   title: "Tax Associate" },
];

function TeamCard({
  initials,
  name,
  title,
}: {
  initials: string;
  name: string;
  title: string;
}) {
  return (
    <div
      style={{
        padding: "2rem 1.5rem",
        textAlign: "center",
        backgroundColor: "#ffffff",
        border: "1px solid #e5e5e3",
        borderRadius: "0.125rem",
      }}
    >
      <div
        style={{
          width: "72px",
          height: "72px",
          borderRadius: "50%",
          backgroundColor: "#00A7E1",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto 1.25rem",
        }}
      >
        <span
          style={{
            fontFamily: DISPLAY,
            fontWeight: 600,
            fontSize: "1.1rem",
            color: "#ffffff",
            letterSpacing: "0.04em",
          }}
        >
          {initials}
        </span>
      </div>
      <p
        style={{
          fontFamily: DISPLAY,
          fontWeight: 700,
          fontSize: "1rem",
          color: "#1D1D1B",
          marginBottom: "0.35rem",
          lineHeight: 1.3,
        }}
      >
        {name}
      </p>
      <p
        style={{
          fontFamily:
            '"Helvetica Neue", Helvetica, Arial, sans-serif',
          fontSize: "0.78rem",
          color: "rgba(29,29,27,0.45)",
          lineHeight: 1.4,
        }}
      >
        {title}
      </p>
    </div>
  );
}

// Reusable: a section with a full-cover background image + rgba overlay.
// Image lives in its own abs-positioned div so it never conflicts with
// the section's own Tailwind background-color class.
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
      {/* Background image layer */}
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
      {/* Colour overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: overlayColor,
          zIndex: 1,
          pointerEvents: "none",
        }}
      />
      {/* Content above both layers */}
      <div style={{ position: "relative", zIndex: 2 }}>{children}</div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <main className="pt-[72px]">

      {/* ── 1. Hero header ── */}
      <PhotoSection
        photoUrl="https://images.unsplash.com/photo-1494522855154-9297ac14b55f?auto=format&fit=crop&w=2400&q=80"
        overlayColor="rgba(255,255,255,0.85)"
        className="py-24 px-6 border-b border-border"
      >
        <div className="max-w-3xl mx-auto text-center">
          <p
            style={{
              fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
              fontWeight: 500,
              fontSize: "0.68rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#00A7E1",
              marginBottom: "1.5rem",
            }}
          >
            About Us
          </p>
          <h1
            style={{
              fontFamily: DISPLAY,
              fontWeight: 700,
              fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)",
              color: "#1D1D1B",
              lineHeight: 1.15,
              marginBottom: "1.75rem",
            }}
          >
            Decades of Experience,
            <br />
            Personalized Approach
          </h1>
          <p
            style={{
              fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
              fontSize: "clamp(0.9rem, 1.6vw, 1rem)",
              color: "rgba(29,29,27,0.6)",
              lineHeight: 1.7,
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            DJE Advisors is here to support you — whether you&apos;re a business
            owner, an individual, or managing your family&apos;s finances. As your
            advocate, we deliver personalized solutions to help you navigate an
            ever-changing financial world with care and expertise.
          </p>
        </div>
      </PhotoSection>

      {/* ── 2. True Professionals ── */}
      <PhotoSection
        photoUrl="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=2400&q=80"
        overlayColor="rgba(245,245,240,0.85)"
        className="py-20 px-6 border-b border-border"
      >
        <div className="max-w-3xl mx-auto text-center">
          <p
            style={{
              fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
              fontWeight: 500,
              fontSize: "0.68rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#00A7E1",
              marginBottom: "1.5rem",
            }}
          >
            True Professionals
          </p>
          <h2
            style={{
              fontFamily: DISPLAY,
              fontWeight: 700,
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              color: "#1D1D1B",
              lineHeight: 1.15,
              marginBottom: "1.5rem",
            }}
          >
            Meet the Team
          </h2>
          <p
            style={{
              fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
              fontSize: "clamp(0.9rem, 1.6vw, 1rem)",
              color: "rgba(29,29,27,0.6)",
              lineHeight: 1.7,
              maxWidth: "540px",
              margin: "0 auto",
            }}
          >
            We&apos;re a highly skilled, multidisciplinary team based in Chicago,
            dedicated to delivering exceptional service to both our clients and
            colleagues.
          </p>
        </div>
      </PhotoSection>

      {/* ── 3. Partners grid — no photo ── */}
      <section
        className="py-20 px-6 border-b border-border"
        style={{ backgroundColor: "#ffffff" }}
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
            Partners
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {partners.map((p) => (
              <TeamCard key={p.name} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Our People grid — no photo ── */}
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
            Our People
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {people.map((p) => (
              <TeamCard key={p.name} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Mid CTA ── */}
      <PhotoSection
        photoUrl="https://images.unsplash.com/photo-1444723121867-7a241cacace9?auto=format&fit=crop&w=2400&q=80"
        overlayColor="rgba(29,29,27,0.78)"
        className="py-20 px-6"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2
            style={{
              fontFamily: DISPLAY,
              fontWeight: 700,
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              color: "#ffffff",
              lineHeight: 1.2,
              marginBottom: "1rem",
            }}
          >
            Need reliable financial guidance?
          </h2>
          <p
            style={{
              fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
              fontSize: "0.95rem",
              color: "rgba(255,255,255,0.5)",
              marginBottom: "2rem",
            }}
          >
            Our team is here to support your next steps.
          </p>
          <Link
            href="/services"
            style={{
              display: "inline-block",
              backgroundColor: "#00A7E1",
              color: "#ffffff",
              fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
              fontWeight: 600,
              fontSize: "1rem",
              padding: "1rem 2.5rem",
              borderRadius: "0.125rem",
              textDecoration: "none",
            }}
          >
            See Our Services
          </Link>
        </div>
      </PhotoSection>

      {/* ── 6. Bottom CTA ── */}
      <PhotoSection
        photoUrl="https://images.unsplash.com/photo-1606856110002-d0991ce78250?auto=format&fit=crop&w=2400&q=80"
        overlayColor="rgba(255,255,255,0.85)"
        className="py-20 px-6"
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2
            style={{
              fontFamily: DISPLAY,
              fontWeight: 700,
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              color: "#1D1D1B",
              lineHeight: 1.2,
              marginBottom: "1rem",
            }}
          >
            Get Expert Tax and Accounting Support&nbsp;— All Year Long
          </h2>
          <p
            style={{
              fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
              fontSize: "0.95rem",
              color: "rgba(29,29,27,0.5)",
              marginBottom: "2rem",
            }}
          >
            Personalized services for individuals, families, and small businesses.
          </p>
          <Link
            href="/contact"
            style={{
              display: "inline-block",
              backgroundColor: "#00A7E1",
              color: "#ffffff",
              fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
              fontWeight: 600,
              fontSize: "1rem",
              padding: "1rem 2.5rem",
              borderRadius: "0.125rem",
              textDecoration: "none",
            }}
          >
            Contact Us Today
          </Link>
        </div>
      </PhotoSection>

    </main>
  );
}
