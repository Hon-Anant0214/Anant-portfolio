import React from "react";
import Section from "./Section.jsx";
import Reveal from "./Reveal.jsx";
import { skillGroups } from "../data/portfolioData.js";

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Skills">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <Reveal
            key={group.title}
            className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-lg transition-colors hover:bg-white/15"
          >
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/90">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                >
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
