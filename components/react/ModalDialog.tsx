import React from "react";

type ModalSize = "xs" | "s" | "m" | "l";

interface ModalDialogProps {
  open?: boolean;
  size?: ModalSize;
  title: string;
  children?: React.ReactNode;
  /** Optional grey area below the main body */
  extraContent?: React.ReactNode;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm?: () => void;
  onClose?: () => void;
}

const sizeMap: Record<ModalSize, string> = {
  xs: "w-[512px]",
  s: "w-[768px]",
  m: "w-[1024px]",
  l: "w-[1280px]",
};

export function ModalDialog({
  open = true,
  size = "xs",
  title,
  children,
  extraContent,
  confirmLabel = "Save",
  cancelLabel = "Cancel",
  onConfirm,
  onClose,
}: ModalDialogProps) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(61,65,83,0.5)] font-['Helvetica',Arial,sans-serif]"
      onClick={(e) => e.target === e.currentTarget && onClose?.()}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className={[
          sizeMap[size],
          "max-h-[90vh] flex flex-col",
          "bg-white rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_2px_6px_2px_rgba(0,0,0,0.15)]",
          "overflow-hidden relative",
        ].join(" ")}
      >
        {/* Close icon — floating top-right */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-[24px] right-[24px] inline-flex items-center justify-center p-[6px] bg-transparent border-none cursor-pointer text-[#595959] hover:bg-[rgba(0,0,0,0.08)] rounded-[4px] outline-none z-10"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M5 5l10 10M15 5l-10 10" />
          </svg>
        </button>

        {/* Single padded container */}
        <div className="p-[24px] flex-1 overflow-y-auto">
          {/* Title */}
          <h2
            id="modal-title"
            className="text-[24px] leading-[32px] font-normal text-[#1C1C1C] m-0 pb-[24px] pr-[32px]"
          >
            {title}
          </h2>

          {/* Body content */}
          {children}

          {/* Footer */}
          <div className="flex justify-end gap-[8px] pt-[24px]">
            <button
              onClick={onClose}
              className="inline-flex items-center justify-center px-[12px] py-[6px] rounded-[4px] text-[14px] leading-[20px] font-normal text-[#1C1C1C] bg-[#EBEBEB] outline-none cursor-pointer border-none"
            >
              {cancelLabel}
            </button>
            <button
              onClick={onConfirm}
              className="inline-flex items-center justify-center px-[12px] py-[6px] rounded-[4px] text-[14px] leading-[20px] font-normal text-white bg-[#4573D2] outline-none cursor-pointer border-none"
            >
              {confirmLabel}
            </button>
          </div>
        </div>

        {/* Extra content area (grey bottom) */}
        {extraContent && (
          <div className="bg-[#F6F6F6] p-[24px] rounded-bl-[4px] rounded-br-[4px]">
            {extraContent}
          </div>
        )}
      </div>
    </div>
  );
}
