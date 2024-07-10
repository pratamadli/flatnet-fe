import React from "react";

interface IconProps {
  name: string;
  size?: number;
  className?: string;
}

const Icon = ({ name, size = 24, className = "" }: IconProps) => {
  // return <i className={`icon-${name} ${className}`} style={{ fontSize: size }} aria-hidden="true" />;
  switch (name) {
    case 'dashboard':
      return <i className={`fas fa-tachometer-alt ${className}`} style={{ fontSize: size }} aria-hidden="true"/>;
    case 'users':
      return <i className={`fas fa-users ${className}`} style={{ fontSize: size }} aria-hidden="true"/>;
    case 'verification':
      return <i className={`fas fa-check-circle ${className}`} style={{ fontSize: size }} aria-hidden="true" />;
    case 'logout':
      return <i className={`fas fa-sign-out-alt ${className}`} style={{ fontSize: size }} aria-hidden="true" />;
    default:
      return <i className={`icon-${name} ${className}`} />;
  }
};

export  {Icon};
