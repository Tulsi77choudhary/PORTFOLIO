import { motion } from 'framer-motion';
import { FaGraduationCap, FaCheckCircle } from 'react-icons/fa';

const courses = [
  {
    title: "Java Masterclass Bootcamp",
    platform: "Udemy",
    instructor: "Tim Buchalka",
    description: "Comprehensive Java programming course covering fundamentals to advanced concepts, including web development, data science, and automation.",
    completed: true,
    skills: ["Java", "Core Java","Advance Java", "Multithreading", "API Development", "Java 8","Networking", "JDBC"]
  },
  {
    title: "Spring Boot Bootcamp",
    platform: "Youtube",
    instructor: "Vipul",
    description: "Comprehensive Spring Boot course covering fundamentals to advanced topics, including building REST APIs, web applications, and integration with databases.",
    completed: true,
    skills: ["Java", "Spring Boot", "REST API", "JPA/Hibernate", "MySQL","Junit"]
  },
  {
    title: "Frontend Development with React",
    platform: "Chai our Code",
    instructor: "Hitesh Choudhary",
    description: "Intensive coding challenge covering various programming concepts and project development across different technologies.",
    completed: true,
    skills: ["JavaScript", "React", "Web Development", "Problem Solving"]
  }
];

const Courses = () => {
  return (
    <section id="courses" className="py-20  backdrop-blur-0">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Courses & Certifications
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Continuous learning through structured courses and hands-on practice to stay updated with the latest technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className=" bg-gray-800/50 transition-colors duration-300 rounded-lg p-6 shadow-lg transform hover:scale-105"
            >
              <div className="flex items-start gap-4 mb-4">
                <FaGraduationCap className="text-gradient-to-r from-purple-500 to-blue-500 text-3xl flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-white">{course.title}</h3>
                  <p className="text-gray-400">{course.platform}</p>
                  <p className="text-sm text-gray-500">Instructor: {course.instructor}</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">{course.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {course.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-gradient-to-r from-orange-300 to-500 text-white px-3 py-1 rounded-full text-sm shadow-sm"

                  >
                    {skill}
                  </span>
                ))}
              </div>
              {course.completed && (
                <div className="flex items-center gap-2 text-green-400 font-medium">
                  <FaCheckCircle />
                  <span>Completed</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;