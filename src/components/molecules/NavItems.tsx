import React, { useEffect, useState } from "react";
import { Button, Label } from "../atoms";
import colors from "@/styles/colors";
import UserProfileCard from "./UserProfileCard";

interface NavItemProps {
  href: string;
  icon: string;
  label: string;
  onClick?: () => void;
  onClickProfile?: () => void; // Add this line to accept the onClick propa
  name?: string;
  email?: string;
}

const NavItems: React.FC<NavItemProps> = ({
  href,
  icon,
  label,
  onClick,
  onClickProfile,
  name,
  email,
}) => {
  const [activeButton, setActiveButton] = useState(false);
  const urlString = window.location.href;
  const url = new URL(urlString);
  const pathname = url.pathname.replace(/\/$/, "");
  useEffect(() => {
    if (href === pathname) {
      setActiveButton(true);
    }
  }, []);

  return (
    <>
      {href === "/admin/profile" ||
      href === "/petugas/profile" ||
      href === "/pelanggan/profile" ? (
        <a className="mt-6" href={href}>
          <UserProfileCard
            name={name || ""}
            email={email || ""}
            active={activeButton}
          />
        </a>
      ) : (
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
      )}
    </>
  );
};

export default NavItems;
