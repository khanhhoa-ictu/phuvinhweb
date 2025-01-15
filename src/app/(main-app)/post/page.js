import React from "react";
import background from "@/assets/image/post/background.png";
import Image from "next/image";
import PostItem from "./PostItem";
import CustomPagination from "@/components/pagination";
import { getListPost } from "@/service/post";

export const metadata = {
  title: "Tin Tức Mới Nhất Về Ngành Thép",
  description:
    "Cập nhật tin tức mới nhất về ngành thép, giá thép, xu hướng thị trường và các sản phẩm thép chất lượng cao tại Ống Thép Phú Vinh. Đón đọc để nắm bắt thông tin chính xác và hữu ích!",
};

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
      <div className="flex flex-col gap-10 max-w-[1200px] mx-auto mt-20 px-4 lg:px-10">
        {listPost.map((item) => {
          return (
            <PostItem
              key={item.id}
              image={item.thumbnail}
              date={item.date}
              title={item.title}
              summary={item.summary}
              id={item.id}
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
