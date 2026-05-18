export type SocialLink = {
  label: string;
  href: string;
};

export const profile = {
  name: "Hayden Torgerson",
  tagline: "Upcoming Serial Entrepreneur · Bitcoin Enthusiast · AI Operator",
  location: "Scottsdale, Arizona",
  bio: "I'm 18, based in Scottsdale, Arizona. I've been running ad spend, closing sales, and building businesses since I was 15 — from car detailing in Utah, through fitness gyms, summer solar door-to-door, and now MediaReach. Currently shifting focus toward learning, testing, and growing in e-commerce.",
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
