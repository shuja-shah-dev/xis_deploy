import Image from "next/image";
import React from "react";

const How = () => {
  return (
    <>
      <section
      style={{ backgroundImage: "url('/background.png')",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      objectFit: "cover" }}
       className="text-white block relative bg-black py-24 mt-0 ">
        <div className="flex justify-center w-full items-center text-5xl font-bold text-center mb-16">
          How it Works
        </div>
        <div className="container justify-center items-center text-center pb-10 mx-auto flex ">
          <div className="flex w-full justify-center text-center items-center">
            <div className="w-2/6 md:py-6">
            <div className="flex relative md:pb-10 pb-20">
                <div className="inline-block rounded  text-end justify-end items-center w-full py-20 mr-10">
                  <p className="leading-relaxed border-b-2 border-red-600   text-center text-xl md:text-3xl inline-block">
                    Step 1
                  </p>
                </div>
              </div>
             
              <div className="flex relative pb-12">
                <div className="inline-block w-full rounded-lg text-white pt-28 sm:pt-12 ">
                  <h1 className="block mb-3 text-xl md:text-3xl font-bold">Train AI</h1>
                  <p className="leading-relaxed text-sm md:text-base">
                    Train the AI based on the dataset you Provided. Our web app
                    and software allow you to effortlessly import your data,
                    commence the labeling process for your items.
                  </p>
                </div>
              </div>
              <div className="flex relative pb-12">
              <div className="inline-block rounded  text-end justify-end items-center w-full py-20  mr-10">
                  <p className="leading-relaxed border-b-2 border-red-600  text-center text-xl md:text-3xl inline-block">
                    Step 3
                  </p>
                </div>
              </div>
              <div className="flex relative ">
                <div className="inline-block w-full text-white rounded-lg pt-16  md:py-10">
                  <h1 className="block mb-3 text-xl md:text-3xl font-bold">Deploy</h1>
                  <p className="leading-relaxed text-sm md:text-base">
                    Thats it! Your model is ready to be used in your application.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-2/5 md:py-6">
              <div className="flex relative pb-10 sm:pb-16">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#53c9eb] inline-flex items-center justify-center text-white relative "></div>
                
                <div className="inline-block  text-white rounded-lg  py-10">
                  <h1 className="block mb-3 text-xl md:text-3xl font-bold">Capture & Label Images</h1>
                  <p className="leading-relaxed text-sm md:text-base">
                    Define your dataset and import it into either our web platform
                    or the standalone desktop app.
                  </p>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#53c9eb] inline-flex items-center justify-center text-white relative "></div>
                <div className="inline-block rounded  text-start justify-start items-center w-full py-20 ml-10">
                  <p className="leading-relaxed border-b-2 border-red-600  text-center text-xl md:text-3xl inline-block ">
                    Step 2{" "}
                  </p>
                </div>
              </div>

              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#53c9eb] inline-flex items-center justify-center text-white relative "></div>
                <div className="inline-block text-white rounded-lg  pt-28 sm:py-10">
                  <h1 className="block mb-3 text-xl md:text-3xl font-bold">Test</h1>
                  <p className="leading-relaxed text-sm md:text-base">
                    Once the Labeling in process is completed you can export the
                    model and use it in your application.
                  </p>
                </div>
              </div>
              <div className="flex relative ">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#53c9eb] inline-flex items-center justify-center text-white relative "></div>
                <div className="inline-block rounded  text-start justify-start items-center w-full py-20 ml-10">
                  <p className="leading-relaxed border-b-2 border-red-600 text-xl  md:text-3xl inline-block ">
                    Step 4{" "}
                  </p>
                </div>
              </div>
              {/* <div className="relative flex">
                <div className="h-full w-full text-xl md:text-3xl -left-[45%] top-10 md:top-20 absolute ">
                  <p className=" text-blue-400 py-4 rounded-xl  font-medium w-full">
                Start Inspecting with 99.9% accuracy
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center items-center text-2xl lg:text-4xl font-bold text-center">
        <p className="text-white bg-black px-8 py-8 border-2 rounded-lg  ">Start Inspecting with 99.9% accuracy</p>
        </div>
      </section>
    </>
  );
};

export default How;