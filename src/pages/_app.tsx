import React from "react";
import { AuthProvider } from "@/utils/AuthContext";
import "../styles/global.css";
import type { AppProps } from "next/app";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <AuthProvider>
    <Component {...pageProps} />
  </AuthProvider>
);

export default MyApp;
