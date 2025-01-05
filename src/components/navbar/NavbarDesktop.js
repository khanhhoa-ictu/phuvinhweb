"use client";
import logo from "@/assets/logo/logo.png";
import { listMenu } from "@/common/constant";
import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

function NavbarDesktop() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(()=>{
    setIsScrolled(false)
  },[pathname])
  
  return (
    <div className={`flex justify-between px-[30px] items-center xl:px-[70] py-4 ${
      isScrolled ? "bg-white" : "bg-transparent"
    }`}>
      <div className="flex gap-[45px] items-center">
        <div className="flex-shrink-0">
          <Link href="/" className="flex flex-col items-center justify-center gap-[5px]" >
            <Image
              src={logo}
              width={423}
              height={249}
              alt="logo"
              className="w-[100px] h-[60px]"
            />
            <h1 className="uppercase text-base font-roboto font-bold text-[#261797]" >Phu Vinh Stell</h1>
          </Link>
        </div>
        <div className="flex gap-[20px] text-[#261797] text-xl font-bold xl:gap-[32px] font-roboto uppercase">
          {listMenu.map((item) => (
            <Link
              href={item.href}
              key={item.title}
              className={`${pathname.includes(item.href) && "underline"}`}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex gap-[16px] items-center xl:[gap-27px]">
        <Button className="!rounded-[50px] text-base font-semibold !font-sourceSanPro">
          <span className="px-3">Log in</span>
        </Button>
      </div>
    </div>
  );
}

export default NavbarDesktop;
