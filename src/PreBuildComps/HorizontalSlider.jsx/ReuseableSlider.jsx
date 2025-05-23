import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./slider.css"; // Create this file for custom pagination styles
import { web_work } from "../../WebData/packages";
import { useGlobalContext } from "../../GlobalStates/GlobalState";

const ReusableSlider = ({ children, MainClassName }) => {
  const { scrwidth } = useGlobalContext()
  const [slide, setSlide] = useState(0)
  const [slideShowing, setSlideShowing] = useState(web_work[0])

  const handleSlide = (index) => {
    setSlide(index)
    setSlideShowing(web_work[index])
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prevIndex) => {
        const newIndex = (prevIndex + 1) % web_work.length;
        setSlideShowing(web_work[newIndex]);
        return newIndex;
      });
    }, 4000);

    return () => clearInterval(interval); // cleanup
  }, []);




  return (
    <div style={{ boxShadow: '0px 0px 30px rgba(0, 0, 0, 0.2)' }} className={`relative ${MainClassName} flex md:items-center justify-center md:flex-row flex-col w-full min-h-fit  mt-20  md:py-10 px-4 py-6 `}>


      {/* pagnition here  */}
      <div key={slide} className="w-full  flex justify-center md:translate-y-0 -translate-y-14 md:-translate-x-11 md:flex-row flex-col md:gap-6 gap-20 items-center ">


        <div
           key={slide} className='md:w-auto   w-full h-80 md:flex-1 animate-fade-up  rounded-3xl   transition-all  ' // here is the issue 
          style={{
            backgroundImage: `url('${slideShowing.image}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>

        <div key={slide} className="md:flex-1 space-y-4 animate-fade-up  ">
          <h1 className="md:text-3xl font-bold">{slideShowing.title}</h1>
          <p>{slideShowing.description}</p>

        </div>

      </div>

      <div className=" flex md:flex-col flex-row justify-center items-center gap-3   h-full ">
        {web_work.map((work, idx) => (
          <span onClick={() => handleSlide(idx)} key={idx} className={` transition-all ease-in-out duration-300 origin-center rounded-full ${slide == idx ? 'md:py-4 md:px-[5px] py-[5px] px-4 bg-gray-600' : 'p-[5px] bg-grayColor'}  `}></span>
        ))}
      </div>
    </div>
  );
};

export default ReusableSlider;
