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
      <section className="bg-canvas py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className="font-sans text-[0.68rem] tracking-[0.22em] uppercase text-burgundy font-medium mb-5">
              Team
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <h1
              className="font-display font-light text-charcoal leading-tight mb-16"
              style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)" }}
            >
              The people behind the work.
            </h1>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {team.map((member, i) => (
              <Reveal key={member.slug} delay={i * 0.08}>
                <Link
                  href={`/team/${member.slug}`}
                  className="group block border border-border rounded-sm p-8 hover:border-charcoal/30 transition-colors duration-200 bg-canvas-alt"
                >
                  {/* Initials avatar */}
                  <div className="w-14 h-14 rounded-full bg-charcoal flex items-center justify-center mb-6">
                    <span className="font-display text-canvas text-[1rem] font-medium leading-none">
                      {member.name.split(" ").map((w) => w[0]).join("")}
                    </span>
                  </div>
                  <p className="font-display font-medium text-charcoal text-[1.1rem] mb-1 group-hover:text-burgundy transition-colors duration-150">
                    {member.name}
                  </p>
                  <p className="font-sans text-[0.8rem] text-charcoal/45 mb-4">
                    {member.title}
                  </p>
                  <p className="font-sans text-[0.88rem] text-charcoal/55 leading-relaxed">
                    {member.preview}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
