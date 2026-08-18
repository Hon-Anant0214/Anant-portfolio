import React from "react";
import { ChevronDown } from "lucide-react";
import { navLinks } from "../data/portfolioData.js";

const CTA_GRADIENT = { background: "linear-gradient(to bottom, #2B2B2B, #101010)" };

export default function MobileMenu({ open, onClose }) {
  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-black/80 backdrop-blur-md transition-opacity duration-300 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`fixed right-0 top-0 z-40 h-full w-72 bg-black/90 backdrop-blur-xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-2 px-6 pt-24">
          {navLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              onClick={onClose}
              className="flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium text-white/80 transition-all hover:bg-white/10 hover:text-white"
              style={{
                transitionProperty: "opacity, transform, background-color, color",
                transitionDuration: open ? "400ms" : "0ms",
                transitionDelay: open ? `${(index + 1) * 60}ms` : "0ms",
                opacity: open ? 1 : 0,
                transform: open ? "translateX(0)" : "translateX(24px)",
              }}
            >
              {link.label}
              {link.label === "Projects" && <ChevronDown className="h-4 w-4" aria-hidden="true" />}
            </a>
          ))}

          <a
            href="#contact"
            onClick={onClose}
            className="mt-4 rounded-full px-5 py-3 text-center text-sm font-medium text-white transition-all hover:opacity-90"
            style={{
              ...CTA_GRADIENT,
              transitionProperty: "opacity, transform, background-color",
              transitionDuration: "400ms",
              transitionDelay: open ? "300ms" : "0ms",
              opacity: open ? 1 : 0,
              transform: open ? "translateY(0)" : "translateY(16px)",
            }}
          >
            Get in touch
          </a>
        </div>
      </div>
    </>
  );
}
