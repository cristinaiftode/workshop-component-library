import React from "react";

type TagColor = "blue" | "green" | "yellow" | "red" | "purple" | "pink" | "brown" | "orange" | "grey";

interface TagProps {
  children: React.ReactNode;
  color?: TagColor;
  icon?: React.ReactNode;
  onClose?: () => void;
  className?: string;
}

const colorStyles: Record<TagColor, { bg: string; text: string }> = {
  blue:   { bg: "bg-[#DEEBFF]", text: "text-[#29283E]" },
  green:  { bg: "bg-[#CDF0E7]", text: "text-[#14493A]" },
  yellow: { bg: "bg-[#FFF1C3]", text: "text-[#733700]" },
  red:    { bg: "bg-[#FFDAD2]", text: "text-[#64001B]" },
  purple: { bg: "bg-[#EEE5FF]", text: "text-[#412970]" },
  pink:   { bg: "bg-[#FFE3F7]", text: "text-[#870062]" },
  brown:  { bg: "bg-[#EEE0DA]", text: "text-[#45291F]" },
  orange: { bg: "bg-[#FFE3BB]", text: "text-[#4A2811]" },
  grey:   { bg: "bg-[#EBEBEB]", text: "text-[#1C1C1C]" },
};

export function Tag({
  children,
  color = "blue",
  icon,
  onClose,
  className = "",
}: TagProps) {
  const styles = colorStyles[color];

  return (
    <span
      className={[
        "inline-flex items-center",
        "py-[2px]",
        icon ? "pl-[4px]" : "pl-[8px]",
        onClose ? "" : "pr-[8px]",
        icon || onClose ? "gap-1" : "",
        "rounded-[4px]",
        "font-['Helvetica',Arial,sans-serif] text-sm leading-5 font-normal antialiased",
        "whitespace-nowrap",
        styles.bg,
        styles.text,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {icon && (
        <span className="w-5 h-5 inline-flex items-center justify-center shrink-0">
          {icon}
        </span>
      )}
      <span>{children}</span>
      {onClose && (
        <button
          onClick={onClose}
          className={[
            "inline-flex items-center justify-center",
            "h-5 p-[2px]",
            "rounded-r-[4px]",
            "cursor-pointer outline-none",
            "hover:opacity-70",
            styles.text,
          ].join(" ")}
          aria-label="Remove"
        >
          <svg
            className="w-4 h-4 shrink-0"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M4.5 4.5l7 7M11.5 4.5l-7 7" />
          </svg>
        </button>
      )}
    </span>
  );
}
