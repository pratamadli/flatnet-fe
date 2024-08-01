import React from "react";
import { LayananCard } from "../molecules";
import { useAppSelector } from "@/redux/hooks";
import { Label } from "../atoms";

interface LatestLayananProps {
  layananId: string | number;
  pelangganId: string | number;
  paketLayananId: string | number;
  petugasId?: string | number | null;
  status: string;
  alasanTolak?: string | null;
  fileBukti?: string | null;
  waktuPemasangan: string;
  createdUserId: string | number;
  updatedUserId: string | number;
  createdAt: string;
  updatedAt: string;
  namaPelanggan: string;
  alamatPelanggan: string;
  namaPetugas: string;
  namaPaket: string;
  hargaPaket: string | number;
  deskripsiPaket: string;
  imagePaket: string;
  namaStatus: string;
}
interface LayananSectionProps {
  // data: LatestLayananProps[];
  onClickDetail: () => void;
}
const LayananSection: React.FC<LayananSectionProps> = ({
  // data = [],
  onClickDetail,
}) => {
  const dashboardData = useAppSelector((state) => state.dashboard);
  console.log("DASHBOARD DATA", dashboardData);
  let data = [];
  data = dashboardData?.data || [];
  data = data?.latestLayanan || [];
  console.log("DATA LATEST LAYANAN", data);
  return (
    <div className="w-full">
      {data.length === 0 ? (
        <Label>No Data Found</Label>
      ) : (
        <>
          {data?.map((value: any) => {
            return (
              <LayananCard
                alamatPelanggan={value?.alamatPelanggan?.toString() || ""}
                imagePaket={value?.imagePaket.toString() || ""}
                namaPaket={value?.namaPaket.toString() || ""}
                namaPetugas={value?.namaPetugas.toString() || ""}
                namaStatus={value?.namaStatus.toString() || ""}
                onClickDetail={onClickDetail}
                status={value?.status.toString() || ""}
                waktuPemasangan={value?.waktuPemasangan.toString() || ""}
              />
            );
          })}
        </>
      )}
    </div>
  );
};

export { LayananSection };
