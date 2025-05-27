import React from 'react'
import { IoMdCall } from 'react-icons/io'
import { useGlobalContext } from '../GlobalStates/GlobalState';

const CTA = () => {
  const {  setIsFormVisible } = useGlobalContext();

  return (
    <div className='w-full text-white space-y-6   px-4 xl:px-28 sm:px-20  2xl:px-80 overflow-hidden   sm:py-20 py-24 bg-lightBlue z-10  relative text-center'>
      
        <div className='absolute 2xl:left-0 sm:-left-40 -left-12   sm:top-0 -top-[40%]  h-full flex justify-center items-center '>
            <img src="https://res.cloudinary.com/dwbt0uoa7/image/upload/v1748069321/wkuyfpqesxeauylrxlud.webp" alt="CTAimg1" className='sm:w-80 w-40 h-auto' />
        </div>

        <div className='absolute 2xl:right-0 sm:-right-36 -right-10 bottom-0 h-full flex justify-end items-end '>
            <img src="https://res.cloudinary.com/dwbt0uoa7/image/upload/v1748069320/pxx76di1t7nlp5ljl6hi.webp" alt="CTAimg2" className='sm:w-80 w-40 h-auto' />
        </div>
        
        <h1 className='md:text-5xl sm:text-3xl text-2xl font-bold'>Get a Free Audit of Your Website</h1>

        <p>Get professional and affordable web design, logo creation, social media branding, <br/>and animated videos tailored for U.S. startups and small businesses. Enjoy unlimited revisions, full ownership, free hosting, and fast delivery on all digital design services.</p>

        <div className='w-full flex  justify-center items-center md:gap-6 gap-3'>
            <button onClick={() => setIsFormVisible(true)} className='sm:px-10 px-3 sm:py-4 py-2  bg-dakBlue border-white border-[1px] font-semibold rounded-full'>Avail 75% Discount</button>

            <a href="tel:+18327371637" className='sm:px-10 px-3 sm:py-4 py-2 font-semibold bg-dakBlue border-white border-[1px]  rounded-full flex    items-center '><IoMdCall /> : +1 832 737 1637</a>
        </div>
      
    </div>
  )
}

export default CTA
