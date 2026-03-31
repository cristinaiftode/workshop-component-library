import React from "react";

interface FieldProps {
  label?: string;
  helperText?: string;
  error?: boolean;
  highlighted?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  type?: string;
}

export function Field({
  label,
  helperText,
  error = false,
  highlighted = false,
  disabled = false,
  readOnly = false,
  value,
  defaultValue,
  placeholder,
  onChange,
  className = "",
  type = "text",
}: FieldProps) {
  const inputClasses = [
    "h-8 w-full px-2 py-1.5 box-border",
    "rounded-[4px] border outline-none",
    "font-['Helvetica',Arial,sans-serif] text-sm leading-5 font-normal text-[#1C1C1C]",
    "placeholder:text-[#ACACAC]",
    // State styles
    error
      ? "border-[#CE3F42] focus:border-[#CE3F42] focus:shadow-[0_0_0_1px_#CE3F42]"
      : "border-[#DDDDDD] hover:border-[#ACACAC] focus:border-[#4573D2] focus:shadow-[0_0_0_1px_#4573D2]",
    highlighted ? "bg-[#FFF1C3]" : "bg-white",
    readOnly ? "bg-[#F5F5F5] cursor-default" : "",
    disabled ? "opacity-50 cursor-not-allowed" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={`flex flex-col items-stretch ${className}`}>
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
      <input
        className={inputClasses}
        type={type}
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
        onChange={onChange}
      />
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
