// Import necessary modules
import React from "react";
import { useAuth } from "@/utils/AuthContext";
import Link from "next/link"; // Import Next.js Link component
import Image from "next/image";

// Define types for menu items
interface MenuItem {
  name: string;
  href: string;
}

// Define types for menu item collections
interface MenuItems {
  [key: string]: MenuItem[];
}

// Define the DashboardLayout component
const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // Retrieve user information from authentication context
  const { user, logout } = useAuth();

  // If user is not authenticated, return null or a loading indicator
  if (!user) {
    return null; // or a loading indicator
  }

  // Define menu items for different user roles
  const menuItems: MenuItems = {
    admin: [
      { name: "Dashboard", href: "/dashboard" },
      { name: "Users", href: "/dashboard/users" },
      { name: "Verifikasi Pemesanan", href: "/dashboard/verifikasi-pemesanan" },
    ],
    petugas: [
      { name: "Dashboard", href: "/dashboard" },
      { name: "Jadwal", href: "/dashboard/jadwal" },
      { name: "Layanan", href: "/dashboard/layanan" },
    ],
    pelanggan: [
      { name: "Dashboard", href: "/dashboard" },
      { name: "Layanan", href: "/dashboard/layanan" },
      { name: "Riwayat Layanan", href: "/dashboard/riwayat-layanan" },
    ],
  };

  // Render the DashboardLayout component
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white flex flex-col p-4">
        <div className="flex items-center mb-6">
          <Image src="/logo-removebg.png" alt="Logo" width={48} height={48} />
          <span className="text-xl font-bold ml-3">Flat Net</span>
        </div>
        <nav className="flex-grow">
          {menuItems[user.roleName as keyof MenuItems]?.map((item) => (
            <Link key={item.name} href={item.href} passHref>
              {" "}
              {/* Add passHref prop */}
              <a className="block px-4 py-2 rounded hover:bg-blue-700">
                {item.name}
              </a>
            </Link>
          ))}
        </nav>
        <div className="mt-auto">
          <div className="flex items-center p-4">
            <Image
              src="/avatar.png" // Your user avatar image
              alt="User Avatar"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="ml-4">
              <p className="font-medium">{user.roleName}</p>
              <p className="text-sm text-gray-400">admin@mail.com</p>
            </div>
          </div>
          <button
            onClick={logout}
            className="w-full mt-4 px-4 py-2 text-left rounded hover:bg-blue-700"
          >
            Keluar
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-6 bg-gray-100 overflow-auto">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
