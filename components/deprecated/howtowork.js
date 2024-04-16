import React from "react";
import { Roboto, Lato } from "next/font/google";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700"],
  subsets: ["latin"],
});

const How = () => {
  return (
    <>
      <section className="text-white block relative bg-black py-24 mt-0">
        <h5 className={`${roboto.className} flex justify-center w-full items-center text-5xl font-bold text-center mb-16`}>
          How it Works
        </h5>
        <div className="container justify-center items-center text-center pb-10 mx-auto flex">
          <div className="flex w-full justify-center text-center items-center">
            <div className="w-2/6 md:py-6">
              <Step
                stepNumber="1"
                title="Train AI"
                description="Train the AI based on the dataset you Provided. Our web app and software allow you to effortlessly import your data, commence the labeling process for your items."
              />
              <Step
                stepNumber="3"
                title="Deploy"
                description="Thats it! Your model is ready to be used in your application."
              />
            </div>
            <div className="w-2/5 md:py-6">
              <Step
                stepNumber="2"
                title="Capture & Label Images"
                description="Define your dataset and import it into either our web platform or the standalone desktop app."
              />
              <Step
                stepNumber="4"
                title="Test"
                description="Once the Labeling in process is completed you can export the model and use it in your application."
              />
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center  items-center text-xl sm:text-2xl lg:text-4xl text-center">
          <div className="text-white bg-[#182A2F] shadow-gray-600 shadow-inner  py-2 px-4 sm:px-8 sm:py-4 rounded-full">
            <h5 className={`drop-shadow-lg font-normal ${roboto.className} shadow-back`}>
              Start Inspecting with <span className="font-bold">99.9%</span> accuracy
            </h5>
          </div>
        </div>
      </section>
    </>
  );
};

const Step = ({ stepNumber, title, description }) => {
  return (
    <div className="flex relative pb-10 sm:pb-16">
      <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#53c9eb] inline-flex items-center justify-center text-white relative "></div>
      <div className="inline-block text-white rounded-lg py-10">
        <h3 className="block mb-3 text-xl md:text-3xl font-bold">Step {stepNumber}</h3>
        <p className="leading-relaxed text-sm md:text-base">{title}</p>
      </div>
    </div>
  );
};

export default How;
