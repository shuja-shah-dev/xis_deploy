import Head from "next/head";
import StickyScroll from "./stickyscroll";
import { useEffect, useState, useRef, TouchEvent } from "react";
import { useRouter } from "next/router";
import Marquee from "@/components/Marquee";
import { Box, Typography } from "@mui/material";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import How from "@/components/howtowork";
import Image from "next/image";
import RoboticArm from "../assets/roboticArm.png";
import defectDetection from "../assets/defectDetection.png";
import xray2 from "../assets/xray2.png";
import 'intersection-observer';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import { useAuth } from "@/common/authProvider";
import Link from "next/link";
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const introSection = () => {
  return (
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
        <h1 className=" text-2xl sm:text-5xl font-bold fadeInUp animated mb-2 ">
          Simplified Edge AI for Industrial Inspection
        </h1>

        <p
          className=" text-base sm:text-xl mt-4 "

        >
          Build, Deploy & Inspect Quality in Minutes
        </p>
        <Link href="/contact"><button className="rounded-full text-xl hover:border-black  hover:bg-white hover:text-black border px-4 py-2 mt-4">
          Get a demo
        </button></Link>
      </div>
    </Box>
  )
};

const Autoannotate = () => {  
  return(
    <section class="text-white">
  <div class="container mx-auto flex px-5 pt-20 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-full lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium ">Quality inspection</h1>
      <p class="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
    
    </div>
    <div class="lg:max-w-lg  w-full">
      <Image width={4100} height={4100} class="object-cover w-full object-center rounded" alt="hero" src="/robotic1.jpeg"/>
    </div>
  </div>
</section>
  )
}

const AnnotationTypes = () => {  
  return(
    <section class="text-white">
  <div class="container mx-auto flex px-5 pt-20 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-full lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium ">Assembly process automation</h1>
      <p class="mb-8 leading-relaxed">Computer vision technology can automate the entire assembly process. It can detect parts, orient them correctly to the assembly line, and then track their progress as they move through the various stages of the production process.</p>
    
    </div>
    <div class="lg:max-w-lg w-full">
      <Image width={4100} height={4100} class="object-cover w-full object-center rounded" alt="hero" src="/robotic2.jpeg"/>
    </div>
  </div>
</section>
  )
}

const  PerformanceAnalytics  = () => {  
  return(
    <section class="text-white">
  <div class="container mx-auto flex px-5 pt-20 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-full lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium ">Assembly process automation</h1>
      <p class="mb-8 leading-relaxed">Computer vision technology can automate the entire assembly process. It can detect parts, orient them correctly to the assembly line, and then track their progress as they move through the various stages of the production process.</p>
    
    </div>
    <div class="lg:max-w-lg w-full">
      <Image width={4100} height={4100} class="object-cover w-full object-center rounded" alt="hero" src="/robotic3.jpeg"/>
    </div>
  </div>
</section>
  )
}


const benefitSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3; // Adjust the total number of slides

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? totalSlides - 1 : prevSlide - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Auto-slide every 5 seconds (adjust as needed)

    return () => {
      clearInterval(interval); // Clean up the interval on unmount
    };
  }, []);


  const data = [
    {
      svg: "",
      title: 'Get chain visibility',
      desc: 'Get insights from every part of the package journey',
      para: 'Synth chartreuse iPhone lomo cray raw denim brunch everyday carry'
    },
    {
      svg: "",
      title: 'Get chain visibility',
      desc: 'Get insights from every part of the package journey',
      para: 'Synth chartreuse iPhone lomo cray raw denim brunch everyday carry'
    },
  ]

  const benefit = [
    {
      svg: "",
      title: 'Get chain visibility',
      desc: 'Get insights from every part of the package journey',
      para: 'Synth chartreuse iPhone lomo cray raw denim brunch everyday carry'
    },
    {
      svg: "",
      title: 'Get chain visibility',
      desc: 'Get insights from every part of the package journey',
      para: 'Synth chartreuse iPhone lomo cray raw denim brunch everyday carry'
    },
    {
      svg: "",
      title: 'Get chain visibility',
      desc: 'Get insights from every part of the package journey',
      para: 'Synth chartreuse iPhone lomo cray raw denim brunch everyday carry'
    },
  ]

  const vision = [
    {
      heading: "1 Quality inspection",
      para: "Combined with ML-powered anomaly detection, computer vision enables automated visual inspection to identify defective products with any type of anomaly (e.g. scratches or dents).",
    },
    {
      heading: "2 Assembly process automation",
      para: "Computer vision technology can automate the entire assembly process. It can detect parts, orient them correctly to the assembly line, and then track their progress as they move through the various stages of the production process.",
    },
    {
      heading: "3 Packaging inspection",
      para: "Manufacturing companies rely on computer vision solutions to ensure products are correctly packaged, palleted, and labeled with appropriate barcodes.",
    },
    {
      heading: "4 Object detection and recognition",
      para: "CV can identify and track objects within manufacturing operations, such as parts on a conveyor belt or products on an assembly line, allowing for real-time supervision.",
    },
    {
      heading: "5 Compliance monitoring",
      para: "Computer vision systems can continuously monitor adherence to relevant manufacturing compliance rules, safety regulations, or environmental standards.",
    },
    {
      heading: "6 Sorting and counting",
      para: "Manufacturers use computer vision to sort and count items, such as parts or components. Automatic sorting helps to improve accuracy, particularly in high-volume production environments.",
    },
  ]


  const [isParagraphVisible, setIsParagraphVisible] = useState(false);

  const toggleParagraph = () => {
    setIsParagraphVisible(!isParagraphVisible);
  };
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  const accordionStyle = {
    // backgroundImage: "url('/background.png')",
    // backgroundSize: "cover",
    // backgroundRepeat: "no-repeat",
    // backgroundPosition: "center",
    // objectFit: "cover",
    backgroundColor: '#111111',
    color: "white",
    border: "1px solid gray"
  };

  const [screen, setScreen] = useState("auto-annotate");

  return (
    <section
      className="text-white  block relative  mt-0 "
      style={{
        backgroundImage: "url('/background.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        objectFit: "cover"
      }}
    >
        <div
       
        className="text-gray-600 mx-auto container "
      >
        <div  className=" px-4 py-12">
          <div className="my-4 flex w-full flex-col justify-center items-center pt-8 lg:flex-row lg:pt-0">
            <form className="mb-2 w-full text-center items-center rounded-lg lg:mb-0 lg:flex">
              <div className="flex flex-wrap lg:flex-nowrap justify-center  text-center gap-3 shadow-sm h-[100%] lg:h-14 items-center  rounded-md w-full relative ">
                <input
                  onClick={() => setScreen("auto-annotate")}
                  className="h-[0px] w-[0px]  overflow-hidden absolute"
                  type="radio"
                  id="auto-annotate"
                  value=""
                />
                <label
                  htmlFor="auto-annotate"
                  className={`lg:text-lg text-sm  text-white w-[60%] bg-gray-800 border-gray-600 border   items-center focus:border-sky-500 focus:ring focus:ring-sky-500 md:text-lg rounded-lg py-3 px-2 cursor-pointer leading-relaxed -mr-[1px] relative text-center duration-[.15s] transition-all  ${
                    screen === "auto-annotate" &&
                    "  border-4 border-sky-500  text-white duration-[.15s] transition-all  font-semibold"
                  } `}
                >
                  Auto-Annotate
                </label>
                <input
                  onClick={() => setScreen("annotation-types")}
                  className="h-[0px] w-[0px]   overflow-hidden absolute"
                  type="radio"
                  id="annotation-types"
                  value=""
                  checked
                />
                <label
                  htmlFor="annotation-types"
                  className={`lg:text-lg text-sm  w-[60%] text-white focus:border-sky-500 bg-gray-800 border-gray-600 border   items-center focus:ring focus:ring-sky-500   md:text-lg rounded-lg py-3  cursor-pointer leading-relaxed -mr-[1px] relative text-center duration-[.15s] transition-all   ${
                    screen === "annotation-types" &&
                    "  border-4 border-sky-500  text-white duration-[.15s] transition-all  font-semibold"
                  }`}
                >
                  Annotation Types
                </label>
                <input
                  onClick={() => setScreen("performance")}
                  className="h-[0px] w-[0px]   overflow-hidden absolute"
                  type="radio"
                  id="performance"
                  value=""
                  checked
                />
                <label
                  htmlFor="performance"
                  className={`lg:text-lg text-sm w-[60%]  text-white focus:border-sky-500 bg-gray-800 border-gray-600 border   items-center focus:ring focus:ring-sky-500 md:text-lg rounded-lg py-3 px-2 cursor-pointer leading-relaxed -mr-[1px] relative text-center duration-[.15s] transition-all ${
                    screen === "performance" &&
                    "border-4 border-sky-500 text-white duration-[.15s] transition-all  font-semibold"
                  }`}
                >
                  Performance Analytics 
                </label>
                <input
                  onClick={() => setScreen("real-time")}
                  className="h-[0px] w-[0px]   overflow-hidden absolute"
                  type="radio"
                  id="real-time"
                  value=""
                  checked
                />
                <label
                  htmlFor="real-time"
                  className={`lg:text-lg text-sm w-[60%] text-white focus:border-sky-500 bg-gray-800 border-gray-600 border  items-center focus:ring focus:ring-sky-500 md:text-lg rounded-lg py-3 pr-2  cursor-pointer leading-relaxed -mr-[1px] relative text-center duration-[.15s] transition-all ${
                    screen === "real-time" &&
                    "border-4 border-sky-500 text-white duration-[.15s] transition-all  font-semibold"
                  }`}
                >
                  Real-time Collaboration
                </label>
              
              </div>
            </form>
          </div>
          {screen === "auto-annotate" && Autoannotate()}
          {screen === "annotation-types" && AnnotationTypes()}
          {screen === "performance" && PerformanceAnalytics()}
        
        </div>
      </div>
      
      {/* <div className="justify-center text-white  text-center items-center w-full relative mx-auto z-10">
        <h1 className="text-5xl font-bold mb-16 pt-10">
          Benefits
        </h1>
        <div className="mb-12 sm:mb-10 relative mx-auto justify-center items-center z-10">
          <section>
            <div className="gap-16 items-start py-8 px-4 mx-auto max-w-screen-xl md:grid md:grid-cols-2 md:pt-16 lg:px-6">
              <div className="flex flex-wrap ">
                <div>
                  {
                    vision.map((item, index) => {
                      return (
                        <Accordion style={accordionStyle}>
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                          >
                            <Typography>{item.heading}</Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography>
                              {item.para}
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                      )
                    })
                  }

                </div>
                {
                  vision.map((item, index) => {
                    return (
                      <div key={index} className="xl:w-1/2 md:w-1/2 p-4">
                        <div className="  rounded-lg">
                          <h2 className="text-lg text-start md:text-center font-medium title-font mb-2">{item.heading}</h2>
                          <p className="leading-relaxed text-start md:text-center text-base">{item.para}</p>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
              <div id="default-carousel" className="relative mt-20 lg:mt-0 w-full" data-carousel="slide">
                <div className="relative h-96 overflow-hidden rounded-lg md:h-96">
                  {[...Array(totalSlides)].map((_, index) => (
                    <div
                      key={index}
                      className={`duration-700 ease-in-out absolute w-full h-full ${currentSlide === index ? 'opacity-100' : 'opacity-0'
                        }`}
                      data-carousel-item
                    >
                      <Image
                        width={600}
                        height={600}
                        src={`/robotic${index + 1}.jpeg`} // Adjust the image file names accordingly
                        alt="..."
                        className="w-full h-full rounded-xl"
                      />
                    </div>
                  ))}
                </div>

                <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                  <button
                    type="button"
                    className="w-3 h-3 rounded-full"
                    aria-current="true"
                    aria-label="Previous Slide"
                    onClick={prevSlide}
                  >

                  </button>
                  {[...Array(totalSlides)].map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-black' : 'bg-white'
                        }`}
                      aria-current={currentSlide === index}
                      aria-label={`Slide ${index + 1}`}
                      onClick={() => setCurrentSlide(index)}
                    />
                  ))}
                  <button
                    type="button"
                    className="w-3 h-3 rounded-full"
                    aria-current="true"
                    aria-label="Next Slide"
                    onClick={nextSlide}
                  >

                  </button>
                </div>
              </div>

            </div>
          </section>
          <Image
                src="/fourpics.png"
                width={512}
                height={680}
                className="block w-[785px] object-cover mx-auto lg:hidden max-w-full"
              />
        </div>
        <Image
              src="/img5.svg"
              width={1096}
              height={680}
              className="-z-[1] max-w-none absolute top-0 left-[28%] pointer-events-none"
            />
      </div> */}
      <section
        className="text-white relative hiddenn pb-24  body-font z-10">
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
            {
              data.map((item, index) => {
                return (
                  <div key={index} className="p-4 md:w-1/2 w-full">
                    <div className="h-full p-4 rounded">
                      <h1 className="mb-4 text-2xl font-medium ">
                        {item.title}
                      </h1>
                      <p className="mb-8 font-medium ">
                        {item.desc}
                      </p>

                      <p className="leading-relaxed flex mb-6 justify-start items-baseline  ">
                        <Image
                          src="/circle.svg"
                          width={10}
                          height={10}
                          className="mr-4"
                        />{" "}
                        {item.para}
                      </p>
                      <p className="leading-relaxed flex mb-6 justify-start items-baseline ">
                        <Image
                          src="/circle.svg"
                          width={10}
                          height={10}
                          className="mr-4"
                        />{" "}
                        {item.para}
                      </p>
                      <p className="leading-relaxed flex mb-6 justify-start items-baseline ">
                        <Image
                          src="/circle.svg"
                          width={10}
                          height={10}
                          className="mr-4 "
                        />{" "}
                        {item.para}
                      </p>
                    </div>
                  </div>
                )
              })
            }

          </div>
        </div>

        <div className="container px-5  mx-auto">
          <div className="flex flex-wrap -m-4">
            {
              benefit.map((item, index) => {
                return (
                  <div key={index} className="p-4 md:w-1/3">
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
                          {item.title}
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
                )
              })
            }

          </div>
        </div>
      </section>
    </section>
  )
};

const caseStudies = () => {

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
    <section style={{
      backgroundImage: "url('/background.png')",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      objectFit: "cover"
    }} className="text-white block relative -my-1 ">
      <div className="container px-5 py-24 mx-auto  ">
        <div className="justify-center items-center text-center mb-16 text-5xl font-bold">
          Case Studies
        </div>
        <div className="flex hiddenn flex-wrap flex-col lg:flex-row -mx-4 -mb-10 text-center">
          <div className="lg:w-1/2 mb-10 px-4 relative min-h-[1px] w-full  elementor-element p-[1em]">
            <div className="rounded-xl h-[100%] overflow-hidden">
              <Image
                width={400}
                height={400}
                alt="content"
                className="object-cover h-96 object-center w-full"
                src="/defectDetection.png"
              />
            </div>
            {/* <h2 className="title-font text-2xl font-medium mt-6 mb-6">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Fuga, ea.
            </h2>
            <button className="inline-flex text-white bg-gray-800 border-0 py-2 px-6 focus:outline-none  rounded-xl text-lg">
              API Reference
            </button> */}
          </div>
          <div className="lg:w-1/2 w-full mb-10 px-4 relative min-h-[1px] flex elementor-element p-[1em] ">
            <div className="rounded-lg overflow-hidden  elementor-widget-wrap flex">
              <div className="elementor-element  elementor-widget">
                <div className="elementor-widget-container ">
                  <div className="twentytwenty-wrapper twentytwenty-horizontal">
                    <div
                      ref={imageContainer}
                      className="twentytwenty-container rounded-xl w-full h-[270.672px] lg:h-[384px]"
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
  )
}

const featureSection = () => {
  return (
    <section style={{
      backgroundImage: "url('/background.png')",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      objectFit: "cover"
    }} className="text-white block relative dark:bg-gray-900 -my-1 ">

      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center ">
        <div className="w-full flex flex-col lg:items-center lg:text-center  items-center text-center">
          <h1 className="title-font text-5xl font-bold mb-10 ">
            Features
          </h1>
          {/* <p className="mb-10 hiddenn leading-relaxed w-1/2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
            quasi exercitationem temporibus minus quos dicta rem quis
            debitis repudiandae ipsum.
          </p>
          <div className="flex hiddenn justify-center">
            <button className="inline-flex text-white bg-gray-800 border-0 py-2 px-6 focus:outline-none  rounded-xl text-lg">
              API Reference
            </button>
          </div> */}
        </div>
      </div>
      <section className="text-white hiddenn block  -my-1">
        <div className="container px-5 pb-24 mx-auto  ">
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
  )
}

export default function Home() {

  const controller = useRouter();

  const { accessToken } = useAuth();



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
        style={{
          backgroundImage: "url('/background.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          objectFit: "cover"
        }}
        className="bg-[#111111] text-white relative overflow-hidden">
        {introSection()}
        <div className="text-white  block relative  mt-0">
          {benefitSection()}
          {caseStudies()}
          <How />
          {featureSection()}
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
        <title>xis.ai</title>
        <meta name="description" content="XIS AI, AI startup, industrial quality inspection, process monitoring" />
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
          <Typography sx={{ width: "100%", textAlign: "Center" }}>Permission Denied.</Typography>
          <Typography sx={{ width: "100%", textAlign: "Center" }}>Please Login to continue.</Typography>
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
