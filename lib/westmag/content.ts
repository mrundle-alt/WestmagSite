// All marketing copy in one place. Edit here, not in JSX.
// Verbatim from the original Webflow site.

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Technology", href: "/#technology-start" },
  { label: "About", href: "/#aboutus-start" },
  { label: "Careers", href: "/careers" },
] as const;

export const HERO = {
  heading: "AMERICAN MOTORS FOR DRONES AND ROBOTS",
  body: "Westmag designs and manufactures BLDC motors and actuators, built in America for the next generation of autonomous machines.",
  tagline: "Engineered for performance. Built for scale. Built in America.",
} as const;

export const INVESTORS = [
  { name: "Andreessen Horowitz", src: "/westmag/logos/a16z.svg" },
  { name: "Founders Fund", src: "/westmag/logos/founders-fund.svg" },
  { name: "Lux Capital", src: "/westmag/logos/lux.svg" },
  { name: "Menlo Ventures", src: "/westmag/logos/menlo.svg" },
] as const;

export const REVOLUTION = {
  blocks: [
    "The drone and robotics revolution is here.",
    "Motors and actuators, which have mostly been manufactured overseas, make them move. To control our electro-industrial destiny, we need to make them here.",
    "Westmag is building the great American motor company to serve the growing drone and robotics sector, both domestically and abroad.",
  ],
} as const;

export const FACTORY = {
  heading: "Factory 01 - South San Francisco",
  body: "Currently ramping production and testing. Anchored in South San Francisco to be close to our customers and talent. Automation and rapid iteration on motor design and manufacturing are core to our execution.",
} as const;

export const COMMON_CORE = {
  heading: "common core, many applications",
  body: "A shared motor architecture across drones and robots isn\u2019t a compromise \u2014 it\u2019s a compounding advantage. Every engineering investment, manufacturing process, and supply chain relationship we build serves both markets.",
} as const;

export type ProductSpec = {
  title: string;
  body: string;
  image: string;
  imageAlt: string;
  specs: { label: string; value: string }[];
};

export const PRODUCTS: ProductSpec[] = [
  {
    title: "DRoNE MoTORS",
    body: "BLDC motors engineered for autonomous drone propulsion. High power density. Reliable at scale.",
    image: "/westmag/images/drone.png",
    imageAlt: "Drone motor",
    specs: [
      { label: "Diameter", value: "22-81MM Stator" },
      { label: "KV Range", value: "400 - 10,000" },
      { label: "Type", value: "Inrunner & Outrunner" },
    ],
  },
  {
    title: "ROBoT ACTUATORS",
    body: "BLDC-based actuators for humanoid robots and industrial automation. Compact. Responsive. Scalable across applications.",
    image: "/westmag/images/robotics.png",
    imageAlt: "Robot actuator",
    // Note: original site shows "22-81MM" placeholder for all three robot specs.
    // Preserved verbatim — replace these with real values when the user provides them.
    specs: [
      { label: "Diameter", value: "22-81MM" },
      { label: "KV Range", value: "22-81MM" },
      { label: "Type", value: "22-81MM" },
    ],
  },
];

export const VERTICAL = {
  heading: "Vertically integrating design, manufacturing, and supply chain.",
  cards: [
    {
      title: "DESIGN",
      body: "Our engineering team benchmarks and characterizes motors across performance envelopes to build proprietary understanding of what the market actually needs. We use AI-enabled factory automation companies to ensure every design decision is manufacturable at scale.",
    },
    {
      title: "MANUFACTURE",
      body: "Our production facility in South San Francisco gives us direct control over quality, consistency, and lead times. We leverage proven motor manufacturing expertise through our strategic partnership with a leading Japanese motor technology company to accelerate our own production capabilities while building domestic capacity.",
    },
    {
      title: "SUPPLY CHAIN",
      body: "NDAA-compliant from day one. Our materials and components are sourced from the US and allied nations. We have invested in strategic inventory and relationships with domestic and emerging leaders in critical materials to insulate customers from supply shocks that have disrupted overseas-dependent alternatives.",
    },
  ],
} as const;

export const SCALING = {
  heading: "SCALING NOW",
  body: "We're scaling production to millions of motors to support top customers in commercial and defense applications. If you are looking for a scaling partner, we want to hear from you early.",
  cta: "CONTACT US",
} as const;

export type TeamMember = {
  name: string;
  role: string;
  social: { kind: "x" | "linkedin"; href: string; label: string };
};

export const TEAM: {
  heading: string;
  members: TeamMember[];
  body: string;
  cta: string;
} = {
  heading: "We\u2019re building a world class team",
  members: [
    {
      name: "DAVID HANSEN",
      role: "Co-Founder & CEO",
      social: { kind: "x", href: "https://x.com/boxcardavid", label: "David Hansen on X" },
    },
    {
      name: "JORDAN SANDERS",
      role: "Co-Founder & CTO",
      social: {
        kind: "linkedin",
        href: "https://www.linkedin.com/in/jordansanders1/",
        label: "Jordan Sanders on LinkedIn",
      },
    },
  ],
  body: "Our team has world-class talent in motor design, manufacturing engineering, and production automation. Our team draws from Waterloo, UBC, MIT, Cornell, and leaders in automotive scale.",
  cta: "VIEW OPEN ROLES",
};

export const FOOTER = {
  address: "South San Francisco, CA",
  copyright: "\u00a9 2026 Western Magnetics Company. All rights reserved.",
  termsLabel: "Terms and Conditions",
  termsHref: "/terms",
  email: "contact@westmag.com",
  socials: [
    { label: "Email", href: "mailto:contact@westmag.com", icon: "/westmag/icons/mail.svg" },
    { label: "LinkedIn", href: "#", icon: "/westmag/icons/linkedin.svg" },
    { label: "X", href: "https://x.com/westmagco", icon: "/westmag/icons/x.svg" },
  ],
} as const;

/**
 * Careers ATS integration. Works with either Dover or Workable (or any iframe-embeddable ATS).
 *
 *  Dover:
 *    app.dover.com → Careers Page → Get a link / Embed code
 *    paste the embed URL into provider.embedUrl below
 *
 *  Workable:
 *    Workable account → Settings → Careers Page → Job widget / iFrame
 *    https://apply.workable.com/<your-subdomain>/  → set as embedUrl, OR
 *    use the public REST API at https://www.workable.com/spi/v3/accounts/<sub>/jobs
 *    for a fully custom React render (TODO: implement if/when needed)
 *
 *  Until you fill it in, /careers renders a richer "info + roles areas" page
 *  with the contact email as a fallback CTA.
 */
export const CAREERS_PROVIDER: {
  kind: "dover" | "workable" | null;
  embedUrl: string | null;
  linkUrl: string | null;
} = {
  kind: null,
  embedUrl: null,
  linkUrl: null,
};

export const CAREERS = {
  heading: "Build the great American motor company.",
  intro:
    "We design and manufacture BLDC motors and actuators in South San Francisco for the next generation of drones and robots. We're hiring across engineering, manufacturing, and supply chain \u2014 if any of the areas below describes you, we want to talk.",
  hiringAreas: [
    {
      title: "Motor Design",
      body: "Electromagnetic, thermal, and mechanical design of inrunner and outrunner BLDC motors. FEA / FEMM / Maxwell experience welcome.",
    },
    {
      title: "Manufacturing Engineering",
      body: "Stator winding, rotor magnetization, rotor bonding, balancing, end-of-line test. We automate as much as possible.",
    },
    {
      title: "Production Automation",
      body: "PLCs, robotics, vision systems, and the software stack that orchestrates them. Background in cell design and MES.",
    },
    {
      title: "Firmware & Controls",
      body: "FOC, sensorless control, model-based design, and motor-side firmware that ships at scale.",
    },
    {
      title: "Supply Chain",
      body: "Domestic and allied-nation sourcing of magnets, laminations, copper, and bearings. NDAA compliance is a constraint, not a suggestion.",
    },
    {
      title: "Operations & GTM",
      body: "Customer-facing roles supporting drone and robotics OEMs in commercial and defense markets.",
    },
  ],
  values: [
    "Make it in America, end-to-end.",
    "Automate the second time you do something.",
    "Talk to customers weekly. Ship to them monthly.",
    "Bias to motors leaving the building.",
  ],
  process: [
    { step: "1.", title: "Apply", body: "Submit through our portal or email contact@westmag.com." },
    { step: "2.", title: "Intro call", body: "30 minutes with a founder or hiring manager." },
    { step: "3.", title: "Technical loop", body: "2\u20133 conversations, including a take-home or whiteboard problem grounded in something we actually shipped." },
    { step: "4.", title: "On-site", body: "Visit Factory 01 in South San Francisco. Meet the team. See the line." },
    { step: "5.", title: "Offer", body: "Fast turn. Equity that matters." },
  ],
  contactNote: "Don't see a fit? Send us a note at contact@westmag.com \u2014 we hire ahead of the org chart.",
} as const;
