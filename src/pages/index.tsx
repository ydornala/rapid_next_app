/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { StoreProvider } from "./StoreProvider";
import { ToastProvider } from "react-toast-notifications";

const XButton = React.lazy(() => import('rapid/XButton'));
const Mygarage = React.lazy(() => import('rapid/Mygarage'));

import rapidStore from "rapid/store";
import Header from "@/lib/header";
import { token } from "./constants";
import Garage from "@/lib/mygarage";
import { useAppDispatch, useAppSelector, useAppStore } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import { userData } from "@/lib/features/user/constants";

import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    localStorage.setItem('authToken', token);
  }, []);

  return (
    <>
      {loaded && rapidStore() && <StoreProvider store={rapidStore()}>
        <ToastProvider>
          <Header />
          <div style={{ padding: '0 50px', display: 'flex', rowGap: '25px', columnGap: '25px' }}>
            <div className="xl-main-navigation">
              <BrowserRouter>
                <Routes>
                  <Route path="/" Component={Mygarage} />
                </Routes>
              </BrowserRouter>
            </div>
          </div>
        </ToastProvider>
      </StoreProvider>}
    </>
  );
}
