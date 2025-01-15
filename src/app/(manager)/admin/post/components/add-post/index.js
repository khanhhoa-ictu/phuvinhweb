"use client";
import { Button, Checkbox, Form, Input, Modal, Select } from "antd";
import { useForm } from "antd/lib/form/Form";
import TextArea from "antd/lib/input/TextArea";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import styles from "./styles.module.scss";
import {
  handleErrorMessage,
  handleSuccessMessage,
  isValidateFile,
} from "@/common";
import { addPost } from "@/service/post";
import { PlusOutlined } from "@ant-design/icons";
import closeIcon from "@/assets/icon/close-icon.svg";
import Image from "next/image";
import { uploadFile } from "@/service/image";

function AddPost() {
  const router = useRouter();
  const TextEditor = dynamic(() => import("@/components/text-editor"), {
    ssr: false,
  });
  const [form] = useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [preview, setPreview] = useState(null);
  const [currentImage, setCurrentImage] = useState(null);
  const imageRef = useRef(null);
  const onChangeEditor = (event, editor) => {
    const data = editor.getData();
    form.setFieldsValue({
      content: data,
    });
  };
  const handleCancelModal = () => {
    setPreview("");
    setCurrentImage(null);
    imageRef.current.value = "";
    setIsModalVisible(false);
  };
  const handleSubmit = async (payload) => {
    const data = new FormData();
    data.append("file-image", currentImage);
    if (!currentImage) {
      handleErrorMessage("Vui lòng cung cấp hình ảnh");
      return;
    }
    try {
      const thumbnail = await uploadFile(data);
      await addPost({
        ...payload,
        is_homepage:
        payload.is_homepage === "undefined" ? false : payload.is_homepage,
        thumbnail: thumbnail.payload?.url,
      });
      router.refresh();
      setIsModalVisible(false);
      handleSuccessMessage("Thêm bài viết thành công");
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

  return (
    <div>
      <Button onClick={() => setIsModalVisible(true)} className="!bg-[#5643e7]">
        Thêm bài viết
      </Button>
      <Modal
        title="Thêm bài viết"
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
              <TextEditor onChange={onChangeEditor} />
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
    </div>
  );
}

export default AddPost;
