"use client";
import { Button, Form, Input, Modal, Select } from "antd";
import { useForm } from "antd/lib/form/Form";
import TextArea from "antd/lib/input/TextArea";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./styles.module.scss";
import { handleErrorMessage } from "@/common";

const { Option } = Select;
function AddPost() {
  const router = useRouter()
//   const TextEditor = dynamic(() => import("@/components/text-editor"), {
//     ssr: false,
//   });
  const [form] = useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const onChangeEditor = (event, editor) => {

    const data = editor.getData();
    form.setFieldsValue({
      content: data,
    });
  };
  const handleCancelModal = () => {
    setIsModalVisible(false);
  };
  const handleSubmit = async (payload) => {
    try {
    //   await addPost(payload);
      router.refresh()
      setIsModalVisible(false);
    } catch (error) {
      handleErrorMessage(error);
    }
  };

  return (
    <div>
      <Button className={styles.add} onClick={() => setIsModalVisible(true)}>
        Thêm bài viết
      </Button>
      <Modal
        title="Add post"
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
            {/* <Form.Item name="content">
              <TextEditor onChange={onChangeEditor} />
            </Form.Item> */}
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
          <div className={styles.fromItem}>
            <label>slug</label>
            <Form.Item name="slug">
              <Input type="text" />
            </Form.Item>
          </div>

          <div className={styles.fromItem}>
            <label>thể loại</label>
            <Form.Item name="category_id">
              <Select>
                <Option value={1}>html-css</Option>
                <Option value={2}>javascript</Option>
                <Option value={3}>reactJs</Option>
              </Select>
            </Form.Item>
          </div>
        </Form>
      </Modal>
    </div>
  );
}

export default AddPost;
