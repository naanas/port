import React, { memo, useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GITHUB_URL, LINKEDIN_URL, PERPLEXITY_URL } from "../constants/index";
import { useSpring, animated, config } from "react-spring";
import { SiPerplexity } from "react-icons/si";

const Anchor = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="mx-2 text-darkDesert hover:text-goldDesert transition-colors duration-300"
    aria-label={`Link to ${href}`}
  >
    {children}
  </a>
);

const About = () => {
  // Fade-in effect
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: config.slow,
  });

  // Springy effect on image hover
  const [scale, setScale] = useState(1);
  const springProps = useSpring({
    transform: `scale(${scale})`,
    config: config.wobbly,
  });

  // Slide-up effect
  const slideUp = useSpring({
    transform: "translate3d(0,0px,0)",
    from: { transform: "translate3d(0,40px,0)" },
    delay: 200,
  });

  return (
    <animated.div
      style={fadeIn}
      id="about"
      className="container mx-auto flex flex-col items-center justify-center bg-lightDesert min-h-screen"
    >
      <animated.img
        style={{ ...springProps }}
        src="images/prof.png"
        alt="Sara"
        className="rounded-full w-64 h-64 border-4 border-darkDesert object-cover mb-8 mt-20"
        onMouseEnter={() => setScale(1.1)}
        onMouseLeave={() => setScale(1)}
      />
      <animated.div style={slideUp}>
        <h1 className="text-4xl font-bold text-darkDesert mb-4 text-center px-8">
          Annas Anuraga
        </h1>
        <p className="text-lg text-darkDesert mb-4 text-center px-8">
          I am a highly driven and perpetually curious individual with an unwavering passion for Information Technology, a field that has captivated my interest and shaped my career trajectory. My professional life is currently dedicated to my role as a Business Analyst, where I serve as a crucial conduit between diverse business stakeholders and the technical development teams. In this capacity, I am responsible for meticulously gathering and analyzing complex business requirements, translating them into clear, actionable functional specifications, and ensuring that the technological solutions developed truly align with strategic organizational goals. I thrive on problem-solving and optimizing processes, always seeking to identify efficiencies and drive impactful change through a data-driven approach.        </p>
        <p className="text-lg text-darkDesert mb-4 text-center px-8">
          Beyond my corporate responsibilities, my entrepreneurial spirit finds expression in my active freelance work as a frontend developer. My expertise lies primarily in the modern JavaScript ecosystem, specifically mastering React Native for crafting high-performance, intuitive mobile applications that deliver seamless user experiences across various platforms, and React.js for building dynamic, responsive, and visually appealing web interfaces. This hands-on development work allows me to not only stay abreast of the latest technological advancements but also to directly apply my creativity and technical prowess to bring innovative digital products to life for a diverse clientele.
        </p>
        <p className="text-lg text-darkDesert mb-4 text-center px-8">
          The synergy between my analytical role as a Business Analyst and my practical skills as a freelance developer provides me with a unique holistic perspective on the entire software development lifecycle, from initial conceptualization and strategic planning to intricate technical execution and user-centric design. I am constantly seeking opportunities to learn, grow, and contribute to the ever-evolving landscape of technology, striving to create solutions that are not only functional but also elegantly designed and truly valuable.{" "}
          {" "}
          --pure bliss!
        </p>

        <p className="text-lg text-darkDesert mb-4 text-center px-8">
          Let's collab!
        </p>
        <div className="flex justify-center items-center pb-8">
          <Anchor href={GITHUB_URL}>
            <FaGithub size={32} />
          </Anchor>
          <Anchor href={LINKEDIN_URL}>
            <FaLinkedin size={32} />
          </Anchor>
          {/* <Anchor href={PERPLEXITY_URL}>
            <SiPerplexity size={32} />
          </Anchor> */}
        </div>
        <div>
        </div>
      </animated.div>
    </animated.div>
  );
};

export default memo(About);
