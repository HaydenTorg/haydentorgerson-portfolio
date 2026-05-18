export type SocialLink = {
  label: string;
  href: string;
};

export const profile = {
  name: "Hayden Torgerson",
  tagline: "Upcoming Serial Entrepreneur · Bitcoin Enthusiast · AI Operator",
  location: "Scottsdale, Arizona",
  bio: "I'm 18, based in Scottsdale, Arizona. Running ad spend, closing sales, and building businesses since 15 — car detailing, fitness gyms, summer solar door-to-door, now MediaReach. Currently shifting focus toward learning, testing, and growing in e-commerce.",
  bioPersonal:
    "Outside of work: in the gym since 14, deep on Bitcoin and AI systems with Claude Code, snowboarding and hiking when I can.",
  email: "haydentorgerson3@gmail.com",
  resumeUrl: "/resume.pdf",
  faceshot: "/faceshot.jpg",
  socials: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/hayden-torgerson-79a0572b1/",
    },
  ] as SocialLink[],
  skills: [
    "Sales",
    "Online Advertising",
    "Meta Ads",
    "Shopify",
    "GoHighLevel",
    "Anthropic Claude",
    "AI Operations",
    "Bitcoin",
  ],
};
