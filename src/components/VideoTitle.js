import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-6 md:px-16 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-xl md:text-3xl font-bold">{title}</h1>
      <p className="py-6 text-md w-1/4 hidden md:inline-block">{overview}</p>
      <div className="my-4 md:m-0">
        <button className="bg-white text-black py-2 md:py-3 px-5 md:px-8 rounded-lg hover:bg-opacity-70">
          ▶️ Play
        </button>
        <button className="bg-gray-500 text-white p-3 px-6 mx-5 rounded-lg opacity-50 hidden md:inline-block">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
