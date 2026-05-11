import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "DJE Advisors — Tax & Accounting | Chicago",
};

export default function Home() {
  return (
    <main className="pt-[72px]">
      {/* Hero */}
      <section className="bg-canvas py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className="font-sans text-[0.68rem] tracking-[0.22em] uppercase text-burgundy font-medium mb-5">
              Tax · Accounting · Advisory
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <h1
              className="font-display font-light text-charcoal leading-tight mb-8"
              style={{ fontSize: "clamp(2.6rem, 5.5vw, 4.4rem)" }}
            >
              For those who have built
              <br />
              something worth protecting.
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="font-sans text-[0.95rem] text-charcoal/55 max-w-lg leading-relaxed mb-10">
              DJE Advisors is an independent tax and accounting firm in Chicago.
              We work closely with families and businesses who need more than a
              tax return — they need a trusted advisor.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <a
              href="/contact"
              className="inline-block font-sans text-[0.82rem] font-medium bg-charcoal text-canvas px-7 py-3.5 rounded-sm hover:bg-charcoal-mid transition-colors duration-200"
            >
              Schedule a consultation →
            </a>
          </Reveal>
        </div>
      </section>

      {/* Intro strip */}
      <section className="bg-canvas-alt border-t border-border py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { label: "Tax Preparation", body: "Individual, trust, and business returns prepared with precision and filed on time, every year." },
            { label: "Accounting & Bookkeeping", body: "Clean books and clear financials so you always know where you stand." },
            { label: "Advisory", body: "Year-round guidance on the decisions that shape your financial future." },
          ].map((item, i) => (
            <Reveal key={item.label} delay={i * 0.08}>
              <div className="border-t-2 border-burgundy pt-6">
                <h2 className="font-display font-medium text-charcoal text-[1.1rem] mb-3">
                  {item.label}
                </h2>
                <p className="font-sans text-[0.88rem] text-charcoal/55 leading-relaxed">
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
