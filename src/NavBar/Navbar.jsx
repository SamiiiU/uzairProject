import React, { useEffect, useRef, useState } from 'react';
import logo from '../Assets/logoNav.webp';
import { IoMdCall } from "react-icons/io";
import { IoChatbubble } from "react-icons/io5";
import { useGlobalContext } from '../GlobalStates/GlobalState';
import { IoMenu } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";



const Navbar = () => {
  const { scrwidth, setIsFormVisible, scrollToSection, isNavVisible, setIsNavVisible } = useGlobalContext();



  // const [showTopStrip, setShowTopStrip] = useState(true);
  // const [lastScrollY, setLastScrollY] = useState(0);

  // const topStripRef = useRef(null);
  // const [topStripHeight, setTopStripHeight] = useState(0);

  // useEffect(() => {
  //   if (topStripRef.current) {
  //     setTopStripHeight(topStripRef.current.offsetHeight);
  //   }
  // }, []);
  
  

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (scrwidth > 600) return; // ✅ Only run on mobile (less than 600px)
  
  //     const currentScrollY = window.scrollY;
  //     if (currentScrollY > lastScrollY && currentScrollY > 50) {
  //       // scrolling down
  //       setShowTopStrip(false);
  //     } else {
  //       // scrolling up
  //       setShowTopStrip(true);
  //     }
  //     setLastScrollY(currentScrollY);
  //   };
  
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [lastScrollY, scrwidth]);
  
  return (
    <div style={{

    }} className={`fixed top-0 left-0 z-50 w-full ${isNavVisible ? '' : 'h-auto pointer-events-none'}`}>
      {/* 🔵 Top strip with CTA */}
      <div
        // ref={topStripRef}
        className={`w-screen pointer-events-auto bg-lightBlue z-20 2xl:px-80 sm:px-20 xs:px-10 px-4 flex lg:flex-row flex-col sm:gap-4 gap-2 text-white justify-between sm:items-center py-[5px] relative transition-all duration-300`}
        
      >

        <h1 className='font-bold sm:text-lg text-xs text-center'>Limited Time Offer - Activate Your 75% Off Coupon!</h1>
        <div className='lg:w-auto w-full flex flex-row  sm:gap-20 gap-2 justify-between items-center '>
          <h1 onClick={() => setIsFormVisible(true)} className='md:text-lg text-[10px] underline font-semibold cursor-pointer'>Activate Your Coupon Now</h1>
          <span onClick={() => setIsFormVisible(true)} className='md:text-lg text-[10px] font-semibold bg-dakBlue px-4 py-2 rounded-lg border-[1px] border-white cursor-pointer'>
            Claim your website + free Logo
          </span>
        </div>

        
      </div>

      {/* 🔵 Main navbar */}
      <div className='w-full pointer-events-auto z-10 bg-dakBlue text-white py-2 flex justify-between 2xl:px-80 sm:px-20 xs:px-10 px-4 items-center relative'>
        {/* 🔹 Logo */}
        <span className='rounded-full overflow-hidden'>
          <img src={logo} alt="TexasDesigns" className='sm:w-20 w-16 sm:h-20 h-16' />
        </span>

        {/* 🔹 Navigation Links */}
        {scrwidth > 1000 && (
          <div className='flex gap-x-4 items-center justify-center'>
            <h1 onClick={() => scrollToSection("Home")} className='cursor-pointer'>About Us</h1>
            <h1 onClick={() => scrollToSection("Packages")} className='cursor-pointer'>Packages</h1>
            <h1 onClick={() => scrollToSection("Work")} className='cursor-pointer'>Portfolio</h1>
            <h1 onClick={() => scrollToSection("reviews")} className='cursor-pointer'>Reviews</h1>
          </div>
        )}

        {/* 🔹 Contact Info */}
        <div className='flex xl:gap-x-20 gap-x-6'>
        <a href="tel:+18327371637" className="flex font-semibold items-center md:text-sm text-xs"><IoMdCall /> : +1 832 737-1637</a>
        <span onClick={() => window.Tawk_API?.maximize()} className='cursor-pointer flex md:text-sm text-xs items-center gap-x-2 font-semibold rounded-full border-[1px] border-white bg-lightBlue md:px-4 py-2 px-2'>
          <IoChatbubble /> Live Chat
        </span>
        </div>
        {scrwidth < 600 && (
          <span onClick={() => setIsNavVisible(isNavVisible ? false : true)} className=' bottom-0 right-0 text-3xl   '>
            {isNavVisible ? <RxCross1 /> : <IoMenu />}
          </span>

        )}
      </div>

      {scrwidth < 600 && (
        <div className='sm:px-20 z-0 xs:px-10 p-4 bg-white text-black flex flex-col gap-y-8 '
          style={{
            transform: isNavVisible ? 'translateY(0) ' : 'translateY(-100%)',
            visibility: isNavVisible ? 'visible' : 'collapse', transition: 'all 0.5s ease-in-out'
          }} >
          <h1 onClick={() => scrollToSection("Home")} className='cursor-pointer'>About Us</h1>
          <h1 onClick={() => scrollToSection("Packages")} className='cursor-pointer'>Packages</h1>
          <h1 onClick={() => scrollToSection("Work")} className='cursor-pointer'>Portfolio</h1>
          <h1 onClick={() => scrollToSection("reviews")} className='cursor-pointer'>Reviews</h1>
        </div>
      )}

    </div>
  );
};

export default Navbar;
