import React , {lazy , Suspense, useEffect, useState} from 'react';
// import Loader from './Animation/Loader';
import { GlobalProvider } from './GlobalStates/GlobalState';
import Loader from './Animation/Loader';
import Navbar from './NavBar/Navbar';
import Hero from './Sections/Hero';
import Hero_two from './Sections/Hero_two';
import Our_Packages from './Sections/Our_Packages';
import Our_work from './Sections/Our_work';
import CTA from './Sections/CTA';


// Lazy load components

// const Hybrid = lazy(() => import('./Services/AppDev/Hybrid'));

function App() {
  
  
  return (
    <>
    {/* Wrap Routes in Suspense */}
    <Suspense fallback={<Loader />}>
    <GlobalProvider>
        <Navbar/>

        <Hero/>
        <Hero_two/>

        <Our_Packages/>

        <Our_work/>

        <CTA/>

    </GlobalProvider>
    </Suspense>
    </>
  );
}

export default App;
