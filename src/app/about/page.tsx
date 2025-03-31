import React from "react";

export const metadata = {
  title: "About - Matthew Dworkin",
  description: "Learn more about Matthew Dworkin, his background, skills, and experience.",
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
              I'm Matthew Dworkin, a passionate software developer with a focus on creating
              efficient, scalable, and user-friendly applications. With over X years of experience
              in the industry, I've had the opportunity to work on diverse projects ranging from
              enterprise solutions to innovative startups.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              My approach to development combines technical expertise with creative problem-solving,
              ensuring that the solutions I build not only function flawlessly but also provide
              an excellent user experience.
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
            </div>
            {/* Add more education items as needed */}
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
              Professional Experience
            </h2>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-4 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                Senior Software Developer
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                Company Name, YYYY - Present
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                <li>Led development of key features for company's flagship product</li>
                <li>Mentored junior developers and conducted code reviews</li>
                <li>Implemented CI/CD pipelines that reduced deployment time by X%</li>
              </ul>
            </div>
            {/* Add more experience items as needed */}
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
                {["JavaScript", "TypeScript", "Python", "Go", "SQL"].map((skill) => (
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
                Frameworks & Libraries
              </h3>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "Node.js", "Express", "TailwindCSS", "Django"].map((skill) => (
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
                {["Git", "Docker", "AWS", "GitHub Actions", "GraphQL", "MongoDB"].map((skill) => (
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