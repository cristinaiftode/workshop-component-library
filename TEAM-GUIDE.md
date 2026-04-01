# How to Prototype with the e-conomic Component Library

Hey team! I've built an AI-readable component library based on TACO design system. It has **66 components** — everything from buttons and forms to dashboard charts and navigation — with all the correct colors, spacing, fonts, and tokens from our Figma library.

You can use it to generate prototypes just by describing what you want in plain language. No coding required.

Below are **2 options** — pick whichever feels best for you: one in Claude Code Desktop App and one on claude.ai.

---

## Option A: Claude Code in the Desktop App (recommended)

This is the most powerful option. Claude reads the full component library from the repo and writes files directly — no copy-pasting.

### What you need
- The **Claude desktop app** (the one with Chat, Cowork, and Code tabs)
- A Claude Max subscription

### Setup (one-time, ~3 minutes)

1. **Clone the repo.** Open the Claude desktop app, click the **Code** tab, and type:

   > Clone https://github.com/cristinaiftode/workshop-component-library and open it

   Alternatively, if you're comfortable with git, clone it manually and open the folder in Claude Code.

2. **That's it.** Claude automatically reads all the component definitions, design tokens, and rules from the repo. No file uploads needed.

### How to prototype

With the repo open in the **Code** tab, just describe what you want:

> "Build me a settings page with a TopNavigation, a SideNavigation on the left with items General, Billing, Users, and a form with a Field for company name, a Select for country, two Switches, and a primary Save button"

> "Create an invoice list with a SearchInput, a Combobox to filter by customer, a table with checkboxes and Pagination at the bottom"

> "Design a dashboard with 4 chart cards in a 2x2 grid — a BarChartVerticalStacked, a LineChartMultiple, an AreaChartPositiveNegative, and a DonutChartWithRightLegends"

Claude will:
1. Read the component definitions and tokens from the repo automatically
2. Generate an HTML file
3. Launch a local preview so you can see it in your browser
4. Let you iterate — "make the form two columns", "add a danger Delete button", "change the Tag to red"

### Why this option is great
- **No copy-pasting** — Claude writes files directly to disk
- **Live preview** — see your prototype in the browser immediately
- **Full context** — Claude reads all 66 components, not just 3 uploaded files
- **Fast iteration** — "move the button to the right" and it edits the file in place
- **Multi-page prototypes** — Claude can create linked HTML files with navigation between them

---

## Option B: Claude Projects on claude.ai

If you prefer using the web interface, this works well for quick one-off prototypes.

### What you need
- A Claude Pro or Team account at [claude.ai](https://claude.ai)

### Setup (one-time, ~5 minutes)

1. Go to [claude.ai](https://claude.ai) and click **"Create Project"**
2. Name it: `e-conomic Prototyping`
3. In the **Project Knowledge** section, upload these 3 files (download them from the repo):
   - `manifest.json` — all 66 component definitions
   - `prompt-rules.md` — styling and layout rules
   - `tokens.json` — color, spacing, and typography tokens
4. In the **Project Instructions** box, paste the contents of `claude-project-prompt.md` from the repo
5. Done! Start a new conversation inside this project.

### How to prototype

Same as Option A — just describe what you want:

> "Build me a settings page with a form that has a name field, email field, a Switch for notifications, and a Save button"

> "Create a modal dialog that asks the user to confirm deleting a contact"

Claude will generate a complete HTML file in the chat. Copy the code, save it as an `.html` file, and open it in your browser.

### Limitations compared to Option A
- You need to **copy-paste** the generated code and save it as an HTML file yourself
- No live preview — you save and open in the browser manually
- Only has the 3 uploaded files as context (Option A has the full repo)
- One file at a time (Option A can build multi-page prototypes)

---

## Which option should I pick?

| | Option A (Claude Code) | Option B (claude.ai) |
|---|---|---|
| **Interface** | Desktop app → Code tab | Web browser → claude.ai |
| **Setup** | Clone repo once | Upload 3 files to a project |
| **Output** | Writes files directly | Code in chat (you copy-paste) |
| **Preview** | Automatic, in-browser | You save the file and open it |
| **Iteration** | Edits files in place | New code block each time |
| **Multi-page** | Yes, creates linked files | One file at a time |
| **Best for** | Serious prototyping, iteration | Quick one-off mockups |

**My recommendation:** Try Option A first. It's a better experience once you've cloned the repo.

---

## Browse the component showcase

Before you start prototyping, browse the live showcase to see all available components and learn their names:

**https://cristinaiftode.github.io/workshop-component-library/**

This shows every component with all its variants. When you know the component names, your prompts will be much more precise and the output will be better.

---

## Tips for better results

- **Be specific:** "a primary blue button" beats "a button"
- **Use component names:** "use a Combobox for country selection" instead of "add a dropdown"
- **Describe layout:** "two columns: left side has the form, right side has a preview"
- **Ask for iterations:** "make the buttons smaller" or "add a Tag showing 'Draft' status in yellow"
- **Reference the showcase:** if you saw a component you liked, mention it by name
- **For complex prototypes, go step by step:** ask for the shell first (TopNavigation + SideNavigation), then add pages one at a time

---

## What's in the library?

### 66 Components

| Category | Components |
|----------|-----------|
| **Buttons** | Button (6 styles), IconButton |
| **Inputs** | Field, Textarea, Combobox, Select, SearchInput, Switch, Checkbox, RadioGroup |
| **Display** | Tag (9 colors), Tooltip, ListItem, ListGroup, TableRow |
| **Navigation** | Tabs, Drawer, Pagination, Calendar, DatePicker, ModeSwitch, SideNavigation, TopNavigation, AgreementSelector |
| **Feedback** | Accordion, AlertDialog, ModalDialog |
| **Lists** | CardList, CardListItem (6 types), ListIcon (9 colors), Status (5 colors) |
| **Layout** | Form, FormGrid |
| **Dashboard** | DashboardCard, DashboardHoverCard, MoreMenuLegends, CardInfoBox, ChartHeader, ChartLegend, AxisLabels, LegendBar |
| **Charts** | BarChartVertical (Single, Stacked, Group, MultiColor, DoubleHatching), LineChart (Single, Multiple), AreaChart (Single, TwoSeries, PositiveNegative), DonutChart (BottomLegend, RightLegends) |
| **Data & States** | DashboardTable, EmptyState, HomepageCard |

### Design tokens

- **22 colors** — full e-conomic palette including 10 chart colors
- **8 spacing values** — 2px to 32px
- **Typography** — Helvetica, all sizes for body/labels/headings
- **Border radius** — 4px standard, 12px for chart cards

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

**Q: The prototype is too big and Claude stops generating?**
Break it up! Ask for the layout shell first, then add pages one at a time in follow-up messages.

