import React from "react";

const Hero = (props) => {
  return (
    <main>
      <div className="min-h-[600px] container mx-auto flex items-center font-poppins px-6 py-16">
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Image Section */}
          <div
            className={`flex justify-center ${
              props.reverse ? "order-last" : ""
            }`}
          >
            <img
              className={`w-full max-w-md hover:scale-105 transition-all duration-300 ease-in-out ${props.style}`}
              src={props.image}
              alt="Hero"
            />
          </div>

          {/* Text Content */}
          <div className={`${props.reverse ? "order-first" : ""} `}>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 leading-tight">
              {props.h1}
              <span className="text-5xl sm:text-6xl text-blue-600 leading-normal">
                {props.aboutlabel}
              </span>
            </h1>
            <p className="text-gray-600 mt-4 text-lg max-w-xl">{props.p}</p>
            <h2 className="text-2xl font-semibold text-gray-700 mt-6">
              {props.h2} <span className="text-blue-500">{props.span}</span>
            </h2>

            {/* Input and Button */}
            <div className="mt-8 flex flex-wrap sm:flex-nowrap items-center gap-4">
              <input
                placeholder={props.placeholder}
                type="email"
                className="flex-1 px-6 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
              />
              <button className="px-8 py-3 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 hover:scale-105 transition-all duration-300 ease-in-out">
                Notify Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
