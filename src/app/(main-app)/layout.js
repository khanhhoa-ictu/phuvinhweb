import React from "react";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

function Layout({ children }) {
  return (
    <div className="bg-white flex flex-col justify-between min-h-[100vh] relative font-roboto">
      <div className="sticky top-0 z-[11]">
        <Navbar />
      </div>
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
