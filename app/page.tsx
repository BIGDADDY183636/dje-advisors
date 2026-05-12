import type { Metadata } from "next";
import Link from "next/link";
import HeroWordmark from "@/components/HeroWordmark";
import Reveal from "@/components/Reveal";
import { team } from "@/lib/team";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "DJE Advisors — Tax, Accounting & Advisory",
};

const services = [
  {
    num: "01",
    title: "Tax Preparation",
    desc: "Individual, trust, and business returns prepared with precision. Filed on time, every year.",
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
    desc: "Coordinated planning for families: trusts, gifting strategies, and multi-generational structure.",
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
      {/* ── 1. Hero ──────────────────────────────────────────
          Gradient background: cyan-tinted → white.
          Wordmark animates in, glows, then fades out.
          Paragraph crossfades in during wordmark exit.     */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0a1929 0%, #112a44 50%, #0f2540 100%)",
        }}
      >
        <HeroWordmark />

        <p
          className="hero-paragraph font-sans leading-relaxed text-center"
          style={{
            fontSize: "clamp(0.9rem, 1.6vw, 1rem)",
            color: "rgba(255,255,255,0.85)",
            maxWidth: "600px",
            marginTop: "2.5rem",
          }}
        >
          DJE Advisors is an independent tax and accounting firm serving
          business owners, individuals, and families. As an independent firm,
          we are solely an advocate for you, providing solutions that meet your
          needs in a continually changing environment.
        </p>

        <Link
          href="/contact"
          className="hero-cta-anim inline-block font-sans font-semibold bg-cyan text-white rounded-sm hover:opacity-90"
          style={{ fontSize: "1rem", letterSpacing: "0.01em", padding: "1.1rem 3rem", marginTop: "1.5rem" }}
        >
          Contact Us Today
        </Link>
      </section>

      {/* ── 2. Credentials strip ────────────────────────── */}
      <section className="bg-canvas border-y border-border py-5 px-6">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center items-center gap-x-5 gap-y-2">
          {credentials.map((c, i) => (
            <span key={c} className="flex items-center gap-5">
              <span className="font-sans text-[0.75rem] text-ink/45 tracking-wide">
                {c}
              </span>
              {i < credentials.length - 1 && (
                <span className="text-border select-none">·</span>
              )}
            </span>
          ))}
        </div>
      </section>

      {/* ── 3. Services ─────────────────────────────────── */}
      <section className="bg-canvas py-28 px-6 border-b border-border">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <Reveal>
              <p className="font-sans text-[0.68rem] tracking-[0.22em] uppercase text-cyan font-medium mb-5">
                What we do
              </p>
            </Reveal>
            <Reveal delay={0.06}>
              <h2
                className="font-display text-ink leading-tight mx-auto"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.2rem)",
                  maxWidth: "28ch",
                  fontWeight: 400,
                }}
              >
                Services built around your situation, not a checklist.
              </h2>
            </Reveal>
          </div>

          <div className="divide-y divide-border">
            {services.map((s, i) => (
              <Reveal key={s.num} delay={0.05 + i * 0.06}>
                <div className="py-8 grid grid-cols-[3rem_1fr] md:grid-cols-[3rem_1fr_2fr] gap-x-8 gap-y-2 items-baseline">
                  <span
                    className="font-display text-cyan/50 leading-none"
                    style={{ fontSize: "1.8rem", fontWeight: 400 }}
                  >
                    {s.num}
                  </span>
                  <h3
                    className="font-display text-ink"
                    style={{ fontSize: "clamp(1rem, 1.8vw, 1.2rem)", fontWeight: 500 }}
                  >
                    {s.title}
                  </h3>
                  <p className="col-start-2 md:col-start-3 font-sans text-[0.88rem] text-ink/50 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.35}>
            <div className="mt-10 text-center">
              <Link
                href="/services"
                className="font-sans text-[0.82rem] font-medium text-cyan hover:text-ink transition-colors duration-150"
              >
                View all services →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 4. Approach (ink — reversed) ────────────────── */}
      <section className="bg-ink py-28 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <Reveal>
              <p className="font-sans text-[0.68rem] tracking-[0.22em] uppercase text-cyan/80 font-medium mb-5">
                Our approach
              </p>
            </Reveal>
            <Reveal delay={0.06}>
              <h2
                className="font-display text-white leading-tight mb-6"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 400 }}
              >
                We act like a CFO
                <br />
                you can actually afford.
              </h2>
            </Reveal>
            <Reveal delay={0.10}>
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
                { stat: "CPA-led",    label: "on every engagement" },
                { stat: "2",          label: "office locations" },
                { stat: "100%",       label: "placeholder stat" },
              ].map(({ stat, label }) => (
                <div
                  key={label}
                  className="bg-white/[0.04] border border-white/[0.08] rounded-sm p-6"
                >
                  <p
                    className="font-display text-white mb-1"
                    style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.2rem)", fontWeight: 400 }}
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
          <div className="text-center mb-14">
            <Reveal>
              <p className="font-sans text-[0.68rem] tracking-[0.22em] uppercase text-cyan font-medium mb-4">
                The team
              </p>
            </Reveal>
            <Reveal delay={0.06}>
              <h2
                className="font-display text-ink mx-auto"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 400, maxWidth: "24ch" }}
              >
                People who know your name.
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <Reveal key={member.slug} delay={i * 0.08}>
                <Link href={`/team/${member.slug}`} className="group block">
                  <div className="aspect-[3/4] bg-canvas-alt border border-border rounded-sm flex items-center justify-center mb-4 overflow-hidden group-hover:border-cyan/40 transition-colors duration-200">
                    <span
                      className="font-display text-ink/25 select-none"
                      style={{ fontSize: "2.4rem", fontWeight: 400 }}
                    >
                      {member.name.split(" ").map((w) => w[0]).join("")}
                    </span>
                  </div>
                  <p className="font-display text-ink text-[1rem] mb-0.5 group-hover:text-cyan transition-colors duration-150"
                    style={{ fontWeight: 500 }}>
                    {member.name}
                  </p>
                  <p className="font-sans text-[0.78rem] text-ink/45">
                    {member.title}
                  </p>
                </Link>
              </Reveal>
            ))}
            {Array.from({ length: Math.max(0, 4 - team.length) }).map((_, i) => (
              <Reveal key={`ph-${i}`} delay={(team.length + i) * 0.08}>
                <div className="opacity-30">
                  <div className="aspect-[3/4] bg-canvas-alt border border-dashed border-border rounded-sm flex items-center justify-center mb-4">
                    <span className="font-sans text-[0.68rem] text-ink/30 italic">Photo</span>
                  </div>
                  <p className="font-display text-ink/30 text-[1rem] mb-0.5" style={{ fontWeight: 500 }}>Coming soon</p>
                  <p className="font-sans text-[0.78rem] text-ink/20">—</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.36}>
            <div className="mt-10 text-center">
              <Link href="/team" className="font-sans text-[0.82rem] font-medium text-cyan hover:text-ink transition-colors duration-150">
                Meet the full team →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 6. Insights ─────────────────────────────────── */}
      <section className="bg-canvas-alt py-24 px-6 border-b border-border">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <Reveal>
              <p className="font-sans text-[0.68rem] tracking-[0.22em] uppercase text-cyan font-medium mb-4">
                Latest insights
              </p>
            </Reveal>
            <Reveal delay={0.06}>
              <h2
                className="font-display text-ink mx-auto"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 400, maxWidth: "24ch" }}
              >
                From the desk.
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <Reveal key={post.slug} delay={0.06 + i * 0.08}>
                <a
                  href={`https://blog.djeadvisors.com/${post.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-canvas border border-border rounded-sm p-7 hover:border-cyan/40 transition-colors duration-200 h-full flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <span className="font-sans text-[0.62rem] tracking-[0.18em] uppercase text-cyan font-medium">
                      {post.category}
                    </span>
                    <span className="text-border">·</span>
                    <span className="font-sans text-[0.72rem] text-ink/35">{post.date}</span>
                  </div>
                  <h3
                    className="font-display text-ink leading-snug mb-3 flex-1 group-hover:text-cyan transition-colors duration-150"
                    style={{ fontSize: "1.05rem", fontWeight: 500 }}
                  >
                    {post.title}
                  </h3>
                  <p className="font-sans text-[0.84rem] text-ink/50 leading-relaxed mb-5">
                    {post.excerpt}
                  </p>
                  <p className="font-sans text-[0.78rem] font-medium text-cyan">Read more →</p>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.30}>
            <div className="mt-10 text-center">
              <a href="https://blog.djeadvisors.com" target="_blank" rel="noopener noreferrer"
                className="font-sans text-[0.82rem] font-medium text-cyan hover:text-ink transition-colors duration-150">
                All articles →
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 7. Offices ──────────────────────────────────── */}
      <section className="bg-canvas py-24 px-6 border-b border-border">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <Reveal>
              <p className="font-sans text-[0.68rem] tracking-[0.22em] uppercase text-cyan font-medium mb-4">
                Locations
              </p>
            </Reveal>
            <Reveal delay={0.06}>
              <h2
                className="font-display text-ink"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 400 }}
              >
                Two offices. One team.
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offices.map((office, i) => (
              <Reveal key={office.city} delay={0.06 + i * 0.08}>
                <div className="border border-border rounded-sm p-8">
                  <div className="h-32 bg-canvas-alt rounded-sm mb-6 flex items-center justify-center border border-border">
                    <p className="font-sans text-[0.68rem] text-ink/25 italic">Map — {office.city}</p>
                  </div>
                  <p className="font-display text-ink text-[1.1rem] mb-3" style={{ fontWeight: 500 }}>
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

      {/* ── 8. CTA ──────────────────────────────────────── */}
      <section className="bg-ink py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <Reveal>
            <h2
              className="font-display text-white leading-tight mb-5"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 400 }}
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
          <Reveal delay={0.10}>
            <Link
              href="/contact"
              className="inline-block font-sans font-semibold bg-cyan text-white rounded-sm hover:opacity-90 transition-opacity duration-150"
              style={{ fontSize: "1rem", padding: "1.1rem 3rem" }}
            >
              Contact Us Today
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
