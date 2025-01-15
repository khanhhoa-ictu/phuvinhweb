import React from "react";
import background from "@/assets/image/post/background.png";
import Image from "next/image";
import backgroundContact from "@/assets/image/contact/background.png";

export const metadata = {
  title: "Liên Hệ Ống Thép Phú Vinh - Tư Vấn và Hỗ Trợ Nhanh Chóng",
  description:
    "Liên hệ ngay với Ong Thép Phú Vinh để nhận tư vấn và hỗ trợ về các sản phẩm thép chất lượng. Chúng tôi sẵn sàng giải đáp mọi thắc mắc qua hotline, email hoặc trực tiếp tại văn phòng.",
};

function Contact() {
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
          Liên Hệ
        </h1>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-[50%] hidden md:block p-5 lg:p-10">
          <div className="text-[36px] font-bold uppercase px-4">
            <div className="max-w-[528px] ml-auto text-[#1c4792] font-bold">
              <h2>
                BẢN ĐỒ <span className="block">NHÀ MÁY THÉP PHÚ VINH</span>{" "}
              </h2>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[50%] h-[405px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.856266680642!2d105.84117191535569!3d21.028511593211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab4000e76d47%3A0xf15c0c1e85d3df77!2zSOG7kyDEkOG7pW5nIEjDoG4gxJDGsOG7nW5nIFRo4buLIFRow7RuZyBIw6BuIE5naOG7hyBDaMOtIG5n4buNYyBIw6BuZyBLaMOhdA!5e0!3m2!1sen!2s!4v1614770142992!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <div className="bg-[#faf7f6]">
        <div className=" px-10 py-20 flex flex-col gap-10 md:flex-row md:gap-4 md:px-5 max-w-[1200px] mx-auto">
          <div className="flex flex-col gap-6 w-full md:w-[50%]">
            <h2 className="text-[30px] uppercase font-bold">Liên Hệ</h2>
            <div className="flex flex-col">
              <p className="text-xl font-semibold">Số điện thoai: </p>
              <p>08 652 855 86</p>
            </div>
            <div className="flex flex-col">
              <p className="text-xl font-semibold">Email: </p>
              <p>Phuvinhsteel@gmail.com</p>
            </div>

            <div className="flex flex-col">
              <p className="text-xl font-semibold">Website: </p>
              <p>ongthepphuvinh.com</p>
            </div>
            <div className="flex flex-col">
              <p className="text-xl font-semibold">Trụ sở chính: </p>
              <p>Km1, quốc lộ 3, xã Mai Lâm, huyện Đông Anh, TP.Hà Nội</p>
            </div>
          </div>
          <Image
            src={backgroundContact}
            width={659}
            height={375}
            alt="background-contact"
            className="w-full md:w-[50%]"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
