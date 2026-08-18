import React, { useCallback, useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import MobileMenu from "./components/MobileMenu.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Education from "./components/Education.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";
import Certifications from "./components/Certifications.jsx";
import Achievements from "./components/Achievements.jsx";
import Contact from "./components/Contact.jsx";

const VIDEO_SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260803_192301_9231ed6b-c55c-4a48-909c-4ebe11cf2e11.mp4";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const toggleMenu = useCallback(() => setMenuOpen((v) => !v), []);

  return (
    <div className="relative min-h-screen">
      {/* Website-wide fixed background video. Never scrolls, never restarts. */}
      <video
        className="fixed inset-0 -z-10 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        src={VIDEO_SRC}
      />

      {/* Scrollable content layer, always above the fixed video */}
      <div className="relative z-10">
        <div className="sticky top-0 z-30">
          <Navbar menuOpen={menuOpen} onToggleMenu={toggleMenu} />
        </div>

        <main>
          <Hero />
          <About />
          <Education />
          <Skills />
          <Projects />
          <Experience />
          <Certifications />
          <Achievements />
          <Contact />
        </main>
      </div>

      <MobileMenu open={menuOpen} onClose={closeMenu} />
    </div>
  );
}
