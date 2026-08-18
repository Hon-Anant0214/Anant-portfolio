import React from "react";
import { Github } from "lucide-react";
import Section from "./Section.jsx";
import Reveal from "./Reveal.jsx";
import { projects } from "../data/portfolioData.js";

function ProjectCard({ project }) {
  return (
    <Reveal className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-lg transition-transform duration-300 hover:-translate-y-1 hover:bg-white/15 sm:p-8">
      {project.badge && (
        <span className="mb-3 inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white/80">
          {project.badge}
        </span>
      )}

      <h3 className="text-lg font-semibold text-white sm:text-xl">{project.title}</h3>

      <ul className="mt-4 flex flex-col gap-1.5 text-sm leading-relaxed text-white/70">
        {project.points.map((point) => (
          <li key={point} className="flex gap-2">
            <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-white/50" aria-hidden="true" />
            <span>{point}</span>
          </li>
        ))}
      </ul>

      {project.technologies.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/80"
            >
              {t}
            </span>
          ))}
        </div>
      )}

      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-white/20"
        >
          <Github className="h-4 w-4" aria-hidden="true" />
          View on GitHub
        </a>
      )}
    </Reveal>
  );
}

export default function Projects() {
  return (
    <Section id="projects" eyebrow="Selected Work" title="Projects">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </Section>
  );
}
