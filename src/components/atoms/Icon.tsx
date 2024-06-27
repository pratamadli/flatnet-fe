import React from "react";

interface IconProps {
  name: string;
  size?: number;
  className?: string;
}

const Icon = ({ name, size = 24, className = "" }: IconProps) => {
  return <i className={`icon-${name} ${className}`} style={{ fontSize: size }} />;
};

export default Icon;
