import Image from "next/image";
import React from "react";
import ProductFeatures from "./ProductFeatures";
import Hardware from "./Hardware";
import ProductHeader from "./ProductHeader";
import { HeroBlob } from "./HeroSection";
import LogoBar from "./LogoBar";
const xisRtData = [
  "Customizable according to application",

  "Real-time Analytics Dashboard",
  "Lightweight Runtime platform",
  "Create & Manage Multiple Quality Inspection Workflows",
  "Get Actionable Signals to PLCs/MES System",

  "Integration with any Industrial Camera/Microscope/Thermal Camera/X-ray Tube",
];

const xisDevData = [
  "AI assisted labeling",
  "AI model performance analytics",
  "Testing and evaluation of trained model",
  "Training for anomaly detection without labeled data",
  "Export formats for different architectures",
  "Training for object detection and image segmentation",
];

const gradient = {
  background:
    "radial-gradient(83.64% 83.63% at 21.22% 12.92%, rgba(62, 95, 170, 0.13) 0%, rgba(87, 200, 231, 0.00) 100%)",

  backdropFilter: "blur(100px)",
};
const Product = () => {
  return (
    <>
      <div className="px-6 sm:px-10 lg:px-16 xl:px-40">
        <ProductHeader />
      </div>

      <div className="min-[2300px]:w-[65%] min-[2300px]:m-auto py-14">
        <LogoBar />
      </div>

      <div
        style={gradient}
        className=" pb-20 pt-4 border-t-2 border-b-2 border-[#193037] rounded-3xl px-8 sm:px-10 lg:px-16  xl:px-28 relative"
      >
        <div className="min-[2300px]:w-[60%] min-[2300px]:mx-auto">
          <HeroBlob
            sx={{
              bottom: "-10%",
              right: "10%",
              zIndex: "-1",
              width: "200px",
            }}
          />
          <HeroBlob
            sx={{
              bottom: "-10%",
              zIndex: "-1",
              width: "200px",
            }}
          />
          <HeroBlob
            sx={{
              background: "rgba(62, 95, 170, 0.25)",
              bottom: "20%",
              zIndex: "-1",
              right: "0px",
            }}
            key={"UniqueElementor2"}
          />

          <h1 className="mt-12 font-inter  text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 text-center">
            Software
          </h1>

          <div className="sm:w-[80%] mx-auto lg:mt-[-60px]">
            <Image
              src="/d.svg"
              width={1370}
              height={970}
              alt="edgeAI"
              className=" m-auto mb-14"
            />
          </div>

          {/* <div className="h-[2px] w-[80%] bg-gray-300 m-auto"></div> */}

          <div className="">
            <div>
              <Image
                src="/xis dev.svg"
                width={203}
                height={50}
                alt="edgeAI"
                className="hidden sm:block"
              />
              <Image
                src="/xis dev.svg"
                width={150}
                height={50}
                alt="edgeAI"
                className=" sm:hidden"
              />
              <p className="mb-12 mt-6 text-justify  m-auto opacity-75 text-base sm:text-[20px] md:text-[24px] leading-8 md:leading-10">
                xis dev is a no-code platform that encompasses the complete
                pipeline of computer vision. Specially designed for
                non-technical or non-developers to develop computer vision
                models for various applications without any knowledge of coding.
                xis dev lets users to label images, train a computer vision
                model, and test it in a matter of minutes. with AI-assisted
                labeling, images are prepared for training very quickly as
                compared to traditional labeling setup
              </p>
            </div>
          </div>

          <div className="w-[95%] m-auto lg:w-[65%] my-20">
            <video
              autoPlay
              playsInline
              muted
              loop
              style={{
                borderRadius: "10px",
              }}
            >
              <source src="/0828.mp4" type="video/mp4" />
            </video>
          </div>

          {/* <div className="flex flex-col justify-around items-center">
            <div className="mb-20 lg:hidden">
              <Image
                src="/soft.png"
                width={720}
                height={500}
                alt="screen img "
                className="rounded-2xl"
              />
            </div>

            <div className="hidden lg:flex justify-center mb-20 w-full">
              <div className="hidden 2xl:block">
                <div className=" hidden 2xl:flex 2xl:flex-row flex-col gap-10 ">
                  <Image
                    className=""
                    src="/team.svg"
                    width={600}
                    height={468}
                    alt="screen img"
                  />

                  <Image
                    className="mt-[-55px]"
                    src="/training.svg"
                    width={685}
                    height={454}
                    alt="screen img"
                  />
                </div>

                <Image
                  className="hidden 2xl:flex mt-[-370px] ml-[300px]"
                  src="/Desktop inference 1.svg"
                  width={663}
                  height={526}
                  alt="screen img"
                />
              </div>

              <div className="2xl:hidden block">
                <div className=" flex 2xl:hidden sm:flex-row flex-col gap-5 ">
                  <Image
                    className=""
                    src="/team.svg"
                    width={420}
                    height={400}
                    alt="screen img"
                  />

                  <Image
                    className="mt-[-40px]"
                    src="/training.svg"
                    width={480}
                    height={400}
                    alt="screen img"
                  />
                </div>

                <Image
                  className="hidden sm:flex mt-[-250px] ml-[190px]"
                  src="/Desktop inference 1.svg"
                  width={500}
                  height={400}
                  alt="screen img"
                />
              </div>
            </div>
          </div> */}
          <div className="flex flex-col mt-14  xl:mt-0">
            <ProductFeatures data={xisDevData} />
          </div>
          {/* <div className="h-[2px] w-[80%] bg-gray-300 m-auto mt-6"></div> */}

          <div className="mt-16">
            <div className="mt-16">
              <div className="">
                <div>
                  <Image
                    src="/xis rt.svg"
                    width={203}
                    height={50}
                    alt="edgeAI"
                    className="hidden sm:block"
                  />
                  <Image
                    src="/xis rt.svg"
                    width={150}
                    height={50}
                    alt="edgeAI"
                    className="sm:hidden"
                  />
                  <p className="mb-12 mt-6 text-justify  m-auto opacity-75 text-[16px] sm:text-[20px] md:text-[24px] leading-8 md:leading-10">
                    Xis Runtime stands as a versatile platform designed
                    specifically for the deployment of computer vision models.
                    Engineered with a lightweight architecture, it offers the
                    advantage of efficient resource utilization, making it
                    suitable for deployment across a spectrum of hardware
                    configurations.Xis Runtime serves as an indispensable tool
                    for accelerating the deployment of computer vision models
                    within quality inspection workflows, offering unparalleled
                    adaptability and performance to meet the evolving demands of
                    modern manufacturing and production environments
                  </p>
                </div>
              </div>
              <div className="flex flex-col xl:flex-row  gap-20">
                <div className="flex flex-col m-auto mt-6 xl:mt-0">
                  <ProductFeatures data={xisRtData} name="rt" />
                </div>
                <Image
                  src="/Group 39587.svg"
                  width={800}
                  height={890}
                  alt="edgeAI"
                  className="m-auto xl:m-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" px-2 sm:px-4 lg:px-16 ">
        <Hardware />
      </div>
    </>
  );
};

export default Product;
