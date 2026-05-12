# Design DNA Report: Westmag references

*Three-site DNA extracted via raw-HTML inspection + visual-description
synthesis (no Playwright available, so computed-style extraction was
partial). Reads as guardrails for `layout-innovator` to generate
RevolutionSection + TeamSection variants.*

---

## Reference 1: Hadrian (hadrian.co)

### Typography DNA
- **Display:** Bold action-driven sans-serif headlines (font not extractable from
  bundled CSS; visually reads as a geometric grotesque — Söhne / Inter / GT
  America family). Statement-scale, ~64–96px on hero.
- **Body:** Functional sans-serif, restrained line-length. ~16–18px body.
- **Standout technique:** **Declarative-action verbs** in every heading
  ("Factories of the Future to Reindustrialize America," "Manufacture the
  future at Hadrian"). The typography is the messaging.

### Color DNA
- **Brand accent:** Dark navy `#002548` (only branded hex extractable from raw HTML)
- **Background:** Predominantly white/cream with photographic insertions
- **Treatment:** Neutral monochromatic foundation; location-pill chips
  (CA, AZ, AL, DC) serve as accent typography rather than colored elements
- **Gradient usage:** None visible — flat, confident, post-Stripe

### Layout DNA
- **Hero:** Centered hero statement (single H1, mission-as-declaration)
- **Body sections:** Asymmetric — left-aligned service tiers as modular
  blocks
- **Recurring device:** **Repeated full-width CTA banners** ("Manufacture
  the future at Hadrian") slicing between sections — these are the visual
  rhythm spine
- **Grid:** Likely flexbox-driven, max-width container ~1200–1400px

### Motion DNA
- **Restraint over flourish.** No scroll-jacking, no parallax extravagance.
  Action-oriented section reveals.

### Component DNA
- **Mission-as-action-CTA pattern:** Headline + immediately actionable
  copy + slicing banner cards
- **Location chips:** Simple typography tokens, no decorative chrome
- **No team photography on home** — credibility through mission language

### Steal for Westmag
- **Repeated full-width CTA banner** device. Place between Revolution and
  CommonCore: e.g., "Make motors here. Build robots here. Power the next
  industry here."
- **Action-verb headlines.** Rewrite Revolution's 3 blocks as action
  declarations.

---

## Reference 2: K2 Space (k2space.com)

### Typography DNA
- **Display:** Bold minimalist large sans-serif, statement-sized. Likely a
  premium grotesque (visually consistent with Söhne, GT America, Inter).
- **Body:** Same family, lighter weight. Tight tracking on display, normal
  on body.
- **Standout technique:** **CTO quote rendered at near-headline scale**
  ("The industry went small. We asked: what happens if you go the other
  way?") — quote becomes a visual centerpiece, not a sidebar.

### Color DNA
- **Background:** Dark navy/near-black `#1B1B1B` (extracted from HTML)
- **Primary text:** White
- **Secondary text:** Gray `#5E5E5E` (extracted)
- **Accent:** Blue `#4d65ff` (extracted; sparingly used)
- **Dark mode:** Default. Light sections appear only for contrast inserts.

### Layout DNA
- **Hero:** "Build Bigger" tagline anchors visual hierarchy; large H1 +
  comparative satellite visual (200kg/2kW vs. 3000kg/20kW)
- **Section recurring:** **Comparative side-by-side device** — left and
  right columns showing scale or capability differential
- **Section recurring:** Vertical orbital tabs (LEO/MEO/GEO)
- **Decorative recurring:** **Corner flourishes + directional arrows** —
  small SVG geometric chevrons in section corners, suggesting forward
  momentum

### Motion DNA
- Lightweight scroll reveals. Smooth, not aggressive.
- Corner-chevron animation likely uses subtle position/opacity shifts on
  scroll-into-view
- Suitable for Framer Motion `whileInView` with stagger

### Component DNA
- **Comparative split column** — two halves with stat-driven visual
- **Founder-quote anchor card** — large typography, attribution
  bottom-right
- **Corner flourish overlay** — `position: absolute` chevrons in section
  corners

### Steal for Westmag
- **Comparative split** for the "made here vs. made overseas" thesis. Could
  be a Revolution variant showing a Westmag motor on the left, a
  generic-overseas-supply-chain diagram on the right.
- **Founder quote as anchor.** A David or Jordan quote could anchor a
  Revolution variant: "Every drone has four motors. Every robot has tens
  of actuators. America stopped making them."
- **Corner chevrons.** Lightweight SVG overlays — Westmag could integrate
  with the existing `--orange #ff3905` for accent corners.

---

## Reference 3: Mach Industries (machindustries.com)

### Typography DNA
- **Display:** Bold sans-serif, treated like military-spec naming (Viper,
  Glide, Stratos, Pike, Dart all rendered as same-weight headline tokens)
- **Body:** Functional, technical
- **Standout technique:** **Numbered section headers** (01, 02, 03, 04, 05)
  treated as primary typographic elements — same visual weight as the
  product names they precede

### Color DNA
- **Background:** Pure black `#000000` (most-counted hex)
- **Secondary text/strokes:** Dark gray `#4F4F4F`
- **Accent:** None visible from extraction — monochromatic by design
- **Decorative:** Aviation-inspired geometric grid patterns as subtle
  background elements (likely SVG or repeating CSS background)

### Layout DNA
- **Hero:** Video/imagery anchor, mission **NOT** in hero — appears
  prominently *below* hero as centered substantial block text
- **Mission placement:** "Mach exists to build next generation defense
  platforms that maintain an allied American edge." — centered, large,
  between visual anchors
- **Recurring device:** **Numbered grid system** — products displayed
  sequentially with prominent numerals
- **Mirrored footer:** Product links repeat in footer — closure pattern

### Motion DNA
- Restrained hover states; progressive disclosure on scroll
- Lower motion budget than K2, higher than Hadrian

### Component DNA
- **Numbered product card:** Big numeral (`01`) + product name + image +
  short copy
- **Mission-below-hero block:** Centered, generously padded, no chrome
- **Geometric grid background:** Subtle pattern overlay

### Steal for Westmag
- **Numbered 01/02/03 rhythm** for the 3 Revolution points. Each number
  rendered at headline scale, with the point copy underneath.
- **Mission-below-hero placement** — could be a Revolution variant where
  the manifesto floats as a giant centered block under a thinned hero
- **Motor-schematic grid background** — analog of Mach's aviation grid,
  using a tiled motor cross-section SVG (or the existing
  `/westmag/images/stampmotorswhite.png` already in the repo)

---

## Synthesis: actionable primitives for `layout-innovator`

### Westmag's locked constraints (don't drift):
- **Fonts:** Inter (display, weights 300–900) + IBM Plex Mono (body)
- **Headline treatment:** Uppercase + `-webkit-text-stroke` (outlined,
  3px on hero, 1.5px on H2)
- **Accent color:** `#ff3905` (orange) — *the only saturated color*
- **Backgrounds:** `wm-bg-grain` (grainy cream) for light, `wm-bg-dark`
  (#000 + grain overlay) for dark, alternating
- **Buttons:** Angled clip-path corners, `--cut: 24px`
- **Motion library:** Framer Motion, easing `cubic-bezier(0.16, 1, 0.3, 1)`,
  duration 0.6–0.8s, fade-y stagger 0.15s

### Primitives synthesized from references (Westmag-compatible):

| # | Primitive | Source | How to apply |
|---|---|---|---|
| **P1** | **Numbered card (01/02/03)** at headline scale | Mach + Saronic | Three horizontal cards, each with massive number above the point copy. Number in Inter outlined uppercase, point in IBM Plex Mono |
| **P2** | **Action-verb declaration headline** | Hadrian | Rewrite Revolution H2 as a *do-verb* statement: "Make motors here." / "Power the next industry." / "Rebuild what was outsourced." |
| **P3** | **Full-width CTA banner slicer** | Hadrian | Orange banner with angled-clip diagonal cut, slicing between Revolution and CommonCore |
| **P4** | **Comparative split column** | K2 Space | Left column: "Made in America" with motor render + supply-chain badge. Right column: "Built overseas" with abstract/dimmed render |
| **P5** | **Founder-quote anchor** | K2 Space | Large pull-quote at center of Revolution, attributed to David or Jordan; body content flows around |
| **P6** | **Corner chevron flourishes** | K2 Space | SVG chevrons in section corners using `--orange` accent — subtle directional motion |
| **P7** | **Motor-schematic grid background** | Mach | Subtle tiled SVG of a motor cross-section as section background, low-opacity, behind text content |
| **P8** | **Mission-below-hero floating block** | Mach | Reposition Revolution's mission statement to a generously-padded centered block, deliberately separated from the 3 points |
| **P9** | **Tabbed numbered panels (001/002/003)** | Saronic | Replace stacked 3 blocks with a tab control — click 001 / 002 / 003 to reveal each point full-screen-height. Interactive |
| **P10** | **Stacked text blocks with vertical line spine** (Westmag v1/v2 current) | Westmag baseline | Keep as Variant A — reference control |
| **P11** | **Asymmetric headline-left, image-right** | Hadrian variation | Headline left, side-image (US map / motor exploded view) right; copy flows below |
| **P12** | **Section deleted entirely** | Matt's "easy button" `[28:41]` | Content folded into CommonCore/Hero — control test |

---

## Variant assignment

### RevolutionSection (8 variants):

| Slot | Primitive(s) | Headline direction |
|---|---|---|
| A | P10 (baseline) | Current: three stacked text blocks with vert-line spine |
| B | P2 + P3 | Declarative action verbs + orange-banner slicers between |
| C | P1 + P8 | Numbered 01/02/03 horizontal row + mission-floating-below |
| D | P4 + P11 | Comparative split — "Made here" left, "Built overseas" right |
| E | P5 + P7 | Founder quote anchor center + motor-schematic background |
| F | P9 + P6 | Tabbed 001/002/003 panels + corner chevrons |
| G | P11 + P6 + dark variant | Asymmetric headline-left/image-right on dark `wm-bg-dark` + chevrons |
| H | P12 | Section removed — three points folded into adjacent sections |

### TeamSection (4 variants):

| Slot | Direction | Notes |
|---|---|---|
| A | Baseline (v1/v2 current) | Two cards with orange-wipe-up hover |
| B | Inline roles + bios right | Per ADVISOR `[38:23]`: "We're building a world class team. Here's the roles, and then a little snippet of you and David to the right of that" |
| C | Daft-Punk-style robot avatars | Per ADVISOR `[37:35]`: stylized robot heads instead of headshots |
| D | Text-only headline + inline roles grid | Minimal: headline + 6-cell role grid, no founder bios visible above the fold |

---

## Feasibility notes

- **What can be directly built in Next.js + Tailwind + Framer Motion:** All
  12 primitives. Nothing requires WebGL or 3D.
- **What needs adaptation:** P7 (motor-schematic grid) — we already have
  `/westmag/images/stampmotorswhite.png` in `public/`, can reuse as
  background. P4 (comparative split) — needs a "made here" graphic and a
  "built overseas" graphic; can use abstract placeholders for now and
  Jordan/Matthew can iterate.
- **Skip:** None.
- **Notable:** P9 (tabbed numbered panels) adds the *only* interactive
  variant — increases complexity but worth offering as an option for
  Matt + Jordan to react to.
