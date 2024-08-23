import React from "react";
import IndustryCard from "./IndustryCard";
import Image from "next/image";
import { HeroBlob } from "./HeroSection";

const IndustrySolutions = () => {
  const IndustrySolutionsData = [
    {
      path: "/apples_food.png",
      label: "Food",
    },
    {
      path: "/electronic_new.png",
      label: "Electronics",
    },
    {
      path: "/i3.png",
      label: "Metal",
    },
    {
      path: "/newi4.png",
      label: "Package Handle",
    },
    {
      path: "/i5.png",
      label: "Wood",
    },
    {
      path: "/i6.png",
      label: "Molding",
    },
    {
      path:'/_i7.png',
      label:'Pharma'
    },
    // {
    //   path:'/xray2.png',
    //   label:'Medical'
    // }
  ];

  return (
    <div className="pb-24 sm:pb-36 px-2 sm:px-4 lg:px-16 relative">
      <div className="flex flex-col justify-center items-center mb-14">
        <h1 className="pb-1.5 font-inter text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 text-center md:text-justify">
          Industry Solutions
        </h1>
        <h3 className="font-poppins text-gray-300 text-base sm:text-xl md:text-xl mt-4 w-full md:w-[800px] text-center ">
          xis.ai Suite provides powerful software infrastructure to deliver all
          your AI vision applications with one solution.
        </h3>
      </div>

      <HeroBlob
        sx={{
          top: "200px",
          right: "-1px",
          zIndex: "1",
          height: "568px",
          width: "568px",
          // borderRadius: "568px",
        }}
        key="SmallBlob"
      />

      {/* <HeroBlob
        sx={{
          top: "500px",
          right: "20%",
          zIndex: "-1",
        }}
        key={"NormalSizedBlob"}
      /> */}

      <IndustryCard data={IndustrySolutionsData} />
    </div>
  );
};

export default IndustrySolutions;
