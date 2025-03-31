"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function ResumePage() {
  const [activeTab, setActiveTab] = useState<"experience" | "education" | "skills">("experience");

  const handleDownload = () => {
    // In a real implementation, this would download a PDF file
    alert("Downloading resume...");
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900 dark:text-white">
            My Resume
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            My professional background, experience and skills
          </p>
        </div>
        <button
          onClick={handleDownload}
          className="mt-4 md:mt-0 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          Download PDF
        </button>
      </div>

      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
        <div className="p-6 md:p-8">
          {/* Resume Header */}
          <div className="border-b border-gray-200 dark:border-gray-700 pb-6 mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Matthew Dworkin</h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg mt-1">Software Developer</p>
            <div className="mt-4 flex flex-wrap gap-4">
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>matthew.dworkin@example.com</span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>(123) 456-7890</span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
                <a 
                  href="https://www.matthewdworkin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  www.matthewdworkin.com
                </a>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-gray-200 dark:border-gray-700 mb-6">
            <button
              className={`px-4 py-2 font-medium text-sm -mb-px ${
                activeTab === "experience"
                  ? "border-b-2 border-blue-500 text-blue-600 dark:text-blue-400"
                  : "text-gray-600 dark:text-gray-400"
              }`}
              onClick={() => setActiveTab("experience")}
            >
              Experience
            </button>
            <button
              className={`px-4 py-2 font-medium text-sm -mb-px ${
                activeTab === "education"
                  ? "border-b-2 border-blue-500 text-blue-600 dark:text-blue-400"
                  : "text-gray-600 dark:text-gray-400"
              }`}
              onClick={() => setActiveTab("education")}
            >
              Education
            </button>
            <button
              className={`px-4 py-2 font-medium text-sm -mb-px ${
                activeTab === "skills"
                  ? "border-b-2 border-blue-500 text-blue-600 dark:text-blue-400"
                  : "text-gray-600 dark:text-gray-400"
              }`}
              onClick={() => setActiveTab("skills")}
            >
              Skills
            </button>
          </div>

          {/* Experience Tab */}
          {activeTab === "experience" && (
            <div>
              <div className="mb-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Senior Software Developer
                  </h3>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">Jan 2020 - Present</div>
                </div>
                <div className="text-gray-800 dark:text-gray-200 font-medium">Company Name, Location</div>
                <ul className="mt-2 list-disc list-inside text-gray-600 dark:text-gray-300">
                  <li>Led development of key features for company's flagship product</li>
                  <li>Mentored junior developers and conducted code reviews</li>
                  <li>Implemented CI/CD pipelines that reduced deployment time by X%</li>
                  <li>Collaborated with product managers to define technical requirements and timelines</li>
                </ul>
              </div>

              <div className="mb-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Software Engineer
                  </h3>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">Jun 2017 - Dec 2019</div>
                </div>
                <div className="text-gray-800 dark:text-gray-200 font-medium">Previous Company, Location</div>
                <ul className="mt-2 list-disc list-inside text-gray-600 dark:text-gray-300">
                  <li>Developed and maintained client-facing web applications</li>
                  <li>Optimized database queries that improved application performance by X%</li>
                  <li>Participated in agile development practices including sprints and daily standups</li>
                </ul>
              </div>

              <div>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Junior Web Developer
                  </h3>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">Aug 2015 - May 2017</div>
                </div>
                <div className="text-gray-800 dark:text-gray-200 font-medium">First Company, Location</div>
                <ul className="mt-2 list-disc list-inside text-gray-600 dark:text-gray-300">
                  <li>Built responsive websites for various clients using modern front-end technologies</li>
                  <li>Assisted in the development of a company-wide design system</li>
                  <li>Integrated third-party APIs to enhance website functionality</li>
                </ul>
              </div>
            </div>
          )}

          {/* Education Tab */}
          {activeTab === "education" && (
            <div>
              <div className="mb-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Bachelor of Science in Computer Science
                  </h3>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">Graduated: May 2015</div>
                </div>
                <div className="text-gray-800 dark:text-gray-200 font-medium">University Name, Location</div>
                <div className="mt-2 text-gray-600 dark:text-gray-300">
                  <p>GPA: 3.8/4.0</p>
                  <p className="mt-1">Relevant coursework: Data Structures, Algorithms, Web Development, Database Systems, Software Engineering</p>
                </div>
              </div>

              <div>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Various Professional Certifications
                  </h3>
                </div>
                <ul className="mt-2 list-disc list-inside text-gray-600 dark:text-gray-300">
                  <li>AWS Certified Developer - Associate (2022)</li>
                  <li>Google Cloud Professional Developer (2021)</li>
                  <li>MongoDB Certified Developer (2020)</li>
                </ul>
              </div>
            </div>
          )}

          {/* Skills Tab */}
          {activeTab === "skills" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                  Programming Languages
                </h3>
                <div className="space-y-2">
                  {["JavaScript", "TypeScript", "Python", "Go", "SQL", "HTML/CSS"].map((skill) => (
                    <div key={skill} className="flex items-center">
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                        <div
                          className="bg-blue-600 h-2.5 rounded-full"
                          style={{ width: `${Math.floor(Math.random() * 40) + 60}%` }}
                        ></div>
                      </div>
                      <span className="ml-3 text-sm text-gray-600 dark:text-gray-300 min-w-[80px]">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                  Frameworks & Libraries
                </h3>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                  <li>React & React Native</li>
                  <li>Next.js</li>
                  <li>Node.js & Express</li>
                  <li>Django</li>
                  <li>Tailwind CSS</li>
                  <li>Redux</li>
                </ul>

                <h3 className="text-lg font-semibold mt-6 mb-3 text-gray-900 dark:text-white">
                  Tools & Technologies
                </h3>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                  <li>Git & GitHub</li>
                  <li>Docker & Kubernetes</li>
                  <li>AWS (EC2, S3, Lambda, etc.)</li>
                  <li>CI/CD (GitHub Actions, Jenkins)</li>
                  <li>GraphQL</li>
                  <li>MongoDB, PostgreSQL</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 