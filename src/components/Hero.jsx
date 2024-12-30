import React from 'react';
import heroImg from '../assets/Hero.png';

const Hero = () => {
  return (
    <main>
      <div className="min-h-[600px] container mx-auto flex items-center font-poppins px-6 py-16">
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Image Section */}
          <div className="flex justify-center">
            <img className="w-full max-w-md hover:scale-105 transition-all duration-300 ease-in-out" src={heroImg} alt="Hero" />
          </div>

          {/* Text Content */}
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 leading-tight">
              Build your brand story with a custom logo.
            </h1>
            <p className="text-gray-600 mt-4 text-lg max-w-xl">
              A delightful new way to make logos for your internet startup. It's time to stand out and create a lasting impression.
            </p>
            <h2 className="text-2xl font-semibold text-gray-700 mt-6">
              Coming <span className="text-blue-500">SOON</span>
            </h2>

            {/* Input and Button */}
            <div className="mt-8 flex flex-wrap sm:flex-nowrap items-center gap-4">
              <input
                placeholder="Enter Your Email..."
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
