import About from "@/components/homepage/About";
import Application from "@/components/homepage/Application";
import Introduce from "@/components/homepage/Introduce";
import Post from "@/components/homepage/Post";
import Product from "@/components/homepage/Product";
import Image from "next/image";
import background1 from "@/assets/image/home/background.jpg";
export default function Home() {
  return (
    <div className="flex-1 h-full relative z-10">
      <Image
        src={background1}
        width={992}
        height={476}
        className="w-auto h-[100vh] absolute opacity-15 top-[-160px]"
      />
      <Introduce />
      <About />
      <Product />
      <Application />
      <Post />
    </div>
  );
}
