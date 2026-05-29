"use client";

import { Mail, Phone, Linkedin, Github } from "lucide-react";

const links = [
  {
    icon: Mail,
    label: "Email",
    value: "erandairushan98@gmail.com",
    href: "mailto:erandairushan98@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (236) 863-5178",
    href: "tel:+12368635178",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "eranda-jayawardena",
    href: "https://www.linkedin.com/in/eranda-jayawardena/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "ERA-46",
    href: "https://github.com/ERA-46",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <div className="max-w-4xl mx-auto px-8 relative">
        {/* Header */}
        <div className="flex items-baseline gap-4 mb-6">
          <h2
            className="text-4xl font-bold tracking-tight text-gray-900"
            style={{ letterSpacing: "-0.02em" }}
          >
            Contact Me
          </h2>
        </div>

        <p
          className="text-sm text-gray-400 mb-16 max-w-lg leading-relaxed"
          style={{ fontFamily: "'DM Mono', monospace" }}
        >
          Open to junior and entry-level developer roles. Have something in mind
          or just want to connect? My inbox is always open.
        </p>

        <div className="flex gap-16">
          <div className="hidden md:block w-px bg-gray-200 self-stretch shrink-0" />
          <div className="flex-1 divide-y divide-gray-100">
            {links.map(({ icon: Icon, label, value, href }, index) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-6 py-5 hover:pl-2 transition-all duration-300"
                style={{
                  opacity: 0,
                  animation: `fadeUp 0.5s ease forwards ${index * 100 + 100}ms`,
                }}
              >
                <Icon
                  size={16}
                  className="text-gray-300 group-hover:text-gray-900 transition-colors duration-300 shrink-0"
                />

                <div className="flex flex-1 items-baseline justify-between min-w-0 gap-4">
                  <span
                    className="text-xs uppercase tracking-[0.15em] text-gray-400 shrink-0"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    {label}
                  </span>
                  <span
                    className="text-sm text-gray-400 group-hover:text-gray-900 transition-colors duration-300 truncate text-right"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    {value} ↗
                  </span>
                </div>
              </a>
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