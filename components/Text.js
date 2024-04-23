import React from "react";
import Image from "next/image";
import IconCard from "@/components/IconCard.js";
import FarmSight from "@/components/FarmSight";
import SDCard from "@/components/SDCard.js";
import ServicesCard from "@/components/ServicesCard.js";
import OtherServicesCard from "@/components/OtherServicesCard.js";
import { HeroBlob } from "./HeroSection";
import Link from "next/link";
import CustomerPortal from "./CustomerPortal";
import XrayLab from "./XrayLab";
import CnnInferer from "./CnnInferer";
import XisApp from "./XisApp";
import ERP from "./ERP";

const Text = () => {
  const gradientStyleMain = {
    background: "linear-gradient(0deg, #301466 0%, #3E5FAA 123.73%)",
  };

  const gradientStyleBtn = {
    background:
      "linear-gradient(0deg, rgba(62, 95, 170, 0.25) 0%, rgba(48, 20, 102, 0.25) 193.33%)",
  };

  const SDCardData = [
    {
      path: "/Frame.svg",
      label: "Desktop Software Development",
    },
    {
      path: "/Frame (1).svg",
      label: "Web Application Development",
    },
    {
      path: "/Frame (2).svg",
      label: "Mobile Application Development",
    },
    {
      path: "/Frame (3).svg",
      label: "Graphics Designing",
    },
    {
      path: "/Frame (4).svg",
      label: "UI/UX",
    },
  ];
  const ServicesCardData = [
    {
      path: "/code.svg",
      label: "Software Development",
    },
    {
      path: "/Frame (5).svg",
      label: "Customized AI Development",
    },
    {
      path: "/machine.svg",
      label: "Digital Transformation",
    },
  ];

  const data = [
    {
      path: "/Frame (6).svg",
      label: "IoT",
    },
    {
      path: "/Frame (7).svg",
      label: "CAD",
    },
    {
      path: "/Frame (8).svg",
      label: "AR/VR",
    },
    {
      path: "/Frame (9).svg",
      label: "Industrial Automation Solutions",
    },
  ];

  const SD = [
    {
      path: "/Rectangle (1).svg",
    },
    {
      path: "/Rectangle (2).svg",
    },
    {
      path: "/Rectangle (8).png",
    },
    {
      path: "/Rectangle.svg",
    },
  ];

  const WB = [
    {
      path: "/Rectangle (3).svg",
    },
    {
      path: "/Rectangle (3).png",
    },

    {
      path: "/Rectangle (4).svg",
    },
    {
      path: "/node 1.png",
    },
    {
      path: "/next-white.png",
    },
    {
      path: "/Rectangle.svg",
    },

    {
      path: "/express-js-white.png",
    },
    {
      path: "/Rectangle (5).svg",
    },
    {
      path: "/Ruby_on_Rails-Logo 1.png",
    },
    {
      path: "/Rectangle (6).svg",
    },
  ];

  const MA = [
    {
      path: "/Rectangle (7).svg",
    },
    {
      path: "/Rectangle (8).svg",
    },
    {
      path: "/kotlin-2-logo.png",
    },
    {
      path: "/Swift_logo.svg",
    },
    {
      path: "/Rectangle (15).png",
    },
    {
      path: "/Rectangle (9).svg",
    },
  ];

  const GD = [
    {
      path: "/Rectangle (10).svg",
    },
    {
      path: "/Rectangle (11).svg",
    },
    {
      path: "/Rectangle (12).svg",
    },
    {
      path: "/Rectangle (13).svg",
    },
    {
      path: "/Rectangle (14).svg",
    },
  ];

  return (
    <div className="pt-32 px-4 lg:px-16 relative">
      <HeroBlob
        sx={{
          top: "-10px",
          zIndex: "-1",
          width: "200px",
        }}
        key={1}
      />
      <HeroBlob
        sx={{
          top: "50%",
          zIndex: "-1",
          width: "200px",
        }}
        key={1}
      />
      <HeroBlob
        sx={{
          top: "100px",
          right: "10px",
          zIndex: "-1",
          width: "400px",
        }}
        key={2}
        id="blob2"
      />
      <HeroBlob
        sx={{
          background: "rgba(62, 95, 170, 0.25)",
          bottom: "80%",
          zIndex: "-1",
          left: "0px",
        }}
        key={"UniqueElementor2"}
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
          bottom: "48%",
          zIndex: "-1",
          right: "10px",
        }}
        key={"UniqueElementor2"}
      />
      <HeroBlob
        sx={{
          background: "rgba(62, 95, 170, 0.25)",
          bottom: "16%",
          zIndex: "-1",
          right: "1px",
        }}
        key={"UniqueElementor2"}
      />
      <HeroBlob
        sx={{
          background: "rgba(62, 95, 170, 0.25)",
          bottom: "1px",
          zIndex: "-1",
          left: "0px",
        }}
        key={"UniqueElementor2"}
      />
      <HeroBlob
        sx={{
          top: "20%",
          right: "10px",
          zIndex: "-1",
        }}
        key={2}
        id="blob2"
      />
      <HeroBlob
        sx={{
          top: "60%",
          zIndex: "-1",
          width: "200px",
        }}
        key={1}
      />
      <HeroBlob
        sx={{
          top: "80%",
          right: "250px",
          zIndex: "-1",
        }}
        key={2}
        id="blob2"
      />
      <div className="mb-32 md:mb-52 xl:mb-72 flex items-center justify-center ">
        <div>
          <Image
            src="/digital world 1.svg"
            width={1248}
            height={812}
            alt="screen img"
          />
          <div className="mt-[-160px] sm:mt-[-250px] md:mt-[-300px] xl:mt-[-400px] ml-10">
            <h1 className="text-xl sm:text-5xl md:text-6xl lg:text-7xl text-left mb-4 md:mb-12 w-1/3 sm:w-2/5 md:w-3/5 font-inter text-[#FFF]">
              Start your{" "}
              <span className="block  font-semibold">Digital Journey</span>
            </h1>

            <Link
              style={gradientStyleBtn}
              className=" text-sm sm:text-xl  opacity-95 py-2 px-[22px] rounded-full border border-[#5D38C2] backdrop-blur-2xl"
              href="/"
            >
              Start Now
            </Link>
          </div>
        </div>
      </div>
      <div className="">
        <h1 className=" pb-14 text-3xl sm:text-4xl md:text-5xl text-center font-inter font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          Our Services
        </h1>
        <ServicesCard data={ServicesCardData} />
      </div>
      <div className="pt-32">
        <h1 className=" pb-14 text-3xl sm:text-4xl md:text-5xl text-center  font-inter font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          Software Development
        </h1>
        <SDCard data={SDCardData} />
      </div>

      <FarmSight />
      <ERP/>
      <CustomerPortal />
      <CnnInferer />
      <XrayLab />
      <XisApp />
      
      <div className="py-32">
        <h1 className=" pb-14 text-3xl text-center sm:text-4xl md:text-5xl  font-inter font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          Software Development Libraries
        </h1>
        <div className="flex flex-wrap gap-4 justify-center ">
          <div className=" w-[294px] ">
            <div
              style={gradientStyleMain}
              className=" relative backdrop-blur-3xl rounded-2xl mb-4 py-6 border border-slate-800 font-semibold opacity-75 text-[#FFF] text-2xl text-center font-inter"
            >
              {/* <Image
                src="/Polygon 1.png"
                width={45}
                height={45}
                alt="polygon"
                className="absolute gradient-fill ml-28 mt-16"
              /> */}
              Desktop Software Development
            </div>
            <IconCard data={SD} />
          </div>
          <div className="w-[294px] ">
            <div
              style={gradientStyleMain}
              className="backdrop-blur-3xl rounded-2xl mb-4 py-6 border border-slate-800 font-semibold opacity-75 text-[#FFF] text-2xl text-center font-inter"
            >
              Web Application Development
            </div>
            <IconCard data={WB} />
          </div>
          <div className="w-[294px] ">
            <div
              style={gradientStyleMain}
              className="backdrop-blur-3xl rounded-2xl mb-4 py-6 border border-slate-800 font-semibold opacity-75 text-[#FFF] text-2xl text-center font-inter"
            >
              Mobile Application Development
            </div>
            <IconCard data={MA} />
          </div>
          <div className="w-[294px] ">
            <div
              style={gradientStyleMain}
              className="backdrop-blur-3xl rounded-2xl mb-4 py-6 border border-slate-800 font-semibold opacity-75 text-[#FFF] text-2xl text-center font-inter"
            >
              Graphics Designing & UX/UI
            </div>
            <IconCard data={GD} />
          </div>
        </div>
      </div>
      {/* <div className="flex items-center justify-center ">
        <div className="pt-32 ">
          <Image
            src="/Mask group@2x.png"
            width={1358}
            height={1039}
            alt="img"
          />
        </div>
      </div> */}
      {/* <div className="pt-32 2xl:px-24">
        <h1 className=" pb-14 text-3xl sm:text-4xl md:text-5xl text-center  font-inter font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          All Services
        </h1>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="sm:w-1/2">
            <div
              style={gradientStyleMain}
              className="h-28 rounded-2xl mb-4 py-6 border border-slate-800 font-semibold opacity-75 text-[#FFF] text-xl sm:text-2xl text-left font-inter"
            >
              <h1 className="w-1/3 ml-[14%]">Computer Vision</h1>
            </div>
            <div
              style={{
                background:
                  "linear-gradient(98deg, rgba(62, 95, 170, 0.13) -2.31%, rgba(87, 200, 231, 0.00) 100%)",
              }}
              className="sm:h-72 rounded-2xl mb-4 py-6 md:py-8 flex flex-col gap-4 md:gap-6 px-10 lg:px-20 border text-lg border-slate-800 opacity-75 text-[#FFF] font-poppins"
            >
              <p>Automated Visual Inspection</p>
              <p>Visual Process Monitoring</p>
              <p>Image Processing & Analysis</p>
              <p>Generative AI</p>
            </div>
          </div>

          <div className="sm:w-1/2">
            <div
              style={gradientStyleMain}
              className="h-28 rounded-2xl mb-4 py-6 border border-slate-800 font-semibold opacity-75 text-[#FFF] text-xl sm:text-2xl text-left font-inter"
            >
              <h1 className="xl:w-2/5 ml-[14%]">Natural Language Processing</h1>
            </div>
            <div
              style={{
                background:
                  "linear-gradient(98deg, rgba(62, 95, 170, 0.13) -2.31%, rgba(87, 200, 231, 0.00) 100%)",
              }}
              className="sm:h-72 rounded-2xl mb-4 py-6 md:py-8 flex flex-col gap-4 md:gap-6 px-10 lg:px-20 border text-lg border-slate-800 opacity-75 text-[#FFF] font-poppins"
            >
              <p>ChatGPT Integration</p>
              <p>Chatbots Development</p>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-32 pb-52">
        <h1 className=" pb-14 text-3xl sm:text-4xl md:text-5xl text-center font-inter font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          Other Services
        </h1>

        <OtherServicesCard data={data} />
      </div> */}
    </div>
  );
};

export default Text;
