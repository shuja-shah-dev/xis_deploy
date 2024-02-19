"use client";

import Image from "next/image";
import React, { useState, useRef } from "react";
import { HeroBlob } from "./HeroSection";

const Robotics = () => {
  // const loader = new GLTFLoader();
  // const scene = new THREE.Scene();
  // const canvasRef = useRef();

  // loader.load(
  //   "./model/scene.gltf",
  //   function (gltf) {
  //     console.log("loaded successfully");
  //     const model = gltf.scene;
  //     const mixer = new THREE.AnimationMixer(model);
  //     mixer.clipAction(gltf.animations[0]).play();
  //     scene.add(model);

  //     function animate() {
  //       requestAnimationFrame(animate);
  //       mixer.update(0.02);

  //       renderer.render(scene, camera);
  //     }
  //     animate();
  //   },
  //   function (xhr) {
  //     console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
  //   },
  //   function (error) {
  //     console.log("An error happened", error);
  //   }
  // );

  // const ambientLight = new THREE.AmbientLight(0xffffff);
  // scene.add(ambientLight);
  // const directionalLight = new THREE.DirectionalLight(0xffffff);
  // directionalLight.position.set(10, 10, 20).normalize();
  // scene.add(directionalLight);
  // const pointLight = new THREE.PointLight(0xffffff, 5, 1);
  // pointLight.position.set(10, 10, 20);
  // scene.add(pointLight);

  // const sizes = {
  //   width: window.innerWidth,
  //   height: window.innerHeight,
  // };

  // window.addEventListener("resize", () => {
  //   sizes.width = window.innerWidth;
  //   sizes.height = window.innerHeight;
  //   camera.aspect = sizes.width / sizes.height;
  //   camera.updateProjectionMatrix();
  //   renderer.setSize(sizes.width, sizes.height);
  //   renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  // });

  // const camera = new THREE.PerspectiveCamera(
  //   75,
  //   sizes.width / sizes.height,
  //   0.001,
  //   1000
  // );
  // camera.position.x = 1;
  // camera.position.y = 1;
  // camera.position.z = 4;
  // scene.add(camera);

  // const renderer = new THREE.WebGLRenderer({
  //   canvas: canvasRef.current,
  // });
  // renderer.setSize(sizes.width, sizes.height);
  // renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  return (
    <div className="px-10 md:px-16 py-12 md:py-28 relative">
      <div className="flex flex-col  justify-around">
        <div className="md:w-[80%] m-auto">
          {/* <Image
            src="/Component 2.png"
            width={900}
            height={500}
            alt="screen img"
          /> */}
          <video
            autoPlay
            muted
            loop
            className="video"
            style={{
              width: "900px",
              height: "500px",
              borderRadius: "20px",
            }}
          >
            <source src="/vid.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="text-white flex flex-col md:flex-row justify-around mt-16 lg:mt-20">
          <div className="md:w-[70%]">
            <p className="text-left leading-7 ">
              xis.ai's expertise extends to providing comprehensive support in
              robotics and automation. By providing support for ROS/ROS2 and
              legacy systems, we optimize efficiency, accuracy, and productivity
              within industrial pipelines. Our tailored solutions are designed
              to address specific industry challenges, ensuring seamless
              integration and maximum impact on operational performance.
            </p>
          </div>

          <div className=""></div>
        </div>
      </div>
      <HeroBlob
        sx={{
          zIndex: 99,
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
    background: "linear-gradient(0deg, #301466 0%, #3E5FAA 123.73%)",
  };

  return (
    <div className="px-10 md:px-16 py-12 md:py-28 relative">
      <div className="flex flex-col  justify-around">
        <div className="md:w-[80%] m-auto">
          <Image
            src="/Component 2.png"
            width={900}
            height={500}
            alt="screen img"
          />
        </div>

        <div className="text-white flex flex-col md:flex-row justify-around mt-16 lg:mt-20">
          <div className="md:w-[70%]">
            <p className="text-left leading-7 ">
              Create your own AI visual inspection model and deploy it on edge
              devices without any hassle. xis.suite is a expandable platform
              that can be implemented on already installed equipments i-e
              cameras, saving time and money. xis.suite's Edge AI ensures
              efficiency of AI models and privacy of user's data
            </p>
            {/*          <p className="text-left mt-4 leading-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit cumque veniam harum nihil temporibus repellendus
              minima quam impedit dolorem, enim dolor voluptas aspernatur
              voluptates vel dolore esse magni blanditiis pariatur.
  </p>*/}
          </div>

          <div className="">
            {/* <button
              style={gradientStyle}
              className="cursor-pointer z-50 w-32 sm:ml-auto m-auto 
               rounded-full border-2 border-[#5D38C2]
            text-white 
            py-2 px-6 mt-6 sm:mt-20 font-poppins"
            >
              Submit
            </button> */}
          </div>
        </div>
      </div>
      <HeroBlob
        sx={{
          zIndex: 99,
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
  return (
    <div className=" px-16 pb-28 relative">
      <div className="flex lg:flex-row flex-col justify-around">
        <div>
          <Image src="/screen.png" width={760} height={500} alt="screen img" />
        </div>

        <div className="text-white flex flex-col lg:w-1/4 w-full mt-10 lg:mt-0">
          <p className="text-left leading-7 ">
            xis.ai provides a robust Vision AI platform enabling companies to
            navigate the entire AI life cycle effortlessly. With our solution,
            businesses can swiftly develop and customize AI solutions
            independently, establishing a secure foundation that minimizes risks
            and optimizes costs while driving revenue growth.
          </p>
          <p className="text-left mt-4 leading-7">
            xis.ai provides no code, an end-to-end platform for AI visual
            quality inspection. A robust Vision AI platform enabling companies
            to navigate the entire AI life cycle effortlessly. With our
            solution, businesses can swiftly develop and customize AI solutions
            independently, establishing a secure foundation that minimizes risks
            and optimizes costs while driving revenue growth. Includes AI
            assistive labeling and active learning algorithms for fast and
            efficient process
          </p>
        </div>
      </div>
      <HeroBlob
        sx={{
          zIndex: 99,
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
      className="pt-24 relative"
      style={{
        transition: "0.5s ease-in-out",
      }}
    >


      <div className="flex justify-center items-center pb-14">
        <div className="font-poppins text-white relative text-base sm:text-lg border-2 border-gray-400 rounded-full flex flex-row gap-0 sm:gap-4 px-4 py-2 ">
          <div
            className={`cursor-pointer  ${
              activeTab === "software"
                ? "bg-slate-800 rounded-full border-2 border-[#5D38C2]"
                : "border-transparent"
            } py-2 px-6 `}
            onClick={() => setActiveTab("software")}
          >
            Software
          </div>
          <div
            className={`cursor-pointer ${
              activeTab === "hardware"
                ? "bg-slate-800 rounded-full border-2 border-[#5D38C2]"
                : "border-transparent"
            } py-2 px-6 `}
            onClick={() => setActiveTab("hardware")}
          >
            Hardware
          </div>
          <div
            className={`cursor-pointer ${
              activeTab === "robotics"
                ? "bg-slate-800 rounded-full border-2 border-[#5D38C2]"
                : "border-transparent"
            } py-2 px-6 `}
            onClick={() => setActiveTab("robotics")}
          >
            Robotics
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
