"use client";
import { Button, Form, Input, Modal, Select } from "antd";
import React, { useRef, useState } from "react";
import styles from "./styles.module.scss";
import { useForm } from "antd/es/form/Form";
import Image from "next/image";
import closeIcon from "@/assets/icon/close-icon.svg";
import { PlusOutlined } from "@ant-design/icons";

function AddProduct() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = useForm();
  const [preview, setPreview] = useState(null);
  const imageRef = useRef(null);

  const handleCancelModal = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  const handleChangeFile = (event) => {
    const file = event.target.files?.[0]; // Lấy file đầu tiên từ input
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        console.log(reader.result);
        setPreview(reader.result); // Cập nhật state với chuỗi base64
      };
      reader.readAsDataURL(file); // Đọc file dưới dạng chuỗi base64
    }
  };
  const deleteFile = () => {
    setPreview("");
    imageRef.current.value = "";
  };

  return (
    <div>
      <Button onClick={() => setIsModalVisible(true)} className="!bg-[#5643e7]">
        Thêm sản phẩm
      </Button>

      <Modal
        title="Thêm sản phẩm mới"
        visible={isModalVisible}
        onOk={() => form.submit()}
        onCancel={handleCancelModal}
        wrapClassName={styles.wrapperModal}
      >
        <Form form={form} onFinish={handleSubmit}>
          <div className={styles.fromItem}>
            <Form.Item name="title">
              <Input placeholder="Tên sản phẩm" />
            </Form.Item>
          </div>

          <div className={styles.fromItem}>
            <Form.Item name="category_id">
              <Select placeholder="Lựa chọn danh mục sản phẩm">
                <Select.Option value={1}>html-css</Select.Option>
                <Select.Option value={2}>javascript</Select.Option>
                <Select.Option value={3}>reactJs</Select.Option>
              </Select>
            </Form.Item>
          </div>
        </Form>
        {preview ? (
          <div className="w-[150px] h-[150px] relative">
            <span
              className="absolute top-[-12px] right-[-12px] z-10 bg-[#e3e3e3] rounded-full"
              onClick={deleteFile}
            >
              <Image
                src={closeIcon}
                className="cursor-pointer"
                width={24}
                height={24}
              />
            </span>
            <img src={preview} className="w-full h-full object-cover" />
          </div>
        ) : (
          <div
            className="w-[150px] h-[150px] border border-[#929292] rounded-lg flex items-center justify-center cursor-pointer border-dashed"
            onClick={() => imageRef.current.click()}
          >
            <PlusOutlined className="text-[40px]" />
          </div>
        )}

        <input
          type="file"
          onChange={handleChangeFile}
          accept="image/*"
          ref={imageRef}
          className="hidden"
        />
      </Modal>
    </div>
  );
}

export default AddProduct;
