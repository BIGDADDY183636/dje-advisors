import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Services",
  description: "Tax, accounting, and advisory services from DJE Advisors.",
};

const services = [
  {
    num: "01",
    title: "Tax Preparation",
    description:
      "Individual, trust, and business returns prepared with precision and filed on time, every year. We handle the complexity so you don't have to.",
  },
  {
    num: "02",
    title: "Accounting & Bookkeeping",
    description:
      "Clean books and clear financials. We set up your accounting system correctly, maintain it monthly, and give you a clear picture of where you stand.",
  },
  {
    num: "03",
    title: "Business Advisory",
    description:
      "Year-round guidance on the decisions that shape your business and personal finances. Not just at tax time — whenever a decision comes up.",
  },
  {
    num: "04",
    title: "Estate & Trust",
    description:
      "Coordinated planning for families with complex situations: trusts, multi-generational structure, gifting strategies, and charitable vehicles.",
  },
];

export default function ServicesPage() {
  return (
    <main className="pt-[72px]">
      {/* Header */}
      <section className="bg-canvas py-24 px-6 border-b border-border">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className="font-sans text-[0.68rem] tracking-[0.22em] uppercase text-gold font-medium mb-5">
              Services
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <h1
              className="font-display font-light text-navy leading-tight"
              style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)" }}
            >
              What we do.
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Service list */}
      <section className="bg-canvas py-12 px-6">
        <div className="max-w-5xl mx-auto divide-y divide-border">
          {services.map((s, i) => (
            <Reveal key={s.num} delay={0.04 + i * 0.06}>
              <div className="py-12 grid grid-cols-[3.5rem_1fr] md:grid-cols-[3.5rem_1fr_2fr] gap-x-8 gap-y-3 items-baseline">
                <span
                  className="font-display font-light text-gold/50 leading-none"
                  style={{ fontSize: "1.8rem" }}
                >
                  {s.num}
                </span>
                <h2
                  className="font-display font-medium text-navy"
                  style={{ fontSize: "clamp(1.1rem, 2vw, 1.35rem)" }}
                >
                  {s.title}
                </h2>
                <p className="col-start-2 md:col-start-3 font-sans text-[0.9rem] text-navy/55 leading-relaxed">
                  {s.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
