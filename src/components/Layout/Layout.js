import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { LayoutBody, ContentContainer } from "./LayoutStyles";

const Layout = ({ children }) => {
  return (
    <LayoutBody>
      <Header />
      <ContentContainer>{children}</ContentContainer>
      <Footer />
    </LayoutBody>
  );
};

export default Layout;
