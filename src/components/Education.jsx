import React from "react";
import { education } from "../constants";
import video from '../../public/vedio.mp4';
const Education = () => {
  return (
    <section
      id="education"
      className="py-10 px-[8vw] md:px-[6vw] lg:px-[15vw] mb-10"
    >
      <video
        className="absolute left-0 w-full  h-full object-cover "
        src={video}
        autoPlay
        loop
        muted
      />
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-3xl font-bold text-red-500 font-serif">
          EDUCATION
        </h2>
        <div className="w-52 h-0.5 bg-purple-500 mx-auto mt-2"></div>
        <p className="text-gray-500 mt-4 text-sm sm:text-base font-medium w-full sm:w-3/4 mx-auto text-center italic">
          My education has been a journey of learning and development. Here are
          the details of my academic background
        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute top-0 bottom-0 sm:left-1/2 left-[24px] transform -translate-x-1/2 w-1 bg-black"></div>

        {/* Education Entries */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`relative flex flex-col sm:flex-row items-center mb-16`}
          >
            {/* Timeline Circle */}
            <div className="absolute sm:left-1/2 left-[24px] transform -translate-x-1/2 bg-gray-200 border-4 border-[#8245ec] w-12 h-12 sm:w-14 sm:h-14 rounded-full flex justify-center items-center z-10">
              <img
                src={edu.img}
                alt={edu.school}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Content Section */}
            <div
              className={`sm:w-90 sm:h-full p-5 ml-20 sm:p-7 rounded-2xl 
                shadow-2xl border border-white bg-gray-900 backdrop-blur-md 
                shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] 
                transform transition-transform duration-300 hover:scale-105
                ${index % 2 === 0
                  ? "sm:ml-25 sm:mr-24 mt-16 sm:mt-0"
                  : "sm:mr-25 sm:ml-auto mt-16 sm:mt-0"
                } ml-15`}
            >
              {/* Flex container for image and text */}
              <div className="flex items-center space-x-6">
                {/* School Logo/Image */}
                <div className="w-28 h-20 bg-white rounded-md overflow-hidden flex items-center justify-center">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Degree, School Name, and Date */}
                <div className="flex flex-col">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-200">
                    {edu.degree}
                  </h3>
                  <h4 className="text-sm text-gray-300">{edu.school}</h4>
                  <p className="text-sm text-gray-500 mt-1">{edu.date}</p>
                </div>
              </div>

              <p className="mt-4 text-gray-400 font-bold">
                Grade: {edu.grade}
              </p>
              <p className="mt-2 text-gray-400">{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="w-screen h-[1px] bg-black my-10 -mx-[8vw] md:-mx-[6vw] lg:-mx-[15vw]"></div>
    </section>
  );
};

export default Education;
