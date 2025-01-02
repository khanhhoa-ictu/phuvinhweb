import { Button } from "antd";
import Image from "next/image";
import React from "react";

function PostItem({ image, date, title, summary, index = "" }) {
  return (
    <div className="relative post-container">
      <div
        className={`post-card w-full border border-[#261797] bg-white rounded-lg flex flex-col sm:flex-row gap-6`}
      >
        <div className="rounded-t-lg sm:rounded-t-lg lg:rounded-t-lg sm:w-[40%]">
          <Image
            src={image}
            width={353}
            height={270}
            alt="image blog"
            className="w-full rounded-t-lg sm:rounded-l-lg sm:rounded-t-lg lg:rounded-t-lg h-[270px] object-cover"
          />
        </div>
        <div className="flex-1 sm:h-full flex flex-col px-3 lg:px-4 justify-between sm:w-[60%] sm:gap-[10px] flex-shrink-0 py-4">
          <div className="flex flex-col text-[#333]">
            <p className="mb-[10px] sm:mb-[5px] lg:mb-[10px] font-sm text-[#666]">{date}</p>
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
