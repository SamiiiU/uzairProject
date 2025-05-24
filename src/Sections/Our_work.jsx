import React, { useState } from 'react'
import { our_work_data } from '../WebData/allData'
import '../app.css'

const Our_work = () => {
  const [showWork, setShowWork] = useState(our_work_data[0])
  const [tabNum, setTabNum] = useState(0)

  const handleShowWork = (toShow) => {
    setShowWork(our_work_data[toShow])
    setTabNum(toShow)
  }

  return (
    <div className='w-full text-textColor       md:pt-16 py-10   md:pb-20 z-10  relative'>
      <h1 className='px-4 2xl:px-72  sm:px-10 xl:text-[6rem] md:text-[5rem] md:block hidden w-full text-center font-bold opacity-5 absolute left-1/2 -translate-x-1/2 top-0'>See Our Work</h1>

      <h1 className='px-4 2xl:px-72  sm:px-10 lg:text-5xl text-3xl font-bold text-center'>See Our Work</h1>
      <p className='px-4 2xl:px-72  sm:px-10 text-center md:text-xl'>Get the most user friendly website designs tailored to your business — across 90+ industries. We bring your vision to life!</p>

      <div className='px-6 2xl:px-72  sm:px-10 w-full flex justify-center items-center flex-wrap gap-6 font-bold  rounded-xl mt-8 mb-6'>
        {our_work_data.map((item, index) => (
          <h1 key={index} onClick={() => handleShowWork(index)} className={`px-4 py-2 ${tabNum == index ? 'bg-grayColor ' : 'bg-none border-b-2'} transition-all duration-300 cursor-pointer text-dakBlue  border-dakBlue rounded-md overflow-hidden`}>{item.category}</h1>
        ))}

      </div>

      <div className='w-full bg-grayColor md:h-[400px] h-[500px] grid md:grid-cols-4 md:grid-rows-2 grid-rows-4 grid-cols-2 gap-4 p-6'>
        {our_work_data[tabNum].images.slice(0, 8).map((image, index) => (
          <span key={index} className='col-span-1 row-span-1 ' style={{
            backgroundImage : `url(${image})` ,
            backgroundSize: 'cover',
            backgroundPosition: 'top',
          }}></span>
        ))}
      </div>
    </div>
  )
}

export default Our_work
