import { HeroBlob } from "@/components/HeroSection";
import React from "react";
import Link from "next/link";

const page = () => {

  return (
    <div className="mt-20 relative">
      <HeroBlob
        sx={{
          background: "rgba(62, 95, 170, 0.25)",
          bottom: "1px",
          zIndex: "-1",
          left: "1px",
        }}
        key={"UniqueElementor2"}
      />

      <div className="h-full flex flex-col justify-center items-center mb-14 w-1/2 sm:w-3/5 m-auto ">
        <h1 className="font-inter pb-1.5 text-4xl md:text-5xl font-bold bg-clip-text text-center text-transparent bg-gradient-to-r from-white to-gray-400">
          Site is being Updated
        </h1>
        <h3 className="font-poppins text-gray-300 text-base sm:text-xl md:text-2xl mt-4 sm:w-[600px] md:w-[700px] text-center">
          ...
        </h3>
      </div>
    </div>
  );
};

export default page;
