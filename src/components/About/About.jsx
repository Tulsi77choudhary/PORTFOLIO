import React from 'react';
import Pic from '../../../public/image.jpeg';
import { FaLinkedin, FaFacebook, FaYoutube, FaTelegram, FaReact } from "react-icons/fa";
import { SiSpringboot, SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { ReactTyped } from 'react-typed';

function About() {
  return (
    <div className="relative min-h-screen w-full text-white overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-700 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse delay-1000"></div>

      <div className="relative z-20 max-w-screen-2xl mx-auto px-4 md:px-20 py-20 flex flex-col md:flex-row items-center">

        <div className="md:w-1/2 mt-12 md:mt-24 space-y-4 order-2 md:order-1">
          <span className="text-gray-400 text-lg">Welcome To My Feed</span>

          <div className="flex space-x-2 text-3xl md:text-4xl font-bold">
            <h1>Hello, I'm a</h1>
            <ReactTyped
              className="text-orange-600"
              strings={["Developer", "Coder", "Programmer"]}
              typeSpeed={50}
              backSpeed={50}
              loop
            />
          </div>

          <p className="text-sm md:text-md text-justify text-gray-300 mt-4">
            I am a passionate Computer Science student specializing in Java,
            Spring Boot, MySQL, and Full-Stack Web Development.
          </p>

          <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 items-start md:items-center mt-6">

            <div className="space-y-2">
              <h1 className="font-bold text-white">Available on</h1>
              <ul className="flex space-x-5 mt-2">
                <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin className="text-2xl cursor-pointer hover:text-blue-400 transition-all" /></a></li>
                <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook className="text-2xl cursor-pointer hover:text-blue-500 transition-all" /></a></li>
                <li><a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube className="text-2xl cursor-pointer hover:text-red-500 transition-all" /></a></li>
                <li><a href="https://www.telegram.com" target="_blank" rel="noopener noreferrer"><FaTelegram className="text-2xl cursor-pointer hover:text-sky-400 transition-all" /></a></li>
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="space-y-2 mt-6 md:mt-0">
              <h1 className="font-bold text-white">Currently working on</h1>
              <ul className="flex space-x-5 mt-2">
                <li><SiSpringboot className="text-2xl hover:scale-110 duration-200 text-green-400" /></li>
                <li><FaReact className="text-2xl hover:scale-110 duration-200 text-blue-400" /></li>
                <li><SiMongodb className="text-2xl hover:scale-110 duration-200 text-green-500" /></li>
                <li><GrMysql className="text-2xl hover:scale-110 duration-200 text-yellow-400" /></li>
              </ul>
            </div>

          </div>
        </div>

        {/* Right Side - Profile Image */}
        <div className="md:w-1/2 md:ml-12 md:mt-20 order-1 flex justify-center">
          <div className="relative w-80 h-80 md:w-[350px] md:h-[350px]">
            {/* Animated border */}
            <div className="absolute inset-0 rounded-full border-4 border-purple-500 border-t-transparent animate-spin-slow"></div>
            {/* Image */}
            <img
              src={Pic}
              className="absolute w-full h-full object-cover rounded-full z-10 shadow-[0_0_50px_rgba(168,85,247,0.6)]"
              alt="Profile"
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export default About;
