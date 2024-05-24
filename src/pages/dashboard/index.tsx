import React from 'react';
import DashboardLayout from '@/layout/DashboardLayout';
import StatsCard from '@/components/StatsCard';
import ChartCard from '@/components/ChartCard';
import DataTable from '@/components/DataTable';
import withAuth from '@/utils/withAuth';

const DashboardHome = () => {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-3 gap-4 mb-8">
        <StatsCard title="Total Users" value={400} />
        <StatsCard title="Total Pemesanan" value={1210} />
        <StatsCard title="Total Pelanggan" value={316} />
      </div>
      <div className="grid grid-cols-2 gap-4 mb-8">
        <ChartCard title="Status Layanan" />
        <ChartCard title="Total Pemesanan" />
      </div>
      <DataTable />
    </DashboardLayout>
  );
};

export default withAuth(DashboardHome, 'admin');
