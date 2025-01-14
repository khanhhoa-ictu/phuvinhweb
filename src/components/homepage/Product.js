"use client";
import React, { useEffect, useState } from "react";
import ProductItem from "../product/ProductItem";
import background from "@/assets/image/home/background.jpg";
import Slider from "react-slick";
import { Button } from "antd";
import Link from "next/link";
import { getListProduct } from "@/service/product";
import { handleErrorMessage } from "@/common";

function Product() {
  const [listProduct, setListProduct] = useState([]);
  const settings = {
    mobileFirst: true,
    arrows: false,
    // className:
    //   '[&_.slick-track]:flex [&_.slick-track]:gap-3 [&_.slick-track]:lg:gap-7 [&_.slick-list]:xl:rounded-[18px] [&_.group]:!block',
    swipeToSlide: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 600,
    touchThreshold: 10,
    swipeThreshold: 5,
    dots: true,
    appendDots: (dots) => (
      <div style={{ paddingTop: "60px" }}>
        {" "}
        {/* Điều chỉnh khoảng cách */}
        <ul style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          {dots}
        </ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 4048,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  const fetchListProduct = async () => {
    try {
      const data = await getListProduct(1, 10, true);
      setListProduct(data.payload?.data?.products);
    } catch (error) {
      handleErrorMessage(error);
    }
  };

  useEffect(() => {
    fetchListProduct();
  }, []);

  return (
    <div className="bg-white px-5 py-8 lg:py-20">
      <h3 className="uppercase text-[36px] text-center font-bold text-[#261797]">
        sản phẩm thép Phú Vinh
      </h3>
      <div className="w-[306px] h-[6px] mx-auto mb-[60px] line relative"></div>
      <div className="max-w-[1200px] mx-auto">
        <Slider {...settings}>
          {listProduct?.map((item) => (
            <ProductItem
              key={item}
              image={item.thumbnail}
              name="product-image"
              productName={item.name}
              className="max-w-full"
            />
          ))}
        </Slider>
      </div>
      <div className="flex justify-center mt-[50px]">
        <Link
          href="/product?page=1&category=1"
          className="flex justify-center items-center w-fit"
        >
          <Button className="!mx-auto !px-[46px] !py-8 !text-xl !bg-[#cbb024]">
            Xem tất cả
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Product;
