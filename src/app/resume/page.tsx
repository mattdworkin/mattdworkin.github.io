"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Download, Mail, MapPin, Phone } from "lucide-react"
import { MouseEvent, useEffect } from "react"

const experience = [
  {
    id: "l3harris-swe",
    company: "L3Harris Technologies",
    role: "Software Engineer Intern",
    location: "Palm Bay, FL: on-site",
    date: "May 2025 - August 2025",
    highlights: [
      "Built Python/Docker REST API simulator that scaled from 7-person team tool to testing framework used by 50+ engineers across Strategic Missions Division",
      "Early adopter of company's VSCode AI coding tool, documented use cases and limitations that informed deployment strategy for enterprise-wide rollout",
      "Fixed critical API bugs for production release, standardizing HTTP status codes and parameter handling for Jenkins CI/CD pipeline",
      "Designed backend validation utilities and internal automation scripts in Python to support mission-system testing workflows",
    ],
  },
  {
    id: "l3harris-fpga",
    company: "L3Harris Technologies",
    role: "FPGA Electrical Engineer Intern",
    location: "Palm Bay, FL: on-site",
    date: "May 2024 - August 2024",
    highlights: [
      "Designed I2C driver with control logic on PYNQ FPGA platform for ruggedized aerospace applications",
      "Authored 30+ AI/ML enhancement proposals for FPGA and business development workflows; tested AI prompt strategies for internal tools rolled out to 47,000+ employees",
      "Executed full FPGA development cycle from requirements to bitfile generation using Vivado and Questasim/Modelsim; delivered verified bit reverser design",
    ],
  },
  {
    id: "vecima-swe",
    company: "Vecima Networks Inc.",
    role: "Software Engineer Intern",
    location: "Duluth, GA: on-site",
    date: "May 2023 - August 2023",
    highlights: [
      "Built Bash-based I/O throttling tool using Linux cgroups for storage optimization suite, enabling realistic drive-performance simulation across VM and physical clusters for 250+ customers",
      "Developed Python multithreading utility that improved throughput of Linux diagnostic tools within storage testing framework",
      "Assembled and optimized server clusters in pre-production test lab; contributed to Python codebases via GitLab code reviews and Agile standups",
    ],
  },
]

const projects = [
  {
    name: "Ringil",
    link: "https://www.ringiltech.com/",
    date: "January 2026 - Present",
    highlights: [
      "Built a full-stack AI system Next.js 14, FastAPI and Supabase that converts unstructured proposal and specification documents into structured, queryable requirement and verification data",
      "Engineered LLM pipelines with schema-enforced outputs, deterministic retries, and validation guards for extraction reliability",
      "Implemented simulation pipelines using GHDL and Vivado to aggregate waveforms and coverage for decision-ready insights",
      "Developed persistent traceability linking requirements, generated code, and verification outcomes to support reproducible analysis",
      "Built data-dense React workflows for browsing requirement hierarchies, simulation artifacts, and verification results",
    ],
  },
  {
    name: "Poolerz",
    link: "https://github.com/tylerrcady/poolerz",
    date: "August 2024 - May 2025",
    highlights: [
      "Built full-stack carpool coordination platform using Next.js, React, TypeScript, and MongoDB",
      "Implemented Google OAuth authentication and DBSCAN clustering for automatic carpool matching",
      "Built multi-step registration, real-time roster updates, and calendar dashboard using Vercel serverless deployment",
      "Designed RESTful backend APIs and MongoDB data models supporting real-time coordination and scalable query performance",
    ],
  },
]

const skillGroups = [
  {
    title: "Languages",
    items: ["Python", "Java", "TypeScript/JavaScript", "VHDL/Verilog", "C", "SQL", "x86 Assembly"],
  },
  {
    title: "Backend & Systems",
    items: ["Node.js", "FastAPI", "Flask", "Docker", "Linux", "REST API design", "PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    title: "Frontend",
    items: ["React.js", "Next.js", "TailwindCSS", "HTML/CSS"],
  },
  {
    title: "AI & ML",
    items: ["LLM integration", "structured reasoning pipelines", "TensorFlow", "PyTorch", "scikit-learn"],
  },
  {
    title: "Tools",
    items: ["Git/GitHub", "Bitbucket", "Vivado", "Vercel", "JUnit", "LaTeX"],
  },
]

export default function ResumePage() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  const handlePointerMove = (event: MouseEvent<HTMLElement>) => {
    const element = event.currentTarget
    const rect = element.getBoundingClientRect()
    const x = ((event.clientX - rect.left) / rect.width) * 100
    const y = ((event.clientY - rect.top) / rect.height) * 100
    element.style.setProperty("--mx", `${x}%`)
    element.style.setProperty("--my", `${y}%`)
  }

  return (
    <div className="future-stream container mx-auto max-w-6xl px-4 py-10 md:py-14">
      <section className="cell-panel interactive-card p-6 md:p-10" onMouseMove={handlePointerMove} data-reveal>
        <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold uppercase tracking-[0.04em]">Matthew Dworkin</h1>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4" />
                Atlanta, GA
              </span>
              <a href="mailto:mdworkin3@gatech.edu" className="inline-flex items-center gap-1.5 hover:text-foreground">
                <Mail className="h-4 w-4" />
                mdworkin3@gatech.edu
              </a>
              <span className="inline-flex items-center gap-1.5">
                <Phone className="h-4 w-4" />
                (678) 599-1483
              </span>
              <a
                href="https://linkedin.com/in/matthew-dworkin"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground"
              >
                linkedin.com/in/matthew-dworkin
              </a>
              <a href="https://github.com/mattdworkin" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
                github.com/mattdworkin
              </a>
              <a href="https://matthewtdworkin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
                matthewtdworkin.com/
              </a>
            </div>
          </div>
          <a href="/Matthew%20Dworkin%27s%20Resume%20(6).pdf" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Open PDF
            </Button>
          </a>
        </div>
      </section>

      <section className="mt-10" data-reveal>
        <h2 className="text-2xl md:text-3xl font-semibold uppercase tracking-[0.03em] mb-5">Education</h2>
        <article className="cell-panel interactive-card p-6" onMouseMove={handlePointerMove}>
          <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
            <div>
              <h3 className="text-xl font-semibold">Georgia Institute of Technology: B.S. in Computer Science</h3>
              <p className="mt-2 text-sm text-muted-foreground">Information Internetworks and Artificial Intelligence</p>
            </div>
            <div className="text-sm text-muted-foreground">
              <p className="inline-flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                Atlanta, GA | August 2022 - May 2026
              </p>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Relevant Coursework: Machine Learning, Artificial Intelligence, Systems & Networks, Enterprise Computing,
            Database Systems, Computer Organization, Computer Networking, Data Structures & Algorithms, Automata &
            Complexity, Computer Vision, Linear Algebra, Probability & Statistics, Discrete Mathematics, Design &
            Analysis of Algorithms,
          </p>
        </article>
      </section>

      <section className="mt-10" data-reveal>
        <h2 className="text-2xl md:text-3xl font-semibold uppercase tracking-[0.03em] mb-5">Experience</h2>
        <div className="space-y-5">
          {experience.map((entry, index) => (
            <article
              key={entry.id}
              id={entry.id}
              className="cell-panel interactive-card p-6 scroll-mt-0"
              onMouseMove={handlePointerMove}
              data-reveal
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold">
                    {entry.company} - {entry.role}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground inline-flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  {entry.location} | {entry.date}
                </p>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {entry.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-2">
                    <span>•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10" data-reveal>
        <h2 className="text-2xl md:text-3xl font-semibold uppercase tracking-[0.03em] mb-5">Projects</h2>
        <div className="space-y-5">
          {projects.map((project, index) => (
            <article
              key={project.name}
              className="cell-panel interactive-card p-6"
              onMouseMove={handlePointerMove}
              data-reveal
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold">
                    {project.name} :{" "}
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                      [ {project.link} ]
                    </a>
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground inline-flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  {project.date}
                </p>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-2">
                    <span>•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10" data-reveal>
        <h2 className="text-2xl md:text-3xl font-semibold uppercase tracking-[0.03em] mb-5">Technical Skills</h2>
        <article className="cell-panel interactive-card p-6" onMouseMove={handlePointerMove}>
          <div className="space-y-4">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-semibold uppercase tracking-[0.09em] mb-2">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Badge key={item} variant="secondary">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </article>
      </section>
    </div>
  )
}
