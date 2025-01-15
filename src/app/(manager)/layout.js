import SideNav from "@/components/navbar-admin/Navbar";
import React from "react";

function Layout({ children }) {
  return (
    <div className="flex h-[100vh] text-[#333]">
      <SideNav />
      {children}
    </div>
  );
}

export default Layout;
