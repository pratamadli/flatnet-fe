import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  href: string;
}

const Button = ({ children, href }: ButtonProps) => (
  <a className="bg-blue-500 text-white py-2 px-4 rounded" href={`/${href}`}>
    {children}
  </a>
);

export { Button };
