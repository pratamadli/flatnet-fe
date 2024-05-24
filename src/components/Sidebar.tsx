import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaUser, FaBox, FaCalendarAlt, FaHistory, FaConciergeBell } from 'react-icons/fa';

const Sidebar = ({ role }: { role: string }) => {
  return (
    <div className="w-64 h-full bg-blue-800 text-white flex flex-col">
      <div className="p-4">
        <Image src="/logo.png" alt="logo" width={150} height={50} />
      </div>
      <nav className="mt-10 flex-1">
        <ul>
          <li className="p-4 hover:bg-blue-700">
            <Link href="/dashboard">
              <a className="flex items-center">
                <FaBox className="mr-2" />
                Dashboard
              </a>
            </Link>
          </li>
          {role === 'admin' && (
            <>
              <li className="p-4 hover:bg-blue-700">
                <Link href="/dashboard/users">
                  <a className="flex items-center">
                    <FaUser className="mr-2" />
                    Users
                  </a>
                </Link>
              </li>
              <li className="p-4 hover:bg-blue-700">
                <Link href="/dashboard/orders">
                  <a className="flex items-center">
                    <FaBox className="mr-2" />
                    Verifikasi Pemesanan
                  </a>
                </Link>
              </li>
            </>
          )}
          {role === 'pelanggan' && (
            <>
              <li className="p-4 hover:bg-blue-700">
                <Link href="/dashboard/layanan">
                  <a className="flex items-center">
                    <FaConciergeBell className="mr-2" />
                    Layanan
                  </a>
                </Link>
              </li>
              <li className="p-4 hover:bg-blue-700">
                <Link href="/dashboard/riwayat">
                  <a className="flex items-center">
                    <FaHistory className="mr-2" />
                    Riwayat Layanan
                  </a>
                </Link>
              </li>
            </>
          )}
          {role === 'petugas' && (
            <>
              <li className="p-4 hover:bg-blue-700">
                <Link href="/dashboard/jadwal">
                  <a className="flex items-center">
                    <FaCalendarAlt className="mr-2" />
                    Jadwal
                  </a>
                </Link>
              </li>
              <li className="p-4 hover:bg-blue-700">
                <Link href="/dashboard/layanan">
                  <a className="flex items-center">
                    <FaConciergeBell className="mr-2" />
                    Layanan
                  </a>
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
      <div className="p-4 flex items-center">
        <Image
          src="/profile.jpg"
          alt="Admin"
          width={40}
          height={40}
          className="rounded-full"
        />
        <div className="ml-3">
          <p className="text-sm">Admin</p>
          <p className="text-xs text-gray-400">admin@mail.com</p>
        </div>
      </div>
      <div className="p-4">
        <Link href="/logout">
          <a className="flex items-center text-sm text-red-400">
            Keluar
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
