import React from "react";
import { ValueCard } from "../molecules";

interface AdminInfoProps {
  totalUsers?: number;
  totalLayanan?: number;
  totalPelanggan?: number;
}

const AdminValueInformation: React.FC<AdminInfoProps> = ({
  totalUsers = 0,
  totalLayanan = 0,
  totalPelanggan = 0,
}) => {
  return (
    <div className="w-full px-2">
      <div className="flex row-auto space-x-6">
        <ValueCard title="Total Users" value={totalUsers} className="w-1/3" />
        <ValueCard
          title="Total Pemesanan"
          value={totalLayanan}
          className="w-1/3"
        />
        <ValueCard
          title="Total Pelanggan"
          value={totalPelanggan}
          className="w-1/3"
        />
      </div>
    </div>
  );
};

export { AdminValueInformation };
