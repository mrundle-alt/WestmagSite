# Westmag — Pending Changes Punch List

*Cross-cutting tracker of every change captured in the founders meeting +
brand brief + hiring plan that has **not yet been shipped**. Last updated
2026-05-12 after PR #2 (`copy: Hero/Vertical/Scaling edits`) merged.*

**How to use:** Each item has its source, what blocks it, and the
proposed action when unblocked. Items are grouped by category so you can
batch them by who owns the decision.

---

## ✅ Already shipped (for reference, not in scope)

| When | What | Where |
|---|---|---|
| 2026-05-12 | Hero body rewrite + tagline removal | PR #2, commit `9244e54` |
| 2026-05-12 | Vertical Integration heading + card body shortening | PR #2 |
| 2026-05-12 | Scaling Now "in commercial and defense applications" removal | PR #2 |
| 2026-05-11 | `/v3` route + 11 Revolution + 5 Team variants + selector | PR #1, commit `3dd40f3` |

---

## 1. Copy + content (waiting on Matt/Jordan decision)

### 1.1 Robot actuator specs (placeholder still on site)
- **What:** `lib/westmag/content.ts` PRODUCTS[1].specs has three `"22-81MM"` placeholder values for Robot Actuators (Diameter / KV Range / Type).
- **Source:** transcript `[00:34:38]`
- **Blocked on:** Matt to pick the marketing values. Don't aggregate from Kale/Tom/Jacob — decide what to publish.
- **Action when unblocked:** Replace 3× placeholder strings in `content.ts`.

### 1.2 Matt's title on the public team page
- **What:** Matt said "I need to change my title to COO, not CTO" `[00:36:53]`. Current `content.ts` TEAM lists David (CEO) + Jordan (CTO) — Matt isn't on the page at all.
- **Blocked on:** Decide whether to add Matt as Co-Founder & COO on the public page, or treat the CTO→COO line as an internal-doc fix.
- **Action:** Either add a third TEAM member, or leave team as-is and apply the title fix to whatever internal doc had it wrong.

### 1.3 Vertical Integration MANUFACTURE — Japanese partnership claim
- **What:** PR #2 dropped the line "strategic partnership with a leading Japanese motor technology company" from VERTICAL.cards[1].body pending verification.
- **Blocked on:** Confirm if that partnership is real and approved to publish.
- **Action when unblocked:** Restore the claim in the MANUFACTURE card body.

### 1.4 Footer LinkedIn URL
- **What:** `FOOTER.socials[].LinkedIn` is `href: "#"` — broken placeholder.
- **Blocked on:** Real LinkedIn company-page URL, OR decision to drop the LinkedIn entry until ready.
- **Action:** Update href OR remove the LinkedIn social entirely from footer.

### 1.5 Schools list in TEAM.body
- **What:** Current `content.ts` TEAM.body says "draws from Waterloo, UBC, MIT, Cornell, and leaders in automotive scale."
- **Blocked on:** Verify this is current (was likely inherited from the WILL agency draft).
- **Action:** Confirm or replace with what the team actually represents.

### 1.6 Diversity / EEO statement
- **What:** Workable careers page configuration needs an EEO statement. Westmag doesn't currently have one published.
- **Blocked on:** Employment counsel review.
- **Action:** Approve standard EEO wording or skip until first DEI-focused hire pushes back.

---

## 2. Brand assets (waiting on third party)

### 2.1 Founders Fund stacked logo
- **What:** Current `/westmag/logos/founders-fund.svg` is the horizontal mark. Matt asked `[00:26:31]` to swap for the stacked variant so it doesn't sprawl.
- **Blocked on:** Get the stacked SVG from Founders Fund's brand page or via Morgan at a16z.
- **Action when received:** Drop the file into `public/westmag/logos/founders-fund.svg` (overwrite).

### 2.2 Investor strip composition
- **What:** Current `INVESTORS` array lists a16z, Founders Fund, Lux Capital, Menlo Ventures. Matt confirmed Perplexity is NOT being added.
- **Blocked on:** Are Lux + Menlo real investors, or stale agency-era logos? If stale, remove them.
- **Action:** Confirm/correct the array. No code change if all 4 are real.

### 2.3 "America's the sum of its parts" graphic
- **What:** `public/westmag/images/america-motors-graphic.png` likely has the "horrific" treatment Matt flagged. Either fix the image or commission a new one.
- **Blocked on:** Jordan's 8 iterations + Matthew Taylor's design riff (per `[00:31:36]` and `[00:33:49]`).
- **Action when iterations land:** Replace the PNG and/or pick a Revolution variant that doesn't depend on this image (Variants C, F, I, J, K all sidestep it).

### 2.4 Headshots (or no headshots)
- **What:** David is refusing headshots `[00:36:39]`. Team variants B, D, E all work without images. Variant A and C use cards/avatars.
- **Blocked on:** Final call on which Team variant ships.
- **Action:** Pick a Team variant + no-headshot if A is the winner.

---

## 3. Operational (Workable / careers / ATS)

### 3.1 Workable account setup
- **What:** Full 8-step playbook in `Dump/hiring/workable-setup-guide.md`. None of it has been executed yet.
- **Blocked on:** Matt to create the Workable account + decide on subdomain (recommend `westmag.workable.com`) + pick Standard plan tier (~$7K/yr annual).
- **Action when account exists:** I can wire `CAREERS_PROVIDER` in `content.ts` to point at it.

### 3.2 Expand JOBS array on the public site
- **What:** Current `JOBS` array has 1 entry (supply-chain-manager). Matt's bias is "post more, not fewer."
- **Blocked on:** Approve the 8 JDs in `Dump/hiring/roles-for-site.md` (Sr. Manufacturing Eng, Ops Lead, Sr. Motor Design Eng, Controls/Firmware Eng, Test Eng, Quality Eng, Supply Chain Mgr refresh, Production Tech).
- **Action when approved:** Drop the JDs into `content.ts` JOBS array as a single PR. ~30 min of work.

### 3.3 Refresh existing Supply Chain Manager JD
- **What:** Existing JD in `content.ts` is solid but needs: comp band ($150–190K + equity), NDAA / US-Person requirement added, `applyUrl` set once Workable is live.
- **Blocked on:** Workable setup.
- **Action:** Inline edits to `JOBS[0]`.

### 3.4 Production Technician wage benchmark
- **What:** Bay Area manufacturing prevailing wage check on the $28–38/hr range I proposed.
- **Blocked on:** Operations Lead hire OR Matt's direct benchmark check.
- **Action:** Confirm or adjust before going live.

---

## 4. Launch video (still undecided)

### 4.1 Ship / polish / remove decision
- **What:** Current video is 11labs-narrated, no music, lives as Hero background in v2 + v3.
- **Source:** David "I'd rather not have a video than that video" `[00:15:12]`. Matt "I continue to say that for the purpose of the launch the video isn't shit" `[00:14:47]`.
- **Blocked on:** Final call between Matt and David.
- **Options:** (1) ship as-is, (2) ~$500–$1K Upwork polish pass, (3) remove from hero and replace with a static image until polish.

---

## 5. Design iteration evaluation

### 5.1 Pick winning Revolution variant (A–K)
- **What:** 11 variants live at `/v3?revolution=X`. Need a winner so we can promote to `/`.
- **Blocked on:** Matt + Jordan + Matthew Taylor visual review + a16z partner taste check.
- **Action when picked:** Replace `RevolutionV2` import in `app/page.tsx` (or `app/v2/page.tsx`) with the chosen variant. One-line change.

### 5.2 Pick winning Team variant (A–E)
- **What:** 5 variants live at `/v3?team=X`. Same flow as 5.1.
- **Blocked on:** Same as 5.1 + headshot decision (variants B, D, E don't need them).

### 5.3 Jordan's 8 iterations + Matthew Taylor's design
- **What:** Per `[00:31:36]` and `[00:33:49]`, Jordan was going to whip up 8 iterations and Matt was going to loop in Matthew Taylor via WhatsApp.
- **Blocked on:** External — waiting on Jordan + Matthew Taylor.
- **Action when received:** Add as `RevolutionL.tsx`, `RevolutionM.tsx`, etc. — extend `REVOLUTION_VARIANTS` tuple in `useVariant.tsx` and register in `app/v3/page.tsx` REVOLUTION_MAP. Pattern documented in PR #1.

### 5.4 Promote v3 → root (or sunset v2)
- **What:** Currently v1 lives at `/`, v2 at `/v2`, v3 at `/v3`. At launch, only one of these should be public.
- **Blocked on:** 5.1 + 5.2 decisions.
- **Action:** Either delete v1 + v2 routes and rename v3 to root, or promote the chosen Revolution + Team variants into the v2 page and retire v1 + v3.

---

## 6. Hiring plan deliverables (held for later)

Full bundle in `Dump/hiring/`. 12 `[NEEDS YOUR CALL]` items inside `hiring-plan.md`. Highest-leverage 5:

1. Current exact headcount + funding stage + runway months
2. Existing team composition (which of the 10 priority roles are already filled)
3. Customer-driven hire-by dates if any
4. Pick comp philosophy A (Anduril-tier) / B (below-market + heavy equity) / C (market-rate)
5. Confirm or correct comp bands in `hiring-plan.md` Section 4 + the XLSX Comp Bands sheet

---

## 7. a16z launch material (not yet started)

User flagged this as upcoming work in the conversation but we haven't touched it yet:

- **Press / blog / launch announcement** — leans on the same brand brief (`Willsite/.claude/brand-brief.md`)
- **Could include:** press release draft, a16z social post copy, founder LinkedIn announcement template, customer-talking-points one-pager
- **Status:** Ready to start when website iterations are locked.

---

## Quick "what should I push today" view

If you want to make progress in 30 min without external input:

| Order | Action | Time |
|---|---|---|
| 1 | Pick Robot Actuator spec values (Item 1.1) | 10 min |
| 2 | Confirm investor strip composition (Item 2.2) | 2 min |
| 3 | Decide if Matt joins the team page (Item 1.2) | 5 min |
| 4 | Pick Revolution + Team variant winners from `/v3` (Items 5.1, 5.2) | 10 min |
| 5 | Tell me the results — I cut a single PR with all of the above | 3 min on my side |

If you want to make progress in 30 min WITH external dependencies in flight:

| Order | Action | Owner |
|---|---|---|
| 1 | Pull Founders Fund stacked logo from FF brand page | Matt or ask Morgan |
| 2 | Email Workable / sign up for Standard plan | Matt |
| 3 | Confirm Japanese-partnership claim status (Item 1.3) | Matt + David |
| 4 | Drop me the real LinkedIn URL (Item 1.4) | Matt |
| 5 | Send me Jordan's 8 iterations whenever they land (Item 5.3) | Jordan |

---

*Update this doc as items close. When the punch list hits zero, we're
launch-ready.*
