import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from 'react-router-dom'


const Hero = () => {

  const navigate = useNavigate();

  return (
    <div className="flex flex-col mt-24 items-center">
      <div className="flex gap-2 mb-6 w-auto text-gray-300 px-6 py-2 rounded-full border border-gray-300">
        <h1>Turn Ideas into Art – Instantly!</h1>
        <img src={assets.star_icon} alt="" />
      </div>
      <h1 className="md:text-6xl text-center md:max-w-[700px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10">
        Transform Words into Stunning{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#b85fa2] via-red-500 to-blue-600">Images</span> Instantly.
      </h1>

      <p className="text-center max-w-[300px] sm:max-w-[590px] mt-12 text-gray-300">
        Unleash the power of AI and bring your imagination to life. Just type
        your idea, and let AI create breathtaking visuals in seconds.
      </p>
      <div class="relative group cursor-pointer mt-20 mb-12 rounded-full">
        <div class="absolute -inset-1 bg-gradient-to-r from-red-600 to-violet-600 rounded-full blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
        <div class="relative bg-white ring-1 ring-gray-900/5 rounded-full ">
          <button onClick={() => navigate('/result')} class="flex justify-center px-8 bg-gradient-to-bl from-red-800 to-violet-800 group-hover:from-gray-950 group-hover:to-violet-800 rounded-full py-[10px] items-center gap-3 sm:text-lg w-auto font-light text-black cursor-pointer">
            <p className="text-gray-200">Generates Images</p>
            <img className="h-6" src={assets.star_group} alt="" />
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-8 items-center justify-center">
        {assets.generatedImages && assets.generatedImages.length > 0 ? (
          assets.generatedImages.map((image, index) => (
            <img
              className="rounded hover:scale-105 transition-all duration-300 cursor-pointer w-[60px] max-lg:w-[60px] max-sm:w-10 "
              key={index}
              src={image}
              alt=""
            />
          ))
        ) : (
          <p>No images available</p>
        )}
      </div>
      <p className="mt-2 font-light text-[14px] text-gray-300">
        Generated images from imagica
      </p>
    </div>
  );
};

export default Hero;
