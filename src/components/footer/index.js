import Image from "next/image";
import Link from "next/link";
import facebook from "@/assets/image/home/facebook.png";
import zalo from "@/assets/image/home/zalo.png";

function Footer() {
  return (
    <footer className="bg-[#4f32f1]">
      <div className="flex flex-col lg:flex-row justify-between py-[30px] px-[18px] lg:px-[40px] lg:py-[52px] text-white gap-6 max-w-[1200px] xl:mx-auto">
        <div className="">
          <p className="text-xl font-bold mb-5 lg:mb-[51px]">Về chúng tôi</p>
          <div className="text-sm">
            <p className="font-bold mb-3 leading-[30px]">
              Địa chỉ:
              <span className="font-normal ml-1">
                Km1, quốc lộ 3, xã Mai Lâm, huyện Đông Anh, TP.Hà Nội
              </span>
            </p>
            <p className="font-bold mb-3 leading-[30px]">
              Hotline: <span className="font-normal ml-1">08 652 855 86</span>
            </p>
            <p className="font-bold mb-3 leading-[30px]">
              Email:{" "}
              <span className="font-normal ml-1">Phuvinhsteel@gmail.com</span>
            </p>
          </div>
        </div>
        <div>
          <p className="text-xl font-bold mb-5 lg:mb-[51px]">Link</p>
          <div className="text-sm font-normal flex flex-col gap-3 w-fit">
            <Link href="/about" className="cursor-pointer leading-[30px]">
              Giới thiệu
            </Link>
            <Link href="/product" className="cursor-pointer leading-[30px]">
              Sản phẩm
            </Link>
            <Link href="/post" className="cursor-pointer leading-[30px]">
              Tin tức
            </Link>
            <Link href="/contact" className="cursor-pointer leading-[30px]">
              Liên hệ
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-5 lg:mb-[18px]">Kết nối với chúng tôi</h3>
          <div>
            <div className="flex gap-4 mb-3">
              <Link href="/">
                <Image src={facebook} width={34} height={34} />
              </Link>
              <Link href="/">
                <Image src={zalo} width={34} height={34} />
              </Link>
            </div>
            <div className="w-full h-[200px]">
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
        </div>
      </div>
    </footer>
  );
}

export default Footer;
