import React from "react";
import { LogoutButton, NavItems, UserProfileCard } from "../molecules";
import { Divider, Logo } from "../atoms";
import { useAuth } from "@/utils/AuthContext";
import { menuList } from "@/utils/menu";
import colors from "@/styles/colors";
import { logoutThunk } from "@/redux/thunk/authThunk";
import { useAppDispatch } from "@/redux/hooks";
const Sidebar: React.FC = () => {
  const dispatch = useAppDispatch();
  const { user, logout } = useAuth();
  const currentRole = user?.roleName;
  console.log("currentRole", currentRole);
  const menuItems =
    menuList.find((menu) => menu.role === currentRole)?.menu || [];
  const handleLogout = async () => {
    const loggedOut = await dispatch(logoutThunk());
    console.log("LOGGED OUT", loggedOut);
    const payload = loggedOut.payload;
    if (payload.success) {
      await logout();
    } else {
      alert(payload.error);
    }
  };
  return (
    <aside
      className="w-64 flex flex-col justify-between h-full"
      aria-label="Sidebar"
      style={{ backgroundColor: colors.darkBlue }}
    >
      <div
        className="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800"
        style={{ backgroundColor: colors.darkBlue }}
      >
        <div className="flex justify-start items-center mb-6">
          {" "}
          <Logo fontStyle="font-semibold text-3xl" height={88} width={88} />
        </div>
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.href}>
              <NavItems href={item.href} icon={item.icon} label={item.label} />
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <UserProfileCard email="dummy@mail.com" name="dummy" />
        </div>
      </div>
      <div className="px-3 pb-4">
        <LogoutButton onClick={handleLogout} />
      </div>
    </aside>
  );
};

export default Sidebar;
