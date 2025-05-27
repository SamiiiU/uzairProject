import React, { useState } from 'react'
import { our_work_data } from '../WebData/allData'
import '../app.css'
import { useGlobalContext } from '../GlobalStates/GlobalState';
import { FaCross } from 'react-icons/fa6';
import { RxCross1 } from 'react-icons/rx';

const Our_work = () => {

  const { showImageViewer, setShowImageViewer , scrwidth } = useGlobalContext()
  const [showWork, setShowWork] = useState(our_work_data[0])
  const [tabNum, setTabNum] = useState(0)
  const [showModal, setShowModal] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);


  const handleShowWork = (toShow) => {
    setShowWork(our_work_data[toShow])
    setTabNum(toShow)
  }

  const handleShowImage = (index) => {
    setCurrentImageIndex(index);
    setShowModal(our_work_data[tabNum].images[index]);
    setShowImageViewer(true);
  }



  return (
    <div className='w-full text-textColor       md:pt-16 py-10   md:pb-20 z-40  relative'>
      <h1 className='px-4 2xl:px-72  sm:px-10 xl:text-[6rem] md:text-[5rem] md:block hidden w-full text-center font-bold opacity-5 absolute left-1/2 -translate-x-1/2 top-0'>See Our Work</h1>

      <h1 className='px-4 2xl:px-72  sm:px-10 lg:text-5xl text-3xl font-bold text-center'>See Our Work</h1>
      <p className='px-4 2xl:px-72  sm:px-10 text-center md:text-xl'>Get the most user friendly website designs tailored to your business — across 90+ industries. We bring your vision to life!</p>

      <div className='px-6 2xl:px-72  sm:px-10 w-full flex justify-center items-center flex-wrap gap-6 font-bold  rounded-xl mt-8 mb-6'>
        {our_work_data.map((item, index) => (
          <h1 key={index} onClick={() => handleShowWork(index)} className={`px-4 py-2 ${tabNum == index ? 'bg-grayColor ' : 'bg-none border-b-2'} transition-all duration-300 cursor-pointer text-dakBlue  border-dakBlue rounded-md overflow-hidden`}>{item.category}</h1>
        ))}

      </div>

      <div className='w-full bg-grayColor xl:h-[700px] md:h-[400px] h-[500px] grid md:grid-cols-4 md:grid-rows-2 grid-rows-4 grid-cols-2 gap-4 p-6'>
        {our_work_data[tabNum].images.slice(0, 8).map((image, index) => (
          <>
            {scrwidth > 600 ? (
              <span onDoubleClick={() => handleShowImage(index)} key={index} className='col-span-1 row-span-1 ' style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'top',
              }}></span>
            ) : (
              <span onClick={() => handleShowImage(index)} key={index} className='col-span-1 row-span-1 ' style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'top',
              }}></span>
            )}
          </>
        ))}
      </div>

      {showImageViewer && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <span onClick={() => setShowImageViewer(false)} className='top-4 right-4 cursor-pointer text-3xl absolute text-white'><RxCross1/></span>
          <button
            onClick={() => {
              const newIndex =
                (currentImageIndex - 1 + our_work_data[tabNum].images.length) %
                our_work_data[tabNum].images.length;
              setCurrentImageIndex(newIndex);
              setShowModal(our_work_data[tabNum].images[newIndex]);
            }}
            className="absolute left-4 top-1/2 text-white text-4xl font-bold z-50"
          >
            ‹
          </button>

          <img
            src={showModal}
            alt="viewer"
            className="sm:max-w-full max-w-[80vw] max-h-[90vh] object-contain"
          />

          <button
            onClick={() => {
              const newIndex = (currentImageIndex + 1) % our_work_data[tabNum].images.length;
              setCurrentImageIndex(newIndex);
              setShowModal(our_work_data[tabNum].images[newIndex]);
            }}
            className="absolute right-4 top-1/2 text-white text-4xl font-bold z-50"
          >
            ›
          </button>
        </div>
      )}

    </div>
  )
}

export default Our_work
