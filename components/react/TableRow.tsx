import React from "react";

interface TableRowProps {
  cells: React.ReactNode[];
  selected?: boolean;
  /** Show a checkbox for row selection */
  selectable?: boolean;
  /** Render as a header row */
  header?: boolean;
  /** Expandable row with detail content */
  expandable?: boolean;
  expanded?: boolean;
  expandContent?: React.ReactNode;
  onClick?: () => void;
  onSelect?: (selected: boolean) => void;
  onToggleExpand?: () => void;
  className?: string;
}

export function TableRow({
  cells,
  selected = false,
  selectable = false,
  header = false,
  expandable = false,
  expanded = false,
  expandContent,
  onClick,
  onSelect,
  onToggleExpand,
  className = "",
}: TableRowProps) {
  if (header) {
    return (
      <tr
        className={[
          "font-['Helvetica',Arial,sans-serif] text-xs leading-4 font-bold text-[#595959]",
          "border-b-2 border-[#DDDDDD]",
          "bg-white",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {selectable && (
          <th className="px-3 py-2 w-[40px]">
            <input
              type="checkbox"
              className="w-[16px] h-[16px] accent-[#4573D2] cursor-pointer"
            />
          </th>
        )}
        {expandable && <th className="px-3 py-2 w-[40px]" />}
        {cells.map((cell, i) => (
          <th key={i} className="px-3 py-2 text-left">
            {cell}
          </th>
        ))}
      </tr>
    );
  }

  return (
    <>
      <tr
        onClick={onClick}
        className={[
          "font-['Helvetica',Arial,sans-serif] text-sm leading-5 text-[#1C1C1C]",
          "border-b border-[#EBEBEB]",
          selected ? "bg-[#DEEBFF]" : "bg-white",
          onClick || expandable ? "cursor-pointer" : "",
          !selected && (onClick || expandable) ? "hover:bg-[#F5F5F5]" : "",
          selected && (onClick || expandable) ? "hover:bg-[#DEEBFF]" : "",
          "outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#4573D2]",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        tabIndex={onClick || expandable ? 0 : undefined}
      >
        {selectable && (
          <td className="px-3 py-2 w-[40px]">
            <input
              type="checkbox"
              checked={selected}
              onChange={(e) => {
                e.stopPropagation();
                onSelect?.(!selected);
              }}
              className="w-[16px] h-[16px] accent-[#4573D2] cursor-pointer"
            />
          </td>
        )}
        {expandable && (
          <td className="px-3 py-2 w-[40px]">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleExpand?.();
              }}
              className="inline-flex items-center justify-center w-[24px] h-[24px] bg-transparent border-none cursor-pointer text-[#595959] outline-none rounded-[4px] hover:bg-[rgba(0,0,0,0.08)]"
              aria-expanded={expanded}
            >
              <svg
                className={[
                  "w-[16px] h-[16px] transition-transform duration-200",
                  expanded ? "rotate-180" : "",
                ].join(" ")}
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M4.5 6.5l3.5 3 3.5-3" />
              </svg>
            </button>
          </td>
        )}
        {cells.map((cell, i) => (
          <td key={i} className="px-3 py-2">
            {cell}
          </td>
        ))}
      </tr>
      {expandable && expanded && expandContent && (
        <tr className="bg-[#F5F5F5] border-b border-[#EBEBEB]">
          <td
            colSpan={cells.length + (selectable ? 1 : 0) + 1}
            className="px-3 py-3 text-sm leading-5 text-[#595959]"
          >
            {expandContent}
          </td>
        </tr>
      )}
    </>
  );
}
