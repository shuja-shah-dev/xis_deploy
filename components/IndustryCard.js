import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";

const IndustryCard = ({ data }) => {
  const gradientStyle = {
    background:
      "linear-gradient(0deg, rgba(0, 0, 0, 0.75) 0%, rgba(62, 95, 170, 0.75) 193.33%)",
    border: "1px solid #5D38C2",
  };
  //
  return (
    <div className="flex flex-wrap gap-2 sm:gap-6 justify-center">
      {data.map((c, index) => (
        <div key={index} className="itest relative">
          <style jsx>{`
            @media (max-width: 391px) {
              .itest {
                width: 100%;
                margin-left: 4px;
              }
            }
          `}</style>
          <div className="w-[184px] sm:w-[300px] md:w-[350px] h-[300px] rounded-2xl ">
            <Image
              className="rounded-2xl"
              src={c.path}
              alt={`${c.label} img`}
              layout="fill"
            />
          </div>

          <div
            style={gradientStyle}
            className="w-[80%] sm:w-1/2 mt-[-60px] ml-6 absolute py-1 px-3 text-gray-300 font-bold text-xl text-center  border-2  rounded-3xl"
          >
            {c.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default IndustryCard;
