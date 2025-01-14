import Image from "next/image";
import React from "react";

function ApplicationItem({ icon, title, content }) {
  return (
    <div className="w-full">
      <div className="flex gap-4 flex-col sm:flex-row items-center mb-2 sm:items-start">
        <Image
          src={icon}
          width={80}
          height={80}
          alt="icon"
          className="w-[80px] h-[80px] sm:w-[54px] sm:h-[54px]"
        />
        <p className="text-[25px] sm:text-xl text-[#1c4792] mt-[2px] font-bold">
          {title}
        </p>
      </div>
      <p className="text-base sm:text-sm font-roboto text-[#001842] leading-6 font-medium text-center sm:text-left">
        {content}
      </p>
    </div>
  );
}

export default ApplicationItem;
