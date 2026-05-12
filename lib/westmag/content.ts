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
  body: "Westmag designs and manufactures BLDC motors, drone motors, and robot actuators — built and scaled in America for the next generation of autonomous machines.",
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
  heading: "Vertically integrated design, manufacturing, and supply chain.",
  cards: [
    {
      title: "DESIGN",
      body: "Our engineering team characterizes motors across the full performance envelope. Every design decision is made for manufacturability at scale.",
    },
    {
      title: "MANUFACTURE",
      body: "Production in South San Francisco gives us direct control over quality, consistency, and lead times. Strategic partnerships accelerate our domestic capacity.",
    },
    {
      title: "SUPPLY CHAIN",
      body: "NDAA-compliant from day one. Materials and components sourced from the US and allied nations. Strategic inventory and supplier relationships insulate customers from supply shocks.",
    },
  ],
} as const;

export const SCALING = {
  heading: "SCALING NOW",
  body: "We're scaling production to millions of motors to support top customers. If you are looking for a scaling partner, we want to hear from you early.",
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

export type Job = {
  slug: string;
  title: string;
  team: string;
  location: string;
  type: string; // "Full-time" | "Contract" etc.
  /** When you wire up an ATS, set this to the role's apply URL (e.g. Workable apply page). Falls back to mailto. */
  applyUrl: string | null;
  blurb: string;
  about: string;
  responsibilities: string[];
  qualifications: string[];
  niceToHave?: string[];
  comp?: string;
};

export const JOBS: Job[] = [
  {
    slug: "supply-chain-manager",
    title: "Supply Chain Manager",
    team: "Operations",
    location: "South San Francisco, CA (on-site)",
    type: "Full-time",
    applyUrl: null,
    blurb:
      "Own the materials, components, and supplier relationships that turn motor designs into shipped product. NDAA-compliant from day one.",
    about:
      "Westmag is building the great American motor company. We design and manufacture BLDC motors and actuators in South San Francisco for the next generation of drones and robots. As Supply Chain Manager, you'll own the full materials and components stack \u2014 magnets, laminations, copper, bearings, electronics \u2014 and the supplier relationships behind them. We are NDAA-compliant from day one; that's a constraint that shapes every sourcing decision we make.",
    responsibilities: [
      "Own end-to-end supply for all motor and actuator programs: forecasting, sourcing, purchasing, inventory, and inbound logistics.",
      "Build and manage relationships with domestic and allied-nation suppliers of magnets, laminations, copper wire, bearings, and electronic components.",
      "Negotiate pricing, lead times, and capacity commitments. Keep us ahead of demand without holding dead inventory.",
      "Maintain NDAA / Buy American / FAR compliance documentation for every part and supplier.",
      "Stand up strategic inventory positions on critical materials to insulate customers from supply shocks.",
      "Partner with engineering on DFM and second-source qualification before designs lock.",
      "Build the systems and dashboards we need to run supply at 10x volume, not just today's volume.",
    ],
    qualifications: [
      "5+ years in supply chain, sourcing, or procurement roles in a hardware-manufacturing environment (motors, EVs, robotics, aerospace, automotive, or similar).",
      "Direct experience sourcing magnets, laminations, copper, or bearings strongly preferred.",
      "Working knowledge of NDAA / FAR / Buy American provisions and how they apply to component sourcing.",
      "Track record of building supplier relationships that scale through capacity ramps.",
      "Comfortable in a startup environment \u2014 you build the process while you run it.",
      "Authorized to work in the United States. Some roles may require U.S.-person status under ITAR/EAR.",
    ],
    niceToHave: [
      "Experience standing up a supplier-quality program from scratch.",
      "Familiarity with ERP / MRP systems and a healthy skepticism of premature ERP adoption.",
      "Background in defense or dual-use hardware programs.",
    ],
    comp: "Competitive salary + meaningful equity. Health, dental, vision. Relocation support to the Bay Area.",
  },
  {
    slug: "machinist",
    title: "Machinist",
    team: "Manufacturing",
    location: "South San Francisco, CA (on-site)",
    type: "Full-time",
    applyUrl: null,
    blurb:
      "Make the parts that make the motors. CNC and manual machining of stator stacks, rotor cores, shafts, housings, and tooling.",
    about:
      "Westmag's Factory 01 in South San Francisco is where motor designs become motors. As one of our first machinists, you'll work directly with engineering on prototype-to-production tooling, fixtures, and parts \u2014 stator and rotor cores, shafts, housings, balancing rigs, and the dozens of small parts that don't show up on a BOM but make the line run. You'll have unusual influence over how the shop is set up and what we buy next.",
    responsibilities: [
      "Set up and run CNC mills and lathes (3-axis minimum, 5-axis a plus) for prototype and short-run production parts.",
      "Manual machining when it's faster than programming the CNC.",
      "Build tooling and fixtures for stator winding, rotor magnetization, balancing, and end-of-line test.",
      "Inspect first-articles and own the GD&T conversation with engineering when prints don't match the part you can actually make.",
      "Maintain the shop \u2014 tooling, coolant, calibration, the works.",
      "Help define what new machines we buy as we scale Factory 01.",
    ],
    qualifications: [
      "5+ years of professional machining experience, with a meaningful portion in CNC.",
      "Fluent reading mechanical drawings and applying GD&T.",
      "Comfortable programming at the controller and editing G-code by hand when needed.",
      "Steady, careful, and fast \u2014 in that order.",
      "Authorized to work in the United States.",
    ],
    niceToHave: [
      "5-axis experience.",
      "EDM (wire or sinker) experience.",
      "Background in motor, EV, aerospace, or precision-instrument shops.",
      "Some Fusion 360 / Mastercam CAM authoring chops.",
    ],
    comp: "Competitive hourly or salary + equity. Health, dental, vision. Tooling allowance.",
  },
  {
    slug: "office-manager-operations-specialist",
    title: "Office Manager / Operations Specialist",
    team: "Operations",
    location: "South San Francisco, CA (on-site)",
    type: "Full-time",
    applyUrl: null,
    blurb:
      "The connective tissue of the company. Make the office, the shop, and the people inside both run smoothly.",
    about:
      "Westmag is small, hardware-heavy, and growing fast. As Office Manager / Operations Specialist, you'll be the connective tissue \u2014 you make the office and Factory 01 run, you onboard new hires, you keep vendors paid and visitors badged, and you own the dozen small things that fall in the cracks between engineering and finance. This is a high-trust role for someone who likes building order out of chaos.",
    responsibilities: [
      "Run day-to-day office and facilities operations for our South San Francisco HQ and adjacent shop space.",
      "Own onboarding for new hires \u2014 desk, laptop, badges, accounts, the welcome lunch.",
      "Manage vendor relationships (cleaning, IT, security, snacks, deliveries) and the AP that goes with them.",
      "Coordinate visitors and customer tours of Factory 01.",
      "Plan team events, offsites, and the small rituals that make a hardware company a place people want to work.",
      "Pick up special projects across HR, finance, and ops as the founders need.",
      "Build the systems and SOPs we'll hand to a future office team when we're 50 people.",
    ],
    qualifications: [
      "3+ years in office management, operations, or executive-assistant roles \u2014 ideally at a small but fast-growing company.",
      "Excellent written and verbal communication.",
      "Calm under pressure. Genuine warmth. Strong sense of ownership.",
      "Comfortable with light financial work (expense reports, AP, vendor onboarding).",
      "Authorized to work in the United States.",
    ],
    niceToHave: [
      "Prior experience at a hardware or manufacturing company.",
      "Familiarity with QuickBooks, Ramp, Rippling, or similar tooling.",
      "Notary, first-aid, or facilities-related certifications.",
    ],
    comp: "Competitive salary + equity. Health, dental, vision. Real ownership of how the company feels day-to-day.",
  },
];

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
