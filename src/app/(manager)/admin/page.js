import { getListPost } from "@/service/post";
import { getListProduct } from "@/service/product";
import { EditOutlined, DollarOutlined, UserOutlined } from "@ant-design/icons";
import DashCount from "./components/DashCount";

async function Manager() {
  const currentPage = 1;
  const pageSize = 9999;
  const dataPost = await getListPost(currentPage, pageSize);
  const dataProduct = await getListProduct(currentPage, pageSize);

  const listPost = dataPost.payload.data?.listPost || [];
  const products = dataProduct.payload.data?.products;

  const listDash = [
    {
      count: 1,
      title: "Người dùng",
      icon: <UserOutlined />,
      backgroundColor: "#FF9F43",
    },
    {
      count: listPost?.length,
      title: "Bài viết",
      icon: <EditOutlined />,
      backgroundColor: "#28C76F",
    },
    {
      count: products?.length,
      title: "Sản phẩm",
      icon: <DollarOutlined />,
      backgroundColor: "#00CFE8",
    },
  ];

  return (
    <div className="flex-1">
      <div className="flex mt-20 px-10">
        {listDash.map((item, key) => {
          return <DashCount item={item} key={key} />;
        })}
      </div>
    </div>
  );
}

export default Manager;
