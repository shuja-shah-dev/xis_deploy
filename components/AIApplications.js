import React, { useState } from "react";
import Image from "next/image";
import AIApplicationsCard from "./AIApplicationsCard";

const AIApplications = () => {
  const [activeTab, setActiveTab] = useState("show all");

  const AIdata = [
    {
      path: "/Depositphotos_4586951_S.png",
      label: "Analog Instruments Reading",
      desc: "Computer Vision application to read analog dials such as gauges, digital displays, and warning light colors using cameras.",
    },
    {
      path: "/Depositphotos_4586951_S.png",
      label: "Analog Instruments Reading",
      desc: "Computer Vision application to read analog dials such as gauges, digital displays, and warning light colors using cameras.",
    },
    {
      path: "/Depositphotos_4586951_S.png",
      label: "Analog Instruments Reading",
      desc: "Computer Vision application to read analog dials such as gauges, digital displays, and warning light colors using cameras.",
    },
    {
      path: "/Depositphotos_4586951_S.png",
      label: "Analog Instruments Reading",
      desc: "Computer Vision application to read analog dials such as gauges, digital displays, and warning light colors using cameras.",
    },
  ];

  return (
    <div className="pb-48 px-2 sm:px-8 md:px-16 relative">
      <div className="flex flex-col justify-center items-center mb-14">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          AI Vision Applications
        </h1>
        <h3 className="text-gray-300 text-base sm:text-xl md:text-2xl mt-4 sm:w-[600px] md:w-[700px] text-center">
          Explore real-world computer vision applications which you can build,
          deploy and operate with xis.ai Suite
        </h3>
      </div>

      <div className=" absolute left-0  top-[-800px] z-50">
        <Image src="/Ellipse 164.png" alt="Ellipse " height={800} width={800} />
      </div>

      <div className=" absolute right-[180px]  top-[-300px]">
        <Image src="/Ellipse 171.png" alt="Ellipse " height={900} width={900} />
      </div>

      <div className=" absolute right-0 ">
        <Image src="/Ellipse 166.png" alt="Ellipse " height={800} width={500} />
      </div>

      <div className="flex justify-between relative z-50">
        <div className="flex flex-col gap-4 text-gray-300 w-[30%] sm:w-[20%] mr-auto md:ml-auto text-lg">
          <div
            className={`cursor-pointer px-2 sm:px-4 py-2 mr-4 lg:mr-16 ${
              activeTab === "show all"
                ? "bg-slate-800  border-l-4 border-[#5D38C2]"
                : "border-transparent"
            }`}
            onClick={() => setActiveTab("show all")}
          >
            Show All
          </div>
          <div
            className={`cursor-pointer px-2 sm:px-4 py-2 mr-4 lg:mr-16 ${
              activeTab === "industry"
                ? "bg-slate-800  border-l-4 border-[#5D38C2]"
                : "border-transparent"
            }`}
            onClick={() => setActiveTab("industry")}
          >
            Industry
          </div>
          <div
            className={`cursor-pointer px-2 sm:px-4 py-2 mr-4 lg:mr-16 ${
              activeTab === "agriculture"
                ? "bg-slate-800  border-l-4 border-[#5D38C2]"
                : "border-transparent"
            }`}
            onClick={() => setActiveTab("agriculture")}
          >
            Agriculture
          </div>
          <div
            className={`cursor-pointer px-2 sm:px-4 py-2 mr-4 lg:mr-16 ${
              activeTab === "healthcare"
                ? "bg-slate-800  border-l-4 border-[#5D38C2]"
                : "border-transparent"
            }`}
            onClick={() => setActiveTab("healthcare")}
          >
            Healthcare
          </div>
          <div
            className={`cursor-pointer px-2 sm:px-4 py-2 mr-4 lg:mr-16 ${
              activeTab === "retail"
                ? "bg-slate-800  border-l-4 border-[#5D38C2]"
                : "border-transparent"
            }`}
            onClick={() => setActiveTab("retail")}
          >
            Retail
          </div>
        </div>
        <AIApplicationsCard data={AIdata} />
      </div>
    </div>
  );
};

export default AIApplications;
