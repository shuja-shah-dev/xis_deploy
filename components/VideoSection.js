import React from "react";
import { HeroBlob } from "./HeroSection";

const VideoSection = () => {
  const videos = [
    { id: 1, src: "01.mp4" },
    { id: 2, src: "02.mp4" },
    { id: 3, src: "03.mp4" },
    { id: 4, src: "04.mp4" },
    { id: 5, src: "05.mp4" },
    { id: 6, src: "06.mp4" },
    { id: 7, src: "07.mp4" },
    { id: 8, src: "08.mp4" },
    { id: 9, src: "09.mp4" },
  ];

  return (
    <div className="sm:px-2 lg:px-16 relative pt-20">
           <HeroBlob
        sx={{
          background: "rgba(62, 95, 170, 0.25)",
          bottom: "400px",
          zIndex: "1",
          left: "1px",
        }}
        key={"UniqueElementor2"}
      />
          <h1 className="text-4xl text-center mb-4 font-inter md:text-5xl pb-1.5 font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
         Software In Play
        </h1>
      <div className="lg:w-[80%] m-auto min-[2400px]:w-[50%]">
        <div className="grid grid-cols-3 gap-2 sm:gap-4 sm:p-4 p-2">
          {videos.map((video) => (
            <div key={video.id} className="aspect-w-16 aspect-h-9">
              <video
                className="w-full h-full object-cover rounded-xl"
                autoPlay
                playsInline
                muted
                loop
              >
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
