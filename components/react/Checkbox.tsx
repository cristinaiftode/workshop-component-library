import React, { useRef, useEffect } from "react";

interface CheckboxProps {
  checked?: boolean;
  indeterminate?: boolean;
  label?: string;
  disabled?: boolean;
  error?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
}

export function Checkbox({
  checked = false,
  indeterminate = false,
  label,
  disabled = false,
  error = false,
  onChange,
  className = "",
}: CheckboxProps) {
  const handleClick = () => {
    if (!disabled && onChange) {
      onChange(!checked);
    }
  };

  const isActive = checked || indeterminate;

  const boxClasses = [
    "w-5 h-5 rounded-[4px] flex-shrink-0",
    "flex items-center justify-center",
    "transition-colors duration-150",
    "outline-none",
    isActive
      ? "bg-[#4573D2]"
      : error
        ? "bg-white border border-[#CE3F42]"
        : "bg-white border border-[#595959]",
    !disabled && !isActive && !error && "hover:border-[#404040]",
    !disabled && isActive && "hover:bg-[#3A63B8]",
    "focus-visible:outline-2 focus-visible:outline-[#4573D2] focus-visible:outline-offset-1",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <label
      className={[
        "inline-flex items-start gap-[8px] py-[6px]",
        "font-['Helvetica',Arial,sans-serif] text-sm leading-5 text-[#1C1C1C]",
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <button
        role="checkbox"
        aria-checked={indeterminate ? "mixed" : checked}
        disabled={disabled}
        onClick={handleClick}
        className={boxClasses}
      >
        {checked && !indeterminate && (
          <svg
            width="12"
            height="10"
            viewBox="0 0 12 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 5L4.5 8.5L11 1.5"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
        {indeterminate && (
          <svg
            width="10"
            height="2"
            viewBox="0 0 10 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1H9"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        )}
      </button>
      {label && <span>{label}</span>}
    </label>
  );
}
