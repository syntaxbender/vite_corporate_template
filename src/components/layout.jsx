import React from "react";
import Header from "./header";
import Footer from "./footer";

function Layout(props) {
  return (
    <>
      <Header />
      {/* <Outlet/> */}
      {props.children}
      <Footer />
    </>
  );
}
export default Layout;
