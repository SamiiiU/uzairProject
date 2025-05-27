import React, { useRef, useState } from 'react'
import heroTrust from '../Assets/heroTrust.webp'
import heroBG from '../Assets/heroBg.png'
import { useGlobalContext } from '../GlobalStates/GlobalState';
import emailjs from '@emailjs/browser';


const Hero = () => {


    const [step, setStep] = useState(1);

    const { scrollToSection,  setIsFormVisible, scrwidth } = useGlobalContext();
    const formRef = useRef();
    const [isSending, setIsSending] = useState(false);

    const changeStep = () => {
        const formElements = formRef.current.elements;
        let isValid = true;

        // Check first 3 input fields only
        for (let i = 0, filledCount = 0; i < formElements.length && filledCount < 3; i++) {
            const el = formElements[i];
            if (el.tagName === 'INPUT' && el.name) {
                filledCount++;
                if (!el.value.trim()) {
                    isValid = false;
                    el.focus(); // Optionally focus the first empty field
                    break;
                }
            }
        }

        if (!isValid) {
            alert('Please fill in the first 3 fields.');
            return;
        }

        // If valid, you can proceed
        setStep(2)
        // ...put your next-step logic here
    };

    const showFormDetails = () => {
        const formElements = formRef.current.elements;
        for (let i = 0; i < formElements.length; i++) {
            const el = formElements[i];
            if (el.name) {
                console.log(`${el.name}: ${el.value}`);
            }
        }
    }



    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSending(true);

        emailjs.sendForm(
            'service_meniodp',         // Replace with your EmailJS service ID
            'template_a1hkfvq',        // Replace with your EmailJS template ID
            formRef.current,
            'UYoaxcSkke-Lmw0Zi'       // Replace with your EmailJS public key
        ).then(
            (result) => {
                alert('Message sent successfully!');
                formRef.current.reset();
                setIsFormVisible(false);
                setIsSending(false);
                window.location.href = "https://agency.texasdesignexperts.com/thank-you/";

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

        <div style={{ backgroundImage: `url(${heroBG})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} className='w-full  h-auto bg-slate-400  text-white 2xl:px-80 xl:px-28 px-2 sm:px-20    lg:pt-48 sm:pt-72 pt-48  pb-20 z-10 flex justify-between flex-col lg:flex-row gap-10  relative'>
            <span className={`w-full h-full absolute top-0 z-10 left-0 ${scrwidth > 600 ? 'bg-[#44757f]/50' : 'bg-[#44757f]'}`} ></span>

            {/* Home text  */}
            <div data-aos="fade-in" className='lg:w-1/2 w-full lg:items-start z-20 md:items-center md:px-0 sm:px-10 px-4 space-y-4 '>


                <h1 className=' font-bold   lg:text-5xl md:text-3xl text-3xl  '>
                    Get Your Website Designed & Claim a
                    <strong className='animate-blink px-3'>Free Logo for Just $199!</strong>
                    <span className='text-2xl mx-4'>(Originally $796)</span>
                </h1>
                <div className='spac-y-2 sm:text-2xl'>
                    <h1 className='flex gap-x-4 '><span className='text-lightBlue font-[800] -translate-y-2'>__</span>Interactive UI/UX Design</h1>

                    <h1 className='flex gap-x-4 '><span className='text-lightBlue font-[800] -translate-y-2'>__</span>Mobile & SEO Friendly Website</h1>

                    <h1 className='flex gap-x-4 '><span className='text-lightBlue font-[800] -translate-y-2'>__</span>Website + FREE Logo</h1>

                    <h1 className='flex gap-x-4 '><span className='text-lightBlue font-[800] -translate-y-2'>__</span>100% Money Back Guarantee</h1>

                </div>

                <div className=' flex   gap-4 md:w-auto w-full   '>
                    <span onClick={() => setIsFormVisible(true)} className='md:text-sm text-xs  sm:px-10 px-3 sm:py-4 py-2 hover:-translate-y-3 font-bold cursor-pointer transition-all duration-300   bg-lightBlue text-center rounded-full '> Avail 75% Discount</span>
                    <span onClick={() => scrollToSection("Packages")} className='md:text-sm text-xs sm:px-10 px-3 sm:py-4 py-2 hover:-translate-y-3 font-bold cursor-pointer transition-all duration-300 border-[1px] border-white bg-lightBlue text-center rounded-full'>View Packages</span>
                </div>

                <img src={heroTrust} alt="TrustPilot" className='w-auto h-7' />
            </div>

            <div className=' lg:w-1/2 w-full z-20 lg:px-16 sm:px-10 ' >

                <div data-aos="fade-in" className='w-full bg-lightBlue shadow-[0_0_20px_2px_#4fa1ad] lg:px-8  px-4 py-8 rounded-2xl text-center h-fit'>
                    <h1 className='md:text-4xl text-2xl font-bold'>Get <span className='text-dakBlue'>75%</span> Discount</h1>
                    <h1 className='md:text-2xl font-semibold'>Limited Time Offer</h1>

                    <form ref={formRef} onSubmit={handleSubmit} className='my-6 space-y-4  w-full h-fit'>
                        <div className={`${step == 1 ? 'block' : 'hidden'} space-y-4`}>
                            <div className='w-full grid md:grid-cols-2 grid-cols-1 gap-3 '>
                                <input type="text" name="user_name" placeholder='Full Name*' className='md:text-sm text-xs sm:flex-1 p-2 border-none outline-none bg-inputBoxColor rounded-lg col-span-1' required />

                                <input type="email" name="user_email" placeholder='Email Address*' className='md:text-sm text-xs sm:flex-1 p-2  outline-none bg-inputBoxColor rounded-lg col-span-1' required />
                            </div>

                            <input type="number" name="user_phone" placeholder='Phone No*' className='md:text-sm text-xs bg-inputBoxColor w-full p-2  outline-none  rounded-lg' required />

                            <textarea name="message" placeholder='To help us understand better, enter brief description about your project' className='md:text-sm text-xs w-full p-2 border-none outline-none bg-inputBoxColor rounded-lg mb-6' required />
                        </div>

                        <div className={`${step == 2 ? 'block' : 'hidden'} mt-6 w-full flex flex-col gap-4`}>
                            {/* Company */}
                            <select name="user_budget" className="md:p-3 p-2 rounded-xl  text-white md:text-sm text-xs bg-inputBoxColor" required>
                                <option>Under $500</option>
                                <option>$500 - $1,000</option>
                                <option>$1,000 - $3,000</option>
                                <option>$3,000 - $5,000</option>
                                <option>More than $5,000+</option>
                            </select>


                            {/* Service */}
                            <select name="user_service" className="md:p-3 p-2 rounded-md text-white md:text-sm text-xs bg-inputBoxColor " required>
                                <option>New Website</option>
                                <option>Website Redesign</option>
                                <option>Update to an existing website</option>
                            </select>


                            {/* Website Type */}
                            <select name="user_website_type" className="md:p-3 p-2 rounded-md text-white md:text-sm text-xs bg-inputBoxColor " required>
                                <option>Business Website</option>
                                <option>Web Portal</option>
                                <option>E-commerce Online Store Website</option>
                                <option>Personal Website</option>
                                <option>Non-Profit Website</option>
                                <option>Booking/Event Website</option>
                                <option>Blog/News Website</option>
                                <option>Other</option>
                            </select>

                            <input placeholder='your company website / url' type="text" name="user_company" className="md:p-3 p-2 rounded-xl  text-white md:text-sm text-xs bg-inputBoxColor" required />


                        </div>
                        {step == 2 && (<button type="submit" onClick={() => showFormDetails()} className='px-10 py-2 rounded-full font-semibold bg-white text-dakBlue mt-6 hover:-translate-y-3 transition-all ease-in-out'> Active Your Coupan Now</button>)}

                    </form>
                    {step == 1 && (
                        <button onClick={() => changeStep()} className='px-10 py-2 hover:-translate-y-3 rounded-full font-semibold bg-white text-dakBlue transition-all ease-in-out'> Claim free consultation</button>
                    )}
                    <p className='font-semibold mt-5 md:text-sm text-xs'>Any Confusion? Why Not Discuss Your Idea?</p>
                </div>


            </div>





        </div>

    )
}

export default Hero
