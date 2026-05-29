"use client";

import { Project } from "@/data/projects";
import ImageModal from "./ImageModal";

type Props = {
  project: Project;
  index: number;
};

const techColors: Record<string, { bg: string; text: string }> = {
  HTML:       { bg: "#FEF3C7", text: "#92400E" },
  CSS:        { bg: "#DBEAFE", text: "#1E40AF" },
  JavaScript: { bg: "#FEF9C3", text: "#854D0E" },
  PHP:        { bg: "#EDE9FE", text: "#4C1D95" },
  Bootstrap:  { bg: "#F3E8FF", text: "#6B21A8" },
  PyTorch:    { bg: "#FFE4E6", text: "#9F1239" },
  Flask:      { bg: "#F3F4F6", text: "#374151" },
  MongoDB:    { bg: "#DCFCE7", text: "#14532D" },
  Express:    { bg: "#F1F5F9", text: "#1E293B" },
  React:      { bg: "#CFFAFE", text: "#164E63" },
  "Node.js":  { bg: "#BBF7D0", text: "#14532D" },
  Java:       { bg: "#FFE4E6", text: "#7F1D1D" },
  QuickChart: { bg: "#FCE7F3", text: "#831843" },
  NetBeans:   { bg: "#BFDBFE", text: "#1E3A5F" },
};

export default function ProjectCard({ project, index }: Props) {
  return (
    <div
      className="group bg-white border border-gray-100 rounded-xl overflow-hidden flex flex-col
                 hover:border-gray-300 hover:shadow-sm transition-all duration-300"
      style={{
        opacity: 0,
        animation: `fadeUp 0.5s ease forwards ${index * 100 + 100}ms`,
      }}
    >
      {/* Image */}
      <div className="overflow-hidden">
        <div className="transition-transform duration-500 group-hover:scale-[1.02]">
          <ImageModal images={project.images} />
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        {/* Title */}
        <h3
          className="font-semibold text-gray-900 tracking-tight mb-2"
          style={{ letterSpacing: "-0.01em" }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-500 leading-relaxed mb-3">
          {project.description}
        </p>

        {/* Contribution */}
        {project.contribution && (
          <p
            className="text-xs text-gray-400 italic mb-3"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            {project.contribution}
          </p>
        )}

        {/* Tech badges */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.map((tech) => {
            const color = techColors[tech] ?? { bg: "#F3F4F6", text: "#374151" };
            return (
              <span
                key={tech}
                className="text-xs px-2 py-0.5 rounded-md font-medium"
                style={{
                  backgroundColor: color.bg,
                  color: color.text,
                  fontFamily: "'DM Mono', monospace",
                }}
              >
                {tech}
              </span>
            );
          })}
        </div>

        {/* Links */}
        {(project.githubUrl || project.liveUrl) && (
          <div className="flex gap-2 mt-auto pt-3 border-t border-gray-100">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center text-xs font-medium text-gray-500
                           border border-gray-200 hover:border-gray-400 hover:text-gray-800
                           transition-all duration-200 px-3 py-1.5 rounded-lg"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                GitHub ↗
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center text-xs font-medium
                           bg-gray-900 hover:bg-gray-700 text-white
                           transition-all duration-200 px-3 py-1.5 rounded-lg"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                Live demo ↗
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}