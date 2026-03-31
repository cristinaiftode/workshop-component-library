import React from "react";

interface TabItem {
  id: string;
  label: string;
  disabled?: boolean;
}

interface TabsProps {
  tabs: TabItem[];
  activeTab?: string;
  orientation?: "horizontal" | "vertical";
  divider?: boolean;
  onChange?: (tabId: string) => void;
  className?: string;
}

export function Tabs({
  tabs,
  activeTab,
  orientation = "horizontal",
  divider = false,
  onChange,
  className = "",
}: TabsProps) {
  const isVertical = orientation === "vertical";

  return (
    <div
      role="tablist"
      aria-orientation={orientation}
      className={[
        "bg-white flex items-start",
        isVertical ? "flex-col" : "flex-row",
        divider && !isVertical ? "shadow-[0px_1px_0px_0px_#ddd]" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {tabs.map((tab) => {
        const isActive = tab.id === activeTab;

        return (
          <button
            key={tab.id}
            role="tab"
            aria-selected={isActive}
            aria-disabled={tab.disabled || undefined}
            disabled={tab.disabled}
            onClick={() => !tab.disabled && onChange?.(tab.id)}
            className={[
              "relative",
              "px-[16px] py-[8px]",
              "font-['Helvetica',Arial,sans-serif] text-[14px] leading-[20px] text-[#1C1C1C]",
              "bg-transparent border-none outline-none",
              "cursor-pointer whitespace-nowrap",
              "rounded-[4px]",
              isVertical ? "h-[32px] flex items-center" : "px-[14px] py-[6px]",
              tab.disabled
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-[rgba(0,0,0,0.08)]",
              "focus-visible:shadow-[0px_0px_0px_2px_rgba(0,99,255,0.25)]",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {tab.label}
            <span
              className={[
                "absolute",
                isVertical
                  ? "left-0 top-0 bottom-0 w-[2px] rounded-tr-[2px] rounded-br-[2px]"
                  : "bottom-0 left-0 right-0 h-[2px] rounded-tl-[2px] rounded-tr-[2px]",
                "bg-[#4573D2]",
                isActive ? "opacity-100" : "opacity-0",
              ].join(" ")}
            />
          </button>
        );
      })}
    </div>
  );
}
