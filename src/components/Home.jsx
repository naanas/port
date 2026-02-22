import React from "react";
import { useSpring, animated } from "react-spring";
import {
  FaGithub,
  FaLinkedin,
  FaFileAlt,
} from "react-icons/fa";
import {
  GITHUB_URL,
  LINKEDIN_URL,
  RESUME_URL,
} from "../constants";

export default function Home() {
  const logoSpring = useSpring({
    from: { opacity: 0, transform: "translate3d(0, 40px, 0)" },
    to: { opacity: 1, transform: "translate3d(0, 0px, 0)" },
    config: { tension: 280, friction: 60 },
  });

  const iconSpring = useSpring({
    from: { opacity: 0, transform: "translate3d(0, 20px, 0)" },
    to: { opacity: 1, transform: "translate3d(0, 0px, 0)" },
    config: { tension: 300, friction: 20 },
    delay: 300,
  });

  return (
    <div id="home" className="min-h-screen relative overflow-hidden flex flex-col justify-center px-6 lg:px-20 bg-lightDesert">

      {/* Optimized Background Elements (No heavy blur, simple soft radial gradients) */}
      <div className="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full opacity-30 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(13,155,140,0.15) 0%, rgba(249,247,243,0) 70%)' }}></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full opacity-30 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(200,138,54,0.15) 0%, rgba(249,247,243,0) 70%)' }}></div>

      <animated.div style={logoSpring} className="z-10 relative pt-20">
        <p className="text-tealDesert font-mono tracking-widest mb-6 font-semibold uppercase text-sm md:text-base">
          ● Full Stack Developer
        </p>

        {/* Modern Typography Layout */}
        <h1 className="text-[12vw] sm:text-7xl md:text-8xl lg:text-9xl font-heading font-black text-darkDesert leading-[0.85] tracking-tighter">
          ANNAS <br />
          <span className="italic font-light text-gray-400/80 ml-[5%] md:ml-16">ANURAGA</span>
        </h1>

        <div className="mt-12 flex flex-col md:flex-row justify-between items-start md:items-end w-full max-w-5xl gap-8">
          <p className="text-lg md:text-xl text-gray-600 max-w-lg font-body leading-relaxed">
            Crafting digital experiences that merge <strong className="text-darkDesert font-semibold">business logic</strong> with <strong className="text-darkDesert font-semibold">artistic interface</strong>. Passionate about performant and scalable web applications.
          </p>

          {/* Social Links with Modern Micro-interactions */}
          <animated.div style={iconSpring} className="flex flex-wrap gap-4">
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer"
              className="group flex items-center gap-2 border border-gray-300 px-6 py-3 rounded-full hover:border-darkDesert hover:bg-darkDesert hover:text-white transition-all duration-300 uppercase text-xs md:text-sm tracking-widest font-mono font-medium shadow-sm hover:shadow-md">
              <FaGithub size={18} className="transition-transform group-hover:scale-110" /> GitHub
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer"
              className="group flex items-center gap-2 border border-gray-300 px-6 py-3 rounded-full hover:border-[#0A66C2] hover:bg-[#0A66C2] hover:text-white transition-all duration-300 uppercase text-xs md:text-sm tracking-widest font-mono font-medium shadow-sm hover:shadow-md">
              <FaLinkedin size={18} className="transition-transform group-hover:scale-110" /> LinkedIn
            </a>
          </animated.div>
        </div>
      </animated.div>
    </div>
  );
}
