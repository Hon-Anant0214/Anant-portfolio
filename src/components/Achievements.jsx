import React from "react";
import Section from "./Section.jsx";
import Reveal from "./Reveal.jsx";
import { achievements } from "../data/portfolioData.js";

export default function Achievements() {
  return (
    <Section id="achievements" eyebrow="Recognition" title="Achievements">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {achievements.map((a) => (
          <Reveal
            key={a.title}
            className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-lg transition-colors hover:bg-white/15"
          >
            <h3 className="text-base font-semibold text-white">{a.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/70">{a.description}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
