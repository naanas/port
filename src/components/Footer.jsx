import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiPerplexity } from "react-icons/si";
import {
  GITHUB_URL,
  LINKEDIN_URL,
  PERSONAL_WEBSITE_URL,
  CURRENT_YEAR,
  PERPLEXITY_URL,
} from "../constants/index";

export default function Footer() {
  return (
    <footer className="bg-cyberBlack border-t border-gray-900 relative z-20">
      <div className="flex flex-col items-center justify-center py-6 px-4 sm:flex-row sm:justify-between sm:px-6">
        <span className="text-sm font-mono text-textMuted sm:text-center">
          © {CURRENT_YEAR}{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={PERSONAL_WEBSITE_URL}
            className="hover:text-neonCyan transition-colors duration-300 tracking-wider"
          >
            Annas Anuraga
          </a>
        </span>
        <div className="flex mt-4 sm:mt-0 space-x-6">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={GITHUB_URL}
            className="text-textMuted hover:text-neonCyan transition-colors duration-300"
          >
            <FaGithub className="w-5 h-5" />
            <span className="sr-only">GitHub account</span>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={LINKEDIN_URL}
            className="text-textMuted hover:text-neonCyan transition-colors duration-300"
          >
            <FaLinkedin className="w-5 h-5" />
            <span className="sr-only">LinkedIn account</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
