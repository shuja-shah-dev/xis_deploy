

import React from "react";
import FeatureCard from "./FeatureCard";
import { HeroBlob } from "./HeroSection";
import Image from "next/image";

const Features = () => {
  const featureData = [
    {
      path: "/streamline_ai-technology-spark-solid.svg",
      label: "AI-Assisted Labeling",
      desc: `Fast AI-assisted labeling streamlines the annotation process,
          harnessing the power of artificial intelligence to swiftly and
          accurately label images.`,
    },
    {
      path: "/plugnplay.svg",
      label: "Plug & Play",
      desc: `Enables easy "Plug n Play" integration for a hassle-free setup. Effortless deployment with a user-friendly interface.`,
    },
    {
      path: "/noExpertise.svg",
      label: "No Expertise Required",
      desc: `User-friendly design, no technical expertise needed. Intuitive interface for easy deployment of tailored solutions.`,
    },
    {
      path: "/carbon_edge-device.svg",
      label: "Edge Device Compatible",
      desc: `Utilizing edge computing, data is processed locally near its generation point, reducing latency, improving efficiency, and enhancing overall system performance.`,
    },
    {
      path: "/collab.svg",
      label: "Collaborative Platform",
      desc: `A robust system allowing multiple users to collaborate seamlessly on labeling and training computer vision models, enhancing productivity, accuracy, and workflow efficiency.`,
    },
    {
      path: "/fully Custom.svg",
      label: "Fully Customizable",
      desc: `
Customizable labeling and training processes ensure the software fits your needs, optimizing efficiency and accuracy for training computer vision models in quality inspection.`,
    },
  ];

  return (
    //pt-28 md:pt-36 
    <div className="bg-[#000] pb-32  sm:px-2 lg:px-16 relative ">
     
      {/* <Image
                  className="w-full h-full object-fit inset-0 absolute  hidden xl:flex xl:mt-[-300px] "
                src="/peakpx 1.svg"
                width={100}
                height={100}
                alt=""
              /> */}
      <div className="flex flex-col justify-center items-center mb-14">
        <HeroBlob
          sx={{
            background: "rgba(62, 95, 170, 0.25)",
            top: "-300px",
            zIndex: "1",
            right: "100px",
          }}
          key={"UniqueElementor1"}
        />
        <h1 className="text-4xl font-inter md:text-5xl pb-1.5 font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          Features
        </h1>
        <h3 className="font-poppins px-4 sm:px-0 text-gray-300 text-base sm:text-xl mt-2 sm:mt-4 text-center">
          Train the AI based on the dataset you Provided.
        </h3>
      </div>

      {/* <div className=" absolute left-0  top-[300px]">
        <Image src="/Ellipse 164.png" alt="Ellipse" height={800} width={800} />
      </div> */}
      <HeroBlob
        sx={{
          background: "rgba(62, 95, 170, 0.25)",
          bottom: "1px",
          zIndex: "1",
          left: "1px",
        }}
        key={"UniqueElementor2"}
      />

      {/* <div className=" absolute left-[220px] top-[-500px]">
        <Image
          src="/Ellipse 162.png"
          alt="Ellipse "
          height={1100}
          width={1100}
        />
      </div> */}

      <FeatureCard data={featureData} />
    </div>
  );
};

export default Features;





