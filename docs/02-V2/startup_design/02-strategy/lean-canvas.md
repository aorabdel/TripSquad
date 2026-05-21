# Lean Canvas: TripSquad

**Phase:** 4 — Strategy (Fast Track)
**Project:** tripsquad-v2
**Date:** 2026-05-20
**Confidence:** Medium (grounded in idea doc and pitch research, but pre-product — all demand signals are inferred, not tested)

---

## 1. Problem (Top 3)

1. **Group decision paralysis.** 6 people can't decide where to eat, what to do, or which day to do it in a WhatsApp thread. Suggestions get buried in 200+ messages. No structure, no voting, no record of decisions.

2. **The organizer's burden.** One person in every group creates the WhatsApp chat, writes the Google Doc itinerary, sets up Splitwise, researches every restaurant, chases opinions, and gets zero thanks. This person bears all the coordination cost.

3. **The trip dies when it ends.** No unified record of the trip — photos scattered across 4 phones, no shared album tagged to the itinerary, no way to revisit or share the experience as a coherent artifact.

## 2. Customer Segments

**Primary:** The Group Trip Organizer
- Age 22-40, English-speaking, iOS user
- Takes 3-6 group trips/year (including weekends)
- The person who always ends up planning
- Currently uses: WhatsApp + Google Docs + Splitwise + Google Maps + Doodle
- Willingness to pay: Moderate-High (they invest the most effort, so they value the tool the most)

**Secondary:** Group Trip Members
- Join via invite link, not through app discovery
- Free users — they're distribution, not revenue
- Convert to organizers for their own trips (viral loop)

## 3. Unique Value Proposition

**"One link. Everyone plans. Nobody downloads a spreadsheet."**

Replace 5 disconnected apps with one shareable link where the group discovers, votes, and decides together — then keeps the trip as a beautiful, shareable memory.

*Supporting UVP:* "The group trip coordinator that replaces WhatsApp + Google Docs + Splitwise."

## 4. Solution

| Problem | Solution |
|---------|----------|
| Group decision paralysis | Shared shortlist with inline voting (yes/no/maybe). Organizer sees ranked results and promotes winners. Structured decisions, not endless chat. |
| Organizer's burden | One-tap invite link. Famous Places feed pre-populates options. Auto-ordered timeline by geography. The app does the organizer's work. |
| Trip dies when it ends | Photos auto-tag to timeline by GPS/timestamp. One tap → shareable interactive web page (map + photos + timeline). Cloneable by viewers. |

## 5. Channels

| Channel | Mechanism | Cost | Expected Impact |
|---------|-----------|------|----------------|
| **Invite links** (primary) | Every trip starts with organizer sharing a link to 4-8 friends | $0 | High — built-in virality, the core distribution mechanic |
| **Public trip pages** (secondary) | Completed trips as SEO-indexable web pages | $0 (hosting marginal) | Medium — long-tail SEO ("5-day Barcelona itinerary"), social sharing |
| **Creator links** (future) | Travel YouTubers link trip pages in video descriptions | $0 (organic) | Medium-High — high-intent viewers, organic installs |
| **App Store Optimization** | Category ranking, keyword optimization | $0 (time investment) | Low-Medium — competitive category |

*No paid marketing.* All channels are organic. This is a constraint (bootstrapping) and a feature (proves product-market fit without artificial growth).

## 6. Revenue Streams

| Stream | Price | Timeline | Confidence |
|--------|-------|----------|------------|
| **Organizer Pro subscription** | $39/year or $4.99/month | Phase 3 (Month 3-4) | High — primary model, Splitwise-validated pattern |
| **Photo book printing** | EUR 36-150/book (partner: Peecho/Printful) | Phase 4 (Month 5-12) | Medium — Polarsteps validated, high margin |
| **Booking affiliates** | 3-8% per booking (Booking.com, GetYourGuide) | Phase 4 (Month 5-12) | Low — requires volume (10K+ monthly trips) |

## 7. Cost Structure

| Cost | Amount | Type |
|------|--------|------|
| Google Places API | ~$85/month (at 1K trips/month) | Variable |
| Supabase | ~$25/month | Fixed (scales with growth) |
| Cloudflare R2 (photos) | ~$20/month (at 1K trips) | Variable |
| Apple Developer Program | $99/year | Fixed |
| Domain + hosting (trip pages) | ~$10/month | Fixed |
| **Total (pre-scale)** | **~$140/month + $99/year** | |
| **Founders' living expenses** | Not included — bootstrapping from savings | Fixed |

Break-even: ~2,000 paying organizers = $78K ARR (covers infrastructure + provides founder income). [Estimate]

## 8. Key Metrics

| Metric | What it measures | Target |
|--------|-----------------|--------|
| **Invite link share rate** | Do organizers actually invite their group? | >80% of trips have 3+ members |
| **Voting participation** | Do group members engage with the shortlist? | >60% of members vote on at least 1 place |
| **Trip completion rate** | Do groups finish planning and go? | >40% of created trips reach "completed" |
| **Public share rate** | Do people share completed trips? | >15% of completed trips made public |
| **Organizer Pro conversion** | Do organizers pay? | >5% of active organizers |
| **Viral coefficient** | Do free members become organizers? | >0.3 (1 in 3 members creates their own trip) |

## 9. Unfair Advantage

**Social lock-in + compounding content inventory.**

1. Once a friend group uses TripSquad for one trip, switching means convincing 4-8 people to move. This is the Splitwise dynamic — the app becomes the default for that group.
2. Every completed public trip is a long-tail SEO asset and a shareable artifact. Content inventory grows with zero marginal creation cost.
3. The organizer-pays model means revenue concentrates on the highest-intent user, not the average user. This is genuinely differentiated in travel planning (Wanderlog charges everyone).

*Note: This is a theoretical unfair advantage. It has not been validated. At pre-product stage, the real unfair advantage is execution speed and willingness to kill the project if metrics don't hit.*

---

## Flags

**Red Flags:**
- No customer validation. Every metric target is an assumption.
- "Social lock-in" is a future moat, not a launch advantage. Day 1 has no moat.

**Yellow Flags:**
- Break-even at 2,000 paying organizers is achievable but requires 40,000 total organizers at 5% conversion. That's significant organic growth from zero.
- Key metrics are defined but thresholds are estimates. Real thresholds should be calibrated after first 50 trips.

## Sources
- Splitwise business model pattern [Data/Estimate]
- Polarsteps photo book revenue model [Data]
- Infrastructure costs from Google Places, Supabase, Cloudflare R2 pricing pages [Data]
- V2 idea document (see `01-idea.md`)
- Pitch research (see `raw/audience-narrative-competitive.md`)
