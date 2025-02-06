import React from "react";
import { HowItWorksData } from "../assets/assets";

const HowItWorks = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl sm:text-4xl font-semibold mb-2">How It Works</h1>
      <p className="text-lg text-gray-400 mb-8">
        Transform Words Into Stunning Images
      </p>
      {HowItWorksData && HowItWorksData.length > 0 ? (
        HowItWorksData.map((step, index) => (
          <div className="w-full max-w-3xl text-sm">
            <div
              className="flex mb-4 items-center gap-4 p-5 px-8 bg-white/30 shadow-md border border-gray-300 cursor-pointer hover:scale-[1.02] transition-all duration-300 rounded-lg"
              key={index}
            >
              <img width={40} className="h-10" src={step.image} alt="" />
              <div>
                <h1 className="text-xl font-medium text-gray">{step.title}</h1>
                <p className="text-gray-300">{step.description}</p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No steps available</p>
      )}
    </div>
  );
};

export default HowItWorks;
