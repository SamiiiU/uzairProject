import React, { useEffect, useState } from 'react'
import { testimonals } from '../WebData/allData'
import { FaArrowRightLong } from "react-icons/fa6";
import { initAOS } from '../Animation/AosAnimation';

const Testimonals = () => {
  const [index, setIndex] = useState(0);
  const [showReview, setShowReview] = useState(testimonals[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % testimonals.length;
        setShowReview(testimonals[newIndex]);
        return newIndex;
      });
    }, 4000);

    return () => clearInterval(interval); // cleanup
  }, []);

  useEffect(() => {
    initAOS(100, 200, 800); // optional args: offset, delay, duration
  }, []);

  return (
    <div className='w-full text-textColor px-4 2xl:px-72 xl:px-40 sm:px-20 pt-16 pb-20 relative'>
      <h1 className='xl:text-[6rem] md:text-[5rem] md:block hidden w-full text-center font-bold opacity-5 absolute left-1/2 -translate-x-1/2 top-0'>
        Our Client Say
      </h1>

      <h1 className='lg:text-5xl text-3xl font-bold text-center'>
        Our Client Say
      </h1>

      <div
        key={index} // 💥 Force re-render on testimonial change
        className='w-full bg-white px-10 gap-10 lg:h-96 py-10 flex lg:flex-row flex-col justify-center items-center my-12 rounded-3xl'
        style={{ boxShadow: '0px 0px 30px rgba(0, 0, 0, 0.2)' }}
      >
        <div
          className='w-80 h-80  animate-fade-up transition-all rounded-full bg-slate-500 '
          style={{
            backgroundImage: `url('${showReview.image}')`,
            backgroundSize: '150%',
            backgroundPosition: 'center',
          }}
        ></div>

        <div key={index} className='flex-1   flex justify-center items-start gap-y-6 flex-col'>
          <p className='animate-fade-up'>{showReview.review}</p>

          <span className='animate-fade-up flex gap-x-4 items-center'>
            <h1 className='font-bold'>{showReview.nameOf}</h1>
            <FaArrowRightLong className='text-grayColor' />
            <h2>{showReview.position}</h2>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Testimonals
