import React from "react";
import Image from "next/image";

const OtherServicesCard = ({ data }) => {
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
    <div
      style={gradientStyleMain}
      className="ftest flex flex-col text-center md:flex-row gap-4 md:gap-0 justify-around items-center md:items-baseline w-full p-6 rounded-2xl border-2 border-slate-800"
    >
      <style jsx>{`
        .ftest {
          transition: 0.1s ease-in-out;
          cursor: pointer;
        }

        .ftest:hover {
          border: 1px solid #5d38c2;
        }
      `}</style>
      {data.map((c, index) => (
        <div key={index} className="sm:w-1/5 flex flex-col items-center">
          <div
            style={gradientStyle}
            className="w-16 h-16  border-2 m-auto  rounded-xl"
          >
            <Image
              className="ml-4 mt-4"
              src={c.path}
              width={28}
              height={28}
              alt={`${c.label} img`}
            />
          </div>

          <div className=" mt-4 ">
            <h1 className="text-center opacity-75 text-[#FFF] text-xl sm:text-2xl font-inter">
              {c.label}
            </h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OtherServicesCard;
