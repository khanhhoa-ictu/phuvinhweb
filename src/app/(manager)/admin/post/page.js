import React from "react";
import AddPost from "./components/add-post";
import TablePost from "./components/table-post";

function Post() {
    const payload = [
        {
            id: 1,
            title:'bai viet 1'
        },
        {
            id: 2,
            title:'bai viet 2'
        }
    ]
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
