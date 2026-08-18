import React from "react";
import { heroStats } from "../data/portfolioData.js";

const CTA_GRADIENT = { background: "linear-gradient(to bottom, #2B2B2B, #101010)" };

export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col" aria-label="Introduction">
      <div className="mt-auto flex flex-col gap-6 px-5 pb-8 sm:gap-8 sm:px-8 sm:pb-12 lg:flex-row lg:items-end lg:justify-between lg:px-12 lg:pb-16">
        <div className="max-w-xl">
          <h1 className="text-3xl font-semibold leading-[1.1] tracking-tight text-[#010101] sm:text-4xl lg:text-[3.5rem] lg:text-white">
            Building intelligent systems that turn ideas into reality
          </h1>

          <p className="mt-4 text-sm leading-relaxed text-[#010101]/70 sm:text-base lg:text-white/70">
            AI/ML Engineer in training with hands-on experience in machine learning, IoT,
            automation, AI-powered tools, and embedded systems.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center">
            <a
              href="#projects"
              className="rounded-full px-6 py-3 text-center text-sm font-medium text-white transition-opacity hover:opacity-90"
              style={CTA_GRADIENT}
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/30 bg-white/10 px-6 py-3 text-center text-sm font-medium text-[#010101] backdrop-blur-lg transition-colors hover:bg-white/20 lg:text-white"
            >
              Get in touch
            </a>
          </div>
        </div>

        <div className="flex w-full flex-col gap-4 sm:flex-row lg:w-auto lg:gap-5">
          {heroStats.map((stat) => (
            <div
              key={stat.value}
              className="flex w-full flex-col justify-between rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-lg sm:w-64 sm:p-6"
            >
              <div className="font-silkscreen text-3xl text-[#010101] sm:text-4xl lg:text-white">
                {stat.value}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[#010101]/70 sm:mt-4 lg:text-white/70">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
