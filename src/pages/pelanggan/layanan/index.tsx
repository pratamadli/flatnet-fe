import { Button, Label } from "@/components/atoms";
import { BaseMenu } from "@/components/layouts";
import { Table } from "@/components/organisms";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getAuthThunk } from "@/redux/thunk/authThunk";
import { getLayananFilterThunk } from "@/redux/thunk/layananThunk";
import colors from "@/styles/colors";
import { useAuth } from "@/utils/AuthContext";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
const LayananList = () => {
  const { login, logout, user } = useAuth();
  const [dataLayanan, setDataLayanan] = useState([]);
  const [openModelValidasi, setOpenModalValidasi] = useState(false);
  const route = useRouter();
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth);
  const authData = auth.data;
  console.log("AUTH DATA", auth);
  const handleOpenvalidasi = (data: any) => {};
  const columns = [
    { header: "Paket", accessor: "namaPaket", searchable: true },
    { header: "Harga", accessor: "hargaPaket", searchable: true },
    { header: "Alamat", accessor: "alamatPelanggan", searchable: true },
    { header: "Waktu", accessor: "waktuPemasangan", searchable: true },
    { header: "Status", accessor: "namaStatus", searchable: true },
    {
      header: "",
      accessor: "actions",
      render: (e: any) => {
        return (
          <div className="flex row-auto justify-end">
            {e.status === "diverifikasi" && (
              <Button width="quarter" onClick={() => handleOpenvalidasi(e)}>
                <Label color={colors.primary}>Validasi</Label>
              </Button>
            )}
          </div>
        );
      },
    },
  ];

  const getLayananFilter = async () => {
    await dispatch(
      getLayananFilterThunk({
        withoutStatus: "selesai",
        pelangganId: authData?.pelangganId,
      })
    )
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

  const getAuth = async () => {
    const token = user?.token || "";
    await dispatch(getAuthThunk(token))
      .then((data) => {
        if (data.payload.success) {
          console.log("DATA AUTH FILTERED LIST", data.payload.data);
        } else {
          if (data.payload.message === "jwt expired") {
            alert("SESSION EXPIRED");
            logout();
          } else {
            console.log("ERROR GET AUTH", data.payload);
          }
        }
      })
      .catch((error) => {
        console.log("ERROR", error);
      });
  };

  useEffect(() => {
    getAuth();
  }, []);

  useEffect(() => {
    getLayananFilter();
  }, [authData]);

  const handleAddNewButton = () => {
    route.push("/pelanggan/layanan/form");
  };
  return (
    <div>
      <Table
        columns={columns}
        data={dataLayanan}
        addNewButton={true}
        onClickAdd={handleAddNewButton}
      />
    </div>
  );
};

LayananList.getLayout = (page: React.ReactNode) => (
  <BaseMenu title="Layanan List">{page}</BaseMenu>
);

export default LayananList;
