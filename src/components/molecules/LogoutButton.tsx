import React from "react";
import { Divider } from "../atoms";
import NavItems from "./NavItems";

interface LogoutButtonProps {
  href?: string;
  icon?: string;
  label?: string;
  onClick?: () => void;
}

const LogoutButton: React.FC<LogoutButtonProps> = ({
  href = "",
  icon = "logout",
  label = "Keluar",
  onClick,
}) => {
  return (
    <div>
      <Divider />
      <div className="text-white rounded-lg flex items-start justify-around border-0">
        <NavItems href={href} icon={icon} label={label} onClick={onClick} />
      </div>
    </div>
  );
};

export default LogoutButton;
