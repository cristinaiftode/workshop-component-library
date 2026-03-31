import React from "react";

type IconButtonAppearance = "default" | "primary" | "ghost" | "discrete" | "danger" | "transparent";

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: string;
  appearance?: IconButtonAppearance;
  rounded?: boolean;
  tooltip?: string | React.ReactElement;
  "aria-label": string;
}

const appearanceStyles: Record<IconButtonAppearance, { base: string; hover: string }> = {
  default: {
    base: "bg-[#EBEBEB] text-[#1C1C1C]",
    hover: "hover:bg-[#DDDDDD]",
  },
  primary: {
    base: "bg-[#4573D2] text-white",
    hover: "hover:bg-[#2B57B4]",
  },
  ghost: {
    base: "bg-white text-[#4573D2] border border-[#4573D2]",
    hover: "hover:bg-[#DEEBFF] hover:border-[#2B57B4] hover:text-[#2B57B4]",
  },
  discrete: {
    base: "bg-transparent text-[#1C1C1C]",
    hover: "hover:bg-[rgba(0,0,0,0.08)]",
  },
  danger: {
    base: "bg-[#CE3F42] text-white",
    hover: "hover:bg-[#950027]",
  },
  transparent: {
    base: "bg-transparent text-[#1C1C1C]",
    hover: "hover:bg-[#EBEBEB]",
  },
};

export function IconButton({
  icon,
  appearance = "default",
  rounded = false,
  disabled = false,
  tooltip,
  className = "",
  ...rest
}: IconButtonProps) {
  const styles = appearanceStyles[appearance];

  const classes = [
    "inline-flex items-center justify-center",
    "p-[6px]",
    rounded ? "rounded-full" : "rounded-[4px]",
    "outline-none relative",
    "overflow-clip cursor-pointer",
    styles.base,
    !disabled ? styles.hover : "",
    disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : "",
    rounded
      ? "focus-visible:after:absolute focus-visible:after:inset-[-1px] focus-visible:after:border-2 focus-visible:after:border-[#4573D2] focus-visible:after:rounded-full focus-visible:after:pointer-events-none"
      : "focus-visible:after:absolute focus-visible:after:inset-[-1px] focus-visible:after:border-2 focus-visible:after:border-[#4573D2] focus-visible:after:rounded-[5px] focus-visible:after:pointer-events-none",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={classes} disabled={disabled} title={typeof tooltip === "string" ? tooltip : undefined} {...rest}>
      <span className="w-5 h-5 inline-flex items-center justify-center shrink-0" aria-hidden="true">
        {icon}
      </span>
    </button>
  );
}
