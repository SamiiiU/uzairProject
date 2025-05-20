import React from 'react'
import hero2Img from '../Assets/hero2.webp'

const Hero_two = () => {
    return (
        <div className='w-full bg-white    px-4 xl:px-28 sm:px-20  2xl:px-80  pt-20   pb-20 z-10 flex  flex-col lg:flex-row gap-10 '>
            <div data-aos="fade-in" className='lg:w-1/2 w-full  lg:items-start md:items-center md:px-0 sm:px-10 px-4 space-y-4 items-start'>


                <h1 className=' font-[800]    text-lightBlue'>
                    About Us
                </h1>

                <h1 className='font-[900] text-5xl' >
                In A Digital World Where Attention Is Scarce.
                </h1>

                <p>Texas Design Experts is a leading web development company and website design agency dedicated to building custom, scalable websites that drive results and offer user-friendly experiences. Our expert web design services and website development solutions ensure that every project is responsive, user-friendly, and optimized for performance.</p>
                
                <button className='px-8 py-4 rounded-full bg-dakBlue hover:bg-lightBlue transition-all  font-semibold  text-white'>Get a free Website audit today</button>
            </div>

            <div data-aos="fade-in" className=' lg:w-1/2 w-full flex justify-center sm:px-10 px-4' >

               <img src={hero2Img} alt="About" className='sm:w-[80%] sm:h-96 w-fit h-60'/>
            </div>
        </div>
    )
}

export default Hero_two
