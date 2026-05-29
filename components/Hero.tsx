"use client";

import Badge from "./Badge";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-16 relative overflow-hidden"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Large faded name watermark */}
      {/* <div
        className="absolute right-0 top-1/2 -translate-y-1/2 text-[12vw] font-bold text-gray-100
                   select-none pointer-events-none leading-none tracking-tight hidden md:block"
        style={{ letterSpacing: "0.2em" }}
        aria-hidden="true"
      >
        EJ
      </div> */}

      <div className="max-w-4xl mx-auto px-8 relative">

        <div
          className="flex items-center gap-3 mb-8"
          style={{
            opacity: 0,
            animation: "fadeUp 0.5s ease forwards 100ms",
          }}
        >
          <div className="w-8 h-px bg-gray-400" />
          <span
            className="text-xs font-medium tracking-[0.25em] text-gray-400 uppercase"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            Portfolio
          </span>
        </div>

        <h1
          className="text-5xl md:text-7xl font-bold text-gray-900 mb-4 leading-none"
          style={{
            letterSpacing: "-0.03em",
            opacity: 0,
            animation: "fadeUp 0.5s ease forwards 200ms",
          }}
        >
          Eranda
          <br />
          Jayawardena
        </h1>

        <p
          className="text-lg text-gray-400 mb-8 mt-4"
          style={{
            fontFamily: "'DM Mono', monospace",
            opacity: 0,
            animation: "fadeUp 0.5s ease forwards 300ms",
          }}
        >
          Software Developer
        </p>

        <div
          className="flex gap-2 mb-10 flex-wrap"
          style={{
            opacity: 0,
            animation: "fadeUp 0.5s ease forwards 400ms",
          }}
        >
          <Badge color="green">Java</Badge>
          <Badge color="green">JavaScript</Badge>
          <Badge color="green">SQL</Badge>
          <Badge color="purple">React</Badge>
          <Badge color="purple">Node.js</Badge>
          <Badge color="pink">Git</Badge>
        </div>

        <div
          className="flex gap-3 flex-wrap"
          style={{
            opacity: 0,
            animation: "fadeUp 0.5s ease forwards 500ms",
          }}
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-gray-900 text-white text-sm font-medium rounded-lg
                       hover:bg-gray-700 transition-all duration-300"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            View Projects ↓
          </a>
          <a
            href="/Eranda_Jayawardena_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg
                       hover:border-gray-500 hover:text-gray-900 transition-all duration-300"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            Download Resume ↗
          </a>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=DM+Mono:wght@400;500&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}