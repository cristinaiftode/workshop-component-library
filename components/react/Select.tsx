import React, { useState, useRef, useEffect } from "react";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  label?: string;
  options: SelectOption[];
  value?: string;
  placeholder?: string;
  helperText?: string;
  state?: "default" | "highlighted" | "error" | "disabled" | "read-only";
  onChange?: (value: string) => void;
  className?: string;
}

export function Select({
  label,
  options,
  value,
  placeholder = "Select…",
  helperText,
  state = "default",
  onChange,
  className = "",
}: SelectProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const disabled = state === "disabled";
  const readOnly = state === "read-only";
  const error = state === "error";
  const highlighted = state === "highlighted";

  const selectedOption = options.find((o) => o.value === value);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleToggle = () => {
    if (disabled || readOnly) return;
    setOpen((prev) => !prev);
  };

  const borderClasses = (() => {
    if (error)
      return "border-[#CE3F42] shadow-[0_0_0_1px_#CE3F42]";
    if (highlighted)
      return "border-[#4573D2] shadow-[0_0_0_1px_#4573D2]";
    if (open)
      return "border-[#4573D2] shadow-[0_0_0_1px_#4573D2]";
    return "border-[#DDDDDD] hover:border-[#ACACAC]";
  })();

  const fieldClasses = [
    "flex items-center h-[32px] w-full box-border",
    "rounded-[4px] border outline-none cursor-pointer",
    borderClasses,
    readOnly ? "bg-[#F5F5F5]" : "bg-white",
    disabled ? "opacity-50 cursor-not-allowed" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div ref={ref} className={`flex flex-col items-stretch relative ${className}`}>
      {label && (
        <label
          className={[
            "font-['Helvetica',Arial,sans-serif] text-[12px] leading-[16px] text-[#1C1C1C] py-[4px]",
            disabled ? "opacity-50 font-normal" : "font-bold",
          ].join(" ")}
        >
          {label}
        </label>
      )}

      <div className={fieldClasses} onClick={handleToggle}>
        <span
          className={[
            "flex-1 px-[8px] py-[6px] truncate",
            "font-['Helvetica',Arial,sans-serif] text-[14px] leading-[20px] font-normal",
            selectedOption ? "text-[#1C1C1C]" : "text-[#ACACAC]",
          ].join(" ")}
        >
          {selectedOption?.label ?? placeholder}
        </span>

        <span className="flex items-center justify-center w-[32px] h-[32px] shrink-0">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className={[
              "transition-transform",
              open ? "rotate-180" : "",
            ].join(" ")}
          >
            <path
              d="M4 6L8 10L12 6"
              stroke="#1C1C1C"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>

      {open && !disabled && !readOnly && (
        <ul
          className={[
            "absolute top-full left-0 right-0 z-50 mt-0.5",
            "bg-white rounded-[4px] px-[4px] py-[4px]",
            "max-h-48 overflow-y-auto",
            "shadow-[0px_1px_2px_rgba(0,0,0,0.3),0px_2px_6px_rgba(0,0,0,0.15)]",
          ].join(" ")}
        >
          {options.map((option, index) => (
            <li
              key={option.value}
              className={[
                "px-[8px] py-[6px] cursor-pointer rounded-[4px]",
                "font-['Helvetica',Arial,sans-serif] text-[14px] leading-[20px] font-normal text-[#1C1C1C]",
                "hover:bg-[rgba(0,99,255,0.1)]",
                option.value === value ? "bg-[rgba(0,99,255,0.1)]" : "",
                index > 0 ? "mt-[2px]" : "",
              ].join(" ")}
              onMouseDown={() => {
                onChange?.(option.value);
                setOpen(false);
              }}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}

      {helperText && (
        <span
          className={[
            "font-['Helvetica',Arial,sans-serif] text-[12px] leading-[16px]",
            error ? "text-[#CE3F42]" : "text-[#595959]",
          ].join(" ")}
        >
          {helperText}
        </span>
      )}
    </div>
  );
}
