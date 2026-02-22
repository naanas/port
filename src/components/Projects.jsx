import React, { useState, useEffect } from "react";
import { FaGithub, FaExternalLinkAlt, FaTimesCircle, FaFilePdf } from "react-icons/fa";
import { useTrail, useTransition, animated } from "react-spring";
import projects from "../constants/projects.json";

// --- Project Modal Component (Custom Implementation) ---
const ProjectModal = ({ project, closeModal }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-6 pb-20 md:pb-6">

      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-darkDesert/60 backdrop-blur-md transition-opacity"
        onClick={closeModal}
      ></div>

      {/* Modal Content Card */}
      <div
        onClick={handleContentClick}
        className="relative z-10 bg-white rounded-[2rem] shadow-glass w-full max-w-4xl max-h-[85vh] flex flex-col overflow-hidden outline-none"
      >

        {/* Header Image Area */}
        <div className="relative h-48 sm:h-72 w-full flex-shrink-0 group">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 bg-gray-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

          <button
            onClick={closeModal}
            className="absolute top-4 right-4 z-20 text-white/80 hover:text-white hover:bg-black/20 transition-all duration-300 rounded-full p-2 backdrop-blur-md"
          >
            <FaTimesCircle size={28} />
          </button>

          <div className="absolute bottom-6 left-6 right-6 z-10">
            <h3 className="text-white text-3xl sm:text-4xl font-heading font-black leading-tight mb-2 drop-shadow-lg">
              {project.title}
            </h3>
            <div className="flex flex-wrap items-center gap-3">
              <span className="bg-tealDesert text-white text-xs font-mono px-3 py-1 rounded-full uppercase tracking-wider font-semibold shadow-sm">
                {project.date}
              </span>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-6 sm:p-10 overflow-y-auto bg-lightDesert custom-scrollbar">
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed font-body mb-8">
            <p>{project.description}</p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-6 border-t border-gray-200">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-darkDesert text-white rounded-full hover:bg-black transition-all duration-300 shadow-md font-mono text-sm tracking-wide"
              >
                <FaGithub size={18} />
                <span>Source Code</span>
              </a>
            )}

            <a
              href={project.deployed}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-tealDesert text-white rounded-full hover:bg-tealDesert/80 transition-all duration-300 shadow-md font-mono text-sm tracking-wide"
            >
              <FaExternalLinkAlt size={16} />
              <span>Live Demo</span>
            </a>

            {project.pdf && (
              <a
                href={project.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 border-2 border-gray-300 text-gray-600 rounded-full hover:border-red-500 hover:text-red-500 transition-all duration-300"
                title="View PDF"
              >
                <FaFilePdf size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Project Card Component ---
const ProjectCard = ({ project, openModal, isLarge }) => {
  return (
    <div
      onClick={openModal}
      className="group relative h-72 md:h-[400px] w-full overflow-hidden rounded-[2rem] bg-gray-200 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500"
    >
      {/* Image with zoom effect */}
      <img
        src={project.thumbnail}
        alt={project.title}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-darkDesert/90 via-darkDesert/10 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>

      {/* Content Overlay */}
      <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-out">
        <h1 className="text-white text-2xl md:text-3xl font-heading font-bold leading-tight mb-2 drop-shadow-md">
          {project.title}
        </h1>
        <div className="h-[2px] w-12 bg-tealDesert mb-4 transition-all duration-300 group-hover:w-20"></div>

        <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
          <span className="text-white/90 text-xs font-mono tracking-widest uppercase font-medium">
            View Details
          </span>
          <span className="bg-white/20 p-2 rounded-full text-white backdrop-blur-md">
            <FaExternalLinkAlt size={12} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const reversedProjects = [...projects].reverse();

  // Optimized animation (GPU accelerated translate3d)
  const trails = useTrail(reversedProjects.length, {
    opacity: 1,
    transform: "translate3d(0, 0px, 0)",
    from: { opacity: 0, transform: "translate3d(0, 40px, 0)" },
    delay: 100,
    config: { mass: 1, tension: 280, friction: 60 },
  });

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  const modalTransition = useTransition(selectedProject, {
    from: { opacity: 0, transform: "scale(0.95)" },
    enter: { opacity: 1, transform: "scale(1)" },
    leave: { opacity: 0, transform: "scale(0.95)" },
    config: { mass: 1, tension: 350, friction: 30, clamp: true }
  });

  return (
    <div
      id="projects"
      className="relative w-full bg-white min-h-screen pt-32 pb-24 px-4 overflow-hidden"
    >
      {/* Removed the heavy blur and noise textures completely for performance */}

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="mb-16 md:mb-20">
          <h2 className="text-5xl md:text-7xl font-heading font-black text-darkDesert tracking-tighter mb-4 uppercase">
            Selected <br className="hidden md:block" />
            <span className="italic font-light ml-0 md:ml-2 text-goldDesert lowercase">Works.</span>
          </h2>
          <div className="h-1 w-24 bg-darkDesert mt-6"></div>
        </div>

        {/* BENTO GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {trails.map((props, index) => {
            const project = reversedProjects[index];
            const isLarge = index === 0 || index === 3 || index === 6;

            return (
              <animated.div
                key={project.id}
                style={props}
                className={`${isLarge ? 'md:col-span-2' : 'md:col-span-1'} will-change-transform will-change-opacity`}
              >
                <ProjectCard
                  project={project}
                  openModal={() => openModal(project)}
                  isLarge={isLarge}
                />
              </animated.div>
            );
          })}
        </div>
      </div>

      {/* Render Modal */}
      {modalTransition((style, item) =>
        item ? (
          <animated.div style={style} className="fixed inset-0 z-[100] flex justify-center items-center">
            <ProjectModal project={item} closeModal={closeModal} />
          </animated.div>
        ) : null
      )}
    </div>
  );
}