import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";

const AIApplicationsCard = ({ data }) => {


  const gradientStyle = {
    background:
      "linear-gradient(180deg, rgba(48, 20, 102, 0.25) 0%, rgba(62, 95, 170, 0.25) 100%)",
  };

  const gradientStyleMain = {
    background:
      "linear-gradient(184deg, rgba(62, 95, 170, 0.13) 28.13%, rgba(87, 200, 231, 0.00) 98.75%)",
  };

  return (
    <div className="flex flex-wrap gap-6 w-[70%] relative">
      {data.map((item, index) => (
        <div
          key={index}
          style={gradientStyleMain}
          className="w-[250px] rounded-2xl "
        >
          <div className="rounded-xl h-40 overflow-hidden">
            <Image
              className="object-cover object-center h-full w-full"
              src={item.path}
              alt={`content-${index}`}
              width={300}
              height={300}
            />
          </div>

          <div className="px-4  mt-4">
            <h1 className="font-bold text-white text-xl">{item.label}</h1>
            <p className="text-sm mt-2 leading-7 text-gray-300">
              <p className="text-sm mt-2 leading-7 text-gray-300">
                {item.desc}
              </p>
            </p>
          </div>

          <div
            style={gradientStyle}
            className="w-[40%] cursor-pointer ml-auto mt-4 mr-2 mb-4 py-1  text-gray-300   test-base text-center  border-2  border-[#5D38C2] rounded-3xl"
          >
            Get Started
          </div>
        </div>
      ))}
    </div>
  );
};

export default AIApplicationsCard;
