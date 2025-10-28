import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const navItems = [
    { id: 1, text: "About" },
    { id: 2, text: "Skills" },
    { id: 3, text: "Projects" },
    { id: 4, text: "Education" },
    { id: 5, text: "Contact" },
  ];

  return (
    <>
      {/* Navbar Container */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md shadow-lg border-b border-gray-800">
        <div className="max-w-screen-2xl mx-auto px-5 md:px-16 flex justify-between items-center h-16 text-white">
          
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <h1 className="font-semibold text-2xl tracking-wide cursor-pointer">
              <span className="text-orange-400 font-bold">TULSI</span>{" "}
              <span className="text-white">CHOUDHARY</span>
            </h1>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 font-medium">
            {navItems.map(({ id, text }) => (
              <li
                key={id}
                className="relative group transition-transform duration-300 hover:scale-110"
              >
                <a
                  href={`#${text.toLowerCase()}`}
                  className="inline-block text-gray-100 transition-all duration-300 group-hover:text-orange-400"
                >
                  {text}
                </a>
                <span className="absolute left-0 bottom-[-3px] w-0 h-[2px] bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <div
            onClick={() => setMenu(!menu)}
            className="md:hidden cursor-pointer text-gray-100 hover:text-orange-400 transition"
          >
            {menu ? <MdClose size={26} /> : <FiMenu size={26} />}
          </div>
        </div>

        {/* Mobile Dropdown */}
        {menu && (
          <div className="md:hidden bg-gradient-to-b from-orange-700 via-red-700 to-black shadow-inner">
            <ul className="flex flex-col items-center justify-center py-10 space-y-6 text-lg font-medium text-white">
              {navItems.map(({ id, text }) => (
                <li key={id}>
                  <a
                    href={`#${text.toLowerCase()}`}
                    onClick={() => setMenu(false)}
                    className="inline-block hover:text-orange-400 hover:scale-110 transform transition-all duration-300"
                  >
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
