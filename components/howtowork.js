import Image from "next/image";
import React, { useState, useCallback, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const HowItWorks = () => {
  const [visible, setVisible] = useState(Array(31).fill(false));
  const [SmallVisible, setSmallVisible] = useState(Array(31).fill(false));
  const [extraSmallVisible, setExtraSmallVisible] = useState(Array(30).fill(false));

  const [textVisible, setTextVisible] = useState(false);
  const [textSmallVisible, setTextSmallVisible] = useState(false);
  const [extraSmallTextVisible, setExtraSmallTextVisible] = useState(false);
  
  const handleAnimation = useCallback((index, inView) => {
    if (inView) {
      setVisible((prev) => {
        const newVisible = [...prev];
        newVisible[index] = true;
        return newVisible;
      });
    }
  }, []);

  const handleAnimationSmall = useCallback((index, inView) => {
    if (inView) {
      setSmallVisible((prev) => {
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

    
  const handleExtraSmallAnimation = useCallback((index, inView) => {
    if (inView) {
      setExtraSmallVisible((prev) => {
        const newVisible = [...prev];
        newVisible[index] = true;
        return newVisible;
      });
    }
  }, []);

  const refsSmall = Array(31)
  .fill(null)
  .map((_, i) => {
    const { ref, inView } = useInView({
      triggerOnce: false,
      threshold: 0.5,
      onChange: (inView) => handleAnimationSmall(i, inView),
    });
    return { ref, inView };
  });


    const refsExtraSmall = Array(30)
    .fill(null)
    .map((_, i) => {
      const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.5,
        onChange: (inView) => handleExtraSmallAnimation(i, inView),
      });
      return { ref, inView };
    });

  const [visibleStates, setVisibleStates] = useState(Array(8).fill(false));

  const handleAnimationText = useCallback((index, inView) => {
    if (inView) {
      setTextVisible(true);
      setVisibleStates((prev) => {
        const newVisibleStates = [...prev];
        newVisibleStates[index] = true;
        return newVisibleStates;
      });
    }
  }, []);

  const handleAnimationTextSmall = useCallback((index, inView) => {
    if (inView) {
      setTextSmallVisible(true);
      setVisibleStates((prev) => {
        const newVisibleStates = [...prev];
        newVisibleStates[index] = true;
        return newVisibleStates;
      });
    }
  }, []);

  const handleAnimationTextExtraSmall = useCallback((index, inView) => {
    if (inView) {
      setExtraSmallTextVisible(true);
      setVisibleStates((prev) => {
        const newVisibleStates = [...prev];
        newVisibleStates[index] = true;
        return newVisibleStates;
      });
    }
  }, []);

  const refsText = Array(8)
    .fill(null)
    .map((_, index) => {
      const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
        onChange: (inView) => handleAnimationText(index, inView),
      });
      return { ref, inView };
    });

    const refsTextSmall = Array(8)
    .fill(null)
    .map((_, index) => {
      const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
        onChange: (inView) => handleAnimationTextSmall(index, inView),
      });
      return { ref, inView };
    });

    const refsTextExtraSmall = Array(8)
    .fill(null)
    .map((_, index) => {
      const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
        onChange: (inView) => handleAnimationTextExtraSmall(index, inView),
      });
      return { ref, inView };
    });

  
  const getAnimationTextStyle = (delay) => ({
    opacity: (textVisible || textSmallVisible || extraSmallTextVisible)? 1 : 0,
    transform: (textVisible || textSmallVisible || extraSmallTextVisible) ? "translateX(0)" : "translateX(-100%)",
    transition: `transform 1s ease-out ${delay}s, opacity 1s ease-out ${delay}s`,
  });

  const getAnimationTextStyleR = (delay) => ({
    opacity: (textVisible || textSmallVisible || extraSmallTextVisible)  ? 1 : 0,
    transform: (textVisible || textSmallVisible || extraSmallTextVisible)  ? "translateX(0)" : "translateX(100%)",
    transition: `transform 1s ease-out ${delay}s, opacity 1s ease-out ${delay}s`,
  });

  const getAnimationStyle = (index) => ({
    opacity: (visible[index] || SmallVisible[index] || extraSmallVisible[index]) ? 1 : 0,
    transform: (visible[index] || SmallVisible[index] || extraSmallVisible[index]) ? "translateY(0)" : "translateY(50px)",
    transition: `opacity 1s ease-out ${0.5 * index}s, transform 1s ease-out ${
      0.5 * index
    }s`,
  });

  return (
    <>
      <div className="mb-14 sm:mb-28 xl:mb-32">
        <h1 className="font-inter text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 text-center">
          How it Works
        </h1>
      </div>
      <div className=" flex  parallax-container">
        <div className="parallax-div">
          <div className="flex gap-6 relative">
            <div
              ref={refs[0].ref}
              style={getAnimationStyle(0)}
              className="mt-2"
            >
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
              ref={refsText[0].ref}
              style={getAnimationTextStyle(3)}
              className="font-poppins w-1/4 absolute top-16 left-6"
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
            <h2
              ref={refsText[4].ref}
              style={getAnimationTextStyleR(5)}
              className="text-[#4835FF] font-inter font-extrabold text-2xl"
            >
              STEP 1 COMPLETED
            </h2>
          </div>

          <div className="mt-[-50px] relative">
            <div
              ref={refsText[1].ref}
              style={getAnimationTextStyle(6)}
              className="font-poppins w-1/4 absolute top-44 left-32 text-right"
            >
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
              <div
                ref={refs[12].ref}
                style={getAnimationStyle(12)}
                className=""
              >
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
            <h2
              ref={refsText[5].ref}
              style={getAnimationTextStyleR(14)}
              className="text-[#4835FF] font-inter font-extrabold text-2xl"
            >
              STEP 2 COMPLETED
            </h2>
          </div>

          <div className="flex ml-[300px] relative">
            <div
              ref={refsText[2].ref}
              style={getAnimationTextStyle(16)}
              className="font-poppins w-1/3 absolute xl:left-[-400px] left-[-220px] xl:top-24  top-[190px] text-right"
            >
              <h3 className="font-bold text-[17px] leading-5">
                Testing Trained A
              </h3>
              <p className="text-xs">
                Testing trained AI involves evaluating its performance on new
                data to ensure accuracy
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
            <h2
              ref={refsText[6].ref}
              style={getAnimationTextStyleR(19)}
              className="text-[#4835FF] font-inter font-extrabold text-2xl"
            >
              STEP 3 COMPLETED
            </h2>
          </div>

          <div className="flex ml-[260px] mt-[20px] relative">
            <div ref={refs[24].ref} style={getAnimationStyle(24)} className="">
              <Image src="/p21.svg" width={272} height={212} alt="p21" />
            </div>
            <div
              ref={refsText[3].ref}
              style={getAnimationTextStyle(22)}
              className="font-poppins w-1/3 absolute top-4 right-16"
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
            <h2
              ref={refsText[7].ref}
              style={getAnimationTextStyleR(26)}
              className="text-[#4835FF] font-inter font-extrabold text-2xl absolute 2xl:right-[-270px] 2xl:top-[70px] top-[-22px] right-[0px]"
            >
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
              <div
                ref={refs[30].ref}
                style={getAnimationStyle(30)}
                className=""
              >
                <Image src="/p7.svg" width={70} height={84} alt="p7" />
              </div>
            </div>
          </div>
        </div>

        {/* ////////////////////////////////////////// */}

        <div className="parallax-div-small">
          <div className="flex gap-4 relative">
            <div
              ref={refsSmall[0].ref}
              style={getAnimationStyle(0)}
              className="mt-2"
            >
              <Image src="/p1.svg" width={150} height={49} alt="p1" />
            </div>
            <div ref={refsSmall[1].ref} style={getAnimationStyle(1)}>
              <Image src="/p2.svg" width={50} height={65} alt="p2" />
            </div>
            <div ref={refsSmall[2].ref} style={getAnimationStyle(2)}>
              <Image
                src="/p3.svg"
                width={16}
                height={40}
                alt="p3"
                className="mt-1"
              />
            </div>

            <div
              ref={refsTextSmall[0].ref}
              style={getAnimationTextStyle(3)}
              className="font-poppins w-1/4 absolute top-12 left-1"
            >
              <h3 className="font-bold text-[12px] leading-5">
                Capturing & Labeling Images
              </h3>
              <p className="text-[9px] w-[80%]">
                Capturing & labeling images includes processes & careful
                management to ensure the quality and relevance of data
              </p>
            </div>
          </div>

          <div className="flex  items-center">
            <div
              ref={refsSmall[3].ref}
              style={getAnimationStyle(3)}
              className="ml-[112px] mt-3"
            >
              <Image src="/p4.svg" width={150} height={62} alt="p4" />
            </div>
            <div
              ref={refsSmall[4].ref}
              style={getAnimationStyle(4)}
              className="ml-[-110px] mt-10"
            >
              <Image src="/p5.svg" width={60} height={105} alt="p5" />
            </div>
            <div
              ref={refsSmall[5].ref}
              style={getAnimationStyle(5)}
              className="mt-[98px] ml-[34px]"
            >
              <Image src="/p6.svg" width={110} height={52} alt="p6" />
            </div>
            <div
              ref={refsSmall[6].ref}
              style={getAnimationStyle(6)}
              className="ml-[-20px] mt-5"
            >
              <Image src="/p7.svg" width={40} height={84} alt="p7" />
            </div>
            <div
              ref={refsSmall[7].ref}
              style={getAnimationStyle(7)}
              className="mt-[-60px] ml-[-10px]"
            >
              <Image src="/p8.svg" width={25} height={32} alt="p8" />
            </div>
          </div>

          <div className="flex justify-end mb-2">
            <h2
              ref={refsTextSmall[4].ref}
              style={getAnimationTextStyleR(5)}
              className="text-[#4835FF] font-inter font-extrabold text-sm"
            >
              STEP 1 COMPLETED
            </h2>
          </div>

          <div className="mt-[-50px] relative">
            <div
              ref={refsTextSmall[1].ref}
              style={getAnimationTextStyle(6)}
              className="font-poppins w-1/4 absolute top-20 left-28 text-right"
            >
              <h3 className="font-bold text-[12px] leading-5">Training AI</h3>
              <p className="text-[9px]">
                AI training involves teaching or make decisions by exposing them
                to large amounts of data and optimizing their parameters
              </p>
            </div>

            <div className="flex items-center">
              <div
                ref={refsSmall[8].ref}
                style={getAnimationStyle(8)}
                className="ml-[260px] mt-[85px]"
              >
                <Image src="/p10.svg" width={100} height={90} alt="p10" />
              </div>
              <div
                ref={refsSmall[9].ref}
                style={getAnimationStyle(9)}
                className="ml-[-2px]"
              >
                <Image src="/p9.svg" width={100} height={90} alt="p9" />
              </div>
            </div>

            <div className="flex items-center relative ml-[235px] mt-6">
              <div
                ref={refsSmall[10].ref}
                style={getAnimationStyle(10)}
                className="absolute"
              >
                <Image src="/p11.svg" width={105} height={170} alt="p11" />
              </div>
              <div
                ref={refsSmall[11].ref}
                style={getAnimationStyle(11)}
                className="absolute left-[27px]"
              >
                <Image src="/p12.svg" width={50} height={137} alt="p12" />
              </div>
              <div
                ref={refsSmall[12].ref}
                style={getAnimationStyle(12)}
                className=""
              >
                <Image src="/p14.svg" width={105} height={142} alt="p14" />
              </div>
            </div>
          </div>
          {/* <div className="flex justify-center mt-6"></div> */}

          <div className="flex gap-4">
            <div
              ref={refsSmall[13].ref}
              style={getAnimationStyle(13)}
              className="ml-[200px] mt-[-50px]"
            >
              <Image src="/p13.svg" width={150} height={220} alt="p13" />
            </div>
            <div ref={refsSmall[14].ref} style={getAnimationStyle(14)}>
              <Image src="/p7.svg" width={40} height={84} alt="p7" />
            </div>
            <div
              ref={refsSmall[15].ref}
              style={getAnimationStyle(15)}
              className="ml-[-30px] mt-[-30px]"
            >
              <Image src="/p8.svg" width={25} height={25} alt="p8" />
            </div>
          </div>

          <div className="flex justify-end mr-[24px] mt-[20px]">
            <h2
              ref={refsTextSmall[5].ref}
              style={getAnimationTextStyleR(14)}
              className="text-[#4835FF] font-inter font-extrabold text-sm"
            >
              STEP 2 COMPLETED
            </h2>
          </div>

          <div className="flex ml-[300px] relative">
            <div
              ref={refsTextSmall[2].ref}
              style={getAnimationTextStyle(16)}
              className="font-poppins w-1/3 absolute left-[-310px] top-[40px] text-right"
            >
              <h3 className="font-bold text-[12px] leading-5">
                Testing Trained A
              </h3>
              <p className="text-[9px]">
                Testing trained AI involves evaluating its performance on new
                data to ensure accuracy
              </p>
            </div>
            <div>
              <div
                ref={refsSmall[16].ref}
                style={getAnimationStyle(16)}
                className="ml-[-170px] "
              >
                <Image src="/pp.svg" width={170} height={30} alt="pp" />
              </div>
              <div
                ref={refsSmall[17].ref}
                style={getAnimationStyle(17)}
                className="ml-[-180px] mt-[20px]"
              >
                <Image src="/p15.svg" width={30} height={40} alt="p15" />
              </div>
              <div
                ref={refsSmall[18].ref}
                style={getAnimationStyle(18)}
                className="ml-[-230px] mt-[20px]"
              >
                <Image src="/p16.svg" width={140} height={54} alt="p16" />
              </div>
              <div
                ref={refsSmall[19].ref}
                style={getAnimationStyle(19)}
                className="mt-[-50px] ml-[-70px]"
              >
                <Image src="/p17.svg" width={80} height={161} alt="p17" />
              </div>
            </div>
          </div>

          <div className="flex ml-[330px] mt-[-40px]">
            <div>
              <div ref={refsSmall[20].ref} style={getAnimationStyle(20)}>
                <Image src="/p18.svg" width={130} height={50} alt="p18" />
              </div>
              <div className="flex">
                <div
                  ref={refsSmall[21].ref}
                  style={getAnimationStyle(21)}
                  className="mt-[55px] mr-5"
                >
                  <Image src="/p19.svg" width={120} height={50} alt="p19" />
                </div>
                <div ref={refsSmall[22].ref} style={getAnimationStyle(22)}>
                  <Image src="/p7.svg" width={40} height={84} alt="p7" />
                </div>
                <div
                  ref={refsSmall[23].ref}
                  style={getAnimationStyle(23)}
                  className="ml-[-12px] mt-[-30px]"
                >
                  <Image src="/p8.svg" width={20} height={32} alt="p8" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center ml-[160px] mt-[20px]">
            <h2
              ref={refsTextSmall[6].ref}
              style={getAnimationTextStyleR(19)}
              className="text-[#4835FF] font-inter font-extrabold text-sm"
            >
              STEP 3 COMPLETED
            </h2>
          </div>

          <div className="flex ml-[195px] mt-[20px] relative">
            <div ref={refsSmall[24].ref} style={getAnimationStyle(24)} className="">
              <Image src="/p21.svg" width={170} height={212} alt="p21" />
            </div>
            <div
              ref={refsTextSmall[3].ref}
              style={getAnimationTextStyle(22)}
              className="font-poppins w-1/3 absolute top-[-5px] right-6"
            >
              <h3 className="font-bold text-[12px] leading-5">
                Capturing & Labeling Images
              </h3>
              <p className="text-[9px]">
                Capturing & labeling images includes processes & careful
                management to ensure the quality and relevance of data
              </p>
            </div>
          </div>

          <div className="flex ml-[165px] relative">
            <div className="flex gap-3 items-center mt-[20px] ">
              <div ref={refsSmall[25].ref} style={getAnimationStyle(25)}>
                <Image src="/p22.svg" width={70} height={115} alt="p22" />
              </div>
              <div ref={refsSmall[26].ref} style={getAnimationStyle(26)}>
                <Image src="/p23.svg" width={75} height={101} alt="p23" />
              </div>

              <div
                ref={refsSmall[27].ref}
                style={getAnimationStyle(27)}
                className="ml-[70px]"
              >
                <Image src="/p24.svg" width={110} height={101} alt="p24" />
              </div>
            </div>
            <h2
              ref={refsTextSmall[7].ref}
              style={getAnimationTextStyleR(26)}
              className="text-[#4835FF] font-inter font-extrabold text-sm absolute  top-[15px] right-[-20px]"
            >
              STEP 4 COMPLETED
            </h2>
          </div>

          <div className="flex ml-[335px] mt-[-100px]">
            <div className="flex flex-col gap-4">
              <div
                ref={refsSmall[28].ref}
                style={getAnimationStyle(28)}
                className="ml-[20px] "
              >
                <Image src="/p15.svg" width={30} height={40} alt="p15" />
              </div>
              <div
                ref={refsSmall[29].ref}
                style={getAnimationStyle(29)}
                className="ml-[32px]"
              >
                <Image src="/p8.svg" width={25} height={32} alt="p8" />
              </div>
              <div
                ref={refsSmall[30].ref}
                style={getAnimationStyle(30)}
                className=""
              >
                <Image src="/p7.svg" width={40} height={84} alt="p7" />
              </div>
            </div>
          </div>
        </div>

        {/* //////////////////////////////////////////////// */}

        <div className="parallax-div-extra-small ">
          <div className="flex gap-4 relative ml-20">
            <div
              ref={refsExtraSmall[0].ref}
              style={getAnimationStyle(0)}
              className="mt-2"
            >
              <Image src="/p1.svg" width={66} height={49} alt="p1" />
            </div>
            <div ref={refsExtraSmall[1].ref} style={getAnimationStyle(1)}>
              <Image src="/p2.svg" width={31} height={65} alt="p2" />
            </div>
            <div ref={refsExtraSmall[2].ref} style={getAnimationStyle(2)}>
              <Image
                src="/p3.svg"
                width={8}
                height={40}
                alt="p3"
                className="mt-1"
              />
            </div>

            <div
              ref={refsText[0].ref}
              style={getAnimationTextStyle(3)}
              className="font-poppins w-1/3 absolute top-7 left-[-15px]"
            >
              <h3 className="font-semibold text-[9px]">
                Capturing & Labeling Images
              </h3>
              <p className="text-[6px] w-[80%]">
                Capturing & labeling images includes processes & careful
                management to ensure the quality and relevance of data
              </p>
            </div>
          </div>

          <div className="flex  items-center">
            <div
              ref={refsExtraSmall[3].ref}
              style={getAnimationStyle(3)}
              className="ml-[140px] mt-3"
            >
              <Image src="/p4.svg" width={79} height={62} alt="p4" />
            </div>
            <div
              ref={refsExtraSmall[4].ref}
              style={getAnimationStyle(4)}
              className="ml-[-50px] mt-6"
            >
              <Image src="/p5.svg" width={28} height={105} alt="p5" />
            </div>
            <div
              ref={refsExtraSmall[5].ref}
              style={getAnimationStyle(5)}
              className="mt-[57px] ml-[15px]"
            >
              <Image src="/p6.svg" width={55} height={52} alt="p6" />
            </div>
            <div
              ref={refsExtraSmall[6].ref}
              style={getAnimationStyle(6)}
              className="ml-[-15px] mt-2"
            >
              <Image src="/p7.svg" width={24} height={84} alt="p7" />
            </div>
            <div
              ref={refsExtraSmall[7].ref}
              style={getAnimationStyle(7)}
              className="mt-[-30px]"
            >
              <Image src="/p8.svg" width={9} height={32} alt="p8" />
            </div>
          </div>

          <div className="flex justify-end mt-3 ">
            <h2
              ref={refsTextExtraSmall[4].ref}
              style={getAnimationTextStyleR(5)}
              className="text-[#4835FF] font-inter font-bold text-xs"
            >
              STEP 1 COMPLETED
            </h2>
          </div>

          <div className="mt-[-50px] relative">
            <div
              ref={refsTextExtraSmall[1].ref}
              style={getAnimationTextStyle(6)}
              className="font-poppins w-1/3 absolute top-[90px] left-[80px] text-right"
            >
              <h3 className="font-semibold text-[9px] ">Training AI</h3>
              <p className="text-[6px]">
                AI training involves teaching or make decisions by exposing them
                to large amounts of data and optimizing their parameters
              </p>
            </div>

            <div className="flex items-center relative">
              <div
                ref={refsExtraSmall[8].ref}
                style={getAnimationStyle(8)}
                className="ml-[200px] mt-[100px]"
              >
                <Image src="/p10.svg" width={45} height={90} alt="p10" />
              </div>
              <div
                ref={refsExtraSmall[9].ref}
                style={getAnimationStyle(9)}
                className="ml-[-2px] mt-[60px]"
              >
                <Image src="/p9.svg" width={50} height={90} alt="p9" />
              </div>
            </div>

            <div className="flex items-center relative ml-[188px] mt-4">
              <div
                ref={refsExtraSmall[10].ref}
                style={getAnimationStyle(10)}
                className="absolute"
              >
                <Image src="/p11.svg" width={50} height={170} alt="p11" />
              </div>
              <div
                ref={refsExtraSmall[11].ref}
                style={getAnimationStyle(11)}
                className="absolute left-[12.5px]"
              >
                <Image src="/p12.svg" width={25} height={137} alt="p12" />
              </div>
              <div
                ref={refsExtraSmall[12].ref}
                style={getAnimationStyle(12)}
                className=""
              >
                <Image src="/p14.svg" width={50} height={142} alt="p14" />
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <div
              ref={refsExtraSmall[13].ref}
              style={getAnimationStyle(13)}
              className="ml-[170px] mt-[-20px]"
            >
              <Image src="/p13.svg" width={68} height={220} alt="p13" />
            </div>
            <div ref={refsExtraSmall[14].ref} style={getAnimationStyle(14)}>
              <Image src="/p7.svg" width={22} height={84} alt="p7" />
            </div>
            <div
              ref={refsExtraSmall[15].ref}
              style={getAnimationStyle(15)}
              className="ml-[-20px] mt-[-20px]"
            >
              <Image src="/p8.svg" width={11} height={25} alt="p8" />
            </div>
          </div>

          <div className="flex justify-end mt-[20px]">
            <h2
              ref={refsTextExtraSmall[5].ref}
              style={getAnimationTextStyleR(14)}
              className="text-[#4835FF] font-inter font-bold text-xs"
            >
              STEP 2 COMPLETED
            </h2>
          </div>

          <div className="flex ml-[300px]  relative">
            <div
              ref={refsTextExtraSmall[2].ref}
              style={getAnimationTextStyle(16)}
              className="font-poppins w-full absolute left-[-230px] top-[30px] text-left"
            >
              <h3 className="font-semibold text-[9px]">Testing Trained A</h3>
              <p className="text-[6px]">
                Testing trained AI involves evaluating its performance on new
                data to ensure accuracy
              </p>
            </div>
            <div>
              <div
                ref={refsExtraSmall[16].ref}
                style={getAnimationStyle(16)}
                className="ml-[-170px] mt-[10px] "
              >
                <Image src="/pp.svg" width={67} height={30} alt="pp" />
              </div>
              <div
                ref={refsExtraSmall[17].ref}
                style={getAnimationStyle(17)}
                className="ml-[-175px] mt-[20px]"
              >
                <Image src="/p15.svg" width={9} height={40} alt="p15" />
              </div>
              <div
                ref={refsExtraSmall[18].ref}
                style={getAnimationStyle(18)}
                className="ml-[-190px] mt-[20px]"
              >
                <Image src="/p16.svg" width={50} height={54} alt="p16" />
              </div>
              <div
                ref={refsExtraSmall[19].ref}
                style={getAnimationStyle(19)}
                className="mt-[-20px] ml-[-120px]"
              >
                <Image src="/p17.svg" width={35} height={161} alt="p17" />
              </div>
            </div>
          </div>

          <div className="flex ml-[230px] mt-[-22px]">
            <div>
              <div ref={refsExtraSmall[20].ref} style={getAnimationStyle(20)}>
                <Image src="/p18.svg" width={45} height={50} alt="p18" />
              </div>
              <div className="flex">
                <div
                  ref={refsExtraSmall[21].ref}
                  style={getAnimationStyle(21)}
                  className="mt-[30px] mr-5"
                >
                  <Image src="/p19.svg" width={45} height={50} alt="p19" />
                </div>
                <div ref={refsExtraSmall[22].ref} style={getAnimationStyle(22)}>
                  <Image src="/p7.svg" width={20} height={84} alt="p7" />
                </div>
                <div
                  ref={refsExtraSmall[23].ref}
                  style={getAnimationStyle(23)}
                  className="ml-[0px] mt-[-10px]"
                >
                  <Image src="/p8.svg" width={9} height={32} alt="p8" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center ml-[80px] mt-[20px]">
            <h2
              ref={refsTextExtraSmall[6].ref}
              style={getAnimationTextStyleR(16)}
              className="text-[#4835FF] font-inter font-bold text-xs"
            >
              STEP 3 COMPLETED
            </h2>
          </div>

          <div className="flex ml-[130px] mt-[20px] relative">
            <div ref={refsExtraSmall[24].ref} style={getAnimationStyle(24)} className="">
              <Image src="/p21.svg" width={68} height={212} alt="p21" />
            </div>
            <div
              ref={refsTextExtraSmall[3].ref}
              style={getAnimationTextStyle(22)}
              className="font-poppins w-1/3 absolute top-[-5px] right-[-10px]"
            >
              <h3 className="font-semibold text-[9px] ">
                Capturing & Labeling Images
              </h3>
              <p className="text-[6px]">
                Capturing & labeling images includes processes & careful
                management to ensure the quality and relevance of data
              </p>
            </div>
          </div>

          <div className="flex ml-[118px] relative">
            <div className="flex gap-3 items-center mt-[20px] ">
              <div ref={refsExtraSmall[25].ref} style={getAnimationStyle(25)}>
                <Image src="/p22.svg" width={29} height={115} alt="p22" />
              </div>
              <div ref={refsExtraSmall[26].ref} style={getAnimationStyle(26)}>
                <Image src="/p23.svg" width={42} height={101} alt="p23" />
              </div>

              {/* <div
                ref={refs[27].ref}
                style={getAnimationStyle(27)}
                className="ml-[50px]"
              >
                <Image src="/p24.svg" width={80} height={101} alt="p24" />
              </div> */}
            </div>
          </div>

          <div className="flex ml-[220px] mt-[-50px]">
            <div className="flex flex-col gap-4">
              <div
                ref={refsExtraSmall[27].ref}
                style={getAnimationStyle(28)}
                className="ml-[6px] "
              >
                <Image src="/p15.svg" width={15} height={40} alt="p15" />
              </div>
              <div
                ref={refsExtraSmall[28].ref}
                style={getAnimationStyle(29)}
                className="ml-[25px]"
              >
                <Image src="/p8.svg" width={10} height={32} alt="p8" />
              </div>
              <div
                ref={refsExtraSmall[29].ref}
                style={getAnimationStyle(30)}
                className=""
              >
                <Image src="/p7.svg" width={20} height={84} alt="p7" />
              </div>
            </div>
          </div>

          <div className=" flex justify-center">
            <h2
              ref={refsTextExtraSmall[7].ref}
              style={getAnimationTextStyleR(23)}
              className="text-[#4835FF] font-inter font-bold text-xs mt-4"
            >
              STEP 4 COMPLETED
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
