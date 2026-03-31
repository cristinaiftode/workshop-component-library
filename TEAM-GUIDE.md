# How to use the e-conomic Component Library

This guide is for designers, UX researchers, and PMs who want to prototype UI that looks exactly like e-conomic — without writing code.

---

## Option A: Claude Projects (Recommended - easiest)

**What you need:** A Claude Pro/Team account at [claude.ai](https://claude.ai)

### Setup (5 minutes, one-time)

1. Go to [claude.ai](https://claude.ai) and click **"Create Project"**
2. Name it: `e-conomic Prototyping`
3. In the **Project Knowledge** section, upload these 3 files:
   - `manifest.json` — all component definitions
   - `prompt-rules.md` — styling and layout rules
   - `tokens.json` — color, spacing, and typography tokens
4. In the **Project Instructions** box, paste the contents of `claude-project-prompt.md` (included in this repo)
5. Done! Start a new conversation inside this project.

### How to prototype

Just describe what you want in plain language:

> "Build me a settings page with a form that has a name field, email field, a switch for notifications, and a save button"

> "Create an invoice list page with a side navigation, a table with checkboxes, and pagination at the bottom"

> "Design a modal dialog that asks the user to confirm deleting a contact, with a safety input that requires typing DELETE"

Claude will generate a complete, working HTML page using the exact e-conomic components, colors, and spacing.

### Tips for better results

- **Be specific:** "a primary blue button" beats "a button"
- **Reference components by name:** "use a Combobox for country selection" instead of "add a dropdown"
- **Describe layout:** "two columns: left side has the form, right side has a preview"
- **Ask for iterations:** "make the buttons smaller" or "add a Tag showing 'Draft' status in yellow"
- **Browse the showcase** (see Option C below) to learn component names

---

## Option B: Claude Code (CLI)

**What you need:** [Claude Code](https://docs.anthropic.com/en/docs/claude-code) installed

### Setup

1. Clone this repository
2. Open terminal in the repo folder
3. Run `claude` to start Claude Code
4. Claude Code automatically reads the repo files as context

### How to prototype

Same as Option A — just type your request. Claude Code can also:
- Preview results in a browser
- Edit and iterate on files directly
- Build multi-page prototypes

---

## Option C: Browse the Showcase (visual reference)

The `/showcase` folder contains interactive HTML pages showing every component. Use this to:
- **Learn component names** before prompting
- **See all variants** (6 button styles, 9 icon colors, etc.)
- **Copy visual patterns** you want to replicate

### View locally
Open `showcase/index.html` in your browser, or run:
```
npx serve showcase
```

### View online
After deploying (see below), share the URL with your team.

---

## Option D: Other AI tools

The library files work with any AI coding tool:

| Tool | How to use | Best for |
|------|-----------|----------|
| **Cursor** | Add files to project context | Devs who want AI assistance |
| **v0.dev** | Paste `prompt-rules.md` as system prompt | Quick UI mockups |
| **Bolt.new** | Upload files as context | Full app prototypes |
| **ChatGPT** | Upload 3 files to conversation | Quick questions |
| **Lovable** | Add as project knowledge | App prototyping |

---

## What's in the library?

### 66 Components

| Category | Components |
|----------|-----------|
| **Buttons** | Button (6 styles), IconButton |
| **Inputs** | Field, Textarea, Combobox, Select, SearchInput, Switch, Checkbox, RadioGroup |
| **Display** | Tag (4 colors), Tooltip, ListItem, ListGroup, TableRow |
| **Navigation** | Tabs, Drawer, Pagination, Calendar, DatePicker, ModeSwitch, SideNavigation, TopNavigation, AgreementSelector |
| **Feedback** | Accordion, AlertDialog, ModalDialog |
| **Lists** | CardList, CardListItem (6 types), ListIcon (9 colors), Status (5 colors) |
| **Layout** | Form, FormGrid |
| **Dashboard** | DashboardCard, DashboardHoverCard, MoreMenuLegends, CardInfoBox, BarSegment, Bar, ChartLegend, ChartHeader, AxisLabels, LegendBar, DonutChart, DonutChartLegend, CheckboxColorGrid, CheckboxWithWhiteTick |
| **Charts** | BarChartVerticalSingle/Stacked/Group/MultiColor/DoubleHatching, LineChartSingle/Multiple, AreaChartSingle/TwoSeries/PositiveNegative, DonutChartWithBottomLegend/RightLegends |
| **Data & States** | DashboardTable, EmptyState, HomepageCard |

### Design tokens

- **22 colors** matching e-conomic's palette (blues, greys, red, yellow)
- **8 spacing values** (2px to 32px)
- **Typography** — Helvetica, specific sizes for body/labels/headings
- **Border radius** — 4px standard, 8px/10px for cards

---

## FAQ

**Q: Do I need to know how to code?**
No. Describe what you want in plain language. Claude generates the code.

**Q: Will the output match our real product?**
Yes — the library uses the exact same colors, spacing, fonts, and component styles as e-conomic production.

**Q: Can I iterate on a prototype?**
Yes! Ask Claude to change things: "move the save button to the right", "add a red error state to the email field", "make it a two-column layout".

**Q: What if I need a component that's not in the library?**
Ask Claude to build it following the design system rules. It will use the correct colors, spacing, and fonts automatically.

**Q: Can I export the prototype?**
Yes — Claude generates standard HTML files. Open them in any browser, share the file, or deploy to a URL.
