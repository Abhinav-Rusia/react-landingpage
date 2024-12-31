import React from "react";
import llama from "../assets/llama.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="font-poppins container py-4 relative">
      <nav className="container flex items-center justify-between">
        {/* logo section */}
        <div className="flex items-center">
          <img
            className="w-[4rem] h-[4rem] object-cover hover:scale-150 transition-all duration-300 ease-in-out"
            src={llama}
            alt="Logo"
          />
          <h1 className="font-Rubik text-xl font-semibold">Llama Logo</h1>
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
          <li className="hover:text-blue-500 font-semibold hover:scale-105">
            <a href="#">Home</a>
          </li>
          <li className="hover:text-blue-500 font-semibold hover:scale-105">
            <a href="#">Services</a>
          </li>
          <li className="hover:text-blue-500 font-semibold hover:scale-105">
            <a href="#">About</a>
          </li>
          <li className="hover:text-blue-500 font-semibold hover:scale-105">
            <a href="#">Contact Us</a>
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
