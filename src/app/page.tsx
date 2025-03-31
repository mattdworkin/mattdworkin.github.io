import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 mb-16">
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Hi, I'm Matthew Dworkin
          </h1>
          <p className="text-lg mb-6 text-gray-600 dark:text-gray-300">
            Software developer passionate about functional programming and solving complex problems. 
            I specialize in OCaml, Python, and building elegant solutions with a focus on correctness, 
            performance, and maintainability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition"
            >
              View My Projects
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
            >
              Get In Touch
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full shadow-xl">
            {/* Replace with your actual image */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 animate-gradient-x flex items-center justify-center">
              <span className="text-6xl text-white">MD</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-white">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
            <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <span className="text-gray-500 dark:text-gray-400">Project Image</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Functional Data Processing Pipeline
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                A robust data processing system built with OCaml, leveraging functional programming 
                principles for reliability and concurrency.
              </p>
              <Link
                href="/projects/functional-pipeline"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Learn more →
              </Link>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
            <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <span className="text-gray-500 dark:text-gray-400">Project Image</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Financial Data Visualization
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Python-based tool for analyzing and visualizing financial market data with interactive 
                dashboards built using NumPy, Pandas, and visualization libraries.
              </p>
              <Link
                href="/projects/financial-data-viz"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Learn more →
              </Link>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
            <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <span className="text-gray-500 dark:text-gray-400">Project Image</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Open Source Contributions
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Collection of my contributions to open source projects, including algorithm optimizations, 
                documentation, and library improvements.
              </p>
              <Link
                href="/projects/open-source"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Learn more →
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/projects"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            View all projects →
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-white">
          Latest Blog Posts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
            <div className="p-6">
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">
                {new Date().toLocaleDateString()}
              </p>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Exploring Functional Programming in OCaml
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                A deep dive into OCaml's type system, pattern matching, and how functional programming 
                principles lead to more maintainable and reliable code.
              </p>
              <Link
                href="/blog/functional-ocaml"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Read more →
              </Link>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
            <div className="p-6">
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">
                {new Date().toLocaleDateString()}
              </p>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Data Analysis with Python: Best Practices
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Techniques for efficient data processing, visualization, and analysis using Python's 
                scientific computing ecosystem.
              </p>
              <Link
                href="/blog/python-data-analysis"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Read more →
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/blog"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            View all posts →
          </Link>
        </div>
      </section>
    </div>
  );
}
