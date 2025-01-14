import Image from "next/image";
import React from "react";

function AboutItem({ image, title, content }) {
  return (
    <div>
      <h2 className="text-2xl lg:text-[28px] uppercase text-center mb-8 font-bold px-5 md:px-4">
        {title}
      </h2>
      <div className="text-center mb-8 text-sm lg:text-xl px-5 md:px-4">
        {content}
      </div>
      <Image
        src={image}
        width={2213}
        height={1475}
        alt="image about"
        className="w-full h-auto md:rounded-lg"
      />
    </div>
  );
}

export default AboutItem;
