"use client";
import { Button, Input, Modal } from "antd";
import { useState } from "react";
import styles from "./styles.module.scss";

function AddCategory() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [nameCategory, setNameCategory] = useState("");
  const handleCancelModal = () => {
    setIsModalVisible(false);
    setNameCategory("");
  };

  const handleSubmit = () => {
    console.log(nameCategory);
  };

  return (
    <div>
      <Button onClick={() => setIsModalVisible(true)} className="!bg-[#5643e7]">
        Thêm sản phẩm
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
