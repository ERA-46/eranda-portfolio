import { Project } from "@/data/projects";
import ImageModal from "./ImageModal";

type Props = {
  project: Project;
};

const techColors: Record<string, string> = {
  HTML: "bg-orange-200 text-orange-800",
  CSS: "bg-blue-200 text-blue-800",
  JavaScript: "bg-yellow-200 text-yellow-800",
  PHP: "bg-indigo-200 text-indigo-800",
  Bootstrap: "bg-purple-200 text-purple-800",
  PyTorch: "bg-red-200 text-red-800",
  Flask: "bg-gray-300 text-gray-800",
  MongoDB: "bg-green-200 text-green-800",
  Express: "bg-gray-200 text-gray-900",
  React: "bg-cyan-200 text-cyan-800",
  "Node.js": "bg-green-300 text-green-900",
  Java: "bg-red-200 text-red-900",
  QuickChart: "bg-pink-200 text-pink-800",
  NetBeans: "bg-blue-300 text-blue-900"
};

export default function ProjectCard({ project }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
      <ImageModal images={project.images} />

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
              className={`text-xs px-2 py-1 rounded ${
                techColors[tech] || "bg-gray-200 text-gray-700"
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
