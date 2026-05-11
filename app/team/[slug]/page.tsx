import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { team, getMember } from "@/lib/team";

export function generateStaticParams() {
  return team.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const member = getMember(slug);
  if (!member) return {};
  return { title: member.name };
}

export default async function TeamMemberPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = getMember(slug);
  if (!member) notFound();

  return (
    <main className="pt-[72px]">
      <section className="bg-canvas py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <Link
              href="/team"
              className="inline-block font-sans text-[0.78rem] text-charcoal/40 hover:text-charcoal transition-colors mb-10"
            >
              ← Back to team
            </Link>
          </Reveal>

          <Reveal delay={0.04}>
            {/* Initials avatar */}
            <div className="w-16 h-16 rounded-full bg-charcoal flex items-center justify-center mb-8">
              <span className="font-display text-canvas text-[1.1rem] font-medium leading-none">
                {member.name.split(" ").map((w) => w[0]).join("")}
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h1
              className="font-display font-medium text-charcoal leading-tight mb-2"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
            >
              {member.name}
            </h1>
            <p className="font-sans text-[0.85rem] text-burgundy font-medium tracking-wide uppercase mb-10">
              {member.title}
            </p>
          </Reveal>

          <div className="space-y-5">
            {member.fullBio.map((para, i) => (
              <Reveal key={i} delay={0.1 + i * 0.06}>
                <p className="font-sans text-[0.95rem] text-charcoal/65 leading-[1.85]">
                  {para}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
