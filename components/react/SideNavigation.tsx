import React, { useState } from "react";

interface MenuItemData {
  id: string;
  label: string;
  dotColor?: string;
  badge?: string;
  active?: boolean;
}

interface MenuGroupData {
  id: string;
  label: string;
  badge?: string;
  items: MenuItemData[];
  expanded?: boolean;
}

interface SideNavigationProps {
  title?: string;
  titleBadge?: string;
  groups: MenuGroupData[];
  onItemClick?: (itemId: string) => void;
  onGroupToggle?: (groupId: string) => void;
  showNewCategory?: boolean;
  newCategoryLabel?: string;
  panelContent?: React.ReactNode;
  className?: string;
}

function ChevronIcon({ expanded }: { expanded: boolean }) {
  return (
    <span className="flex items-center justify-center w-[16px] h-[16px] p-[2px]">
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="currentColor"
        className={[
          "transition-transform duration-150",
          expanded ? "rotate-0" : "-rotate-90",
        ].join(" ")}
      >
        <path d="M2.5 4.5L6 8L9.5 4.5H2.5Z" />
      </svg>
    </span>
  );
}

export function SideNavigation({
  title,
  titleBadge,
  groups,
  onItemClick,
  onGroupToggle,
  showNewCategory = false,
  newCategoryLabel = "+",
  panelContent,
  className = "",
}: SideNavigationProps) {
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>(
    () => {
      const initial: Record<string, boolean> = {};
      groups.forEach((group) => {
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
    onGroupToggle?.(groupId);
  };

  return (
    <nav
      className={[
        "w-[255px] bg-[#FAFAFA] border-r border-[rgba(28,28,28,0.08)]",
        "flex flex-col h-full",
        "font-['Helvetica',Arial,sans-serif] text-[14px] text-[#1C1C1C]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {/* Header */}
      {title && (
        <div className="h-[50px] border-b-2 border-[rgba(28,28,28,0.08)] py-[8px] px-[12px] flex items-center gap-[8px]">
          <span className="font-bold text-[14px] leading-[20px]">{title}</span>
          {titleBadge && (
            <span className="bg-[rgba(28,28,28,0.08)] rounded-full px-[6px] text-[14px] leading-[20px]">
              {titleBadge}
            </span>
          )}
        </div>
      )}

      {/* Menu area */}
      <div className="flex-1 overflow-y-auto p-[12px]">
        <div className="flex flex-col gap-[2px]">
          {groups.map((group) => {
            const isExpanded = expandedGroups[group.id] !== false;

            return (
              <div key={group.id}>
                {/* Menu Group Header */}
                <button
                  onClick={() => handleGroupToggle(group.id)}
                  className={[
                    "h-[32px] w-[232px] py-[6px] pr-[8px]",
                    "flex items-center gap-[4px]",
                    "bg-transparent border-none outline-none cursor-pointer",
                    "font-bold text-[14px] leading-[20px] text-[#1C1C1C]",
                    "font-['Helvetica',Arial,sans-serif]",
                  ].join(" ")}
                >
                  <ChevronIcon expanded={isExpanded} />
                  <span className="overflow-hidden text-ellipsis whitespace-nowrap flex-1 text-left">
                    {group.label}
                  </span>
                  {group.badge && (
                    <span className="bg-[rgba(28,28,28,0.08)] rounded-full px-[6px] text-[14px] leading-[20px] font-normal">
                      {group.badge}
                    </span>
                  )}
                </button>

                {/* Menu Items */}
                {isExpanded && (
                  <div className="flex flex-col gap-[2px]">
                    {group.items.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => onItemClick?.(item.id)}
                        className={[
                          "h-[32px] w-[232px] pl-[20px] pr-[8px] py-[6px] rounded-[4px]",
                          "flex items-center gap-[4px]",
                          "bg-transparent border-none outline-none cursor-pointer",
                          "text-[14px] leading-[20px] text-[#1C1C1C]",
                          "font-['Helvetica',Arial,sans-serif] font-normal",
                          item.active
                            ? "bg-[rgba(0,99,255,0.1)]"
                            : "hover:bg-[rgba(28,28,28,0.06)]",
                        ].join(" ")}
                      >
                        {item.dotColor && (
                          <span className="flex items-center justify-center w-[16px] h-[24px] flex-shrink-0">
                            <span
                              className="w-[8px] h-[8px] rounded-full"
                              style={{ backgroundColor: item.dotColor }}
                            />
                          </span>
                        )}
                        <span className="overflow-hidden text-ellipsis whitespace-nowrap flex-1 text-left">
                          {item.label}
                        </span>
                        {item.badge && (
                          <span className="bg-[rgba(28,28,28,0.08)] rounded-full px-[6px] text-[14px] leading-[20px] flex-shrink-0">
                            {item.badge}
                          </span>
                        )}
                      </button>
                    ))}

                    {/* New category button */}
                    {showNewCategory && (
                      <button
                        className={[
                          "h-[32px] pl-[20px] pr-[8px]",
                          "flex items-center",
                          "bg-transparent border-none outline-none cursor-pointer",
                          "text-[14px] leading-[20px] text-[#9DA3AE]",
                          "font-['Helvetica',Arial,sans-serif]",
                          "hover:bg-[rgba(28,28,28,0.06)] rounded-[4px]",
                        ].join(" ")}
                      >
                        {newCategoryLabel}
                      </button>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Panel (bottom) */}
      {panelContent && (
        <div className="border-t-2 border-[rgba(28,28,28,0.08)] px-[12px] pt-[14px] pb-[12px]">
          {panelContent}
        </div>
      )}
    </nav>
  );
}
