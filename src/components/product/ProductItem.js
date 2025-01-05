import Image from "next/image";
import Link from "next/link";
import React from "react";

function ProductItem({ name, image, productName, className }) {
  return (
    <div className={`product-item ${className}`}>
      <div className="card-item relative overflow-hidden cursor-pointer max-w-full min-h-[400px] rounded-md">
        <Image
          src={image}
          alt={name}
          width={350}
          height={400}
          className="h-[500px] w-full object-cover rounded-lg"
        />
        <span className="view">Xem chi tiết</span>
        <div>
          <p className="text-2xl md:text-[32px] font-roboto font-semibold absolute bottom-4 left-4 text-[#261797] z-10 uppercase px-6 product-name">
            {productName}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
