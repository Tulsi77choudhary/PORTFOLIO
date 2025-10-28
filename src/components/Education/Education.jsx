import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-16 px-[6vw] md:px-[10vw] lg:px-[15vw] bg-gradient-to-b from-black via-gray-900 to-gray-950 text-white relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-orange-600/10 blur-3xl -z-10"></div>

      {/* Section Title */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl sm:text-5xl font-bold text-orange-400 font-serif tracking-wide drop-shadow-[0_0_10px_rgba(255,165,0,0.4)]">
          EDUCATION
        </h2>
        <div className="w-44 h-1 bg-orange-500 mx-auto mt-3 rounded-full shadow-[0_0_12px_rgba(255,165,0,0.6)]"></div>
        <p className="text-gray-300 mt-5 text-sm sm:text-base italic max-w-2xl mx-auto">
          A journey of continuous learning and growth — exploring technology,
          creativity, and innovation through academic excellence.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-orange-500 to-orange-700 hidden sm:block"></div>

        {/* Education Items */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`relative flex flex-col sm:flex-row items-center mb-20 ${
              index % 2 === 0 ? "sm:flex-row-reverse" : ""
            }`}
          >
            {/* Timeline Circle */}
            <div className="absolute sm:left-1/2 transform sm:-translate-x-1/2 bg-gray-900 border-4 border-orange-500 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex justify-center items-center z-10 shadow-[0_0_15px_rgba(255,165,0,0.5)]">
              <img
                src={edu.img}
                alt={edu.school}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
              />
            </div>

            {/* Card */}
            <div
              className={`relative sm:w-[45%] mt-16 sm:mt-0 bg-gray-800/80 border border-orange-500/30 rounded-2xl p-6 shadow-[0_0_15px_rgba(255,165,0,0.2)] transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_0_25px_rgba(255,165,0,0.5)] ${
                index % 2 === 0
                  ? "sm:mr-[55%] sm:text-right"
                  : "sm:ml-[55%] sm:text-left"
              }`}
            >
              {/* Header (Logo + Info) */}
              <div
                className={`flex ${
                  index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
                } items-center space-x-4`}
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-900 rounded-xl overflow-hidden border border-orange-500/40 shadow-md flex items-center justify-center">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div
                  className={`${
                    index % 2 === 0 ? "text-right" : "text-left"
                  }`}
                >
                  <h3 className="text-lg sm:text-xl font-semibold text-orange-300">
                    {edu.degree}
                  </h3>
                  <h4 className="text-sm text-gray-300">{edu.school}</h4>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">
                    {edu.date}
                  </p>
                </div>
              </div>

              {/* Details */}
              <p className="mt-4 text-gray-400 text-sm sm:text-base">
                <span className="font-bold text-orange-400">Grade:</span>{" "}
                {edu.grade}
              </p>
              <p className="mt-2 text-gray-300 text-sm sm:text-base leading-relaxed">
                {edu.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
