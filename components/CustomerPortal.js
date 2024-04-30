import React from "react";
import Link from "next/link";
import Image from "next/image";

const CustomerPortal = () => {
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
        <h1 className="text-2xl sm:text-4xl md:text-[46px]  mb-8 font-inter font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          Customer Portal
        </h1>
        <p className="font-poppins text-[#FFF] opacity-75  text-base  md:text-[20px] xl:text-[24px] md:leading-8 xl:leading-10">
          An advanced CRM and CMS tailored for efficient Project Management,
          Customer Management, and KPI tracking. Designed with our customers in
          mind, users can effortlessly access testing instructions, monitor
          project progress, and gauge performance, all within one intuitive
          platform
        </p>

        {/* <Link
          style={gradientStyleBtn}
          className=" text-sm sm:text-xl opacity-95 py-2 px-[22px] rounded-full border border-[#5D38C2] backdrop-blur-2xl"
          href="#"
        >
          Learn Now
        </Link> */}
      </div>

      <Image
        className="overflow-hidden m-auto"
        src="/customer portal 1.svg"
        width={650}
        height={1300}
        alt="screen img"
      />
    </div>
  );
};

export default CustomerPortal;
