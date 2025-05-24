import React, { useRef, useState } from 'react'
import heroTrust from '../Assets/heroTrust.webp'
import heroBG from '../Assets/heroBg.png'
import { useGlobalContext } from '../GlobalStates/GlobalState';

const Hero = () => {


    const [step, setStep] = useState(1);

    const {  scrollToSection ,isFormVisible, setIsFormVisible , scrwidth} = useGlobalContext();
    const formRef = useRef();
    const [isSending, setIsSending] = useState(false);
  
    const changeStep =() => {
        
    }
  
    
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setIsSending(true);
  
      emailjs.sendForm(
        'service_9xsr84o',         // Replace with your EmailJS service ID
        'template_l5vzds7',        // Replace with your EmailJS template ID
        formRef.current,
        'KMjSwQzTT4RVy5UWU'        // Replace with your EmailJS public key
      ).then(
        (result) => {
          alert('Message sent successfully!');
          formRef.current.reset();
          setIsFormVisible(false);
          setIsSending(false);
        },
        (error) => {
          console.error(error.text);
          alert('Failed to send message. Please try again.');
          formRef.current.reset();
          setIsSending(false);
        }
      );
    };
  

    return (

        <div style={{ backgroundImage: `url(${heroBG})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} className='w-full  h-auto bg-slate-400  text-white 2xl:px-80 xl:px-28 px-4 sm:px-20    lg:pt-48 sm:pt-72 pt-60  pb-20 z-10 flex justify-between flex-col lg:flex-row gap-10  relative'>


            {/* Home text  */}
            <div data-aos="fade-in" className='lg:w-1/2 w-full lg:items-start md:items-center md:px-0 sm:px-10 px-4 space-y-4 '>


                <h1 className=' font-[400]   lg:text-5xl md:text-3xl text-3xl  '>
                    Get Your Website Designed & Claim a <br />
                    <strong>Free Logo for Just $199!</strong>
                    <span className='text-2xl mx-4'>(Originally $796)</span>
                </h1>
                <div className='spac-y-2 sm:text-2xl'>
                    <h1 className='flex gap-x-4 '><span className='text-lightBlue font-[800] -translate-y-2'>__</span>Interactive UI/UX Design</h1>

                    <h1 className='flex gap-x-4 '><span className='text-lightBlue font-[800] -translate-y-2'>__</span>Mobile & SEO Friendly Website</h1>

                    <h1 className='flex gap-x-4 '><span className='text-lightBlue font-[800] -translate-y-2'>__</span>Website + FREE Logo</h1>

                    <h1 className='flex gap-x-4 '><span className='text-lightBlue font-[800] -translate-y-2'>__</span>100% Money Back Guarantee</h1>

                </div>

                <div className=' flex   gap-4 md:w-auto w-full   '>
                    <span onClick={() => setIsFormVisible(true)} className='md:text-sm text-xs  sm:px-10 px-3 sm:py-4 py-2 hover:-translate-y-3 font-bold cursor-pointer transition-all duration-300 border-[1px] border-white bg-lightBlue text-center rounded-full '> Avail 75% Discount</span>
                    <span onClick={() => scrollToSection("Packages")} className='md:text-sm text-xs sm:px-10 px-3 sm:py-4 py-2 hover:-translate-y-3 font-bold cursor-pointer transition-all duration-300 border-[1px] border-white bg-lightBlue text-center rounded-full'>View Packages</span>
                </div>

                <img src={heroTrust} alt="TrustPilot" className='w-auto h-7' />
            </div>

            <div className=' lg:w-1/2 w-full   sm:px-10 ' >

                <div data-aos="fade-in" className='w-full bg-lightBlue shadow-[0_0_20px_2px_#4fa1ad]  px-4 py-8 rounded-2xl text-center'>
                    <h1 className='md:text-4xl text-2xl font-bold'>Get <span className='text-dakBlue'>75%</span> Discount</h1>
                    <h1 className='md:text-2xl font-semibold'>Limited Time Offer</h1>
                    
                    <form  ref={formRef} onSubmit={handleSubmit}>
                    {step == 1 && (
                        <div className='space-y-4 mt-6 w-full '>
                            <div className='w-full grid md:grid-cols-2 grid-cols-1 gap-3 '>
                                <input type='text' placeholder='Full Name*' className='md:text-sm text-xs sm:flex-1 p-2 border-none outline-none bg-inputBoxColor rounded-xl col-span-1' />

                                <input type='text' placeholder='Email Address*' className='md:text-sm text-xs sm:flex-1 p-2  outline-none bg-inputBoxColor rounded-xl col-span-1' />
                            </div>

                            <input type='number' placeholder='Phone No*' className='md:text-sm text-xs w-full p-2  outline-none bg-inputBoxColor rounded-xl' />

                            <textarea placeholder='To help us understand better, enter brief description about your project' className='md:text-sm text-xs w-full p-2 border-none outline-none bg-inputBoxColor rounded-xl ' />

                            <span onClick={() => changeStep()} className='md:text-sm text-xs px-10 py-2 rounded-full font-semibold bg-white text-dakBlue '> Claim free consultant</span>
                        </div>
                    )}

                    {step == 2 && (
                        <div className='space-y-4 mt-6 w-full '>
                            <div className='w-full grid md:grid-cols-2 grid-cols-1 gap-3 '>
                                <input type='text' placeholder='Full Name*' className='sm:flex-1 p-2 border-none outline-none bg-inputBoxColor rounded-xl col-span-1' />

                                <input type='text' placeholder='Email Address*' className='sm:flex-1 p-2  outline-none bg-inputBoxColor rounded-xl col-span-1' />
                            </div>

                            <input type='number' placeholder='Phone No*' className='w-full p-2  outline-none bg-inputBoxColor rounded-xl' />

                            <textarea placeholder='To help us understand better, enter brief description about your project' className='w-full p-2 border-none outline-none bg-inputBoxColor rounded-xl ' />

                            <button type="submit" className='px-10 py-2 rounded-full font-semibold bg-white text-dakBlue '> Claim free consultant</button>
                        </div>
                    )}

                    </form>
                    <p className='font-semibold mt-5 md:text-sm text-xs'>Any Confusion? Why Not Discuss Your Idea?</p>
                </div>


            </div>





        </div>

    )
}

export default Hero
