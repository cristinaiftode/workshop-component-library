import React, { useState } from "react";

interface Agreement {
  id: string;
  companyName: string;
  agreementNumber: string;
  isAdmin?: boolean;
  avatarUrl?: string;
}

interface AgreementGroup {
  agreements: Agreement[];
}

interface AgreementSelectorProps {
  groups?: AgreementGroup[];
  searchPlaceholder?: string;
  addLabel?: string;
  logoutLabel?: string;
  onSearch?: (query: string) => void;
  onSelect?: (agreementId: string) => void;
  onAdd?: () => void;
  onLogout?: () => void;
  className?: string;
}

function PersonIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <circle cx="10" cy="7" r="3.5" stroke="#9EA2B8" strokeWidth="1.5" />
      <path
        d="M3.5 17.5C3.5 14.5 6 12 10 12C14 12 16.5 14.5 16.5 17.5"
        stroke="#9EA2B8"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <circle cx="11" cy="11" r="6" stroke="#DDDDDD" strokeWidth="1.5" />
      <path
        d="M15.5 15.5L20 20"
        stroke="#DDDDDD"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function AgreementSelector({
  groups = [],
  searchPlaceholder = "Søg efter aftale",
  addLabel = "Tilføj aftale",
  logoutLabel = "Log af",
  onSearch,
  onSelect,
  onAdd,
  onLogout,
  className = "",
}: AgreementSelectorProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredSearch, setHoveredSearch] = useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    onSearch?.(value);
  };

  return (
    <div
      className={[
        "w-[256px] bg-[#29283E] flex flex-col",
        "font-['Helvetica',Arial,sans-serif]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {/* Search bar */}
      <div className="p-[8px] pb-[4px]">
        <div
          className={[
            "flex items-center w-[240px] rounded-[4px] px-[8px] py-[4px]",
            hoveredSearch
              ? "bg-[rgba(255,255,255,0.24)]"
              : "bg-[rgba(255,255,255,0.16)]",
          ].join(" ")}
          onMouseEnter={() => setHoveredSearch(true)}
          onMouseLeave={() => setHoveredSearch(false)}
        >
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder={searchPlaceholder}
            className={[
              "flex-1 bg-transparent border-none outline-none",
              "text-[14px] leading-[20px] text-white",
              "placeholder:text-[#DDDDDD]",
              "font-['Helvetica',Arial,sans-serif]",
            ].join(" ")}
          />
          <span className="flex items-center justify-center w-[24px] h-[24px] shrink-0">
            <SearchIcon />
          </span>
        </div>
      </div>

      {/* Agreements area – scrollable */}
      <div className="flex-1 overflow-y-auto px-[8px] py-[4px] flex flex-col gap-[4px]">
        {groups.map((group, groupIndex) => (
          <div key={groupIndex} className="flex flex-col gap-px">
            {group.agreements.map((agreement, itemIndex) => {
              const isFirst = itemIndex === 0;
              const isLast = itemIndex === group.agreements.length - 1;
              const isSingle = group.agreements.length === 1;

              const roundedClasses = isSingle
                ? "rounded-[4px]"
                : isFirst
                  ? "rounded-t-[4px] rounded-b-none"
                  : isLast
                    ? "rounded-b-[4px] rounded-t-none"
                    : "rounded-none";

              return (
                <button
                  key={agreement.id}
                  type="button"
                  onClick={() => onSelect?.(agreement.id)}
                  className={[
                    "flex items-center w-[240px] p-[8px] gap-[8px]",
                    "bg-[rgba(255,255,255,0.08)] hover:bg-[rgba(255,255,255,0.16)]",
                    roundedClasses,
                    "cursor-pointer border-none outline-none text-left",
                    "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#4573D2]",
                  ].join(" ")}
                >
                  {/* Avatar */}
                  {agreement.avatarUrl ? (
                    <img
                      src={agreement.avatarUrl}
                      alt=""
                      className="w-[36px] h-[36px] rounded-full shrink-0 object-cover"
                    />
                  ) : (
                    <div className="w-[36px] h-[36px] rounded-full shrink-0 bg-[#585C74] flex items-center justify-center">
                      <PersonIcon />
                    </div>
                  )}

                  {/* Text content */}
                  <div className="flex flex-col flex-1 min-w-0">
                    <div className="flex items-center gap-[4px]">
                      <span className="text-white text-[14px] leading-[20px] overflow-hidden text-ellipsis whitespace-nowrap">
                        {agreement.companyName}
                      </span>
                      {agreement.isAdmin && (
                        <span className="bg-[#4573D2] rounded-[10px] px-[4px] text-white text-[12px] leading-[16px] font-bold whitespace-nowrap shrink-0">
                          Admin
                        </span>
                      )}
                    </div>
                    <span className="text-white text-[12px] leading-[16px] overflow-hidden text-ellipsis whitespace-nowrap">
                      {agreement.agreementNumber}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        ))}
      </div>

      {/* Action buttons – fixed at bottom */}
      <div className="px-[8px] pb-[8px] pt-[4px] flex flex-col">
        <button
          type="button"
          onClick={onAdd}
          className={[
            "w-full bg-[rgba(255,255,255,0.08)] hover:bg-[rgba(255,255,255,0.16)]",
            "rounded-[4px] px-[8px] py-[6px]",
            "text-white text-[14px] leading-[20px] text-center",
            "font-['Helvetica',Arial,sans-serif]",
            "cursor-pointer border-none outline-none",
            "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#4573D2]",
          ].join(" ")}
        >
          {addLabel}
        </button>

        <div className="bg-[#4B4F64] h-px w-full my-[4px]" />

        <button
          type="button"
          onClick={onLogout}
          className={[
            "w-full bg-[rgba(255,255,255,0.08)] hover:bg-[rgba(255,255,255,0.16)]",
            "rounded-[4px] px-[8px] py-[6px]",
            "text-white text-[14px] leading-[20px] text-center",
            "font-['Helvetica',Arial,sans-serif]",
            "cursor-pointer border-none outline-none",
            "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#4573D2]",
          ].join(" ")}
        >
          {logoutLabel}
        </button>
      </div>
    </div>
  );
}
