import React from "react";

interface CardListProps {
  /** "separated" = gap between items, "grouped" = joined with shared borders */
  variant?: "separated" | "grouped";
  children: React.ReactNode;
  className?: string;
}

export function CardList({
  variant = "separated",
  children,
  className = "",
}: CardListProps) {
  if (variant === "grouped") {
    return (
      <div
        className={[
          "font-['Helvetica',Arial,sans-serif]",
          "flex flex-col",
          /* Children overlap borders; first/last get rounded corners via CSS */
          "[&>*]:rounded-none [&>*]:border-b-0 [&>*:last-child]:border-b",
          "[&>*:first-child]:rounded-t-[8px] [&>*:last-child]:rounded-b-[8px]",
          "[&>*+*]:-mt-px",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      className={[
        "font-['Helvetica',Arial,sans-serif]",
        "flex flex-col gap-[8px]",
        "[&>*]:rounded-[10px]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}
