import React from "react";

interface ColumnProps {
  children: React.ReactNode;
  span?: number; // Number of columns to span, 1 to 12
  className?: string;
}

const Column: React.FC<ColumnProps> = ({
  children,
  span = 12,
  className = "",
}) => {
  const gridSpan = `col-span-${span}`;
  return <div className={`${gridSpan} ${className}`}>{children}</div>;
};

export default Column;
