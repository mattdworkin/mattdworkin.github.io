import React from "react";

export const metadata = {
  title: "About - Matthew Dworkin",
  description: "Learn more about Matthew Dworkin, his background, skills, and experience in functional programming, OCaml, and Python.",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white">
        About Me
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
              Background
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              I'm Matthew Dworkin, a passionate software developer with a strong foundation in functional programming
              and a deep appreciation for elegant, well-designed systems. My journey in software development
              has been driven by the desire to solve complex problems using the right tools and paradigms for each task.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              My approach to development combines strong theoretical fundamentals with practical problem-solving skills.
              I strongly believe in the power of functional programming for building reliable, maintainable, and scalable software systems.
              This belief has led me to explore languages like OCaml, Haskell, and functional aspects of Python and JavaScript.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              I'm particularly interested in the intersection of functional programming with areas like quantitative finance,
              system design, and data analysis—domains where correctness, performance, and expressiveness are critical.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
              Education
            </h2>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-4 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                Bachelor of Science in Computer Science
              </h3>
              <p className="text-gray-600 dark:text-gray-300">University Name, Graduation Year</p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mt-2">
                <li>Advanced coursework in functional programming paradigms</li>
                <li>Research in algorithm optimization and computational complexity</li>
                <li>Mathematics focus: Linear Algebra, Statistics, and Discrete Mathematics</li>
              </ul>
            </div>
            {/* Add more education items as needed */}
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
              Professional Experience
            </h2>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-4 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                Software Developer
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                Company Name, YYYY - Present
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                <li>Developed data processing pipelines using functional programming techniques for improved reliability and testability</li>
                <li>Implemented Python-based data visualization and analysis tools for complex datasets</li>
                <li>Contributed to open-source libraries and tools that improved team productivity</li>
                <li>Collaborated closely with cross-functional teams to solve complex technical challenges</li>
              </ul>
            </div>
            {/* Add more experience items as needed */}
          </section>
          
          <section className="mt-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
              Open Source Contributions
            </h2>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                I'm an active contributor to the open-source community. I believe in the collaborative nature of 
                software development and the importance of giving back to the ecosystem of tools we all rely on.
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                <li>Contributed to [Library Name], a popular functional programming utility library</li>
                <li>Implemented performance improvements for [Project Name], reducing computation time by X%</li>
                <li>Authored documentation and tutorials to help others learn functional programming concepts</li>
              </ul>
            </div>
          </section>
        </div>
        
        <div className="md:col-span-1">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md sticky top-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
              Skills & Expertise
            </h2>
            
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-2 text-gray-700 dark:text-gray-200">
                Programming Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {["OCaml", "Python", "TypeScript", "Haskell", "JavaScript", "SQL"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-2 text-gray-700 dark:text-gray-200">
                Paradigms & Concepts
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Functional Programming", "Type Systems", "Algorithm Design", "Data Structures", "Concurrency", "Testing"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-2 text-gray-700 dark:text-gray-200">
                Libraries & Frameworks
              </h3>
              <div className="flex flex-wrap gap-2">
                {["React", "NumPy", "Pandas", "SciPy", "TensorFlow", "Next.js", "Django"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2 text-gray-700 dark:text-gray-200">
                Tools & Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Git", "Docker", "Linux", "AWS", "GitHub Actions", "Jupyter", "VSCode"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 