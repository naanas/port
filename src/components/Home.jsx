import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GITHUB_URL, LINKEDIN_URL, HERO_IMAGE } from "../constants/index";
import { useSpring, animated, config } from "react-spring";

const SocialIcon = ({ href, ariaLabel, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={ariaLabel}
    className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-cyberGray border border-neonCyan/20 text-textMuted hover:text-neonCyan hover:border-neonCyan transition-all duration-300 shadow-sm hover:shadow-neon"
  >
    <div className="absolute inset-0 rounded-full bg-neonCyan/5 scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></div>
    <span className="relative z-10">{children}</span>
  </a>
);

export default function Home() {
  const textSpring = useSpring({
    from: { opacity: 0, transform: "translate3d(-40px, 0, 0)" },
    to: { opacity: 1, transform: "translate3d(0, 0px, 0)" },
    delay: 100,
    config: { tension: 280, friction: 60 },
  });

  const logoSpring = useSpring({
    from: { opacity: 0, transform: "translate3d(0, 40px, 0)" },
    to: { opacity: 1, transform: "translate3d(0, 0px, 0)" },
    delay: 300,
    config: { tension: 280, friction: 60 },
  });

  return (
    <section id="home" className="relative min-h-screen bg-cyberBlack flex items-center justify-center overflow-hidden pt-20">

      {/* Abstract Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-neonPurple/10 rounded-full blur-[120px] pointer-events-none transform -translate-x-1/2 -translate-y-1/2 mix-blend-screen"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-neonCyan/10 rounded-full blur-[100px] pointer-events-none transform translate-x-1/2 translate-y-1/2 mix-blend-screen"></div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10 max-w-7xl w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16 lg:gap-8">

          {/* Main Text Content */}
          <animated.div style={textSpring} className="w-full lg:w-3/5 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-neonCyan/30 bg-neonCyan/5 mb-8">
              <span className="w-2 h-2 rounded-full bg-neonCyan animate-pulse"></span>
              <span className="text-neonCyan font-mono text-xs uppercase tracking-widest font-bold">Open to work</span>
            </div>

            <h2 className="text-xl md:text-3xl font-mono text-textMuted mb-4">
              Hello, I'm <span className="text-textMain font-bold">Annas</span>.
            </h2>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black text-textMain mb-8 leading-[1.1] tracking-tight">
              Crafting <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonCyan to-neonPurple filter drop-shadow-[0_0_15px_rgba(0,240,255,0.4)]">Digital</span> <br /> Experiences.
            </h1>

            <p className="text-lg md:text-xl text-textMuted font-body max-w-2xl mb-12 leading-relaxed">
              Business Analyst & Frontend Developer specializing in translating complex requirements into elegant, high-performance web applications.
            </p>

            {/* CTA & Socials */}
            <div className="flex flex-col sm:flex-row items-center gap-6 lg:gap-8">
              <a
                href="#projects"
                className="group relative cursor-pointer font-mono font-medium"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-neonCyan to-neonPurple rounded-full blur opacity-40 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative bg-cyberBlack text-textMain px-8 py-4 rounded-full border border-gray-800 leading-none flex items-center gap-3 uppercase tracking-widest text-sm hover:bg-cyberGray transition-colors">
                  View Work
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <SocialIcon href={GITHUB_URL} ariaLabel="GitHub Profile">
                  <FaGithub size={22} />
                </SocialIcon>
                <SocialIcon href={LINKEDIN_URL} ariaLabel="LinkedIn Profile">
                  <FaLinkedin size={22} />
                </SocialIcon>
              </div>
            </div>
          </animated.div>

          {/* Abstract Hero Image / Object */}
          <animated.div style={logoSpring} className="w-full lg:w-2/5 flex justify-center lg:justify-end items-center relative">
            {/* 
                 For a cyber theme, abstract geometric shapes or tech-themed visuals work better
                 than a standard portrait, but keeping the requested image here wrapped in a tech frame.
               */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 xl:w-96 xl:h-96">
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full border border-neonCyan/20 animate-[spin_10s_linear_infinite]"></div>
              <div className="absolute inset-4 rounded-full border border-neonPurple/20 animate-[spin_15s_linear_infinite_reverse]"></div>
              <div className="absolute inset-8 rounded-full border border-gray-800 border-dashed animate-[spin_20s_linear_infinite]"></div>

              {/* Actually image container */}
              <div className="absolute inset-12 rounded-full overflow-hidden border-2 border-cyberGray bg-cyberBlack flex items-center justify-center p-2 shadow-neon">
                <img
                  src={HERO_IMAGE}
                  alt="Hero"
                  className="w-full h-full object-cover rounded-full mix-blend-luminosity hover:mix-blend-normal opacity-80 hover:opacity-100 transition-all duration-500"
                />
              </div>
            </div>
          </animated.div>

        </div>
      </div>
    </section>
  );
}
