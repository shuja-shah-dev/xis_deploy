import React, { useRef, useEffect } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";

const StickyScroll = () => {
  const content = [
    {
      title: "Collaborative Editing",
      description:
        "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    },
    {
      title: "Real-time changes",
      description:
        "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    },
    {
      title: "Version control",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    },
    {
      title: "Version control",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    },
  ];

  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0 && latest < 0.2) setActiveCard(0);
    if (latest > 0.2 && latest < 0.4) setActiveCard(1);
    if (latest > 0.4 && latest < 0.99) setActiveCard(2);
  });

  useEffect(() => {
    const handleScroll = () => {
      // Calculate the scroll position based on window.scrollY
      const scrollPosition = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      setActiveCard(scrollPosition);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
   const backgroundColors = {
  
  };

  const cardColors = {
    0: "linear-gradient(to bottom right, #00ffff, #008000)",
    1: "linear-gradient(to bottom right, #ff00ff, #4b0082)",
    2: "linear-gradient(to bottom right, red, yellow)",
  };

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard],
      }}
      className="h-[100vh] gap-20  overflow-y-auto w-full bg-[#111111] flex justify-center  space-x-10 rounded-md"
      ref={ref}
    >
      <motion.div
        animate={{
          background: cardColors[activeCard],
        }}
        className="hidden lg:block h-80 w-80 rounded-md sticky top-10"
      ></motion.div>
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title} className="my-20">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  color: activeCard === index ? "rgb(192, 192, 192)" : "rgb(192, 192, 192)",
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
                  color: activeCard === index ? "rgb(192, 192, 192)" : "rgb(192, 192, 192)",
                  opacity: 1,
                }}
                className="text-lg  max-w-sm mt-10"
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
