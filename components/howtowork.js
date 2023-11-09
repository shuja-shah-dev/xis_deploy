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
        <div className="inline-block justify-center w-full  items-center text-5xl font-bold text-center mb-16">
          Our Solution
        </div>

        <div className="container justify-center items-center text-center pb-24 mx-auto flex ">
          <div className="flex w-full justify-center text-center items-center">
            <div className="lg:w-[35%] md:w-1/2 w-full md:py-6">
                <div className="flex h-[250px] rounded text-center justify-center items-start w-full pb-20 mr-10">
                  <p className="leading-relaxed mr-10 text-center text-3xl inline-block ">
                    Step 1{" "}
                  </p>
                </div>
             
              <div className="flex relative  pb-16">
                <div className="inline-block w-full mr-20 rounded-lg text-white py-6">
                  <h1 className="block mb-3 text-3xl font-bold">Train AI</h1>
                  <p className="leading-relaxed">
                    Train the AI based on the dataset you Provided. Our web app
                    and software allow you to effortlessly import your data,
                    commence the labeling process for your items.
                  </p>
                </div>
              </div>
              <div className="flex relative">
                <div className="inline-block rounded  text-end justify-end items-center w-full py-20 mr-10">
                  <p className="leading-relaxed mr-10 text-center text-3xl inline-block ">
                    Step 3{" "}
                  </p>
                </div>
              </div>
              <div className="flex relative pb-12 ">
                <div className="inline-block mr-20  text-white rounded-lg  py-10">
                  <h1 className="block mb-3 text-3xl font-bold">Deploy</h1>
                  <p className="leading-relaxed">
                    Thats it! Your model is ready to be used in your application.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-2/5 md:w-1/2 w-full  md:py-6">
              <div className="flex relative pb-20">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#53c9eb] inline-flex items-center justify-center text-white relative "></div>
                <p className="flex flex-nowrap w-20">_ _ _ _ _ </p>
                <div className="inline-block  text-white rounded-lg  py-10">
                  <h1 className="block mb-3 text-3xl font-bold">Capture & Label Images</h1>
                  <p className="leading-relaxed">
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
                <p className="absolute -left-16  w-20">_ _ _ _ _ </p>
                <div className="inline-block rounded  text-start justify-start items-center w-full py-20 ml-10">
                  <p className="leading-relaxed ml-10 text-3xl inline-block ">
                    Step 2{" "}
                  </p>
                </div>
              </div>

              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#53c9eb] inline-flex items-center justify-center text-white relative "></div>
                <p className="flex flex-nowrap w-28">_ _ _ _ _ </p>
                <div className="inline-block text-white rounded-lg  py-10">
                  <h1 className="block mb-3 text-3xl font-bold">Test</h1>
                  <p className="leading-relaxed">
                    Once the Labeling in process is completed you can export the
                    model and use it in your application.
                  </p>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#53c9eb] inline-flex items-center justify-center text-white relative "></div>
                <p className="absolute -left-16  w-20">_ _ _ _ _ </p>
                <div className="inline-block rounded  text-start justify-start items-center w-full py-20 ml-10">
                  <p className="leading-relaxed ml-10 text-3xl inline-block ">
                    Step 4{" "}
                  </p>
                </div>
              </div>
              <div className="flex relative">
                <div className="h-full w-full text-3xl -left-[40%] top-20 absolute inset-0 flex ">
                Start Inspecting with 99.9% accuracy
                </div>
              
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default How;
