import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Schedule a consultation with DJE Advisors. First meetings are complimentary.",
};

const offices = [
  {
    city: "Chicago",
    address: "123 W Monroe St, Suite 800",
    cityState: "Chicago, IL 60603",
    hours: "Mon – Fri, 8am – 6pm",
  },
  {
    city: "Glenview",
    address: "1800 Waukegan Rd, Suite 200",
    cityState: "Glenview, IL 60025",
    hours: "Mon – Fri, 9am – 5pm",
  },
];

export default function ContactPage() {
  return (
    <main className="pt-[72px]">
      {/* Header — ink dark */}
      <section className="bg-ink py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className="font-sans text-[0.68rem] tracking-[0.22em] uppercase text-cyan/80 font-medium mb-5">
              Contact
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <h1
              className="font-display text-white leading-tight mb-5"
              style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)", fontWeight: 400 }}
            >
              Let&apos;s talk.
            </h1>
          </Reveal>
          <Reveal delay={0.10}>
            <p className="font-sans text-[0.95rem] text-white/50 max-w-lg leading-relaxed">
              First consultations are complimentary and take about 30 minutes.
              We&apos;ll tell you honestly whether we&apos;re the right fit —
              and if we&apos;re not, we&apos;ll point you in the right direction.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Form + contact info */}
      <section className="bg-canvas py-20 px-6 border-b border-border">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <Reveal>
              <h2
                className="font-display text-ink text-[1.3rem] mb-6"
                style={{ fontWeight: 500 }}
              >
                Get in touch
              </h2>
            </Reveal>
            <Reveal delay={0.06}>
              <div className="space-y-4 font-sans text-[0.88rem] text-ink/55">
                <div>
                  <p className="font-sans text-[0.62rem] tracking-[0.2em] uppercase text-cyan font-medium mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:hello@djeadvisors.com"
                    className="text-ink hover:text-cyan transition-colors duration-150"
                  >
                    hello@djeadvisors.com
                  </a>
                </div>
                <div>
                  <p className="font-sans text-[0.62rem] tracking-[0.2em] uppercase text-cyan font-medium mb-1">
                    Locations
                  </p>
                  <p>Chicago &amp; Glenview, IL</p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.08}>
            <div className="bg-canvas-alt border border-border rounded-sm p-8">
              <p className="font-sans text-[0.88rem] text-ink/50 italic">
                Contact form coming soon — email us directly at{" "}
                <a
                  href="mailto:hello@djeadvisors.com"
                  className="text-cyan not-italic hover:underline"
                >
                  hello@djeadvisors.com
                </a>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Offices */}
      <section className="bg-canvas py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className="font-sans text-[0.68rem] tracking-[0.22em] uppercase text-cyan font-medium mb-5">
              Our offices
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {offices.map((office, i) => (
              <Reveal key={office.city} delay={0.06 + i * 0.08}>
                <div className="border border-border rounded-sm p-8">
                  <div className="h-28 bg-canvas-alt rounded-sm mb-6 flex items-center justify-center border border-border">
                    <p className="font-sans text-[0.68rem] text-ink/25 italic">
                      Map — {office.city}
                    </p>
                  </div>
                  <p
                    className="font-display text-ink text-[1.05rem] mb-3"
                    style={{ fontWeight: 500 }}
                  >
                    {office.city}
                  </p>
                  <div className="font-sans text-[0.85rem] text-ink/55 space-y-1">
                    <p>{office.address}</p>
                    <p>{office.cityState}</p>
                    <p className="pt-2 text-ink/40">{office.hours}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
