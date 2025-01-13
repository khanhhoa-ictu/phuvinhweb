"use client";
import { Button, Input, Modal } from "antd";
import { useState } from "react";
import styles from "./styles.module.scss";
import { addCategory } from "@/service/catygory";
import { handleErrorMessage } from "@/common";

function AddCategory() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [nameCategory, setNameCategory] = useState("");
  const handleCancelModal = () => {
    setIsModalVisible(false);
    setNameCategory("");
  };

  const handleSubmit = async () => {
    if (!nameCategory) return;
    try {
      await addCategory({ name: nameCategory });
      setIsModalVisible(false);
      setNameCategory("");
    } catch (error) {
      handleErrorMessage(error);
    }
  };

  return (
    <div>
      <Button onClick={() => setIsModalVisible(true)} className="!bg-[#5643e7]">
        Thêm danh mục sản phẩm
      </Button>

      <Modal
        title="Thêm danh mục mới"
        visible={isModalVisible}
        onOk={handleSubmit}
        onCancel={handleCancelModal}
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
    </div>
  );
}

export default AddCategory;
