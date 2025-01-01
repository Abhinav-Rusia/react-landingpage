import React from "react";
import llama from "../assets/llama.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="font-poppins container py-4 relative">
      <nav id="navbar" className="container flex items-center justify-between">
        {/* logo section */}
        <div className="flex items-center mt-2">
          <img
            className="w-[4rem] h-[4rem] object-cover hover:scale-110 transition-all duration-300 ease-in-out"
            src={llama}
            alt="Logo"
          />
          <h1 className="font-Berkshire text-2xl text-[#BA0130] font-semibold">
            Llama Logo
          </h1>
        </div>

        {/* hamburger menu */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="sm:hidden text-3xl focus:outline-none z-50"
        >
          {isMenuOpen ? "✖" : "☰"}
        </button>

        {/* Nav links for larger screen */}
        <ul className="hidden sm:flex space-x-10">
          <li className="hover:text-[#BA0130] font-semibold hover:scale-105">
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-[#BA0130] font-semibold hover:scale-105">
            <a href="#services">Services</a>
          </li>
          <li className="hover:text-[#BA0130] font-semibold hover:scale-105">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-[#BA0130] font-semibold hover:scale-105">
            <a href="#footer">Contact Us</a>
          </li>
        </ul>
      </nav>

      {/* Fullscreen Menu for Smaller Screens */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md flex flex-col items-center justify-center z-40 transition-all duration-500`}
        onClick={() => setIsMenuOpen(false)}
      >
        <ul className="text-white text-center space-y-8 text-xl font-semibold">
          <li
            className="hover:text-blue-300"
            onClick={(e) => {
              e.stopPropagation(); // Prevent the menu from closing when clicking a menu item
              setIsMenuOpen(false);
            }}
          >
            <a href="#">Home</a>
          </li>
          <li
            className="hover:text-blue-300"
            onClick={(e) => {
              e.stopPropagation();
              setIsMenuOpen(false);
            }}
          >
            <a href="#">Services</a>
          </li>
          <li
            className="hover:text-blue-300"
            onClick={(e) => {
              e.stopPropagation();
              setIsMenuOpen(false);
            }}
          >
            <a href="#">About</a>
          </li>
          <li
            className="hover:text-blue-300"
            onClick={(e) => {
              e.stopPropagation();
              setIsMenuOpen(false);
            }}
          >
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
