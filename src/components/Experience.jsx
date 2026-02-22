import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import jobExperiences from "../constants/jobExperiences.json";
import nonDevExperiences from "../constants/nonDevExperience.json";

const TimelineCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: '#16181D', // cyberGray
      color: '#F3F4F6', // textMain
      boxShadow: '0 0 15px rgba(0, 240, 255, 0.1)', // subtle neon shadow
      borderRadius: '1rem',
      padding: '2rem',
      border: '1px solid #1F2937' // gray-800
    }}
    contentArrowStyle={{ borderRight: '7px solid #16181D' }}
    iconStyle={{
      background: '#0A0A0B', // cyberBlack 
      color: '#F3F4F6',
      boxShadow: '0 0 0 4px #00F0FF, inset 0 2px 0 rgba(0,0,0,0.08), 0 0 15px rgba(0, 240, 255, 0.5)' // neonCyan outline & glow
    }}
    icon={
      <div className="flex items-center justify-center w-full h-full rounded-full overflow-hidden bg-cyberBlack p-1">
        <img
          src={experience.img}
          alt={experience.title}
          className="h-full w-full rounded-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
        />
      </div>
    }
  >
    <div className="flex flex-col gap-1 mb-4">
      <h3 className="text-2xl font-bold font-heading text-textMain leading-tight">{experience.title}</h3>
      <h4 className="text-lg font-medium text-neonCyan flex justify-between items-center sm:flex-row flex-col sm:items-start gap-1 sm:gap-0">
        <span>{experience.company}</span>
        <span className="text-sm font-mono text-textMuted bg-cyberBlack border border-gray-800 px-3 py-1 rounded-full">{experience.timePeriod}</span>
      </h4>
    </div>

    {experience.location && (
      <p className="text-textMuted text-sm mb-4 font-mono uppercase tracking-wider !mt-0 flex items-center gap-1">
        <svg className="w-4 h-4 text-neonPurple" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
        {experience.location}
      </p>
    )}

    {experience.description && (
      <p className="text-textMuted mb-6 text-base leading-relaxed font-body whitespace-pre-line !mt-0 border-l-2 border-neonCyan/30 pl-4">{experience.description}</p>
    )}

    <div className="flex flex-col gap-3 !mt-0">
      {experience.project && (
        <p className="text-sm text-textMain bg-cyberBlack p-3 rounded-lg border border-gray-800 flex flex-col">
          <span className="font-bold text-neonPurple mb-1 uppercase font-mono text-xs tracking-widest">Notable Project</span>
          <span className="font-body text-textMuted">{experience.project}</span>
        </p>
      )}
      {experience.skills && (
        <div className="flex flex-wrap gap-2 mt-2">
          {experience.skills.split(',').map((skill, idx) => (
            <span key={idx} className="bg-neonCyan/10 border border-neonCyan/20 text-neonCyan text-xs font-mono px-3 py-1 rounded-full font-medium shadow-[0_0_8px_rgba(0,240,255,0.1)]">
              {skill.trim()}
            </span>
          ))}
        </div>
      )}
    </div>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <div
      id="experience"
      className="bg-cyberBlack py-24 px-6 lg:px-20 min-h-screen relative overflow-hidden"
    >
      {/* Background glow lines */}
      <div className="absolute top-0 left-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-neonCyan/20 to-transparent transform -translate-x-1/2 pointer-events-none"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-mono tracking-widest text-neonCyan uppercase mb-4 font-bold">Journey</h2>
          <h1 className="text-5xl md:text-7xl font-heading font-black text-textMain mb-6 uppercase">
            Exp<span className="text-neonCyan">erience.</span>
          </h1>
        </div>

        {/* Change lineColor to a dark gray */}
        <VerticalTimeline lineColor="#1F2937">
          {jobExperiences.map((experience, index) => (
            <TimelineCard key={`job-${index}`} experience={experience} />
          ))}
        </VerticalTimeline>

        <div className="text-center mt-32 mb-16">
          <h2 className="text-sm font-mono tracking-widest text-neonPurple uppercase mb-4 font-bold">Other Roles</h2>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-textMain mb-6">
            Non-Dev <span className="text-neonPurple">Experience</span>
          </h1>
        </div>

        <VerticalTimeline lineColor="#1F2937">
          {nonDevExperiences.map((experience) => (
            <TimelineCard key={`nondev-${experience.id}`} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;