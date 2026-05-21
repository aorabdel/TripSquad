# AI Trip Planner

A mobile-first trip planning tool that works fully without AI, but is AI-enhanced for frictionless planning, day-to-day adjustments, and learning from travel history.

## Language

### Core Entities

**Trip**:
A travel record with a lifecycle — the top-level entity representing a vacation, road trip, or local exploration.
_Avoid_: Journey, itinerary, vacation

**Activity**:
An event within a Trip, defined by a start time. Location, duration, route, media, and participants are all optional.
_Avoid_: Stop, point of interest, item, task

**Day**:
A sequential container of Activities (Day 1, Day 2, Day 3). Maps to a calendar date when the Trip has a start date.
_Avoid_: Slot, segment

**Suggestion**:
A proposed Activity that has not yet been promoted into the plan. Can be unassigned or placed on a specific Day as an alternative.
_Avoid_: Idea, draft, proposal

**Companion**:
A person on a Trip who is not an app user. Represented as constraints and tags (e.g. "Parents friendly") that influence AI planning.
_Avoid_: Guest, member (for non-users)

**Preference**:
A user's travel taste — explicit (stated) or inferred (derived from trip history). Fed to the AI as planning context.
_Avoid_: Setting, profile field

**Goal**:
An entry that helps the AI plan — can be long-term ("visit every Greek island"), per-trip ("find a quiet beach for mom"), or general ("explore more nature"). Not a complex trackable entity.
_Avoid_: Objective, milestone

**Media**:
Photos and videos stored and organized within the app, auto-associated to Activities by GPS and timestamp. Not edited in the app.
_Avoid_: Content, assets

**Creator**:
A user who publishes completed Trips for others to view. Followable as a trust signal that weights their Trips higher in AI recommendations.
_Avoid_: Influencer, publisher

### Trip Lifecycle States

**Plan**:
A Trip that is being designed but has not started. Activities are organized into Days without real calendar dates.

**Active**:
A Trip that is currently in progress. The planned Day becomes the live day view. The plan is a living document updated in real-time.

**History**:
A completed Trip. The final state of the plan IS the historical record — no separate "what actually happened" layer.

**Archived**:
A completed Trip moved out of the main view but still accessible and usable as AI context.

**Cancelled**:
A Trip that was planned but never taken.

## Relationships

- A **Trip** contains one or more **Days**
- A **Day** contains zero or more **Activities**
- An **Activity** has zero or more participants (app users or **Companions**)
- An **Activity** can have **Media** attached to it
- A **Trip** has zero or more **Suggestions** (unassigned or placed on a **Day**)
- A **Suggestion** becomes an **Activity** when promoted into the plan by group consensus
- A driving route is an **Activity** (not a gap between Activities), exportable to navigation apps
- A **Creator** publishes **Trips** that are viewable, cloneable, or cherry-pickable by others
- Following a **Creator** is a trust signal that weights their Trips in AI recommendations
- **Preferences** and **Goals** feed the AI as implicit context when planning any **Trip**
- Past **Trips** (History/Archived) inform future planning across all dimensions: preference patterns, operational logistics, and place knowledge
- Concurrent **Activities** on the same **Day** with different participants represent a group split — one Trip, not a branch

## Example dialogue

> **Dev:** "A user opens the app cold and says 'plan me a week in Portugal.' What happens?"
> **Domain expert:** "The AI opens a conversation. It already has the user's **Preferences**, **Goals**, and past **Trips** as context. It produces a **Trip** in **Plan** state with **Days** and **Activities**. The user can refine via conversation or edit manually."

> **Dev:** "It's raining on Day 3. What does the app do?"
> **Domain expert:** "A notification surfaces with quick actions — reshuffle the **Day**, swap with another **Day**, or open a conversation for nuanced replanning. Changes cascade: if an **Activity** moves from Day 3 to Day 4, the rest adjusts. One plan, two views — **Day** view and overview."

> **Dev:** "Two friends on a Trip want to do different things for an afternoon."
> **Domain expert:** "Both **Activities** go on the same **Day** with different participants. Everyone on the Trip sees both. When the Trip becomes **History**, the shared view shows all **Activities** with **Media** from both."

> **Dev:** "A creator publishes a Trip. A viewer wants three of their Activities."
> **Domain expert:** "The viewer cherry-picks those **Activities** into their own **Trip**. The AI can say 'you saved 3 activities — want me to build a plan around those for your dates?'"

## Flagged ambiguities

- "Plan" is used both as a lifecycle state (the Trip is in Plan state) and as a verb (planning a trip). Context makes it clear — as a noun/state it refers to the Trip's lifecycle phase.
- "Route" could mean a driving Activity or the navigational path within any Activity. Resolved: a driving route is an Activity; the exported waypoints sent to Maps are an implementation detail of that Activity.
- "Share" means two things: sharing an Active Trip with collaborators (read-write, live collaboration) vs. sharing a completed Trip via link (read-only, viewable by anyone). Context distinguishes — active sharing = collaboration, completed sharing = publishing.

## Key Design Principles

- **Tool-first, AI-enhanced**: the app is fully functional without AI. The AI makes it faster and smarter but is never a gate.
- **Minimal friction**: no forced onboarding, no required fields beyond creating a Trip. Preferences build up naturally over time.
- **One source of truth**: the plan is a living document. Its final state IS the historical record.
- **Map role shifts by phase**: secondary during planning/active (timeline dominates), primary when sharing (the visual hook).
- **Personal tool first**: sharing via links, no social feed. Data model supports future community/discovery publishing.
- **AI knows you**: Preferences (explicit + inferred) and past Trip history feed every AI interaction as implicit context.
