import { useTrail, animated } from "react-spring";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaNpm,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiVisualstudiocode,
  SiMongodb,
  SiTailwindcss,
  SiMui,
  SiTypescript,
  SiJavascript,
  SiYarn,
  SiVite,
  SiMysql,
} from "react-icons/si";
import { DiGithubBadge } from "react-icons/di";

const skills = [
  { id: "html", name: "HTML5", Component: FaHtml5, color: "hover:text-[#E34F26]" },
  { id: "css", name: "CSS3", Component: FaCss3Alt, color: "hover:text-[#1572B6]" },
  { id: "javascript", name: "JavaScript", Component: SiJavascript, color: "hover:text-[#F7DF1E]" },
  { id: "typescript", name: "TypeScript", Component: SiTypescript, color: "hover:text-[#3178C6]" },
  { id: "react", name: "React", Component: FaReact, color: "hover:text-[#61DAFB]" },
  { id: "tailwind", name: "Tailwind", Component: SiTailwindcss, color: "hover:text-[#06B6D4]" },
  { id: "mui", name: "Material UI", Component: SiMui, color: "hover:text-[#007FFF]" },
  { id: "bootstrap", name: "Bootstrap", Component: FaBootstrap, color: "hover:text-[#7952B3]" },
  { id: "node", name: "Node.js", Component: FaNodeJs, color: "hover:text-[#339933]" },
  { id: "sql", name: "MySQL", Component: SiMysql, color: "hover:text-[#4479A1]" },
  { id: "mongodb", name: "MongoDB", Component: SiMongodb, color: "hover:text-[#47A248]" },
  { id: "vite", name: "Vite", Component: SiVite, color: "hover:text-[#646CFF]" },
  { id: "npm", name: "NPM", Component: FaNpm, color: "hover:text-[#CB3837]" },
  { id: "yarn", name: "Yarn", Component: SiYarn, color: "hover:text-[#2C8EBB]" },
  { id: "vscode", name: "VS Code", Component: SiVisualstudiocode, color: "hover:text-[#007ACC]" },
  { id: "github", name: "GitHub", Component: DiGithubBadge, color: "hover:text-[#181717]" },
];

export default function Skills() {
  const trail = useTrail(skills.length, {
    from: { transform: "translate3d(0, 40px, 0)", opacity: 0 },
    to: { transform: "translate3d(0, 0px, 0)", opacity: 1 },
    config: { mass: 1, tension: 280, friction: 60 },
  });

  return (
    <div
      id="skills"
      className="bg-cyberBlack py-24 px-6 lg:px-20 min-h-screen flex items-center justify-center relative border-t border-gray-900"
    >
      <div className="absolute top-1/2 left-1/2 w-full max-w-2xl h-[20rem] bg-neonCyan/5 rounded-full blur-[120px] pointer-events-none transform -translate-x-1/2 -translate-y-1/2 mix-blend-screen"></div>

      <div className="container mx-auto max-w-6xl w-full z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-mono tracking-widest text-neonCyan uppercase mb-4 font-bold">Toolkit</h2>
          <h1 className="text-5xl md:text-7xl font-heading font-black text-textMain mb-6 uppercase">
            Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonCyan to-neonPurple lowercase">Stack.</span>
          </h1>
          <p className="text-textMuted font-body max-w-2xl mx-auto">
            Tools and technologies I use to bring digital ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 justify-items-center">
          {trail.map((props, index) => {
            const skill = skills[index];
            const { Component } = skill;
            return (
              <animated.div
                style={props}
                className="w-full aspect-square bg-cyberGray rounded-2xl border border-gray-800 shadow-sm flex flex-col items-center justify-center transform hover:-translate-y-2 hover:border-neonCyan transition-all duration-300 group relative overflow-hidden"
                key={skill.id}
              >
                <div className="absolute inset-0 bg-neonCyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className={`text-4xl text-gray-600 transition-colors duration-300 relative z-10 group-hover:drop-shadow-[0_0_8px_currentColor] ${skill.color}`}>
                  <Component />
                </div>
                <span className="mt-3 text-xs font-mono font-medium text-textMuted opacity-0 group-hover:opacity-100 transition-opacity duration-300 relative z-10">
                  {skill.name}
                </span>
              </animated.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
