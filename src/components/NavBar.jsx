import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

const linkClasses = "block py-2 pr-4 pl-3 text-gray-700 hover:text-darkDesert font-medium transition-colors duration-300 lg:p-0 dark:text-gray-300 dark:hover:text-white relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-tealDesert after:transition-all hover:after:w-full";

const NavLink = ({ to, onClick, children }) => (
  <li>
    <Link to={to} onClick={onClick} className={linkClasses} aria-current="page">
      {children}
    </Link>
  </li>
);

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleOpen = useCallback(() => setIsOpen(prev => !prev), []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur-md bg-white/70 border-b border-gray-200/50 shadow-glass' : 'bg-transparent'} px-4 lg:px-6 py-4`}>
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center gap-2 group">
            {/* Text Logo instead of missing img */}
            <span className="self-center text-2xl font-heading font-bold text-darkDesert group-hover:text-tealDesert transition-colors">
              AA.
            </span>
          </Link>
          <div className="flex items-center lg:order-2">
            <button
              onClick={toggleOpen}
              type="button"
              className="inline-flex items-center p-2 text-sm rounded-lg lg:hidden hover:bg-gray-100/50 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-colors"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6 text-darkDesert" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          <div className={`${isOpen ? "block bg-white/95 backdrop-blur-md mt-4 p-4 rounded-2xl shadow-lg lg:bg-transparent lg:shadow-none lg:p-0 lg:mt-0" : "hidden"} justify-between items-center w-full lg:flex lg:w-auto lg:order-1 transition-all`}>
            <ul className="flex flex-col mt-4 font-body lg:flex-row lg:space-x-8 lg:mt-0 gap-4 lg:gap-0">
              <NavLink to="/" onClick={toggleOpen}>Home</NavLink>
              <NavLink to="/about" onClick={toggleOpen}>About</NavLink>
              <NavLink to="/projects" onClick={toggleOpen}>Projects</NavLink>
              <NavLink to="/skills" onClick={toggleOpen}>Skills</NavLink>
              <NavLink to="/experience" onClick={toggleOpen}>Experience</NavLink>
              <NavLink to="/education" onClick={toggleOpen}>Education</NavLink>
              <NavLink to="/contact" onClick={toggleOpen}>Contact</NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
