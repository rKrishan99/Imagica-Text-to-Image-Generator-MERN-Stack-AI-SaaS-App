import React from "react";
import { assets } from "../assets/assets";
import "./imageGenerateStyles.css";
import { motion } from "motion/react";

const ImageGenerate = () => {
  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-10 flex justify-center"
    >
      <div className="relative mt-12 border border-gray-800 bg-gray-950 w-[400px] h-[400px] rounded-lg">
        <img
          className="absolute m-2 w-[20px] right-0 cursor-pointer hover:scale-110 transition-all duration-300"
          src={assets.cross_icon}
          alt=""
        />
        <img
          className="absolute m-2 w-[24px] left-0 bottom-0 cursor-pointer hover:scale-110 transition-all duration-300"
          src={assets.imgDwn}
          alt=""
        />
        <div class="absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2">
          <div class="p-2 bg-gradient-to-tr animate-spin from-[#bc619b] via-red-500 to-blue-600 rounded-full">
            <div class="bg-gray-950 rounded-full">
              <div class="w-24 h-24 rounded-full"></div>
            </div>
               
          </div>
        </div>
        {/* <img
          className="w-[400px] h-[400px] object-cover rounded-lg"
          src={assets.plainLogo}
        /> */}
      </div>
    </motion.div>
  );
};

export default ImageGenerate;
