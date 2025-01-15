import Image from "next/image";
import React from "react";
import imageAbout from "@/assets/image/home/image-about.png";
import Link from "next/link";
import phone from "@/assets/icon/hotline-icon.png";
import { Button } from "antd";
function About() {
  return (
    <div className="px-6 py-10 sm:px-20 md:py-20 bg-[#edf0f2]">
      <div className="w-full flex gap-10 flex-col md:flex-row max-w-[1200px] mx-auto lg:gap-20">
        <div className="block md:hidden">
          <h3 className="uppercase text-sm font-bold lg:text-base mb-6">
            về chúng tôi
          </h3>
          <p className="text-[28px] text-2xl lg:text-[36px] font-bold">
            Một Nền Tảng Vững Chắc Theo Định Hướng Phát Triển Bền Vững Để Cùng
            Vươn Xa
          </p>
        </div>
        <div className="rounded-lg md:w-[50%]">
          <Image
            src={imageAbout}
            width={787}
            height={727}
            className="w-full h-full rounded-lg md:h-auto"
            alt="about image"
          />
        </div>
        <div className="md:w-[50%]">
          <div>
            <div className="hidden md:block md:mb-10">
              <h3 className="uppercase text-sm font-bold lg:text-base text-[#333]">
                về chúng tôi
              </h3>
              <p className="text-[28px] text-2xl lg:text-[42px] font-bold lg:leading-[140%] text-[#261797]">
                Một Nền Tảng Vững Chắc Theo Định Hướng Phát Triển Bền Vững Để
                Cùng Vươn Xa
              </p>
            </div>
            <div className="flex flex-col gap-5 mb-5 md:mb-8">
              <p className="text-base font-medium md:mb-4">
                Côngty TNHH Sản xuất công nghiệp Phú Vinh được thành lập ngày 23
                tháng 08 năm 2016.Trải qua nhiều năm xây dựng và phát triển Công
                ty đã khẳngđịnh được vị thế hàng đầu của mình trong lĩnh vực sản
                xuất ống Thép tại Việt Nam.
              </p>
              <Link href="/about" className="w-fit">
                <Button>Xem chi tiết</Button>
              </Link>
            </div>
            <p className="text-[#cbb024] text-2xl font-medium mb-6">
              Chúng tôi có hơn <strong>20+</strong> năm kinh nghiệm trong ngành
              sản xuất, niềm tin vững mạnh!
            </p>
          </div>

          <div className="mt-4 flex text-white md:mb-8">
            <div className="w-[30%] bg-[#001842] flex justify-center items-center rounded-l-lg">
              <Image src={phone} width={46} height={46} alt="phone-icon" />
            </div>
            <div className="w-[70%] bg-[#1c4792] flex flex-col px-4 py-6 gap-2 rounded-r-lg lg:gap-3 lg:py-8">
              <p className="text-sm md:text-base font-bold">
                Hãy gọi cho chúng tôi để tư vấn miễn phí
              </p>
              <p className="text-lg lg:text-[30px] font-bold">02 213 900122</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
