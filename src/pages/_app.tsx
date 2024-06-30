import React from "react";
import { AuthProvider } from "@/utils/AuthContext";
import "../styles/global.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "@/redux/store";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  </Provider>
);

export default MyApp;
