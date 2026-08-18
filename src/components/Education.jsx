import React from "react";
import Section from "./Section.jsx";
import Reveal from "./Reveal.jsx";
import { education } from "../data/portfolioData.js";

export default function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Education">
      <div className="flex flex-col gap-4">
        {education.map((item) => (
          <Reveal
            key={item.degree}
            className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-lg sm:flex-row sm:items-center sm:justify-between sm:p-8"
          >
            <div>
              <h3 className="text-base font-semibold text-white sm:text-lg">{item.degree}</h3>
              <p className="mt-1 text-sm text-white/60">{item.institution}</p>
            </div>
            <div className="flex flex-col text-sm text-white/70 sm:items-end">
              <span>{item.period}</span>
              <span className="text-white/50">{item.detail}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
