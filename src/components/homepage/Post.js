import React from "react";
import PostItem from "../post/PostItem";
import { getListPost } from "@/service/post";

async function Post() {
  const data = await getListPost(1, 10, true);
  const listPost = data?.payload?.data?.listPost;

  return (
    <div className="mx-5 py-10 lg:mx-10">
      <h3 className="text-[32px] font-bold text-center uppercase">tin tức</h3>
      <div className="w-[306px] h-[6px] mx-auto mb-[60px] line relative"></div>
      <div className="items-center flex flex-col lg:flex-row lg:mx-auto lg:items-stretch gap-10 lg:gap-4 xl:max-w-[1200px] relative z-10 lg:justify-between">
        {listPost.map((item) => {
          return (
            <PostItem
              key={item.id}
              image={item.thumbnail}
              date={item.created_at}
              title={item.title}
              summary={item.summary}
              id={item.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Post;
