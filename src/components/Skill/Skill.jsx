import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="relative min-h-screen w-full text-white overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800 px-4 sm:px-10 py-15"
  >
    {/* Overlay */}
    <div className="absolute top-0 left-0 w-full h-full -z-10 bg-black/30 backdrop-blur-sm"></div>

    {/* Heading */}
    <div className="text-center mb-12 relative z-10">
      <h1 className="text-4xl sm:text-5xl font-bold text-orange-400 font-serif tracking-wide">
        SKILLS
      </h1>
      <p className="text-gray-300 mt-4 text-sm sm:text-base md:text-lg font-medium w-full sm:w-3/4 md:w-2/3 mx-auto italic">
        A collection of my technical skills and experience gained through various projects and opportunities.
      </p>
    </div>

    {/* Skills Grid — Compact 2x2 Layout */}
    <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center">
      {SkillsInfo.map((category) => (
        <div
          key={category.title}
          className="w-full sm:w-[85%] lg:w-[70%] bg-gray-900/70 backdrop-blur-md px-5 py-5 rounded-xl border border-gray-700 shadow-[0_0_12px_1px_rgba(255,165,0,0.25)] transition-transform duration-300 hover:scale-[1.03]"
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-center text-gray-200 mb-4">
            {category.title}
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 justify-items-center">
            {category.skills.map((skill) => (
              <Tilt
                key={skill.name}
                tiltMaxAngleX={12}
                tiltMaxAngleY={12}
                scale={1.05}
                className="w-full flex justify-center"
              >
                <div className="flex items-center justify-center space-x-2 bg-gray-800/50 border border-gray-700 rounded-xl py-1.5 px-2 hover:border-orange-400 transition-all duration-300">
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-5 h-5 sm:w-6 sm:h-6"
                  />
                  <span className="text-[12px] sm:text-sm text-gray-300">
                    {skill.name}
                  </span>
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
