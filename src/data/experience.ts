export type Role = {
  year: string;
  title: string;
  company: string;
  location?: string;
  description: string;
};

// Ordered oldest → most recent. New roles get appended to the end.
export const experience: Role[] = [
  {
    year: "2022",
    title: "First Steps in Paid Media",
    company: "Self-Directed",
    location: "Scottsdale, AZ",
    description:
      "Started learning paid advertising and digital sales at age 15 — running early Meta and Shopify experiments for local businesses and family contacts.",
  },
  {
    year: "2023",
    title: "Freelance Ad Operator",
    company: "Independent",
    location: "Scottsdale, AZ",
    description:
      "Took on freelance clients managing paid social campaigns, learning the operator side of small-business growth from creative through reporting.",
  },
  {
    year: "2024 – Present",
    title: "Founder",
    company: "MediaReachPro",
    location: "Scottsdale, AZ",
    description:
      "Founded MediaReachPro to help small businesses move ad spend efficiently across Meta and Google, blending AI tooling with hands-on media buying.",
  },
];
