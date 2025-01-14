import SideNav from "@/components/navbar-admin/Navbar";
import React from "react";

function Layout({ children }) {
  return (
    <div className="flex h-[100vh]">
      <SideNav />
      {children}
    </div>
  );
}

export default Layout;
