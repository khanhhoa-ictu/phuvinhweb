import slider1 from "@/assets/image/home/slider1.jpg";
import Image from "next/image";

function SlideHeader() {
  return (
    <div className="w-full h-[100vh] top-[-160px] absolute">
      <Image
        src={slider1}
        width={992}
        height={476}
        className="w-full h-[100vh] opacity-15 object-cover"
        alt="slider"
      />
    </div>
  );
}

export default SlideHeader;
