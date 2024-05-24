import React from 'react';
import Link from 'next/link';

const Unauthorized = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Unauthorized</h1>
      <p className="text-lg mt-4">You do not have access to this page.</p>
      <Link href="/">
        <a className="mt-6 text-blue-600 hover:underline">Go back to homepage</a>
      </Link>
    </div>
  );
};

export default Unauthorized;