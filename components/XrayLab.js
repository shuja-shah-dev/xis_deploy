import React from "react";
import Link from "next/link";
import Image from "next/image";

const XrayLab = () => {
  const gradientStyleMain = {
    background:
      "linear-gradient(154deg, rgba(17, 37, 21, 0.25) 16.36%, rgba(147, 200, 62, 0.25) 100%)",
  };

    return (
      <div
        style={gradientStyleMain}
        className="w-full 2xl:w-[90%] 2xl:mx-auto h-full mt-12 rounded-3xl lg:pt-32 px-8 pt-8 md:px-12 justify-between flex flex-col lg:flex-row gap-10 "
      >
        <div className="lg:w-2/5 mb-4 lg:mb-0">
          <h1 className="text-2xl sm:text-4xl md:text-[46px]  mb-2 font-inter font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            XRAY LAB WEBSITE
          </h1>
        </div>
        {/* <Image
            className=""
            src="/Mask group0.png"
            width={400}
            height={400}
            alt="screen img"
          /> */}
        <Image
          className="m-auto "
          src="/x-ray lab 1.svg"
          width={600}
          height={1300}
          alt="screen img"
        />
      </div>
    );
};

export default XrayLab;
