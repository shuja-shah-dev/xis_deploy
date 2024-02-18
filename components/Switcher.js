"use client";

import Image from "next/image";
import React, { useState } from "react";
import { HeroBlob } from "./HeroSection";

const Software = () => {
  return (
    <div className=" px-16 pb-28 " style={{ position: "relative" }}>
      <div className="flex lg:flex-row flex-col justify-around">
        <div>
          <Image src="/screen.png" width={760} height={500} alt="screen img" />
        </div>

        <div className="text-white flex flex-col lg:w-1/4 w-full mt-10 lg:mt-0">
          <h2 className="text-2xl mb-4 font-bold ">Text Here</h2>
          <p className="text-left leading-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit cumque veniam harum nihil temporibus repellendus
            minima quam impedit dolorem, enim dolor voluptas aspernatur
            voluptates vel dolore esse magni blanditiis pariatur.
          </p>
          <p className="text-left mt-4 leading-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit cumque veniam harum nihil temporibus repellendus
            minima quam impedit dolorem, enim dolor voluptas aspernatur
            voluptates vel dolore esse magni blanditiis pariatur.
          </p>
        </div>
      </div>
      <HeroBlob
        sx={{
          zIndex: 99,
          bottom: "20px",
          right: "500px",
          width: "462px",
          height: "462px",
          borderRadius: "462px",
        }}
      />
    </div>
  );
};

const Switcher = () => {
  const [activeTab, setActiveTab] = useState("software");

  return (
    <div className="pt-24 relative">
      {/* <div className=" absolute left-0  sm:top-[-810px] top-[-850px]">
        <Image src="/Ellipse 165.png" alt="Ellipse " height={900} width={900} />
      </div> */}
      {/* <div className=" absolute right-0  top-[-1100px]">
        <Image src="/Ellipse 166.png" alt="Ellipse " height={900} width={900} />
      </div> */}
      {/* <div className=" absolute left-0  top-[-400px]">
        <Image src="/Ellipse 172.png" alt="Ellipse " height={900} width={900} />
      </div> */}
      {/* <div className=" absolute right-10  top-20">
        <Image src="/Ellipse 173.png" alt="Ellipse " height={900} width={900} />
      </div> */}

      <div className="flex justify-center items-center pb-14">
        <div className="text-white relative text-base sm:text-lg border-2 border-gray-400 rounded-full flex flex-row gap-0 sm:gap-4 px-4 py-2 ">
          <div
            className={`cursor-pointer  ${
              activeTab === "software"
                ? "bg-slate-800 rounded-full border-2 border-[#5D38C2]"
                : "border-transparent"
            } py-2 px-6 `}
            onClick={() => setActiveTab("software")}
          >
            Software
          </div>
          <div
            className={`cursor-pointer ${
              activeTab === "hardware"
                ? "bg-slate-800 rounded-full border-2 border-[#5D38C2]"
                : "border-transparent"
            } py-2 px-6 `}
            onClick={() => setActiveTab("hardware")}
          >
            Hardware
          </div>
          <div
            className={`cursor-pointer ${
              activeTab === "robotics"
                ? "bg-slate-800 rounded-full border-2 border-[#5D38C2]"
                : "border-transparent"
            } py-2 px-6 `}
            onClick={() => setActiveTab("robotics")}
          >
            Robotics
          </div>
        </div>
      </div>

      {activeTab === "software" && <Software />}
      {/* {activeTab === "hardware" && <Software />}
      {activeTab === "robotics" && <Software />} */}
    </div>
  );
};

export default Switcher;
