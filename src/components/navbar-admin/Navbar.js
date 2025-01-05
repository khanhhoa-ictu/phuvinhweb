import {
  HomeOutlined,
  ReadOutlined,
  SettingOutlined,
  TableOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import styles from "./styles.module.scss";

export default function SideNav() {
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
      <div className="flex flex-col gap-5 font-medium text-base" >
        {routes.map((route) => {
          return (
            <div key={route.key} className="flex gap-2">
              <span className="flex-shrink-0 w-5 h-5 text-base" >{route.icon}</span>
              <Link href={route.url} className="font-medium font-montserrat" >{route.text}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
