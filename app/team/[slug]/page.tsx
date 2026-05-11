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
              className="inline-block font-sans text-[0.78rem] text-navy/40 hover:text-navy transition-colors mb-10"
            >
              ← Back to team
            </Link>
          </Reveal>

          <div className="flex items-start gap-8 mb-12">
            {/* Portrait placeholder */}
            <Reveal delay={0.04}>
              <div className="w-24 h-32 bg-canvas-alt border border-border rounded-sm flex items-center justify-center flex-shrink-0">
                <span
                  className="font-display font-light text-navy/25 select-none"
                  style={{ fontSize: "1.4rem" }}
                >
                  {member.name.split(" ").map((w) => w[0]).join("")}
                </span>
              </div>
            </Reveal>

            <div>
              <Reveal delay={0.06}>
                <h1
                  className="font-display font-medium text-navy leading-tight mb-1"
                  style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)" }}
                >
                  {member.name}
                </h1>
                <p className="font-sans text-[0.82rem] text-gold font-medium tracking-wide uppercase">
                  {member.title}
                </p>
              </Reveal>
            </div>
          </div>

          <div className="space-y-5">
            {member.fullBio.map((para, i) => (
              <Reveal key={i} delay={0.1 + i * 0.06}>
                <p className="font-sans text-[0.95rem] text-navy/60 leading-[1.85]">
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
