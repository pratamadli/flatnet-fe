import React, { useState } from "react";
import { useAuth } from "@/utils/AuthContext";
import HeroImg from "../../../public/hero-img-1.png";
import { Button, Form, Image, Label, Logo } from "@/components/atoms";
import { FormInput } from "@/components/molecules";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getAuthThunk, loginThunk } from "@/redux/thunk/authThunk";
import { RootState } from "@/redux/store";
import colors from "@/styles/colors";
const Login = () => {
  const { login } = useAuth();
  const router = useRouter();
  const auth = useAppSelector((state: RootState) => state.auth);
  console.log("STATE AUTH", auth);
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errorEmail, setErrorEmail] = useState({
    error: false,
    errorMessage: "",
  });
  const [errorPassword, setErrorPassword] = useState({
    error: false,
    errorMessage: "",
  });
  const handleInputChange = (id: string, value: string) => {
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const validation = () => {
    setErrorEmail({ error: false, errorMessage: "" });
    setErrorPassword({ error: false, errorMessage: "" });
    let invalidCount = 0;

    if (formData.email === null || formData.email === "") {
      setErrorEmail({ error: true, errorMessage: "Email is required" });
      invalidCount = invalidCount + 1;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setErrorEmail({ error: true, errorMessage: "Invalid email format" });
      invalidCount = invalidCount + 1;
    }

    if (formData.password === null || formData.password === "") {
      setErrorPassword({ error: true, errorMessage: "Password is required" });
      invalidCount = invalidCount + 1;
    }

    if (invalidCount === 0) {
      return false;
    } else {
      return true;
    }
  };

  const backLandingPage = () => {
    router.push("/");
  };
  const handleLogin = async () => {
    const invalid = validation();

    if (!invalid) {
      const loggedIn = await dispatch(loginThunk(formData));
      console.log("LOGIN", loggedIn);
      const payload = loggedIn.payload;
      console.log("PAYLOAD", payload);
      if (payload.success) {
        const data = payload.data;
        const token = data.token;
        localStorage.setItem("access_token", token);
        await dispatch(getAuthThunk(token))
          .then((data) => {
            console.log("RESPONSE DATA GET AUTH", data);
            const payload = data.payload;
            if (payload.success) {
              const returnData = payload.data;
              console.log("RETURN DATA", returnData);
              const roleName = returnData.roleName.toLowerCase();
              const nama = returnData.nama;
              login(roleName, token, nama);
            }
          })
          .catch((error) => {
            console.log("ERROR", error);
          });
      } else {
        alert(payload.error);
      }
    }
  };

  return (
    <div className="flex h-screen overflow-y-hidden">
      <div className="flex flex-col w-6/12 bg-white h-full">
        <div className="p-8" onClick={backLandingPage}>
          <Logo height={88} width={88} className="w-24" />
        </div>
        <div className="px-8 py-28 ">
          <div className="flex items-start pl-32 my-3">
            <h2 className="text-3xl font-semibold text-gray-900">Login</h2>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <Form className="w-full max-w-md space-y-6">
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

              <div>
                <Button
                  onClick={handleLogin}
                  className="bg-indigo-600 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  variant="primary"
                >
                  Sign In
                </Button>
              </div>
            </Form>
            {/* <form className="w-full max-w-md space-y-6">
              <FormInput
                label="Email"
                id="email"
                placeholder="Masukkan Email"
                type="email"
                autoComplete="email"
                required={true}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <FormInput
                label="Password"
                id="password"
                placeholder="Masukkan Password"
                type="password"
                autoComplete="current-password"
                required={true}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <div>
                <Button onClick={handleLogin}>Sign In</Button>
              </div>
            </form> */}

            <p className="mt-10 text-center text-sm text-gray-500">
              Belum punya akun? &nbsp;
              {/* <a
                href="/register"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              >
                Daftar Akun
              </a> */}
              <Button
                href="/auth/register"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              >
                <Label color={colors.darkBlue}>Daftar Akun</Label>
              </Button>
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-6/12 bg-gray-100 h-full">
        <div className="flex justify-center items-center h-full">
          {/* <Image src={HeroImg} alt="hero-image" /> */}
          <Image src={HeroImg} alt="hero-image" />
        </div>
      </div>
    </div>
  );
};

export default Login;
