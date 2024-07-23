import React from "react";
import { Sidebar } from "@/components/organisms";
import { useAuth } from "@/utils/AuthContext";
import { Header } from "../molecules";

interface BaseMenuProps {
  children: React.ReactNode;
  title?: string;
}

const BaseMenu: React.FC<BaseMenuProps> = ({
  children,
  title = "Dashboard",
}) => {
  const { user } = useAuth();
  const currentRole = user?.roleName;
  const nama = user?.nama;

  if (!currentRole) {
    return null; // or redirect to login if user role is not found
  }

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-8 overflow-y-auto">
        <Header title={title} name={nama} />
        {children}
      </div>
    </div>
  );
};

export default BaseMenu;
