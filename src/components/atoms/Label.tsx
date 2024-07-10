import colors from "@/styles/colors";
import React from "react";

interface LabelProps {
  htmlFor?: string;
  children: React.ReactNode;
  className?: string;
  color?: string;
}

const Label = ({
  htmlFor,
  children,
  className = "",
  color = colors.darkgray,
}: LabelProps) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`block text-sm font-medium leading-6 ${className}`}
      style={{ color: `${color}` }}
    >
      {children}
    </label>
  );
};

export { Label };
