// src/pages/admin/dashboard.tsx
import React from "react";
import { BaseMenu } from "../../components/layouts";

const Dashboard = () => {
  return (
    <div>
      {/* <h1>Welcome back, Admin</h1> */}
      {/* Add the rest of your dashboard content here */}
    </div>
  );
};

Dashboard.getLayout = (page: React.ReactNode) => <BaseMenu>{page}</BaseMenu>;

export default Dashboard;
