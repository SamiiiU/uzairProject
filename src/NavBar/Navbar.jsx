import React, { useContext } from 'react'
import logo from '../Assets/logoNav.webp'
import { IoMdCall } from "react-icons/io";
import { IoChatbubble } from "react-icons/io5";
import { useGlobalContext } from '../GlobalStates/GlobalState';

const Navbar = () => {
  const { scrwidth , setIsFormVisible } = useGlobalContext();

  return (
    <div className='fixed top-0 left-0 z-50'>
      <div className='w-screen bg-lightBlue 2xl:px-80 lg:px-40  xl:px-28 sm:px-20 xs:px-10 px-4 flex lg:flex-row flex-col sm:gap-4 gap-2 text-white justify-between sm:items-center py-[5px]'>
        <h1 className='font-bold  '>Limited Time Offer -Activate Your 75% Off Coupon!</h1>

        <div className='lg:w-auto w-full flex sm:flex-row flex-col sm:gap-20 gap-2 justify-between sm:items-center items-start'>
          <h1 onClick={() => setIsFormVisible(true)} className='  underline cursor-pointer'>Activate Your Coupon Now</h1>

          <span onClick={() => setIsFormVisible(true)} className='bg-dakBlue px-4 py-2 rounded-lg border-[1px] border-white  cursor-pointer'>Claim your website + free Logo</span>
        </div>
      </div>

      <div className='w-full bg-dakBlue text-white py-2 flex justify-between 2xl:px-80 lg:px-40 sm:px-20 xs:px-10 px-4 items-center'>
        {/* logo starts here  */}
        <span className='rounded-full overflow-hidden'>
          <img src={logo} alt="TexasDesigns" className='sm:w-20 w-16 sm:h-20 h-16' />
        </span>

        {/* navigations here  */}

        {scrwidth > 1000 && (
          <div className='flex gap-x-4  items-center justify-center  '>
            <h1 className='cursor-pointer'>About Us</h1>
            <h1 className='cursor-pointer'>Packages</h1>
            <h1 className='cursor-pointer'>Portfolio</h1>
            <h1 className='cursor-pointer'>Reviews</h1>
          </div>
        )}

          <span className="flex  font-semibold  items-center " ><IoMdCall /> : +1 234 23144212</span>

          <span className='flex  items-center gap-x-2 font-semibold rounded-full border-[1px] border-white bg-lightBlue px-4 py-2'><IoChatbubble /> Live Chat</span>
      
      </div>
    </div>
  )
}

export default Navbar
