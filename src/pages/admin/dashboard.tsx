// src/pages/admin/dashboard.tsx
import React, { useEffect, useState } from "react";
import { BaseMenu } from "../../components/layouts";
import { useAppDispatch } from "@/redux/hooks";
import { getDashboardThunk } from "@/redux/thunk/dashboardThunk";
import { useAuth } from "@/utils/AuthContext";
import { AdminValueInformation } from "@/components/organisms";
import Chart from "react-google-charts";

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
  const dataLine = [
    ["Bulan", "2023", "2024"],
    ["January", 5, 6],
    ["February", 8, 9],
    ["March", 12, 13],
    ["April", 15, 16],
    ["May", 18, 22],
    ["June", 20, 45],
    ["July", 19, 33],
    ["August", 16, 22],
    ["September", 13, 34],
    ["October", 9, 12],
    ["November", 6, 9],
    ["December", 4, 0],
  ];

  const optionsLine = {
    title: "Total Pemasangan",
    curveType: "function",
    legend: "none",
  };

  const dataDonut = [
    ["Task", "Hours per Day"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7], // CSS-style declaration
  ];

  const optionsDonut = {
    title: "My Daily Activities",
    pieHole: 0.4,
    is3D: false,
  };
  const dispatch = useAppDispatch();
  const { user, logout } = useAuth();
  const getDashboard = async () => {
    const token = user?.token || "";
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
      <div className="my-2 flex row-auto space-x-2">
        <Chart
          chartType="PieChart"
          height="400px"
          data={dataDonut}
          options={optionsDonut}
        />
        <Chart
          chartType="LineChart"
          width="800px"
          height="400px"
          data={dataLine}
          options={optionsLine}
        />
      </div>
    </div>
  );
};

Dashboard.getLayout = (page: React.ReactNode) => <BaseMenu>{page}</BaseMenu>;

export default Dashboard;
