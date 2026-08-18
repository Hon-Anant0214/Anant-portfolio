import React from "react";
import Section from "./Section.jsx";
import Reveal from "./Reveal.jsx";
import { certifications } from "../data/portfolioData.js";

export default function Certifications() {
  return (
    <Section id="certificates" eyebrow="Certifications" title="Certificates">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {certifications.map((cert) => (
          <Reveal
            key={cert.title}
            className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-lg transition-colors hover:bg-white/15"
          >
            <h3 className="text-base font-semibold text-white">{cert.title}</h3>
            <p className="mt-1 text-sm text-white/60">Issued by {cert.issuer}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
