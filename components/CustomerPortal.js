import React from "react";
import Link from "next/link";
import Image from "next/image";

const CustomerPortal = () => {
  const gradientStyleMain = {
    background:
      "linear-gradient(154deg, rgba(17, 37, 21, 0.25) 16.36%, rgba(147, 200, 62, 0.25) 100%)",
  };

  const gradientStyleBtn = {
    background:
      "linear-gradient(0deg, rgba(62, 95, 170, 0.25) 0%, rgba(48, 20, 102, 0.25) 193.33%)",
  };

  return (
    <div
      style={gradientStyleMain}
      className="w-full 2xl:w-[90%] 2xl:mx-auto h-full mt-12 rounded-3xl lg:pt-32 px-8 pt-8 md:px-12 justify-between flex flex-col lg:flex-row gap-10 "
    >
      <div className="lg:w-2/5 mb-4 lg:mb-0">
        <h1 className="text-2xl sm:text-4xl  mb-2 font-inter text-[#FFF]">
          Customer Portal
        </h1>
        <p className="font-poppins text-gray-300  mb-6 sm:mb-10 text-sm sm:text-base">
          Lorem ipsum dolor sit amet consectetur. Faucibus facilisis vulputate
          nulla tellus sit nunc id tellus. Nunc nulla morbi gravida pharetra
          faucibus aliquet tempor ipsum lacusLorem ipsum dolor sit amet dolor
          consectetur.
        </p>

        <Link
          style={gradientStyleBtn}
          className=" text-sm sm:text-xl opacity-95 py-2 px-[22px] rounded-full border border-[#5D38C2] backdrop-blur-2xl"
          href="#"
        >
          Learn Now
        </Link>
      </div>

    
       
          <Image
            className=" m-auto"
            src="/customer portal 1.svg"
            width={650}
            height={1300}
            alt="screen img"
          />
        
     
    </div>
  );
};

export default CustomerPortal;
