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
import "intersection-observer";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import { useAuth } from "@/common/authProvider";
import Link from "next/link";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import SpeedIcon from "@mui/icons-material/Speed";
import ErrorIcon from "@mui/icons-material/Error";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import GroupsIcon from "@mui/icons-material/Groups";
import ShieldIcon from "@mui/icons-material/Shield";
import SettingsIcon from "@mui/icons-material/Settings";
import ElectricalServicesIcon from "@mui/icons-material/ElectricalServices";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import CenterFocusStrongIcon from '@mui/icons-material/CenterFocusStrong';

const IntroSection = () => {
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

        <p className=" text-base sm:text-xl mt-4 ">
          Build, Deploy & Inspect Quality in Minutes
        </p>
        <Link href="/contact" aria-label="GetaDemo" className="focus:outline-none">
          <button id="get-a-demo" aria-label="GetaDemo" className="rounded-full text-base sm:text-xl hover:border-black focus:outline-none hover:bg-white hover:text-black border px-4 py-2 mt-4">
          Get a Demo
          </button>
        </Link>
        <Link href="https://beltline.glitch.me/" target="_blank"  aria-label="ViewInAR" className="focus:outline-none">
          <button id="ViewInAR" aria-label="ViewInAR" className="block focus:outline-none rounded-full mx-auto text-base sm:text-lg hover:border-black  hover:bg-white hover:text-black  px-2 py-1 mt-2">
          <CenterFocusStrongIcon /> View in AR
          </button>
          </Link>
      </div>
      
    </Box>
  );
};

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
        <div className="lg:flex-grow md:w-full lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium ">
            Defect Detection
          </h1>
          <p className="mb-8 leading-relaxed ">
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
                    className="twentytwenty-container rounded-xl w-full h-[320px] lg:h-[400px]"
                  >
                    <Image
                      decoding="async"
                      style={{
                        clipPath: `polygon(0 0, ${imageReveal * 100}% 0, ${imageReveal * 100
                          }% 100%, 0 100%)`,
                      }}
                      className="twentytwenty-before w-full object-center h-full pafe-before-after-image-comparison-slider__item pafe-before-after-image-comparison-slider__item--before"
                      src="/xraycrack1.png"
                      width={542}
                      height={360}
                      alt="Crack Detect"
                    />
                    <Image
                      decoding="async"
                      className="custom-clip2 h-full object-center pafe-before-after-image-comparison-slider__item pafe-before-after-image-comparison-slider__item--after twentytwenty-after"
                      src="/xraycrack.png"
                      width={542}
                      height={360}
                      alt="Crack Detect"
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
        <div className="lg:flex-grow md:w-full lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium ">
            Object Detection & Defect Counting
          </h1>
          <p className="mb-8 leading-relaxed">
            In the domain of object and defect counting, the seamless fusion of
            computer vision and machine learning offers a powerful solution for
            precise and efficient counting. Leveraging state-of-the-art
            technologies, automated systems adeptly tally objects with accuracy
            and speed. This integrated approach optimizes counting processes,
            ensuring a meticulous and reliable enumeration of objects and
            defects in a production line.
          </p>
        </div>
        <div className="lg:max-w-lg h-[320px] lg:h-[400px] w-full">
          <Image
            width={1950}
            height={1097}
            className="h-full w-full object-center rounded-xl"
            alt="Project Camera"
            src="/projectcamera.jpg"
          />
        </div>
      </div>
    </section>
  );
};

const ProductSorting = () => {
  return (
    <section className="text-white">
      <div className="container mx-auto flex px-5 pt-20 lg:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-full lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium ">
            Product Sorting
          </h1>
          <p className="mb-8 leading-relaxed">
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
        <div className="lg:max-w-lg h-full w-full">
          <Image
            width={1600}
            height={1200}
            className="h-full w-full object-center rounded-xl"
            alt="Robotic"
            src="/robotic2.jpeg"
          />
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
        <div className="lg:flex-grow md:w-full lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium ">
            Performance Analytics
          </h1>
          <p className="mb-8 leading-relaxed">
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
                    className="twentytwenty-container rounded-xl w-full h-[383px] lg:h-[500px]"
                  >
                    <Image
                      decoding="async"
                      style={{
                        clipPath: `polygon(0 0, ${imageReveal * 100}% 0, ${imageReveal * 100
                          }% 100%, 0 100%)`,
                      }}
                      className="twentytwenty-before object-center w-full h-full pafe-before-after-image-comparison-slider__item pafe-before-after-image-comparison-slider__item--before"
                      src="/motorxray2.png"
                      width={960}
                      height={1028}
                      alt="Magnet Detect"
                    />
                    <Image
                      decoding="async"
                      className="custom-clip2 h-full w-full pafe-before-after-image-comparison-slider__item pafe-before-after-image-comparison-slider__item--after twentytwenty-after"
                      src="/motorxray1.png"
                      width={960}
                      height={1028}
                      alt="Magnet Detect"
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
        <div className="lg:flex-grow md:w-full lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium ">
            Text Recognition
          </h1>
          <p className="mb-8 leading-relaxed">
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
                    className="twentytwenty-container rounded-xl w-full h-[350px] lg:h-[450px]"
                  >
                    <Image
                      decoding="async"
                      style={{
                        clipPath: `polygon(0 0, ${imageReveal * 100}% 0, ${imageReveal * 100
                          }% 100%, 0 100%)`,
                      }}
                      className="twentytwenty-before w-full h-full object-center pafe-before-after-image-comparison-slider__item pafe-before-after-image-comparison-slider__item--before"
                      src="/textdetect.png"
                      width={1154}
                      height={1097}
                      alt="Text Detect"
                    />
                    <Image
                      decoding="async"
                      className="custom-clip2 h-full w-full object-center pafe-before-after-image-comparison-slider__item pafe-before-after-image-comparison-slider__item--after twentytwenty-after"
                      src="/textdetect1.png"
                      width={1154}
                      height={1097}
                      alt="Text Detect"
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

const BenefitSection = () => {
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
      svg: <LocalShippingIcon fontSize="large" sx={{ fill: "#fff" }} />,
      title: "Reduce Recall",
      desc: "Our product ensures early detection of defects, Minimizing the risk of recalls.",
      para: "The precision of image recognition reduces false positives & negatives, Mitigating potential recalls incidents.",
      third: "",
    },

    {
      svg: <ReportProblemIcon fontSize="large" sx={{ fill: "#fff" }} />,
      title: "Reduce Human Error",
      desc: "Significantly reduce human errors in the inspection process, Improving product quality & consistency.",
      para: "Our product can detect defects that are not visible to the human eye, Ensuring a more thorough inspection process.",
      third: "",
    },
    {
      svg: (
        <AttachMoneyIcon fontSize="large" sx={{ fill: "#fff", fontSize: 45 }} />
      ),
      title: "Reduce Costs",
      desc: "Our product reduces costs by automating labor-intensive visual inspection, speeding up production process & minimizing manual errors.",
      para: "Its ability to detect defects early prevents costly rework & material wastage, Optimizing resource utilization.",
    },
  ];

  const benefit = [
    ...data,
    {
      svg: <SpeedIcon fontSize="large" sx={{ fill: "#fff" }} />,
      title: "Efficiency in Industrial Pipeline",
      desc: "The seamless integration of collaborative robotic systems and advanced computer vision technologies within industrial pipelines, substantially enhance operational efficiency and productivity.",
      para: "This not only augments the overall efficacy of industrial processes but also ushers in a paradigm shift towards heightened precision and streamlined workflow dynamics.",
    },
    {
      svg: <EqualizerIcon fontSize="large" sx={{ fill: "#fff" }} />,
      title: "Reporting and Analytics",
      desc: "Real-time reporting and analytics empower manufacturing stakeholders with instant visibility into defect rates, production trends, and sorting outcomes, facilitating data-driven decision-making for continuous process optimization",
      para: "This dynamic insight enables proactive responses to emerging challenges, fostering a responsive and agile manufacturing environment.",
    },
    {
      svg: <ElectricBoltIcon fontSize="large" sx={{ fill: "#fff" }} />,
      title: "Quick Adaptation to Variability",
      desc: "The adaptability of the system allows for quick reconfiguration to handle different product types or variations, providing flexibility in the manufacturing process without compromising efficiency.",
      para: "This inherent flexibility positions the manufacturing process to efficiently accommodate diverse product portfolios, promoting agility and competitiveness in a rapidly evolving market.",
    },
  ];

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
  ];

  const [isParagraphVisible, setIsParagraphVisible] = useState(false);

  const toggleParagraph = () => {
    setIsParagraphVisible(!isParagraphVisible);
  };
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  const accordionStyle = {
    backgroundColor: "#111111",
    color: "white",
    border: "1px solid gray",
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
        objectFit: "cover",
      }}
    >
      <div className="text-gray-600 mx-auto container ">
        <div className=" px-4 py-12">
          <div className="my-4 flex w-full flex-col justify-center items-center pt-8 lg:flex-row lg:pt-0">
            <div className="mb-2 w-full text-center items-center rounded-lg lg:mb-0 lg:flex">
              <div className="flex flex-wrap lg:flex-nowrap justify-center  text-center gap-3 shadow-sm h-[100%] lg:h-14 items-center  rounded-md w-full relative ">
                <button
                  aria-label="defect-detect"
                  className={`lg:text-lg text-sm  text-white w-[60%] bg-gray-800 border-gray-600 border items-center focus:border-sky-500  focus:ring-0 md:text-lg rounded-lg py-3 px-2 cursor-pointer leading-relaxed -mr-[1px] relative focus:outline-none text-center duration-[.15s] transition-all  ${screen === "auto-annotate" &&
                    "  border-4 border-sky-500  text-white duration-[.15s] transition-all  font-semibold"
                    } `}
                  onClick={() => setScreen("auto-annotate")}>Defect Detection</button>
                <button
                  className={`lg:text-lg text-sm  w-[60%] lg:w-[90%] text-white focus:border-sky-500 bg-gray-800 border-gray-600 border focus:outline-none items-center focus:ring-0  md:text-lg rounded-lg py-3  cursor-pointer leading-relaxed -mr-[1px] relative text-center duration-[.15s] transition-all   ${screen === "annotation-types" &&
                    "  border-4 border-sky-500  text-white duration-[.15s] transition-all  font-semibold"
                    }`}
                  onClick={() => setScreen("annotation-types")}
                >Object & Defect Counting</button>
                <button
                  className={`lg:text-lg text-sm w-[60%] lg:w-[90%]  text-white focus:border-sky-500 bg-gray-800 border-gray-600 border items-center focus:ring-0 md:text-lg rounded-lg py-3 px-2 cursor-pointer leading-relaxed -mr-[1px] focus:outline-none relative text-center duration-[.15s] transition-all ${screen === "performance" &&
                    "border-4 border-sky-500 text-white duration-[.15s] transition-all  font-semibold"
                    }`}
                  onClick={() => setScreen("performance")}
                >Assembly Completeness</button>

                <button
                  className={`lg:text-lg text-sm w-[60%]  text-white focus:border-sky-500 bg-gray-800 border-gray-600 border   items-center focus:ring-0 md:text-lg rounded-lg py-3 px-2 cursor-pointer leading-relaxed focus:outline-none -mr-[1px] relative text-center duration-[.15s] transition-all ${screen === "text-detection" &&
                    "border-4 border-sky-500 text-white duration-[.15s] transition-all  font-semibold"
                    }`}
                  onClick={() => setScreen("text-detection")}
                >Text Recognition</button>
                <button
                  className={`lg:text-lg text-sm w-[60%] text-white focus:border-sky-500 bg-gray-800 border-gray-600 border  items-center focus:ring-0 md:text-lg rounded-lg py-3 pr-2  cursor-pointer leading-relaxed focus:outline-none -mr-[1px] relative text-center duration-[.15s] transition-all ${screen === "real-time" &&
                    "border-4 border-sky-500 text-white duration-[.15s] transition-all  font-semibold"
                    }`}
                  onClick={() => setScreen("real-time")}
                >Product Sorting</button>
              </div>
            </div>
          </div>
          {screen === "auto-annotate" && <DefectDetection />}
          {screen === "annotation-types" && <CountingDefects />}
          {screen === "performance" && <PerformanceAnalytics />}
          {screen === "real-time" && <ProductSorting />}
          {screen === "text-detection" && <TextDetection />}
        </div>
      </div>

      <section className="text-white relative hiddenn pb-24  body-font z-10">
        <div className="container px-5  mx-auto">
          <div className="flex flex-wrap -m-4">
            {benefit.map((item, index) => {
              return (
                <div key={index} className="p-4 md:w-1/3">
                  <div className="flex rounded-lg h-full p-8 flex-col  ">
                    <div className="flex items-center mb-8">
                      <div className="w-20 h-20 inline-flex items-center justify-center  bg-gray-800 rounded-lg text-white mb-5 flex-shrink-0">
                        {item.svg ? item.svg : <SpeedIcon />}
                      </div>
                    </div>

                    <div className="flex-grow ">
                      <h2 className=" text-2xl font-medium mb-4 ">
                        {item.title}
                      </h2>

                      <p className="leading-relaxed flex mb-6 justify-start items-baseline">
                        <Image
                          src="/circle.svg"
                          width={10}
                          height={10}
                          className="mr-4"
                          alt="circle icon"
                        />{" "}
                        {item.desc}
                      </p>
                      <p className="leading-relaxed flex mb-6 justify-start items-baseline">
                        <Image
                          src="/circle.svg"
                          alt="circle icon"
                          width={10}
                          height={10}
                          className="mr-4"
                        />{" "}
                        {item.para}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </section>
  );
};

const CaseStudies = () => {
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
    <section
      style={{
        backgroundImage: "url('/background.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        objectFit: "cover",
      }}
      className="text-white block relative -my-1 "
    >
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
                alt="Defect Detection Robot"
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
                      className="twentytwenty-container rounded-xl w-full h-[384px] lg:h-[384px]"
                    >
                      <Image
                        decoding="async"
                        style={{
                          clipPath: `polygon(0 0, ${imageReveal * 100}% 0, ${imageReveal * 100
                            }% 100%, 0 100%)`,
                        }}
                        className="twentytwenty-before h-full pafe-before-after-image-comparison-slider__item pafe-before-after-image-comparison-slider__item--before"
                        src="/xrayimg.webp"
                        alt="Xray Vision"
                        width={600}
                        height={600}
                      />
                      <Image
                        decoding="async"
                        className="custom-clip2 h-full pafe-before-after-image-comparison-slider__item pafe-before-after-image-comparison-slider__item--after twentytwenty-after"
                        src="/xrayimg1.webp"
                        alt="Xray Vision"
                        width={600}
                        height={600}
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
  );
};

const FeatureSection = () => {
  const data = [
    {
      svg: <SpeedIcon fontSize="large" sx={{ fill: "#fff" }} />,
      title: "AI-Assisted Labeling",
      desc: "Fast AI-assisted labeling streamlines the annotation process, harnessing the power of artificial intelligence to swiftly and accurately label images.",
    },
    {
      title: "Plug & Play",
      desc: 'Enables easy "Plug n Play" integration for a hassle-free setup. Effortless deployment with a user-friendly interface.',
      svg: <ElectricalServicesIcon fontSize="large" sx={{ fill: "#fff" }} />,
    },

    {
      title: "No Expertise Required",
      svg: <SettingsIcon fontSize="large" sx={{ fill: "#fff" }} />,
      desc: "User-friendly design, no technical expertise needed. Intuitive interface for easy deployment of tailored solutions.",
    },
  ];

  const data2 = [
    {
      svg: <ShieldIcon fontSize="large" sx={{ fill: "#fff" }} />,
      title: "Edge Device Compatible",
      desc: "Utilizing edge computing, data is processed locally near its generation point, reducing latency, improving efficiency, and enhancing overall system performance.",
    },
    {
      svg: <GroupsIcon fontSize="large" sx={{ fill: "#fff" }} />,
      title: "Collaborative Platform",
      desc: "A centralized hub that facilitates seamless interaction and information sharing among individuals or teams, fostering synergies in various domains.",
    },

    {
      title: "Fully Customizable",
      desc: "We offer a fully customizable solution that can be tailored to meet your specific needs.",
      svg: <DashboardCustomizeIcon fontSize="large" sx={{ fill: "#fff" }} />,
    },
  ];

  return (
    <section
      style={{
        backgroundImage: "url('/background.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        objectFit: "cover",
      }}
      className="text-white block relative dark:bg-gray-900 -my-1 "
    >
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center ">
        <div className="w-full flex flex-col lg:items-center lg:text-center  items-center text-center">
          <h1 className="title-font text-5xl font-bold mb-10 ">Features</h1>
        </div>
      </div>
      <section className="text-white hiddenn block  -my-1">
        <div className="container px-5 pb-24 mx-auto  ">
          <div className="flex flex-wrap sm:-m-4 pb-28   -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            {data.map((item, index) => {
              return (
                <div className="p-4 md:w-1/3 flex" key={index}>
                  <div
                    className="inline-flex items-center justify-center rounded-lg bg-gray-800  text-white mb-4 flex-shrink-0"
                    style={{
                      height: "4.5rem",
                      width: "4.5rem",
                    }}
                  >
                    {item.svg}
                  </div>
                  <div className="flex-grow pl-6">
                    <h2 className=" text-2xl font-medium mb-4">{item.title}</h2>
                    <p className="leading-relaxed text-base">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex flex-wrap sm:-m-4 pb-28   -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            {data2.map((item, index) => {
              return (
                <div className="p-4 md:w-1/3 flex" key={index}>
                  <div
                    className="inline-flex items-center justify-center rounded-lg bg-gray-800  text-white mb-4 flex-shrink-0"
                    style={{
                      height: "4.5rem",
                      width: "4.5rem",
                    }}
                  >
                    {item.svg}
                  </div>
                  <div className="flex-grow pl-6">
                    <h2 className=" text-2xl font-medium mb-4">{item.title}</h2>
                    <p className="leading-relaxed text-base">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
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

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const shouldShow = window.scrollY > 100; // Adjust the scroll distance as needed
      setShowButton(shouldShow);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return accessToken ? (
    <>
      <Head>
        <title>xis.ai</title>
        <meta
          name="description"
          content="XIS AI, AI startup, industrial quality inspection, process monitoring"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" />
      </Head>
      <div
        style={{
          backgroundImage: "url('/background.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          objectFit: "cover",
        }}
        className="bg-[#111111] text-white relative overflow-hidden"
      >
        <IntroSection/>
        <div className="text-white  block relative  mt-0">
          <BenefitSection/>
          <CaseStudies/>
          <How />
          <FeatureSection/>
        </div>
      </div>
      <div className="z-50" style={{ position: "relative" }}>
        <div
          className="z-50"
          style={{ position: "fixed", bottom: "10%", right: "3%" }}
        >
          <button
            id="scrollbtn"
            aria-label="Scroll to top of the page"
            className="z-50"
            style={{
              backgroundColor: "#363636",
              padding: "10px 10px",
              borderRadius: "10px",
              color: "#fff",
              transition: "0.5s ease-in-out",
              opacity: showButton ? 1 : 0,
            }}
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
        <meta
          name="description"
          content="XIS AI, AI startup, industrial quality inspection, process monitoring"
        />
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
          <Typography sx={{ width: "100%", textAlign: "Center" }}>
            Permission Denied.
          </Typography>
          <Typography sx={{ width: "100%", textAlign: "Center" }}>
            Please Login to continue.
          </Typography>
          <button
            id="login"
            aria-label="Login to your account"
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
