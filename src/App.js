import React, { lazy, Suspense } from 'react';
import { GlobalProvider } from './GlobalStates/GlobalState';
import Loader from './Animation/Loader';
import Navbar from './NavBar/Navbar';
import Hero from './Sections/Hero';
import Hero_two from './Sections/Hero_two';
import Footer from './Sections/Footer';
import CommonForm from './CommonForm/CommonForm';
import TawkMessenger from './LiveChat/TawkMessenger';

import './app.css';
import ImageViewer from './PreBuildComps/ImageViewer';


const Our_Packages = lazy(() => import('./Sections/Our_Packages'));
const Our_work = lazy(() => import('./Sections/Our_work'));
const CTA = lazy(() => import('./Sections/CTA'));
const WebMade = lazy(() => import('./Sections/WebMade'));
const Testimonals = lazy(() => import('./Sections/Testimonals'));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <GlobalProvider>
        <div className=" overflow-x-hidden scrollbar-hidden font-poppins_sans">
          <Navbar />
          <Hero />

          <div id="Home">
            <Hero_two />
          </div>

          <div id="Packages">
            <Our_Packages />
          </div>

          <div id="Work">
            <Our_work />
            
          </div>
          <CTA />
          <WebMade />
          <div id="reviews">
            <Testimonals />
          </div>

          <Footer />
          <CommonForm />
          <TawkMessenger />


        </div>
      </GlobalProvider>
    </Suspense>
  );
}

export default App;
