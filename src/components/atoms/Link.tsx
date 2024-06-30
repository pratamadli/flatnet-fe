import React, { ReactNode } from "react";

interface LinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

const Link = ({ href, children, className = "" }: LinkProps) => {
  return (
    <a
      className={`text-indigo-600 hover:text-indigo-500 ${className}`}
      href={href}
    >
      {children}
    </a>
  );
};

export { Link };
