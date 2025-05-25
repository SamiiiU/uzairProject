import React from 'react'
import { IoMdCall } from 'react-icons/io'
import { useGlobalContext } from '../GlobalStates/GlobalState';

const CTA = () => {
  const { scrwidth , setIsFormVisible } = useGlobalContext();

  return (
    <div className='w-full text-white space-y-6   px-4 xl:px-28 sm:px-20  2xl:px-80    py-20 bg-lightBlue z-10  relative text-center'>
        <h1 className='md:text-5xl text-3xl font-bold'>Get a Free Audit of Your Website</h1>

        <p>Get a stunning website from USA’s #1 web design service! Professional, custom website design with FREE Logo to boost your brand. Fast, affordable, and SEO-friendly website. Get started today!</p>

        <div className='w-full flex  justify-center items-center md:gap-6 gap-3'>
            <button onClick={() => setIsFormVisible(true)} className='sm:px-10 px-3 sm:py-4 py-2  bg-dakBlue border-white border-[1px] font-semibold rounded-full'>Avail 75% Discount</button>

            <a href="tel:8327371637" className='sm:px-10 px-3 sm:py-4 py-2 font-semibold bg-dakBlue border-white border-[1px]  rounded-full flex    items-center '><IoMdCall /> : +1 832 737 1637</a>
        </div>
      
    </div>
  )
}

export default CTA
