import colors from "@/styles/colors";
import React from "react";
import {
  FaTachometerAlt,
  FaMapMarkerAlt,
  FaRegUser,
  FaCheckCircle,
  FaSignOutAlt,
  FaUserFriends,
  FaChartBar,
  FaRegCheckSquare,
  FaBuffer,
  FaRegClock,
} from "react-icons/fa";

interface IconProps {
  name: string;
  size?: number;
  className?: string;
  color?: string;
}

const Icon = ({
  name,
  size = 24,
  className = "",
  color = colors.light,
}: IconProps) => {
  // return <i className={`icon-${name} ${className}`} style={{ fontSize: size }} aria-hidden="true" />;
  switch (name) {
    case "dashboard":
      return (
        <FaChartBar color={color} size={size} className={`${className}`} />
      );
    case "clock":
      return (
        <FaRegClock color={color} size={size} className={`${className}`} />
      );
    case "location":
      return (
        <FaMapMarkerAlt color={color} size={size} className={`${className}`} />
      );
    case "users":
      return (
        <FaUserFriends color={color} size={size} className={`${className}`} />
      );
    case "verification":
      return (
        <FaRegCheckSquare
          color={color}
          size={size}
          className={`${className}`}
        />
      );
    case "user":
      return <FaRegUser color={color} size={size} className={`${className}`} />;
    case "buffer":
      return <FaBuffer color={color} size={size} className={`${className}`} />;
    case "logout":
      return (
        <FaSignOutAlt color={color} size={size} className={`${className}`} />
      );
    default:
      return <i className={`icon-${name} ${className}`} />;
  }
};

export { Icon };
