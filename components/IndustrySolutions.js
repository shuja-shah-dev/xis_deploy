import React from "react";
import IndustryCard from "./IndustryCard";
import Image from "next/image";

const IndustrySolutions = () => {
  const IndustrySolutionsData = [
    {
      path: "/transportation.png",
      label: "Transportation",
    },
    {
      path: "/technology.png",
      label: "Technology",
    },
    {
      path: "/healthcare.png",
      label: "Healthcare",
    },
    {
      path: "/smart city.png",
      label: "Smart city",
    },
    {
      path: "/manufacturing.png",
      label: "Manufacturing",
    },
    {
      path: "/retail.png",
      label: "Retail",
    },
  ];

  return (
    <div className="pb-48 px-16 relative">
      <div className="flex flex-col justify-center items-center mb-14">
        <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 text-center md:text-justify">Industry Solutions</h1>
        <h3 className="text-gray-300 text-2xl mt-4 w-full md:w-[800px] text-center ">
          Xis.ai Suite provides powerful software infrastructure to deliver all
          your AI vision applications with one solution.
        </h3>
      </div>

      <div className=" absolute right-[180px]  top-[-300px]">
        <Image src="/Ellipse 171.png" alt="Ellipse " height={900} width={900} />
      </div>

      <div className=" absolute right-0 ">
        <Image src="/Ellipse 166.png" alt="Ellipse " height={800} width={360} />
      </div>

      <IndustryCard data={IndustrySolutionsData} />
    </div>
  );
};

export default IndustrySolutions;
