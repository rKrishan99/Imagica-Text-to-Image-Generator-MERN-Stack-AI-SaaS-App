import React, { useContext } from "react";
import { assets } from "../assets/assets";
import GenerationHistory from "../components/GenerationHistory";
import ImageGenerate from "../components/ImageGenerate";
import InputField from "../components/InputField";
import { AppContext } from "../context/AppContext";
import { motion } from "motion/react";

const Result = () => {


  const { isImageGenerating, setIsImageGenerating } = useContext(AppContext);


  return (
    <motion.div 
    initial={{ opacity: 0.2, y: 100 }}
    transition={{ duration: 1 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    >
      <div className="relative min-h-screen">
        <h1 className="mt-14 text-4xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#b85fa2] via-red-500 to-blue-600">
          AI Image Creation
        </h1>

        {/* Input section */}
        {
          !isImageGenerating ? (<ImageGenerate />) : (<InputField />)
        }

        

        {/* Image section */}
        

        {/* upgrade credit section*/}
        <div className=" mt-40 rounded-lg p-[2px] bg-gradient-to-r from-[#bc619b] via-red-500 to-blue-600">
          <div className="flex flex-row items-center gap-4 justify-between px-6 py-3 bg-[#000000] rounded-lg">
            <div className="flex flex-row gap-4 items-center">
              <img className="w-8" src={assets.starDeep} alt="" />
              <div className="flex flex-col gap-1 text-left">
                <span className="text-gray-400 text-[10px] md:text-[18px] font-light">You are currently on a free plan.</span>
                <span className="text-white text-[12px] md:text-[20px] font-medium text-xl">
                  Upgrade for priority generations, additional token credits,
                  and much more!
                </span>
              </div>
            </div>
            <button className="flex flex-row items-center w-full max-w-44 h-6 justify-center gap-4 rounded-lg cursor-pointer hover:scale-105 transition-all duration-300 px-4 py-6 bg-gradient-to-r from-[#bc619b] via-red-500 to-blue-600">
              Upgrade Plan
            </button>
          </div>
        </div>

        {/* Generation History */}
        <GenerationHistory />
      </div>
    </motion.div>
  );
};

export default Result;
