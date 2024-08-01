import colors from "@/styles/colors";
import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  backgroundColor?: string;
  borderColor?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  children,
  className = "",
  backgroundColor = colors.white,
  borderColor = colors.lightgray,
  onClick = () => {},
}) => {
  return (
    <div
      className={`shadow-md rounded-2xl p-4 ${className}`}
      style={{
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        borderWidth: 0.5,
      }}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export { Card };
