"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about",      label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#education",  label: "Education" },
  { href: "#skills",     label: "Skills" },
  { href: "#projects",   label: "Projects" },
  { href: "#contact",    label: "Contact" },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
      style={{
        fontFamily: "'DM Sans', sans-serif",
        backgroundColor: scrolled ? "rgba(255,255,255,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "0.5px solid rgba(0,0,0,0.08)" : "none",
      }}
    >
      <div className="max-w-4xl mx-auto px-8 h-16 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#hero"
          className="font-bold text-gray-900 tracking-tight"
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "13px",
            letterSpacing: "0.01em",
          }}
        >
          EJ
        </a>

        {/* Desktop links */}
        <div
          className="hidden md:flex items-center gap-8"
          style={{ fontFamily: "'DM Mono', monospace", fontSize: "12px" }}
        >
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-gray-400 hover:text-gray-900 transition-colors duration-200 tracking-wide uppercase"
              style={{ letterSpacing: "0.1em" }}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-gray-600 hover:text-gray-900 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: isOpen ? "400px" : "0px",
          backgroundColor: "rgba(255,255,255,0.95)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div className="max-w-4xl mx-auto px-8 py-6 flex flex-col gap-5 border-t border-gray-100">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setIsOpen(false)}
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors duration-200 uppercase tracking-widest"
              style={{ fontFamily: "'DM Mono', monospace", fontSize: "12px" }}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;