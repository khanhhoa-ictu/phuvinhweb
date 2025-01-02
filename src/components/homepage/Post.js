import React from "react";
import PostItem from "../post/PostItem";

function Post() {
  const listPost = [
    {
      id: 1,
      image:
        "https://minhngocsteel.vn/upload/news/original/thep-minh-ngoc-ruc-ro-chao-don-ngay-phu-nu-viet-nam-20-10-1729668915.jpg",
      date: "20/10/2002",
      title: "test",
      content: "Ngày 04/11/2024, Lễ Công bố sản phẩm đạt Thương hiệu Quốc gia Việt Nam năm 2024 với chủ đề “Vươn mình tiến vào kỷ nguyên Xanh” được diễn ra long trọng tại Trung tâm Hội nghị Quốc gia Việt Nam và được truyền hình trực tiếp trên Đài truyền hình Việt Nam. Công ty TNHH SX&TM Minh Ngọc tự hào là doanh nghiệp có sản phẩm được vinh danh Thương hiệu Quốc gia Việt Nam năm 2024.",
    },
    {
      id: 2,
      image:
        "https://minhngocsteel.vn/upload/news/original/thep-minh-ngoc-ruc-ro-chao-don-ngay-phu-nu-viet-nam-20-10-1729668915.jpg",
      date: "20/10/2002",
      title: "test",
      content: "Ngày 04/11/2024, Lễ Công bố sản phẩm đạt Thương hiệu Quốc gia Việt Nam năm 2024 với chủ đề “Vươn mình tiến vào kỷ nguyên Xanh” được diễn ra long trọng tại Trung tâm Hội nghị Quốc gia Việt Nam và được truyền hình trực tiếp trên Đài truyền hình Việt Nam. Công ty TNHH SX&TM Minh Ngọc tự hào là doanh nghiệp có sản phẩm được vinh danh Thương hiệu Quốc gia Việt Nam năm 2024.",
    },
    {
      id: 3,
      image:
        "https://minhngocsteel.vn/upload/news/original/thep-minh-ngoc-ruc-ro-chao-don-ngay-phu-nu-viet-nam-20-10-1729668915.jpg",
      date: "20/10/2002",
      title: "test",
      content: "Ngày 04/11/2024, Lễ Công bố sản phẩm đạt Thương hiệu Quốc gia Việt Nam năm 2024 với chủ đề “Vươn mình tiến vào kỷ nguyên Xanh” được diễn ra long trọng tại Trung tâm Hội nghị Quốc gia Việt Nam và được truyền hình trực tiếp trên Đài truyền hình Việt Nam. Công ty TNHH SX&TM Minh Ngọc tự hào là doanh nghiệp có sản phẩm được vinh danh Thương hiệu Quốc gia Việt Nam năm 2024.",
    },
  ];
  return (
    <div className="mx-5 py-10 lg:mx-10">
      <h3 className="mb-10 text-[32px] font-bold text-center">tin tức</h3>
      <div className="items-center flex flex-col lg:flex-row lg:mx-auto lg:items-stretch gap-10 md:gap-4 xl:max-w-[1200px] xl:gap-5 relative z-10 lg:justify-between">
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

export default Post;
