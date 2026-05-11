export interface TeamMember {
  slug: string;
  name: string;
  title: string;
  preview: string;
  fullBio: string[];
}

export const team: TeamMember[] = [
  {
    slug: "placeholder",
    name: "Team Member",
    title: "Principal",
    preview: "Bio content coming soon.",
    fullBio: ["Full bio content coming soon."],
  },
];

export function getMember(slug: string): TeamMember | undefined {
  return team.find((m) => m.slug === slug);
}
