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
      background: '#fff',
      color: '#1C1C1C',
      boxShadow: '0 10px 30px -10px rgba(0,0,0,0.1)',
      borderRadius: '1rem',
      padding: '2rem',
      border: 'none'
    }}
    contentArrowStyle={{ borderRight: '7px solid  #fff' }}
    iconStyle={{ background: '#fff', color: '#fff', boxShadow: '0 0 0 4px #0D9B8C, inset 0 2px 0 rgba(0,0,0,0.08), 0 3px 0 4px rgba(0,0,0,0.05)' }}
    icon={
      <div className="flex items-center justify-center w-full h-full rounded-full overflow-hidden bg-white p-1">
        <img
          src={experience.img}
          alt={experience.title}
          className="h-full w-full rounded-full object-cover"
        />
      </div>
    }
  >
    <div className="flex flex-col gap-1 mb-4">
      <h3 className="text-2xl font-bold font-heading text-darkDesert leading-tight">{experience.title}</h3>
      <h4 className="text-lg font-medium text-tealDesert flex justify-between items-center sm:flex-row flex-col sm:items-start gap-1 sm:gap-0">
        <span>{experience.company}</span>
        <span className="text-sm font-mono text-gray-400 bg-gray-50 px-3 py-1 rounded-full">{experience.timePeriod}</span>
      </h4>
    </div>

    {experience.location && (
      <p className="text-gray-500 text-sm mb-4 font-mono uppercase tracking-wider !mt-0 flex items-center gap-1">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
        {experience.location}
      </p>
    )}

    {experience.description && (
      <p className="text-gray-600 mb-6 text-base leading-relaxed font-body whitespace-pre-line !mt-0 border-l-2 border-gray-100 pl-4">{experience.description}</p>
    )}

    <div className="flex flex-col gap-3 !mt-0">
      {experience.project && (
        <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded-lg border border-gray-100 flex flex-col">
          <span className="font-bold text-darkDesert mb-1 uppercase font-mono text-xs tracking-widest">Notable Project</span>
          <span className="font-body">{experience.project}</span>
        </p>
      )}
      {experience.skills && (
        <div className="flex flex-wrap gap-2 mt-2">
          {experience.skills.split(',').map((skill, idx) => (
            <span key={idx} className="bg-tealDesert/10 text-tealDesert text-xs font-mono px-3 py-1 rounded-full font-medium">
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
      className="bg-white py-24 px-6 lg:px-20 min-h-screen relative"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-sm font-mono tracking-widest text-tealDesert uppercase mb-4 font-bold">Journey</h2>
          <h1 className="text-5xl md:text-7xl font-heading font-black text-darkDesert mb-6 uppercase">
            Experience.
          </h1>
        </div>

        <VerticalTimeline lineColor="#e5e7eb">
          {jobExperiences.map((experience, index) => (
            <TimelineCard key={`job-${index}`} experience={experience} />
          ))}
        </VerticalTimeline>

        <div className="text-center mt-24 mb-16">
          <h2 className="text-sm font-mono tracking-widest text-goldDesert uppercase mb-4 font-bold">Other Roles</h2>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-darkDesert mb-6">
            Non-Dev Experience
          </h1>
        </div>

        <VerticalTimeline lineColor="#e5e7eb">
          {nonDevExperiences.map((experience) => (
            <TimelineCard key={`nondev-${experience.id}`} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;