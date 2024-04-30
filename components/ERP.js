import React from "react";
import Link from "next/link";
import Image from "next/image";

const ERP = () => {
  const gradientStyleMain = {
    background:
      " linear-gradient(0deg, rgba(62, 95, 170, 0.25) 0%, rgba(48, 20, 102, 0.25) 193.33%)",
    };
    
  return (
    <div
      style={gradientStyleMain}
      className="w-full 2xl:w-[90%] 2xl:mx-auto h-full rounded-3xl mt-12"
    >
      <div className="p-8 md:p-12">
        <h1 className="text-2xl sm:text-4xl md:text-[46px]  mb-8 font-inter font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          ERP & CRM
        </h1>
        <p className="font-poppins text-[#FFF] opacity-75 text-base md:text-[20px] xl:text-[24px] md:leading-8 xl:leading-10">
          Xis Time Tracker is an ERP & CRM system with advanced real-time
          invoicing, project management, and KPI indicators. It offers easy
          time-tracking for freelancers, agencies, and companies, along with
          seamless user and invoice handling
        </p>
      </div>

      <div className=" flex justify-center">
        <div className="sm:border border-[#193037] rounded-3xl">
          <Image
            className=""
            src="/time.svg"
            width={602.304}
            height={422.151}
            alt="screen img"
          />

          <Image
            className="hidden xl:flex mt-[-406px] ml-[492px]"
            src="/table.svg"
            width={556.839}
            height={390.277}
            alt="screen img"
          />

          <Image
            className="hidden xl:flex mt-[-90px] ml-[331px]"
            src="/dashboard.svg"
            width={687.692}
            height={475.116}
            alt="screen img"
          />
        </div>
      </div>

      {/* <div className="lg:hidden justify-center  items-center flex flex-col mt-14">
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
      </div> */}
    </div>
  );
};

export default ERP;
