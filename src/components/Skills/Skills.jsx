import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaJava,
  FaDatabase,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import { SiSpringboot ,SiPostman} from "react-icons/si";
import {
  SiMongodb,
  SiTailwindcss,
  SiJavascript,
} from "react-icons/si";

const skills = [
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "Java", icon: FaJava, color: "#3776AB" },
  { name: "SpringBoot", icon: SiSpringboot, color: "#6DB33F" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Git", icon: FaGitAlt, color: "#F05032" },
  { name: "MySQL", icon: FaDatabase, color: "#4479A1" },
  { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
];

function Skills() {
  return (
    <div id="skills" className="bg-transparent p-8 rounded-xl backdrop-blur-0">
      <h3 className="text-4xl font-bold text-white mb-10 text-center">
        Skills & Technologies
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)", // Added box shadow on hover
              backgroundColor: "#1e293b", // Dark background on hover
            }}
            className="flex flex-col items-center p-4 transition-all hover:scale-100 rounded-lg"
          >
            <skill.icon
              className="text-5xl mb-3"
              style={{ color: skill.color }}
              alt={`${skill.name} icon`} // Adding alt text for accessibility
            />
            <span className="text-gray-300 font-medium">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Skills;