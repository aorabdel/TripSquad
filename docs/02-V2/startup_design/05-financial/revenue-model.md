# Revenue Model: TripSquad

**Phase:** 7 — Financial (Fast Track)
**Project:** tripsquad-v2
**Date:** 2026-05-20
**Confidence:** Low-Medium (pre-product, all projections are estimates based on comparable company patterns, not validated data)

---

## Pricing Strategy

### Primary: Organizer Pro — $39/year or $4.99/month

**Rationale:**
- Matches Splitwise Pro pricing ($39/year) — same organizer-pays pattern, same target user psychology
- Annual pricing preferred — reduces churn, smooths seasonal revenue, incentivizes multi-trip commitment
- Monthly option exists for try-before-you-commit, but annual should be the default nudge
- $39/year is below the "ask permission" threshold for most employed adults — impulse-compatible

**Who pays:** Only the organizer. Group members (4-8 per trip) are always free.
**Why:** The organizer gets the most value (reduced coordination work). Charging group members creates friction that kills the invite loop. Free members are distribution channels, not lost revenue.

### Free Tier (Fully Functional)
- Unlimited trips
- Up to 8 group members per trip
- Shared shortlist with voting
- Basic timeline
- Photo sync (50 photos per trip)
- 1 public trip link

### Pro Tier (Power Organizer)
- Unlimited group size
- Unlimited photo sync
- Unlimited public trip links
- Date polling
- Expense splitting with multi-currency
- AI timeline suggestions (gap-filling, smart ordering)
- Export to Google Maps/Apple Maps

### Paywall Design
The paywall gates power-organizer features, not core collaboration. No one's trip is blocked because they didn't pay. The free tier must be genuinely useful — Splitwise proved that a generous free tier drives adoption, and the organizer personality upgrades when they hit limits repeatedly.

**Upgrade triggers (designed into the product):**
1. Group size >8 (most common trigger — "I need to add 2 more people")
2. Photo limit hit after second trip ("I want more than 50 photos")
3. Date polling needed ("we can't agree on dates")
4. Multiple public links wanted ("I want to share my Portugal trip too")

---

## Revenue Projections

### Assumptions
- Organizer acquisition: Organic only (invite links + public trip pages). No paid marketing.
- Conversion rate: 5% of active organizers → Organizer Pro. [Assumption — aggressive for consumer apps (typical 2-4%), justified by targeting self-selected high-intent cohort. Splitwise reportedly achieves similar rates among organizer-type users.]
- Churn rate: 30% annual. [Assumption — typical for consumer subscription apps. Travel's seasonal nature may push higher.]
- Viral coefficient: Each organizer brings 5 free members. 20% of free members become organizers for their own trips. [Assumption]
- Growth: Organic, compounding through invite links and public trip pages. No hockey stick.

### Month 1-12 Projections (Conservative)

| Month | Total Organizers | New Organizers | Paying (5%) | MRR | Cumulative ARR |
|-------|-----------------|---------------|-------------|-----|---------------|
| 1 | 50 | 50 | 0 | $0 | $0 |
| 2 | 120 | 70 | 0 | $0 | $0 |
| 3 | 200 | 80 | 10 | $33 | $390 |
| 4 | 350 | 150 | 18 | $58 | $702 |
| 5 | 600 | 250 | 30 | $98 | $1,170 |
| 6 | 1,000 | 400 | 50 | $163 | $1,950 |
| 7 | 1,600 | 600 | 80 | $260 | $3,120 |
| 8 | 2,500 | 900 | 125 | $406 | $4,875 |
| 9 | 3,800 | 1,300 | 190 | $618 | $7,410 |
| 10 | 5,500 | 1,700 | 275 | $894 | $10,725 |
| 11 | 7,800 | 2,300 | 390 | $1,268 | $15,210 |
| 12 | 11,000 | 3,200 | 550 | $1,788 | $21,450 |

*Notes:*
- Months 1-2: No revenue. Building and TestFlight beta.
- Month 3: App Store launch. Organizer Pro paywall goes live.
- Months 3-6: Slow growth — first 5 friend groups, then word-of-mouth.
- Months 7-12: Compounding — public trip pages start generating organic traffic, viral coefficient kicks in.

### Year 1-3 Projections (Three Scenarios)

| Metric | Conservative | Base | Optimistic |
|--------|-------------|------|-----------|
| **Year 1 organizers** | 11,000 | 25,000 | 50,000 |
| **Year 1 paying** | 550 | 1,250 | 2,500 |
| **Year 1 ARR** | $21,450 | $48,750 | $97,500 |
| **Year 2 organizers** | 35,000 | 100,000 | 250,000 |
| **Year 2 paying** | 1,750 | 5,000 | 12,500 |
| **Year 2 ARR** | $68,250 | $195,000 | $487,500 |
| **Year 3 organizers** | 80,000 | 300,000 | 1,000,000 |
| **Year 3 paying** | 4,000 | 15,000 | 50,000 |
| **Year 3 ARR** | $156,000 | $585,000 | $1,950,000 |

### Key Milestones

| Milestone | Organizers Needed | Paying (5%) | ARR | Timeline (Base) |
|-----------|------------------|-------------|-----|----------------|
| **Infrastructure break-even** | 1,000 | 50 | $1,950 | Month 6 |
| **Sustainable (2-person team)** | 50,000 | 2,500 | $97,500 | Month 18-24 |
| **Growth stage** | 200,000 | 10,000 | $390,000 | Year 2-3 |
| **Scale** | 1,000,000 | 50,000 | $1,950,000 | Year 3+ |

---

## Cost Structure

### Fixed Costs (Monthly)

| Item | Cost | Notes |
|------|------|-------|
| Apple Developer Program | $8.25 | $99/year amortized |
| Domain + hosting | $10 | Trip pages, landing page |
| Supabase | $25 | Free tier initially, Pro at ~1K users |
| **Total fixed** | **~$43/month** | |

### Variable Costs (Per 1,000 Active Trips/Month)

| Item | Cost | Notes |
|------|------|-------|
| Google Places API | $85 | ~$17 per 1K Place Details requests |
| Cloudflare R2 storage | $20 | 50 photos/trip × 500KB = 25GB/mo |
| Supabase scaling | $25 | Realtime connections, database rows |
| Push notifications (APNs) | $0 | Free with Apple Developer account |
| **Total variable (at 1K trips)** | **~$130/month** | |

### Unit Economics

| Metric | Value | Source |
|--------|-------|--------|
| Revenue per paying organizer | $39/year ($3.25/month) | Pricing |
| Cost to serve per organizer | ~$1.50/year (infrastructure share) | [Estimate] |
| Gross margin per organizer | ~96% | [Estimate] |
| Customer Acquisition Cost | ~$0 (organic) | [Assumption — no paid marketing] |
| LTV (at 30% annual churn) | ~$90 (2.3 year average lifetime × $39) | [Estimate] |
| LTV:CAC ratio | Effectively infinite (organic) | [Assumption — only holds if organic growth works] |

*Warning:* LTV:CAC ratio of "infinite" is a red flag, not a green one. It means we haven't validated whether organic growth actually works. The true CAC is the founder's time and opportunity cost, which is significant but hard to quantify.

### Sensitivity Analysis

**What if conversion is 2% instead of 5%?**
- Year 1 Base ARR drops from $48,750 to $19,500
- Sustainable (2-person) milestone moves from Month 18-24 to Month 30-36
- Infrastructure still covers itself (low fixed costs)
- Verdict: Slower but still viable for bootstrapping

**What if churn is 50% instead of 30%?**
- Average lifetime drops from 2.3 years to 1.4 years
- LTV drops from ~$90 to ~$55
- Need higher volume to reach same ARR
- Verdict: Manageable — low CAC means even shorter LTV is profitable

**What if organic growth stalls at 5,000 organizers?**
- At 5% conversion: 250 paying = $9,750 ARR
- At 2% conversion: 100 paying = $3,900 ARR
- Verdict: Not sustainable for full-time. Either invest in growth channels or admit the growth thesis failed.

---

## Future Revenue Streams (Not in Year 1)

### Photo Books (Phase 4, Month 5-12)
- Partner with Peecho or Printful for print-on-demand
- Price: EUR 36-150 per book (margins ~40-60%)
- Trigger: Post-trip notification at emotional peak
- Benchmark: Polarsteps generates estimated EUR 5-15M/year on books alone [Estimate]
- TripSquad potential: Even at 1% of completed trips → $5-15 per book margin → meaningful at 10K+ trips/month

### Booking Affiliates (Phase 4, Month 5-12)
- "Book this" buttons on timeline activities linked to Booking.com, GetYourGuide, Viator
- Commission: 3-8% per booking
- Only viable at 10K+ monthly active trips — don't pursue before then
- Benchmark: Affiliate revenue is typically 5-15% of total for travel apps at scale [Estimate]

---

## Flags

**Red Flags:**
- All projections are pre-product estimates. Month-by-month numbers are fiction until validated with real user data.
- "Zero CAC" assumption is technically true (no paid marketing) but hides the real cost: founder time spent on product, growth hacking, and content. The true CAC includes opportunity cost.

**Yellow Flags:**
- 5% conversion assumption is aggressive for consumer apps. 2-3% is more typical. The organizer-pays model may justify the higher rate, but it's unproven.
- Annual churn of 30% means you need 30% year-over-year growth just to maintain flat revenue. At 50% churn (possible for seasonal travel app), you need 50% growth.
- Photo book revenue depends on partnership execution and user willingness to pay for physical products. Polarsteps validated this, but TripSquad's users may behave differently.

## Sources
- Splitwise pricing and business model [Data]
- Polarsteps revenue estimates [Estimate]
- Consumer app conversion benchmarks [Estimate — industry averages]
- Infrastructure pricing: Google Places API, Supabase, Cloudflare R2, Apple Developer [Data — verify current pricing pages]
- V2 idea document and pitch research
