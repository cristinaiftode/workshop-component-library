import React, { useState, useRef, useEffect } from "react";

interface ComboboxOption {
  value: string;
  label: string;
}

interface ComboboxProps {
  label?: string;
  options: ComboboxOption[];
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  highlighted?: boolean;
  readOnly?: boolean;
  modalButton?: boolean;
  helperText?: string;
  onChange?: (value: string) => void;
  className?: string;
}

function ListSearchIcon({ disabled }: { disabled?: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={disabled ? "opacity-50" : ""}
    >
      {/* Lines */}
      <line x1="1" y1="3" x2="9" y2="3" stroke="#1C1C1C" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="1" y1="7" x2="7" y2="7" stroke="#1C1C1C" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="1" y1="11" x2="5" y2="11" stroke="#1C1C1C" strokeWidth="1.5" strokeLinecap="round" />
      {/* Magnifying glass */}
      <circle cx="10.5" cy="10.5" r="3" stroke="#1C1C1C" strokeWidth="1.5" />
      <line x1="12.5" y1="13" x2="14.5" y2="15" stroke="#1C1C1C" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function Combobox({
  label,
  options,
  value,
  placeholder,
  disabled = false,
  error = false,
  highlighted = false,
  readOnly = false,
  modalButton = true,
  helperText,
  onChange,
  className = "",
}: ComboboxProps) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [activeIndex, setActiveIndex] = useState(-1);
  const ref = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const selectedOption = options.find((o) => o.value === value);
  const filtered = options.filter((o) =>
    o.label.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setActiveIndex(-1);
  }, [search]);

  const containerBorderClasses = error
    ? "border-[#CE3F42] shadow-[0_0_0_1px_#CE3F42]"
    : highlighted
      ? "border-[#4573D2] shadow-[0_0_0_1px_#4573D2]"
      : "border-[#DDDDDD]";

  const containerHoverClasses =
    !error && !highlighted && !disabled && !readOnly
      ? "hover:border-[#ACACAC]"
      : "";

  const containerFocusClasses = error
    ? "focus-within:border-[#CE3F42] focus-within:shadow-[0_0_0_1px_#CE3F42]"
    : "focus-within:border-[#4573D2] focus-within:shadow-[0_0_0_1px_#4573D2]";

  const containerClasses = [
    "flex h-[32px] border rounded-[4px] overflow-hidden box-border",
    containerBorderClasses,
    containerHoverClasses,
    !disabled ? containerFocusClasses : "",
    readOnly ? "bg-[#F5F5F5]" : "bg-white",
    disabled ? "opacity-50 cursor-not-allowed" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const inputClasses = [
    "flex-1 min-w-0 px-[8px] py-[6px] border-none outline-none",
    "font-['Helvetica',Arial,sans-serif] text-[14px] leading-[20px] font-normal text-[#1C1C1C]",
    "placeholder:text-[#ACACAC]",
    readOnly ? "bg-[#F5F5F5] cursor-default" : "bg-transparent",
    disabled ? "cursor-not-allowed" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!open) {
      if (e.key === "ArrowDown" || e.key === "Enter") {
        setOpen(true);
        setSearch("");
        e.preventDefault();
      }
      return;
    }
    if (e.key === "ArrowDown") {
      setActiveIndex((prev) => Math.min(prev + 1, filtered.length - 1));
      e.preventDefault();
    } else if (e.key === "ArrowUp") {
      setActiveIndex((prev) => Math.max(prev - 1, 0));
      e.preventDefault();
    } else if (e.key === "Enter" && activeIndex >= 0) {
      onChange?.(filtered[activeIndex].value);
      setOpen(false);
      setSearch("");
      e.preventDefault();
    } else if (e.key === "Escape") {
      setOpen(false);
      setSearch("");
    }
  };

  const handleButtonClick = () => {
    if (disabled || readOnly) return;
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
      setSearch("");
      inputRef.current?.focus();
    }
  };

  return (
    <div ref={ref} className={`flex flex-col items-stretch relative ${className}`}>
      {label && (
        <label
          className={[
            "font-['Helvetica',Arial,sans-serif] text-xs leading-4 text-[#1C1C1C] py-1",
            disabled ? "opacity-50 font-normal" : "font-bold",
          ].join(" ")}
        >
          {label}
        </label>
      )}

      <div className={containerClasses}>
        <input
          ref={inputRef}
          className={inputClasses}
          type="text"
          value={open ? search : selectedOption?.label ?? ""}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly}
          onFocus={() => {
            if (!readOnly && !disabled) {
              setOpen(true);
              setSearch("");
            }
          }}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyDown}
          role="combobox"
          aria-expanded={open}
          aria-autocomplete="list"
          aria-activedescendant={
            activeIndex >= 0 ? `combobox-option-${activeIndex}` : undefined
          }
        />

        {modalButton && (
          <button
            type="button"
            className={[
              "flex items-center justify-center w-[32px] h-full shrink-0",
              "bg-[#EBEBEB] border-l border-l-[#DDDDDD]",
              disabled || readOnly
                ? "cursor-not-allowed"
                : "cursor-pointer hover:bg-[#E0E0E0] active:bg-[#D6D6D6]",
            ].join(" ")}
            onClick={handleButtonClick}
            disabled={disabled}
            tabIndex={-1}
            aria-label="Toggle list"
          >
            <ListSearchIcon disabled={disabled || readOnly} />
          </button>
        )}
      </div>

      {open && !disabled && !readOnly && (
        <ul
          role="listbox"
          className={[
            "absolute top-full left-0 right-0 z-50 mt-0.5",
            "bg-white rounded-[4px]",
            "p-[4px]",
            "max-h-48 overflow-y-auto",
            "shadow-[0px_1px_2px_rgba(0,0,0,0.3),0px_2px_6px_rgba(0,0,0,0.15)]",
          ].join(" ")}
        >
          {filtered.length === 0 ? (
            <li className="px-[8px] py-[6px] text-[14px] leading-[20px] text-[#ACACAC] font-['Helvetica',Arial,sans-serif]">
              No results
            </li>
          ) : (
            <li className="flex flex-col gap-[2px]" role="presentation">
              {filtered.map((option, index) => (
                <div
                  key={option.value}
                  id={`combobox-option-${index}`}
                  role="option"
                  aria-selected={option.value === value}
                  className={[
                    "px-[8px] py-[6px] cursor-pointer rounded-[4px]",
                    "font-['Helvetica',Arial,sans-serif] text-[14px] leading-[20px] text-[#1C1C1C]",
                    index === activeIndex
                      ? "bg-[rgba(0,99,255,0.1)]"
                      : "hover:bg-[rgba(0,99,255,0.1)]",
                    option.value === value ? "font-bold" : "font-normal",
                  ].join(" ")}
                  onMouseDown={() => {
                    onChange?.(option.value);
                    setOpen(false);
                    setSearch("");
                  }}
                  onMouseEnter={() => setActiveIndex(index)}
                >
                  {option.label}
                </div>
              ))}
            </li>
          )}
        </ul>
      )}

      {helperText && (
        <span
          className={[
            "font-['Helvetica',Arial,sans-serif] text-xs leading-4",
            error ? "text-[#CE3F42]" : "text-[#595959]",
            disabled ? "opacity-50" : "",
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
