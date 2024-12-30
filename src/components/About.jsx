import React from "react";
import RocketMan from "../assets/rocketMan.png";

const About = () => {
  return (
    <div className="container mx-auto font-poppins py-12 sm:px-10 md:px-20 lg:px-32">
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
        {/* Text Content */}
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 leading-tight">
            Launch your website faster with a new logo from{" "}
            <span className="text-5xl sm:text-6xl text-blue-600 leading-normal">
              Llama Logo
            </span>
            .
          </h1>

          {/* Description */}
          <p className="text-lg text-gray-600 mt-4">
            Bring your brand to life with a custom-designed logo that speaks volumes.
            Whether you're starting fresh or redesigning, we've got you covered.
          </p>

          {/* Input and Button */}
          <div className="mt-8 flex flex-wrap sm:flex-nowrap items-center gap-4">
            <input
              placeholder="Stay in the loop! Enter your email..."
              type="email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button className="px-6 py-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 hover:scale-105 transition-transform">
              Notify Me
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
  <img
    className="w-full sm:w-9/12 md:w-10/12 max-w-md hover:scale-105 transition-transform duration-300 ease-in-out"
    src={RocketMan}
    alt="Rocket Man"
  />
</div>

      </div>
    </div>
  );
};

export default About;
