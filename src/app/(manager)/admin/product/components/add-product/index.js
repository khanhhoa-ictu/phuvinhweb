'use client'
import { Button } from "antd";
import React from "react";
import styles from "./styles.module.scss";

function AddProduct() {
  return (
    <div>
      <Button className={styles.add} onClick={() => setIsModalVisible(true)}>
        Thêm sản phẩm
      </Button>
    </div>
  );
}

export default AddProduct;
