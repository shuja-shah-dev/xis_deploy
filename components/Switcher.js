"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useRef } from "react";
import { HeroBlob } from "./HeroSection";

const Robotics = () => {

    const gradientStyle = {
      background:
        "radial-gradient(83.64% 83.63% at 21.22% 12.92%, rgba(62, 95, 170, 0.13) 12.49%, rgba(87, 200, 231, 0.00) 76.56%)",
    };

    const gradientStyleBtn = {
      background: "linear-gradient(180deg, #3E5FAA 0%, #301466 100%)",
    };

  
  return (
    <div className="px-16 pb-28 lg:mb-0 md:mb-10 mb-5 relative ">
      <div className="flex  flex-col xl:flex-row justify-center gap-10 items-center">
        <div className="w-[90%] xl:w-[50%] m-auto xl:m-0 ">
          <video
            autoPlay
            playsInline
            muted
            loop
            style={{
              borderRadius: "20px",
            }}
     
          >
            <source src="/vid.mp4" type="video/mp4" />
          </video>
        </div>
        {/* <div >
          <Image
            src="/Rectangle 752.svg"
            width={740}
            height={639}
            alt="edgeAI"
            className="m-auto"
          />
        </div> */}
        <div
          style={gradientStyle}
          className="text-white w-full xl:w-[456px] xl:h-[480px] lg:mt-0 border border-[#193037] rounded-2xl p-6 sm:p-12"
        >
          <p className="text-left leading-7 lg:ml-7 xl:ml-0 mt-4 font-poppins 2xl:text-lg">
            xis.ai's expertise extends to providing comprehensive support in
            robotics and automation. By providing support for ROS/ROS2 and
            legacy systems, we optimize efficiency, accuracy, and productivity
            within industrial pipelines. Our tailored solutions are designed to
            address specific industry challenges, ensuring seamless integration
            and maximum impact on operational performance.
          </p>
        </div>
      </div>
      <HeroBlob
        sx={{
          zIndex: -1,
          bottom: "20px",
          right: "500px",
          width: "462px",
          height: "462px",
          borderRadius: "462px",
        }}
      />
    </div>
  );
};

const Hardware = () => {
  const gradientStyle = {
   background: "radial-gradient(83.64% 83.63% at 21.22% 12.92%, rgba(62, 95, 170, 0.13) 12.49%, rgba(87, 200, 231, 0.00) 76.56%)"

  };

  const gradientStyleBtn = {
    background: "linear-gradient(180deg, #3E5FAA 0%, #301466 100%)"
  }

  return (
    <div className="px-16 pb-28  relative ">
      <div className="flex flex-col xl:flex-row justify-center  gap-10">
        <div >
          <Image src="/dia.png" width={781} height={565} alt="edgeAI" className="mt-[-70px] m-auto"/>
        </div>
      

        {/* <div className="z-50 mb-20 ">
         
          <video
            autoPlay
            playsInline
            muted
            loop
            style={{
              width: "70%",
              height: "auto",
              borderRadius: "30px",
              margin: "auto"
            }}
          >
            <source src="/new.mp4" type="video/mp4" />
          </video>
        </div> */}
        <div
          style={gradientStyle}
          className="text-white w-full xl:w-[456px] xl:h-[450px] lg:mt-0 border border-[#193037] rounded-2xl p-6 sm:p-12"
        >
          <p className="text-left leading-7 lg:ml-7 xl:ml-0 mt-4 font-poppins  2xl:text-lg">
            Create your own AI visual inspection model and deploy it on edge
            devices without any hassle. xis.suite is a expandable platform that
            can be implemented on already installed equipments i-e cameras,
            saving time and money. xis.suite's Edge AI ensures efficiency of AI
            models and privacy of user's data.
          </p>
        </div>
      </div>
      <HeroBlob
        sx={{
          zIndex: -1,
          bottom: "20px",
          right: "500px",
          width: "462px",
          height: "462px",
          borderRadius: "462px",
        }}
      />
    </div>
  );
};

const Software = () => {

   const gradientStyle = {
     background:
       "radial-gradient(83.64% 83.63% at 21.22% 12.92%, rgba(62, 95, 170, 0.13) 12.49%, rgba(87, 200, 231, 0.00) 76.56%)",
   };

   const gradientStyleBtn = {
     background: "linear-gradient(180deg, #3E5FAA 0%, #301466 100%)",
  };
  

  return (
    <div className="px-16 mb-28  relative">
      <div className="flex flex-col xl:flex-row  justify-center gap-10 ">
        <div className=" xl:hidden justify-center items-center">
          <Image
            src="/soft.png"
            width={740}
            height={500}
            alt="screen img "
            className="rounded-2xl m-auto"
          />
        </div>

        <div className="hidden xl:flex mb-20 ml-[80px] ">
          <div className="hidden 2xl:block">
            <div className=" hidden 2xl:flex 2xl:flex-row flex-col  ">
              <Image
                className=""
                src="/team.svg"
                width={700}
                height={468}
                alt="screen img"
              />

              {/* <Image
                className="mt-[-55px]"
                src="/training.svg"
                width={685}
                height={454}
                alt="screen img"
              /> */}
            </div>

            <Image
              className="hidden 2xl:flex mt-[-430px] ml-[-80px]"
              src="/Desktop inference 1.svg"
              width={763}
              height={526}
              alt="screen img"
            />
          </div>

          <div className="2xl:hidden block">
            <div className=" flex 2xl:hidden sm:flex-row flex-col gap-5 ">
              <Image
                className=""
                src="/team.svg"
                width={530}
                height={400}
                alt="screen img"
              />

              {/* <Image
                className="mt-[-40px]"
                src="/training.svg"
                width={480}
                height={400}
                alt="screen img"
              /> */}
            </div>

            <Image
              className="hidden sm:flex mt-[-320px] ml-[-80px]"
              src="/Desktop inference 1.svg"
              width={600}
              height={400}
              alt="screen img"
            />
          </div>
        </div>

        <div
          style={gradientStyle}
          className="text-white w-full xl:w-[456px] xl:h-[530px] 2xl:h-[670px] lg:mt-0 border border-[#193037] rounded-2xl p-6 sm:p-12 "
        >
          <div className="">
            {/* <h1 className="font-inter text-3xl">Software</h1> */}
            {/* <Link
              style={gradientStyleBtn}
              className="hidden sm:block text-sm sm:text-xl opacity-95 py-2 px-[22px] rounded-full border border-[#5D38C2] backdrop-blur-2xl"
              href="#"
            >
              See more
            </Link> */}
          </div>

          <p className="text-left leading-7 lg:ml-7 xl:ml-0  font-poppins 2xl:text-lg">
            xis.ai provides no code, an end-to-end platform for AI visual
            quality inspection. A robust Vision AI platform enabling companies
            to navigate the entire AI life cycle effortlessly. With our
            solution, businesses can swiftly develop and customize AI solutions
            independently, establishing a secure foundation that minimizes risks
            and optimizes costs while driving revenue growth. Includes AI
            assistive labeling and active learning algorithms for fast and
            efficient process.
          </p>
        </div>
      </div>
      <HeroBlob
        sx={{
          zIndex: -1,
          bottom: "20px",
          right: "500px",
          width: "462px",
          height: "462px",
          borderRadius: "462px",
        }}
      />
    </div>
  );
};

const Switcher = () => {
  const [activeTab, setActiveTab] = useState("software");

  return (
    <div
      className="pt-24 relative z-50"
      style={{
        transition: "0.5s ease-in-out",
      }}
    >
      <div className="flex justify-center items-center pb-14">
        <div className="font-poppins text-white relative text-sm sm:text-lg border-2 border-gray-400 rounded-full flex flex-row gap-0 sm:gap-4 px-4 py-2 ">
          <div
            className={`cursor-pointer  ${
              activeTab === "software"
                ? " bg-gradient rounded-full border border-[#5D38C2]"
                : "border-transparent"
            } py-2 px-2 sm:px-6 `}
            onClick={() => setActiveTab("software")}
          >
            Software
          </div>
          <div
            className={`cursor-pointer ${
              activeTab === "hardware"
                ? "bg-gradient rounded-full border border-[#5D38C2]"
                : "border-transparent"
            } py-2 px-2 sm:px-6 `}
            onClick={() => setActiveTab("hardware")}
          >
            Edge AI
          </div>
          <div
            className={`cursor-pointer ${
              activeTab === "robotics"
                ? "bg-gradient rounded-full border border-[#5D38C2]"
                : "border-transparent"
            } py-2 px-2 sm:px-6 `}
            onClick={() => setActiveTab("robotics")}
          >
            Automation
          </div>
        </div>
      </div>

      {activeTab === "software" && <Software />}
      {activeTab === "hardware" && <Hardware />}
      {activeTab === "robotics" && <Robotics />}
    </div>
  );
};

export default Switcher;


// "use client";

// import Image from "next/image";
// import React, { useState, useRef } from "react";
// import { HeroBlob } from "./HeroSection";

// const Robotics = () => {
//   //   const videoRef = useRef(null);

//   //   const playVideo = () => {
//   //     if (videoRef.current) {
//   //       videoRef.current.play();
//   //     }
//   // };
  
//   return (
//     <div className="px-16 pb-28 lg:mb-0 md:mb-10 mb-5 relative h-[650px] pt-[60px]">
//       <div className="flex lg:flex-row flex-col justify-around items-center ">
//         <div className="z-50">
//           {/* <img
//             src="/v.gif"
//             alt="video GIF"
//             className="w-full h-full object-cover rounded-2xl sm:hidden"
//           /> */}
//           <video
//             // ref={videoRef}
//             // onTouchStart={playVideo()}
//             // onTouchMove={playVideo()}
//             // onTouchEnd={playVideo()}
//             // onTouchCancel={playVideo()}
//             autoPlay
//             playsInline
//             muted
//             loop
//             style={{
//               width: "760px",
//               height: "auto",
//               borderRadius: "20px",
//             }}
//           >
//             <source src="/vid.mp4" type="video/mp4" />
//           </video>
//         </div>

//         <div className="text-white  lg:w-1/4 w-full mt-10 lg:mt-0">
//           <p className="text-left leading-7 lg:ml-7 xl:ml-0">
//             xis.ai's expertise extends to providing comprehensive support in
//             robotics and automation. By providing support for ROS/ROS2 and
//             legacy systems, we optimize efficiency, accuracy, and productivity
//             within industrial pipelines. Our tailored solutions are designed to
//             address specific industry challenges, ensuring seamless integration
//             and maximum impact on operational performance.
//           </p>
//         </div>
//       </div>
//       <HeroBlob
//         sx={{
//           zIndex: -1,
//           bottom: "20px",
//           right: "500px",
//           width: "462px",
//           height: "462px",
//           borderRadius: "462px",
//         }}
//       />
//     </div>
//   );
// };

// const Hardware = () => {
//   const gradientStyle = {
//     background: "linear-gradient(0deg, #301466 0%, #3E5FAA 123.73%)",
//   };

//   return (
//     <div className="px-16 pb-28  relative h-[650px] pt-[60px]">
//       <div className="flex lg:flex-row flex-col justify-around items-center">
//         {/* <div>
//           <Image
//             src="/Component 2.png"
//             width={760}
//             height={500}
//             alt="screen img"
//           />
//         </div> */}
//         <div className="z-50">
//           {/* <img
//             src="/v.gif"
//             alt="video GIF"
//             className="w-full h-full object-cover rounded-2xl sm:hidden"
//           /> */}
//           <video
            
//             autoPlay
//             playsInline
//             muted
//             loop
//             style={{
//               width: "760px",
//               height: "auto",
//               borderRadius: "30px",
//             }}
//           >
//             <source src="/new.mp4" type="video/mp4" />
            
//           </video>
//         </div>
//         <div className="text-white w-full lg:w-1/4  mt-10 lg:mt-0">
//           <p className="text-left leading-7 lg:ml-7 xl:ml-0">
//             Create your own AI visual inspection model and deploy it on edge
//             devices without any hassle. xis.suite is a expandable platform that
//             can be implemented on already installed equipments i-e cameras,
//             saving time and money. xis.suite's Edge AI ensures efficiency of AI
//             models and privacy of user's data
//           </p>
//         </div>
//       </div>
//       <HeroBlob
//         sx={{
//           zIndex: -1,
//           bottom: "20px",
//           right: "500px",
//           width: "462px",
//           height: "462px",
//           borderRadius: "462px",
//         }}
//       />
//     </div>
//   );
// };

// const Software = () => {
//   return (
//     <div className=" px-16 lg:mb-0 md:mb-52 mb-28 pb-28 relative h-[650px]">
//       <div className="flex lg:flex-row flex-col justify-around items-center">
//         <div>
//           <Image src="/soft.png" width={760} height={500} alt="screen img " className="rounded-2xl"/>
//         </div>

//         <div className=" lg:w-[30%] w-full mt-10 lg:mt-0">
//           {/* <p className="text-left leading-7 ">
//             xis.ai provides a robust Vision AI platform enabling companies to
//             navigate the entire AI life cycle effortlessly. With our solution,
//             businesses can swiftly develop and customize AI solutions
//             independently, establishing a secure foundation that minimizes risks
//             and optimizes costs while driving revenue growth.
//           </p> */}
//           <p className="text-left mt-4 leading-7 lg:ml-7 xl:ml-0">
//             xis.ai provides no code, an end-to-end platform for AI visual
//             quality inspection. A robust Vision AI platform enabling companies
//             to navigate the entire AI life cycle effortlessly. With our
//             solution, businesses can swiftly develop and customize AI solutions
//             independently, establishing a secure foundation that minimizes risks
//             and optimizes costs while driving revenue growth. Includes AI
//             assistive labeling and active learning algorithms for fast and
//             efficient process
//           </p>
//         </div>
//       </div>
//       <HeroBlob
//         sx={{
//           zIndex: -1,
//           bottom: "20px",
//           right: "500px",
//           width: "462px",
//           height: "462px",
//           borderRadius: "462px",
//         }}
//       />
//     </div>
//   );
// };

// const Switcher = () => {
//   const [activeTab, setActiveTab] = useState("software");

//   return (
//     <div
//       className="pt-24 relative z-50"
//       style={{
//         transition: "0.5s ease-in-out",
//       }}
//     >
//       <div className="flex justify-center items-center pb-14">
//         <div className="font-poppins text-white relative text-sm sm:text-lg border-2 border-gray-400 rounded-full flex flex-row gap-0 sm:gap-4 px-4 py-2 ">
//           <div
//             className={`cursor-pointer  ${
//               activeTab === "software"
//                 ? " bg-gradient rounded-full border border-[#5D38C2]"
//                 : "border-transparent"
//             } py-2 px-2 sm:px-6 `}
//             onClick={() => setActiveTab("software")}
//           >
//             Software
//           </div>
//           <div
//             className={`cursor-pointer ${
//               activeTab === "hardware"
//                 ? "bg-gradient rounded-full border border-[#5D38C2]"
//                 : "border-transparent"
//             } py-2 px-2 sm:px-6 `}
//             onClick={() => setActiveTab("hardware")}
//           >
//             Edge AI
//           </div>
//           <div
//             className={`cursor-pointer ${
//               activeTab === "robotics"
//                 ? "bg-gradient rounded-full border border-[#5D38C2]"
//                 : "border-transparent"
//             } py-2 px-2 sm:px-6 `}
//             onClick={() => setActiveTab("robotics")}
//           >
//             Robotics
//           </div>
//         </div>
//       </div>

//       {activeTab === "software" && <Software />}
//       {activeTab === "hardware" && <Hardware />}
//       {activeTab === "robotics" && <Robotics />}
//     </div>
//   );
// };

// export default Switcher;



