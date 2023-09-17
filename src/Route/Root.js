import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Home/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import MainNavigation from "./MainNavigation";

const RootLayout = () => {
  return (
    <Fragment>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </Fragment>
  );
};

export default RootLayout;
