import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative text-white py-10 px-[10vw] md:px-[12vw] lg:px-[20vw] bg-gradient-to-b from-black via-gray-900 to-gray-950 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-orange-600/10 via-transparent to-orange-400/10 blur-3xl -z-10"></div>

      <div className="container mx-auto text-center relative z-10">
        {/* Name / Logo */}
        <h2 className="text-2xl font-bold text-orange-400 font-serif tracking-wide drop-shadow-[0_0_10px_rgba(255,165,0,0.4)]">
          Tulsi Choudhary
        </h2>

        {/* Divider */}
        <div className="w-28 h-1 bg-orange-500 mx-auto mt-3 rounded-full shadow-[0_0_12px_rgba(255,165,0,0.6)]"></div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-6">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "projects" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="text-sm sm:text-base text-gray-300 hover:text-orange-400 transition-all duration-300 hover:scale-105"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex justify-center gap-5 mt-6">
          {[
            { icon: <FaFacebook />, link: "https://www.facebook.com/" },
            {
              icon: <FaTwitter />,
              link: "https://twitter.com/CodingMaster6?s=09",
            },
            {
              icon: <FaLinkedin />,
              link: "https://www.linkedin.com/in/tulsi-choudhary-994058263/",
            },
            {
              icon: <FaInstagram />,
              link: "https://www.instagram.com/coding_.master/",
            },
            {
              icon: <FaYoutube />,
              link: "https://www.youtube.com/@tulsichoudhary3974",
            },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-400 hover:text-orange-400 transition-all duration-300 transform hover:scale-125 hover:drop-shadow-[0_0_10px_rgba(255,165,0,0.8)]"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Bottom Line */}
        <div className="w-full h-[1px] bg-gray-700 mt-8 mb-4"></div>

        {/* Copyright */}
        <p className="text-sm text-gray-400 italic">
          © 2025 <span className="text-orange-400">Tulsi Choudhary</span>. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
