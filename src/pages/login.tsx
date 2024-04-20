"use server";

import Image from "next/image";
import React from "react";
import LogoRemoveBg from "../../public/logo-removebg.png";
import HeroImg from "../../public/hero-img-1.png";
import FormInput from "@/components/FormInput";
const Login = () => {
  return (
    <div className="flex h-screen overflow-y-hidden">
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
              <FormInput
                label="Email"
                id="email"
                placeholder="Masukkan Email"
                type="email"
                autoComplete="email"
                required={true}
              />

              <FormInput
                label="Password"
                id="password"
                placeholder="Masukkan Password"
                type="password"
                autoComplete="current-password"
                required={true}
              />

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
              Belum punya akun? &nbsp;
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
