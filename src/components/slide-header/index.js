"use client";
import Image from "next/image";
import slider from "@/assets/image/home/background.jpg";
import slider1 from "@/assets/image/home/slider1.jpg";
import slider2 from "@/assets/image/home/slider2.jpg";
import React from "react";
import Slider from "react-slick";

function SlideHeader() {
  const listImage = [
    {
      id: 1,
      image: slider,
    },
    {
      id: 2,
      image: slider1,
    },
    {
      id: 3,
      image: slider2,
    },
  ];

  const settings = {
    mobileFirst: true,
    arrows: false,
    swipeToSlide: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 4000,
    fade: true,
    waitForAnimate: false,
  };

  return (
    <div className="w-full h-[100vh] top-[-160px] absolute [&_.slick-track]:gap-0">
      {
        <Slider {...settings}>
          {listImage.map((item) => {
            return (
              <Image
                key={item.id}
                src={item.image}
                width={992}
                height={476}
                className="w-auto h-[100vh] opacity-15 "
                alt="slider"
              />
            );
          })}
        </Slider>
      }
    </div>
  );
}

export default SlideHeader;
