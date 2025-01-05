"use client";
import { Button } from "antd";
import React from "react";
import styles from "./styles.module.scss";

function AddProduct() {
  return (
    <div>
      <Button
        onClick={() => setIsModalVisible(true)}
        className="!bg-[#5643e7]"
      >
        Thêm sản phẩm
      </Button>
    </div>
  );
}

export default AddProduct;
