import { Project } from "@/data/projects";
import Carousel from "./Carousel";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
      <Carousel images={project.images} />

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-700">
          {project.title}
        </h3>

        <p className="text-gray-600 mb-3 text-justify">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="text-xs bg-gray-200 px-2 py-1 rounded text-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>

        <p className="text-sm text-gray-700 mb-4 text-justify">
          <strong>My Contribution:</strong> {project.contribution}
        </p>

        <div className="flex gap-4">
          <a
            href={project.github}
            target="_blank"
            className="text-blue-600 font-medium"
          >
            GitHub
          </a>

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              className="text-blue-600 font-medium"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
