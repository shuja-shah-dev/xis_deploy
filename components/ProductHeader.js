import React from "react";
import Image from "next/image";
import { HeroBlob } from "./HeroSection";

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
      <div className="flex flex-col md:flex-row mt-10 md:mt-20 justify-center ">
        <div className="w-full md:w-1/2 md:mt-16 lg:mt-32">
          <h2 className="font-inter mb-4 text-4xl md:text-5xl lg:text-[54px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Xis Software
          </h2>
          <p className="font-poppins text-[16px] sm:text-[20px] lg:text-[24px] leading-6 mb-4 md:mb-0 md:leading-8 lg:leading-10 opacity-75 w-full 2xl:w-2/3">
            xis.ai offers a Computer Vision AI platform that covers the full AI
            life cycle. Streamline the entire process of developing.
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

        <div className=" md:ml-[100px] 2xl:hidden">
          <Image src="/test (1).svg" width={610} height={550} className="" />
          <Image
            src="/test.svg"
            width={700}
            height={550}
            className="mt-[-420px] ml-[-60px] hidden xl:block"
          />
        </div>
      </div>

      <div className="flex my-12 gap-6 sm:mx-0 mx-4 sm:gap-0 justify-around items-center md:px-10 sm:pb-10 px-1 sm:px-0">
        <div>
          <Image
            src="/Frame.png"
            alt="xray-lab logo"
            width={130}
            height={100}
          />
        </div>
        <div>
          <Image src="/ip2.png" alt="ipai logo" width={110} height={100} />
        </div>
        <div>
          <Image src="/nframe.png" alt="nvidia logo" width={140} height={47} />
        </div>
        <div>
          <Image src="/bosch.png" alt="bosch logo" width={150} height={100} />
        </div>
      </div>
    </>
  );
};

export default ProductHeader;
