import React, { useState } from 'react'
import CustomSlider from '../PreBuildComps/CustomSlider/CustomSlider'
import { packages_data } from '../WebData/packages'
import '../app.css'
import { useGlobalContext } from '../GlobalStates/GlobalState'

const Our_Packages = () => {
  const { scrwidth , setIsFormVisible } = useGlobalContext();

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
    <div className='w-full text-textColor  px-4 2xl:px-72  sm:px-10    md:pt-16 py-10   md:pb-20 z-10  relative'>
      <h1 className='xl:text-[6rem] md:text-[5rem] md:block hidden w-full text-center font-bold opacity-5 absolute left-1/2 -translate-x-1/2 top-0'>Our Packages</h1>

      <h1 className='lg:text-5xl text-3xl font-bold text-center'>Our Packages</h1>

      <div className='w-full flex justify-center items-center gap-x-6 md:text-xl  rounded-xl mt-8'>
        <h1 onClick={() => handleShowPackages(0)} className={`px-4 py-2 ${showPackages == packages_data.Logo ? 'bg-grayColor ' : 'bg-none border-b-2'} transition-all duration-300 cursor-pointer text-dakBlue  border-dakBlue`}>Web Design</h1>
        <h1 onClick={() => handleShowPackages(1)} className={`px-4 py-2 ${showPackages == packages_data.Ecommerce ? 'bg-grayColor ' : 'bg-none border-b-2'} transition-all duration-300 cursor-pointer text-dakBlue  border-dakBlue`}>Ecommerce</h1>
      </div>

      <div className='md:bg-grayColor py-8 mt-6 cursor-grab'>
        <CustomSlider>
          {showPackages.map((item, idx) => (
            <div data-aos-once="false" data-aos="zoom-in" key={idx} className='md:w-[33%] sm:w-[45%] w-full p-4 text-white bg-dakBlue transition-all'>
              <h1 className='bg-lightBlue py-4 px-2 w-full text-center font-bold sm:text-xl'>{item.title}</h1>

              <div className='w-full flex justify-evenly items-start py-6 relative my-3'>
                <p className='absolute top-0 left-0  font-semibold'>Now</p>
                <h1 className='text-5xl font-bold'>${item.price}</h1>
                <span className='flex flex-col'>
                  <p className='text-xl font-semibold line-through'>${item.was}</p>
                  Was
                </span>
              </div>
              <div className='custom-scrollbar w-full h-60 overflow-y-scroll   pb-16 font-[500] text-xs md:text-sm '>
                {item.package.map((pkg, index) => (
                  <>
                    <p className='text-sm leading-7' key={index}>{pkg}</p>
                  </>
                ))}

              </div>

              <div className='w-full flex justify-center mt-6'>
              <button onClick={() => setIsFormVisible(true)} className='px-4 uppercase  py-2 rounded-full bg-lightBlue font-semibold'>Get Quote</button>
              </div>

            </div>
          ))}
        </CustomSlider>
      </div>
    </div>
  )
}

export default Our_Packages
