"use client";
import CustomModal from "@/components/modal/CustomModal";
import { Button } from "antd";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { handleErrorMessage } from "@/common";
import { deletePost, editPost } from "@/service/post";
import EditPost from "../edit-post";



function PostItem({post}) {
  const router = useRouter()
  const [isOpenModal, setIsOpenModal] = useState({
    edit: false,
    delete: false,
  });
  const [loading, setLoading] = useState(false);
  const handleOkDelete = async () => {
    setLoading(true);
    try {
      await deletePost(post.id);
      router.refresh()
    } catch (error) {
      handleErrorMessage(error);
    } finally {
      setIsOpenModal({ ...isOpenModal, delete: false });
      setLoading(false);
    }
  };

  const handleOkEdit = async (data) => {
    let newData = { ...data, id: post.id };

    try {
      setLoading(true);
      await editPost(newData);
      router.refresh()
      setIsOpenModal({ ...isOpenModal, edit: false });
    } catch (error) {
      handleErrorMessage(error);
    }
  };

  return (
    <tr>
      <td className="text-center">{post.title}</td>

      <td>
        <div className="text-center">
          <Button
             className="!bg-[#5643e7]"
            onClick={() => setIsOpenModal({ ...isOpenModal, edit: true })}
          >
            update
          </Button>
          <Button
            className="!bg-white !text-red-600 !border-red-600 ml-3"
            onClick={() => setIsOpenModal({ ...isOpenModal, delete: true })}
          >
            delete
          </Button>
        </div>
      </td>
      <CustomModal
        isOpen={isOpenModal.delete}
        handleOk={handleOkDelete}
        handleCancel={() => setIsOpenModal({ ...isOpenModal, delete: false })}
        title={"Xóa bài viết"}
        loading={loading}
      >
        Bạn có muốn xóa bài viết không
      </CustomModal>
      {isOpenModal.edit && (
        <EditPost
          isModalVisible={isOpenModal.edit}
          handleOk={handleOkEdit}
          handleCancel={() => setIsOpenModal({ ...isOpenModal, edit: false })}
          id={post.id}
        />
      )}
    </tr>
  );
}

export default PostItem;
