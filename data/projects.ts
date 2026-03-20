import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "todo-app",
    title: "TODO App",
    description:
      "Full-stack TODO application with a Spring Boot REST API and a React frontend. The backend features JWT authentication, role-based access control, and full CRUD operations — tested with TestContainers and documented via Swagger/OpenAPI. The frontend is built with React and Tailwind CSS.",
    techStack: ["Java 21", "Spring Boot 3.3.5", "MySQL 8", "Spring Security + JWT", "Swagger/OpenAPI 3.0", "TestContainers", "React", "TypeScript", "Tailwind CSS"],
    repoUrl: "https://github.com/aleksandra-marszalek/todo-app",
    repoUrlFe: "https://github.com/aleksandra-marszalek/todo-app-frontend",
    liveUrl: "https://todo-app-frontend-silk-one.vercel.app",
    featured: true,
    year: 2026,
  },
  {
    id: "world-kitchen-app",
    title: "World Kitchen App",
    description:
      "A Spring Boot REST API that suggests personalised recipes inspired by a randomly selected country, tailored to the user's pantry and dietary preferences. Built with Virtual Threads as a learning experience.",
    techStack: ["Spring Boot", "Java", "JPA", "H2", "Anthropic Claude API"],
    repoUrl: "https://github.com/aleksandra-marszalek/world-kitchen",
    featured: true,
    year: 2026,
  },
  {
    id: "portfolio-page",
    title: "Portfolio Page",
    description:
      "Simple portfolio built with Next.js 15, Tailwind CSS and MDX. Features an about section, project showcase, and a file-based blog.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "MDX"],
    repoUrl: "https://github.com/aleksandra-marszalek/portfolio-page",
    featured: false,
    year: 2026,
  }
];
