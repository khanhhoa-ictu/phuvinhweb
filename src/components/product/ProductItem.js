import Image from "next/image";
import Link from "next/link";
import React from "react";

function ProductItem({ name, image, productName }) {
  return (
    <div className="max-w-full">
      <div className="card-item relative overflow-hidden cursor-pointer max-w-full min-h-[400px] rounded-lg">
        <Image
          src={image}
          alt={name}
          width={350}
          height={400}
          className="h-[500px] w-full object-cover rounded-lg"
        />
        <span className="view">Xem chi tiết</span>
      </div>

      <p className="text-xl font-roboto font-semibold">{productName}</p>
    </div>
  );
}

export default ProductItem;
