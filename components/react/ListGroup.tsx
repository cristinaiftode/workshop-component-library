import React from "react";

interface ListGroupProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function ListGroup({ title, children, className = "" }: ListGroupProps) {
  return (
    <div
      className={[
        "border border-[#DDDDDD] rounded-[4px] overflow-hidden",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {title && (
        <div className="px-3 py-2 bg-[#F5F5F5] border-b border-[#DDDDDD] font-['Helvetica',Arial,sans-serif] text-xs leading-4 font-bold text-[#1C1C1C]">
          {title}
        </div>
      )}
      <ul className="list-none m-0 p-0">{children}</ul>
    </div>
  );
}
