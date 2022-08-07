import React, { ReactNode } from "react";
import { styled } from "gatsby-theme-stitches/src/config";
import "../../styles/layout.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <MainLayout>
      <Navbar />
      {children}
      <Footer />
    </MainLayout>
  );
};

const MainLayout = styled("main", {
  backgroundColor: "$background",
});

export default Layout;
