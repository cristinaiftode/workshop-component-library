import React from "react";

type ButtonAppearance = "default" | "primary" | "ghost" | "discrete" | "danger" | "transparent";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  appearance?: ButtonAppearance;
  fluid?: boolean;
  href?: string;
  target?: "_self" | "_blank" | "_parent" | "_top";
  tooltip?: string | React.ReactElement;
  children: React.ReactNode;
}

const appearanceStyles: Record<ButtonAppearance, { base: string; hover: string }> = {
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
    base: "bg-transparent text-[#4573D2]",
    hover: "hover:text-[#2B57B4]",
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

export function Button({
  appearance = "default",
  fluid = false,
  disabled = false,
  href,
  target,
  children,
  className = "",
  ...rest
}: ButtonProps) {
  const styles = appearanceStyles[appearance];

  const classes = [
    "inline-flex items-center justify-center gap-1",
    "px-3 py-1.5",
    "rounded-[4px]",
    "font-['Helvetica',Arial,sans-serif] text-sm leading-5 font-normal antialiased",
    "whitespace-nowrap outline-none relative",
    "overflow-clip cursor-pointer",
    styles.base,
    !disabled ? styles.hover : "",
    disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : "",
    fluid ? "w-full" : "",
    "focus-visible:after:absolute focus-visible:after:inset-[-1px] focus-visible:after:border-2 focus-visible:after:border-[#4573D2] focus-visible:after:rounded-[5px] focus-visible:after:pointer-events-none",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <a href={href} target={target} className={classes} aria-disabled={disabled || undefined}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} disabled={disabled} {...rest}>
      {children}
    </button>
  );
}
