import { useState } from "react";

const sections = [
  {
    id: "overview",
    title: "Overview",
    icon: "🧭",
  },
  {
    id: "problem",
    title: "The Problem We Solve",
    icon: "🔥",
  },
  {
    id: "core-flow",
    title: "Core Flow",
    icon: "⚡",
  },
  {
    id: "planning",
    title: "Trip Planning",
    icon: "📍",
  },
  {
    id: "collaboration",
    title: "Group Collaboration",
    icon: "👥",
  },
  {
    id: "photos",
    title: "Photo Sync",
    icon: "📸",
  },
  {
    id: "sharing",
    title: "Public Sharing",
    icon: "🌐",
  },
  {
    id: "monetization",
    title: "Monetization",
    icon: "💰",
  },
  {
    id: "technical",
    title: "Technical Scope",
    icon: "🔧",
  },
  {
    id: "phases",
    title: "Build Phases",
    icon: "🚀",
  },
  {
    id: "risks",
    title: "Risks & Mitigations",
    icon: "⚠️",
  },
];

const priorityColors = {
  "P0": { bg: "var(--callout-red-bg)", text: "var(--callout-red-text)", border: "var(--callout-red-border)" },
  "P1": { bg: "var(--callout-amber-bg)", text: "var(--callout-amber-text)", border: "var(--callout-amber-border)" },
  "P2": { bg: "var(--callout-blue-bg)", text: "var(--callout-blue-text)", border: "var(--callout-blue-border)" },
};

function PriorityBadge({ level }) {
  const c = priorityColors[level];
  return (
    <span
      style={{
        display: "inline-block",
        padding: "2px 10px",
        borderRadius: "12px",
        fontSize: "11px",
        fontWeight: 700,
        letterSpacing: "0.5px",
        background: c.bg,
        color: c.text,
        border: `1px solid ${c.border}`,
        marginRight: "8px",
        fontFamily: "'JetBrains Mono', monospace",
      }}
    >
      {level}
    </span>
  );
}

function FeatureCard({ priority, title, description, details }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
        borderRadius: "10px",
        padding: "16px",
        marginBottom: "12px",
        cursor: details ? "pointer" : "default",
        transition: "box-shadow 0.15s",
        boxShadow: open ? "0 2px 12px var(--shadow-color)" : "none",
      }}
      onClick={() => details && setOpen(!open)}
    >
      <div style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
        <PriorityBadge level={priority} />
        <div style={{ flex: 1 }}>
          <div
            style={{
              fontWeight: 600,
              fontSize: "15px",
              color: "var(--text-primary)",
              marginBottom: "4px",
              fontFamily: "'Source Serif 4', Georgia, serif",
            }}
          >
            {title}
            {details && (
              <span
                style={{
                  marginLeft: "8px",
                  fontSize: "12px",
                  color: "var(--text-faint)",
                  fontFamily: "sans-serif",
                  fontWeight: 400,
                }}
              >
                {open ? "▾" : "▸"}
              </span>
            )}
          </div>
          <div
            style={{
              fontSize: "13.5px",
              color: "var(--text-muted)",
              lineHeight: 1.5,
              fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
            }}
          >
            {description}
          </div>
        </div>
      </div>
      {open && details && (
        <div
          style={{
            marginTop: "12px",
            paddingTop: "12px",
            borderTop: "1px solid var(--border-light)",
            fontSize: "13px",
            color: "var(--text-secondary)",
            lineHeight: 1.65,
            fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
          }}
        >
          {details.map((d, i) => (
            <div key={i} style={{ marginBottom: "6px", paddingLeft: "12px", borderLeft: "2px solid var(--border)" }}>
              {d}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function PhaseBlock({ number, title, weeks, items, color }) {
  return (
    <div
      style={{
        background: "var(--bg-card)",
        border: `2px solid ${color}`,
        borderRadius: "12px",
        padding: "20px",
        marginBottom: "16px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
        <div
          style={{
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            background: color,
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 800,
            fontSize: "16px",
            fontFamily: "'JetBrains Mono', monospace",
          }}
        >
          {number}
        </div>
        <div>
          <div
            style={{
              fontWeight: 700,
              fontSize: "16px",
              color: "var(--text-primary)",
              fontFamily: "'Source Serif 4', Georgia, serif",
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: "12px",
              color: "var(--text-muted)",
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            {weeks}
          </div>
        </div>
      </div>
      {items.map((item, i) => (
        <div
          key={i}
          style={{
            padding: "8px 12px",
            fontSize: "13.5px",
            color: "var(--text-secondary)",
            borderLeft: `3px solid ${color}`,
            marginBottom: "6px",
            marginLeft: "18px",
            lineHeight: 1.5,
            fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
          }}
        >
          {item}
        </div>
      ))}
    </div>
  );
}

export default function TripSquadProposal() {
  const [activeSection, setActiveSection] = useState("overview");

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--bg-page)",
        fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,400;8..60,600;8..60,700;8..60,800&family=IBM+Plex+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap"
        rel="stylesheet"
      />

      {/* Header */}
      <div
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)",
          padding: "40px 24px 32px",
          color: "#fff",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div
            style={{
              fontSize: "11px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "#94a3b8",
              marginBottom: "8px",
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            Product Proposal · v1.0
          </div>
          <h1
            style={{
              fontSize: "36px",
              fontWeight: 800,
              margin: "0 0 8px",
              fontFamily: "'Source Serif 4', Georgia, serif",
              letterSpacing: "-0.5px",
            }}
          >
            TripSquad
          </h1>
          <p
            style={{
              fontSize: "17px",
              color: "#cbd5e1",
              margin: 0,
              lineHeight: 1.5,
              maxWidth: "600px",
            }}
          >
            One link. Everyone plans. Nobody downloads a spreadsheet. The group trip coordinator that replaces WhatsApp + Google Docs + Splitwise.
          </p>
          <div
            style={{
              marginTop: "20px",
              display: "flex",
              gap: "16px",
              flexWrap: "wrap",
              fontSize: "12px",
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            <span style={{ color: "#94a3b8" }}>
              Platform: <span style={{ color: "#e2e8f0" }}>iOS first</span>
            </span>
            <span style={{ color: "#94a3b8" }}>
              Team: <span style={{ color: "#e2e8f0" }}>2 engineers</span>
            </span>
            <span style={{ color: "#94a3b8" }}>
              Target: <span style={{ color: "#e2e8f0" }}>8-week MVP</span>
            </span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div
        style={{
          background: "var(--bg-card)",
          borderBottom: "1px solid var(--border)",
          position: "sticky",
          top: 0,
          zIndex: 10,
          overflowX: "auto",
          WebkitOverflowScrolling: "touch",
        }}
      >
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            display: "flex",
            gap: "0",
            padding: "0 16px",
          }}
        >
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveSection(s.id)}
              style={{
                padding: "12px 14px",
                fontSize: "12px",
                fontWeight: activeSection === s.id ? 700 : 500,
                color: activeSection === s.id ? "var(--text-primary)" : "var(--text-muted)",
                background: "none",
                border: "none",
                borderBottom: activeSection === s.id ? "2px solid var(--text-primary)" : "2px solid transparent",
                cursor: "pointer",
                whiteSpace: "nowrap",
                fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
                transition: "all 0.15s",
              }}
            >
              <span style={{ marginRight: "4px" }}>{s.icon}</span>
              {s.title}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "32px 24px 80px" }}>
        {/* OVERVIEW */}
        {activeSection === "overview" && (
          <div>
            <h2
              style={{
                fontSize: "24px",
                fontWeight: 700,
                marginBottom: "16px",
                fontFamily: "'Source Serif 4', Georgia, serif",
                color: "var(--text-primary)",
              }}
            >
              What is TripSquad?
            </h2>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "var(--text-secondary)", marginBottom: "20px" }}>
              TripSquad is an iOS app that replaces the WhatsApp group chat + Google Doc + Splitwise stack for planning group trips. One person creates a trip, drops a pin on a city, and gets a shareable link. Everyone else opens the link — no spreadsheet, no chaos — and collaborates on a single living plan with polls, voting, a timeline, and photo sync.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "var(--text-secondary)", marginBottom: "20px" }}>
              After the trip, the whole experience — timeline, photos, map — becomes a shareable artifact. Vloggers and travel creators link it in their video descriptions so viewers can clone entire trips as templates or cherry-pick individual spots.
            </p>

            <div
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                padding: "20px",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "var(--text-muted)",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  marginBottom: "12px",
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                Core thesis
              </div>
              <div style={{ fontSize: "17px", lineHeight: 1.6, color: "var(--text-primary)", fontStyle: "italic", fontFamily: "'Source Serif 4', Georgia, serif" }}>
                "Group trips don't fail because people can't find places to go. They fail because 6 people can't decide in a WhatsApp thread. We fix the decision layer — then the plan builds itself."
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "12px",
              }}
            >
              {[
                { label: "Target user", value: "The group trip organizer (the friend who always plans)" },
                { label: "Trip size", value: "3–10 people" },
                { label: "Trip type", value: "Multi-day leisure trips (weekends, vacations)" },
                { label: "Cold start", value: "1 organizer invites 4–8 people per trip" },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    borderRadius: "8px",
                    padding: "14px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "11px",
                      color: "var(--text-faint)",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                      marginBottom: "4px",
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    {item.label}
                  </div>
                  <div style={{ fontSize: "14px", color: "var(--text-primary)", fontWeight: 500 }}>{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PROBLEM */}
        {activeSection === "problem" && (
          <div>
            <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "16px", fontFamily: "'Source Serif 4', Georgia, serif", color: "var(--text-primary)" }}>
              The Problem We Solve
            </h2>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "var(--text-secondary)", marginBottom: "20px" }}>
              Every group trip today is planned through the same broken stack. The research confirms this isn't a theoretical problem — it's the single most consistently complained-about travel workflow across Reddit, travel forums, app reviews, and independent travel guides.
            </p>

            <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "12px", padding: "20px", marginBottom: "20px" }}>
              <div style={{ fontSize: "13px", fontWeight: 700, color: "var(--callout-red-text)", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "16px", fontFamily: "'JetBrains Mono', monospace" }}>
                The current stack (what we replace)
              </div>
              {[
                { app: "WhatsApp / iMessage", job: "Coordination & suggestions", broken: "Links get buried in 47 messages. No structure, no decisions, no record." },
                { app: "Google Docs / Notes", job: "The shared itinerary", broken: "One person maintains it. Nobody else reads it. Version confusion." },
                { app: "Splitwise", job: "Splitting costs", broken: "Disconnected from the trip plan. Manual entry. Currency conversion paywalled." },
                { app: "Google Maps", job: "Finding places", broken: "Can't share collections that everyone can edit and vote on." },
                { app: "Doodle / When2meet", job: "Date polling", broken: "Yet another tool. Results don't connect to the trip plan." },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "12px", marginBottom: "14px", fontSize: "13.5px" }}>
                  <div style={{ width: "130px", flexShrink: 0, fontWeight: 600, color: "var(--text-primary)" }}>{item.app}</div>
                  <div style={{ flex: 1 }}>
                    <span style={{ color: "var(--text-muted)" }}>{item.job}</span>
                    <div style={{ color: "var(--callout-red-text)", marginTop: "2px", fontSize: "12.5px" }}>→ {item.broken}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ background: "var(--callout-amber-bg)", border: "1px solid var(--callout-amber-border)", borderRadius: "10px", padding: "16px", fontSize: "14px", lineHeight: 1.6, color: "var(--callout-amber-text)" }}>
              <strong>Why this is a painkiller, not a vitamin:</strong> Unlike solo trip planning (which people tolerate), group coordination has real social costs — resentment toward the organizer, budget fights that ruin friendships, and trips that simply don't happen because the WhatsApp thread died. The organizer who "always ends up doing everything" is the person who will pay to make it stop.
            </div>
          </div>
        )}

        {/* CORE FLOW */}
        {activeSection === "core-flow" && (
          <div>
            <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "16px", fontFamily: "'Source Serif 4', Georgia, serif", color: "var(--text-primary)" }}>
              Core User Flow
            </h2>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "var(--text-secondary)", marginBottom: "24px" }}>
              The entire product can be understood as one flow with five stages. Each stage solves a distinct problem in the group trip lifecycle.
            </p>

            {[
              {
                step: "1",
                title: "Create & Pin",
                who: "Organizer",
                desc: "Open app → Create trip → Drop a pin on a city (or search). The app surfaces famous places, landmarks, and top-rated spots in and around that area. Organizer can immediately add spots to a shared shortlist or leave it open for the group.",
                color: "#2563eb",
              },
              {
                step: "2",
                title: "Invite & Discover",
                who: "Organizer → Group",
                desc: "Organizer shares a link (iMessage, WhatsApp, email). Group members open the link and land in the trip. They browse the area's famous places, search for their own, and add anything to the shared shortlist. No friction — everyone can contribute from the moment they join.",
                color: "#7c3aed",
              },
              {
                step: "3",
                title: "Vote & Decide",
                who: "Everyone",
                desc: "Every place on the shortlist gets a poll. Swipe right/left or tap yes/no/maybe. The organizer sees ranked results and promotes winners to the timeline. For contested picks (beach vs. museum), the group can see the vote split and discuss in-context — not in a separate chat thread.",
                color: "#059669",
              },
              {
                step: "4",
                title: "Build the Timeline",
                who: "Everyone, Organizer finalizes",
                desc: "Promoted places slot into a day-by-day timeline. The app suggests logical ordering based on geography (cluster nearby spots on the same day). Anyone can drag to rearrange. Organizer can lock days when finalized. Travel time between spots is shown automatically.",
                color: "#d97706",
              },
              {
                step: "5",
                title: "Go, Capture, Share",
                who: "Everyone",
                desc: "During and after the trip: photos auto-tag to the timeline by GPS/timestamp. Each person confirms which photos to contribute. Duplicates are suppressed. One tap to share the entire trip — as a visual timeline with photos on a map — with anyone, or publish it as a public template.",
                color: "#dc2626",
              },
            ].map((s) => (
              <div
                key={s.step}
                style={{
                  display: "flex",
                  gap: "16px",
                  marginBottom: "20px",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: s.color,
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 800,
                    fontSize: "18px",
                    flexShrink: 0,
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  {s.step}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: "16px", color: "var(--text-primary)", fontFamily: "'Source Serif 4', Georgia, serif" }}>
                    {s.title}
                  </div>
                  <div style={{ fontSize: "11px", color: s.color, fontWeight: 600, marginBottom: "4px", fontFamily: "'JetBrains Mono', monospace" }}>
                    {s.who}
                  </div>
                  <div style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: 1.6 }}>{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* PLANNING */}
        {activeSection === "planning" && (
          <div>
            <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "8px", fontFamily: "'Source Serif 4', Georgia, serif", color: "var(--text-primary)" }}>
              Trip Planning Features
            </h2>
            <p style={{ fontSize: "14px", color: "var(--text-muted)", marginBottom: "20px" }}>
              Tap any feature to see implementation details. Priority: P0 = MVP must-have, P1 = week 6–8, P2 = post-launch.
            </p>

            <FeatureCard
              priority="P0"
              title="Drop-a-Pin City Selection"
              description="Tap the map or search for a city. This is the starting action for every trip."
              details={[
                "Map view with search bar at top. Supports city-level and region-level pins.",
                "On pin drop: reverse geocode to city name, store coordinates + bounding box.",
                "Immediately triggers the Famous Places feed for that area.",
                "Multiple pins supported (multi-city trips) — each pin gets its own place feed.",
              ]}
            />
            <FeatureCard
              priority="P0"
              title="Famous Places Feed"
              description="After pinning a city, the app surfaces top-rated and famous places in and around the area — restaurants, landmarks, activities, viewpoints."
              details={[
                "Powered by Google Places API (or Foursquare as fallback). Categorized: eat, see, do, stay.",
                "Each place shows: name, photo, rating, category, distance from city center.",
                "One-tap to add any place to the trip's shared shortlist.",
                "Search within the feed for specific types ('ramen', 'sunset viewpoint', 'museum').",
                "AI suggestion layer (P1): once the timeline has dates and some spots, suggest gap-fillers based on what's popular nearby and what times are open.",
              ]}
            />
            <FeatureCard
              priority="P0"
              title="Day-by-Day Timeline"
              description="Places promoted from the shortlist slot into a visual day-by-day timeline. Drag to reorder. Tap to see details."
              details={[
                "Each day is a vertical list of activities in time order.",
                "Auto-calculate travel time between consecutive spots (driving/walking/transit via Maps API).",
                "Show open/close hours per venue where available.",
                "Drag-and-drop between days. Reordering triggers travel-time recalculation.",
                "Color-coded by category (eat = orange, see = blue, do = green).",
                "Organizer can 'lock' a day to prevent further edits.",
              ]}
            />
            <FeatureCard
              priority="P1"
              title="Smart Suggestions on Timeline Gaps"
              description="Once a timeline has some spots placed, the app notices gaps (empty mornings, long idle windows) and suggests nearby places that fit."
              details={[
                "Gap detection: if Day 2 has an activity at 10am and another at 4pm, suggest something for the middle.",
                "Suggestions ranked by: proximity to adjacent spots, rating, category diversity (don't suggest 3 museums in a row).",
                "Suggestions appear as ghost cards in the timeline — tap to add, swipe to dismiss.",
                "This is where light AI can add value without being the core product.",
              ]}
            />
            <FeatureCard
              priority="P0"
              title="Map View"
              description="All shortlisted and timeline-placed spots shown on a single map. Color-coded by day."
              details={[
                "Toggle between map view and timeline view.",
                "Tap a pin on the map to see the place card (name, photo, which day it's on, vote count).",
                "Route lines connecting same-day spots to visualize the day's flow.",
                "Cluster view when zoomed out; individual pins when zoomed in.",
              ]}
            />
            <FeatureCard
              priority="P2"
              title="Export to Google Maps / Apple Maps"
              description="One-tap export of a day's itinerary to native maps for turn-by-turn navigation."
              details={[
                "Generates a Google Maps URL with waypoints in order.",
                "Alternatively opens Apple Maps with the route.",
                "Solves the 'we planned it but now we're driving around lost' problem.",
              ]}
            />
          </div>
        )}

        {/* COLLABORATION */}
        {activeSection === "collaboration" && (
          <div>
            <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "8px", fontFamily: "'Source Serif 4', Georgia, serif", color: "var(--text-primary)" }}>
              Group Collaboration Features
            </h2>
            <p style={{ fontSize: "14px", color: "var(--text-muted)", marginBottom: "20px" }}>
              This is the core differentiator. Every feature is designed so the organizer stops being the bottleneck and the group makes decisions together without chaos.
            </p>

            <FeatureCard
              priority="P0"
              title="Shareable Trip Link"
              description="One link to join the trip. Invitees get full access to browse, add places, and vote. The exact access model (account required vs. guest) is TBD for implementation."
              details={[
                "Organizer taps 'Invite' → generates a unique URL.",
                "Shareable via iMessage, WhatsApp, email, or any messaging app.",
                "Link opens the trip in-app (if installed) or falls back to a web preview with an App Store prompt.",
                "Access model for invitees is an implementation decision to be finalized during development — options range from no-account (name only) to lightweight email signup.",
              ]}
            />
            <FeatureCard
              priority="P0"
              title="Shared Shortlist with Voting"
              description="Anyone in the trip can add places to a shared shortlist. Every place gets an inline poll — swipe or tap yes/no/maybe."
              details={[
                "Shortlist is the staging area. Places live here until promoted to the timeline.",
                "Each place shows: total votes, vote breakdown (who said yes/no/maybe).",
                "Sort shortlist by: most votes, most recent, category.",
                "Anyone can add places at any time — from the Famous Places feed, from search, or by pasting a Google Maps link.",
                "Discussion thread per place (short comments, not a full chat) — keeps context next to the decision, not in WhatsApp.",
              ]}
            />
            <FeatureCard
              priority="P0"
              title="Organizer Promotes to Timeline"
              description="The organizer reviews vote results and promotes winning places to the day-by-day timeline. The group suggests, the organizer decides."
              details={[
                "Promote button on any shortlisted place. Organizer picks which day and rough time slot.",
                "Batch promote: select multiple places and auto-assign to a day based on geography.",
                "Demote: move a timeline item back to the shortlist if plans change.",
                "The organizer role can be shared (co-organizers) for larger groups.",
              ]}
            />
            <FeatureCard
              priority="P1"
              title="Date Polling"
              description="Before the trip has dates, the organizer can create a date poll — everyone marks which date ranges work for them."
              details={[
                "Organizer sets candidate date ranges (e.g., 'June 12–15' vs 'June 19–22').",
                "Each member marks available / not available / flexible per range.",
                "Results shown as a heat map — green = everyone available, red = conflicts.",
                "Once decided, the organizer locks the dates and the timeline maps to real calendar days.",
              ]}
            />
            <FeatureCard
              priority="P2"
              title="In-Trip Expense Splitting"
              description="Basic expense tracking built into the trip. Someone pays for dinner — log it, split it, settle up at the end."
              details={[
                "Add an expense: amount, who paid, split equally or custom.",
                "Running balance per person: 'Alex owes Maria $47'.",
                "Settlement suggestions at trip end: minimum number of transfers to settle all debts.",
                "Currency conversion for international trips (potential paid feature).",
                "This is P2 because Splitwise exists and works. Only build this if user research shows people want it in the same app.",
              ]}
            />
            <FeatureCard
              priority="P1"
              title="Real-Time Activity Feed"
              description="A chronological feed showing what's happening in the trip — who added a place, who voted, who promoted something to the timeline."
              details={[
                "Keeps everyone aware of changes without push-notification overload.",
                "Lightweight: just a feed, not a chat. No replies, no threads.",
                "Push notifications only for: new place added, vote results ready, timeline finalized by organizer.",
              ]}
            />
          </div>
        )}

        {/* PHOTOS */}
        {activeSection === "photos" && (
          <div>
            <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "8px", fontFamily: "'Source Serif 4', Georgia, serif", color: "var(--text-primary)" }}>
              Photo Sync & Timeline Tagging
            </h2>
            <p style={{ fontSize: "14px", color: "var(--text-muted)", marginBottom: "20px" }}>
              The group trip's shared photo album — without the "send me your pics" WhatsApp thread. Photos auto-tag to the timeline, duplicates are suppressed, and sharing the whole trip is one tap.
            </p>

            <FeatureCard
              priority="P0"
              title="Auto-Detect & Suggest Upload"
              description="After (or during) the trip, the app scans your camera roll for photos matching the trip's dates and locations. It suggests which photos to contribute — you confirm before anything uploads."
              details={[
                "Uses iOS Photo Library access: filter by date range (trip start → trip end) and GPS coordinates (within radius of any timeline activity).",
                "Presents matched photos in a review screen: 'We found 43 photos from your trip. Select which to share.'",
                "Default: all matched photos are pre-selected. User can deselect any.",
                "Upload only happens after explicit confirmation. No surprise uploads.",
                "Also supports manual selection: browse camera roll and pick photos yourself.",
              ]}
            />
            <FeatureCard
              priority="P0"
              title="Auto-Tag to Timeline"
              description="Each uploaded photo is automatically matched to the nearest activity on the timeline by GPS coordinates and timestamp."
              details={[
                "Matching logic: (1) find the timeline activity whose GPS coordinates are closest to the photo's GPS, within a 500m radius; (2) if multiple candidates, pick the one whose time window best matches the photo timestamp.",
                "Photos that don't match any activity go into an 'Unassigned' bucket — the user can manually drag them to an activity.",
                "Each activity on the timeline shows a photo count badge and a mini gallery preview.",
              ]}
            />
            <FeatureCard
              priority="P1"
              title="Duplicate Suppression"
              description="When multiple people upload photos of the same moment, the app detects near-duplicates and keeps the best one (or lets the group pick)."
              details={[
                "Detection method: perceptual hash (pHash) comparison on thumbnails. Photos taken within 30 seconds of each other at the same GPS location are flagged as potential duplicates.",
                "Default behavior: keep all but group them. Show one in the main timeline; tap to see all versions.",
                "Optional: auto-pick the 'best' (highest resolution, least blurry) and archive the rest.",
              ]}
            />
            <FeatureCard
              priority="P0"
              title="Shared Photo Timeline View"
              description="Everyone in the trip sees the same photo timeline — a unified view of everyone's photos, organized by day and activity."
              details={[
                "Scroll through the trip day by day. Each activity shows its tagged photos.",
                "Filter by contributor ('Show only Maria's photos').",
                "Tap any photo to see full-screen with metadata: who took it, when, where.",
                "This is the core of the post-trip experience — the trip record everyone can revisit.",
              ]}
            />
            <FeatureCard
              priority="P1"
              title="One-Tap Share Package"
              description="Share the entire trip's photo timeline with one button — as a link, not as 200 individual photos in a WhatsApp thread."
              details={[
                "Generates a shareable link to a web view of the trip: map + timeline + photos.",
                "Recipients don't need the app — it's a web page.",
                "Option to download all photos as a zip (organized by day).",
                "This is also the basis for the public sharing / vlogger feature.",
              ]}
            />
            <FeatureCard
              priority="P2"
              title="Notification to Contribute"
              description="After the trip ends, send a push notification to all group members: 'The trip is over! Share your photos with the group.'"
              details={[
                "Triggered 24 hours after the trip end date.",
                "Links directly to the auto-detect review screen.",
                "Follow-up reminder after 3 days if the person hasn't contributed.",
                "Solves the 'I forgot to send my photos' problem permanently.",
              ]}
            />
          </div>
        )}

        {/* SHARING */}
        {activeSection === "sharing" && (
          <div>
            <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "8px", fontFamily: "'Source Serif 4', Georgia, serif", color: "var(--text-primary)" }}>
              Public Sharing & Creator Distribution
            </h2>
            <p style={{ fontSize: "14px", color: "var(--text-muted)", marginBottom: "20px" }}>
              Every completed trip is a shareable artifact. For regular users, it's a memory they send to friends. For vloggers and travel creators, it's a link in their video description that drives organic installs.
            </p>

            <FeatureCard
              priority="P1"
              title="Public Trip Page"
              description="A web-hosted page showing the full trip: interactive map with pins, day-by-day timeline, photos at each stop. No app needed to view."
              details={[
                "Rendered as a responsive web page at tripsquad.app/trip/{id}.",
                "Interactive map: pins for each activity, color-coded by day, route lines between stops.",
                "Timeline view: scroll through days, see photos, read notes/descriptions.",
                "Gallery view: all photos organized by activity.",
                "SEO-indexable: 'Best things to do in Lisbon' → real trips with real photos rank organically.",
              ]}
            />
            <FeatureCard
              priority="P1"
              title="Clone Full Trip as Template"
              description="A viewer sees a trip they love and clones it into their own account as a starting template. All places and timeline intact — they customize dates, add/remove spots, invite their own group."
              details={[
                "One button: 'Use this trip as a template.'",
                "Creates a new trip in the viewer's account pre-populated with all places and the day structure.",
                "Photos and notes from the original are NOT cloned (privacy). Only places and timeline.",
                "The viewer's group can then vote, edit, and make it their own.",
              ]}
            />
            <FeatureCard
              priority="P1"
              title="Cherry-Pick Individual Spots"
              description="Instead of cloning the whole trip, a viewer can tap any individual activity and save it to their own trip."
              details={[
                "'Add to my trip' button on each activity card in the public view.",
                "Saved spots go into the viewer's shortlist on their own trip.",
                "If the viewer doesn't have a trip yet, saving a spot prompts them to create one.",
              ]}
            />
            <FeatureCard
              priority="P1"
              title="Creator / Vlogger Link"
              description="Travel YouTubers and bloggers plan their trip in TripSquad. After the trip, they publish it and drop the link in their video description. Viewers explore the interactive map, clone the trip, and become users."
              details={[
                "This is the primary organic growth channel, modeled after Strava's activity-sharing loop.",
                "Creator workflow: plan trip → take trip → photos auto-tag → tap 'Publish' → get a public link.",
                "The link in a YouTube description targets high-intent viewers (they just watched a travel vlog — they want to go there).",
                "Vlogger's call-to-action: 'Full interactive itinerary linked below — clone it and make it your own.'",
                "No special 'creator' tier needed in v1. Every user can publish a trip publicly.",
              ]}
            />
            <FeatureCard
              priority="P2"
              title="Discover Feed (Future)"
              description="A browse-and-discover feed of publicly shared trips, searchable by destination."
              details={[
                "Not in v1. The public trip pages + SEO + creator sharing generate the initial content inventory.",
                "Once there are 1,000+ public trips: build a simple discovery page.",
                "Search: 'trips in Portugal', 'road trips in Scotland', '5-day Japan itinerary.'",
                "Ranked by: recency, photo quality, clone count.",
              ]}
            />
          </div>
        )}

        {/* MONETIZATION */}
        {activeSection === "monetization" && (
          <div>
            <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "8px", fontFamily: "'Source Serif 4', Georgia, serif", color: "var(--text-primary)" }}>
              Monetization Strategy
            </h2>
            <p style={{ fontSize: "14px", color: "var(--text-muted)", marginBottom: "20px" }}>
              Based on what actually works in travel apps (Polarsteps, Flighty, Splitwise), not theoretical SaaS pricing. Three proven patterns, ranked by fit.
            </p>

            <div style={{ background: "var(--bg-card)", border: "2px solid #059669", borderRadius: "12px", padding: "20px", marginBottom: "20px" }}>
              <div style={{ fontSize: "13px", fontWeight: 700, color: "#059669", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px", fontFamily: "'JetBrains Mono', monospace" }}>
                Recommended · Primary Revenue
              </div>
              <div style={{ fontSize: "18px", fontWeight: 700, color: "var(--text-primary)", marginBottom: "8px", fontFamily: "'Source Serif 4', Georgia, serif" }}>
                Organizer Pro — $39/year or $4.99/month
              </div>
              <div style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: 1.65, marginBottom: "12px" }}>
                The organizer pays. Group members always free. This mirrors the Splitwise pattern: the person who cares most about the tool (the organizer-personality) converts at 3–5x the rate of casual users. The paywall gates power-organizer features, not basic collaboration.
              </div>
              <div style={{ fontSize: "13px", color: "var(--text-muted)", lineHeight: 1.6 }}>
                <strong>Free tier:</strong> Unlimited trips, up to 8 group members, shared shortlist with voting, basic timeline, photo sync (50 photos per trip), 1 public trip link.
              </div>
              <div style={{ fontSize: "13px", color: "var(--text-muted)", lineHeight: 1.6, marginTop: "8px" }}>
                <strong>Pro tier unlocks:</strong> Unlimited group size, unlimited photo sync, unlimited public trip links, date polling, expense splitting with multi-currency, AI timeline suggestions, export to Google Maps, priority photo-book printing (future).
              </div>
            </div>

            <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "12px", padding: "20px", marginBottom: "20px" }}>
              <div style={{ fontSize: "13px", fontWeight: 700, color: "#d97706", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px", fontFamily: "'JetBrains Mono', monospace" }}>
                Future · High-Margin Add-On
              </div>
              <div style={{ fontSize: "18px", fontWeight: 700, color: "var(--text-primary)", marginBottom: "8px", fontFamily: "'Source Serif 4', Georgia, serif" }}>
                Printed Photo Books — €36–€150 per book
              </div>
              <div style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: 1.65 }}>
                Polarsteps' proven model: users generate trip content for free, then pay for a physical artifact at the emotional peak (just got home, memories are fresh). The photo timeline we build is the perfect raw material for an auto-generated photo book. Partner with a print-on-demand service (Peecho, Printful) — no inventory, no shipping logistics on our end. This is the highest-margin revenue stream in consumer travel ($10M ARR for Polarsteps on books alone).
              </div>
            </div>

            <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "12px", padding: "20px", marginBottom: "20px" }}>
              <div style={{ fontSize: "13px", fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px", fontFamily: "'JetBrains Mono', monospace" }}>
                Future · Affiliate
              </div>
              <div style={{ fontSize: "18px", fontWeight: 700, color: "var(--text-primary)", marginBottom: "8px", fontFamily: "'Source Serif 4', Georgia, serif" }}>
                Booking Affiliate Links
              </div>
              <div style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: 1.65 }}>
                When a place on the timeline is a bookable hotel, restaurant, or experience, show a "Book this" button powered by affiliate programs (Booking.com, GetYourGuide, Viator). Earn 3–8% per booking. Only pursue this after 10K+ monthly active trips generate enough volume.
              </div>
            </div>

            <div style={{ background: "var(--bg-subtle)", border: "1px dashed var(--border-muted)", borderRadius: "10px", padding: "16px", fontSize: "13px", lineHeight: 1.6, color: "var(--text-muted)" }}>
              <strong>Why NOT per-trip pricing:</strong> Per-trip pricing ($5/trip) sounds simple but creates friction at the exact moment of highest enthusiasm. Annual subscription converts the organizer once and they plan 3–6 trips/year — higher LTV, lower churn. Splitwise, Flighty, and TripIt all use annual subscriptions, not per-use pricing.
            </div>
          </div>
        )}

        {/* TECHNICAL */}
        {activeSection === "technical" && (
          <div>
            <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "8px", fontFamily: "'Source Serif 4', Georgia, serif", color: "var(--text-primary)" }}>
              Technical Scope & Architecture
            </h2>
            <p style={{ fontSize: "14px", color: "var(--text-muted)", marginBottom: "20px" }}>
              What two engineers need to build, and what they can defer. Designed for 8-week MVP feasibility.
            </p>

            <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "12px", padding: "20px", marginBottom: "16px" }}>
              <div style={{ fontSize: "14px", fontWeight: 700, color: "var(--text-primary)", marginBottom: "12px", fontFamily: "'Source Serif 4', Georgia, serif" }}>
                iOS App (Swift / SwiftUI)
              </div>
              {[
                "Map view (MapKit) with pin-drop, place search, and route lines",
                "Trip creation flow with day-by-day timeline (drag-and-drop via native gestures)",
                "Shortlist with inline voting UI (swipe cards or yes/no/maybe buttons)",
                "Photo library access (PhotoKit) for auto-detect + manual selection",
                "Photo upload with GPS/timestamp metadata for auto-tagging",
                "Push notifications (APNs) for trip invites, vote results, photo contribution reminders",
                "Deep linking for shareable trip URLs (Universal Links)",
              ].map((item, i) => (
                <div key={i} style={{ fontSize: "13.5px", color: "var(--text-secondary)", padding: "6px 0 6px 12px", borderLeft: "2px solid var(--border)", marginBottom: "4px" }}>
                  {item}
                </div>
              ))}
            </div>

            <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "12px", padding: "20px", marginBottom: "16px" }}>
              <div style={{ fontSize: "14px", fontWeight: 700, color: "var(--text-primary)", marginBottom: "12px", fontFamily: "'Source Serif 4', Georgia, serif" }}>
                Backend
              </div>
              {[
                "Real-time sync for collaborative editing (consider Supabase Realtime or Firebase)",
                "REST/GraphQL API for trip CRUD, place search proxy, vote tallying",
                "Google Places API integration (place search, place details, photos)",
                "Photo storage (S3-compatible) with thumbnail generation",
                "Perceptual hashing for duplicate detection (server-side)",
                "Auth (email + Apple Sign In at minimum)",
                "Public trip page renderer (server-side rendered web page or static site per trip)",
              ].map((item, i) => (
                <div key={i} style={{ fontSize: "13.5px", color: "var(--text-secondary)", padding: "6px 0 6px 12px", borderLeft: "2px solid var(--border)", marginBottom: "4px" }}>
                  {item}
                </div>
              ))}
            </div>

            <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "12px", padding: "20px", marginBottom: "16px" }}>
              <div style={{ fontSize: "14px", fontWeight: 700, color: "var(--text-primary)", marginBottom: "12px", fontFamily: "'Source Serif 4', Georgia, serif" }}>
                External APIs & Services
              </div>
              {[
                "Google Places API — place search, details, photos ($17 per 1K detail requests)",
                "MapKit / Google Maps SDK — map rendering, directions, travel time",
                "Apple Push Notification Service — notifications",
                "S3 / Cloudflare R2 — photo storage (R2 has free egress, significantly cheaper)",
                "Supabase or Firebase — real-time sync, auth, database",
                "Optional: OpenAI API — for smart timeline suggestions (P1, not MVP)",
              ].map((item, i) => (
                <div key={i} style={{ fontSize: "13.5px", color: "var(--text-secondary)", padding: "6px 0 6px 12px", borderLeft: "2px solid var(--border)", marginBottom: "4px" }}>
                  {item}
                </div>
              ))}
            </div>

            <div style={{ background: "var(--callout-amber-bg)", border: "1px solid var(--callout-amber-border)", borderRadius: "10px", padding: "16px", fontSize: "13px", lineHeight: 1.6, color: "var(--callout-amber-text)" }}>
              <strong>Cost estimate (pre-scale):</strong> At 1,000 monthly active trips with ~5 people each: Google Places API ~$85/mo, photo storage ~$20/mo, Supabase ~$25/mo, Apple Developer $99/yr. Total: ~$140/month + $99/year. Manageable for bootstrapping.
            </div>
          </div>
        )}

        {/* PHASES */}
        {activeSection === "phases" && (
          <div>
            <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "8px", fontFamily: "'Source Serif 4', Georgia, serif", color: "var(--text-primary)" }}>
              Build Phases
            </h2>
            <p style={{ fontSize: "14px", color: "var(--text-muted)", marginBottom: "20px" }}>
              Ruthlessly scoped to what two engineers can ship. Each phase has a kill/continue decision point.
            </p>

            <PhaseBlock
              number={1}
              title="Core Loop — Plan & Invite"
              weeks="Weeks 1–4"
              color="#2563eb"
              items={[
                "Trip creation: name + city pin drop",
                "Famous Places feed from Google Places API",
                "Shared shortlist: add places, yes/no/maybe voting",
                "Shareable invite link (deep link into app)",
                "Organizer promotes voted places to day-by-day timeline",
                "Basic map view with pins",
                "Auth: Apple Sign In + email",
              ]}
            />
            <div style={{ background: "var(--callout-blue-bg)", borderRadius: "8px", padding: "12px 16px", marginBottom: "20px", fontSize: "13px", color: "var(--callout-blue-text)" }}>
              <strong>Decision point (week 4):</strong> Can you get 5 real friend groups to plan a real trip using the app? If yes → continue. If nobody shares the link to their group → re-evaluate the invite flow.
            </div>

            <PhaseBlock
              number={2}
              title="Photos & Polish"
              weeks="Weeks 5–8"
              color="#7c3aed"
              items={[
                "Photo auto-detect from camera roll (by trip dates + GPS)",
                "Photo upload with auto-tag to timeline activities",
                "Shared photo timeline view (everyone sees all contributed photos)",
                "Basic duplicate detection (perceptual hash)",
                "Date polling for the group",
                "Activity feed (who added what, vote results)",
                "Push notifications: invites, votes, photo contribution reminder",
                "Public trip page (web-hosted, read-only, shareable link)",
              ]}
            />
            <div style={{ background: "var(--callout-purple-bg)", borderRadius: "8px", padding: "12px 16px", marginBottom: "20px", fontSize: "13px", color: "var(--callout-purple-text)" }}>
              <strong>Decision point (week 8):</strong> Launch to TestFlight beta. Target: 20 completed trips with photos. Measure: do people actually share the public trip link? If share rate {">"} 15% of completed trips → the growth loop works. If {"<"} 5% → sharing isn't a natural behavior and the Strava model fails.
            </div>

            <PhaseBlock
              number={3}
              title="Growth & Monetization"
              weeks="Months 3–4"
              color="#059669"
              items={[
                "Clone / cherry-pick from public trips",
                "Organizer Pro subscription (paywall: unlimited photos, group size, date polls)",
                "AI timeline suggestions (fill gaps, smart ordering)",
                "Expense splitting (basic: equal split, who-paid-what, settlement math)",
                "App Store launch",
                "Creator outreach: seed 10 travel YouTubers with the app",
              ]}
            />
            <div style={{ background: "var(--callout-green-bg)", borderRadius: "8px", padding: "12px 16px", marginBottom: "20px", fontSize: "13px", color: "var(--callout-green-text)" }}>
              <strong>Decision point (month 4):</strong> 100+ organizers have created trips. 10+ public trips cloned. 5%+ of organizers converted to Pro. If yes → you have a business. If no → diagnose which part of the funnel breaks.
            </div>

            <PhaseBlock
              number={4}
              title="Scale & Expand"
              weeks="Months 5–12"
              color="#d97706"
              items={[
                "Photo book printing (partner with Peecho/Printful)",
                "Discover feed (browse public trips by destination)",
                "Multi-currency expense splitting",
                "Export to Google Maps / Apple Maps",
                "Android app (if iOS validates)",
                "Booking affiliate links (hotels, experiences)",
                "SEO optimization for public trip pages",
              ]}
            />
          </div>
        )}

        {/* RISKS */}
        {activeSection === "risks" && (
          <div>
            <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "8px", fontFamily: "'Source Serif 4', Georgia, serif", color: "var(--text-primary)" }}>
              Risks & Mitigations
            </h2>
            <p style={{ fontSize: "14px", color: "var(--text-muted)", marginBottom: "20px" }}>
              Every risk from the viability report, cross-referenced with the research, and what this proposal does about each one.
            </p>

            {[
              {
                risk: "Vitamin, not painkiller",
                severity: "High",
                from: "Viability report #1",
                mitigation: "We narrowed to group coordination — the one area where pain is acute and documented. The organizer who does everything is a real person with real resentment. Solo trip planning is a vitamin; group trip chaos is a painkiller for the organizer.",
                color: "#dc2626",
              },
              {
                risk: "18+ month time-to-differentiation",
                severity: "High",
                from: "Viability report #2",
                mitigation: "The full AI-learning vision takes 18 months. This proposal doesn't depend on it. The v1 differentiator is the voting/shortlist/timeline combo — that's useful on trip #1, not trip #3. AI suggestions are P1, not the core.",
                color: "#dc2626",
              },
              {
                risk: "Consumer app economics (2–4% conversion)",
                severity: "High",
                from: "Viability report #3",
                mitigation: "We target the organizer, not the group. The organizer converts at 3–5x the rate of a random user (Splitwise pattern). And group members are free — they're distribution, not revenue. One organizer brings in 4–8 free users who see the product.",
                color: "#dc2626",
              },
              {
                risk: "Cold-start problem on three dimensions",
                severity: "High",
                from: "Viability report #6",
                mitigation: "Eliminated two of the three cold starts. We don't need trip history for AI learning (no AI dependency in v1). We don't need a content library (Famous Places come from Google Places API, not user-generated content). The only cold start is: one organizer needs to invite their group. That's the natural behavior — the organizer is already the person who starts the WhatsApp chat.",
                color: "#dc2626",
              },
              {
                risk: "Google risk (Gemini + Maps)",
                severity: "Medium",
                from: "Viability report #7",
                mitigation: "Google will never build group voting, social shortlists, or friend-group expense splitting inside Maps. Those are social features, not navigation features. Google killed Google Trips because it kept folding features into Maps — and Maps can't do social. Our moat is the group layer, not the places data.",
                color: "#d97706",
              },
              {
                risk: "No designer on the team",
                severity: "Medium",
                from: "Viability report (feasibility)",
                mitigation: "iOS native (SwiftUI) provides strong defaults. The product is fundamentally a list (shortlist), a vote (yes/no), and a timeline (vertical scroll) — not a complex visual design challenge. Ship functional, polish iteratively.",
                color: "#d97706",
              },
              {
                risk: "Photo storage costs at scale",
                severity: "Medium",
                from: "Technical",
                mitigation: "Use Cloudflare R2 (free egress). Compress uploads to 2048px max dimension. Limit free tier to 50 photos/trip. At 10K trips/month × 50 photos × 500KB = ~250GB/month = ~$4/month on R2. Cost only matters at success scale, which is a good problem.",
                color: "#d97706",
              },
              {
                risk: "WhatsApp / iMessage is 'good enough'",
                severity: "Medium",
                from: "Viability report (market reality)",
                mitigation: "The research shows groups tolerate chat because nothing better exists, not because it works. Wanderlog tried but paywalled group features per-user. Our bet: if the invite link is as easy as sharing a WhatsApp link, and the voting UI is faster than typing opinions, the organizer switches the group over.",
                color: "#d97706",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderRadius: "10px",
                  padding: "16px",
                  marginBottom: "12px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                  <span
                    style={{
                      display: "inline-block",
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: item.color,
                    }}
                  />
                  <span style={{ fontWeight: 700, fontSize: "15px", color: "var(--text-primary)", fontFamily: "'Source Serif 4', Georgia, serif" }}>
                    {item.risk}
                  </span>
                  <span style={{ fontSize: "11px", color: "var(--text-faint)", marginLeft: "auto", fontFamily: "'JetBrains Mono', monospace" }}>
                    {item.from}
                  </span>
                </div>
                <div style={{ fontSize: "13.5px", color: "var(--text-secondary)", lineHeight: 1.6, paddingLeft: "16px", borderLeft: "2px solid var(--border-muted)" }}>
                  {item.mitigation}
                </div>
              </div>
            ))}

            <div style={{ background: "var(--bg-card)", border: "2px solid var(--text-primary)", borderRadius: "12px", padding: "20px", marginTop: "24px" }}>
              <div style={{ fontSize: "14px", fontWeight: 700, color: "var(--text-primary)", marginBottom: "8px", fontFamily: "'Source Serif 4', Georgia, serif" }}>
                The kill criteria — when to stop
              </div>
              <div style={{ fontSize: "13.5px", color: "var(--text-secondary)", lineHeight: 1.7 }}>
                <strong>Week 4:</strong> If zero friend groups organically share the invite link with 3+ people, the invite mechanic doesn't work. Pivot to a different distribution model or kill.
              </div>
              <div style={{ fontSize: "13.5px", color: "var(--text-secondary)", lineHeight: 1.7, marginTop: "6px" }}>
                <strong>Week 8:</strong> If fewer than 5% of completed trips get shared publicly, the Strava-model growth loop doesn't work. The product may still work as a private tool, but the organic growth thesis fails.
              </div>
              <div style={{ fontSize: "13.5px", color: "var(--text-secondary)", lineHeight: 1.7, marginTop: "6px" }}>
                <strong>Month 4:</strong> If fewer than 5% of organizers convert to Pro after 100+ trips created, the monetization model fails. Consider switching to per-trip pricing or photo-book-only monetization.
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
