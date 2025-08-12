import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaTimesCircle } from "react-icons/fa";
import Modal from "react-modal";
import { useTrail, useSpring, animated } from "react-spring";
import projects from "../constants/projects.json";

const ProjectModal = ({ project, isOpen, closeModal }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={closeModal}
    className="fixed inset-0 z-50 flex items-center justify-center pt-16 p-4"
    overlayClassName="fixed inset-0 bg-gradient-to-br from-white-600/90 via-white-700/90 to-indigo-800/90 backdrop-blur-md transition-all duration-300 ease-out"
    shouldCloseOnOverlayClick={true}
    shouldCloseOnEsc={true}
  >
    <div className="relative bg-white rounded-2xl shadow-2xl transform transition-all duration-300 ease-out w-full max-w-lg mx-auto my-auto max-h-[90vh] flex flex-col">
      {/* Header with close button */}
      <div className="relative bg-gradient-to-r from-amber-500 to-indigo-600 px-6 py-4 rounded-t-2xl flex-shrink-0">
        <button
          onClick={closeModal}
          className="absolute top-3 right-3 text-white/80 hover:text-white hover:scale-110 transition-all duration-200 bg-white/20 rounded-full p-2 backdrop-blur-sm hover:bg-white/30"
        >
          <FaTimesCircle size={18} />
        </button>
        <h3 className="text-white text-xl sm:text-2xl font-bold pr-12 leading-tight">
          {project.title}
        </h3>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 p-6 overflow-y-auto">
        {/* Project thumbnail */}
        <div className="mb-5 relative overflow-hidden rounded-xl shadow-lg">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-48 sm:h-52 object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
        </div>
        
        {/* Description */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-4 mb-5 border border-gray-200/50 shadow-sm">
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            {project.description}
          </p>
        </div>
        
        {/* Date badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
            <span className="w-2 h-2 bg-white/50 rounded-full mr-2"></span>
            {project.date}
          </div>
        </div>
        
        {/* Action buttons */}
        <div className="flex justify-center gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-12 h-12 bg-gray-800 text-white rounded-full hover:bg-gray-700 hover:scale-110 transition-all duration-200 shadow-lg hover:shadow-xl"
              title="View on GitHub"
            >
              <FaGithub size={20} className="group-hover:scale-110 transition-transform duration-200" />
            </a>
          )}
          <a
            href={project.deployed}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full hover:from-blue-400 hover:to-indigo-500 hover:scale-110 transition-all duration-200 shadow-lg hover:shadow-xl"
            title="View Live Demo"
          >
            <FaExternalLinkAlt size={18} className="group-hover:scale-110 transition-transform duration-200" />
          </a>
        </div>
      </div>
    </div>
  </Modal>
);

// move ProjectCard outside component so modalIsOpen does not trigger entire component to re-render
const ProjectCard = ({ project, openModal }) => {
  // Enhance card hover effect
  const [hovered, setHovered] = useState(false);
  const hoverProps = useSpring({
    transform: hovered ? "scale(1.05)" : "scale(1)",
  });

  return (
    <animated.div
      style={hoverProps}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative group"
    >
      <div className="relative group">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-64 object-cover rounded-lg shadow-md"
        />
        <div className="absolute inset-0 bg-darkDesert bg-opacity-70 flex items-center justify-center rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-all duration-500">
          <h1 className="text-lightDesert text-center text-sm md:text-2xl lg:text-3xl truncate w-11/12 md:w-10/12 font-bold">
            {project.title}
          </h1>
        </div>
        <button onClick={openModal} className="absolute inset-0 cursor-pointer">
          <span className="sr-only">Open details for {project.title}</span>
        </button>
      </div>
    </animated.div>
  );  
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Staggered card load animation
  const trails = useTrail(projects.length, {
    opacity: 1,
    transform: "translateY(0px)",
    from: { opacity: 0, transform: "translateY(20px)" },
    delay: 200,
    config: { mass: 5, tension: 2000, friction: 200 },
  });

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  // Modal fade-in and scale effect
  const modalAnimation = useSpring({
    opacity: selectedProject ? 1 : 0,
    transform: selectedProject ? "scale(1)" : "scale(0.9)",
    config: { tension: 150, friction: 20 },
  });

  const reversedProjects = [...projects].reverse();

  return (
    <div
      id="projects"
      className="container mx-auto flex flex-col items-center p-8 bg-lightDesert mt-12 min-h-screen"
    >
      <h2 className="text-4xl font-bold text-darkDesert mb-4">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {trails.map((props, index) => (
          <animated.div key={reversedProjects[index].id} style={props}>
            <ProjectCard
              project={reversedProjects[index]}
              openModal={() => openModal(reversedProjects[index])}
            />
          </animated.div>
        ))}
      </div>
      {selectedProject && (
        <animated.div style={modalAnimation}>
          <ProjectModal
            project={selectedProject}
            isOpen={!!selectedProject}
            closeModal={closeModal}
          />
        </animated.div>
      )}
    </div>
  );
}