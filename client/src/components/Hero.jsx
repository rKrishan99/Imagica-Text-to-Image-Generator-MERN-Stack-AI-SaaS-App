import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="flex flex-col mt-24 items-center">
      <div className="flex gap-2 w-auto bg-white text-gray-600 px-6 py-2 rounded-full border border-gray-600">
        <h1>Turn Ideas into Art – Instantly!</h1>
        <img src={assets.star_icon} alt="" />
      </div>
      <h1 className="md:text-6xl text-center md:max-w-[700px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10">
        Transform Words into Stunning{" "}
        <span
          className="
        text-blue-700"
        >
          Images
        </span>{" "}
        Instantly.
      </h1>

      <p className="text-center max-w-[300px] sm:max-w-[590px] mt-8 text-gray-600">
        Unleash the power of AI and bring your imagination to life. Just type
        your idea, and let AI create breathtaking visuals in seconds.
      </p>

      <button className="flex justify-center items-center gap-3 bg-gray-950 sm:text-lg w-auto font-light text-white px-8 py-3 rounded-full mt-8 cursor-pointer">
        <p>Generates Images</p>
        <img className="h-6" src={assets.star_group} alt="" />
      </button>
      <div className="flex flex-wrap gap-2 mt-8 items-center justify-center">
        {assets.generatedImages && assets.generatedImages.length > 0 ? (
          assets.generatedImages.map((image, index) => (
            <img className="rounded hover:scale-105 transition-all duration-300 cursor-pointer w-[60px] max-lg:w-[60px] max-sm:w-10 " key={index} src={image} alt="" />
          ))
        ) : (
          <p>No images available</p>
        )}
      </div>
      <p className="mt-2 font-light text-[14px] text-gray-700">Generated images from imagica</p>
    </div>
  );
};

export default Hero;
