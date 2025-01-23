"use client";
import slider1 from "@/assets/image/home/slider3.jpg";
import logo from "@/assets/logo/logo.png";
import { Button, Modal } from "antd";
import Image from "next/image";
import { useState } from "react";
import { ReactTyped } from "react-typed";

function SlideHeader() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <div className="w-full max-h-[650px] mt-10 relative">
      <div className="bg-[#183a7787] absolute top-0 left-0 right-0 bottom-0 z-10 flex items-center justify-center">
        <div>
          <div className="absolute top-0 bottom-0 left-0 right-0 xl:flex xl:justify-center">
            {/* <Image src={testImage} width={434} height={330} className="h-full w-[600px] opacity-60 md:w-full max-w-[1000px]" /> */}
          </div>
          <div className="flex flex-col items-center justify-between gap-5 lg:gap-[60px] w-[800px] lg:w-[1000px] mx-auto relative px-5">
            <h1 className="text-white lg:text-[40px] text-[18px] font-bold uppercase">
              Phú Vinh Steel
            </h1>
            <p className="text-white text-[22px] md:text-[38px] lg:text-[60px] text-center font-semibold uppercase italic">
              <ReactTyped
                strings={[
                  "Ống thép Phú Vinh - Lựa chọn thông minh - Khởi sinh hưng thịnh",
                ]}
                typeSpeed={50}
              />
            </p>

            <Button
              onClick={() => setIsOpenModal(true)}
              className="!text-xl lg:!text-2xl !px-8 !py-5 !rounded-[25px] lg:!rounded-[80px] !h-[48px] lg:!h-[62px] !bg-[#cbb024]"
            >
              Tư Vấn Miễn Phí
            </Button>
          </div>
        </div>
      </div>
      <Image
        src={slider1}
        width={992}
        height={476}
        className="w-full max-h-[650px] object-cover blur-sm"
        alt="slider"
      />
      <Modal
        open={isOpenModal}
        onOk={() => setIsOpenModal(false)}
        onCancel={() => setIsOpenModal(false)}
        title={""}
        footer={null}
      >
        <div className="flex flex-col gap-3 text-[#333] mb-[50px]">
          <p className="mb-[3px] font-montserrat text-xl lg:text-2xl leading-[29px] font-semibold text-center">
            Xin chào 👋
          </p>
          <p className="text-[12px] lg:text-base lg:font-medium">
            Hãy gọi cho chúng tôi để được tư vấn miễn phí:
          </p>
          <p className="text-[12px] lg:text-base lg:font-medium">
            SDT: <span className="font-semibold">02 213 900122</span>
          </p>
        </div>
      </Modal>
    </div>
  );
}

export default SlideHeader;
