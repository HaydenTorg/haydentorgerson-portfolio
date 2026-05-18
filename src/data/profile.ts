export type SocialLink = {
  label: string;
  href: string;
};

export const profile = {
  name: "Hayden Torgerson",
  tagline: "Upcoming Serial Entrepreneur · Bitcoin Enthusiast · AI Operator",
  location: "Scottsdale, Arizona",
  bio: "I'm 18, based in Scottsdale, Arizona, and I've been running ad spend, building businesses, and shipping things since I was 15. Today I run MediaReachPro and operate at the intersection of paid media, AI tooling, and small-business growth.",
  email: "hayden@mediareachpro.com",
  resumeUrl: "/resume.pdf",
  faceshot: "/faceshot.jpg",
  hero: "/hero.jpg",
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
