import React from "react";
import Image from "next/image";
import { HeroBlob } from "./HeroSection";

const Hardware = () => {
  const gradient = {
    background:
      "linear-gradient(314deg, rgba(93, 56, 194, 0.25) -58.34%, rgba(182, 61, 232, 0.00) 100%)",

    backdropFilter: "blur(100px)",
  };
  const InnerGradient = {
    background:
      "linear-gradient(98deg, rgba(62, 95, 170, 0.13) -2.31%, rgba(87, 200, 231, 0.00) 100%)",

    backdropFilter: "blur(100px)",
  };

  return (
    <div className="relative">
      <HeroBlob
        sx={{
          bottom: "10%",
          zIndex: "-1",
          width: "200px",
        }}
      />
      <HeroBlob
        sx={{
          background: "rgba(62, 95, 170, 0.25)",
          bottom: "60%",
          zIndex: "-1",
          left: "0px",
        }}
        key={"UniqueElementor2"}
      />
      <HeroBlob
        sx={{
          background: "rgba(62, 95, 170, 0.25)",
          bottom: "15%",
          zIndex: "-1",
          left: "0px",
        }}
        key={"UniqueElementor2"}
      />
      <h1 className="my-20 font-inter  text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 text-center">
        Hardware
      </h1>

      <div
        className="border border-[#5D38C2] rounded-3xl p-12 min-[2050px]:w-[80%] m-auto"
        style={gradient}
      >
        <h3 className="font-inter text-3xl sm:text-4xl md:text-[40px] mb-4 pb-1 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 font-semibold">
          Edge AI
        </h3>
        <p className="font-poppins text-[16px] sm:text-[20px] md:text-[24px] leading-8 md:leading-10 opacity-75">
          Edge AI refers to the deployment of artificial intelligence algorithms
          directly on edge devices, such as cameras or sensors, rather than
          relying on a centralized server or cloud-based processing. By
          leveraging edge AI, XIS Suite could perform real-time analysis and
          decision-making directly on the visual sensor data, leading to faster
          response times, reduced bandwidth requirements, and enhanced privacy
          and security by processing data locally.
        </p>

        <div
          style={InnerGradient}
          className="border border-[#5D38C2] rounded-3xl p-12 mt-12 "
        >
          <div className="flex justify-center gap-20">
            <div className="flex">
              <Image
                src="/cam.svg"
                width={120}
                height={91}
                className="hidden 2xl:block"
              />
              <Image
                src="/cam.svg"
                width={120}
                height={91}
                className="hidden 2xl:block"
              />
              <Image
                src="/cam.svg"
                className="hidden lg:block"
                width={120}
                height={91}
              />
            </div>

            <Image
              src="/ra.svg"
              width={80}
              height={76}
              className="hidden lg:block"
            />
            <div className="flex flex-col ">
              <Image
                src="/edge.svg"
                width={116}
                height={116}
                className="hidden lg:block"
              />
              <p className="ml-[2px] hidden 2xl:block">Edge Device</p>
            </div>
            <Image
              src="/plus.svg"
              width={30}
              height={30}
              className="hidden lg:block"
            />
            <Image
              src="/xis rt.svg"
              width={289}
              height={289}
              className="ml-[-145px] lg:ml-0"
            />
          </div>

          <div className="bg-white opacity-75 w-[60%] 2xl:w-[40%] m-auto h-[1px] mt-12 ">
            <div className="flex justify-between ">
              <div className="h-[20px] bg-white opacity-75 w-[1px] mt-[-20px]"></div>
              <div className="h-[20px] bg-white opacity-75 w-[1px] mt-[-20px]"></div>
            </div>
            <div className="flex justify-between">
              <Image
                src="/rd.svg"
                width={13}
                height={30}
                className="ml-[20px]"
              />
              <Image src="/rd.svg" width={13} height={30} />
              <Image
                src="/rd.svg"
                width={13}
                height={30}
                className="mr-[20px]"
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-10 mt-12 justify-center items-center">
            <Image
              src="/e1.svg"
              width={250}
              height={250}
              className="rounded-3xl"
            />
            <Image
              src="/e2.svg"
              width={250}
              height={250}
              className="rounded-3xl"
            />
            <Image
              src="/e3.svg"
              width={250}
              height={250}
              className="rounded-3xl"
            />
          </div>
        </div>
      </div>

      <div
        className="border border-[#5D38C2] rounded-3xl p-12 my-20 min-[2050px]:w-[80%] m-auto"
        style={gradient}
      >
        <h3 className="font-inter text-3xl sm:text-4xl md:text-[40px] mb-4 pb-1 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 font-semibold">
          Visual Sensors
        </h3>
        <p className="font-poppins text-[16px] sm:text-[20px] md:text-[24px] leading-8 md:leading-10 opacity-75">
          XIS Suite is a comprehensive software suite designed to support
          various visual sensors, including industrial cameras for high-speed
          solutions, microscopes for detecting minor and small defects, thermal
          cameras, and X-ray tubes. This versatility likely allows users to
          integrate different types of visual sensors into their systems and
          analyze the data they generate within a unified software environment.
          This capability can be particularly beneficial for industries such as
          manufacturing, quality control, and research where multiple types of
          visual inspection tools are used to ensure product quality and safety.
        </p>
        <div className="flex flex-col lg:hidden 2xl:flex 2xl:flex-row items-center mt-12 justify-center gap-10">
          <Image
            src="/vs1.svg"
            width={450}
            height={289}
            className="rounded-3xl"
          />
          <Image
            src="/vs2.svg"
            width={450}
            height={289}
            className="rounded-3xl"
          />
          <Image src="/vs3.svg" width={450} height={289} />
        </div>

        <div className="hidden lg:flex  2xl:hidden mt-12 justify-center gap-10 ">
          <Image
            src="/vs1.svg"
            width={270}
            height={280}
            className="rounded-3xl"
          />
          <Image
            src="/vs2.svg"
            width={270}
            height={280}
            className="rounded-3xl"
          />
          <Image src="/vs3.svg" width={270} height={280} />
        </div>
      </div>
    </div>
  );
};
export default Hardware;
