import React, { useEffect, useState } from "react";
import { BaseMenu } from "../../components/layouts";
import { useAppDispatch } from "@/redux/hooks";
import { getDashboardThunk } from "@/redux/thunk/dashboardThunk";
import { useAuth } from "@/utils/AuthContext";
import { PaketLayananSection, LayananSection } from "@/components/organisms";
import { getPaketLayananThunk } from "@/redux/thunk/paketLayananThunk";

const Dashboard = () => {
  const [dataDashboard, setDataDashboard] = useState({
    userId: 0,
    roleId: 0,
    email: "",
    nama: "",
    noTelp: "",
    nik: "",
    alamat: "",
    createdUserId: null,
    updatedUserId: null,
    createdAt: "",
    updatedAt: "",
    roleName: "",
    latestPelayanan: [],
    paketLayanan: [],
  });

  const dispatch = useAppDispatch();
  const { user, logout } = useAuth();
  const token = user?.token || "";
  const getDashboard = async () => {
    await dispatch(getDashboardThunk(token))
      .then((data) => {
        if (data.payload.success) {
          setDataDashboard(data.payload.data);
        } else {
          if (data.payload.message === "jwt expired") {
            alert("SESSION EXPIRED");
            logout();
          } else {
            console.log("ERROR GET DASHBOARD", data.payload);
          }
        }
      })
      .catch((error) => {
        console.log("ERROR PAYLOAD", error);
      });
  };
  const getPaketLayanan = async () => {
    await dispatch(getPaketLayananThunk(token))
      .then((data) => {
        if (data.payload.success) {
          console.log("DATA GET PAKET LAYANAN");
        } else {
          if (data.payload.message === "jwt expired") {
            alert("SESSION EXPIRED");
            logout();
          } else {
            console.log("ERROR GET DASHBOARD", data.payload);
          }
        }
      })
      .catch((error) => {
        console.log("ERROR PAYLOAD", error);
      });
  };
  
  useEffect(() => {
    getDashboard();
    getPaketLayanan()
  }, []);

  const onClickDetail = () => {
    console.log("HELLO CLICK ON DETAIL");
  };

  return (
    <div>
      <LayananSection onClickDetail={onClickDetail} />
      <PaketLayananSection />
    </div>
  );
};

Dashboard.getLayout = (page: React.ReactNode) => <BaseMenu>{page}</BaseMenu>;

export default Dashboard;
