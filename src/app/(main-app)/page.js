import About from "@/components/homepage/About";
import Application from "@/components/homepage/Application";
import Introduce from "@/components/homepage/Introduce";
import Post from "@/components/homepage/Post";
import Product from "@/components/homepage/Product";
import SlideHeader from "@/components/slide-header";

export const metadata = {
  title: "Phú Vinh Steel Doanh nghiệp hàng đầu sản xuất thép",
  description:
    "Bằng sự nỗ lực không ngừng cải tiến chất lượng sản phẩm, dịch vụ, PHÚ VINH phấn đấu trở thành doanh nghiệp hàng đầu sản xuất thép Việt Nam",
};

export default function Home() {
  return (
    <div className="flex-1 h-full relative z-10 text-[#333]">
      <SlideHeader />

      <About />
      <Product />
      <Application />
      <Post />
    </div>
  );
}
