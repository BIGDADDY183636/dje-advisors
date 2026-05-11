import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Schedule a consultation with DJE Advisors. First meetings are complimentary.",
};

export default function ContactPage() {
  return (
    <main className="pt-[72px]">
      {/* Page header */}
      <section className="bg-canvas py-24 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <Reveal>
              <p className="font-sans text-[0.68rem] tracking-[0.22em] uppercase text-burgundy font-medium mb-5">
                Contact
              </p>
            </Reveal>
            <Reveal delay={0.06}>
              <h1
                className="font-display font-light text-charcoal leading-tight mb-6"
                style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)" }}
              >
                Let&apos;s talk.
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="font-sans text-[0.95rem] text-charcoal/55 max-w-sm leading-relaxed mb-8">
                First consultations are complimentary and take about 30
                minutes. We&apos;ll tell you honestly whether we&apos;re the
                right fit.
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <div className="space-y-3 font-sans text-[0.88rem] text-charcoal/55">
                <p>Chicago, IL</p>
                <a
                  href="mailto:hello@djeadvisors.com"
                  className="block text-burgundy hover:text-charcoal transition-colors duration-150"
                >
                  hello@djeadvisors.com
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right: placeholder form */}
          <Reveal delay={0.1}>
            <div className="bg-canvas-alt border border-border rounded-sm p-8">
              <p className="font-sans text-[0.82rem] text-charcoal/40 italic">
                Contact form coming soon — email us directly at{" "}
                <a
                  href="mailto:hello@djeadvisors.com"
                  className="text-burgundy not-italic hover:underline"
                >
                  hello@djeadvisors.com
                </a>
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
