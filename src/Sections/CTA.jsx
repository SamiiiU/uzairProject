import React from 'react'
import { IoMdCall } from 'react-icons/io'
import { useGlobalContext } from '../GlobalStates/GlobalState';

const CTA = () => {
  const { scrwidth , setIsFormVisible } = useGlobalContext();

  return (
    <div className='w-full text-white space-y-6   px-4 xl:px-28 sm:px-20  2xl:px-80    py-20 bg-lightBlue z-10  relative text-center'>
        <h1 className='text-5xl font-bold'>Get a Free Audit of Your Website</h1>

        <p>Get a stunning website from USA’s #1 web design service! Professional, custom website design with FREE Logo to boost your brand. Fast, affordable, and SEO-friendly website. Get started today!</p>

        <div className='w-full flex flex-wrap justify-center items-center gap-6'>
            <button onClick={() => setIsFormVisible(true)} className='px-10 py-4 text-lg bg-dakBlue border-white border-[1px]  rounded-full'>Avail 75% Discount</button>

            <button className='px-10 py-4 text-lg bg-dakBlue border-white border-[1px]  rounded-full flex  font-semibold  items-center '><IoMdCall /> : +1 234 23144212</button>
        </div>
      
    </div>
  )
}

export default CTA
