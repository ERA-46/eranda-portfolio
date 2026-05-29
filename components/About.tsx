"use client";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 relative overflow-hidden"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <div className="max-w-4xl mx-auto px-8 relative">
        <div className="flex items-baseline gap-4 mb-16">
          <h2
            className="text-4xl font-bold tracking-tight text-gray-900"
            style={{ letterSpacing: "-0.02em" }}
          >
            About Me
          </h2>
        </div>

        <div className="flex gap-16">
          <div className="hidden md:block w-px bg-gray-200 self-stretch shrink-0" />

          <div className="space-y-0 divide-y divide-gray-100 flex-1">
            {[
              {
                label: "Background",
                text: "Junior developer with a First-Class B.Sc. in Computer Science and a Post-Baccalaureate Diploma in Computer and Information Systems from Douglas College.",
              },
              {
                label: "Experience",
                text: "Experienced in building full-stack web applications using the MERN stack, Java, Spring Boot, and SQL. Comfortable working in Agile environments, collaborating in teams, and shipping projects independently.",
              },
              {
                label: "Goal",
                text: "Actively seeking a junior or entry-level developer role where I can contribute, keep growing, and deliver real value.",
              },
            ].map(({ label, text }, i) => (
              <div
                key={label}
                className="py-6 flex gap-8 items-start"
                style={{
                  opacity: 0,
                  animation: `fadeUp 0.5s ease forwards ${i * 100 + 100}ms`,
                }}
              >
                <span
                  className="shrink-0 w-24 text-xs text-gray-400 uppercase tracking-[0.15em] pt-1"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  {label}
                </span>
                <p className="text-gray-600 leading-relaxed text-sm flex-1">
                  {text}
                </p>
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