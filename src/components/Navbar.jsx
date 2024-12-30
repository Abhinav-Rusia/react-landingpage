import React from "react";
import llama from "./../assets/llama.png";

const Navbar = () => {
  return (
    <div className="font-poppins container py-4 ">
      <nav className="container flex flex-wrap items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            className="w-[4rem] h-[4rem] object-cover hover:scale-150 transition-all duration-300 ease-in-out"
            src={llama}
            alt="Llama Logo"
          />
          <h1 className="font-Rubik text-xl font-bold">Llama Logo</h1>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-10 mt-4 sm:mt-0 sm:ml-auto">
          <li className="hover:text-blue-500 font-semibold hover:scale-105">
            <a href="#">Home</a>
          </li>
          <li className="hover:text-blue-500 font-semibold hover:scale-105">
            <a href="#">About</a>
          </li>
          <li className="hover:text-blue-500 font-semibold hover:scale-105">
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
