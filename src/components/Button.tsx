import React, { ReactNode, MouseEvent } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  width?: "quarter" | "half" | "three-quarters" | "full";
}

const Button = ({ children, onClick, className, size = "md", width = "full" }: ButtonProps) => {
  let buttonSizeClass = "px-3 py-1.5 text-sm leading-6";
  let widthClass = "w-full";
  switch (size) {
    case "xs":
      buttonSizeClass = "px-2 py-1 text-xs leading-4";
      break;
    case "sm":
      buttonSizeClass = "px-2.5 py-1.5 text-sm leading-5";
      break;
    case "md":
      buttonSizeClass = "px-3 py-1.5 text-sm leading-6";
      break;
    case "lg":
      buttonSizeClass = "px-4 py-2 text-base leading-6";
      break;
    case "xl":
      buttonSizeClass = "px-5 py-3 text-lg leading-7";
      break;
    default:
      buttonSizeClass = "px-3 py-1.5 text-sm leading-6";
  }

  switch (width) {
    case "quarter":
      widthClass = "w-1/4";
      break;
    case "half":
      widthClass = "w-1/2";
      break;
    case "three-quarters":
      widthClass = "w-3/4";
      break;
    case "full":
    default:
      widthClass = "w-full";
      break;
  }

  return (
    <button
      onClick={onClick}
      className={`flex justify-center rounded-md bg-indigo-600 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${buttonSizeClass} ${widthClass} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
