import React from "react";

interface SwitchProps {
  checked?: boolean;
  label?: string;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
}

export function Switch({
  checked = false,
  label,
  disabled = false,
  onChange,
  className = "",
}: SwitchProps) {
  const handleClick = () => {
    if (!disabled && onChange) {
      onChange(!checked);
    }
  };

  const trackClasses = [
    "relative inline-flex items-center",
    "w-9 h-5 rounded-full",
    "transition-colors duration-200",
    checked ? "bg-[#4573D2]" : "bg-[#ACACAC]",
    disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
  ]
    .filter(Boolean)
    .join(" ");

  const thumbClasses = [
    "absolute w-3.5 h-3.5 rounded-full bg-white",
    "transition-transform duration-200",
    checked ? "translate-x-[18px]" : "translate-x-[3px]",
  ].join(" ");

  return (
    <label
      className={[
        "inline-flex items-center gap-2",
        "font-['Helvetica',Arial,sans-serif] text-sm leading-5 text-[#1C1C1C]",
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <button
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={handleClick}
        className={[
          trackClasses,
          "outline-none",
          "focus-visible:ring-2 focus-visible:ring-[#4573D2] focus-visible:ring-offset-1",
        ].join(" ")}
      >
        <span className={thumbClasses} />
      </button>
      {label && <span>{label}</span>}
    </label>
  );
}
