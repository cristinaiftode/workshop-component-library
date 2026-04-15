# e-conomic Design System - AI Prompt Rules

You are building UI for the e-conomic accounting platform using React, Tailwind CSS, and the `@economic/taco` component library. Follow these rules strictly.

## 0a. Illustrations — use the TACO illustration library

- ALWAYS check `manifest.json` → `illustrations` before creating custom visuals
- 53 illustrations available with descriptions and usage context
- Use for: empty states, onboarding, error pages, feature pages, success screens
- Key sets: Invoice/Quote/Order (draft, sent, archive), welcome/farewell panels, people scenes, document icons, support, AI/robot

## 0. Icons — use ONLY the icon library

- ALWAYS use icons from the icon library listed in this file (see Icons section below) — never invent or create new icon SVGs
- Icons are 24×24px with `viewBox="0 0 24 24"` and `fill="#1C1C1C"`
- If an icon doesn't exist in the library, ASK the user before creating a new one

## 1. Always import from @economic/taco

```jsx
import { Button, IconButton, Field, Switch, Tag } from '@economic/taco';
```

Never create custom components for functionality that already exists in the design system:

- **Button** - All clickable actions (`default`, `primary`, `ghost`, `discrete`, `danger`, `transparent`)
- **IconButton** - Icon-only actions (always include `aria-label`)
- **Field** - Single-line text inputs
- **Textarea** - Multi-line text inputs
- **Combobox** - Searchable dropdown selects
- **Switch** - Binary on/off toggles
- **RadioGroup** - Single selection from options
- **Tag** - Colored status labels (purple, yellow, grey, green)
- **Tooltip** - Hover information popups
- **ListItem** / **ListGroup** - List displays
- **TableRow** - Data table rows
- **Calendar** - Date picking
- **Pagination** - Page navigation
- **Form** / **FormGrid** - Form containers and layout
- **ModeSwitch** - View toggle
- **Dashboard** - DashboardCard, DashboardHoverCard, DashboardMoreMenuLegends, CardInfoBox
- **Charts** - BarChartVerticalSingle, BarChartVerticalStacked, BarChartVerticalGroup, BarChartVerticalMultiColor, BarChartVerticalDoubleHatching, LineChartSingle, LineChartMultiple, AreaChartSingle, AreaChartTwoSeries, AreaChartPositiveNegative
- **Chart Parts** - BarSegment, Bar, ChartLegend, ChartHeader, AxisLabels, LegendBar
- **Donut** - DonutChart, DonutChartLegend, DonutChartWithBottomLegend, DonutChartWithRightLegends
- **Data Display** - DashboardTable, CheckboxColorGrid, CheckboxWithWhiteTick
- **Table** - **Always use Table3** for any data table in a prototype (DashboardTable is only for dashboard cards). Table3 (sortable columns with chevron-up-solid/chevron-down-solid 24×24px sort indicators, column filtering, hide/show columns, freeze columns, row selection, row actions with 32×32px buttons and 24×24px icons, toolbar with grey icon buttons bg-[#EBEBEB] hover:bg-[#DDDDDD], search). SubComponents: Table3.RowExpansion (32×32px chevron-right/chevron-down toggle buttons, expand-all with chevron-down-double/chevron-up-double, white expanded rows), Table3.RowGroups (grouped rows with expand/collapse), Table3.RowSelection (checkbox-based row selection with select-all), Table3.Settings (column visibility, reorder, freeze, row height), Table3.Editing (inline cell editing with save/cancel). Layout: page bg-white, border border-[#DDDDDD] rounded-[4px] wraps ONLY the table, title/toolbar sit outside the border, overflow-x-auto for horizontal scroll. Headers: font-bold text-[#1C1C1C]
- **Icons** - Icon (28 navigation-primary: home, accounting, projects, settings-solid, inbox, sales, report-solid, bell, chat-solid, inventory, e-copedia, market, inbox-smart, inbox-scanning, inbox-einvoicing, e-signature, more-solid, profile, search-bold, question-mark-bold, journal-pro, menu, log-out, partner-api, developer, basic, placeholder, blank) + 203 system icons (lock-open, lock, dot, unreconsiled, document-cut, account-preview, hash, inventory-matrix, secure-tick, refresh, entry-type-journal-entry, project-cards, layout-first, webshop, search, lightbulb, depricate, basic-tabs, document-split, clamp-open, autotext-insert, play, cash-reports, document-error, person-minus, person-plus, person-change, note-follow-up, distribution-template, period, more, document-merge, entry-type-customer-payment, process-payment, restore, copy, document-approve, shortcuts, show-all, entries-on-account, document-preview, envelope, list-bulleted, entry-type-supplier-invoice, mileage, layout-last, sliders, list-search, chat, quicklinks, sort-by, document-create-entry, clamp, show-less, entries-open, circle-plus, circle-minus, rotate-left, navigation-list, person-tick, delete-permanently, import, export, modal-shrink, product-ledger-card, layout, budget, search-super, undock, entry-type-manual-customer-invoice, circle-tick, accounting-year, star-solid, calendar, envelope-approved, rating-bankruptsy, note, note-read, filter, document, booking, document-move, contacts, log, delete, credit, list, entry-type-supplier-payment, layout-both, match-amount, images, edit, document-isolate-page, show-more, cash-account, entries-warning, secure, rotate-right, move, time, layout-none, export-to-excel, export-to-pdf, document-time, template-override, show-template, download, print, entry-type-customer-invoice, courses, accounting-year-cancel, star, reconciled, templates, system-entries, report, plus-minus, expenses, autotext, subscriptions, website, settings, ledger-card, book, expand-view, graph-solid, rating-payment-problems, tag, thumb-up-solid, thumb-down-solid, thumb-up, thumb-down, thumb-both, transfer, document-received, transfer-locked, document-rejected-request, transfer-cancel, filter-solid, match-entries, attach-auto, attach-cancel, attach, partial-payment-scheduled, connection-enable, connection-revoke, ledger-card-manual-customer-invoice, ledger-card-reserved-entry, ledger-card-opening-entry, ledger-card-transferred-opening-entry, ledger-card-customer-reminder, ledger-card-obsolete-stock, ledger-card-shrinkage-pilferage, ledger-card-stock-adjustment, workflow, wallet-solid, remove, numbers, row-height-4, row-height-3, row-height-2, row-height-1, columns, undo, column-freeze, column-unfreeze, eye, eye-off, text-font-size, payment-unpaid, payment-paid, document-partial, document-warning, payment-pending, chart-line, chart-area, chart-bar, chart-table, chart-pie, attach-warning, wallet, circle-warning, circle-information, circle-questionmark, edit-simple, location, envelope-solid, phone-solid, ai-chat-solid, ai-stars, phone, id, document-signed, house, mastercard, november-first, person, person-solid, autopay, autopay-paused)
- **Menu** - Menu, MenuContent, MenuItems (list items, headers, dividers with icon/shortcut support)
- **States** - EmptyState, HomepageCard

## 2. Color palette - use Tailwind arbitrary values

### Core UI colors (most commonly used)

| Color | Hex | Tailwind class | Usage |
|-------|-----|---------------|-------|
| Blue 500 | `#4573D2` | `bg-[#4573D2]` `text-[#4573D2]` | Primary brand, buttons, links, focus |
| Blue 700 | `#2B57B4` | `bg-[#2B57B4]` | Active/focus states on blue elements |
| Blue 300 | `#75A0F5` | `bg-[#75A0F5]` | Hover state on blue backgrounds |
| Blue 100 | `#DEEBFF` | `bg-[#DEEBFF]` | Ghost button hover, listbox hover |
| Red 500 | `#CE3F42` | `bg-[#CE3F42]` `text-[#CE3F42]` | Danger/error states, danger button |
| Red 700 | `#950027` | `bg-[#950027]` | Danger active/focus |
| Red 300 | `#E66568` | `bg-[#E66568]` | Danger hover |
| Green 500 | `#08AE87` | `bg-[#08AE87]` `text-[#08AE87]` | Success badges |
| Yellow 500 | `#FFBD3B` | `bg-[#FFBD3B]` `text-[#FFBD3B]` | Warning badges |
| Yellow 100 | `#FFF1C3` | `bg-[#FFF1C3]` | Highlighted field background |
| Black | `#1C1C1C` | `text-[#1C1C1C]` | Primary text |
| Grey 700 | `#595959` | `text-[#595959]` | Helper text, secondary text |
| Grey 500 | `#ACACAC` | `text-[#ACACAC]` | Placeholder text, field borders |
| Grey 300 | `#DDDDDD` | `border-[#DDDDDD]` | Borders, input borders, dividers |
| Grey 200 | `#EBEBEB` | `bg-[#EBEBEB]` | Default button hover/active, default badge, input borders |
| Grey 100 | `#F6F6F6` | `bg-[#F6F6F6]` | Navigation bg, default button bg |
| Grey 50 | `#FAFAFA` | `bg-[#FAFAFA]` | Table row hover |
| White | `#FFFFFF` | `bg-white` | White backgrounds |

### Full color scales (all 8 hues: 100–900)

| Hue | 900 | 700 | 500 (base) | 300 | 200 | 100 |
|-----|-----|-----|------------|-----|-----|-----|
| Blue | #29283E | #2B57B4 | **#4573D2** | #75A0F5 | #AACCFF | #DEEBFF |
| Green | #14493A | #028465 | **#08AE87** | #52C7AB | #9BE1CE | #CDF0E7 |
| Yellow | #733700 | #E89C2E | **#FFBD3B** | #FFD665 | #FFE494 | #FFF1C3 |
| Orange | #4A2811 | #EF7D00 | **#F99702** | #FAB64D | #FCCB80 | #FFE3BB |
| Red | #64001B | #950027 | **#CE3F42** | #E66568 | #F3A09D | #FFDAD2 |
| Pink | #870062 | #CF49AA | **#E165BF** | #F98EDB | #FCB9E9 | #FFE3F7 |
| Purple | #412970 | #6542D1 | **#9270FA** | #CBBCFE | #DDD1FF | #EEE5FF |
| Brown | #45291F | #73503B | **#93715D** | #C4AB9E | #DFCCC2 | #EEE0DA |

### Navigation purples (top nav bar)

| Name | Hex | Usage |
|------|-----|-------|
| purple-dark | `#353A48` | Secondary top nav color |
| purple (base) | `#3D4153` | Primary top nav background |
| purple-light | `#4B4F64` | Search bar, menu icon bg |
| purple-lightest | `#585C74` | Menu icon hover |

### Brand colors

| Name | Hex |
|------|-----|
| brand-coolBlue | `#F5F7F9` |
| brand-midnightBlue | `#29283E` |
| brand-sunsetOrange | `#E89C2E` |
| brand-paleOrange | `#FFF5E5` |
| brand-vismaRed | `#E70641` |

## 2b. Chart color palette

| Color | Hex | Tailwind class | Usage |
|-------|-----|---------------|-------|
| Chart Blue | `#75A0F5` | `bg-[#75A0F5]` | Primary chart series |
| Chart Green | `#52C7AB` | `bg-[#52C7AB]` | Secondary series, positive values |
| Chart Yellow | `#FFD665` | `bg-[#FFD665]` | Tertiary series |
| Chart Red | `#E66568` | `bg-[#E66568]` | Danger series, negative values |
| Chart Purple | `#CBBCFE` | `bg-[#CBBCFE]` | Additional series |
| Chart Pink | `#F98EDB` | `bg-[#F98EDB]` | Additional series |
| Chart Brown | `#C4AB9E` | `bg-[#C4AB9E]` | Additional series |
| Chart Orange | `#FAB64D` | `bg-[#FAB64D]` | Additional series |

### Hatching pattern (for budget/projected overlays)
```css
background: repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,0.5) 2px, rgba(255,255,255,0.5) 4px);
```

## 3. Typography

- **Font family**: `font-['Helvetica',Arial,sans-serif]` - never use other fonts
- **Font smoothing**: Always apply `antialiased` (maps to `-webkit-font-smoothing: antialiased`) to match production rendering
- **Body text**: `text-sm leading-5 font-normal antialiased` (14px / 20px / 400)
- **Button text**: `text-sm leading-5 font-normal antialiased` (14px / 20px / 400) — buttons use weight 400, NOT bold
- **Labels**: `text-xs leading-4 font-bold` (12px / 16px / 700)
- **Helper text**: `text-xs leading-4 font-normal text-[#595959]` (12px / 16px / 400)
- **Headings**: `text-base` to `text-2xl` with `font-bold`

## 4. Spacing (Tailwind)

### Common named spacing

| Token | Value | Tailwind |
|-------|-------|----------|
| xxs | 2px | `gap-0.5` `p-0.5` |
| xs | 4px | `gap-1` `p-1` |
| s | 8px | `gap-2` `p-2` |
| m | 12px | `gap-3` `p-3` |
| l | 16px | `gap-4` `p-4` |
| xl | 20px | `gap-5` `p-5` |
| xxl | 24px | `gap-6` `p-6` |
| xxxl | 32px | `gap-8` `p-8` |

### Full spacing scale (from Figma stylesheet)

The design system supports the full Tailwind spacing scale. All values below are valid:

| Tailwind | Value | | Tailwind | Value |
|----------|-------|-|----------|-------|
| `0` | 0px | | `12` | 48px |
| `px` | 1px | | `14` | 56px |
| `0.5` | 2px | | `16` | 64px |
| `1` | 4px | | `20` | 80px |
| `1.5` | 6px | | `24` | 96px |
| `2` | 8px | | `28` | 112px |
| `2.5` | 10px | | `32` | 128px |
| `3` | 12px | | `36` | 144px |
| `3.5` | 14px | | `40` | 160px |
| `4` | 16px | | `44` | 176px |
| `5` | 20px | | `48` | 192px |
| `6` | 24px | | `52` | 208px |
| `7` | 28px | | `56` | 224px |
| `8` | 32px | | `60` | 240px |
| `9` | 36px | | `64` | 256px |
| `10` | 40px | | `72` | 288px |
| `11` | 44px | | `80` | 320px |
| | | | `96` | 384px |

## 4b. Borders & Dividers

Use `box-shadow` for 1px divider lines — this avoids affecting layout:

| Name | CSS (box-shadow) | Tailwind class | Usage |
|------|-------------------|---------------|-------|
| Bottom divider | `0 1px 0 0 #DDDDDD` | `shadow-[0_1px_0_0_#DDDDDD]` | Horizontal divider below element |
| Right divider | `1px 0 0 0 #DDDDDD` | `shadow-[1px_0_0_0_#DDDDDD]` | Vertical divider to the right |
| Left divider | `-1px 0 0 0 #DDDDDD` | `shadow-[-1px_0_0_0_#DDDDDD]` | Vertical divider to the left |
| Inside bottom | `inset 0 -1px 0 0 #DDDDDD` | `shadow-[inset_0_-1px_0_0_#DDDDDD]` | Inset divider (table rows, list items) |
| Inside bottom 2px | `inset 0 -2px 0 0 #DDDDDD` | `shadow-[inset_0_-2px_0_0_#DDDDDD]` | Thicker inset divider (active tab) |

When to use: prefer `box-shadow` dividers over `border-b` when you need a separator that doesn't add to the element's box model.

## 4c. Elevation (Shadows)

Uses `rgba(47,51,68,...)` as the base shadow color (not pure black).

### Light elevations — for standard surfaces

| Level | Tailwind class | Usage |
|-------|---------------|-------|
| E1 | `shadow-[0px_1px_2px_rgba(47,51,68,0.1),0px_1px_3px_rgba(47,51,68,0.1)]` | Cards at rest |
| E2 | `shadow-[0px_2px_4px_rgba(47,51,68,0.1),0px_1px_6px_rgba(47,51,68,0.1)]` | Hover cards |
| E3 | `shadow-[0px_1px_2px_rgba(47,51,68,0.1),0px_4px_12px_rgba(47,51,68,0.1)]` | Floating panels |
| E4 | `shadow-[0px_2px_4px_rgba(47,51,68,0.1),0px_8px_24px_rgba(47,51,68,0.1)]` | Modals (light) |

### Dark elevations — for overlays and dropdowns

| Level | Tailwind class | Usage |
|-------|---------------|-------|
| E1 | `shadow-[0px_1px_2px_rgba(47,51,68,0.3),0px_2px_6px_rgba(47,51,68,0.15)]` | Dropdowns, tooltips |
| E2 | `shadow-[0px_2px_4px_rgba(47,51,68,0.3),0px_4px_12px_rgba(47,51,68,0.15)]` | Elevated panels |
| E3 | `shadow-[0px_4px_8px_rgba(47,51,68,0.3),0px_8px_24px_rgba(47,51,68,0.15)]` | Modal dialogs, drawers |
| E4 | `shadow-[0px_8px_16px_rgba(47,51,68,0.3),0px_16px_48px_rgba(47,51,68,0.15)]` | Full-screen overlays |

### Banner shadow

| Level | Tailwind class | Usage |
|-------|---------------|-------|
| Banner | `shadow-[0px_4px_6px_rgba(0,0,0,0.1),0px_10px_15px_rgba(0,0,0,0.1)]` | Sticky headers, banners |

## 4d. Breakpoints

| Name | Min-width | Tailwind prefix | Usage |
|------|-----------|----------------|-------|
| xs | 376px | `min-[376px]:` | Mobile portrait |
| sm | 640px | `sm:` | Large mobile / small tablet |
| md | 768px | `md:` | Tablet portrait |
| lg | 1024px | `lg:` | Tablet landscape / small desktop |
| xl | 1280px | `xl:` | Standard desktop |
| 2xl | 1536px | `2xl:` | Wide desktop |
| 3xl | 1920px | `min-[1920px]:` | Full HD and above |

## 5. Match prop names exactly

Use the exact prop values from TACO - all lowercase:

```jsx
// Correct
<Button appearance="primary">Save</Button>
<Button appearance="ghost">Cancel</Button>
<Button appearance="danger">Delete</Button>
<Button fluid>Full width</Button>

// Wrong - do not use
<Button appearance="Primary">Save</Button>
<Button variant="primary">Save</Button>
<Button type="outline">Cancel</Button>
```

## 6. Follow interaction patterns

### Focus states
- All interactive elements show a **2px `border-[#4573D2]`** focus ring with 1px offset
- Use `focus-visible:` prefix for focus styles
- Focus ring border-radius is `rounded-[5px]` (1px larger than the 4px element)

### Disabled states
- Apply `opacity-50 cursor-not-allowed pointer-events-none`
- Never change colors for disabled state - only reduce opacity

### Hover states
- Default button: `hover:bg-[#DDDDDD]`
- Primary button: `hover:bg-[#2B57B4]`
- Ghost button: `hover:bg-[#DEEBFF] hover:border-[#2B57B4]`
- Discrete button: `hover:text-[#2B57B4]`
- Danger button: `hover:bg-[#950027]`

### Dropdown interactivity — MANDATORY
Every Select, Combobox, and dropdown-like component MUST be interactive:
- **Select**: Click trigger → toggle dropdown visibility, click option → update displayed value + close, click outside → close. Chevron rotates 180° when open.
- **Combobox**: Focus/click input → open dropdown, typing filters options in real-time, click option → fill input + close, click outside → close.
- **TopNavigation dropdowns**: Agreement selector and submenu items must open/close on click. All close on outside click.
- **Dropdown panel styling**: `absolute top-full mt-1 bg-white border border-[#DDDDDD] rounded-[4px] shadow-[0px_1px_2px_rgba(0,0,0,0.3),0px_2px_6px_rgba(0,0,0,0.15)] py-1 z-50`
- **Option hover**: `hover:bg-[rgba(0,99,255,0.1)]`
- Never render a Select or Combobox without JavaScript interactivity

### e-conomic logo in TopNavigation
```html
<div class="flex items-center justify-center px-[8px] shrink-0 w-[48px] h-[36px] rounded-[4px]">
  <img src="logos/orange-logo.svg" alt="e-conomic" class="shrink-0" style="height:28px;width:28px;object-fit:contain;">
</div>
```
Container **w-[48px]** (NOT w-[72px]). Image 28×28px. White logo on dark `#29283E` background. Fallback: white bold "e" text.

### Common component patterns
- Border radius: `rounded-[4px]` for buttons, inputs, cards
- Input height: `h-8` (32px)
- Input border: `border border-[#DDDDDD]`
- Input padding: `px-2 py-1.5`

## 7. Layout conventions

- Use **Form** component to wrap related form fields
- Use **FormGrid** for multi-column form layouts
- Button groups: place primary action on the right, secondary on the left
- Standard padding inside cards/sections: `p-4` (16px)
- Gap between form fields: `gap-4` (16px)
- Gap between sections: `gap-6` (24px)

## 8. Accessibility requirements

- Every IconButton must have an `aria-label` prop
- Form fields must have `label` props
- Use semantic HTML: `<button>` for buttons, `<input>` for inputs
- Maintain color contrast ratios (text on colored backgrounds uses `text-white`)
- All interactive elements must be keyboard accessible

## 9. Do NOT

- Invent new colors - only use the token palette above
- Create custom button styles - use the 6 appearance variants
- Use icon libraries other than the e-conomic icon set
- Add shadows or gradients (the design system uses flat design)
- Use `rounded-full` on buttons (always use `rounded-[4px]`)
- Use CSS-in-JS or styled-components - use Tailwind classes only
