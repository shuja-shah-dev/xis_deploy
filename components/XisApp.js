import React from "react";
import Link from "next/link";
import Image from "next/image";

const XisApp = () => {
  const gradientStyleMain = {
    background:
      "linear-gradient(0deg, rgba(62, 95, 170, 0.25) 0%, rgba(48, 20, 102, 0.25) 193.33%)",
  };

  return (
    <div
      style={gradientStyleMain}
      className="w-full 2xl:w-[90%] 2xl:mx-auto h-full mt-12 rounded-3xl p-8 md:p-12"
    >
      <div className="">
        <h1 className="text-2xl sm:text-4xl md:text-[46px] xl:w-1/2 mb-10 font-inter font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          AI Based Visual Quality Solution for Manufacture
        </h1>
      </div>

      <div className="flex justify-center">
        <div>
          <div className="mt-2 sm:mt-4 md:mt-0 flex xl:flex-row flex-col xl:gap-10 gap-5">
            <Image
              className=" "
              src="/Desktop inference 1.svg"
              width={505}
              height={400}
              alt="screen img"
            />

            <Image
              className=""
              src="/team.svg"
              width={495}
              height={400}
              alt="screen img"
            />
          </div>

          <Image
            className="hidden xl:flex mt-[-350px] ml-[180px]"
            src="/training.svg"
            width={670}
            height={400}
            alt="screen img"
          />
        </div>
      </div>
    </div>
  );
};

export default XisApp;
