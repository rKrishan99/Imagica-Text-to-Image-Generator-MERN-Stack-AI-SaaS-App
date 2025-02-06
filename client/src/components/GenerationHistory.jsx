import React from "react";
import { assets } from "../assets/assets";
import { motion } from "motion/react";

const GenerationHistory = () => {
  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{delay:0.2, duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-12 pb-48"
    >
      <h1 className="text-2xl font-medium text-gray-300">Generation History</h1>
      <div className="mt-6">
        {assets.generatedImages && assets.generatedImages.length > 0 ? (
          <motion.div
            initial={{ opacity: 0.2, y: 100 }}
            transition={{ delay:0.4, duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
           className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {assets.generatedImages.map((image, index) => (
              <div
                key={index}
                className="relative group cursor-pointer rounded-lg overflow-hidden"
              >
                <img
                  className="absolute right-0 mt-2 mr-2 w-6 cursor-pointer hover:shadow-2xl hover:shadow-gray-900 hover:scale-110 transition-all duration-300"
                  src={assets.imgDwn}
                />
                <img
                  className="rounded cursor-pointer w-full max-h-[auto] object-cover"
                  src={image}
                  alt={`Generated Image ${index + 1}`}
                />
              </div>
            ))}
          </motion.div>
        ) : (
          <p className="text-gray-500">No images available</p>
        )}
      </div>
    </motion.div>
  );
};

export default GenerationHistory;
