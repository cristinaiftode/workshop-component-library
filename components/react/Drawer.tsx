import React from "react";

interface DrawerProps {
  title?: string;
  showHeader?: boolean;
  showFooter?: boolean;
  showCloseButton?: boolean;
  showBackButton?: boolean;
  tabs?: Array<{ id: string; label: string }>;
  activeTab?: string;
  onClose?: () => void;
  onBack?: () => void;
  onTabChange?: (tabId: string) => void;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  actions?: React.ReactNode;
  className?: string;
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 5L15 15M15 5L5 15" stroke="#595959" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ChevronLeftIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 5L7 10L12 15" stroke="#595959" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Drawer({
  title,
  showHeader = true,
  showFooter = false,
  showCloseButton = true,
  showBackButton = false,
  tabs,
  activeTab,
  onClose,
  onBack,
  onTabChange,
  children,
  footer,
  actions,
  className = "",
}: DrawerProps) {
  const containerClasses = [
    "w-[420px] h-full",
    "flex flex-col",
    "bg-white",
    "border-l border-[#DDDDDD]",
    "font-['Helvetica',Arial,sans-serif]",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={containerClasses}>
      {/* Header */}
      {showHeader && (
        <div className="bg-white border-b border-[#DDDDDD]">
          <div className="p-[16px] flex items-center gap-[8px]">
            {/* Back button */}
            {showBackButton && (
              <button
                onClick={onBack}
                className="inline-flex items-center justify-center p-[6px] rounded-[4px] cursor-pointer outline-none bg-transparent hover:bg-[rgba(0,0,0,0.08)]"
                aria-label="Back"
              >
                <span className="w-5 h-5 inline-flex items-center justify-center shrink-0" aria-hidden="true">
                  <ChevronLeftIcon />
                </span>
              </button>
            )}

            {/* Title */}
            {title && (
              <h2 className="flex-1 text-[24px] leading-[32px] font-normal text-[#1C1C1C] font-['Helvetica',Arial,sans-serif] m-0">
                {title}
              </h2>
            )}

            {/* Actions and dividers */}
            {actions && (
              <>
                <div className="w-px h-[20px] bg-[#DDDDDD]" />
                {actions}
              </>
            )}

            {/* Close button */}
            {showCloseButton && (
              <>
                {actions && <div className="w-px h-[20px] bg-[#DDDDDD]" />}
                <button
                  onClick={onClose}
                  className="inline-flex items-center justify-center p-[6px] rounded-[4px] cursor-pointer outline-none bg-transparent hover:bg-[rgba(0,0,0,0.08)]"
                  aria-label="Close"
                >
                  <span className="w-5 h-5 inline-flex items-center justify-center shrink-0" aria-hidden="true">
                    <CloseIcon />
                  </span>
                </button>
              </>
            )}
          </div>

          {/* Tabs */}
          {tabs && tabs.length > 0 && (
            <div className="px-[16px] flex gap-0">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => onTabChange?.(tab.id)}
                    className={[
                      "px-[16px] py-[8px]",
                      "text-[14px] leading-[20px] font-normal",
                      "font-['Helvetica',Arial,sans-serif]",
                      "cursor-pointer outline-none bg-transparent border-0",
                      "border-b-2",
                      isActive
                        ? "border-[#4573D2] text-[#4573D2]"
                        : "border-transparent text-[#595959] hover:text-[#1C1C1C]",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* Body */}
      <div className="flex-1 overflow-y-auto p-[16px]">{children}</div>

      {/* Footer */}
      {showFooter && footer && (
        <div className="bg-white border-t border-[#DDDDDD] p-[16px] flex justify-end gap-[8px]">
          {footer}
        </div>
      )}
    </div>
  );
}
