import React, { useRef } from "react";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";
import DOMPurify from "dompurify";
import Truncate from "react-truncate-html";

const ServicesCard = ({ data }) => {
  const gradientStyleMain = {
    background:
      "linear-gradient(184deg, rgba(62, 95, 170, 0.13) 28.13%, rgba(87, 200, 231, 0.00) 98.75%)",
  };

  return (
    <div className="flex flex-wrap gap-4 sm:gap-6 justify-center mx-1 sm:mx-0 relative z-50">
      {data.map((c, index) => (
        <div
          key={index}
          style={gradientStyleMain}
          className="ftest flex flex-col justify-between w-[200px] sm:w-[300px] md:w-[350px] p-6 h-[340px] rounded-2xl border-2 border-slate-800"
        >
          <style jsx>{`
            @media (max-width: 424px) {
              .ftest {
                width: 85%;
                // margin: 2px 8px;
              }
            }

            .ftest {
              transition: 0.1s ease-in-out;
              cursor: pointer;
            }

            .ftest:hover {
              border: 1px solid #5d38c2;
            }
          `}</style>

          <Image
            className="m-auto"
            src={c.path}
            width={100}
            height={100}
            alt={`${c.label} img`}
          />

          <div className=" mb-8">
            <h1 className=" m-auto text-center w-3/5 font-semibold opacity-75 text-[#FFF] text-lg sm:text-2xl font-inter">
              {c.label}
            </h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesCard;
