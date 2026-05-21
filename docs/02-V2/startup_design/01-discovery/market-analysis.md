# Market Analysis: TripSquad

**Phase:** 3 — Research (Fast Track)
**Project:** tripsquad-v2
**Date:** 2026-05-21
**Confidence:** Medium (knowledge-based research, not live web data — all figures from training data through early 2025)

---

## Market Sizing

### TAM — $880M - $1.3B/year

All revenue that could be captured if every group trip organizer worldwide paid for a coordination tool.

| Input | Value | Label |
|-------|-------|-------|
| Global leisure trips (international + domestic) | ~7-9B/year | [Estimate] |
| Group trips (3+ travelers) | 40-50% of leisure | [Estimate — Booking.com survey, Phocuswright] |
| Trips with identifiable "organizer" | ~30% | [Assumption — weakest link in the chain] |
| Unique organizers (avg 4 trips/yr) | ~225-340M | [Estimate] |
| Willingness to pay | ~10-15% | [Assumption] |
| **TAM** | **$880M - $1.3B/year** | [Estimate] |

**Sanity check:** Global travel planning app/technology market is estimated at $8-12B (Grand View Research, Allied Market Research). TripSquad's ~$1B TAM within that is directionally reasonable for one specific workflow at a $39/year price point.

### SAM — $310M - $585M/year

Organizers TripSquad can realistically reach: English-speaking, iOS, age 22-40, digitally active.

| Filter | Value | Label |
|--------|-------|-------|
| English-speaking markets | ~30% of global travelers | [Data — UNWTO] |
| iOS market share in target markets | ~55-60% | [Data — StatCounter] |
| Age 22-40 | ~40% of travelers | [Estimate — Euromonitor] |
| Digitally active | ~85% of 22-40 cohort | [Estimate] |
| **SAM (unique organizers)** | **~8-15M** | [Estimate] |
| **SAM revenue** | **$310M - $585M/year** | [Estimate — theoretical max at 100% conversion] |

The 3-8M figure used in the pitch is a conservative subset applying a "3+ trips/year" frequency filter.

### SOM — Year 1-3 Projections

| Scenario | Organizers | Paying (5%) | ARR |
|----------|-----------|-------------|-----|
| Year 1 | 5,000-20,000 | 250-1,000 | $9,750 - $39,000 |
| Year 2 | 50,000-100,000 | 2,500-5,000 | $97,500 - $195,000 |
| Year 3 | 200,000-500,000 | 10,000-25,000 | $390,000 - $975,000 |

**SOM confidence: Low.** Entirely dependent on unvalidated growth loop assumptions. Pre-product, this is directional at best.

---

## Market Growth & Timing

### Travel Tech Market

| Metric | Value | Label |
|--------|-------|-------|
| Global travel tech market | $8-12B (2024) | [Estimate — analyst reports] |
| CAGR | 8-12% through 2030 | [Estimate] |
| Mobile share of travel bookings | ~60-65% (2024) | [Estimate — Phocuswright] |
| Group travel as % of leisure | 40-50%, growing faster than solo | [Estimate] |

### Demand Signals

| Signal | Data Point | Label |
|--------|-----------|-------|
| "Friend trips" demand | 77% of respondents want to take a trip with friends | [Data — Booking.com 2024] |
| Group adventure travel growth | 25-30% annual growth (2022-2024) | [Data — ATTA] |
| Apps used per trip (under-35) | 4+ apps/platforms | [Data — Google/Phocuswright] |
| Preference for single app | 68% Gen Z, 61% Millennials | [Data — Morning Consult] |
| Mobile-first planning (under-35) | 70%+ | [Estimate — Google] |

### The Category Gap

There is no published market sizing report for "group trip planning" or "collaborative travel coordination." This is both a data gap (no benchmark to cite) and a signal (the category is so underserved that analysts haven't defined it). [Opinion]

### Timing Window

**Favorable for entry, uncertain for scale.**

| Favorable Signal | Strength |
|-----------------|----------|
| 7-year vacuum since Google Trips (2019) | Strong |
| AI-first travel apps saturated solo planning with poor retention | Strong |
| Group travel at record demand levels | Strong |
| Tech stack matured for 2-person build (SwiftUI + Supabase + R2) | Strong |
| Wanderlog validated demand but left group gap open | Strong |

| Risk Signal | Severity |
|------------|----------|
| "WhatsApp is good enough" inertia | High |
| Window may close in 18-24 months | Medium |
| Consumer subscription fatigue | Medium |
| Investor caution on consumer travel | Medium |

---

## Unit Economics Benchmarks

### Industry Averages (Consumer Subscription Apps)

| Metric | Average | Top Quartile | Label |
|--------|---------|-------------|-------|
| Freemium-to-paid conversion | 2-5% | 7-10% | [Data — RevenueCat 2024] |
| iOS vs Android conversion | iOS 2-3x higher | — | [Data — RevenueCat] |
| Monthly churn (consumer) | 6-8% | 3-5% | [Data — RevenueCat, Recurly] |
| Annual churn (consumer) | 40-60% | 20-30% | [Estimate] |
| Day-30 retention (travel apps) | 3-7% | 10-12% | [Estimate — Adjust, AppsFlyer] |
| CAC organic (consumer) | $1-5 | <$1 | [Estimate] |
| CAC paid (travel) | $15-40 | — | [Data — Liftoff 2024] |

### TripSquad Unit Economics Model

| Metric | Estimate | Rationale | Label |
|--------|---------|-----------|-------|
| Price | $39/year | Splitwise-aligned | [Data] |
| Expected conversion | 5-8% | Organizer-focused paywall, high-intent segment | [Assumption] |
| Expected annual churn | 35-50% | Episodic usage, event-driven not habit-driven | [Assumption] |
| LTV (35% churn) | ~$111 | $39 / 0.35 | [Estimate] |
| LTV (50% churn) | ~$78 | $39 / 0.50 | [Estimate] |
| CAC (organic) | $0.50-$3.00 | Near-zero for group members via invite links | [Assumption] |
| LTV:CAC ratio | 26:1 to 156:1 | Only if organic-only holds | [Assumption] |
| Infrastructure cost/user/year | $0.50-$1.50 | Scales with photo storage | [Estimate] |
| Gross margin | ~95%+ | Subscription with minimal infra cost | [Estimate] |

**Key insight:** Unit economics are structurally favorable IF organic growth works. The invite-link mechanic makes group member CAC effectively zero. The critical unknown is organizer acquisition cost — the first organizer in each friend group needs to discover TripSquad somewhere. If that requires paid marketing, CAC rises from <$3 to $15-40, and LTV:CAC drops from 30x to 2-5x.

---

## Investment Activity (2024-2025)

### Relevant Funding Rounds

| Company | Stage | Amount | Relevance |
|---------|-------|--------|-----------|
| Splitwise | Acquisition (Silver Lake) | >$50M | Validates organizer-pays group utility at exit |
| Layla AI | Series A | ~$10M | AI travel planning appetite, different axis |
| Mindtrip | Seed | ~$7M | AI personalization, solo-focused |
| Wanderlog | Seed/early | ~$3.5M total | Closest competitor, collaborative planning |
| Polarsteps | Series B | EUR 10M | Validates post-trip monetization |

### Investor Sentiment

- **Bullish on:** Post-COVID recovery, mobile-native tools, AI-enhanced (not AI-only), niche vertical plays
- **Bearish on:** "AI itinerary generators" (saturated), consumer social travel (high CAC), OTA competitors
- **For TripSquad:** Bootstrapping path is more viable than raising. $140/month infrastructure, no AI inference costs, clear path to $97K ARR at 2,500 paying organizers.

---

## Market Failure Patterns

Seven documented patterns for travel startup failures, ranked by TripSquad exposure:

| Pattern | TripSquad Risk | Why |
|---------|:---:|-----|
| Underestimating "good enough" alternatives | **High** | WhatsApp+Docs is free and familiar. #1 existential risk. |
| Scope creep / super-app | **Medium** | Feature list is ambitious for 2 engineers. Discipline required. |
| Seasonal demand + high churn | **Medium** | Annual subscription mitigates. 3-6 trips/year organizers help. |
| Photo storage as cost center | **Low-Medium** | R2 zero-egress helps. Free tier capped at 50 photos. |
| Founder burnout | **Low-Medium** | Kill criteria at weeks 4, 8, month 4 limit exposure. |
| Competing on bookings | **Low** | Not in the booking layer. Affiliates are Phase 4. |
| AI content without retention | **Low** | Tool-first, not AI-first. Group is the retention mechanic. |

---

## Critical Data Gaps

| Gap | Impact | Resolution |
|-----|--------|-----------|
| Group trip % validation (is 40-50% accurate?) | High — affects TAM | Primary research or Phocuswright report |
| "Organizer" identification rate (is 30% reasonable?) | High — biggest assumption | Requires survey or interviews |
| Invite link conversion rate | Critical — determines viral coefficient | Only testable with real product |
| Organizer conversion at 5-8% | High — determines revenue viability | Only testable with real product |
| Travel app churn rates (subscription-specific) | Medium — affects LTV | RevenueCat vertical data |
| 2025-2026 live data | Medium — figures may be stale | Re-run with web search enabled |

---

## Flags

**Red Flags:**
- All market sizing depends on two unverified assumptions: "40-50% of leisure trips are group trips" and "30% have an identifiable organizer." If either is significantly lower, TAM shrinks proportionally.
- SOM projections are entirely theoretical. Zero validated data on growth loops.

**Yellow Flags:**
- No published market report sizes "group trip coordination" as a category. This makes investor pitches harder but also signals an underserved niche.
- Knowledge-based research only — all figures should be verified with live web data before external use.
- Travel app Day-30 retention benchmarks (3-7%) are concerning. TripSquad's group mechanic may improve this, but it's unproven.

## Sources
- UNWTO World Tourism Barometer [Data]
- RevenueCat 2024 State of Subscription Apps [Data]
- Booking.com 2024 Travel Predictions [Data]
- Google/Phocuswright "Road to Decision" [Data]
- Morning Consult consumer preferences [Data]
- Adjust/AppsFlyer mobile benchmarks [Data]
- Grand View Research, Allied Market Research [Estimate — ranges vary by report scope]
- Crunchbase funding data [Data]
- V2 idea document, pitch session research
