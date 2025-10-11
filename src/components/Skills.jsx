import React from "react";
import { SkillsInfo } from "../constants";
import Tilt from "react-parallax-tilt";
import video from '../../public/2.mp4';

const Skills = () => (
  <section
    id="skills"
    className="relative py-20 px-[8vw] md:px-[6vw] lg:px-[15vw] min-h-screen bg-gradient-to-r from-purple-700 via-pink-600 to-red-500"
  >
    
    {/* Dark Overlay */}
    <div className="absolute top-0 left-0 w-full h-full  -z-5"></div>

    {/* Heading Section */}
    <div className="text-center mb-10 relative z-10">
      <h1 className="text-3xl sm:text-3xl font-bold text-red-500 font-serif">
        SKILLS
      </h1>
      <p className="text-gray-300 mt-4 text-sm sm:text-base font-medium w-full sm:w-3/4 mx-auto text-center italic">
        A collection of my technical skills and experience gained through various projects and opportunities.
      </p>
    </div>

    {/* Skills Categories */}
    <div className="relative z-10 flex flex-wrap gap-4 justify-between">
      {SkillsInfo.map((category) => (
        <div
          key={category.title}
          className="bg-gray-900 backdrop-blur-md px-5 sm:px-6 py-3 sm:py-4 mb-4 w-full sm:w-[48%] rounded-xl border border-white shadow-[0_0_12px_1px_rgba(130,69,236,0.25)]"
        >
          <h3 className="text-lg sm:text-xl font-semibold text-center text-gray-300 mb-3">
            {category.title}
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 w-full">
            {category.skills.map((skill) => (
              <Tilt key={skill.name} tiltMaxAngleX={12} tiltMaxAngleY={12} scale={1.03}>
                <div className="flex items-center justify-center space-x-1 bg-transparent border border-gray-700 rounded-xl py-1 px-2 sm:py-1 sm:px-3 text-center">
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-5 h-5 sm:w-6 sm:h-6"
                  />
                  <span className="text-[11px] sm:text-sm text-gray-300">{skill.name}</span>
                </div>
              </Tilt>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
