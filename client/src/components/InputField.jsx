import React from "react";
import { assets } from "../assets/assets";

const InputField = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-6 mt-10">
      <input
        className="w-full bg-gray-900 px-8 py-4 rounded-lg border-2 border-transparent focus:border-[#9338bb] focus:outline-none placeholde:text-gray-900"
        type="text"
        placeholder="Type a prompt..."
      />
      <div className="flex justify-end sm:justify-start">
        <button className="flex flex-row items-center  justify-center gap-4 w-[200px] rounded-lg cursor-pointer hover:scale-105 transition-all duration-300 px-8 py-4 bg-gradient-to-r from-[#bc619b] via-red-500 to-blue-600">
          <span className="text-lg">Generate</span>
          <div className="flex flex-row gap-2">
            <img className="" src={assets.creditStar} alt="" />
            <span>6</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default InputField;
