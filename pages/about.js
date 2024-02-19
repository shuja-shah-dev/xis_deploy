import React from "react";
import Image from "next/image";
import { useAuth } from "@/common/authProvider";
import { useRouter } from "next/router";
import { Box, Typography } from "@mui/material";
import Head from "next/head";
import "intersection-observer";
import { useEffect } from "react";
import Link from "next/link";
import { Roboto, Lato } from "next/font/google";
import BlogCard from "@/components/BlogCard";
import { HeroBlob } from "@/components/HeroSection";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700"],
  subsets: ["latin"],
});

const Abouts = () => {
  const gradientStyleMain = {
    background:
      "linear-gradient(180deg, rgba(48, 20, 102, 0.25) 0%, rgba(62, 95, 170, 0.25) 100%)",
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("showw");
        } else {
          entry.target.classList.remove("hidden");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hiddenn");
    hiddenElements.forEach((element) => {
      observer.observe(element);
    });
  });

  return (
    <>
      <Head>
        <title>About us - xis.ai</title>
        <meta
          name="description"
          content="AI startup of XRAY-LAB that aims to revolutionize Industrial Quality inspection and Process Monitoring through the power of artificial intelligence and robotics"
        />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta
          name="keywords"
          content="Defect Detection, AI Detection, AI Detector, AI Robotics, AI Web Technologies, Computer Vision, Precision Recall, Robotic Inspection"
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}about`}
        />
        <meta
          property="og:title"
          content="About us - Simplified Edge AI for Industrial Inspection"
        />
        <meta
          property="og:description"
          content="AI startup of XRAY-LAB that aims to revolutionize Industrial Quality inspection and Process Monitoring through the power of artificial intelligence and robotics"
        />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_BASE_URL}opengraph-image.png`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_BASE_URL}about`}
        />
        {/* Twitter meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@XisAI" />{" "}
        {/* Replace with your actual Twitter handle */}
        <meta
          name="twitter:title"
          content="Simplified Edge AI for Industrial Inspection"
        />
        <meta
          name="twitter:description"
          content="AI startup of XRAY-LAB that aims to revolutionize Industrial Quality inspection and Process Monitoring through the power of artificial intelligence and robotics"
        />
        <meta
          name="twitter:image"
          content={`${process.env.NEXT_PUBLIC_BASE_URL}opengraph-image.png`}
        />
        <meta name="twitter:image:type" content="image/png" />
        <meta name="twitter:image:width" content="1200" />
        <meta name="twitter:image:height" content="630" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" />
      </Head>
      <div className="mt-20 relative">
        <HeroBlob
          sx={{
            background: "rgba(62, 95, 170, 0.25)",
            top: "-300px",
            zIndex: "-1",
            right: "100px",
          }}
          key={"UniqueElementor1"}
        />

        <HeroBlob
          sx={{
            right: "10%",
            bottom: "2%",
            zIndex: "-1",
          }}
          key={"NormalSizedBlob"}
        />
        <div className="flex flex-col justify-center items-center mb-14 w-1/2 md:w-3/5 m-auto">
          <h1 className="pb-1.5 text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-center text-transparent bg-gradient-to-r from-white to-gray-400">
            Who we are?
          </h1>
          <h3 className="text-gray-300 mb-4 text-base sm:text-xl mt-4 sm:w-[600px] md:w-[700px] text-center">
            XIS AI is a cutting-edge AI startup of XRAY-LAB and is on a mission
            to revolutionize Industrial Quality inspection and Process
            Monitoring through the power of artificial intelligence. Our team of
            innovators and AI enthusiasts is dedicated to pushing the boundaries
            of what's possible with AI technology. We believe in the potential
            of AI to transform industries.
          </h3>
          <Link href="contact">
            <button
              style={gradientStyleMain}
              className="py-1 px-3 rounded-3xl border-[#5D38C2] border-2"
            >
              Get in Touch
            </button>
          </Link>
        </div>
        <div className="container px-2 sm:px-5 py-2 sm:py-24 mx-auto">
          <div className="flex flex-col md:flex-row justify-center items-center  -mb-10 text-center">
            <div className="w-full md:w-1/2 mb-10 px-4">
              <div
                className="relative h-full  rounded-xl container mx-auto px-4 mt-10 overflow-hidden mb-24 md:mb-0"
                style={{ height: "500px" }}
              >
                <iframe
                  className="absolute top-0 rounded-xl w-full lg:w-full h-[100%] lg:h-[100%]"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2614.5692550973376!2d8.848324875555058!3d49.05681318672361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47979d2fd2ffcf53%3A0xd8a4d478df498df3!2sTheodor-Schweitzer-Stra%C3%9Fe%201%2F3%2C%2075447%20Sternenfels%2C%20Germany!5e0!3m2!1sen!2s!4v1700329065442!5m2!1sen!2s"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  aria-hidden="false"
                  loading="lazy"
                  tabIndex="0"
                ></iframe>
              </div>
            </div>
            <div className="w-full md:w-1/2 mb-10 px-4">
              <div
                className="relative h-full container  rounded-xl mx-auto px-4 mt-10 overflow-hidden mb-24 md:mb-0"
                style={{ height: "500px" }}
              >
                <iframe
                  className="absolute top-0 rounded-xl w-full lg:w-full h-[100%] lg:h-[100%]"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2933.5056224970035!2d-83.24737019999999!3d42.671830799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824eaac3f8d9c03%3A0x54513cd1f684af54!2s2255%20Pontiac%20Rd%2C%20Auburn%20Hills%2C%20MI%2048326%2C%20USA!5e0!3m2!1sen!2s!4v1703003095408!5m2!1sen!2s"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  aria-hidden="false"
                  loading="lazy"
                  tabIndex="0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Abouts;
