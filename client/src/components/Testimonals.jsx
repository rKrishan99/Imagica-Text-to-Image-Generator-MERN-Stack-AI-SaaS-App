import React from "react";
import { assets, testimonials } from "../assets/assets";

const Testimonals = () => {
  return (
    <div className="flex flex-col mt-28 items-center pb-8">
      <h1 className="text-4xl">Cutomer Testimonals</h1>
      <p className="font-light mt-2">What Our Users Are Saying</p>
      <div className="flex flex-wrap gap-6 mt-12">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white/30 p-12 rounded-lg shadow-md order w-80 m-auto cursor-pointer hover:scale-[1.02] transition-all duration-300"
          >
            <div className="flex flex-col items-center">
              <img
                src={testimonial.image}
                alt="profile"
                className="w-20 h-20 rounded-full"
              />
              <h1 className="text-xl font-semibold mt-3">{testimonial.name}</h1>
              <p className="text-gray-300 mb-4">{testimonial.role}</p>
              <div className="flex mb-4">
                {Array(testimonial.star)
                  .fill()
                  .map((item, index) => (
                    <img
                      key={index}
                      src={assets.rating_star}
                      alt="star"
                      className="w-4 h-4"
                    />
                  ))}
              </div>
              <p className="text-center text-sm text-gray-300">{testimonial.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonals;
