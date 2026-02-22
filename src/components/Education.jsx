import React from "react";
import schools from "../constants/schools.json";
import { useSpring, animated, useTrail } from "react-spring";

const SchoolCard = ({ school, style }) => (
  <animated.div style={style} className="w-full relative group">
    <div className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col md:flex-row items-center md:items-start gap-8 transform hover:-translate-y-2">
      {/* Visual Indicator / Timeline dot effect */}
      <div className="hidden md:block absolute -left-12 top-14 w-4 h-4 rounded-full bg-tealDesert border-4 border-white shadow-sm"></div>

      <div className="w-24 h-24 flex-shrink-0 bg-gray-50 rounded-2xl p-4 flex items-center justify-center border border-gray-100 group-hover:border-tealDesert transition-colors">
        <img
          src={school.img}
          alt={school.university}
          className="w-full h-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-500"
        />
      </div>

      <div className="flex-1 text-center md:text-left">
        <h3 className="text-2xl font-bold font-heading text-darkDesert mb-2">{school.degree}</h3>
        <p className="text-lg text-gray-600 font-body mb-2">{school.university}</p>
        <div className="inline-block bg-lightDesert px-4 py-1.5 rounded-full mt-2">
          <p className="text-sm font-mono font-medium text-goldDesert uppercase tracking-wider">{school.timePeriod}</p>
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
      className="bg-lightDesert py-24 px-6 lg:px-20 w-full min-h-screen relative"
      style={educationSpring}
    >
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-sm font-mono tracking-widest text-tealDesert uppercase mb-4 font-bold">Academic</h2>
          <h1 className="text-5xl md:text-7xl font-heading font-black text-darkDesert mb-6 uppercase">
            Education.
          </h1>
        </div>

        <div className="relative border-l-2 border-gray-200/50 md:ml-10">
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
