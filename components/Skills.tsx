"use client";

import { skills } from "@/data/skills";
import { useEffect, useState } from "react";

export default function Skills() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setAnimate(true), 200);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      id="skills"
      className="py-24 relative overflow-hidden"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <div className="max-w-4xl mx-auto px-8 relative">
        {/* Header */}
        <div className="flex items-baseline gap-4 mb-16">
          <h2
            className="text-4xl font-bold tracking-tight text-gray-900"
            style={{ letterSpacing: "-0.02em" }}
          >
            Skills
          </h2>
        </div>

        <div className="space-y-0 divide-y divide-gray-100">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group py-6 flex items-center gap-8"
              style={{
                opacity: 0,
                animation: animate
                  ? `fadeUp 0.5s ease forwards ${index * 80}ms`
                  : "none",
              }}
            >

              <span
                className="w-6 text-xs text-gray-300 shrink-0 tabular-nums"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="w-36 shrink-0 font-medium text-gray-800 text-m tracking-wide">
                {skill.name}
              </span>

              <div className="flex-1 relative h-[3px] bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="absolute inset-y-0 left-0 rounded-full transition-all ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{
                    width: animate ? `${skill.level}%` : "0%",
                    transitionDuration: "1400ms",
                    transitionDelay: `${index * 80 + 200}ms`,
                    background:
                      "linear-gradient(90deg, #111 0%, #555 100%)",
                  }}
                />
              </div>

              <span
                className="w-10 text-right text-xs font-medium tabular-nums shrink-0 transition-colors duration-300 text-gray-400 group-hover:text-gray-700"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                {skill.level}
              </span>
            </div>
          ))}
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