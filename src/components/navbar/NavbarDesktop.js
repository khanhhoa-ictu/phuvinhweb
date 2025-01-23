"use client";
import logo from "@/assets/logo/logo.png";
import { listMenu } from "@/common/constant";
import { Button, Dropdown, Menu } from "antd";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import noAvatar from "@/assets/image/no-avatar.png";
import { handleErrorMessage } from "@/common";
import { logoutServer } from "@/service/auth";

function NavbarDesktop() {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const [isLogin, setIsLogin] = useState(false);

  const logout = async () => {
    try {
      await logoutServer(true);
      localStorage.removeItem("token");
      router.push("/login");
    } catch (error) {
      handleErrorMessage(error);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLogin(true);
    }
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

  useEffect(() => {
    setIsScrolled(false);
  }, [pathname]);

  const menu = (
    <Menu style={{ minWidth: 220 }}>
      <Menu.Item key="1">
        <Link href="/admin">quản lý</Link>
      </Menu.Item>
      <Menu.Item key="2" onClick={logout}>
        đăng xuất
      </Menu.Item>
    </Menu>
  );
  return (
    <div
      className={`flex justify-between px-[30px] items-center xl:px-[70] py-4 ${
        isScrolled ? "bg-white" : "bg-transparent"
      }`}
    >
      <div className="flex gap-[45px] items-center">
        <div className="flex-shrink-0">
          <Link
            href="/"
            className="flex flex-col items-center justify-center gap-[5px]"
          >
            <Image
              src={logo}
              width={423}
              height={249}
              alt="logo"
              className="w-[100px] h-[60px]"
            />
            <h1 className="uppercase text-base font-roboto font-bold text-[#261797]">
              Phu Vinh Steel
            </h1>
          </Link>
        </div>
        <div className="flex gap-[20px] text-[#261797] text-xl font-bold xl:gap-[32px] font-roboto uppercase">
          {listMenu.map((item) => (
            <Link
              href={item.baseURL}
              key={item.title}
              className={`${pathname.includes(item.href) && "underline"}`}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex gap-[16px] items-center xl:[gap-27px]">
        {isLogin ? (
          <div className={styles.headerControl}>
            <div className={styles.menuWrapperControl}>
              <div className={styles.menuControlItem}>
                <Dropdown overlay={menu} trigger={["click"]}>
                  <div className={styles.avatar}>
                    <Image src={noAvatar} alt="avatar" height={40} width={40} />
                  </div>
                </Dropdown>
              </div>
            </div>
          </div>
        ) : (
          <Link className="w-fit" href="/login">
            <Button className="!rounded-[50px] text-base font-semibold !font-sourceSanPro">
              <span className="px-3">Log in</span>
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default NavbarDesktop;
