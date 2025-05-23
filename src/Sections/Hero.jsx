import React, { useState } from 'react'
import heroTrust from '../Assets/heroTrust.webp'
import heroBG from '../Assets/heroBg.png'
import { useGlobalContext } from '../GlobalStates/GlobalState';

const Hero = () => {
    const [name, setName] = useState("");
  const [gmail, setGmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSend] = useState(false);
  const [result, setResult] = useState("");

    const { scrwidth , setIsFormVisible } = useGlobalContext();

    return (

        <div  style={{backgroundImage : `url(${heroBG})` , backgroundSize : 'cover' , backgroundRepeat : 'no-repeat' }} className='w-full  h-auto bg-slate-400  text-white 2xl:px-80 xl:px-28 px-4 sm:px-20    lg:pt-48 pt-72  pb-20 z-10 flex justify-between  flex-col lg:flex-row gap-10  relative'>


                {/* Home text  */}
                <div data-aos="fade-in" className='lg:w-1/2 w-full lg:items-start md:items-center md:px-0 sm:px-10 px-4 space-y-4 '>


                    <h1 className=' font-[400]   sm:text-5xl text-4xl '>
                        Get Your Website Designed & Claim a <br />
                        <strong>Free Logo for Just $199!</strong>
                        <span className='text-2xl mx-4'>(Originally $796)</span>
                    </h1>
                    <div className='spac-y-2 text-2xl'>
                        <h1 className='flex gap-x-4 '><span className='text-lightBlue font-[800] -translate-y-2'>__</span>Interactive UI/UX Design</h1>

                        <h1 className='flex gap-x-4 '><span className='text-lightBlue font-[800] -translate-y-2'>__</span>Mobile & SEO Friendly Website</h1>

                        <h1 className='flex gap-x-4 '><span className='text-lightBlue font-[800] -translate-y-2'>__</span>Website + FREE Logo</h1>

                        <h1 className='flex gap-x-4 '><span className='text-lightBlue font-[800] -translate-y-2'>__</span>100% Money Back Guarantee</h1>

                    </div>

                    <div className=' flex md:flex-row flex-col sm:rounded-md gap-4 md:w-auto w-full   '>
                        <button onClick={() => setIsFormVisible(true)} className=' px-10 py-4 hover:-translate-y-3 font-bold cursor-pointer transition-all duration-300 border-[1px] border-white bg-lightBlue text-center rounded-full '> Avail 75% Discount</button>
                        <button className='px-10 py-4 hover:-translate-y-3 font-bold cursor-pointer transition-all duration-300 border-[1px] border-white bg-lightBlue text-center rounded-full'>View Packages</button>
                    </div>

                    <img src={heroTrust} alt="TrustPilot" className='w-auto h-7' />
                </div>

                <div  className=' lg:w-1/2 w-full   sm:px-10 ' >
                    
                    <div data-aos="fade-in" className='w-full bg-lightBlue shadow-[0_0_20px_2px_#4fa1ad]  px-4 py-8 rounded-2xl text-center'>
                        <h1 className='text-3xl font-[900]'>Get 75% Discount</h1>
                        <h1 className='text-2xl font-semibold'>Limited Time Offer</h1>

                        <div className='space-y-4 mt-6 w-full '>
                            <div className='w-full grid md:grid-cols-2 grid-cols-1 gap-3 '>
                                <input type='text' placeholder='Full Name*' className='sm:flex-1 p-2 border-none outline-none bg-inputBoxColor rounded-xl col-span-1'  />

                                <input type='text' placeholder='Email Address*' className='sm:flex-1 p-2  outline-none bg-inputBoxColor rounded-xl col-span-1'  />
                            </div>

                            <input type='number' placeholder='Phone No*' className='w-full p-2  outline-none bg-inputBoxColor rounded-xl'  />

                            <textarea placeholder='To help us understand better, enter brief description about your project' className='w-full p-2 border-none outline-none bg-inputBoxColor rounded-xl '  />

                            <button className='px-10 py-2 rounded-full font-semibold bg-white text-dakBlue '> Claim free consultant</button>
                        </div>

                        <p className=' font-semibold mt-5'>Any Confusion? Why Not Discuss Your Idea?</p>
                    </div>

                        
                </div>





            </div>

    )
}

export default Hero
