export default function Sidebar({ manifest, activeDoc, onDocSelect, onProposalSelect, theme, onThemeToggle }) {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "272px",
        height: "100vh",
        background: "var(--bg-card)",
        borderRight: "1px solid var(--border)",
        zIndex: 60,
        overflowY: "auto",
        padding: "56px 0 0",
        boxShadow: "4px 0 20px rgba(0,0,0,0.12)",
        fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        onClick={onThemeToggle}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && onThemeToggle()}
        style={{
          padding: "10px 20px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          cursor: "pointer",
          fontSize: "13px",
          color: "var(--text-muted)",
          borderBottom: "1px solid var(--border)",
          fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
        }}
      >
        <span style={{ fontSize: "15px" }}>{theme === "dark" ? "☀️" : "🌙"}</span>
        {theme === "dark" ? "Light mode" : "Dark mode"}
      </div>

      <div style={{ flex: 1, overflowY: "auto", padding: "0 0 12px" }}>
        <div
          onClick={onProposalSelect}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && onProposalSelect()}
          style={{
            padding: "10px 20px",
            fontSize: "14px",
            fontWeight: !activeDoc ? 700 : 500,
            color: !activeDoc ? "var(--text-primary)" : "var(--text-secondary)",
            cursor: "pointer",
            background: !activeDoc ? "var(--bg-hover)" : "transparent",
            borderLeft: !activeDoc ? "3px solid var(--text-primary)" : "3px solid transparent",
            fontFamily: "'Source Serif 4', Georgia, serif",
          }}
        >
          TripSquad Proposal
        </div>

        {manifest.length > 0 && (
          <div style={{ height: "1px", background: "var(--border)", margin: "12px 20px" }} />
        )}

        {manifest.map((section) => (
          <div key={section.id} style={{ marginBottom: "4px" }}>
            <div
              style={{
                padding: "10px 20px 4px",
                fontSize: "11px",
                fontWeight: 700,
                color: "var(--text-faint)",
                textTransform: "uppercase",
                letterSpacing: "1.5px",
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              {section.name}
            </div>
            {section.docs.map((doc) => {
              const isActive =
                activeDoc?.sectionId === section.id && activeDoc?.filename === doc.filename;
              return (
                <div
                  key={doc.filename}
                  onClick={() => onDocSelect(section.id, doc.filename)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && onDocSelect(section.id, doc.filename)}
                  style={{
                    padding: "7px 20px",
                    fontSize: "13.5px",
                    fontWeight: isActive ? 600 : 400,
                    color: isActive ? "var(--text-primary)" : "var(--text-muted)",
                    cursor: "pointer",
                    background: isActive ? "var(--bg-hover)" : "transparent",
                    borderLeft: isActive ? "3px solid #2563eb" : "3px solid transparent",
                  }}
                >
                  {doc.title}
                </div>
              );
            })}
          </div>
        ))}
      </div>

    </nav>
  );
}
