import React, { useState, useEffect } from "react";
import { BaseMenu } from "@/components/layouts";
import { Table, TolakModal } from "@/components/organisms";
import { Button, Label } from "@/components/atoms";
import colors from "@/styles/colors";
import { useAppDispatch } from "@/redux/hooks";
import { getLayananFilterThunk } from "@/redux/thunk/layananThunk";
import { useAuth } from "@/utils/AuthContext";
import { VerifikasiModal } from "@/components/organisms/VerifikasiModal";

const VerifikasiPemesanan = () => {
  const [dataLayanan, setDataLayanan] = useState([]);
  const [currentDataTolak, setCurrentDataTolak] = useState(null);
  const [currentDataVerifikasi, setCurrentDataVerifikasi] = useState(null);
  const [openModalTolak, setOpenModalTolak] = useState(false);
  const [openModalVerifikasi, setOpenModalVerifikasi] = useState(false);
  const { login, logout, user } = useAuth();
  const dispatch = useAppDispatch();
  const columns = [
    { header: "Pelanggan", accessor: "namaPelanggan", searchable: true },
    { header: "Paket", accessor: "namaPaket", searchable: true },
    { header: "Alamat", accessor: "alamatPelanggan", searchable: true },
    { header: "Jadwal", accessor: "waktuPemasangan", searchable: true },
    { header: "Status", accessor: "namaStatus", searchable: true },
    {
      header: "",
      accessor: "actions",
      render: (e: any) => {
        return (
          <div className="flex row-auto justify-end">
            <Button width="quarter" onClick={() => handleOpenVerifikasi(e)}>
              <Label color={colors.primary}>Verifikasi</Label>
            </Button>
            <Button width="quarter" onClick={() => handleOpenTolak(e)}>
              <Label color={colors.darkgray}>Tolak</Label>
            </Button>
          </div>
        );
      },
    },
  ];

  const handleOpenVerifikasi = (e: any) => {
    console.log("VERIFIKASI", e);
    setCurrentDataVerifikasi(e);
    setOpenModalVerifikasi(true);
  };

  const handleOpenTolak = (e: any) => {
    console.log("TOLAK", e);
    setCurrentDataTolak(e);
    setOpenModalTolak(true);
  };

  const handleClose = async () => {
    console.log("JALAN HANLDE CLOSE");
    setOpenModalTolak(false);
    setOpenModalVerifikasi(false);
    await getLayananFilter();
  };

  const getLayananFilter = async () => {
    await dispatch(getLayananFilterThunk({ status: "menunggu_verifikasi" }))
      .then((data) => {
        if (data.payload.success) {
          setDataLayanan(data.payload.data);
          console.log("DATA LAYANAN FILTERED LIST", data.payload.data);
        } else {
          if (data.payload.message === "jwt expired") {
            alert("SESSION EXPIRED");
            logout();
          } else {
            console.log("ERROR GET LAYANAN", data.payload);
          }
        }
      })
      .catch((error) => {
        console.log("ERROR", error);
      });
  };
  useEffect(() => {
    getLayananFilter();
  }, [openModalTolak]);

  return (
    <div>
      <Table columns={columns} data={dataLayanan} addNewButton={false} />
      <TolakModal
        isOpen={openModalTolak}
        data={currentDataTolak}
        onClose={handleClose}
      />
      <VerifikasiModal
        isOpen={openModalVerifikasi}
        data={currentDataVerifikasi}
        onClose={handleClose}
      />
    </div>
  );
};

VerifikasiPemesanan.getLayout = (page: React.ReactNode) => (
  <BaseMenu title="Verifikasi Pemesanan">{page}</BaseMenu>
);

export default VerifikasiPemesanan;
