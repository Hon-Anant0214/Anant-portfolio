import React from "react";
import Section from "./Section.jsx";
import Reveal from "./Reveal.jsx";
import { experience } from "../data/portfolioData.js";

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Experience">
      <div className="relative flex flex-col gap-6 border-l border-white/15 pl-6 sm:pl-10">
        {experience.map((exp) => (
          <Reveal key={exp.role} className="relative">
            <span
              className="absolute -left-[31px] top-2 h-3 w-3 rounded-full bg-white sm:-left-[43px]"
              aria-hidden="true"
            />
            <div className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-lg sm:p-8">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-base font-semibold text-white sm:text-lg">{exp.role}</h3>
                <span className="text-sm text-white/60">{exp.period}</span>
              </div>
              <p className="mt-1 text-sm text-white/60">{exp.company}</p>

              <ul className="mt-4 flex flex-col gap-1.5 text-sm leading-relaxed text-white/70">
                {exp.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-white/50" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
