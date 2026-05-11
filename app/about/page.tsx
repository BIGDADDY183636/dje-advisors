import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About",
  description: "About DJE Advisors — who we are and how we work.",
};

export default function AboutPage() {
  return (
    <main className="pt-[72px]">
      <section className="bg-canvas py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className="font-sans text-[0.68rem] tracking-[0.22em] uppercase text-burgundy font-medium mb-5">
              About
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <h1
              className="font-display font-light text-charcoal leading-tight mb-8"
              style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)" }}
            >
              A firm built on relationships,
              <br />
              not transactions.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-sans text-[0.95rem] text-charcoal/55 max-w-2xl leading-relaxed">
              Placeholder — content coming soon.
            </p>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
