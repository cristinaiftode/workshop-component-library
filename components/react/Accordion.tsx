import React, { useState } from "react";

interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  /** Allow multiple items open at once */
  multiple?: boolean;
  defaultOpen?: string[];
  className?: string;
}

export function Accordion({
  items,
  multiple = false,
  defaultOpen = [],
  className = "",
}: AccordionProps) {
  const [openIds, setOpenIds] = useState<string[]>(defaultOpen);

  const toggle = (id: string) => {
    setOpenIds((prev) => {
      if (prev.includes(id)) {
        return prev.filter((x) => x !== id);
      }
      return multiple ? [...prev, id] : [id];
    });
  };

  return (
    <div
      className={[
        "font-['Helvetica',Arial,sans-serif]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);

        return (
          <div key={item.id} className="border-b border-[#EBEBEB]">
            <button
              aria-expanded={isOpen}
              onClick={() => toggle(item.id)}
              className={[
                "w-full flex items-center justify-between",
                "p-[8px] py-[12px]",
                "text-left text-[20px] leading-[28px] font-bold text-[#1C1C1C]",
                "bg-transparent border-none outline-none cursor-pointer",
                "focus-visible:border-2 focus-visible:border-[#2B57B4] focus-visible:rounded-[4px]",
              ].join(" ")}
            >
              <span>{item.title}</span>
              {/* Chevron */}
              <svg
                className={[
                  "w-[24px] h-[24px] text-[#1C1C1C] shrink-0 transition-transform duration-200",
                  isOpen ? "rotate-180" : "",
                ].join(" ")}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M7.5 10l4.5 4 4.5-4" />
              </svg>
            </button>

            {isOpen && (
              <div className="px-[8px] pb-[16px]">
                <div className="text-[14px] leading-[20px] text-[#595959]">
                  {item.content}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
