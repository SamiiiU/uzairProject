import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./slider.css"; // Create this file for custom pagination styles

const ReusableSlider = ({children}) => {
    
  return (
    <div className="relative  w-full h-[500px] py-10 ">
      <Swiper
        direction="vertical"
        modules={[Pagination]}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
        }}
        spaceBetween={30}
        slidesPerView={1}
        className="h-full"
      >
        {children}
      </Swiper>

      {/* Pagination Dots on Right */}
      <div className="swiper-pagination absolute right-[13%] top-1/2 -translate-y-1/2 z-10 flex flex-col gap-2"></div>
    </div>
  );
};

export default ReusableSlider;
