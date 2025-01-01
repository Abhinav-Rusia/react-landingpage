import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <footer id="footer" className="font-poppins bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and About Section */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-[#BA0130]">Llama Logo</h1>
            <p className="text-sm">
              Bringing innovative solutions to the digital world. Let's create
              something amazing together!
            </p>
            <div className="flex space-x-4">
              {/* Social Media Icons */}
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center bg-[#BA0130] text-white rounded-full hover:scale-110 transition-all duration-300"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center bg-[#BA0130] text-white rounded-full hover:scale-110 transition-all duration-300"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center bg-[#BA0130] text-white rounded-full hover:scale-110 transition-all duration-300"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-[#BA0130] transition-all duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#BA0130] transition-all duration-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#BA0130] transition-all duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#BA0130] transition-all duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h2>
            <p className="text-sm">
              Email:{" "}
              <a
                href="mailto:info@example.com"
                className="hover:text-[#BA0130] transition-all duration-300"
              >
                info@example.com
              </a>
            </p>
            <p className="text-sm">Phone: +1 (123) 456-7890</p>
            <p className="text-sm">
              Address: 123 Main Street, Anywhere City, 12345
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t-2 border-gray-700 pt-4 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
