"use client";
import CustomModal from "@/components/modal/CustomModal";
import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { handleErrorMessage } from "@/common";
import { deleteProduct, editProduct } from "@/service/product";
import EditProduct from "../edit-product";
import { getListCategory } from "@/service/catygory";
import { CheckCircleOutlined } from "@ant-design/icons";

function ProductItem({ product }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState({
    edit: false,
    delete: false,
  });

  const handleOkDelete = async () => {
    setLoading(true);
    try {
      await deleteProduct(product.id);
      router.refresh();
    } catch (error) {
      handleErrorMessage(error);
    } finally {
      setIsOpenModal({ ...isOpenModal, delete: false });
      setLoading(false);
    }
  };

  const handleOkEdit = async (data) => {
    let newData = { ...data, id: product.id };
    setLoading(true);

    try {
      await editProduct(newData);
      router.refresh();
      setIsOpenModal({ ...isOpenModal, edit: false });
    } catch (error) {
      handleErrorMessage(error);
    }finally{
      setLoading(false);
    }
  };

  const getCategory = async () => {
    try {
      const data = await getListCategory(1);
      const listCategory = data.payload.data?.listPost;
      setCategory(listCategory);
    } catch (error) {}
  };
  useEffect(() => {
    getCategory();
  }, []);

  return (
    <tr>
      <td className="text-center">{product.name}</td>
      <td className="text-center">
        {category.find((item) => item.id === product.category_id)?.name}
      </td>
      <td className="text-center">
        {product.is_homepage ? (
          <CheckCircleOutlined className="text-xl [&_svg]:fill-[#0f630c]" />
        ) : (
          ""
        )}
      </td>
      <td>
        <div className="text-center">
          <Button
            className="!bg-[#5643e7]"
            onClick={() => setIsOpenModal({ ...isOpenModal, edit: true })}
          >
            update
          </Button>
          <Button
            className="!bg-white !text-red-600 !border-red-600 ml-3"
            onClick={() => setIsOpenModal({ ...isOpenModal, delete: true })}
          >
            delete
          </Button>
        </div>
      </td>
      <CustomModal
        isOpen={isOpenModal.delete}
        handleOk={handleOkDelete}
        handleCancel={() => setIsOpenModal({ ...isOpenModal, delete: false })}
        title={"Xóa bài viết"}
        loading={loading}
      >
        Bạn có muốn xóa bài viết không
      </CustomModal>
      {isOpenModal.edit && (
        <EditProduct
          isModalVisible={isOpenModal.edit}
          handleOk={handleOkEdit}
          handleCancel={() => setIsOpenModal({ ...isOpenModal, edit: false })}
          id={product.id}
        />
      )}
    </tr>
  );
}

export default ProductItem;
