import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About",
  description: "About DJE Advisors — who we are and how we work.",
};

export default function AboutPage() {
  return (
    <main className="pt-[72px]">
      <section className="bg-canvas py-24 px-6 border-b border-border">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className="font-sans text-[0.68rem] tracking-[0.22em] uppercase text-cyan font-medium mb-5">
              About
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <h1
              className="font-display text-ink leading-tight"
              style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)", fontWeight: 400 }}
            >
              A firm built on relationships,
              <br />
              not transactions.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="bg-canvas py-20 px-6">
        <div className="max-w-3xl mx-auto space-y-5">
          <Reveal>
            <p className="font-sans text-[0.95rem] text-ink/60 leading-[1.85]">
              Placeholder — firm story and background content coming soon.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="font-sans text-[0.95rem] text-ink/60 leading-[1.85]">
              Placeholder — add founding story, values, and client philosophy here.
            </p>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="font-sans text-[0.95rem] text-ink/60 leading-[1.85]">
              Placeholder — third paragraph.
            </p>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
