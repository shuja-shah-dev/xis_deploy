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
    // background: "rgba(255, 255, 255, 0.1)",
    background: "linear-gradient(203deg, rgba(39, 36, 55, 0.80) 54.33%, rgba(28, 25, 41, 0.80) 83.04%)"


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

  const initCalendlyPopup = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/syedmutti/call-with-muti", // Your Calendly link
      });
    }
  };

  return (
    <div className="relative h-full">
      {/* <HeroBlob
        sx={{
          top: "",
          zIndex: "1",
        }}
        key={1}
      /> */}
      {/* -10 */}
      <HeroBlob
        sx={{
          right: "2px",
          zIndex: "1",
          width: "600px",
          height: "700px",
          top: "500px",
         
        }}
        key={2}
        id="blob2"
      />
      <div className="absolute inset-0 overflow-hidden  ">
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
          <source src="/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="relative z-10 ">
        <div className="text-white flex justify-center items-center pt-[110px] pb-28 sm:pb-48 ">
          <div className="overflow-x-hidden">
            <div className="text-center px-3 relative">
              <div
                style={gradientStyle}
                className=" gap-2 font-poppins hidden sm:flex justify-center items-center text-gray-300 text-lg py-1 w-[60%] m-auto rounded-md border-2 border-[#2D2938] "
              >
                <div className="bg-[#C6BEFF] w-2 h-2 rounded-full "></div>
                <p>Build, Deploy & Inspect Quality in Minutes</p>
                <div className="bg-[#C6BEFF] w-2 h-2 rounded-full"></div>
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
                // style={gradientStyleMain}
                className="text-sm sm:text-xl bg-[#4835FF] opacity-95 py-2 px-[22px] rounded-md border border-[#5D38C2] backdrop-blur-2xl"
                onClick={initCalendlyPopup}
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
                  loading="lazy"
                />
                View in AR
              </div>
            </div>
          </div>
        </div>
        <div className="min-[2300px]:w-[65%] min-[2300px]:m-auto">
          <LogoBar />
        </div>
      </div>
    </div>
  );
};
export { HeroBlob };
export default HeroSection;
//If you want to use hero blob with custom sx prop.
