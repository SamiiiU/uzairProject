import React from 'react'
import '../app.css'
import ReusableSlider from '../PreBuildComps/HorizontalSlider.jsx/ReuseableSlider'

import { useGlobalContext } from '../GlobalStates/GlobalState'

const WebMade = () => {
    

  const { setIsFormVisible} = useGlobalContext(); 

  

  

  return (
    <div className='w-full  text-textColor bg-grayColor px-4 2xl:px-72  sm:px-10    pt-16   pb-20 z-10  relative'>
      <h1 className='xl:text-[4rem] md:text-[5rem] md:block hidden w-full text-center font-bold opacity-5 absolute left-1/2 -translate-x-1/2 top-0'>Website Designs We Make</h1>

      <h1 className='lg:text-5xl text-3xl font-bold text-center'>Website Designs We Make</h1>
      <p className='text-center text-xl'>Website Designs That Make a Great First Impression</p>

      

        <div className='w-full md:px-20  my-10 '>
        <ReusableSlider MainClassName={"bg-white rounded-3xl"}>

        </ReusableSlider>
        </div>

        <div className='w-full flex justify-center items-center mt-6'>
          <span onClick={() => setIsFormVisible(true)}  className='px-10 cursor-pointer py-4 rounded-full lg:text-lg font-semibold text-sm text-white bg-lightBlue'>Avail 75% Discount</span>
      </div>
    </div>
  )
}

export default WebMade
