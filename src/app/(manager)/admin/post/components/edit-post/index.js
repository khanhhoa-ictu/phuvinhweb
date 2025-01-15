"use client";
import { Checkbox, Form, Input, Modal, Select } from "antd";
import { useForm } from "antd/lib/form/Form";
import TextArea from "antd/lib/input/TextArea";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import {
  handleErrorMessage,
  handleSuccessMessage,
  isValidateFile,
} from "@/common";
import { getPostDetail } from "@/service/post";
import Image from "next/image";
import { PlusOutlined } from "@ant-design/icons";
import closeIcon from "@/assets/icon/close-icon.svg";
import { uploadFile } from "@/service/image";

function EditPost({ isModalVisible, handleOk, handleCancel, id }) {
  const TextEditor = dynamic(() => import("@/components/text-editor"), {
    ssr: false,
  });
  const [form] = useForm();
  const [data, setData] = useState();
  const [preview, setPreview] = useState(null);
  const [currentImage, setCurrentImage] = useState(null);
  const imageRef = useRef(null);
  const [isChangeFile, setIsChangeFile] = useState(false);
  const handleCancelModal = () => {
    setIsChangeFile(false);
    handleCancel();
  };

  const handleSubmit = async (payload) => {
    let thumbnail = "";
    if (!isChangeFile) {
      thumbnail = data?.thumbnail;
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
        ...payload,
        is_homepage:
          payload.is_homepage === "undefined" ? false : payload.is_homepage,
        thumbnail: thumbnail,
      });
      handleSuccessMessage("Cập nhật bài viết thành công");
    } catch (error) {
      handleErrorMessage(error);
    }
  };

  useEffect(() => {
    const loadPostDetail = async () => {
      try {
        const res = await getPostDetail(id);
        setData(res?.payload?.data);
        setPreview(res?.payload?.data?.thumbnail);
      } catch (error) {
        handleErrorMessage(error);
      }
    };
    loadPostDetail();
  }, [id]);

  useEffect(() => {
    if (data <= 0) return;
    form.setFieldsValue(data);
  }, [form, data]);

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
    setIsChangeFile(true);
    imageRef.current.value = "";
  };

  const onChangeEditor = (event, editor) => {
    const data = editor.getData();
    form.setFieldsValue({
      content: data,
    });
  };

  return (
    <Modal
      title="Chỉnh sửa bài viết"
      visible={isModalVisible}
      onOk={() => form.submit()}
      onCancel={handleCancelModal}
      wrapClassName={styles.wrapperModal}
    >
      <Form form={form} onFinish={handleSubmit}>
        <div className={styles.fromItem}>
          <label>tiêu đề</label>
          <Form.Item name="title">
            <Input />
          </Form.Item>
        </div>
        <div className={styles.fromItem}>
          <label>Nội dung bài viết</label>
          <Form.Item name="content">
            <TextEditor onChange={onChangeEditor} data={data?.content} />
          </Form.Item>
        </div>
        <div className={styles.fromItem}>
          <label>Nội dung tóm tắt</label>
          <Form.Item name="summary">
            <TextArea />
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
        className="!hidden"
      />
    </Modal>
  );
}

export default EditPost;
