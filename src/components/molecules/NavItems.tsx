import React, { useEffect, useState } from "react";
import { Button, Label } from "../atoms";
import colors from "@/styles/colors";

interface NavItemProps {
  href: string;
  icon: string;
  label: string;
  onClick?: () => void; // Add this line to accept the onClick propa
}

const NavItems: React.FC<NavItemProps> = ({ href, icon, label, onClick }) => {
  const [activeButton, setActiveButton] = useState(false);
  const urlString = window.location.href;
  const url = new URL(urlString);
  const pathname = url.pathname.replace(/\/$/, "");
  useEffect(() => {
    console.log("PATHNAME", pathname);
    console.log("HREF", href);
    if (href === pathname) {
      setActiveButton(true);
    }
  }, []);
  return (
    <a
      href={href}
      className={`flex justify-start items-start p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white `}
    >
      <Button
        icon={icon}
        onClick={onClick}
        justify="start"
        active={activeButton}
        variant="sidebar"
      >
        <Label color={colors.light}>{label}</Label>
      </Button>
    </a>
  );
};

export default NavItems;
