import React from "react";
import Reveal from "./Reveal.jsx";

export default function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <Reveal>
        {eyebrow && (
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-white/50">
            {eyebrow}
          </p>
        )}
        {title && (
          <h2 className="mb-10 text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:mb-14 lg:text-4xl">
            {title}
          </h2>
        )}
      </Reveal>
      {children}
    </section>
  );
}
