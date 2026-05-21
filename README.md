# TripSquad

A group trip coordination app for iOS. One link, everyone plans, nobody downloads a spreadsheet.

TripSquad replaces the 5-app stack (WhatsApp + Google Docs + Splitwise + Google Maps + Doodle) with a single shared space where groups discover, vote, and decide together — then keep the trip as a shareable memory.

## Status

**Pre-product.** Currently in the design and validation phase. No code yet.

| Version | Viability Score | Status |
|---------|:--------------:|--------|
| [V1 — AI Trip Planner](docs/01-V1/01-idea.md) | 38/100 | Shelved. AI-first vision had fatal bootstrapping risks. |
| [V2 — TripSquad](docs/02-V2/01-idea.md) | [68/100](docs/02-V2/Startup%20Design/06-validation/scorecard.md) | Active. Group-coordination-first pivot. |

## The Idea

**Problem:** Every group trip runs on 5 disconnected apps. The organizer — the friend who always plans — does all the work, gets zero thanks, and coordinates through WhatsApp chaos where links get buried under 200+ messages.

**Solution:** Pin a city, browse a Famous Places feed, build a shared shortlist, vote (yes/no/maybe), promote winners to a day-by-day timeline. Photos auto-tag by GPS. Completed trips become shareable interactive web pages.

**Business model:** Organizer Pro at $39/year. Group members are always free. Splitwise-validated pattern.

## Core Flow

```
Pin City → Famous Places Feed → Shortlist → Vote → Timeline → Go → Photos → Share
```

## Repo Structure

```
ai-trip-planner/
├── docs/
│   ├── 01-V1/                        # V1: AI Trip Planner (shelved)
│   │   ├── 01-idea.md                #   Idea document
│   │   ├── 03-VIABILITY-REPORT.md    #   Viability report (38/100)
│   │   ├── 05-pitch-2min.md          #   2-min pitch
│   │   ├── 06-pitch-full.md          #   Full pitch narrative
│   │   └── ...
│   │
│   └── 02-V2/                        # V2: TripSquad (active)
│       ├── 01-idea.md                #   Idea document
│       ├── 05-pitch-2min.md          #   2-min pitch
│       ├── 06-pitch-full.md          #   Full pitch narrative
│       ├── 07-pitch-appendix.md      #   Investor Q&A prep
│       │
│       ├── Pitch raw/                #   Raw pitch research
│       │
│       └── Startup Design/           #   Viability assessment (Fast Track)
│           ├── 00-intake/            #     Brief + brainstorm
│           ├── 01-discovery/         #     Market analysis + competitor landscape
│           ├── 02-strategy/          #     Lean canvas
│           ├── 05-financial/         #     Revenue model + projections
│           └── 06-validation/        #     Viability scorecard (68/100)
│
└── idea-site/                        # Interactive proposal site (React)
    └── app/
```

## Key Documents

| Document | Path |
|----------|------|
| V2 Idea | [`docs/02-V2/01-idea.md`](docs/02-V2/01-idea.md) |
| Viability Report (68/100) | [`docs/02-V2/Startup Design/06-validation/scorecard.md`](docs/02-V2/Startup%20Design/06-validation/scorecard.md) |
| Lean Canvas | [`docs/02-V2/Startup Design/02-strategy/lean-canvas.md`](docs/02-V2/Startup%20Design/02-strategy/lean-canvas.md) |
| Revenue Model | [`docs/02-V2/Startup Design/05-financial/revenue-model.md`](docs/02-V2/Startup%20Design/05-financial/revenue-model.md) |
| Market Analysis | [`docs/02-V2/Startup Design/01-discovery/market-analysis.md`](docs/02-V2/Startup%20Design/01-discovery/market-analysis.md) |
| Competitor Landscape | [`docs/02-V2/Startup Design/01-discovery/competitor-landscape.md`](docs/02-V2/Startup%20Design/01-discovery/competitor-landscape.md) |
| Full Pitch | [`docs/02-V2/06-pitch-full.md`](docs/02-V2/06-pitch-full.md) |
| 2-Min Pitch | [`docs/02-V2/05-pitch-2min.md`](docs/02-V2/05-pitch-2min.md) |

## V1 to V2 Pivot

V1 scored 38/100 — an AI-first, full-lifecycle vision with 7 red flags. V2 fixes each one:

| V1 Problem | V2 Fix |
|------------|--------|
| Vitamin for all travelers | Painkiller for the organizer |
| 18-month time-to-differentiation | Value on trip #1 (voting works immediately) |
| 2-4% consumer conversion | Organizer-pays at 5-8% (Splitwise pattern) |
| Cold-start on 3 dimensions | Eliminated 2 of 3 (no AI data or content library needed) |
| Startup-scale scope | 4-week Phase 1 MVP |

## Kill Criteria

| When | Signal | Action |
|------|--------|--------|
| Week 4 | <3/5 friend groups use invite link | Stop |
| Week 8 | <40% member voting participation | Pivot |
| Month 4 | <2% organizer conversion | Reprice |

## Tech Stack (Planned)

- **iOS:** SwiftUI
- **Backend:** Supabase (Realtime + Auth + Postgres)
- **Storage:** Cloudflare R2
- **Places:** Google Places API
- **Maps:** MapKit
- **Notifications:** APNs
- **Budget:** ~$140/month
