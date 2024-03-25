import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-16 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="py-6 text-md w-1/4">{overview}</p>
      <div>
        <button className="bg-white text-black p-3 px-8 rounded-lg hover:bg-opacity-70">
          ▶️ Play
        </button>
        <button className="bg-gray-500 text-white p-3 px-6 mx-5 rounded-lg opacity-50">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
