"use client";
import {
  HomeOutlined,
  ReadOutlined,
  SettingOutlined,
  TableOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import styles from "./styles.module.scss";
import { usePathname } from "next/navigation";

export default function SideNav() {
  const pathname = usePathname();
  const routes = [
    {
      key: "1",
      text: "Manager",
      url: "/admin",
      icon: <HomeOutlined />,
    },
    {
      key: "2",
      text: "Sản Phẩm",
      url: "/admin/product",
      icon: <TableOutlined />,
    },
    {
      key: "3",
      text: "Bài viết",
      url: "/admin/post",
      icon: <UserOutlined />,
    },
    {
      key: "4",
      text: "Danh mục sản phẩm",
      url: "/admin/category",
      icon: <ReadOutlined />,
    },
  ];

  return (
    <div className={`${styles.sideNav}`}>
      <Link className={styles.logo} href="/">
        HOME
      </Link>
      <div className="flex flex-col gap-5 font-medium text-base">
        {routes.map((route) => {
          return (
            <Link
             href={route.url}
              key={route.key}
              className={`px-5 py-4 flex gap-2 ${pathname === route.url && "bg-[#e1e9ff] text-[#261797]"}`}
            >
              <p
                className={`flex-shrink-0 w-5 h-5 text-base ${pathname === route.url && "font-bold !text-xl"}`}
              >
                {route.icon}
              </p>

              <p
                className={`font-medium font-montserrat flex items-center ${pathname === route.url && "!font-semibold"}`}
              >
                {route.text}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
