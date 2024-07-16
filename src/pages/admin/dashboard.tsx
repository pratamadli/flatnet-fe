// src/pages/admin/dashboard.tsx
import React, { useEffect, useState } from "react";
import { BaseMenu } from "../../components/layouts";
import { useAppDispatch } from "@/redux/hooks";
import { getDashboardThunk } from "@/redux/thunk/dashboardThunk";
import { useAuth } from "@/utils/AuthContext";
import { AdminValueInformation } from "@/components/organisms/AdminValueInformaton";

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
    totalPetugas: 0,
    totalLayanan: 0,
    totalPelanggan: 0,
    totalUser: 0,
  });
  const dispatch = useAppDispatch();
  const { user, logout } = useAuth();
  const getDashboard = async () => {
    const token = user?.token || "";
    await dispatch(getDashboardThunk(token))
      .then((data) => {
        if (data.payload.success) {
          setDataDashboard(data.payload.data);
          console.log("DATA DASHBOARD LIST", data.payload.data);
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
  }, []);
  return (
    <div>
      <AdminValueInformation
        totalLayanan={dataDashboard?.totalLayanan || 0}
        totalPelanggan={dataDashboard.totalPelanggan || 0}
        totalUsers={dataDashboard.totalUser || 0}
      />
    </div>
  );
};

Dashboard.getLayout = (page: React.ReactNode) => <BaseMenu>{page}</BaseMenu>;

export default Dashboard;
