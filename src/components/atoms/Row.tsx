import React from "react";

interface RowProps {
  children: React.ReactNode;
  className?: string;
}

const Row: React.FC<RowProps> = ({ children, className = "" }) => {
  return <div className={`flex ${className}`}>{children}</div>;
};

export default Row;
