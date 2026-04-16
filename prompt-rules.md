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
ALWAYS use this exact markup for the logo — do NOT guess or create a custom logo:
```html
<div class="flex items-center justify-center px-[8px] shrink-0 w-[48px] h-[36px] rounded-[4px]">
  <img src="https://raw.githubusercontent.com/cristinaiftode/workshop-component-library/main/showcase/logos/orange-logo.svg" alt="e-conomic" style="height:28px;width:28px;object-fit:contain;">
</div>
```
Container **w-[48px]** (NOT w-[72px]). Image 28×28px. Orange logo (#E89C2E) on dark `#29283E` background.

### Icons — use ONLY these exact SVGs
Do NOT guess or invent icon SVGs. Use these exact icons (all 24x24px, change `fill` color as needed):

**Directional:**
- **chevron-down**: `<svg class="w-6 h-6" viewBox="0 0 24 24" fill="#1C1C1C"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.46967 10.0303C6.17678 9.73744 6.17678 9.26256 6.46967 8.96967C6.73594 8.7034 7.1526 8.6792 7.44621 8.89705L7.53033 8.96967L12 13.439L16.4697 8.96967C16.7359 8.7034 17.1526 8.6792 17.4462 8.89705L17.5303 8.96967C17.7966 9.23594 17.8208 9.6526 17.6029 9.94621L17.5303 10.0303L12.5303 15.0303C12.2641 15.2966 11.8474 15.3208 11.5538 15.1029L11.4697 15.0303L6.46967 10.0303Z" /></svg>`
- **chevron-down-solid**: `<svg class="w-6 h-6" viewBox="0 0 24 24" fill="#1C1C1C"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.20711 8.5C5.76165 8.5 5.53857 9.03857 5.85355 9.35355L11.6464 15.1464C11.8417 15.3417 12.1583 15.3417 12.3536 15.1464L18.1464 9.35355C18.4614 9.03857 18.2383 8.5 17.7929 8.5H6.20711Z" /></svg>`
- **chevron-right**: `<svg class="w-6 h-6" viewBox="0 0 24 24" fill="#1C1C1C"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.0303 6.46967C9.73744 6.17678 9.26256 6.17678 8.96967 6.46967C8.7034 6.73594 8.6792 7.1526 8.89705 7.44621L8.96967 7.53033L13.439 12L8.96967 16.4697C8.7034 16.7359 8.6792 17.1526 8.89705 17.4462L8.96967 17.5303C9.23594 17.7966 9.6526 17.8208 9.94621 17.6029L10.0303 17.5303L15.0303 12.5303C15.2966 12.2641 15.3208 11.8474 15.1029 11.5538L15.0303 11.4697L10.0303 6.46967Z" /></svg>`
- **arrow-left**: `<svg class="w-6 h-6" viewBox="0 0 24 24" fill="#1C1C1C"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.0303 7.96967C11.2966 8.23594 11.3208 8.6526 11.1029 8.94621L11.0303 9.03033L8.811 11.249L17 11.25C17.4142 11.25 17.75 11.5858 17.75 12C17.75 12.3797 17.4678 12.6935 17.1018 12.7432L17 12.75L8.81 12.749L11.0303 14.9697C11.3232 15.2626 11.3232 15.7374 11.0303 16.0303C10.7641 16.2966 10.3474 16.3208 10.0538 16.1029L9.96967 16.0303L6.46967 12.5303L6.38988 12.4364L6.33895 12.3547L6.28881 12.2387L6.26242 12.1363L6.25146 12.0471L6.25149 11.9525L6.26973 11.8286L6.29999 11.7302L6.34686 11.631L6.40096 11.5486L6.46967 11.4697L9.96967 7.96967C10.2626 7.67678 10.7374 7.67678 11.0303 7.96967Z" /></svg>`
- **arrow-right**: `<svg class="w-6 h-6" viewBox="0 0 24 24" fill="#1C1C1C"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.9462 7.89705L14.0303 7.96967L17.5303 11.4697L17.5659 11.5078L17.6101 11.5636L17.661 11.6453L17.7112 11.7613L17.7376 11.8637L17.7482 11.9485L17.7482 12.0514L17.7303 12.1714L17.6911 12.2919L17.6531 12.369L17.5937 12.4583L17.5303 12.5303L14.0303 16.0303C13.7374 16.3232 13.2626 16.3232 12.9697 16.0303C12.7034 15.7641 12.6792 15.3474 12.8971 15.0538L12.9697 14.9697L15.188 12.75H7C6.58579 12.75 6.25 12.4142 6.25 12C6.25 11.6203 6.53215 11.3065 6.89823 11.2568L7 11.25H15.189L12.9697 9.03033C12.6768 8.73744 12.6768 8.26256 12.9697 7.96967C13.2359 7.7034 13.6526 7.6792 13.9462 7.89705Z" /></svg>`
- **arrow-start**: `<svg class="w-6 h-6" viewBox="0 0 24 24" fill="#1C1C1C"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.25 7.5C5.66421 7.5 6 7.83579 6 8.25V15.75C6 16.1642 5.66421 16.5 5.25 16.5C4.83579 16.5 4.5 16.1642 4.5 15.75V8.25C4.5 7.83579 4.83579 7.5 5.25 7.5ZM12.7803 7.96967C13.0466 8.23594 13.0708 8.6526 12.8529 8.94621L12.7803 9.03033L10.561 11.25H18.75C19.1642 11.25 19.5 11.5858 19.5 12C19.5 12.3797 19.2178 12.6935 18.8518 12.7432L18.75 12.75H10.561L12.7803 14.9697C13.0732 15.2626 13.0732 15.7374 12.7803 16.0303C12.5141 16.2966 12.0974 16.3208 11.8038 16.1029L11.7197 16.0303L8.21966 12.5303L8.16535 12.4699L8.11872 12.4053L8.07015 12.3172L8.02596 12.1962L8.00775 12.1083L8.00082 11.9646L8.01957 11.829L8.0498 11.7307L8.09685 11.631L8.15096 11.5486L8.21966 11.4697L11.7197 7.96967C12.0126 7.67678 12.4874 7.67678 12.7803 7.96967Z" /></svg>`
- **arrow-end**: `<svg class="w-6 h-6" viewBox="0 0 24 24" fill="#1C1C1C"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.75 7.5C19.1642 7.5 19.5 7.83579 19.5 8.25V15.75C19.5 16.1642 19.1642 16.5 18.75 16.5C18.3358 16.5 18 16.1642 18 15.75V8.25C18 7.83579 18.3358 7.5 18.75 7.5ZM12.1962 7.89705L12.2803 7.96967L15.7803 11.4697C15.8049 11.4943 15.8278 11.5206 15.8488 11.5484L15.7803 11.4697L15.8192 11.5116L15.8601 11.5636L15.9278 11.6785L15.9659 11.7759L15.9869 11.8598L15.9982 11.9477V12.0523L15.9804 12.171L15.9502 12.2693L15.9031 12.3689L15.8712 12.4203L15.8437 12.4583L15.7803 12.5303L12.2803 16.0303C11.9874 16.3232 11.5126 16.3232 11.2197 16.0303C10.9534 15.7641 10.9292 15.3474 11.1471 15.0538L11.2197 14.9697L13.439 12.75H5.25C4.83579 12.75 4.5 12.4142 4.5 12C4.5 11.6203 4.78215 11.3065 5.14823 11.2568L5.25 11.25H13.439L11.2197 9.03033C10.9268 8.73744 10.9268 8.26256 11.2197 7.96967C11.4859 7.7034 11.9026 7.6792 12.1962 7.89705Z" /></svg>`

**Actions:**
- **search**: `<svg class="w-6 h-6" viewBox="0 0 24 24" fill="#1C1C1C"><path d="M10 2.25a7.75 7.75 0 015.985 12.674l5.545 5.546a.75.75 0 01-.976 1.133l-.084-.073-5.546-5.545A7.75 7.75 0 1110 2.25zm0 1.5a6.25 6.25 0 100 12.5 6.25 6.25 0 000-12.5z" fill-rule="evenodd"/></svg>`
- **edit-simple**: `<svg class="w-6 h-6" viewBox="0 0 24 24" fill="#1C1C1C"><path d="M16.013 4.513a1.75 1.75 0 012.35-.114l.124.114 1.586 1.585a1.75 1.75 0 01.114 2.35l-.114.125L8.061 20.586H4v-4.06L16.013 4.512zm-1.514 3.633l-8.999 9v1.94h1.938l9-9.001-1.939-1.939zm2.928-2.573a.25.25 0 00-.3-.04l-.054.04-1.513 1.512 1.939 1.939 1.514-1.511a.25.25 0 00.065-.24l-.025-.06-.04-.054-1.586-1.586z" fill-rule="evenodd" clip-rule="evenodd"/></svg>`
- **copy**: `<svg class="w-6 h-6" viewBox="0 0 24 24" fill="#1C1C1C"><path d="M6 5v1.5h-.25a.25.25 0 00-.243.193L5.5 6.75v13.5a.25.25 0 00.193.243l.057.007h9.5a.25.25 0 00.243-.193l.007-.057V20H17v.25A1.75 1.75 0 0115.25 22h-9.5A1.75 1.75 0 014 20.25V6.75C4 5.784 4.784 5 5.75 5H6zm7.586-3a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707v8.836A1.75 1.75 0 0118.25 19h-9.5A1.75 1.75 0 017 17.25V3.75C7 2.784 7.784 2 8.75 2h4.836zM13 3.5H8.75a.25.25 0 00-.243.193L8.5 3.75v13.5a.25.25 0 00.193.243l.057.007h9.5a.25.25 0 00.243-.193l.007-.057V9h-3.75a1.75 1.75 0 01-1.744-1.606L13 7.25V3.5zm1.5 1.121V7.25a.25.25 0 00.193.243l.057.007h2.629L14.5 4.621z" fill-rule="evenodd"/></svg>`
- **delete**: `<svg class="w-6 h-6" viewBox="0 0 24 24" fill="#1C1C1C"><path d="M12 2a4.5 4.5 0 014.472 4h3.778a.75.75 0 110 1.5h-.75V18a4 4 0 01-4 4h-7a4 4 0 01-4-4V7.5h-.75a.75.75 0 010-1.5h3.777A4.5 4.5 0 0112 2zm6 5.5H6V18a2.5 2.5 0 002.336 2.495l.164.005h7a2.5 2.5 0 002.495-2.336L18 18V7.5zm-8.25 2a.75.75 0 01.75.75v7.5a.75.75 0 11-1.5 0v-7.5a.75.75 0 01.75-.75zm4.5 0a.75.75 0 01.75.75v7.5a.75.75 0 11-1.5 0v-7.5a.75.75 0 01.75-.75zM12 3.5A3 3 0 009.041 6h5.917A3 3 0 0012 3.5z" fill-rule="evenodd"/></svg>`
- **print**: `<svg class="w-6 h-6" viewBox="0 0 24 24" fill="#1C1C1C"><path d="M16.75 2c.966 0 1.75.784 1.75 1.75v1.758A3.75 3.75 0 0122 9.25v7.5a1.75 1.75 0 01-1.75 1.75H18.5v1.75A1.75 1.75 0 0116.75 22h-9.5a1.75 1.75 0 01-1.75-1.75V18.5H3.75A1.75 1.75 0 012 16.75v-7.5a3.75 3.75 0 013.5-3.742V3.75C5.5 2.784 6.284 2 7.25 2h9.5zM17 14.5H7v5.75a.25.25 0 00.193.243l.057.007h9.5a.25.25 0 00.243-.193L17 20.25V14.5zM18.25 7H5.75a2.25 2.25 0 00-2.245 2.096L3.5 9.25v7.5a.25.25 0 00.193.243L3.75 17H5.5v-3.25a.75.75 0 01.75-.75h11.5a.75.75 0 01.75.75V17h1.75a.25.25 0 00.243-.193l.007-.057v-7.5a2.25 2.25 0 00-2.096-2.245L18.25 7zm-.5 3a.75.75 0 110 1.5h-2.5a.75.75 0 110-1.5h2.5zm-1-6.5h-9.5a.25.25 0 00-.243.193L7 3.75V5.5h10V3.75a.25.25 0 00-.193-.243L16.75 3.5z" fill-rule="evenodd"/></svg>`
- **export**: `<svg class="w-6 h-6" viewBox="0 0 24 24" fill="#1C1C1C"><path d="M8.5 7.999V9.5H5.75a.25.25 0 00-.243.193L5.5 9.75v10.5a.25.25 0 00.193.243l.057.007h12.5a.25.25 0 00.243-.193l.007-.057V9.75a.25.25 0 00-.193-.243L18.25 9.5H15.5V7.999L18.25 8c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0118.25 22H5.75A1.75 1.75 0 014 20.25V9.75C4 8.784 4.784 8 5.75 8l2.75-.001zM11.992 2l.1.006.076.013.08.023.107.047.091.058.084.073 3 3a.75.75 0 01-.976 1.133l-.084-.073-1.72-1.719V15.25a.75.75 0 01-1.493.102l-.007-.102V4.561l-1.72 1.72a.75.75 0 01-1.133-.977l.073-.084 3-3a.753.753 0 01.125-.101l.088-.049.119-.043.106-.021A.754.754 0 0111.992 2z" fill-rule="evenodd"/></svg>`
- **filter**: `<svg class="w-6 h-6" viewBox="0 0 24 24" fill="#1C1C1C"><path d="M20.25 2a.75.75 0 01.75.75v2a.75.75 0 01-.15.45l-5.7 7.6a.75.75 0 00-.15.45v6.725a.75.75 0 01-.494.705l-4 1.454A.75.75 0 019.5 21.43v-8.163a.75.75 0 00-.168-.473L3.168 5.207A.75.75 0 013 4.734V2.75A.75.75 0 013.75 2h16.5zm-.75 1.5h-15v.967l5.996 7.38c.285.351.457.779.496 1.226l.008.193v7.092l2.5-.91V13.25c0-.426.12-.842.347-1.2l.103-.15 5.55-7.401V3.5z" fill-rule="evenodd"/></svg>`
- **close**: `<svg class="w-6 h-6" viewBox="0 0 24 24" fill="#1C1C1C"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.5538 6.39705C16.8474 6.1792 17.2641 6.2034 17.5303 6.46967C17.7966 6.73594 17.8208 7.1526 17.6029 7.44621L17.5303 7.53033L13.061 12L17.5303 16.4697C17.8232 16.7626 17.8232 17.2374 17.5303 17.5303C17.2641 17.7966 16.8474 17.8208 16.5538 17.6029L16.4697 17.5303L12 13.061L7.53033 17.5303L7.44621 17.6029C7.1526 17.8208 6.73594 17.7966 6.46967 17.5303C6.2034 17.2641 6.1792 16.8474 6.39705 16.5538L6.46967 16.4697L10.939 12L6.46967 7.53033C6.17678 7.23744 6.17678 6.76256 6.46967 6.46967C6.73594 6.2034 7.1526 6.1792 7.44621 6.39705L7.53033 6.46967L12 10.939L16.4697 6.46967L16.5538 6.39705Z" /></svg>`
- **tick**: `<svg class="w-6 h-6" viewBox="0 0 24 24" fill="#1C1C1C"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.8673 6.09732C17.0896 5.74786 17.5532 5.64485 17.9027 5.86723C18.2203 6.06939 18.3344 6.47088 18.1854 6.80476L18.1327 6.90263L11.1327 17.9026C10.8763 18.3055 10.3226 18.3633 9.98755 18.0479L9.91435 17.9685L5.91435 12.9685C5.65559 12.645 5.70803 12.1731 6.03148 11.9143C6.32552 11.6791 6.74231 11.701 7.01006 11.95L7.08565 12.0315L10.43 16.212L16.8673 6.09732Z" /></svg>`

**Status:**
- **circle-tick** (success): `<svg class="w-6 h-6" viewBox="0 0 24 24" fill="#028465"><path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 1.5a8.5 8.5 0 100 17 8.5 8.5 0 000-17zm4.403 3.867a.75.75 0 01.282.938l-.052.098-5.091 8a.75.75 0 01-1.145.145l-.074-.08-2.909-3.636a.75.75 0 011.096-1.018l.076.081 2.253 2.817 4.528-7.115a.75.75 0 011.036-.23z" fill-rule="evenodd"/></svg>`
- **circle-warning** (error): `<svg class="w-6 h-6" viewBox="0 0 24 24" fill="#CE3F42"><path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 1.5a8.5 8.5 0 100 17 8.5 8.5 0 000-17zm0 3.75a.97.97 0 00-.974.989L11.2 12.5c.01.417.352.749.771.749a.768.768 0 00.77-.74l.23-4.26a.97.97 0 00-.97-1zm0 9.5a1 1 0 100-2 1 1 0 000 2z" fill-rule="evenodd" clip-rule="evenodd"/></svg>`
- **circle-information** (info): `<svg class="w-6 h-6" viewBox="0 0 24 24" fill="#4573D2"><path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 1.5a8.5 8.5 0 100 17 8.5 8.5 0 000-17zm-.267 5.753a1 1 0 10-.001-2.001 1 1 0 00.001 2.001zM14 16.754a.75.75 0 000-1.502h-1.267V11.5a.752.752 0 00-.75-.751H10a.75.75 0 000 1.502h1.233v3H10a.75.75 0 000 1.503h4z" fill-rule="evenodd" clip-rule="evenodd"/></svg>`
- **warning**: `<svg class="w-6 h-6" viewBox="0 0 24 24" fill="#FFBD3B"><path d="M13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17C12.5523 17 13 17.4477 13 18Z" /><path d="M11.0553 5.98932C11.0432 5.44635 11.4829 4.9999 12.0291 5.00061C12.5784 5.00132 13.0182 5.45399 13 6.00001L12.7706 13.76C12.7568 14.1733 12.4159 14.5 12 14.5C11.5808 14.5 11.2385 14.1683 11.2292 13.7515L11.0553 5.98932Z" /></svg>`

### Common component patterns
- Border radius: `rounded-[4px]` for buttons, inputs, cards
- Input height: `h-8` (32px)
- Input border: `border border-[#DDDDDD]`
- Input padding: `px-2 py-1.5`

### Badge — inline status label
- Shape: `rounded-full` pill (exception to the 4px rule — badges use full rounding)
- Variants: `strong` (filled bg, white/dark text), `subtle` (light tinted bg, dark text)
- Sizes: default (`py-[2px] px-[8px] text-xs font-bold`), small (`py-[1px] px-[6px] text-[10px] font-bold`)
- Colors: blue (`#4573D2`), green (`#028465`), yellow (`#FFBD3B`), red (`#CE3F42`), neutral (`#EBEBEB`), dark (`#29283E`), purple (`#6542D1`), magenta (`#CF49AA`), brown (`#73503B`), orange (`#F99702`)
- Subtle backgrounds: blue `#DEEBFF`, green `#CDF0E7`, yellow `#FFF1C3`, red `#FFDAD2`, neutral `#F5F5F5`, purple `#EDE8FF`, magenta `#FFE1F5`, brown `#F0E0D4`, orange `#FFEED0`

### BadgeDot — 8px colored status dot
- Size: `w-2 h-2 rounded-full`
- Same 10 color options as Badge

### BadgeIcon — small status icon circle
- Sizes: 20px and 16px diameter circles
- Types: info (blue, `circle-information`), success (green, `circle-tick`), warning (yellow, `warning`), error (red, `circle-warning`), neutral (grey, `questionmark`)
- Variants: default (filled circle), subtle (outlined)

### LinkText — styled text link
- Color: `#4573D2`, hover `#2B57B4`, underlined
- Sizes: small (`text-xs leading-4`), medium (`text-sm leading-5`), large (`text-base leading-6`)
- Weights: regular (400), bold (700)

### Spinner — loading indicator
- Color: `#4573D2`
- Sizes: 12px, 20px, 24px, 40px
- Animation: `spin 1s linear infinite`
- Optional text label below (only with size 40)

### SkeletonLoader — shimmer placeholder
- Variants: text block, card, table-row
- Colors: base `#EBEBEB`, highlight `#F5F5F5`
- Animation: shimmer gradient moving left to right, 1.5s ease-in-out infinite
- Border radius: `rounded-[4px]`

### Toast — temporary notification
- Variants: compact (small pill), wide (384px panel)
- Types: success (`#CDF0E7`), error (`#FFDAD2`), warning (`#FFF1C3`), info (`#DEEBFF`), neutral (`#EBEBEB`)
- Icons: success=`circle-tick`, error=`circle-warning`, warning=`warning`, info=`circle-information`
- Styling: `rounded-[8px]`, elevation Dark E1 shadow, dismiss X button
- Compact: `pl-[9px] pr-[6px] py-[11px]`, Wide: `w-[384px] p-[12px]`

### Alert — full-width inline alert
- Types: info, success, warning, error, neutral (same colors as Toast)
- Styling: `w-full p-[12px] rounded-[8px]`, icon + title + close button
- Same iconMapping as Toast

### Banner — prominent notification bar
- Types: information, success, warning, error
- Width: `w-[600px]`, left border accent: `border-l-4`
- Colors: info (`#DEEBFF` bg, `#4573D2` border), success (`#CDF0E7` bg, `#028465` border), warning (`#FFF1C3` bg, `#FFBD3B` border), error (`#FFDAD2` bg, `#CE3F42` border)
- Styling: `p-4 rounded-[4px]`, icon + title + description + close button

### Callout — contextual help tooltip
- Variants: compact (title only), description (title + body)
- Arrow directions: top, bottom, left, right
- Width: `352px`, white bg, `rounded-[8px]`, elevation Dark E1 shadow
- Padding: `12px 16px`

### Tour — onboarding step tooltip
- Similar to Callout but with Back/Next navigation buttons and step counter
- Width: `352px`, white bg, `rounded-[8px]`, elevation Dark E1 shadow
- Next button: primary blue (`#4573D2`), Back button: discrete text (`#4573D2`)
- Step counter: "Step N of M"

### Popover — floating content panel
- Positions: top, bottom, left, right (with directional arrow)
- Blue bg (`#4573D2`), white text, `rounded-[8px]`, elevation Dark E1 shadow
- Padding: `12px 16px`

### TableRow — enhanced interactive row
- Features: selectable (checkbox), expandable (chevron), inline status badges
- Row height: 40px, hover bg: `rgba(0,99,255,0.05)`, selected bg: `rgba(0,99,255,0.1)`
- Divider: `shadow-[inset_0_-1px_0_0_#DDDDDD]`
- Expand icons: `chevron-right` (collapsed) / `chevron-down` (expanded)

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
