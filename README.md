# e-conomic Component Library

AI-consumable component library for the e-conomic design system (TACO).
Built for cross-team prototyping — designers, UX, and PMs can create pixel-perfect e-conomic UI using AI tools, no coding required.

## For teams: Get started in 5 minutes

Read **[TEAM-GUIDE.md](TEAM-GUIDE.md)** for step-by-step setup instructions.

**Quickest path:** Create a [Claude Project](https://claude.ai), upload 3 files, start prototyping.

## Repository structure

```
manifest.json          → Component definitions (66 components, all props & variants)
prompt-rules.md        → Design system rules for AI tools
tokens.json            → Design tokens (colors, typography, spacing)
claude-project-prompt.md → Ready-to-paste Claude Project instructions

showcase/              → Interactive HTML showcase (open in browser)
  index.html           → Homepage with all categories
  buttons.html         → Button & IconButton variants
  inputs.html          → Fields, switches, checkboxes, radio groups
  display.html         → Tags, tooltips, lists, tables
  navigation.html      → Tabs, drawers, side nav, top nav
  feedback.html        → Accordions, dialogs, modals
  lists.html           → Card lists, status, list icons
  dashboard.html       → Dashboard cards, charts (bar/line/area/donut), table, empty state
  colors.html          → Full color palette (Blue, Green, Yellow, Orange, Red, Pink, Purple, Brown, Grey + Brand)
  typography.html      → Full type scale (Heading 1–6, Body, Field label, Label, Caption)
  stylesheet.html      → Borders, dividers, elevation shadows, breakpoints, spacing scale

components/react/      → React + Tailwind implementations
components/html/       → Plain HTML/CSS implementations
```

## Deploy the showcase

### GitHub Pages (free)

1. Push this repo to GitHub
2. Go to **Settings → Pages → Source: Deploy from branch → main → / (root)**
3. The showcase is live at `https://[org].github.io/[repo]/showcase/`

### Vercel (free)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Import this repo
2. Set **Root Directory** to `showcase`
3. Done — instant URL to share

### Netlify (free)

1. Drag the `showcase` folder to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Get a shareable URL in seconds

## What teams can build

- Settings pages with forms and toggles
- Data tables with filters, search, and pagination
- Navigation layouts (side nav + top nav + content)
- Invoice/contact/product list views
- Modal dialogs and confirmation flows
- Dashboard cards and summary views
- Any e-conomic screen — using the real design system

## Source

- **Figma**: [Web components library](https://www.figma.com/design/ZoGBnO9A5jUExnua0wgCIM)
- **Storybook**: [design.e-conomic.net](https://design.e-conomic.net)
