import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { team } from "@/lib/team";

export const metadata: Metadata = {
  title: "Team",
  description: "Meet the team at DJE Advisors.",
};

export default function TeamPage() {
  return (
    <main className="pt-[72px]">
      <section className="bg-canvas py-24 px-6 border-b border-border">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className="font-sans text-[0.68rem] tracking-[0.22em] uppercase text-cyan font-medium mb-5">
              Team
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <h1
              className="font-display text-ink leading-tight"
              style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)", fontWeight: 400 }}
            >
              The people behind the work.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="bg-canvas py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <Reveal key={member.slug} delay={i * 0.08}>
              <Link href={`/team/${member.slug}`} className="group block">
                <div className="aspect-[3/4] bg-canvas-alt border border-border rounded-sm flex items-center justify-center mb-4 overflow-hidden group-hover:border-cyan/40 transition-colors duration-200">
                  <span
                    className="font-display text-ink/25 select-none"
                    style={{ fontSize: "2.2rem", fontWeight: 400 }}
                  >
                    {member.name.split(" ").map((w) => w[0]).join("")}
                  </span>
                </div>
                <p
                  className="font-display text-ink text-[1rem] mb-0.5 group-hover:text-cyan transition-colors duration-150"
                  style={{ fontWeight: 500 }}
                >
                  {member.name}
                </p>
                <p className="font-sans text-[0.78rem] text-ink/45">{member.title}</p>
                <p className="font-sans text-[0.8rem] text-ink/50 leading-relaxed mt-3">
                  {member.preview}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
