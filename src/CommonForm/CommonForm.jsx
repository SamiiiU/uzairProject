import React, { useEffect, useRef, useState } from 'react';
import './form.css';
import { RxCross1 } from "react-icons/rx";
import { useGlobalContext } from '../GlobalStates/GlobalState';
import emailjs from '@emailjs/browser';

const CommonForm = () => {
  const { isFormVisible, setIsFormVisible, scrwidth } = useGlobalContext();
  
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    console.log(isFormVisible);


  }, [isFormVisible]);

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
      'UYoaxcSkke-Lmw0Zi'        // Replace with your EmailJS public key
    ).then(
      (result) => {
        // alert('Message sent successfully!');
        formRef.current.reset();
        setIsFormVisible(false);
        setIsSending(false);
        window.location.href = "https://github.com/SamiiiU/uzairProject";
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
    <>
      {isFormVisible && (
        <div className='w-full flex z-50 fixed top-0 py-4 sm:px-4 px-2 overflow-y-scroll h-screen left-0 justify-center 2xl:items-center items-start  text-white bg-black/50 overflow-x-hidden'>

          {scrwidth < 800 &&
            <span onClick={() => setIsFormVisible(false)} className='absolute z-50 top-0 right-0 p-2 text-2xl cursor-pointer'>
              <RxCross1 />
            </span>
          }

          <div className='bg-dakBlue sm:p-10 p-6 rounded-3xl relative'>
            {scrwidth > 800 && (
              <span onClick={() => setIsFormVisible(false)} className='absolute top-2 right-2 p-2 text-2xl cursor-pointer'>
                <RxCross1 />
              </span>
            )}
            <h1 className='md:text-4xl text-xl text-center'>Get 75% Off with FREE LOGO</h1>

            <form ref={formRef} onSubmit={handleSubmit} className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-3 mt-6">

              {/* Name */}
              <div className="flex flex-col">
                <label>Name</label>
                <input type="text" name="user_name" className="md:p-3 p-2 rounded-md bg-white text-black" required />
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <label>Email Address</label>
                <input type="email" name="user_email" className="md:p-3 p-2 rounded-md bg-white text-black" required />
              </div>

              {/* Phone */}
              <div className="flex flex-col">
                <label>Phone number</label>
                <input type="number" name="user_phone" className="md:p-3 p-2 rounded-md bg-white text-black" required />
              </div>

              {/* Company */}
              <div className="flex flex-col">
                <label>Company Name / Website URL</label>
                <input type="text" name="user_company" className="md:p-3 p-2 rounded-md bg-white text-black" required />
              </div>

              {/* Budget */}
              <div className="flex flex-col md:col-span-2">
                <label>What's Your Estimated Budget?*</label>
                <select name="user_budget" className="md:p-3 p-2 rounded-md bg-white text-black">
                  <option>Under $500</option>
                  <option>$500 - $1,000</option>
                  <option>$1,000 - $3,000</option>
                  <option>$3,000 - $5,000</option>
                  <option>More than $5,000+</option>
                </select>
              </div>

              {/* Service */}
              <div className="flex flex-col md:col-span-2">
                <label>What are you looking for?*</label>
                <select name="user_service" className="md:p-3 p-2 rounded-md bg-white text-black">
                  <option>New Website</option>
                  <option>Website Redesign</option>
                  <option>Update to an existing website</option>
                </select>
              </div>

              {/* Website Type */}
              <div className="flex flex-col md:col-span-2">
                <label>What type of website you're looking for?*</label>
                <select name="user_website_type" className="md:p-3 p-2 rounded-md bg-white text-black">
                  <option>Business Website</option>
                  <option>Web Portal</option>
                  <option>E-commerce Online Store Website</option>
                  <option>Personal Website</option>
                  <option>Non-Profit Website</option>
                  <option>Booking/Event Website</option>
                  <option>Blog/News Website</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Message */}
              <div className="flex flex-col md:col-span-2">
                <label>Message</label>
                <textarea name="message" rows="4" className="md:p-3 p-2 rounded-md bg-white text-black" required></textarea>
              </div>

              {/* Submit with spinner */}
              <div className="md:col-span-2 relative">
                <button
                  onClick={() => showFormDetails()}
                  type="submit"
                  className="bg-red-600 hover:bg-red-700 transition-all font-semibold py-3 px-8 rounded-full w-full md:w-1/2 mx-auto block disabled:opacity-50"
                  disabled={isSending}
                >
                  {isSending ? "Sending..." : "SUBMIT"}
                </button>

                {isSending && (
                  <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
              </div>

            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default CommonForm;
