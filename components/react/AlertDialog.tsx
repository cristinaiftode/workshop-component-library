import React, { useState } from "react";

type AlertVariant = "error" | "warning" | "info" | "confirmation" | "destructive";

interface AlertDialogProps {
  open?: boolean;
  variant?: AlertVariant;
  title: string;
  description: string;
  /** Optional content slot between description and footer */
  content?: React.ReactNode;
  confirmLabel?: string;
  cancelLabel?: string;
  /** For destructive variant: prompt text shown above the safety input */
  safetyText?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
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

/* Default button labels per variant */
function defaultConfirmLabel(variant: AlertVariant): string {
  if (variant === "error") return "OK";
  if (variant === "destructive") return "Delete";
  return "Continue";
}

export function AlertDialog({
  open = true,
  variant = "confirmation",
  title,
  description,
  content,
  confirmLabel,
  cancelLabel = "Cancel",
  safetyText,
  onConfirm,
  onCancel,
}: AlertDialogProps) {
  const [typedText, setTypedText] = useState("");

  if (!open) return null;

  const badge = badgeConfig[variant]; // undefined for confirmation & destructive
  const isDestructive = variant === "destructive";
  const isError = variant === "error";
  const hasSafetyStep = isDestructive && safetyText;
  const canConfirm = hasSafetyStep ? typedText === safetyText : true;
  const resolvedConfirmLabel = confirmLabel ?? defaultConfirmLabel(variant);

  /* Confirm button colour: destructive = red, error = grey (default), others = blue (primary) */
  const confirmBtnClass = isDestructive
    ? "bg-[#CE3F42] text-white"
    : isError
      ? "bg-[#EBEBEB] text-[#1C1C1C]"
      : "bg-[#4573D2] text-white";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(61,65,83,0.5)] font-['Helvetica',Arial,sans-serif]"
      onClick={(e) => e.target === e.currentTarget && onCancel?.()}
    >
      <div
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="alert-title"
        aria-describedby="alert-desc"
        className="w-[512px] bg-white rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_2px_6px_0px_rgba(0,0,0,0.15)] p-[24px]"
      >
        {/* Title row — badge inline with title when present */}
        <div className={badge ? "flex items-center gap-[8px]" : undefined}>
          {badge && (
            <span
              className={[
                "inline-flex items-center justify-center w-[20px] h-[20px] rounded-full shrink-0",
                badge.bg,
              ].join(" ")}
            >
              {badge.icon}
            </span>
          )}
          <h2
            id="alert-title"
            className="text-[24px] leading-[32px] font-normal text-[#1C1C1C] m-0"
          >
            {title}
          </h2>
        </div>

        {/* Description */}
        <p
          id="alert-desc"
          className="text-[14px] leading-[20px] text-[#1C1C1C] mt-[8px] mb-0"
        >
          {description}
        </p>

        {/* Optional content slot */}
        {content && <div className="mt-[16px]">{content}</div>}

        {/* Safety step for destructive */}
        {hasSafetyStep && (
          <div className="mt-[16px]">
            <p className="text-[14px] leading-[20px] text-[#1C1C1C] mb-[8px]">
              To confirm, please enter the name of the category:
            </p>
            <input
              type="text"
              value={typedText}
              onChange={(e) => setTypedText(e.target.value)}
              className="w-full h-[32px] px-[8px] py-[6px] text-[14px] leading-[20px] bg-white border border-[#DDD] rounded-[4px] outline-none placeholder:text-[#9DA3AE]"
              placeholder={safetyText}
            />
          </div>
        )}

        {/* Footer buttons */}
        <div className="flex justify-end gap-[8px] pt-[16px]">
          {/* Error variant only has a single OK button */}
          {isError ? (
            <button
              onClick={onConfirm}
              className="inline-flex items-center justify-center px-[12px] py-[6px] rounded-[4px] text-[14px] leading-[20px] font-normal text-[#1C1C1C] bg-[#EBEBEB] outline-none cursor-pointer border-none"
            >
              {resolvedConfirmLabel}
            </button>
          ) : (
            <>
              <button
                onClick={onCancel}
                className="inline-flex items-center justify-center px-[12px] py-[6px] rounded-[4px] text-[14px] leading-[20px] font-normal text-[#1C1C1C] bg-[#EBEBEB] outline-none cursor-pointer border-none"
              >
                {cancelLabel}
              </button>
              <button
                onClick={() => canConfirm && onConfirm?.()}
                disabled={!canConfirm}
                className={[
                  "inline-flex items-center justify-center px-[12px] py-[6px] rounded-[4px] text-[14px] leading-[20px] font-normal outline-none border-none",
                  confirmBtnClass,
                  !canConfirm ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
                ].join(" ")}
              >
                {resolvedConfirmLabel}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
