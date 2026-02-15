import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaRobot, FaServer } from 'react-icons/fa';

function AboutSection() {
  const services = [
    {
      icon: FaCode,
      title: "Web Development",
      description: "Building responsive and dynamic web applications using modern technologies"
    },
    {
      icon: FaServer,
      title: "Backend Development",
      description: "Developing robust and scalable server-side applications"
    }
  ];

  return (
    <section id="about" className="py-16 md:py-20 bg-dark-100 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Heading and Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-16 md:w-20 h-1 bg-primary mx-auto mb-6 md:mb-8"></div>
          <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            I'm a passionate software developer with expertise in Java,SpringBoot & React. 
            I love building projects in automation, aiming to create 
            user-friendly and innovative solutions.
          </p>
        </motion.div>

        {/* Mobile: 1 column, Tablet: 2 columns, Desktop: 3 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 md:gap-8 mb-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              // Mobile par scale kam rakha hai taaki overflow na ho
              className="bg-gray-800/50 p-6 md:p-8 rounded-xl shadow-lg border border-gray-700/50
                         hover:border-primary/50 hover:bg-primary/5 
                         transition-all duration-300 group text-center"
            >
              <div className="bg-dark-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="text-primary text-3xl md:text-4xl" />
              </div>
              
              <h3 className="text-lg md:text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default AboutSection;