import Image from "next/image";
import React from "react";

const HowItWorks = () => {
  const gradientStyle = {
    background:
      "radial-gradient(83.64% 83.63% at 21.22% 12.92%, rgba(62, 95, 170, 0.13) 12.49%, rgba(87, 200, 231, 0.00) 76.56%)",
    padding: "100px 0px",
    position: "relative",
  };
const gradientStyleMain = {
  background:
    "linear-gradient(0deg, rgba(62, 95, 170, 0.25) 0%, rgba(48, 20, 102, 0.25) 193.33%)",
};
  const gradientText = {
     background: "linear-gradient(0deg, rgba(62, 95, 170, 0.25) 0%, rgba(48, 20, 102, 0.25) 193.33%)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  return (
    //py-28
    <div className="h-full border-2 border-slate-800 rounded-2xl relative min-[2300px]:w-[55%] m-auto">
      <div style={gradientStyle}>
        <div className="absolute  sm:top-[-180px] top-[-30px]">
          <Image src="/left.png" width={500} height={100} alt="left img" />
        </div>
        <div className="absolute right-[0px] sm:top-[200px] top-[820px]">
          <Image src="/right.png" width={500} height={100} alt="right img" />
        </div>
        <div className="mb-32">
          <h1 className="font-inter text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 text-center">
            How it Works
          </h1>
        </div>

        <div className="md:flex left-[50%] absolute hidden">
          <Image src="/line.png" width={28} height={10} alt="dotted-line img" />
        </div>
        <div className="flex left-[50%] absolute md:hidden">
          <Image src="/line.png" width={32} height={10} alt="dotted-line img" />
        </div>

        <div className="container font-poppins text-white justify-center items-center pb-10 mx-auto flex ">
          <div className="flex overflow-hidden  justify-around text-center items-center ">
            <div className="w-2/6 md:py-6 mt-[-50px] ">
              <div className="flex relative md:pb-10 pb-20">
                <div className="inline-block rounded  text-end justify-end items-center w-full py-20 ">
                  <p className="sm:leading-7 font-bold text-center text-xl md:text-3xl inline-block">
                    Step 1
                  </p>
                </div>
              </div>

              <div className="flex justify-end relative pb-12 ">
                <div className="inline-block w-[300px] pt-28 mt-[-50px] sm:pt-12 text-right">
                  <h6 className="block mb-3 text-xl font-bold">Train AI</h6>
                  <p className="sm:leading-7 text-sm md:text-base text-gray-300">
                    After labeling, start training of AI model with a click of a
                    button.
                  </p>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="inline-block rounded text-end justify-end items-center w-full py-20 mt-[-50px] ">
                  <p className="sm:leading-7 font-bold text-center text-xl md:text-3xl inline-block">
                    Step 3
                  </p>
                </div>
              </div>
              <div className="flex relative justify-end">
                <div className="inline-block text-right pt-16 w-[300px] md:py-10 mt-[-70px]">
                  <h2 className="block mb-3 text-xl font-bold">Deploy</h2>
                  <p className="sm:leading-7 text-sm md:text-base text-gray-300">
                    Export trained AI models directly to xis rt and start
                    inspecting.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-2/6 md:py-6 pl-8 md:pl-0">
              <div className="flex relative pb-10 sm:pb-16 text-left w-[100px] sm:w-[300px] mt-[20px]">
                <div className="">
                  <h3 className="block mb-3 text-xl font-bold">
                    Capture & Label Images
                  </h3>
                  <p className="sm:leading-7 text-sm md:text-base text-gray-300">
                    Define dataset, import images and start labeling with
                    AI-assisted labeling.
                  </p>
                </div>
              </div>

              <div className="flex relative pb-12">
                <div className="inline-block rounded  text-start justify-start items-center w-full py-20 ">
                  <p className="sm:leading-7 font-bold text-center text-xl md:text-3xl inline-block ">
                    Step 2
                  </p>
                </div>
              </div>

              <div className="flex relative pb-12">
                <div className="inline-block w-[300px] text-left pt-28 sm:py-10 mt-[-60px]">
                  <h4 className="block mb-3 text-xl  font-bold">Test</h4>
                  <p className="sm:leading-7 text-sm md:text-base text-gray-300">
                    Evaluate results of trained AI model after training.
                  </p>
                </div>
              </div>
              <div className="flex relative">
                <div className="text-start justify-start items-center w-full py-20 mt-[-70px]">
                  <p className="sm:leading-7 font-bold text-xl  md:text-3xl ">
                    Step 4
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 relative flex justify-center">
          <div
            style={gradientStyleMain}
            className="text-sm z-50 sm:text-xl opacity-95 py-2 px-[22px] rounded-full border border-[#5D38C2] backdrop-blur-2xl"
          >
            {/* <h1 style={gradientText} className="font-poppins text-lg sm:text-3xl font-semibold text-center "> */}
            Start Inspecting with 99% Accuracy
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
