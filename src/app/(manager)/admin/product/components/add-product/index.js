"use client";
import { Button, Checkbox, Form, Input, Modal, Select } from "antd";
import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import { useForm } from "antd/es/form/Form";
import Image from "next/image";
import closeIcon from "@/assets/icon/close-icon.svg";
import { PlusOutlined } from "@ant-design/icons";
import { getListCategory } from "@/service/catygory";
import {
  handleErrorMessage,
  handleSuccessMessage,
  isValidateFile,
} from "@/common";
import dynamic from "next/dynamic";
import { addProduct } from "@/service/product";
import { uploadFile } from "@/service/image";

function AddProduct() {
  const TextEditor = dynamic(() => import("@/components/text-editor"), {
    ssr: false,
  });
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = useForm();
  const [preview, setPreview] = useState(null);
  const imageRef = useRef(null);
  const [category, setCategory] = useState([]);
  const [currentImage, setCurrentImage] = useState(null);

  const onChangeEditor = (event, editor) => {
    const data = editor.getData();
    form.setFieldsValue({
      description: data,
    });
  };

  const handleCancelModal = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  const handleSubmit = async (values) => {
    const data = new FormData();
    data.append("file-image", currentImage);
    if (!currentImage) {
      handleErrorMessage("Vui lòng cung cấp hình ảnh");
      return;
    }
    try {
      const thumbnail = await uploadFile(data);
      await addProduct({
        ...values,
        is_homepage:
          values.is_homepage === "undefined" ? false : values.is_homepage,
        thumbnail: thumbnail.payload?.url,
      });
      setIsModalVisible(false);
      handleSuccessMessage("Thêm sản phẩm thành công");
    } catch (error) {
      handleErrorMessage(error);
    }
  };

  const handleChangeFile = (event) => {
    const file = event.target.files?.[0]; 
    setCurrentImage(file);
    if (!isValidateFile(file)) {
      handleErrorMessage("File phải là hình ảnh và nhỏ hơn 5M");
      return;
    }
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result); 
      };
      reader.readAsDataURL(file); 
    }
  };
  const deleteFile = () => {
    setPreview("");
    setCurrentImage(null);
    imageRef.current.value = "";
  };

  const getCategory = async () => {
    try {
      const data = await getListCategory(1);
      const payload = data.payload.data?.listPost;
      setCategory(payload);
    } catch (error) {
      handleErrorMessage(error);
    }
  };

  useEffect(() => {
    if (isModalVisible) {
      getCategory();
    }
  }, [isModalVisible]);

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
            <Form.Item name="name">
              <Input placeholder="Tên sản phẩm" />
            </Form.Item>
          </div>

          <div className={styles.fromItem}>
            <Form.Item name="category_id">
              <Select placeholder="Lựa chọn danh mục sản phẩm">
                {category.map((item) => {
                  return (
                    <Select.Option key={item.id} value={item.id}>
                      {item.name}
                    </Select.Option>
                  );
                })}
              </Select>
            </Form.Item>
          </div>
          <div className={styles.fromItem}>
            <label>Nội dung sản phẩm</label>
            <Form.Item name="description">
              <TextEditor onChange={onChangeEditor} />
            </Form.Item>
          </div>
          <div className={styles.fromItem}>
            <Form.Item name="is_homepage" valuePropName="checked" label={null}>
              <Checkbox>Hiển thị sản phẩm ra trang chủ</Checkbox>
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
