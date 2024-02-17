import Image from "next/image";
import React from "react";

const HowItWorks = () => {
  const gradientStyle = {
    background:
      "radial-gradient(83.64% 83.63% at 21.22% 12.92%, rgba(62, 95, 170, 0.13) 12.49%, rgba(87, 200, 231, 0.00) 76.56%)",
    padding: "100px 0px",
    position: "relative",
  };

  return (
    //py-28
    <div className="h-full border-2 border-slate-800 rounded-2xl relative">
      <div style={gradientStyle}>
        <div className="absolute  sm:top-[-180px]">
          <Image src="/left.png" width={500} height={100} alt="left img" />
        </div>
        <div className="absolute right-[0px] sm:top-[200px] top-[650px]">
          <Image src="/right.png" width={500} height={100} alt="right img" />
        </div>
        <div className="mb-32">
          <h1 className="text-5xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 text-center">
            How it Works
          </h1>
        </div>

        <div className="md:flex left-[50%] absolute hidden">
          <Image src="/line.png" width={28} height={10} alt="dotted-line img" />
        </div>
        <div className="flex left-[50%] absolute md:hidden">
          <Image src="/line.png" width={32} height={10} alt="dotted-line img" />
        </div>

        <div className="container text-white justify-center items-center pb-10 mx-auto flex">
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
                    Train the AI based on the dataset you Provided. Our web app
                    and software allow you to effortlessly import your data,
                    commence the labeling process for your items.
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
                    Thats it! Your model is ready to be used in your
                    application.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-2/6 md:py-6 pl-8 md:pl-0">
              <div className="flex relative pb-10 sm:pb-16 text-left w-[150px] md:w-[300px] mt-[20px]">
                <div className="">
                  <h3 className="block mb-3 text-xl font-bold">
                    Capture & Label Images
                  </h3>
                  <p className="sm:leading-7 text-sm md:text-base text-gray-300">
                    Define your dataset and import it into either our web
                    platform or the standalone desktop app.
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
                    Once the Labeling in process is completed you can export the
                    model and use it in your application.
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

        <div className="mt-28">
          <h1 className=" text-xl sm:text-3xl font-semibold text-white text-center">
            Start Inspecting with 99% Accuracy
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
