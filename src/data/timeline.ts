export type TimelineKind = "experience" | "education";

export type TimelineEntry = {
  startYear: number; // used to keep the merged list in chronological order
  year: string; // display string, e.g. "2024 – Present"
  kind: TimelineKind;
  title: string;
  company: string;
  location?: string;
  description: string;
};

// Single chronological timeline. Add new entries in order (oldest → newest).
export const timeline: TimelineEntry[] = [
  {
    startYear: 2022,
    year: "2022",
    kind: "experience",
    title: "First Steps in Paid Media",
    company: "Self-Directed",
    location: "Scottsdale, AZ",
    description:
      "Started learning paid advertising and digital sales at age 15 — running early Meta and Shopify experiments for local businesses and family contacts.",
  },
  {
    startYear: 2023,
    year: "2023",
    kind: "experience",
    title: "Freelance Ad Operator",
    company: "Independent",
    location: "Scottsdale, AZ",
    description:
      "Took on freelance clients managing paid social campaigns, learning the operator side of small-business growth from creative through reporting.",
  },
  {
    startYear: 2024,
    year: "2024",
    kind: "education",
    title: "High School Graduate",
    company: "Scottsdale, Arizona",
    description:
      "Completed high school while running freelance ad work on the side.",
  },
  {
    startYear: 2024,
    year: "2024 – Present",
    kind: "experience",
    title: "Founder",
    company: "MediaReachPro",
    location: "Scottsdale, AZ",
    description:
      "Founded MediaReachPro to help small businesses move ad spend efficiently across Meta and Google, blending AI tooling with hands-on media buying.",
  },
];
