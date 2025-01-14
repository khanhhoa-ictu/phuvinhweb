import { Button } from "antd";
import Image from "next/image";
import React from "react";

function PostItem({ image, date, title, summary }) {
  return (
    <div className="relative post-container">
      <div
        className={`post-card w-full border border-[#0018421a] bg-white rounded-lg flex flex-col sm:flex-row lg:flex-col gap-6 lg:max-w-[373px] lg:pb-8`}
      >
        <div className="rounded-t-lg sm:rounded-t-lg lg:rounded-t-lg sm:w-[40%] lg:w-full">
          <Image
            src={image}
            width={353}
            height={240}
            alt="image blog"
            className="w-full rounded-t-lg sm:rounded-l-lg sm:rounded-tr-[0px] lg:rounded-t-lg lg:rounded-bl-[0px] h-[240px] sm:h-full lg:h-[240px] object-cover"
          />
        </div>
        <div className="flex-1 sm:h-full lg:h-[55%] flex flex-col px-3 lg:px-4 justify-between sm:w-[60%] lg:w-full sm:gap-[10px] flex-shrink-0 mb-4 sm:mt-4 lg:m-0">
          <div className="flex flex-col text-[#333]">
            <p className="mb-[10px] sm:mb-[5px] lg:mb-[10px]">{date}</p>
            <h3 className="text-base font-semibold lg:text-xl mb-5 sm:mb-[5px] lg:mb-5">
              {title}
            </h3>
            <p className="text-[13px] leading-[126%] lg:text-base mb-4 sm:mb-[10px] lg:mb-4">
              {summary || ""}
            </p>
          </div>

          <Button className="w-fit">Xem Chi Tiết</Button>
        </div>
      </div>
    </div>
  );
}

export default PostItem;
