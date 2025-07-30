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
    <div
      id="home"
      className="container mx-auto bg-lightDesert flex flex-col items-center justify-center min-h-screen"
    >
      <animated.header
        style={logoSpring}
        className="text-center mb-4"
      >
        <h1 className="text-5xl font-bold text-darkDesert mb-2">Hi, I am Annas Anuraga.</h1>
        <h2 className="text-2xl font-semibold text-tealDesert mt-2 mb-4">A IT Business Analyst & Frontend Frelancer.</h2>
        <p className="text-xl text-gray-700">At present, I am striving to continuously grow and make a meaningful contribution to technology industry. I believe that technology is a driver of change, and I am enthusiastic about continually learning, innovating, and collaborating with fellow professionals to tackle complex challenges and create sustainable solutions.
</p>
      </animated.header>

      <animated.div style={iconSpring} className="flex flex-col mt-2 space-x-6">
        <div className="flex mt-2 space-x-6">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={GITHUB_URL}
            className="text-darkDesert hover:text-goldDesert transition-colors duration-300"
          >
            <FaGithub className="w-10 h-10" />
            <span className="sr-only">GitHub account</span>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={LINKEDIN_URL}
            className="text-darkDesert hover:text-goldDesert transition-colors duration-300"
          >
            <FaLinkedin className="w-10 h-10" />
            <span className="sr-only">LinkedIn account</span>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={RESUME_URL}
            className="text-darkDesert hover:text-goldDesert transition-colors duration-300"
          >
            <FaFileAlt className="w-10 h-10" />
            <span className="sr-only">Resume</span>
          </a>
        </div>
      </animated.div>
    </div>
  );
}