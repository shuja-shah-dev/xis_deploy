import React from "react";
import Image from "next/image";
import IconCard from "@/components/IconCard.js";
import SDCard from "@/components/SDCard.js";
import ServicesCard from "@/components/ServicesCard.js";
import { HeroBlob } from "./HeroSection";

const Text = () => {
  const gradientStyle = {
    background:
      "linear-gradient(317deg, rgba(93, 56, 194, 0.25) -1.1%, rgba(182, 61, 232, 0.00) 52.97%)",
    border: "1px solid #5D38C2",
  };
  const gradientStyleMain = {
    background:
      "linear-gradient(184deg, rgba(62, 95, 170, 0.13) 28.13%, rgba(87, 200, 231, 0.00) 98.75%)",
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
      path: "/Rectangle.png",
    },
    {
      path: "/Rectangle (1).png",
    },
    {
      path: "/Rectangle (8).png",
    },
    {
      path: "/Rectangle (12).png",
    },
  ];

  const WB = [
    {
      path: "/Rectangle (2).png",
    },
    {
      path: "/Rectangle (3).png",
    },

    {
      path: "/Rectangle (9).png",
    },
    {
      path: "/node 1.png",
    },
    {
      path: "/next-white.png",
    },
    {
      path: "/Rectangle (12).png",
    },

    {
      path: "/express-js-white.png",
    },
    {
      path: "/Rectangle (14).png",
    },
    {
      path: "/Ruby_on_Rails-Logo 1.png",
    },
    {
      path: "/Rectangle (16).png",
    },
  ];

  const MA = [
    {
      path: "/Rectangle (4).png",
    },
    {
      path: "/Rectangle (5).png",
    },
    {
      path: "/kotlin-2-logo.png",
    },
    {
      path: "/swift_logo.png",
    },
    {
      path: "/Rectangle (15).png",
    },
    {
      path: "/Rectangle (17).png",
    },
  ];

  const GD = [
    {
      path: "/Rectangle (6).png",
    },
    {
      path: "/Rectangle (7).png",
    },
    {
      path: "/Rectangle (10).png",
    },
    {
      path: "/Rectangle (11).png",
    },
    {
      path: "/Rectangle (13).png",
    },
  ];

  return (
    <div className="pt-32 px-16 relative">
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
          left: "10px",
        }}
        key={"UniqueElementor2"}
      />

      <HeroBlob
        sx={{
          background: "rgba(62, 95, 170, 0.25)",
          bottom: "60%",
          zIndex: "-1",
          left: "1px",
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

      {/* <HeroBlob
        sx={{
          background: "rgba(62, 95, 170, 0.25)",
          bottom: "16%",
          zIndex: "-1",
          right: "1px",
        }}
        key={"UniqueElementor2"}
      /> */}

      <HeroBlob
        sx={{
          background: "rgba(62, 95, 170, 0.25)",
          bottom: "1px",
          zIndex: "-1",
          left: "1px",
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

      {/* <HeroBlob
        sx={{
          top: "95%",
          right: "0px",
          zIndex: "-1",
          width: "200px",
        }}
        key={2}
        id="blob2"
      /> */}

      <div className="flex flex-col md:flex-row gap-10 lg:gap-20 items-center pb-32">
        <Image
          src="/Mask group.png"
          width={671}
          height={447}
          alt="screen img"
        />

        <h1 className="pb-4 text-4xl text-center  leading-8 md:text-left md:text-5xl lg:text-6xl xl:text-7xl md:w-1/3 font-inter font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          Start your Digital Journey
        </h1>
      </div>
      <div>
        <h1 className=" pb-14 text-3xl sm:text-4xl md:text-5xl text-center font-inter font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          Our Services
        </h1>
        <ServicesCard data={ServicesCardData} />
      </div>
      <div className="pt-32">
        <h1 className=" pb-14 text-3xl sm:text-4xl md:text-5xl text-center md:text-left  font-inter font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          Software Development
        </h1>
        <SDCard data={SDCardData} />
      </div>
      <div className="pt-32">
        <h1 className=" pb-14 text-3xl text-center md:text-left sm:text-4xl md:text-5xl  font-inter font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          Software Development Libraries
        </h1>
        <div className="flex flex-wrap gap-4 justify-center ">
          <div className=" w-[294px] ">
            <div
              style={gradientStyleMain}
              className="rounded-2xl mb-4 py-6 border border-slate-800 font-semibold opacity-75 text-[#FFF] text-2xl text-center font-inter"
            >
              Desktop Software Development
            </div>
            <IconCard data={SD} />
          </div>
          <div className="w-[294px] ">
            <div
              style={gradientStyleMain}
              className="rounded-2xl mb-4 py-6 border border-slate-800 font-semibold opacity-75 text-[#FFF] text-2xl text-center font-inter"
            >
              Web Application Development
            </div>
            <IconCard data={WB} />
          </div>
          <div className="w-[294px] ">
            <div
              style={gradientStyleMain}
              className="rounded-2xl mb-4 py-6 border border-slate-800 font-semibold opacity-75 text-[#FFF] text-2xl text-center font-inter"
            >
              Mobile Application Development
            </div>
            <IconCard data={MA} />
          </div>
          <div className="w-[294px] ">
            <div
              style={gradientStyleMain}
              className="rounded-2xl mb-4 py-6 border border-slate-800 font-semibold opacity-75 text-[#FFF] text-2xl text-center font-inter"
            >
              Graphics Designing & UX/UI
            </div>
            <IconCard data={GD} />
          </div>
        </div>
      </div>
      <div className="pt-32">
        <h1 className=" pb-14 text-3xl sm:text-4xl md:text-5xl text-center md:text-left  font-inter font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          All Services
        </h1>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="sm:w-1/2">
            <div
              style={{
                background:
                  "linear-gradient(279deg, #3E5FAA 1.81%, rgba(62, 95, 170, 0.75) 100%)",
              }}
              className="h-28 rounded-2xl mb-4 py-6 border border-slate-800 font-semibold opacity-75 text-[#FFF] text-xl sm:text-2xl text-left font-inter"
            >
              <h1 className="w-1/3 ml-[14%]">Computer Vision</h1>
            </div>
            <div
              style={{ background: "rgba(62, 95, 170, 0.25)" }}
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
              style={{
                background:
                  "linear-gradient(279deg, #3E5FAA 1.81%, rgba(62, 95, 170, 0.75) 100%)",
              }}
              className="h-28 rounded-2xl mb-4 py-6 border border-slate-800 font-semibold opacity-75 text-[#FFF] text-xl sm:text-2xl text-left font-inter"
            >
              <h1 className="xl:w-2/5 ml-[14%]">Natural Language Processing</h1>
            </div>
            <div
              style={{ background: "rgba(62, 95, 170, 0.25)" }}
              className="sm:h-72 rounded-2xl mb-4 py-6 md:py-8 flex flex-col gap-4 md:gap-6 px-10 lg:px-20 border text-lg border-slate-800 opacity-75 text-[#FFF] font-poppins"
            >
              <p>ChatGPT Integration</p>
              <p>Chatbots Development</p>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-32 pb-52">
        <h1 className=" pb-14 text-3xl sm:text-4xl md:text-5xl text-center md:text-left  font-inter font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          Other Services
        </h1>

        <div
          style={gradientStyleMain}
          className="ftest flex flex-col text-center md:flex-row gap-4 md:gap-0 justify-around items-center md:items-baseline w-full p-6 rounded-2xl border-2 border-slate-800"
        >
          <style jsx>{`
            .ftest {
              transition: 0.1s ease-in-out;
              cursor: pointer;
            }

            .ftest:hover {
              border: 1px solid #5d38c2;
            }
          `}</style>
          {data.map((c, index) => (
            <div key={index} className="sm:w-1/5 flex flex-col items-center">
              <div
                style={gradientStyle}
                className="w-16 h-16  border-2 m-auto  rounded-xl"
              >
                <Image
                  className="ml-4 mt-4"
                  src={c.path}
                  width={28}
                  height={28}
                  alt={`${c.label} img`}
                />
              </div>

              <div className=" mt-4 ">
                <h1 className="text-center opacity-75 text-[#FFF] text-xl sm:text-2xl font-inter">
                  {c.label}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Text;
