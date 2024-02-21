"use client";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import LogoBar from "./LogoBar";
import { Box } from "@mui/material";

const HeroBlob = ({ sx = {} }) => {
  return (
    <Box
      sx={{
        position: "absolute",
        width: { xl: "710px", lg: "500px", md: "100%", sm: "100%", xs: "100%" },
        height: "710px",
        borderRadius: "710px",
        background: "rgba(93, 56, 194, 0.25)",
        filter: "blur(250px)",
        overflow: "hidden",
        ...sx,
      }}
    ></Box>
  );
};

const HeroSection = () => {
  const gradientStyleMain = {
    background:
      "linear-gradient(0deg, rgba(62, 95, 170, 0.25) 0%, rgba(48, 20, 102, 0.25) 193.33%)",
  };
  const gradientStyle = {
    background: "rgba(255, 255, 255, 0.1)",
  };

  const choices = ["Private", "End-to-End", "Accessible", "Simple"];
  const choicesLength = choices.length;
  let index = 0;
  const [sub, setSub] = useState(choices[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      index = (index + 1) % choicesLength;
      setSub(choices[index]);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const videoRef = useRef(null);

  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <div className="relative h-full">
      <HeroBlob
        sx={{
          top: "",
          zIndex: "1",
        }}
        key={1}
      />
      {/* -10 */}
      <HeroBlob
        sx={{
          right: "10px",
          zIndex: "1",
        }}
        key={2}
        id="blob2"
      />
      <div onClick={playVideo} className="absolute inset-0 overflow-hidden ">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full  h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="relative z-10 ">
        <div className="text-white flex justify-center items-center pt-[110px] pb-28 sm:pb-48 ">
          <div className="overflow-hidden">
            <div className="text-center px-3">
              <div
                style={gradientStyle}
                className="font-poppins hidden sm:block text-gray-300 text-lg py-1 w-[60%] m-auto rounded-full border border-slate-700 bg"
              >
                Build, Deploy & Inspect Quality in Minutes
              </div>
              <h1 className="font-nexa text-5xl sm:text-6xl pb-2 font-bold my-8 text-shadow line-height-82 gradient-text">
                Making Quality Inspection
              </h1>
              <h1 className="line-height-82 font-nexa text-5xl sm:text-6xl font-bold mb-8 bg-gradient-to-r z-50 from-[#A9C3FF] via-[#C8F3FF] to-transparent inline-block text-transparent bg-clip-text">
                {sub}
              </h1>
            </div>

            <div className="font-poppins flex justify-between w-[350px] m-auto px-6">
              <button
                style={gradientStyleMain}
                className="text-sm sm:text-xl  opacity-95 py-2 px-[22px] rounded-full border border-[#5D38C2] backdrop-blur-2xl"
                onClick={(_) => {
                  window.open("https://demo.xis.ai", "_blank");
                }}
              >
                Get a Demo
              </button>
              <div
                className="flex gap-1 items-center cursor-pointer text-sm"
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
