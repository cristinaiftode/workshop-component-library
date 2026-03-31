import React, { useState } from "react";

type CardListItemType =
  | "link-internal"
  | "link-external"
  | "button"
  | "switch"
  | "checkbox"
  | "collapsible";

interface CardListItemProps {
  type?: CardListItemType;
  title: string;
  description?: string;
  /** Status text shown after the title in color */
  status?: React.ReactNode;
  /** Left icon element — use <ListIcon> component */
  icon?: React.ReactNode;
  /** Whether checkbox or switch is checked */
  checked?: boolean;
  /** Whether collapsible content is expanded */
  expanded?: boolean;
  /** Content shown when type=collapsible and expanded */
  expandContent?: React.ReactNode;
  onClick?: () => void;
  onCheckedChange?: (checked: boolean) => void;
  onExpandedChange?: (expanded: boolean) => void;
  className?: string;
}

export function CardListItem({
  type = "link-internal",
  title,
  description,
  status,
  icon,
  checked = false,
  expanded = false,
  expandContent,
  onClick,
  onCheckedChange,
  onExpandedChange,
  className = "",
}: CardListItemProps) {
  const isCollapsible = type === "collapsible";

  const handleClick = () => {
    if (type === "checkbox") {
      onCheckedChange?.(!checked);
    } else if (type === "switch") {
      onCheckedChange?.(!checked);
    } else if (isCollapsible) {
      onExpandedChange?.(!expanded);
    } else {
      onClick?.();
    }
  };

  const baseClasses = [
    "font-['Helvetica',Arial,sans-serif]",
    "bg-white border border-[#DDDDDD] overflow-hidden",
    "min-h-[64px]",
    "cursor-pointer",
    "hover:bg-[rgba(0,0,0,0.08)]",
    "outline-none focus-visible:ring-2 focus-visible:ring-[#4573D2]",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  /* ── Collapsible has a two-row layout ── */
  if (isCollapsible) {
    return (
      <div
        className={[
          "font-['Helvetica',Arial,sans-serif]",
          "bg-white border border-[#DDDDDD] overflow-hidden",
          "min-h-[64px]",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {/* Header row */}
        <button
          onClick={handleClick}
          className="w-full flex items-center gap-[12px] p-[12px] bg-transparent border-none cursor-pointer hover:bg-[rgba(0,0,0,0.08)] outline-none text-left"
        >
          {icon && <span className="shrink-0">{icon}</span>}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-[4px]">
              <span className="text-[14px] leading-[20px] font-bold text-[#1C1C1C] whitespace-nowrap">
                {title}
              </span>
              {status}
            </div>
            {description && (
              <p className="text-[14px] leading-[20px] text-[#595959] m-0">
                {description}
              </p>
            )}
          </div>
          {/* Chevron up/down */}
          <svg
            className={[
              "w-[24px] h-[24px] text-[#1C1C1C] shrink-0 transition-transform duration-200",
              expanded ? "" : "rotate-180",
            ].join(" ")}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M7.5 14l4.5-4 4.5 4" />
          </svg>
        </button>

        {/* Expanded content */}
        {expanded && expandContent && (
          <div className="px-[12px] pb-[12px]">{expandContent}</div>
        )}
      </div>
    );
  }

  /* ── All other types: single-row ── */
  return (
    <div onClick={handleClick} className={baseClasses} role="button" tabIndex={0}>
      <div className="flex items-center gap-[12px] p-[12px]">
        {icon && <span className="shrink-0">{icon}</span>}

        {/* Text */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-[4px]">
            <span className="text-[14px] leading-[20px] font-bold text-[#1C1C1C] whitespace-nowrap">
              {title}
            </span>
            {status}
          </div>
          {description && (
            <p className="text-[14px] leading-[20px] text-[#595959] m-0">
              {description}
            </p>
          )}
        </div>

        {/* Trailing element */}
        {type === "link-internal" && (
          <svg
            className="w-[24px] h-[24px] text-[#1C1C1C] shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M9 6l6 6-6 6" />
          </svg>
        )}

        {type === "link-external" && (
          <svg
            className="w-[24px] h-[24px] text-[#1C1C1C] shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        )}

        {type === "switch" && (
          <span
            className={[
              "relative inline-flex items-center w-[36px] h-[20px] rounded-full shrink-0 transition-colors duration-200",
              checked ? "bg-[#4573D2]" : "bg-[#ACACAC]",
            ].join(" ")}
            role="switch"
            aria-checked={checked}
          >
            <span
              className={[
                "absolute w-[16px] h-[16px] bg-white rounded-full shadow-sm transition-transform duration-200",
                checked ? "translate-x-[18px]" : "translate-x-[2px]",
              ].join(" ")}
            />
          </span>
        )}

        {type === "checkbox" && (
          <span
            className={[
              "inline-flex items-center justify-center w-[20px] h-[20px] rounded-[4px] shrink-0 border",
              checked
                ? "bg-[#4573D2] border-[#4573D2]"
                : "bg-white border-[#595959]",
            ].join(" ")}
            role="checkbox"
            aria-checked={checked}
          >
            {checked && (
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2 6l3 3 5-5" />
              </svg>
            )}
          </span>
        )}

        {/* Button type has no trailing element */}
      </div>
    </div>
  );
}
