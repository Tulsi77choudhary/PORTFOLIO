import React, { useState } from "react";
import { projects } from "../constants";
import video from '../../public/vedio.mp4';

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  return (
    <section
      id="projects"
      className="relative py-1 px-[8vw] md:px-[6vw] lg:px-[15vw] min-h-screen"
    >
      
      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 -z-5 bg-gradient-to-r from-purple-700 via-fuchsia-500 to-orange-400"></div>

      {/* Header */}
      <div className="text-center mb-10 relative z-10">
        <h2 className="text-3xl sm:text-3xl font-bold text-red-500 font-serif">
          PROJECTS
        </h2>
        <p className="text-gray-300 mt-4 text-sm sm:text-base font-medium w-full sm:w-3/4 mx-auto text-center italic">
          A showcase of my projects highlighting skills and experience across
          technologies.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 relative z-10">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="border border-white/10 bg-gray-900/80 backdrop-blur-md rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-purple-500/30 hover:-translate-y-1 transition-transform duration-300"
          >
            <div className="p-3">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-44 sm:h-48 md:h-52 object-cover rounded-lg"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-3 text-sm sm:text-base line-clamp-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-[#251f38] text-[11px] sm:text-xs font-medium text-purple-400 rounded-full px-2 py-[2px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-6">
          <div className="bg-gray-900 rounded-lg shadow-xl w-full max-w-xl sm:max-w-2xl md:max-w-3xl overflow-hidden relative animate-fadeIn">
            <button
              onClick={handleCloseModal}
              className="absolute top-3 right-4 text-white text-2xl sm:text-3xl font-bold hover:text-purple-500"
            >
              &times;
            </button>
            <div className="flex flex-col overflow-y-auto max-h-[80vh]">
              <div className="w-full flex justify-center bg-gray-900 px-3 pt-5">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full max-h-64 sm:max-h-80 md:max-h-96 object-contain rounded-lg shadow-lg"
                />
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm sm:text-base">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#251f38] text-[11px] sm:text-xs font-medium text-purple-400 rounded-full px-2 py-[2px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-800 hover:bg-purple-800 text-gray-300 px-3 py-2 rounded-lg text-center font-medium transition-colors text-sm sm:text-base"
                  >
                    View Code
                  </a>
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-purple-600 hover:bg-purple-800 text-white px-3 py-2 rounded-lg text-center font-medium transition-colors text-sm sm:text-base"
                  >
                    View Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="w-screen h-[1px] bg-black my-10 -mx-[8vw] md:-mx-[6vw] lg:-mx-[15vw] relative z-10"></div>
    </section>
  );
};

export default Work;
