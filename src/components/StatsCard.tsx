import React from 'react';

const StatsCard = ({ title, value }: { title: string; value: number }) => {
  return (
    <div className="p-4 bg-white rounded-md shadow-md w-1/3">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
};

export default StatsCard;
