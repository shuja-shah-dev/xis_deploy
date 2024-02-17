import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";

const FeatureCard = ({ data }) => {
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
    <div className="flex flex-wrap gap-6 justify-center">
      {data.map((c, index) => (
        <div
          key={index}
          style={gradientStyleMain}
          className="w-[350px] p-6 bg-slate-900 rounded-2xl border-2 border-slate-800"
        >
          <div className="flex justify-between items-center">
            <div
              style={gradientStyle}
              className="w-12 h-12  border-2  rounded-xl"
            >
              <Image
                className="ml-3 mt-2"
                src={c.path}
                width={24}
                height={24}
                alt={`${c.label} img`}
              />
            </div>
            <FaArrowRight color="white" size={24} />
          </div>

          <div className=" mt-8">
            <h1 className="font-bold text-white text-xl">{c.label}</h1>
            <p className="text-sm mt-2 leading-7 text-gray-300">{c.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureCard;
