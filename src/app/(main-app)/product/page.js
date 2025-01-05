import React from "react";
import background from "@/assets/image/post/background.png";
import ProductItem from "@/components/product/ProductItem";
import backgroundProduct from "@/assets/image/home/background.jpg";
import Image from "next/image";
import { Select } from "antd";
import SelectCategory from "./SelectCategory";
import CustomPagination from "@/components/pagination";

function Product({ searchParams }) {
  const category = searchParams?.category || null;
  // const products = await getProducts(category);
  const listSlide = [1, 2, 3];
  return (
    <div className="flex-1">
      <div className="relative">
        <Image
          src={background}
          width={1487}
          height={283}
          className="w-full h-auto max-h-[260px]"
        />
        <h1 className="uppercase sm:text-[32px] text-xl font-bold absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
          Sản Phẩm
        </h1>
      </div>

      <SelectCategory />

      <div className="max-w-[1200px] gap-6 lg:mx-auto flex flex-col mx-4 md:flex-row flex-wrap md:gap-4 items-center lg:justify-between mb-10">
        {listSlide?.map((item) => (
          <ProductItem
            key={item}
            image={backgroundProduct}
            name="test"
            productName="Ống sắt mạ kẽm vuông hình chữ nhật"
            className="max-w-[370px]"
          />
        ))}
      </div>
      <div className="flex justify-center mt-[100px] relative z-10 mb-20">
        <CustomPagination currentPage={1} totalItems={30} pageSize={10} />
      </div>
    </div>
  );
}

export default Product;
