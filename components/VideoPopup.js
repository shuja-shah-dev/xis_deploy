import React from "react";

const VideoPopup = ({ videoSrc, onClose }) => {
  if (!videoSrc) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="relative  rounded-lg w-full max-w-3xl">
        <button
          onClick={onClose}
          className="absolute w-11 top-2 right-2 text-white text-xl bg-gray-700 p-2 rounded-full cursor-pointer z-50"
        >
          &times;
        </button>
        <video
          className="w-full h-full object-cover rounded-lg"
          autoPlay
          playsInline
          muted
          loop
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoPopup;
