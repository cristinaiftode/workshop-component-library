import React, { useState } from "react";

/* ─── Icons ─── */

function ChevronDownSolid({ className = "" }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className={className}>
      <path d="M4 6L8 10L12 6H4Z" />
    </svg>
  );
}

function ChevronRightOutline({ className = "" }: { className?: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M9 6L15 12L9 18" />
    </svg>
  );
}

function ChevronLeftOutline({ className = "" }: { className?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M12 4L6 10L12 16" />
    </svg>
  );
}

function MoreIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="#1C1C1C">
      <circle cx="12" cy="6" r="1.5" />
      <circle cx="12" cy="12" r="1.5" />
      <circle cx="12" cy="18" r="1.5" />
    </svg>
  );
}

function TrashIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#1C1C1C" strokeWidth="1.5">
      <path d="M3 5H17M7 5V3H13V5M5 5V17H15V5" />
    </svg>
  );
}

/* ─── Dot sub-component ─── */

interface DotProps {
  type?: "dot" | "bin";
  color?: string;
}

function Dot({ type = "dot", color = "#4573D2" }: DotProps) {
  if (type === "bin") {
    return (
      <span className="flex items-center justify-center w-[16px] h-[24px] flex-shrink-0 -ml-[6px]">
        <TrashIcon />
      </span>
    );
  }
  return (
    <span className="flex items-center justify-center w-[16px] h-[24px] flex-shrink-0">
      <span
        className="w-[8px] h-[8px] rounded-full"
        style={{ backgroundColor: color }}
      />
    </span>
  );
}

/* ─── Badge sub-component ─── */

function Badge({ label }: { label: string }) {
  return (
    <span className="bg-[rgba(28,28,28,0.08)] rounded-full px-[6px] text-[14px] leading-[20px] font-normal flex-shrink-0">
      {label}
    </span>
  );
}

/* ─── MenuItem sub-component ─── */

export interface MenuItemData {
  id: string;
  label: string;
  dot?: "dot" | "bin";
  dotColor?: string;
  badge?: string;
  active?: boolean;
}

interface MenuItemProps {
  item: MenuItemData;
  onClick?: (id: string) => void;
}

function MenuItem({ item, onClick }: MenuItemProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={() => onClick?.(item.id)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={[
        "h-[32px] w-[232px] pl-[20px] py-[6px] rounded-[4px]",
        "flex items-center gap-[4px]",
        "bg-transparent border-none outline-none cursor-pointer",
        "text-[14px] leading-[20px] text-[#1C1C1C]",
        "font-['Helvetica',Arial,sans-serif] font-normal",
        item.badge && !item.dot ? "pr-[6px]" : "pr-[8px]",
        item.active
          ? "bg-[rgba(0,99,255,0.1)]"
          : hovered
          ? "bg-[rgba(28,28,28,0.06)]"
          : "",
      ].join(" ")}
    >
      {item.dot && (
        <Dot type={item.dot} color={item.dotColor} />
      )}
      <span className="overflow-hidden text-ellipsis whitespace-nowrap flex-1 text-left">
        {item.label}
      </span>
      {/* Badge shows normally, but on hover with badge → show More icon instead */}
      {item.badge && !(hovered && !item.active) && (
        <Badge label={item.badge} />
      )}
      {item.badge && hovered && !item.active && (
        <span className="flex-shrink-0">
          <MoreIcon />
        </span>
      )}
      {/* Active+Hover also shows badge */}
      {item.badge && hovered && item.active && null}
    </button>
  );
}

/* ─── MenuHeader sub-component ─── */

interface MenuHeaderProps {
  label: string;
  badge?: string;
  chevron?: boolean;
  expanded?: boolean;
  active?: boolean;
  onClick?: () => void;
}

function MenuHeader({
  label,
  badge,
  chevron = true,
  expanded = false,
  active = false,
  onClick,
}: MenuHeaderProps) {
  const [hovered, setHovered] = useState(false);

  const bgClass = active
    ? "bg-[rgba(0,99,255,0.1)]"
    : hovered
    ? "bg-[rgba(28,28,28,0.06)]"
    : "";

  if (chevron) {
    return (
      <button
        onClick={onClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={[
          "h-[32px] w-[232px] py-[6px] pr-[8px]",
          "flex items-center",
          "bg-transparent border-none outline-none cursor-pointer",
          "font-bold text-[14px] leading-[20px] text-[#1C1C1C]",
          "font-['Helvetica',Arial,sans-serif] rounded-[4px]",
          bgClass,
        ].join(" ")}
      >
        <span className="flex items-center justify-center w-[20px] h-[20px] p-[2px]">
          <ChevronDownSolid
            className={[
              "transition-transform duration-150",
              expanded ? "rotate-0" : "-rotate-90",
            ].join(" ")}
          />
        </span>
        <span className="overflow-hidden text-ellipsis whitespace-nowrap flex-1 text-left">
          {label}
        </span>
        {badge && <Badge label={badge} />}
      </button>
    );
  }

  // Without chevron (e.g., Inbox header style)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={[
        "h-[32px] w-[232px] pl-[20px] pr-[8px] py-[10px]",
        "flex items-center gap-[4px]",
        "font-bold text-[14px] leading-[20px] text-[#1C1C1C]",
        "font-['Helvetica',Arial,sans-serif] rounded-[4px]",
        bgClass,
      ].join(" ")}
    >
      <span className="overflow-hidden text-ellipsis whitespace-nowrap flex-1">
        {label}
      </span>
      {badge && <Badge label={badge} />}
    </div>
  );
}

/* ─── MenuGroup sub-component ─── */

export interface MenuGroupData {
  id: string;
  label: string;
  badge?: string;
  items: MenuItemData[];
  expanded?: boolean;
}

interface MenuGroupProps {
  group: MenuGroupData;
  expanded: boolean;
  onToggle: () => void;
  onItemClick?: (id: string) => void;
  showNewCategory?: boolean;
}

function MenuGroup({
  group,
  expanded,
  onToggle,
  onItemClick,
  showNewCategory = false,
}: MenuGroupProps) {
  return (
    <div>
      <MenuHeader
        label={group.label}
        badge={group.badge}
        chevron
        expanded={expanded}
        onClick={onToggle}
      />
      {expanded && (
        <div className="flex flex-col gap-px">
          {group.items.map((item) => (
            <MenuItem key={item.id} item={item} onClick={onItemClick} />
          ))}
          {showNewCategory && <NewCategory />}
        </div>
      )}
    </div>
  );
}

/* ─── Header sub-component ─── */

interface HeaderProps {
  type: "inbox" | "subpage";
  label?: string;
  badge?: string;
  onBack?: () => void;
}

function Header({ type, label, badge, onBack }: HeaderProps) {
  if (type === "subpage") {
    return (
      <div className="h-[50px] border-b-2 border-[rgba(28,28,28,0.08)] py-[8px] flex flex-col items-center w-[255px]">
        <button
          onClick={onBack}
          className={[
            "h-[32px] w-[232px] py-[6px] pr-[8px]",
            "flex items-center",
            "bg-transparent border-none outline-none cursor-pointer",
            "font-bold text-[14px] leading-[20px] text-[#1C1C1C]",
            "font-['Helvetica',Arial,sans-serif] rounded-[4px]",
            "hover:bg-[rgba(28,28,28,0.06)]",
          ].join(" ")}
        >
          <ChevronLeftOutline />
          <span className="overflow-hidden text-ellipsis whitespace-nowrap flex-1 text-left">
            Go to overview
          </span>
        </button>
      </div>
    );
  }

  // Inbox header
  return (
    <div className="h-[50px] border-b-2 border-[rgba(28,28,28,0.08)] py-[8px] flex flex-col items-center w-[255px]">
      <MenuHeader
        label={label || "Inbox"}
        badge={badge}
        chevron={false}
      />
    </div>
  );
}

/* ─── MenuItemOverview sub-component ─── */

export interface MenuItemOverviewData {
  id: string;
  label: string;
  icon?: React.ReactNode;
  chevron?: boolean;
  active?: boolean;
}

interface MenuItemOverviewProps {
  item: MenuItemOverviewData;
  onClick?: (id: string) => void;
}

function MenuItemOverview({ item, onClick }: MenuItemOverviewProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={() => onClick?.(item.id)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={[
        "h-[32px] w-[232px] py-[6px] rounded-[4px]",
        "flex items-center",
        "bg-transparent border-none outline-none cursor-pointer",
        "font-bold text-[14px] leading-[20px] text-[#1C1C1C]",
        "font-['Helvetica',Arial,sans-serif]",
        item.icon || item.chevron ? "gap-[4px] pl-[8px]" : "px-[8px]",
        item.active
          ? "bg-[rgba(0,99,255,0.1)]"
          : hovered
          ? "bg-[rgba(28,28,28,0.06)]"
          : "",
      ].join(" ")}
    >
      {item.icon && (
        <span className="flex-shrink-0 w-[20px] h-[20px] flex items-center justify-center">
          {item.icon}
        </span>
      )}
      <span className="overflow-hidden text-ellipsis whitespace-nowrap flex-1 text-left">
        {item.label}
      </span>
      {item.chevron && (
        <span className="flex-shrink-0">
          <ChevronRightOutline />
        </span>
      )}
    </button>
  );
}

/* ─── NewCategory sub-component ─── */

function NewCategory() {
  const [state, setState] = useState<"normal" | "hover" | "focus">("normal");

  return (
    <button
      onMouseEnter={() => state !== "focus" && setState("hover")}
      onMouseLeave={() => state !== "focus" && setState("normal")}
      onFocus={() => setState("focus")}
      onBlur={() => setState("normal")}
      className={[
        "h-[32px] w-[232px] pl-[20px] pr-[8px]",
        "flex items-center",
        "border-none outline-none cursor-pointer",
        "text-[14px] leading-[20px] text-[#9DA3AE]",
        "font-['Helvetica',Arial,sans-serif] font-normal rounded-[4px]",
        state === "focus"
          ? "bg-[#FAFAFA] border border-solid border-[#4573D2] shadow-[0px_0px_0px_2px_rgba(0,99,255,0.25)]"
          : state === "hover"
          ? "bg-[#FAFAFA] border border-solid border-[#DDD]"
          : "bg-transparent",
      ].join(" ")}
    >
      + New category
    </button>
  );
}

/* ─── Panel sub-component ─── */

interface PanelProps {
  children: React.ReactNode;
}

function Panel({ children }: PanelProps) {
  return (
    <div className="border-t-2 border-[rgba(28,28,28,0.08)] flex flex-col gap-[4px] items-start pb-[12px] pt-[14px] px-[12px] w-[255px]">
      {children}
    </div>
  );
}

/* ─── SideNavigation ─── */

interface SideNavigationNormalProps {
  type?: "normal";
  groups: MenuGroupData[];
  onItemClick?: (itemId: string) => void;
  onGroupToggle?: (groupId: string) => void;
  showNewCategory?: boolean;
  panelContent?: React.ReactNode;
  className?: string;
}

interface SideNavigationInboxProps {
  type: "inbox";
  title?: string;
  titleBadge?: string;
  groups: MenuGroupData[];
  onItemClick?: (itemId: string) => void;
  onGroupToggle?: (groupId: string) => void;
  showNewCategory?: boolean;
  panelContent?: React.ReactNode;
  className?: string;
}

interface SideNavigationOverviewProps {
  type: "overview";
  items: MenuItemOverviewData[];
  bottomItems?: MenuItemOverviewData[];
  onItemClick?: (itemId: string) => void;
  className?: string;
}

interface SideNavigationSubpageProps {
  type: "subpage";
  groups: MenuGroupData[];
  onItemClick?: (itemId: string) => void;
  onGroupToggle?: (groupId: string) => void;
  onBack?: () => void;
  showNewCategory?: boolean;
  panelContent?: React.ReactNode;
  className?: string;
}

export type SideNavigationProps =
  | SideNavigationNormalProps
  | SideNavigationInboxProps
  | SideNavigationOverviewProps
  | SideNavigationSubpageProps;

export function SideNavigation(props: SideNavigationProps) {
  const { className = "" } = props;
  const type = props.type || "normal";

  // Expand state for groups
  const groups = type !== "overview" ? (props as any).groups as MenuGroupData[] : [];
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>(
    () => {
      const initial: Record<string, boolean> = {};
      groups?.forEach((group: MenuGroupData) => {
        initial[group.id] = group.expanded !== false;
      });
      return initial;
    }
  );

  const handleGroupToggle = (groupId: string) => {
    setExpandedGroups((prev) => ({
      ...prev,
      [groupId]: !prev[groupId],
    }));
    if (type !== "overview" && (props as any).onGroupToggle) {
      (props as any).onGroupToggle(groupId);
    }
  };

  const navClasses = [
    "w-[255px] bg-[#FAFAFA] border-r border-[rgba(28,28,28,0.08)]",
    "flex flex-col h-full",
    "font-['Helvetica',Arial,sans-serif] text-[14px] text-[#1C1C1C]",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  /* ── Overview type ── */
  if (type === "overview") {
    const { items, bottomItems, onItemClick } = props as SideNavigationOverviewProps;
    return (
      <nav className={navClasses}>
        <div className="flex-1 overflow-y-auto pt-[12px] px-[12px]">
          <div className="flex flex-col gap-[2px]">
            {items.map((item) => (
              <MenuItemOverview key={item.id} item={item} onClick={onItemClick} />
            ))}
          </div>
        </div>
        {bottomItems && bottomItems.length > 0 && (
          <Panel>
            <div className="flex flex-col gap-[2px] w-full">
              {bottomItems.map((item) => (
                <MenuItemOverview key={item.id} item={item} onClick={onItemClick} />
              ))}
            </div>
          </Panel>
        )}
      </nav>
    );
  }

  /* ── Inbox / Normal / Subpage types ── */
  const onItemClick = (props as any).onItemClick;
  const showNewCategory = (props as any).showNewCategory || false;
  const panelContent = (props as any).panelContent;

  return (
    <nav className={navClasses}>
      {/* Header for Inbox type */}
      {type === "inbox" && (
        <Header
          type="inbox"
          label={(props as SideNavigationInboxProps).title}
          badge={(props as SideNavigationInboxProps).titleBadge}
        />
      )}

      {/* Header for Subpage type */}
      {type === "subpage" && (
        <Header
          type="subpage"
          onBack={(props as SideNavigationSubpageProps).onBack}
        />
      )}

      {/* Menu groups area */}
      <div className="flex-1 overflow-y-auto p-[12px]">
        <div className="flex flex-col gap-[2px]">
          {groups.map((group) => (
            <MenuGroup
              key={group.id}
              group={group}
              expanded={expandedGroups[group.id] !== false}
              onToggle={() => handleGroupToggle(group.id)}
              onItemClick={onItemClick}
              showNewCategory={showNewCategory}
            />
          ))}
        </div>
      </div>

      {/* Bottom panel */}
      {panelContent && <Panel>{panelContent}</Panel>}
    </nav>
  );
}
