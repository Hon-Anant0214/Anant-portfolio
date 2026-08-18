import React from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import LogoMark from "./LogoMark.jsx";
import { navLinks, personalInfo } from "../data/portfolioData.js";

const CTA_GRADIENT = { background: "linear-gradient(to bottom, #2B2B2B, #101010)" };

export default function Navbar({ menuOpen, onToggleMenu }) {
  return (
    <div className="flex items-center justify-between px-5 py-5 sm:px-8 sm:py-6 lg:px-12">
      <a
        href="#"
        className="flex items-center gap-2 text-lg font-semibold text-[#010101] lg:text-white"
      >
        <LogoMark className="fill-current" />
        <span className="lowercase">{personalInfo.wordmark}</span>
      </a>

      <nav
        aria-label="Primary"
        className="hidden items-center gap-1 rounded-full bg-white/10 px-1.5 py-1.5 backdrop-blur-lg md:flex"
      >
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="flex items-center gap-1 rounded-full px-4 py-1.5 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white"
          >
            {link.label}
            {link.label === "Projects" && <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />}
          </a>
        ))}
      </nav>

      <div className="hidden md:flex">
        <a
          href="#contact"
          className="flex items-center self-stretch rounded-full px-5 text-sm font-medium text-white transition-opacity hover:opacity-90"
          style={CTA_GRADIENT}
        >
          Get in touch
        </a>
      </div>

      <button
        onClick={onToggleMenu}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
        className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-lg md:hidden"
      >
        <Menu
          aria-hidden="true"
          className={`absolute h-5 w-5 text-[#010101] transition-all duration-300 lg:text-white ${
            menuOpen ? "rotate-90 scale-0 opacity-0" : "visible"
          }`}
        />
        <X
          aria-hidden="true"
          className={`absolute h-5 w-5 text-[#010101] transition-all duration-300 lg:text-white ${
            menuOpen ? "visible" : "-rotate-90 scale-0 opacity-0"
          }`}
        />
      </button>
    </div>
  );
}
