import React, { useEffect } from 'react'
import './form.css'
import { RxCross1 } from "react-icons/rx";
import { useGlobalContext } from '../GlobalStates/GlobalState';

const CommonForm = () => {
  const {isFormVisible , setIsFormVisible} = useGlobalContext();

  useEffect(() => {
    console.log(isFormVisible)
  })
  
  return (
    <>
      {isFormVisible && (<div className='w-full flex z-50 fixed top-0 py-4 px-4 overflow-y-scroll h-screen left-0  justify-center 2xl:items-center items-start text-white bg-black/50 overflow-x-hidden'>
      <span onClick={() => setIsFormVisible(false)} className='  absolute top-0 right-0 p-2 text-4xl cursor-pointer'>
        <RxCross1 />
      </span>
      <div className=' bg-dakBlue sm:p-10 p-6 rounded-3xl '>

        <h1 className='md:text-4xl text-xl text-center'>Get 75% Off with FREE LOGO</h1>

        <form className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-3 mt-6">

          {/* Name */}
          <div className="flex flex-col">
            <label>Name</label>
            <input type="text" className="md:p-3 p-2 rounded-md bg-white text-black"  required/>
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label>Email Address</label>
            <input type="email" className="md:p-3 p-2 rounded-md bg-white text-black"  required/>
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <label >Phone number</label>
            <input type="text" className="md:p-3 p-2 rounded-md bg-white text-black"  required/>
          </div>

          {/* Company */}
          <div className="flex flex-col">
            <label >Company Name / Website URL</label>
            <input type="text" className="md:p-3 p-2 rounded-md bg-white text-black"  required/>
          </div>

          {/* Budget */}
          <div className="flex flex-col md:col-span-2">
            <label >What's Your Estimated Budget?*</label>
            <select className="md:p-3 p-2 rounded-md bg-white text-black">
              <option>Under $500</option>
              <option>$500 - $1,000</option>
              <option>$1,000 - $5,000</option>
              <option>$5,000+</option>
            </select>
          </div>

          {/* What are you looking for? */}
          <div className="flex flex-col md:col-span-2">
            <label >What are you looking for?*</label>
            <select className="md:p-3 p-2 rounded-md bg-white text-black">
              <option>Website</option>
              <option>Mobile App</option>
              <option>SEO</option>
            </select>
          </div>

          {/* Type of website */}
          <div className="flex flex-col md:col-span-2">
            <label >What type of website you're looking for?*</label>
            <select className="md:p-3 p-2 rounded-md bg-white text-black">
              <option>Business Website</option>
              <option>E-commerce</option>
              <option>Portfolio</option>
            </select>
          </div>

          {/* Message */}
          <div className="flex flex-col md:col-span-2">
            <label >Message</label>
            <textarea rows="4" className="md:p-3 p-2 rounded-md bg-white text-black" required></textarea>
          </div>

          {/* Submit */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 transition-all font-semibold py-3 px-8 rounded-full w-full md:w-1/2 mx-auto block"
            >
              SUBMIT
            </button>
          </div>

        </form>
      </div>
    </div>)}
    </>
  )
}

export default CommonForm
