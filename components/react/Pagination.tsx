import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
  className?: string;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  className = "",
}: PaginationProps) {
  const getPageNumbers = (): (number | "...")[] => {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const pages: (number | "...")[] = [1];

    if (currentPage > 3) pages.push("...");

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    for (let i = start; i <= end; i++) pages.push(i);

    if (currentPage < totalPages - 2) pages.push("...");

    pages.push(totalPages);
    return pages;
  };

  const buttonBase = [
    "inline-flex items-center justify-center",
    "min-w-[32px] h-8 px-2",
    "rounded-[4px]",
    "font-['Helvetica',Arial,sans-serif] text-sm leading-5",
    "outline-none cursor-pointer",
    "focus-visible:ring-2 focus-visible:ring-[#4573D2]",
  ].join(" ");

  return (
    <nav
      aria-label="Pagination"
      className={[
        "inline-flex items-center gap-1",
        "font-['Helvetica',Arial,sans-serif]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {/* Previous */}
      <button
        disabled={currentPage <= 1}
        onClick={() => onPageChange?.(currentPage - 1)}
        className={[
          buttonBase,
          "text-[#1C1C1C]",
          currentPage <= 1
            ? "opacity-50 cursor-not-allowed pointer-events-none"
            : "hover:bg-[#EBEBEB]",
        ].join(" ")}
        aria-label="Previous page"
      >
        &#8249;
      </button>

      {/* Page numbers */}
      {getPageNumbers().map((page, i) =>
        page === "..." ? (
          <span key={`ellipsis-${i}`} className="min-w-[32px] h-8 inline-flex items-center justify-center text-sm text-[#595959]">
            ...
          </span>
        ) : (
          <button
            key={page}
            onClick={() => onPageChange?.(page)}
            className={[
              buttonBase,
              page === currentPage
                ? "bg-[#4573D2] text-white font-bold"
                : "text-[#1C1C1C] hover:bg-[#EBEBEB]",
            ].join(" ")}
            aria-current={page === currentPage ? "page" : undefined}
          >
            {page}
          </button>
        )
      )}

      {/* Next */}
      <button
        disabled={currentPage >= totalPages}
        onClick={() => onPageChange?.(currentPage + 1)}
        className={[
          buttonBase,
          "text-[#1C1C1C]",
          currentPage >= totalPages
            ? "opacity-50 cursor-not-allowed pointer-events-none"
            : "hover:bg-[#EBEBEB]",
        ].join(" ")}
        aria-label="Next page"
      >
        &#8250;
      </button>
    </nav>
  );
}
