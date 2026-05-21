import { useState } from "react";
import TripSquadProposal from "./TripSquad-Proposal.jsx";
import DocViewer from "./DocViewer.jsx";
import Sidebar from "./Sidebar.jsx";
import docsManifest from "./docs-manifest.js";

const THEME_CSS = `
html, body { margin: 0; padding: 0; }
[data-theme="dark"] {
  --bg-page: #0f172a;
  --bg-card: #1e293b;
  --bg-subtle: #1e293b;
  --bg-hover: #334155;
  --text-primary: #f1f5f9;
  --text-secondary: #cbd5e1;
  --text-muted: #94a3b8;
  --text-faint: #64748b;
  --border: #334155;
  --border-light: #1e293b;
  --border-muted: #475569;
  --shadow-color: rgba(0,0,0,0.3);
  --callout-red-bg: #450a0a;
  --callout-red-text: #fca5a5;
  --callout-red-border: #991b1b;
  --callout-amber-bg: #451a03;
  --callout-amber-text: #fbbf24;
  --callout-amber-border: #92400e;
  --callout-blue-bg: #172554;
  --callout-blue-text: #93c5fd;
  --callout-blue-border: #1e40af;
  --callout-purple-bg: #2e1065;
  --callout-purple-text: #c4b5fd;
  --callout-green-bg: #064e3b;
  --callout-green-text: #6ee7b7;
  --code-bg: #0c1322;
  --code-text: #e2e8f0;
  --code-inline-bg: #334155;
  --code-inline-text: #93c5fd;
  --toggle-bg: rgba(148, 163, 184, 0.2);
  --toggle-border: rgba(148, 163, 184, 0.3);
}
[data-theme="light"] {
  --bg-page: #f8f7f4;
  --bg-card: #ffffff;
  --bg-subtle: #f9fafb;
  --bg-hover: #f3f4f6;
  --text-primary: #111827;
  --text-secondary: #374151;
  --text-muted: #6b7280;
  --text-faint: #9ca3af;
  --border: #e5e7eb;
  --border-light: #f3f4f6;
  --border-muted: #d1d5db;
  --shadow-color: rgba(0,0,0,0.06);
  --callout-red-bg: #fee2e2;
  --callout-red-text: #991b1b;
  --callout-red-border: #fca5a5;
  --callout-amber-bg: #fef3c7;
  --callout-amber-text: #92400e;
  --callout-amber-border: #fcd34d;
  --callout-blue-bg: #dbeafe;
  --callout-blue-text: #1e40af;
  --callout-blue-border: #93c5fd;
  --callout-purple-bg: #ede9fe;
  --callout-purple-text: #5b21b6;
  --callout-green-bg: #d1fae5;
  --callout-green-text: #065f46;
  --code-bg: #1e293b;
  --code-text: #e2e8f0;
  --code-inline-bg: #f3f4f6;
  --code-inline-text: #1e40af;
  --toggle-bg: rgba(15, 23, 42, 0.9);
  --toggle-border: rgba(255, 255, 255, 0.1);
}
`;

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeDoc, setActiveDoc] = useState(null);
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem("theme") || "dark"; }
    catch { return "dark"; }
  });

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    try { localStorage.setItem("theme", next); } catch {}
  };

  const handleDocSelect = (sectionId, filename) => {
    const section = docsManifest.find((s) => s.id === sectionId);
    const doc = section?.docs.find((d) => d.filename === filename);
    if (doc) {
      setActiveDoc({ sectionId, sectionName: section.name, ...doc });
      setSidebarOpen(false);
      window.scrollTo(0, 0);
    }
  };

  const handleProposalSelect = () => {
    setActiveDoc(null);
    setSidebarOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <div data-theme={theme} style={{ position: "relative", minHeight: "100vh" }}>
      <style>{THEME_CSS}</style>

      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label={sidebarOpen ? "Close sidebar" : "Open sidebar"}
        style={{
          position: "fixed",
          top: "14px",
          left: "14px",
          zIndex: 100,
          width: "34px",
          height: "34px",
          borderRadius: "8px",
          background: "var(--toggle-bg)",
          color: "#e2e8f0",
          border: "1px solid var(--toggle-border)",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "16px",
          backdropFilter: "blur(8px)",
          boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
          fontFamily: "system-ui, sans-serif",
          lineHeight: 1,
          padding: 0,
        }}
      >
        {sidebarOpen ? "✕" : "☰"}
      </button>

      {sidebarOpen && (
        <>
          <div
            onClick={() => setSidebarOpen(false)}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.25)",
              zIndex: 50,
            }}
          />
          <Sidebar
            manifest={docsManifest}
            activeDoc={activeDoc}
            onDocSelect={handleDocSelect}
            onProposalSelect={handleProposalSelect}
            theme={theme}
            onThemeToggle={toggleTheme}
          />
        </>
      )}

      {activeDoc ? <DocViewer doc={activeDoc} /> : <TripSquadProposal />}
    </div>
  );
}
