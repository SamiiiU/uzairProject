import React from 'react'
import { useGlobalContext } from '../GlobalStates/GlobalState';
import '../app.css'

const Hero_two = () => {
    const { scrwidth , setIsFormVisible } = useGlobalContext();

    return (
        <div className='w-full bg-white    px-4 xl:px-28 sm:px-20  2xl:px-80  pt-20   pb-20 z-10 flex  flex-col lg:flex-row gap-10 '>
            <div data-aos="fade-in" className='lg:w-1/2 w-full  lg:items-start md:items-center md:px-0 sm:px-10 px-4 space-y-4 items-start'>


                <h1 className=' font-semibold    text-lightBlue'>
                    About Us
                </h1>

                <h1 className='font-bold md:text-5xl text-2xl' >
                In A Digital World Where Attention Is Scarce.
                </h1>

                <p>Texas Design Experts is a leading web development company and website design agency dedicated to building custom, scalable websites that drive results and offer user-friendly experiences. Our expert web design services and website development solutions ensure that every project is responsive, user-friendly, and optimized for performance.</p>
                
                <button onClick={() => setIsFormVisible(true)} className='px-8 py-4 rounded-full bg-dakBlue hover:bg-lightBlue transition-all  font-semibold  text-white'>Get a free Website audit today</button>
            </div>

            <div data-aos="fade-in" className=' lg:w-1/2 w-full flex justify-center sm:px-10 px-4' >

               <img src={'https://res.cloudinary.com/dwbt0uoa7/image/upload/v1748003888/fspf9ja8kqrnjegbxunw.webp'} alt="About" className='sm:w-full sm:h-96 w-fit h-60'/>
            </div>
        </div>
    )
}

export default Hero_two
