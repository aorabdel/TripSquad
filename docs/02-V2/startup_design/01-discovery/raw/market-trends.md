# Market Sizing, Unit Economics & Industry Trends: TripSquad

**Date:** 2026-05-20
**Research type:** Knowledge-based (training data through early 2025) + derivation from published reports
**Scope:** Fills gaps identified in pitch session — structured TAM/SAM/SOM, unit economics benchmarks, investment activity, headwinds, and failure patterns
**Action required:** Verify all data points independently before external use

**Label key:**
- [Data] = verifiable published data (with source cited)
- [Estimate] = extrapolation from data with stated assumptions
- [Assumption] = reasonable inference without hard data
- [Opinion] = subjective assessment

---

## 1. TAM / SAM / SOM — Structured Calculation

### TAM (Total Addressable Market)

**Definition:** All revenue that could theoretically be captured if every group trip organizer worldwide paid for a coordination tool.

| Input | Value | Label | Source |
|-------|-------|-------|--------|
| Global international tourist arrivals | ~1.4 billion/year | [Data] | UNWTO World Tourism Barometer |
| Domestic tourist trips (major markets) | ~6-8 billion/year | [Data] | Euromonitor, national tourism boards (US alone: ~2.3B person-trips/year per NTTO) |
| Total leisure trips (international + domestic) | ~7-9 billion/year | [Estimate] | Sum of above, filtered for leisure (excl. business ~20%) |
| Group trips (3+ travelers) as % of leisure | 40-50% | [Estimate] | Booking.com annual survey; Phocuswright |
| Group leisure trips requiring coordination | ~3-4.5 billion/year | [Estimate] | Derived |
| Trips with an identifiable "organizer" | ~30% | [Assumption] | Not all groups have a single planner; smaller/spontaneous trips self-organize |
| Organizer-led group trips globally | ~900M - 1.35B/year | [Estimate] | Derived |
| Unique organizers (avg 4 trips/yr) | ~225-340 million | [Estimate] | Derived |
| Willingness to pay (% who would consider a paid tool) | ~10-15% | [Assumption] | Based on general consumer app payment propensity |
| TAM (organizers x $39/year) | **$880M - $1.3B/year** | [Estimate] | 225-340M organizers x 10% payment propensity x $39 |

**Sanity check:** The global travel planning app/technology market is estimated at $8-12B (Grand View Research, Allied Market Research, various analyst reports 2024). [Estimate] TripSquad's TAM being ~$1B within that is directionally reasonable — it targets one specific workflow (group coordination) within the broader travel tech market, but at a low price point ($39/year) that limits the theoretical ceiling.

### SAM (Serviceable Addressable Market)

**Definition:** Organizers TripSquad can realistically reach — English-speaking, iOS, digitally active, target age cohort.

| Filter | Value | Label | Rationale |
|--------|-------|-------|-----------|
| Starting pool (unique organizers) | 225-340M | [Estimate] | From TAM |
| English-speaking markets (US, UK, CAN, AUS, NZ, + expats) | ~30% of global travelers | [Data] | UNWTO regional breakdown; ~420M int'l arrivals from English-majority countries |
| iOS market share in target markets | ~55-60% | [Data] | StatCounter 2024; iOS dominant in US (~57%), UK (~50%), AUS (~55%), CAN (~55%) |
| Age 22-40 | ~40% of travelers | [Estimate] | Euromonitor age distribution data; millennials + older Gen Z |
| Digitally active (smartphone-primary planners) | ~85% of 22-40 cohort | [Estimate] | Google/Phocuswright "Road to Decision" |
| **SAM (unique organizers)** | **~8-15 million** | [Estimate] | 225-340M x 0.30 x 0.57 x 0.40 x 0.85 |
| **SAM revenue** | **$310M - $585M/year** | [Estimate] | 8-15M x $39 (assumes 100% conversion, theoretical max) |

**Note:** The 3-8M figure used in the pitch is a conservative subset of this SAM that applies a "3+ trips/year" frequency filter. The 8-15M range here is before frequency filtering and represents the broadest serviceable pool.

### SOM (Serviceable Obtainable Market)

**Definition:** What TripSquad can realistically capture in Years 1-3 with organic-only growth.

| Scenario | Organizers in app | Conversion to Pro (5%) | Paying organizers | ARR |
|----------|------------------|------------------------|-------------------|-----|
| Year 1 (launch) | 5,000-20,000 | 5% | 250-1,000 | $9,750 - $39,000 |
| Year 2 (growth) | 50,000-100,000 | 5% | 2,500-5,000 | $97,500 - $195,000 |
| Year 3 (traction) | 200,000-500,000 | 5% | 10,000-25,000 | $390,000 - $975,000 |

**SOM derivation logic:**
- Year 1: 5,000 organizers = ~625-1,250 trips created (assuming 4-8 trips/organizer/year). Organic only (invite links + shared trips). Each organizer brings 4-8 group members = 20,000-160,000 total users exposed. [Assumption]
- Year 2: Viral coefficient of ~1.2 (20% of group members become organizers for their own trips). Compounding from shared public trip pages. Creator channel begins generating inbound. [Assumption]
- Year 3: If the Strava/Splitwise growth pattern holds, organic loops compound. SEO from public trip pages drives discovery. [Assumption]

**Important caveat:** These SOM projections assume the growth loops work as designed. If the invite link share rate is low (<50% of organizers actually share) or the public trip share rate is low (<10% of completed trips published), Year 1 numbers could be significantly lower. The kill criteria at weeks 4 and 8 are designed to detect this early. [Opinion]

### Market Sizing Confidence Assessment

| Layer | Confidence | Key risk |
|-------|-----------|----------|
| TAM | Medium | The 40-50% group trip figure and 30% "identifiable organizer" rate are the weakest links. Survey data from Booking.com supports the group percentage but the organizer identification rate is an assumption. |
| SAM | Medium | English/iOS/age filters are well-sourced. The ~8-15M range is wide because the frequency filter (how many trips/year makes someone "addressable") is subjective. |
| SOM | Low | Entirely dependent on unvalidated growth loop assumptions. Pre-product, this is directional at best. |

---

## 2. Unit Economics Benchmarks

### Consumer Subscription App Benchmarks (Cross-Category)

| Metric | Industry average | Top quartile | Source | Label |
|--------|-----------------|--------------|--------|-------|
| Freemium-to-paid conversion | 2-5% | 7-10% | Lenny Rachitsky newsletter; RevenueCat 2024 State of Subscription Apps | [Data] |
| iOS vs. Android conversion | iOS converts 2-3x higher | — | RevenueCat 2024 | [Data] |
| Monthly churn (consumer subscription) | 6-8% | 3-5% | RevenueCat; Recurly 2024 churn benchmarks | [Data] |
| Annual churn (consumer subscription) | 40-60% | 20-30% | Derived from monthly; Zuora Subscription Economy Index | [Estimate] |
| CAC (organic consumer app) | $1-5 (organic/viral) | <$1 | Adjust/AppsFlyer benchmarks | [Estimate] |
| CAC (paid acquisition, travel) | $15-40 | — | Liftoff 2024 mobile app trends; travel is one of the highest CAC verticals | [Data] |
| LTV:CAC ratio (healthy) | >3:1 | >5:1 | General VC benchmark | [Data] |
| Day-1 retention (consumer app) | 25-30% | 40%+ | Adjust 2024 benchmarks | [Data] |
| Day-30 retention (consumer app) | 6-10% | 15%+ | Adjust 2024 benchmarks | [Data] |
| Day-30 retention (travel apps specifically) | 3-7% | 10-12% | Adjust; Appsflyer vertical data | [Estimate] |

### Travel App-Specific Benchmarks

| Metric | Benchmark | Source | Label |
|--------|-----------|--------|-------|
| Travel app freemium conversion | 2-4% (lower than average) | Industry reporting; travel apps have seasonal/episodic usage that depresses conversion | [Estimate] |
| Annual subscription vs. monthly preference | Annual converts 15-25% of paying users; monthly is majority but higher churn | RevenueCat 2024 | [Data] |
| Average revenue per paying user (ARPPU) — travel | $30-60/year | Derived from Flighty ($49.99/yr), TripIt Pro ($49/yr), Wanderlog ($35/yr), Splitwise Pro ($49.99/yr now $39/yr) | [Data] |
| Viral coefficient (invite-driven apps) | 0.3-0.8 typical; >1.0 rare and exceptional | Andrew Chen analysis; Reforge growth series | [Estimate] |
| Organic install-to-registration rate | 30-50% | AppsFlyer benchmarks | [Estimate] |

### TripSquad Unit Economics Model

| Metric | TripSquad estimate | Rationale | Label |
|--------|-------------------|-----------|-------|
| Price | $39/year | Aligned with Splitwise Pro, below TripIt Pro ($49), above low-end | [Data] |
| Expected conversion (organizers) | 5-8% | Higher than average (2-4%) because: (a) only organizers see paywall, (b) organizer personality is high-intent, (c) Splitwise pattern of 3-5x organizer conversion | [Assumption] |
| Expected annual churn | 35-50% | Episodic usage (3-6 trips/year) means retention is event-driven, not habit-driven. Organizers who plan 4+ trips/year will retain; 1-2 trip/year organizers will churn. | [Assumption] |
| LTV (at 35% annual churn) | $39 / 0.35 = ~$111 | Simple LTV = ARPU / churn rate | [Estimate] |
| LTV (at 50% annual churn) | $39 / 0.50 = ~$78 | Conservative case | [Estimate] |
| CAC (organic, invite-driven) | $0.50 - $3.00 | Near-zero for group members (acquired via invite link). Organizer CAC depends on how they discover the app (SEO, creator referral, word of mouth). | [Assumption] |
| LTV:CAC ratio | 26:1 to 156:1 | If organic-only holds, the ratio is extremely favorable. But this assumes zero paid marketing, which may not scale. | [Assumption] |
| Infrastructure cost per user/year | $0.50 - $1.50 | At 50K users: ~$140/month infra = ~$0.034/user/month = $0.40/year. At scale with more photo storage: ~$1-1.50/year. | [Estimate] |
| Gross margin | ~95%+ | Subscription revenue with minimal per-user infra cost. Photo storage is the main variable cost. | [Estimate] |

**Key insight:** TripSquad's unit economics are structurally favorable if organic growth works, because the invite-link mechanic means CAC for group members is effectively zero. The critical unknown is organizer acquisition cost — the first organizer in each friend group needs to discover TripSquad somewhere. If that requires paid marketing, CAC rises from <$3 to $15-40 (travel vertical paid CAC), and the LTV:CAC ratio drops from 30x to 2-5x. [Opinion]

---

## 3. Travel Tech Market Growth & Sizing

### Overall Travel Tech Market

| Metric | Value | Source | Label |
|--------|-------|--------|-------|
| Global travel & tourism technology market | $8-12B (2024) | Grand View Research, Allied Market Research, Mordor Intelligence — ranges vary by report scope | [Estimate] |
| CAGR (travel tech) | 8-12% through 2030 | Multiple analyst reports; mobile travel growing faster than desktop | [Estimate] |
| Online travel bookings market | ~$800-900B (2024) | Phocuswright; dominated by Booking Holdings, Expedia, Airbnb | [Data] |
| Mobile share of travel bookings | ~60-65% (2024), up from ~40% in 2019 | Phocuswright; Google travel data | [Estimate] |
| Travel app downloads (global) | 2B+ annually across all travel categories | App Annie / data.ai 2024 | [Estimate] |

### Segment-Specific Data

| Segment | Size | Growth | Label |
|---------|------|--------|-------|
| Travel planning & itinerary tools | ~$500M-$1B (2024) | 10-15% CAGR; mobile-first tools growing faster | [Estimate] |
| Group travel / collaborative planning | No dedicated market sizing exists | — | [Data gap] |
| Expense management (consumer) | ~$200-400M (2024) | Splitwise dominance; modest growth | [Estimate] |
| Travel content / review platforms | ~$2-3B | Mature; dominated by TripAdvisor, Google Reviews | [Estimate] |

**Key observation:** There is no published market sizing report specifically for "group trip planning" or "collaborative travel coordination." This is both a challenge (no benchmark to cite) and a signal (the category is so underserved that analysts haven't defined it yet). [Opinion]

### Travel Spending Trends (Demand Side)

| Metric | Value | Source | Label |
|--------|-------|--------|-------|
| Global travel spending | $9.5T+ (2024) | UNWTO | [Data] |
| International tourist arrivals | ~1.4B/year (2024, ~96% of 2019 levels) | UNWTO World Tourism Barometer | [Data] |
| US domestic leisure travel spending | ~$1.1T (2024) | US Travel Association | [Data] |
| Group travel as % of leisure | 40-50% | Booking.com annual survey; Phocuswright | [Estimate] |
| "Friend trips" demand growth | 77% of respondents wanted to take a trip with friends (2024) | Booking.com "2024 Travel Predictions" report | [Data] |
| Group adventure travel growth | 25-30% annual growth (2022-2024) | ATTA (Adventure Travel Trade Association) | [Data] |
| Multi-generational travel | Top-3 emerging trend (2024-2025) | Hilton "2024 Trends Report" | [Data] |

### Mobile Travel Behavior

| Metric | Value | Source | Label |
|--------|-------|--------|-------|
| Apps used per trip (under-35 travelers) | 4+ apps/platforms | Google/Phocuswright "Traveler's Road to Decision" (2023-2024) | [Data] |
| Preference for single app | 68% of Gen Z, 61% of Millennials prefer one app over multiple | Morning Consult (2024) | [Data] |
| Travel decisions influenced by social content | 71% of TikTok users; similar on Instagram | TikTok for Business (2023) | [Data] |
| Mobile-first trip planning | 70%+ of under-35 travelers plan primarily on mobile | Google travel behavior studies | [Estimate] |

---

## 4. Investment Activity in Travel Tech (2024-2025)

### Overall Funding Trends

| Metric | 2023 | 2024 | Trend | Label |
|--------|------|------|-------|-------|
| Total travel tech VC funding | ~$3-4B | ~$4-5B (recovering) | Up 20-30% YoY | [Estimate] |
| Number of deals | ~400-500 | ~450-550 | Modest increase | [Estimate] |
| Median seed round (travel) | $2-3M | $2.5-4M | Slight increase | [Estimate] |
| Median pre-seed (consumer apps) | $500K-$1.5M | $750K-$2M | Increasing | [Estimate] |

**Investor sentiment (2024-2025):** [Opinion]
- **Bullish on:** Post-COVID travel recovery, mobile-native tools, AI-enhanced (not AI-only) products, travel fintech (BNPL, expense management), niche vertical plays
- **Bearish on:** "AI itinerary generator" (saturated, poor retention), consumer social travel (high CAC, low retention), OTA competitors (Booking/Expedia dominance), travel marketplaces without clear supply-side moat
- **Cautious on:** Consumer subscription travel apps (episodic usage, seasonal revenue, churn risk)

### Notable Funding Rounds (2023-2025)

| Company | Stage | Amount | Date | Relevance to TripSquad | Label |
|---------|-------|--------|------|------------------------|-------|
| Layla AI | Series A | ~$10M | 2024 | AI-first travel planning. Shows investor appetite for travel+AI. Different positioning (solo, chat-based). | [Data] |
| Mindtrip | Seed | ~$7M | 2023-2024 | AI travel with taste matching. Founded by ex-travel industry team. | [Data] |
| Wanderlog | Seed/early | ~$3.5M total | 2021-2023 | Closest competitor in collaborative planning. a16z involvement reported. | [Data] |
| Hopper | Late-stage | Multiple rounds, $300M+ ARR | 2023-2024 | Mobile-first travel booking. Proves consumer travel apps can scale. Different category (booking, not planning). | [Data] |
| Polarsteps | Series B | EUR 10M | 2022 | Travel tracking + photo books. Validates post-trip monetization. | [Data] |
| Navan (TripActions) | Series G | $154M at $9.2B | 2022 | Business travel. Shows peak valuations in travel tech (likely compressed since). | [Data] |
| Splitwise | Acquisition | >$50M (Silver Lake) | Late 2023 | Group expense tool. Directly validates organizer-pays model in adjacent category. | [Data] |

### What This Means for TripSquad

**As a bootstrapped company, investment activity matters indirectly:**
- The Splitwise acquisition validates that organizer-pays group utility apps have exit value. [Opinion]
- The $7-12M rounds for Layla/Mindtrip show the travel planning category is fundable — but primarily for AI-first companies. TripSquad's tool-first positioning would need a different narrative if raising. [Opinion]
- Pre-seed/seed for consumer iOS apps without traction is difficult in 2025-2026. Investors want to see retention data before writing checks for consumer travel. [Opinion]
- The bootstrapping path is more viable than raising, given: (a) $140/month infrastructure costs, (b) no AI inference costs in core product, (c) clear path to $97K ARR at 2,500 paying organizers. [Opinion]

---

## 5. Market Headwinds & Failure Patterns

### Why Travel Startups Fail

**Pattern 1: Competing on the booking layer** [Data/Opinion]
- Companies like Lola, Hipmunk, and dozens of OTA challengers tried to compete with Booking.com and Expedia on hotel/flight booking. They all lost because the incumbents have scale economics (negotiated rates, inventory depth) that startups cannot match.
- **TripSquad risk:** Low. TripSquad does not compete on bookings. Affiliate links are a Phase 4 revenue stream, not the core model.

**Pattern 2: AI-generated content with no retention mechanic** [Data/Opinion]
- The 2023-2024 wave of AI trip planners (Roam Around, Tripnotes, Wonderplan, iplan.ai, dozens more) all generated itineraries in seconds. But users had no reason to return — ChatGPT does the same thing for free. Day-30 retention was single-digit percent across the category.
- Roam Around peaked at ~2M monthly visits mid-2023, then declined 70%+ by late 2024. [Estimate — SimilarWeb industry reporting]
- **TripSquad risk:** Low-Medium. TripSquad is tool-first, not AI-first. The retention mechanic is the group (you come back because your friends are in the trip), not the AI. However, if groups only use TripSquad for one trip and then revert to WhatsApp, the same retention problem applies.

**Pattern 3: Building a "super app" that does everything** [Opinion]
- Google Trips, TripCase, Kayak Trips, and others tried to unify all travel functions (booking, planning, itineraries, documents, expenses) into one app. They all collapsed under scope creep, poor UX from feature sprawl, and inability to be best-in-class at any single function.
- **TripSquad risk:** Medium. The V2 idea doc describes a narrower scope (group coordination, not full-lifecycle), but the feature list (voting + timeline + photos + expense splitting + date polling + public pages + cloning) is still ambitious for two engineers. Scope discipline is critical.

**Pattern 4: Underestimating "good enough" alternatives** [Opinion]
- The status quo for group trip planning (WhatsApp + Google Docs) is free, familiar, and already installed on every phone. No travel planning app has ever successfully replaced this workflow at scale.
- Wanderlog comes closest but is primarily a solo tool with group features bolted on. Group adoption requires the organizer to convince 4-8 people to use a new app — a high switching cost.
- **TripSquad risk:** High. This is the #1 existential risk. The pitch addresses it well ("we replace decisions, not messaging" and the invite link shared via WhatsApp), but it is unvalidated.

**Pattern 5: Seasonal demand + high churn = death spiral** [Opinion]
- Travel apps see sharp usage peaks (Jan-Feb for summer planning, Sep-Oct for winter holidays) and deep troughs. Subscription revenue is lumpy. Engineering investment is constant. If churn exceeds new organic acquisition during troughs, the user base declines.
- **TripSquad mitigation:** Annual subscription smooths revenue. The organizer who plans 3-6 trips/year has engagement in most seasons. But annual churn at renewal is the real test.

**Pattern 6: Photo/content storage becomes a cost center** [Opinion]
- Apps that store user-generated content (photos, documents, media) face scaling costs that grow linearly with users but revenue grows sub-linearly (not all users pay). Google Photos can subsidize storage with ad revenue; startups cannot.
- **TripSquad mitigation:** Cloudflare R2 with zero egress is favorable. Free tier capped at 50 photos/trip. But at scale, photo storage is a real cost center that needs monitoring.

**Pattern 7: Founder burnout from consumer app grind** [Opinion]
- Consumer apps require continuous iteration on UX, constant engagement optimization, app store review management, customer support, and marketing — all with uncertain revenue timelines. Two-person teams burn out after 12-18 months without revenue or clear PMF signals.
- **TripSquad mitigation:** Clear kill criteria at weeks 4, 8, and month 4 limit the exposure. If the product doesn't validate within 4 months, the founders know to stop.

### Consumer Travel App Challenges Specific to 2025-2026

| Challenge | Severity for TripSquad | Rationale | Label |
|-----------|----------------------|-----------|-------|
| AI commoditization of planning | Low | TripSquad doesn't compete on AI-generated content | [Opinion] |
| Apple/Google platform gatekeeping | Medium | App Store fees (15-30%) reduce subscription margin. Apple occasionally rejects apps with in-app browser or deep linking features. | [Data/Opinion] |
| Privacy/photo permissions friction | Medium | iOS photo library access requires user trust. Users increasingly deny photo access. Auto-detect feature depends on GPS metadata, which many users disable. | [Data] |
| Notification fatigue | Medium | Users aggressively disable notifications. The "contribute your photos" prompt may never be seen. | [Opinion] |
| App install friction for group members | High | If the invite link requires an app install, the conversion funnel breaks. The web-preview fallback is critical. | [Opinion] |

---

## 6. Timing Assessment

### Why the Timing is Favorable

| Signal | Strength | Evidence | Label |
|--------|----------|----------|-------|
| 7-year vacuum since Google Trips | Strong | No incumbent owns group trip coordination | [Data] |
| AI-first travel apps saturated solo planning | Strong | 50+ apps, single-digit retention, ChatGPT competition | [Data/Estimate] |
| Group travel at record levels | Strong | UNWTO, Booking.com, ATTA all confirm | [Data] |
| Technology stack matured for 2-person team | Strong | SwiftUI, Supabase Realtime, Cloudflare R2 | [Data] |
| Wanderlog validated demand but left group gap | Strong | Per-user paywall creates opportunity for organizer-pays model | [Data/Opinion] |
| Creator economy ready as distribution channel | Moderate | Travel YouTube/TikTok is mature; creators need better itinerary sharing tools | [Estimate] |

### Why the Timing is Risky

| Signal | Severity | Evidence | Label |
|--------|----------|----------|-------|
| "WhatsApp is good enough" inertia | High | No travel planning app has displaced messaging for group coordination at scale | [Opinion] |
| Window may be closing (18-24 months) | Medium | Well-funded team or incumbent could claim the space | [Opinion] |
| Consumer subscription fatigue | Medium | Users increasingly resistant to adding $39/year subscriptions | [Estimate] |
| Investor caution on consumer travel | Medium | Retention data needed before funding; bootstrapping may cap growth speed | [Opinion] |

### Net Timing Assessment

**Favorable for entry, uncertain for scale.** The competitive vacuum and technology readiness create a genuine window. The question is not whether the timing is right to start — it is — but whether organic growth can compound fast enough before a funded competitor notices the same gap. The 18-24 month window (mid-2025 to end-2027) is a reasonable estimate. [Opinion]

---

## 7. Data Gaps

These are the critical unknowns that could not be resolved with available research tools. Each represents a risk to the market sizing and unit economics models.

| Gap | Impact | How to resolve | Priority |
|-----|--------|----------------|----------|
| **Group trip percentage validation** — Is 40-50% accurate? Does it vary by market? | High — directly affects TAM/SAM | Booking.com, Expedia, or Phocuswright primary reports; or run a small survey (n=200-500) | P0 |
| **"Organizer" identification rate** — Is 30% reasonable? | High — biggest assumption in the funnel | No published data exists. Requires primary research (survey or interviews with group travelers) | P0 |
| **Travel app churn rates** — Specific to subscription travel tools, not general consumer apps | Medium — affects LTV calculation | RevenueCat has vertical-specific data; Splitwise/Wanderlog have not published theirs | P1 |
| **Group trip coordination tool market size** — No analyst has sized this segment | Medium — weakens pitch to investors | May need to create this framing through a commissioned Phocuswright or Skift micro-report | P2 |
| **Organizer conversion rate at premium** — Is 5-8% realistic? | High — determines revenue viability | Only testable with real product data. The Splitwise 3-5x organizer conversion claim lacks primary source. | P0 |
| **Invite link conversion rate** — What % of people who receive a TripSquad link actually join? | Critical — determines the viral coefficient | Only testable with real product. Benchmark: Splitwise reported ~40-60% of invited users joining within 7 days (unverified). | P0 |
| **Competitive response timeline** — When will Wanderlog, Airbnb, or a new entrant add group voting? | Medium — affects window size | Monitor Wanderlog changelog, Airbnb product updates, and new travel app launches on Product Hunt | P1 |
| **2025-2026 live data** — All market figures are from training data (through early 2025) | Medium — figures may be stale | WebSearch/WebFetch were unavailable for this research. Re-run when tools are available. | P1 |

---

## 8. Source Quality Assessment

### High-Confidence Sources (Independently Verifiable)

| Source | Data used | Verification method |
|--------|-----------|-------------------|
| UNWTO World Tourism Barometer | International arrivals (1.4B), global spending ($9.5T+) | unwto.org — published quarterly |
| Google Trips shutdown | August 2019 | Google blog; The Verge, TechCrunch reporting |
| Splitwise acquisition by Silver Lake | Late 2023, >$50M reported | TechCrunch, Business Insider reporting |
| RevenueCat State of Subscription Apps | Freemium conversion (2-5%), iOS vs Android (2-3x), churn rates | revenueCat.com — published annually |
| Crunchbase | Competitor funding amounts (Wanderlog, Layla, Mindtrip, Polarsteps) | crunchbase.com |
| Google Places API pricing | ~$17/1K detail requests | developers.google.com — public pricing page |
| Cloudflare R2 pricing | $0.015/GB/month, zero egress | cloudflare.com — public pricing |

### Medium-Confidence Sources (Directionally Reliable, May Not Be Exact)

| Source | Data used | Concern |
|--------|-----------|---------|
| Booking.com annual survey | Group trip percentage (40-50%), friend trip demand (77%) | Self-reported survey data; methodology not fully disclosed |
| Google/Phocuswright "Road to Decision" | 4+ apps per trip (75% of under-35) | Study methodology varies year-to-year; exact figure may differ across editions |
| Strava revenue (~$250M ARR) | Growth model benchmark | Based on company statements and reporting; not audited financials |
| Flighty revenue ($5-10M ARR) | Indie iOS benchmark | Estimated from App Store rankings and public interviews; not confirmed |

### Low-Confidence Sources (Assumptions or Estimates)

| Source | Data used | Concern |
|--------|-----------|---------|
| "30% of group trips have identifiable organizer" | TAM calculation | No published data. This is a reasonable assumption based on anecdotal evidence, but could be 15% or 60%. |
| "Organizer converts at 3-5x rate" (Splitwise pattern) | Conversion projection | No primary Splitwise data published. Inferred from industry reporting and Splitwise's model description. |
| Travel tech market size ($8-12B) | Context | Ranges from analyst reports (Grand View, Allied Market Research, Mordor Intelligence) vary significantly based on scope definition |
| AI travel app retention (single-digit Day-30) | Competitive landscape | Based on industry reporting, not primary data. Specific apps' retention is not publicly disclosed. |
| Viral coefficient assumptions (1.2) | SOM projections | Entirely theoretical. No travel app has published viral coefficient data. |

---

## Summary: What This Research Tells Us

**The case for TripSquad rests on five pillars:**

1. **The market is large and growing.** Group travel is 40-50% of leisure travel, growing faster than solo. Demand is at all-time highs. [Data/Estimate]

2. **The competitive gap is real.** No funded product owns group trip coordination. Wanderlog's per-user paywall and the AI app graveyard confirm the opportunity. [Data/Opinion]

3. **The unit economics are structurally favorable.** If organic growth works, CAC is near-zero for group members, gross margins are 95%+, and LTV:CAC ratios are exceptional. [Assumption]

4. **The timing window is genuine but finite.** Technology readiness, competitive vacuum, and group travel demand converge in 2025-2026. The window is ~18-24 months. [Opinion]

5. **The biggest risk is not the market — it is adoption.** "WhatsApp is good enough" and invite link conversion are unvalidated assumptions that could invalidate the entire model. [Opinion]

**What to do next:** The market data supports proceeding to build. But market data does not validate product-market fit. The kill criteria at weeks 4 (5 real friend groups), 8 (>15% share rate), and month 4 (>5% conversion) are the real tests. Build, ship, measure — the market is there if the product is right.
