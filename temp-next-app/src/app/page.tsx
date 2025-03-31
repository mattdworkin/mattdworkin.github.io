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
            I'm a software developer specializing in creating elegant solutions for complex problems.
            With expertise in modern web technologies, I build fast, accessible, and responsive applications.
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
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">Project Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  Project {i}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  A brief description of this amazing project and the technologies used.
                </p>
                <Link
                  href={`/projects/project-${i}`}
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Learn more →
                </Link>
              </div>
            </div>
          ))}
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
          {[1, 2].map((i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <div className="p-6">
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">
                  {new Date().toLocaleDateString()}
                </p>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  Blog Post Title {i}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  A brief summary of this insightful blog post that shares valuable knowledge.
                </p>
                <Link
                  href={`/blog/post-${i}`}
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Read more →
                </Link>
              </div>
            </div>
          ))}
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
