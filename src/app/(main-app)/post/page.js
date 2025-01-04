import React from "react";
import background from "@/assets/image/post/background.png";
import Image from "next/image";
import PostItem from "./PostItem";
function PostPage() {
  const listPost = [
    {
      id: 1,
      image:
        "https://minhngocsteel.vn/upload/news/original/thep-minh-ngoc-ruc-ro-chao-don-ngay-phu-nu-viet-nam-20-10-1729668915.jpg",
      date: "20/10/2002",
      title: "test",
      content:
        "Ngày 04/11/2024, Lễ Công bố sản phẩm đạt Thương hiệu Quốc gia Việt Nam năm 2024 với chủ đề “Vươn mình tiến vào kỷ nguyên Xanh” được diễn ra long trọng tại Trung tâm Hội nghị Quốc gia Việt Nam và được truyền hình trực tiếp trên Đài truyền hình Việt Nam. Công ty TNHH SX&TM Minh Ngọc tự hào là doanh nghiệp có sản phẩm được vinh danh Thương hiệu Quốc gia Việt Nam năm 2024.",
    },
    {
      id: 2,
      image:
        "https://minhngocsteel.vn/upload/news/original/thep-minh-ngoc-ruc-ro-chao-don-ngay-phu-nu-viet-nam-20-10-1729668915.jpg",
      date: "20/10/2002",
      title: "test",
      content:
        "Ngày 04/11/2024, Lễ Công bố sản phẩm đạt Thương hiệu Quốc gia Việt Nam năm 2024 với chủ đề “Vươn mình tiến vào kỷ nguyên Xanh” được diễn ra long trọng tại Trung tâm Hội nghị Quốc gia Việt Nam và được truyền hình trực tiếp trên Đài truyền hình Việt Nam. Công ty TNHH SX&TM Minh Ngọc tự hào là doanh nghiệp có sản phẩm được vinh danh Thương hiệu Quốc gia Việt Nam năm 2024.",
    },
    {
      id: 3,
      image:
        "https://minhngocsteel.vn/upload/news/original/thep-minh-ngoc-ruc-ro-chao-don-ngay-phu-nu-viet-nam-20-10-1729668915.jpg",
      date: "20/10/2002",
      title: "test",
      content:
        "Ngày 04/11/2024, Lễ Công bố sản phẩm đạt Thương hiệu Quốc gia Việt Nam năm 2024 với chủ đề “Vươn mình tiến vào kỷ nguyên Xanh” được diễn ra long trọng tại Trung tâm Hội nghị Quốc gia Việt Nam và được truyền hình trực tiếp trên Đài truyền hình Việt Nam. Công ty TNHH SX&TM Minh Ngọc tự hào là doanh nghiệp có sản phẩm được vinh danh Thương hiệu Quốc gia Việt Nam năm 2024.",
    },
  ];
  return (
    <div className="flex-1">
      <div className="relative">
        <Image
          src={background}
          width={1487}
          height={283}
          className="w-full h-auto max-h-[260px]"
        />
        <h1 className="uppercase sm:text-[32px] text-xl font-bold absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
          Tin tức
        </h1>
      </div>
      <div className="my-20 flex flex-col gap-6 max-w-[1200px] mx-auto" >
        {listPost.map((item) => {
          return (
            <PostItem
              key={item.id}
              image={item.image}
              date={item.date}
              title={item.title}
              summary={item.content}
            />
          );
        })}
      </div>
    </div>
  );
}

export default PostPage;
