# CLAUDE.md - Project Rules

## Styling & Component Rules (reference files)
- For full color palette, typography, spacing, and component styling: see `prompt-rules.md`
- For boilerplate, interactive patterns, and page-building steps: see `claude-project-prompt.md`
- For design token values: see `tokens.json`
- For component definitions and props: see `manifest.json`

## Component Generation Rules

### STRICT: Do NOT add extra elements
When generating components from Figma MCP:
- Generate ONLY the elements visible in the Figma screenshot
- Do NOT add placeholder content, demo data, or example usage beyond what Figma shows
- Do NOT add wrapper divs unless they exist in the Figma design
- Do NOT add icons, images, or decorative elements not in the original design
- If something is unclear, ASK instead of assuming

### Component Structure
- React components go in: `components/react/`
- HTML showcase pages go in: `showcase/`
- When adding a new React component, always update the barrel export in `components/react/index.ts`
- Each React component should be a single, focused file
- Export only the component itself, not demo/example code
- Props should match EXACTLY what Figma variants show
- Do not invent additional props or variants beyond what exists in Figma

### Naming Conventions
- Use PascalCase for React component files: `Button.tsx`, `IconButton.tsx`
- Match Figma component names when possible

### Icons
- ALWAYS use icons from the existing icon library in `showcase/icons.html` — do NOT invent or create new icon SVGs
- The icon library contains 137+ icons at 24×24px with `viewBox="0 0 24 24"` and `fill="#1C1C1C"`
- When you need an icon, look up its exact SVG path data from icons.html first
- If an icon doesn't exist in the library, ASK the user before creating a new one

### Design Tokens
- Reference `tokens.json` for the correct color values, spacing, and typography
- Use the exact hex values from tokens.json (e.g., `#4573D2` for blue-500, `#CE3F42` for red-500)
- Do NOT invent colors — if a color isn't in tokens.json, check the Figma design first

### When Using Figma MCP
1. Always fetch `get_design_context` or `get_screenshot` before implementing — never guess
2. Extract ONLY what's in the design
3. If the design shows text like "Text" or "Title", keep it exactly as shown
4. Do NOT add hover states, focus states, or animations unless they are explicitly shown in Figma variants OR specifically requested by the user
5. Do NOT add interactive behavior unless requested
6. Ask for clarification if the design is ambiguous

### Showcase Pages
- Showcase HTML pages use Tailwind CDN (`<script src="https://cdn.tailwindcss.com"></script>`)
- Use vanilla JavaScript for interactivity (no frameworks)
- Font: Helvetica, Arial, sans-serif
- Always verify output in the preview server before considering a task done
- Tailwind CDN has specificity issues with arbitrary value classes on `<button>` elements — use inline styles or `<div role="button">` as workaround when bg colors don't apply

### Table Rule
- When a prototype requires a data table, **always use Table3** — it is the standard data table in the design system
- The only exception is `DashboardTable`, a simpler table used exclusively inside dashboard cards
- For any full-page or section-level table, always use the Table3 pattern below

### Table3 Layout Pattern
- Page background is white (`bg-white`)
- Section title and toolbar sit **outside** the table border
- Only the table itself gets the border: `border border-[#DDDDDD] rounded-[4px] overflow-x-auto`
- Table headers: `font-bold text-[#1C1C1C]` (dark, not grey)
- Sort indicator: use `chevron-up-solid` / `chevron-down-solid` icons from the icon library at 24×24px
- Row action buttons (edit, copy, delete): 32×32px buttons with 24×24px icons, visible on row hover
- Toolbar icon buttons (column settings, print, settings): 32×32px with 24×24px icons, grey background (`bg-[#EBEBEB]`, hover `bg-[#DDDDDD]`)
- Row expansion chevrons: 32×32px buttons with 24×24px `chevron-right` (collapsed) / `chevron-down` (expanded) icons
- Expand-all button: 32×32px with 24×24px `chevron-down-double` / `chevron-up-double` icons
