import React from "react";

interface FormProps {
  children: React.ReactNode;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  className?: string;
}

export function Form({ children, onSubmit, className = "" }: FormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit?.(e);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={[
        "flex flex-col gap-4",
        "font-['Helvetica',Arial,sans-serif]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </form>
  );
}
