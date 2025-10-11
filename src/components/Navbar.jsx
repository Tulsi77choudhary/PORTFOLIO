
import React, { useState } from "react";
import pic from "../../public/image.jpeg";
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
      {/* Full width background */}
      <div className="fixed top-0 left-0 right-0 z-50 shadow-md ">
        <div className="w-full bg-gradient-to-r from-purple-700 via-fuchsia-500 to-orange-400 ">
          {/* Inner container */}
          <div className="max-w-screen-2xl mx-auto px-4 md:px-20 flex justify-between items-center h-16 text-white">
            
            {/* Logo */}
            <div className="flex space-x-2 items-center">
              <img src={pic} className="h-12 w-12 rounded-full border-2 border-white" alt="logo" />
              <h1 className="font-semibold text-xl cursor-pointer">
                <span className="text-white text-2xl">CHOU</span>{" "}
                <span className="text-green-300 text-2xl">DHARY</span>
                <p className="text-sm text-gray-100">Java Developer</p>
              </h1>
            </div>

            {/* Desktop Nav */}
            <div>
              <ul className="hidden md:flex space-x-8 font-medium">
                {navItems.map(({ id, text }) => (
                  <li key={id}>
                    <a
                      href={`#${text.toLowerCase()}`}
                      className="hover:scale-105 duration-200 cursor-pointer"
                    >
                      {text}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Mobile Menu Icon */}
              <div onClick={() => setMenu(!menu)} className="md:hidden cursor-pointer">
                {menu ? <MdClose size={24} /> : <FiMenu size={24} />}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {menu && (
          <div className="md:hidden bg-gradient-to-r from-purple-700 via-fuchsia-500 to-orange-400">
            <ul className="flex flex-col items-center justify-center h-screen space-y-3 text-xl text-white">
              {navItems.map(({ id, text }) => (
                <li key={id}>
                  <a
                    href={`#${text.toLowerCase()}`}
                    onClick={() => setMenu(false)}
                    className="hover:scale-105 duration-200 cursor-pointer"
                  >
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
