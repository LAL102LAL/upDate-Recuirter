import React from "react";
import img1 from "../assets/$R4B4KJ1.png";
import img2 from "../assets/$RE4PF36.png";
import img3 from "../assets/$RII09C0.png";
import img4 from "../assets/$RQ5M2BG.png";
import img5 from "../assets/$RS46AIZ.png";
import img6 from "../assets/$RXFWV5W.png";
import img7 from "../assets/m1.png";
import img8 from "../assets/m2.png";
import img9 from "../assets/m3.png";
import img10 from "../assets/m4.png";
import img11 from "../assets/m5.png";
import img12 from "../assets/m6.png";
import "./NavBar.css";
const MarqueeSection = () => {
  return (
    <>
      {/* Heading Section */}
      <div className="text-center my-6">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
          Get Placed in Your Dream Companies...
        </h1>
        <hr className="mt-4 border-gray-500 w-3/4 mx-auto p-2 "  />
      </div>

      {/* Marquee Section */}
      <div className="marquee-container overflow-hidden marque h-10 sm md:h-20 w-full p-5">
       
          <h1 className="h-[10rem]">
            <img
              src={img12}
              alt="suggi"
              className="w-[12rem] sm:w-[9rem] md:w-[5rem] "
            />
          </h1>
        
        <h1>
          <img
            src={img2}
            alt="ola"
            className="w-[8rem] sm:w-[9rem] md:w-[5rem] h-7rem"
          />
        </h1>
        <h1>
          <img
            src={img3}
            
            alt="flipkat"
            className="w-[8rem] sm:w-[9rem] md:w-[5rem] h-auto"
          />
        </h1>
        <h1>
          <img
            src={img4}
            alt="amazon"
            className="w-[8rem] sm:w-[9rem] md:w-[5rem] h-auto"
          />
        </h1>
        <h1>
          <img
            src={img5}
            alt="zamoto"
            className="w-[8rem] sm:w-[9rem] md:w-[5rem] h-auto"
          />
        </h1>
        <h1>
          <img
            src={img6}
            alt="zamoto"
            className="w-[8rem] sm:w-[9rem] md:w-[5rem] h-auto"
          />
        </h1>
        <h1>
          <img
            src={img7}
            alt=""
            className="w-[8rem] sm:w-[9rem] md:w-[5rem] h-auto"
          />
        </h1>
        <h1>
          <img
            src={img8}
            alt=""
            className="w-[8rem] sm:w-[9rem] md:w-[5rem] h-auto"
          />
        </h1>
        <h1>
          <img
            src={img9}
            alt=""
            className="w-[8rem] sm:w-[9rem] md:w-[5rem] h-auto"
          />
        </h1>
        <h1>
          <img
            src={img10}
            alt=""
            className="w-[8rem] sm:w-[9rem] md:w-[5rem] h-auto"
          />
        </h1>
        <h1>
          <img
            src={img11}
            alt=""
            className="w-[8rem] sm:w-[9rem] md:w-[5rem] h-auto"
          />
        </h1>
        <h1>
          <img
            src={img12}
            alt=""
            className="w-[8rem] sm:w-[9rem] md:w-[5rem] h-auto"
          />
        </h1>
      </div>
{/* Mobile view */}
      <div className="block sm:hidden">
      <div className="w-full max-w-xs mx-auto border-2 border-gray-400 p-4 rounded-lg bg-white">
         <ul className="grid grid-cols-3 gap-4 text-center">
           <li>
            <img src={img1} alt="Company 1" className="w-[8rem] h-auto mx-auto" />
       
        </li>
        <li>
        <img src={img2} alt="Company 2" className="w-[8rem] h-auto mx-auto" />
       
      </li>
      <li>
        <img src={img3} alt="Company 3" className="w-[8rem] h-auto mx-auto" />
      
      </li>
      <li>
        <img src={img4} alt="Company 4" className="w-[8rem] h-auto mx-auto" />
      
      </li>
      <li>
        <img src={img5} alt="Company 5" className="w-[8rem] h-auto mx-auto" />
       
      </li>
      <li>
        <img src={img6} alt="Company 6" className="w-[8rem] h-auto mx-auto" />
       
      </li>
      <li>
        <img src={img7} alt="Company 7" className="w-[8rem] h-auto mx-auto" />

      </li>
      <li>
        <img src={img8} alt="Company 8" className="w-[8rem] h-auto mx-auto" />
   
      </li>
      <li>
        <img src={img9} alt="Company 9" className="w-[8rem] h-auto mx-auto" />
  
      </li>
      <li>
        <img src={img10} alt="Company 10" className="w-[8rem] h-auto mx-auto" />

      </li>
      <li>
        <img src={img11} alt="Company 11" className="w-[8rem] h-auto mx-auto" />

      </li>
      <li>
        <img src={img12} alt="Company 12" className="w-[8rem] h-auto mx-auto" />
     
      </li>
    </ul>
  </div>
</div>

      
      
    </>
  );
};

export default MarqueeSection;
