import logo from '@/assets/logo/logo.jpg';
import { Button } from 'antd';
import Image from 'next/image';
import Link from 'next/link';

function Footer() {
  return (
    <footer className="hidden lg:block">
      <div className="flex justify-between py-[23px] bg-[#150E24] px-[18px] lg:px-[40px] lg:py-[30px]">
        <div className="flex items-start flex-col justify-between">
          <Image src={logo} alt="logo" width={152} height={28} />
          <p className="text-[14px] xl:text-base text-white opacity-50 font-sourceSanPro">
            © 2024 Reqops. Made with love in Sydney, Australia.
          </p>
        </div>
        <div className="flex gap-[54px]">
          <div className="flex font-sourceSanPro items-center text-base text-white cursor-pointer flex-wrap w-[304px] xl:w-[394px]">
            <Link href="pricing" className="w-1/3 h-[44px] flex items-center">
              Pricing
            </Link>
            <Link href="contact" className="w-1/3 h-[44px] flex items-center">
              Contact
            </Link>
            <Link
              href="privacy-policy"
              className="w-1/3 h-[44px] flex items-center"
            >
              Privacy Policy
            </Link>
            <p className="w-1/3 h-[44px] flex items-center">Benefits</p>
            <Link href="blog" className="w-1/3 h-[44px] flex items-center">
              Blog
            </Link>
            <Link
              href="terms-condition"
              className="w-1/3 h-[44px] flex items-center"
            >
              Terms & Conditions
            </Link>
          </div>

          <div className="flex gap-[16px] xl:gap-[27px] h-[44px] font-sourceSanPro">
            <p className="text-white text-base flex items-center">
              Already a member?
            </p>
            <Button className="!bg-transparent !border-white !rounded-lg !px-[30px] !font-sourceSanPro">
              Log in
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
