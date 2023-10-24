import React, { useRef, useEffect } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import RoboticArm from "../assets/roboticArm.png";
import defectDetection from "../assets/defectDetection.png";
import xray2 from "../assets/xray2.png";

const StickyScroll = () => {
  const content = [
    {
      title: "Manufacturing Quality Control",
      description: `
        Our defect detection software is the answer to maintaining impeccable manufacturing standards and reducing defects in your production lines. Customize datasets and train models that identify defects in real time, resulting in fewer production interruptions, less waste, and a reputation for delivering high-quality products. Improve your bottom line and ensure your products meet the highest quality standards with our software.
       `,
    },
    {
      title: "Medical Image Analysis",
      description: `
      In the healthcare industry, precision and early diagnosis are paramount. Our customizable software for medical image analysis empowers healthcare professionals to take patient care to the next level. Create datasets of normal and abnormal images and train models to detect diseases and anomalies in X-rays, MRIs, and CT scans. The result? Accurate, early diagnoses that lead to better patient outcomes. Join the medical professionals already using our software to elevate healthcare standards.
      `,
    },
    {
      title: "Agricultural Crop Inspection",
      description: `
        Agriculture is the backbone of our society, and ensuring crop health is paramount. Our software for crop inspection offers a transformative solution. Curate datasets of healthy and diseased plants, and deploy custom models on drones or machinery for real-time crop monitoring. Quickly identify issues such as diseases and pests, allowing you to take immediate action to maximize crop yields. Reducing the use of pesticides benefits both your bottom line and the environment.
        `,
    },
    {
      title: "Building and Infrastructure Maintenance",
      description: ` 
         Safety is a top priority in the construction and infrastructure maintenance industry. With our software, you can revolutionize the way you approach maintenance and safety inspections. Create datasets of images or sensor data related to buildings and infrastructure, and then train models to detect cracks, corrosion, and anomalies. Identify issues before they become major problems, ensuring the longevity and safety of your structures. Take control of maintenance with our software.
         `,
    },
  ];

  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest >= 0 && latest < 0.1) setActiveCard(0);
    if (latest >= 0.2 && latest < 0.4) setActiveCard(1);
    if (latest >= 0.4) setActiveCard(2); // Change the condition here
  });

  useEffect(() => {
    const handleScroll = () => {
      // Calculate the scroll position based on window.scrollY
      const scrollPosition =
        window.scrollY / (document.body.scrollHeight - window.innerHeight);
      setActiveCard(scrollPosition);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const backgroundColors = {};

  const cardColors = {
    0: RoboticArm,
    1: xray2,
    2: defectDetection,
    3: RoboticArm,
    4: RoboticArm,
    5: RoboticArm,
  };

  // const cardColors = {
  //   0: "linear-gradient(to bottom right, #ff00ff, #4b0082)",
  //   1: "linear-gradient(to bottom right, #ff00ff, #4b0082)",
  //   2: "linear-gradient(to bottom right, red, yellow)",
  //   3: "linear-gradient(to bottom right, red, yellow)",
  //   4: "linear-gradient(to bottom right, #ff00ff, #4b0082)",
  //   5: "linear-gradient(to bottom right, #00ffff, #008000)",
  // };
  console.log(RoboticArm, "Robotic Arm");

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard],
      }}
      className="h-[100vh] gap-20  overflow-y-auto w-full bg-[#111111] flex justify-center align-center  space-x-10 rounded-md titty1"
      ref={ref}
    >
      <motion.div
        animate={{
          backgroundImage: `url(${cardColors[activeCard]?.src ?? ""})`,

          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          marginTop:
            activeCard === 1 ? "12rem" : activeCard === 2 ? "45rem" : "0rem",
        }}
        className="hidden lg:block  rounded-md sticky h-full w-full top-32 titty2"
      ></motion.div>
      <div className="div relative flex items-start px-4">
        <div className="max-w-3xl">
          {content.map((item, index) => (
            <div key={item.title} className="my-20">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  color:
                    activeCard === index
                      ? "rgb(192, 192, 192)"
                      : "rgb(192, 192, 192)",
                  opacity: 1,
                }}
                className="text-4xl "
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  color:
                    activeCard === index
                      ? "rgb(192, 192, 192)"
                      : "rgb(192, 192, 192)",
                  opacity: 1,
                }}
                className="text-lg  max-w-2xl mt-10"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
    </motion.div>
  );
};

export default StickyScroll;
