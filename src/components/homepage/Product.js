"use client";
import React from "react";
import ProductItem from "../product/ProductItem";
import background from "@/assets/image/home/background.jpg";
import Slider from "react-slick";

function Product() {
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
      <div style={{ paddingTop: '60px' }}> {/* Điều chỉnh khoảng cách */}
        <ul style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
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
        breakpoint: 2048,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  const listSlide = [1, 2, 3];
  return (
    <div className="bg-white px-5 py-8">
      <h3 className="uppercase text-[36px] mb-10 text-center">sản phẩm thép Phú Vinh</h3>
      <div className="max-w-[1200px] mx-auto">
        <Slider {...settings}>
          {listSlide?.map((item) => (
            <ProductItem
              key={item}
              image={background}
              name="test"
              productName="Ống sắt mạ kẽm vuông hình chữ nhật"
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Product;
