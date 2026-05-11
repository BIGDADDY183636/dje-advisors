export interface BlogPost {
  slug: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "2025-tax-changes-business-owners",
    category: "Tax Planning",
    date: "March 2026",
    title: "2025 Tax Changes Every Chicago Business Owner Should Know",
    excerpt:
      "A roundup of the key changes affecting small business owners and their owners heading into this filing season.",
  },
  {
    slug: "estate-planning-balance-sheet",
    category: "Estate Planning",
    date: "February 2026",
    title: "Estate Planning: Why Your Balance Sheet Matters More Than Your Will",
    excerpt:
      "Most families focus on their will when thinking about estate planning. The real work starts with the balance sheet.",
  },
  {
    slug: "quarterly-estimated-taxes",
    category: "Advisory",
    date: "January 2026",
    title: "Quarterly Estimated Taxes: A Practical Guide for Business Owners",
    excerpt:
      "Missing estimated tax payments is one of the most common — and most avoidable — mistakes we see from new business owners.",
  },
];
