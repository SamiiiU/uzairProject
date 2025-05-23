import React, { useState } from 'react'
import { packages_data } from '../WebData/packages'
import '../app.css'

const Our_work = () => {
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
    <div className='w-full text-textColor  px-4 2xl:px-72  sm:px-10     md:pt-16 py-10   md:pb-20 z-10  relative'>
      <h1 className='xl:text-[6rem] md:text-[5rem] md:block hidden w-full text-center font-[900] opacity-20 absolute left-1/2 -translate-x-1/2 top-0'>See Our Work</h1>

      <h1 className='lg:text-5xl text-3xl font-bold text-center'>See Our Work</h1>
      <p className='text-center text-xl'>Get the most user friendly website designs tailored to your business — across 90+ industries. We bring your vision to life!</p>

      <div className='w-full flex justify-center items-center gap-x-6 text-xl rounded-xl mt-8'>
        <h1 onClick={() => handleShowPackages(0)} className={`px-4 py-2 ${showPackages == packages_data.Logo ? 'bg-grayColor border-b-2' : 'bg-none '} cursor-pointer text-dakBlue  border-dakBlue`}>Web Design</h1>
        <h1 onClick={() => handleShowPackages(1)} className={`px-4 py-2 ${showPackages == packages_data.Ecommerce ? 'bg-grayColor border-b-2' : 'bg-none '} cursor-pointer text-dakBlue  border-dakBlue`}>Ecommerce</h1>
      </div>

      <div className='w-full bg-grayColor h-96'>
        
      </div>
    </div>
  )
}

export default Our_work
