import React from "react"; // Removed useState as modal is removed
// Removed Modal and FaTimesCircle imports as they are no longer used
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import jobExperiences from "../constants/jobExperiences.json";
import nonDevExperiences from "../constants/nonDevExperience.json";

const JobExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    icon={
      <img
        src={experience.img}
        alt={experience.title}
        className="h-full w-full rounded-full block"
      />
    }
    contentStyle={{ position: "relative" }}
    date={<span className="text-darkDesert">{experience.timePeriod}</span>}
  >
    <h3 className="text-2xl font-bold text-darkDesert">{experience.title}</h3>
    <p className="text-xl text-darkDesert italic mb-2">{experience.company}</p>
    {experience.location && (
      <p className="text-darkDesert text-sm mb-2">{experience.location}</p>
    )}
    {experience.description && (
      <p className="text-darkDesert mb-2 text-justify whitespace-pre-line">{experience.description}</p>
    )}
    {experience.project && (
      <p className="text-darkDesert mb-2 text-sm">
        <span className="font-bold">Project:</span> {experience.project}
      </p>
    )}
    {experience.skills && (
      <p className="text-darkDesert text-sm">
        <span className="font-bold">Skills:</span> {experience.skills}
      </p>
    )}
  </VerticalTimelineElement>
);

const NonDevExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    icon={
      <img
        src={experience.img}
        alt={experience.title}
        className="h-full w-full rounded-full block"
      />
    }
    contentStyle={{ position: "relative" }}
    date={<span className="text-darkDesert">{experience.timePeriod}</span>}
  >
    <h3 className="text-2xl font-bold text-darkDesert">{experience.title}</h3>
    <p className="text-xl text-darkDesert italic mb-2">{experience.company}</p>
    {experience.location && (
      <p className="text-darkDesert text-sm mb-2">{experience.location}</p>
    )}
    {experience.description && (
      <p className="text-darkDesert mb-2 text-justify whitespace-pre-line">{experience.description}</p>
    )}
    {experience.project && (
      <p className="text-darkDesert mb-2 text-sm">
        <span className="font-bold">Project:</span> {experience.project}
      </p>
    )}
    {experience.skills && (
      <p className="text-darkDesert text-sm">
        <span className="font-bold">Skills:</span> {experience.skills}
      </p>
    )}
  </VerticalTimelineElement>
);

const Experience = () => {
  // Removed modalContent state as the modal is no longer used
  return (
    <div
      id="experience"
      className="bg-lightDesert p-8 rounded-lg shadow-lg w-full mx-auto mt-12"
    >
      <h2 className="text-4xl font-bold text-darkDesert mb-4 text-center">
       Developer Experience
      </h2>
      <VerticalTimeline>
        {jobExperiences.map((experience, index) => (
          <JobExperienceCard
          key={index}
          experience={experience}
          // Removed onClick handler as there's no modal
          />
        ))}
      </VerticalTimeline>

      <h2 className="text-4xl font-bold text-darkDesert mt-6 mb-4 text-center">
        Non Dev Experience
      </h2>
      <VerticalTimeline>
        {nonDevExperiences.map((experience) => (
          <NonDevExperienceCard
            key={experience.id}
            experience={experience}
            // Removed onClick handler as there's no modal
          />
        ))}
      </VerticalTimeline>

      {/* The Modal component and its related logic have been removed as the image shows all details expanded inline. */}
    </div>
  );
};

export default Experience;