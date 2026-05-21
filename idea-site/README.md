# TripSquad Idea Site

Static documentation site that renders the TripSquad product proposal alongside all project documents. Built with React + Vite, compiled via Docker.

## Structure

```
idea-site/
  app/
    index.html               Vite entry point
    package.json             Dependencies
    vite.config.js           Vite config
    src/
      main.jsx               React entry point
      App.jsx                Root component (sidebar + content routing)
      TripSquad-Proposal.jsx Interactive product proposal (default view)
      Sidebar.jsx            Collapsible document navigation
      DocViewer.jsx          Markdown document renderer (GFM)
      docs-manifest.js       Auto-generated at build time (do not edit)
  gen-manifest.py            Scans docs/ and generates the manifest
  Makefile                   Build and serve targets
  dist/                      Build output

docs/                        Document source (repo root)
  00-CONTEXT/                Cross-cutting context documents
    01-context.md
  01-V1/                     Version 1 research & planning
  02-V2/                     Version 2 refinements (future)
```

## Adding documents

1. Create a section directory under `docs/` with a number prefix: `01-V1/`, `02-V2/`
2. Add `.md` files with number prefixes for ordering: `01-viability-report.md`
3. Run `make build`

**Naming conventions:**
- Directory name becomes the section header (prefix stripped): `00-CONTEXT` -> "CONTEXT"
- Filename becomes the document title (prefix + `.md` stripped, hyphens become spaces, title-cased): `02-viability-report.md` -> "Viability Report"

## Building

Requires Docker and Python 3.

```bash
cd idea-site
make build
```

The build:
1. Scans `../docs/` and generates `app/src/docs-manifest.js` (Python 3)
2. Runs Vite inside Docker to compile React to static HTML/JS
3. Outputs to `dist/` (owned by the calling user, not root)

## Previewing locally

```bash
make serve
# Serves at http://localhost:9000
```

## How it works

- **Default view**: The interactive TripSquad Proposal with tabbed sections, expandable feature cards, and phase blocks
- **Sidebar**: Minimized by default. Toggle button (top-left) opens an overlay listing all documents grouped by section
- **Dark/light mode**: Dark by default. Toggle in the sidebar, persisted to localStorage
- **Document view**: Clicking a doc renders its markdown with full GFM support (tables, task lists, code blocks). A header shows the section name and doc title
- **Typography**: Source Serif 4 (headings), IBM Plex Sans (body), JetBrains Mono (code/labels)
