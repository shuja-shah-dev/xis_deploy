import { HeroBlob } from "@/components/HeroSection";
import React from "react";
import Link from "next/link";
import Product from "@/components/Product";

const page = () => {
  return (
    <div className="relative ">
      {/* <div className="h-full flex flex-col justify-center items-center mb-14 w-1/2 sm:w-3/5 m-auto ">
        <h1 className="font-inter pb-1.5 text-4xl md:text-5xl font-bold bg-clip-text text-center text-transparent bg-gradient-to-r from-white to-gray-400 animate-pulse">
          Site is being Updated
        </h1>
        <h3 className="font-poppins text-gray-300 text-base sm:text-xl md:text-2xl mt-4 sm:w-[600px] md:w-[700px] text-center animate-bounce">
          Stay Tuned
        </h3>
      </div> */}
      <Product />
    </div>
  );
};

export default page;
