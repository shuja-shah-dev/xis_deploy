import Head from "next/head";
import StickyScroll from "./stickyscroll";
import { useEffect, useState, useRef, TouchEvent } from "react";
import { useRouter } from "next/router";
import Marquee from "@/components/Marquee";
import { Box, Typography } from "@mui/material";
import How from "@/components/howtowork";
import Image from "next/image";
import RoboticArm from "../assets/roboticArm.png";
import defectDetection from "../assets/defectDetection.png";
import xray2 from "../assets/xray2.png";
import 'intersection-observer';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import { useAuth } from "@/common/authProvider";


export default function Home() {
  const [imageReveal, setImageReveal] = useState(0.5);
  const imageContainer = useRef(null);
  const handleRef = useRef(null);
  const controller = useRouter();

  const { accessToken } = useAuth();

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

    const hiddenElements = document.querySelectorAll('.hiddenn');
    hiddenElements.forEach((element) => {
      observer.observe(element);
    });
  });

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const shouldShow = window.scrollY > 100; // Adjust the scroll distance as needed
      setShowButton(shouldShow);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };



  return accessToken ? (
    <>


      <div
       style={{ backgroundImage: "url('/background.png')",
       backgroundSize: "cover",
       backgroundRepeat: "no-repeat",
       backgroundPosition: "center",
       objectFit: "cover" }}
       className="bg-[#111111] text-white relative overflow-hidden">
        <Box
          className="block bg-[#111111] object-cover w-[100vw] h-[90vh] max-w-[100vw] top-0 left-0 right-0 overflow-hidden pesudoMyClass"
          sx={{
            position: "relative",
            "&:before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)",
              zIndex: 1,
              transition: "all 0.5s ease-in-out",
            },
          }}
        >
          <video
            className="w-[100vw] bg-[#111111] h-full opacity-80 fixed z-0 top-0 right-0 left-0 object-cover "
            autoPlay
            muted
            playsInline
            loop
            src="/xraylab.mp4"
          ></video>
          <div
            className="absolute top-2/3 w-full left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-white text-center"
            style={{
              zIndex: 10,
            }}
          >
            <h1 className="text-5xl font-bold fadeInUp animated mb-2 ">
              Simplified Edge AI for Industrial Inspection
            </h1>

            <p
              className="text-2lg mt-4 "
              style={{
                fontSize: "1.2rem",
              }}
            >
              Build, Deploy & Inspect Quality in Minutes
            </p>
            <button className="rounded-md  hover:bg-white hover:text-black border px-2 py-1 mt-4">
              See an action
            </button>
          </div>
        </Box>
        <div className="text-white  block relative  mt-0">
          <section
            className="text-white bg-[#111111] block relative  mt-0 "
            style={{ backgroundImage: "url('/background.png')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            objectFit: "cover" }}
          >
            <div className="justify-center text-white pb-6 text-center items-center w-full relative mx-auto z-10">
              <h1 className="text-5xl font-bold mb-20 pt-10">
                Benefits
              </h1>
              <div className="mb-12 sm:mb-10 relative mx-auto justify-center items-center z-10">
              
                <section>
                  <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                  
                    <div className="font-light text-gray-100 sm:text-lg dark:text-gray-400">
                      <p className="mb-4">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.</p>
                      <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p>
                    </div>
                   
<div id="default-carousel" class="relative w-full" data-carousel="slide">
   
    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
        
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <Image width={400} height={400} src="/robotic2.jpeg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
    </div>
  
    <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
    </div>
   
    <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
</div>

                  </div>
                </section>
                {/* <Image
                src="/fourpics.png"
                width={512}
                height={680}
                className="block w-[785px] object-cover mx-auto lg:hidden max-w-full"
              /> */}
              </div>
              {/* <Image
              src="/img5.svg"
              width={1096}
              height={680}
              className="-z-[1] max-w-none absolute top-0 left-[28%] pointer-events-none"
            /> */}
            </div>
            <section
             className="text-white dark:bg-gray-900 relative hiddenn pb-24  body-font z-10">
              <div className="container px-5 mx-auto z-10  ">
              
                <div className="w-20 h-20 inline-flex items-center   justify-center  bg-gray-800 rounded-lg text-white mb-5 flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLineCap="round"
                    strokeLineJoin="round"
                    strokeWidth="2"
                    className="w-10 h-10"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div className="flex flex-wrap -m-4">
                  <div className="p-4 md:w-1/2 w-full">
                    <div className="h-full p-4 rounded">
                      <h1 className="mb-4 text-2xl font-medium ">
                        Get chain visibility
                      </h1>
                      <p className="mb-8 font-medium ">
                        Get insights from every part of the package journey
                      </p>

                      <p className="leading-relaxed flex mb-6 justify-start items-baseline  ">
                        <Image
                          src="/circle.svg"
                          width={10}
                          height={10}
                          className="mr-4"
                        />{" "}
                        Synth chartreuse iPhone lomo cray raw denim brunch
                        everyday carry.
                      </p>
                      <p className="leading-relaxed flex mb-6 justify-start items-baseline ">
                        <Image
                          src="/circle.svg"
                          width={10}
                          height={10}
                          className="mr-4"
                        />{" "}
                        Synth chartreuse iPhone lomo cray raw denim brunch
                        everyday carry.
                      </p>
                      <p className="leading-relaxed flex mb-6 justify-start items-baseline ">
                        <Image
                          src="/circle.svg"
                          width={10}
                          height={10}
                          className="mr-4 "
                        />{" "}
                        Synth chartreuse iPhone lomo cray raw denim brunch
                        everyday carry.
                      </p>
                    </div>
                  </div>
                  <div className="p-4 md:w-1/2 w-full">
                    <div className="h-full p-4 rounded">
                      <h1 className="md:mb-24 "></h1>

                      <p className="leading-relaxed flex mb-6 justify-start items-baseline ">
                        <Image
                          src="/circle.svg"
                          width={10}
                          height={10}
                          className="mr-4"
                        />{" "}
                        Synth chartreuse iPhone lomo cray raw denim brunch
                        everyday carry.
                      </p>
                      <p className="leading-relaxed flex mb-6 justify-start items-baseline  ">
                        <Image
                          src="/circle.svg"
                          width={10}
                          height={10}
                          className="mr-4"
                        />{" "}
                        Synth chartreuse iPhone lomo cray raw denim brunch
                        everyday carry.
                      </p>
                      <p className="leading-relaxed flex mb-6 justify-start items-baseline  ">
                        <Image
                          src="/circle.svg"
                          width={10}
                          height={10}
                          className="mr-4 "
                        />{" "}
                        Synth chartreuse iPhone lomo cray raw denim brunch
                        everyday carry.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="container px-5  mx-auto">
                <div className="flex flex-wrap -m-4">
                  <div className="p-4 md:w-1/3">
                    <div className="flex rounded-lg h-full p-8 flex-col  ">
                      <div className="flex items-center mb-8">
                        <div className="w-20 h-20 inline-flex items-center justify-center  bg-gray-800 rounded-lg text-white mb-5 flex-shrink-0">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLineCap="round"
                            strokeLineJoin="round"
                            strokeWidth="2"
                            className="w-10 h-10"
                            viewBox="0 0 24 24"
                          >
                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                          </svg>
                        </div>
                      </div>

                      <div className="flex-grow ">
                        <h2 className=" text-2xl font-medium mb-4 ">
                          Eliminate human errors
                        </h2>
                        <p className="leading-relaxed font-medium mb-4 ">
                          Blue bottle crucifix vinyl post-ironic four dollar toast
                          vegan taxidermy. Gastropub indxgo juice poutine.
                        </p>
                        <p className="leading-relaxed flex mb-6 justify-start items-baseline">
                          <Image
                            src="/circle.svg"
                            width={10}
                            height={10}
                            className="mr-4"
                          />{" "}
                          Synth chartreuse iPhone lomo cray raw denim brunch
                          everyday carry.
                        </p>
                        <p className="leading-relaxed flex mb-6 justify-start items-baseline">
                          <Image
                            src="/circle.svg"
                            width={10}
                            height={10}
                            className="mr-4"
                          />{" "}
                          Synth chartreuse iPhone lomo cray raw denim brunch
                          everyday carry.
                        </p>
                        <p className="leading-relaxed flex mb-6 justify-start items-baseline">
                          <Image
                            src="/circle.svg"
                            width={10}
                            height={10}
                            className="mr-4"
                          />{" "}
                          Synth chartreuse iPhone lomo cray raw denim brunch
                          everyday carry.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 md:w-1/3">
                    <div className="flex rounded-lg h-full p-8 flex-col  ">
                      <div className="flex items-center mb-8">
                        <div className="w-20 h-20 inline-flex items-center justify-center  bg-gray-800 rounded-lg text-white mb-5 flex-shrink-0">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLineCap="round"
                            strokeLineJoin="round"
                            strokeWidth="2"
                            className="w-10 h-10"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                          </svg>
                        </div>
                      </div>

                      <div className="flex-grow">
                        <h2 className=" text-2xl font-medium mb-4">
                          Increase customer loyalty
                        </h2>
                        <p className="leading-relaxed font-medium mb-4">
                          Blue bottle crucifix vinyl post-ironic four dollar toast
                          vegan taxidermy. Gastropub indxgo juice poutine.
                        </p>
                        <p className="leading-relaxed flex mb-6 justify-start items-baseline">
                          <Image
                            src="/circle.svg"
                            width={10}
                            height={10}
                            className="mr-4"
                          />{" "}
                          Synth chartreuse iPhone lomo cray raw denim brunch
                          everyday carry.
                        </p>
                        <p className="leading-relaxed flex mb-6 justify-start items-baseline">
                          <Image
                            src="/circle.svg"
                            width={10}
                            height={10}
                            className="mr-4"
                          />{" "}
                          Synth chartreuse iPhone lomo cray raw denim brunch
                          everyday carry.
                        </p>
                        <p className="leading-relaxed flex mb-6 justify-start items-baseline">
                          <Image
                            src="/circle.svg"
                            width={10}
                            height={10}
                            className="mr-4"
                          />{" "}
                          Synth chartreuse iPhone lomo cray raw denim brunch
                          everyday carry.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 md:w-1/3 ">
                    <div className="flex rounded-lg h-full  p-8 flex-col ">
                      <div className="flex items-center mb-8">
                        <div className="w-20 h-20 inline-flex items-center justify-center  bg-gray-800 rounded-lg text-white mb-5 flex-shrink-0">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLineCap="round"
                            strokeLineJoin="round"
                            strokeWidth="2"
                            className="w-10 h-10"
                            viewBox="0 0 24 24"
                          >
                            <circle cx="6" cy="6" r="3"></circle>
                            <circle cx="6" cy="18" r="3"></circle>
                            <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                          </svg>
                        </div>
                      </div>

                      <div className="flex-grow ">
                        <h2 className=" text-2xl font-medium mb-4">
                          Fast time to value
                        </h2>
                        <p className="leading-relaxed font-medium mb-4">
                          Blue bottle crucifix vinyl post-ironic four dollar toast
                          vegan taxidermy. Gastropub indxgo juice poutine.
                        </p>
                        <p className="leading-relaxed flex mb-6 justify-start items-baseline">
                          <Image
                            src="/circle.svg"
                            width={10}
                            height={10}
                            className="mr-4"
                          />{" "}
                          Synth chartreuse iPhone lomo cray raw denim brunch
                          everyday carry.
                        </p>
                        <p className="leading-relaxed flex mb-6 justify-start items-baseline">
                          <Image
                            src="/circle.svg"
                            width={10}
                            height={10}
                            className="mr-4"
                          />{" "}
                          Synth chartreuse iPhone lomo cray raw denim brunch
                          everyday carry.
                        </p>
                        <p className="leading-relaxed flex mb-6 justify-start items-baseline">
                          <Image
                            src="/circle.svg"
                            width={10}
                            height={10}
                            className="mr-4"
                          />{" "}
                          Synth chartreuse iPhone lomo cray raw denim brunch
                          everyday carry.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section>

          <section style={{ backgroundImage: "url('/background.png')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            objectFit: "cover" }} className="text-white block relative bg-[#111111] -my-1 ">
            <div className="container px-5 py-24 mx-auto  ">
              <div className="justify-center items-center text-center mb-16 text-5xl font-bold">
                Case Studies
              </div>
              <div className="flex hiddenn flex-wrap flex-col lg:flex-row -mx-4 -mb-10 text-center">
                <div className="lg:w-1/2 mb-10 px-4 relative min-h-[1px] w-full  elementor-element p-[1em]">
                  <div className="rounded-lg h-[68%] overflow-hidden">
                    <Image
                      width={400}
                      height={400}
                      alt="content"
                      className="object-cover h-full object-center w-full"
                      src="/defectDetection.png"
                    />
                  </div>
                  <h2 className="title-font text-2xl font-medium mt-6 mb-6">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Fuga, ea.
                  </h2>
                  <button className="inline-flex text-white bg-gray-800 border-0 py-2 px-6 focus:outline-none  rounded-xl text-lg">
                    API Reference
                  </button>
                </div>
                <div className="lg:w-1/2 w-full mb-10 px-4 relative min-h-[1px] flex elementor-element p-[1em] ">
                  <div className="rounded-lg overflow-hidden elementor-widget-wrap flex">
                    <div className="elementor-element  elementor-widget">
                      <div className="elementor-widget-container ">
                        <div className="twentytwenty-wrapper twentytwenty-horizontal">
                          <div
                            ref={imageContainer}
                            className="twentytwenty-container rounded-xl w-full h-[400.672px]"
                          >
                            <img
                              decoding="async"
                              style={{
                                clipPath: `polygon(0 0, ${imageReveal * 100
                                  }% 0, ${imageReveal * 100}% 100%, 0 100%)`,
                              }}
                              className="twentytwenty-before h-full pafe-before-after-image-comparison-slider__item pafe-before-after-image-comparison-slider__item--before"
                              src="https://www.tomomi-research.com/wp-content/uploads/2023/03/live-img-2022-09-23-14-11-58--jpg.webp"
                            />
                            <img
                              decoding="async"
                              className="custom-clip2 h-full pafe-before-after-image-comparison-slider__item pafe-before-after-image-comparison-slider__item--after twentytwenty-after"
                              src="https://www.tomomi-research.com/wp-content/uploads/2023/03/surface-normal-img-2022-09-23-14-11-58--jpg.webp"
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
                              className="twentytwenty-handle "
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
            </div>
          </section>

          <How />
          <section style={{ backgroundImage: "url('/background.png')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            objectFit: "cover" }} className="text-white block relative dark:bg-gray-900 -my-1 ">
            <div aria-hidden="true" className="absolute inset-0 h-64 w-full m-auto grid grid-cols-2 -space-x-52 opacity-30">
              <div className="blur-[50px] h-64 bg-gradient-to-br  to-purple-500 from-sky-500"></div>
              <div className="blur-[50px] h-64 bg-gradient-to-r to-purple-500 from-sky-500"></div>
            </div>
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center ">
              <div className="w-full flex flex-col lg:items-start lg:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-5xl sm:font-bold text-3xl mb-10 font-medium ">
                  Features
                </h1>
                <p className="mb-10 hiddenn leading-relaxed w-1/2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
                  quasi exercitationem temporibus minus quos dicta rem quis
                  debitis repudiandae ipsum.
                </p>
                <div className="flex hiddenn justify-center">
                  <button className="inline-flex text-white bg-gray-800 border-0 py-2 px-6 focus:outline-none  rounded-xl text-lg">
                    API Reference
                  </button>
                </div>
              </div>
            </div>
            <section  className="text-white hiddenn block  -my-1">
            <div className="container px-5 py-24 mx-auto  ">
              <div className="flex flex-wrap sm:-m-4 pb-28   -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                <div className="p-4 md:w-1/3 flex">
                  <div className="w-20 h-20 inline-flex items-center justify-center rounded-lg bg-gray-800  text-white mb-4 flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLineCap="round"
                      strokeLineJoin="round"
                      strokeWidth="2"
                      className="w-10 h-10"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <div className="flex-grow pl-6">
                    <h2 className="text-4xl title-font font-medium mb-10">
                      Label OCR API
                    </h2>
                    <p className="leading-relaxed text-base">
                      Have smartphones and camera devices extract information from
                      any package label.
                    </p>
                  </div>
                </div>
                <div className="p-4 md:w-1/3 flex">
                  <div className="w-20 h-20 inline-flex items-center justify-center rounded-lg bg-gray-800  text-white mb-4 flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLineCap="round"
                      strokeLineJoin="round"
                      strokeWidth="2"
                      className="w-10 h-10"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <div className="flex-grow pl-6">
                    <h2 className="text-4xl title-font font-medium mb-10">
                      Label OCR API
                    </h2>
                    <p className="leading-relaxed text-base">
                      Have smartphones and camera devices extract information from
                      any package label.
                    </p>
                  </div>
                </div>
                <div className="p-4 md:w-1/3 flex">
                  <div className="w-20 h-20 inline-flex items-center justify-center rounded-lg bg-gray-800  text-white mb-4 flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLineCap="round"
                      strokeLineJoin="round"
                      strokeWidth="2"
                      className="w-10 h-10"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <div className="flex-grow pl-6">
                    <h2 className="text-4xl title-font font-medium mb-10">
                      Label OCR API
                    </h2>
                    <p className="leading-relaxed text-base">
                      Have smartphones and camera devices extract information from
                      any package label.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                <div className="p-4 md:w-1/3 flex">
                  <div className="w-20 h-20 inline-flex items-center justify-center rounded-lg bg-gray-800  text-white mb-4 flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLineCap="round"
                      strokeLineJoin="round"
                      strokeWidth="2"
                      className="w-10 h-10"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <div className="flex-grow pl-6">
                    <h2 className="text-4xl title-font font-medium mb-10">
                      Label OCR API
                    </h2>
                    <p className="leading-relaxed text-base">
                      Have smartphones and camera devices extract information from
                      any package label.
                    </p>
                  </div>
                </div>
                <div className="p-4 md:w-1/3 flex">
                  <div className="w-20 h-20 inline-flex items-center justify-center rounded-lg bg-gray-800  text-white mb-4 flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLineCap="round"
                      strokeLineJoin="round"
                      strokeWidth="2"
                      className="w-10 h-10"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <div className="flex-grow pl-6">
                    <h2 className="text-4xl title-font font-medium mb-10">
                      Label OCR API
                    </h2>
                    <p className="leading-relaxed text-base">
                      Have smartphones and camera devices extract information from
                      any package label.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          </section>
          
        </div>
      </div>
      <div className="z-50" style={{ position: 'relative' }}>
        <div className="z-50" style={{ position: 'fixed', bottom: '10%', right: '3%', }}>
          <button
            className="z-50"
            style={{ backgroundColor: '#363636', padding: '10px 10px', borderRadius: "10px", color: '#fff', transition: '0.5s ease-in-out', opacity: showButton ? 1 : 0 }}
            onClick={scrollToTop}
          >
            <KeyboardDoubleArrowUpIcon />
          </button>
        </div>
      </div>
    </>
  ) : (
    <>
      <Head>
        <title>Xis.ai</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" />

      </Head>

      <Box
        sx={{
          height: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "30%",
            width: "35%",
            flexDirection: "column",
          }}
        >
          <Typography>Permission Denied.</Typography>
          <Typography>Please Login to continue.</Typography>
          <button
            onClick={(_) => {
              controller.push("/");
            }}
            className="w-full lg:w-1/2 text-white bg-sky-500 hover:bg-sky-500 mt-10 focus:ring-1 focus:outline-none focus:ring-sky-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-sky-500 dark:hover:bg-sky-500 dark:focus:ring-sky-500"
          >
            Login
          </button>
        </Box>
      </Box>
    </>
  );
}
