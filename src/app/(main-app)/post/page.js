import React from "react";
import background from "@/assets/image/post/background.png";
import Image from "next/image";
import PostItem from "./PostItem";
import CustomPagination from "@/components/pagination";
import { getListPost } from "@/service/post";

async function PostPage({ searchParams }) {
  const currentPage = Number(searchParams.page) || 1;
  const pageSize = 10;
  const data = await getListPost(currentPage, pageSize);
  const listPost = data.payload.data?.listPost || [];

  return (
    <div className="flex-1 pb-20">
      <div className="relative">
        <Image
          src={background}
          width={1487}
          height={283}
          className="w-full h-auto max-h-[260px]"
          alt="background"
        />
        <h1 className="uppercase sm:text-[32px] text-xl font-bold absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
          Tin tức
        </h1>
      </div>
      <div className="flex flex-col gap-10 max-w-[1200px] mx-auto mt-20">
        {listPost.map((item) => {
          return (
            <PostItem
              key={item.id}
              image={item.thumbnail}
              date={item.date}
              title={item.title}
              summary={item.summary}
            />
          );
        })}
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

export default PostPage;
