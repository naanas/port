import React, { useState, useEffect } from "react";
import { FaGithub, FaExternalLinkAlt, FaTimesCircle, FaFilePdf } from "react-icons/fa";
// Hapus import Modal from "react-modal" karena kita buat custom modal
import { useTrail, useTransition, animated } from "react-spring";
import projects from "../constants/projects.json";

// --- Project Modal Component (Custom Implementation) ---
const ProjectModal = ({ project, closeModal }) => {
  // Efek untuk mematikan scroll pada body saat modal terbuka
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  // Mencegah klik pada konten modal menutup modal
  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-6">
      
      {/* Backdrop (Klik di sini akan menutup modal) */}
      <div 
        className="absolute inset-0 bg-darkDesert/90 backdrop-blur-sm transition-opacity" 
        onClick={closeModal}
      ></div>

      {/* Modal Content Card */}
      <div 
        onClick={handleContentClick}
        className="relative z-10 bg-white rounded-3xl shadow-2xl w-full max-w-3xl max-h-[85vh] flex flex-col overflow-hidden outline-none"
      >
        
        {/* Header Image Area */}
        <div className="relative h-56 sm:h-80 w-full flex-shrink-0 group">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 z-20 text-white/80 hover:text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 rounded-full p-2 backdrop-blur-md"
          >
            <FaTimesCircle size={28} />
          </button>

          <div className="absolute bottom-6 left-6 right-6 z-10">
            <h3 className="text-white text-3xl sm:text-5xl font-serif font-bold leading-tight mb-3 drop-shadow-md">
              {project.title}
            </h3>
            <div className="flex flex-wrap items-center gap-3">
               <span className="bg-goldDesert text-white text-xs sm:text-sm font-mono px-4 py-1.5 rounded-full uppercase tracking-wider font-semibold shadow-lg">
                 {project.date}
               </span>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-6 sm:p-10 overflow-y-auto bg-white custom-scrollbar">
          <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed font-sans mb-8">
            <p className="text-lg">{project.description}</p>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-6 border-t border-gray-100">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 hover:-translate-y-1 transition-all duration-300 shadow-lg font-medium"
              >
                <FaGithub size={22} />
                <span>Source Code</span>
              </a>
            )}
            
            <a
              href={project.deployed}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-tealDesert text-white rounded-xl hover:bg-tealDesert/90 hover:-translate-y-1 transition-all duration-300 shadow-lg font-medium"
            >
              <FaExternalLinkAlt size={20} />
              <span>Live Demo</span>
            </a>

            {project.pdf && (
               <a
                href={project.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-14 h-[50px] border-2 border-gray-200 text-gray-500 rounded-xl hover:border-red-500 hover:text-red-500 hover:bg-red-50 transition-all duration-300"
                title="View PDF"
              >
                <FaFilePdf size={24} />
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
        className="group relative h-80 md:h-[450px] w-full overflow-hidden rounded-[2rem] bg-gray-100 cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
    >
      {/* Image with zoom effect */}
      <img
        src={project.thumbnail}
        alt={project.title}
        className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0"
      />
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-darkDesert/90 via-darkDesert/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Content Overlay */}
      <div className="absolute bottom-0 left-0 w-full p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
        <h1 className="text-lightDesert text-3xl font-serif font-bold leading-tight mb-2 drop-shadow-md">
          {project.title}
        </h1>
        <div className="h-0.5 w-12 bg-goldDesert mb-4 transition-all duration-500 group-hover:w-24"></div>
        
        <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
          <span className="text-white/90 text-sm font-mono tracking-widest uppercase">
            View Project
          </span>
          <span className="bg-white/20 p-2.5 rounded-full text-white backdrop-blur-sm">
              <FaExternalLinkAlt size={14} />
          </span>
        </div>
      </div>
    </div>
  );  
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  
  const reversedProjects = [...projects].reverse();

  // Animation for list items
  const trails = useTrail(reversedProjects.length, {
    opacity: 1,
    transform: "translateY(0px)",
    from: { opacity: 0, transform: "translateY(40px)" },
    delay: 200,
    config: { mass: 1, tension: 280, friction: 60 },
  });

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  // Animation for Modal Entry/Exit using useTransition (Smoother than useSpring conditional)
  const modalTransition = useTransition(selectedProject, {
    from: { opacity: 0, transform: "scale(0.95) translateY(20px)" },
    enter: { opacity: 1, transform: "scale(1) translateY(0px)" },
    leave: { opacity: 0, transform: "scale(0.95) translateY(20px)" },
    config: { mass: 1, tension: 300, friction: 25, clamp: true }
  });

  return (
    <div
      id="projects"
      className="relative w-full bg-lightDesert min-h-screen py-24 px-4 overflow-hidden"
    >
      {/* Background Noise Texture (Optional, adds editorial feel) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="mb-16 md:mb-24">
          <h2 className="text-6xl md:text-8xl font-serif font-bold text-darkDesert tracking-tighter mb-4">
            Selected <br className="hidden md:block" />
            <span className="italic font-light ml-0 md:ml-4 text-tealDesert">Works</span>
          </h2>
          <div className="h-1 w-32 bg-darkDesert mt-6"></div>
        </div>

        {/* BENTO GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
          {trails.map((props, index) => {
            const project = reversedProjects[index];
            
            // Logic for Bento Layout:
            // Items at index 0 and 3 will span 2 columns
            const isLarge = index === 0 || index === 3 || index === 6; 

            return (
              <animated.div 
                key={project.id} 
                style={props}
                className={`${isLarge ? 'md:col-span-2' : 'md:col-span-1'}`}
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

      {/* Render Modal via Transition */}
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