import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const MobileNavItem = ({ to, text, onClick }) => (
  <Link
    to={to}
    smooth={true}
    duration={500}
    className="block w-full py-4 text-center text-xl font-heading font-medium text-textMain hover:text-neonCyan transition-all duration-300 relative group"
    onClick={onClick}
  >
    <span className="relative z-10">{text}</span>
    <span className="absolute bottom-2 left-1/2 w-0 h-0.5 bg-neonCyan transition-all duration-300 group-hover:w-1/4 group-hover:-translate-x-1/2"></span>
  </Link>
);

const NavItem = ({ to, text }) => (
  <Link
    to={to}
    smooth={true}
    duration={500}
    className="px-4 py-2 text-sm font-mono tracking-wider uppercase text-textMuted hover:text-neonCyan cursor-pointer transition-colors duration-300 relative group"
  >
    {text}
    <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-neonCyan transition-all duration-300 group-hover:w-3/4 group-hover:-translate-x-1/2 shadow-neon"></span>
  </Link>
);

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { id: 1, link: "home", text: "Home" },
    { id: 2, link: "about", text: "About" },
    { id: 3, link: "projects", text: "Projects" },
    { id: 4, link: "skills", text: "Skills" },
    { id: 5, link: "experience", text: "Experience" },
    { id: 6, link: "contact-me", text: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
          ? 'backdrop-blur-xl bg-cyberBlack/80 border-b border-cyberGray shadow-lg'
          : 'bg-transparent'
        } px-4 lg:px-6 py-4`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3 relative z-50">
          <Link to="home" smooth={true} duration={500} className="cursor-pointer group flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-cyberGray border border-neonCyan/30 flex items-center justify-center group-hover:border-neonCyan transition-colors duration-300 group-hover:shadow-neon">
              <span className="font-heading font-black text-xl text-textMain tracking-tighter">AA<span className="text-neonCyan">.</span></span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-2">
          {links.map(({ id, link, text }) => (
            <li key={id}>
              <NavItem to={link} text={text} />
            </li>
          ))}
          <li className="ml-4">
            <a
              href="/Anas_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full border border-neonCyan text-neonCyan font-mono text-sm tracking-wider hover:bg-neonCyan/10 transition-all duration-300 shadow-neon"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile Navigation Toggle */}
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-2 z-50 text-textMain md:hidden p-2 rounded-full hover:bg-cyberGray transition-colors"
        >
          {nav ? <FaTimes size={24} className="text-neonCyan" /> : <FaBars size={24} />}
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`fixed inset-0 bg-cyberBlack/95 backdrop-blur-3xl transition-all duration-500 ease-in-out z-40 flex flex-col items-center justify-center ${nav ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
        >
          <ul className="w-full px-6 flex flex-col items-center gap-2">
            {links.map(({ id, link, text }) => (
              <li key={id} className="w-full">
                <MobileNavItem to={link} text={text} onClick={() => setNav(false)} />
              </li>
            ))}
            <li className="w-full mt-8">
              <a
                href="/Anas_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setNav(false)}
                className="block w-full max-w-xs mx-auto text-center px-8 py-4 rounded-full border-2 border-neonCyan text-neonCyan font-mono text-sm tracking-widest uppercase hover:bg-neonCyan/10 transition-colors shadow-neon"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
