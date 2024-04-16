import React, { useRef } from "react";
// import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";
import DOMPurify from "dompurify";
import Truncate from "react-truncate-html";

const SDCard = ({ data }) => {
  const gradientStyle = {
    background:
      "linear-gradient(317deg, rgba(93, 56, 194, 0.25) -1.1%, rgba(182, 61, 232, 0.00) 52.97%)",
    border: "1px solid #5D38C2",
  };
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
          className="ftest flex flex-col justify-between w-[200px] sm:w-[300px] md:w-[350px] p-6 h-[300px] rounded-2xl border-2 border-slate-800"
        >
          <style jsx>{`
            @media (max-width: 440px) {
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
              border: 2px solid #5d38c2;
            }
          `}</style>
          <div className="flex justify-between items-center">
            <div
              style={gradientStyle}
              className="w-12 h-12  border-2  rounded-xl"
            >
              <Image
                className={` mt-3 ${
                  c.path === "/Frame (2).svg" ? "ml-4" : "ml-3"
                }`}
                src={c.path}
                width={c.path === "/Frame (2).svg" ? 16 : 24}
                height={24}
                alt={`${c.label} img`}
              />
            </div>
            {/* <FaArrowRight color="white" size={24} className="opacity-75" /> */}
          </div>

          <div className=" mb-8 ">
            <h1 className="font-semibold opacity-75 text-[#FFF] text-2xl font-inter">
              {c.label}
            </h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SDCard;