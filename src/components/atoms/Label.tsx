import React from "react";

interface LabelProps {
  htmlFor: string;
  children: React.ReactNode;
  className?: string;
}

const Label = ({ htmlFor, children, className = "" }: LabelProps) => {
  return (
    <label htmlFor={htmlFor} className={`block text-sm font-medium leading-6 text-gray-900 ${className}`}>
      {children}
    </label>
  );
};

export default Label;
