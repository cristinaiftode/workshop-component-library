import React, { useState } from "react";

type AlertVariant = "error" | "warning" | "info" | "confirmation" | "destructive";

interface AlertDialogProps {
  open?: boolean;
  variant?: AlertVariant;
  title: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  /** For destructive variant: require user to type this text to confirm */
  safetyText?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  className?: string;
}

const badgeConfig: Record<string, { bg: string; icon: React.ReactNode }> = {
  error: {
    bg: "bg-[#CE3F42]",
    icon: (
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path d="M4 4l4 4M8 4l-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  warning: {
    bg: "bg-[#FFBD3B]",
    icon: (
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path d="M6 3.5v3" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="6" cy="8.5" r="0.75" fill="white" />
      </svg>
    ),
  },
  info: {
    bg: "bg-[#4573D2]",
    icon: (
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <circle cx="6" cy="3.5" r="0.75" fill="white" />
        <path d="M6 5.5v3" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
};

export function AlertDialog({
  open = true,
  variant = "confirmation",
  title,
  message,
  confirmLabel = "OK",
  cancelLabel = "Cancel",
  safetyText,
  onConfirm,
  onCancel,
  className = "",
}: AlertDialogProps) {
  const [typedText, setTypedText] = useState("");

  if (!open) return null;

  const badge = badgeConfig[variant];
  const isDestructive = variant === "destructive";
  const hasSafetyStep = isDestructive && safetyText;
  const canConfirm = hasSafetyStep ? typedText === safetyText : true;

  return (
    <div
      className={[
        "fixed inset-0 z-50 flex items-center justify-center",
        "bg-[rgba(61,65,83,0.5)]",
        "font-['Helvetica',Arial,sans-serif]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      onClick={(e) => e.target === e.currentTarget && onCancel?.()}
    >
      <div
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="alert-title"
        aria-describedby="alert-message"
        className="w-[512px] bg-white rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_2px_6px_0px_rgba(0,0,0,0.15)] p-[24px]"
      >
        {/* Badge */}
        {badge && (
          <div className="mb-[16px]">
            <span
              className={[
                "inline-flex items-center justify-center w-[20px] h-[20px] rounded-full",
                badge.bg,
              ].join(" ")}
            >
              {badge.icon}
            </span>
          </div>
        )}

        {/* Title */}
        <h2
          id="alert-title"
          className="text-[16px] leading-[24px] font-bold text-[#1C1C1C] mb-[8px]"
        >
          {title}
        </h2>

        {/* Message */}
        <p
          id="alert-message"
          className="text-[14px] leading-[20px] text-[#595959] mb-[24px]"
        >
          {message}
        </p>

        {/* Safety step for destructive */}
        {hasSafetyStep && (
          <div className="mb-[24px]">
            <p className="text-[14px] leading-[20px] text-[#1C1C1C] mb-[8px]">
              Type <span className="font-bold">{safetyText}</span> to confirm:
            </p>
            <input
              type="text"
              value={typedText}
              onChange={(e) => setTypedText(e.target.value)}
              className="w-full h-[36px] px-[12px] text-[14px] leading-[20px] bg-white border border-[#ACACAC] rounded-[4px] outline-none focus:border-[#4573D2] focus:shadow-[0_0_0_1px_#4573D2]"
              placeholder={safetyText}
            />
          </div>
        )}

        {/* Footer buttons */}
        <div className="flex justify-end gap-[8px]">
          <button
            onClick={onCancel}
            className="inline-flex items-center justify-center px-[12px] py-[6px] rounded-[4px] text-[14px] leading-[20px] font-normal text-[#1C1C1C] bg-[#EBEBEB] hover:bg-[#DDDDDD] outline-none cursor-pointer border-none"
          >
            {cancelLabel}
          </button>
          <button
            onClick={() => canConfirm && onConfirm?.()}
            disabled={!canConfirm}
            className={[
              "inline-flex items-center justify-center px-[12px] py-[6px] rounded-[4px] text-[14px] leading-[20px] font-normal text-white outline-none border-none",
              isDestructive
                ? "bg-[#CE3F42] hover:bg-[#B5292C]"
                : "bg-[#4573D2] hover:bg-[#3560B5]",
              !canConfirm ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
            ].join(" ")}
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
