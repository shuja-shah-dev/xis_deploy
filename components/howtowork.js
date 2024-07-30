import Image from "next/image";
import React, { useState, useCallback, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const HowItWorks = () => {
  const [visible, setVisible] = useState(Array(31).fill(false));
  const [textVisible, setTextVisible] = useState(false);

  const handleAnimation = useCallback((index, inView) => {
    if (inView) {
      setVisible((prev) => {
        const newVisible = [...prev];
        newVisible[index] = true;
        return newVisible;
      });
    }
  }, []);

  const refs = Array(31)
    .fill(null)
    .map((_, i) => {
      const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.5,
        onChange: (inView) => handleAnimation(i, inView),
      });
      return { ref, inView };
    });

  const handleAnimationText = useCallback((inView) => {
    if (inView) {
      setTextVisible(true);
    }
  }, []);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
    onChange: handleAnimationText,
  });

  const { ref2, inView2 } = useInView({
    triggerOnce: true,
    threshold: 0.5,
    onChange: handleAnimationText,
  });

  const { ref3, inView3 } = useInView({
    triggerOnce: true,
    threshold: 0.5,
    onChange: handleAnimationText,
  });

  const { ref4, inView4 } = useInView({
    triggerOnce: true,
    threshold: 0.5,
    onChange: handleAnimationText,
  });

  const getAnimationTextStyle = (delay) => ({
    opacity: textVisible ? 1 : 0,
    transform: textVisible ? 'translateX(0)' : 'translateX(-100%)',
    transition: `transform 1s ease-out ${delay}s, opacity 1s ease-out ${delay}s`,
  });


  const getAnimationStyle = (index) => ({
    opacity: visible[index] ? 1 : 0,
    transform: visible[index] ? "translateY(0)" : "translateY(50px)",
    transition: `opacity 1s ease-out ${0.5 * index}s, transform 1s ease-out ${
      0.5 * index
    }s`,
  });


  return (
    <div className=" flex justify-center">
      <div className=" ">
        <div className="flex gap-6 relative">
          <div ref={refs[0].ref} style={getAnimationStyle(0)} className="mt-2">
            <Image src="/p1.svg" width={240} height={49} alt="p1" />
          </div>
          <div ref={refs[1].ref} style={getAnimationStyle(1)}>
            <Image src="/p2.svg" width={105} height={65} alt="p2" />
          </div>
          <div ref={refs[2].ref} style={getAnimationStyle(2)}>
            <Image
              src="/p3.svg"
              width={22}
              height={40}
              alt="p3"
              className="mt-3"
            />
          </div>

          <div
            ref={ref}  style={ getAnimationTextStyle(3)}   className="font-poppins w-1/4 absolute top-16 left-6"
           
          >
            <h3 className="font-bold text-[17px] leading-5">
              Capturing & Labeling Images
            </h3>
            <p className="text-xs">
              Capturing & labeling images includes processes & careful
              management to ensure the quality and relevance of data
            </p>
          </div>
        </div>

        <div className="flex  items-center">
          <div
            ref={refs[3].ref}
            style={getAnimationStyle(3)}
            className="ml-[182px] mt-8"
          >
            <Image src="/p4.svg" width={270} height={6209} alt="p4" />
          </div>
          <div
            ref={refs[4].ref}
            style={getAnimationStyle(4)}
            className="ml-[-180px] mt-16"
          >
            <Image src="/p5.svg" width={100} height={105} alt="p5" />
          </div>
          <div
            ref={refs[5].ref}
            style={getAnimationStyle(5)}
            className="mt-[192px] ml-[20px]"
          >
            <Image src="/p6.svg" width={180} height={52} alt="p6" />
          </div>
          <div
            ref={refs[6].ref}
            style={getAnimationStyle(6)}
            className="ml-[-40px] mt-5"
          >
            <Image src="/p7.svg" width={70} height={84} alt="p7" />
          </div>
          <div
            ref={refs[7].ref}
            style={getAnimationStyle(7)}
            className="mt-[-90px] ml-[-20px]"
          >
            <Image src="/p8.svg" width={32} height={32} alt="p8" />
          </div>
        </div>

        <div className="flex justify-end my-2">
          <h2 className="text-[#4835FF] font-inter font-extrabold text-2xl">
            STEP 1 COMPLETED
          </h2>
        </div>

        <div className="mt-[-50px] relative">
          <div  ref={ref2} style={ getAnimationTextStyle(6)} className="font-poppins w-1/4 absolute top-44 left-32 text-right">
            <h3 className="font-bold text-[17px] leading-5">Training AI</h3>
            <p className="text-xs">
              AI training involves teaching or make decisions by exposing them
              to large amounts of data and optimizing their parameters
            </p>
          </div>

          <div className="flex items-center">
            <div
              ref={refs[8].ref}
              style={getAnimationStyle(8)}
              className="ml-[350px] mt-[156px]"
            >
              <Image src="/p10.svg" width={179} height={90} alt="p10" />
            </div>
            <div
              ref={refs[9].ref}
              style={getAnimationStyle(9)}
              className="ml-[-2px]"
            >
              <Image src="/p9.svg" width={187} height={90} alt="p9" />
            </div>
          </div>

          <div className="flex items-center relative ml-[330px] mt-6">
            <div
              ref={refs[10].ref}
              style={getAnimationStyle(10)}
              className="absolute"
            >
              <Image src="/p11.svg" width={140} height={170} alt="p11" />
            </div>
            <div
              ref={refs[11].ref}
              style={getAnimationStyle(11)}
              className="absolute left-[35px]"
            >
              <Image src="/p12.svg" width={70} height={137} alt="p12" />
            </div>
            <div ref={refs[12].ref} style={getAnimationStyle(12)} className="">
              <Image src="/p14.svg" width={140} height={142} alt="p14" />
            </div>
          </div>
        </div>
        {/* <div className="flex justify-center mt-6"></div> */}

        <div className="flex gap-6">
          <div
            ref={refs[13].ref}
            style={getAnimationStyle(13)}
            className="ml-[250px] mt-[-100px]"
          >
            <Image src="/p13.svg" width={286} height={220} alt="p13" />
          </div>
          <div ref={refs[14].ref} style={getAnimationStyle(14)}>
            <Image src="/p7.svg" width={70} height={84} alt="p7" />
          </div>
          <div
            ref={refs[15].ref}
            style={getAnimationStyle(15)}
            className="ml-[-44px] mt-[-30px]"
          >
            <Image src="/p8.svg" width={32} height={32} alt="p8" />
          </div>
        </div>

        <div className="flex justify-end mr-[70px] mt-[30px]">
          <h2 className="text-[#4835FF] font-inter font-extrabold text-2xl">
            STEP 2 COMPLETED
          </h2>
        </div>

        <div className="flex ml-[300px] relative">
          <div ref={ref3} style={ getAnimationTextStyle(16)} className="font-poppins w-1/3 absolute left-[-400px] top-24 text-right">
            <h3 className="font-bold text-[17px] leading-5">
              Testing Trained A
            </h3>
            <p className="text-xs">
              Testing trained AI involves evaluating its performance on new data
              to ensure accuracy
            </p>
          </div>
          <div>
            <div
              ref={refs[16].ref}
              style={getAnimationStyle(16)}
              className="ml-[-140px] "
            >
              <Image src="/pp.svg" width={290} height={30} alt="pp" />
            </div>
            <div
              ref={refs[17].ref}
              style={getAnimationStyle(17)}
              className="ml-[-160px] mt-[20px]"
            >
              <Image src="/p15.svg" width={40} height={40} alt="p15" />
            </div>
            <div
              ref={refs[18].ref}
              style={getAnimationStyle(18)}
              className="ml-[-210px] mt-[20px]"
            >
              <Image src="/p16.svg" width={180} height={54} alt="p16" />
            </div>
            <div
              ref={refs[19].ref}
              style={getAnimationStyle(19)}
              className="mt-[-100px]"
            >
              <Image src="/p17.svg" width={155} height={161} alt="p17" />
            </div>
          </div>
        </div>

        <div className="flex ml-[480px] mt-[-70px]">
          <div>
            <div ref={refs[20].ref} style={getAnimationStyle(20)}>
              <Image src="/p18.svg" width={240} height={50} alt="p18" />
            </div>
            <div className="flex">
              <div
                ref={refs[21].ref}
                style={getAnimationStyle(21)}
                className="mt-[55px] mr-5"
              >
                <Image src="/p19.svg" width={230} height={50} alt="p19" />
              </div>
              <div ref={refs[22].ref} style={getAnimationStyle(22)}>
                <Image src="/p7.svg" width={70} height={84} alt="p7" />
              </div>
              <div
                ref={refs[23].ref}
                style={getAnimationStyle(23)}
                className="ml-[-18px] mt-[-30px]"
              >
                <Image src="/p8.svg" width={32} height={32} alt="p8" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center ml-[130px] mt-[20px]">
          <h2 className="text-[#4835FF] font-inter font-extrabold text-2xl">
            STEP 3 COMPLETED
          </h2>
        </div>

        <div className="flex ml-[260px] mt-[20px] relative">
          <div ref={refs[24].ref} style={getAnimationStyle(24)} className="">
            <Image src="/p21.svg" width={272} height={212} alt="p21" />
          </div>
          <div ref={ref4} style={ getAnimationTextStyle(22)} className="font-poppins w-1/3 absolute top-4 right-16">
            <h3 className="font-bold text-[17px] leading-5">
              Capturing & Labeling Images
            </h3>
            <p className="text-xs">
              Capturing & labeling images includes processes & careful
              management to ensure the quality and relevance of data
            </p>
          </div>
        </div>

        {/* <div className="flex justify-end">
          <h2 className="text-[#4835FF] font-inter font-extrabold text-2xl">
            STEP 4 COMPLETED
          </h2>
        </div> */}

        <div className="flex ml-[210px] relative">
          <div className="flex gap-5 items-center mt-[30px] ">
            <div ref={refs[25].ref} style={getAnimationStyle(25)}>
              <Image src="/p22.svg" width={115} height={115} alt="p22" />
            </div>
            <div ref={refs[26].ref} style={getAnimationStyle(26)}>
              <Image src="/p23.svg" width={160} height={101} alt="p23" />
            </div>

            <div
              ref={refs[27].ref}
              style={getAnimationStyle(27)}
              className="ml-[100px]"
            >
              <Image src="/p24.svg" width={170} height={101} alt="p24" />
            </div>
          </div>
          <h2 className="text-[#4835FF] font-inter font-extrabold text-2xl absolute right-[-270px] top-[70px]">
            STEP 4 COMPLETED
          </h2>
        </div>

        <div className="flex ml-[520px] mt-[-120px]">
          <div className="flex flex-col gap-6">
            <div
              ref={refs[28].ref}
              style={getAnimationStyle(28)}
              className="ml-[20px] "
            >
              <Image src="/p15.svg" width={40} height={40} alt="p15" />
            </div>
            <div
              ref={refs[29].ref}
              style={getAnimationStyle(29)}
              className="ml-[60px]"
            >
              <Image src="/p8.svg" width={32} height={32} alt="p8" />
            </div>
            <div ref={refs[30].ref} style={getAnimationStyle(30)} className="">
              <Image src="/p7.svg" width={70} height={84} alt="p7" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
