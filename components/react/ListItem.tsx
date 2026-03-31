import React from "react";

interface ListItemProps {
  children: React.ReactNode;
  selected?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

export function ListItem({
  children,
  selected = false,
  disabled = false,
  onClick,
  className = "",
}: ListItemProps) {
  return (
    <li
      role={onClick ? "button" : undefined}
      tabIndex={onClick && !disabled ? 0 : undefined}
      onClick={!disabled ? onClick : undefined}
      onKeyDown={
        onClick && !disabled
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onClick();
              }
            }
          : undefined
      }
      className={[
        "px-3 py-2",
        "font-['Helvetica',Arial,sans-serif] text-sm leading-5 text-[#1C1C1C]",
        "border-b border-[#EBEBEB] last:border-b-0",
        selected ? "bg-[#DEEBFF]" : "bg-white",
        onClick && !disabled ? "cursor-pointer hover:bg-[#F5F5F5]" : "",
        selected && onClick && !disabled ? "hover:bg-[#DEEBFF]" : "",
        disabled ? "opacity-50 cursor-not-allowed" : "",
        "outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#4573D2]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </li>
  );
}
