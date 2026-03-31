import React from "react";

type ListIconColor =
  | "grey"
  | "blue"
  | "green"
  | "yellow"
  | "red"
  | "pink"
  | "purple"
  | "brown"
  | "orange";

interface ListIconProps {
  color?: ListIconColor;
  icon?: React.ReactNode;
  className?: string;
}

const colorMap: Record<ListIconColor, string> = {
  grey: "bg-[rgba(28,28,28,0.08)]",
  blue: "bg-[#DEEBFF]",
  green: "bg-[#CDF0E7]",
  yellow: "bg-[#FFF1C3]",
  red: "bg-[#FFDAD2]",
  pink: "bg-[#FFE3F7]",
  purple: "bg-[#EEE5FF]",
  brown: "bg-[#EEE0DA]",
  orange: "bg-[#FFE3BB]",
};

export function ListIcon({
  color = "grey",
  icon,
  className = "",
}: ListIconProps) {
  return (
    <span
      className={[
        "inline-flex items-center justify-center",
        "w-[40px] h-[40px] shrink-0",
        "rounded-[4px] border border-[rgba(0,0,0,0.08)] overflow-hidden",
        colorMap[color],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {icon || (
        /* Default placeholder icon (book) */
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#1C1C1C"
          strokeWidth="1.5"
        >
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
          <path d="M8 7h6" />
        </svg>
      )}
    </span>
  );
}
