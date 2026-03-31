import React, { useState, useRef, useEffect } from "react";
import { Calendar } from "./Calendar";

type DatePickerState = "default" | "highlighted" | "error" | "disabled" | "read-only";

interface DatePickerProps {
  label?: string;
  value?: string;
  placeholder?: string;
  helperText?: string;
  state?: DatePickerState;
  onChange?: (date: string) => void;
  className?: string;
}

/**
 * DatePicker from Figma node 463:16608
 *
 * Anatomy:
 *   1. Field container — 32px tall, border #DDD, rounded-[4px]
 *   2. Value — text input, Helvetica Regular 14px/20px, px-[8px] py-[6px]
 *   3. Field button — 32×32px calendar icon, bg #EBEBEB, 1px left divider
 *
 * States: Normal, Highlighted (blue border), Error (red border), Disabled (50% opacity), ReadOnly
 * Opens Calendar component as dropdown on field button click.
 */

const stateStyles: Record<DatePickerState, { container: string; input: string; button: string }> = {
  default: {
    container: "border-[#DDDDDD] hover:border-[#ACACAC]",
    input: "text-[#1C1C1C] cursor-text",
    button: "cursor-pointer hover:bg-[#DDDDDD]",
  },
  highlighted: {
    container: "border-[#4573D2] shadow-[0_0_0_1px_#4573D2]",
    input: "text-[#1C1C1C] cursor-text",
    button: "cursor-pointer hover:bg-[#DDDDDD]",
  },
  error: {
    container: "border-[#CE3F42] shadow-[0_0_0_1px_#CE3F42]",
    input: "text-[#1C1C1C] cursor-text",
    button: "cursor-pointer hover:bg-[#DDDDDD]",
  },
  disabled: {
    container: "border-[#DDDDDD] opacity-50",
    input: "text-[#1C1C1C] cursor-not-allowed",
    button: "cursor-not-allowed",
  },
  "read-only": {
    container: "border-[#DDDDDD] bg-[#F5F5F5]",
    input: "text-[#1C1C1C] cursor-default bg-[#F5F5F5]",
    button: "cursor-not-allowed opacity-50",
  },
};

export function DatePicker({
  label,
  value = "",
  placeholder = "",
  helperText,
  state = "default",
  onChange,
  className = "",
}: DatePickerProps) {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState(value);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const isDisabled = state === "disabled";
  const isReadOnly = state === "read-only";
  const styles = stateStyles[state];

  // Close calendar on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Sync external value
  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleCalendarSelect = (date: string) => {
    setInputValue(date);
    onChange?.(date);
    setOpen(false);
  };

  const toggleCalendar = () => {
    if (!isDisabled && !isReadOnly) {
      setOpen(!open);
    }
  };

  return (
    <div
      ref={wrapperRef}
      className={[
        "inline-flex flex-col items-start relative",
        "font-['Helvetica',Arial,sans-serif] antialiased",
        className,
      ].filter(Boolean).join(" ")}
    >
      {/* Label */}
      {label && (
        <div className="flex items-start overflow-clip py-[4px] w-full">
          <label className={[
            "text-[12px] leading-[16px] font-bold",
            isDisabled ? "text-[#1C1C1C] opacity-50" : "text-[#1C1C1C]",
          ].join(" ")}>
            {label}
          </label>
        </div>
      )}

      {/* Field container */}
      <div className="relative w-[160px]">
        <div
          className={[
            "flex items-center h-[32px] w-full",
            "bg-white border rounded-[4px] overflow-clip",
            styles.container,
          ].join(" ")}
        >
          {/* Input */}
          <input
            type="text"
            value={inputValue}
            placeholder={placeholder}
            disabled={isDisabled}
            readOnly={isReadOnly}
            onChange={(e) => {
              setInputValue(e.target.value);
              onChange?.(e.target.value);
            }}
            className={[
              "flex-1 min-w-0 h-full px-[8px] py-[6px]",
              "text-[14px] leading-[20px] font-normal",
              "border-none outline-none bg-transparent",
              "placeholder:text-[#ACACAC]",
              styles.input,
            ].join(" ")}
          />

          {/* Calendar button */}
          <button
            type="button"
            onClick={toggleCalendar}
            disabled={isDisabled}
            aria-label="Open calendar"
            className={[
              "relative flex items-center justify-center shrink-0",
              "w-[32px] h-[30px]",
              "bg-[#EBEBEB] rounded-br-[3px] rounded-tr-[3px]",
              "outline-none border-none",
              styles.button,
            ].join(" ")}
          >
            {/* Left divider */}
            <span className="absolute left-0 top-0 bottom-0 w-px bg-[#DDDDDD]" />
            {/* Calendar icon */}
            <svg className="w-5 h-5 shrink-0 text-[#1C1C1C]" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="4" width="14" height="13" rx="1.5" />
              <path d="M3 8h14" />
              <path d="M7 2.5v3M13 2.5v3" />
            </svg>
          </button>
        </div>

        {/* Calendar dropdown */}
        {open && (
          <div className="absolute left-0 top-[36px] z-50">
            <Calendar
              selectedDate={inputValue}
              onChange={handleCalendarSelect}
            />
          </div>
        )}
      </div>

      {/* Helper text */}
      {helperText && (
        <div className="flex items-start overflow-clip w-full">
          <span className={[
            "text-[12px] leading-[16px] font-normal",
            state === "error" ? "text-[#CE3F42]" : "text-[#595959]",
          ].join(" ")}>
            {helperText}
          </span>
        </div>
      )}
    </div>
  );
}
