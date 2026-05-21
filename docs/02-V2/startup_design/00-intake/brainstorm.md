# Brainstorm: TripSquad V2

**Phase:** 2 — Brainstorm
**Project:** tripsquad-v2
**Date:** 2026-05-20
**Confidence:** High

---

## Context

The V1→V2 pivot IS the major brainstorm. V1 (AI-first, full lifecycle) scored 38/100 on viability. V2 (group-coordination-first, tool-first) is the refined direction. Below are 3 variations exploring edges of the V2 concept.

## Variation 1: "Pure Decision Tool" (Narrower)

Strip everything except the group decision layer. No Famous Places feed (users paste Google Maps links), no photo sync, no public trip pages. Just: create a trip → share link → shortlist + voting → timeline. The entire app is a decision engine for groups.

- **What's exciting:** Extremely fast to build (2-3 weeks). Dead simple UX. Tests the core hypothesis — do groups actually want structured voting? — with minimum investment.
- **What's risky:** Without the Famous Places feed, there's no discovery hook. Users do all the content work. Without photos/sharing, there's no post-trip artifact and the Strava growth loop dies.
- **How it changes competition:** Becomes a direct Doodle/Straw Poll competitor rather than a travel app. Simpler positioning but smaller moat.
- **Verdict:** This could be the first 2-week prototype to validate the voting mechanic before building everything else. Worth considering as a validation step, not the final product.

## Variation 2: "Creator-First" (Different Wedge)

Instead of organizer-first, lead with travel creators. Build the trip publishing/sharing feature first. Let creators plan and document trips, then publish as interactive pages. Viewers discover TripSquad through creator content. Group planning is Phase 2, added after the creator base is established.

- **What's exciting:** Creators provide the content that makes the app valuable. The growth loop is stronger — creators already have audiences. No cold-start problem for content (creators produce it on day 1).
- **What's risky:** Creators are notoriously hard to recruit and retain. You're building a content platform, not a tool — different skills, different dynamics. Monetization is unclear (creators don't pay; do you take a cut? Advertising?). This is a different business.
- **How it changes competition:** Competes with Polarsteps and travel blogging platforms rather than Wanderlog/Splitwise. The group planning add-on becomes a secondary feature.
- **Verdict:** Strong growth mechanics but wrong sequencing. The organizer-first approach is simpler, more testable, and has clearer monetization. Creator support should be Phase 3-4, not the launch wedge.

## Variation 3: "Web-First, No App" (Different Platform)

Build TripSquad as a responsive web app instead of native iOS. Eliminates App Store dependency, works on all platforms, easier to share via links. Progressive Web App with offline support for during-trip use.

- **What's exciting:** Zero friction for invitees (no app download required). Faster to build (no App Store review cycles). Works on Android immediately. The shareable link opens directly in the browser. Lower barrier to adoption.
- **What's risky:** PWAs can't access iOS photo library reliably (PhotoKit requires native app). Push notifications are limited on iOS. No App Store distribution/discovery. "Download our app" is a stronger retention signal than a bookmarked website. The premium feel of a native app matters for willingness to pay.
- **How it changes competition:** Removes the "download friction" objection entirely. But also removes the subscription revenue potential (PWAs can't easily use Apple's in-app purchase system). Monetization becomes harder.
- **Verdict:** Web should be the *viewer* experience (public trip pages, invite landing pages). But the *creator/organizer* experience should be native iOS for photo access, push notifications, and subscription revenue. Hybrid approach: native app for organizers, web for everyone else.

## Convergence

**The V2 direction (organizer-first, native iOS, group coordination as core) is confirmed as the strongest variation.** Useful elements to incorporate:

1. **From Variation 1:** Consider building the "pure decision tool" as a 2-week prototype to validate voting mechanics before investing in full feature set.
2. **From Variation 2:** Creator support is a growth accelerant but should be Phase 3-4, not launch.
3. **From Variation 3:** The public trip page MUST be web-based (not in-app only). Invitees who don't have the app should get a functional web experience with a prompt to install. Hybrid approach.

---

## Flags

**Red Flags:**
- None identified.

**Yellow Flags:**
- Variation 1's "pure decision tool" prototype idea is worth pursuing as a validation step before committing to the full build.
