"use client";
import logo from "@/assets/logo/logo.jpg";
import { listMenu } from "@/common/constant";
import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavbarDesktop() {
  const pathname = usePathname();
  return (
    <div className="flex justify-between px-[30px] items-center xl:px-[70]">
      <div className="flex gap-[45px] items-center">
        <div className="flex-shrink-0">
          <Link href="/">
            <Image
              src={logo}
              width={160}
              height={36}
              alt="logo"
              className="w-[160px] h-[160px]"
            />
          </Link>
        </div>
        <div className="flex gap-[20px] text-[#3E3E3E] text-xl font-bold xl:gap-[32px] font-roboto uppercase">
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
