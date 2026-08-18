import React from "react";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import Section from "./Section.jsx";
import Reveal from "./Reveal.jsx";
import { careerObjective, aboutTags, personalInfo } from "../data/portfolioData.js";

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="About Me">
      <Reveal className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-lg sm:p-10">
        <p className="max-w-3xl text-base leading-relaxed text-white/80 sm:text-lg">
          {careerObjective}
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {aboutTags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 border-t border-white/10 pt-8 text-sm text-white/70 sm:grid-cols-2">
          <div className="flex items-center gap-3">
            <Mail className="h-4 w-4 text-white/50" aria-hidden="true" />
            <a href={`mailto:${personalInfo.email}`} className="hover:text-white">
              {personalInfo.email}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="h-4 w-4 text-white/50" aria-hidden="true" />
            <span>{personalInfo.phone}</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="h-4 w-4 text-white/50" aria-hidden="true" />
            <span>{personalInfo.location}</span>
          </div>
          <div className="flex items-center gap-3">
            <Github className="h-4 w-4 text-white/50" aria-hidden="true" />
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              {personalInfo.githubLabel}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Linkedin className="h-4 w-4 text-white/50" aria-hidden="true" />
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              {personalInfo.linkedinLabel}
            </a>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
