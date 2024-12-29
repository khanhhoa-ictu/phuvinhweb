import Image from "next/image";
import React from "react";
import imageAbout from "@/assets/image/home/image-about.png";

function About() {
  return (
    <div className="px-6 py-10">
      <div className="w-full flex gap-4 flex-col">
        <div className="rounded-lg">
          <Image
            src={imageAbout}
            width={787}
            height={727}
            className="w-full h-full"
          />
        </div>
        <div>
          <div>
            <h3 className="uppercase text-2xl">về chúng tôi</h3>
            <p className="text-[28px]">
              Một Nền Tảng Vững Chắc Theo Định Hướng Phát Triển Bền Vững Để Cùng
              Vươn Xa
            </p>
            <p className="text-base">
              Côngty TNHH Sản xuất công nghiệp Phú Vinh được thành lập ngày 23
              tháng 08 năm 2016.Trải qua nhiều năm xây dựng và phát triển Công
              ty đã khẳngđịnh được vị thế hàng đầu của mình trong lĩnh vực sản
              xuất ống Thép tại Việt Nam.
            </p>
          </div>
          <div>call me</div>
        </div>
      </div>
    </div>
  );
}

export default About;
