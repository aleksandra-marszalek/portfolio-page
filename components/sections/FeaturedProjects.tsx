import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="projects">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Featured Projects</h2>
        <Link
          href="/projects"
          className="flex items-center gap-1 text-xs text-zinc-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
        >
          All projects <ArrowRight size={13} />
        </Link>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {featured.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
