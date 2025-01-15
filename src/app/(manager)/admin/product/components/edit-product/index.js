"use client";
import closeIcon from "@/assets/icon/close-icon.svg";
import { handleErrorMessage, handleSuccessMessage, isValidateFile } from "@/common";
import { getListCategory } from "@/service/catygory";
import { getProductDetail } from "@/service/product";
import { PlusOutlined } from "@ant-design/icons";
import { Checkbox, Form, Input, Modal, Select } from "antd";
import { useForm } from "antd/es/form/Form";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import { uploadFile } from "@/service/image";

function EditProduct({ isModalVisible, handleOk, handleCancel, id }) {
  const TextEditor = dynamic(() => import("@/components/text-editor"), {
    ssr: false,
  });
  const [form] = useForm();
  const [preview, setPreview] = useState(null);
  const imageRef = useRef(null);
  const [category, setCategory] = useState([]);
  const [currentImage, setCurrentImage] = useState(null);
  const [isChangeFile, setIsChangeFile] = useState(false);
  const [productDetail, setProductDetail] = useState(null);
  const onChangeEditor = (event, editor) => {
    const data = editor.getData();
    form.setFieldsValue({
      description: data,
    });
  };

  const handleSubmit = async (values) => {
    let thumbnail = "";
    if (!isChangeFile) {
      thumbnail = productDetail?.thumbnail;
    } else {
      if (!currentImage) {
        handleErrorMessage("Vui lòng cung cấp hình ảnh");
        return;
      }
      const data = new FormData();
      data.append("file-image", currentImage);
      const newThumbnail = await uploadFile(data);
      thumbnail = newThumbnail?.payload?.url;
    }

    try {
      await handleOk({
        ...values,
        is_homepage:
          values.is_homepage === "undefined" ? false : values.is_homepage,
        thumbnail: thumbnail,
      });
      handleSuccessMessage("Cập nhật sản phẩm thành công");
    } catch (error) {
      handleErrorMessage(error);
    }
  };

  const handleChangeFile = (event) => {
    const file = event.target.files?.[0]; // Lấy file đầu tiên từ input
    setCurrentImage(file);
    if (!isValidateFile(file)) {
      handleErrorMessage("File phải là hình ảnh và nhỏ hơn 5M");
      return;
    }
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result); // Cập nhật state với chuỗi base64
      };
      reader.readAsDataURL(file); // Đọc file dưới dạng chuỗi base64
    }
  };
  const deleteFile = () => {
    setPreview("");
    setCurrentImage(null);
    setIsChangeFile(true);
    imageRef.current.value = "";
  };

  const getProduct = async () => {
    try {
      const data = await getListCategory(1);
      const dataProduct = await getProductDetail(id);
      const listCategory = data.payload.data?.listPost;
      setCategory(listCategory);
      form.setFieldsValue(dataProduct?.payload?.data);
      setPreview(dataProduct?.payload?.data?.thumbnail);
      setProductDetail(dataProduct?.payload?.data);
    } catch (error) {
      handleErrorMessage(error);
    }
  };

  useEffect(() => {
    if (isModalVisible) {
      getProduct();
    } else {
      form.resetFields();
      setProductDetail(null);
      setCurrentImage(null);
      setIsChangeFile(false);
    }
  }, [isModalVisible]);

  return (
    <Modal
      title="Thêm sản phẩm mới"
      visible={isModalVisible}
      onOk={() => form.submit()}
      onCancel={handleCancel}
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
            <TextEditor
              onChange={onChangeEditor}
              data={productDetail?.description || ""}
            />
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
              alt="close icon"
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
  );
}

export default EditProduct;
