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
    from: { opacity: 0, transform: "scale(0.5)" },
    to: { opacity: 1, transform: "scale(1)" },
  });

  const iconSpring = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { tension: 300, friction: 20 },
    delay: 300,
  });

  return (
    <div id="home" className="min-h-screen relative overflow-hidden flex flex-col justify-center px-6 lg:px-20">
      
      {/* Background Gradient Blob yang bergerak halus */}
      <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-tealDesert rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-blob"></div>
      <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-goldDesert rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-blob animation-delay-2000"></div>

      <animated.div style={logoSpring} className="z-10 relative">
        <p className="text-tealDesert font-mono tracking-widest mb-4">● FULL STACK DEV</p>
        
        {/* Judul Besar ala Majalah */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-bold text-darkDesert leading-[0.9]">
          ANNAS <br />
          <span className="italic font-light ml-10">ANURAGA</span>
        </h1>

        <div className="mt-8 flex flex-col md:flex-row justify-between items-start md:items-end w-full max-w-4xl">
          <p className="text-lg md:text-xl text-gray-700 max-w-md font-body leading-relaxed">
            Crafting digital experiences that merge <span className="font-bold text-darkDesert">business logic</span> with <span className="font-bold text-darkDesert">artistic interface</span>.
          </p>
          
          {/* Social Icons (Sesuai kode lama tapi styling baru) */}
          <animated.div style={iconSpring} className="flex gap-4 mt-6 md:mt-0">
             {/* Gunakan komponen ikon lama kamu di sini */}
             {/* Contoh styling tombol unik: */}
             <a href={GITHUB_URL} className="border border-darkDesert px-6 py-2 rounded-full hover:bg-darkDesert hover:text-lightDesert transition-all duration-300 uppercase text-sm tracking-widest">
                GitHub
             </a>
          </animated.div>
        </div>
      </animated.div>
    </div>
  );
}
