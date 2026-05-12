import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — DJE Advisors",
  description:
    "Meet the DJE Advisors team — decades of experience, personalized approach.",
};

const DISPLAY =
  '"Century Gothic Pro", "Century Gothic", "Avenir Next", "Avenir", system-ui, sans-serif';

const partners = [
  { initials: "DE", name: "David Elyashar",  title: "Managing Partner" },
  { initials: "JC", name: "Juan Castillo",   title: "Partner" },
  { initials: "KF", name: "Kathy Famulka",   title: "Partner at Accounting solutionZ" },
  { initials: "AZ", name: "Andy Zarycki",    title: "President of Accounting solutionZ" },
];

const people = [
  { initials: "MA", name: "Margaret Ascher",  title: "Real Estate Tax Director" },
  { initials: "DA", name: "Dan Austin",        title: "Senior Manager" },
  { initials: "KD", name: "Karen Delatorre",   title: "Office Manager" },
  { initials: "AD", name: "Amber DeGroot",     title: "Senior Manager" },
  { initials: "HH", name: "Horatiu Hosu",      title: "Director" },
  { initials: "NL", name: "Nick Lassak",       title: "Senior Associate" },
  { initials: "MP", name: "Mihir Patel",        title: "Senior Manager" },
  { initials: "DR", name: "David Rodriguez",   title: "Senior Associate" },
  { initials: "BT", name: "Bibhuti Thapa",     title: "Tax Associate" },
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
      className="bg-canvas border border-border rounded-sm"
      style={{ padding: "2rem 1.5rem", textAlign: "center" }}
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
          flexShrink: 0,
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
        className="font-sans"
        style={{
          fontSize: "0.78rem",
          color: "rgba(29,29,27,0.45)",
          marginBottom: "1rem",
          lineHeight: 1.4,
        }}
      >
        {title}
      </p>
      <span
        className="font-sans font-medium"
        style={{ fontSize: "0.78rem", color: "#00A7E1" }}
      >
        Read Bio →
      </span>
    </div>
  );
}

export default function AboutPage() {
  return (
    <main className="pt-[72px]">

      {/* ── 1. Hero header — Chicago skyline (Pedro Lastra) ── */}
      <section
        className="bg-canvas py-24 px-6 border-b border-border"
        style={{
          position: "relative",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1494522855154-9297ac14b55f?w=2400&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(255,255,255,0.85)",
            pointerEvents: "none",
          }}
        />
        <div
          className="max-w-3xl mx-auto text-center"
          style={{ position: "relative", zIndex: 1 }}
        >
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
            className="font-sans leading-relaxed"
            style={{
              fontSize: "clamp(0.9rem, 1.6vw, 1rem)",
              color: "rgba(29,29,27,0.6)",
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
      </section>

      {/* ── 2. True Professionals — Chicago skyline (Sawyer Bengtson) ── */}
      <section
        className="bg-canvas-alt py-20 px-6 border-b border-border"
        style={{
          position: "relative",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=2400&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(245,245,240,0.85)",
            pointerEvents: "none",
          }}
        />
        <div
          className="max-w-3xl mx-auto text-center"
          style={{ position: "relative", zIndex: 1 }}
        >
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
            className="font-sans leading-relaxed"
            style={{
              fontSize: "clamp(0.9rem, 1.6vw, 1rem)",
              color: "rgba(29,29,27,0.6)",
              maxWidth: "540px",
              margin: "0 auto",
            }}
          >
            We&apos;re a highly skilled, multidisciplinary team based in Chicago,
            dedicated to delivering exceptional service to both our clients and
            colleagues.
          </p>
        </div>
      </section>

      {/* ── 3. Partners grid — NO photo, clean white ── */}
      <section className="bg-canvas py-20 px-6 border-b border-border">
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

      {/* ── 4. Our People grid — NO photo, clean cream ── */}
      <section className="bg-canvas-alt py-20 px-6 border-b border-border">
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

      {/* ── 5. Mid CTA — Chicago river/architecture (Nastuh) ── */}
      <section
        className="bg-ink py-20 px-6 border-b border-white/10"
        style={{
          position: "relative",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1444723121867-7a241cacace9?w=2400&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(29,29,27,0.75)",
            pointerEvents: "none",
          }}
        />
        <div
          className="max-w-2xl mx-auto text-center"
          style={{ position: "relative", zIndex: 1 }}
        >
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
            className="font-sans"
            style={{
              fontSize: "0.95rem",
              color: "rgba(255,255,255,0.5)",
              marginBottom: "2rem",
            }}
          >
            Our team is here to support your next steps.
          </p>
          <Link
            href="/services"
            className="inline-block font-sans font-semibold bg-cyan text-white rounded-sm hover:opacity-90 transition-opacity duration-150"
            style={{ fontSize: "1rem", padding: "1rem 2.5rem" }}
          >
            See Our Services
          </Link>
        </div>
      </section>

      {/* ── 6. Bottom CTA — Chicago architecture (Sawyer) ── */}
      <section
        className="bg-canvas py-20 px-6"
        style={{
          position: "relative",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1606856110002-d0991ce78250?w=2400&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(255,255,255,0.85)",
            pointerEvents: "none",
          }}
        />
        <div
          className="max-w-2xl mx-auto text-center"
          style={{ position: "relative", zIndex: 1 }}
        >
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
            className="font-sans"
            style={{
              fontSize: "0.95rem",
              color: "rgba(29,29,27,0.5)",
              marginBottom: "2rem",
            }}
          >
            Personalized services for individuals, families, and small businesses.
          </p>
          <Link
            href="/contact"
            className="inline-block font-sans font-semibold bg-cyan text-white rounded-sm hover:opacity-90 transition-opacity duration-150"
            style={{ fontSize: "1rem", padding: "1rem 2.5rem" }}
          >
            Contact Us Today
          </Link>
        </div>
      </section>

    </main>
  );
}
