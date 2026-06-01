"use client";

import { education } from "@/data/education";

export default function Education() {
  return (
    <section
      id="education"
      className="py-24 relative overflow-hidden"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >

      <div className="max-w-4xl mx-auto px-8 relative">
        <div className="flex items-baseline gap-4 mb-16">
          <h2
            className="text-4xl font-bold tracking-tight text-gray-900"
            style={{ letterSpacing: "-0.02em" }}
          >
            Education
          </h2>
        </div>

        <div className="flex gap-16">
          <div className="hidden md:block w-px bg-gray-200 self-stretch shrink-0" />
          <div className="flex-1 space-y-0 divide-y divide-gray-100">
            {education.map((item, index) => (
              <div
                key={item.college}
                className="py-8 flex flex-col sm:flex-row gap-6"
                style={{
                  opacity: 0,
                  animation: `fadeUp 0.5s ease forwards ${index * 100 + 100}ms`,
                }}
              >
                <div className="shrink-0 w-10 h-10 rounded-lg border border-gray-100 bg-white flex items-center justify-center p-1.5 self-start">
                  <img
                    src={item.logo}
                    alt={item.college}
                    className="w-full h-full object-contain"
                  />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
                    <h3 className="font-semibold text-gray-900 tracking-tight pr-2">
                      {item.degree}
                    </h3>
                    <span
                      className="text-xs text-gray-400 shrink-0"
                      style={{ fontFamily: "'DM Mono', monospace" }}
                    >
                      {item.years}
                    </span>
                  </div>

                  <p
                    className="text-xs uppercase tracking-[0.15em] text-gray-400 mb-3"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    {item.college}
                  </p>

                  <p className="text-sm text-gray-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
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