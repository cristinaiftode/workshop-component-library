# e-conomic Design System - AI Prompt Rules

You are building UI for the e-conomic accounting platform using React, Tailwind CSS, and the `@economic/taco` component library. Follow these rules strictly.

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
- **States** - EmptyState, HomepageCard

## 2. Color palette - use Tailwind arbitrary values

| Color | Hex | Tailwind class | Usage |
|-------|-----|---------------|-------|
| Blue 500 | `#4573D2` | `bg-[#4573D2]` `text-[#4573D2]` | Primary brand, buttons, links, focus |
| Blue 700 | `#2B57B4` | `bg-[#2B57B4]` | Hover states for blue elements |
| Blue 100 | `#DEEBFF` | `bg-[#DEEBFF]` | Light blue backgrounds (ghost hover) |
| Red 500 | `#CE3F42` | `bg-[#CE3F42]` `text-[#CE3F42]` | Danger/error states |
| Red 700 | `#950027` | `bg-[#950027]` | Danger hover |
| Grey 900 | `#1C1C1C` | `text-[#1C1C1C]` | Primary text |
| Grey 700 | `#595959` | `text-[#595959]` | Helper text, secondary text |
| Grey 500 | `#ACACAC` | `text-[#ACACAC]` | Placeholder text |
| Grey 300 | `#DDDDDD` | `border-[#DDDDDD]` | Borders, input borders |
| Grey 200 | `#EBEBEB` | `bg-[#EBEBEB]` | Default button background |
| Grey 100 | `#F5F5F5` | `bg-[#F5F5F5]` | Subtle/read-only backgrounds |
| White | `#FFFFFF` | `bg-white` | White backgrounds |
| Yellow 100 | `#FFF1C3` | `bg-[#FFF1C3]` | Highlighted field background |

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
<img src="https://webapp.e-conomic.com/img/e-conomic-logo-white.svg" alt="e-conomic" style="height:28px;width:28px;object-fit:contain;" />
```
Always 28×28px. White logo on dark `#29283E` background. Fallback: white bold "e" text.

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
