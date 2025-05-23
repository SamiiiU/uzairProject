import React, { lazy, Suspense, useEffect, useState } from 'react';
// import Loader from './Animation/Loader';
import { GlobalProvider } from './GlobalStates/GlobalState';
import Loader from './Animation/Loader';
import Navbar from './NavBar/Navbar';
import Hero from './Sections/Hero';
import Hero_two from './Sections/Hero_two';
import Our_Packages from './Sections/Our_Packages';
import Our_work from './Sections/Our_work';
import CTA from './Sections/CTA';
import WebMade from './Sections/WebMade';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Testimonals from './Sections/Testimonals';
import Footer from './Sections/Footer';
import CommonForm from './CommonForm/CommonForm';



// Lazy load components

// const Hybrid = lazy(() => import('./Services/AppDev/Hybrid'));

function App() {


  return (
    <>
      {/* Wrap Routes in Suspense */}
      <Suspense fallback={<Loader />}>
        <GlobalProvider>
          <div className='relative overflow-x-hidden font-poppins_sans'>
            <Navbar />

            <Hero />
            <div id='Home'>
              <Hero_two />
            </div>

            <div id='Packages'>
              <Our_Packages />
            </div>

            <div id='Work'>
              <Our_work />

              <CTA />

              <WebMade />
            </div>

            <div id='reviews'>
            <Testimonals />
            </div>

            <Footer />

            <CommonForm />
          </div>

        </GlobalProvider>
      </Suspense>
    </>
  );
}

export default App;
