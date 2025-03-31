import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Projects - Matthew Dworkin",
  description: "Explore Matthew Dworkin's projects, applications, and software solutions.",
};

type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  demoUrl?: string;
  codeUrl?: string;
};

const projects: Project[] = [
  {
    id: "project-1",
    title: "E-commerce Platform",
    description: "A modern e-commerce platform built with Next.js and Stripe, featuring product management, cart functionality, and secure checkout.",
    technologies: ["Next.js", "React", "TypeScript", "Stripe", "Tailwind CSS"],
    image: "/projects/ecommerce.jpg",
    demoUrl: "https://example.com/demo1",
    codeUrl: "https://github.com/yourusername/project1",
  },
  {
    id: "project-2",
    title: "Task Management Dashboard",
    description: "A comprehensive task management application with real-time updates, team collaboration features, and performance analytics.",
    technologies: ["React", "Firebase", "Material UI", "Chart.js"],
    image: "/projects/dashboard.jpg",
    demoUrl: "https://example.com/demo2",
    codeUrl: "https://github.com/yourusername/project2",
  },
  {
    id: "project-3",
    title: "AI Content Generator",
    description: "An AI-powered application that generates high-quality content for blogs, social media, and marketing materials.",
    technologies: ["Python", "TensorFlow", "Flask", "React"],
    image: "/projects/ai-generator.jpg",
    demoUrl: "https://example.com/demo3",
  },
  {
    id: "project-4",
    title: "Real-time Chat Application",
    description: "A feature-rich chat application with private messaging, group channels, and media sharing capabilities.",
    technologies: ["Socket.io", "Node.js", "Express", "MongoDB", "React"],
    image: "/projects/chat-app.jpg",
    codeUrl: "https://github.com/yourusername/project4",
  },
  {
    id: "project-5",
    title: "Fitness Tracking App",
    description: "A mobile-friendly application for tracking workouts, nutrition, and health metrics with visual progress reports.",
    technologies: ["React Native", "Redux", "Firebase", "D3.js"],
    image: "/projects/fitness-app.jpg",
    demoUrl: "https://example.com/demo5",
    codeUrl: "https://github.com/yourusername/project5",
  },
  {
    id: "project-6",
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with Next.js and Tailwind CSS.",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
    image: "/projects/portfolio.jpg",
    codeUrl: "https://github.com/yourusername/portfolio",
  },
];

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          My Projects
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Explore a collection of my recent projects. Each project represents my passion for
          creating intuitive, scalable, and performant applications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              {/* Replace with actual images when available */}
              <span className="text-gray-500 dark:text-gray-400">Project Image</span>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {project.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="mb-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={`${project.id}-${tech}`}
                    className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-3">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Live Demo
                  </a>
                )}
                {project.codeUrl && (
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    View Code
                  </a>
                )}
                <Link
                  href={`/projects/${project.id}`}
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Details →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 