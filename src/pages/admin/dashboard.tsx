// src/pages/admin/dashboard.tsx
import React, { useEffect, useState } from "react";
import { BaseMenu } from "../../components/layouts";
import { useAppDispatch } from "@/redux/hooks";
import { getDashboardThunk } from "@/redux/thunk/dashboardThunk";
import { useAuth } from "@/utils/AuthContext";

const Dashboard = () => {
  const [dataDashboard, setDataDashboard] = useState(null);
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
      {/* <h1>Welcome back, Admin</h1> */}
      {/* Add the rest of your dashboard content here */}
    </div>
  );
};

Dashboard.getLayout = (page: React.ReactNode) => <BaseMenu>{page}</BaseMenu>;

export default Dashboard;
