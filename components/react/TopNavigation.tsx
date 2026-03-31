import React from "react";

interface PrimaryItem {
  id: string;
  label: string;
  active?: boolean;
  hasSubmenu?: boolean;
}

interface SecondaryItem {
  id: string;
  icon: string;
  label: string;
  color?: string;
}

interface TopNavigationProps {
  logoText?: string;
  primaryItems?: PrimaryItem[];
  secondaryItems?: SecondaryItem[];
  companyName?: string;
  agreementNumber?: string;
  agreementAdmin?: boolean;
  avatarUrl?: string;
  onPrimaryClick?: (id: string) => void;
  onSecondaryClick?: (id: string) => void;
  onAgreementClick?: () => void;
  className?: string;
}

const ChevronDown: React.FC<{ size?: number }> = ({ size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 6L8 10L12 6"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const iconMap: Record<string, React.ReactNode> = {
  search: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="10.5" cy="10.5" r="6" stroke="white" strokeWidth="1.5" />
      <path d="M15 15L20 20" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  inbox: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 14L4 18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V14"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path d="M4 14H8L9.5 16.5H14.5L16 14H20" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 14L6 6H18L20 14" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  bell: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 4C8.68629 4 6 6.68629 6 10V14L4 17H20L18 14V10C18 6.68629 15.3137 4 12 4Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M10 17V18C10 19.1046 10.8954 20 12 20C13.1046 20 14 19.1046 14 18V17" stroke="white" strokeWidth="1.5" />
    </svg>
  ),
  chat: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M5 5H19C19.5523 5 20 5.44772 20 6V16C20 16.5523 19.5523 17 19 17H8L4 20V6C4 5.44772 4.44772 5 5 5Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  ),
  settings: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="1.5" />
      <path
        d="M12 2L13.5 5L17 4L16 7.5L20 8L18 10.5L21 12L18 13.5L20 16L16 16.5L17 20L13.5 19L12 22L10.5 19L7 20L8 16.5L4 16L6 13.5L3 12L6 10.5L4 8L8 7.5L7 4L10.5 5L12 2Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  ),
  market: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M6 7L8 4H16L18 7V8C18 9.10457 17.1046 10 16 10C14.8954 10 14 9.10457 14 8C14 9.10457 13.1046 10 12 10C10.8954 10 10 9.10457 10 8C10 9.10457 9.10457 10 8 10C6.89543 10 6 9.10457 6 8V7Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M6 10V20H18V10" stroke="white" strokeWidth="1.5" />
      <path d="M10 20V15H14V20" stroke="white" strokeWidth="1.5" />
    </svg>
  ),
  "e-copedia": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 4H8C10.2091 4 12 5.79086 12 8V20C12 18.3431 10.6569 17 9 17H4V4Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M20 4H16C13.7909 4 12 5.79086 12 8V20C12 18.3431 13.3431 17 15 17H20V4Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

const PersonIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="7" r="3" stroke="white" strokeWidth="1.5" />
    <path
      d="M4 17C4 14.2386 6.23858 12 9 12H11C13.7614 12 16 14.2386 16 17"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const TopNavigation: React.FC<TopNavigationProps> = ({
  logoText = "e",
  primaryItems = [],
  secondaryItems = [],
  companyName = "",
  agreementNumber = "",
  agreementAdmin = false,
  avatarUrl,
  onPrimaryClick,
  onSecondaryClick,
  onAgreementClick,
  className = "",
}) => {
  return (
    <nav
      className={`bg-[#29283E] h-[64px] w-full flex flex-row items-center justify-between font-['Helvetica',Arial,sans-serif] ${className}`}
    >
      {/* Primary menu (left side) */}
      <div className="flex items-center pl-[28px] gap-[8px]">
        {/* Logo */}
        <div className="flex items-center justify-center rounded-[4px] px-[8px] h-[36px] bg-[#4573D2] text-white text-[18px] font-bold select-none">
          {logoText}
        </div>

        {/* Primary menu items */}
        <div className="flex items-center gap-[4px]">
          {primaryItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onPrimaryClick?.(item.id)}
              className={`flex items-center gap-[4px] px-[12px] py-[8px] rounded-[4px] text-white text-[14px] leading-[20px] transition-colors cursor-pointer ${
                item.active
                  ? "bg-[rgba(255,255,255,0.08)]"
                  : "hover:bg-[rgba(255,255,255,0.08)]"
              }`}
            >
              <span>{item.label}</span>
              {item.hasSubmenu && <ChevronDown size={14} />}
            </button>
          ))}
        </div>
      </div>

      {/* Secondary menu (right side) */}
      <div className="flex items-center gap-[16px] pr-[16px]">
        {/* Icon buttons */}
        <div className="flex items-center gap-[8px]">
          {secondaryItems.map((item) => {
            const hasColor = !!item.color;
            return (
              <button
                key={item.id}
                onClick={() => onSecondaryClick?.(item.id)}
                title={item.label}
                className={`flex items-center justify-center p-[6px] rounded-[32px] transition-colors cursor-pointer ${
                  hasColor
                    ? ""
                    : "hover:bg-[rgba(255,255,255,0.08)]"
                }`}
                style={hasColor ? { backgroundColor: item.color } : undefined}
              >
                <span className="w-[24px] h-[24px] flex items-center justify-center">
                  {iconMap[item.icon] || (
                    <span className="text-white text-[12px]">{item.icon}</span>
                  )}
                </span>
              </button>
            );
          })}
        </div>

        {/* Divider */}
        <div className="w-px h-[36px] bg-[rgba(255,255,255,0.3)]" />

        {/* Current Agreement */}
        <button
          onClick={onAgreementClick}
          className="flex items-center gap-[8px] px-[8px] py-[4px] rounded-[4px] hover:bg-[rgba(255,255,255,0.1)] transition-colors cursor-pointer"
        >
          {/* Avatar */}
          {avatarUrl ? (
            <img
              src={avatarUrl}
              alt="Avatar"
              className="w-[36px] h-[36px] rounded-full object-cover"
            />
          ) : (
            <div className="bg-[#585C74] rounded-full w-[36px] h-[36px] flex items-center justify-center">
              <PersonIcon />
            </div>
          )}

          {/* Company info */}
          <div className="flex flex-col items-start">
            <span className="text-white text-[14px] leading-[20px] whitespace-nowrap">
              {companyName}
            </span>
            <div className="flex items-center gap-[4px]">
              <span className="text-white text-[12px] leading-[16px] opacity-80">
                {agreementNumber}
              </span>
              {agreementAdmin && (
                <span className="bg-[#4573D2] rounded-[10px] px-[4px] text-white text-[12px] font-bold leading-[16px]">
                  Admin
                </span>
              )}
            </div>
          </div>

          {/* Chevron */}
          <ChevronDown />
        </button>
      </div>
    </nav>
  );
};

export default TopNavigation;
