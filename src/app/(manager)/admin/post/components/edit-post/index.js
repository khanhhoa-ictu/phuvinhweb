"use client";
import { Form, Input, Modal, Select } from "antd";
import { useForm } from "antd/lib/form/Form";
import TextArea from "antd/lib/input/TextArea";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { handleErrorMessage } from "@/common";
import { getPostDetail } from "@/service/post";

function EditPost({ isModalVisible, handleOk, handleCancel, id }) {
  const TextEditor = dynamic(() => import("@/components/text-editor"), {
    ssr: false,
  });
  const [form] = useForm();
  const [data, setData] = useState();

  const handleCancelModal = () => {
    handleCancel();
  };

  const handleSubmit = (payload) => {
    handleOk(payload);
  };

  useEffect(() => {
    const loadPostDetail = async () => {
      try {
        const res = await getPostDetail(id);
        setData(res?.payload?.data);
      } catch (error) {
        handleErrorMessage(error);
      }
    };
    loadPostDetail();
  }, []);

  useEffect(() => {
    if (data <= 0) return;
    form.setFieldsValue(data);
  }, [data]);

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
          <label>thumbnail</label>
          <Form.Item name="thumbnail">
            <Input type="text" />
          </Form.Item>
        </div>
      </Form>
    </Modal>
  );
}

export default EditPost;
