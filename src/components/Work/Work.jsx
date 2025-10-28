import React, { useState } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  return (
    <section
      id="projects"
      className="relative min-h-screen w-full text-white overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800 px-4 sm:px-10 py-16"
    >
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 bg-black/30 backdrop-blur-sm"></div>

      {/* Heading */}
      <div className="text-center mb-12 relative z-10">
        <h1 className="text-4xl sm:text-5xl font-bold text-orange-400 font-serif tracking-wide">
          PROJECTS
        </h1>
        <p className="text-gray-300 mt-4 text-sm sm:text-base md:text-lg font-medium w-full sm:w-3/4 md:w-2/3 mx-auto italic">
          A showcase of my projects, reflecting my passion for coding, creativity, and real-world problem-solving.
        </p>
      </div>

      {/* Projects Grid — Smaller Width, Centered 2x2 */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="w-[90%] sm:w-[75%] lg:w-[60%] bg-gray-900/70 backdrop-blur-md px-5 py-5 rounded-xl border border-gray-700 
                       shadow-[0_0_12px_1px_rgba(255,165,0,0.25)] transition-transform duration-300 
                       hover:scale-[1.03] cursor-pointer"
          >
            <div className="overflow-hidden rounded-lg mb-3">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 sm:h-56 object-cover rounded-lg hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="p-2 text-center">
              <h3 className="text-lg sm:text-xl font-semibold text-orange-400 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-3 text-sm sm:text-base line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 justify-center mb-3">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-800/60 text-[11px] sm:text-xs font-medium text-orange-400 rounded-full px-2 py-[2px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex justify-center gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-orange-600 text-gray-300 px-3 py-1.5 rounded-lg text-sm sm:text-base font-medium transition-colors"
                >
                  View Code
                </a>
                <a
                  href={project.webapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1.5 rounded-lg text-sm sm:text-base font-medium transition-colors"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-6">
          <div className="bg-gray-900/90 backdrop-blur-md rounded-xl border border-gray-700 shadow-[0_0_20px_2px_rgba(255,165,0,0.3)] w-full max-w-2xl overflow-hidden relative">
            <button
              onClick={handleCloseModal}
              className="absolute top-3 right-4 text-white text-3xl font-bold hover:text-orange-400 transition"
            >
              &times;
            </button>

            <div className="p-5 sm:p-6 overflow-y-auto max-h-[85vh]">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full max-h-80 object-contain rounded-lg mb-5"
              />
              <h3 className="text-2xl font-semibold text-orange-400 mb-3 text-center">
                {selectedProject.title}
              </h3>
              <p className="text-gray-300 mb-4 text-sm sm:text-base text-center">
                {selectedProject.description}
              </p>
              <div className="flex flex-wrap gap-2 justify-center mb-5">
                {selectedProject.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-800/60 text-[11px] sm:text-xs font-medium text-orange-400 rounded-full px-2 py-[2px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gray-800 hover:bg-orange-600 text-gray-300 px-3 py-2 rounded-lg text-center font-medium transition text-sm sm:text-base"
                >
                  View Code
                </a>
                <a
                  href={selectedProject.webapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-orange-500 hover:bg-orange-600 text-white px-3 py-2 rounded-lg text-center font-medium transition text-sm sm:text-base"
                >
                  View Live
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
