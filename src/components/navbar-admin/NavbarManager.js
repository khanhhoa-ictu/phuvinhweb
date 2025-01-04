"use client";
import React from "react";
import SideNav from "./Navbar";
import { usePathname } from "next/navigation";

function NavbarManager() {
  const pathname = usePathname();
  if (pathname.startsWith("/admin")) return <SideNav />;
  return null;
}

export default NavbarManager;
