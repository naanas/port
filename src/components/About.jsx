import React, { memo, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GITHUB_URL, LINKEDIN_URL } from "../constants/index";
import { useSpring, animated, config } from "react-spring";

const Anchor = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center justify-center w-12 h-12 rounded-full bg-cyberGray text-textMuted border border-gray-800 shadow-sm hover:bg-neonCyan hover:text-cyberBlack hover:border-neonCyan transition-all duration-300 hover:shadow-neon"
    aria-label={`Link to ${href}`}
  >
    {children}
  </a>
);

const About = () => {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: config.slow,
  });

  const [scale, setScale] = useState(1);
  const springProps = useSpring({
    transform: `scale(${scale})`,
    config: config.wobbly,
  });

  const slideUp = useSpring({
    transform: "translate3d(0,0px,0)",
    from: { transform: "translate3d(0,40px,0)" },
    delay: 200,
  });

  return (
    <animated.div
      style={fadeIn}
      id="about"
      className="bg-cyberBlack min-h-screen py-24 px-6 lg:px-20 relative overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Image Section */}
          <animated.div
            style={slideUp}
            className="w-full lg:w-1/3 flex justify-center relative"
          >
            <div className="absolute inset-0 bg-neonCyan/10 rounded-full blur-[80px] -z-10 transform scale-150 mix-blend-screen"></div>
            <div className="relative group">
              <div className="absolute inset-0 bg-neonPurple/20 rounded-[2rem] transform rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
              <div className="absolute inset-0 bg-neonCyan/20 rounded-[2rem] transform -rotate-6 group-hover:-rotate-12 transition-transform duration-500"></div>
              <animated.img
                style={{ ...springProps }}
                src="/images/prof.png"
                alt="Annas Anuraga"
                className="relative rounded-[2rem] w-64 h-64 md:w-80 md:h-80 object-cover shadow-2xl border-2 border-cyberGray group-hover:border-neonCyan grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                onMouseEnter={() => setScale(1.05)}
                onMouseLeave={() => setScale(1)}
              />
            </div>
          </animated.div>

          {/* Text Content Section */}
          <animated.div style={slideUp} className="w-full lg:w-2/3 flex flex-col items-start">
            <h2 className="text-sm font-mono tracking-widest text-neonCyan uppercase mb-4 font-bold">About Me</h2>
            <h1 className="text-4xl md:text-6xl font-heading font-black text-textMain mb-8 leading-tight">
              Bridging <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonCyan to-neonPurple">Business Logic</span> & <span className="italic font-light">Technical Excellence</span>
            </h1>

            <div className="space-y-6 text-textMuted font-body text-lg leading-relaxed max-w-3xl">
              <p>
                I am a highly driven and perpetually curious individual with an unwavering passion for Information Technology. Currently, I serve as a Business Analyst, acting as a crucial conduit between diverse business stakeholders and technical development teams.
              </p>
              <p>
                Beyond corporate responsibilities, my entrepreneurial spirit thrives in freelance frontend development. My expertise lies in the modern JavaScript ecosystem, specifically crafting high-performance React Native mobile apps and dynamic React.js web interfaces.
              </p>
              <p className="font-medium text-textMain border-l-2 border-neonCyan pl-4 bg-cyberGray p-4 rounded-r-lg">
                The synergy between my analytical role and practical dev skills provides me with a unique holistic perspective on the software development lifecycle. I strive to create solutions that are not only functional but elegantly designed.
              </p>
            </div>

            <div className="mt-12 flex items-center gap-8">
              <div className="flex gap-4">
                <Anchor href={GITHUB_URL}>
                  <FaGithub size={20} />
                </Anchor>
                <Anchor href={LINKEDIN_URL}>
                  <FaLinkedin size={20} />
                </Anchor>
              </div>
              <p className="text-gray-500 font-mono text-sm uppercase tracking-wider">Let's Connect</p>
            </div>
          </animated.div>

        </div>
      </div>
    </animated.div>
  );
};

export default memo(About);
