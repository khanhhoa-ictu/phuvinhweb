"use client";
import { Button, Input, Modal } from "antd";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { addCategory, getCategoryDetail } from "@/service/catygory";
import { handleErrorMessage } from "@/common";

function EditCategory({ isModalVisible, handleOk, handleCancel, id }) {
  const [nameCategory, setNameCategory] = useState("");

  const handleSubmit = () => {
    handleOk({ name: nameCategory });
  };
  const getCategory = async () => {
    try {
      const data = await getCategoryDetail(id);
      setNameCategory(data?.payload?.data?.name);
      console.log(data);
    } catch (error) {
      handleErrorMessage(error);
    }
  };

  useEffect(() => {
    if (isModalVisible) {
      getCategory();
    } else {
      setNameCategory("");
    }
  }, [isModalVisible]);

  return (
    <Modal
      title="Thêm danh mục mới"
      visible={isModalVisible}
      onOk={handleSubmit}
      onCancel={handleCancel}
      wrapClassName={styles.wrapperModal}
    >
      <div className={styles.fromItem}>
        <Input
          placeholder="Tên danh mục"
          value={nameCategory}
          onChange={(e) => setNameCategory(e.target.value)}
          autoFocus
        />
      </div>
    </Modal>
  );
}

export default EditCategory;
