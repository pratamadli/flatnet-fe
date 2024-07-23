export const menuList = [
  {
    role: "admin",
    menu: [
      { href: "/admin/dashboard", icon: "dashboard", label: "Dashboard" },
      { href: "/admin/users", icon: "users", label: "Users" },
      {
        href: "/admin/verifikasi-pemesanan",
        icon: "verification",
        label: "Verifikasi",
      },
      {
        href: "/admin/profile",
        icon: "profile",
        label: "Profile",
      },
    ],
  },
  {
    role: "pelanggan",
    menu: [
      { href: "/pelanggan/dashboard", icon: "dashboard", label: "Dashboard" },
      { href: "/pelanggan/layanan", icon: "verification", label: "Layanan" },
      {
        href: "/pelanggan/riwayat-layanan",
        icon: "verification",
        label: "Riwayat Layanan",
      },
      {
        href: "/pelanggan/profile",
        icon: "profile",
        label: "Profile",
      },
    ],
  },
  {
    role: "petugas",
    menu: [
      { href: "/petugas/dashboard", icon: "dashboard", label: "Dashboard" },
      { href: "/petugas/jadwal", icon: "verification", label: "Jadwal" },
      { href: "/petugas/layanan", icon: "verification", label: "Layanan" },
      {
        href: "/petugas/profile",
        icon: "profile",
        label: "Profile",
      },
    ],
  },
];
