import React from "react";
import schools from "../constants/schools.json";
import { useSpring, animated, useTrail } from "react-spring";

const SchoolCard = ({ school, style }) => (
  <animated.div style={style} className="w-full relative group">
    <div className="bg-cyberGray p-8 rounded-[2rem] shadow-sm hover:shadow-neon transition-all duration-500 border border-gray-800 flex flex-col md:flex-row items-center md:items-start gap-8 transform hover:-translate-y-2 group-hover:border-neonCyan relative overflow-hidden">

      {/* Subtle hover background highlight */}
      <div className="absolute inset-0 bg-neonCyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

      {/* Visual Indicator / Timeline dot effect */}
      <div className="hidden md:block absolute -left-12 top-14 w-4 h-4 rounded-full bg-neonCyan border-[3px] border-cyberBlack shadow-[0_0_10px_rgba(0,240,255,0.8)] z-10"></div>

      {/* Horizontal connector line for large screens */}
      <div className="hidden md:block absolute -left-8 top-[60px] w-8 h-[2px] bg-gray-800 group-hover:bg-neonCyan transition-colors duration-500 z-0"></div>

      <div className="w-24 h-24 flex-shrink-0 bg-cyberBlack rounded-2xl p-4 flex items-center justify-center border border-gray-800 group-hover:border-neonCyan transition-colors relative z-10 box-shadow-[inset_0_0_15px_rgba(0,0,0,0.5)]">
        <img
          src={school.img}
          alt={school.university}
          className="w-full h-auto object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
        />
      </div>

      <div className="flex-1 text-center md:text-left relative z-10">
        <h3 className="text-2xl font-bold font-heading text-textMain mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-neonCyan group-hover:to-neonPurple transition-all duration-300">{school.degree}</h3>
        <p className="text-lg text-textMuted font-body mb-2">{school.university}</p>
        <div className="inline-block bg-cyberBlack border border-gray-800 px-4 py-1.5 rounded-full mt-2 group-hover:border-neonPurple/50 transition-colors">
          <p className="text-sm font-mono font-medium text-neonPurple uppercase tracking-wider">{school.timePeriod}</p>
        </div>
      </div>
    </div>
  </animated.div>
);

export default function Education() {
  const educationSpring = useSpring({
    from: { opacity: 0, transform: "translate3d(0, 40px, 0)" },
    to: { opacity: 1, transform: "translate3d(0, 0px, 0)" },
    config: { tension: 280, friction: 60 }
  });

  const trails = useTrail(schools.length, {
    from: { opacity: 0, transform: "translate3d(0, 40px, 0)" },
    to: { opacity: 1, transform: "translate3d(0, 0px, 0)" },
    delay: 200,
    config: { mass: 1, tension: 280, friction: 60 }
  });

  return (
    <animated.section
      id="education"
      className="bg-cyberBlack py-24 px-6 lg:px-20 w-full min-h-screen relative overflow-hidden"
      style={educationSpring}
    >
      <div className="absolute top-1/4 right-0 w-[30rem] h-[30rem] bg-neonPurple/5 rounded-full blur-[100px] pointer-events-none transform translate-x-1/2 -translate-y-1/2"></div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-mono tracking-widest text-neonPulse uppercase mb-4 font-bold text-neonPurple">Academic</h2>
          <h1 className="text-5xl md:text-7xl font-heading font-black text-textMain mb-6 uppercase tracking-tight">
            Education.
          </h1>
        </div>

        <div className="relative border-l-2 border-gray-800 md:ml-10">
          <div className="flex flex-col gap-8 md:pl-10">
            {trails.map((style, index) => (
              <SchoolCard
                key={schools[index].id}
                school={schools[index]}
                style={style}
              />
            ))}
          </div>
        </div>
      </div>
    </animated.section>
  );
}
