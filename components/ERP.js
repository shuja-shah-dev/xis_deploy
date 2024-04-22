import React from "react";
import Link from "next/link";
import Image from "next/image";

const ERP = () => {
  const gradientStyleMain = {
    background:
      " linear-gradient(0deg, rgba(62, 95, 170, 0.25) 0%, rgba(48, 20, 102, 0.25) 193.33%)",
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
        <h1 className="text-2xl sm:text-4xl  mb-2 font-inter text-[#FFF]">
          ERP & CRM
        </h1>
        <p className="font-poppins text-gray-300 mb-6 sm:mb-10 text-sm sm:text-base">
          Lorem ipsum dolor sit amet consectetur. Faucibus facilisis vulputate
          nulla tellus sit nunc id tellus. Nunc nulla morbi gravida id pharetra
          faucibus aliquet tempor lacus.
        </p>
      </div>

      <div className="lg:flex sm:justify-end justify-center mt-14 sm:mt-4 md:mt-0 hidden">
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
};

export default ERP;
