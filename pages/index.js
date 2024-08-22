import Head from "next/head";

import { useEffect, useState, useRef, TouchEvent } from "react";
import { useRouter } from "next/router";

import Image from "next/image";

import "intersection-observer";

import { useAuth } from "@/common/authProvider";

import * as React from "react";

import { Roboto, Lato } from "next/font/google";

import HeroSection from "@/components/HeroSection";
import Switcher from "@/components/Switcher";
import HowItWorks from "@/components/howtowork";
import Features from "@/components/Features";
import IndustrySolutions from "@/components/IndustrySolutions";
import VideoSection from "../components/VideoSection";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700"],
  subsets: ["latin"],
});

const DefectDetection = () => {
  const [imageReveal, setImageReveal] = useState(0.5);
  const imageContainer = useRef(null);
  const handleRef = useRef(null);

  const slide = (xPosition) => {
    const containerBoundRect = imageContainer.current.getBoundingClientRect();

    if (xPosition <= containerBoundRect.left) {
      setImageReveal(0);
    } else if (xPosition >= containerBoundRect.right) {
      setImageReveal(1);
    } else {
      const positionInContainer = xPosition - containerBoundRect.left;
      const width = containerBoundRect.width;
      setImageReveal(positionInContainer / width);
    }
  };

  const handleTouchMove = (event) => {
    slide(event.touches[0].clientX);
  };

  const handleMouseDown = () => {
    const handle = handleRef.current;

    const handleMouseMove = (event) => {
      slide(event.clientX);
    };

    const handleMouseUp = () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };
  return (
    <section className="text-white">
      <div className="container mx-auto flex px-5 pt-20 lg:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-full lg:pr-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h2
            className={` ${roboto.className} text-3xl md:text-4xl mb-4 font-medium `}
          >
            Defect Detection
          </h2>
          <p className="mb-8 leading-relaxed text-sm md:text-base">
            Leveraging AI-driven anomaly detection, the integration of computer
            vision facilitates automated visual inspection to identify defective
            products, detecting anomalies such as scratches or dents, and/or
            cracks.
          </p>
        </div>
        <div className="lg:max-w-lg  w-full mb-10 px-4 relative min-h-[1px] flex elementor-element p-[1em] ">
          <div className="rounded-lg overflow-hidden  elementor-widget-wrap flex">
            <div className="elementor-element  elementor-widget">
              <div className="elementor-widget-container ">
                <div className="twentytwenty-wrapper twentytwenty-horizontal">
                  <div
                    ref={imageContainer}
                    className="twentytwenty-container rounded-xl w-full h-[320px] md:h-[400px]"
                  >
                    <Image
                      decoding="async"
                      style={{
                        clipPath: `polygon(0 0, ${imageReveal * 100}% 0, ${
                          imageReveal * 100
                        }% 100%, 0 100%)`,
                      }}
                      className="twentytwenty-before w-full object-center h-full pafe-before-after-image-comparison-slider__item pafe-before-after-image-comparison-slider__item--before"
                      src="/xraycrack1.png"
                      width={542}
                      height={360}
                      alt="Crack Detect1"
                    />
                    <Image
                      decoding="async"
                      className="custom-clip2 h-full object-center pafe-before-after-image-comparison-slider__item pafe-before-after-image-comparison-slider__item--after twentytwenty-after"
                      src="/xraycrack.png"
                      width={542}
                      height={360}
                      alt="Crack Detect2"
                    />
                    <div className="twentytwenty-overlay">
                      <div
                        className="twentytwenty-before-label"
                        data-content="Xray"
                      ></div>
                      <div
                        className="twentytwenty-after-label"
                        data-content="Xray"
                      ></div>
                    </div>
                    <div
                      onMouseDown={handleMouseDown}
                      onTouchMove={handleTouchMove}
                      ref={handleRef}
                      style={{
                        touchAction: "none",
                        position: "absolute",
                        left: `${imageReveal * 100}%`,
                        cursor: "ew-resize",
                      }}
                      className="twentytwenty-handle -ml-5 !-mt-2"
                    >
                      <span className="twentytwenty-left-arrow"></span>
                      <span className="twentytwenty-right-arrow"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CountingDefects = () => {
  return (
    <section className="text-white">
      <div className="container mx-auto flex px-5 pt-20 lg:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-full lg:pr-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h2
            className={`${roboto.className} text-3xl md:text-4xl mb-4 font-medium`}
          >
            Object Detection & Defect Counting
          </h2>
          <p className="mb-8 leading-relaxed text-sm md:text-lg">
            In the domain of object and defect counting, the seamless fusion of
            computer vision and machine learning offers a powerful solution for
            precise and efficient counting. Leveraging state-of-the-art
            technologies, automated systems adeptly tally objects with accuracy
            and speed. This integrated approach optimizes counting processes,
            ensuring a meticulous and reliable enumeration of objects and
            defects in a production line.
          </p>
        </div>
        <div className="lg:max-w-lg  w-full mb-10 px-4 relative min-h-[1px] flex elementor-element p-[1em] ">
          <div className="rounded-lg overflow-hidden  elementor-widget-wrap flex">
            <div className="elementor-element  elementor-widget">
              <div className="elementor-widget-container ">
                <div className="twentytwenty-wrapper twentytwenty-horizontal">
                  <div className="twentytwenty-container rounded-xl w-full h-[320px] md:h-[400px]">
                    <Image
                      className="twentytwenty-before w-full object-center h-full pafe-before-after-image-comparison-slider__item pafe-before-after-image-comparison-slider__item--before"
                      alt="Project Camera"
                      src="/projectcamera.jpg"
                      width={1950}
                      height={1097}
                    />

                    <div className="twentytwenty-overlay">
                      <div
                        className="twentytwenty-before-label"
                        data-content="Xray321"
                      ></div>
                      <div
                        className="twentytwenty-after-label"
                        data-content="Xray4321"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProductSorting = () => {
  return (
    <section className="text-white">
      <div className="container mx-auto flex px-5 pt-20 lg:flex-row flex-col items-center">
        <div className="lg:flex-grow  md:w-full lg:pr-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h2
            className={`${roboto.className} text-3xl md:text-4xl mb-4 font-medium `}
          >
            Product Sorting
          </h2>
          <p className="mb-8 leading-relaxed text-sm md:text-lg">
            Our Solution in product sorting revolutionizes traditional methods
            by offering unmatched speed, accuracy, and adaptability. Through our
            products, users can efficiently categorize imperfect parts from the
            rest of the batch, ensuring precise sorting. The cost-effectiveness,
            driven by reduced labor and minimized Human errors, underscores its
            long-term value. AI sorting not only enhances operational efficiency
            but also positions industries at the forefront of innovation in
            manufacturing and logistics.
          </p>
        </div>
        <div className="lg:max-w-lg  w-full mb-10 px-4 relative min-h-[1px] flex elementor-element p-[1em] ">
          <div className="rounded-lg overflow-hidden  elementor-widget-wrap flex">
            <div className="elementor-element  elementor-widget">
              <div className="elementor-widget-container ">
                <div className="twentytwenty-wrapper twentytwenty-horizontal">
                  <div className="twentytwenty-container rounded-xl w-full h-[320px] sm:h-[400px]">
                    <Image
                      className="twentytwenty-before w-full object-center h-full pafe-before-after-image-comparison-slider__item pafe-before-after-image-comparison-slider__item--before"
                      src="/robotic2.jpeg"
                      width={542}
                      height={360}
                      alt="AI Machine"
                    />

                    <div className="twentytwenty-overlay">
                      <div
                        className="twentytwenty-before-label"
                        data-content="Xrays1"
                      ></div>
                      <div
                        className="twentytwenty-after-label"
                        data-content="Xrays2"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PerformanceAnalytics = () => {
  const [imageReveal, setImageReveal] = useState(0.5);
  const imageContainer = useRef(null);
  const handleRef = useRef(null);

  const slide = (xPosition) => {
    const containerBoundRect = imageContainer.current.getBoundingClientRect();

    if (xPosition <= containerBoundRect.left) {
      setImageReveal(0);
    } else if (xPosition >= containerBoundRect.right) {
      setImageReveal(1);
    } else {
      const positionInContainer = xPosition - containerBoundRect.left;
      const width = containerBoundRect.width;
      setImageReveal(positionInContainer / width);
    }
  };

  const handleTouchMove = (event) => {
    slide(event.touches[0].clientX);
  };

  const handleMouseDown = () => {
    const handle = handleRef.current;

    const handleMouseMove = (event) => {
      slide(event.clientX);
    };

    const handleMouseUp = () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };
  return (
    <section className="text-white">
      <div className="container mx-auto flex px-5 pt-20 lg:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-full lg:pr-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h2
            className={`sm:text-4xl ${roboto.className} text-3xl md:text-4xl mb-4 font-medium `}
          >
            Assembly Completeness
          </h2>
          <p className="mb-8 leading-relaxed text-sm md:text-lg">
            Revolutionize your quality control processes with our product's
            Assembly Completeness Detection feature. Our advanced technology
            analyzes assembly components, ensuring every element is correctly
            integrated. By leveraging precise algorithms, our system identifies
            and flags any inconsistencies or missing parts, guaranteeing the
            integrity of the assembly.
          </p>
        </div>
        <div className="lg:max-w-lg  w-full mb-10 px-4 relative min-h-[1px] flex elementor-element p-[1em] ">
          <div className="rounded-lg overflow-hidden  elementor-widget-wrap flex">
            <div className="elementor-element  elementor-widget">
              <div className="elementor-widget-container ">
                <div className="twentytwenty-wrapper twentytwenty-horizontal">
                  <div
                    ref={imageContainer}
                    className="twentytwenty-container rounded-xl w-full h-[383px] md:h-[500px]"
                  >
                    <Image
                      style={{
                        clipPath: `polygon(0 0, ${imageReveal * 100}% 0, ${
                          imageReveal * 100
                        }% 100%, 0 100%)`,
                      }}
                      className="twentytwenty-before object-center w-full h-full pafe-before-after-image-comparison-slider__item pafe-before-after-image-comparison-slider__item--before"
                      src="/motorxray2.png"
                      width={960}
                      height={1028}
                      alt="Motor Detect1"
                    />
                    <Image
                      className="custom-clip2 h-full w-full pafe-before-after-image-comparison-slider__item pafe-before-after-image-comparison-slider__item--after twentytwenty-after"
                      src="/motorxray1.png"
                      width={960}
                      height={1028}
                      alt="Motor Detect2"
                    />
                    <div className="twentytwenty-overlay">
                      <div
                        className="twentytwenty-before-label"
                        data-content="Xray"
                      ></div>
                      <div
                        className="twentytwenty-after-label"
                        data-content="Xray"
                      ></div>
                    </div>
                    <div
                      onMouseDown={handleMouseDown}
                      onTouchMove={handleTouchMove}
                      ref={handleRef}
                      style={{
                        touchAction: "none",
                        position: "absolute",
                        left: `${imageReveal * 100}%`,
                        cursor: "ew-resize",
                      }}
                      className="twentytwenty-handle -ml-5 !-mt-2"
                    >
                      <span className="twentytwenty-left-arrow"></span>
                      <span className="twentytwenty-right-arrow"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TextDetection = () => {
  const [imageReveal, setImageReveal] = useState(0.5);
  const imageContainer = useRef(null);
  const handleRef = useRef(null);

  const slide = (xPosition) => {
    const containerBoundRect = imageContainer.current.getBoundingClientRect();

    if (xPosition <= containerBoundRect.left) {
      setImageReveal(0);
    } else if (xPosition >= containerBoundRect.right) {
      setImageReveal(1);
    } else {
      const positionInContainer = xPosition - containerBoundRect.left;
      const width = containerBoundRect.width;
      setImageReveal(positionInContainer / width);
    }
  };

  const handleTouchMove = (event) => {
    slide(event.touches[0].clientX);
  };

  const handleMouseDown = () => {
    const handle = handleRef.current;

    const handleMouseMove = (event) => {
      slide(event.clientX);
    };

    const handleMouseUp = () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <section className="text-white">
      <div className="container mx-auto flex px-5 pt-20 lg:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-full lg:pr-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h2
            className={`${roboto.className} text-3xl md:text-4xl mb-4 font-medium `}
          >
            Text Recognition
          </h2>
          <p className="mb-8 leading-relaxed text-sm md:text-lg">
            Empower your workflow with our cutting-edge text recognition
            technology, a cornerstone feature of our product. Our advanced
            optical character recognition (OCR) seamlessly converts printed or
            handwritten text from images or scanned documents into
            machine-readable data. Say goodbye to manual data entry hassles as
            our product automates the process, ensuring efficient document
            management.
          </p>
        </div>
        <div className="lg:max-w-lg  w-full mb-10 px-4 relative min-h-[1px] flex elementor-element p-[1em] ">
          <div className="rounded-lg overflow-hidden  elementor-widget-wrap flex">
            <div className="elementor-element  elementor-widget">
              <div className="elementor-widget-container ">
                <div className="twentytwenty-wrapper twentytwenty-horizontal">
                  <div
                    ref={imageContainer}
                    className="twentytwenty-container rounded-xl w-full h-[350px] md:h-[450px]"
                  >
                    <Image
                      style={{
                        clipPath: `polygon(0 0, ${imageReveal * 100}% 0, ${
                          imageReveal * 100
                        }% 100%, 0 100%)`,
                      }}
                      className="twentytwenty-before w-full h-full object-center pafe-before-after-image-comparison-slider__item pafe-before-after-image-comparison-slider__item--before"
                      src="/textdetect.png"
                      width={1154}
                      height={1097}
                      alt="Text Detect1"
                    />
                    <Image
                      className="custom-clip2 h-full w-full object-center pafe-before-after-image-comparison-slider__item pafe-before-after-image-comparison-slider__item--after twentytwenty-after"
                      src="/textdetect1.png"
                      width={1154}
                      height={1097}
                      alt="Text Detect2"
                    />
                    <div className="twentytwenty-overlay">
                      <div
                        className="twentytwenty-before-label"
                        data-content="Xray"
                      ></div>
                      <div
                        className="twentytwenty-after-label"
                        data-content="Xray"
                      ></div>
                    </div>
                    <div
                      onMouseDown={handleMouseDown}
                      onTouchMove={handleTouchMove}
                      ref={handleRef}
                      style={{
                        touchAction: "none",
                        position: "absolute",
                        left: `${imageReveal * 100}%`,
                        cursor: "ew-resize",
                      }}
                      className="twentytwenty-handle h-[38px] w-[38px] absolute left-[50%] top-[50%] "
                    >
                      <span className="twentytwenty-left-arrow"></span>
                      <span className="twentytwenty-right-arrow"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  const controller = useRouter();

  const { accessToken } = useAuth();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("showw");
          entry.target.classList.add("showCase");
          entry.target.classList.add("showFit");
        } else {
          entry.target.classList.remove("hidden");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(
      ".hiddenn, .hiddenCase, .hiddenFit"
    );
    hiddenElements.forEach((element) => {
      observer.observe(element);
    });
  });

  return (
    <>
      <Head>
       {/* fix */}
        <title>xis.ai - Simplified Edge AI for Industrial Inspection</title>
        <meta
          name="description"
          content="XRAY-LAB that aims to revolutionize Industrial Quality inspection and Process Monitoring through the power of artificial intelligence and robotics"
        />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta
          name="keywords"
          content="Defect Detection, AI Detection, AI Detector, AI Robotics, AI Web Technologies, Computer Vision, Precision Recall, Robotic Inspection"
        />
        <link rel="canonical" href={process.env.NEXT_PUBLIC_BASE_URL} />
        <meta
          property="og:title"
          content="Simplified Edge AI for Industrial Inspection"
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
        <meta property="og:url" content={process.env.NEXT_PUBLIC_BASE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@XisAI" />
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

      <main>
        <HeroSection />
        <Switcher />
        <HowItWorks />
        <VideoSection/>
        <Features />
        <IndustrySolutions />
      </main>
    </>
  );
}
