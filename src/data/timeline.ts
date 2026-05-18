export type TimelineKind = "experience" | "education" | "milestone";

export type TimelineEntry = {
  startYear: number; // used to keep the merged list in chronological order
  year: string; // display string, e.g. "Dec 2024 – Present"
  kind: TimelineKind;
  title: string;
  company?: string;
  location?: string;
  description: string;
  current?: boolean; // marks the entry as "now" — gets a green pulsing dot
};

// Single chronological timeline. Add new entries in order (oldest → newest).
export const timeline: TimelineEntry[] = [
  {
    startYear: 2023,
    year: "Jan 2023 – Sep 2024",
    kind: "experience",
    title: "Owner — Car Detailing",
    company: "Thorgeir Detailing",
    location: "Utah",
    description:
      "Started at 15 with a willing mom who'd drop me at appointments and pick me up $150 later. At 16, once I could drive, I outfitted my own truck with equipment and started scaling with paid ads. Realizing I was paying $400/month for ad management I could do myself, I funnel-hacked the creative, offer, and system, then built it out — my first real introduction to paid acquisition and GoHighLevel automations. Around the same time, ElevenLabs launched and I started using AI tooling to amplify creatives. Hired two friends before the business could support it — a mistake that taught me more than any win did. Stepped away when school picked back up, with hard-earned lessons in paid ads, systems, leadership, and the brutal one: don't delegate before you need to.",
  },
  {
    startYear: 2024,
    year: "Jul 2024",
    kind: "milestone",
    title: "Ran the Spartan Beast",
    location: "Snowbasin Resort, UT",
    description:
      "Mountain obstacle race — ~13 miles and 30+ obstacles up Snowbasin. Ran it solo, and it was only my second serious hike ever.",
  },
  {
    startYear: 2024,
    year: "Sep 7, 2024",
    kind: "milestone",
    title: "Ran the Mount Nebo Marathon",
    location: "Utah",
    description: "26.2 miles through the Wasatch foothills — ran it solo.",
  },
  {
    startYear: 2024,
    year: "Sep 2024 – Nov 2024",
    kind: "experience",
    title: "Sales & Membership Growth",
    company: "Alpine Fitness",
    location: "Alpine, UT",
    description:
      "Walked in looking for an after-school job. Three months later: closed 88 new memberships ($100K+ in ARR), converted warm leads on the phone, turned cold walk-ins into paying members, ran community outreach for cold traffic, and built the CRM system the gym still runs on. Started as an intern, grew into running nearly all sales operations — the opportunity that gave me the playbook I'd later use with other fitness centers and the foundation for MediaReach.",
  },
  {
    startYear: 2024,
    year: "Dec 2024 – Present",
    kind: "experience",
    title: "Founder — Fitness Center Meta Ads",
    company: "MediaReach",
    location: "Remote, United States",
    description:
      "Took what I learned at Alpine and built my own service business — running Meta Ads and full sales systems (capture, nurture, manage, book) for fitness centers. At 17 I ran client operations in GoHighLevel, building automations that consistently converted leads into booked appointments. Averaged $3–$7 CPL across client campaigns, with a top campaign hitting $1.96 CPL — 229 leads in 3 weeks on under $500 ad spend. Owned creative, offer, and funnel strategy end-to-end. My first real win in online entrepreneurship after stepping away from car detailing. Recently shifted from growing to maintaining, while learning, testing, and growing in e-commerce.",
  },
  {
    startYear: 2025,
    year: "May 2025 – Aug 2025",
    kind: "experience",
    title: "Summer Sales — Solar & Fiber",
    company: "Door-to-Door",
    location: "FL → MA → CT",
    description:
      "Moved to Florida in May to sell solar door-to-door. The first two months in Polk County were brutal — failed credit after failed credit, morale gone, most of the team went home. Relocated to Massachusetts and closed my first self-gen solar deal (set and closed) within one day of knocking. Team moved to Connecticut for fiber optic internet next — lower ticket, but the volume was there. The lesson that stood above the rest: staying true to your word, especially when it gets hard, always pays off. The moment it feels unbearable is the exact moment most people quit — and the exact moment success starts to show for the ones who sustain.",
  },
  {
    startYear: 2025,
    year: "May 2025",
    kind: "education",
    title: "Graduated Early",
    company: "Pleasant Grove High School",
    location: "Pleasant Grove, UT",
    description:
      "Graduated early — about three weeks into the summer sales run in Florida — with work and businesses running alongside school the whole time.",
  },
  {
    startYear: 2026,
    year: "2026 – Present",
    kind: "experience",
    title: "Signature Aviation",
    location: "Scottsdale, AZ",
    description:
      "After summer sales, moved to Scottsdale. Working at Signature Aviation while focusing in on the e-commerce industry — learning, testing, and growing in there.",
    current: true,
  },
];
