import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './style.css'
import { IoIosArrowForward , IoIosArrowBack } from "react-icons/io";
import { useEffect, useState } from "react";


const CustomSlider = ({children }) => {

    const [width, setWidth] = useState(window.innerWidth);

    // Function to update width state on window resize
    const updateWidth = () => {
      setWidth(window.innerWidth);
    };
  
    // Add event listener for window resize
    useEffect(() => {
      window.addEventListener("resize", updateWidth);
      
      // Clean up event listener on component unmount
      return () => {
        window.removeEventListener("resize", updateWidth);
      };
    }, []);
  const NextArrow = ({ onClick }) => (
    <div onClick={onClick} className="absolute  hover:text-textColor text-textColor/80 -right-10 top-1/2 transform -translate-y-1/2 cursor-pointer  z-10 text-4xl p-2  ">
      <IoIosArrowForward  />
    </div>
  );
  
  const PrevArrow = ({ onClick }) => (
    <div onClick={onClick} className="absolute hover:text-textColor text-textColor/80 -left-10 top-1/2 transform -translate-y-1/2 cursor-pointer z-10 text-4xl p-2 ">
      <IoIosArrowBack  />
    </div>
  );

  const settings = {
    dots: width > 1100 ? false : true,
    speed: 500,
    slidesToShow: width > 1100 ?  3 : (width > 800 ? 2 : 1),
    
    
    slidesToScroll: 1,
    nextArrow: width > 1100 ? <NextArrow /> : null,
    prevArrow: width > 1100 ? <PrevArrow /> : null,
    
  };
  return (
    <Slider {...settings}>
      {children}
    </Slider>
  );
};



export default CustomSlider;
