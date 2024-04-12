"use server";

import Image from "next/image";
import React from "react";
import LogoRemoveBg from "../../public/logo-removebg.png";
import HeroImg from "../../public/hero-img-1.png";
const Login = () => {
  return (
    <div className="flex h-screen">
      <div className="flex flex-col w-6/12 bg-white h-full">
        <div className="p-8">
          <Image src={LogoRemoveBg} alt="logo" className="w-24" />
        </div>
        <div className="px-8 py-28 ">
          <div className="flex items-start pl-32 my-3">
            <h2 className="text-3xl font-semibold text-gray-900">Login</h2>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <form className="w-full max-w-md space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              Belum punya akun?
              <a
                href="/register"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              >
                Daftar Akun
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-6/12 bg-gray-100 h-full">
        <div className="flex justify-center items-center h-full">
          <Image src={HeroImg} alt="hero-image" />
        </div>
      </div>
    </div>
  );
};

export default Login;
