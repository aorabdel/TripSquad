# AI Trip Planner — Complete Idea Document

## Vision

We're building the one app for your entire trip — plan together, adapt on the fly, and share as interactive maps — powered by AI that learns your travel style with every trip you take.

No more juggling Maps, notes, group chats, weather apps, and photo albums just to go on vacation.

---

## The Problem

### The 6-App Problem

A typical multi-day trip today requires jumping between 6+ disconnected apps:

| App | What travelers use it for | What's broken |
|-----|--------------------------|---------------|
| **ChatGPT / AI chat** | Initial itinerary generation | Starts from zero every time. No memory of past trips. No structured output. |
| **Google Maps** | Navigation between activities | Optimizes for fastest route, not scenic. Fights your intent. No awareness of your plan. |
| **Weather apps** | Checking forecasts | Disconnected from your itinerary. You notice rain but have to manually figure out what to move. |
| **AllTrails / activity apps** | Finding hikes, trails, activities | Siloed. Discoveries don't feed back into your itinerary. |
| **WhatsApp / group chats** | Coordinating with travel companions | Suggestions buried in 47 messages. No structure, no voting, no decisions. |
| **Camera roll** | Photos and videos | Untagged, unorganized. Dies after the trip — a pile of photos nobody revisits. |
| **YouTube** | Seeing what others did at a destination | Watch 20-minute vlogs just to extract 3 useful ideas. No way to grab their route. |

### The Deeper Problems

**Plans always break.** Weather changes, you get tired, a friend finds something better, a place is closed. Static itineraries (in notes, docs, or planning apps) can't adapt. Reshuffling one day cascades through the whole trip and requires re-doing everything manually.

**No tool learns from you.** Every new trip starts cold. You re-describe your preferences, re-explain your pace, re-tell the AI who you're traveling with. Ten trips later, your planning app knows you no better than it did on trip one.

**The trip dies when it ends.** Months of planning and days of adventure collapse into an unsorted camera roll. There's no beautiful record, no shareable artifact, no way for others to benefit from your experience.

**Discovery is broken.** To learn what people actually do at a destination, you watch YouTube vlogs or scroll TripAdvisor reviews. There's no way to see someone's actual trip laid out on a map with real photos and real routes.

**Group coordination is chaos.** Planning with friends means endless messages with no structure. "What about this restaurant?" gets lost between memes. There's no way to propose, vote, and decide without a WhatsApp war.

---

## The Solution

A mobile-first trip planning application that covers the entire trip lifecycle — **plan, go, share** — with AI that gets smarter with every trip you take.

### Core Thesis

The app is **tool-first, AI-enhanced**:
- Fully functional without AI. Every feature works manually.
- AI makes everything faster, smarter, and more personalized — but is never a gate.
- The AI is specialized in trip planning, fed with the user's accumulated travel intelligence.

### Core Insight

> "Every travel app that's been funded competes for one moment: trip planning. They help you build an itinerary. Then they disappear. But planning isn't where trips break. The trip itself is the product, not just the plan."

---

## Core Concepts

### Trip

The top-level entity. A travel record representing a vacation, road trip, or local exploration.

**Lifecycle states:**

```
Plan ──→ Active ──→ History ──→ Archived
  │                    │
  └──→ Cancelled       └──→ (stays in History)
```

- **Plan** — Being designed. Activities organized into Days without real calendar dates.
- **Active** — Currently in progress. The plan is a living document updated in real-time.
- **History** — Completed. The final state of the plan IS the historical record.
- **Archived** — Moved out of the main view but still accessible and usable as AI context.
- **Cancelled** — Planned but never taken.

### Activity

An event within a Trip, defined by a **start time** (the only required field).

Optional attributes:
- Location (geo-coordinates, address, area)
- Duration
- Route (for driving/walking activities)
- Media (photos, videos)
- Participants (which travelers are doing this activity)
- Notes, links, booking references

Activities can be concurrent — two activities at the same time with different participants represent a group split.

**Driving routes are Activities.** A scenic coastal drive is a first-class event on the timeline, not just a gap between destinations. It can have waypoints, photos, duration, and is exportable to navigation apps (Google Maps, Waze) with full waypoint sequences to force the desired route.

### Day

A sequential container (Day 1, Day 2, Day 3). Maps to a real calendar date when the Trip has a start date or becomes Active.

### Suggestion

A proposed Activity that hasn't been promoted into the plan yet. Used during collaborative planning:
- Can be **unassigned** ("we should do wine tasting at some point")
- Can be **placed on a specific Day** as an alternative ("Day 3 afternoon: boat cruise OR hike?")
- Promoted into the plan when the group agrees (voting/choosing)

### Companion

A person on a Trip who is **not** an app user. Represented as constraints and tags that influence AI planning:
- "Parents friendly" — slower pace, accessible paths
- "Kid-friendly" — activity duration limits, early bedtimes
- "Mobility constraints" — no steep hikes

If a companion is also an app user, their accounts link and preferences sync automatically.

### Preference

A user's travel taste — both explicit (stated by the user) and inferred (derived from trip history by the AI):
- Scenic roads over highways
- Quiet beaches over tourist traps
- Budget food over expensive restaurants
- Nature over city
- Short drives over long hauls

Fed to the AI as implicit context during all planning interactions. The user can view, edit, and override any inferred preference.

### Goal

An entry that helps the AI plan. Can exist at different scopes:
- **Long-term:** "Visit every Greek island", "Do 10 hikes this year"
- **Per-trip:** "Find a quiet beach for mom", "Try local street food"
- **General:** "Explore more nature", "Get off the beaten path"

Not a complex trackable entity — just context entries the AI considers.

### Media

Photos and videos stored and organized within the app:
- Auto-associated to Activities by GPS coordinates and timestamps
- Displayed on the map and timeline
- Included in shared trip views
- **Not edited in the app** — editing happens elsewhere, the app is for storage and organization

### Creator

A user who publishes completed Trips for others to view:
- Published trips are viewable, cloneable, and cherry-pickable
- Followable as a **trust signal** — followed creators' trips are weighted higher in AI recommendations
- Not a social feed — a quality signal for the recommendation engine

---

## Features by Lifecycle Phase

### Phase 1: Planning

#### Manual Planning
- Create a Trip with a name (minimum required input)
- Add Days (Day 1, Day 2, Day 3...)
- Add Activities to Days with start times
- Drag and drop Activities between Days
- Set optional details: location, duration, notes, links
- Assign a start date to map Days to calendar dates
- Add participants (app users and Companions)

#### AI-Assisted Planning
- Open a conversation with the AI at any point
- The AI already has context: Preferences, Goals, past Trips, Companions
- "Plan me a week in Portugal, I like coastal drives and quiet beaches, I'm bringing my mom"
- AI generates a full Trip with Days and Activities
- User refines via continued conversation or manual edits
- AI suggests activities based on: preferences, time of year, pace patterns, companion constraints

#### Collaborative Planning
- Invite other users to the Trip
- **Suggestions pool:** Anyone can propose Activities
  - Unassigned suggestions: "We should do this somewhere on the trip"
  - Day-specific suggestions: "For Day 3, what about this instead?"
- **Voting/choosing:** Group decides which Suggestions get promoted to the plan
- All collaborators can edit the plan directly (no owner approval needed)
- Changes are visible to everyone in real-time
- AI can help: "You have 5 unassigned Suggestions, want me to find slots for them?"

#### Route Planning
- Add driving Activities with specific routes (not just start/end points)
- Specify scenic roads, waypoints, "I want to take THIS road"
- AI suggests routes that match your style (scenic over fast)
- Preview estimated drive times
- Export to Google Maps / Waze with waypoints that force the desired route

### Phase 2: Active Trip

#### Day View (Primary Interface)
- Today's Activities shown in chronological order
- Current Activity highlighted
- Next Activity preview with travel time
- Tomorrow's weather visible
- Quick access to modify today's plan

#### Real-Time Adaptation
- **Weather alerts:** "Rain expected until 2pm tomorrow. Want to adjust?"
  - Quick actions: swap days, move outdoor activities, replace with indoor alternatives
  - Or open a conversation for nuanced replanning
- **Fatigue/mood:** "I'm tired, skip the hike" → AI reshuffles remaining activities
- **Spontaneous additions:** "My friend found a great bar" → Add it, plan adjusts
- **Cascading changes:** Moving an Activity from one Day to another automatically adjusts everything downstream
- Changes can be made from Day view OR overview — they cascade both ways

#### Group Coordination (Active Trip)
- Everyone on the Trip sees current and upcoming Activities
- Real-time visibility: who is going where right now
- **Group splits:** Two concurrent Activities with different participants
  - "Group A is on the boat, Group B is hiking"
  - Everyone sees both Activities and who's doing what
- Suggestions during active trip: "What about this instead of tonight's plan?"

#### Location Awareness (MVP: Light Tracking)
- When app is open: uses current location for context
- Shows nearest upcoming Activity and travel time
- "You're 10 minutes from your next stop"
- Photo GPS metadata matching (associate photos after the fact)

#### Location Awareness (Future: Background Tracking)
- Opt-in GPS tracking in background
- Auto-detect arrival/departure from Activities
- Auto-tag photos by matching timestamps to locations
- Detect deviations from plan ("You seem to be heading somewhere else — add new Activity?")
- Battery-optimized, privacy-first

### Phase 3: Post-Trip (History)

#### The Trip Record
- Final state of the plan IS the historical record
- No separate "what actually happened" layer
- If you skipped something, you removed it during the trip
- The record is what you ended with

#### Media Organization
- Photos auto-associated to Activities by GPS and timestamp
- View photos on the timeline (chronological within each day)
- View photos on the map (pinned to locations)
- Videos associated the same way
- Album-like organization without needing a separate app

#### Interactive Map View (Primary Sharing Artifact)
- Full trip displayed on a map:
  - Activity pins at each location
  - Routes traced between Activities (especially driving routes)
  - Photos pinned to their locations
  - Color-coded by Day
- Zoomable, scrollable, clickable
- Click an Activity pin → see details, photos, notes
- Click a route → see the road taken, photos along the way

#### Sharing
- **Share via link:** Anyone with the link can view the completed trip
- **View modes:**
  - Map view (primary) — the visual hook
  - Timeline view — day-by-day narrative
  - Gallery view — all photos organized by Activity
- **Viewer actions:**
  - Browse and enjoy (read-only)
  - Clone entire Trip as a template for their own planning
  - Cherry-pick individual Activities into their own Trip
  - "I like their Day 2 coastal drive — add that to my plan"
- **AI assists viewers:** "You saved 3 Activities from this trip. Want me to build a plan around those for your 5-day window?"

---

## User Stories

### Story 1: Solo Trip Planning with AI

**Sarah, experienced traveler, planning a week in Japan**

1. Sarah opens the app and creates a new Trip: "Japan Week"
2. She opens the AI conversation
3. The AI already knows from her 8 past trips: she prefers quiet areas, walks 10-15km/day, likes local food over tourist restaurants, travels at a moderate pace
4. She says: "Plan me a week in Japan, I want to see Kyoto and the countryside, avoid Tokyo crowds"
5. AI generates a 7-day plan with Activities on each Day:
   - Day 1-2: Kyoto temples (quiet ones, not Fushimi Inari)
   - Day 3: Scenic train to Hakone
   - Day 4-5: Countryside ryokans and hiking
   - Day 6: Day trip from a base
   - Day 7: Departure buffer
6. Sarah tweaks: "Day 3 is too packed, spread it across Days 3-4"
7. AI reshuffles, adjusting downstream Days
8. She sets a start date — Days map to real calendar dates
9. Trip is in **Plan** state, ready to go

### Story 2: Group Planning with Friends

**Alex and 3 friends planning a weekend trip**

1. Alex creates a Trip: "Barcelona Weekend" and invites Maria, Tom, and Jen
2. Everyone starts adding Suggestions:
   - Maria: "La Boqueria market" (unassigned)
   - Tom: "Beach day" (suggests for Day 2)
   - Jen: "Paella cooking class" (suggests for Day 1 evening)
   - Alex: "Gothic Quarter walking tour" (suggests for Day 1 morning)
3. Voting begins — everyone marks what they're excited about
4. Conflicts on Day 2 afternoon: Tom wants beach, Maria wants Gaudi architecture
5. Both stay as Day 2 Activities with different participants — group split
6. The rest gets promoted to the plan by consensus
7. AI helps: "You have 3 unassigned suggestions and 2 empty afternoon slots — want me to fit them?"

### Story 3: Mid-Trip Adaptation

**The Chen family, Day 3 of a 5-day Scotland trip**

1. They wake up, open the Day View: 3 Activities planned today
2. A notification appears: "Rain expected 9am-2pm. Your morning hike (Glen Coe) would be in heavy rain."
3. Quick actions offered:
   - [Swap with tomorrow's museum visit]
   - [Find an indoor alternative]
   - [Keep the plan anyway]
   - [Open conversation for more options]
4. They tap "Swap with tomorrow" — one tap
5. Today reshuffles: museum in the morning, hike moves to tomorrow
6. Tomorrow adjusts automatically: previous museum slot replaced by the hike
7. At 4pm, they're tired. Dad opens the AI: "We're done for today, cancel the evening activity"
8. AI removes it and suggests: "I moved it to Day 5 since you have a lighter schedule. Want to keep it or drop it entirely?"

### Story 4: The Scenic Route Problem

**Marcus, road trip from San Francisco to Big Sur**

1. Marcus adds a driving Activity: "Pacific Coast Highway drive, SF to Big Sur"
2. He specifies: "I want to take Highway 1 the entire way — the coastal road, not the fastest inland route"
3. The Activity stores the full route with waypoints along Highway 1
4. He adds photo stops as sub-activities: Bixby Bridge viewpoint, McWay Falls
5. When he's ready to drive, he taps "Export to Google Maps"
6. The app sends waypoints that force Google Maps along Highway 1 — no more fastest-route fights
7. During the drive, he stops for photos — they auto-tag to this driving Activity
8. In the final shared trip, the full coastal route is traced on the map with his photos pinned along the road

### Story 5: Post-Trip Sharing

**Lisa finishes a 10-day Portugal trip**

1. Trip automatically moves to History state
2. Her 400 photos are auto-associated: 380 matched to Activities by GPS/timestamp
3. She manually assigns the remaining 20 (restaurant interiors, etc.)
4. She taps "Share" — generates a link
5. The shared view opens with an interactive map:
   - Algarve coast route traced in blue
   - Activity pins with her photos at each location
   - A stunning cliff beach photo appears when you click the "Praia da Marinha" pin
6. She shares the link on Instagram Stories
7. Her friend David opens it, explores the map
8. David cherry-picks 3 activities: the cliff beach, a restaurant in Lagos, and the coastal drive
9. David starts his own Portugal trip — AI says "You saved 3 activities from Lisa's trip. Want me to build a 5-day plan around these?"
10. The AI uses David's own preferences (he likes nightlife more than Lisa did) and adds evening activities Lisa didn't have

### Story 6: The Learning AI

**Omar's 12th trip with the app**

1. Omar says: "Plan me something for a long weekend in March"
2. The AI, drawing from 11 past trips, responds:
   - "Based on your history, you prefer: 2-3hr max drive from home, nature over cities, 2 activities per day (you usually cut the third), moderate hikes (5-10km), quiet accommodations. Your recent trips have been coastal — want something inland this time?"
3. Omar: "Yes, mountains"
4. AI suggests 3 options ranked by match:
   - Lake District (matches: moderate hikes, quiet, 3hr drive)
   - Snowdonia (matches: mountains, nature, slightly more adventurous)
   - Peak District (matches: closest, gentler terrain)
5. Omar picks Snowdonia, AI generates a 3-day plan calibrated to his pace and style
6. It also notes: "I didn't include any activities before 10am — you've never started before 10 in any previous trip."

### Story 7: YouTuber Publishing Their Trip

**Travel creator "Jake Abroad" finishes filming a 2-week Japan series**

1. Jake has used the app to plan and track his trip (it's his travel companion)
2. Trip is complete, photos and routes are all in the app
3. Jake taps "Publish" — the trip becomes publicly visible
4. He adds a description: "My 2-week Japan itinerary — every spot from the vlog series"
5. He gets a shareable link and embeds it in his YouTube video descriptions
6. In the video: "My full interactive itinerary is linked below — you can see every spot, every route, and grab whatever you want for your own trip"
7. Viewers open the link → explore Jake's trip on an interactive map
8. They see the exact ramen shop from Episode 3, the temple from Episode 5
9. Viewers who follow Jake: his future trips surface in their AI recommendations
10. A viewer planning their own Japan trip: the AI says "Jake Abroad (creator you follow) did a similar trip — here are activities from his itinerary that match your preferences"

### Story 8: Photos on the Map

**The Martinez family reviews their Italian road trip**

1. Trip is complete — 12 days, 800+ photos across 4 phones
2. Each family member's photos are uploaded (or synced from camera roll)
3. Auto-association: GPS metadata matches photos to Activities
4. The map shows Italy with their route traced and photo clusters at each stop
5. Zooming into Florence: 3 Activity pins, each with its photos
   - Click the Uffizi pin → 15 photos from inside the gallery
   - Click the Ponte Vecchio pin → sunset photos from the bridge
   - Click the trattoria pin → food photos, the menu, a selfie
6. The driving route from Florence to Cinque Terre shows photos taken during the drive — coastal views from the car
7. They share the link with family back home — grandparents explore the map and see exactly where their grandkids were
8. A year later, they're planning another Italy trip. The AI says: "You've already done Florence and Cinque Terre. Want to focus on the Amalfi Coast and Sicily this time?"

---

## The AI System

### What the AI Knows (Context Fed to Every Interaction)

1. **User Preferences** — explicit and inferred travel style
2. **Goals** — long-term and per-trip objectives
3. **Trip History** — every past trip with Activities, pace, skipped items, media
4. **Companion Profiles** — constraints of current travel partners
5. **Current Trip State** — all Days, Activities, Suggestions, and real-time changes
6. **External Data** — weather forecasts, points of interest, trail databases (via integrations)
7. **Followed Creators' Trips** — weighted recommendations from trusted sources

### How the AI Interacts

The AI is available in three modes:

**1. Conversational (Full Planning)**
- Open a chat, describe what you want
- AI generates plans, suggests alternatives, answers questions
- Available at any point: initial planning, mid-trip replanning, post-trip reflection
- The conversation produces structured output (Trip, Days, Activities) — not just text

**2. Structured UI Actions (Quick Decisions)**
- Notifications with quick-action buttons
- "Rain tomorrow — [Swap days] [Find alternative] [Keep plan]"
- No typing needed for common adjustments
- AI powers the suggestions behind each button

**3. Proactive Suggestions**
- App surfaces relevant suggestions without being asked
- Weather-based: "Tomorrow looks like rain, consider..."
- Pattern-based: "You usually get tired by Day 3 — your schedule is heavy, want to lighten it?"
- Discovery-based: "A creator you follow did an activity near where you'll be on Day 4"

### How the AI Learns

**Explicit signals:**
- User states preferences ("I prefer quiet places")
- User sets Goals ("explore more nature this year")
- User rates or reacts to activities after a trip

**Implicit signals (inferred):**
- Activities the user consistently skips or removes → things they don't enjoy
- Pace patterns → how many activities per day they actually complete
- Time patterns → when they start their day, when they stop
- Location patterns → coastal vs. inland, urban vs. rural
- Companion patterns → how travel style changes with different people
- Distance patterns → max driving time, preference for short hops vs. long drives

**Transparency:** The user can always see what the AI has inferred and correct it. "The AI thinks you prefer budget food because you chose cheap restaurants 8 out of 10 times — is that right?"

---

## Integrations (MVP: Curated Set)

### Weather
- Real-time forecasts for trip destinations
- Proactive notifications when weather affects planned Activities
- Multi-day forecast awareness for advance planning

### Maps / Points of Interest
- Location search and geocoding
- Points of interest database for suggestions
- Estimated travel times between Activities

### Trail / Activity Data
- Hiking trail database (difficulty, distance, elevation)
- Activity ratings and seasonal availability
- Opening hours for attractions

### Navigation Export
- Export Activities and routes to Google Maps / Waze / Apple Maps
- Full waypoint sequences for driving Activities (solves the scenic route problem)
- One-tap "navigate to next Activity"

### Future Integrations (Post-MVP)
- Flight/transport booking links
- Hotel/accommodation connections
- Restaurant reservation systems
- Open plugin model for third-party services

---

## Growth & Distribution Strategy

### The Strava Model

Every completed trip = a shareable artifact = organic distribution.

```
User takes a trip → App creates interactive map record
                  → User shares link (social, messaging, blog)
                  → Viewers explore the map
                  → Viewers cherry-pick activities OR clone the trip
                  → Viewers become users
                  → New users take trips → (cycle repeats)
```

### Creator Channel

Travel YouTubers and bloggers use the app as their trip planning tool. When they publish:
- They link their trip in video descriptions
- Their audience (high travel intent) explores the interactive map
- Viewers convert to users by wanting to clone/adapt the creator's trip
- Creators get followers → their trips become trusted AI recommendations

### SEO

Every published trip is indexable content:
- "Best road trips in Scotland" → real trips with real routes and photos
- More authentic than blog posts, more useful than TripAdvisor reviews
- Content inventory grows with every user who publishes

### Organic / Word of Mouth

The app is most valuable when used with others:
- Collaborative planning requires inviting friends
- Shared trips get sent to friends and family
- "What app is this?" natural discovery

---

## Business Model

### Freemium Subscription

**Free tier (fully functional):**
- Create and manage unlimited Trips
- Manual planning (add Activities, organize Days, collaborate)
- Limited AI conversations per month (e.g., 10 planning sessions)
- Basic sharing (link to completed trips)
- Photo association (manual)

**Paid tier (power user):**
- Unlimited AI conversations
- Proactive AI suggestions (weather alerts, adaptation prompts)
- Advanced integrations (weather forecasting, trail data, POI database)
- Export to navigation apps with full waypoints
- Priority photo auto-tagging by GPS/timestamp
- Creator publishing tools
- Background location tracking (when available)

**Pricing direction:** $5-10/month or annual equivalent. Natural upgrade cohort: frequent travelers (3+ trips/year) who hit AI limits.

### Future Revenue Streams

- **Affiliate:** Bookings made through the app (hotels, activities, transport)
- **Creator premium:** Advanced publishing and analytics tools
- **B2B white-label:** Travel agencies using the planning engine for their clients

---

## Competitive Landscape

### Direct Competitors and Our Differentiation

| Competitor | What they do | Where they stop | Our advantage |
|-----------|-------------|-----------------|---------------|
| **Wanderlog** | Collaborative trip planning (Notion for travel) | Disappears once the trip starts. No during-trip intelligence. | We ARE the trip, not just the plan. |
| **Layla AI** | AI itinerary generation (chat-first) | One-shot generation. No learning. No during-trip. | We learn and adapt. Every trip makes the next better. |
| **TripIt** | Auto-organizes travel confirmations | Organization only. No planning intelligence. Business-focused. | We plan, adapt, and create shareable memories. |
| **Mindtrip** | AI taste-based travel recommendations | Pre-trip only. Starts cold each session. | We accumulate intelligence across trips. |
| **Roadtrippers** | Road trip route discovery | Desktop-era UX. No AI. No collaboration. Limited scope. | Mobile-first, AI-native, full lifecycle. |
| **Google Maps** | Navigation | Optimizes for fastest, not best experience. No trip awareness. | Trip-aware navigation that respects your intent. |
| **ChatGPT** | General AI for any planning | Text only. Starts from zero. Can't adapt in real-time. Can't share. | Structured trips, persistent memory, real-time adaptation. |

### Our Positioning

**"They plan the trip. We ARE the trip."**

Every funded competitor positioned on the planning moment. The white space is:
1. **During-trip adaptation** — real-time intelligence when plans break
2. **Post-trip sharing** — completed trips as interactive, discoverable content
3. **Compounding personalization** — AI that visibly gets better across trips

### Moat (Compounds Over Time)

1. **Preference data** — switching means starting cold on another platform
2. **Trip content inventory** — every shared trip is SEO/social inventory
3. **Real-time adaptation intelligence** — improves with more trip data
4. **Creator/follower trust network** — social lock-in for discovery

---

## Future Expansion

### Phase 1: MVP (Core Experience)
- Trip lifecycle (Plan → Active → History)
- Activity management with timeline and map views
- AI-assisted planning via conversation
- Day view with basic adaptation (manual + AI suggestions)
- Photo association (GPS/timestamp matching)
- Sharing via link (interactive map view)
- Basic weather integration

### Phase 2: Collaboration & Social
- Multi-user Trips with real-time collaboration
- Suggestions pool with voting
- Creator publishing and follow system
- Clone/cherry-pick from shared trips
- Group splits (concurrent Activities with different participants)

### Phase 3: Advanced Intelligence
- Background location tracking (opt-in)
- Proactive AI suggestions (weather, fatigue patterns)
- Inferred preferences from trip history
- Cross-trip learning ("you usually skip late activities")
- Creator recommendations weighted by follow

### Phase 4: Community & Discovery
- Public trip discovery (browse trips by destination, style)
- Search by preferences ("quiet coastal trips in Portugal")
- Creator profiles and content pages
- Community-driven recommendations
- Trip ratings and reviews

### Phase 5: Platform & Integrations
- Open plugin model (AllTrails, Booking.com, airlines)
- Advanced media features (basic trim/highlight from dashcam)
- On-device AI for offline adaptation
- AR overlays at points of interest
- B2B API for travel agencies
- Multi-language support

---

## Key Design Principles

1. **Tool-first, AI-enhanced** — the app works fully without AI. AI makes it better, never gates functionality.

2. **Minimal friction** — no forced onboarding, no required fields beyond a Trip name. Preferences build up naturally.

3. **One source of truth** — the plan is a living document. Its final state IS the historical record. No parallel "what was planned vs. what happened."

4. **Map role shifts by phase** — secondary during planning/active (timeline dominates for usability), primary when sharing (the visual hook that makes people say "I want to do that trip").

5. **Personal tool first** — sharing via links, no social feed. Data model supports future community layer without requiring one.

6. **AI knows you** — preferences, goals, and trip history feed every AI interaction as implicit context. The more you use it, the better it gets.

7. **Respect user agency** — AI suggests, user decides. Quick actions for common choices, conversation for complex ones. Never force an AI opinion.

8. **Privacy by design** — location data used for user's benefit only. No selling of travel data. Tracking always opt-in. Published trips are an explicit user choice.

---

## Why Now

**The technology window opened in 2024-2025:**

- AI inference costs dropped 97% in 18 months — a full planning session costs <$0.01
- Multimodal AI agents can orchestrate Maps, Weather, and Activity APIs simultaneously
- On-device AI makes mobile-first experiences responsive even mid-hike
- Function-calling and agent patterns moved from research to production

**The market is ready:**

- Global travel spending exceeded $9.5 trillion (UNWTO 2024)
- 75% of Gen Z travelers use 4+ apps per trip
- Google killed Google Trips in 2019 and never built a replacement
- Record travel demand + zero unified solutions = massive opportunity

**The window is closing:**

- Google is integrating Gemini into Maps (2025-2026)
- Established travel apps are bolting on AI features
- The opportunity for a new entrant to establish brand and community: ~18-24 months
- First-mover in the during-trip + post-trip space wins the compounding data advantage

---

## Summary

AI Trip Planner is not another itinerary generator. It's the first trip companion that:

1. **Plans** — collaboratively, conversationally, learning from your history
2. **Adapts** — in real-time when weather, mood, or circumstances change
3. **Remembers** — every trip makes the next one smarter
4. **Shares** — completed trips become beautiful, interactive, discoverable artifacts
5. **Grows** — every shared trip is organic distribution, every creator is a growth channel

The competitive moat compounds: preference data creates switching costs, shared trips create content inventory, real-time adaptation builds trust, and the creator network creates social lock-in. The longer you use it, the harder it is to leave — and the better your trips get.
