import React, { ReactNode, MouseEvent } from "react";
import colors from "@/styles/colors";
import { Icon } from "./Icon";
interface ButtonProps {
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  width?:
    | "sixteenth"
    | "eighth"
    | "quarter"
    | "half"
    | "three-quarters"
    | "full";
  href?: string;
  type?: "button" | "submit" | "reset";
  ariaLabel?: string; // Optional icon size
  icon?: string;
  justify?:
    | "start"
    | "normal"
    | "end"
    | "center"
    | "between"
    | "around"
    | "evenly"
    | "stretch";
  items?: "start" | "end" | "center" | "baseline" | "stretch";
  variant?:
    | "primary"
    | "secondary"
    | "danger"
    | "success"
    | "warning"
    | "light"
    | "midgray"
    | "darkgray"
    | "black"
    | "darkBlue"
    | "white"
    | "sidebar"
    | null;
  textColor?: string;
  active?: boolean;
}

const Button = ({
  children,
  onClick,
  className = "",
  size = "md",
  width = "full",
  href,
  type = "button",
  ariaLabel,
  icon = "",
  justify = "center",
  items = "center",
  variant = null,
  textColor,
  active = false,
}: ButtonProps) => {
  let buttonSizeClass = "px-3 py-1.5 text-sm leading-6";
  let widthClass = "w-full";
  let variantClass = `${textColor ? `text-${textColor}` : variant === "light" ? "text-black" : `text-${colors.light}`} hover:bg-${variant ? (variant === "sidebar" ? colors.lightgray : colors[variant]) : colors.midgray}-dark focus:bg-${variant ? (variant === "sidebar" ? colors.lightgray : colors[variant]) : colors.midgray}-dark`;
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
    case "sixteenth":
      widthClass = "w-1/16";
      break;
    case "eighth":
      widthClass = "w-1/8";
      break;
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

  const commonProps = {
    className: `flex items-${items} justify-${justify} rounded-md shadow-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${buttonSizeClass} ${widthClass} ${variantClass} ${className}`,
    "aria-label": ariaLabel,
  };

  if (href) {
    return (
      <button
        onClick={onClick}
        style={{
          backgroundColor: active
            ? colors.primary
            : variant
              ? variant === "sidebar"
                ? "transparent"
                : colors[variant]
              : "transparent",
          borderWidth: "none",
          borderColor: variant === "sidebar" ? "" : colors.lightgray,
        }}
      >
        <a href={href} {...commonProps}>
          {icon && (
            <span className="mr-2">
              <Icon name={icon} />
            </span>
          )}
          {children}
        </a>
      </button>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      {...commonProps}
      style={{
        backgroundColor: active
          ? colors.primary
          : variant
            ? variant === "sidebar"
              ? "transparent"
              : colors[variant]
            : "transparent",
        borderWidth: "node",
        borderColor: variant === "sidebar" ? "" : colors.lightgray,
      }}
    >
      {icon && (
        <span className="mr-2">
          <Icon name={icon} />
        </span>
      )}
      {children}
    </button>
  );
};

export { Button };
