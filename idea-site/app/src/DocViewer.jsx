import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const MARKDOWN_CSS = `
.md-content { color: var(--text-secondary); }
.md-content h1 {
  font-family: 'Source Serif 4', Georgia, serif;
  font-size: 26px; font-weight: 700; color: var(--text-primary);
  margin: 32px 0 12px; line-height: 1.3;
  padding-bottom: 8px; border-bottom: 1px solid var(--border);
}
.md-content h2 {
  font-family: 'Source Serif 4', Georgia, serif;
  font-size: 21px; font-weight: 700; color: var(--text-primary);
  margin: 28px 0 10px; line-height: 1.3;
}
.md-content h3 {
  font-family: 'Source Serif 4', Georgia, serif;
  font-size: 17px; font-weight: 600; color: var(--text-primary);
  margin: 24px 0 8px;
}
.md-content h4 {
  font-size: 15px; font-weight: 600; color: var(--text-primary);
  margin: 20px 0 6px;
}
.md-content p { font-size: 15px; line-height: 1.75; margin: 0 0 16px; }
.md-content ul, .md-content ol {
  font-size: 15px; line-height: 1.75; margin: 0 0 16px; padding-left: 24px;
}
.md-content li { margin-bottom: 4px; }
.md-content li > ul, .md-content li > ol { margin-top: 4px; margin-bottom: 4px; }
.md-content strong { font-weight: 600; color: var(--text-primary); }
.md-content a { color: #2563eb; text-decoration: none; }
.md-content a:hover { text-decoration: underline; }
.md-content blockquote {
  border-left: 3px solid var(--border-muted); margin: 0 0 16px;
  padding: 8px 16px; color: var(--text-muted); background: var(--bg-subtle);
  border-radius: 0 6px 6px 0;
}
.md-content blockquote p { margin-bottom: 0; }
.md-content code {
  font-family: 'JetBrains Mono', monospace; font-size: 13px;
  background: var(--code-inline-bg); padding: 2px 6px; border-radius: 4px;
  color: var(--code-inline-text);
}
.md-content pre {
  background: var(--code-bg); border-radius: 8px; padding: 16px;
  overflow-x: auto; margin: 0 0 16px;
}
.md-content pre code {
  background: none; padding: 0; color: var(--code-text); font-size: 13px;
  border-radius: 0;
}
.md-content table {
  width: 100%; border-collapse: collapse; margin: 0 0 16px; font-size: 14px;
  display: block; overflow-x: auto;
}
.md-content thead { background: var(--bg-subtle); }
.md-content th {
  text-align: left; padding: 10px 12px; border: 1px solid var(--border);
  font-weight: 600; color: var(--text-primary);
  font-family: 'JetBrains Mono', monospace; font-size: 12px;
}
.md-content td { padding: 10px 12px; border: 1px solid var(--border); color: var(--text-secondary); }
.md-content tr:nth-child(even) td { background: var(--bg-subtle); }
.md-content hr { border: none; border-top: 1px solid var(--border); margin: 24px 0; }
.md-content img { max-width: 100%; border-radius: 8px; }
.md-content input[type="checkbox"] { margin-right: 6px; }
.md-content del { color: var(--text-faint); }
`;

export default function DocViewer({ doc }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--bg-page)",
        fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
      }}
    >
      <style>{MARKDOWN_CSS}</style>
      <link
        href="https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,400;8..60,600;8..60,700;8..60,800&family=IBM+Plex+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap"
        rel="stylesheet"
      />

      <div
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)",
          padding: "40px 24px 28px",
          color: "#fff",
        }}
      >
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
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
            {doc.sectionName}
          </div>
          <h1
            style={{
              fontSize: "30px",
              fontWeight: 700,
              margin: 0,
              fontFamily: "'Source Serif 4', Georgia, serif",
              letterSpacing: "-0.5px",
            }}
          >
            {doc.title}
          </h1>
        </div>
      </div>

      <div style={{ maxWidth: "760px", margin: "0 auto", padding: "32px 24px 80px" }}>
        <div className="md-content">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{doc.content}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
