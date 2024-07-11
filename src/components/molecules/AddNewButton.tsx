import React from "react";
import { Button, Divider, Label } from "../atoms";
import NavItems from "./NavItems";
import colors from "@/styles/colors";

interface AddNewButtonProps {
  href?: string;
  icon?: string;
  label?: string;
  onClick?: () => void;
}

const AddNewButton: React.FC<AddNewButtonProps> = ({
  href = "",
  icon = "add",
  label = "Tambah",
  onClick,
}) => {
  return (
    <Button
      onClick={onClick}
      href={href}
      icon={icon}
      justify="center"
      size="sm"
      width="eighth"
      variant="primary"
      className="bg-blue-600"
    >
      <Label color={colors.light}>{label}</Label>
    </Button>
  );
};

export default AddNewButton;
