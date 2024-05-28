import React from "react";

const ProductFeatures = ({ data }) => {
  return (
    <>
      <div className=" text-4xl md:text-[40px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 font-inter mb-4">
        Features
      </div>
      <div className="flex flex-col md:flex-row flex-wrap justify-between font-poppins opacity-75 test-[21px] leading-10">
        {data.map((text, index) => (
          <div key={index} className="w-full md:w-[37%] flex p-1">
            <divc className="bg-white w-[6px] h-[6px] mr-4 mt-4 rounded-full"></divc>
            <p> {text}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductFeatures;
