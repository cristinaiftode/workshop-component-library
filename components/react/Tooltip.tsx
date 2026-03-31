import React, { useState } from "react";

type TooltipPlacement = "top" | "bottom" | "left" | "right";

interface TooltipProps {
  content: string;
  placement?: TooltipPlacement;
  wide?: boolean;
  children: React.ReactElement;
}

/**
 * Tooltip from Figma node 112:2358
 *
 * Two width modes:
 *   - default (wide=false): auto-width, text does not wrap (whitespace-nowrap)
 *   - wide (wide=true): fixed 224px width, text wraps, left-aligned
 *
 * Styling from Figma:
 *   - bg: #29283E (Blue-900)
 *   - text: white, Helvetica Regular, 12px/16px
 *   - padding: 4px 8px
 *   - border-radius: 4px
 *   - arrow: 16px wide × 6px tall, same bg color
 *   - gap between arrow tip and trigger: 8px
 */

const arrowStyles: Record<TooltipPlacement, string> = {
  top: "left-1/2 -translate-x-1/2 top-full border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[6px] border-t-[#29283E]",
  bottom: "left-1/2 -translate-x-1/2 bottom-full border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[6px] border-b-[#29283E]",
  left: "top-1/2 -translate-y-1/2 left-full border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[6px] border-l-[#29283E]",
  right: "top-1/2 -translate-y-1/2 right-full border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-r-[6px] border-r-[#29283E]",
};

const placementStyles: Record<TooltipPlacement, string> = {
  top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
  bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
  left: "right-full top-1/2 -translate-y-1/2 mr-2",
  right: "left-full top-1/2 -translate-y-1/2 ml-2",
};

export function Tooltip({ content, placement = "top", wide = false, children }: TooltipProps) {
  const [visible, setVisible] = useState(false);

  return (
    <span
      className="relative inline-flex"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
    >
      {children}
      {visible && (
        <span
          role="tooltip"
          className={[
            "absolute z-50 pointer-events-none",
            "px-[8px] py-[4px]",
            "rounded-[4px]",
            "bg-[#29283E] text-white",
            "font-['Helvetica',Arial,sans-serif] text-[12px] leading-[16px] font-normal antialiased",
            wide ? "w-[224px] text-left" : "whitespace-nowrap",
            placementStyles[placement],
          ].join(" ")}
        >
          {content}
          {/* Arrow */}
          <span
            className={[
              "absolute w-0 h-0",
              arrowStyles[placement],
            ].join(" ")}
          />
        </span>
      )}
    </span>
  );
}
