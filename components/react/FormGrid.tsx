import React from "react";

interface FormGridProps {
  columns?: number;
  children: React.ReactNode;
  className?: string;
}

/**
 * FormGrid from Figma node 518:44640
 *
 * A multi-column form layout that arranges column groups separated by
 * vertical dividers. Each column group stretches equally (flex-1).
 *
 * Anatomy:
 *   1. Column groups — flex-1, contain stacked FormRows
 *   2. Divider — 1px vertical line (#DDD) with 16px padding on each side
 *
 * Children should be React nodes representing each column group.
 * The component inserts vertical dividers between them automatically.
 *
 * Usage:
 *   <FormGrid columns={2}>
 *     <div>  // column group 1
 *       <FormRow><Field /><Field /></FormRow>
 *       <FormRow><Field /><Field /></FormRow>
 *     </div>
 *     <div>  // column group 2
 *       <FormRow><Field /><Field /></FormRow>
 *     </div>
 *   </FormGrid>
 */
export function FormGrid({ columns = 2, children, className = "" }: FormGridProps) {
  const childArray = React.Children.toArray(children);

  return (
    <div
      className={[
        "flex items-start",
        "font-['Helvetica',Arial,sans-serif] antialiased",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {childArray.map((child, i) => (
        <React.Fragment key={i}>
          {/* Column group */}
          <div className="flex-1 flex flex-col items-start min-w-0">
            {child}
          </div>
          {/* Divider between column groups */}
          {i < childArray.length - 1 && (
            <div className="flex items-start self-stretch px-[16px] shrink-0">
              <div className="w-px h-full bg-[#DDDDDD]" />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

/**
 * FormRow — a row within a column group containing fields side-by-side.
 *
 * From Figma: flex, gap 16px, fields are flex-1.
 * Default width in Figma is 336px (2 × 160px fields + 16px gap),
 * but stretches to fill column group.
 */
interface FormRowProps {
  children: React.ReactNode;
  className?: string;
}

export function FormRow({ children, className = "" }: FormRowProps) {
  return (
    <div
      className={[
        "flex gap-[16px] items-start w-full",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}
