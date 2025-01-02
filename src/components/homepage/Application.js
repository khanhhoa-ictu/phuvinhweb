import React from "react";
import ApplicationItem from "./ApplicationItem";
import icon1 from "@/assets/icon/1.svg";
import icon2 from "@/assets/icon/2.svg";
import icon3 from "@/assets/icon/3.svg";
import icon4 from "@/assets/icon/4.svg";

function Application() {
  const listApplication = [
    {
      id: 1,
      image: icon1,
      title: "Xây dựng công nghiệp - dân dụng",
      content:
        "Thép ống Phú Vinh có mặt trong các công trình với quy mô từ lớn đến nhỏ trên khắp mọi miền Tổ quốc",
    },
    {
      id: 2,
      image: icon2,
      title: "Thủ công mỹ nghệ",
      content:
        "Phú Vinh đóng góp lớn cho chuỗi cung ứng của các ngành nghề thủ công mỹ nghệ thông qua dây chuyền sản xuất",
    },
    {
      id: 3,
      image: icon3,
      title: "Trang trí nội - ngoại thất",
      content:
        "Thép có tính ứng dụng cao, đàn hồi tốt, được sử dụng trong các dự án trang trí nội - ngoại thất",
    },
    {
      id: 4,
      image: icon4,
      title: "Điện cơ - cơ khí chính xác - dập tạo hình",
      content:
        "Thép ống Phú Vinh đóng góp cho hoạt động chế tạo điện cơ, cơ khí chính xác và các sản phẩm dập tạo hình.",
    },
  ];
  return (
    <div className="bg-[#edf0f2]" >
      <div className="px-6 py-10 sm:px-20 sm:py-[30px] lg:py-[60px] 2xl:px-0  flex flex-col lg:flex-row gap-4 max-w-[1200px] mx-auto">
        <div className="mb-5 w-full lg:w-[50%] lg:pr-6 flex items-center">
          <div className=" flex flex-col gap-[10px]">
            <p className="text-sm font-bold">ứng dụng của thép minh ngọc</p>
            <h3 className="text-[30px] font-bold uppercase lg:text-[38px]">
              Ứng Dụng Của Thép Trong Cở Sở Hạ Tầng Và Trong Xây Dựng
            </h3>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-10 gap-y-10 lg:gap-x-5 lg:gap-y-10 sm:grid-cols-2 w-full lg:w-[50%]">
          {listApplication.map((item) => {
            return (
              <ApplicationItem
                key={item.id}
                icon={item.image}
                title={item.title}
                content={item.content}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Application;
