import React from "react";
import Image from "next/image";
import { HeroBlob } from "./HeroSection";
import LogoBar from "./LogoBar";

const ProductHeader = () => {
  return (
    <>
      <HeroBlob
        sx={{
          top: "0px",
          zIndex: "-1",
          width: "300px",
        }}
      />
      <HeroBlob
        sx={{
          background: "rgba(62, 95, 170, 0.25)",
          top: "20px",
          zIndex: "-1",
          right: "0px",
        }}
        key={"UniqueElementor2"}
      />
      <div className="min-[2300px]:w-[70%] min-[2300px]:mx-auto">
        <div className="flex flex-col md:flex-row mt-10 md:mt-20 justify-center ">
          <div className="w-full md:w-1/2 md:mt-16 xl:mt-32">
            <h2 className="font-inter mb-4  text-3xl md:text-4xl xl:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Unlock the Power of Computer Vision AI
            </h2>
            <p className="font-poppins text-justify max-w-text-lg text-[16px] sm:text-[20px] xl:text-[24px] leading-6 mb-4 md:mb-0 md:leading-8 lg:leading-10 opacity-75 w-full ">
              xis.ai's cutting-edge Computer Vision AI platform revolutionizes
              the way you develop and deploy AI solutions. From ideation to
              production, our seamless platform streamlines every step of the AI
              lifecycle, empowering you to bring your vision to life with
              unparalleled efficiency.
            </p>
          </div>

          <div className="hidden 2xl:block ml-[100px]">
            <Image src="/test (1).svg" width={610} height={550} className="" />
            <Image
              src="/test.svg"
              width={700}
              height={550}
              className="mt-[-465px] ml-[-100px]"
            />
          </div>

          <div className=" lg:ml-[100px] 2xl:hidden">
            <Image src="/test (1).svg" width={610} height={550} className="" />
            <Image
              src="/test.svg"
              width={700}
              height={550}
              className="mt-[-420px] ml-[-60px] hidden xl:block"
            />
          </div>
        </div>
        <div className="py-14 min-[2300px]:w-[95%] min-[2300px]:m-auto">
          <LogoBar />
        </div>
      </div>
    </>
  );
};

export default ProductHeader;
