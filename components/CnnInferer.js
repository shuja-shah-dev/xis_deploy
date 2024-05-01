import React from "react";
import Link from "next/link";
import Image from "next/image";

const CnnInferer = () => {
  const gradientStyleMain = {
    background:
      "linear-gradient(123deg, rgba(87, 200, 231, 0.25) 2.02%, rgba(0, 0, 0, 0.25) 96.88%)",
  };

  const gradientStyleBtn = {
    background:
      "linear-gradient(0deg, rgba(62, 95, 170, 0.25) 0%, rgba(48, 20, 102, 0.25) 193.33%)",
  };

  return (
    <div
      style={gradientStyleMain}
      className="w-full 2xl:w-[90%] 2xl:mx-auto h-full mt-12 rounded-3xl lg:pt-32  pl-8 py-8 md:pl-12 justify-between flex flex-col lg:flex-row gap-10 "
    >
      <div className="lg:w-2/5 mb-4 lg:mb-0">
        <h1 className="text-2xl sm:text-4xl md:text-[46px]  mb-8 font-inter font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          CNN Model Inferer
        </h1>
        <p className="font-poppins text-[#FFF] opacity-75  text-base  md:text-[20px] xl:text-[24px] md:leading-8 xl:leading-10 pr-8 lg:pr-0">
          A cutting-edge demonstration project developed exclusively for
          xis.ai's customers. This advanced and efficient program showcases the
          ability to rapidly infer multiple computer vision models in a matter
          of seconds, demonstrating the power and speed of modern AI technology
        </p>

        {/* <Link
          style={gradientStyleBtn}
          className=" text-sm sm:text-xl opacity-95 py-2 px-[22px] rounded-full border border-[#5D38C2] backdrop-blur-2xl"
          href="#"
        >
          Learn Now
        </Link> */}
      </div>

      <Image
        className="m-auto"
        priority={true}
        src="/black theme (1) 1.svg"
        width={670}
        height={861}
        alt="screen img"
      />
    </div>
  );
};

export default CnnInferer;
