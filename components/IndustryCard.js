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
    <div className="flex flex-wrap gap-4 sm:gap-6 justify-center">
      {data.map((c, index) => (
        <div key={index} className="itest relative">
          <style jsx>{`
            @media (max-width: 400px) {
              .itest {
                width: 90%;
                margin: 2px 8px;
              }
            }
          `}</style>
          <div className="w-[184px] sm:w-[300px] md:w-[350px] h-[200px] sm:h-[300px] rounded-2xl">
            <Image
              className="rounded-2xl"
              src={c.path}
              alt={`${c.label} img`}
              layout="fill"
            />
          </div>

          <div
            style={gradientStyle}
            className="font-poppins w-[50%] sm:w-[70%] md:w-1/2  top-4 left-4 absolute py-1 sm:px-3 text-gray-300 font-bold text-sm sm:text-lg text-center  border-2  rounded-3xl"
          >
            {c.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default IndustryCard;
