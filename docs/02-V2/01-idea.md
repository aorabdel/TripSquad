# TripSquad — Complete Idea Document

## Vision

One link. Everyone plans. Nobody downloads a spreadsheet. The group trip coordinator that replaces WhatsApp + Google Docs + Splitwise.

No more scattered suggestions in group chats, itineraries nobody reads, and the one friend who ends up doing everything.

---

## The Problem

### The 5-App Problem

Every group trip today is planned through the same broken stack. This isn't a theoretical problem — it's the single most consistently complained-about travel workflow across Reddit, travel forums, app reviews, and independent travel guides.

| App | What groups use it for | What's broken |
|-----|------------------------|---------------|
| **WhatsApp / iMessage** | Coordination & suggestions | Links get buried in 47 messages. No structure, no decisions, no record. |
| **Google Docs / Notes** | The shared itinerary | One person maintains it. Nobody else reads it. Version confusion. |
| **Splitwise** | Splitting costs | Disconnected from the trip plan. Manual entry. Currency conversion paywalled. |
| **Google Maps** | Finding places | Can't share collections that everyone can edit and vote on. |
| **Doodle / When2meet** | Date polling | Yet another tool. Results don't connect to the trip plan. |

### The Deeper Problem

**This is a painkiller, not a vitamin.** Unlike solo trip planning (which people tolerate), group coordination has real social costs — resentment toward the organizer, budget fights that ruin friendships, and trips that simply don't happen because the WhatsApp thread died. The organizer who "always ends up doing everything" is the person who will pay to make it stop.

---

## The Solution

An iOS-first group trip planning application that replaces the WhatsApp group chat + Google Doc + Splitwise stack. One person creates a trip, drops a pin on a city, and gets a shareable link. Everyone else opens the link — no spreadsheet, no chaos — and collaborates on a single living plan with polls, voting, a timeline, and photo sync.

After the trip, the whole experience — timeline, photos, map — becomes a shareable artifact. Vloggers and travel creators link it in their video descriptions so viewers can clone entire trips as templates or cherry-pick individual spots.

### Core Thesis

> "Group trips don't fail because people can't find places to go. They fail because 6 people can't decide in a WhatsApp thread. We fix the decision layer — then the plan builds itself."

### Core Insight

The app is **tool-first, AI-enhanced**:
- Fully functional without AI. Every feature works manually.
- AI makes timeline suggestions smarter — but is P1, not the core product.
- The core differentiator is the group decision layer: voting, shortlists, and structured collaboration.

---

## Core Concepts

### Trip

The top-level entity. A group travel plan centered around a destination.

**Key attributes:**
- Created with a name + city pin drop (minimum required input)
- Has an organizer (creator) and group members (invitees)
- Contains a shortlist (staging area) and a timeline (finalized plan)

### City Pin

The starting action for every trip. The organizer taps the map or searches for a city, which triggers the Famous Places feed for that area. Multiple pins are supported for multi-city trips — each pin gets its own place feed.

### Famous Places Feed

After pinning a city, the app surfaces top-rated and famous places in and around the area — restaurants, landmarks, activities, viewpoints. Powered by Google Places API, categorized as: eat, see, do, stay. Each place shows name, photo, rating, category, and distance from city center.

### Shortlist

The shared staging area where all group-suggested places live before being promoted to the timeline.

- Anyone in the trip can add places at any time
- Places come from the Famous Places feed, search, or pasting a Google Maps link
- Each place has an inline poll (yes/no/maybe)
- Sort by most votes, most recent, or category
- Discussion thread per place (short comments, not a full chat)

### Activity

A place that has been promoted from the shortlist to the day-by-day timeline.

**Attributes:**
- Location (geo-coordinates, name, address)
- Day assignment and time slot
- Category (eat, see, do — color-coded)
- Travel time to/from adjacent activities (auto-calculated)
- Open/close hours (where available)
- Associated photos (auto-tagged by GPS/timestamp)

### Day

A sequential container within the timeline. Maps to a real calendar date when the trip has confirmed dates. Activities are ordered chronologically within each day.

### Organizer

The person who creates the trip. Has additional powers:
- Promotes places from shortlist to timeline
- Locks days when finalized
- Can share the organizer role (co-organizers) for larger groups

### Group Member

Anyone who joins via the shareable link. Can:
- Browse the area's famous places
- Add places to the shared shortlist
- Vote on all shortlisted places
- View and rearrange the timeline
- Contribute photos during and after the trip

---

## Core User Flow

The entire product can be understood as one flow with five stages. Each stage solves a distinct problem in the group trip lifecycle.

### Stage 1: Create & Pin
**Who:** Organizer

Open app → Create trip → Drop a pin on a city (or search). The app surfaces famous places, landmarks, and top-rated spots in and around that area. Organizer can immediately add spots to a shared shortlist or leave it open for the group.

### Stage 2: Invite & Discover
**Who:** Organizer → Group

Organizer shares a link (iMessage, WhatsApp, email). Group members open the link and land in the trip. They browse the area's famous places, search for their own, and add anything to the shared shortlist. No friction — everyone can contribute from the moment they join.

### Stage 3: Vote & Decide
**Who:** Everyone

Every place on the shortlist gets a poll. Swipe right/left or tap yes/no/maybe. The organizer sees ranked results and promotes winners to the timeline. For contested picks (beach vs. museum), the group can see the vote split and discuss in-context — not in a separate chat thread.

### Stage 4: Build the Timeline
**Who:** Everyone, Organizer finalizes

Promoted places slot into a day-by-day timeline. The app suggests logical ordering based on geography (cluster nearby spots on the same day). Anyone can drag to rearrange. Organizer can lock days when finalized. Travel time between spots is shown automatically.

### Stage 5: Go, Capture, Share
**Who:** Everyone

During and after the trip: photos auto-tag to the timeline by GPS/timestamp. Each person confirms which photos to contribute. Duplicates are suppressed. One tap to share the entire trip — as a visual timeline with photos on a map — with anyone, or publish it as a public template.

---

## Features by Category

### Trip Planning

#### Drop-a-Pin City Selection `P0`
Tap the map or search for a city. This is the starting action for every trip.
- Map view with search bar at top. Supports city-level and region-level pins.
- On pin drop: reverse geocode to city name, store coordinates + bounding box.
- Immediately triggers the Famous Places feed for that area.
- Multiple pins supported (multi-city trips) — each pin gets its own place feed.

#### Famous Places Feed `P0`
After pinning a city, the app surfaces top-rated and famous places in and around the area — restaurants, landmarks, activities, viewpoints.
- Powered by Google Places API (or Foursquare as fallback). Categorized: eat, see, do, stay.
- Each place shows: name, photo, rating, category, distance from city center.
- One-tap to add any place to the trip's shared shortlist.
- Search within the feed for specific types ('ramen', 'sunset viewpoint', 'museum').
- AI suggestion layer (P1): once the timeline has dates and some spots, suggest gap-fillers based on what's popular nearby and what times are open.

#### Day-by-Day Timeline `P0`
Places promoted from the shortlist slot into a visual day-by-day timeline. Drag to reorder. Tap to see details.
- Each day is a vertical list of activities in time order.
- Auto-calculate travel time between consecutive spots (driving/walking/transit via Maps API).
- Show open/close hours per venue where available.
- Drag-and-drop between days. Reordering triggers travel-time recalculation.
- Color-coded by category (eat = orange, see = blue, do = green).
- Organizer can 'lock' a day to prevent further edits.

#### Smart Suggestions on Timeline Gaps `P1`
Once a timeline has some spots placed, the app notices gaps (empty mornings, long idle windows) and suggests nearby places that fit.
- Gap detection: if Day 2 has an activity at 10am and another at 4pm, suggest something for the middle.
- Suggestions ranked by: proximity to adjacent spots, rating, category diversity (don't suggest 3 museums in a row).
- Suggestions appear as ghost cards in the timeline — tap to add, swipe to dismiss.
- This is where light AI can add value without being the core product.

#### Map View `P0`
All shortlisted and timeline-placed spots shown on a single map. Color-coded by day.
- Toggle between map view and timeline view.
- Tap a pin on the map to see the place card (name, photo, which day it's on, vote count).
- Route lines connecting same-day spots to visualize the day's flow.
- Cluster view when zoomed out; individual pins when zoomed in.

#### Export to Google Maps / Apple Maps `P2`
One-tap export of a day's itinerary to native maps for turn-by-turn navigation.
- Generates a Google Maps URL with waypoints in order.
- Alternatively opens Apple Maps with the route.
- Solves the 'we planned it but now we're driving around lost' problem.

### Group Collaboration

#### Shareable Trip Link `P0`
One link to join the trip. Invitees get full access to browse, add places, and vote.
- Organizer taps 'Invite' → generates a unique URL.
- Shareable via iMessage, WhatsApp, email, or any messaging app.
- Link opens the trip in-app (if installed) or falls back to a web preview with an App Store prompt.
- Access model for invitees is an implementation decision to be finalized during development — options range from no-account (name only) to lightweight email signup.

#### Shared Shortlist with Voting `P0`
Anyone in the trip can add places to a shared shortlist. Every place gets an inline poll — swipe or tap yes/no/maybe.
- Shortlist is the staging area. Places live here until promoted to the timeline.
- Each place shows: total votes, vote breakdown (who said yes/no/maybe).
- Sort shortlist by: most votes, most recent, category.
- Anyone can add places at any time — from the Famous Places feed, from search, or by pasting a Google Maps link.
- Discussion thread per place (short comments, not a full chat) — keeps context next to the decision, not in WhatsApp.

#### Organizer Promotes to Timeline `P0`
The organizer reviews vote results and promotes winning places to the day-by-day timeline. The group suggests, the organizer decides.
- Promote button on any shortlisted place. Organizer picks which day and rough time slot.
- Batch promote: select multiple places and auto-assign to a day based on geography.
- Demote: move a timeline item back to the shortlist if plans change.
- The organizer role can be shared (co-organizers) for larger groups.

#### Date Polling `P1`
Before the trip has dates, the organizer can create a date poll — everyone marks which date ranges work for them.
- Organizer sets candidate date ranges (e.g., 'June 12–15' vs 'June 19–22').
- Each member marks available / not available / flexible per range.
- Results shown as a heat map — green = everyone available, red = conflicts.
- Once decided, the organizer locks the dates and the timeline maps to real calendar days.

#### In-Trip Expense Splitting `P2`
Basic expense tracking built into the trip. Someone pays for dinner — log it, split it, settle up at the end.
- Add an expense: amount, who paid, split equally or custom.
- Running balance per person: 'Alex owes Maria $47'.
- Settlement suggestions at trip end: minimum number of transfers to settle all debts.
- Currency conversion for international trips (potential paid feature).
- P2 because Splitwise exists and works. Only build this if user research shows people want it in the same app.

#### Real-Time Activity Feed `P1`
A chronological feed showing what's happening in the trip — who added a place, who voted, who promoted something to the timeline.
- Keeps everyone aware of changes without push-notification overload.
- Lightweight: just a feed, not a chat. No replies, no threads.
- Push notifications only for: new place added, vote results ready, timeline finalized by organizer.

### Photo Sync & Timeline Tagging

#### Auto-Detect & Suggest Upload `P0`
After (or during) the trip, the app scans your camera roll for photos matching the trip's dates and locations. It suggests which photos to contribute — you confirm before anything uploads.
- Uses iOS Photo Library access: filter by date range (trip start → trip end) and GPS coordinates (within radius of any timeline activity).
- Presents matched photos in a review screen: 'We found 43 photos from your trip. Select which to share.'
- Default: all matched photos are pre-selected. User can deselect any.
- Upload only happens after explicit confirmation. No surprise uploads.
- Also supports manual selection: browse camera roll and pick photos yourself.

#### Auto-Tag to Timeline `P0`
Each uploaded photo is automatically matched to the nearest activity on the timeline by GPS coordinates and timestamp.
- Matching logic: (1) find the timeline activity whose GPS coordinates are closest to the photo's GPS, within a 500m radius; (2) if multiple candidates, pick the one whose time window best matches the photo timestamp.
- Photos that don't match any activity go into an 'Unassigned' bucket — the user can manually drag them to an activity.
- Each activity on the timeline shows a photo count badge and a mini gallery preview.

#### Duplicate Suppression `P1`
When multiple people upload photos of the same moment, the app detects near-duplicates and keeps the best one (or lets the group pick).
- Detection method: perceptual hash (pHash) comparison on thumbnails. Photos taken within 30 seconds of each other at the same GPS location are flagged as potential duplicates.
- Default behavior: keep all but group them. Show one in the main timeline; tap to see all versions.
- Optional: auto-pick the 'best' (highest resolution, least blurry) and archive the rest.

#### Shared Photo Timeline View `P0`
Everyone in the trip sees the same photo timeline — a unified view of everyone's photos, organized by day and activity.
- Scroll through the trip day by day. Each activity shows its tagged photos.
- Filter by contributor ('Show only Maria's photos').
- Tap any photo to see full-screen with metadata: who took it, when, where.
- This is the core of the post-trip experience — the trip record everyone can revisit.

#### One-Tap Share Package `P1`
Share the entire trip's photo timeline with one button — as a link, not as 200 individual photos in a WhatsApp thread.
- Generates a shareable link to a web view of the trip: map + timeline + photos.
- Recipients don't need the app — it's a web page.
- Option to download all photos as a zip (organized by day).
- This is also the basis for the public sharing / vlogger feature.

#### Notification to Contribute `P2`
After the trip ends, send a push notification to all group members: 'The trip is over! Share your photos with the group.'
- Triggered 24 hours after the trip end date.
- Links directly to the auto-detect review screen.
- Follow-up reminder after 3 days if the person hasn't contributed.
- Solves the 'I forgot to send my photos' problem permanently.

### Public Sharing & Creator Distribution

#### Public Trip Page `P1`
A web-hosted page showing the full trip: interactive map with pins, day-by-day timeline, photos at each stop. No app needed to view.
- Rendered as a responsive web page at tripsquad.app/trip/{id}.
- Interactive map: pins for each activity, color-coded by day, route lines between stops.
- Timeline view: scroll through days, see photos, read notes/descriptions.
- Gallery view: all photos organized by activity.
- SEO-indexable: 'Best things to do in Lisbon' → real trips with real photos rank organically.

#### Clone Full Trip as Template `P1`
A viewer sees a trip they love and clones it into their own account as a starting template. All places and timeline intact — they customize dates, add/remove spots, invite their own group.
- One button: 'Use this trip as a template.'
- Creates a new trip in the viewer's account pre-populated with all places and the day structure.
- Photos and notes from the original are NOT cloned (privacy). Only places and timeline.
- The viewer's group can then vote, edit, and make it their own.

#### Cherry-Pick Individual Spots `P1`
Instead of cloning the whole trip, a viewer can tap any individual activity and save it to their own trip.
- 'Add to my trip' button on each activity card in the public view.
- Saved spots go into the viewer's shortlist on their own trip.
- If the viewer doesn't have a trip yet, saving a spot prompts them to create one.

#### Creator / Vlogger Link `P1`
Travel YouTubers and bloggers plan their trip in TripSquad. After the trip, they publish it and drop the link in their video description. Viewers explore the interactive map, clone the trip, and become users.
- This is the primary organic growth channel, modeled after Strava's activity-sharing loop.
- Creator workflow: plan trip → take trip → photos auto-tag → tap 'Publish' → get a public link.
- The link in a YouTube description targets high-intent viewers (they just watched a travel vlog — they want to go there).
- Vlogger's call-to-action: 'Full interactive itinerary linked below — clone it and make it your own.'
- No special 'creator' tier needed in v1. Every user can publish a trip publicly.

#### Discover Feed (Future) `P2`
A browse-and-discover feed of publicly shared trips, searchable by destination.
- Not in v1. The public trip pages + SEO + creator sharing generate the initial content inventory.
- Once there are 1,000+ public trips: build a simple discovery page.
- Search: 'trips in Portugal', 'road trips in Scotland', '5-day Japan itinerary.'
- Ranked by: recency, photo quality, clone count.

---

## User Stories

### Story 1: The Organizer Creates and Invites

**Alex, the friend who always plans, organizing a Barcelona weekend with 3 friends**

1. Alex opens TripSquad and creates a new Trip: "Barcelona Weekend"
2. He drops a pin on Barcelona — the Famous Places feed appears immediately
3. He browses the feed, adds a few spots to the shortlist: La Boqueria, Gothic Quarter, Barceloneta Beach
4. He taps 'Invite' and shares the link to their iMessage group
5. Maria, Tom, and Jen open the link and land in the trip — no signup friction
6. Everyone starts browsing Famous Places and adding their own finds to the shortlist

### Story 2: The Group Decides Together

**The Barcelona group votes and builds the timeline**

1. The shortlist has 12 places from all 4 members
2. Everyone votes: swipe yes/no/maybe on each place
3. Alex sees the ranked results — La Boqueria has 4 yes votes, the Picasso Museum has 2 yes and 2 maybe
4. Day 2 afternoon conflict: Tom wants beach, Maria wants Gaudi architecture — the vote split is visible
5. Alex promotes the top-voted places to the timeline, assigns them to days
6. He batch-promotes 5 places to Day 1, the app auto-orders them by geography
7. Travel times appear between spots — the day's flow makes sense
8. Alex locks Day 1. The group moves on to filling Day 2.

### Story 3: Photos Come Together

**The Barcelona group finishes their trip**

1. Everyone's back home. Push notification: "Barcelona Weekend is over! Share your photos with the group."
2. Maria opens the app — it scans her camera roll and finds 43 photos from the trip dates and locations
3. Review screen: all 43 pre-selected. She deselects a few blurry ones, confirms upload.
4. Her photos auto-tag to the timeline: 8 photos at La Boqueria, 5 at the beach, 12 at dinner spots
5. Tom and Jen contribute their photos too — the shared timeline now has 120 photos across all activities
6. Near-duplicates (3 people photographed the same sunset) are grouped — one shows in the main view, tap to see all versions
7. The group scrolls through the trip day by day, reliving it together

### Story 4: The Shareable Artifact

**Alex shares the completed Barcelona trip**

1. Alex taps "Share" — generates a public link
2. The web page shows an interactive map: pins at each spot, color-coded by day, route lines between stops
3. Timeline view: scroll through days, see everyone's photos at each activity
4. Alex shares the link on his Instagram Stories
5. His friend David opens it, explores the map
6. David cherry-picks 3 spots: the tapas place, the hidden beach, the rooftop bar
7. David creates his own Barcelona trip — those 3 spots appear in his shortlist, ready for his group to vote on

### Story 5: The Vlogger Growth Loop

**Travel creator "Jake Abroad" uses TripSquad for a 2-week Japan trip**

1. Jake plans his trip in TripSquad with his travel partner — adding spots, building the timeline
2. During the trip, photos auto-tag to the timeline
3. Trip complete. Jake taps "Publish" — gets a public link
4. He drops the link in his YouTube video descriptions: "Full interactive itinerary linked below — clone it and make it your own"
5. Viewers open the link → explore Jake's trip on an interactive map
6. They see the exact ramen shop from Episode 3, the temple from Episode 5
7. A viewer clones the entire trip as a template, invites their own friends, customizes dates
8. That viewer becomes a TripSquad user — organic acquisition, zero ad spend

### Story 6: The Organizer Who Upgrades

**Sarah, the perennial trip planner, hits free tier limits**

1. Sarah has organized 4 trips in TripSquad — her friend group won't plan without it now
2. On trip 5, she tries to invite 10 people (free tier: 8 max)
3. She also wants to run a date poll (Pro feature)
4. Sarah upgrades to Organizer Pro — $39/year
5. Her 10 friends all join for free. Everyone benefits, one person pays.
6. The Splitwise pattern: the organizer-personality converts at 3–5x the rate of casual users.

---

## Integrations (MVP: Curated Set)

### Places Data
- Google Places API for place search, details, and photos
- Categorized results: eat, see, do, stay
- Ratings, opening hours, distance calculations

### Maps
- MapKit for map rendering, pin drops, and route lines
- Google Maps API for travel time calculations (driving/walking/transit)
- Route visualization connecting same-day activities

### Photo Library
- iOS PhotoKit for camera roll access
- GPS metadata extraction for auto-tagging
- Timestamp matching for activity association

### Notifications
- Apple Push Notification Service
- Trip invites, vote results, photo contribution reminders
- Activity feed updates for group changes

### Deep Linking
- Universal Links for shareable trip URLs
- Opens in-app if installed, web preview with App Store prompt if not

### Future Integrations (Post-MVP)
- Export to Google Maps / Apple Maps with waypoints
- Booking affiliate links (hotels, experiences via Booking.com, GetYourGuide, Viator)
- Photo book printing partnerships (Peecho, Printful)

---

## Growth & Distribution Strategy

### The Strava Model

Every completed trip = a shareable artifact = organic distribution.

```
Organizer creates trip → Invites 4–8 friends via link
                       → Group plans together (friends see the product)
                       → Trip happens, photos auto-tag
                       → Shared as public link (social, messaging, blog)
                       → Viewers explore the interactive map
                       → Viewers clone the trip OR cherry-pick spots
                       → Viewers become users
                       → New organizers create trips → (cycle repeats)
```

### Creator Channel

Travel YouTubers and bloggers use the app as their trip planning tool. When they publish:
- They link their trip in video descriptions
- Their audience (high travel intent) explores the interactive map
- Viewers convert to users by wanting to clone/adapt the creator's trip
- No special creator tier needed in v1 — every user can publish publicly

### SEO

Every published trip is indexable content:
- "Best things to do in Lisbon" → real trips with real routes and photos
- More authentic than blog posts, more useful than TripAdvisor reviews
- Content inventory grows with every user who publishes

### Organic / Built-In Virality

The app is most valuable when used with others:
- Every trip starts with an invite link sent to 4–8 people
- The organizer is already the person who starts the WhatsApp chat — the natural behavior transfers
- "What app is this?" discovery happens on every trip

---

## Business Model

### Organizer Pro — $39/year or $4.99/month

The organizer pays. Group members always free. This mirrors the Splitwise pattern: the person who cares most about the tool (the organizer-personality) converts at 3–5x the rate of casual users. The paywall gates power-organizer features, not basic collaboration.

**Free tier (fully functional):**
- Unlimited trips
- Up to 8 group members
- Shared shortlist with voting
- Basic timeline
- Photo sync (50 photos per trip)
- 1 public trip link

**Pro tier unlocks:**
- Unlimited group size
- Unlimited photo sync
- Unlimited public trip links
- Date polling
- Expense splitting with multi-currency
- AI timeline suggestions
- Export to Google Maps
- Priority photo-book printing (future)

**Why the organizer-pays model:** Per-trip pricing ($5/trip) sounds simple but creates friction at the exact moment of highest enthusiasm. Annual subscription converts the organizer once and they plan 3–6 trips/year — higher LTV, lower churn. Splitwise, Flighty, and TripIt all use annual subscriptions, not per-use pricing.

### Future Revenue Streams

- **Printed Photo Books** — €36–€150 per book. Polarsteps' proven model: users generate trip content for free, then pay for a physical artifact at the emotional peak. Partner with a print-on-demand service (Peecho, Printful) — no inventory, no shipping logistics. Highest-margin revenue stream in consumer travel.
- **Booking Affiliate Links** — When a place on the timeline is a bookable hotel, restaurant, or experience, show a "Book this" button powered by affiliate programs (Booking.com, GetYourGuide, Viator). Earn 3–8% per booking. Only pursue after 10K+ monthly active trips generate enough volume.

---

## Technical Scope & Architecture

Designed for what two engineers can build in an 8-week MVP.

### iOS App (Swift / SwiftUI)
- Map view (MapKit) with pin-drop, place search, and route lines
- Trip creation flow with day-by-day timeline (drag-and-drop via native gestures)
- Shortlist with inline voting UI (swipe cards or yes/no/maybe buttons)
- Photo library access (PhotoKit) for auto-detect + manual selection
- Photo upload with GPS/timestamp metadata for auto-tagging
- Push notifications (APNs) for trip invites, vote results, photo contribution reminders
- Deep linking for shareable trip URLs (Universal Links)

### Backend
- Real-time sync for collaborative editing (consider Supabase Realtime or Firebase)
- REST/GraphQL API for trip CRUD, place search proxy, vote tallying
- Google Places API integration (place search, place details, photos)
- Photo storage (S3-compatible) with thumbnail generation
- Perceptual hashing for duplicate detection (server-side)
- Auth (email + Apple Sign In at minimum)
- Public trip page renderer (server-side rendered web page or static site per trip)

### External APIs & Services
- Google Places API — place search, details, photos ($17 per 1K detail requests)
- MapKit / Google Maps SDK — map rendering, directions, travel time
- Apple Push Notification Service — notifications
- S3 / Cloudflare R2 — photo storage (R2 has free egress, significantly cheaper)
- Supabase or Firebase — real-time sync, auth, database
- Optional: OpenAI API — for smart timeline suggestions (P1, not MVP)

### Cost Estimate (Pre-Scale)
At 1,000 monthly active trips with ~5 people each: Google Places API ~$85/mo, photo storage ~$20/mo, Supabase ~$25/mo, Apple Developer $99/yr. Total: ~$140/month + $99/year. Manageable for bootstrapping.

---

## Build Phases

Ruthlessly scoped to what two engineers can ship. Each phase has a kill/continue decision point.

### Phase 1: Core Loop — Plan & Invite (Weeks 1–4)
- Trip creation: name + city pin drop
- Famous Places feed from Google Places API
- Shared shortlist: add places, yes/no/maybe voting
- Shareable invite link (deep link into app)
- Organizer promotes voted places to day-by-day timeline
- Basic map view with pins
- Auth: Apple Sign In + email

**Kill criteria (week 4):** Can you get 5 real friend groups to plan a real trip using the app? If yes → continue. If nobody shares the link to their group → re-evaluate the invite flow.

### Phase 2: Photos & Polish (Weeks 5–8)
- Photo auto-detect from camera roll (by trip dates + GPS)
- Photo upload with auto-tag to timeline activities
- Shared photo timeline view (everyone sees all contributed photos)
- Basic duplicate detection (perceptual hash)
- Date polling for the group
- Activity feed (who added what, vote results)
- Push notifications: invites, votes, photo contribution reminder
- Public trip page (web-hosted, read-only, shareable link)

**Kill criteria (week 8):** Launch to TestFlight beta. Target: 20 completed trips with photos. Measure: do people actually share the public trip link? If share rate > 15% of completed trips → the growth loop works. If < 5% → sharing isn't a natural behavior and the Strava model fails.

### Phase 3: Growth & Monetization (Months 3–4)
- Clone / cherry-pick from public trips
- Organizer Pro subscription (paywall: unlimited photos, group size, date polls)
- AI timeline suggestions (fill gaps, smart ordering)
- Expense splitting (basic: equal split, who-paid-what, settlement math)
- App Store launch
- Creator outreach: seed 10 travel YouTubers with the app

**Kill criteria (month 4):** 100+ organizers have created trips. 10+ public trips cloned. 5%+ of organizers converted to Pro. If yes → you have a business. If no → diagnose which part of the funnel breaks.

### Phase 4: Scale & Expand (Months 5–12)
- Photo book printing (partner with Peecho/Printful)
- Discover feed (browse public trips by destination)
- Multi-currency expense splitting
- Export to Google Maps / Apple Maps
- Android app (if iOS validates)
- Booking affiliate links (hotels, experiences)
- SEO optimization for public trip pages

---

## Risks & Mitigations

### Vitamin, not painkiller `High`
*Source: Viability report #1*

We narrowed to group coordination — the one area where pain is acute and documented. The organizer who does everything is a real person with real resentment. Solo trip planning is a vitamin; group trip chaos is a painkiller for the organizer.

### 18+ month time-to-differentiation `High`
*Source: Viability report #2*

The full AI-learning vision takes 18 months. This proposal doesn't depend on it. The v1 differentiator is the voting/shortlist/timeline combo — that's useful on trip #1, not trip #3. AI suggestions are P1, not the core.

### Consumer app economics (2–4% conversion) `High`
*Source: Viability report #3*

We target the organizer, not the group. The organizer converts at 3–5x the rate of a random user (Splitwise pattern). And group members are free — they're distribution, not revenue. One organizer brings in 4–8 free users who see the product.

### Cold-start problem on three dimensions `High`
*Source: Viability report #6*

Eliminated two of the three cold starts. We don't need trip history for AI learning (no AI dependency in v1). We don't need a content library (Famous Places come from Google Places API, not user-generated content). The only cold start is: one organizer needs to invite their group. That's the natural behavior — the organizer is already the person who starts the WhatsApp chat.

### Google risk (Gemini + Maps) `Medium`
*Source: Viability report #7*

Google will never build group voting, social shortlists, or friend-group expense splitting inside Maps. Those are social features, not navigation features. Google killed Google Trips because it kept folding features into Maps — and Maps can't do social. Our moat is the group layer, not the places data.

### No designer on the team `Medium`
*Source: Viability report (feasibility)*

iOS native (SwiftUI) provides strong defaults. The product is fundamentally a list (shortlist), a vote (yes/no), and a timeline (vertical scroll) — not a complex visual design challenge. Ship functional, polish iteratively.

### Photo storage costs at scale `Medium`
*Source: Technical*

Use Cloudflare R2 (free egress). Compress uploads to 2048px max dimension. Limit free tier to 50 photos/trip. At 10K trips/month × 50 photos × 500KB = ~250GB/month = ~$4/month on R2. Cost only matters at success scale, which is a good problem.

### WhatsApp / iMessage is 'good enough' `Medium`
*Source: Viability report (market reality)*

The research shows groups tolerate chat because nothing better exists, not because it works. Wanderlog tried but paywalled group features per-user. Our bet: if the invite link is as easy as sharing a WhatsApp link, and the voting UI is faster than typing opinions, the organizer switches the group over.

---

## Key Design Principles

1. **Group-first, not solo-first** — every feature assumes 3–10 people. The organizer creates, the group decides. Solo planning is supported but not optimized for.

2. **Tool-first, AI-enhanced** — the app works fully without AI. Voting, shortlists, and timelines are the core. AI makes suggestions smarter but is never a gate.

3. **One link, zero friction** — joining a trip is as easy as clicking a link. No spreadsheets, no app-install requirements for viewing, no signup walls during the critical invite moment.

4. **The organizer is the customer** — the person who always plans is the person who pays. Group members are free users and distribution channels.

5. **Decide, don't discuss** — replace unstructured group chat with structured voting. The shortlist + polls eliminate the WhatsApp war.

6. **The trip becomes the artifact** — completed trips with photos are shareable, cloneable, and indexable. Every trip is organic distribution.

7. **Ship functional, polish iteratively** — SwiftUI defaults over custom design. Feature completeness over visual polish in v1.

8. **Kill criteria at every phase** — clear metrics at weeks 4, 8, and month 4. No building for 12 months before learning if it works.

---

## Competitive Landscape

### Direct Competitors and Our Differentiation

| Competitor | What they do | Where they stop | Our advantage |
|-----------|-------------|-----------------|---------------|
| **Wanderlog** | Collaborative trip planning (Notion for travel) | Paywalls group features per-user. Focused on solo planning with collaboration bolted on. | Group-first. Members are free. Voting/shortlist is the core, not an add-on. |
| **Splitwise** | Expense splitting | No trip planning. No places. No timeline. | We do what Splitwise does + everything that comes before and after it. |
| **Google Maps** | Finding and navigating to places | Can't share editable collections. No voting. No group decision-making. | The group decision layer that Maps will never build. |
| **WhatsApp / iMessage** | Coordinating with travel companions | No structure, no voting, no decisions. Links buried in messages. | Structured collaboration. Every suggestion is voteable, every decision is visible. |
| **TripIt** | Auto-organizes travel confirmations | Organization only. No group planning. Business-focused. | We plan collaboratively and create shareable memories. |
| **ChatGPT** | General AI for any planning | Text only. No group features. No photos. No sharing. | Structured group trips, not text conversations. |

### Our Positioning

**"They plan the trip. We plan it together."**

Every funded competitor positioned on solo planning or AI-generated itineraries. The white space is:
1. **Group decision-making** — structured voting replaces chat chaos
2. **Post-trip sharing** — completed trips as interactive, cloneable content
3. **Organizer-pays economics** — the planner is the customer, the group is distribution

### Moat (Compounds Over Time)

1. **Social lock-in** — your friend group uses TripSquad for every trip. Switching means convincing 8 people to move.
2. **Trip content inventory** — every shared trip is SEO/social inventory that drives organic acquisition.
3. **Organizer loyalty** — the organizer who paid $39/year and planned 4 trips won't switch for trip 5.
4. **Network density** — the more friend groups overlap, the more people are already on the platform when a new trip starts.

---

## Why Now

**The market gap is obvious:**

- Google killed Google Trips in 2019 and never built a replacement
- Wanderlog raised funding but paywalled group features per-user — leaving the group coordination space underserved
- Record travel demand + zero unified group solutions = massive opportunity

**The technology is ready:**

- SwiftUI makes native iOS development fast for a 2-person team
- Supabase/Firebase provide real-time sync out of the box — no custom infrastructure
- Google Places API is mature, affordable, and comprehensive
- Cloudflare R2 makes photo storage economically viable at any scale

**The behavior is established:**

- The organizer already creates the WhatsApp group and the Google Doc — we're replacing an existing workflow, not creating a new one
- Group trip planning is a repeated behavior (3–6 trips/year for active travelers) — not a one-time use case
- 75% of Gen Z travelers use 4+ apps per trip — the fragmentation pain is real and growing

---

## Summary

TripSquad is not another AI itinerary generator. It's the first group trip coordinator that:

1. **Unifies** — replaces WhatsApp + Google Docs + Splitwise with one shareable link
2. **Structures decisions** — voting and shortlists replace endless group chat debates
3. **Captures** — photos auto-tag to the timeline, creating a shared trip record
4. **Distributes** — completed trips become beautiful, interactive, cloneable artifacts
5. **Monetizes the organizer** — the planner pays, the group is free (and is distribution)

The competitive moat compounds: social lock-in makes friend groups stick, shared trips create content inventory, the organizer-pays model aligns incentives, and network density means more people are already on the platform for the next trip. The longer you use it, the harder it is to leave — and the easier every next trip gets.
