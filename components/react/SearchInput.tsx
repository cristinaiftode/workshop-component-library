import React from "react";

interface SearchInputProps {
  label?: string;
  value?: string;
  placeholder?: string;
  helperText?: string;
  state?: "default" | "highlighted" | "error" | "disabled" | "read-only";
  onChange?: (value: string) => void;
  onSearch?: (value: string) => void;
  className?: string;
}

export function SearchInput({
  label,
  value = "",
  placeholder,
  helperText,
  state = "default",
  onChange,
  onSearch,
  className = "",
}: SearchInputProps) {
  const isDisabled = state === "disabled";
  const isReadOnly = state === "read-only";
  const isError = state === "error";
  const isHighlighted = state === "highlighted";

  const containerClasses = [
    "flex items-stretch h-8 box-border",
    "rounded-[4px] border",
    "bg-white",
    // State border styles
    isError
      ? "border-[#CE3F42] shadow-[0_0_0_1px_#CE3F42]"
      : isHighlighted
        ? "border-[#4573D2] shadow-[0_0_0_1px_#4573D2]"
        : "border-[#DDDDDD] hover:border-[#ACACAC]",
    // Focus-within for when the input is focused
    !isError && !isHighlighted
      ? "focus-within:border-[#4573D2] focus-within:shadow-[0_0_0_1px_#4573D2]"
      : "",
    isReadOnly ? "bg-[#F5F5F5]" : "",
    isDisabled ? "opacity-50 cursor-not-allowed" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const inputClasses = [
    "flex-1 min-w-0 px-[8px] py-[6px]",
    "border-none outline-none bg-transparent",
    "font-['Helvetica',Arial,sans-serif] text-sm leading-5 font-normal text-[#1C1C1C]",
    "placeholder:text-[#ACACAC]",
    isDisabled ? "cursor-not-allowed" : "",
    isReadOnly ? "cursor-default" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch?.(value);
    }
  };

  return (
    <div className={`flex flex-col items-stretch ${className}`}>
      {label && (
        <label
          className={[
            "font-['Helvetica',Arial,sans-serif] text-xs leading-4 text-[#1C1C1C] py-1",
            isDisabled ? "opacity-50 font-normal" : "font-bold",
          ].join(" ")}
        >
          {label}
        </label>
      )}
      <div className={containerClasses}>
        <input
          className={inputClasses}
          type="text"
          value={value}
          placeholder={placeholder}
          disabled={isDisabled}
          readOnly={isReadOnly}
          onChange={(e) => onChange?.(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          type="button"
          className={[
            "flex items-center justify-center w-8 h-8 shrink-0",
            "border-none bg-transparent p-0",
            isDisabled ? "cursor-not-allowed" : "cursor-pointer",
          ].join(" ")}
          disabled={isDisabled}
          onClick={() => onSearch?.(value)}
          aria-label="Search"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="6.5"
              cy="6.5"
              r="4.5"
              stroke="#595959"
              strokeWidth="1.5"
            />
            <line
              x1="10.06"
              y1="10.06"
              x2="14"
              y2="14"
              stroke="#595959"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
      {helperText && (
        <span
          className={[
            "font-['Helvetica',Arial,sans-serif] text-xs leading-4",
            isError ? "text-[#CE3F42]" : "text-[#595959]",
            isDisabled ? "opacity-50" : "",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {helperText}
        </span>
      )}
    </div>
  );
}
