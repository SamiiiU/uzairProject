import React, { createContext, useState, useContext, useEffect } from 'react';

// Create a new context
const GlobalContext = createContext();

// Custom hook to use the GlobalContext easily
export const useGlobalContext = () => {
    return useContext(GlobalContext);
};

// Create a provider component
export const GlobalProvider = ({ children }) => {
    // Example of global state (You can add more states as needed)

    
    const [packageSelect , setPackage] = useState("");
    const [scrwidth, setWidth] = useState(window.innerWidth); 
    const [isFormVisible , setIsFormVisible] = useState(false);
    const [isNavVisible , setIsNavVisible] = useState(false)
    const [showImageViewer , setShowImageViewer] = useState(false);


    // 👇 Smooth scroll with offset (for fixed navbar)
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Adjust based on your navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setIsNavVisible(false)
    }
    } ;
    
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        // Add event listener
        window.addEventListener('resize', handleResize);
        
        return () => {
          window.removeEventListener('resize', handleResize)
        };
        
        }, []);


    return (
        <GlobalContext.Provider value={{ 
            
            packageSelect , setPackage,
            scrwidth,
            isFormVisible , setIsFormVisible,
            scrollToSection,
            isNavVisible , setIsNavVisible,
            showImageViewer , setShowImageViewer

            }}>
            {children}
        </GlobalContext.Provider>
    );
};
