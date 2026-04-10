import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "word-of-the-day",
    title: "Word of the Day [LIVE]",
    description:
      "Full-stack (BE heavy) application built with Micronaut and modern Java. Released as an AWS Lambda with AWS API Gateway and EventBridge using Cron Scheduler for fetching the word. Full integration with AWS DynamoDB and Redis cache to provide a seamless user experience. With simple single page HTML + vanilla JS Frontend.",
    techStack: ["Java 21", "Micronaut", "DynamoDB", "Redis", "AWS", "Lambda", "HTML", "JavaScript", "Rest APIs"],
    repoUrl: "https://github.com/aleksandra-marszalek/word-of-the-day",
    repoUrlFe: "https://github.com/aleksandra-marszalek/word-of-the-day-frontend",
    liveUrl: "https://wotd.aleksandramarszalek.co.uk",
    featured: true,
    year: 2026,
  },
  {
    id: "todo-app",
    title: "TODO App [LIVE]",
    description:
      "Full-stack TODO application with a Spring Boot REST API and a React frontend. Features JWT authentication, role-based access control, and full CRUD operations. Includes 30+ tests with 80%+ code coverage using TestContainers, and comprehensive API documentation via Swagger/OpenAPI. The frontend is built with React and Tailwind CSS for a modern, responsive user experience.",
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
      "A Spring Boot REST API that suggests personalised recipes inspired by a randomly selected country, tailored to the user's pantry and dietary preferences. Built as a deep-dive into Java 21's Virtual Threads and concurrent programming patterns using CompletableFuture for parallel I/O operations. Integrates with Anthropic's Claude API for AI-powered recipe generation.",
    techStack: ["Spring Boot 3.2", "Java 21 Virtual Threads", "CompletableFuture", "JPA/Hibernate", "H2 Database", "Anthropic Claude API", "REST APIs"],
    repoUrl: "https://github.com/aleksandra-marszalek/world-kitchen",
    featured: false,
    year: 2026,
  },
  {
    id: "portfolio-page",
    title: "Portfolio Page [LIVE]",
    description:
      "Simple, clean portfolio built with Next.js 15, Tailwind CSS and MDX. Features an about section, project showcase, and a file-based blog. Deployed on Vercel with custom domain.",
    techStack: ["Next.js 15", "TypeScript", "Tailwind CSS", "MDX"],
    repoUrl: "https://github.com/aleksandra-marszalek/portfolio-page",
    liveUrl: "https://www.aleksandramarszalek.co.uk/",
    featured: false,
    year: 2026,
  }
];
