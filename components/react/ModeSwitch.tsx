import React from "react";

interface ModeSwitchProps {
  checked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  labelOff?: string;
  labelOn?: string;
  className?: string;
}

export function ModeSwitch({
  checked = false,
  disabled = false,
  onChange,
  labelOff,
  labelOn,
  className = "",
}: ModeSwitchProps) {
  return (
    <div
      className={[
        "inline-flex items-center gap-2",
        "font-['Helvetica',Arial,sans-serif] text-sm leading-5 text-[#1C1C1C]",
        disabled ? "opacity-50" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {labelOff && (
        <span className={!checked ? "font-bold" : "text-[#595959]"}>{labelOff}</span>
      )}
      <button
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => !disabled && onChange?.(!checked)}
        className={[
          "relative inline-flex items-center",
          "w-9 h-5 rounded-full",
          "transition-colors duration-200",
          "outline-none",
          checked ? "bg-[#4573D2]" : "bg-[#ACACAC]",
          disabled ? "cursor-not-allowed" : "cursor-pointer",
          "focus-visible:ring-2 focus-visible:ring-[#4573D2] focus-visible:ring-offset-1",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <span
          className={[
            "absolute w-3.5 h-3.5 rounded-full bg-white",
            "transition-transform duration-200",
            checked ? "translate-x-[18px]" : "translate-x-[3px]",
          ].join(" ")}
        />
      </button>
      {labelOn && (
        <span className={checked ? "font-bold" : "text-[#595959]"}>{labelOn}</span>
      )}
    </div>
  );
}
