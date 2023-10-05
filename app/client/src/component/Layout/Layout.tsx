import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box sx={{ height: "100dvh", width: "100vw" }}>
      <Header />
      <main>{children ? <>{children}</> : <Outlet />}</main>
      {/* <Footer /> */}
    </Box>
  );
};

export default Layout;
