import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import Section from "./Section.jsx";
import Reveal from "./Reveal.jsx";
import { personalInfo } from "../data/portfolioData.js";

const CTA_GRADIENT = { background: "linear-gradient(to bottom, #2B2B2B, #101010)" };

export default function Contact() {
  return (
    <Section id="contact">
      <Reveal className="rounded-2xl border border-white/10 bg-white/10 p-8 text-center backdrop-blur-lg sm:p-14">
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-4xl">
          Let's build something intelligent.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
          Interested in AI, machine learning, automation, IoT, robotics, or intelligent
          systems? Let's connect.
        </p>

        <div className="mt-6 flex flex-col items-center gap-2 text-sm text-white/70 sm:flex-row sm:justify-center sm:gap-6">
          <span>{personalInfo.email}</span>
          <span className="hidden sm:inline" aria-hidden="true">
            •
          </span>
          <span>{personalInfo.phone}</span>
          <span className="hidden sm:inline" aria-hidden="true">
            •
          </span>
          <span>{personalInfo.location}</span>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
            style={CTA_GRADIENT}
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            Email Me
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/20"
          >
            <Github className="h-4 w-4" aria-hidden="true" />
            GitHub
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/20"
          >
            <Linkedin className="h-4 w-4" aria-hidden="true" />
            LinkedIn
          </a>
        </div>
      </Reveal>

      <p className="mt-10 text-center text-xs text-white/40">
        {personalInfo.name} — {personalInfo.role}
      </p>
    </Section>
  );
}
