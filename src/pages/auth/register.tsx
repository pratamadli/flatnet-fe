"use server";

// import Image from "next/image";
import React, { useState } from "react";
import HeroImg from "../../../public/hero-img-1.png";
import { useRouter } from "next/router";
import { Button, Form, Image, Logo } from "@/components/atoms";
import { FormInput } from "@/components/molecules";
import { registerThunk } from "@/redux/thunk/authThunk";
import { useAppDispatch } from "@/redux/hooks";
import { error } from "console";
const Register = () => {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    nama: "",
    nik: "",
    noTelp: "",
    email: "",
    password: "",
    alamat: "",
  });

  const [invalid, setInvalid] = useState(false);
  const [errorAlamat, setErrorAlamat] = useState({
    error: false,
    errorMessage: "",
  });
  const [errorNik, setErrorNik] = useState({
    error: false,
    errorMessage: "",
  });
  const [errorNama, setErrorNama] = useState({
    error: false,
    errorMessage: "",
  });
  const [errorEmail, setErrorEmail] = useState({
    error: false,
    errorMessage: "",
  });
  const [errorPassword, setErrorPassword] = useState({
    error: false,
    errorMessage: "",
  });
  const [errorNoTelp, setErrorNoTelp] = useState({
    error: false,
    errorMessage: "",
  });

  const handleInputChange = (id: string, value: string) => {
    setFormData({
      ...formData,
      [id]: value,
    });
  };
  const router = useRouter();
  const backLandingPage = () => {
    router.push("/");
  };

  const validation = () => {
    let invalidCount = 0;
    if (formData.alamat === null || formData.alamat === "") {
      setInvalid(true);
      setErrorAlamat({ error: true, errorMessage: "Alamat is required" });
      invalidCount = invalidCount + 1;
    }

    if (formData.nama === null || formData.nama === "") {
      setInvalid(true);
      setErrorNama({ error: true, errorMessage: "Nama is required" });
      invalidCount = invalidCount + 1;
    }

    if (formData.email === null || formData.email === "") {
      setInvalid(true);
      setErrorEmail({ error: true, errorMessage: "Email is required" });
      invalidCount = invalidCount + 1;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setInvalid(true);
      setErrorEmail({ error: true, errorMessage: "Invalid email format" });
      invalidCount = invalidCount + 1;
    }

    if (formData.nik === null || formData.nik === "") {
      setInvalid(true);
      setErrorNik({ error: true, errorMessage: "NIK is required" });
      invalidCount = invalidCount + 1;
    }

    if (!/^\d{16}$/.test(formData.nik)) {
      setInvalid(true);
      setErrorNik({ error: true, errorMessage: "NIK should be 16 digits" });
      invalidCount = invalidCount + 1;
    }

    if (formData.password === null || formData.password === "") {
      setInvalid(true);
      setErrorPassword({ error: true, errorMessage: "Password is required" });
      invalidCount = invalidCount + 1;
    }

    if (!/^.{8,}$/.test(formData.password)) {
      setInvalid(true);
      setErrorPassword({
        error: true,
        errorMessage: "Password should contain minimun 8 characters",
      });
      invalidCount = invalidCount + 1;
    }

    if (!/^(?=.*[a-z])(?=.*[A-Z])/.test(formData.password)) {
      setInvalid(true);
      setErrorPassword({
        error: true,
        errorMessage:
          "Password should contain uppercase and lowercase characters",
      });
      invalidCount = invalidCount + 1;
    }

    if (formData.noTelp === null || formData.noTelp === "") {
      setInvalid(true);
      setErrorNoTelp({ error: true, errorMessage: "No. Telp is required" });
      invalidCount = invalidCount + 1;
    }

    if (!/^\d{1,15}$/.test(formData.noTelp)) {
      setInvalid(true);
      setErrorNoTelp({
        error: true,
        errorMessage: "No. Telp should be a number and max 15 digits",
      });
      invalidCount = invalidCount + 1;
    }

    if (invalidCount === 0) {
      return false;
    } else {
      return true;
    }
  };
  const handleRegister = async () => {
    const invalid = validation();
    if (!invalid) {
      const regist = await dispatch(registerThunk(formData));

      const payload = regist.payload;

      if (payload.success) {
        alert("Register Success");
        router.push("/auth/login");
      } else {
        alert(payload.message);
      }
    }
  };
  return (
    <div className="flex h-screen overflow-y-hidden">
      <div className="flex flex-col w-6/12 bg-white h-full">
        <div className="p-8" onClick={backLandingPage}>
          <Logo height={88} width={88} className="w-24" />
        </div>
        <div className="px-8 py-4">
          <div className="flex items-start pl-32 my-3">
            <h2 className="text-3xl font-semibold text-gray-900">
              Daftar Akun
            </h2>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <Form className="w-full max-w-md">
              <div className="flex flex-col space-y-2">
                {/* ROW 1 */}
                <div className="flex space-x-4">
                  <div className="w-1/2">
                    <FormInput
                      label="Nama"
                      id="nama"
                      placeholder="Masukkan nama anda"
                      type="text"
                      required={true}
                      onChange={(value) => handleInputChange("nama", value)}
                      value={formData.nama}
                      error={errorNama.error}
                      errorMessage={errorNama.errorMessage}
                    />
                  </div>
                  <div className="w-1/2">
                    <FormInput
                      label="NIK"
                      id="nik"
                      placeholder="Masukkan NIK anda"
                      type="text"
                      required={true}
                      onChange={(value) => handleInputChange("nik", value)}
                      value={formData.nik}
                      error={errorNik.error}
                      errorMessage={errorNik.errorMessage}
                    />
                  </div>
                </div>
                {/* ROW 2 */}
                <div className="flex space-x-4">
                  <div className="w-1/2">
                    <FormInput
                      label="Email"
                      id="email"
                      placeholder="Masukkan email anda"
                      type="email"
                      autoComplete="email"
                      required={true}
                      onChange={(value) => handleInputChange("email", value)}
                      value={formData.email}
                      error={errorEmail.error}
                      errorMessage={errorEmail.errorMessage}
                    />
                  </div>
                  <div className="w-1/2">
                    <FormInput
                      label="No. Telp"
                      id="noTelp"
                      placeholder="Masukkan nomor telepon"
                      type="text"
                      required={true}
                      onChange={(value) => handleInputChange("noTelp", value)}
                      value={formData.noTelp}
                      error={errorNoTelp.error}
                      errorMessage={errorNoTelp.errorMessage}
                    />
                  </div>
                </div>
                {/* ROW 3*/}
                <div className="flex space-x-4">
                  <div className="w-full">
                    <FormInput
                      label="Alamat"
                      id="alamat"
                      placeholder="Masukkan alamat lengkap anda"
                      type="text"
                      required={true}
                      onChange={(value) => handleInputChange("alamat", value)}
                      value={formData.alamat}
                      error={errorAlamat.error}
                      errorMessage={errorAlamat.errorMessage}
                    />
                  </div>
                </div>
                {/* ROW 4 */}
                <div className="flex space-x-4">
                  <div className="w-full">
                    <FormInput
                      label="Password"
                      id="password"
                      placeholder="Masukkan password"
                      type="password"
                      required={true}
                      onChange={(value) => handleInputChange("password", value)}
                      value={formData.password}
                      error={errorPassword.error}
                      errorMessage={errorPassword.errorMessage}
                    />
                    <p className="text-gray-500 text-sm">
                      Min. 8 karakter kombinasi angka, huruf besar, dan huruf
                      kecil
                    </p>
                  </div>
                </div>
              </div>
              <div className="my-2">
                <Button
                  onClick={handleRegister}
                  variant="primary"
                  className="bg-indigo-600 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Register
                </Button>
              </div>
            </Form>

            <p className="mt-10 text-center text-sm text-gray-500">
              Sudah punya akun? &nbsp;
              <Button
                href="/auth/login"
                variant="light"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              >
                Login
              </Button>
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

export default Register;
