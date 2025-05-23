import React, { useState } from 'react'
import { packages_data } from '../WebData/packages'
import '../app.css'
import ReusableSlider from '../PreBuildComps/HorizontalSlider.jsx/ReuseableSlider'
import { SwiperSlide } from 'swiper/react'
import { web_work } from '../WebData/packages'

const WebMade = () => {
    
  const [showPackages , setShowPackages] = useState(packages_data.Logo)

  const handleShowPackages = (toShow) => {
    if(toShow == 0){
      setShowPackages(packages_data.Logo)
    }
    else{
      setShowPackages(packages_data.Ecommerce)
    }
  }

  

  return (
    <div className='w-full  text-textColor bg-grayColor px-4 2xl:px-72  sm:px-10    pt-16   pb-20 z-10  relative'>
      <h1 className='xl:text-[6rem] md:text-[5rem] md:block hidden w-full text-center font-[900] opacity-20 absolute left-1/2 -translate-x-1/2 top-0'>Website Designs We Make</h1>

      <h1 className='lg:text-5xl text-3xl font-bold text-center'>Website Designs We Make</h1>
      <p className='text-center text-xl'>Website Designs That Make a Great First Impression</p>

      

        <div className='w-full px-4  my-10 hidden'>
        <ReusableSlider>
        <div className="w-full  px-40    flex justify-center items-center shadow-lg ">
        {web_work.map((slideContent, index) => (
          <SwiperSlide key={index} className='px-40'>
            <div className="flex items-center  justify-center min-h-[300px] rounded-3xl  h-full bg-white gap-8 w-full">
              <div className='flex-1  flex justify-center items-center h-72  -translate-x-11 rounded-3xl overflow-hidden'>
                    <img src={slideContent.image} alt={slideContent.title}  className='w-[800px] h-full   '/>
              </div>
              <div className='flex-1 flex flex-col h-full justify-center items-start pr-10 space-y-6'>
                    <h1 className='text-4xl font-bold'>{slideContent.title}</h1>
                    <p className='text-lg'>{slideContent.description}</p>
              </div>

            </div>
          </SwiperSlide>
        ))}
        </div>
        </ReusableSlider> 
        </div>
    </div>
  )
}

export default WebMade
