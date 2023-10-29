import React from "react";

const How = () => {
  return (
    <section class="text-white block relative bg-[#111111] mt-0 ">
      <div className="inline-block justify-center w-full  items-center text-5xl font-bold text-center my-10">
        Our Solution
      </div>

      <div class="container justify-center items-center text-center  py-24 mx-auto flex flex-wrap">
        <div class="flex flex-wrap w-full justify-center text-center items-center">
          <div class="lg:w-[35%] md:w-1/2  md:py-6">
            <div class="flex relative">
              <div class="inline-block rounded  text-end justify-end items-center w-full py-20 mr-10">
                <p class="leading-relaxed mr-10 text-center text-3xl inline-block ">
                  Step 1{" "}
                </p>
              </div>
            </div>
            <div class="flex relative pb-12">
              <div class="inline-block rounded-lg text-white py-10">
                <h1 className="block mb-3 text-3xl font-bold">Training</h1>
                <p class="leading-relaxed">
                  Train the AI based on the dataset you Provided. Our web app
                  and software allow you to effortlessly import your data,
                  commence the labeling process for your items.
                </p>
              </div>
              <div className="w-32">_ _ _ _ _</div>
            </div>
            <div class="flex relative pb-12">
              <div class="inline-block rounded  text-end justify-end items-center w-full py-20 mr-10">
                <p class="leading-relaxed mr-10 text-center text-3xl inline-block ">
                  Step 3{" "}
                </p>
              </div>
            </div>
            <div class="flex relative pb-12 ">
              <div class="inline-block  text-white rounded-lg  py-10">
                <h1 className="block mb-3 text-3xl font-bold">
                  Deployment
                </h1>
                <p class="leading-relaxed">
                  Thats it! Your model is ready to be used in your application.

                </p>
              </div>
              <div className="w-20">_ _ _ _ _</div>
            </div>
            {/* <div class="flex relative pb-12">
              <div class="inline-block rounded  text-end justify-end items-center w-full py-20 mr-10">
                <p class="leading-relaxed mr-10 text-center text-3xl inline-block ">
                  Step 5{" "}
                  <span className="block text-base text-center">
                    Delivery & Maintenance
                  </span>
                </p>
              </div>
            </div> */}
          </div>
          <div class="lg:w-2/5 md:w-1/2  md:py-6">
            <div class="flex relative pb-12">
              <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div class="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative "></div>
              <p className="flex flex-nowrap w-20">_ _ _ _ _ </p>
              <div class="inline-block  text-white rounded-lg  py-10">
                <h1 className="block mb-3 text-3xl font-bold">Define Data</h1>
                <p class="leading-relaxed">
                  Define your dataset and import it into either our web platform
                  or the standalone desktop app.
                </p>
              </div>
            </div>
            <div class="flex relative pb-12">
              <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div class="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative "></div>
              <div class="inline-block rounded  text-start justify-start items-center w-full py-20 ml-10">
                <p class="leading-relaxed ml-10 text-3xl inline-block ">
                  Step 2{" "}
                </p>
              </div>
            </div>

            <div class="flex relative pb-12">
              <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div class="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative "></div>
              <p className="flex flex-nowrap w-20">_ _ _ _ _ </p>
              <div class="inline-block text-white rounded-lg  py-10">
                <h1 className="block mb-3 text-3xl font-bold">Testing</h1>
                <p class="leading-relaxed">
                  Once the Labeling in process is completed you can export the
                  model and use it in your application.
                </p>
              </div>
            </div>
            <div class="flex relative pb-12">
              <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div class="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative "></div>
              <div class="inline-block rounded  text-start justify-start items-center w-full py-20 ml-10">
                <p class="leading-relaxed ml-10 text-3xl inline-block ">
                  Step 4{" "}
                </p>
              </div>
            </div>
            {/* <div class="flex relative pb-12">
              <div class=" w-10 absolute inset-0 flex items-center justify-center">
                <div class=" w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div class="flex-shrink-0 w-10 h-10 rounded-full  bg-blue-500 inline-flex items-center justify-center text-white relative "></div>
              <p className="flex flex-nowrap w-20">_ _ _ _ _ </p>
              <div class="inline-block  text-white rounded-lg  py-10">
                <h1 className="block mb-3 text-3xl font-bold">Deployment</h1>
                <p class="leading-relaxed">
                  VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk
                  bespoke try-hard cliche palo santo offal.
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default How;
