import React from 'react'
import Link from "next/link";
import Image from 'next/image';

const FarmSight = () => {
     const gradientStyleMain = {
       background: "linear-gradient(154deg, rgba(17, 37, 21, 0.25) 16.36%, rgba(147, 200, 62, 0.25) 100%)",
    };

     const gradientStyleBtn = {
       background:
         "linear-gradient(0deg, rgba(62, 95, 170, 0.25) 0%, rgba(48, 20, 102, 0.25) 193.33%)",
         
     };
    
    return (
      <div
        style={gradientStyleMain}
        className="w-full 2xl:w-[90%] 2xl:mx-auto h-full mt-32 rounded-3xl p-8 md:p-12"
      >
        <div className="">
          <h1 className="pb-2 text-2xl sm:text-4xl md:text-[46px] mb-8 font-inter font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            AI Based FARM Quality Solution
          </h1>
          <p className="font-poppins text-[#FFF] opacity-75  text-base  md:text-[20px] xl:text-[24px] md:leading-8 xl:leading-10">
            Farmsight leverages AI for comprehensive quality farming inspection. It includes real-time image analysis to identify crop
            diseases, pest infestations, and nutrient deficiencies. It provides
            tailored recommendations for treatment and management strategies,
            optimizing crop health. Farmsight integrates with existing farm
            management systems, streamlining data flow and decision-making
          </p>

          {/* <Link
            style={gradientStyleBtn}
            className=" text-sm sm:text-xl opacity-95 py-2 px-[22px] rounded-full border border-[#5D38C2] backdrop-blur-2xl"
            href="#"
          >
            Learn Now
          </Link> */}
        </div>

        <div className="lg:flex sm:justify-end justify-center md:mt-24 sm:mt-4  hidden ">
          <div className="">
            <Image
              className=" sm:mt-[-50px] sm:ml-[150px] "
              src="/Desktop - 3 1.svg"
              width={700}
              height={400}
              alt="screen img"
            />

            <Image
              className="sm:mt-[-434px] mt-4"
              src="/Desktop - 4.svg"
              width={700}
              height={400}
              alt="screen img"
            />
          </div>
        </div>

        <div className="lg:hidden justify-center  items-center flex flex-col mt-14">
          <Image
            className=" "
            src="/Desktop - 3 1.svg"
            width={700}
            height={400}
            alt="screen img"
          />

          <Image
            className="mt-4"
            src="/Desktop - 4.svg"
            width={700}
            height={400}
            alt="screen img"
          />
        </div>
      </div>
    );
}

export default FarmSight