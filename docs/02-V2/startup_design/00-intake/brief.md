# Intake Brief: TripSquad V2

**Phase:** 1 — Intake
**Project:** tripsquad-v2
**Date:** 2026-05-20
**Confidence:** High (extensive prior work from V1 viability report + V2 pitch session)

---

## The Idea

**Problem:** Every group trip runs on 5 disconnected apps (WhatsApp, Google Docs, Splitwise, Google Maps, Doodle). The organizer — the friend who always plans — does all the work. Group coordination has real social costs: resentment, budget fights, trips that never happen.

**Solution:** iOS-first group trip app. Drop a pin → share a link → everyone adds places to a shared shortlist → vote (yes/no/maybe) → organizer promotes winners to a day-by-day timeline. Photos auto-tag by GPS/timestamp. Completed trips become shareable interactive web pages.

**Trigger:** Personal experience planning group trips + V1 viability analysis scored the AI-first vision 38/100. V2 is a deliberate pivot from AI-first to group-coordination-first to address every V1 red flag.

**Existing work:** Comprehensive idea document, pitch narratives, competitive research, timing thesis. No prototype or code yet.

## The Founders

- **Team:** Two experienced agentic software engineers. Full-stack, mobile + backend.
- **Commitment:** Full-time.
- **Budget/Runway:** Bootstrapping. Infrastructure budget: ~$140/month.
- **Domain expertise:** Personal travel experience. No travel industry background.
- **Design:** No designer on team. First hire after validation.

## The Market

- **Ideal customer:** The group trip organizer. Age 22-40, English-speaking, iOS, 3+ trips/year.
- **Current alternatives:** WhatsApp + Google Docs + Splitwise (free, familiar, fragmented).
- **Known competitors:** Wanderlog (~$3.5M funded), Splitwise (acquired >$50M), TripIt (acquired $120M), Polarsteps (EUR 10M Series B), Layla AI (~$12M), Mindtrip (~$7M), ChatGPT.
- **Geography:** English-speaking markets first (US, UK, Australia, Canada).

## The Business

- **Revenue model:** Organizer Pro — $39/year or $4.99/month. Group members always free.
- **Pricing rationale:** Splitwise model. Organizer personality converts at 3-5x casual users.
- **Free tier:** Unlimited trips, 8 group members, voting, basic timeline, 50 photos/trip, 1 public link.
- **Pro tier:** Unlimited group size, photos, public links, date polling, expense splitting, AI suggestions, export.
- **Success milestones:** Week 4: 5 real friend groups. Week 8: >15% share rate. Month 4: >5% organizer conversion.

## Constraints

- iOS-first (SwiftUI). Android is Phase 4.
- Must work without AI (tool-first, AI-enhanced P1).
- $140/month infrastructure budget (Google Places, Supabase, Cloudflare R2, APNs).
- No paid marketing — organic only (invite links + shared trips).

## Hard Questions (Pre-Answered)

- **Why you?** Experienced engineers who travel and experience the problem firsthand. Scalability is not a constraint. But: no travel industry expertise, no designer.
- **If Google launched this?** Google killed Google Trips in 2019 because unified planning conflicts with ad-per-click model. Google has never shipped a successful social/collaborative product. Group voting is a social feature, not a navigation feature.
- **Strongest argument against?** "WhatsApp is good enough." Groups tolerate chat chaos because nothing better exists, not because it works. If the invite link isn't frictionless, the product has no distribution.
- **Talked to customers?** No formal customer discovery. Pain points validated from personal experience and secondary sources (Reddit, travel forums, app reviews).
- **Walk away criteria?** Week 4: nobody shares the invite link. Week 8: <5% share rate on completed trips. Month 4: <5% organizer conversion.

## Prior Analysis

**V1 Viability Score: 38/100.** Major red flags:
1. Vitamin, not painkiller → V2 fix: narrowed to organizer pain (painkiller for one specific person)
2. 18+ month time-to-differentiation → V2 fix: value on trip #1 (voting works immediately, no AI needed)
3. Consumer economics (2-4% conversion) → V2 fix: organizer-pays model (3-5x conversion for organizer type)
4. Cold-start on 3 dimensions → V2 fix: eliminated 2 of 3 (no AI history needed, no content library needed)
5. Scope is a startup, not a side project → V2 fix: Phase 1 is 4 weeks (pin + shortlist + voting + timeline + invite)

---

## Flags

**Red Flags:**
- No customer discovery conducted. All pain-point validation is from personal experience and secondary sources.

**Yellow Flags:**
- No travel industry expertise on the team.
- "WhatsApp is good enough" risk is the #1 existential threat and has not been tested with real users.
