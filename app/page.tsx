import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { team } from "@/lib/team";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "DJE Advisors — Tax & Accounting | Chicago",
};

const services = [
  {
    num: "01",
    title: "Tax Preparation",
    desc: "Individual, trust, and business returns prepared with precision. We file on time, every year.",
  },
  {
    num: "02",
    title: "Accounting & Bookkeeping",
    desc: "Clean books and clear financials so you always know where you stand — no surprises at year-end.",
  },
  {
    num: "03",
    title: "Business Advisory",
    desc: "Year-round guidance on the financial decisions that shape your business, not just at tax time.",
  },
  {
    num: "04",
    title: "Estate & Trust",
    desc: "Coordinated planning for high-net-worth families: trusts, gifting strategies, and multi-generational structure.",
  },
];

const credentials = [
  "CPA-led practice",
  "Founded 2022",
  "Chicago & Glenview",
  "Individual & business",
  "Year-round advisory",
];

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

export default function Home() {
  return (
    <main>
      {/* ── 1. Hero ─────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex flex-col justify-end bg-navy overflow-hidden">
        {/* Photo placeholder — swap for <Image> when available */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(160deg, #0d1a2d 0%, #1a2942 55%, #243657 100%)",
          }}
          aria-hidden="true"
        >
          {/* Subtle grid texture */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
              backgroundSize: "72px 72px",
            }}
          />
          <p className="absolute bottom-5 right-6 font-sans text-[0.6rem] text-white/15 italic">
            Photo placeholder — Chicago skyline or office interior
          </p>
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 pt-[120px] pb-24 w-full">
          <Reveal>
            <p className="font-sans text-[0.68rem] tracking-[0.28em] uppercase text-gold font-medium mb-6">
              Tax · Accounting · Advisory
            </p>
          </Reveal>
          <Reveal delay={0.07}>
            <h1
              className="font-display font-light text-white leading-[1.08] mb-7"
              style={{ fontSize: "clamp(2.8rem, 6vw, 5.2rem)" }}
            >
              For those who&apos;ve built
              <br />
              something worth protecting.
            </h1>
          </Reveal>
          <Reveal delay={0.13}>
            <p className="font-sans text-[0.95rem] text-white/55 max-w-lg leading-relaxed mb-10">
              DJE Advisors is an independent CPA firm serving high-net-worth
              families and closely held businesses in Chicago and Glenview. We
              work like partners, not just preparers.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-block font-sans text-[0.82rem] font-medium bg-gold text-white px-7 py-3.5 rounded-sm hover:opacity-90 transition-opacity duration-150"
              >
                Schedule a consultation →
              </Link>
              <Link
                href="/services"
                className="inline-block font-sans text-[0.82rem] font-medium border border-white/25 text-white/80 px-7 py-3.5 rounded-sm hover:border-white/50 hover:text-white transition-colors duration-150"
              >
                Our services
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 2. Credentials strip ────────────────────────── */}
      <section className="bg-canvas border-b border-border py-5 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {credentials.map((c, i) => (
              <span key={c} className="flex items-center gap-5">
                <span className="font-sans text-[0.75rem] text-navy/50 tracking-wide">
                  {c}
                </span>
                {i < credentials.length - 1 && (
                  <span className="text-border select-none">·</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Services ─────────────────────────────────── */}
      <section className="bg-canvas py-28 px-6 border-b border-border">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className="font-sans text-[0.68rem] tracking-[0.22em] uppercase text-gold font-medium mb-5">
              What we do
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2
              className="font-display font-light text-navy leading-tight mb-16"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
            >
              Services built around your situation,
              <br className="hidden md:block" /> not a checklist.
            </h2>
          </Reveal>

          <div className="divide-y divide-border">
            {services.map((s, i) => (
              <Reveal key={s.num} delay={0.05 + i * 0.06}>
                <div className="py-8 grid grid-cols-[3rem_1fr] md:grid-cols-[3rem_1fr_2fr] gap-x-8 gap-y-2 items-baseline">
                  <span
                    className="font-display font-light text-gold/50 leading-none"
                    style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)" }}
                  >
                    {s.num}
                  </span>
                  <h3
                    className="font-display font-medium text-navy"
                    style={{ fontSize: "clamp(1rem, 1.8vw, 1.2rem)" }}
                  >
                    {s.title}
                  </h3>
                  <p className="col-start-2 md:col-start-3 font-sans text-[0.88rem] text-navy/50 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.35}>
            <div className="mt-10">
              <Link
                href="/services"
                className="font-sans text-[0.82rem] font-medium text-gold hover:text-navy transition-colors duration-150"
              >
                View all services →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 4. Why DJE (navy — reversed) ────────────────── */}
      <section className="bg-navy py-28 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <Reveal>
              <p className="font-sans text-[0.68rem] tracking-[0.22em] uppercase text-gold/80 font-medium mb-5">
                Our approach
              </p>
            </Reveal>
            <Reveal delay={0.06}>
              <h2
                className="font-display font-light text-white leading-tight mb-6"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
              >
                We act like a CFO
                <br />
                you can actually afford.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="font-sans text-[0.9rem] text-white/55 leading-relaxed mb-5">
                Most accounting firms see you once a year. We work with clients
                year-round — answering questions as they come up, flagging
                opportunities before deadlines, and building a tax strategy
                that compounds over time.
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="font-sans text-[0.9rem] text-white/55 leading-relaxed">
                Placeholder — add firm differentiators and client outcomes here.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.08}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { stat: "Year-round", label: "client access" },
                { stat: "CPA-led",   label: "on every engagement" },
                { stat: "2",         label: "Illinois locations" },
                { stat: "100%",      label: "placeholder stat" },
              ].map(({ stat, label }) => (
                <div
                  key={label}
                  className="bg-canvas/[0.04] border border-canvas/[0.08] rounded-sm p-6"
                >
                  <p
                    className="font-display font-light text-white mb-1"
                    style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.2rem)" }}
                  >
                    {stat}
                  </p>
                  <p className="font-sans text-[0.78rem] text-white/40 leading-snug">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 5. Team preview ─────────────────────────────── */}
      <section className="bg-canvas py-28 px-6 border-b border-border">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <Reveal>
                <p className="font-sans text-[0.68rem] tracking-[0.22em] uppercase text-gold font-medium mb-4">
                  The team
                </p>
              </Reveal>
              <Reveal delay={0.06}>
                <h2
                  className="font-display font-light text-navy"
                  style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
                >
                  People who know your name.
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.06}>
              <Link
                href="/team"
                className="hidden md:block font-sans text-[0.8rem] font-medium text-gold hover:text-navy transition-colors duration-150"
              >
                Meet the team →
              </Link>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Placeholder portrait cards — swap for real <Image> later */}
            {team.map((member, i) => (
              <Reveal key={member.slug} delay={i * 0.08}>
                <Link href={`/team/${member.slug}`} className="group block">
                  <div className="aspect-[3/4] bg-canvas-alt border border-border rounded-sm flex items-center justify-center mb-4 overflow-hidden group-hover:border-gold/40 transition-colors duration-200">
                    <span
                      className="font-display font-light text-navy/25 select-none"
                      style={{ fontSize: "2.4rem" }}
                    >
                      {member.name
                        .split(" ")
                        .map((w) => w[0])
                        .join("")}
                    </span>
                  </div>
                  <p className="font-display font-medium text-navy text-[1rem] mb-0.5 group-hover:text-gold transition-colors duration-150">
                    {member.name}
                  </p>
                  <p className="font-sans text-[0.78rem] text-navy/45">
                    {member.title}
                  </p>
                </Link>
              </Reveal>
            ))}

            {/* Extra placeholder slots until real team is added */}
            {Array.from({ length: Math.max(0, 4 - team.length) }).map((_, i) => (
              <Reveal key={`placeholder-${i}`} delay={(team.length + i) * 0.08}>
                <div className="group block opacity-40">
                  <div className="aspect-[3/4] bg-canvas-alt border border-dashed border-border rounded-sm flex items-center justify-center mb-4">
                    <span className="font-sans text-[0.7rem] text-navy/30 italic">
                      Photo placeholder
                    </span>
                  </div>
                  <p className="font-display font-medium text-navy/30 text-[1rem] mb-0.5">
                    Team Member
                  </p>
                  <p className="font-sans text-[0.78rem] text-navy/25">
                    Title placeholder
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Insights ─────────────────────────────────── */}
      <section className="bg-canvas-alt py-24 px-6 border-b border-border">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <Reveal>
                <p className="font-sans text-[0.68rem] tracking-[0.22em] uppercase text-gold font-medium mb-4">
                  Latest insights
                </p>
              </Reveal>
              <Reveal delay={0.06}>
                <h2
                  className="font-display font-light text-navy"
                  style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)" }}
                >
                  From the desk.
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.06}>
              <a
                href="https://blog.djeadvisors.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:block font-sans text-[0.8rem] font-medium text-gold hover:text-navy transition-colors duration-150"
              >
                All articles →
              </a>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <Reveal key={post.slug} delay={0.06 + i * 0.08}>
                <a
                  href={`https://blog.djeadvisors.com/${post.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-canvas border border-border rounded-sm p-7 hover:border-gold/40 transition-colors duration-200 h-full flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <span className="font-sans text-[0.62rem] tracking-[0.18em] uppercase text-gold font-medium">
                      {post.category}
                    </span>
                    <span className="text-border">·</span>
                    <span className="font-sans text-[0.72rem] text-navy/35">
                      {post.date}
                    </span>
                  </div>
                  <h3
                    className="font-display font-medium text-navy leading-snug mb-3 flex-1 group-hover:text-gold transition-colors duration-150"
                    style={{ fontSize: "1.05rem" }}
                  >
                    {post.title}
                  </h3>
                  <p className="font-sans text-[0.84rem] text-navy/50 leading-relaxed mb-5">
                    {post.excerpt}
                  </p>
                  <p className="font-sans text-[0.78rem] font-medium text-gold">
                    Read more →
                  </p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. Offices ──────────────────────────────────── */}
      <section className="bg-canvas py-24 px-6 border-b border-border">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className="font-sans text-[0.68rem] tracking-[0.22em] uppercase text-gold font-medium mb-5">
              Locations
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2
              className="font-display font-light text-navy mb-14"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)" }}
            >
              Two offices. One team.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offices.map((office, i) => (
              <Reveal key={office.city} delay={0.06 + i * 0.08}>
                <div className="border border-border rounded-sm p-8">
                  {/* Map placeholder */}
                  <div className="h-32 bg-canvas-alt rounded-sm mb-6 flex items-center justify-center border border-border">
                    <p className="font-sans text-[0.68rem] text-navy/25 italic">
                      Map — {office.city}
                    </p>
                  </div>
                  <p className="font-display font-medium text-navy text-[1.1rem] mb-3">
                    {office.city}
                  </p>
                  <div className="font-sans text-[0.85rem] text-navy/55 space-y-1">
                    <p>{office.address}</p>
                    <p>{office.cityState}</p>
                    <p className="pt-2 text-navy/40">{office.hours}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. CTA ──────────────────────────────────────── */}
      <section className="bg-navy py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <Reveal>
            <h2
              className="font-display font-light text-white leading-tight mb-5"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
            >
              Ready to get started?
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="font-sans text-[0.92rem] text-white/50 max-w-md mx-auto mb-10 leading-relaxed">
              First consultations are complimentary and take about 30 minutes.
              We&apos;ll tell you honestly whether we&apos;re the right fit.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href="/contact"
              className="inline-block font-sans text-[0.82rem] font-medium bg-gold text-white px-8 py-4 rounded-sm hover:opacity-90 transition-opacity duration-150"
            >
              Schedule a consultation →
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
