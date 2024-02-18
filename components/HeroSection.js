"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import LogoBar from "./LogoBar";

const HeroBlob = ({ sx = {} }) => {
  return (
    <div
      style={{
        position: "absolute",
        width: "710px",
        height: "710px",
        borderRadius: "710px",
        background: "rgba(93, 56, 194, 0.25)",
        filter: "blur(250px)",
        ...sx,
      }}
    ></div>
  );
};

const HeroSection = () => {
  const gradientStyle = {
    background: "rgba(255, 255, 255, 0.1)",
  };
  //  const gradientStyleMain = {
  //  background: "linear-gradient(0deg, rgba(62, 95, 170, 0.25) 0%, rgba(48, 20, 102, 0.25) 193.33%)"
  // };

  const choices = ["Private", "End-to-End", "Accessible", "Simple"];
  const choicesLength = choices.length;
  let index = 0;
  const [sub, setSub] = useState(choices[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      index = (index + 1) % choicesLength;
      setSub(choices[index]);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative h-full">
      <HeroBlob
        sx={{
          top: "",
          zIndex: "99",
        }}
        key={1}
      />

      <HeroBlob
        sx={{
          right: "-10px",
          zIndex: "99",
        }}
        key={2}
        id="blob2"
      />
      <div className="absolute inset-0 overflow-hidden ">
        <video autoPlay muted loop className="w-full  h-full object-cover">
          <source src="/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="relative z-10 ">
        <div className="text-white flex justify-center items-center pt-[110px] pb-48">
          <div>
            <div className="text-center">
              <div
                style={gradientStyle}
                className="hidden sm:block text-gray-300 text-xl py-1 w-3/4 m-auto rounded-full border-2 border-slate-700 bg"
              >
                Build, Deploy & Inspect Quality in Minutes
              </div>
              <h1 className="text-5xl font-bold my-8">
                Making Quality Inspection
              </h1>
              <h1 className="text-5xl font-bold mb-8 text-blue-300">{sub}</h1>
            </div>

            <div className="flex justify-between w-[350px] m-auto">
              <button
                className="text-xl bg-violet-900 opacity-95 py-2 px-4 rounded-full border-2 border-purple-950"
                onClick={(_) => {
                  window.open("https://demo.xis.ai", "_blank");
                }}
              >
                Get a Demo
              </button>
              <div
                className="flex gap-1 items-center cursor-pointer"
                onClick={(_) => {
                  window.open("https://beltline.glitch.me", "_blank");
                }}
              >
                <Image
                  src="/iconamoon_scanner.png"
                  width={30}
                  height={30}
                  alt="scanner"
                />
                View in AR
              </div>
            </div>
          </div>
        </div>
        <LogoBar />
      </div>
    </div>
  );
};
export { HeroBlob };
export default HeroSection;
//If you want to use hero blob with custom sx prop.
