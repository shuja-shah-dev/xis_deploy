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

  const spanStyle = {
    animation: "spin_words 7s infinite",
    display: "block",
    height: "100%",
    background: "linear-gradient(99deg, #A9C3FF 40.82%, #C8F3FF 62.26%)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

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
      <div className="absolute inset-0 overflow-hidden">
        {/* <img
          src="/h.gif"
          alt="Hero GIF"
          className="w-full h-full object-cover"
        /> */}
        <video
          onTouchStart={playVideo()}
          onTouchMove={playVideo()}
          onTouchEnd={playVideo()}
          onTouchCancel={playVideo()}
          ref={videoRef}
          autoPlay
          playsInline
          muted
          loop
          className="w-full  h-full object-cover z-50"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="relative z-10 ">
        <div className="text-white flex justify-center items-center pt-[110px] pb-28 sm:pb-48 ">
          <div className="overflow-x-hidden">
            <div className="text-center px-3 relative">
              <div
                style={gradientStyle}
                className="font-poppins hidden sm:block text-gray-300 text-lg py-1 w-[60%] m-auto rounded-full border border-slate-700 bg"
              >
                Build, Deploy & Inspect Quality in Minutes
              </div>
              <h1 className="font-nexa text-5xl sm:text-6xl pb-2 font-bold my-8 text-shadow line-height-82 gradient-text">
                Making Visual Quality Inspection
              </h1>
              <div className="overflow-hidden max-h-[58px] sm:max-h-[70px] py-2">
                <div className="flex flex-col mt-[48px] sm:mt-[60px] font-nexa text-5xl sm:text-6xl font-bold  z-50 ">
                  <span style={spanStyle}>Private</span>
                  <span style={spanStyle}>End-to-End</span>
                  <span style={spanStyle}>Accessible</span>
                  <span style={spanStyle}>Effortless</span>
                </div>
              </div>
            </div>

            <div className="font-poppins flex justify-between w-[350px] m-auto px-6 mt-10">
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
