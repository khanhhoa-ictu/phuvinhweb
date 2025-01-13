import React from "react";
import AddPost from "./components/add-post";
import TablePost from "./components/table-post";
import { getListPost } from "@/service/post";
import CustomPagination from "@/components/pagination";

async function Post({ searchParams }) {
  const currentPage = Number(searchParams.page) || 1;
  const pageSize = 10;
  const data = await getListPost(currentPage, pageSize);
  const payload = data.payload.data?.listPost;
  return (
    <div className="flex-1 mt-10 px-10">
      <div className="max-w-[1200px] mx-auto">
        <h1 className="text-[32px] uppercase text-center mb-10 font-semibold">
          Quản lý bài viết
        </h1>
        <div className="flex justify-end">
          <AddPost />
        </div>
        <TablePost dataSource={payload} />
      </div>
      <div className="flex justify-center mt-[100px] relative z-10">
        <CustomPagination
          currentPage={currentPage}
          totalItems={data.payload.data?.total}
          pageSize={pageSize}
        />
      </div>
    </div>
  );
}

export default Post;
