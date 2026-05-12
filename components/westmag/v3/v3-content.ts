// Shared content for v3 variants. Pulls from canonical content.ts where
// possible; adds variant-specific short-form copy alternatives.

export const REVOLUTION_HEADLINES = {
  current: "America's the sum of its parts",
  actionVerbs: "Make them here.",
  numbered: "America's the sum of its parts",
  comparative: "Made here. Not just assembled here.",
  quote: "Every drone has four motors.",
  tabbed: "The shape of the next industry",
  asymmetric: "Onshore the motor.",
} as const;

export const REVOLUTION_POINTS_LONG = [
  "The drone and robotics revolution is here.",
  "Motors and actuators, which have mostly been manufactured overseas, make them move. To control our electro-industrial destiny, we need to make them here.",
  "Westmag is building the great American motor company to serve the growing drone and robotics sector, both domestically and abroad.",
] as const;

export const REVOLUTION_POINTS_SHORT = [
  {
    label: "DRONES & ROBOTS",
    copy: "The revolution is here. Millions of units a year, scaling fast.",
  },
  {
    label: "MOTORS & ACTUATORS",
    copy: "At the core of every drone and every robot. Made overseas for decades.",
  },
  {
    label: "WESTMAG",
    copy: "Building the integrated American motor company. End-to-end. Here.",
  },
] as const;

export const REVOLUTION_POINTS_ACTION = [
  {
    label: "01 Power the drone revolution.",
    copy: "Every drone has four motors. We make them in South San Francisco.",
  },
  {
    label: "02 Onshore the supply chain.",
    copy: "Magnets, laminations, copper. Sourced from the US and allied nations.",
  },
  {
    label: "03 Build the integrated motor company.",
    copy: "Design, manufacturing, supply chain. Vertically integrated from day one.",
  },
] as const;

export const FOUNDER_QUOTES = [
  {
    quote:
      "Every drone has four motors. Every robot has tens of actuators. America stopped making them. We start making them again.",
    attribution: "David Hansen, Co-Founder & CEO",
  },
  {
    quote:
      "Software ate the world. Now the world needs more hardware. We build the motors that move it.",
    attribution: "Jordan Sanders, Co-Founder & CTO",
  },
] as const;

export const COMPARATIVE_SPLIT = {
  left: {
    title: "MADE HERE",
    bullets: [
      "Designed in South San Francisco",
      "NDAA-compliant materials",
      "US + allied supply chain",
      "Direct factory control",
    ],
  },
  right: {
    title: "BUILT OVERSEAS",
    bullets: [
      "Designed somewhere else",
      "Compliance unclear",
      "Asia-dependent supply",
      "Subject to port and policy",
    ],
  },
} as const;
