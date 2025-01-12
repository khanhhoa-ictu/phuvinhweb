import React from "react";
import AddPost from "./components/add-post";
import TablePost from "./components/table-post";
import { getListPost } from "@/service/post";

async function Post({searchParams}) {
    const data = await getListPost(Number(searchParams.page));
    const payload = data.payload.data?.listPost
  return (
    <div className="flex-1 mt-10 px-10">
      <div className="max-w-[1200px] mx-auto" >
        <h1 className="text-[32px] uppercase text-center mb-10 font-semibold">
          Quản lý bài viết
        </h1>
        <div className="flex justify-end">
          <AddPost />
        </div>
        <TablePost dataSource={payload} />
      </div>
    </div>
  );
}

export default Post;
