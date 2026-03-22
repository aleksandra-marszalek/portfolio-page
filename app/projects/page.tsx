import type { Metadata } from "next";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";

export const metadata: Metadata = {
  title: "Projects",
  description: "A collection of things I've built.",
};

export default function ProjectsPage() {
  const sorted = [...projects].sort((a, b) => b.year - a.year);

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Projects</h1>
        <p className="text-zinc-600 dark:text-zinc-400 mt-2">A collection of things I&apos;ve built.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {sorted.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
