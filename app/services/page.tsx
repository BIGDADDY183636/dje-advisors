import type { Metadata } from "next";
import type { ReactNode, CSSProperties } from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services — DJE Advisors",
  description:
    "Tax compliance, advisory, and accounting services for business owners, individuals, and families.",
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

const taxServices = [
  "Individual income tax preparation",
  "Business tax returns (S-Corp, C-Corp, Partnership, LLC)",
  "Trust and estate tax planning and compliance",
  "Multi-state taxation",
  "IRS representation",
  "Strategic tax planning",
  "Real estate tax services",
  "Equity compensation planning",
];

const accountingServices = [
  "Monthly bookkeeping",
  "Financial statement preparation",
  "Payroll services",
  "Accounts payable and receivable",
  "Cash flow management",
  "Business advisory and reporting",
];

const served = [
  {
    title: "Business Owners",
    desc: "Closely-held businesses across industries looking for proactive tax strategy and reliable financial operations.",
  },
  {
    title: "Executives",
    desc: "Tax planning and compliance for executives navigating equity compensation, complex returns, and wealth management.",
  },
  {
    title: "Families",
    desc: "Multi-generational wealth planning, trust and estate tax services, and personalized advisory.",
  },
  {
    title: "Investment Firms",
    desc: "Private equity sponsors, family offices, and investment professionals requiring sophisticated tax and structuring expertise.",
  },
];

function ServiceList({ items }: { items: string[] }) {
  return (
    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
      {items.map((item) => (
        <li
          key={item}
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: "0.75rem",
            fontFamily: SANS,
            fontSize: "0.9rem",
            color: "rgba(29,29,27,0.72)",
            lineHeight: 1.6,
            padding: "0.5rem 0",
            borderBottom: "1px solid #e5e5e3",
          }}
        >
          <span style={{ color: "#00A7E1", fontWeight: 700, flexShrink: 0 }}>
            —
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function ServicesPage() {
  return (
    <main className="pt-[72px]">

      {/* ── 1. Hero header ── */}
      <PhotoSection
        photoUrl="https://images.unsplash.com/photo-1494522855154-9297ac14b55f?w=2400&q=80&auto=format&fit=crop"
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
            Services
          </p>
          <h1
            style={{
              fontFamily: DISPLAY,
              fontWeight: 700,
              fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)",
              color: "#1D1D1B",
              lineHeight: 1.12,
              marginBottom: "1.75rem",
            }}
          >
            Tax &amp; Accounting Built Around You
          </h1>
          <p
            style={{
              fontFamily: SANS,
              fontSize: "clamp(0.9rem, 1.6vw, 1rem)",
              color: "rgba(29,29,27,0.6)",
              lineHeight: 1.75,
              maxWidth: "580px",
            }}
          >
            DJE Advisors provides personalized tax compliance, advisory, and
            accounting services to business owners, individuals, families, and
            organizations. We work as your advocate — delivering solutions
            tailored to your specific needs.
          </p>
        </div>
      </PhotoSection>

      {/* ── 2. Tax Compliance & Advisory ── */}
      <section
        className="py-20 px-6 border-b border-border"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <p
              style={{
                fontFamily: DISPLAY,
                fontWeight: 700,
                fontSize: "clamp(1.4rem, 3vw, 2rem)",
                color: "#00A7E1",
                letterSpacing: "0.04em",
                marginBottom: "1rem",
              }}
            >
              01
            </p>
            <h2
              style={{
                fontFamily: DISPLAY,
                fontWeight: 700,
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                color: "#1D1D1B",
                lineHeight: 1.15,
                marginBottom: "1.25rem",
              }}
            >
              Tax Compliance &amp; Advisory
            </h2>
            <p
              style={{
                fontFamily: SANS,
                fontSize: "0.95rem",
                color: "rgba(29,29,27,0.6)",
                lineHeight: 1.75,
              }}
            >
              Year-round tax planning and compliance for business owners,
              high-net-worth families, and individuals. We handle the details
              so you can focus on what you do best.
            </p>
          </div>
          <div>
            <ServiceList items={taxServices} />
          </div>
        </div>
      </section>

      {/* ── 3. Accounting Services ── */}
      <section
        className="py-20 px-6 border-b border-border"
        style={{ backgroundColor: "#f6f6f4" }}
      >
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <p
              style={{
                fontFamily: DISPLAY,
                fontWeight: 700,
                fontSize: "clamp(1.4rem, 3vw, 2rem)",
                color: "#00A7E1",
                letterSpacing: "0.04em",
                marginBottom: "1rem",
              }}
            >
              02
            </p>
            <h2
              style={{
                fontFamily: DISPLAY,
                fontWeight: 700,
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                color: "#1D1D1B",
                lineHeight: 1.15,
                marginBottom: "1.25rem",
              }}
            >
              Accounting Services
            </h2>
            <p
              style={{
                fontFamily: SANS,
                fontSize: "0.95rem",
                color: "rgba(29,29,27,0.6)",
                lineHeight: 1.75,
              }}
            >
              Through our partner firm Accounting solutionZ, we offer
              day-to-day bookkeeping and financial reporting services that keep
              your business running smoothly.
            </p>
          </div>
          <div>
            <ServiceList items={accountingServices} />
          </div>
        </div>
      </section>

      {/* ── 4. Who We Serve ── */}
      <section
        className="py-20 px-6 border-b border-border"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className="max-w-5xl mx-auto">
          <h2
            style={{
              fontFamily: DISPLAY,
              fontWeight: 700,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "#1D1D1B",
              lineHeight: 1.15,
              marginBottom: "3rem",
            }}
          >
            Who We Serve
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {served.map(({ title, desc }) => (
              <div
                key={title}
                style={{
                  backgroundColor: "#f6f6f4",
                  border: "1px solid #e5e5e3",
                  borderRadius: "0.125rem",
                  padding: "1.75rem 1.5rem",
                }}
              >
                <div
                  style={{
                    width: "2rem",
                    height: "2px",
                    backgroundColor: "#00A7E1",
                    marginBottom: "1.25rem",
                  }}
                />
                <p
                  style={{
                    fontFamily: DISPLAY,
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: "#1D1D1B",
                    marginBottom: "0.75rem",
                    lineHeight: 1.3,
                  }}
                >
                  {title}
                </p>
                <p
                  style={{
                    fontFamily: SANS,
                    fontSize: "0.82rem",
                    color: "rgba(29,29,27,0.55)",
                    lineHeight: 1.65,
                  }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. CTA with Chicago photo ── */}
      <PhotoSection
        photoUrl="https://images.unsplash.com/photo-1444723121867-7a241cacace9?w=2400&q=80&auto=format&fit=crop"
        overlayColor="rgba(29,29,27,0.75)"
        className="py-24 px-6"
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2
            style={{
              fontFamily: DISPLAY,
              fontWeight: 700,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "#ffffff",
              lineHeight: 1.2,
              marginBottom: "1rem",
            }}
          >
            Ready to Work Together?
          </h2>
          <p
            style={{
              fontFamily: SANS,
              fontSize: "0.95rem",
              color: "rgba(255,255,255,0.55)",
              lineHeight: 1.7,
              marginBottom: "2.25rem",
            }}
          >
            Let&apos;s talk about how we can support your business and personal
            financial goals.
          </p>
          <Link
            href="/contact"
            style={{
              display: "inline-block",
              backgroundColor: "#00A7E1",
              color: "#ffffff",
              fontFamily: SANS,
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
