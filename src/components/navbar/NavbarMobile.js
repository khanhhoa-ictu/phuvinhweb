"use client";
import logo from "@/assets/logo/logo.jpg";
import { isClient } from "@/common";
import { listMenu } from "@/common/constant";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import arrowRight from "../../assets/icon/arrow-right.svg";
import closeIcon from "../../assets/icon/close-icon.svg";
import menuIcon from "../../assets/icon/menu-icon.svg";
import styles from "./styles.module.scss";
import Image from "next/image";

function NavbarMobile() {
  const [showNav, setShowNav] = useState(false);
  const toggleContainer = useRef(null);
  useEffect(() => {
    if (!isClient) return;
    window.addEventListener("click", onClickOutsideHandler);
    return () => window.removeEventListener("click", onClickOutsideHandler);
  }, []);

  const onClickOutsideHandler = (event) => {
    if (!toggleContainer.current.contains(event.target)) {
      setShowNav(false);
    }
  };

  return (
    <div ref={toggleContainer} className="block lg:hidden">
      {showNav && (
        <div
          className="top-0 left-0 right-0 bottom-0 fixed bg-[#181b2099] z-20 backdrop-filter-blur-[5px]"
          onClick={() => setShowNav(false)}
        ></div>
      )}

      <div
        className={`${styles.mobileNavigation} ${showNav && styles.showNav}`}
      >
        <div className={styles.mobileMainNav}>
          <div className="mt-[36px] flex justify-between w-full">
            <h2 className="text-[#2C2C2C] font-bold text-base font-montserrat">
              Menu
            </h2>
            <Image
              src={closeIcon}
              alt="close-icon"
              onClick={() => setShowNav(false)}
              className="cursor-pointer"
            />
          </div>
          <ul className="font-montserrat mt-[61px] w-full">
            {listMenu.map((item) => (
              <li className="w-full flex justify-between" key={item.title}>
                <Link
                  className="text-[#2C2C2C] text-[20px] font-medium"
                  href={item.href}
                  onClick={() => setShowNav(false)}
                >
                  {item.title}
                </Link>
                <Image
                  src={arrowRight}
                  width={24}
                  height={24}
                  alt="arrow-right"
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="px-[22px]">
          <div className="flex justify-between items-center">
            <div>
              <Link href="/">
                <Image src={logo} alt="logo" width={479} height={479} className="w-[80px] h-[80px]" />
              </Link>
            </div>

            <div
              className="cursor-pointer"
              onClick={() => setShowNav(!showNav)}
            >
              <Image src={menuIcon} alt="menu-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavbarMobile;
