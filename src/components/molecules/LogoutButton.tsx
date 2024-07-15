import React from "react";
import { Button, Divider, Label } from "../atoms";
import NavItems from "./NavItems";
import colors from "@/styles/colors";

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
        <Button
          onClick={onClick}
          href={href}
          icon={icon}
          justify="start"
          variant="sidebar"
        >
          <Label color={colors.light}>{label}</Label>
        </Button>
      </div>
    </div>
  );
};

export default LogoutButton;
