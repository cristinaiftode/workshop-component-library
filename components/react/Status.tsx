import React from "react";

type StatusColor = "green" | "yellow" | "red" | "blue" | "grey";

interface StatusProps {
  color?: StatusColor;
  children: React.ReactNode;
  className?: string;
}

const colorMap: Record<StatusColor, string> = {
  green: "text-[#028465]",
  yellow: "text-[#E89C2E]",
  red: "text-[#CE3F42]",
  blue: "text-[#4573D2]",
  grey: "text-[#ACACAC]",
};

export function Status({
  color = "green",
  children,
  className = "",
}: StatusProps) {
  return (
    <span
      className={[
        "inline-flex items-center justify-center",
        "font-['Helvetica',Arial,sans-serif] text-[14px] leading-[20px] font-bold whitespace-nowrap",
        colorMap[color],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </span>
  );
}
