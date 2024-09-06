import React from "react";
import { HeroBlob } from "./HeroSection";

const CareerHeroSection = () => {
  return (
    <div className="font-poppins flex justify-center items-center flex-col mb-14 md:mb-20 relative  min-[2300px]:w-[70%] min-[2300px]:mx-auto">
{/*      
            <HeroBlob
            sx={{
              background: "rgba(62, 95, 170, 0.25)",
              bottom: "40%",
              zIndex: "-1",
              left: "10px",
            }}
            key={"UniqueElementor2"}
          />
        */}
    
      
      <div className="flex flex-col justify-center items-center ">
        <h1 className="text-4xl md:text-7xl font-bold mb-4 text-center">CAREERS</h1>
        <div className="flex text-sm md:text-xl gap-5">
          <p>H</p>
          <p>O</p>
          <p>M</p>
          <p>E /</p>
          <p>C</p>
          <p>A</p>
          <p>R</p>
          <p>E</p>
          <p>E</p>
          <p>R</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between mt-24">
        <h2 className="font-bold text-xl md:text-4xl w-full md:w-1/4 mb-6 md:mb-0">Begin Your Career With Us</h2>

        <div className="flex gap-3 w-full md:w-1/2 items-center">
       
          <div className="w-1 h-20 sm:h-16 bg-[#5D38C2]"></div>
          <p className="text-sm">
            Explore our diverse range of rewarding opportunities where you can
            apply your talents to meaningful projects. Join us in shaping the
            future together – your skills are the catalyst for innovation and
            positive impact.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CareerHeroSection;
