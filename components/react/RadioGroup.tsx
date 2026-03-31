import React from "react";

interface RadioOption {
  value: string;
  label: string;
}

interface RadioGroupProps {
  name: string;
  options: RadioOption[];
  value?: string;
  disabled?: boolean;
  orientation?: "vertical" | "horizontal";
  onChange?: (value: string) => void;
  className?: string;
}

export function RadioGroup({
  name,
  options,
  value,
  disabled = false,
  orientation = "vertical",
  onChange,
  className = "",
}: RadioGroupProps) {
  return (
    <div
      role="radiogroup"
      className={[
        "flex",
        orientation === "vertical" ? "flex-col" : "flex-row gap-[16px]",
        "font-['Helvetica',Arial,sans-serif]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {options.map((option) => {
        const isChecked = value === option.value;

        return (
          <label
            key={option.value}
            className={[
              "inline-flex items-start gap-[8px] py-[6px]",
              "text-[14px] leading-[20px] text-[#1C1C1C]",
              disabled
                ? "opacity-50 cursor-not-allowed"
                : "cursor-pointer group",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {/* Hidden native radio for accessibility */}
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={isChecked}
              disabled={disabled}
              onChange={() => onChange?.(option.value)}
              className="sr-only peer"
            />

            {/* Custom radio circle wrapper — centers 16px circle within 20px line height */}
            <span className="flex items-center justify-center py-[2px]">
              <span
                className={[
                  "block w-[16px] h-[16px] rounded-[8px] box-border shrink-0",
                  isChecked
                    ? "bg-white border-[4px] border-[#4573D2]"
                    : "bg-white border-[2px] border-[#ACACAC]",
                  !disabled && !isChecked
                    ? "group-hover:border-[#808080]"
                    : "",
                  !disabled && isChecked
                    ? "group-hover:border-[#3560B5]"
                    : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              />
            </span>

            <span>{option.label}</span>
          </label>
        );
      })}
    </div>
  );
}
