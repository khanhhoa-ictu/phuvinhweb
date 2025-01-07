import About from "@/components/homepage/About";
import Application from "@/components/homepage/Application";
import Introduce from "@/components/homepage/Introduce";
import Post from "@/components/homepage/Post";
import Product from "@/components/homepage/Product";
import SlideHeader from "@/components/slide-header";

export default function Home() {
  return (
    <div className="flex-1 h-full relative z-10 text-[#333]">
      <SlideHeader />

      <Introduce />
      <About />
      <Product />
      <Application />
      <Post />
     
    </div>
  );
}
