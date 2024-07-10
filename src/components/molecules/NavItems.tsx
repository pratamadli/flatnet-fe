import React, { useEffect, useState } from "react";
import { Button, Label } from "../atoms";
import colors from "@/styles/colors";
import classNames from "classnames";

interface NavItemProps {
  href: string;
  icon: string;
  label: string;
  onClick?: () => void; // Add this line to accept the onClick prop
}

const NavItems: React.FC<NavItemProps> = ({ href, icon, label, onClick }) => {
  const [active, setActive] = useState(false);
  const urlString = window.location.href;
  const url = new URL(urlString);
  const pathname = url.pathname.replace(/\/$/, "");
  useEffect(() => {
    console.log("PATHNAME", pathname);
    console.log("HREF", href);
    if (href === pathname) {
      setActive(true);
    }
  }, []);
  return (
    <div
      className={`flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white ${active ? "bg-blue-600 text-white" : ""}`}
    >
      <Button href={href} icon={icon} onClick={onClick}>
        <Label>{label}</Label>
      </Button>
    </div>
  );
};

export default NavItems;
