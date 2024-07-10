import React from "react";
import { AuthProvider } from "@/utils/AuthContext";
import "../styles/global.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "@/redux/store";
import { NextComponentType, NextPageContext } from "next";

// Define the AppProps with an additional `ComponentType` prop
interface MyAppProps extends AppProps {
  Component: NextComponentType<NextPageContext> & {
    getLayout?: (page: React.ReactNode) => React.ReactNode;
  };
}

const MyApp = ({ Component, pageProps }: MyAppProps) => {
  // Default layout function
  const getLayout = Component.getLayout || ((page: React.ReactNode) => <>{page}</>);

  return (
    <Provider store={store}>
      <AuthProvider>
        {getLayout(<Component {...pageProps} />)}
      </AuthProvider>
    </Provider>
  );
};

export default MyApp;
