import { ExternalLink, Github } from "lucide-react";
import TechBadge from "./TechBadge";
import { Project } from "@/types";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6 flex flex-col gap-4 hover:border-zinc-700 transition-colors">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-semibold text-zinc-100">{project.title}</h3>
          <span className="text-xs text-zinc-500">{project.year}</span>
        </div>
        <div className="flex gap-3 shrink-0">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-zinc-200 transition-colors"
              aria-label="Backend repository"
            >
              <Github size={18} />
            </a>
          )}
          {project.repoUrlFe && (
            <a
              href={project.repoUrlFe}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-zinc-200 transition-colors"
              aria-label="Frontend repository"
            >
              <Github size={18} />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-zinc-200 transition-colors"
              aria-label="Live demo"
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>
      <p className="text-sm text-zinc-400 leading-relaxed text-justify">{project.description}</p>
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.techStack.map((tech) => (
          <TechBadge key={tech} label={tech} />
        ))}
      </div>
    </div>
  );
}
