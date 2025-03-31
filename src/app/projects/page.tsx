import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Projects - Matthew Dworkin",
  description: "Explore Matthew Dworkin's projects focused on functional programming, OCaml, data analysis, and open source contributions.",
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
    id: "functional-pipeline",
    title: "Functional Data Processing Pipeline",
    description: "A robust data processing system built with OCaml that leverages functional programming principles for reliability and concurrency. Handles large volumes of financial market data with high throughput and low latency.",
    technologies: ["OCaml", "Async", "Core", "Jane Street Libraries", "Docker"],
    image: "/projects/functional-pipeline.jpg",
    codeUrl: "https://github.com/yourusername/functional-pipeline",
  },
  {
    id: "financial-data-viz",
    title: "Financial Data Visualization Tool",
    description: "Python-based system for analyzing and visualizing financial market data with interactive dashboards. Features statistical modeling capabilities for price prediction and anomaly detection.",
    technologies: ["Python", "NumPy", "Pandas", "Matplotlib", "Dash", "SciPy"],
    image: "/projects/financial-viz.jpg",
    demoUrl: "https://example.com/financial-viz-demo",
    codeUrl: "https://github.com/yourusername/financial-viz",
  },
  {
    id: "algo-trading-simulation",
    title: "Algorithmic Trading Simulator",
    description: "A backtesting framework for quantitative trading strategies that simulates market conditions and evaluates performance. Implemented using functional programming patterns for reliability and correctness.",
    technologies: ["OCaml", "Python", "Statistical Modeling", "Time Series Analysis"],
    image: "/projects/algo-trading.jpg",
    codeUrl: "https://github.com/yourusername/algo-trading-sim",
  },
  {
    id: "open-source-contributions",
    title: "Open Source Contributions",
    description: "Collection of my contributions to various open source projects, including performance optimizations for OCaml libraries, documentation improvements, and bug fixes.",
    technologies: ["OCaml", "Python", "Git", "Open Source"],
    image: "/projects/open-source.jpg",
    codeUrl: "https://github.com/yourusername",
  },
  {
    id: "type-safe-api",
    title: "Type-Safe API Framework",
    description: "A strongly-typed API framework that ensures correctness at compile time. Uses advanced type system features to prevent runtime errors and provides automatic documentation generation.",
    technologies: ["OCaml", "RESTful APIs", "JSON", "Type Systems"],
    image: "/projects/type-safe-api.jpg",
    demoUrl: "https://example.com/api-demo",
    codeUrl: "https://github.com/yourusername/type-safe-api",
  },
  {
    id: "data-analysis-toolkit",
    title: "Data Analysis Toolkit",
    description: "A collection of Python utilities for data cleaning, transformation, and analysis with a focus on performance and memory efficiency when working with large datasets.",
    technologies: ["Python", "NumPy", "Pandas", "SciPy", "Jupyter"],
    image: "/projects/data-toolkit.jpg",
    codeUrl: "https://github.com/yourusername/data-toolkit",
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
          A collection of my technical projects showcasing my experience with functional programming,
          OCaml, Python, and quantitative analysis. Each project reflects my passion for building
          reliable, efficient, and elegant solutions to complex problems.
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