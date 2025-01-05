"use client";
import { Button } from "antd";
import React from "react";

function AddCategory() {
  return (
    <div>
      <Button
        onClick={() => setIsModalVisible(true)}
        className="!bg-[#5643e7]"
      >
        Thêm danh mục sản phẩm
      </Button>
    </div>
  );
}

export default AddCategory;
