import React from "react";
import background from "@/assets/image/post/background.png";
import Image from "next/image";
import AboutItem from "./AboutItem";
import tamnhin from "@/assets/image/about/tamnhin-sumenh.jpg";

export const metadata = {
  title: "Giới thiệu - Công ty Thép Phú Vinh",
  description:
    "Công ty Thép Phú Vinh chuyên cung cấp các sản phẩm thép chất lượng cao, uy tín với nhiều năm kinh nghiệm. Tìm hiểu thêm về chúng tôi ngay!",
};

function About() {
  const listAbout = [
    {
      id: 1,
      image:
        "https://minhngocsteel.vn/upload/file/original/2-linh-vuc-hoat-dong-san-pham-1626942558.jpg",
      title: "Lĩnh Vực Hoạt Động - Sản Phẩm",
      content: (
        <p>
          Lĩnh vực hoạt động chính của Công ty TNHH Sản Xuất và Thương Mại Phú
          Vinh là sản xuất và phân phối các loại sản phẩm Ống thép, hộp thép mạ
          kẽm cơ khí (vuông, tròn, chữ nhật), Cuộn tôn mạ kẽm.
        </p>
      ),
    },
    {
      id: 2,
      image:
        "https://minhngocsteel.vn/upload/file/original/2-linh-vuc-hoat-dong-san-pham-1626942558.jpg",
      title: "Trang Thiết Bị - Dây Chuyền Sản Xuất Hiện Đại",
      content: (
        <p>
          Các sản phẩm của Phú Vinh được sản xuất bằng thiết bị công nghệ hiện
          đại với nguồn nguyên liệu sản xuất có chất lượng hàng đầu được nhập
          khẩu từ các nước phát triển. Dây chuyền gia công xử lý thép cuộn Phú
          Vinh cho phép cắt thép phẳng dạng cuộn thành tấm, xả băng thành từng
          cuộn nhỏ theo đúng yêu cầu với độ chính xác cao
        </p>
      ),
    },
    {
      id: 3,
      image:
        "https://minhngocsteel.vn/upload/file/original/2-linh-vuc-hoat-dong-san-pham-1626942558.jpg",
      title: "Ứng Dụng Rộng Rãi",
      content: (
        <p>
          Lĩnh vực hoạt động của ThépPhú Vinh là sản xuất và phân phối các loại
          sản phẩm Ống thép, hộp thép mạ kẽm cơ khí (vuông, tròn, chữ nhật). Sản
          phẩm thépPhú Vinh phục vụ cho các công trình xây dựng công nghiệp –
          dân dụng, các ngành thủ công mỹ nghệ, trang trí nội ngoại thất, chế
          tạo điện cơ, cơ khí chính xác và các sản phẩm dập tạo hình.
        </p>
      ),
    },
    {
      id: 4,
      image:
        "https://minhngocsteel.vn/upload/file/original/2-linh-vuc-hoat-dong-san-pham-1626942558.jpg",
      title: "Phương Châm Hoạt Động",
      content: (
        <p>
          Với phương châm “Ổn định nguồn hàng – Chia sẻ lợi ích với khách hàng –
          Luôn nâng cao chất lượng sản phẩm” - đem đến cho Quý khách hàng những
          sản phẩm tốt nhất cùng với chính sách chăm sóc chu đáo nhất và giá cả
          hợp lý nhất, Công ty TNHH Sản Xuất & Thương Mại Thép Phú Vinh luôn tin
          tưởng vào sự hợp tác và song hành cùng những thành công của Quý khách
          hàng.
        </p>
      ),
    },
    {
      id: 5,
      image: tamnhin,
      title: "Tầm Nhìn & Sứ Mệnh",
      content: (
        <div className="flex flex-col gap-4">
          <p>
            Bằng vào sự nỗ lực không ngừng cải tiến chất lượng sản phẩm, dịch
            vụ, PHÚ VINH phấn đấu trở thành doanh nghiệp hàng đầu sản xuất thép
            Việt Nam.
          </p>
          <p>
            PHÚ VINH luôn phấn đấu và nỗ lực để mang đến những giải pháp tổng
            thể tốt nhất về cung cấp ống thép cơ khí nội thất chất lượng cao,
            đáp ứng các nhu cầu đa dạng của quý khách hàng.
          </p>
        </div>
      ),
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
          alt="background"
        />
        <h1 className="uppercase sm:text-[32px] text-xl font-bold absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
          Về Chúng Tôi
        </h1>
      </div>
      <div className="my-20 sm:mx-10">
        <div className="max-w-[1200px] mx-auto xl:px-10 2xl:px-20 flex flex-col gap-[120px]">
          <div>
            <h2 className="text-2xl lg:text-[28px] uppercase text-center mb-8 font-bold px-5 md:px-4">
              một nền tảng vững chắc theo định hướng phát triển bền vững để cùng
              vươn xa
            </h2>
            <Image
              src="https://minhngocsteel.vn/upload/file/original/1-mot-nen-tang-vung-chac-1626942523.jpg"
              width={2213}
              height={1475}
              className="w-full h-auto md:rounded-lg"
              alt="about image"
            />
          </div>
          {listAbout.map((item) => (
            <AboutItem
              title={item.title}
              key={item.id}
              content={item.content}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
