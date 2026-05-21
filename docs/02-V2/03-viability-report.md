# Viability Report: TripSquad V2

**Phase:** 8 — Validation (Fast Track)
**Project:** tripsquad-v2
**Date:** 2026-05-21
**Confidence:** Medium (grounded in research and V1 lessons, but pre-product — all growth assumptions unvalidated)

---

## Executive Summary

**Viability Score: 68/100**

TripSquad V2 is a deliberate, well-structured pivot from V1 (38/100). Every major red flag from V1 has been addressed with a specific structural fix. The group coordination wedge turns a vitamin into a painkiller for the organizer — a real person with real exhaustion. The organizer-pays model ($39/year) follows Splitwise's proven pattern. The competitive gap in group trip coordination is genuine: no funded product owns voting, shortlists, or structured group decisions for travel. The technology stack (SwiftUI + Supabase + R2) makes a 4-week MVP feasible for two engineers at $140/month.

**What changed from V1 (38/100):**
- Vitamin → painkiller for the organizer (narrowed from "all travelers" to "the person who always plans")
- 18-month time-to-differentiation → value on trip #1 (voting works immediately, no AI learning needed)
- Consumer 2-4% conversion → organizer-pays at 5-8% (high-intent segment, Splitwise-validated pattern)
- Cold-start on 3 dimensions → eliminated 2 of 3 (no AI history needed, no content library needed)
- Startup-scale scope → 4-week Phase 1 MVP (pin + shortlist + voting + timeline + invite)

**What hasn't changed (still risky):**
- No customer validation. All pain-point validation is from personal experience and secondary sources.
- "WhatsApp is good enough" is the #1 existential risk and remains untested with real users.
- No designer on a UX-heavy product.
- Organic-only growth is a bet, not a strategy — it only works if the invite link and public trip loops actually compound.

**Bottom line:** V2 is a credible bootstrapped startup thesis. The unit economics work on paper, the competitive gap is real, and the scope is right-sized. But the entire model hinges on one unvalidated assumption: that organizers will share the invite link and groups will actually use it instead of WhatsApp. The kill criteria at weeks 4, 8, and month 4 are the real viability test.

---

## Scoring Breakdown

### Dimension Scores

| # | Dimension | Score | V1 Score | Weight | Weighted |
|---|-----------|:-----:|:--------:|:------:|:--------:|
| 1 | Problem severity | 7/10 | 4/10 | 15% | 1.05 |
| 2 | Market opportunity | 7/10 | 7/10 | 10% | 0.70 |
| 3 | Competitive position | 8/10 | 4/10 | 15% | 1.20 |
| 4 | Execution feasibility | 7/10 | 3/10 | 15% | 1.05 |
| 5 | Business model | 8/10 | 3/10 | 15% | 1.20 |
| 6 | Growth mechanics | 6/10 | 4/10 | 10% | 0.60 |
| 7 | Defensibility | 5/10 | 5/10 | 10% | 0.50 |
| 8 | Risk profile | 6/10 | 3/10 | 10% | 0.60 |
| | **Total** | | | **100%** | **6.90 → 69/100** |

**Final adjusted score: 68/100** (rounded down — no customer validation penalty)

### Verdict Scale

| Range | Verdict |
|-------|---------|
| 75-100 | Strong — build with confidence |
| 60-74 | **Viable — build, but validate early assumptions aggressively** |
| 45-59 | Marginal — significant pivots needed before committing |
| 30-44 | Weak — fundamental issues (V1 scored here) |
| 0-29 | Non-viable — walk away or completely rethink |

**TripSquad V2 verdict: Viable.** The thesis is sound, but execution and early validation will determine if the score holds or collapses.

---

## Dimension Analysis

### 1. Problem Severity — 7/10 (V1: 4/10)

**V1 problem:** "Travel planning is fragmented" — true but tolerable. Vitamin for most people.

**V2 problem:** "The organizer does all the work and gets zero thanks" — still a vitamin for group members, but a genuine painkiller for the organizer. The organizer is a specific, identifiable person who experiences real social costs: resentment, budget fights, trips that never happen.

| Factor | Assessment |
|--------|-----------|
| Problem frequency | High — organizers plan 3-6 trips/year |
| Problem intensity | Medium-High for organizers, Low for group members |
| Buyer = sufferer? | Yes — the organizer is the one who pays and the one who benefits most |
| Current alternatives adequate? | Barely — WhatsApp+Docs works but the organizer absorbs all the pain |
| Willingness to pay | Moderate-High for organizer personality (Splitwise validates this) |

**Why not 8+:** The problem is real but not urgent in the business sense. Nobody loses money or faces a deadline because of bad trip coordination. The organizer is frustrated, not desperate. And "WhatsApp is good enough" for 80%+ of groups.

### 2. Market Opportunity — 7/10 (V1: 7/10)

The market hasn't changed — group travel is large ($880M-$1.3B TAM) and growing (40-50% of leisure travel, 77% want friend trips per Booking.com). What changed is the targeting: V2 focuses on the organizer segment within that market, which is smaller but higher-intent and higher-converting.

| Metric | Value | Confidence |
|--------|-------|:----------:|
| TAM | $880M-$1.3B/year | Medium |
| SAM (English, iOS, 22-40) | $310M-$585M/year | Medium |
| SOM Year 1 (base) | $39K ARR | Low |
| SOM Year 3 (base) | $585K ARR | Low |

**Why not 8+:** SAM math is solid, but "group trip coordination" has no published market category. The 30% "identifiable organizer" rate is an assumption that could swing the TAM significantly. And no travel planning app has ever achieved dominant market share in this space.

### 3. Competitive Position — 8/10 (V1: 4/10)

**V1:** Competing directly with Wanderlog, TripIt, ChatGPT, and every AI planning tool. Crowded, funded, commoditized.

**V2:** The group decision-making layer is wide open. Zero funded competitors have voting, shortlists, or structured group decisions as a core feature. The positioning ("help us decide" not "help me plan") sidesteps the entire crowded AI planning market.

| Gap | Status |
|-----|--------|
| Group voting/shortlists | No competitor — wide open |
| Organizer-pays for planning | No competitor — Splitwise uses it for expenses only |
| Pre-trip + post-trip in one product | No competitor — planners stop at pre-trip, trackers start at during-trip |
| Completed trips as growth assets | No competitor — Strava playbook, not yet applied to travel |

**Why not 9+:** The moat at launch is thin — voting features are copyable in 2-3 months. Real defensibility requires scale (social lock-in, content network effects). Also, the data is from early 2025 — Wanderlog or a new entrant may have moved into this space since then.

### 4. Execution Feasibility — 7/10 (V1: 3/10)

**V1:** Full lifecycle AI trip planner = 2-3 year, 8-10 person product. Impossible for 2 engineers to bootstrap.

**V2:** Phase 1 MVP (pin + shortlist + voting + timeline + invite link) = 4 weeks for 2 experienced engineers. The tech stack (SwiftUI + Supabase Realtime + Google Places + MapKit + R2) is proven and affordable ($140/month).

| Factor | V1 | V2 |
|--------|----|----|
| MVP timeline | 6-9 months | 4 weeks |
| Core dependency | AI learning (needs data) | Voting (works immediately) |
| Infrastructure cost | $500+/month (AI inference) | $140/month (no AI in core) |
| Designers needed? | Yes (critically) | Yes (still a gap, but simpler UX) |
| Revenue timeline | 9-15 months | Month 3-4 |

**Why not 8+:** No designer is a genuine risk for a UX-heavy group coordination product. The feature list beyond Phase 1 (photos, expense splitting, AI suggestions, public pages) is still ambitious for 2 engineers. Scope discipline is not guaranteed.

### 5. Business Model — 8/10 (V1: 3/10)

**V1:** Consumer subscription at 2-4% conversion with 25,000-50,000 MAU needed for $10K/month. Brutal.

**V2:** Organizer-pays at $39/year. Only the organizer sees the paywall. Splitwise validated this exact model and was acquired for >$50M. Group members are free — they're distribution, not revenue.

| Metric | V1 | V2 |
|--------|----|----|
| Price | $5-10/month | $39/year ($3.25/month) |
| Who pays | Every user | Organizer only |
| Conversion target | 2-4% of all users | 5-8% of organizers |
| CAC | Unknown/high | ~$0 organic (if growth loops work) |
| LTV (at 35% churn) | Unknown | ~$111 |
| Gross margin | ~70% (AI costs) | ~95% (no AI in core) |
| Break-even | 25K-50K MAU | ~2,000 paying organizers |

**Why not 9+:** The 5-8% conversion assumption is aggressive for consumer apps (average is 2-4%). It's justified by the organizer-pays logic but completely unvalidated. Annual churn of 30-50% for a seasonal travel app is a real concern — you need 30-50% year-over-year growth just to stay flat.

### 6. Growth Mechanics — 6/10 (V1: 4/10)

**V2 growth loops:**
1. **Invite link loop (Splitwise model):** Organizer shares link → 4-8 members join → 20% become organizers for their own trips → repeat
2. **Public trip loop (Strava model):** Completed trip → shareable web page → viewer clones trip → downloads app → creates their own trip

Both loops are elegant on paper. Neither is validated.

| Factor | Assessment |
|--------|-----------|
| Invite link share rate needed | >80% of trips |
| Viral coefficient needed | >0.3 (1 in 3 members becomes organizer) |
| Public share rate needed | >15% of completed trips |
| Time to compound | 6-12 months minimum |

**Why 6 (not higher):** Organic-only growth is a constraint, not a strategy. If the invite link conversion is low (<50%) or public share rate is low (<10%), growth stalls and there's no paid marketing fallback at $140/month budget. Travel app Day-30 retention benchmarks (3-7%) are concerning. No travel planning app has achieved viral growth at scale through in-product mechanics alone.

### 7. Defensibility — 5/10 (V1: 5/10)

Unchanged from V1 in score, but the nature of the moat is different:

| Moat | V1 | V2 |
|------|----|----|
| At launch | AI learning (needs data → weak) | Voting features (copyable → weak) |
| At scale | Trip history + preferences (strong) | Social lock-in + content network (strong) |
| Timeline to defensible | 12-18 months | 6-12 months |

**The honest assessment:** At launch, TripSquad's moat is thin. The features are copyable in 2-3 months. Real defensibility comes from social lock-in (friend groups embedded in the product) and content network effects (public trips as SEO). Both require scale. The race: acquire enough organizers to build switching costs before Wanderlog, WhatsApp, or a new entrant claims the gap.

### 8. Risk Profile — 6/10 (V1: 3/10)

**V1 risks:** 7 red flags, most structural and unfixable without funding or pivoting.

**V2 risks:** Fewer, more testable, with clear kill criteria.

| Risk | Severity | Testable? | Kill Signal |
|------|----------|:---------:|-------------|
| "WhatsApp is good enough" | High | Yes — Week 4 | Nobody shares the invite link |
| Organic growth doesn't compound | High | Yes — Week 8 | <5% share rate on completed trips |
| Conversion below 5% | Medium | Yes — Month 4 | <2% organizer conversion |
| Scope creep beyond Phase 1 | Medium | Self-imposed | Feature list grows before metrics hit |
| No designer = poor UX | Medium | Observable | App Store ratings <4.0 |
| Platform risk (WhatsApp adds planning) | Low-Medium | Monitor | WhatsApp beta features |
| Seasonal churn spiral | Medium | Year 1 | Annual renewal rate <50% |

**Why 6 (not higher):** The #1 risk (WhatsApp inertia) is existential and has never been overcome by any travel app at scale. The kill criteria are well-designed, but they only tell you *when* to stop — they don't reduce the probability of failure.

---

## V1 → V2 Improvement Map

| V1 Red Flag | V1 Score | V2 Fix | V2 Score | Delta |
|-------------|:--------:|--------|:--------:|:-----:|
| Vitamin, not painkiller | 4/10 | Narrowed to organizer pain (painkiller for one person) | 7/10 | +3 |
| 18+ month time-to-differentiation | 3/10 | Value on trip #1 (voting works immediately) | 7/10 | +4 |
| Consumer economics (2-4% conversion) | 3/10 | Organizer-pays at 5-8% (Splitwise pattern) | 8/10 | +5 |
| Cold-start on 3 dimensions | 3/10 | Eliminated 2 of 3 (no AI data needed, no content library needed) | 7/10 | +4 |
| Startup scope, not side project | 3/10 | 4-week Phase 1 MVP | 7/10 | +4 |
| No revenue for 9-15 months | 3/10 | Revenue from Month 3-4 | 8/10 | +5 |
| Google risk | 4/10 | Google's ad model conflicts with group tools | 6/10 | +2 |
| **Overall** | **38/100** | | **68/100** | **+30** |

---

## Top 3 Validation Experiments

### Experiment 1: The Invite Link Test (Week 1-4)

**Hypothesis:** Organizers will share a TripSquad invite link to their group instead of creating a WhatsApp group or Google Doc.

**Method:**
1. Build Phase 1 MVP: create trip → pin city → Famous Places feed → shortlist → voting → timeline → invite link
2. Recruit 5 real friend groups planning real upcoming trips (personal network)
3. Give the organizer the app. Observe: do they share the link? Do group members join?
4. Track: invite link share rate, group member join rate, time-to-first-vote

**Success criteria:**
- 4 of 5 organizers share the invite link (80%)
- 60%+ of invited members join within 48 hours
- At least 1 group completes shortlisting + voting without reverting to WhatsApp for decisions

**Kill signal:** <3 of 5 organizers share the link, or groups immediately revert to WhatsApp for decision-making.

**Cost:** $0 (the MVP build is happening anyway). 5 friend groups from personal network.

**What it tests:** The single most important assumption — that groups will use a purpose-built tool instead of WhatsApp for trip decisions.

---

### Experiment 2: The Voting Engagement Test (Week 4-8)

**Hypothesis:** Group members will actively vote on shortlisted places, and voting will produce faster, better group decisions than unstructured WhatsApp discussion.

**Method:**
1. From the 5 groups in Experiment 1, track voting behavior in detail
2. Measure: votes per member, time from shortlist creation to decision, organizer satisfaction
3. Compare (qualitative): ask organizers "was this faster than how you usually decide?"
4. Look for the "aha moment" — when does the organizer realize this is better than WhatsApp?

**Success criteria:**
- 60%+ of group members vote on at least 1 place
- Organizers report decisions were faster/easier than WhatsApp (4 of 5)
- At least 1 organizer spontaneously tells a friend about the app

**Kill signal:** <40% of members vote, or organizers say "this wasn't faster than just asking in WhatsApp."

**Cost:** $0 (same groups, same MVP).

**What it tests:** Whether voting is actually useful for group trip decisions, or whether it's a feature that sounds good but doesn't change behavior.

---

### Experiment 3: The Organizer Conversion Test (Month 3-4)

**Hypothesis:** 5%+ of active organizers will pay $39/year for Pro features when they hit a natural upgrade trigger (group size >8, photo limit, date polling).

**Method:**
1. Launch on App Store with free tier + Pro tier paywall
2. Track organizer behavior through the free tier
3. Measure: which upgrade triggers fire most often? What's the conversion rate at each trigger?
4. A/B test: annual ($39) vs monthly ($4.99) default presentation

**Success criteria:**
- 5%+ of organizers who hit an upgrade trigger convert to Pro
- Annual subscription is chosen >60% of the time (vs monthly)
- At least 10 paying organizers within first month of paywall going live

**Kill signal:** <2% conversion at upgrade triggers, or <5 paying organizers in first month.

**Cost:** Apple Developer Program ($99/year, already budgeted).

**What it tests:** Whether the organizer-pays pricing model works at the proposed price point, and which Pro features actually drive upgrades.

---

## Kill Criteria Summary

| Checkpoint | When | Signal | Action |
|-----------|------|--------|--------|
| **Invite link adoption** | Week 4 | <3 of 5 friend groups use the link | Stop. The distribution thesis is dead. |
| **Voting engagement** | Week 8 | <40% member voting participation | Pivot. Voting isn't the wedge — find another hook. |
| **Share rate** | Week 8 | <5% of completed trips shared publicly | Reduce scope. Public trips aren't the growth loop — focus on invite loop only. |
| **Organizer conversion** | Month 4 | <2% organizer conversion to Pro | Reprice or change the paywall. Current model doesn't work. |
| **Growth stall** | Month 6 | <1,000 total organizers | Reassess. Organic growth isn't compounding. Consider paid channels or pivot. |

---

## Flags

**Red Flags:**
- No customer validation has been conducted. All demand signals are inferred from secondary sources and personal experience.
- "WhatsApp is good enough" remains the #1 existential risk and has never been overcome by any travel app.
- Knowledge-based research only (web search unavailable). Competitor states, market data, and new entrants may have changed since early 2025.

**Yellow Flags:**
- 5-8% organizer conversion is aggressive for consumer apps. The Splitwise organizer-pays analogy is compelling but unverified with primary data.
- No designer on a UX-intensive product. First hire should be a designer, not another engineer.
- The 18-24 month competitive window is an estimate. A well-funded team or platform move could close the gap faster.
- Annual churn of 30-50% for a seasonal app means you need significant year-over-year growth just to maintain flat revenue.

**Green Flags:**
- Every V1 red flag has a specific, structural V2 fix — this isn't a cosmetic rebrand, it's a genuine pivot.
- The competitive gap in group trip coordination is real and has persisted for 7+ years.
- Unit economics are favorable if organic growth works: 95%+ gross margin, near-zero CAC for group members, $111 LTV at 35% churn.
- The 4-week Phase 1 MVP is right-sized — you'll know if the core thesis works before over-investing.
- Clear kill criteria prevent prolonged investment in a failing thesis.

## Sources
- V1 Viability Report (38/100) — `docs/01-V1/03-VIABILITY-REPORT.md`
- Market analysis — `docs/02-V2/01-discovery/market-analysis.md`
- Competitor landscape — `docs/02-V2/01-discovery/competitor-landscape.md`
- Revenue model — `docs/02-V2/05-financial/revenue-model.md`
- Lean canvas — `docs/02-V2/02-strategy/lean-canvas.md`
- Pitch session research — `docs/02-V2/raw/`
- RevenueCat 2024, UNWTO, Booking.com surveys, Crunchbase [Data/Estimate]
