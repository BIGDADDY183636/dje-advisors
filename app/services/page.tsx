import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Services",
  description: "Tax, accounting, and advisory services from DJE Advisors.",
};

const services = [
  {
    title: "Tax Preparation",
    description: "Placeholder — content coming soon.",
  },
  {
    title: "Bookkeeping",
    description: "Placeholder — content coming soon.",
  },
  {
    title: "Business Advisory",
    description: "Placeholder — content coming soon.",
  },
  {
    title: "Estate & Trust",
    description: "Placeholder — content coming soon.",
  },
];

export default function ServicesPage() {
  return (
    <main className="pt-[72px]">
      <section className="bg-canvas py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className="font-sans text-[0.68rem] tracking-[0.22em] uppercase text-burgundy font-medium mb-5">
              Services
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <h1
              className="font-display font-light text-charcoal leading-tight mb-16"
              style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)" }}
            >
              What we do.
            </h1>
          </Reveal>

          <div className="divide-y divide-border">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={0.06 + i * 0.06}>
                <div className="py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                  <h2 className="font-display font-medium text-charcoal text-[1.2rem]">
                    {s.title}
                  </h2>
                  <p className="font-sans text-[0.9rem] text-charcoal/55 leading-relaxed md:col-span-2">
                    {s.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
